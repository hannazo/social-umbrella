const { Types } = require('mongoose');

const userData = [
    {
        username: 'sampleUser',
        email: 'sampleuser@email.com',
        thoughts: [ new Types.ObjectId() ],
        friends: [ new Types.ObjectId() ]
    },
    {
        username: 'anotherUser',
        email: 'anotheruser@email.com',
        thoughts: [ new Types.ObjectId() ],
        friends: [ new Types.ObjectId() ]
    },
    {
        username: 'yetAnotherUser',
        email: 'yetanotheruser@email.com',
        thoughts: [ new Types.ObjectId() ],
        friends: [ new Types.ObjectId() ]
    },
    {
        username: 'oneMoreUser',
        email: 'onemoreuser@email.com',
        thoughts: [ new Types.ObjectId() ],
        friends: [ new Types.ObjectId() ]
    },
    {
        username: 'lastUser',
        email: 'lastuser@email.com',
        thoughts: [ new Types.ObjectId() ],
        friends: [ new Types.ObjectId() ]
    },
];

const thoughtData = [
    {
        thoughtText: 'This is a sample thought',
        createdAt: new Date(),
        username: 'sampleUser',
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: 'Great thought!',
                username: 'anotherUser',
                createdAt: new Date(),
            },
            {
                reactionId: new Types.ObjectId(),
                reactionBody: 'Yet another great thought!',
                username: 'yetAnotherUser',
                createdAt: new Date(),
            }
        ]
    },
    {
        thoughtText: 'One more sample thought',
        createdAt: new Date(),
        username: 'onemoreuser',
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: 'I needed to read this!',
                username: 'lastUser',
                createdAt: new Date(),
            }
        ]
    }
]

module.exports = { userData, thoughtData };