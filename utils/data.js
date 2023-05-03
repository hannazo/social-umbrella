const { Types } = require('mongoose');

const userData = [
    {
        username: 'sampleUser',
        email: 'sampleuser@email.com'
    },
    {
        username: 'anotherUser',
        email: 'anotheruser@email.com',
    },
    {
        username: 'yetAnotherUser',
        email: 'yetanotheruser@email.com',
    },
    {
        username: 'oneMoreUser',
        email: 'onemoreuser@email.com',
    },
    {
        username: 'lastUser',
        email: 'lastuser@email.com',
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