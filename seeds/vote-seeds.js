const { Vote } = require('../models');

const votedata = [
    {
        user_id: 1,
        post_id: 1
    },
    {
        user_id: 2,
        post_id: 2
    },
    {
        user_id: 3,
        post_id: 1
    }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
