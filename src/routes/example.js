import express from 'express'
import { getAll, getById, create, update, del } from '../../controllers/example'
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    params: getAll()
  })
})

router.get('/:id', (req, res) => {
  res.status(201).json({
    params: getById(req.params.id)
  })
})

router.post('/', (req, res) => {
  const newData = req.body

  res.status(201).json({
    params: create(newData),
    msg: 'Dados criados com sucesso.'
  })
})

router.put('/:id', (req, res) => {
  res.status(201).json({
    params: update(req.params.id, req.body),
    dados: 'salvos com sucesso!'
  })
})

router.delete('/:id', (req, res) => {
  res.status(201).json({
    msg: 'Dados excluidos com sucesso.'
  })
})

export default router
