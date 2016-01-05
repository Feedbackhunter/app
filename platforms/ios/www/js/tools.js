function onload(){
	document.addEventListener('deviceready', checkConnection, false);
}

function checkConnection() {

    navigator.notification.alert('hauheieauhiu', alertCallback, 'Ih rapaz', Ok);
}
function alertCallback(){
    
}