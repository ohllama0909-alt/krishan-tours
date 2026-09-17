import { chromium } from "playwright";
import fs from "node:fs/promises";

const routes = [
  "/", "/destinations", "/tours", "/experiences", "/plan-your-trip", "/about", "/stories", "/contact", "/privacy", "/terms",
  "/destinations/ella", "/destinations/sigiriya", "/destinations/kandy", "/destinations/galle", "/destinations/mirissa", "/destinations/yala", "/destinations/nuwara-eliya", "/destinations/trincomalee", "/destinations/arugam-bay", "/destinations/anuradhapura",
  "/tours/sri-lanka-essentials", "/tours/tea-trails-ancient-kingdoms", "/tours/wild-sri-lanka", "/tours/southern-coast-escape", "/tours/sri-lanka-honeymoon", "/tours/ultimate-island-journey",
  "/experiences/wildlife", "/experiences/beaches", "/experiences/culture-heritage", "/experiences/adventure", "/experiences/food", "/experiences/wellness", "/experiences/train-journeys", "/experiences/local-life",
  "/stories/sunrise-above-sigiriya", "/stories/riding-the-rails", "/stories/slow-morning-galle-fort", "/stories/elephants-udawalawe", "/stories/south-coast-surf", "/stories/sri-lankan-breakfast", "/definitely-not-a-page"
];
const sizes = [{name:"mobile",width:375,height:812},{name:"tablet",width:768,height:1024},{name:"desktop",width:1440,height:1000}];
await fs.mkdir(".qa",{recursive:true});
const browser=await chromium.launch({headless:true});
const issues=[];
for(const size of sizes){
  const context=await browser.newContext({viewport:{width:size.width,height:size.height},deviceScaleFactor:1,reducedMotion:"reduce"});
  const page=await context.newPage();
  page.on("console",msg=>{if(msg.type()==="error" && !page.url().includes("definitely-not-a-page"))issues.push(`${size.name} console ${page.url()}: ${msg.text()}`)});
  page.on("pageerror",err=>issues.push(`${size.name} pageerror ${page.url()}: ${err.message}`));
  for(const route of routes){
    const response=await page.goto(`http://127.0.0.1:3417${route}`,{waitUntil:"networkidle",timeout:30000});
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
    if(overflow>1) issues.push(`${size.name} overflow +${overflow}px ${route}`);
    if(!response || (response.status()>=400 && route!=="/definitely-not-a-page"))issues.push(`${size.name} HTTP ${response?.status()} ${route}`);
    if(["/","/plan-your-trip","/tours/sri-lanka-essentials","/destinations/ella"].includes(route))await page.screenshot({path:`.qa/${size.name}-${route.replaceAll("/","-")||"home"}.png`,fullPage:route!=="/tours/sri-lanka-essentials"});
  }
  await context.close();
}
await browser.close();
console.log(issues.length?issues.join("\n"):"QA_OK");
process.exitCode=issues.length?1:0;
