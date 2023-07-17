class Mirror {
	constructor(x, y, life, animation, volume, frame, drawing) {
		this.X = x;
		this.Y = y;
		this.Life = life;
		this.Animation = animation;
		this.Volume = volume;
		this.Frame = frame;
		this.Drawing = drawing;
	}

	Draw(ctx) {
		if (this.Frame > 0 && this.Frame < 101) {
			for (let i = 0, j = 0; i < 10; i++, j++) {
				if (this.Frame > i * 10 && this.Frame < j) {
					cordenaday_dibuja = i * this.Volume; 
					cordenadax_dibuja = (this.Frame - 1) * this.Volume;
				}	
			}
		}
		cordenadax_dibuja = (this.Frame - 1) * this.Volume;
		ctx.drawImage(Images[this.Drawing], cordenadax_dibuja, cordenaday_dibuja, this.Volume, this.Volume, this.X, this.Y, this.Volume, this.Volume);
	}
}