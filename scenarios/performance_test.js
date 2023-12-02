import http from 'k6/http';
import { check } from 'k6';
import { performanceAssertions } from '../assertions/performance_assertions.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';


export let options = {
  vus: 1000,
  iterations: 3500,
  thresholds: {
    'http_req_duration': ['p(95)<2000'],  // Batas waktu respons maksimum
  },
};

export default function () {
  // API Create Test
  let createResponse = http.post('https://reqres.in/api/users', {
    name: 'morpheus',
    job: 'leader',
  });
  performanceAssertions.create(createResponse);

  // API Update Test
  let updateResponse = http.put('https://reqres.in/api/users/2', {
    id: 2,
    name: 'morpheus',
    job: 'zion resident',
  });
  performanceAssertions.update(updateResponse);
}

export function handleSummary(data) {
    return {
      'reports/summary.html': htmlReport(data),
    };
}
