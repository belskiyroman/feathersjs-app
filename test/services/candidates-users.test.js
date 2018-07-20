const assert = require('assert');
const app = require('../../src/app');

describe('\'candidates-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('candidates-users');

    assert.ok(service, 'Registered the service');
  });
});
