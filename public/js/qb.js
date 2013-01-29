var scores = [0, 0],
  , bteam = true;
function handle(keyc){
  console.log(keyc);
  switch(keyc){
    case 87:
      scores[0] += 5;
      break;
    case 83:
      scores[0] -= 5;
      break;
    case 38:
      scores[1] += 5;
      break;
    case 40:
      scores[1] -= 5;
      break;
    case 80:
      $('#name2').text(bteam ? 'LASA A' : 'LASA B');
      bteam = !bteam; 
      break;
  }
  update();
}

function update(){
  $('#score1').text(scores[0]);
  $('#score2').text(scores[1]);
}

$('body').bind('keyup', function(e){
  handle(e.keyCode);
});

