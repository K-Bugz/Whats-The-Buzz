SELECT * FROM what_buzz_db.vote;

-- Up votes: vote = 1 is up vote and I am doing a specific query for for post_id = 1 
SELECT COUNT(*) FROM what_buzz_db.vote 
WHERE post_id = 1 and vote = 1;


-- Down votes for post_id = 1 
SELECT COUNT(*) FROM what_buzz_db.vote 
WHERE post_id = 1 and vote = 0;

USE what_buzz_db;
SELECT `post`.`id`, `post`.`post_url`, `post`.`title`, `post`.`created_at`, (SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id and vote = 1) AS `upvote_count`, (SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id and vote = 0) AS `downvote_count`,`comments`.`id` AS `comments.id`, `comments`.`comment_text` AS `comments.comment_text`, `comments`.`post_id` AS `comments.post_id`, `comments`.`user_id` AS `comments.user_id`, `comments`.`created_at` AS `comments.created_at`, `comments->user`.`id` AS `comments.user.id`, `comments->user`.`username` AS `comments.user.username`, `user`.`id` AS `user.id`, `user`.`username` AS `user.username` FROM `post` AS `post` LEFT OUTER JOIN `comment` AS `comments` ON `post`.`id` = `comments`.`post_id` LEFT OUTER JOIN `user` AS `comments->user` ON `comments`.`user_id` = `comments->user`.`id` LEFT OUTER JOIN `user` AS `user` ON `post`.`user_id` = `user`.`id`;