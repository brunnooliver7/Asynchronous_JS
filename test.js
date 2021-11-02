Promise.resolve('Success!')

.then(() => {
  console.log('then 1')
  throw Error('Oh noes!')
})

.catch(error => {
  console.log('catch 1')
  return 'actually, that worked'
})

.then(data => {
  console.log('then 2')
  throw Error('The fails!')
})

.catch(error => {
  console.log('catch 2')
  console.log(error.message)
})

Promise.resolve('Success')

.then((data) => {
  console.log(data)
  return new Error('test')
})

.then((data) => {
  console.log('erro aqui', data)
})

.catch(() => {
  console.log('cheguei no catch')
})