const assert = require('assert');
const app = require('../../src/app');

describe('\'candidates\' service', () => {
  it('registered the service', () => {
    const service = app.service('candidates');

    assert.ok(service, 'Registered the service');
  });
});
