class PostsController {
  getAll (req, res) {
    return res.send([
      {
        post: 'Default Post',
        description: 'Default description',
        author: 'Default author',
        likes: 100
      }
    ])
  }
}

export default PostsController
