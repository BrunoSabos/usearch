require("../assets/stylesheets/styles.scss");

import highlight from './../node_modules/highlight-within-textarea/jquery.highlight-within-textarea';

var {Textcomplete, Textarea} = require('textcomplete');

(function ($) {
    $.caretTo = function (el, index) {
        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move("character", index);
            range.select();
        } else if (el.selectionStart != null) {
            el.focus();
            el.setSelectionRange(index, index);
        }
    };

    $.fn.caretTo = function (index, offset) {
        return this.queue(function (next) {
            if (isNaN(index)) {
                var i = $(this).val().indexOf(index);

                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }

                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }

            next();
        });
    };

    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

    $.fn.caretToEnd = function () {
        return this.queue(function (next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };
}(jQuery));


const libAntlr4 = require('antlr4/index');
const libSearchLexer = require('../gen/SearchLexer');
const libSearchParser = require('../gen/SearchParser');
const libSearchListener = require('../gen/SearchListener');
const libSearchVisitor = require('../gen/SearchVisitor');
const libErrorListener = require('antlr4/error/ErrorListener');

function newHighlight() {
    return {
        values: [],
        free: [],
        tags: [],
        ids: [],
        sorts: []
    }
}

function SearchErrorListener(errors) {
    libErrorListener.ErrorListener.call(this);
    this.errors = errors;
    return this;
}

SearchErrorListener.prototype = Object.create(libErrorListener.ErrorListener.prototype);
SearchErrorListener.prototype.constructor = SearchErrorListener;
SearchErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    // console.error("==> line " + line + ":" + column + " " + msg);

    const parser = recognizer._ctx.parser,
        tokens = parser.getTokenStream().tokens;

    // last token is always "fake" EOF token
    if (tokens.length > 1) {
        const lastToken = tokens[tokens.length - 2];
        arguments.lastToken = parser.symbolicNames[lastToken.type];
    }

    this.errors.push(arguments);
};

let SearchListenerAutoComplete = function () {};
SearchListenerAutoComplete.prototype = Object.create(libSearchListener.SearchListener.prototype);
SearchListenerAutoComplete.prototype.constructor = SearchListenerAutoComplete;

SearchListenerAutoComplete.prototype.enterTest = function (ctx) {
    let id = ctx.ID();
    if (id != null) {
        highlightItems.ids.push([ctx.start.start, ctx.start.stop + 1]);
    }
};

SearchListenerAutoComplete.prototype.enterTag = function (ctx) {
    let ht = ctx.HT();
    if (ht != null) {
        highlightItems.tags.push([ctx.start.start, ctx.stop.stop + 1]);
    }

    if (ctx.start.start <= position && position <= ctx.stop.stop + 1) {
        console.log("position", position, "ctx", ctx.stop.stop + 1);
        currentToken = ctx;
    }
};

SearchListenerAutoComplete.prototype.enterValue = function (ctx) {
    let id = ctx.ID();
    if (id != null) {
    }
    let string = ctx.STRING();
    if (string != null) {
    }
    let date = ctx.DATE();
    if (date != null) {
    }
    let decimal = ctx.DECIMAL();
    if (decimal != null) {
    }

    highlightItems.values.push([ctx.start.start, ctx.stop.stop + 1]);
};

SearchListenerAutoComplete.prototype.enterFree = function (ctx) {
    let id = ctx.ID();
    if (id != null) {
    }
    let string = ctx.STRING();
    if (string != null) {
    }

    highlightItems.free.push([ctx.start.start, ctx.stop.stop + 1]);
};

SearchListenerAutoComplete.prototype.enterSearch_sort = function (ctx) {
    // console.log(highlightItems);
    highlightItems.sorts.push([ctx.start.start, ctx.stop.stop + 1]);
};





let SearchVisitorSerializer = function () {
    // libSearchVisitor.call(this);
    // return this;
};

SearchVisitorSerializer.prototype = Object.create(libSearchVisitor.SearchVisitor.prototype);
SearchVisitorSerializer.prototype.constructor = SearchVisitorSerializer;
SearchVisitorSerializer.prototype.visitValue = function(ctx) {
    const str = ctx.STRING();
    if(str) {
        // console.log('visit value', str.toString(), ctx);
        return str.getText().substr(1, str.getText().length-2).replace(new RegExp('""', 'g'), '"');
    }
    const id = ctx.ID();
    if(id) {
        return id.toString();
    }
    const date = ctx.DATE();
    if(date) {
        return date.toString();
    }
    const decimal = ctx.DECIMAL();
    if(decimal) {
        return parseFloat(decimal.toString());
    }
    return this.visitChildren(ctx);
};

SearchVisitorSerializer.prototype.visitTest = function(ctx) {
    const id = ctx.ID();
    const cpIn = ctx.IN();
    const exists = ctx.EXISTS();
    const cp = ctx.comparison_operator();
    if(cpIn) {
        return {'in':{'field': id.getText(), 'values': this.visitChildren(ctx).filter(elt => elt != null)}};
    }
    if(cp) {
        return {'compare':{'operator': ctx.comparison_operator().getText(),'field': id.getText(), 'value':this.visitValue(ctx.value()[0])}};
    }
    return this.visitChildren(ctx);
};

SearchVisitorSerializer.prototype.visitFree = function(ctx) {
    const str = ctx.STRING();
    let free = null;
    if(str) {
        free = str.getText().substr(1, str.getText().length-2);
    }
    const id = ctx.ID();
    if(id) {
        free = id.getText();
    }
    if(free != null) {
        return {'free': free};
    }
};

SearchVisitorSerializer.prototype.visitTag = function(ctx) {
    const str = ctx.STRING();
    let tag = null;
    if(str) {
        tag = str.getText().substr(1, str.getText().length-2);
    }
    const id = ctx.ID();
    if(id) {
        tag = id.toString();
    }
    if(tag != null) {
        return {'tag': tag};
    }
};

SearchVisitorSerializer.prototype.visitSearch_condition_and = function(ctx) {
    const ands = this.visitChildren(ctx).filter(c => c != null);
    if(ands.length > 1) {
        return {'and': ands};
    }
    else {
        return ands[0];
    }
};

SearchVisitorSerializer.prototype.visitPredicate = function(ctx) {
    const ps = ctx.PS();
    if(ps) {
        return this.visitChildren(ctx)[1];
    }
    return this.visitChildren(ctx)[0];
};

SearchVisitorSerializer.prototype.visitSearch_condition = function(ctx) {
    const or = ctx.OR();
    const ors = this.visitChildren(ctx).filter(o => o != null);
    if(ors.length > 1) {
        return {'or': ors}
    }
    return this.visitChildren(ctx)[0];
};

SearchVisitorSerializer.prototype.visitSearch_condition_not = function(ctx) {
    const not = ctx.NOT();
    const excl = ctx.EXCLAMATION();
    let visitChildren = this.visitChildren(ctx);
    if(not || excl) {
        return {'not': visitChildren[1]}
    }
    return visitChildren[0];
};

SearchVisitorSerializer.prototype.visitBatch = function(ctx) {
    // todo sort
    return this.visitChildren(ctx)[0];
};






const searchListenerAutoComplete = new SearchListenerAutoComplete();
const searchVisitorSerializer = new SearchVisitorSerializer();

let position = null;
let searchInputId = "";
let $searchInput = null;
let $searchErrorDiv = null;
let $searchSerializedDiv = null;
let textComplete = null;

let currentToken = null;
let searchText;
let highlightItems = null;

export default function init(id) {
    searchInputId = id;
    $searchInput = $("#"+searchInputId);
    $searchInput.addClass("hwt-input hwt-content");
    $searchInput.click(parse).change(parse).keyup(parse);

    $searchErrorDiv = $("<div id=\"searchError\"></div>");
    $searchSerializedDiv = $("<pre id=\"searchSerialized\"></pre>");
    $searchInput.after($searchSerializedDiv);
    $searchInput.after($searchErrorDiv);

    parse();

    const editor = new Textarea(document.getElementById('searchInput'));

    textComplete = new Textcomplete(editor, {
        dropdown: {
            maxCount: 20
            // placement: 'top'
        }
    });
    textComplete.refresh = function () {
        if (window.emojiStrategy) {
            textComplete.register([window.emojiStrategy]);
        } else {
            textComplete.completer.destroy();
        }
    };
    textComplete.run = function (text) {
        textComplete.completer.run(text);
    };

    textComplete.on('rendered', function () {
        // if (textcomplete.dropdown.items.length === 1) {
        //     // Automatically select the only item.
        //     textcomplete.dropdown.select(textcomplete.dropdown.items[0]);
        // } else if (textcomplete.dropdown.items.length > 1) {
        //     // Activate the first item by default.
        //     textcomplete.dropdown.items[0].activate();
        // }
    });

    window.textComplete = textComplete;
}

function parse() {
    highlightItems=newHighlight();

    if (position != null && position === $searchInput[0].selectionStart) {
        return true;
    }
    position = $searchInput[0].selectionStart;
    searchText = $searchInput.val();

    let errDivContent = "";
    let serializedDivContent = "";
    window.emojis = {};

    if(searchText!=="") {
        const chars = new libAntlr4.InputStream(searchText);
        const lexer = new libSearchLexer.SearchLexer(chars);
        const tokens = new libAntlr4.CommonTokenStream(lexer);

        const parser = new libSearchParser.SearchParser(tokens);
        parser.buildParseTrees = true;

        let errors = [];
        const searchErrorlistener = new SearchErrorListener(errors);

        parser.removeErrorListeners();
        parser.addErrorListener(searchErrorlistener);

        currentToken = null;
        const tree = parser.batch();

        libAntlr4.tree.ParseTreeWalker.DEFAULT.walk(searchListenerAutoComplete, tree);

        errDivContent = $.map(searchErrorlistener.errors, function (args) {
            return "line " + args[2] + ", col " + args[3] + " " + args[4];
        });

        const serializedQuery = searchVisitorSerializer.visit(tree);
        serializedDivContent = JSON.stringify(serializedQuery, null, 2);

        if (window.textComplete != null) {
            if (currentToken != null) {
                const currentTokenValue = searchText.substring(currentToken.start.start, currentToken.stop.stop + 1);

                // var tokens = parser.getTokenStream().tokens;
                let tokenType = null;

                let options = [];

                // last token is always "fake" EOF token
                if (tokens.tokens.length > 1) {
                    tokenType = parser.symbolicNames[currentToken.start.type];

                    // this.tokenType = tokenType;

                    if (tokenType === "HT") {
                        options = [currentTokenValue, currentTokenValue + "123", currentTokenValue + "456", "#abc", "#bdef"];

                        window.emojiStrategyReplace = function (name) {
                            $searchInput.val(
                                searchText.substring(0, currentToken.start.start) +
                                name +
                                searchText.substring(currentToken.stop.stop + 1)
                            );
                            $searchInput.caretTo(currentToken.start.start + name.length);
                            return null;
                        };

                        window.emojiStrategy = {
                            id: 'emoji',
                            // match: /(^|\s):([a-z0-9+\-\_]*)$/,
                            // match: /(^|\s)([#a-z0-9+\-\_]*)$/,
                            match: /((#.*))$/,
                            search: function (term, callback) {
                                console.log("searchText ", term);
                                callback(Object.keys(emojis).filter(function (name) {
                                    return name.startsWith(term);
                                }));
                            },
                            template: function (name) {
                                return '<img src="' + emojis[name] + '"></img> ' + name;
                            },
                            // replace: function (name) {
                            // console.log("replace ", name);
                            // return '$1:' + name + ': ';
                            // return '$1' + name + '';
                            // return name;
                            // }
                            replace: window.emojiStrategyReplace
                        };
                    }

                    options.forEach(function (args) {
                        window.emojis[args] = "";
                    });
                }

                console.log("current: ", tokenType, currentTokenValue, options);

                // if(window.textComplete) {
                //     console.log("refresh");
                window.textComplete.refresh();
                window.textComplete.run(currentTokenValue);
                // }
            } else {
                window.emojiStrategy = null;
                window.textComplete.refresh();
            }
        }
    } else {
        window.emojiStrategy = null;
        window.textComplete.refresh();
    }

    $searchErrorDiv.html(errDivContent);
    $searchSerializedDiv.html(serializedDivContent);

    $searchInput.highlightWithinTextarea(
        {
            highlight: [
                {
                    highlight: highlightItems.values,
                    className: 'blue'
                },
                {
                    highlight: highlightItems.tags,
                    className: 'red'
                },
                {
                    highlight: highlightItems.ids,
                    className: 'yellow'
                },
                {
                    highlight: highlightItems.free,
                    className: 'violet'
                },
                {
                    highlight: highlightItems.sorts,
                    className: 'orange'
                }
            ]
        }
    );
    $searchInput.focus();
}
