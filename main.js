import { WIDTH, HEIGHT } from './constants.js';
import { Player } from './player.js';


var cvs = document.getElementById("canvas");
cvs.width = WIDTH;
cvs.height = HEIGHT;

// var ctx = cvs.getContext("2d");

var player = new Player(100, 100, cvs);
player.draw();
