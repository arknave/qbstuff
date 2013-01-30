Reader = function(txt) {
  this.n = 1;
  this.ray = txt.split(' ');
  this.curtext = '';
};

Reader.prototype.next = function() {
  if(this.n >= this.ray.length) {
    return;
  }
  this.curtext += ' '+this.ray[this.n];
}

Reader.prototype.all = function() {
  this.n = this.ray.length;
  this.curtext = this.ray.join(' ');
}

Reader.prototype.back = function() {
  if(this.n === 0) return;
  this.curtext = this.curtext.substring(0, this.curtext.lastIndexOf(' ')); 
}

Reader.prototype.getCurtext = function () {
  return this.curtext;
}
