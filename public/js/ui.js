$('#cards').click(function(e){
  if(e.target.id === 'cards'){
    return;
  }
  var cnum = parseInt(e.target.id.charAt(4));
  if(isNaN(cnum)){
    return;
  }
  $('#card'+cnum).toggleClass('select');
  g.set[cnum] = !g.set[cnum];
});

$('#submit').click(function(){
  var res = g.solve(g.set);
  solved = res[0] && res[1] === 0;
  if(solved){
    if(confirm('That works! Draw Again?')){
      g.redraw();
      $('.card').removeClass('select');
    }
    else {
      $('#newgame').click();
    }
  }
  else{
    alert('Sorry, you have '+res[1]+' left');
  }
});

$('#newgame').click(function(){
  window.location.reload();
});

$('#solve').click(function(){
  var st = Date.now(),
    ray = [];
  for(var i = 1; i<128; i++){
    var ray = g.bin2ray(i);
      res = g.solve(ray);
    if(res[0] && res[1] === 0){
      $('#ans').text('Solved in '+(Date.now() - st)+'ms. UMadBro?');
      break;
    }
  }
  for(var i = 0; i<7;i++){
    if(ray[i] === 1){
      $('#card'+i).addClass('select');
      g.set[i] = true;
    }
    else {
      $('#card'+i).removeClass('select');
      g.set[i] = false;
    }
  }  
});
