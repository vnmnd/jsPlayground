var BooksCount = function() {
  return this.count;
}

var defaultName = "The Library";

var JsPlayground = function(name, count) {
  this.name = name || defaultName;
  this.count = count;
}

JsPlayground.prototype.booksCount = BooksCount;

module.exports = JsPlayground; // Referencing function, but not invoking it

