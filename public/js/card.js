color = {};
color['red'] = '#cc0000';
color['ong'] = '#f57900';
color['ylw'] = '#edd400';
color['grn'] = '#73d216';
color['blu'] = '#3465a4';
color['prp'] = '#75507b';

Card = function(cvas, num){
  this.cvas = cvas;
  this.ctx = cvas.getContext('2d');
  this.cw = cvas.width;
  this.ch = cvas.height;
  this.num = num;
  this.map = new Array(6);
  this.map[0] = {x: 0, y: 0, color: color['red']};
  this.map[1] = {x: this.cw/2, y: 0, color: color['ong']};
  this.map[2] = {x: 0, y: this.ch/3, color: color['ylw']};
  this.map[3] = {x: this.cw/2, y: this.ch/3, color: color['grn']};
  this.map[4] = {x: 0, y: 2*this.ch/3, color: color['blu']};
  this.map[5] = {x: this.cw/2, y: 2*this.ch/3, color: color['prp']};
};

/*Draw the card onto the canvas
  
*/
Card.prototype.draw = function(){
  this.ctx.fillStyle = '#ffffff';
  this.ctx.fillRect(0, 0, this.cw, this.ch);
  if(this.num === 0){
    this.ctx.fillStyle = "#baddb6";
    this.ctx.fillRect(0, 0, this.cw, this.ch);
  }
  else{
    for(var i = 1, pos=0; i< 64; i <<= 1, pos++){
      if((this.num & i) !== 0){
        this.drawColor(pos);
      }
    }
  }
};

Card.prototype.drawColor = function(n){
  this.ctx.fillStyle = this.map[n]['color'];
  this.ctx.fillRect(this.map[n]['x'], this.map[n]['y'], this.cw/2, this.ch/3);
}
