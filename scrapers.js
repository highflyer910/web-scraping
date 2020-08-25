const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="coverImage"]');
    const src = await el.getProperty('src');
    const imgUrl = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="bookTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="bookAuthors"]');
    const txt2 = await el3.getProperty('textContent');
    const writer = await txt2.jsonValue();


    console.log({ imgUrl, title, writer });

    browser.close();

}
scrapeProduct("https://www.goodreads.com/book/show/26828169-the-neapolitan-novels");
