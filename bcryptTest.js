const bcrypt = require('bcryptjs')

/* const salt = bcrypt.genSaltSync(10)
const salt1 = bcrypt.genSaltSync(11)
const salt2 = bcrypt.genSaltSync(12)
const salt3 = bcrypt.genSaltSync(13)
const salt4 = bcrypt.genSaltSync(14)
const salt5 = bcrypt.genSaltSync(15)
const salt6 = bcrypt.genSaltSync(16)
const salt7 = bcrypt.genSaltSync(17)
const salt8 = bcrypt.genSaltSync(18) */

/* let startTime = performance.now()
const hash = bcrypt.hashSync('SimpleString', salt)
let endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash)
startTime = performance.now()
const hash1 = bcrypt.hashSync('SimpleString', salt1)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash1)
startTime = performance.now()
const hash2 = bcrypt.hashSync('SimpleString', salt2)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash2)
startTime = performance.now()
const hash3 = bcrypt.hashSync('SimpleString', salt3)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash3)
startTime = performance.now()
const hash4 = bcrypt.hashSync('SimpleString', salt4)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash4)
startTime = performance.now()
const hash5 = bcrypt.hashSync('SimpleString', salt5)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash5)
startTime = performance.now()
const hash6 = bcrypt.hashSync('SimpleString', salt6)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash6)
startTime = performance.now()
const hash7 = bcrypt.hashSync('SimpleString', salt7)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash7)
startTime = performance.now()
const hash8 = bcrypt.hashSync('SimpleString', salt8)
endTime = performance.now()
console.log(`Time taken: ${(endTime - startTime).toFixed(2)}ms`)
console.log(hash8) */

const salt = bcrypt.genSaltSync(13)
const hashedPassword = bcrypt.hashSync('1234', salt)
const hashedPassword2 = bcrypt.hashSync('Qs$C7QrKXB8Qw6YX$TA@', salt)
console.log(hashedPassword)
console.log(hashedPassword2)
console.log(bcrypt.compareSync('12345', hashedPassword))
