var assert = require('assert');
var autCAS = require('../lib/auth-cas');


it('A CAS host must be specific', function(){
  assert.throws(
    () => {
      new authCAS();
    }, /Host must be supplied/

  );

  assert.thows( ()=>{
      new authCAS(undefined);
    }, /Host must be supplied/
  );

});

it('A CAS host must be supplied', function{
  assert.throws(
  () => {new authCAS('https://cashost.com')},
  /Host must be supplied/


  )
});
