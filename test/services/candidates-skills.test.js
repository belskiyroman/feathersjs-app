const assert = require('assert');
const app = require('../../src/app');

describe('\'candidates-skills\' service', () => {
  it('registered the service', () => {
    const service = app.service('candidates-skills');

    assert.ok(service, 'Registered the service');
  });
});
