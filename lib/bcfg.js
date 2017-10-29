/*!
 * bcfg.js - configuration parsing for bcoin
 * Copyright (c) 2016-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

const Config = require('./config');

function bcfg(module, options) {
  return new Config(module, options);
}

bcfg.config = bcfg;
bcfg.Config = Config;

module.exports = bcfg;
