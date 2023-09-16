var buttn = document.getElementsByTagName('button')[0];
var btn = document.getElementsByTagName('button')[1];
var bot = document.getElementsByTagName('button')[2];
var p = document.getElementsByTagName('p')[0]
var i = 0
function nemeh(){
    i++
    p.innerText = i
}
function gashah(){
    i--
    p.innerText = i
}
function reset(){
    i = 0
    p.innerText = i
}
