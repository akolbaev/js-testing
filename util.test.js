const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

//unit test for function generateText()
test("should output name and age", () => {
  const text = generateText("Kira", 2);
  expect(text).toBe("Kira (2 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

//integration test
test("should generate valid text output", () => {
  const text = checkAndGenerate("Leo", 5);
  expect(text).toBe("Leo (5 years old)");
});

//e2e testing
test("should enter name, age and submit", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 30,
  });
  try {
    const page = await browser.newPage();
    await page.goto(
      "file:///Users/aza.kolbaev/Documents/totti/nu/js-testing/index.html"
    );
    await page.click("input#name");
    await page.type("input#name", "LEO");
    await page.click("input#age", "4");
    await page.type("input#age", "5");
    await page.click("#btnAddUser");
    const userInput = await page.$eval(".user-item", (el) => el.textContent);
    expect(userInput).toBe("LEO (5 years old)");

    await browser.close();
    browser.disconnect();
  } catch (error) {
    await browser.close();
    browser.disconnect();
    throw error;
  }
}, 10000);
