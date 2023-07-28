# How to contribute?

**1.** Fork [this](https://github.com/anmode/grabtern-frontend) repository. [Click on "this" button]

**2.** Clone your forked copy of the project.

```bash
git clone https://github.com/<your_name>/grabtern-frontend
```

**3.** Navigate to the project directory :file_folder: .

```
cd grabtern-frontend
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/anmode/grabtern-frontend
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.

**15** Hurra! You have made a PR . Sit back patiently and relax while your PR is reviewed.

## Reporting Bugs and Issues

If you encounter a bug or issue while using this project, we encourage you to report it. When reporting bugs, please provide as much information as possible, including:

- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Any relevant error messages or screenshots

To report a bug or issue, please follow these steps:

1. Go to the [Issues](https://github.com/anmode/grabtern-frontend/issues) section of the repository.
2. Click on the "New Issue" button.
3. Fill in the necessary details, following the provided template.

## Suggesting New Features or Improvements

If you have an idea for a new feature or an improvement to an existing feature, we would love to hear from you! To suggest a new feature, please follow these steps:

1. Go to the [Issues](https://github.com/anmode/grabtern-frontend/issues) section of the repository.
2. Click on the "New Issue" button.
3. Fill in the necessary details, following the provided template.

## Code Formatting and Style Guidelines

Consistent code formatting and style are important for maintaining a clean and readable codebase. Please adhere to the following guidelines when submitting code changes:

- Use spaces for indentation (4 spaces per level).
- Follow the established naming conventions for variables, functions, and classes.
- Write clear and concise comments to explain complex code sections.

## Submitting Pull Requests

We welcome contributions through pull requests (PRs). To submit a PR, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your changes.
3. Make the necessary code changes in your branch.
4. Test your changes thoroughly.
5. Submit a pull request, explaining the purpose and details of your changes.
6. Be open to feedback and actively participate in the review process.

## Communication

Effective communication is essential for maintaining a collaborative and inclusive environment. When participating in discussions, please:

- Be respectful and considerate towards others.
- Provide constructive feedback and suggestions.
- Clearly express your thoughts and ideas.
- Be open to different perspectives and opinions.

### Commit Message Guidelines using Commitlint

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

### Examples:

#### Valid Commit Messages:

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: Format code according to project guidelines`
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to latest versions`
- `fix: Handle edge case in data processing (#456)`

#### Invalid Commit Messages:

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

### Commit Example with Commitlint:

```bash
git commit -m "feat(auth): Implement user signup process (#789)"
```

By following these guidelines, we can maintain a clean commit history that is easy to understand and helps us effectively track changes. If you have any questions or need further assistance, feel free to ask! Happy contributing!

By following these guidelines, we aim to create a welcoming community where everyone feels comfortable and empowered to contribute.

Thank you for your interest and support!
