var assert = require("assert");// Part of mocha library/ name of package
var Dinosaur = require("../dinosaur.js");// Relative file.

describe("Dinosaur", function(){

  // var dinosaur;

  // beforeEach(function(){
  //   dinosaur = new Dinosaur();
  // });

  it("dinosaur has a type", function(){
    dinosaur1 = new Dinosaur("big");
    dinosaur2 = new Dinosaur("scary");
    dinosaur3 = new Dinosaur("spikey");
    // dinosaur.type("big")
    assert.strictEqual(dinosaur1.type, "big")
    assert.strictEqual(dinosaur2.type, "scary")
    assert.strictEqual(dinosaur3.type, "spikey")
  });

  // it("dinosaur has number of offspring each year", function(){
  //   dinosaur = new Dinosaur()
  //   assert.strictEqual(dinosaur.offspring, 2)

  // })

})

