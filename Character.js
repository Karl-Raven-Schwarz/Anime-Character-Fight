class Character {
	constructor(leftKey, rightKey, upKey, downKey, hitKey, spellKey, damage, spellDamage, speed) {
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
		this.SpellKey = spellKey;
	}

	SetPhysics(line, x, y, isEthereal, impulseX, impulseY, mass) {
		this.Volume = 100;
		this.Line = line;
		this.X = x;
		this.Y = y;
		this.IsEthereal = isEthereal;
		this.ImpulseX = impulseX;
		this.ImpulseY = impulseY;
		this.Mass = mass;
	}

	SetAnimator(subState, picture, frame, states, address) {
		this.SubStates = subState;
		this.Picture = picture;
		this.Frame = frame;
		this.States = states;
		this.Address = address;
		this.Height = height;
		this.Width = width;
	}

	Draw(ctx) {
		cordenadax_dibuja = (this.Frame - 1) * this.Volume;
		cordenaday_dibuja = (this.Line - 1) * this.Volume;
		ctx.drawImage(
			Images[this.Picture], cordenadax_dibuja, cordenaday_dibuja, 
			this.Volume, this.Volume, this.X, this.Y, this.Volume, this.Volume
		);
	}

	Move() {
		this.x = this.X + this.ImpulseX;
		this.y = this.Y + this.ImpulseY;

		if (this.ImpulseX > 0) this.ImpulseX -= 1;
		if (this.ImpulseX < 0) this.ImpulseX += 1;
		if (this.ImpulseY > 0) this.ImpulseY -= 1;
		if (this.ImpulseY < 0) this.ImpulseY += 1;
	}

	Direct(xAddress, yAddress) {
		if (this.X < this.xmax) xAddress = 1;
		if (this.X > this.xmax) xAddress = 2;
		if (this.X == this.xmax) xAddress = 0;

		if (this.Y < this.ymax) yAddress = 1;
		if (this.Y > this.ymax) yAddress = 2;
		if (this.Y == this.ymax) yAddress = 0;

		if (yAddress == 1 && xAddress == 0) return(1);
		if (yAddress == 2 && xAddress == 0) return(2);
		if (yAddress == 0 && xAddress == 1) return(3);
		if (yAddress == 0 && xAddress == 2) return(4);
		if (yAddress == 1 && xAddress == 1) return(5);
		if (yAddress == 1 && xAddress == 2) return(6);
		if (yAddress == 2 && xAddress == 1) return(7);
		if (yAddress == 2 && xAddress == 2) return(8);
		if (yAddress == 0 && xAddress == 0) return(0);
	}
}