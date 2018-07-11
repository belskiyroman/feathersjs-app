const assert = require('assert');
const app = require('../../src/app');

describe('\'relations_candidates_skils\' service', () => {
  it('registered the service', () => {
    const service = app.service('relations-candidates-skils');

    assert.ok(service, 'Registered the service');
  });
});
