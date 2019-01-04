'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_TEXT = "Вы победили!";
var START_POS_X = 120;
var START_POS_Y = 80;
var POS_SPACE = 80;
var TEXT_BAR_POS_X = 120;
var TEXT_BAR_POS_Y = 250;
var TEXT_BAR_SPACE = 80;

var getMaxElement = function(arr){
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++){
        if ( arr[i] > maxElement){
            maxElement = arr[i];
        }
    }
    return maxElement;
}

var renderStatPanel = function(ctx){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGTH);

    ctx.fillStyle = '#fff';
    ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGTH);

    ctx.fillStyle = 'red';
    ctx.font = '16px serif';
    ctx.fillText(CLOUD_TEXT, 120, 40);

    ctx.fillStyle = 'red';
    ctx.font = '16px serif';
    ctx.fillText("Список результатов:", 120, 60);
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

window.renderStatistics = function(ctx, names, times){
    renderStatPanel(ctx);

    var maxTime = getMaxElement(times);
    for (var i = 0; i < names.length; i++){
        var myColor = getRandomFloat(0.3,0.9);
        if(names[i] === "Вы"){
            ctx.fillStyle = 'red';
        }
        else{
            Math.random()
            ctx.fillStyle = 'rgba(0,0,204,' + myColor + ')';
        }
        ctx.fillText(names[i], TEXT_BAR_POS_X + TEXT_BAR_SPACE * i, TEXT_BAR_POS_Y);
        ctx.fillStyle = 'black';
        ctx.fillRect(START_POS_X + POS_SPACE * i, START_POS_Y, 
            50, (150 * Math.round(times[i])) / maxTime);
    }
}