import {
  getAll,
  getById,
  create,
  update,
  del
} from '../../../controllers/example'

describe('Controllers: Example', () => {
  describe('Get all example getAll()', () => {
    it('should return a example list', () => {
      const Example = {
        findAll: td.function()
      }

      const expectedResponse = [
        { id: 1, name: 'example name', age: 11 },
        { id: 2, name: 'example name', age: 22 },
        { id: 3, name: 'example name', age: 33 },
      ]

      td.when(Example.findAll({})).thenResolve(expectedResponse)

      let res = getAll()

      expect(res).to.be.eql(expectedResponse)
    })
  })

  describe('Get by Id getById()', () => {
    it('should return a example by id', () => {
      const Example = {
        findOne: td.function()
      }
      const expectedResponse =
        { id: 1, name: 'example name', age: 11 }

      td.when(Example.findOne({ where: { id: 1 } })).thenResolve(expectedResponse)

      let res = getById(1)

      expect(res).to.be.eql(expectedResponse)
    })
  })

  describe('Create a example', () => {
    it('should create a example', () => {
      const Example = {
        create: td.function()
      }

      const expectedResponse = {
        id: 4,
        name: 'example name',
        age: 44
      }

      const reqBody = {
        id: 4,
        name: 'example name',
        age: 44,
      }

      td.when(Example.create(reqBody)).thenResolve(expectedResponse)

      let res = create(reqBody)

      expect(res[3].name).to.be.eql('example name')
      expect(res[3].age).to.be.eql(44)
      expect(res.length).to.be.eql(4)
    })
  })

  describe('Update a example', () => {
    it('should update one example', () => {

      const Example = {
        update: td.function()
      }

      const reqBody = {
        id: 1,
        name: 'updated name',
        age: 100
      }

      const expectedResponse = {
        id: 1,
        name: 'updated name',
        age: 100
      }

      td.when(Example.update(reqBody, { where: { id: 1 } })).thenResolve(expectedResponse)

      const res = update(1, reqBody)

      expect(res).to.be.eql(expectedResponse)
    })
  })

  describe('Delete a example', () => {
    it('should delete a example', () => {

      const Example = {
        destroy: td.function()
      }

      td.when(Example.destroy({ where: { id: 1 }})).thenResolve({})

      const res = del(3)

      expect(res.length).to.be.eql(3)

    })
  })
})
