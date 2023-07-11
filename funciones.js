function ente(x, y, xmax, ymax, xini, yini, w, h, volumen, fotograma, linea, dibujo,
	dibujomax, vida, vidamax, accion, accionmax, accion2, accion2max, accion3, accion3max, accionss, avance, avance2,
	avance3, poder, potencia, etereo, estado, masa, impulsox, impulsoy, somb, subestado2, estado2, subaccion)
{

	this.choque = function(rect) {
		if (rect!=null) {
			if (this.x<rect.x+rect.w && this.x+this.w>rect.x && this.y<rect.y+rect.h && this.y+this.h>rect.y) return(1);
			else return(0);
		}
	}

	this.interseccion = function(rect) {
		if (rect!=null) {
			if (this.x<rect.x+rect.w && this.x+this.w>rect.x) return(1);
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
	
	this.direccionar=function(direccionx,direcciony) {
		if (this.x < this.xmax) direccionx=1;
		if (this.x > this.xmax) direccionx=2;
		if (this.x == this.xmax) direccionx=0;
		if (this.y < this.ymax) direcciony=1;
		if (this.y > this.ymax) direcciony=2;
		if (this.y == this.ymax) direcciony=0;


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
	
	this.colision=function(rect,dir) {
			if (this.masa<=rect.masa) {
				if ( dir==2 ) {
					if (this == ser[2]) {
						salto_potencia2=5;
					}

					if (this == ser[1]) {
						salto_potencia1=5;
					} 
					this.ymax=this.y; 
					this.y=rect.y-this.h; 
					this.impulsoy=0; 
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

					if (this == ser[2]) {
						salto_potencia2 = 5;
					}

					if (this == ser[1]) {
						salto_potencia1=5;
					} 
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
					rect.impulsoy = ((this.y-rect.h-1)-rect.y)-10; 
					rect.mover(); 
					rect.buscachoque(0);
				}

				if (dir ==2 ) {
					rect.ymax=rect.y; 
					rect.impulsoy = ((this.y + this.h + 1) - rect.y) + 10; 
					rect.mover(); 
					rect.buscachoque(0);
				}
				if (dir ==3 ) {
					rect.xmax = rect.x; 
					rect.impulsox = ((this.x - rect.w - 1) - rect.x) - 10; 
					rect.mover(); 
					rect.buscachoque(0);
				}
				if (dir == 4) {
					rect.xmax=rect.x; rect.impulsox=((this.x+this.w+1)-rect.x)+10; rect.mover(); rect.buscachoque(0);}
				if (dir == 5) {
					if (this.ymax<rect.y+rect.h && this.ymax+this.h>rect.y ){rect.impulsox=((this.x-rect.w-1)-rect.x)-10;rect.mover();  rect.buscachoque(0);}else {rect.ymax=rect.y; rect.y=this.y-this.h-1; rect.buscachoque(0);}}
				if (dir == 6) {
					if (this.ymax<rect.y+rect.h && this.ymax+this.h>rect.y ){rect.impulsox=((this.x+this.w+1)-rect.x)+10;rect.mover();  rect.buscachoque(0);}else {rect.ymax=rect.y; rect.y=this.y-this.h-1; rect.buscachoque(0);}}
				if (dir == 7) {
					if (this.ymax<rect.y+rect.h && this.ymax+this.h>rect.y ){rect.impulsox=((this.x-rect.w-1)-rect.x)-10;rect.mover();  rect.buscachoque(0);}else {rect.ymax=rect.y; rect.y=this.y+this.h+1; rect.buscachoque(0);}}
				if (dir == 8) {
					if (this.ymax<rect.y+rect.h && this.ymax+this.h>rect.y ){rect.impulsox=((this.x+this.w+1)-rect.x)+10;rect.mover();  rect.buscachoque(0);}else {rect.ymax=rect.y; rect.y=this.y+this.h+1; rect.buscachoque(0);}}	
			}

	}
	

	this.buscasuper = function(dir,cont) {
		cont = 0;
		while (cont < cantidad_seres) {
		cont = cont + 1;
			if (this != ser[cont] && ser[cont].vida > 0) {
				if (this.etereo == 0 && ser[cont].etereo == 0) {
					if (this.choque(ser[cont]) == 1) { 
						this.supercolision(ser[cont],dir);
					}
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
	this.x=this.x+this.impulsox;
	this.y=this.y+this.impulsoy;

	
	if (this.impulsox>0) {this.impulsox=this.impulsox-1;}
	if (this.impulsox<0) {this.impulsox=this.impulsox+1;}
	if (this.impulsoy>0) {this.impulsoy=this.impulsoy-1;}
	if (this.impulsoy<0) {this.impulsoy=this.impulsoy+1;}
	if (this.impulsox>0) {this.impulsox=this.impulsox-1;}
	if (this.impulsox<0) {this.impulsox=this.impulsox+1;}
	if (this.impulsoy>0) {this.impulsoy=this.impulsoy-1;}
	if (this.impulsoy<0) {this.impulsoy=this.impulsoy+1;}
	if (this.impulsox>0) {this.impulsox=this.impulsox-1;}
	if (this.impulsox<0) {this.impulsox=this.impulsox+1;}
	if (this.impulsoy>0) {this.impulsoy=this.impulsoy-1;}
	if (this.impulsoy<0) {this.impulsoy=this.impulsoy+1;}


	}	
	
	this.muere=function()
	{
		this.x = 1200;
	}

	this.nace=function(xxx,yyy,zzz,www)
	{
		this.vida=this.vidamax;
		this.dibujo=this.dibujomax;
		this.avance=0;
		this.x=xxx+www;
		this.y=yyy+zzz;
	}

	this.dibuja=function(ctx) {
		cordenadax_dibuja = (this.fotograma - 1) * this.volumen;
		cordenaday_dibuja = (this.linea - 1) * this.volumen;
		ctx.drawImage(
			imagen[this.dibujo], cordenadax_dibuja, cordenaday_dibuja, 
			this.volumen, this.volumen, this.x, this.y, this.volumen, this.volumen
		);
	}

	this.inteligencia = function(xxx,yyy,zzz,yo) {
		if (this.para == 0) {
			switch (this.accion) {
				case 1: 
					inteligencia_otro(yo,1); 
					break;		
				case 2:
					inteligencia_otro(yo,2); 
					break;		
				case 3:
					inteligencia_otro(yo,3); 
					break;		
				case 4:
					inteligencia_otro(yo,4); 
					break;		
				case 5:
					inteligencia_otro(yo,5); 
					break;		
				case 6:
					inteligencia_otro(yo,6); 
					break;		
				case 7:
					inteligencia_magicubo(yo,3); 
					break;		
				case 8:
					inteligencia_otro(yo,7); 
					break;			
				case 9:
					inteligencia_magicubo(yo,2); 
					break;			
				case 10:
					inteligencia_hunter(yo,2,0); 
					break;	
			}	
		}
	}
}

function explota (xxx,yyy) {
	if (ser[17].vida == 0) {
		ser[17].vida = ser[17].vidamax;
		ser[17].x = xxx; 
		ser[17].y = yyy;
	}
	else if (ser[18].vida == 0) {
		ser[18].vida = ser[18].vidamax;
		ser[18].x = xxx; 
		ser[18].y = yyy;
	}
	else if (ser[19].vida == 0) {
		ser[19].vida = ser[19].vidamax;
		ser[19].x = xxx; 
		ser[19].y = yyy;
	}
	else if (ser[20].vida == 0) {
		ser[20].vida = ser[20].vidamax;
		ser[20].x = xxx; 
		ser[20].y = yyy;
	}
	else if (ser[21].vida == 0) {
		ser[21].vida = ser[21].vidamax;
		ser[21].x = xxx; 
		ser[21].y = yyy;
	}
}


function espejo (x,y,vida,animacion,volumen,fotograma,dibujo) {
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
			cordenaday_dibuja=5*this.volumen; cordenadax_dibuja=(this.fotograma-51)*this.volumen;}
		else if (this.fotograma > 60 && this.fotograma < 71 ) {
			cordenaday_dibuja=6*this.volumen; cordenadax_dibuja=(this.fotograma-61)*this.volumen;}
		else if (this.fotograma > 70 && this.fotograma < 81 ) {
			cordenaday_dibuja=7*this.volumen; cordenadax_dibuja=(this.fotograma-71)*this.volumen;}
		else if (this.fotograma > 80 && this.fotograma < 91 ) {
			cordenaday_dibuja=8*this.volumen; cordenadax_dibuja=(this.fotograma-81)*this.volumen;}
		else if (this.fotograma > 90 && this.fotograma < 101  ) {
			cordenaday_dibuja=9*this.volumen; cordenadax_dibuja=(this.fotograma-91)*this.volumen;}
		
		ctx.drawImage(imagen[this.dibujo], cordenadax_dibuja , cordenaday_dibuja , this.volumen, this.volumen, this.x, this.y, this.volumen, this.volumen);
	}
	
	this.choque = function(rect) {
		if(rect != null) {
			if (this.x < rect.x + 100 && this.x + 100 > rect.x && this.y < rect.y + 100 && this.y + 100 > rect.y) {
				return(1);
			}
			else {
				return(0);
			}
		}
	}
}


function mensajex (x,y,tam,vida,mensaj,tam) {
}


function disparaki (jugador,direccion) {
	if (jugador == 1) {
		if (direccion==1) {
			if (ser[12].vida==0) {
				ser[12].vida = 1;	
				ser[12].x=ser[1].x+50; 
				ser[12].y=ser[1].y; 	
				ser[12].accion=1; 	
			}
			else if (ser[13].vida==0)
			{
				ser[13].vida = 1;	
				ser[13].x=ser[1].x+50; 
				ser[13].y=ser[1].y; 	
				ser[13].accion=1; 	
			}		
			else if (ser[14].vida==0)
			{
				ser[14].vida = 1;	
				ser[14].x=ser[1].x+50; 
				ser[14].y=ser[1].y; 	
				ser[14].accion=1; 	
			}				
			else if (ser[15].vida==0)
			{
				ser[15].vida = 1;	
				ser[15].x=ser[1].x+50; 
				ser[15].y=ser[1].y; 	
				ser[15].accion=1; 	
			}		
			else if (ser[16].vida==0)
			{
				ser[16].vida = 1;	
				ser[16].x=ser[1].x+50; 
				ser[16].y=ser[1].y; 	
				ser[16].accion=1; 	
			}				
			ki1=ki1-p1_bolaenergia;			
		}

		if (direccion==0)			
		{
			
			if (ser[12].vida==0)
			{
				ser[12].vida = 1;	
				ser[12].x=ser[1].x; 
				ser[12].y=ser[1].y; 	
				ser[12].accion=2; 	
			}
			else if (ser[13].vida==0)
			{
				ser[13].vida = 1;	
				ser[13].x=ser[1].x; 
				ser[13].y=ser[1].y; 	
				ser[13].accion=2; 	
			}		
			else if (ser[14].vida==0)
			{
				ser[14].vida = 1;	
				ser[14].x=ser[1].x; 
				ser[14].y=ser[1].y; 	
				ser[14].accion=2; 	
			}				
			else if (ser[15].vida==0)
			{
				ser[15].vida = 1;	
				ser[15].x=ser[1].x; 
				ser[15].y=ser[1].y; 	
				ser[15].accion=2; 	
			}		
			else if (ser[16].vida==0)
			{
				ser[16].vida = 1;	
				ser[16].x=ser[1].x; 
				ser[16].y=ser[1].y; 	
				ser[16].accion=2; 	
			}	
			ki1=ki1-p1_bolaenergia;			
			
		}			
	}

	if (jugador == 2)
	{
		if (direccion==1)			
		{
			
			if (ser[17].vida==0)
			{
				ser[17].vida = 1;	
				ser[17].x=ser[2].x+50; 
				ser[17].y=ser[2].y; 	
				ser[17].accion=1; 	
			}
			else if (ser[18].vida==0)
			{
				ser[18].vida = 1;	
				ser[18].x=ser[2].x+50; 
				ser[18].y=ser[2].y; 	
				ser[18].accion=1; 	
			}		
			else if (ser[19].vida==0)
			{
				ser[19].vida = 1;	
				ser[19].x=ser[2].x+50; 
				ser[19].y=ser[2].y; 	
				ser[19].accion=1; 	
			}				
			else if (ser[20].vida==0)
			{
				ser[20].vida = 1;	
				ser[20].x=ser[2].x+50; 
				ser[20].y=ser[2].y; 	
				ser[20].accion=1; 	
			}		
			else if (ser[21].vida==0)
			{
				ser[21].vida = 1;	
				ser[21].x=ser[2].x+50; 
				ser[21].y=ser[2].y; 	
				ser[21].accion=1; 	
			}				
			ki2=ki2-p2_bolaenergia;			
		}

		if (direccion==0) {
			if (ser[17].vida==0) {
				ser[17].vida = 1;	
				ser[17].x=ser[2].x; 
				ser[17].y=ser[2].y; 	
				ser[17].accion=2; 	
			}
			else if (ser[18].vida==0) {
				ser[18].vida = 1;	
				ser[18].x=ser[2].x; 
				ser[18].y=ser[2].y; 	
				ser[18].accion=2; 	
			}		
			else if (ser[19].vida==0) {
				ser[19].vida = 1;	
				ser[19].x=ser[2].x; 
				ser[19].y=ser[2].y; 	
				ser[19].accion=2; 	
			}				
			else if (ser[20].vida==0) {
				ser[20].vida = 1;	
				ser[20].x=ser[2].x; 
				ser[20].y=ser[2].y; 	
				ser[20].accion=2; 	
			}		
			else if (ser[21].vida==0) {
				ser[21].vida = 1;	
				ser[21].x=ser[2].x; 
				ser[21].y=ser[2].y; 	
				ser[21].accion=2; 	
			}
			ki2=ki2-p2_bolaenergia;
		}
	}
}


function disparagolpe (jugador,direccion,pod) {
	if (jugador == 1) {
		if (direccion == 1) {
			if (pod == 1) {
				ser[22].x = ser[1].x + 60; 
				ser[22].y = ser[1].y + 20; 
				ser[22].vida = 10; 
				ser[22].accion = 1; 
				ser[22].fotograma = 1;
			}
			if (pod == 2) {
				ser[22].x = ser[1].x + 80; 
				ser[22].y = ser[1].y + 10; 
				ser[22].vida = 10; 
				ser[22].accion = 1; 
				ser[22].fotograma = 1;
			}
			if (pod == 3) {
				ser[22].x = ser[1].x + 120;
				ser[22].y = ser[1].y + 15; 
				ser[22].vida = 10; 
				ser[22].accion = 1; 
				ser[22].fotograma = 1;
			}
			
		}
		if (direccion == 2) {
			if (pod==1){ser[22].x = ser[1].x-40;    ser[22].y = ser[1].y+20; ser[22].vida=10; ser[22].accion=2; ser[22].fotograma=2;}
			if (pod==2){ser[22].x = ser[1].x-60; ser[22].y = ser[1].y+10; ser[22].vida=10; ser[22].accion=2; ser[22].fotograma=2;}
			if (pod==3){ser[22].x = ser[1].x-100; ser[22].y = ser[1].y+15; ser[22].vida=10; ser[22].accion=2; ser[22].fotograma=2;}
		}
	}

	if (jugador == 2) {
		if (direccion==1) {
			if (pod==1){ser[23].x = ser[2].x+60; ser[23].y = ser[2].y+20; ser[23].vida=10; ser[23].accion=1; ser[23].fotograma=1;}
			if (pod==2){ser[23].x = ser[2].x+80; ser[23].y = ser[2].y+10; ser[23].vida=10; ser[23].accion=1; ser[23].fotograma=1;}
			if (pod==3){ser[23].x = ser[2].x+120; ser[23].y = ser[2].y+15; ser[23].vida=10; ser[23].accion=1; ser[23].fotograma=1;}
			
		}
		if (direccion==2) {
			if (pod == 1) { ser[23].x = ser[2].x - 40;    
				ser[23].y = ser[2].y+20; 
				ser[23].vida=10; 
				ser[23].accion=2; 
				ser[23].fotograma=2;
			}
			if (pod == 2) { 
				ser[23].x = ser[2].x - 60; 
				ser[23].y = ser[2].y+10; 
				ser[23].vida=10; 
				ser[23].accion=2; 
				ser[23].fotograma=2;
			}
			if (pod == 3) { ser[23].x = ser[2].x - 100; 
				ser[23].y = ser[2].y+15; 
				ser[23].vida=10; 
				ser[23].accion=2; 
				ser[23].fotograma=2;
			}
		}	
	}
}