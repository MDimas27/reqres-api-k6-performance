import { check } from 'k6';

export let integrationAssertions = {
  create: function (response) {
    check(response, {
      'Create API is successful': (res) => res.status === 201,
    });
  },
  update: function (response) {
    check(response, {
      'Update API is successful': (res) => res.status === 200,
    });
  },
};
