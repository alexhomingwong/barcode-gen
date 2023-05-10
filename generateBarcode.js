const bwipjs = require("bwip-js");
const fs = require("fs");

const barcodeData =
  '{"aisle": "F", "store": "0432", "floor": "1", "shelf": "CD"}';
const barcodeOptions = {
  bcid: "code128", // barcode type
  text: barcodeData, // data to encode
};

bwipjs.toBuffer(barcodeOptions, function (err, png) {
  if (err) {
    console.log(err);
  } else {
    // png contains the barcode image as a Buffer
    console.log(png);
    fs.writeFileSync("./example.png", png);
  }
});
