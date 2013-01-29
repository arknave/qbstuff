/*Constructs a new deck of cards.
  this.deck is an array of 63 cards, where 
  deck[i] = i+1;
*/
Deck = function(){
  this.deck = new Array(63);
  for(var i=0;i<63;i++){
    this.deck[i] = i+1;
  }
};

// Shuffles the deck using the Knuth-Fisher-Yates shuffle algorithm 
Deck.prototype.shuffle = function(){
  for(var i = this.deck.length-1; i > 0; i--){
    var n = Math.floor(Math.random()*i);
    this.deck[i] = this.deck[i] ^ this.deck[n];
    this.deck[n] = this.deck[i] ^ this.deck[n];
    this.deck[i] = this.deck[i] ^ this.deck[n];
  }
};

/*returns this.deck[0] and removes it from the deck
  if the deck is empty, it returns 0
*/
Deck.prototype.draw = function(){
  if(this.deck.length === 0){
    return 0;
  }
  return this.deck.shift();
};
