const assert = require('assert');
const app = require('../../src/app');

describe('\'interaction_types\' service', () => {
  it('registered the service', () => {
    const service = app.service('interaction-types');

    assert.ok(service, 'Registered the service');
  });
});
