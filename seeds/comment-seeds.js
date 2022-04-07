const { Comment } = require('../models');

// update these seeds to match the post so the comments make sense.
const commentdata = [
    {
        comment_text: 'Who wants to have fun????!!!.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'How do I know what if I am a weeb?',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Aliquam erat volutpat. In congue.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
