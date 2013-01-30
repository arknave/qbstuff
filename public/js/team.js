Player = function(name){
  this.fif = 0;
  this.ten = 0;
  this.neg = 0;
}

Player.prototype.getScore = function() {
  return 15 * this.fif + 10*this.ten - (5*this.neg);
}

Team = function(name){
  this.name = name;
  this.players = [];
  this.score = 0;
}

Team.prototype.addPlayer = function(player) {
  this.players.push(player);
}
