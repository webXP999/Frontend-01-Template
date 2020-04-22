# 每周总结
通过上周的课程，老师从编程语言通识与JavaScript语言设计层面作为切入口，来介绍JavaScript，让我对语言底层有了更深层次的认识；接下来老师深入JavaScript类型，及布置的作业让我对类型有了深入理解，特别是Number和String的直接量

## Numeric Literals Number直接量

Syntax
NumericLiteral :: 
    DecimalLiteral
    HexIntegerLiteral
DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigitsopt 
    . DecimalDigits ExponentPartopt
    DecimalIntegerLiteral ExponentPartopt
DecimalIntegerLiteral :: 
    0
    NonZeroDigit DecimalDigitsopt
DecimalDigits :: 
    DecimalDigit
    DecimalDigits DecimalDigit 
DecimalDigit :: one of
    0123456789
NonZeroDigit :: one of 
    123456789
ExponentPart ::
    ExponentIndicator SignedInteger
ExponentIndicator :: one of 
    e E
SignedInteger :: 
    DecimalDigits
    + DecimalDigits 
    - DecimalDigits
HexIntegerLiteral :: 
    0x HexDigit 
    0X HexDigit
    HexIntegerLiteral HexDigit
HexDigit :: one of 
    0123456789abcdefABCDEF



## String Literals String直接量

Syntax
StringLiteral ::
    " DoubleStringCharactersopt " 
    'SingleStringCharactersopt '
DoubleStringCharacters ::
    DoubleStringCharacter 
    DoubleStringCharactersopt
SingleStringCharacters ::
    SingleStringCharacter 
    SingleStringCharactersopt
DoubleStringCharacter ::
    SourceCharacter but not one of " or \ or LineTerminator 
    \ EscapeSequence
    LineContinuation
SingleStringCharacter ::
    SourceCharacter but not one of ' or \ or LineTerminator 
    \ EscapeSequence
    LineContinuation
LineContinuation ::
    \ LineTerminatorSequence
EscapeSequence :: 
    CharacterEscapeSequence
    0 [lookahead  DecimalDigit] 
    HexEscapeSequence 
    UnicodeEscapeSequence
CharacterEscapeSequence :: 
    SingleEscapeCharacter
    NonEscapeCharacter 
    SingleEscapeCharacter :: one of
    ' " \ b f n r t v
NonEscapeCharacter ::
    SourceCharacter but not one of EscapeCharacter or LineTerminator
EscapeCharacter :: 
    SingleEscapeCharacter
    DecimalDigit
    x u
HexEscapeSequence ::
    x HexDigit HexDigit
UnicodeEscapeSequence ::
    u HexDigit HexDigit HexDigit HexDigit

# 笔记
语法分类

非形式语言

    中文、英文

形式语言（乔姆斯基谱系）

    0型 无限制文法

    1型 上下文相关文法

    2型 上下文无关文法

    3型 正则文法

产生式（BNF）

    四则运算：1+2*3
    
    终结符：Number、+-*/

    非终结符：MultiplicativeExpression、AdditiveExpression

通过产生式理解乔姆斯基谱系

    0型：无限制文法
        ?::=?
    1型 上下文相关文法
        ?<A>?::=?<B>?
    2型 上下文无关文法
        <A>::=?
    3型 正则文法
        <A>::=<A>?

图灵完备性
    命令式——图灵机
        goto
        if和while
    声明式——lambda
        递归

动态
    Runtime

静态
    Compiletime

类型系统
    动态类型系统与静态类型系统
    强类型与弱类型
    复合类型
    子类型

JavaScript Types

Number、String、Boolean、Null、Undefined
