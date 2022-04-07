const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'DatBoiBugz',
        email: 'kbugusky@gmail.com',
        password: 'pword123'
    },
    {
        username: 'Meowzzers',
        email: 'jbakers@aol.com',
        password: 'fartMonster1'
    },
    {
        username: 'Dr.UncPie',
        email: 'msweas@gmail.com',
        password: 'Thomas58'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
