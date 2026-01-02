# Playwright TypeScript Test Automation Examples

## About

Playwright test automation examples using TypeScript with Page Object Model (POM) design pattern and custom fixtures.

**Application Under Test:** [The Internet - Herokuapp](https://the-internet.herokuapp.com)

## 🎯 Features

- ✅ **Page Object Model (POM)** - Clean separation of test logic and page interactions
- ✅ **Custom Fixtures** - Reusable page object fixtures for cleaner test code
- ✅ **TypeScript** - Type-safe test automation
- ✅ **Multi-Browser Testing** - Chromium, Firefox, and WebKit support
- ✅ **HTML Reports** - Built-in test reporting with Playwright

## 📋 Test Coverage

The project includes automated tests for the following scenarios:

| Test Suite              | Description                                         |
| ----------------------- | --------------------------------------------------- |
| **A/B Testing**         | Validates A/B test variations and content           |
| **Add/Remove Elements** | Tests dynamic element addition and removal          |
| **Checkboxes**          | Verifies checkbox interactions and state management |
| **Context Menu**        | Tests right-click context menu functionality        |
| **Dropdown**            | Validates dropdown selection and options            |
| **File Download**       | Tests file download functionality                   |
| **File Upload**         | Verifies file upload with validation                |
| **Hovers**              | Tests hover interactions and tooltip displays       |
| **Key Presses**         | Validates keyboard input handling                   |

## 🛠️ Tech Stack

- **Playwright** - ^1.53.0
- **TypeScript** - Latest
- **Node.js** - v16+ recommended
- **dotenv** - Environment configuration

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd playwright-ts-tests-examples
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Create a `.env` file in the root directory:

```bash
BASE_URL=https://the-internet.herokuapp.com
```

## 🚀 Running Tests

### Run all tests (headless mode)

```bash
npm test
```

### Run tests with visible browser

```bash
npm run test:headed
```

### Run tests in UI mode (interactive)

```bash
npm run test:ui
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run tests on specific browser

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### View test report

```bash
npm run report
```

## 📁 Project Structure

```
playwright-ts-tests-examples/
├── pages/                      # Page Object Models
│   ├── base-page.ts           # Base page class with common methods
│   ├── main-page.ts           # Main/home page object
│   ├── ab-testing-page.ts     # A/B testing page object
│   ├── checkboxes-page.ts     # Checkboxes page object
│   ├── dropdown-page.ts       # Dropdown page object
│   ├── file-upload-page.ts    # File upload page object
│   └── ...                    # Other page objects
├── tests/                      # Test specifications
│   ├── ab-testing.spec.ts     # A/B testing tests
│   ├── checkboxes.spec.ts     # Checkbox tests
│   ├── dropdown.spec.ts       # Dropdown tests
│   ├── file-upload.spec.ts    # File upload tests
│   └── ...                    # Other test files
├── test-data/                  # Test data files
│   └── file-to-upload.txt     # Sample file for upload tests
├── fixture-pages.ts            # Custom Playwright fixtures
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies
└── .env                       # Environment variables (gitignored)
```

## 🏗️ Architecture

### Page Object Model (POM)

Each page is represented by a class that extends `BasePage`:

```typescript
export class CheckboxesPage extends BasePage {
  readonly pageHeader: Locator;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeader = this.page.locator("h3");
    this.firstCheckbox = this.page.locator("#checkboxes input").nth(0);
    this.secondCheckbox = this.page.locator("#checkboxes input").nth(1);
  }
}
```

### Custom Fixtures

Page objects are injected as fixtures for cleaner test code:

```typescript
test("Verify checkbox interactions", async ({ checkboxesPage }) => {
  await checkboxesPage.firstCheckbox.check();
  await expect(checkboxesPage.firstCheckbox).toBeChecked();
});
```

### Base Page

Common functionality is abstracted in the `BasePage` class:

```typescript
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string) {
    await this.page.goto(path.startsWith("/") ? path : `/${path}`);
  }
}
```

## ⚙️ Configuration

### Playwright Configuration

The `playwright.config.ts` includes:

- Multi-browser support (Chromium, Firefox, WebKit)
- Parallel test execution
- Retry logic for CI environments
- HTML reporter
- Trace on first retry

### Environment Variables

Create a `.env` file with:

```
BASE_URL=https://the-internet.herokuapp.com
```

## 📊 Test Reports

After running tests, view the HTML report:

```bash
npm run report
```

Reports include:

- Test execution summary
- Pass/fail status
- Execution time
- Screenshots on failure
- Trace files for debugging

## 📝 Best Practices

- ✅ Use Page Object Model for maintainability
- ✅ Keep tests independent and isolated
- ✅ Use meaningful test and variable names
- ✅ Add comments for complex logic
- ✅ Use custom fixtures for reusability
- ✅ Follow TypeScript best practices
- ✅ Keep locators in page objects, not in tests

## 📄 License

MIT

---

**Happy Testing! 🎭**
