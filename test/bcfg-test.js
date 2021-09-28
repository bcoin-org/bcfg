'use strict';

const assert = require('bsert');
const Config = require('../lib/config');

describe('bcfg', function() {
  it('should filter options', () => {
    const options = {
      testString: 'hello',
      childTestString: 'goodbye'
    };

    const parent = new Config('bcfg');
    parent.inject(options);
    parent.load(options);

    assert.strictEqual(parent.str('test-string'), 'hello');

    const child = parent.filter('child');

    assert.strictEqual(child.str('test-string'), 'goodbye');
  });

  it('should filter argv', () => {
    const parent = new Config('bcfg');

    // process.argv
    parent.parseArg([
      'node',
      'bcfg',
      '--test-string=hello',
      '--child-test-string=goodbye'
    ]);

    assert.strictEqual(parent.str('test-string'), 'hello');

    const child = parent.filter('child');

    assert.strictEqual(child.str('test-string'), 'goodbye');
  });
});
