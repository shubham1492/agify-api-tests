Agify API Tests
This project tests the Agify.io API using Cucumber, TypeScript, and Axios. It uses Behavior-Driven Development (BDD) to ensure the API behaves as expected, based on predefined scenarios.

Table of Contents
Project Overview
Setup Instructions
Folder Structure
Feature Scenarios
Running Tests
Generating Reports

Project Overview
The goal of this project is to validate the behavior of the Agify API using the following scenarios:

Fetching the guessed age for a given name.
Handling invalid parameters.
Validating the structure of the API response.
The project uses:

Cucumber for writing human-readable feature files.
TypeScript for implementing step definitions.
Axios for making HTTP requests.

Setup Instructions
Prerequisites
Ensure the following are installed:

Node.js (22)
npm (10)

Git
Steps
Clone the repository:

bash
Copy code
git clone <remote-repository-url>
cd agify-api-tests
Install dependencies:

bash
Copy code
npm install
Verify the setup:

bash
Copy code
npm test
Folder Structure
The project follows a standard Cucumber structure:

graphql
Copy code
agify-api-tests/
├── features/
│   ├── agify.feature          # Feature file with test scenarios
│   ├── step_definitions/      # Step definitions folder
│   │   └── agifySteps.ts      # Step definitions implementation
│   └── support/               # Support files for custom configurations
│       └── world.ts           # Custom world setup
├── node_modules/              # Installed dependencies
├── cucumber.json              # Cucumber configuration file
├── package.json               # Project metadata and scripts
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation
└── reports/                   # Test reports
    └── cucumber_report.json   # JSON test report (generated)

Feature Scenarios
The following scenarios are tested:

1. Fetch the guessed age for a given name
gherkin
Copy code
Scenario: Fetch the guessed age for a given name
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request with the name "billybob"
  Then the response should return a guessed age
2. Handle invalid parameters
gherkin
Copy code
Scenario: Handle invalid parameters
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request without a name
  Then the response should return an error
3. Validate response structure
gherkin
Copy code
Scenario: Validate response structure
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request with the name "john"
  Then the response should contain "name", "age", and "count"
Running Tests
To execute the tests, run:

bash
Copy code
npm test
The results will be displayed in the terminal.

Generating Reports
This project is configured to generate a JSON report after running the tests.

Find the Report:
Reports are saved in the reports/cucumber_report.json file.
Generate HTML Reports (Optional):
Use a library like cucumber-html-reporter to generate human-readable HTML reports.
Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/new-feature
Commit your changes:
bash
Copy code
git commit -m "Add new feature"
Push the branch:
bash
Copy code
git push origin feature/new-feature
Open a pull request.
