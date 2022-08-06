function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making a request to ${location}`)
    if (location === "Amazon") {
      resolve("Amazon says hello")
    } else {
      reject("We can only talk to Amazon sorry")
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response ")
    resolve(`Extra Information + ${response} `)
  })
}

// using promises
makeRequest("Amazon")
  .then((response) => {
    console.log("Response Received !")
    return processRequest(response)
  })
  .then((processedResponse) => {
    console.log(processedResponse)
  })
  .catch((err) => {
    console.log(err)
  })

// using async await
async function doThing() {
  const response = await makeRequest("Amazon") // this will only return the resolved section
  console.log("Response Received !")

  const processedResponse = await processRequest(response)
  console.log(processedResponse)
}

doThing()
