let num = 0
let firstNum
let secondNum
let opp

function clr() {
    paragraph.innerHTML = ''
}

function zero() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 0
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 0
    }
}

function one() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 1
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 1
    }
}

function two() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 2
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 2
    }
}

function three() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 3
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 3
    }
}

function four() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 4
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 4
    }
}

function five() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 5
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 5
    }
}

function six() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 6
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 6
    }
}

function seven() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 7
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 7
    }
}

function eight() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 8
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 8
    }
}

function nine() {
    if (paragraph.innerHTML == '') {
        paragraph.innerHTML = 9
    } else if (paragraph.innerHTML != '') {
        paragraph.innerHTML += 9
    }
}

function addition() {
    opp = '+'
    paragraph.innerHTML += ' + '
}

function subtraction() {
    opp = '-'
    paragraph.innerHTML += ' - '
}

function division() {
    opp = '/'
    paragraph.innerHTML += ' / '
}

function multiplication() {
    opp = '*'
    paragraph.innerHTML += ' * '
}

function equals() {
    if (paragraph.innerHTML.includes('+') || paragraph.innerHTML.includes('-') || paragraph.innerHTML.includes('/') || paragraph.innerHTML.includes('*')) {
        x = paragraph.innerHTML.split(' ')
        const sum = x.reduce((partialSum, a) => partialSum + a);
        paragraph.innerHTML = eval(sum)
    } else {
        alert('error')
        clr()
    }
}