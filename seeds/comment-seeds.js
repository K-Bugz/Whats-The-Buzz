const { Comment } = require('../models');

// update these seeds to match the post so the comments make sense.
const commentdata = [
    {
        comment_text: 'If I like tentacles, does that make me a WEEEB????!!!.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I think the best players ever is Walter Payton, Tom Brady, and Jerry Rice!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'I like Anime only if it follows the Manga. Call me a purist but, sh*t better follow the correct story. ',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Dr. UncPie is right but, I liked FullMetal Alchemist had one that followed the manga in brotherhood and the regular did not.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'My first memory was this jerk down the road that gave me a pipe and said it was a bomb. It was so heavy that I hung it in a tree so it did not explode.',
        user_id: 1,
        post_id: 5
    },
    {
        comment_text: 'Best player has to be Lawrence Taylor. LT was a freak that changed the game.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'I recall my dad pulling me and my brother in a sled. We went to McDonalds and had warm food.',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'My first memory is sharting at my grandmas house. It was a crappy day.',
        user_id: 3,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
