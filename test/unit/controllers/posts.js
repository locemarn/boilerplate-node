import PostsController from '../../../src/controllers/posts'
import sinon from 'sinon'
import Posts from '../../../src/models/post'

describe('Controllers: Posts', () => {
  const defaultPost = [
    {
      post: 'Default Post',
      description: 'Default description',
      author: 'Default author',
      likes: 100
    }
  ]

  describe('getAll() posts', () => {
    it('should call send a list of posts', () => {
      const request = {}
      const response = {
        send: sinon.spy()
      }
      Posts.find = sinon.stub()

      Posts.find.withArgs({}).resolves(defaultPost)

      const postController = new PostsController(Posts)
      return postController.getAll(request, response).then(() => {
        sinon.assert.calledWith(response.send, defaultPost)
      })
    })
  })
})
