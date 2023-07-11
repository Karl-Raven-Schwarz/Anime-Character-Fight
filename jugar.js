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

		if (ser[contador].choque(ser[2]) == 1 && ser[2].estado != 12 && ser[contador].vida > 0)  {
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

		if (ser[contador].choque(ser[1]) == 1 && ser[1].estado != 12 && ser[contador].vida > 0) {
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
	if (ser[22].choque(ser[2]) == 1 && ser[2].estado != 12 && ser[22].vida > 0) {
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
	if (ser[23].choque(ser[1]) == 1 && ser[1].estado != 12 && ser[23].vida > 0) {
		ser[1].estado = 12; 
		ser[1].subestado = 5; 
		vida1 = vida1 - p2_podergolpe; 
		ser[23].vida = 0;
	}

	control_naves ();	

	// Contadores

	if (presiona[tecla_disparo] == 0) contador_golpe1 = 0;
	if (salto_potencia1>0) salto_potencia1 = salto_potencia1 - 1;

	if (presiona[tecla_disparo2] == 0) contador_golpe2 = 0;
	if (salto_potencia2>0) salto_potencia2 = salto_potencia2 - 1;

	if (presiona[tecla_magia1] == 0) contador_bola1 = 0;
	if (presiona[tecla_magia2] == 0) contador_bola2 = 0;


	if (vida1 < 5) vida1=5;
	ser[8].volumen = vida1*5;

	if (ki1 < 5) ki1=5;
	ser[9].volumen = ki1*5;

	if (vida2 < 5) vida2=5;
	ser[10].volumen = vida2*5;

	if (ki2 < 5) ki2=5;
	ser[11].volumen = ki2*5;


	// Animacion
		
	// parado
		
	if (ser[1].estado == 1) {
		if (salto_potencia1 > 0) {
			switch (ser[1].fotograma) {
				case 1:
					ser[1].fotograma =2;
					break;
				case 2: 
					ser[1].fotograma =3; 
					break;
				case 3:
					ser[1].fotograma =4;
					break;
				case 4:
					ser[1].fotograma =1;
					break;
				default:
					ser[1].fotograma = 1;
			}
		}	

		else ser[1].fotograma =5;		
	}
		
	if (ser[2].estado==1) {
		if (salto_potencia2>0) {
			switch (ser[2].fotograma) {
				case 1:
					ser[2].fotograma =2;
					break;
				case 2:
					ser[2].fotograma =3;
					break;
				case 3:
					ser[2].fotograma =4;
					break;
				case 4:
					ser[2].fotograma =1;
					break;
				default:
					ser[2].fotograma = 1;
			}
		}	

		else ser[2].fotograma = 5;		
	}	
		
	// caminar

	if (ser[1].estado==2) {
		switch (ser[1].subestado) {
			case 5: 
				ser[1].subestado = 4; 
				ser[1].fotograma = 10; 
				ser[1].impulsox = p1_vel; 
				break;
			case 4: 
				ser[1].subestado = 3; 
				ser[1].fotograma = 10; 
				ser[1].impulsox = 10; 
				break;
			case 3:
				ser[1].subestado = 2; 
				ser[1].fotograma = 10; 
				ser[1].impulsox = 8; 
				break;
			case 2: 
				ser[1].subestado = 1; 
				ser[1].fotograma = 10; 
				ser[1].impulsox = 6; 
				break;
			case 1: 
				ser[1].subestado = 0; 
				ser[1].fotograma = 10; 
				ser[1].impulsox = 4; 
				break;
		}
			
		ser[1].linea =1; 
		direccion1 =1;
	}
		
	if (ser[1].estado == 4) {
		switch (ser[1].subestado) {
			case 5:
				ser[1].subestado = 4;
				ser[1].fotograma = 10;
				ser[1].impulsox = -p1_vel;
				break;
			case 4:
				ser[1].subestado = 3;
				ser[1].fotograma = 10;
				ser[1].impulsox = -10;
				break;
			case 3:
				ser[1].subestado = 2;
				ser[1].fotograma = 10;
				ser[1].impulsox = -8;
				break;
			case 2:
				ser[1].subestado = 1;
				ser[1].fotograma = 10;
				ser[1].impulsox = -6;
				break;
			case 1:
				ser[1].subestado = 0;
				ser[1].fotograma = 10;
				ser[1].impulsox = -4;
				break;
		}
			
		ser[1].linea =2; 
		direccion1 =0;		
	}	
		
	if (ser[2].estado == 2) {
		switch (ser[2].subestado) {
			case 5: 
				ser[2].subestado=4;
				ser[2].fotograma =10;
				ser[2].impulsox=p2_vel;
				break;
			case 4:
				ser[2].subestado=3;
				ser[2].fotograma =10;
				ser[2].impulsox=10;
				break;
			case 3:
				ser[2].subestado=2;
				ser[2].fotograma =10;
				ser[2].impulsox=8;
				break;
			case 2:
				ser[2].subestado=1;
				ser[2].fotograma =10;
				ser[2].impulsox=6;
				break;
			case 1:
				ser[2].subestado=0;
				ser[2].fotograma =10;
				ser[2].impulsox=4;
				break;
			}
			
		ser[2].linea =1; 
		direccion2 =1;
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
				ser[1].fotograma =9; 
				ser[1].impulsox=-30; 
				disparagolpe(1,2,3); 
				break;
			case 14: 
				ser[1].subestado = 13; 
				ser[1].fotograma =9; 
				ser[1].impulsox=-30; 
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
			ser[contador].mover();
			ser[contador].buscachoque(0);
		}
	}	
}