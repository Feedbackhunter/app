function onload(){
	document.addEventListener('deviceready', checkConnection, false);
}

function checkConnection() {
    window.plugins.toast.showLongBottom('Hello there!', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
}
function alertCallback(){

}