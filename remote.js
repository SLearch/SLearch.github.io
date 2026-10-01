globalThis.hijack = async function(option="DriveLog", args={}){
  var options = {
    "H1J@CK": "[ NREX_SWEEP + RXEXCRYPTION ]",
    "DriveSweep": "Sweeps drive for a certain file",
    "DriveLog": "Logs all files in google drive"
  }
  var test = `HIJACK - ${prodconfig.PRODUCT_NAME}

Chosen Option ${option} (${options[option]})

will continue in
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
  if (option == "DriveLog") {
    var drv = DriveApp.getFiles()
    while (drv.hasNext()) {
      console.log(drv.next().getName())
    }
  }
}
