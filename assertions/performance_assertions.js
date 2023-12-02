import { check } from 'k6';

export let performanceAssertions = {
  create: function (response) {
    check(response, {
      'Create API is successful': (res) => res.status === 201,
      'Create API response time is within limits': (res) => res.timings.duration < 2000,
    });
  },
  update: function (response) {
    check(response, {
      'Update API is successful': (res) => res.status === 200,
      'Update API response time is within limits': (res) => res.timings.duration < 2000,
    });
  },
};
