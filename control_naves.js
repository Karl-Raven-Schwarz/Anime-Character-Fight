function control_naves () {

	// 3 golpes jugador1
	
	if (presiona[tecla_disparo] && contador_golpe1==0 && (ser[1].subestado==0 || ser[1].estado==4  || ser[1].estado==2)) {
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
	
	if (presiona[tecla_magia1] && ki1>5 && contador_bola1==0 && (ser[1].subestado==0 || ser[1].estado==4  || ser[1].estado==2)) {
		ser[1].estado=11; 
		ser[1].subestado=7;	
		contador_bola1	= 1;	
	}
	
	if (presiona[tecla_magia2] && ki2>5 && contador_bola2==0 && (ser[2].subestado==0 || ser[2].estado==4  || ser[2].estado==2)) {
		ser[2].estado=11; 
		ser[2].subestado=7;	
		contador_bola2	= 1;	
	}	
}

console.log('control naves')