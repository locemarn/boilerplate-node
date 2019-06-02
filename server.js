import setupApp from './src/app'

const port = process.env.PORT || 5000

setupApp()
  .then(app =>
    app.listen(port, () => {
      console.table({ 'Server port:': `${port}` })
    })
  )
  .catch(error => {
    console.lerror(error)
    process.exit(1)
  })

app.listen(port, () => {})
