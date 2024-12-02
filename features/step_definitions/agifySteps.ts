import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import axios, { AxiosResponse } from 'axios';

let endpoint: string;
let response: AxiosResponse;

// Step 1: Define the API endpoint
Given('the API endpoint is {string}', function (url: string) {
  endpoint = url;
});

// Step 2: Make a GET request with a name
When('I make a GET request with the name {string}', async function (name: string) {
  response = await axios.get(`${endpoint}?name=${name}`);
});

// Step 3: Make a GET request without a name
When('I make a GET request without a name', async function () {
  try {
    response = await axios.get(endpoint);
  } catch (err: any) {
    response = err.response;
  }
});

// Step 4: Validate guessed age response
Then('the response should return a guessed age', function () {
  expect(response.status).to.equal(200);
  expect(response.data).to.have.property('age');
  expect(response.data.age).to.be.a('number');
});

// Step 5: Validate error response
Then('the response should return an error', function () {
  expect(response.status).to.equal(400);
  expect(response.data).to.have.property('error');
});

// Step 6: Validate response structure
Then('the response should contain {string}, {string}, and {string}', function (nameKey: string, ageKey: string, countKey: string) {
  expect(response.status).to.equal(200);
  expect(response.data).to.have.all.keys(nameKey, ageKey, countKey);
});
