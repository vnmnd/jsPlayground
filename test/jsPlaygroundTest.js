var expect = require('chai').expect;

var JsPlayground = require('../lib/jsPlayground');

describe("The library", function() {
  it('should have a name', function() {
    var library = new JsPlayground('The Library of Babel', 1000000);
    expect(library.name).to.equal('The Library of Babel');
  });

  it('should report correct number of books', function() {
    var library = new JsPlayground('The Library of Babel', 1000000);
    expect(library.booksCount()).to.equal(1000000);
  });

  it('should correctly display libary attributes', function() {
    var library = new JsPlayground('The Library of Babel', 1000000);
    expect(library.toString()).to.equal("[object Object]");
  });
})
