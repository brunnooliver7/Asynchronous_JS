async function example() {
  try {
    await abc;
  } catch (error) {
    console.log('abc does not exists', error)
  } finally {
    console.log('runs code anyaway')
  }
}

example()