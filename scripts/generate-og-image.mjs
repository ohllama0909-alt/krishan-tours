import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

async function generateOgImage() {
  const bgBuffer = await fs.readFile(path.join(process.cwd(), "public/images/pidurangala-sigiriya.webp"));
  const bgBase64 = `data:image/webp;base64,${bgBuffer.toString("base64")}`;

  const iconBuffer = await fs.readFile(path.join(process.cwd(), "public/icon.png"));
  const iconBase64 = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #11251c;
      font-family: 'Manrope', -apple-system, sans-serif;
      position: relative;
    }
    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 38%;
      filter: brightness(0.92) contrast(1.05);
    }
    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, 
        rgba(10, 24, 18, 0.97) 0%, 
        rgba(10, 24, 18, 0.92) 42%, 
        rgba(10, 24, 18, 0.65) 68%, 
        rgba(10, 24, 18, 0.25) 100%
      );
    }
    .bottom-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(10, 24, 18, 0.95) 0%, rgba(10, 24, 18, 0.4) 40%, transparent 70%);
    }
    .card-border {
      position: absolute;
      inset: 24px;
      border: 1px solid rgba(214, 170, 75, 0.35);
      border-radius: 12px;
      pointer-events: none;
    }
    .card-border::after {
      content: '';
      position: absolute;
      inset: 4px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
    }
    .container {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      padding: 60px 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .logo-box {
      width: 60px;
      height: 60px;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 0 2px rgba(214, 170, 75, 0.4);
      background: #17382b;
    }
    .logo-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .brand-text {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 3.5px;
      color: #f4f0e7;
      text-transform: uppercase;
      line-height: 1.1;
    }
    .brand-sub {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 4px;
      color: #d6aa4b;
      text-transform: uppercase;
      margin-top: 3px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(214, 170, 75, 0.15);
      border: 1px solid rgba(214, 170, 75, 0.45);
      padding: 6px 14px;
      border-radius: 20px;
      color: #f3dfa2;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      margin-bottom: 18px;
      width: fit-content;
    }
    .badge-star {
      color: #ffd166;
      font-size: 15px;
    }
    .main-content {
      max-width: 780px;
      margin-top: auto;
      margin-bottom: auto;
      padding-top: 15px;
    }
    .headline {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 58px;
      line-height: 1.05;
      font-weight: 600;
      color: #ffffff;
      text-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
    }
    .headline em {
      font-style: italic;
      color: #e5be6b;
      font-weight: 600;
    }
    .tagline {
      font-size: 19px;
      line-height: 1.5;
      color: rgba(244, 240, 231, 0.88);
      margin-top: 16px;
      font-weight: 400;
      max-width: 700px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 22px;
      margin-top: 15px;
    }
    .features {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 14px;
      color: rgba(244, 240, 231, 0.85);
      font-weight: 500;
    }
    .features span {
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .features .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #d6aa4b;
    }
    .site-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #d6aa4b;
      color: #11251c;
      font-weight: 700;
      font-size: 15px;
      padding: 9px 20px;
      border-radius: 8px;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 14px rgba(214, 170, 75, 0.35);
    }
  </style>
</head>
<body>
  <img class="bg-img" src="${bgBase64}" alt="Sri Lanka">
  <div class="gradient-overlay"></div>
  <div class="bottom-gradient"></div>
  <div class="card-border"></div>
  <div class="container">
    <div class="header">
      <div class="logo-box">
        <img src="${iconBase64}" alt="Krishan Tours Logo">
      </div>
      <div class="brand-text">
        <div class="brand-title">Krishan Tours</div>
        <div class="brand-sub">Sri Lanka Private Journeys</div>
      </div>
    </div>
    
    <div class="main-content">
      <div class="badge">
        <span class="badge-star">★ 5.0</span>
        <span>Trusted Local Driver-Guide • Panadura</span>
      </div>
      <h1 class="headline">
        Private Sri Lanka Tours &amp; <em>Bespoke Itineraries</em>
      </h1>
      <p class="tagline">
        Handcrafted journeys with dedicated local driver-guides. Ancient kingdoms, emerald tea hills, wild safaris, and secluded golden beaches.
      </p>
    </div>

    <div class="footer">
      <div class="features">
        <span><span class="dot"></span> 100% Tailor-Made</span>
        <span><span class="dot"></span> Modern Air-Con Vehicle</span>
        <span><span class="dot"></span> Flexible Pace</span>
      </div>
      <div class="site-pill">
        krishantours.com ↗
      </div>
    </div>
  </div>
</body>
</html>`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1
  });

  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const pngPath = path.join(process.cwd(), "public/images/og-image.png");
  const jpgPath = path.join(process.cwd(), "public/images/og-image.jpg");

  await page.screenshot({ path: pngPath, type: "png" });
  await page.screenshot({ path: jpgPath, type: "jpeg", quality: 88 });

  await browser.close();
  console.log("Generated og-image.png and og-image.jpg successfully");

  const statJpg = await fs.stat(jpgPath);
  const statPng = await fs.stat(pngPath);
  console.log(`JPEG Size: ${(statJpg.size / 1024).toFixed(1)} KB`);
  console.log(`PNG Size: ${(statPng.size / 1024).toFixed(1)} KB`);
}

generateOgImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
