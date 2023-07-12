function pintar_portada() {
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, juego.width, juego.height);

	contador = 0;
	while (contador < cantidad_espejismos) {
		contador = contador + 1;
		if (espejismo[contador].vida>0) espejismo[contador].dibuja(ctx);
	}

	ctx.font = "100px Arial";
	ctx.fillStyle = '#fff000';
   	ctx.fillText('Dragon Ball Z: Battle Arena', 40, 247)		
}

console.log('pintar portada')