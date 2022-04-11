const { Vote } = require('../models');

const votedata = [
    {
        user_id: 1,
        post_id: 1,
        vote: false
    },
    {
        user_id: 2,
        post_id: 2,
        vote: true
    },
    {
        user_id: 3,
        post_id: 1,
        vote: true
    }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
