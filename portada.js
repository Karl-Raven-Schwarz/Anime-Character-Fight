function portada() {
	contador_avance = contador_avance + 1;

	if (contador_avance == 2) {
		imagen[1].src = 'recursos/1070.png'; 
		espejismo[1].dibujo = 1; 
		espejismo[1].fotograma = 1; 
		espejismo[1].volumen = 1280; 
		espejismo[1].vida = 1; 
		espejismo[1].x = 0; 
		espejismo[1].y = 0; 

		valor_guardado = localStorage.getItem('ssnave_vidamaxbase'); 
		valor_guardado = parseFloat(valor_guardado); 
		nave_vidamaxbase = valor_guardado;

		imagen[2].src = 'recursos/1071.png'; 	
		espejismo[2].dibujo = 2; 
		espejismo[2].volumen = 500; 
		espejismo[2].vida = 0; 
		espejismo[2].x = 380; 
		espejismo[2].y = 380; 		
		
		if (nave_vidamaxbase > 0) espejismo[2].fotograma = 1; 
		else espejismo[2].fotograma = 2; 

	}

	if (contador_avance > 2) {

		if (presiona[tecla_enter] && cual_portada == 0 && presiona_portada == 0) {
			presiona_portada = 1;
			espejismo[1].fotograma = 2;
			espejismo[2].vida = 1;
			cual_portada = 1;
		
			if (nave_vidamaxbase > 0) cual_portada = 1;
			else cual_portada = 2;	
		}
		
		if ((presiona[tecla_abajo] || presiona[40]) && presiona_portada == 0) {
			// second menu
			if (cual_portada in [1, 2, 3]) {
				presiona_portada = 1;
			}
			
			if (cual_portada == 1) espejismo[2].fotograma = cual_portada = 2;			
			else if (cual_portada == 2) espejismo[2].fotograma = cual_portada = 3;			
			else if (cual_portada == 3) espejismo[2].fotograma = cual_portada = 4;
		}
		
		if ((presiona[tecla_arriba] || presiona[38]) && presiona_portada == 0) {
			// second menu
			if (cual_portada in [1, 2, 3]) {
				presiona_portada = 1;
			}

			if (cual_portada == 2 && nave_vidamaxbase > 0) {
				presiona_portada = 1;
				espejismo[2].fotograma=1;
				cual_portada = 1;			
			}
			
			else if (cual_portada == 3) {
				presiona_portada = 1;
				espejismo[2].fotograma=2;
				cual_portada = 2;			
			}		
			
			else if (cual_portada == 4) {
				presiona_portada = 1;
				espejismo[2].fotograma=3;
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

console.log('portada')