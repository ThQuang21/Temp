# Playwright Test Automation Project

This is an automated test project using [Playwright](https://playwright.dev/), along with [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [Husky](https://typicode.github.io/husky/) for linting, code formatting, and Git hook management.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **[Node.js (v16 or higher)](https://nodejs.org/)**
- **[npm (comes with Node.js)](https://www.npmjs.com/)**  
  Check installed versions:
  ```bash
  node -v
  npm -v

## Getting Started

### Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/your-playwright-project.git
cd your-playwright-project
```

### Install Dependencies
This will install Playwright, ESLint, Prettier, Husky, and other project dependencies.
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Install Husky and Activate Git Hooks
```bash
npx husky install
```

### Run Tests
To run all Playwright tests:
```bash
npx playwright test
```

