describe('Routes Example', () => {
  let data = [
    { id: 1, name: 'example name', age: 11 },
    { id: 2, name: 'example name', age: 22 },
    { id: 3, name: 'example name', age: 33 },
  ]

  describe('Route GET /example', () => {
    it('should return a example list', done => {
      expect(data[0].name).to.be.eql('example name');
      expect(data[0].age).to.be.eql(11);

      done()
    })
  })

  describe('Route POST /api/example', () => {
    it('should create a example', done => {
      data.push({
        id: 4,
        name: 'example name',
        age: 44
      })

      expect(data.length).to.be.eql(4)
      expect(data[3].id).to.be.eql(4)
      expect(data[3].name).to.be.eql('example name')
      expect(data[3].age).to.be.eql(44)

      done()
    })
  })

  describe('Route PUT /api/example/{id}', () => {
    it('should return a updated example', done => {
      const updated = () => {
        let res = data.find(found => {
          return found.id == 1
        })
        res.name = 'updated name'
        return res
      }

      expect(updated().name).to.be.eql('updated name')

      done()
    })
  })

  describe('Route DEL /api/example/{id}', () => {
    it('should delete a example', done => {
      const deleted = () => {
        let res = data.filter(found => {
          return found.id != 1
        })
        return res
      }

      expect(deleted().length).to.be.eql(3)

      done()
    })
  })
})
