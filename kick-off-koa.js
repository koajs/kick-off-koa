#!/usr/bin/env node
var Workshopper = require('workshopper');
var path = require('path');
var credits = require('./credits');

var name = 'kick-off-koa';

function fpath (f) {
  return path.join(__dirname, f);
}

Workshopper({
    name : name,
    appDir : __dirname,
    languages : ['en', 'fr'],
    helpFile : fpath('./i18n/help/{lang}.txt'),
    menuItems : [{
        name : 'credits',
        handler : credits
    }]
});
