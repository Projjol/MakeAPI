/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

var mongoose = require('../../lib/mongoose');

module.exports.isObjectIdOrNull = function(n){
  console.log({valueOfN: n});
  if (n){
    return mongoose.Schema.ObjectId.isValid(n);
  }
  else{
    return true;
  }
};
