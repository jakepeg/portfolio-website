var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var cta = document.getElementById('cta');
var timer = document.getElementById('timer');
var message1 = document.getElementById('message-1');
var message2 = document.getElementById('message-2');
var message3 = document.getElementById('message-3');
var message4 = document.getElementById('message-4');
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval;
var images = ['t1','t2','t3','t4','t5','t6'];
var clone = ['t1a','t2a','t3a','t4a','t5a','t6a'];
//var clone = images.slice(0); // duplicate array
var cards = images.concat(clone); // merge to arrays 
var message3Timer;
message2.style.display = "none";
message3.style.display = "none";
message4.style.display = "none";

var replayButton = document.getElementById("replay");
replayButton.onclick = function() {
  
  startGame();
}

// Shufffel function
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

var resetTimer = function () {
  tens = 0;
  seconds = 0;
  appendTens.innerHTML = "00";
  appendSeconds.innerHTML = "00";
}

var startGame = function() {
  resetTimer();
  replayButton.style.display = "none";
  cta.style.display = "none";
  message4.style.display = "none";
  message1.style.display = "block";
  text.innerHTML = "";
  for (var i = 0; i < cards.length; i++) {
    card = document.createElement('div');
    console.log("create card");
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    myCards.appendChild(card);
       
    card.onclick = function () {
      if (this.className != 'flipped' && this.className != 'correct'){
          this.className = 'flipped';
          var result = this.dataset.item;
          console.log(result.substring(0, 2));
          resultsArray.push(result.substring(0, 2));
          clearInterval(Interval);
          Interval = setInterval(startTimer, 10);
      }
    
      if (resultsArray.length > 1) {
        if (resultsArray[0] === resultsArray[1]) {
          check("correct");
          message1.style.display = "none";
          message2.style.display = "block";
          counter ++;
          win();
          resultsArray = [];
        } else {
            check("reverse");
            resultsArray = [];
        }
      }
    }
  };
}




startGame();

var clearGame = function() {
  while (myCards.firstChild) {
      myCards.removeChild(myCards.firstChild);
  }
  resultsArray = [];
  message3.style.display = "none";
  message2.style.display = "none";
  window.clearTimeout(message3Timer);
  counter = 0;
  shuffle(cards);
}

var showEnd = function() {
  timer.style.display = "none";
  replayButton.style.display = "block";
  cta.style.display = "block";
  clearGame();

/*  message2.style.display = "block";
  message3Timer = setTimeout(function() {
    message2.style.display = "none";
    message3.style.display = "block";
  },5000);*/
}

var check = function(className) {
  console.log(className);
  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {
    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
  },500);
}

var win = function () {
  if(counter === 6) {
    clearInterval(Interval);
    message4.style.display = "block";
    text.innerHTML = seconds + ":" + tens;
    //clearGame();
    showEnd();
  } 
}
     
function startTimer () {
timer.style.display = "block";
  tens++; 
  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9){
    appendTens.innerHTML = tens;
  } 
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}