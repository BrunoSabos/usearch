// https://github.com/antlr/grammars-v4
// https://github.com/antlr/grammars-v4/blob/master/tsql/tsql.g4
// http://codinggorilla.domemtech.com/?p=995

// a in (34, test, 12, 'val'), 'test', b = 123, c = 'other test', d = 2017-01-01, e = "last ""test", d, exists e, f and (g or h)
grammar Search;

batch: search_condition search_sort? EOF;

//search_condition_list
//    : search_condition (','? search_condition)*
//    ;

search_condition
    : search_condition_and (OR search_condition_and)*
    ;

search_condition_and
//    : search_condition_not (AND search_condition_not)*
    : search_condition_not (','? search_condition_not)*
    ;

search_condition_not
    : (NOT | EXCLAMATION)? predicate
    ;

search_sort
    : SORT ID DESC?
    ;

predicate
    : test
    | PS search_condition PE
    | tag
    | free
    ;

test
    : EXISTS ID
    | ID comparison_operator value
    | ID IN PS value (','? value)* PE
    ;

tag
    : HT (ID | STRING)
    ;

free
    : STRING
    | ID
    ;

comparison_operator
    : '=' | '>' | '<' | '<' '=' | '>' '=' | '<' '>' | '!' '=' | '!' '>' | '!' '<'
    ;

value: STRING | ID | DECIMAL | DATE;

AND:                                   A N D;
EXISTS:                                E X I S T S;
IN:                                    I N;
NOT:                                   N O T;
OR:                                    O R;
SORT:                                  S O R T;
SORT_BY:                               B Y;
DESC:                                  D E S C;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
PS: '(';
PE: ')';

DATE: DEC_DIGIT DEC_DIGIT DEC_DIGIT DEC_DIGIT'-'DEC_DIGIT DEC_DIGIT'-'DEC_DIGIT DEC_DIGIT('T' DEC_DIGIT DEC_DIGIT':'DEC_DIGIT DEC_DIGIT)?;
DECIMAL: DEC_DIGIT+;
ID : CHAR CHAR_EXT*;             // match lower-case identifiers
STRING:  (DQ_STRING | SQ_STRING);
SQ_STRING: (SQ (NSQ | ESQ)* SQ);
DQ_STRING: (DQ (NDQ | EDQ)* DQ);
HT : '#';
EXCLAMATION: '!';

fragment CHAR : 'a'..'z'|'A'..'Z';
fragment CHAR_EXT : CHAR | '0'..'9' | [.-] | '_';
fragment DQ   : '"'  ;
fragment NDQ   : ~'"'  ;
fragment EDQ   : '""'  ;
fragment SQ   : '\''  ;
fragment NSQ   : ~'\''  ;
fragment ESQ   : '\'\''  ;
fragment DEC_DIGIT:    [0-9];
fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];
