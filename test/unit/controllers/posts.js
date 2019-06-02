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

      const postsController = new PostsController(Posts)
      return postsController.getAll(request, response).then(() => {
        sinon.assert.calledWith(response.send, defaultPost)
      })
    })

    it('should return 400 when an error occurs', () => {
      const request = {}
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      }

      response.status.withArgs(400).returns(response)
      Posts.find = sinon.stub()
      Posts.find.withArgs({}).rejects({ message: 'Error' })

      const postsController = new PostsController(Posts)

      return postsController.getAll(request, response).then(() => {
        sinon.assert.calledWith(response.send, 'Error')
      })
    })
  })
})
