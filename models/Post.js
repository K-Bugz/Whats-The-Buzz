const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // sequelize handles all req to db
// create our Post model
class Post extends Model { // upvote is a method we created and used the word static is a method of the class and not an instance. 
    static upvote(body, models) {
        return models.Vote.create({ // creates a new row
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({ //  provides the new count via post id. 
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'post_url',
                    'title',
                    'created_at',
                    // 
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                        'vote_count'
                    ]
                ]
            });
        });
    }
}

// create fields/columns for Post model
Post.init( // initalizing the table 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;