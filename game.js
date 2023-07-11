// Inicio
window.addEventListener('load', init, false);
var juego = null;
var ctx = null;
var presiona = [];
var lastPress = null;

// Disparador
function init() {
	tocar1 = document.getElementById("sonidofx");
    juego = document.getElementById('iijuego');
    ctx = juego.getContext('2d');  

    juego.width = 1280;
    //juego.height = 720;
    juego.height = 820;
    juego.style.position = 'fixed';
    juego.style.top ='0';
    juego.style.left = '0';
    juego.style.width = '100%';
    juego.style.height = '100%';
    
    enableInputs();
    bucle();
}

function bucle() {
    setTimeout(bucle,40);
    if (pantalla_juego == 1) {
        jugar();
        pintar_jugar(); 
    }
    if (pantalla_juego == 2) {
        portada(); 
        pintar_portada(); 
    }
    if (pantalla_juego == 3) {
        niveles();
    }
}


// iniciar control
function enableInputs() {
    juego.addEventListener('mousedown',
        function(evt) {
            lastPress = evt.which; 
        },
        false
    );

    juego.addEventListener('mouseup',
        function(evt) {
            lastPress = 0; 
        },
        false
    );
}


document.addEventListener('mousemove',
    function(evt) {
        mousex = evt.pageX - juego.offsetLeft;
        mousey = evt.pageY - juego.offsetTop;
    }, 
    false
);

document.addEventListener('keydown',
    function(evt) { 
        lastPress = evt.keyCode;  
        presiona[evt.keyCode] = true; 
    },
    false
);

document.addEventListener('keyup',
    function(evt) {
        presiona[evt.keyCode]=false; 
    },
    false
);

//---------
window.requestAnimationFrame = (
    function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame 
            || window.mozRequestAnimationFrame || function(callback) {
                window.setTimeout(callback,17);
            }; 
    }
)();