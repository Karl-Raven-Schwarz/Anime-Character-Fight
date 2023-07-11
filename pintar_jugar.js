function pintar_jugar() {

	ctx.fillStyle = '#000440';
	ctx.fillRect(0,0,juego.width,juego.height);

	ser[24].dibuja(ctx);
	ser[3].dibuja(ctx);
	ser[4].dibuja(ctx);
	ser[5].dibuja(ctx);
	ser[7].dibuja(ctx);
	ser[8].dibuja(ctx);
	ser[25].dibuja(ctx);
	ser[26].dibuja(ctx);
	ser[27].dibuja(ctx);
	ser[9].dibuja(ctx);
	ser[10].dibuja(ctx);
	ser[11].dibuja(ctx);

	//
	ser[3].dibuja(ctx);
	ser[4].dibuja(ctx);
	ser[5].dibuja(ctx);

	contador = 11;
	while (contador < 21) {
		contador = contador + 1;
		if (ser[contador].vida>0) ser[contador].dibuja(ctx);
	}	

	ser[1].dibuja(ctx);
	ser[2].dibuja(ctx);

	if (ser[22].vida>0) ser[22].dibuja(ctx);
	if (ser[23].vida>0) ser[23].dibuja(ctx);

	if (vida1 < 6) ser[6].dibuja(ctx);
	if (vida2 < 6) ser[6].dibuja(ctx);
}