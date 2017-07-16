const { parse } = require('../')
const fs = require('fs')
const test = require('tape')

const osm = fs.readFileSync(__dirname + '/../data/example.osm', 'utf-8')

test('test parse', (t) => {
    const result = parse(osm)
    console.log(JSON.stringify(result, null, 2))
    t.equal(result.version, '0.6')
    t.equal(result.version, '0.6')
    t.equal(Array.isArray(result.nodes), true)

    t.end()
})