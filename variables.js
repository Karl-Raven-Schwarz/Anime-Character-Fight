class Character {
  constructor() {
    this.Life = 10;
    this.Ki = 100;
  }

  Print() {
    console.log("");
  }
}

//Variables

var contador_avance = 0;
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


var ser = new Array();
for (let i = 0; i < 31; i++) ser[i] = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);


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


var cantidad_espejismos = 2;
var cantidad_espejismosmax = 20;

var espejismo = new Array();
for (let i = 1; i < 21; i++) espejismo[i] = new espejo(0,0,0,0,0,0,0);



var cual_portada = 0;
var presiona_portada = 0;


// mensajes
var cantidad_mensajes = 21;
var cantidad_mensajesmax = 21;

var mensaje=new Array();
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
var tecla_disparo2 = tecla_m;

var tecla_magia1 = tecla_g;
var tecla_magia2 = tecla_n;

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