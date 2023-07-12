function ente(x, y, xmax, ymax, xini, yini, w, h, volumen, fotograma, linea, dibujo,
	dibujomax, vida, vidamax, accion, accionmax, accion2, accion2max, accion3, accion3max, accionss, avance, avance2,
	avance3, poder, potencia, etereo, estado, masa, impulsox, impulsoy, somb, subestado2, estado2, subaccion)
{

	this.choque = function(rect) {
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
				if (this.choque(ser[cont]) == 1) {
					if (this.etereo == 0 && ser[cont].etereo == 0) {
						contador3 = this.direccionar(0,0);
						this.colision(ser[cont], contador3);
					}

					if (this.etereo == 1 && ser[cont].etereo == 1) {
						contador3 = this.direccionar(0,0);
						this.colision(ser[cont], contador3);
					}	

					if (this.etereo == 1 && ser[cont].etereo == 2) {
						contador3 = this.direccionar(0,0);
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
				//rect.buscachoque(0);
			}
		}
	}
	

	this.buscasuper = function(dir,cont) {
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
	
	this.supercolision=function(rect,dir) {
		if(rect != null) {
			if (dir == 1) {
				rect.ymax = rect.y; 
				rect.y = this.y - this.h - 1;
				rect.buscasuper(1,0);
			}
			if (dir == 2) {
				rect.ymax = rect.y; 
				rect.y = this.y + this.h + 1;
				rect.buscasuper(2,0);
			}
			if (dir == 3) {
				rect.xmax = rect.x; 
				rect.x = this.x - this.w - 1;
				rect.buscasuper(3,0);
			}
			if (dir == 4) {
				rect.xmax = rect.x; 
				rect.x = this.x + this.w + 1;
				rect.buscasuper(4,0);
			}
		}
	}

	this.mover = function() {
		this.x = this.x + this.impulsox;
		this.y = this.y + this.impulsoy;

		if (this.impulsox > 0) this.impulsox = this.impulsox - 1;
		if (this.impulsox < 0) this.impulsox = this.impulsox + 1;
		if (this.impulsoy > 0) this.impulsoy = this.impulsoy - 1;
		if (this.impulsoy < 0) this.impulsoy = this.impulsoy + 1;
	}
	
	this.muere = function() {
		this.x = 1200;
	}

	this.nace = function(xxx, yyy, zzz, www) {
		this.vida = this.vidamax;
		this.dibujo = this.dibujomax;
		this.avance = 0;
		this.x = xxx + www;
		this.y = yyy + zzz;
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


function espejo (x, y, vida, animacion, volumen, fotograma, dibujo) {

	this.dibuja=function(ctx) {
		if (this.fotograma > 0  && this.fotograma < 11 ) {
			cordenaday_dibuja = 0 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 1) * this.volumen;
		}
		else if (this.fotograma > 10 && this.fotograma < 21 ) {
			cordenaday_dibuja = 1 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 11) * this.volumen;
		}
		else if (this.fotograma > 20 && this.fotograma < 31 ) {
			cordenaday_dibuja = 2 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 21) * this.volumen;
		}
		else if (this.fotograma > 30 && this.fotograma < 41 ) {
			cordenaday_dibuja = 3 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 31) * this.volumen;
		}
		else if (this.fotograma > 40 && this.fotograma < 51 ) {
			cordenaday_dibuja = 4 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 41) * this.volumen;
		}
		else if (this.fotograma > 50 && this.fotograma < 61 ) {
			cordenaday_dibuja = 5 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 51) * this.volumen;
		}
		else if (this.fotograma > 60 && this.fotograma < 71 ) {
			cordenaday_dibuja = 6 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 61) * this.volumen;
		}
		else if (this.fotograma > 70 && this.fotograma < 81 ) {
			cordenaday_dibuja = 7 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 71) * this.volumen;
		}
		else if (this.fotograma > 80 && this.fotograma < 91 ) {
			cordenaday_dibuja = 8 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 81) * this.volumen;
		}
		else if (this.fotograma > 90 && this.fotograma < 101  ) {
			cordenaday_dibuja = 9 * this.volumen; 
			cordenadax_dibuja = (this.fotograma - 91) * this.volumen;
		}
		
		ctx.drawImage(imagen[this.dibujo], cordenadax_dibuja , cordenaday_dibuja , this.volumen, this.volumen, this.x, this.y, this.volumen, this.volumen);
	}
	
	this.choque = function(rect) {
		if(rect != null) {
			if (this.x < rect.x + 100 && this.x + 100 > rect.x && this.y < rect.y + 100 && this.y + 100 > rect.y) return(1);
			else return(0);
		}
	}
}


function mensajex (x,y,tam,vida,mensaj,tam) {
}


function disparaki (jugador,direccion) {
	if (jugador == 1) {
		if (direccion == 1) {
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

		if (direccion == 0) {

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

	if (jugador == 2) {
		if (direccion==1) {
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

		if (direccion==0) {
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


function disparagolpe (jugador,direccion,pod) {
	// player
	player = 22;
	// target player
	targetPlayer = 1;
	if (jugador == 2) {
		player = 23;
		targetPlayer = 2;
	}
 
	if (direccion == 1) {
		if (pod == 1) {
			ser[player].x = ser[targetPlayer].x + 60; 
			ser[player].y = ser[targetPlayer].y + 20; 
		}
		if (pod == 2) {
			ser[player].x = ser[targetPlayer].x + 80; 
			ser[player].y = ser[targetPlayer].y + 10; 
		}
		if (pod == 3) {
			ser[player].x = ser[targetPlayer].x + 120;
			ser[player].y = ser[targetPlayer].y + 15; 
		}

		if (pod in [1,2,3]) {
			ser[player].vida = 10; 
			ser[player].accion = 1; 
			ser[player].fotograma = 1;
		}
	}

	if (direccion == 2) {
		if (pod == 1) {
			ser[player].x = ser[targetPlayer].x - 40; 
			ser[player].y = ser[targetPlayer].y + 20; 
		}
		if (pod == 2) {
			ser[player].x = ser[targetPlayer].x - 60; 
			ser[player].y = ser[targetPlayer].y + 10; 
		}
		if (pod == 3) {
			ser[player].x = ser[targetPlayer].x - 100;
			ser[player].y = ser[targetPlayer].y + 15; 
		}

		if (pod in [1,2,3]) {
			ser[player].vida = 10; 
			ser[player].accion = 2; 
			ser[player].fotograma = 2;
		}
	}
}

console.log('funciones')