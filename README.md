Agify API Tests
This project tests the Agify.io API using Cucumber, TypeScript, and Axios. It uses Behavior-Driven Development (BDD) to ensure the API behaves as expected, based on predefined scenarios.

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

Node.js (v22.11.0)
npm (10.9.0)

Clone the repository:
git clone <remote-repository-url>
cd agify-api-tests
Install dependencies:npm install

Feature Scenarios
The following scenarios are tested:

1. Fetch the guessed age for a given name
Scenario: Fetch the guessed age for a given name
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request with the name "billybob"
  Then the response should return a guessed age

2. Handle invalid parameters
Scenario: Handle invalid parameters
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request without a name
  Then the response should return an error

3. Validate response structure
Scenario: Validate response structure
  Given the API endpoint is "https://api.agify.io"
  When I make a GET request with the name "john"
  Then the response should contain "name", "age", and "count"

Running Tests
To execute the tests, run: npm test

Generating Reports
This project is configured to generate a JSON report after running the tests.

Find the Report:
Reports are saved in the reports/cucumber_report.json file.
Generate HTML Reports (Optional):
Use a library like cucumber-html-reporter to generate human-readable HTML reports.
