globalThis.hijack = async function(option="DriveLog", args={}){
  var options = {
    "H1J@CK": "[ NREX_SWEEP + RXEXCRYPTION ]",
    "DriveSweep": "Sweeps drive for a certain file",
    "DriveLog": "Logs all files in google drive"
  }
  var files = []
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
      files.push(drv.next().getName())
    }
    console.log(files)
  } else if (option == "DriveSweep") {
    var drv = DriveApp.getFilesByName(args.filename)
    if (drv.hasNext()) {
      var thing = drv.next()
      console.log(`Found file - ${thing.getName()}-${thing.getId()}`)
      return drv.next()
    } else {
      console.error("No Such File")
    }
  }
}
