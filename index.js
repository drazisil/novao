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

/**
 * Deconpress a data stream compressed with PKWARE DCL Implode
 * @param {Buffer} input bytes to be decompressed
 * @returns {Buffer} plaintext bytes
 */
function explode(input) {
    if (!(input instanceof Buffer)) {
        throw new Error('input is not a Buffer object')
    }
}

/**
 * Compress a data stream with PKWARE DCL Implode
 * @param {Buffer} input bytes to compress
 * @returns {Buffer} compressed bytes
 */
function implode(input) {
    
}

module.exports = {
    explode,
    implode,
}
