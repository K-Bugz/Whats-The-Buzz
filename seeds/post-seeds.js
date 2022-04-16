const { Post } = require('../models');

const postdata = [
    {
        title: 'Am I am weeb?',
        post_url: 'https://www.quizexpo.com/weeb-test/',
        user_id: 1
    },
    {
        title: 'Who is the best NFL player?',
        post_url: 'https://en.wikipedia.org/wiki/The_Top_100:_NFL%27s_Greatest_Players',
        user_id: 3
    },
    {
        title: 'Who is the best NBA player?',
        post_url: 'https://www.sportingnews.com/us/nba/news/nba-greatest-player-rankings-1-10/1krt9rauze7s21xes8fi657ifo',
        user_id: 3
    },
    {
        title: 'Are pugs cute or ugly?',
        post_url: './public/images/pug.jpg',
        user_id: 2
    },
    {
        title: 'What was your first memory?',
        post_url: 'moo.com',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
