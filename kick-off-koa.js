#!/usr/bin/env node
var Workshopper = require('workshopper');
var path = require('path');
var credits = require('./credits');

var name = 'kick-off-koa';
var title = 'KICK OFF KOA';
var subtitle = '\x1b[23mSelect an exercise and hit \x1b[3mEnter\x1b[23m to begin';


function fpath (f) {
  return path.join(__dirname, f);
}

Workshopper({
    name : name,
    title : title,
    subtitle : subtitle,
    exerciseDir : fpath('./exercises/'),
    appDir : __dirname,
    helpFile : fpath('help.txt'),
    menuItems : [{
        name : 'credits',
        handler : credits
    }],
    menuOptions : {}
});
