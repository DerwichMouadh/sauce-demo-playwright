# 🧪 Sauce Demo Test Automation with Playwright & TypeScript

End-to-End (E2E) automated tests for [saucedemo.com](https://www.saucedemo.com/), plus a **playground** suite that practices Playwright features (dialogs, frames, uploads, form controls) on dedicated practice sites.

Built with:
- Playwright Test Framework
- TypeScript
- Actions layer (business flows)
- Fixtures (test state management)
- Tag-based suites (`@smoke`, `@regression`, `@playground`)
- CI/CD with GitHub Actions (smoke + scheduled regression)

---

## ⚙️ Installation & Setup

```bash
git clone <repo-url>
cd sauce-demo-playwright
npm ci
npx playwright install
```

---

## 🗂️ Project Structure

```bash
/project-root
├── tests/
│   ├── ui/                          # Sauce Demo functional tests
│   │   ├── auth/                    # login, invalid credentials, empty fields, logout
│   │   ├── cart/                    # add/remove items, multiple items, counter, continue shopping
│   │   ├── inventory/               # page load, product list, images, sorting, item details
│   │   └── interactions/            # hover, double click, right click, keyboard, scroll
│   │
│   ├── playground/                  # Playwright feature practice (external practice sites)
│   │   ├── upload/                  # single, multiple, clear and dynamic file upload
│   │   ├── dialogs/                 # alert, confirm (accept/dismiss), prompt
│   │   ├── frames/                  # basic frame, iframe form, multiple frames
│   │   ├── input-fields/            # text input fields
│   │   ├── buttons/                 # button interactions
│   │   └── radio-checkbox/          # radio buttons and checkboxes
│   │
│   ├── fixtures/
│   │   └── testFixtures.ts         # Custom fixtures (authActions, cartActions, inventoryActions, loggedInPage)
│   └── data/
│       └── users.ts                # Centralized test users
│
├── actions/                         # Business logic layer, centralized locators
│   ├── auth.actions.ts
│   ├── cart.actions.ts
│   └── inventory.actions.ts
│
├── resources/                       # Files used by upload tests (sample.txt, sample2.txt)
├── .github/workflows/
│   ├── playwright-smoke.yml         # Smoke suite CI
│   └── playwright-regression.yml    # Regression suite CI (weekly + manual)
├── playwright.config.ts             # Playwright configuration (chromium, firefox, webkit)
├── tsconfig.json                    # TypeScript configuration (Node.js types)
└── package.json                     # Dependencies and scripts
```

---

## 🏷️ Test Tags

| Tag           | Purpose                                              |
|---------------|------------------------------------------------------|
| `@smoke`      | Fast critical-path checks                            |
| `@regression` | Full Sauce Demo functional coverage                  |
| `@playground` | Feature practice on external sites (not Sauce Demo)  |

---

## 🚀 Running Tests

```bash
# All tests
npm test

# Smoke suite
npm run smoke

# Regression suite
npm run regression

# Playground suite
npx playwright test --grep "@playground"

# A specific folder
npx playwright test tests/ui/auth
npx playwright test tests/playground/dialogs

# A single file
npx playwright test tests/ui/auth/login.test.ts

# A single browser
npx playwright test --project=chromium

# Headed / debug
npx playwright test --headed
npx playwright test --debug
```

---

## 🔁 CI/CD with GitHub Actions

| Workflow                     | Runs                          | Command              |
|------------------------------|-------------------------------|----------------------|
| `playwright-smoke.yml`       | Push / pull requests          | `npm run smoke`      |
| `playwright-regression.yml`  | Every Monday at 2 AM + manual | `npm run regression` |

Each workflow installs dependencies (`npm ci`), installs Playwright browsers, runs its suite headless and uploads the HTML report as an artifact (`smoke-report` / `regression-report`).

---

## 📊 Test Reports

```bash
npx playwright show-report
```

---

## 🧠 Framework Architecture

* **Tests** → Define WHAT to test
* **Actions** → Define HOW business flows work (locators live here)
* **Fixtures** → Provide ready-to-use actions and a logged-in page
* **Data** → Centralized test inputs

---

## 🌐 Applications Under Test

* Sauce Demo: [https://www.saucedemo.com/](https://www.saucedemo.com/)
* Playground:
  * [https://the-internet.herokuapp.com/upload](https://the-internet.herokuapp.com/upload)
  * [https://testautomationpractice.blogspot.com/](https://testautomationpractice.blogspot.com/)
  * [https://qaplayground.com/practice/radio-checkbox](https://qaplayground.com/practice/radio-checkbox)

---

## 📚 References

* [https://playwright.dev/](https://playwright.dev/)
