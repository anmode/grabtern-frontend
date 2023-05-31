<h1 align="center"> Grabtern Frontend</h1>
This is the frontend repository for Grabtern, a web application built with Next.js.
<br>


<div align="center">
 <p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![GitHub forks](https://img.shields.io/github/forks/anmode/grabtern-frontend?style=flat&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/anmode/grabtern-frontend?style=flat&logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/anmode/grabtern-frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/anmode/grabtern-frontend)
![GitHub repo size](https://img.shields.io/github/repo-size/anmode/grabtern-frontend)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
![GitHub issues](https://img.shields.io/github/issues/anmode/grabtern-frontend)
![GitHub closed issues](https://img.shields.io/github/issues-closed/anmode/grabtern-frontend)
![GitHub pull requests](https://img.shields.io/github/issues-pr/anmode/grabtern-frontend)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/anmode/grabtern-frontend)
 </p>
 </div>
 <br>

## Getting Started

To get started with Grabtern Frontend, you'll need to install Node.js and npm on your machine. Then, you can clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/grabtern-frontend.git
cd grabtern-frontend
npm install

```

Once you've installed the dependencies, you can start the development server with:

```bash
npm run dev

```

This will start the development server on http://localhost:3000/.

## 🧰 Tech Stack Used 
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">   <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">   <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">   <img src="https://img.shields.io/badge/GitHub%20CI/CD-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white">

## 🧪 Prettier lint test and How to fix it?
Prettier is a code formatter that helps maintain consistent code style and formatting in your projects. It automatically analyzes your code and applies predefined formatting rules to ensure a standardized appearance.

Linting is the process of analyzing code for potential errors, bugs, and code style violations. It helps identify and highlight problematic code patterns, potential bugs, and adherence to coding standards.

<b>"Prettier lint test" </b> refers to running a linter (such as ESLint) with the Prettier plugin or rules enabled. It means checking your code for both linting errors and code formatting inconsistencies according to Prettier's rules.

To fix Prettier linting issues, you can follow these steps:

1) Install necessary tools: Ensure that you have the required tools installed in your project. You'll need ESLint and Prettier, along with any additional plugins or configurations specific to your project or coding environment.
```bash
npm install eslint prettier --save-dev
```
2) Configure ESLint: Set up your ESLint configuration file (.eslintrc.js or .eslintrc.json) to include Prettier rules and the Prettier plugin. This allows ESLint to use Prettier's formatting rules for linting.
```bash
module.exports = {
  // Other ESLint rules and configurations
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
};
```
Make sure the Prettier plugin is included in the extends array.

3) Configure Prettier: Create a Prettier configuration file (.prettierrc or prettier.config.js) in the root of your project. Define your preferred formatting rules and options for Prettier.
``` bash
module.exports = {
  // Prettier options
};
```
Customize the Prettier options according to your desired code formatting style.
4)  Run ESLint with Prettier: Execute the ESLint command to lint your code and fix any issues related to code formatting according to Prettier's rules.
```bash
npx eslint --fix .
```
The --fix flag automatically fixes fixable issues, including formatting inconsistencies


## Contributing

If you'd like to contribute to Grabtern Frontend, you can fork this repository and create a feature or bug fix branch. Once you've made your changes, submit a pull request to the main repository.

## ✨ Thank You for Your Contribution!
<a href="https://github.com/anmode/grabtern-frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=anmode/grabtern-frontend" />
</a>


## License

This project is licensed under the MIT License - see the LICENSE file for details.
[MIT](https://choosealicense.com/licenses/mit/)

## Code of Conduct

To maintain a safe and inclusive space for everyone to learn and grow, contributors are advised to follow the Code of Conduct.

## Author
[Anmol Agrawal](https://github.com/anmode)

<h3 align="center">Show some ❤️ by 🌟 this awesome repository!</h3>

