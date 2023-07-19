var Images = new Array();

for (let i = 1; i < 8; i++) {
    Images[i] = new Image(); 
    Images[i].src = './resources/1.png';
}

Images[8] = new Image(); Images[8].src = './resources/8.png';
Images[9] = new Image(); Images[9].src = './resources/9.png';
Images[10] = new Image(); Images[10].src = './resources/10.png';

Images[11] = new Image(); Images[10].src = './resources/spells/1.png';

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
				if (this == game.Characters[1]) salto_potencia2 = 5;
				if (this == game.Characters[0]) salto_potencia1 = 5;

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
				if (this == game.Characters[1]) salto_potencia2 = 5;
				if (this == game.Characters[0]) salto_potencia1 = 5;

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
				if (this == game.Characters[1]) {
					salto_potencia2 = 5;
				} 
				if (this == game.Characters[0]) {
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

	this.Draw = function(ctx) {
		cordenadax_dibuja = (this.fotograma - 1) * this.volumen;
		cordenaday_dibuja = (this.linea - 1) * this.volumen;
		ctx.drawImage(
			Images[this.dibujo], cordenadax_dibuja, cordenaday_dibuja, 
			this.volumen, this.volumen, this.x, this.y, this.volumen, this.volumen
		);
	}
}

var ser = new Array();
for (let i = 0; i < 31; i++) ser[i] = new ente(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


class Game {
	constructor() {
		this.Scene = 3;
		this.Characters = [];
		this.CountScene = 0;
	}

	Print() {
		console.log(this.Scene);
	}

	AddPlayer(newPlayer) {
		this.Characters.push(newPlayer);
	}
}

// scene

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

var vida1 = 100;
var vida2 = 100;
var ki1 = 100;
var ki2 = 100;

//Opciones
var gravedad = 20;

var p1_bolaenergia = 1;
var p1_vel = 15;
var p1_salto = 35;
var p1_podergolpe = 2;
var p1_poderbola = 10;


var p2_bolaenergia = 20;
var p2_vel = 15;
var p2_salto = 35;
var p2_podergolpe = 2;
var p2_poderbola = 10;

var cantidad_espejismos = 2;

var espejismo = new Array();
for (let i = 1; i < 21; i++) espejismo[i] = new Mirror(0, 0, 0, 0, 0, 0, 0);

var cual_portada = 0;
var presiona_portada = 0;

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
var tecla_d = 68;
var tecla_s = 83;
var tecla_w = 87;

var tecla_e = 69;
var tecla_f = 70;

var tecla_g = 71;
var tecla_h = 72;

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

function disparaki (player, address) {
	if (player == 1) {
		if (address == 1) {
			for(let i = 12; i < 17; i++) {
				if (ser[i].vida == 0) {
					ser[i].vida = 1;	
					ser[i].x = game.Characters[0].x + 50; 
					ser[i].y = game.Characters[0].y; 	
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
					ser[i].x = game.Characters[0].x; 
					ser[i].y = game.Characters[0].y; 	
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
					ser[i].x = game.Characters[1].x + 50; 
					ser[i].y = game.Characters[1].y; 	
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
					ser[i].x = game.Characters[1].x; 
					ser[i].y = game.Characters[1].y; 	
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


//------------------------------FIN

function GenerateGame() {
	//ctx.fillStyle = '#000000';
	ctx.fillStyle = '#FE84DD';
	ctx.fillRect(0, 0, juego.width, juego.height);
	var gameObjects = [24, 8, 9, 10, 11, 25, 26, 27, 3, 4, 5];
	gameObjects.map(item => ser[item].Draw(ctx));

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
		if (ser[contador].vida > 0) ser[contador].Draw(ctx);
	}

	//generate players
	game.Characters[0].Draw(ctx);
	game.Characters[1].Draw(ctx);

	// generate hits
	if (ser[22].vida > 0) ser[22].Draw(ctx);
	if (ser[23].vida > 0) ser[23].Draw(ctx);

	// generate game over title
	if (vida1 < 6 || vida2 < 6) ser[6].Draw(ctx);
}

function CoverLogic() {
	game.CountScene += 1;

	if (game.CountScene == 2) {
		Images[1].src = './resources/1070.png'; 
		espejismo[1].Drawing = 1; 
		espejismo[1].Frame = 1; 
		espejismo[1].Volume = 1280; 
		espejismo[1].Life = 1; 
		espejismo[1].X = 0; 
		espejismo[1].Y = 0; 

		valor_guardado = localStorage.getItem('ssnave_vidamaxbase'); 
		valor_guardado = parseFloat(valor_guardado); 
		nave_vidamaxbase = valor_guardado;

		Images[2].src = './resources/1071.png'; 	
		espejismo[2].Drawing = 2; 
		espejismo[2].Volume = 500; 
		espejismo[2].Life = 0; 
		espejismo[2].X = 380; 
		espejismo[2].Y = 380; 		
		
		if (nave_vidamaxbase > 0) espejismo[2].Frame = 1; 
		else espejismo[2].Frame = 2; 

	}

	if (game.CountScene > 2) {

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
			game.Scene = 3;
		}
		
		if (presiona[tecla_enter] && cual_portada == 2 && presiona_portada==0) {
			nave_vidamaxbase = 100;
			document.getElementById('sonidofx').volume = 0.3;
			game.Scene = 3;
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

function jugar() {
	// Movimientos 
	if (game.Characters[0].subestado == 0) game.Characters[0].estado = 1;
	if (game.Characters[1].subestado == 0) game.Characters[1].estado = 1;

	game.Characters[0].impulsoy = gravedad;
	game.Characters[1].impulsoy = gravedad;

	// Bolas de ki
	contador = 11;
	while (contador < 16) {
		contador = contador + 1;

		if (ser[contador].x > 1200 || ser[contador].x < 0) ser[contador].vida = 0;
		if (ser[contador].vida > 0 && ser[contador].accion == 1) ser[contador].x = ser[contador].x + 20;
		if (ser[contador].vida > 0 && ser[contador].accion == 2) ser[contador].x = ser[contador].x - 20;

		if (ser[contador].Clash(game.Characters[1]) == 1 && game.Characters[1].estado != 12 && ser[contador].vida > 0)  {
			game.Characters[1].estado = 12; 
			game.Characters[1].subestado = 5; 
			vida2 = vida2 - p1_poderbola; 
			ser[contador].vida = 0;
		}
	}	

	contador = 16;
	while (contador < 21) {
		contador = contador + 1;

		if (ser[contador].x > 1200 || ser[contador].x < 0) ser[contador].vida = 0;
		if (ser[contador].vida > 0 && ser[contador].accion == 1) ser[contador].x = ser[contador].x + 20;
		if (ser[contador].vida > 0 && ser[contador].accion == 2) ser[contador].x = ser[contador].x - 20;

		if (ser[contador].Clash(game.Characters[0]) == 1 && game.Characters[0].estado != 12 && ser[contador].vida > 0) {
			game.Characters[0].estado = 12; 
			game.Characters[0].subestado = 5; 
			vida1 = vida1 - p2_poderbola; 
			ser[contador].vida = 0;
		}
	}	
		
	// Golpes
	if (ser[22].vida > 0 && ser[22].accion == 1) {
		ser[22].x = ser[22].x + 5; 
		ser[22].vida = ser[22].vida-1;
	}

	if (ser[22].vida>0 && ser[22].accion==2) {
		ser[22].x = ser[22].x - 5; 
		ser[22].vida = ser[22].vida-1;
	}

	if (ser[22].Clash(game.Characters[1]) == 1 && game.Characters[1].estado != 12 && ser[22].vida > 0) {
		game.Characters[1].estado = 12; 
		game.Characters[1].subestado = 5; 
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

	if (ser[23].Clash(game.Characters[0]) == 1 && game.Characters[0].estado != 12 && ser[23].vida > 0) {
		game.Characters[0].estado = 12; 
		game.Characters[0].subestado = 5; 
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
		
	if (game.Characters[0].estado == 1) {
		if (salto_potencia1 > 0) {
			if (game.Characters[0].fotograma < 4) game.Characters[0].fotograma += 1;
			else game.Characters[0].fotograma = 1;
		}	

		else game.Characters[0].fotograma = 5;		
	}
		
	if (game.Characters[1].estado == 1) {
		if (salto_potencia2 > 0) {
			if (game.Characters[1].fotograma < 4) game.Characters[1].fotograma += 1;
			else game.Characters[1].fotograma = 1;
		}	

		else game.Characters[1].fotograma = 5;		
	}	
		
	// caminar

	if (game.Characters[0].estado == 2) {
		if (game.Characters[0].subestado < 5) game.Characters[0].impulsox = (game.Characters[0].subestado + 1) * 2; 
		else game.Characters[0].impulsox = p1_vel;

		game.Characters[0].subestado -= 1;
		game.Characters[0].fotograma = 10; 
		game.Characters[0].linea = 1; 
		direccion1 = 1;
	}

	if (game.Characters[0].estado == 4) {
		if (game.Characters[0].subestado < 5) game.Characters[0].impulsox = -(game.Characters[0].subestado + 1) * 2; 
		else game.Characters[0].impulsox = -p1_vel;

		game.Characters[0].subestado -= 1;
		game.Characters[0].fotograma = 10;
		game.Characters[0].linea = 2; 
		direccion1 = 0;		
	}	

	if (game.Characters[1].estado == 2) {
		switch (game.Characters[1].subestado) {
			case 5: 
				game.Characters[1].subestado = 4;
				game.Characters[1].fotograma = 10;
				game.Characters[1].impulsox = p2_vel;
				break;
			case 4:
				game.Characters[1].subestado = 3;
				game.Characters[1].fotograma = 10;
				game.Characters[1].impulsox = 10;
				break;
			case 3:
				game.Characters[1].subestado = 2;
				game.Characters[1].fotograma = 10;
				game.Characters[1].impulsox = 8;
				break;
			case 2:
				game.Characters[1].subestado = 1;
				game.Characters[1].fotograma = 10;
				game.Characters[1].impulsox = 6;
				break;
			case 1:
				game.Characters[1].subestado = 0;
				game.Characters[1].fotograma = 10;
				game.Characters[1].impulsox = 4;
				break;
			}

		game.Characters[1].linea = 1; 
		direccion2 = 1;
	}		
		
	if (game.Characters[1].estado==4) {
		switch (game.Characters[1].subestado) {
			case 5:
				game.Characters[1].subestado=4;
				game.Characters[1].fotograma =10;
				game.Characters[1].impulsox=0-p2_vel;
				break;
			case 4:
				game.Characters[1].subestado=3;
				game.Characters[1].fotograma =10;
				game.Characters[1].impulsox=-10;
				break;
			case 3:
				game.Characters[1].subestado=2;
				game.Characters[1].fotograma =10;
				game.Characters[1].impulsox=-8;
				break;
			case 2: 
				game.Characters[1].subestado=1;
				game.Characters[1].fotograma =10;
				game.Characters[1].impulsox=-6;
				break;
			case 1:
				game.Characters[1].subestado=0;
				game.Characters[1].fotograma =10;
				game.Characters[1].impulsox=-4;
				break;
		}

		game.Characters[1].linea =2; 
		direccion2 =0;		
	}		
		
	// golpes jugador1

	if (game.Characters[1].estado == 5) {
		switch (game.Characters[1].subestado) {
			case 10:
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=20; 
				disparagolpe(2,1,1); 
				break;
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=20; 
				break;
			case 8:
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=15; 
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=10; 
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=5; 
				break;
			case 5:
				game.Characters[1].subestado=4;
				game.Characters[1].fotograma =7; 
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =7; 
				break;
			case 3:
				game.Characters[1].subestado=2;
				game.Characters[1].fotograma =7; 
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =7;
				break;
			case 1:
				game.Characters[1].subestado=0;
				game.Characters[1].fotograma =7;
				break;
		}
			
		game.Characters[1].linea =1; 
		direccion2 =1;	
	}		

	if (game.Characters[1].estado == 6) {
		switch (game.Characters[1].subestado) {
			case 10:
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=-20; 
				disparagolpe(2,2,1); 
				break;
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=-20; 
				break;
			case 8: 
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=-15; 
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=-10; 
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =7; 
				game.Characters[1].impulsox=-5; 
				break;
			case 5:
				game.Characters[1].subestado=4; 
				game.Characters[1].fotograma =7; 
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =7;
				break;
			case 3:
				game.Characters[1].subestado=2; 
				game.Characters[1].fotograma =7;
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =7; 
				break;
			case 1:
				game.Characters[1].subestado=0;
				game.Characters[1].fotograma =7; 
				break;	
		}

		game.Characters[1].linea =2; 
		direccion2 =0;	
	}	
	
	
	if (game.Characters[1].estado==7) {
		switch (game.Characters[1].subestado) {
			case 10:
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=15; 
				disparagolpe(2,1,2); 
				break;
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =8;
				game.Characters[1].impulsox=15; 
				break;
			case 8:
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =8;
				game.Characters[1].impulsox=15;
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =8;
				game.Characters[1].impulsox=10; 
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =8;
				game.Characters[1].impulsox=5; 
				break;
			case 5:
				game.Characters[1].subestado=4; 
				game.Characters[1].fotograma =8;
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =8;
				break;
			case 3:
				game.Characters[1].subestado=2; 
				game.Characters[1].fotograma =8;
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =8;
				break;
			case 1:
				game.Characters[1].subestado=0; 
				game.Characters[1].fotograma =8;
				break;
		}

		game.Characters[1].linea =1; 
		direccion2 =1;	
	}

	if (game.Characters[1].estado==8) {
		switch (game.Characters[1].subestado) {
			case 10:
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=-15; 
				disparagolpe(2,2,2); 
				break;
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=-15; 
				break;
			case 8:
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=-15; 
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=-10; 
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =8; 
				game.Characters[1].impulsox=-5; 
				break;
			case 5:
				game.Characters[1].subestado=4; 
				game.Characters[1].fotograma =8; 
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =8; 
				break;
			case 3:
				game.Characters[1].subestado=2; 
				game.Characters[1].fotograma =8; 
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =8; 
				break;
			case 1:
				game.Characters[1].subestado=0; 
				game.Characters[1].fotograma =8; 
				break;
			}

		game.Characters[1].linea =2; 
		direccion2 =0;	
	}	

	if (game.Characters[1].estado == 9) {
		switch (game.Characters[1].subestado) {
			case 15: 
				game.Characters[1].subestado=14; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=30; 
				disparagolpe(2,1,3); 
				break;
			case 14: 
				game.Characters[1].subestado=13; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=30; 
				break;
			case 13: 
				game.Characters[1].subestado=12; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=30; 
				break;
			case 12: 
				game.Characters[1].subestado=11; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=20; 
				break;
			case 11: 
				game.Characters[1].subestado=10; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=10; 
				break;
			case 10: 
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =9;  
				break
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =9;  
				break;
			case 8:
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =1;  
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =1;  
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =1;  
				break;
			case 5:
				game.Characters[1].subestado=4; 
				game.Characters[1].fotograma =1;  
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =1;  
				break;
			case 3:
				game.Characters[1].subestado=2; 
				game.Characters[1].fotograma =1;  
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =1;  
				break;
			case 1:
				game.Characters[1].subestado=0; 
				game.Characters[1].fotograma =1;  
				break;
		}

		game.Characters[1].linea =1; 
		direccion2 =1;	
	}

	if (game.Characters[1].estado == 10) {
		switch (game.Characters[1].subestado) {
			case 15: 
				game.Characters[1].subestado=14; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=-30; 
				disparagolpe(2,2,3); 
				break;
			case 14: 
				game.Characters[1].subestado=13; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=-30; 
				break;
			case 13: 
				game.Characters[1].subestado=12; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=-30; 
				break;
			case 12: 
				game.Characters[1].subestado=11; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=-20; 
				break;
			case 11: 
				game.Characters[1].subestado=10; 
				game.Characters[1].fotograma =9; 
				game.Characters[1].impulsox=-10; 
				break;
			case 10: 
				game.Characters[1].subestado=9; 
				game.Characters[1].fotograma =9;  
				break;
			case 9:
				game.Characters[1].subestado=8; 
				game.Characters[1].fotograma =9;  
				break;
			case 8:
				game.Characters[1].subestado=7; 
				game.Characters[1].fotograma =1;  
				break;
			case 7:
				game.Characters[1].subestado=6; 
				game.Characters[1].fotograma =1;  
				break;
			case 6:
				game.Characters[1].subestado=5; 
				game.Characters[1].fotograma =1;  
				break;
			case 5:
				game.Characters[1].subestado=4; 
				game.Characters[1].fotograma =1;  
				break;
			case 4:
				game.Characters[1].subestado=3; 
				game.Characters[1].fotograma =1;  
				break;
			case 3:
				game.Characters[1].subestado=2; 
				game.Characters[1].fotograma =1;  
				break;
			case 2:
				game.Characters[1].subestado=1; 
				game.Characters[1].fotograma =1;  
				break;
			case 1:
				game.Characters[1].subestado=0; 
				game.Characters[1].fotograma =1;  
				break;
		}
			
		game.Characters[1].linea =2; 
		direccion2 =0;	
	}
		
	// golpes jugador2
	if (game.Characters[0].estado == 5) {
		switch (game.Characters[0].subestado) {
			case 10:
				game.Characters[0].subestado=9; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=20; 
				disparagolpe(1,1,1); 
				break;
			case 9:
				game.Characters[0].subestado=8; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=20; 
				break;
			case 8:
				game.Characters[0].subestado=7; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=15; 
				break;
			case 7:
				game.Characters[0].subestado=6; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=10; 
				break;
			case 6:
				game.Characters[0].subestado=5; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=5; 
				break;
			case 5:
				game.Characters[0].subestado=4; 
				game.Characters[0].fotograma =7;  
				break;
			case 4:
				game.Characters[0].subestado=3; 
				game.Characters[0].fotograma =7;  
				break;
			case 3:
				game.Characters[0].subestado=2; 
				game.Characters[0].fotograma =7;  
				break;
			case 2:
				game.Characters[0].subestado=1; 
				game.Characters[0].fotograma =7;  
				break;
			case 1:
				game.Characters[0].subestado=0; 
				game.Characters[0].fotograma =7;  
				break;
		}
			
		game.Characters[0].linea =1; 
		direccion1 =1;	
	}		
		
	if (game.Characters[0].estado == 6) {
		switch (game.Characters[0].subestado) {
			case 10:
				game.Characters[0].subestado=9; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=-20; 
				disparagolpe(1,2,1); 
				break;
			case 9:
				game.Characters[0].subestado=8; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=-20; 
				break;
			case 8:
				game.Characters[0].subestado=7; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=-15; 
				break;
			case 7:
				game.Characters[0].subestado=6; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=-10; 
				break;
			case 6:
				game.Characters[0].subestado=5; 
				game.Characters[0].fotograma =7; 
				game.Characters[0].impulsox=-5; 
				break;
			case 5:
				game.Characters[0].subestado=4; 
				game.Characters[0].fotograma =7;  
				break;
			case 4:
				game.Characters[0].subestado=3; 
				game.Characters[0].fotograma =7;  
				break;
			case 3:
				game.Characters[0].subestado=2; 
				game.Characters[0].fotograma =7;  
				break;
			case 2:
				game.Characters[0].subestado=1; 
				game.Characters[0].fotograma =7;  
				break;
			case 1:
				game.Characters[0].subestado=0; 
				game.Characters[0].fotograma =7;  
				break;		
		}
			
		game.Characters[0].linea =2; 
		direccion1 =0;	
	}	
		
	if (game.Characters[0].estado == 7) {
		switch (game.Characters[0].subestado) {
			case 10:
				game.Characters[0].subestado=9; 
				game.Characters[0].fotograma =8; 
				game.Characters[0].impulsox=15; 
				disparagolpe(1,1,2); 
				break;
			case 9:
				game.Characters[0].subestado=8; 
				game.Characters[0].fotograma =8; 
				game.Characters[0].impulsox=15; 
				break;
			case 8:
				game.Characters[0].subestado=7; 
				game.Characters[0].fotograma =8; 
				game.Characters[0].impulsox=15; 
				break;
			case 7:
				game.Characters[0].subestado=6; 
				game.Characters[0].fotograma =8; 
				game.Characters[0].impulsox=10; 
				break;
			case 6:
				game.Characters[0].subestado=5; 
				game.Characters[0].fotograma =8; 
				game.Characters[0].impulsox=5; 
				break;
			case 5:
				game.Characters[0].subestado=4; 
				game.Characters[0].fotograma =8;  
				break;
			case 4:
				game.Characters[0].subestado=3; 
				game.Characters[0].fotograma =8;  
				break;
			case 3:
				game.Characters[0].subestado=2; 
				game.Characters[0].fotograma =8;  
				break;
			case 2:
				game.Characters[0].subestado=1; 
				game.Characters[0].fotograma =8;  
				break;
			case 1:
				game.Characters[0].subestado=0; 
				game.Characters[0].fotograma =8;  
				break;
			}
			
		game.Characters[0].linea =1; 
		direccion1 =1;	
	}

	if (game.Characters[0].estado==8) {
		switch (game.Characters[0].subestado) {
			case 10:
				game.Characters[0].subestado = 9; 
				game.Characters[0].fotograma = 8; 
				game.Characters[0].impulsox = -15; 
				disparagolpe(1,2,2); 
				break;
			case 9:
				game.Characters[0].subestado = 8; 
				game.Characters[0].fotograma = 8; 
				game.Characters[0].impulsox = -15; 
				break;
			case 8:
				game.Characters[0].subestado = 7; 
				game.Characters[0].fotograma = 8; 
				game.Characters[0].impulsox = -15; 
				break;
			case 7:
				game.Characters[0].subestado = 6; 
				game.Characters[0].fotograma = 8; 
				game.Characters[0].impulsox = -10; 
				break;
			case 6:
				game.Characters[0].subestado = 5; 
				game.Characters[0].fotograma = 8; 
				game.Characters[0].impulsox = -5; 
				break;
			case 5:
				game.Characters[0].subestado = 4; 
				game.Characters[0].fotograma = 8; 
				break;
			case 4:
				game.Characters[0].subestado = 3; 
				game.Characters[0].fotograma = 8; 
				break;
			case 3:
				game.Characters[0].subestado = 2; 
				game.Characters[0].fotograma = 8; 
				break;
			case 2:
				game.Characters[0].subestado = 1; 
				game.Characters[0].fotograma = 8; 
				break;
			case 1:
				game.Characters[0].subestado = 0; 
				game.Characters[0].fotograma = 8; 
				break;
		}

		game.Characters[0].linea =2; 
		direccion1 =0;	
	}	

	if (game.Characters[0].estado == 9) {
		switch (game.Characters[0].subestado) {
			case 15:
				game.Characters[0].subestado = 14; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=30; 
				disparagolpe(1,1,3); 
				break;
			case 14:
				game.Characters[0].subestado = 13; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=30; 
				break;
			case 13:
				game.Characters[0].subestado = 12; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=30; 
				break;
			case 12:
				game.Characters[0].subestado = 11; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=20; 
				break;
			case 11:
				game.Characters[0].subestado = 10; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=10; 
				break;
			case 10:
				game.Characters[0].subestado = 9; 
				game.Characters[0].fotograma =9;  
				break;
			case 9:
				game.Characters[0].subestado=8; 
				game.Characters[0].fotograma =9;  
				break;
			case 8:
				game.Characters[0].subestado=7; 
				game.Characters[0].fotograma =1;  
				break;
			case 7:
				game.Characters[0].subestado=6; 
				game.Characters[0].fotograma =1;  
				break;
			case 6:
				game.Characters[0].subestado=5; 
				game.Characters[0].fotograma =1;  
				break;
			case 5:
				game.Characters[0].subestado=4; 
				game.Characters[0].fotograma =1;  
				break;
			case 4:
				game.Characters[0].subestado=3; 
				game.Characters[0].fotograma =1;  
				break;
			case 3:
				game.Characters[0].subestado=2; 
				game.Characters[0].fotograma =1;  
				break;
			case 2:
				game.Characters[0].subestado=1; 
				game.Characters[0].fotograma =1;  
				break;
			case 1:
				game.Characters[0].subestado=0; 
				game.Characters[0].fotograma =1;  
				break;
		}
				
		game.Characters[0].linea =1; 
		direccion1 =1;	
	}

	if (game.Characters[0].estado == 10) {
		switch (game.Characters[0].subestado) {
			case 15: 
				game.Characters[0].subestado = 14; 
				game.Characters[0].fotograma = 9; 
				game.Characters[0].impulsox = -30; 
				disparagolpe(1,2,3); 
				break;
			case 14: 
				game.Characters[0].subestado = 13; 
				game.Characters[0].fotograma = 9; 
				game.Characters[0].impulsox = -30; 
				break;
			case 13: 
				game.Characters[0].subestado = 12; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=-30; 
				break;
			case 12: 
				game.Characters[0].subestado = 11; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=-20; 
				break;
			case 11: 
				game.Characters[0].subestado = 10; 
				game.Characters[0].fotograma =9; 
				game.Characters[0].impulsox=-10; 
				break;
			case 10: 
				game.Characters[0].subestado = 9; 
				game.Characters[0].fotograma =9;  
				break;
			case 9:
				game.Characters[0].subestado = 8; 
				game.Characters[0].fotograma = 9;  
				break;
			case 8:
				game.Characters[0].subestado = 7; 
				game.Characters[0].fotograma = 1;  
				break;
			case 7:
				game.Characters[0].subestado = 6; 
				game.Characters[0].fotograma = 1;  
				break;
			case 6:
				game.Characters[0].subestado = 5; 
				game.Characters[0].fotograma = 1;  
				break;
			case 5:
				game.Characters[0].subestado = 4; 
				game.Characters[0].fotograma = 1;  
				break;
			case 4:
				game.Characters[0].subestado = 3; 
				game.Characters[0].fotograma = 1;  
				break;
			case 3:
				game.Characters[0].subestado = 2; 
				game.Characters[0].fotograma = 1;  
				break;
			case 2:
				game.Characters[0].subestado = 1; 
				game.Characters[0].fotograma = 1;  
				break;
			case 1:
				game.Characters[0].subestado = 0; 
				game.Characters[0].fotograma = 1;  
				break;
		}
	
		game.Characters[0].linea =2; 
		direccion1 =0;	
	}
		
	// saltar

	if (game.Characters[1].estado2 == 1 && game.Characters[1].subestado2 > 0) {
		if (direccion2 == 1) {	
			game.Characters[1].linea =1; 
			switch (game.Characters[1].subestado2) {
				case 5:
					game.Characters[1].subestado2 = 4; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -p2_salto; 
					break;
				case 4:
					game.Characters[1].subestado2 = 3; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -5 - p2_salto; 
					break;
				case 3:
					game.Characters[1].subestado2 = 2; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					game.Characters[1].subestado2 = 1; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -20; 
					break;
				case 1:
					game.Characters[1].subestado2 = 0; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -10; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			game.Characters[1].linea = 2; 
			switch (game.Characters[1].subestado2) {
				case 5:
					game.Characters[1].subestado2 = 4; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -p2_salto; 
					break;
				case 4:
					game.Characters[1].subestado2 = 3; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -5 - p2_salto; 
					break;
				case 3:
					game.Characters[1].subestado2 = 2; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					game.Characters[1].subestado2 = 1; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -20; 
					break;
				case 1:
					game.Characters[1].subestado2 = 0; 
					game.Characters[1].fotograma = 5; 
					game.Characters[1].impulsoy = -10; 
					break;
			}
		}
	}

	if (game.Characters[0].estado2 == 1 && game.Characters[0].subestado2 > 0) {
		if (direccion1 == 1) {	
			game.Characters[0].linea = 1; 
			switch (game.Characters[0].subestado2) {
				case 5:
					game.Characters[0].subestado2 = 4; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -p1_salto; 
					break;
				case 4: 
					game.Characters[0].subestado2 = 3; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -5 - p1_salto; 
					break;
				case 3:
					game.Characters[0].subestado2 = 2; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					game.Characters[0].subestado2 = 1; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -20; 
					break;
				case 1:
					game.Characters[0].subestado2 = 0; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -10; 
					break;
			}
		}

		if (direccion1 == 0) {	
			game.Characters[0].linea = 2; 
			switch (game.Characters[0].subestado2) {
				case 5:
					game.Characters[0].subestado2 = 4; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -p1_salto; 
					break;
				case 4:
					game.Characters[0].subestado2 = 3; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -5 - p1_salto; 
					break;
				case 3:
					game.Characters[0].subestado2 = 2; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -10 - p2_salto; 
					break;
				case 2:
					game.Characters[0].subestado2 = 1; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -20; 
					break;
				case 1:
					game.Characters[0].subestado2 = 0; 
					game.Characters[0].fotograma = 5; 
					game.Characters[0].impulsoy = -10; 
					break;
			}
		}
	}
		
	// lazar ki1
	if (game.Characters[0].estado == 11 && game.Characters[0].subestado > 0) {
		if (direccion1 == 1) {	
			game.Characters[0].linea =1; 
			switch (game.Characters[0].subestado) {
				case 7:
					game.Characters[0].subestado = 6; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -15;
					disparaki(1,1); 
					break;
				case 6:
					game.Characters[0].subestado = 5; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -10; 
					break;
				case 5:
					game.Characters[0].subestado = 4; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -10; 
					break;
				case 4:
					game.Characters[0].subestado = 3; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -5;
					break;
				case 3:
					game.Characters[0].subestado = 2; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -4; 
					break;
				case 2:
					game.Characters[0].subestado = 1; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox =- 3; 
					break;
				case 1:
					game.Characters[0].subestado = 0; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = -2; 
					break;
			}		
		}	

		if (direccion1 == 0) {	
			game.Characters[0].linea =2; 
			switch (game.Characters[0].subestado) {
				case 7:
					game.Characters[0].subestado = 6; 
					game.Characters[0].fotograma = 12; 
					game.Characters[0].impulsox = 15; 
					disparaki(1,0); 
					break;
				case 6:
					game.Characters[0].subestado=5; 
					game.Characters[0].fotograma =12; 
					game.Characters[0].impulsox=10; 
					break;
				case 5:
					game.Characters[0].subestado=4; 
					game.Characters[0].fotograma =12; 
					game.Characters[0].impulsox=10; 
					break;
				case 4:
					game.Characters[0].subestado=3; 
					game.Characters[0].fotograma =12; 
					game.Characters[0].impulsox=5; 
					break;
				case 3:
					game.Characters[0].subestado=2; 
					game.Characters[0].fotograma =12; 
					game.Characters[0].impulsox=4; 
					break;
				case 2:
					game.Characters[0].subestado=1; 
					game.Characters[0].fotograma =12; 
					game.Characters[0].impulsox=3; 
					break;
				case 1:
					game.Characters[0].subestado=0; 
					game.Characters[0].fotograma =12;
					game.Characters[0].impulsox=2; 
					break;
			}		
		}	
	}	

	// lazar ki2	
	if (game.Characters[1].estado == 11 && game.Characters[1].subestado > 0) {
		if (direccion2 == 1) {	
			game.Characters[1].linea =1; 
			switch (game.Characters[1].subestado) {
				case 7:
					game.Characters[1].subestado=6; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-15; 
					disparaki(2,1); break;
				case 6:
					game.Characters[1].subestado=5; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-10; 
					break;
				case 5:
					game.Characters[1].subestado=4; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-10; 
					break;
				case 4:
					game.Characters[1].subestado=3; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-5; 
					break;
				case 3:
					game.Characters[1].subestado=2; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-4; 
					break;
				case 2:
					game.Characters[1].subestado=1; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-3; 
					break;
				case 1:
					game.Characters[1].subestado=0; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=-2; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			game.Characters[1].linea =2; 
			switch (game.Characters[1].subestado) {
				case 7:
					game.Characters[1].subestado=6; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=15; 
					disparaki(2,0); 
					break;
				case 6:
					game.Characters[1].subestado=5; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=10; 
					break;
				case 5:
					game.Characters[1].subestado=4; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=10; 
					break;
				case 4:
					game.Characters[1].subestado=3; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=5; 
					break;
				case 3:
					game.Characters[1].subestado=2; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=4; 
					break;
				case 2:
					game.Characters[1].subestado=1; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=3; 
					break;
				case 1:
					game.Characters[1].subestado=0; 
					game.Characters[1].fotograma =12; 
					game.Characters[1].impulsox=2; 
					break;
			}		
		}	
	}	

	// herido
	if (vida1 < 6) {
		game.Characters[0].estado=12; 
		game.Characters[0].subestado=5;
	}
	
	if (vida2 < 6) {
		game.Characters[1].estado=12; 
		game.Characters[1].subestado=5;
	}	

	if (game.Characters[1].estado == 12 && game.Characters[1].subestado > 0) {
		if (direccion2 == 1) {	
			game.Characters[1].linea = 1; 
			switch (game.Characters[1].subestado) {
				case 5:
					game.Characters[1].subestado=4; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=-10; 
					break;
				case 4:
					game.Characters[1].subestado=3; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=-5; 
					break;
				case 3:
					game.Characters[1].subestado=2; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=-4; 
					break;
				case 2:
					game.Characters[1].subestado=1; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=-3; 
					break;
				case 1:
					game.Characters[1].subestado = 0; 
					game.Characters[1].fotograma = 11; 
					game.Characters[1].impulsox = -2; 
					break;
			}		
		}	

		if (direccion2 == 0) {	
			game.Characters[1].linea =2; 
			switch (game.Characters[1].subestado) {
				case 5:
					game.Characters[1].subestado=4; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=10; 
					break;
				case 4:
					game.Characters[1].subestado=3; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=5; 
					break;
				case 3:
					game.Characters[1].subestado=2; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=4; 
					break;
				case 2: 
					game.Characters[1].subestado=1; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=3; 
					break;
				case 1:
					game.Characters[1].subestado=0; 
					game.Characters[1].fotograma =11; 
					game.Characters[1].impulsox=2; 
					break;
			}		
		}		
	}	

	if (game.Characters[0].estado == 12 && game.Characters[0].subestado > 0) {
		if (direccion1 == 1) {	
			game.Characters[0].linea =1; 
			switch (game.Characters[0].subestado) {
				case 5:
					game.Characters[0].subestado=4; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=-10; 
					break;
				case 4:
					game.Characters[0].subestado=3; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=-5; 
					break;
				case 3:
					game.Characters[0].subestado=2; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=-4; 
					break;
				case 2:
					game.Characters[0].subestado=1; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=-3; 
					break;
				case 1:
					game.Characters[0].subestado=0; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=-2; 
					break;
			}		
		}	

		if (direccion1 == 0) {	
			game.Characters[0].linea =2; 
			switch (game.Characters[0].subestado) {
				case 5:
					game.Characters[0].subestado=4; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=10; 
					break;
				case 4:
					game.Characters[0].subestado=3;
					game.Characters[0].fotograma =11;
					game.Characters[0].impulsox=5; 
					break;
				case 3:
					game.Characters[0].subestado=2; 
					game.Characters[0].fotograma =11; 
					game.Characters[0].impulsox=4; 
					break;
				case 2:
					game.Characters[0].subestado = 1; 
					game.Characters[0].fotograma = 11; 
					game.Characters[0].impulsox = 3; 
					break;
				case 1:
					game.Characters[0].subestado = 0; 
					game.Characters[0].fotograma = 11; 
					game.Characters[0].impulsox=2; 
					break;
			}		
		}		
	}		

	// Funciones
	contador = 0;

	while (contador < cantidad_seres) {
		contador = contador + 1;	
		if (ser[contador].vida > 0) {
			ser[contador].xmax = ser[contador].x;
			ser[contador].ymax = ser[contador].y;
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
	
	if (presiona[tecla_disparo] && contador_golpe1 == 0 && (game.Characters[0].subestado == 0 || game.Characters[0].estado == 4  || game.Characters[0].estado == 2)) {
		if (direccion1==1) {
			game.Characters[0].estado=5; 
			game.Characters[0].subestado=10;
		}

		if (direccion1==0) {
			game.Characters[0].estado=6; 
			game.Characters[0].subestado=10;
		}		
		contador_golpe1	= 1;	
	}		
	
	else if (presiona[tecla_disparo] &&  contador_golpe1==0 && (game.Characters[0].estado==5 || game.Characters[0].estado==6)) {
		if (direccion1==1) {
			game.Characters[0].estado=7; 
			game.Characters[0].subestado=10;
		}

		if (direccion1==0) {
			game.Characters[0].estado=8; 
			game.Characters[0].subestado=10;
		}		
		contador_golpe1	= 1;			
	}	

	else if (presiona[tecla_disparo] &&  contador_golpe1==0 && (game.Characters[0].estado==7 || game.Characters[0].estado==8)) {
		if (direccion1==1) {
			game.Characters[0].estado=9; 
			game.Characters[0].subestado=15;
		}	
		if (direccion1==0) {
			game.Characters[0].estado=10; 
			game.Characters[0].subestado=15;
		}
		contador_golpe1	= 1;			
	}
	
	//3 golpes jugador2
		
	if (presiona[tecla_disparo2] && contador_golpe2==0 && (game.Characters[1].subestado==0 || game.Characters[1].estado==4  || game.Characters[1].estado==2)) {
		if (direccion2==1) {
			game.Characters[1].estado=5; 
			game.Characters[1].subestado=10;
		}	
		if (direccion2==0) {
			game.Characters[1].estado=6; 
			game.Characters[1].subestado=10;
		}
		contador_golpe2	= 1;	
	}		
	
	else if (presiona[tecla_disparo2] &&  contador_golpe2==0 && (game.Characters[1].estado==5 || game.Characters[1].estado==6)) {
		if (direccion2 == 1) {
			game.Characters[1].estado=7; 
			game.Characters[1].subestado=10;
		}	
		if (direccion2 == 0) {
			game.Characters[1].estado=8; 
			game.Characters[1].subestado=10;
		}
		contador_golpe2	= 1;			
	}	

	else if (presiona[tecla_disparo2] &&  contador_golpe2==0 && (game.Characters[1].estado==7 || game.Characters[1].estado==8)) {
		if (direccion2==1) {
			game.Characters[1].estado=9; 
			game.Characters[1].subestado=15;
		}
		if (direccion2==0) {
			game.Characters[1].estado=10; 
			game.Characters[1].subestado=15;
		}
		contador_golpe2	= 1;			
	}

	
	// caminar jugador1
	if ( (presiona[tecla_derecha1]) && (game.Characters[0].subestado==0 || game.Characters[0].estado==4  || game.Characters[0].estado==2)) {
		game.Characters[0].estado=2; 
		game.Characters[0].subestado=5;
	}
	
	else if ((presiona[tecla_izquierda1]) && (game.Characters[0].subestado==0 || game.Characters[0].estado==2 || game.Characters[0].estado==4)) {
		game.Characters[0].estado=4; 
		game.Characters[0].subestado=5;
	}
	
	//caminar jugador2
	if ((presiona[tecla_derecha2]) && (game.Characters[1].subestado==0 || game.Characters[1].estado==4  || game.Characters[1].estado==2)) {
		game.Characters[1].estado=2; 
		game.Characters[1].subestado=5;
	}
	
	else if ((presiona[tecla_izquierda2]) && (game.Characters[1].subestado==0 || game.Characters[1].estado==2 || game.Characters[1].estado==4)) {
		game.Characters[1].estado=4; 
		game.Characters[1].subestado=5;
	}
	
	// saltar
	if ((presiona[tecla_arriba1] && salto_potencia1 > 0)) {
		game.Characters[0].estado2 = 1; 
		game.Characters[0].subestado2 = 5;
	}
	
	if ((presiona[tecla_arriba2] && salto_potencia2 > 0)) {
		game.Characters[1].estado2 = 1; 
		game.Characters[1].subestado2 = 5;
	}
	
	// lanzar ki
	if (presiona[tecla_magia1] && ki1 > 5 && contador_bola1 == 0 && (game.Characters[0].subestado == 0 || game.Characters[0].estado == 4  || game.Characters[0].estado == 2)) {
		game.Characters[0].estado = 11; 
		game.Characters[0].subestado = 7;	
		contador_bola1	= 1;	
	}
	
	if (presiona[tecla_magia2] && ki2 > 5 && contador_bola2 == 0 && (game.Characters[1].subestado == 0 || game.Characters[1].estado == 4  || game.Characters[1].estado == 2)) {
		game.Characters[1].estado = 11; 
		game.Characters[1].subestado = 7;	
		contador_bola2	= 1;	
	}	
}


function CreateScene() {
    contador = 1;
    while (contador < cantidad_seres) {
        contador += 1;
        ser[contador].x = 0; 
        ser[contador].y = 1000; 
        ser[contador].impulsox = 0; 
        ser[contador].impulsoy = 0;
    }

    //#region Player 1
    game.Characters[0].x = 100; 
    game.Characters[0].y = 500; 
    game.Characters[0].subestado = 0; 
    game.Characters[0].w = 70; 
    game.Characters[0].h = 70; 
    game.Characters[0].volumen = 100; 
    game.Characters[0].dibujo = 1; 
    game.Characters[0].fotograma = 1; 
    game.Characters[0].linea = 1; 

	// Physics
    game.Characters[0].masa = 10; 
    game.Characters[0].etereo = 1; 
    game.Characters[0].vida = 1;
    direccion1 = 1;

    Images[1].src = './resources/p1.png';
	//#endregion

    //#region Player 2
    game.Characters[1].x = 800; 
    game.Characters[1].y = 500; 
    game.Characters[1].subestado = 0; 
    game.Characters[1].w = 70; 
    game.Characters[1].h = 70; 
    game.Characters[1].volumen = 100; 
    game.Characters[1].dibujo = 2; 
    game.Characters[1].fotograma = 1; 
    game.Characters[1].linea = 2;

	// Physics
    game.Characters[1].masa = 10; 
    game.Characters[1].etereo = 1; 
    game.Characters[1].vida = 1;
    direccion2 = 0;

    Images[2].src = './resources/2.png';
	//#endregion

    //#region Terrain Floor
    ser[3].x = -50; 
    ser[4].x = 400; 
    ser[5].x = 850; 
    
	// All
	for (let i = 3; i < 6; i++) {
		ser[i].y = 650;
		ser[i].w = 480; 
		ser[i].h = 100; 
		ser[i].volumen = 1000; 
		ser[i].dibujo = 3; 
		ser[i].linea = 1; 
		ser[i].fotograma = 1; 
		ser[i].masa = 100; 
		ser[i].etereo = 2; 
		ser[i].vida = 10;
	}

    Images[3].src = './resources/3.png';
	//#endregion

	//#region K.O.
    ser[6].x = 400; 
	ser[6].y = 200; 
	ser[6].volumen = 1000; 
	ser[6].dibujo = 10; 
	ser[6].fotograma = 1; 
	ser[6].linea = 1;
    Images[10].src = './resources/10.png';
	//#endregion

	// platform

	ser[7].x = 1300; 
	ser[7].y = 400; 
	ser[7].estado = 1;  
	ser[7].subestado = 0;
    ser[7].w = 480; 
	ser[7].h = 100; 
	ser[7].volumen = 1000; 
	ser[7].dibujo = 1; 
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
    Images[3].src = './resources/1.png'; 


	//#region Life and Ki
	// Life
	ser[8].y = ser[10].y = 20;

	ser[8].dibujo = ser[10].dibujo = 4;

	// Ki
	ser[9].y = ser[11].y = 50;
	ser[9].dibujo = ser[11].dibujo = 5;

	for (let i = 8; i < 10; i++) ser[i].x = 0;
	
	for (let i = 10; i < 12; i++) ser[i].x = 750;

	// All
	for (let i = 8; i < 12; i++) {
		ser[i].fotograma = 1;
		ser[i].linea = 1;
	}

	Images[4].src = './resources/4.png';
    Images[5].src = './resources/5.png';

	//#endregion

    //#region Ki Power Payer 1, 2

	for (let i = 12; i < 22; i++) {
		ser[i].vida = 0;
		ser[i].w = ser[i].h = 50; 
		ser[i].dibujo = 6;
		ser[i].linea = 1;
		ser[i].fotograma = 1; 
		ser[i].volumen = 500; 
	}

	ser[20].dibujo = ser[21].dibujo = 11;
	Images[11].src = './resources/spells/3.png';
	Images[6].src = './resources/6.png';

	//#endregion

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
	
    Images[8].src = './resources/8.png';
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

    Images[9].src = './resources/9.png';

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

    Images[3].src = './resources/3.png';

	//#endregion

    game.Scene = 1;
}