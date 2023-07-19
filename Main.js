window.addEventListener('load', Start, false);

window.requestAnimationFrame = (
    function() {
		console.log('requestAnimationFrame');
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame 
            || window.mozRequestAnimationFrame || function(callback) {
                window.setTimeout(callback,17);
            }; 
    }
)();

document.addEventListener('mousemove',
    function(evt) {
		console.log('mousemove');
        mousex = evt.pageX - juego.offsetLeft;
        mousey = evt.pageY - juego.offsetTop;
    }, 
    false
);

document.addEventListener('keydown',
    function(evt) { 
		console.log('keydown');
        lastPress = evt.keyCode;  
        presiona[evt.keyCode] = true; 
    },
    false
);

document.addEventListener('keyup',
    function(evt) {
		console.log('keyup');
        presiona[evt.keyCode] = false; 
    },
    false
);

var juego = null;
var ctx = null;
var presiona = [];
var lastPress = null;

const engine = new Engine();
var game = new Game();

function Start() {
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
    
    
    Update();
}

function Update() {
    setTimeout(Update,40);
    
    if (game.Scene == 1) {
        console.log(1111111111111111111111111111);
        jugar();
        GenerateGame(); 
    }

    if (game.Scene == 2) {
        CoverLogic(); 
        GenerateCover(); 
    }
    
    if (game.Scene == 3) {
        console.log(3333333333333333333333333333);

        game.AddPlayer(new Character(...engine.GetPlayer1Keys(),10, 20, 15));
        game.Characters[0].SetPhysics(0, 0, 0, 0, 0, 0, 0);

        game.AddPlayer(new Character(...engine.GetPlayer2Keys(),15, 20, 10));
        game.Characters[1].SetPhysics(0, 0, 0, 0, 0, 0, 0);

        game.Characters[0].ImpulseX = 0;
        game.Characters[0].ImpulseY = 0;
        CreateScene();
    }
    
}