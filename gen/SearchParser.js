// Generated from /data/work/vp/dev/umbria-search/Search.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SearchListener = require('./SearchListener').SearchListener;
var SearchVisitor = require('./SearchVisitor').SearchVisitor;

var grammarFileName = "Search.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001aw\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e",
    "\u0003%\u000b\u0003\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003",
    "\u0004\u0007\u0004,\n\u0004\f\u0004\u000e\u0004/\u000b\u0004\u0003\u0005",
    "\u0005\u00052\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u00069\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007B\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\bO\n\b\u0003\b\u0007\bR\n\b\f\b\u000e\bU\u000b",
    "\b\u0003\b\u0003\b\u0005\bY\n\b\u0003\t\u0003\t\u0005\t]\n\t\u0003\t",
    "\u0005\t`\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000bs\n\u000b\u0003\f\u0003\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0005\u0004\u0002\u000b\u000b",
    "\u001a\u001a\u0003\u0002\u0015\u0016\u0003\u0002\u0013\u0016\u0002\u0082",
    "\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002",
    "\u0006&\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n5\u0003",
    "\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000eX\u0003\u0002\u0002",
    "\u0002\u0010Z\u0003\u0002\u0002\u0002\u0012a\u0003\u0002\u0002\u0002",
    "\u0014r\u0003\u0002\u0002\u0002\u0016t\u0003\u0002\u0002\u0002\u0018",
    "\u001a\u0005\u0004\u0003\u0002\u0019\u001b\u0005\n\u0006\u0002\u001a",
    "\u0019\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0002\u0002\u0003\u001d",
    "\u0003\u0003\u0002\u0002\u0002\u001e#\u0005\u0006\u0004\u0002\u001f",
    " \u0007\f\u0002\u0002 \"\u0005\u0006\u0004\u0002!\u001f\u0003\u0002",
    "\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$",
    "\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002&-\u0005\b\u0005\u0002\')\u0007\u0003\u0002\u0002(\'\u0003",
    "\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002",
    "*,\u0005\b\u0005\u0002+(\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\u0007\u0003",
    "\u0002\u0002\u0002/-\u0003\u0002\u0002\u000202\t\u0002\u0002\u00021",
    "0\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000234\u0005\f\u0007\u00024\t\u0003\u0002\u0002\u000256\u0007\r\u0002",
    "\u000268\u0007\u0015\u0002\u000279\u0007\u000f\u0002\u000287\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029\u000b\u0003\u0002\u0002\u0002",
    ":B\u0005\u000e\b\u0002;<\u0007\u0011\u0002\u0002<=\u0005\u0004\u0003",
    "\u0002=>\u0007\u0012\u0002\u0002>B\u0003\u0002\u0002\u0002?B\u0005\u0010",
    "\t\u0002@B\u0005\u0012\n\u0002A:\u0003\u0002\u0002\u0002A;\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002B\r",
    "\u0003\u0002\u0002\u0002CD\u0007\t\u0002\u0002DY\u0007\u0015\u0002\u0002",
    "EF\u0007\u0015\u0002\u0002FG\u0005\u0014\u000b\u0002GH\u0005\u0016\f",
    "\u0002HY\u0003\u0002\u0002\u0002IJ\u0007\u0015\u0002\u0002JK\u0007\n",
    "\u0002\u0002KL\u0007\u0011\u0002\u0002LS\u0005\u0016\f\u0002MO\u0007",
    "\u0003\u0002\u0002NM\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002PR\u0005\u0016\f\u0002QN\u0003\u0002\u0002",
    "\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002",
    "\u0002\u0002TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VW\u0007",
    "\u0012\u0002\u0002WY\u0003\u0002\u0002\u0002XC\u0003\u0002\u0002\u0002",
    "XE\u0003\u0002\u0002\u0002XI\u0003\u0002\u0002\u0002Y\u000f\u0003\u0002",
    "\u0002\u0002Z\\\u0007\u0019\u0002\u0002[]\u0007\u0004\u0002\u0002\\",
    "[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^`\t\u0003\u0002\u0002_^\u0003\u0002\u0002\u0002_`\u0003\u0002",
    "\u0002\u0002`\u0011\u0003\u0002\u0002\u0002ab\t\u0003\u0002\u0002b\u0013",
    "\u0003\u0002\u0002\u0002cs\u0007\u0005\u0002\u0002ds\u0007\u0006\u0002",
    "\u0002es\u0007\u0007\u0002\u0002fg\u0007\u0007\u0002\u0002gs\u0007\u0005",
    "\u0002\u0002hi\u0007\u0006\u0002\u0002is\u0007\u0005\u0002\u0002jk\u0007",
    "\u0007\u0002\u0002ks\u0007\u0006\u0002\u0002lm\u0007\u001a\u0002\u0002",
    "ms\u0007\u0005\u0002\u0002no\u0007\u001a\u0002\u0002os\u0007\u0006\u0002",
    "\u0002pq\u0007\u001a\u0002\u0002qs\u0007\u0007\u0002\u0002rc\u0003\u0002",
    "\u0002\u0002rd\u0003\u0002\u0002\u0002re\u0003\u0002\u0002\u0002rf\u0003",
    "\u0002\u0002\u0002rh\u0003\u0002\u0002\u0002rj\u0003\u0002\u0002\u0002",
    "rl\u0003\u0002\u0002\u0002rn\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002",
    "\u0002s\u0015\u0003\u0002\u0002\u0002tu\t\u0004\u0002\u0002u\u0017\u0003",
    "\u0002\u0002\u0002\u000f\u001a#(-18ANSX\\_r"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "':'", "'='", "'>'", "'<'", null, null, 
                     null, null, null, null, null, null, null, "'('", "')'", 
                     null, null, null, null, null, null, null, "'!'" ];

var symbolicNames = [ null, null, null, null, null, null, "AND", "EXISTS", 
                      "IN", "NOT", "OR", "SORT", "SORT_BY", "DESC", "WS", 
                      "PS", "PE", "DATE", "DECIMAL", "ID", "STRING", "SQ_STRING", 
                      "DQ_STRING", "HTID", "EXCLAMATION" ];

var ruleNames =  [ "batch", "search_condition", "search_condition_and", 
                   "search_condition_not", "search_sort", "predicate", "test", 
                   "tag", "free", "comparison_operator", "value" ];

function SearchParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SearchParser.prototype = Object.create(antlr4.Parser.prototype);
SearchParser.prototype.constructor = SearchParser;

Object.defineProperty(SearchParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SearchParser.EOF = antlr4.Token.EOF;
SearchParser.T__0 = 1;
SearchParser.T__1 = 2;
SearchParser.T__2 = 3;
SearchParser.T__3 = 4;
SearchParser.T__4 = 5;
SearchParser.AND = 6;
SearchParser.EXISTS = 7;
SearchParser.IN = 8;
SearchParser.NOT = 9;
SearchParser.OR = 10;
SearchParser.SORT = 11;
SearchParser.SORT_BY = 12;
SearchParser.DESC = 13;
SearchParser.WS = 14;
SearchParser.PS = 15;
SearchParser.PE = 16;
SearchParser.DATE = 17;
SearchParser.DECIMAL = 18;
SearchParser.ID = 19;
SearchParser.STRING = 20;
SearchParser.SQ_STRING = 21;
SearchParser.DQ_STRING = 22;
SearchParser.HTID = 23;
SearchParser.EXCLAMATION = 24;

SearchParser.RULE_batch = 0;
SearchParser.RULE_search_condition = 1;
SearchParser.RULE_search_condition_and = 2;
SearchParser.RULE_search_condition_not = 3;
SearchParser.RULE_search_sort = 4;
SearchParser.RULE_predicate = 5;
SearchParser.RULE_test = 6;
SearchParser.RULE_tag = 7;
SearchParser.RULE_free = 8;
SearchParser.RULE_comparison_operator = 9;
SearchParser.RULE_value = 10;

function BatchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_batch;
    return this;
}

BatchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BatchContext.prototype.constructor = BatchContext;

BatchContext.prototype.search_condition = function() {
    return this.getTypedRuleContext(Search_conditionContext,0);
};

BatchContext.prototype.EOF = function() {
    return this.getToken(SearchParser.EOF, 0);
};

BatchContext.prototype.search_sort = function() {
    return this.getTypedRuleContext(Search_sortContext,0);
};

BatchContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterBatch(this);
	}
};

BatchContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitBatch(this);
	}
};

BatchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitBatch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.BatchContext = BatchContext;

SearchParser.prototype.batch = function() {

    var localctx = new BatchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SearchParser.RULE_batch);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.search_condition();
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SearchParser.SORT) {
            this.state = 23;
            this.search_sort();
        }

        this.state = 26;
        this.match(SearchParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Search_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_search_condition;
    return this;
}

Search_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Search_conditionContext.prototype.constructor = Search_conditionContext;

Search_conditionContext.prototype.search_condition_and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Search_condition_andContext);
    } else {
        return this.getTypedRuleContext(Search_condition_andContext,i);
    }
};

Search_conditionContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SearchParser.OR);
    } else {
        return this.getToken(SearchParser.OR, i);
    }
};


Search_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterSearch_condition(this);
	}
};

Search_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitSearch_condition(this);
	}
};

Search_conditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitSearch_condition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.Search_conditionContext = Search_conditionContext;

SearchParser.prototype.search_condition = function() {

    var localctx = new Search_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SearchParser.RULE_search_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.search_condition_and();
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SearchParser.OR) {
            this.state = 29;
            this.match(SearchParser.OR);
            this.state = 30;
            this.search_condition_and();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Search_condition_andContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_search_condition_and;
    return this;
}

Search_condition_andContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Search_condition_andContext.prototype.constructor = Search_condition_andContext;

Search_condition_andContext.prototype.search_condition_not = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Search_condition_notContext);
    } else {
        return this.getTypedRuleContext(Search_condition_notContext,i);
    }
};

Search_condition_andContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterSearch_condition_and(this);
	}
};

Search_condition_andContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitSearch_condition_and(this);
	}
};

Search_condition_andContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitSearch_condition_and(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.Search_condition_andContext = Search_condition_andContext;

SearchParser.prototype.search_condition_and = function() {

    var localctx = new Search_condition_andContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SearchParser.RULE_search_condition_and);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.search_condition_not();
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SearchParser.T__0) | (1 << SearchParser.EXISTS) | (1 << SearchParser.NOT) | (1 << SearchParser.PS) | (1 << SearchParser.ID) | (1 << SearchParser.STRING) | (1 << SearchParser.HTID) | (1 << SearchParser.EXCLAMATION))) !== 0)) {
            this.state = 38;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SearchParser.T__0) {
                this.state = 37;
                this.match(SearchParser.T__0);
            }

            this.state = 40;
            this.search_condition_not();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Search_condition_notContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_search_condition_not;
    return this;
}

Search_condition_notContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Search_condition_notContext.prototype.constructor = Search_condition_notContext;

Search_condition_notContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

Search_condition_notContext.prototype.NOT = function() {
    return this.getToken(SearchParser.NOT, 0);
};

Search_condition_notContext.prototype.EXCLAMATION = function() {
    return this.getToken(SearchParser.EXCLAMATION, 0);
};

Search_condition_notContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterSearch_condition_not(this);
	}
};

Search_condition_notContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitSearch_condition_not(this);
	}
};

Search_condition_notContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitSearch_condition_not(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.Search_condition_notContext = Search_condition_notContext;

SearchParser.prototype.search_condition_not = function() {

    var localctx = new Search_condition_notContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SearchParser.RULE_search_condition_not);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SearchParser.NOT || _la===SearchParser.EXCLAMATION) {
            this.state = 46;
            _la = this._input.LA(1);
            if(!(_la===SearchParser.NOT || _la===SearchParser.EXCLAMATION)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 49;
        this.predicate();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Search_sortContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_search_sort;
    return this;
}

Search_sortContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Search_sortContext.prototype.constructor = Search_sortContext;

Search_sortContext.prototype.SORT = function() {
    return this.getToken(SearchParser.SORT, 0);
};

Search_sortContext.prototype.ID = function() {
    return this.getToken(SearchParser.ID, 0);
};

Search_sortContext.prototype.DESC = function() {
    return this.getToken(SearchParser.DESC, 0);
};

Search_sortContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterSearch_sort(this);
	}
};

Search_sortContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitSearch_sort(this);
	}
};

Search_sortContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitSearch_sort(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.Search_sortContext = Search_sortContext;

SearchParser.prototype.search_sort = function() {

    var localctx = new Search_sortContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SearchParser.RULE_search_sort);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(SearchParser.SORT);
        this.state = 52;
        this.match(SearchParser.ID);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SearchParser.DESC) {
            this.state = 53;
            this.match(SearchParser.DESC);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

PredicateContext.prototype.PS = function() {
    return this.getToken(SearchParser.PS, 0);
};

PredicateContext.prototype.search_condition = function() {
    return this.getTypedRuleContext(Search_conditionContext,0);
};

PredicateContext.prototype.PE = function() {
    return this.getToken(SearchParser.PE, 0);
};

PredicateContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

PredicateContext.prototype.free = function() {
    return this.getTypedRuleContext(FreeContext,0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitPredicate(this);
	}
};

PredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.PredicateContext = PredicateContext;

SearchParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SearchParser.RULE_predicate);
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.test();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.match(SearchParser.PS);
            this.state = 58;
            this.search_condition();
            this.state = 59;
            this.match(SearchParser.PE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 61;
            this.tag();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 62;
            this.free();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_test;
    return this;
}

TestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestContext.prototype.constructor = TestContext;

TestContext.prototype.EXISTS = function() {
    return this.getToken(SearchParser.EXISTS, 0);
};

TestContext.prototype.ID = function() {
    return this.getToken(SearchParser.ID, 0);
};

TestContext.prototype.comparison_operator = function() {
    return this.getTypedRuleContext(Comparison_operatorContext,0);
};

TestContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

TestContext.prototype.IN = function() {
    return this.getToken(SearchParser.IN, 0);
};

TestContext.prototype.PS = function() {
    return this.getToken(SearchParser.PS, 0);
};

TestContext.prototype.PE = function() {
    return this.getToken(SearchParser.PE, 0);
};

TestContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterTest(this);
	}
};

TestContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitTest(this);
	}
};

TestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.TestContext = TestContext;

SearchParser.prototype.test = function() {

    var localctx = new TestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SearchParser.RULE_test);
    var _la = 0; // Token type
    try {
        this.state = 86;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(SearchParser.EXISTS);
            this.state = 66;
            this.match(SearchParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.match(SearchParser.ID);
            this.state = 68;
            this.comparison_operator();
            this.state = 69;
            this.value();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 71;
            this.match(SearchParser.ID);
            this.state = 72;
            this.match(SearchParser.IN);
            this.state = 73;
            this.match(SearchParser.PS);
            this.state = 74;
            this.value();
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SearchParser.T__0) | (1 << SearchParser.DATE) | (1 << SearchParser.DECIMAL) | (1 << SearchParser.ID) | (1 << SearchParser.STRING))) !== 0)) {
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SearchParser.T__0) {
                    this.state = 75;
                    this.match(SearchParser.T__0);
                }

                this.state = 78;
                this.value();
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 84;
            this.match(SearchParser.PE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_tag;
    this.tagKey = null; // Token
    this.sep = null; // Token
    this.tagValue = null; // Token
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.HTID = function() {
    return this.getToken(SearchParser.HTID, 0);
};

TagContext.prototype.ID = function() {
    return this.getToken(SearchParser.ID, 0);
};

TagContext.prototype.STRING = function() {
    return this.getToken(SearchParser.STRING, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.TagContext = TagContext;

SearchParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SearchParser.RULE_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        localctx.tagKey = this.match(SearchParser.HTID);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SearchParser.T__1) {
            this.state = 89;
            localctx.sep = this.match(SearchParser.T__1);
        }

        this.state = 93;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 92;
            localctx.tagValue = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===SearchParser.ID || _la===SearchParser.STRING)) {
                localctx.tagValue = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FreeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_free;
    return this;
}

FreeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FreeContext.prototype.constructor = FreeContext;

FreeContext.prototype.STRING = function() {
    return this.getToken(SearchParser.STRING, 0);
};

FreeContext.prototype.ID = function() {
    return this.getToken(SearchParser.ID, 0);
};

FreeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterFree(this);
	}
};

FreeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitFree(this);
	}
};

FreeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitFree(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.FreeContext = FreeContext;

SearchParser.prototype.free = function() {

    var localctx = new FreeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SearchParser.RULE_free);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        _la = this._input.LA(1);
        if(!(_la===SearchParser.ID || _la===SearchParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Comparison_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_comparison_operator;
    return this;
}

Comparison_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comparison_operatorContext.prototype.constructor = Comparison_operatorContext;


Comparison_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterComparison_operator(this);
	}
};

Comparison_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitComparison_operator(this);
	}
};

Comparison_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitComparison_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.Comparison_operatorContext = Comparison_operatorContext;

SearchParser.prototype.comparison_operator = function() {

    var localctx = new Comparison_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SearchParser.RULE_comparison_operator);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.match(SearchParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.match(SearchParser.T__3);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 99;
            this.match(SearchParser.T__4);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 100;
            this.match(SearchParser.T__4);
            this.state = 101;
            this.match(SearchParser.T__2);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 102;
            this.match(SearchParser.T__3);
            this.state = 103;
            this.match(SearchParser.T__2);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 104;
            this.match(SearchParser.T__4);
            this.state = 105;
            this.match(SearchParser.T__3);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 106;
            this.match(SearchParser.EXCLAMATION);
            this.state = 107;
            this.match(SearchParser.T__2);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 108;
            this.match(SearchParser.EXCLAMATION);
            this.state = 109;
            this.match(SearchParser.T__3);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 110;
            this.match(SearchParser.EXCLAMATION);
            this.state = 111;
            this.match(SearchParser.T__4);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SearchParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(SearchParser.STRING, 0);
};

ValueContext.prototype.ID = function() {
    return this.getToken(SearchParser.ID, 0);
};

ValueContext.prototype.DECIMAL = function() {
    return this.getToken(SearchParser.DECIMAL, 0);
};

ValueContext.prototype.DATE = function() {
    return this.getToken(SearchParser.DATE, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SearchListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SearchVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SearchParser.ValueContext = ValueContext;

SearchParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SearchParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SearchParser.DATE) | (1 << SearchParser.DECIMAL) | (1 << SearchParser.ID) | (1 << SearchParser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SearchParser = SearchParser;
