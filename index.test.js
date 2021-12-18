/* naovao is a pure Node.js implementation of PKWARE DCL Implode
Copyright (C) 2021  Drazi Crendraven

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const assert = require("assert")
const { explode, implode} = require("./index")

console.info('testing explode()...')
assert.equal(typeof explode, "function", 'explode is a function')
try {
    explode('test string')
    assert.fail('should throw error')
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error(error.message)
    } else
    if (error instanceof Error) {
        assert.equal(error.message, 'input is not a Buffer object', 'explode returns an error when not passed a string as input')
    } else {
        assert.fail(`explode returned an unexpected error of: ${error.toString()}`)
    }
}
console.info('OK')


console.info('testing implode()...')
assert.equal(typeof implode, "function", 'implode is a function')
try {
    implode('test string')
    assert.fail('should throw error')
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error(error.message)
    } else
    if (error instanceof Error) {
        assert.equal(error.message, 'input is not a Buffer object', 'implode returns an error when not passed a string as input')
    } else {
        assert.fail(`implode returned an unexpected error of: ${error.toString()}`)
    }
}
console.info('OK')