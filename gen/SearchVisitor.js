// Generated from /data/work/vp/dev/umbria-search/Search.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SearchParser.

function SearchVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SearchVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SearchVisitor.prototype.constructor = SearchVisitor;

// Visit a parse tree produced by SearchParser#batch.
SearchVisitor.prototype.visitBatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#search_condition.
SearchVisitor.prototype.visitSearch_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#search_condition_and.
SearchVisitor.prototype.visitSearch_condition_and = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#search_condition_not.
SearchVisitor.prototype.visitSearch_condition_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#search_sort.
SearchVisitor.prototype.visitSearch_sort = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#predicate.
SearchVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#test.
SearchVisitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#tag.
SearchVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#free.
SearchVisitor.prototype.visitFree = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#comparison_operator.
SearchVisitor.prototype.visitComparison_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SearchParser#value.
SearchVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SearchVisitor = SearchVisitor;