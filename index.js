const puppeteer = require('puppeteer');

const rocky = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);
  await page.screenshot({ path: 'example.png', fullPage: true });

  await browser.close();
}

rocky('https://www.bbc.com/portuguese');