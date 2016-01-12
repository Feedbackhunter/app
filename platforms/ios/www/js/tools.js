function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}
function aoFecharJanela(){
  alert("A janela foi fechada pelo usuário");
}
function abrirPopup(url, windowName, opts, callback) {
    var popup = window.open("mailto:contato@feedbackhunter.com.brt?subject=subject of the email&body=whatever body body", windowName, opts);
    var intervalo = setInterval(function() {
        try {
            if (popup == null || popup.closed) {
                window.clearInterval(intervalo);
                callback(popup);
            }
        }
        catch (e) { }
    }, 20000);
    return popup;
}
function scannear(){
    alert('hue');
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
    alert("hua");
}



