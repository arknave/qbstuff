Game = function(){
  this.d = new Deck();
  this.d.shuffle();
  this.cardray = Array(7);
  this.set = Array(7);
  for(var i = 0; i<7; i++) {
    $("#card"+i).removeClass('select');
    this.cardray[i] = new Card($("#card"+i)[0], this.d.draw());
    this.cardray[i].draw();
    this.set[i] = false;
  }
};

Game.prototype.redraw = function(){
  for(var i = 0; i < 7; i++) {
    if(this.set[i]){
      this.cardray[i] = new Card($('#card'+i)[0], this.d.draw());
      this.cardray[i].draw();
      this.set[i] = false;
    }
  }
}

Game.prototype.solve = function(ray){
  if(ray.length !== 7){
    throw new Error('improper array passed to solve function');
  }
  var t = false,
    res = 0;
  for(var i=0;i<7;i++){
    if(ray[i] && this.cardray[i]['num'] !== 0){
      res ^= this.cardray[i]['num'];
      t = true;
    }
  }
  return [t, res];
};

Game.prototype.bin2ray = function(num) {
  var ray = [];
  for(var pos=0, i=1; pos < 7; pos++, i = i<<1){
    ray[pos] = ((num & i) === 0) ? 0 : 1;
  }
  return ray;
}

g = new Game();
