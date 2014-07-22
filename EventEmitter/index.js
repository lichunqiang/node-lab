var util = require('util');
var inspect = util.inspect;
var debug = util.debug;
var log = util.log;
var Shop = require('./event');

var shop = new Shop();

// log(typeof shop);

// log(inspect(shop));

shop.on('error', function(){
  console.log('error')
});

shop.on('finished', function(tag){
  console.log(tag)

})

shop.on('fail', function(name, p){
  console.log('naem: ' + name)
  console.log(p)
  shop.say('say')
});

// shop.emit('fail', 'dsada')

shop.fail();

// shop.say();
shop.verify();