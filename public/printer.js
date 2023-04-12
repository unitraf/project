const { ipcRenderer } = require("electron");
const QRCode = require("qrcode");


const bg = `<div class="bg-logo" ><img src="footer-logo.png" alt="Logo" style="width: 300px;height: 300px;"></div>`;
document.addEventListener("DOMContentLoaded", (e) => {
  // document.body.innerHTML ="<h1>Impression window</h1>"
  let data = {
    name:"Employee Name",
    age:27,
    department:"Police",
    id:"aisuoiqu3234738jdhf100223"
}
let stringdata = JSON.stringify(data)
  QRCode.toFile(
    "qr.png",
    "Encoder ce texte en code QR",
    { errorCorrectionLevel: "H" },
    (err) => {
      if (err) console.log(err);
      console.log("QR code enregistré !")
    }
  );

  QRCode.toString(stringdata, {
    errorCorrectionLevel: 'H',
    type: 'terminal'
  }, function(err, data) {
    if (err) throw err;
    console.log(data);
  });

  QRCode.toDataURL(stringdata, function (err, url) {
    if(err) return console.log("error occurred")
    console.log(url)
})

// QRCode.toDataURL('text',  function (err, url) {
//   if (err) throw err

//   var img = document.getElementById('qr')
//   img.src = url
// })

});

ipcRenderer.on("print", (e, content) => {

  // let certification = `F${nim};${code};${nif};${aaaammjjhhmmss}`
  let secef = `FIC01000228-1;5QAB6USKWHPULFTVMYPVQLC;1236;20230107155350`
  console.log(content);
  document.body.innerHTML = `<div>${content} ${bg}</div>`;
  QRCode.toDataURL(secef,  function (err, url) {
    if (err) throw err
  
    var img = document.getElementById('qr')
    img.src = url
  })
  
  ipcRenderer.send("print-minute");
});
