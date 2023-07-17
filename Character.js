class Character {
	constructor(leftKey, upKey, rightKey, downKey, damage, spellDamage, speed, hitKey, kiKey) {
        // Stats Const
		this.Life = 10;
		this.Ki = 100;

        // Stats
        this.Damage = damage;
        this.SpellDamage = spellDamage;
        this.Speed = speed;

		// Keys
		this.LeftKey = leftKey;
		this.UpKey = upKey;
		this.RightKey = rightKey;
		this.DownKey = downKey;

		this.HitKey = hitKey;
		this.KiKey = kiKey;
	}

	SetPhysics(line, x, y, isEthereal) {
		this.Volume = 100;
		this.Line = line;
		this.X = x;
		this.Y = y;
		this.IsEthereal = isEthereal;
	}

	Draw(ctx) {
		cordenadax_dibuja = (this.Frame - 1) * this.Volume;
		cordenaday_dibuja = (this.Line - 1) * this.Volume;
		ctx.drawImage(
			Images[this.dibujo], cordenadax_dibuja, cordenaday_dibuja, 
			this.Volume, this.Volume, this.X, this.Y, this.Volume, this.Volume
		);
	}

	Move() {
		this.x = this.X + this.ImpulseX;
		this.y = this.Y + this.impulsoy;

		if (this.impulsox > 0) this.impulsox = this.impulsox - 1;
		if (this.impulsox < 0) this.impulsox = this.impulsox + 1;
		if (this.impulsoy > 0) this.impulsoy = this.impulsoy - 1;
		if (this.impulsoy < 0) this.impulsoy = this.impulsoy + 1;
	}
}