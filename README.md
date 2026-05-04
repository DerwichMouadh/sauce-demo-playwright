# 🧪 Sauce Demo Test Automation with Playwright & TypeScript

This project implements **End-to-End (E2E) and security automated tests** for the saucedemo.com website using Playwright and TypeScript.

It follows a modern QA automation architecture including:
- Playwright Test Framework
- TypeScript
- Actions Layer (business flows)
- Fixtures (test state management)
- CI/CD with GitHub Actions

---

## ⚙️ Installation & Setup

```bash
# Initialize Node.js project
npm init -y

# Install Playwright with TypeScript support
npm install -D @playwright/test
npx playwright install

# Initialize TypeScript
npm install typescript
npx tsc --init
````

---

## 🗂️ Project Structure

```bash id="structure_en"
/project-root
├── tests/
│   ├── ui/                                    # End-to-end UI functional tests
│   │   ├── auth/                              # Authentication scenarios
│   │   │   ├── login.test.ts                 # Valid login tests
│   │   │   ├── invalidCredentials.test.ts    # Invalid login tests
│   │   ├── cart/                             # Shopping cart scenarios
│   │   └── inventory/                        # Product inventory tests
│
├── tests/security/                           # Security test scenarios
│
├── actions/                                  # Business logic layer (actions)
│   ├── auth.actions.ts
│
├── helpers/                                  # Utility functions
│   ├── authHelper.ts
│
├── fixtures/                                 # Playwright fixtures (test setup)
│   ├── testFixtures.ts
│
├── data/                                     # Centralized test data
│   ├── users.ts
│
├── playwright.config.ts                      # Playwright configuration
├── tsconfig.json                             # TypeScript configuration
└── package.json                              # Dependencies and scripts
```

---

## 🚀 Running Tests

### Run all tests

```bash id="run_all_en"
npx playwright test
```

### Run a specific folder

```bash id="run_folder_en"
npx playwright test tests/ui/auth
```

### Run a single test file

```bash id="run_single_en"
npx playwright test tests/ui/cart/addToCart.test.ts
```

---

## 🔁 CI/CD with GitHub Actions

This project includes a CI/CD pipeline that:

* Triggers on push and pull requests to `main`
* Installs dependencies
* Installs Playwright browsers
* Runs tests in headless mode
* Uploads HTML test reports as artifacts

📁 Workflow file:

```bash id="ci_file_en"
.github/workflows/playwright.yml
```

---

## 📊 Test Reports

After execution, open the HTML report:

```bash id="report_en"
npx playwright show-report
```

---

## 🧠 Framework Architecture

This framework follows a modern layered architecture:

* **Tests** → Define WHAT to test
* **Actions** → Define HOW business flows work
* **Fixtures** → Manage test setup/state
* **Data** → Centralized test inputs

---

## 🌐 Application Under Test

[https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## 📚 References

[https://playwright.dev/](https://playwright.dev/)
[https://www.saucedemo.com/](https://www.saucedemo.com/)