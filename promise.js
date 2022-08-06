let myPromise = new Promise((resolve, reject) => {
  let value = 1 + 1

  if (value === 2) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})

myPromise
  .then((message) => {
    // when succeeds
    console.log("This is the then " + message)
  })
  .catch((message) => {
    // when fails
    console.log("This is in the catch" + message)
  })
