globalThis.hijack = async function(option="test"){
  var test = `
HIJACK - ${prodconfig.PRODUCT_NAME}

Chosen Option ${option}

will continue in - 
`
  console.error(test)
  console.log("5")
  await Utilities.sleep(1000)
  console.log("4")
  await Utilities.sleep(1000)
  console.log("3")
  await Utilities.sleep(1000)
  console.log("2")
  await Utilities.sleep(1000)
  console.log("1")
  await Utilities.sleep(1000)
  console.log("INITIATING")
}
