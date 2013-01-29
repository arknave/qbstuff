module("deck");
test("deck create", function(){
  expect(63);
  var d = new Deck();
  for(var i = 0;i<63;i++){
    deepEqual(d.deck[i], i+1, "deck["+(i)+"] equals "+(i+1));
  }
});

test("deck shuffle", function(){
  expect(63);
  var d = new Deck(),
    seen = new Array(63),
    len = 63;
  while(len--){
    seen[len] = false;
  }
  d.shuffle();
  for(var i=0;i<63;i++){
    var bool = !seen[i] && d.deck[i] > 0 && d.deck[i] < 64;
    seen[i] = true;
    ok(bool, 'card '+i+' is '+d.deck[i]);
  }
});

test("deck draw", function(){
  expect(130);
  var d = new Deck();
  for(var i=0;i<63;i++){
    deepEqual(i+1, d.draw(), 'shift worked!');
    deepEqual(63-i-1, d.deck.length, 'deck lost an element'); 
  }
  deepEqual(0, d.deck.length, 'deck is empty');
  deepEqual(0, d.draw(), 'returns zero if no elements');
  deepEqual(0, d.draw(), 'returns zero if no elements');
  deepEqual(0, d.draw(), 'returns zero if no elements');
});

module("card");
test("card create", 5, function(){
  $("#qunit-fixture").append('<canvas id="canvas" width=100 height=150></canvas>');
  var c = new Card($("#canvas")[0], 5);
  deepEqual(c.cvas, $("#canvas")[0], 'canvas is right');
  deepEqual(c.ctx, $("#canvas")[0].getContext('2d'), 'ctx is right');
  deepEqual(c.cw, 100, 'width is what it should be');
  deepEqual(c.ch, 150, 'height is what it should be');
  deepEqual(c.num, 5, 'card number is right');
});
