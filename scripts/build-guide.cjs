// Generate the downloadable guide from a fixed, paginated HTML layout.
// Usage: NODE_PATH=/path/to/node_modules node scripts/build-guide.cjs
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true, executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 const page=await browser.newPage();
 await page.goto('file://'+path.resolve(__dirname,'guide.html'));
 await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode())));
 await page.pdf({path:path.resolve(__dirname,'../assets/guiao-cartaz.pdf'),format:'A4',printBackground:true,preferCSSPageSize:true});
 await browser.close();
 console.log('Generated assets/guiao-cartaz.pdf');
})();
