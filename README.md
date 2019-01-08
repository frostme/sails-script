# sails-script
CLI to run scripts within the sails environment.

## Installation
```
npm install sails-script -g
```

## Requirements
Running within a sails project.

## Usage
Given `scripts/Example.js` is your script to run, 

```
sails-script scripts/Example.js
```

## Script
Your script should export a function that either takes a callback
 as as an argument or returns a promise. If your script takes
a callback as an argument, the callback can take a single
`error` argument.

### callback example
```
module.exports = function(cb){
  User.find({}).then(users => {
    console.log(users);
    cb();
  }).catch(err => {
    cb(err);
  });
}
```

### promise example
```
module.exports = function(){
  return new Promise(async (resolve, reject) => {
    let users = await User.find({});
    console.log(users);
    resolve();
  });
}
```
