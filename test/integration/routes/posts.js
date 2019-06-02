import Posts from '../../../src/models/post'

describe('Routes: Posts', () => {
  let request

  before(() => {
    return setupApp().then(app => {
      request = supertest(app)
    })
  })

  const defaultPost = {
    post: 'Default Post',
    description: 'Default description',
    author: 'Default author',
    likes: 100
  }

  const expectPost = {
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    post: 'Default Post',
    description: 'Default description',
    author: 'Default author',
    likes: 100
  }

  beforeEach(() => {
    const posts = new Posts(defaultPost)
    posts._id = '56cb91bdc3464f14678934ca'
    return Posts.deleteMany({}).then(() => posts.save())
  })

  afterEach(() => Posts.deleteMany({}))

  describe('GET /posts', () => {
    it('should return a list of posts', done => {
      request.get('/api/posts').end((err, res) => {
        expect(res.body).to.eql([expectPost])
        done(err)
      })
    })
  })
})
