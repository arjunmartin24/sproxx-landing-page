import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from "postprocessing";
import "./Hyperspeed.css";

const distortions = {
  low: 0.2,
  medium: 0.5,
  high: 0.8,
};

export default function Hyperspeed({ effectOptions = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
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

    // Get container dimensions
    const getDimensions = () => {
      // Try container first
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        return { width: container.clientWidth, height: container.clientHeight };
      }
      // Fallback to parent
      const parent = container.parentElement;
      if (parent && parent.clientWidth > 0 && parent.clientHeight > 0) {
        return { width: parent.clientWidth, height: parent.clientHeight };
      }
      // Final fallback to window
      return { width: window.innerWidth, height: window.innerHeight };
    };

    let { width, height } = getDimensions();
    // Ensure minimum dimensions
    if (width === 0) width = window.innerWidth;
    if (height === 0) height = window.innerHeight;

    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create hyperspeed tunnel effect
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    // Create tunnel with multiple rings
    const rings = 60;
    const pointsPerRing = Math.max(8, Math.floor(density / 4));

    for (let ring = 0; ring < rings; ring++) {
      const z = -ring * 0.4;
      const radius = 0.5 + ring * 0.12;
      
      for (let i = 0; i < pointsPerRing; i++) {
        const angle = (i / pointsPerRing) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        vertices.push(x, y, z);
        const alpha = 1 - (ring / rings) * 0.8;
        colors.push(color[0] * alpha, color[1] * alpha, color[2] * alpha);
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.0,
      vertexColors: true,
      transparent: true,
      opacity: intensity,
      sizeAttenuation: true,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Post-processing with v6 API
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloomEffect = new BloomEffect({
        intensity: 2.5,
        luminanceThreshold: 0.3,
      });
      composer.addPass(new EffectPass(camera, bloomEffect));
    } catch (e) {
      console.warn("Postprocessing error, using basic renderer", e);
      composer = null;
    }

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.z += 0.003 * speed;
        particles.position.z += 0.2 * speed;

        if (particles.position.z > 15) {
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
      const { width: newWidth, height: newHeight } = getDimensions();
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      if (composer) {
        composer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
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
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, [effectOptions]);

  return <div id="lights" ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
