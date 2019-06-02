describe('Routes: Posts', () => {
  const defaultPost = {
    post: 'Default Post',
    description: 'Default description',
    author: 'Default author',
    likes: 100
  }

  describe('GET /posts', () => {
    let request

    before(() => {
      return setupApp().then(app => {
        request = supertest(app)
      })
    })
    it('should return a list of posts', done => {
      request.get('/api/posts').end((err, res) => {
        expect(res.body[0]).to.be.eql(defaultPost)
        done(err)
      })
    })
  })
})
