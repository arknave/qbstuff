module("team");
test("player create and score", 3, function(){
  var roger = new Player('Roger Cain');
  deepEqual(roger.name, 'Roger Cain', 'Roger\'s name is Roger');
  roger.neg++;
  roger.neg++;
  deepEqual(roger.getScore(), -10, 'Oh roger, you neg so often');
  roger.fif++;
  deepEqual(roger.getScore(), 5, 'FURFT333333333333333N');  
});

test('team create and score', function() {
  var t33mb0t = new Team('ROMERO-SQUAD');
  deepEqual(t33mb0t.name, 'ROMERO-SQUAD', 'CLUE-BOT INITIALIZED');

});

