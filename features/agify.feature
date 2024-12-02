Feature: Test the Agify.io API

  Scenario: Fetch the guessed age for a given name
    Given the API endpoint is "https://api.agify.io"
    When I make a GET request with the name "billybob"
    Then the response should return a guessed age

  Scenario: Handle invalid parameters
    Given the API endpoint is "https://api.agify.io"
    When I make a GET request without a name
    Then the response should return an error

  Scenario: Validate response structure
    Given the API endpoint is "https://api.agify.io"
    When I make a GET request with the name "john"
    Then the response should contain "name", "age", and "count"
