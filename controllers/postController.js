const posts = require("../models/Post");

//create post
exports.createPost = (req, res) => {
    const {username, content} = req.body;
    if (!username || !content) {
        return res.status(400).json({ message: "Username and content required"});
    }
    const post = {username, content, createdAt: new Date() };
    posts.push(post);
    res.status(201).json({ message: "Post created", post });
}

// get all posts
exports.getPosts = (req, res) => {
    res.json(posts);
};

