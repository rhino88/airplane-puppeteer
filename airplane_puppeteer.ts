import puppeteer from "puppeteer";

type Params = {};

// Put the main logic of the task in this function.
export default async function (params: Params) {
  console.log("parameters:", params);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://www.airplane.dev/`, {
    waitUntil: "networkidle2",
  });
  await browser.close();
  return [{ status: "success" }];
}
