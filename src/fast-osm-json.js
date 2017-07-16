const transform = require('camaro')
const omitEmpty = require('omit-empty')

exports.parse = function parse(xml) {
    const json = transform(xml, {
        version: 'osm/@version',
        generator: 'osm/@generator',
        nodes: [
            'osm/node',
            {
                id: '@id',
                changeset: '@changeset',
                timestamp: '@timestamp',
                user: '@user',
                visible: 'boolean(@visible)',
                version: '@version',
                lat: 'number(@lat)',
                lon: 'number(@lon)',
                tags: [
                    'tag',
                    {
                        k: '@k',
                        v: '@v'
                    }
                ]
            }
        ],
        ways: [
            'osm/way',
            {
                id: '@id',
                timestamp: '@timestamp',
                user: '@user',
                visible: 'boolean(@visible)',
                version: '@version',
                tags: [
                    'tag',
                    {
                        k: '@k',
                        v: '@v'
                    }
                ],
                nd: [
                    'nd',
                    {
                        ref: '@ref'
                    }
                ]
            }
        ],
        bounds: {
            minlat: '@minlat',
            minlon: '@minlon',
            maxlat: '@maxlat',
            maxlon: '@maxlon'
        },
        relation: [
            'osm/relation',
            {
                id: '@id',
                user: '@user',
                uid: '@uid',
                visible: 'number(@visible)',
                version: '@version',
                changeset: '@changeset',
                timestamp: '@timestamp',
                members: [
                    'member',
                    {
                        type: '@type',
                        ref: '@ref',
                        role: '@role'
                    }
                ],
                tags: [
                    'tag',
                    {
                        k: '@k',
                        v: '@v'
                    }
                ]
            }
        ]
    })

    return omitEmpty(json)
}
