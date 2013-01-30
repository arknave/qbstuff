/*var scores = [0, 0],
  bteam = true,
  qnum = 0,
  n = 0,
  fin = true;
*/

var team1 = new Team(),
  team2 = new Team(),
  bteam = true,
  qnum = 0;

function handle(keyc){
  console.log(keyc);
  switch(keyc){
    //Team 1 +5
    case 87:
      team1.score += 5;
      break;
    //Team 1 -5
    case 83:
      team1.score -= 5;
      break;
    //Team 2 +5
    case 38:
      team2.score += 5;
      break;
    // Team 2 -5
    case 40:
      team2.score -= 5;
      break;
    // Switch LASA Teams
    case 79:
      $('#name2').text(bteam ? 'LASA A' : 'LASA B');
      bteam = !bteam; 
      break;
    // Start next tossup
    case 84:
      $.ajax({
        async: false,
        url: '/'+(qnum+1),
        type: 'GET' 
      }).done(function(data){
        text = new Reader(data);
      });
      qnum++;
      $('#text').text('');
      break;
    // Next word 
    case 78:
      $('#text').text(text.getCurtext()); 
      break;
    /* Pause next tossup
    case 80:

      break;*/
    // Finish current tossup
    case 70:
      $('#text').text(text.all());
      break;
  }
  update();
}

function update(){
  $('#score1').text(team1.score);
  $('#score2').text(team2.score);
}

window.onkeyup = function(e){
  handle(e.which);
}
