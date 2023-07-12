function niveles() {
    contador = 1;
    while (contador < cantidad_seres) {
        contador = contador + 1;
        ser[contador].x = 0; 
        ser[contador].y = 1000; 
        ser[contador].impulsox = 0; 
        ser[contador].impulsoy = 0;
    }

    // Jugador1

    ser[1].x=100; 
    ser[1].y=500; 
    ser[1].estado=1;  
    ser[1].subestado=0; 
    ser[1].estado2=1;  
    ser[1].subestado2=0; 

    ser[1].w=70; 
    ser[1].h=70; 
    ser[1].volumen=100; 
    ser[1].dibujo=1; 
    ser[1].fotograma=1; 
    ser[1].linea=1; 

    ser[1].vidamax=10; 
    ser[1].accion3=0; 
    ser[1].masa=10; 
    ser[1].potencia=10;

    ser[1].accion=0; 
    ser[1].etereo=1; 
    ser[1].potencia=40; 
    ser[1].vida=10;

    direccion1 = 1;

    imagen[1].src = 'recursos/p1.png';

    // Jugador2

    ser[2].x=800; ser[2].y=500; ser[2].estado=1;  ser[2].subestado=0; ser[2].estado2=1;  ser[2].subestado2=0; 
    ser[2].w=70; ser[2].h=70; ser[2].volumen=100; ser[2].dibujo=2; ser[2].fotograma=1; ser[2].linea=2; 
    ser[2].vidamax=10; ser[2].accion3=0; ser[2].masa=10; ser[2].potencia=10;
    ser[2].accion=0; ser[2].etereo=1; ser[2].potencia=40; ser[2].vida=10;

    direccion2 = 0;
    imagen[2].src = 'recursos/2.png';

    // terreno piso

    ser[3].x=-50; 
    ser[3].y=650; 
    //ser[3].y=550; 
    ser[3].estado=1; 
    ser[3].subestado=0; 
    ser[3].w=480; 
    ser[3].h=100; 
    ser[3].volumen=1000; 
    ser[3].dibujo=3; 
    ser[3].fotograma=1; 
    ser[3].linea=1; 

    ser[3].vidamax=10; 
    ser[3].accion3=0; 
    ser[3].masa=100; 
    ser[3].potencia=10;

    ser[3].accion=0; 
    ser[3].etereo=2; 
    ser[3].potencia=40; 
    ser[3].vida=10;

    imagen[3].src = 'recursos/3.png';

    ser[4].x=400; 
    ser[4].y=650; 
    ser[4].estado=1;  
    ser[4].subestado=0; 

    ser[4].w=480; 
    ser[4].h=100; 
    ser[4].volumen=1000; 
    ser[4].dibujo=3; 
    ser[4].fotograma=1; 
    ser[4].linea=1; 

    ser[4].vidamax=10; 
    ser[4].accion3=0; 
    ser[4].masa=100; 
    ser[4].potencia=10;

    ser[4].accion=0; 
    ser[4].etereo=2; 
    ser[4].potencia=40; 
    ser[4].vida=10;

    imagen[3].src = 'recursos/3.png';

    ser[5].x=850; 
    ser[5].y=650; 
    ser[5].estado=1;  
    ser[5].subestado=0; 

    ser[5].w=480; 
    ser[5].h=100; 
    ser[5].volumen=1000; 
    ser[5].dibujo=3; 
    ser[5].fotograma=1; 
    ser[5].linea=1; 

    ser[5].vidamax=10; 
    ser[5].accion3=0; 
    ser[5].masa=100; 
    ser[5].potencia=10;

    ser[5].accion=0; 
    ser[5].etereo=2; 
    ser[5].potencia=40; 
    ser[5].vida=10;

    imagen[3].src = 'recursos/3.png';

    // terrenos no usado

    ser[6].x=400; ser[6].y=200; ser[6].estado=1;  ser[6].subestado=0; 
    ser[6].w=480; ser[6].h=100; ser[6].volumen=1000; ser[6].dibujo=10; ser[6].fotograma=1; ser[6].linea=1; 
    ser[6].vidamax=10; ser[6].accion3=0; ser[6].masa=100; ser[6].potencia=10;
    ser[6].accion=0; ser[6].etereo=0; ser[6].potencia=40; ser[6].vida=10;
    imagen[10].src = 'recursos/10.png';

    ser[7].x=1300; ser[7].y=400; ser[7].estado=1;  ser[7].subestado=0; 
    ser[7].w=480; ser[7].h=100; ser[7].volumen=1000; ser[7].dibujo=3; ser[7].fotograma=1; ser[7].linea=1; 
    ser[7].vidamax=10; ser[7].accion3=0; ser[7].masa=100; ser[7].potencia=10;
    ser[7].accion=0; ser[7].etereo=2; ser[7].potencia=40; ser[7].vida=10;
    imagen[3].src = 'recursos/3.png';

    ser[8].x=0; ser[8].y=20; ser[8].estado=1;  ser[8].subestado=0; 
    ser[8].w=480; ser[8].h=100; ser[8].volumen=500; ser[8].dibujo=4; ser[8].fotograma=1; ser[8].linea=1; 
    ser[8].vidamax=10; ser[8].accion3=0; ser[8].masa=100; ser[8].potencia=10;
    ser[8].accion=0; ser[8].etereo=0; ser[8].potencia=40; ser[8].vida=10;
    imagen[4].src = 'recursos/4.png';

    ser[9].x=0; ser[9].y=50; ser[9].estado=1;  ser[9].subestado=0; 
    ser[9].w=480; ser[9].h=100; ser[9].volumen=500; ser[9].dibujo=5; ser[9].fotograma=1; ser[9].linea=1; 
    ser[9].vidamax=10; ser[9].accion3=0; ser[9].masa=100; ser[9].potencia=10;
    ser[9].accion=0; ser[9].etereo=0; ser[9].potencia=40; ser[9].vida=10;
    imagen[5].src = 'recursos/5.png';

    ser[10].x=750; ser[10].y=20; ser[10].estado=1;  ser[10].subestado=0; 
    ser[10].w=480; ser[10].h=100; ser[10].volumen=500; ser[10].dibujo=4; ser[10].fotograma=1; ser[10].linea=1; 
    ser[10].vidamax=10; ser[10].accion3=0; ser[10].masa=100; ser[10].potencia=10;
    ser[10].accion=0; ser[10].etereo=0; ser[10].potencia=40; ser[10].vida=10;
    imagen[4].src = 'recursos/4.png';

    ser[11].x=750; ser[11].y=50; ser[11].estado=1;  ser[11].subestado=0; 
    ser[11].w=480; ser[11].h=100; ser[11].volumen=500; ser[11].dibujo=5; ser[11].fotograma=1; ser[11].linea=1; 
    ser[11].vidamax=10; ser[11].accion3=0; ser[11].masa=100; ser[11].potencia=10;
    ser[11].accion=0; ser[11].etereo=0; ser[11].potencia=40; ser[11].vida=10;
    imagen[5].src = 'recursos/5.png';

    // bolas de ki jugador1

    ser[12].x=750; 
    ser[12].y=50; 
    ser[12].estado=1;  
    ser[12].subestado=0; 

    ser[12].w=50; 
    ser[12].h=50; 
    ser[12].volumen=500; 
    ser[12].dibujo=6; 
    ser[12].fotograma=1; 
    ser[12].linea=1; 

    ser[12].vidamax=10; 
    ser[12].accion3=0; 
    ser[12].masa=100; 
    ser[12].potencia=10;

    ser[12].accion=1; 
    ser[12].etereo=0; 
    ser[12].potencia=40; 
    ser[12].vida=0;

    imagen[6].src = 'recursos/6.1.png';

    ser[13].x=650; 
    ser[13].y=50; 
    ser[13].estado=1;  
    ser[13].subestado=0; 

    ser[13].w=50; 
    ser[13].h=50; 
    ser[13].volumen=500; 
    ser[13].dibujo=6; 
    ser[13].fotograma=1; 
    ser[13].linea=1; 

    ser[13].vidamax=10; 
    ser[13].accion3=0; 
    ser[13].masa=100; 
    ser[13].potencia=10;

    ser[13].accion=1; 
    ser[13].etereo=0; 
    ser[13].potencia=40; 
    ser[13].vida=0;

    imagen[6].src = 'recursos/6.1.png';

    ser[14].x=550; 
    ser[14].y=50; 
    ser[14].estado=1;  
    ser[14].subestado=0; 

    ser[14].w=50; 
    ser[14].h=50; 
    ser[14].volumen=500; 
    ser[14].dibujo=6; 
    ser[14].fotograma=1; 
    ser[14].linea=1;

    ser[14].vidamax=10; 
    ser[14].accion3=0; 
    ser[14].masa=100; 
    ser[14].potencia=10;

    ser[14].accion=1; 
    ser[14].etereo=0; 
    ser[14].potencia=40; 
    ser[14].vida=0;

    imagen[6].src = 'recursos/6.png';

    ser[15].x=750; 
    ser[15].y=250; 
    ser[15].estado=1;  
    ser[15].subestado=0; 

    ser[15].w=50; 
    ser[15].h=50; 
    ser[15].volumen=500; 
    ser[15].dibujo=6; 
    ser[15].fotograma=1; 
    ser[15].linea=1; 

    ser[15].vidamax=10; 
    ser[15].accion3=0; 
    ser[15].masa=100; 
    ser[15].potencia=10;

    ser[15].accion=1; 
    ser[15].etereo=0; 
    ser[15].potencia=40; 
    ser[15].vida=0;

    imagen[6].src = 'recursos/6.1.png';

    ser[16].x=650; ser[16].y=250; ser[16].estado=1;  ser[16].subestado=0; 
    ser[16].w=50; ser[16].h=50; ser[16].volumen=500; ser[16].dibujo=6; ser[16].fotograma=1; ser[16].linea=1; 
    ser[16].vidamax=10; ser[16].accion3=0; ser[16].masa=100; ser[16].potencia=10;
    ser[16].accion=1; ser[16].etereo=0; ser[16].potencia=40; ser[16].vida=0;
    imagen[6].src = 'recursos/6.1.png';

    // bolas de ki jugador2

    ser[17].x=550; ser[17].y=0; ser[17].estado=1;  ser[17].subestado=0; 
    ser[17].w=50; ser[17].h=50; ser[17].volumen=500; ser[17].dibujo=6; ser[17].fotograma=1; ser[17].linea=1; 
    ser[17].vidamax=10; ser[17].accion3=0; ser[17].masa=100; ser[17].potencia=10;
    ser[17].accion=1; ser[17].etereo=0; ser[17].potencia=40; ser[17].vida=0;
    imagen[6].src = 'recursos/6.png';

    ser[18].x=600; ser[18].y=0; ser[18].estado=1;  ser[18].subestado=0; 
    ser[18].w=50; ser[18].h=50; ser[18].volumen=500; ser[18].dibujo=6; ser[18].fotograma=1; ser[18].linea=1; 
    ser[18].vidamax=10; ser[18].accion3=0; ser[18].masa=100; ser[18].potencia=10;
    ser[18].accion=1; ser[18].etereo=0; ser[18].potencia=40; ser[18].vida=0;
    imagen[6].src = 'recursos/6.png';

    ser[19].x=650; ser[19].y=0; ser[19].estado=1;  ser[19].subestado=0; 
    ser[19].w=50; ser[19].h=50; ser[19].volumen=500; ser[19].dibujo=6; ser[19].fotograma=1; ser[19].linea=1; 
    ser[19].vidamax=10; ser[19].accion3=0; ser[19].masa=100; ser[19].potencia=10;
    ser[19].accion=1; ser[19].etereo=0; ser[19].potencia=40; ser[19].vida=0;
    imagen[6].src = 'recursos/6.png';

    ser[20].x=700; ser[20].y=0; ser[20].estado=1;  ser[20].subestado=0; 
    ser[20].w=50; ser[20].h=50; ser[20].volumen=500; ser[20].dibujo=6; ser[20].fotograma=1; ser[20].linea=1; 
    ser[20].vidamax=10; ser[20].accion3=0; ser[20].masa=100; ser[20].potencia=10;
    ser[20].accion=1; ser[20].etereo=0; ser[20].potencia=40; ser[20].vida=0;
    imagen[6].src = 'recursos/6.png';

    ser[21].x=750; ser[21].y=0; ser[21].estado=1;  ser[21].subestado=0; 
    ser[21].w=50; ser[21].h=50; ser[21].volumen=500; ser[21].dibujo=6; ser[21].fotograma=1; ser[21].linea=1; 
    ser[21].vidamax=10; ser[21].accion3=0; ser[21].masa=100; ser[21].potencia=10;
    ser[21].accion=1; ser[21].etereo=0; ser[21].potencia=40; ser[21].vida=0;
    imagen[6].src = 'recursos/6.png';

    // golpes

    ser[22].x=350; ser[22].y=350; ser[22].estado=1;  ser[22].subestado=0; 
    ser[22].w=80; ser[22].h=80; ser[22].volumen=100; ser[22].dibujo=8; ser[22].fotograma=1; ser[22].linea=1; 
    ser[22].vidamax=10; ser[22].accion3=0; ser[22].masa=100; ser[22].potencia=10;
    ser[22].accion=1; ser[22].etereo=0; ser[22].potencia=40; ser[22].vida=10;
    imagen[8].src = 'recursos/8.png';

    ser[23].x=350; ser[23].y=450; ser[23].estado=1;  ser[23].subestado=0; 
    ser[23].w=80; ser[23].h=80; ser[23].volumen=100; ser[23].dibujo=8; ser[23].fotograma=1; ser[23].linea=1; 
    ser[23].vidamax=10; ser[23].accion3=0; ser[23].masa=100; ser[23].potencia=10;
    ser[23].accion=1; ser[23].etereo=0; ser[23].potencia=40; ser[23].vida=10;
    imagen[8].src = 'recursos/8.png';

    // fondo

    ser[24].x=0; ser[24].y=0; ser[24].estado=1;  ser[24].subestado=0; 
    ser[24].w=80; ser[24].h=80; ser[24].volumen=1280; ser[24].dibujo=9; ser[24].fotograma=1; ser[24].linea=1; 
    ser[24].vidamax=10; ser[24].accion3=0; ser[24].masa=100; ser[24].potencia=10;
    ser[24].accion=1; ser[24].etereo=0; ser[24].potencia=40; ser[24].vida=10;
    imagen[9].src = 'recursos/9.png';

    // terreno
    
    ser[25].x=300; ser[25].y=200; ser[25].estado=1;  ser[25].subestado=0; 
    ser[25].w=480; ser[25].h=100; ser[25].volumen=500; ser[25].dibujo=3; ser[25].fotograma=1; ser[25].linea=1; 
    ser[25].vidamax=10; ser[25].accion3=0; ser[25].masa=100; ser[25].potencia=10;
    ser[25].accion=0; ser[25].etereo=2; ser[25].potencia=40; ser[25].vida=10;
    imagen[3].src = 'recursos/3.png';

    ser[26].x=-100; ser[26].y=400; ser[26].estado=1;  ser[26].subestado=0; 
    ser[26].w=480; ser[26].h=100; ser[26].volumen=500; ser[26].dibujo=3; ser[26].fotograma=1; ser[26].linea=1; 
    ser[26].vidamax=10; ser[26].accion3=0; ser[26].masa=100; ser[26].potencia=10;
    ser[26].accion=0; ser[26].etereo=2; ser[26].potencia=40; ser[26].vida=10;
    imagen[3].src = 'recursos/3.png';

    ser[27].x=950; ser[27].y=400; ser[27].estado=1;  ser[27].subestado=0; 
    ser[27].w=480; ser[27].h=100; ser[27].volumen=500; ser[27].dibujo=3; ser[27].fotograma=1; ser[27].linea=1; 
    ser[27].vidamax=10; ser[27].accion3=0; ser[27].masa=100; ser[27].potencia=10;
    ser[27].accion=0; ser[27].etereo=2; ser[27].potencia=40; ser[27].vida=10;
    imagen[3].src = 'recursos/3.png';

    pantalla_juego=1;
}

console.log('niveles')