#!/usr/bin/env node

//get args
var args = process.argv.splice(process.execArgv.length + 2);

//get script
var script = args[0];

var sailsScript = require('../index');

//Run script in sails env
sailsScript(script);

