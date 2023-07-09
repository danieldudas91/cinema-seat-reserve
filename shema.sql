CREATE DATABASE cinema_room;
USE cinema_room;

CREATE TABLE seats(
    id integer PRIMARY KEY AUTO_INCREMENT,
    is_reserved boolean,
    user_email varchar(255) 
);

INSERT INTO seats(is_reserved,user_email)
VALUES
(false, null),
(false,'okgn52l@wuuvo.com'),
(false,'7h2nhkfzm@ezztt.com'),
(false,'46kkk7c4dsf@wuuvo.com'),
(false,'v7eopi2h0hl2@ezztt.com'),
(false, null),
(false,'l6ycvnhp6@qiott.com'),
(false,'d2cg5k@kzccv.com'),
(false,'ljbvd9tze9@wuuvo.com'),
(false,'7hl6vm3@kzccv.com');


