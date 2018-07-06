const assert = require('assert');
const app = require('../../src/app');

describe('\'candidates_public_profiles\' service', () => {
  it('registered the service', () => {
    const service = app.service('candidates-public-profiles');

    assert.ok(service, 'Registered the service');
  });
});
