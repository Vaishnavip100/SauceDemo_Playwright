# SauceDemo Playwright Automation Framework

## 📌 Project Overview

This project is an end-to-end test automation framework developed using Playwright with TypeScript for testing the SauceDemo e-commerce application.

The framework follows the Page Object Model (POM) design pattern to provide clean, reusable, and maintainable automation code.

## 🛠️ Technologies Used

- Playwright
- TypeScript
- Node.js
- Playwright Test
- Page Object Model (POM)
- Git & GitHub

## 🌐 Application Under Test

SauceDemo: https://www.saucedemo.com/

## 📂 Project Structure

```text
SauceDemoP/
│
├── fixtures/
│   └── baseTest.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductListPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
|
├── test-results
│
├── tests/
│   ├── login.spec.ts
│   ├── product.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── utils/
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── package-lock.json

```
## 🧪 Test Scenarios

### 🔐 Login

- Verify successful login with standard user
- Verify login with invalid credentials
- Verify login with empty password

### 🛍️ Product Listing

- Verify products are displayed
- Verify products can be sorted by Name A-Z
- Verify products can be sorted by Price Low to High

### 🛒 Shopping Cart

- Verify cart badge count becomes 1 after adding one product
- Verify cart badge count becomes 2 after adding two products
- Verify product can be removed from cart
- Verify cart retains item after navigating back to product listing

### 💳 Checkout

- Verify checkout order summary
- Verify order confirmation message

### 📊 Test Reporting

Playwright's built-in HTML reporter is used to display test execution results.

The report provides:

Test name
Pass/Fail status
Execution time
Test details
Screenshots for failed tests
Video and trace information when available

### 📸 Screenshots

Playwright is configured to capture screenshots automatically when a test fails.
The screenshots and other test artifacts are stored in the test-results directory.

### 👩‍💻 Author

Vaishnavi Perumalla

### 📝 Conclusion

The project successfully automates key SauceDemo workflows using Playwright with TypeScript.
It provides a reusable and maintainable framework using Page Object Model, fixtures, and built-in reporting.
