import { useEffect } from "react";

export default function GridAccess() {
  // Your GROK-generated HTML will be inserted here as a template literal
  // IMPORTANT: Paste your full HTML code between the backticks below
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cancún 2025 • Dark Edition</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #0b0e17;
      --surface: #12151f;
      --surface2: #1a1e2c;
      --text: #e2e8f0;
      --text-muted: #94a3b8;
      --turquoise: #0d9488;
      --turquoise-light: #0ffcfc;
      --gold: #f4d03f;
      --card-shadow: 0 10px 30px rgba(0,0,0,0.6);
      --glow: 0 0 20px rgba(13,148,136,0.4);
    }
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.7;
      background-image:
        radial-gradient(circle at 10% 20%, rgba(13,148,136,0.15) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(244,208,63,0.1) 0%, transparent 20%);
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

    /* Hero */
    .hero {
      height: 100vh;
      min-height: 600px;
      background: linear-gradient(rgba(11,14,23,0.92), rgba(11,14,23,0.97)),
                  url('https://images.unsplash.com/photo-1544550581-83b1a0c2e6a6?q=80&w=2070&auto=format') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .hero h1 {
      font-size: 5.5rem;
      font-weight: 800;
      background: linear-gradient(90deg, var(--turquoise-light), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 30px rgba(13,148,136,0.5);
    }
    .hero p { font-size: 1.7rem; opacity: 0.9; }

    /* Navbar */
    nav {
      position: sticky;
      top: 0;
      backdrop-filter: blur(12px);
      background: rgba(18,21,31,0.95);
      border-bottom: 1px solid rgba(13,148,136,0.3);
      z-index: 1000;
      padding: 1.2rem 0;
    }
    nav ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      list-style: none;
    }
    nav a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      padding: 0.6rem 1.4rem;
      border-radius: 50px;
      transition: all 0.3s ease;
    }
    nav a:hover {
      color: var(--gold);
      background: rgba(244,208,63,0.15);
      box-shadow: 0 0 20px rgba(244,208,63,0.3);
    }

    section { padding: 100px 0; }
    h2 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3.5rem;
      background: linear-gradient(90deg, var(--turquoise), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }

    /* Cards & Grid */
    .cards, .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .card, .grid-item {
      background: rgba(26,30,44,0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(13,148,136,0.2);
      border-radius: 20px;
      box-shadow: var(--card-shadow);
      transition: all 0.4s ease;
      padding: 2rem;
    }
    .card:hover, .grid-item:hover {
      transform: translateY(-12px);
      box-shadow: var(--glow), var(--card-shadow);
      border-color: var(--turquoise);
    }
    .card h3 { color: var(--gold); margin-bottom: 1rem; text-align: center; }
    .grid-item img { width: 100%; height: 180px; object-fit: cover; border-radius: 16px 16px 0 0; }
    .grid-item h4 { background: var(--turquoise); color: white; margin: 0; padding: 1.2rem; text-align: center; border-radius: 0 0 16px 16px; }

    /* Timeline */
    .timeline {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
    }
    .timeline::before {
      content: '';
      position: absolute;
      width: 4px;
      background: linear-gradient(to bottom, var(--turquoise), var(--gold));
      top: 0; bottom: 0; left: 50%;
      margin-left: -2px;
      box-shadow: 0 0 15px rgba(13,148,136,0.6);
    }
    .day {
      padding: 2.5rem 0;
      position: relative;
      width: 50%;
    }
    .day:nth-child(odd) { left: 0; padding-right: 60px; text-align: right; }
    .day:nth-child(even) { left: 50%; padding-left: 60px; }
    .day-content {
      background: var(--surface2);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid rgba(13,148,136,0.3);
      box-shadow: var(--card-shadow);
      transition: all 0.4s;
    }
    .day-content:hover { border-color: var(--turquoise); box-shadow: var(--glow); }
    .day-content::before {
      content: '';
      position: absolute;
      width: 24px; height: 24px;
      background: var(--gold);
      border: 4px solid var(--bg);
      border-radius: 50%;
      top: 32px;
      box-shadow: 0 0 20px var(--gold);
    }
    .day:nth-child(odd) .day-content::before { right: -68px; }
    .day:nth-child(even) .day-content::before { left: -68px; }
    .day-content h3 { color: var(--turquoise-light); margin-bottom: 1rem; }

    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--surface2);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--card-shadow);
    }
    th { background: var(--turquoise); color: white; padding: 1.2rem; }
    td { padding: 1.2rem; border-bottom: 1px solid rgba(148,163,184,0.1); color: var(--text-muted); }
    tr:hover td { background: rgba(13,148,136,0.15); color: white; }

    footer {
      background: linear-gradient(90deg, var(--turquoise), #0d9488ee);
      color: white;
      text-align: center;
      padding: 4rem 0;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .hero h1 { font-size: 3.5rem; }
      .day { width: 100% !important; left: 0 !important; padding: 2rem 0 2rem 50px !important; text-align: left !important; }
      .timeline::before { left: 20px; }
      .day-content::before { left: -48px !important; right: auto !important; }
    }
  </style>
</head>
<body>

  <header class="hero">
    <div class="container">
      <h1>Cancún 2025</h1>
      <p>December 23 – 29 </p>
      <p>christmas 2025 is going to be just FINE</p>
    </div>
  </header>

  <nav>
    <div class="container">
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#itinerary">Itinerary</a></li>
        <li><a href="#hotel">Hotel</a></li>
        <li><a href="#flights">Flights</a></li>
        <li><a href="#budget">Budget</a></li>
        <li><a href="#nightlife">Nightlife</a></li>
      </ul>
    </div>
  </nav>

  <!-- OVERVIEW -->
  <section id="overview">
    <div class="container">
      <h2>Trip Overview</h2>
      <div class="cards">
        <div class="card"><h3>Destination</h3><p>Cancún, Quintana Roo, Mexico</p></div>
        <div class="card"><h3>Dates</h3><p>Dec 23 – Dec 29, 2025<br>6 nights / 7 days</p></div>
        <div class="card"><h3>Hotel</h3><p>Krystal Urban Cancún & Beach Club</p></div>
        <div class="card"><h3>Travelers</h3><p>Arjun (Toronto)<br>Jawahar (Virginia)</p></div>
      </div>
    </div>
  </section>

  <!-- YOUR FULL DETAILED ITINERARY -->
  <section id="itinerary">
    <div class="container">
      <h2>7-Day Cancún Itinerary • Dec 23 – 29, 2025</h2>
      <div class="timeline">
        <!-- Day 1 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 1 – Tue, Dec 23 • Arrival & Downtown Vibes</h3>
            <p>
              Airplane <strong>Arjun arrives: 10:50 AM</strong> (Air Canada AC1810)<br>
              Airplane <strong>Jawahar arrives: 1:23 PM</strong> (AA1265)<br><br>
              <strong>11:30 AM – 2:00 PM</strong> • Transfer to downtown (taxi or ADO bus)<br>
              <strong>3:00 PM</strong> • Check-in at Krystal Urban Cancún<br>
              <strong>4:00 – 6:00 PM</strong> • Lunch at <strong>La Parrilla</strong> (Av. Yaxchilán)<br>
              <strong>6:30 – 9:00 PM</strong> • Walk <strong>Parque Las Palapas</strong> (street food, music)<br>
              <strong>10:00 PM</strong> • OXXO run + rooftop chill at hotel
            </p>
          </div>
        </div>
        <!-- Day 2 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 2 – Wed, Dec 24 • Hotel Zone & Christmas Eve</h3>
            <p>
              <strong>9:00 – 10:30 AM</strong> • Breakfast at <strong>100% Natural</strong><br>
              <strong>11:00 AM – 3:00 PM</strong> • <strong>Playa Delfines</strong> (turquoise water + Cancun sign)<br>
              <strong>3:30 – 6:00 PM</strong> • Explore <strong>La Isla Shopping Village</strong><br>
              <strong>6:30 – 8:30 PM</strong> • Sunset drinks at <strong>Mandala Beach Club</strong><br>
              <strong>10:00 PM – Late</strong> • Christmas Eve: <strong>The City</strong> or <strong>Dady’O</strong>
            </p>
          </div>
        </div>
        <!-- Day 3 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 3 – Thu, Dec 25 • Christmas Day → Coco Bongo Night</h3>
            <p>
              <strong>11:00 AM – 2:00 PM</strong> • Brunch at <strong>Crab House</strong> / <strong>Peter’s Restaurante</strong><br>
              <strong>2:30 – 6:00 PM</strong> • <strong>Playa Tortugas</strong> (optional jet-ski / parasailing)<br>
              <strong>8:00 PM – 4:00 AM</strong> • <strong>Coco Bongo Christmas Night</strong><br>
              → Acrobats, laser shows, open bar, confetti storms
            </p>
          </div>
        </div>
        <!-- Day 4 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 4 – Fri, Dec 26 • Recovery + Playa del Carmen Trip</h3>
            <p>
              <strong>11:00 AM</strong> • Sleep & recover<br>
              <strong>1:00 – 2:30 PM</strong> • Early lunch downtown Cancún<br>
              <strong>3:00 – 10:00 PM</strong> • <strong>Playa del Carmen Day Trip</strong><br>
              – 3:00 PM: ADO bus to Playa (1 hr)<br>
              – 4:30 – 7:30 PM: Walk <strong>Quinta Avenida</strong> (shops + performers)<br>
              – 7:30 – 9:30 PM: Dinner at <strong>La Bodeguita del Medio</strong> / <strong>Almirante Pech</strong><br>
              – 10:00 PM: Bus back (or optional club in Playa)
            </p>
          </div>
        </div>
        <!-- Day 5 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 5 – Sat, Dec 27 • Isla Mujeres Adventure</h3>
            <p>
              <strong>8:00 AM</strong> • Breakfast + taxi to <strong>Puerto Juárez</strong><br>
              <strong>9:00 AM</strong> • Ferry to Isla Mujeres (20 min)<br>
              <strong>10:00 AM – 1:30 PM</strong> • <strong>Playa Norte</strong> (top beach in Mexico)<br>
              <strong>1:30 – 5:00 PM</strong> • Golf cart island loop:<br>
              – Punta Sur (cliffs & sculpture park)<br>
              – Tortugranja (sea turtles)<br>
              – Lunch at <strong>Rubens Grill</strong> or <strong>Limon</strong><br>
              <strong>6:00 PM</strong> • Ferry back<br>
              <strong>8:00 PM</strong> • Chill rooftop night at hotel
            </p>
          </div>
        </div>
        <!-- Day 6 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 6 – Sun, Dec 28 • Free Day + Final Party</h3>
            <p>
              <strong>10:00 AM – 3:00 PM</strong> • <strong>Playa Marlín / Playa Ballenas</strong> (final beach shoot)<br>
              <strong>3:30 – 6:00 PM</strong> • <strong>Mercado 28</strong> (souvenirs, silver, vanilla)<br>
              <strong>7:00 – 9:00 PM</strong> • Sunset dinner at <strong>Surfin’ Burrito</strong> or <strong>Hooters</strong><br>
              <strong>11:00 PM – Late</strong> • Final party night:<br>
              – <strong>Mandala</strong><br>
              – <strong>La Vaquita</strong><br>
              – <strong>Congo Bar</strong>
            </p>
          </div>
        </div>
        <!-- Day 7 -->
        <div class="day">
          <div class="day-content">
            <h3>Day 7 – Mon, Dec 29 • Checkout & Flights</h3>
            <p>
              <strong>9:00 – 11:00 AM</strong> • Final breakfast + pool time<br>
              <strong>11:00 AM</strong> • Checkout (luggage storage available)<br>
              <strong>12:30 PM</strong> • Taxi to airport<br><br>
              Airplane <strong>Jawahar departs: 5:08 PM</strong> (AA1192)<br>
              Airplane <strong>Arjun departs: 10:10 PM</strong> (Air Canada AC1813)<br><br>
              Trip complete — unforgettable week
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOTEL -->
  <section id="hotel">
    <div class="container">
      <h2>Krystal Urban Cancún & Beach Club</h2>
      <div class="card" style="max-width:900px;margin:0 auto;text-align:left;">
        <p><strong>Check-in:</strong> Dec 23 (3 PM) • <strong>Check-out:</strong> Dec 29 (12 PM)<br>
           <strong>Room:</strong> 2 Double Beds • 6 nights • Fully prepaid<br>
           <strong>Total paid:</strong> CA$1,125.84 (~CA$562 each)<br>
           <strong>Confirmation:</strong> [Booking details on file]</p>
      </div>
    </div>
  </section>

  <!-- FLIGHTS -->
<!-- FLIGHTS – FULLY DETAILED & DARK THEMED -->
<section id="flights">
  <div class="container">
    <h2>Flights</h2>

    <!-- ARJUN – Air Canada -->
    <div class="card" style="max-width:950px;margin:2rem auto;padding:2rem;">
      <h3 style="color:var(--gold);text-align:center;margin-bottom:1.5rem;font-size:1.6rem;">
        Arjun – Toronto (YYZ) ⇄ Cancún (CUN) • Air Canada
      </h3>
      <table style="margin-bottom:1.5rem;">
        <thead><tr><th colspan="4" style="background:var(--turquoise);text-align:center;">Outbound – Tue, Dec 23, 2025</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>AC1810</strong></td>
            <td>YYZ Terminal 1 → CUN Terminal 4</td>
            <td><strong>6:30 AM → 10:50 AM</strong></td>
            <td>4h 20m • Economy (S)</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead><tr><th colspan="4" style="background:var(--gold);color:#000;text-align:center;">Return – Mon, Dec 29, 2025</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>AC1813</strong></td>
            <td>CUN Terminal 4 → YYZ Terminal 1</td>
            <td><strong>10:10 PM → 2:05 AM (+1)</strong></td>
            <td>3h 55m • Economy (L)</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;text-align:center;">
        <strong>Confirmation:</strong> [On file]<br>
        <strong>Total paid:</strong> <strong style="color:var(--gold);">CA$1,216.63</strong>
      </p>
    </div>

    <!-- JAWAHAR – American Airlines -->
    <div class="card" style="max-width:950px;margin:2rem auto;padding:2rem;">
      <h3 style="color:var(--gold);text-align:center;margin-bottom:1.5rem;font-size:1.6rem;">
        Jawahar – Lynchburg (LYH) ⇄ Cancún (CUN) • American Airlines
      </h3>
      <table style="margin-bottom:1rem;">
        <thead><tr><th colspan="5" style="background:var(--turquoise);text-align:center;">Outbound – Tue, Dec 23, 2025</th></tr></thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>AA5975</strong> (operated by Piedmont)</td>
            <td>LYH → CLT</td>
            <td>6:13 AM → 7:50 AM</td>
            <td>1h 37m • Seat 04C</td>
          </tr>
          <tr style="background:rgba(13,148,136,0.2);">
            <td colspan="5" style="text-align:center;">Layover Charlotte: 2h 27m</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>AA1265</strong></td>
            <td>CLT → CUN Terminal 3</td>
            <td>10:17 AM → 1:23 PM</td>
            <td>3h 6m • <strong>Business Class • Seat 04F</strong></td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead><tr><th colspan="5" style="background:var(--gold);color:#000;text-align:center;">Return – Mon, Dec 29, 2025</th></tr></thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>AA1192</strong></td>
            <td>CUN Terminal 3 → CLT</td>
            <td>5:08 PM → 8:10 PM</td>
            <td>3h 2m • Seat 27A</td>
          </tr>
          <tr style="background:rgba(13,148,136,0.2);">
            <td colspan="5" style="text-align:center;">Layover Charlotte: 2h 30m</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>AA5926</strong> (operated by American Eagle)</td>
            <td>CLT → LYH</td>
            <td>10:40 PM → 11:55 PM</td>
            <td>1h 15m • Seat 11C</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:1rem;text-align:center;">
        <strong>Confirmations:</strong> [On file]<br>
        <strong>Total paid:</strong> <strong style="color:var(--gold);">US$1,133.42</strong>
      </p>
    </div>

    <div class="card" style="max-width:800px;margin:3rem auto;padding:1.5rem;text-align:center;background:rgba(244,208,63,0.15);border:2px solid var(--gold);">
      <p style="font-size:1.2rem;margin:0;">
dae JAWACAR!!- MAKE SURE YOU TAKE YOUR PASSPORT AND VISA !! ROCK AND ROLL BUDDY!!!
      </p>
    </div>
  </div>
</section>
  </section>

  <!-- BUDGET -->
  <section id="budget">
    <div class="container">
      <h2>Budgetra Mapla!</h2>
      <table style="max-width:800px;margin:0 auto;">
        <tr><th>Item</th><th>Arjun (CAD)</th><th>Jawahar (USD)</th></tr>
        <tr><td>Hotel (split)</td><td>~562</td><td>~410</td></tr>
        <tr><td>Flights</td><td>~1,200</td><td>1,133</td></tr>
        <tr><td>Food/Drinks/Activities</td><td>~600–900</td><td>~500–800</td></tr>
        <tr style="background:var(--turquoise);color:white;"><td><strong>Total est.</strong></td><td><strong>~2,400–2,700</strong></td><td><strong>~1,600–2,000</strong></td></tr>
      </table>
    </div>
  </section>

  <!-- NIGHTLIFE -->
  <section id="nightlife">
    <div class="container">
      <h2>Nightlife Spots</h2>
      <div class="grid">
        <div class="grid-item"><img src="https://images.unsplash.com/photo-1566411524161-f89612ac1796?q=80&w=987" alt="Coco Bongo"><h4>Coco Bongo</h4></div>
        <div class="grid-item"><img src="https://images.unsplash.com/photo-1514528258098-2eda7af0c2e9?q=80&w=987" alt="Mandala"><h4>Mandala</h4></div>
        <div class="grid-item"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=987" alt="La Vaquita"><h4>La Vaquita</h4></div>
        <div class="grid-item"><img src="https://images.unsplash.com/photo-1578323164257-5c61b52a1fe8?q=80&w=987" alt="Señor Frogs"><h4>Señor Frog’s</h4></div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>Cancún 2025 • Arjun & Jawahar • The trip of a lifetime</p>
    </div>
  </footer>

</body>
</html>
  `;

  useEffect(() => {
    // Prevent Tailwind from interfering with the HTML styles
    // You can add any necessary script execution here if needed
    
    // Disable Tailwind reset for this component's content
    const container = document.querySelector('.grid-access-wrapper');
    if (container) {
      // Ensure the container is isolated from Tailwind's base styles
      container.classList.add('all-initial');
    }
  }, []);

  return (
    <div 
      className="grid-access-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "auto",
        position: "relative"
      }}
    >
      {/* Isolated wrapper to prevent Tailwind interference */}
      {/* The HTML content will render with its own styles intact */}
      <div 
        className="grid-access-wrapper"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          width: "100%",
          minHeight: "100vh"
        }}
      />
    </div>
  );
}

