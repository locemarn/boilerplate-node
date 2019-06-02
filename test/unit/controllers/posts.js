import PostsController from '../../../src/controllers/posts'
import sinon from 'sinon'

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
    it('should return a list of posts', () => {
      const request = {}
      const response = {
        send: sinon.spy()
      }

      const postsController = new PostsController()
      postsController.getAll(request, response)

      expect(response.send.called).to.be.true
      expect(response.send.calledWith(defaultPost)).to.be.true
    })
  })
})
