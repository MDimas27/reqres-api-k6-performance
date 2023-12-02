import http from 'k6/http';
import { check } from 'k6';
import { integrationAssertions } from '../assertions/integration_assertions.js';

export let options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  // API Create Test
  let createResponse = http.post('https://reqres.in/api/users', {
    name: 'morpheus',
    job: 'leader',
  });
  integrationAssertions.create(createResponse);

  // API Update Test
  let updateResponse = http.put('https://reqres.in/api/users/2', {
    id: 2,
    name: 'morpheus',
    job: 'zion resident',
  });
  integrationAssertions.update(updateResponse);
}
