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
function scannear(){
    alert('hue');
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        ref window.open('http://feedbackhunter.com.br/formulario_novo/main.html'); 
        ref.addEventListener('loadstop', function(event) {        
            if (event.url.match("mobile/close")) {
                alert('eh noiz!');
                ref.close();
            }
        });
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
    alert("hua");
}
function fechar(){
    window.close();
}



