var imagen = new Array();

for (let i = 1; i < 8; i++) {
    imagen[i] = new Image(); 
    imagen[i].src = 'recursos/1.png';
}

imagen[8] = new Image(); imagen[8].src = 'recursos/8.png';
imagen[9] = new Image(); imagen[9].src = 'recursos/9.png';
imagen[10] = new Image(); imagen[10].src = 'recursos/10.png';

console.log('imagenes')

function ente(x, y, xmax, ymax, xini, yini, w, h, volumen, fotograma, linea, dibujo,
	dibujomax, vida, vidamax, accion, accionmax, accion2, accion2max, accion3, accion3max, accionss, avance, avance2,
	avance3, poder, potencia, etereo, estado, masa, impulsox, impulsoy, somb, subestado2, estado2, subaccion)
{

	this.Clash = function(rect) {
		if (rect!=null) {
			if (this.x < rect.x + rect.w && this.x + this.w > rect.x && this.y < rect.y + rect.h && this.y + this.h > rect.y) return(1);
			else return(0);
		}
	}

	this.buscachoque = function(cont) {
		cont = 0;
		while (cont < cantidad_seres) {
			cont += 1;
			if (this != ser[cont] && ser[cont].vida > 0) {
				if (this.Clash(ser[cont]) == 1) {
					if (this.etereo == 0 && ser[cont].etereo == 0) {
						contador3 = this.direccionar(0, 0);
						this.colision(ser[cont], contador3);
					}

					if (this.etereo == 1 && ser[cont].etereo == 1) {
						contador3 = this.direccionar(0, 0);
						this.colision(ser[cont], contador3);
					}	

					if (this.etereo == 1 && ser[cont].etereo == 2) {
						contador3 = this.direccionar(0, 0);
						this.colision(ser[cont],contador3);
					}
				}
			}
		}		
	}
	
	this.direccionar = function(direccionx, direcciony) {
		if (this.x < this.xmax) direccionx = 1;
		if (this.x > this.xmax) direccionx = 2;
		if (this.x == this.xmax) direccionx = 0;

		if (this.y < this.ymax) direcciony = 1;
		if (this.y > this.ymax) direcciony = 2;
		if (this.y == this.ymax) direcciony = 0;


		if ((direcciony == 1) && (direccionx == 0)) return(1);
		if ((direcciony == 2) && (direccionx == 0)) return(2);
		if ((direcciony == 0) && (direccionx == 1)) return(3);
		if ((direcciony == 0) && (direccionx == 2)) return(4);
		if ((direcciony == 1) && (direccionx == 1)) return(5);
		if ((direcciony == 1) && (direccionx == 2)) return(6);
		if ((direcciony == 2) && (direccionx == 1)) return(7);
		if ((direcciony == 2) && (direccionx == 2)) return(8);
		if ((direcciony == 0) && (direccionx == 0)) return(0);
	}	

	this.colision = function(rect, dir) {
		if (this.masa <= rect.masa) {
			if (dir == 2) {
				if (this == ser[2]) salto_potencia2 = 5;
				if (this == ser[1]) salto_potencia1 = 5;

				this.ymax = this.y; 
				this.y = rect.y - this.h; 
				this.impulsoy = 0; 
				this.buscasuper(1,0,0);
			}

			if (dir == 3) {
				this.xmax = this.x; 
				this.x = rect.x + rect.w; 
				this.impulsox = 0; 
				this.buscasuper(4,0,0);
			}

			if (dir == 4 ) {
				this.xmax = this.x; 
				this.x = rect.x - this.w; 
				this.impulsox = 0; 
				this.buscasuper(3,0,0);
			}

			if (dir == 7) {
				if (this == ser[2]) salto_potencia2 = 5;
				if (this == ser[1]) salto_potencia1 = 5;

				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y)	{
					rect.xmax = rect.x; 
					this.x = rect.x + rect.w; 
					this.impulsox = 0; 
					this.buscasuper(7,0,0);
				} 
				else {
					rect.ymax = rect.y; 
					this.y = rect.y - this.h; 
					this.impulsoy = 0; 
					this.buscasuper(7,0,1);
				}
			}

			if (dir == 8) {
				if (this == ser[2]) {
					salto_potencia2 = 5;
				} 
				if (this == ser[1]) {
					salto_potencia1=5;
				} 

				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y)	{
					rect.xmax = rect.x; 
					this.x = rect.x - this.w; 
					this.impulsox = 0; 
					this.buscasuper(8,0,0);
				} 
				else {
					rect.ymax = rect.y; 
					this.y = rect.y - this.h; 
					this.impulsoy = 0; 
					this.buscasuper(8,0,1);
				}
			}	
		}

		if (this.masa > rect.masa) {
			
			if (dir == 1) {
				rect.ymax = rect.y;
				rect.impulsoy = ((this.y - rect.h - 1) - rect.y) - 10; 
				rect.mover(); 
				//rect.buscachoque(0);
			}
			if (dir == 2 ) {
				rect.ymax = rect.y; 
				rect.impulsoy = ((this.y + this.h + 1) - rect.y) + 10; 
				rect.mover(); 
				//rect.buscachoque(0);
			}
			if (dir == 3 ) {
				rect.xmax = rect.x; 
				rect.impulsox = ((this.x - rect.w - 1) - rect.x) - 10; 
				rect.mover(); 
				//rect.buscachoque(0);
			}
			if (dir == 4) {
				rect.xmax = rect.x; 
				rect.impulsox = ((this.x + this.w + 1) - rect.x) + 10; 
				rect.mover(); 
				//rect.buscachoque(0);
			}

			if (dir == 5) {
				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y ) {
					rect.impulsox = ((this.x - rect.w - 1) - rect.x) - 10;
					rect.mover();  
					//rect.buscachoque(0);
				}
				else {
					rect.ymax = rect.y; 
					rect.y = this.y - this.h - 1; 
					//rect.buscachoque(0);
				}
			}

			if (dir == 6) {
				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y) {
					rect.impulsox = ((this.x + this.w + 1) - rect.x) + 10;
					rect.mover();  
					//rect.buscachoque(0);
				}
				else {
					rect.ymax = rect.y; 
					rect.y = this.y - this.h - 1; 
					//rect.buscachoque(0);
				}
			}
			if (dir == 7) {
				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y) {
					rect.impulsox = ((this.x - rect.w - 1) - rect.x) - 10;
					rect.mover();  
					//rect.buscachoque(0);
				}
				else {
					rect.ymax = rect.y; 
					rect.y = this.y + this.h + 1; 
					//rect.buscachoque(0);
				}
			}
			if (dir == 8) { 
				if (this.ymax < rect.y + rect.h && this.ymax + this.h > rect.y) {
					rect.impulsox = ((this.x + this.w + 1) - rect.x) + 10;
					rect.mover();  
					//rect.buscachoque(0);
				}
				else {
					rect.ymax = rect.y; 
					rect.y = this.y + this.h + 1; 
					//rect.buscachoque(0);
				}
			}
			
			if (dir > 0 && dir < 9) {
				rect.buscachoque(0);
			}
		}
	}
	
	this.buscasuper = function(dir, cont) {
		cont = 0;
		while (cont < cantidad_seres) {
		cont += 1;
			if (this != ser[cont] && ser[cont].vida > 0) {
				if (this.etereo == 0 && ser[cont].etereo == 0) {
					if (this.choque(ser[cont]) == 1) this.supercolision(ser[cont],dir);
				}
			}
		}
	}

	this.Move = function() {
		this.x = this.x + this.impulsox;
		this.y = this.y + this.impulsoy;

		if (this.impulsox > 0) this.impulsox = this.impulsox - 1;
		if (this.impulsox < 0) this.impulsox = this.impulsox + 1;
		if (this.impulsoy > 0) this.impulsoy = this.impulsoy - 1;
		if (this.impulsoy < 0) this.impulsoy = this.impulsoy + 1;
	}

	this.dibuja = function(ctx) {
		cordenadax_dibuja = (this.fotograma - 1) * this.volumen;
		cordenaday_dibuja = (this.linea - 1) * this.volumen;
		ctx.drawImage(
			imagen[this.dibujo], cordenadax_dibuja, cordenaday_dibuja, 
			this.volumen, this.volumen, this.x, this.y, this.volumen, this.volumen
		);
	}
}

var ser = new Array();
for (let i = 0; i < 31; i++) ser[i] = new ente(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


ser[1].x = 0; 
ser[1].y = 1000; 
ser[1].xmax = 0; 
ser[1].ymax = 1000;	
ser[1].w = 1; 
ser[1].h = 1; 
ser[1].volumen = 1; 
ser[1].volumenmax = 1; 
ser[1].fotograma = 1; 
ser[1].fotogramamax = 1; 
ser[1].dibujo = 1; 
ser[1].dibujomax = 1;
ser[1].vida = 100; 
ser[1].vidamax = 100; 
ser[1].accion = 0; 
ser[1].accionmax = 0; 
ser[1].accion2 = 0; 
ser[1].accion2max = 0;	
ser[1].accion3 = 0;
ser[1].accion3max = 0; 
ser[1].accionss = 0;
ser[1].avance = 0;	
ser[1].avance2 = 0; 
ser[1].avance3 = 0; 
ser[1].poder = 30; 
ser[1].potencia = 0; 
ser[1].etereo = 0; 

ser[1].estado = 1;	
ser[1].estado2 = 1; 
ser[1].estado3 = 1; 
ser[1].estado4 = 1; 

ser[1].masa = 1; 
ser[1].impulsox = 0; 
ser[1].impulsoy = 0;	

class Mirror {
	constructor(x, y, life, animation, volume, frame, drawing) {
		this.X = x;
		this.Y = y;
		this.Life = life;
		this.Animation = animation;
		this.Volume = volume;
		this.Frame = frame;
		this.Drawing = drawing;
	}
  
	Draw(ctx) {
		if (this.Frame > 0 && this.Frame < 101) {
			for (let i = 0, j = 0; i < 10; i++, j++) {
				if (this.Frame > i * 10 && this.Frame < j) {
					cordenaday_dibuja = i * this.Volume; 
					cordenadax_dibuja = (this.Frame - 1) * this.Volume;
				}	
			}
		}
		cordenadax_dibuja = (this.Frame - 1) * this.Volume;
		ctx.drawImage(imagen[this.Drawing], cordenadax_dibuja, cordenaday_dibuja, this.Volume, this.Volume, this.X, this.Y, this.Volume, this.Volume);
	}
}


console.log('pintar portada')

class Game {
	constructor(keyHit, keyKi) {
	  	this.Scene = 3;
		this.Ki = 100;
		this.KeyHit = keyHit;
		this.KeyKi = keyKi;
	}
  
	Print() {
		console.log(this.Scene, this.Ki, this.KeyHit, this.KeyKi);
	}
}
  
var myGame = new Game(1,2);
myGame.Print();
  
class Character {
	constructor(hitKey, kiKey) {
		this.Life = 10;
		this.Ki = 100;

		// keys
		this.LeftKey = leftKey;
		this.UpKey = upKey;
		this.RightKey = rightKey;
		this.DownKey = downKey;

		this.HitKey = hitKey;
		this.KiKey = kiKey;
	}

	Print() {
		console.log("");
	}
}
  
// Variables
var contador_avance = 0;

// scene
var pantalla_juego = 3;
var pantalla_juego = 2;

var nivel_juego = 0;


var aleatorio = 0;
var aleatorio2 = 0;
var direccion1 = 0;
var direccion2 = 0;
var contador_golpe1 = 0;
var contador_golpe2 = 0;
var contador_bola1 = 0;
var contador_bola2 = 0;


var salto_potencia1 = 0;
var salto_potencia2 = 0;
var direccionx = 0;
var direcciony = 0;

var cantidad_seres = 30;
var cantidad_seresmax = 50;

var vida1 = 100;
var vida2 = 100;
var ki1 = 100;
var ki2 = 100;

//Opciones
var gravedad = 20;


var p1_bolaenergia = 1;
var p1_vel = 20;
var p1_salto = 35;
var p1_podergolpe = 2;
var p1_poderbola = 10;


var p2_bolaenergia = 20;
var p2_vel = 15;
var p2_salto = 35;
var p2_podergolpe = 2;
var p2_poderbola = 10;


var cantidad_espejismos = 2;
var cantidad_espejismosmax = 20;

var espejismo = new Array();
//for (let i = 1; i < 21; i++) espejismo[i] = new espejo(0,0,0,0,0,0,0);
for (let i = 1; i < 21; i++) espejismo[i] = new Mirror(0,0,0,0,0,0,0);


var cual_portada = 0;
var presiona_portada = 0;


// mensajes
var cantidad_mensajes = 21;
var cantidad_mensajesmax = 21;

var mensaje = new Array();
for (let i = 1; i < 4; i++) mensaje[i] = new mensajex(0,0,0,0,0,0);


// dibujo
var cordenadax_dibuja = 0;
var cordenaday_dibuja = 0;


// contadores 
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;


// control
var mousex = 0;
var mousey = 0;
var tecla_izquierda = 37;
var tecla_arriba = 38;
var tecla_derecha = 39;
var tecla_abajo = 40;

var tecla_a = 65;
var tecla_b = 66;
var tecla_c = 67;
var tecla_d = 68;

var tecla_e = 69;
var tecla_f = 70;

var tecla_g = 71;
var tecla_h = 72;

var tecla_i = 73;
var tecla_j = 74;
var tecla_k = 75;
var tecla_l = 76;
var tecla_m = 77;
var tecla_n = 78;
var tecla_o = 79;
var tecla_p = 80;
var tecla_q = 81;
var tecla_r = 82;
var tecla_s = 83;
var tecla_t = 84;
var tecla_u = 85;
var tecla_v = 86;
var tecla_w = 87;
var tecla_x = 88;
var tecla_y = 89;
var tecla_z = 90;

var tecla_enter = 13;
var tecla_espacio = 32;
var tecla_retroceso = 8;
var tecla_mayus = 16;
var tecla_control = 17;



var tecla_disparo = tecla_h;
//var tecla_disparo2 = tecla_m;
var tecla_disparo2 = 103;

var tecla_magia1 = tecla_g;
//var tecla_magia2 = tecla_n;
var tecla_magia2 = 104;

var tecla_inventario = tecla_enter;
var tecla_salto = tecla_j;


var tecla_izquierda1 = tecla_a;
var tecla_arriba1 = tecla_w;
var tecla_derecha1 = tecla_d;
var tecla_abajo1 = tecla_s;


var tecla_izquierda2 = tecla_izquierda;
var tecla_arriba2 = tecla_arriba;
var tecla_derecha2 = tecla_derecha;
var tecla_abajo2 = tecla_abajo;

//----------

var musica_enfasis = 0;
var musica_ente = 0;

var tocar1; 
var sonido_musica1 = "sonidos/musica1.wav"; 
console.log('variables')


function mensajex (x, y, tam, vida, mensaj, tam) { }

function disparaki (player, address) {
	if (player == 1) {
		if (address == 1) {
			for(let i = 12; i < 17; i++) {
				if (ser[i].vida == 0) {
					ser[i].vida = 1;	
					ser[i].x = ser[1].x + 50; 
					ser[i].y = ser[1].y; 	
					ser[i].accion = 1; 	
					break;
				}
			}
			ki1 -= p1_bolaenergia;			
		}

		if (address == 0) {
			for(let i = 12; i < 17; i++) {
				if (ser[i].vida == 0) {
					ser[i].vida = 1;	
					ser[i].x = ser[1].x; 
					ser[i].y = ser[1].y; 	
					ser[i].accion = 2; 	
					break;
				}
			}
			
			ki1 -= p1_bolaenergia;			
		}			
	}

	if (player == 2) {
		if (address == 1) {
			for(let i = 17; i < 22; i++) {
				if (ser[i].vida == 0) {
					ser[i].vida = 1;	
					ser[i].x = ser[2].x + 50; 
					ser[i].y = ser[2].y; 	
					ser[i].accion = 1; 	
					break;
				}
			}

			ki2 -= p2_bolaenergia;			
		}

		if (address == 0) {
			for(let i = 17; i < 22; i++) {
				if (ser[i].vida == 0) {
					ser[i].vida = 1;	
					ser[i].x = ser[2].x; 
					ser[i].y = ser[2].y; 	
					ser[i].accion = 2; 	
					break;
				}
			}

			ki2 -= p2_bolaenergia;
		}
	}
}

function disparagolpe (player, address, pod) {
	// player
	playerIndex = 22;
	// target player
	targetPlayer = 1;

	if (player == 2) {
		playerIndex = 23;
		targetPlayer = 2;
	}

	var xAgregate = 60;
	var myConst = 20; 
	if (address == 2) {
		xAgregate = -40;
		myConst = -20;
	}

	if (pod in [1,2,3]) {
		ser[playerIndex].x = ser[targetPlayer].x + xAgregate + (pod - 1) * myConst; 
		ser[playerIndex].y = ser[targetPlayer].y + 15; 

		ser[playerIndex].vida = 10; 
		ser[playerIndex].accion = address; 
		ser[playerIndex].fotograma = address;
	}
}

console.log('funciones')

//------------------------------FIN

// Inicio
window.addEventListener('load', init, false);
var juego = null;
var ctx = null;
var presiona = [];
var lastPress = null;

// Disparador
function init() {
	console.log('init');

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
    
    bucle();
}

function GenerateGame() {
	//ctx.fillStyle = '#000000';
	ctx.fillStyle = '#FE84DD';
	ctx.fillRect(0, 0, juego.width, juego.height);
	var gameObjects = [24, 8, 9, 10, 11, 25, 26, 27, 3, 4, 5];
	gameObjects.map(item => ser[item].dibuja(ctx));

	// generate background: ser[24].dibuja(ctx);
	// generate player1 bar life: ser[8].dibuja(ctx);
	// generate player1 bar ki: ser[9].dibuja(ctx);
	// generate player2 bar life: ser[10].dibuja(ctx);
	// generate player2 bar ki: ser[11].dibuja(ctx);
	// generate platforms: ser[25 : 27].dibuja(ctx);
	//ser[7].dibuja(ctx);
	//ser[9].dibuja(ctx);
	//ser[10].dibuja(ctx);
	//ser[11].dibuja(ctx);
	// generate floor: ser[3 : 5].dibuja(ctx);
	
	contador = 11;
	while (contador < 21) {
		contador += 1;
		if (ser[contador].vida > 0) ser[contador].dibuja(ctx);
	}	

	//generate players
	ser[1].dibuja(ctx);
	ser[2].dibuja(ctx);

	// generate hits
	if (ser[22].vida > 0) ser[22].dibuja(ctx);
	if (ser[23].vida > 0) ser[23].dibuja(ctx);

	// generate game over title
	if (vida1 < 6 || vida2 < 6) ser[6].dibuja(ctx);
}

function CoverLogic() {
	contador_avance = contador_avance + 1;

	if (contador_avance == 2) {
		imagen[1].src = 'recursos/1070.png'; 
		espejismo[1].Drawing = 1; 
		espejismo[1].Frame = 1; 
		espejismo[1].Volume = 1280; 
		espejismo[1].Life = 1; 
		espejismo[1].X = 0; 
		espejismo[1].Y = 0; 

		valor_guardado = localStorage.getItem('ssnave_vidamaxbase'); 
		valor_guardado = parseFloat(valor_guardado); 
		nave_vidamaxbase = valor_guardado;

		imagen[2].src = 'recursos/1071.png'; 	
		espejismo[2].Drawing = 2; 
		espejismo[2].Volume = 500; 
		espejismo[2].Life = 0; 
		espejismo[2].X = 380; 
		espejismo[2].Y = 380; 		
		
		if (nave_vidamaxbase > 0) espejismo[2].Frame = 1; 
		else espejismo[2].Frame = 2; 

	}

	if (contador_avance > 2) {

		if (presiona[tecla_enter] && cual_portada == 0 && presiona_portada == 0) {
			presiona_portada = 1;
			espejismo[1].Frame = 2;
			espejismo[2].Life = 1;
			cual_portada = 1;
		
			if (nave_vidamaxbase > 0) cual_portada = 1;
			else cual_portada = 2;	
		}
		
		if ((presiona[tecla_abajo] || presiona[40]) && presiona_portada == 0) {
			// second menu
			if (cual_portada in [1, 2, 3]) {
				presiona_portada = 1;
			}
			
			if (cual_portada == 1) espejismo[2].Frame = cual_portada = 2;			
			else if (cual_portada == 2) espejismo[2].Frame = cual_portada = 3;			
			else if (cual_portada == 3) espejismo[2].Frame = cual_portada = 4;
		}
		
		if ((presiona[tecla_arriba] || presiona[38]) && presiona_portada == 0) {
			// second menu
			if (cual_portada in [1, 2, 3]) {
				presiona_portada = 1;
			}

			if (cual_portada == 2 && nave_vidamaxbase > 0) {
				presiona_portada = 1;
				espejismo[2].Frame = 1;
				cual_portada = 1;			
			}
			
			else if (cual_portada == 3) {
				presiona_portada = 1;
				espejismo[2].Frame = 2;
				cual_portada = 2;			
			}		
			
			else if (cual_portada == 4) {
				presiona_portada = 1;
				espejismo[2].Frame = 3;
				cual_portada = 3;
			}			
		}

		if (presiona[tecla_enter] && cual_portada == 1 && presiona_portada==0) {
			cargar();	
			document.getElementById('sonidofx').volume = 0.3; 
			pantalla_juego = 3;
		}
		
		if (presiona[tecla_enter] && cual_portada == 2 && presiona_portada==0) {
			nave_vidamaxbase = 100;
			document.getElementById('sonidofx').volume = 0.3;
			nivel_juego = 1;	
			pantalla_juego = 3;
		}	

		if (presiona[tecla_enter] == 0 && presiona[40] != 1 && presiona[tecla_abajo] != 1 
			&& presiona[tecla_arriba] != 1 && presiona[38] != 1) {
			presiona_portada = 0;
		}

	}
}

function GenerateCover() {
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, juego.width, juego.height);

	contador = 0;
	while (contador < cantidad_espejismos) {
		contador = contador + 1;
		if (espejismo[contador].Life > 0) espejismo[contador].Draw(ctx);
	}

	ctx.font = "100px Arial";
	ctx.fillStyle = '#fff000';
   	ctx.fillText('Anime Character Fight', 40, 247)		
}

function bucle() {
    setTimeout(bucle,40);
    
    if (pantalla_juego == 1) {
        jugar();
        GenerateGame(); 
    }

    if (pantalla_juego == 2) {
        CoverLogic(); 
        GenerateCover(); 
    }
    
    if (pantalla_juego == 3) {
        niveles();
    }
}


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

//---------
window.requestAnimationFrame = (
    function() {
		console.log('requestAnimationFrame');
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame 
            || window.mozRequestAnimationFrame || function(callback) {
                window.setTimeout(callback,17);
            }; 
    }
)();

console.log('game')


function jugar() {

	// Movimientos 
	if (ser[1].subestado==0) ser[1].estado=1;
	if (ser[2].subestado==0) ser[2].estado=1;

	ser[1].impulsoy = gravedad;
	ser[2].impulsoy = gravedad;

	// Bolas de ki
	contador = 11;
	while (contador < 16) {
		contador = contador + 1;

		if (ser[contador].x > 1200 || ser[contador].x < 0) ser[contador].vida = 0;
		if (ser[contador].vida > 0 && ser[contador].accion == 1) ser[contador].x = ser[contador].x + 20;
		if (ser[contador].vida > 0 && ser[contador].accion == 2) ser[contador].x = ser[contador].x - 20;

		if (ser[contador].Clash(ser[2]) == 1 && ser[2].estado != 12 && ser[contador].vida > 0)  {
			ser[2].estado = 12; 
			ser[2].subestado = 5; 
			vida2 = vida2-p1_poderbola; 
			ser[contador].vida = 0;
		}
	}	

	contador = 16;
	while (contador < 21) {
		contador = contador + 1;

		if (ser[contador].x > 1200 || ser[contador].x < 0) ser[contador].vida = 0;
		if (ser[contador].vida > 0 && ser[contador].accion == 1) ser[contador].x = ser[contador].x + 20;
		if (ser[contador].vida > 0 && ser[contador].accion == 2) ser[contador].x = ser[contador].x - 20;

		if (ser[contador].Clash(ser[1]) == 1 && ser[1].estado != 12 && ser[contador].vida > 0) {
			ser[1].estado = 12; 
			ser[1].subestado = 5; 
			vida1 = vida1 - p2_poderbola; 
			ser[contador].vida = 0;
		}
	}	
		
	// Golpes

	if (ser[22].vida>0 && ser[22].accion==1) {
		ser[22].x = ser[22].x + 5; 
		ser[22].vida=ser[22].vida-1;
	}
	if (ser[22].vida>0 && ser[22].accion==2) {
		ser[22].x = ser[22].x - 5; 
		ser[22].vida=ser[22].vida-1;
	}
	if (ser[22].Clash(ser[2]) == 1 && ser[2].estado != 12 && ser[22].vida > 0) {
		ser[2].estado = 12; 
		ser[2].subestado = 5; 
		vida2 = vida2 - p1_podergolpe; 
		ser[22].vida = 0;
	}
	if (ser[23].vida > 0 && ser[23].accion == 1) {
		ser[23].x = ser[23].x + 5; 
		ser[23].vida = ser[23].vida - 1;
	}
	if (ser[23].vida > 0 && ser[23].accion == 2) {
		ser[23].x = ser[23].x - 5; 
		ser[23].vida = ser[23].vida - 1;
	}
	if (ser[23].Clash(ser[1]) == 1 && ser[1].estado != 12 && ser[23].vida > 0) {
		ser[1].estado = 12; 
		ser[1].subestado = 5; 
		vida1 = vida1 - p2_podergolpe; 
		ser[23].vida = 0;
	}

	control_naves();	

	// Contadores

	if (presiona[tecla_disparo] == 0) contador_golpe1 = 0;
	if (salto_potencia1>0) salto_potencia1 = salto_potencia1 - 1;

	if (presiona[tecla_disparo2] == 0) contador_golpe2 = 0;
	if (salto_potencia2>0) salto_potencia2 = salto_potencia2 - 1;

	if (presiona[tecla_magia1] == 0) contador_bola1 = 0;
	if (presiona[tecla_magia2] == 0) contador_bola2 = 0;


	if (vida1 < 5) vida1 = 5;
	ser[8].volumen = vida1 * 5;

	if (ki1 < 5) ki1 = 5;
	ser[9].volumen = ki1 * 5;

	if (vida2 < 5) vida2 = 5;
	ser[10].volumen = vida2 * 5;

	if (ki2 < 5) ki2 = 5;
	ser[11].volumen = ki2 * 5;


	// Animacion
		
	// parado
		
	if (ser[1].estado == 1) {
		if (salto_potencia1 > 0) {
			if (ser[1].fotograma < 4) ser[1].fotograma += 1;
			else ser[1].fotograma = 1;
		}	

		else ser[1].fotograma = 5;		
	}
		
	if (ser[2].estado == 1) {
		if (salto_potencia2 > 0) {
			if (ser[2].fotograma < 4) ser[2].fotograma += 1;
			else ser[2].fotograma = 1;
		}	

		else ser[2].fotograma = 5;		
	}	
		
	// caminar

	if (ser[1].estado == 2) {
		if (ser[1].subestado < 5) ser[1].impulsox = (ser[1].subestado + 1) * 2; 
		else ser[1].impulsox = p1_vel;

		ser[1].subestado -= 1;
		ser[1].fotograma = 10; 
		ser[1].linea = 1; 
		direccion1 = 1;
	}

	if (ser[1].estado == 4) {
		if (ser[1].subestado < 5) ser[1].impulsox = -(ser[1].subestado + 1) * 2; 
		else ser[1].impulsox = -p1_vel;

		ser[1].subestado -= 1;
		ser[1].fotograma = 10;
		ser[1].linea = 2; 
		direccion1 = 0;		
	}	

	if (ser[2].estado == 2) {
		switch (ser[2].subestado) {
			case 5: 
				ser[2].subestado = 4;
				ser[2].fotograma = 10;
				ser[2].impulsox = p2_vel;
				break;
			case 4:
				ser[2].subestado = 3;
				ser[2].fotograma = 10;
				ser[2].impulsox = 10;
				break;
			case 3:
				ser[2].subestado = 2;
				ser[2].fotograma = 10;
				ser[2].impulsox = 8;
				break;
			case 2:
				ser[2].subestado = 1;
				ser[2].fotograma = 10;
				ser[2].impulsox = 6;
				break;
			case 1:
				ser[2].subestado = 0;
				ser[2].fotograma = 10;
				ser[2].impulsox = 4;
				break;
			}

		ser[2].linea = 1; 
		direccion2 = 1;
	}		
		
	if (ser[2].estado==4) {
		switch (ser[2].subestado) {
			case 5:
				ser[2].subestado=4;
				ser[2].fotograma =10;
				ser[2].impulsox=0-p2_vel;
				break;
			case 4:
				ser[2].subestado=3;
				ser[2].fotograma =10;
				ser[2].impulsox=-10;
				break;
			case 3:
				ser[2].subestado=2;
				ser[2].fotograma =10;
				ser[2].impulsox=-8;
				break;
			case 2: 
				ser[2].subestado=1;
				ser[2].fotograma =10;
				ser[2].impulsox=-6;
				break;
			case 1:
				ser[2].subestado=0;
				ser[2].fotograma =10;
				ser[2].impulsox=-4;
				break;
		}

		ser[2].linea =2; 
		direccion2 =0;		
	}		
		
	// golpes jugador1

	if (ser[2].estado == 5) {
		switch (ser[2].subestado) {
			case 10:
				ser[2].subestado=9; 
				ser[2].fotograma =7; 
				ser[2].impulsox=20; 
				disparagolpe(2,1,1); 
				break;
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =7; 
				ser[2].impulsox=20; 
				break;
			case 8:
				ser[2].subestado=7; 
				ser[2].fotograma =7; 
				ser[2].impulsox=15; 
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =7; 
				ser[2].impulsox=10; 
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =7; 
				ser[2].impulsox=5; 
				break;
			case 5:
				ser[2].subestado=4;
				ser[2].fotograma =7; 
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =7; 
				break;
			case 3:
				ser[2].subestado=2;
				ser[2].fotograma =7; 
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =7;
				break;
			case 1:
				ser[2].subestado=0;
				ser[2].fotograma =7;
				break;
		}
			
		ser[2].linea =1; 
		direccion2 =1;	
	}		

	if (ser[2].estado == 6) {
		switch (ser[2].subestado) {
			case 10:
				ser[2].subestado=9; 
				ser[2].fotograma =7; 
				ser[2].impulsox=-20; 
				disparagolpe(2,2,1); 
				break;
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =7; 
				ser[2].impulsox=-20; 
				break;
			case 8: 
				ser[2].subestado=7; 
				ser[2].fotograma =7; 
				ser[2].impulsox=-15; 
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =7; 
				ser[2].impulsox=-10; 
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =7; 
				ser[2].impulsox=-5; 
				break;
			case 5:
				ser[2].subestado=4; 
				ser[2].fotograma =7; 
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =7;
				break;
			case 3:
				ser[2].subestado=2; 
				ser[2].fotograma =7;
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =7; 
				break;
			case 1:
				ser[2].subestado=0;
				ser[2].fotograma =7; 
				break;	
		}

		ser[2].linea =2; 
		direccion2 =0;	
	}	
	
	
	if (ser[2].estado==7) {
		switch (ser[2].subestado) {
			case 10:
				ser[2].subestado=9; 
				ser[2].fotograma =8; 
				ser[2].impulsox=15; 
				disparagolpe(2,1,2); 
				break;
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =8;
				ser[2].impulsox=15; 
				break;
			case 8:
				ser[2].subestado=7; 
				ser[2].fotograma =8;
				ser[2].impulsox=15;
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =8;
				ser[2].impulsox=10; 
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =8;
				ser[2].impulsox=5; 
				break;
			case 5:
				ser[2].subestado=4; 
				ser[2].fotograma =8;
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =8;
				break;
			case 3:
				ser[2].subestado=2; 
				ser[2].fotograma =8;
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =8;
				break;
			case 1:
				ser[2].subestado=0; 
				ser[2].fotograma =8;
				break;
		}

		ser[2].linea =1; 
		direccion2 =1;	
	}

	if (ser[2].estado==8) {
		switch (ser[2].subestado) {
			case 10:
				ser[2].subestado=9; 
				ser[2].fotograma =8; 
				ser[2].impulsox=-15; 
				disparagolpe(2,2,2); 
				break;
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =8; 
				ser[2].impulsox=-15; 
				break;
			case 8:
				ser[2].subestado=7; 
				ser[2].fotograma =8; 
				ser[2].impulsox=-15; 
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =8; 
				ser[2].impulsox=-10; 
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =8; 
				ser[2].impulsox=-5; 
				break;
			case 5:
				ser[2].subestado=4; 
				ser[2].fotograma =8; 
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =8; 
				break;
			case 3:
				ser[2].subestado=2; 
				ser[2].fotograma =8; 
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =8; 
				break;
			case 1:
				ser[2].subestado=0; 
				ser[2].fotograma =8; 
				break;
			}

		ser[2].linea =2; 
		direccion2 =0;	
	}	

	if (ser[2].estado == 9) {
		switch (ser[2].subestado) {
			case 15: 
				ser[2].subestado=14; 
				ser[2].fotograma =9; 
				ser[2].impulsox=30; 
				disparagolpe(2,1,3); 
				break;
			case 14: 
				ser[2].subestado=13; 
				ser[2].fotograma =9; 
				ser[2].impulsox=30; 
				break;
			case 13: 
				ser[2].subestado=12; 
				ser[2].fotograma =9; 
				ser[2].impulsox=30; 
				break;
			case 12: 
				ser[2].subestado=11; 
				ser[2].fotograma =9; 
				ser[2].impulsox=20; 
				break;
			case 11: 
				ser[2].subestado=10; 
				ser[2].fotograma =9; 
				ser[2].impulsox=10; 
				break;
			case 10: 
				ser[2].subestado=9; 
				ser[2].fotograma =9;  
				break
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =9;  
				break;
			case 8:
				ser[2].subestado=7; 
				ser[2].fotograma =1;  
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =1;  
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =1;  
				break;
			case 5:
				ser[2].subestado=4; 
				ser[2].fotograma =1;  
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =1;  
				break;
			case 3:
				ser[2].subestado=2; 
				ser[2].fotograma =1;  
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =1;  
				break;
			case 1:
				ser[2].subestado=0; 
				ser[2].fotograma =1;  
				break;
		}

		ser[2].linea =1; 
		direccion2 =1;	
	}

	if (ser[2].estado == 10) {
		switch (ser[2].subestado) {
			case 15: 
				ser[2].subestado=14; 
				ser[2].fotograma =9; 
				ser[2].impulsox=-30; 
				disparagolpe(2,2,3); 
				break;
			case 14: 
				ser[2].subestado=13; 
				ser[2].fotograma =9; 
				ser[2].impulsox=-30; 
				break;
			case 13: 
				ser[2].subestado=12; 
				ser[2].fotograma =9; 
				ser[2].impulsox=-30; 
				break;
			case 12: 
				ser[2].subestado=11; 
				ser[2].fotograma =9; 
				ser[2].impulsox=-20; 
				break;
			case 11: 
				ser[2].subestado=10; 
				ser[2].fotograma =9; 
				ser[2].impulsox=-10; 
				break;
			case 10: 
				ser[2].subestado=9; 
				ser[2].fotograma =9;  
				break;
			case 9:
				ser[2].subestado=8; 
				ser[2].fotograma =9;  
				break;
			case 8:
				ser[2].subestado=7; 
				ser[2].fotograma =1;  
				break;
			case 7:
				ser[2].subestado=6; 
				ser[2].fotograma =1;  
				break;
			case 6:
				ser[2].subestado=5; 
				ser[2].fotograma =1;  
				break;
			case 5:
				ser[2].subestado=4; 
				ser[2].fotograma =1;  
				break;
			case 4:
				ser[2].subestado=3; 
				ser[2].fotograma =1;  
				break;
			case 3:
				ser[2].subestado=2; 
				ser[2].fotograma =1;  
				break;
			case 2:
				ser[2].subestado=1; 
				ser[2].fotograma =1;  
				break;
			case 1:
				ser[2].subestado=0; 
				ser[2].fotograma =1;  
				break;
		}
			
		ser[2].linea =2; 
		direccion2 =0;	
	}
		
	// golpes jugador2
	if (ser[1].estado == 5) {
		switch (ser[1].subestado) {
			case 10:
				ser[1].subestado=9; 
				ser[1].fotograma =7; 
				ser[1].impulsox=20; 
				disparagolpe(1,1,1); 
				break;
			case 9:
				ser[1].subestado=8; 
				ser[1].fotograma =7; 
				ser[1].impulsox=20; 
				break;
			case 8:
				ser[1].subestado=7; 
				ser[1].fotograma =7; 
				ser[1].impulsox=15; 
				break;
			case 7:
				ser[1].subestado=6; 
				ser[1].fotograma =7; 
				ser[1].impulsox=10; 
				break;
			case 6:
				ser[1].subestado=5; 
				ser[1].fotograma =7; 
				ser[1].impulsox=5; 
				break;
			case 5:
				ser[1].subestado=4; 
				ser[1].fotograma =7;  
				break;
			case 4:
				ser[1].subestado=3; 
				ser[1].fotograma =7;  
				break;
			case 3:
				ser[1].subestado=2; 
				ser[1].fotograma =7;  
				break;
			case 2:
				ser[1].subestado=1; 
				ser[1].fotograma =7;  
				break;
			case 1:
				ser[1].subestado=0; 
				ser[1].fotograma =7;  
				break;
		}
			
		ser[1].linea =1; 
		direccion1 =1;	
	}		
		
	if (ser[1].estado == 6) {
		switch (ser[1].subestado) {
			case 10:
				ser[1].subestado=9; 
				ser[1].fotograma =7; 
				ser[1].impulsox=-20; 
				disparagolpe(1,2,1); 
				break;
			case 9:
				ser[1].subestado=8; 
				ser[1].fotograma =7; 
				ser[1].impulsox=-20; 
				break;
			case 8:
				ser[1].subestado=7; 
				ser[1].fotograma =7; 
				ser[1].impulsox=-15; 
				break;
			case 7:
				ser[1].subestado=6; 
				ser[1].fotograma =7; 
				ser[1].impulsox=-10; 
				break;
			case 6:
				ser[1].subestado=5; 
				ser[1].fotograma =7; 
				ser[1].impulsox=-5; 
				break;
			case 5:
				ser[1].subestado=4; 
				ser[1].fotograma =7;  
				break;
			case 4:
				ser[1].subestado=3; 
				ser[1].fotograma =7;  
				break;
			case 3:
				ser[1].subestado=2; 
				ser[1].fotograma =7;  
				break;
			case 2:
				ser[1].subestado=1; 
				ser[1].fotograma =7;  
				break;
			case 1:
				ser[1].subestado=0; 
				ser[1].fotograma =7;  
				break;		
		}
			
		ser[1].linea =2; 
		direccion1 =0;	
	}	
		
	if (ser[1].estado == 7) {
		switch (ser[1].subestado) {
			case 10:
				ser[1].subestado=9; 
				ser[1].fotograma =8; 
				ser[1].impulsox=15; 
				disparagolpe(1,1,2); 
				break;
			case 9:
				ser[1].subestado=8; 
				ser[1].fotograma =8; 
				ser[1].impulsox=15; 
				break;
			case 8:
				ser[1].subestado=7; 
				ser[1].fotograma =8; 
				ser[1].impulsox=15; 
				break;
			case 7:
				ser[1].subestado=6; 
				ser[1].fotograma =8; 
				ser[1].impulsox=10; 
				break;
			case 6:
				ser[1].subestado=5; 
				ser[1].fotograma =8; 
				ser[1].impulsox=5; 
				break;
			case 5:
				ser[1].subestado=4; 
				ser[1].fotograma =8;  
				break;
			case 4:
				ser[1].subestado=3; 
				ser[1].fotograma =8;  
				break;
			case 3:
				ser[1].subestado=2; 
				ser[1].fotograma =8;  
				break;
			case 2:
				ser[1].subestado=1; 
				ser[1].fotograma =8;  
				break;
			case 1:
				ser[1].subestado=0; 
				ser[1].fotograma =8;  
				break;
			}
			
		ser[1].linea =1; 
		direccion1 =1;	
	}

	if (ser[1].estado==8) {
		switch (ser[1].subestado) {
			case 10:
				ser[1].subestado = 9; 
				ser[1].fotograma = 8; 
				ser[1].impulsox = -15; 
				disparagolpe(1,2,2); 
				break;
			case 9:
				ser[1].subestado = 8; 
				ser[1].fotograma = 8; 
				ser[1].impulsox = -15; 
				break;
			case 8:
				ser[1].subestado = 7; 
				ser[1].fotograma = 8; 
				ser[1].impulsox = -15; 
				break;
			case 7:
				ser[1].subestado = 6; 
				ser[1].fotograma = 8; 
				ser[1].impulsox = -10; 
				break;
			case 6:
				ser[1].subestado = 5; 
				ser[1].fotograma = 8; 
				ser[1].impulsox = -5; 
				break;
			case 5:
				ser[1].subestado = 4; 
				ser[1].fotograma = 8; 
				break;
			case 4:
				ser[1].subestado = 3; 
				ser[1].fotograma = 8; 
				break;
			case 3:
				ser[1].subestado = 2; 
				ser[1].fotograma = 8; 
				break;
			case 2:
				ser[1].subestado = 1; 
				ser[1].fotograma = 8; 
				break;
			case 1:
				ser[1].subestado = 0; 
				ser[1].fotograma = 8; 
				break;
		}

		ser[1].linea =2; 
		direccion1 =0;	
	}	

	if (ser[1].estado == 9) {
		switch (ser[1].subestado) {
			case 15:
				ser[1].subestado = 14; 
				ser[1].fotograma =9; 
				ser[1].impulsox=30; 
				disparagolpe(1,1,3); 
				break;
			case 14:
				ser[1].subestado = 13; 
				ser[1].fotograma =9; 
				ser[1].impulsox=30; 
				break;
			case 13:
				ser[1].subestado = 12; 
				ser[1].fotograma =9; 
				ser[1].impulsox=30; 
				break;
			case 12:
				ser[1].subestado = 11; 
				ser[1].fotograma =9; 
				ser[1].impulsox=20; 
				break;
			case 11:
				ser[1].subestado = 10; 
				ser[1].fotograma =9; 
				ser[1].impulsox=10; 
				break;
			case 10:
				ser[1].subestado = 9; 
				ser[1].fotograma =9;  
				break;
			case 9:
				ser[1].subestado=8; 
				ser[1].fotograma =9;  
				break;
			case 8:
				ser[1].subestado=7; 
				ser[1].fotograma =1;  
				break;
			case 7:
				ser[1].subestado=6; 
				ser[1].fotograma =1;  
				break;
			case 6:
				ser[1].subestado=5; 
				ser[1].fotograma =1;  
				break;
			case 5:
				ser[1].subestado=4; 
				ser[1].fotograma =1;  
				break;
			case 4:
				ser[1].subestado=3; 
				ser[1].fotograma =1;  
				break;
			case 3:
				ser[1].subestado=2; 
				ser[1].fotograma =1;  
				break;
			case 2:
				ser[1].subestado=1; 
				ser[1].fotograma =1;  
				break;
			case 1:
				ser[1].subestado=0; 
				ser[1].fotograma =1;  
				break;
		}
				
		ser[1].linea =1; 
		direccion1 =1;	
	}

	if (ser[1].estado == 10) {
		switch (ser[1].subestado) {
			case 15: 
				ser[1].subestado = 14; 
				ser[1].fotograma = 9; 
				ser[1].impulsox = -30; 
				disparagolpe(1,2,3); 
				break;
			case 14: 
				ser[1].subestado = 13; 
				ser[1].fotograma = 9; 
				ser[1].impulsox = -30; 
				break;
			case 13: 
				ser[1].subestado = 12; 
				ser[1].fotograma =9; 
				ser[1].impulsox=-30; 
				break;
			case 12: 
				ser[1].subestado = 11; 
				ser[1].fotograma =9; 
				ser[1].impulsox=-20; 
				break;
			case 11: 
				ser[1].subestado = 10; 
				ser[1].fotograma =9; 
				ser[1].impulsox=-10; 
				break;
			case 10: 
				ser[1].subestado = 9; 
				ser[1].fotograma =9;  
				break;
			case 9:
				ser[1].subestado = 8; 
				ser[1].fotograma = 9;  
				break;
			case 8:
				ser[1].subestado = 7; 
				ser[1].fotograma = 1;  
				break;
			case 7:
				ser[1].subestado = 6; 
				ser[1].fotograma = 1;  
				break;
			case 6:
				ser[1].subestado = 5; 
				ser[1].fotograma = 1;  
				break;
			case 5:
				ser[1].subestado = 4; 
				ser[1].fotograma = 1;  
				break;
			case 4:
				ser[1].subestado = 3; 
				ser[1].fotograma = 1;  
				break;
			case 3:
				ser[1].subestado = 2; 
				ser[1].fotograma = 1;  
				break;
			case 2:
				ser[1].subestado = 1; 
				ser[1].fotograma = 1;  
				break;
			case 1:
				ser[1].subestado = 0; 
				ser[1].fotograma = 1;  
				break;
		}
	
		ser[1].linea =2; 
		direccion1 =0;	
	}
		
	// saltar

	if (ser[2].estado2 == 1 && ser[2].subestado2 > 0) {
		if (direccion2 == 1) {	
			ser[2].linea =1; 
			switch (ser[2].subestado2) {
				case 5:
					ser[2].subestado2 = 4; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -p2_salto; 
					break;
				case 4:
					ser[2].subestado2 = 3; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -5 - p2_salto; 
					break;
				case 3:
					ser[2].subestado2 = 2; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					ser[2].subestado2 = 1; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -20; 
					break;
				case 1:
					ser[2].subestado2 = 0; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -10; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			ser[2].linea = 2; 
			switch (ser[2].subestado2) {
				case 5:
					ser[2].subestado2 = 4; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -p2_salto; 
					break;
				case 4:
					ser[2].subestado2 = 3; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -5 - p2_salto; 
					break;
				case 3:
					ser[2].subestado2 = 2; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					ser[2].subestado2 = 1; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -20; 
					break;
				case 1:
					ser[2].subestado2 = 0; 
					ser[2].fotograma = 5; 
					ser[2].impulsoy = -10; 
					break;
			}
		}
	}

	if (ser[1].estado2 == 1 && ser[1].subestado2 > 0) {
		if (direccion1 == 1) {	
			ser[1].linea = 1; 
			switch (ser[1].subestado2) {
				case 5:
					ser[1].subestado2 = 4; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -p1_salto; 
					break;
				case 4: 
					ser[1].subestado2 = 3; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -5 - p1_salto; 
					break;
				case 3:
					ser[1].subestado2 = 2; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					ser[1].subestado2 = 1; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -20; 
					break;
				case 1:
					ser[1].subestado2 = 0; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -10; 
					break;
			}
		}

		if (direccion1 == 0) {	
			ser[1].linea = 2; 
			switch (ser[1].subestado2) {
				case 5:
					ser[1].subestado2 = 4; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -p1_salto; 
					break;
				case 4:
					ser[1].subestado2 = 3; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -5 - p1_salto; 
					break;
				case 3:
					ser[1].subestado2 = 2; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					ser[1].subestado2 = 1; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -20; 
					break;
				case 1:
					ser[1].subestado2 = 0; 
					ser[1].fotograma = 5; 
					ser[1].impulsoy = -10; 
					break;
			}
		}
	}
		
	// lazar ki1
	if (ser[1].estado == 11 && ser[1].subestado > 0) {
		if (direccion1 == 1) {	
			ser[1].linea =1; 
			switch (ser[1].subestado) {
				case 7:
					ser[1].subestado=6; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-15;
					disparaki(1,1); 
					break;
				case 6:
					ser[1].subestado=5; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-10; 
					break;
				case 5:
					ser[1].subestado=4; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-10; 
					break;
				case 4:
					ser[1].subestado=3; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-5;
					break;
				case 3:
					ser[1].subestado=2; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-4; 
					break;
				case 2:
					ser[1].subestado=1; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-3; 
					break;
				case 1:
					ser[1].subestado=0; 
					ser[1].fotograma =12; 
					ser[1].impulsox=-2; 
					break;
			}		
		}	

		if (direccion1 == 0) {	
			ser[1].linea =2; 
			switch (ser[1].subestado) {
				case 7:
					ser[1].subestado=6; 
					ser[1].fotograma =12; 
					ser[1].impulsox=15; 
					disparaki(1,0); 
					break;
				case 6:
					ser[1].subestado=5; 
					ser[1].fotograma =12; 
					ser[1].impulsox=10; 
					break;
				case 5:
					ser[1].subestado=4; 
					ser[1].fotograma =12; 
					ser[1].impulsox=10; 
					break;
				case 4:
					ser[1].subestado=3; 
					ser[1].fotograma =12; 
					ser[1].impulsox=5; 
					break;
				case 3:
					ser[1].subestado=2; 
					ser[1].fotograma =12; 
					ser[1].impulsox=4; 
					break;
				case 2:
					ser[1].subestado=1; 
					ser[1].fotograma =12; 
					ser[1].impulsox=3; 
					break;
				case 1:
					ser[1].subestado=0; 
					ser[1].fotograma =12;
					ser[1].impulsox=2; 
					break;
			}		
		}	
	}	

	// lazar ki2	
	if (ser[2].estado == 11 && ser[2].subestado > 0) {
		if (direccion2 == 1) {	
			ser[2].linea =1; 
			switch (ser[2].subestado) {
				case 7:
					ser[2].subestado=6; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-15; 
					disparaki(2,1); break;
				case 6:
					ser[2].subestado=5; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-10; 
					break;
				case 5:
					ser[2].subestado=4; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-10; 
					break;
				case 4:
					ser[2].subestado=3; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-5; 
					break;
				case 3:
					ser[2].subestado=2; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-4; 
					break;
				case 2:
					ser[2].subestado=1; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-3; 
					break;
				case 1:
					ser[2].subestado=0; 
					ser[2].fotograma =12; 
					ser[2].impulsox=-2; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			ser[2].linea =2; 
			switch (ser[2].subestado) {
				case 7:
					ser[2].subestado=6; 
					ser[2].fotograma =12; 
					ser[2].impulsox=15; 
					disparaki(2,0); 
					break;
				case 6:
					ser[2].subestado=5; 
					ser[2].fotograma =12; 
					ser[2].impulsox=10; 
					break;
				case 5:
					ser[2].subestado=4; 
					ser[2].fotograma =12; 
					ser[2].impulsox=10; 
					break;
				case 4:
					ser[2].subestado=3; 
					ser[2].fotograma =12; 
					ser[2].impulsox=5; 
					break;
				case 3:
					ser[2].subestado=2; 
					ser[2].fotograma =12; 
					ser[2].impulsox=4; 
					break;
				case 2:
					ser[2].subestado=1; 
					ser[2].fotograma =12; 
					ser[2].impulsox=3; 
					break;
				case 1:
					ser[2].subestado=0; 
					ser[2].fotograma =12; 
					ser[2].impulsox=2; 
					break;
			}		
		}	
	}	

	// herido
	if (vida1 < 6) {
		ser[1].estado=12; 
		ser[1].subestado=5;
	}
	
	if (vida2 < 6) {
		ser[2].estado=12; 
		ser[2].subestado=5;
	}	

	if (ser[2].estado == 12 && ser[2].subestado > 0) {
		if (direccion2 == 1) {	
			ser[2].linea = 1; 
			switch (ser[2].subestado) {
				case 5:
					ser[2].subestado=4; 
					ser[2].fotograma =11; 
					ser[2].impulsox=-10; 
					break;
				case 4:
					ser[2].subestado=3; 
					ser[2].fotograma =11; 
					ser[2].impulsox=-5; 
					break;
				case 3:
					ser[2].subestado=2; 
					ser[2].fotograma =11; 
					ser[2].impulsox=-4; 
					break;
				case 2:
					ser[2].subestado=1; 
					ser[2].fotograma =11; 
					ser[2].impulsox=-3; 
					break;
				case 1:
					ser[2].subestado = 0; 
					ser[2].fotograma = 11; 
					ser[2].impulsox = -2; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			ser[2].linea =2; 
			switch (ser[2].subestado) {
				case 5:
					ser[2].subestado=4; 
					ser[2].fotograma =11; 
					ser[2].impulsox=10; 
					break;
				case 4:
					ser[2].subestado=3; 
					ser[2].fotograma =11; 
					ser[2].impulsox=5; 
					break;
				case 3:
					ser[2].subestado=2; 
					ser[2].fotograma =11; 
					ser[2].impulsox=4; 
					break;
				case 2: 
					ser[2].subestado=1; 
					ser[2].fotograma =11; 
					ser[2].impulsox=3; 
					break;
				case 1:
					ser[2].subestado=0; 
					ser[2].fotograma =11; 
					ser[2].impulsox=2; 
					break;
			}		
		}		
	}	

	if (ser[1].estado == 12 && ser[1].subestado > 0) {
		if (direccion1 == 1) {	
			ser[1].linea =1; 
			switch (ser[1].subestado) {
				case 5:
					ser[1].subestado=4; 
					ser[1].fotograma =11; 
					ser[1].impulsox=-10; 
					break;
				case 4:
					ser[1].subestado=3; 
					ser[1].fotograma =11; 
					ser[1].impulsox=-5; 
					break;
				case 3:
					ser[1].subestado=2; 
					ser[1].fotograma =11; 
					ser[1].impulsox=-4; 
					break;
				case 2:
					ser[1].subestado=1; 
					ser[1].fotograma =11; 
					ser[1].impulsox=-3; 
					break;
				case 1:
					ser[1].subestado=0; 
					ser[1].fotograma =11; 
					ser[1].impulsox=-2; 
					break;
			}		
		}	

		if (direccion1 == 0) {	
			ser[1].linea =2; 
			switch (ser[1].subestado) {
				case 5:
					ser[1].subestado=4; 
					ser[1].fotograma =11; 
					ser[1].impulsox=10; 
					break;
				case 4:
					ser[1].subestado=3;
					ser[1].fotograma =11;
					ser[1].impulsox=5; 
					break;
				case 3:
					ser[1].subestado=2; 
					ser[1].fotograma =11; 
					ser[1].impulsox=4; 
					break;
				case 2:
					ser[1].subestado = 1; 
					ser[1].fotograma = 11; 
					ser[1].impulsox = 3; 
					break;
				case 1:
					ser[1].subestado = 0; 
					ser[1].fotograma = 11; 
					ser[1].impulsox=2; 
					break;
			}		
		}		
	}		

	// Funciones
	contador = 0;

	while (contador < cantidad_seres) {
		contador = contador + 1;	
		if (ser[contador].vida > 0) {
			ser[contador].xmax=ser[contador].x;
			ser[contador].ymax=ser[contador].y;
		}
	}

	contador = 0;

	while (contador < cantidad_seres) {
		contador = contador + 1;	
		if (ser[contador].vida > 0) {
			ser[contador].Move();
			ser[contador].buscachoque(0);
		}
	}	
}

console.log('jugar')

function control_naves () {

	// 3 golpes jugador1
	
	if (presiona[tecla_disparo] && contador_golpe1 == 0 && (ser[1].subestado == 0 || ser[1].estado == 4  || ser[1].estado == 2)) {
		if (direccion1==1) {
			ser[1].estado=5; 
			ser[1].subestado=10;
		}

		if (direccion1==0) {
			ser[1].estado=6; 
			ser[1].subestado=10;
		}		
		contador_golpe1	= 1;	
	}		
	
	else if (presiona[tecla_disparo] &&  contador_golpe1==0 && (ser[1].estado==5 || ser[1].estado==6)) {
		if (direccion1==1) {
			ser[1].estado=7; 
			ser[1].subestado=10;
		}

		if (direccion1==0) {
			ser[1].estado=8; 
			ser[1].subestado=10;
		}		
		contador_golpe1	= 1;			
	}	

	else if (presiona[tecla_disparo] &&  contador_golpe1==0 && (ser[1].estado==7 || ser[1].estado==8)) {
		if (direccion1==1) {
			ser[1].estado=9; 
			ser[1].subestado=15;
		}	
		if (direccion1==0) {
			ser[1].estado=10; 
			ser[1].subestado=15;
		}
		contador_golpe1	= 1;			
	}
	
	//3 golpes jugador2
		
	if (presiona[tecla_disparo2] && contador_golpe2==0 && (ser[2].subestado==0 || ser[2].estado==4  || ser[2].estado==2)) {
		if (direccion2==1) {
			ser[2].estado=5; 
			ser[2].subestado=10;
		}	
		if (direccion2==0) {
			ser[2].estado=6; 
			ser[2].subestado=10;
		}
		contador_golpe2	= 1;	
	}		
	
	else if (presiona[tecla_disparo2] &&  contador_golpe2==0 && (ser[2].estado==5 || ser[2].estado==6)) {
		if (direccion2 == 1) {
			ser[2].estado=7; 
			ser[2].subestado=10;
		}	
		if (direccion2 == 0) {
			ser[2].estado=8; 
			ser[2].subestado=10;
		}
		contador_golpe2	= 1;			
	}	

	else if (presiona[tecla_disparo2] &&  contador_golpe2==0 && (ser[2].estado==7 || ser[2].estado==8)) {
		if (direccion2==1) {
			ser[2].estado=9; 
			ser[2].subestado=15;
		}
		if (direccion2==0) {
			ser[2].estado=10; 
			ser[2].subestado=15;
		}
		contador_golpe2	= 1;			
	}

	
	// caminar jugador1
	if ( (presiona[tecla_derecha1]) && (ser[1].subestado==0 || ser[1].estado==4  || ser[1].estado==2)) {
		ser[1].estado=2; 
		ser[1].subestado=5;
	}
	
	else if ((presiona[tecla_izquierda1]) && (ser[1].subestado==0 || ser[1].estado==2 || ser[1].estado==4)) {
		ser[1].estado=4; 
		ser[1].subestado=5;
	}
	
	//caminar jugador2
	if ((presiona[tecla_derecha2]) && (ser[2].subestado==0 || ser[2].estado==4  || ser[2].estado==2)) {
		ser[2].estado=2; 
		ser[2].subestado=5;
	}
	
	else if ((presiona[tecla_izquierda2]) && (ser[2].subestado==0 || ser[2].estado==2 || ser[2].estado==4)) {
		ser[2].estado=4; 
		ser[2].subestado=5;
	}
	
	// saltar
	if ((presiona[tecla_arriba1] && salto_potencia1>0)) {
		ser[1].estado2=1; 
		ser[1].subestado2=5;
	}
	
	if ((presiona[tecla_arriba2] && salto_potencia2>0)) {
		ser[2].estado2=1; 
		ser[2].subestado2=5;
	}
	
	// lanzar ki
	
	if (presiona[tecla_magia1] && ki1 > 5 && contador_bola1==0 && (ser[1].subestado==0 || ser[1].estado==4  || ser[1].estado==2)) {
		ser[1].estado=11; 
		ser[1].subestado=7;	
		contador_bola1	= 1;	
	}
	
	if (presiona[tecla_magia2] && ki2 > 5 && contador_bola2==0 && (ser[2].subestado==0 || ser[2].estado==4  || ser[2].estado==2)) {
		ser[2].estado = 11; 
		ser[2].subestado = 7;	
		contador_bola2	= 1;	
	}	
}

console.log('control naves')

function niveles() {
    contador = 1;
    while (contador < cantidad_seres) {
        contador += 1;
        ser[contador].x = 0; 
        ser[contador].y = 1000; 
        ser[contador].impulsox = 0; 
        ser[contador].impulsoy = 0;
    }

    // player 1
    ser[1].x = 100; 
    ser[1].y = 500; 
    ser[1].estado = 1;  
    ser[1].subestado = 0; 
    ser[1].estado2 = 1;  
    ser[1].subestado2 = 0; 

    ser[1].w = 70; 
    ser[1].h = 70; 
    ser[1].volumen = 100; 
    ser[1].dibujo = 1; 
    ser[1].fotograma = 1; 
    ser[1].linea = 1; 

    ser[1].vidamax = 10; 
    ser[1].accion3 = 0; 
    ser[1].masa = 10; 
    ser[1].potencia = 10;

    ser[1].accion = 0; 
    ser[1].etereo = 1; 
    ser[1].potencia = 40; 
    ser[1].vida = 10;

    direccion1 = 1;
    imagen[1].src = 'recursos/p1.png';

    // player 2

    ser[2].x = 800; 
    ser[2].y = 500; 
    ser[2].estado = 1;  
    ser[2].subestado = 0; 
    ser[2].estado2 = 1;  
    ser[2].subestado2 = 0; 

    ser[2].w = 70; 
    ser[2].h = 70; 
    ser[2].volumen = 100; 
    ser[2].dibujo = 2; 
    ser[2].fotograma = 1; 
    ser[2].linea = 2; 

    ser[2].vidamax = 10; 
    ser[2].accion3 = 0; 
    ser[2].masa = 10; 
    ser[2].potencia = 10;

    ser[2].accion = 0; 
    ser[2].etereo = 1; 
    ser[2].potencia = 40; 
    ser[2].vida = 10;

    direccion2 = 0;
    imagen[2].src = 'recursos/2.png';

    // terreno piso

    ser[3].x = -50; 
    ser[3].y = 650; 
    //ser[3].y=550; 
    ser[3].estado = 1; 
    ser[3].subestado = 0; 

    ser[3].w = 480; 
    ser[3].h = 100; 
    ser[3].volumen = 1000; 
    ser[3].dibujo = 3; 
    ser[3].fotograma = 1; 
    ser[3].linea = 1; 

    ser[3].vidamax = 10; 
    ser[3].accion3 = 0; 
    ser[3].masa = 100; 
    ser[3].potencia = 10;

    ser[3].accion = 0; 
    ser[3].etereo = 2; 
    ser[3].potencia = 40; 
    ser[3].vida = 10;

    imagen[3].src = 'recursos/3.png';

    ser[4].x = 400; 
    ser[4].y = 650; 
    ser[4].estado = 1;  
    ser[4].subestado = 0; 

    ser[4].w = 480; 
    ser[4].h = 100; 
    ser[4].volumen = 1000; 
    ser[4].dibujo = 3; 
    ser[4].fotograma = 1; 
    ser[4].linea = 1; 

    ser[4].vidamax = 10; 
    ser[4].accion3 = 0; 
    ser[4].masa = 100; 
    ser[4].potencia = 10;

    ser[4].accion = 0; 
    ser[4].etereo = 2; 
    ser[4].potencia = 40; 
    ser[4].vida = 10;
    imagen[3].src = 'recursos/3.png';

    ser[5].x = 850; 
    ser[5].y = 650; 
    ser[5].estado = 1;  
    ser[5].subestado = 0; 

    ser[5].w = 480; 
    ser[5].h = 100; 
    ser[5].volumen = 1000; 
    ser[5].dibujo = 3; 
    ser[5].fotograma = 1; 
    ser[5].linea = 1; 

    ser[5].vidamax = 10; 
    ser[5].accion3 = 0; 
    ser[5].masa = 100; 
    ser[5].potencia = 10;

    ser[5].accion = 0; 
    ser[5].etereo = 2; 
    ser[5].potencia = 40; 
    ser[5].vida = 10;
    imagen[3].src = 'recursos/3.png';

	// K.O.
    ser[6].x = 400; 
	ser[6].y = 200; 
	ser[6].estado = 1;  
	ser[6].subestado = 0;

    ser[6].w = 480; 
	ser[6].h = 100; 
	ser[6].volumen = 1000; 
	ser[6].dibujo = 10; 
	ser[6].fotograma = 1; 
	ser[6].linea = 1;

    ser[6].vidamax = 10; 
	ser[6].accion3 = 0; 
	ser[6].masa = 100; 
	ser[6].potencia = 10;

    ser[6].accion = 0; 
	ser[6].etereo = 0; 
	ser[6].potencia = 40; 
	ser[6].vida = 10;
    imagen[10].src = 'recursos/10.png';

	// platform
    ser[7].x = 1300; 
	ser[7].y = 400; 
	ser[7].estado = 1;  
	ser[7].subestado = 0;

    ser[7].w = 480; 
	ser[7].h = 100; 
	ser[7].volumen = 1000; 
	ser[7].dibujo = 3; 
	ser[7].fotograma = 1; 
	ser[7].linea = 1;

    ser[7].vidamax = 10; 
	ser[7].accion3 = 0; 
	ser[7].masa = 100; 
	ser[7].potencia = 10;

    ser[7].accion = 0; 
	ser[7].etereo = 2; 
	ser[7].potencia = 40; 
	ser[7].vida = 10;
    imagen[3].src = 'recursos/3.png';

	// life and ki
    ser[8].x = 0; 
	ser[8].y = 20; 
	ser[8].estado = 1;  
	ser[8].subestado = 0;

    ser[8].w = 480; 
	ser[8].h = 100; 
	ser[8].volumen = 500; 
	ser[8].dibujo = 4; 
	ser[8].fotograma = 1; 
	ser[8].linea = 1;

    ser[8].vidamax = 10; 
	ser[8].accion3 = 0; 
	ser[8].masa = 100; 
	ser[8].potencia = 10;

    ser[8].accion = 0; 
	ser[8].etereo = 0; 
	ser[8].potencia = 40; 
	ser[8].vida = 10;
    imagen[4].src = 'recursos/4.png';

    ser[9].x = 0; 
	ser[9].y = 50; 
	ser[9].estado = 1;  
	ser[9].subestado = 0;

    ser[9].w = 480; 
	ser[9].h = 100; 
	ser[9].volumen = 500; 
	ser[9].dibujo = 5; 
	ser[9].fotograma = 1; 
	ser[9].linea = 1;

    ser[9].vidamax = 10; 
	ser[9].accion3 = 0; 
	ser[9].masa = 100; 
	ser[9].potencia = 10;

    ser[9].accion = 0; 
	ser[9].etereo = 0; 
	ser[9].potencia = 40; 
	ser[9].vida = 10;
    imagen[5].src = 'recursos/5.png';

    ser[10].x = 750; 
	ser[10].y = 20; 
	ser[10].estado = 1;  
	ser[10].subestado = 0;

    ser[10].w = 480; 
	ser[10].h = 100; 
	ser[10].volumen = 500; 
	ser[10].dibujo = 4; 
	ser[10].fotograma = 1; 
	ser[10].linea = 1;

    ser[10].vidamax = 10; 
	ser[10].accion3 = 0; 
	ser[10].masa = 100; 
	ser[10].potencia = 10;

    ser[10].accion = 0; 
	ser[10].etereo = 0; 
	ser[10].potencia = 40; 
	ser[10].vida = 10;
    imagen[4].src = 'recursos/4.png';

    ser[11].x = 750; 
	ser[11].y = 50; 
	ser[11].estado = 1;  
	ser[11].subestado = 0;

    ser[11].w = 480; 
	ser[11].h = 100; 
	ser[11].volumen = 500; 
	ser[11].dibujo = 5; 
	ser[11].fotograma = 1; 
	ser[11].linea = 1;

    ser[11].vidamax = 10; 
	ser[11].accion3 = 0; 
	ser[11].masa = 100; 
	ser[11].potencia = 10;

    ser[11].accion = 0; 
	ser[11].etereo = 0; 
	ser[11].potencia = 40; 
	ser[11].vida = 10;
    imagen[5].src = 'recursos/5.png';

    // bolas de ki jugador1
    ser[12].x = 750; 
    ser[12].y = 50; 
    ser[12].estado = 1;  
    ser[12].subestado = 0; 

    ser[12].w = 50; 
    ser[12].h = 50; 
    ser[12].volumen = 500; 
    ser[12].dibujo = 6; 
    ser[12].fotograma = 1; 
    ser[12].linea = 1; 

    ser[12].vidamax = 10; 
    ser[12].accion3 = 0; 
    ser[12].masa = 100; 
    ser[12].potencia = 10;

    ser[12].accion = 1; 
    ser[12].etereo = 0; 
    ser[12].potencia = 40; 
    ser[12].vida = 0;

    imagen[6].src = 'recursos/6.1.png';

    ser[13].x = 650; 
    ser[13].y = 50; 
    ser[13].estado = 1;  
    ser[13].subestado = 0; 

    ser[13].w = 50; 
    ser[13].h = 50; 
    ser[13].volumen = 500; 
    ser[13].dibujo = 6; 
    ser[13].fotograma = 1; 
    ser[13].linea = 1; 

    ser[13].vidamax = 10; 
    ser[13].accion3 = 0; 
    ser[13].masa = 100; 
    ser[13].potencia = 10;

    ser[13].accion = 1; 
    ser[13].etereo = 0; 
    ser[13].potencia = 40; 
    ser[13].vida = 0;

    imagen[6].src = 'recursos/6.1.png';

    ser[14].x = 550; 
    ser[14].y = 50; 
    ser[14].estado = 1;  
    ser[14].subestado = 0; 

    ser[14].w = 50; 
    ser[14].h = 50; 
    ser[14].volumen = 500; 
    ser[14].dibujo = 6; 
    ser[14].fotograma = 1; 
    ser[14].linea = 1;

    ser[14].vidamax = 10; 
    ser[14].accion3 = 0; 
    ser[14].masa = 100; 
    ser[14].potencia = 10;

    ser[14].accion = 1; 
    ser[14].etereo = 0; 
    ser[14].potencia = 40; 
    ser[14].vida = 0;

    imagen[6].src = 'recursos/6.png';

    ser[15].x = 750; 
    ser[15].y = 250; 
    ser[15].estado = 1;  
    ser[15].subestado = 0; 

    ser[15].w = 50; 
    ser[15].h = 50; 
    ser[15].volumen = 500; 
    ser[15].dibujo = 6; 
    ser[15].fotograma = 1; 
    ser[15].linea = 1; 

    ser[15].vidamax = 10; 
    ser[15].accion3 = 0; 
    ser[15].masa = 100; 
    ser[15].potencia = 10;

    ser[15].accion = 1; 
    ser[15].etereo = 0; 
    ser[15].potencia = 40; 
    ser[15].vida = 0;

    imagen[6].src = 'recursos/6.1.png';

    ser[16].x = 650; 
	ser[16].y = 250;  
	ser[16].estado = 1;  
	ser[16].subestado = 0;

    ser[16].w = 50; 
	ser[16].h = 50;  
	ser[16].volumen = 500; 
	ser[16].dibujo = 6;  
	ser[16].fotograma = 1; 
	ser[16].linea = 1;

    ser[16].vidamax = 10; 
	ser[16].accion3 = 0; 
	ser[16].masa = 100; 
	ser[16].potencia = 10;

    ser[16].accion = 1; 
	ser[16].etereo = 0; 
	ser[16].potencia = 40; 
	ser[16].vida = 0;
    imagen[6].src = 'recursos/6.1.png';

    // bolas de ki jugador2

    ser[17].x = 550; 
	ser[17].y = 0; 
	ser[17].estado = 1;  
	ser[17].subestado = 0;

    ser[17].w = 50; 
	ser[17].h = 50; 
	ser[17].volumen = 500; 
	ser[17].dibujo = 6; 
	ser[17].fotograma = 1; 
	ser[17].linea = 1;

    ser[17].vidamax = 10; 
	ser[17].accion3 = 0; 
	ser[17].masa = 100; 
	ser[17].potencia = 10;

    ser[17].accion = 1; 
	ser[17].etereo = 0; 
	ser[17].potencia = 40; 
	ser[17].vida = 0;
    imagen[6].src = 'recursos/6.png';

    ser[18].x = 600; 
	ser[18].y = 0; 
	ser[18].estado = 1;  
	ser[18].subestado = 0;

    ser[18].w = 50; 
	ser[18].h = 50; 
	ser[18].volumen = 500; 
	ser[18].dibujo = 6; 
	ser[18].fotograma = 1; 
	ser[18].linea = 1;

    ser[18].vidamax = 10; 
	ser[18].accion3 = 0; 
	ser[18].masa = 100; 
	ser[18].potencia = 10;

    ser[18].accion = 1; 
	ser[18].etereo = 0; 
	ser[18].potencia = 40; 
	ser[18].vida = 0;
    imagen[6].src = 'recursos/6.png';

    ser[19].x = 650; 
	ser[19].y = 0; 
	ser[19].estado = 1;  
	ser[19].subestado = 0;

    ser[19].w = 50; 
	ser[19].h = 50; 
	ser[19].volumen = 500; 
	ser[19].dibujo = 6; 
	ser[19].fotograma = 1; 
	ser[19].linea = 1;

    ser[19].vidamax = 10; 
	ser[19].accion3 = 0; 
	ser[19].masa = 100; 
	ser[19].potencia = 10;

    ser[19].accion = 1; 
	ser[19].etereo = 0; 
	ser[19].potencia = 40; 
	ser[19].vida = 0;
    imagen[6].src = 'recursos/6.png';

    ser[20].x = 700; 
	ser[20].y = 0; 
	ser[20].estado = 1;  
	ser[20].subestado = 0;

    ser[20].w = 50; 
	ser[20].h = 50; 
	ser[20].volumen = 500; 
	ser[20].dibujo = 6; 
	ser[20].fotograma = 1; 
	ser[20].linea = 1;

    ser[20].vidamax = 10; 
	ser[20].accion3 = 0; 
	ser[20].masa = 100; 
	ser[20].potencia = 10;

    ser[20].accion = 1; 
	ser[20].etereo = 0; 
	ser[20].potencia = 40; 
	ser[20].vida = 0;
	
    imagen[6].src = 'recursos/6.png';

    ser[21].x = 750; 
	ser[21].y = 0; 
	ser[21].estado = 1;  
	ser[21].subestado = 0;

    ser[21].w = 50; 
	ser[21].h = 50; 
	ser[21].volumen = 500; 
	ser[21].dibujo = 6; 
	ser[21].fotograma = 1; 
	ser[21].linea = 1;

    ser[21].vidamax = 10; 
	ser[21].accion3 = 0; 
	ser[21].masa = 100; 
	ser[21].potencia = 10;

    ser[21].accion = 1;
	ser[21].etereo = 0; 
	ser[21].potencia = 40; 
	ser[21].vida = 0;
	
    imagen[6].src = 'recursos/6.png';

    //#region Hits

	// Player 1
    // height, width
    ser[22].w = ser[22].h = 80; 

	// volume
	ser[22].volumen = 100; 
	
	// image
	ser[22].dibujo = 8; 
	ser[22].linea = 1;

	// Player 2
	// height, width
    ser[23].w = ser[23].h = 80; 

	// volume
	ser[23].volumen = 100; 
	
	// image
	ser[23].dibujo = 8; 
	ser[23].linea = 1;
	
    imagen[8].src = 'recursos/8.png';
	//#endregion

    //#region Background

	// coordinates
    ser[24].x = ser[24].y = 0; 

	// volume
	ser[24].volumen = 1280;

	// image
	ser[24].dibujo = 9; 

	// --
	ser[24].fotograma = 1; 
	ser[24].linea = 1;

    imagen[9].src = 'recursos/9.png';

	//#endregion

    //#region Platforms

	// coordinates
    ser[25].x = -300; 
	ser[25].y = 200; 

	// height, width
    ser[25].w = 480; 
	ser[25].h = 100; 

	// volume
	ser[25].volumen = 500; 

	// image
	ser[25].dibujo = 3; 

	// --
	ser[25].fotograma = 1; 
	ser[25].linea = 1;
	ser[25].masa = 100; 
	ser[25].etereo = 2; 
	ser[25].vida = 10;

	//-----------------------

	// coordinates
    ser[26].x = 100; 
	ser[26].y = 300; 

	// height, width
    ser[26].w = 480; 
	ser[26].h = 100; 

	// volume
	ser[26].volumen = 500; 

	// image
	ser[26].dibujo = 3; 

	// --
	ser[26].fotograma = 1; 
	ser[26].linea = 1;
	ser[26].masa = 100; 
	ser[26].etereo = 2; 
	ser[26].vida = 10;

	////-----------------------

	// coordinates
    ser[27].x = 550; 
	ser[27].y = 500; 

	// height, width
    ser[27].w = 575; 
	ser[27].h = 50; 

	// volume
	ser[27].volumen = 50000; 

	// image
	ser[27].dibujo = 3; 

	// --
	ser[27].fotograma = 1; 
	ser[27].linea = 1;
	ser[27].masa = 100; 
	ser[27].etereo = 2; 
	ser[27].vida = 10;

    imagen[3].src = 'recursos/3.png';

	//#endregion

    pantalla_juego = 1;
}