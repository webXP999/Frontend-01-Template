// 匹配a
function match(str) {
    for(let c of str) {
        if(c === 'a') {
            return true
        }
    }
    return false
}
// 匹配ab
function match(str) {
    let foundA = false
    for(let c of str) {
        if(c === 'a') {
            foundA = true
        }else if(foundA && c === 'b') {
            return true
        }else{
            foundA = false
        }
    }
    return false
}

function match(str) {
    let state = start
    for(let c of str) {
        state = state(c)
    }
    return state === end
}

function start(c) {
    if(c === 'a') {
        return foundA
    }else {
        return start
    }
}

function end(c) {
    return end
}

function foundA(c) {
    if(c === 'b') {
        return foundA
    }else {
        return start
    }
}
function foundB(c) {
    if(c === 'c') {
        return foundc
    }else {
        return start
    }
}
function foundC(c) {
    if(c === 'd') {
        return foundD
    }else {
        return start
    }
}
function foundD(c) {
    if(c === 'e') {
        return foundE
    }else {
        return start
    }
}
function foundE(c) {
    if(c === 'f') {
        return end
    }else {
        return start
    }
}