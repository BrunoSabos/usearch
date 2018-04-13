// Generated from /data/work/vp/dev/umbria-search/Search.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SearchParser.
function SearchListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SearchListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SearchListener.prototype.constructor = SearchListener;

// Enter a parse tree produced by SearchParser#batch.
SearchListener.prototype.enterBatch = function(ctx) {
};

// Exit a parse tree produced by SearchParser#batch.
SearchListener.prototype.exitBatch = function(ctx) {
};


// Enter a parse tree produced by SearchParser#search_condition.
SearchListener.prototype.enterSearch_condition = function(ctx) {
};

// Exit a parse tree produced by SearchParser#search_condition.
SearchListener.prototype.exitSearch_condition = function(ctx) {
};


// Enter a parse tree produced by SearchParser#search_condition_and.
SearchListener.prototype.enterSearch_condition_and = function(ctx) {
};

// Exit a parse tree produced by SearchParser#search_condition_and.
SearchListener.prototype.exitSearch_condition_and = function(ctx) {
};


// Enter a parse tree produced by SearchParser#search_condition_not.
SearchListener.prototype.enterSearch_condition_not = function(ctx) {
};

// Exit a parse tree produced by SearchParser#search_condition_not.
SearchListener.prototype.exitSearch_condition_not = function(ctx) {
};


// Enter a parse tree produced by SearchParser#search_sort.
SearchListener.prototype.enterSearch_sort = function(ctx) {
};

// Exit a parse tree produced by SearchParser#search_sort.
SearchListener.prototype.exitSearch_sort = function(ctx) {
};


// Enter a parse tree produced by SearchParser#predicate.
SearchListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by SearchParser#predicate.
SearchListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by SearchParser#test.
SearchListener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by SearchParser#test.
SearchListener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by SearchParser#tag.
SearchListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by SearchParser#tag.
SearchListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by SearchParser#free.
SearchListener.prototype.enterFree = function(ctx) {
};

// Exit a parse tree produced by SearchParser#free.
SearchListener.prototype.exitFree = function(ctx) {
};


// Enter a parse tree produced by SearchParser#comparison_operator.
SearchListener.prototype.enterComparison_operator = function(ctx) {
};

// Exit a parse tree produced by SearchParser#comparison_operator.
SearchListener.prototype.exitComparison_operator = function(ctx) {
};


// Enter a parse tree produced by SearchParser#value.
SearchListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by SearchParser#value.
SearchListener.prototype.exitValue = function(ctx) {
};



exports.SearchListener = SearchListener;