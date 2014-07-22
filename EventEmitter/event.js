var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

module.exports = Shop;
inherits(Shop, EventEmitter);

function Shop() {
  if(!(this instanceof Shop)) return new Shop(); //不用再new,直接调用返回自身实例

}

Shop.prototype.say = function(something) {
  console.log(something || 'just say');
  this.emit('finished', 'finished show');
};

Shop.prototype.verify = function() {
  var self = this;
  // self.say('verfiy call say');
  this.emit('vxxxx')
};

//私有方法
Shop.prototype._show = function() {
  console.log('called show function');
  this.fail('shop', 'this is p');
};

Shop.prototype.fail = function(name, p) {
  this.emit('fail', name, p)
};

Shop.prototype.addListener('error', function(){
  console.log('error listener')
});