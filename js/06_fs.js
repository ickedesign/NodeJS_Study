const fs = require('fs')

const result = fs.readFile('./06_fs.js', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log(result)

// undefined
// <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 27 66 73 27 29 0d 0a 0d 0a 63 6f 6e 73 74 20 72 65 73 75 6c 74 20 3d 20 66 73 2e 72 65 61 64 ... >
