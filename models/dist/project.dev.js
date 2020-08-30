'use strict';

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String]
});
module.exports = model('Project', ProjectSchema);