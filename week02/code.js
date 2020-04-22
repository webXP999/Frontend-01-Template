
// 写一个正则表达式 匹配所有 Number 直接量
function checkNum(val) {
    // \ 转义符
    // \s空格
    // *匹配前一个表达式 0 次或多次。等价于 {0,}
    // | 或
    // ? 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}
    // \d 匹配一个数字 等价于[0-9]
    // + 匹配前面一个表达式 1 次或者多次。等价于 {1,}
    // (x)捕获括号 匹配x并且记住匹配项
    // (\+\-|\-\+)*|\+|\-)? 正负
    // (\d+)?(.\d*)?([e|E](\+|\-)?(\d*))? 匹配十进制、数字、浮点数、e
    // 0x[0-9a-fA-F]+ 匹配16进制数
    const reg = /^(\s)*((\+\-|\-\+)*|\+|\-)?((\d+)?(.\d*)?([e|E](\+|\-)?(\d*))?|0x[0-9a-fA-F]+|Infinity|NaN)(\s)*$/;
    return reg.test(val);
}


// 写一个 UTF-8 Encoding 的函数
// 得到某一个字符串对应UTF-8编码的字节序列
function encodeUtf8(text) {
    const code = encodeURIComponent(text)
    const bytes = []
    for(var i = 0; i < code.length; i++) {
        const c = code.charAt(i)
        if(c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2)
            const hexVal = parseInt(hex, 16)
            bytes.push(hexVal)
            i += 2
        }else{
            bytes.push(c.charCodeAt(0))
        }
    }
    return bytes
}

// 将以UTF-8编码的字节序列解码为String
function decodeUtf8(bytes) {
    var encoded = ""
    for(var i = 0; i < bytes.length; i++) {
        encoded += '%' + bytes[i].toString(16)
    }
    return decodeURIComponent(encoded)
}

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

function checkString(str) {
    // [^\"\n\r\u2028\u2029]
    // \(?:[\'\"\b\f\n\r\t\v\n\r\u2028\u2029]|\r\n)
    // \\x[0-9a-fA-F]{2} 匹配编码
    // \\u[0-9a-fA-F]{4} 匹配 Unicode 值
    // \\[^0-9ux\'\"\b\f\n\r\t\v\n\r\u2028\u2029]
    var reg = new RegExp("(?:[^\"\n\r\u2028\u2029]|\(?:[\'\"\b\f\n\r\t\v\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux\'\"\b\f\n\r\t\v\n\r\u2028\u2029])*")
    
    return text.test(reg)
}