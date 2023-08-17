/* ------------------------------------------------ */
/* ------------- Password Generador --------------- */
/* ------------------------------------------------ */

/* Es necesario instalar este modulo para poder utilizar esta libreria y sus metodos */
const readline_s = require('readline-sync')
/* Esto es una expresion regular */
const passExpReg = /^[a-z]{1,25000}$/
let endPass = ''

/* Se crea una función para verificar si la contraseña ingresada por el cliente cumple con los parametros */
const valData = (data) => {
    /*bucle para verificar la contraseña, en caso de no cumplir con los parametros el bucle se repetira hasta que la contraseña sea correcta */
    while (!passExpReg.test(data)) {
        console.log('Only letters are allowed, Plis enter the first password again: ')
        data = ((readline_s.question('Enter the first paswword: ')).split(/\s+/).join('')).toLowerCase()
        console.log(`The entered value is: ${data}`)
        /* console.log(typeof data)
        console.log(!passExpReg.test(data)) */
    }
    return data
}

const pushPass = (data1, data2) => {
    for (let i = 0; i < data1.length; i++) {
        endPass += data1[i]
        if (data2.length > i) {
            endPass += data2[i]
        }
    }
}

console.log('remember, only lowercase letters are allowed, between 1 and 25000 characters')
/* Con la función 'split' creamos un arreglo eliminando los espacios, con 'join' unimos esos valores de la lista(Array)*/
let pass1 = ((readline_s.question('Enter the first paswword: ')).split(/\s+/).join('')).toLowerCase()
pass1 = valData(pass1)
listLetters1 = (valData(pass1)).split('')
/* console.log(pass1) */
/* console.log(listLetters1) */
let pass2 = ((readline_s.question('Enter the second paswword: ')).split(/\s+/).join('')).toLowerCase()
pass2 = valData(pass2)
listLetters2 = (valData(pass2)).split('')
/* console.log(pass2) */
/* console.log(listLetters2) */

if (listLetters1.length >= listLetters2.length){
    pushPass(listLetters1, listLetters2)
} else {
    pushPass(listLetters2, listLetters1)
}

/* console.log(`The union of password1 "${pass1}" and password2 "${pass2}" es: ${endPass}`) */

console.log(endPass)


/* ------------------------------------------------ */
/*  ---- Creado Por: William Villamizar Garcés ---- */
/* ------------------------------------------------ */