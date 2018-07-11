const assert = require('assert');
const app = require('../../src/app');

describe('\'currencys\' service', () => {
  it('registered the service', () => {
    const service = app.service('currencys');

    assert.ok(service, 'Registered the service');
  });
});
