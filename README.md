# Playwright Automation Framework (BDD)

This repository contains a **Web Test Automation Framework** built using **Playwright** and **Cucumber (BDD)**.  
It uses the **Page Object Model (POM)** pattern and supports running end‑to‑end web tests with readable Gherkin feature files.

---

## 🧪 What This Project Does

This framework:
- Automates end‑to‑end tests for web applications using **Playwright**.
- Uses **Cucumber (Behavior Driven Development)** to write test logic in plain English.
- Organizes test workflows in **Gherkin feature files**.
- Implements **Page Object Model (POM)** for maintainability.
- Supports running tests by tags like `@Regression` and `@Validations`.
- Generates test reports (HTML / Cucumber / Allure as configured).

---

## 📁 Project Structure
├── features/ # .feature test scenarios
├── page-objects/ # Page Object Model classes
├── step_definitions/ # Step definition code linking feature steps
├── support/ # Hooks and World config for Cucumber
├── utils/ # Helpers
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md

