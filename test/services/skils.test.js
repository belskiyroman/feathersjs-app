const assert = require('assert');
const app = require('../../src/app');

describe('\'skils\' service', () => {
  it('registered the service', () => {
    const service = app.service('skils');

    assert.ok(service, 'Registered the service');
  });
});
