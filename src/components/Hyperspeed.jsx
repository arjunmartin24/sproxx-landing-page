import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, RenderPass, BloomEffect } from "postprocessing";
import "./Hyperspeed.css";

const distortions = {
  low: 0.2,
  medium: 0.5,
  high: 0.8,
};

export default function Hyperspeed({ effectOptions = {} }) {
  const containerRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("lights");
    if (!container) {
      return;
    }

    let scene, camera, renderer, composer;
    let animationId;
    let particles;
    const speed = effectOptions.speed || 0.5;
    const density = effectOptions.density || 100;
    const distortionValue = effectOptions.distortion;
    const distortion = distortionValue && distortions[distortionValue] 
      ? distortions[distortionValue] 
      : (distortionValue || 0.3);
    const color = effectOptions.color || [0.2, 0.6, 1.0];
    const intensity = effectOptions.intensity || 0.8;

    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create tunnel effect
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < density; i++) {
      const angle = (i / density) * Math.PI * 2;
      const radius = 2 + (i / density) * 10;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = -i * 0.5;

      vertices.push(x, y, z);
      colors.push(color[0], color[1], color[2]);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: intensity,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Post-processing
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloomEffect = new BloomEffect({
        intensity: 1.5,
        luminanceThreshold: 0.5,
      });
      composer.addEffect(bloomEffect);
    } catch (e) {
      console.warn("Postprocessing not available, using basic renderer");
      composer = null;
    }

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.z += 0.001 * speed;
        particles.position.z += 0.1 * speed;

        if (particles.position.z > 5) {
          particles.position.z = 0;
        }
      }

      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      if (composer) {
        composer.setSize(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Store cleanup function
    const dispose = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
      if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
      }
      if (composer && composer.dispose) {
        composer.dispose();
      }
      if (renderer) {
        renderer.dispose();
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      }
    };

    appRef.current = { dispose };

    return () => {
      if (appRef.current && appRef.current.dispose) {
        appRef.current.dispose();
      }
    };
  }, [effectOptions]);

  return <div id="lights" ref={containerRef} />;
}

