function iterativeLog(array) {
  array.forEach(index => {
    console.log(`${index-1}: ${index}`)
  })
}

function iterate(callback) {
  var testArray = ["monkey", "dog", "wolf", "cat", "python"]
  testArray.forEach(callback)
  return testArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}