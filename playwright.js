//Playwright 
// Playwright is an automation testing framework used for : Web testing, UI testing. Browser automation
// It supports : Chromium, Firefox, WebKit
// It uses languages like : JavaScript, TypeScript, Python, Java

// Important commands
// Initialization of Playwright : npm init playwright@latest
// Run all Tests : npx playwright test
// Run Specific Test File : npx playwright test techx.spec.js
//.spec.js indicates that the file is a test specification file.

// Basic Playwright Test Structure
// 1. Importing Playwright Functions 
// import { test, expect } from "@playwright/test";
// test → Used to create test cases
// expect → Used for validations/assertions

// 2. Creating Test Case
// test('check title', async ({ page }) => {
// });
// 'check title' → Test name
// async → Allows asynchronous operations
// page → Browser page object

// 3. Opening Website
// await page.goto("https://www.techxincorporation.com/");
// Opens the given URL in browser

// 4. Locator
// const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1);
// getByRole() → Finds element by role
// "link" → HTML link element
// { name: /Request/ } → Matches text using regex
// .nth(1) → Selects second matching element

// 5. Click Action
// await consultBtn.click();
// Clicks the selected button/link

// 6. Assertion / Validation
// expect(page.url()).toBe("https://www.techxincorporation.com/contact");
// Checks whether current URL matches expected URL