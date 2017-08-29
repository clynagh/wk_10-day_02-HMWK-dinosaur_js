var assert = require("assert");// Part of mocha library/ name of package
var Dinosaur = require("../dinosaur.js");// Relative file.

describe("Dinosaur", function(){

  // var dinosaur;

  // beforeEach(function(){
  //   dinosaur = new Dinosaur();
  // });

  it("dinosaur has a type", function(){
    dinosaur = new Dinosaur("big");
    // dinosaur.type("big")
    assert.strictEqual(dinosaur.type, "big")
  });

})

