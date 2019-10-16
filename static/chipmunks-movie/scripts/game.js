var Game = function (parent)
{
	this.game = new Phaser.Game (598, 498, Phaser.CANVAS, parent,
	{
		preload: this.preload.bind(this),
		create: this.create.bind(this),
		update: this.update.bind(this)
	});
};


var g;


Game.init = function (parent)
{
	g = new Game (parent);
};


Game.prototype.preload = function ()
{
	this.game.load.image ('Background', 'images/background_clear.jpg');
	this.game.load.image ('Title', 'images/title.jpg');
	this.game.load.image ('Logo', 'images/logo.png');
	this.game.load.image ('Mandatory1', 'images/mandatory1.png');
	this.game.load.image ('Mandatory2', 'images/mandatory2.png');
	this.game.load.image ('Prompt', 'images/prompt.png');
	this.game.load.image ('Black', 'images/black.png');
	this.game.load.image ('StartButton', 'images/button_start.png');
	this.game.load.image ('Keyboard', 'images/keyboard.png');
	this.game.load.image ('Instructions', 'images/instructions.png');
	this.game.load.image ('PlayButton', 'images/button_play.png');
	this.game.load.image ('Table', 'images/table.png');
	this.game.load.image ('Note0', 'images/note0.png');
	this.game.load.image ('Note1', 'images/note1.png');
	this.game.load.image ('Note2', 'images/note2.png');
	this.game.load.image ('Note3', 'images/note3.png');
	this.game.load.image ('Points', 'images/points.png');
	this.game.load.image ('Scored', 'images/scored.png');
	this.game.load.image ('ReplayButton', 'images/button_replay.png');
	this.game.load.image ('Cinema', 'images/cinema.png');
	this.game.load.image ('Disclaimer', 'images/disclaimer.png');
	this.game.load.image ('WatchButton', 'images/button_watch.png');
	this.game.load.audio ('Music', 'audio/track.mp3');
	this.game.load.audio ('Error', 'audio/error.mp3');
};


Game.prototype.create = function ()
{
	this.game.state.onPausedCallback = function ()
	{
		if (this.music)
			this.music.pause();
	}.bind(this);

	this.game.state.onResumedCallback = function ()
	{
		if (this.music)
			this.music.resume();
	}.bind(this);;

	this.startWelcome ();
};


Game.prototype.startWelcome = function ()
{
	this.game.parent.style.display = 'block';
	
	this.background = this.game.add.sprite (0, 0, 'Background');
	this.title = this.game.add.sprite (0, 0, 'Title');
	this.logo = this.game.add.sprite (344, 152, 'Logo');
	this.mandatory1 = this.game.add.sprite (7, 364, 'Mandatory1');
	this.mandatory2 = this.game.add.sprite (519, 366, 'Mandatory2');
	this.mandatory2.scale.set(0.7);
	this.mandatory2.alpha = 0.8;
	this.prompt = this.game.add.sprite (193, 372, 'Prompt');
	this.black = this.game.add.sprite (0, 399, 'Black');
	this.black.alpha = 0.65;
	this.startButton = this.game.add.button (0, 0, 'StartButton');
	this.startButton.anchor.set (0.5, 0.5);
	this.startButton.position.set (299, 452);
	this.startButton.onInputDown.add (this.transitionFromWelcome, this);
};


Game.prototype.transitionFromWelcome = function ()
{
	this.startButton.onInputDown.remove (this.transitionFromWelcome, this);

	this.startButton.alpha = 0;
	this.game.add.tween(this.mandatory1).to({y: 345, alpha: 0}, 500, null, true);
	this.game.add.tween(this.prompt).to({y: 343, alpha: 0}, 500, null, true, 250);
	this.game.add.tween(this.mandatory2).to({y: 347, alpha: 0}, 500, null, true, 500);
	this.game.add.tween(this.logo).to({y: 132, alpha: 0}, 500, null, true, 750);
	this.game.add.tween(this.title).to({alpha: 0}, 250, null, true, 1000);
	this.game.add.tween(this.black).to({y: 0}, 1000, Phaser.Easing.Back.In, true, 1000);

	this.game.time.events.add (Phaser.Timer.SECOND * 2, this.startTutorial, this);
};


Game.prototype.startTutorial = function ()
{
	this.logo.bringToTop();
	this.logo.alpha = 1;
	this.logo.position.set (174, 10);
	this.keyboard = this.game.add.sprite (0, 0, 'Keyboard');
	this.keyboard.anchor.set (0.5, 0.5);
	this.keyboard.position.set (299, 285);
	this.instructions = this.game.add.sprite (0, 0, 'Instructions');
	this.instructions.position.set (40, 185);
	this.instructions.alpha = 0;
	this.playButton = this.game.add.button (0, 0, 'PlayButton');
	this.playButton.anchor.set (0.5, 0.5);
	this.playButton.position.set (299, 452);

	this.game.add.tween(this.logo).from({y: -50}, 500, Phaser.Easing.Back.Out, true, 500);
	this.game.add.tween(this.logo).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true, 500);
	this.game.add.tween(this.keyboard.scale).from({x: 0.5, y: 0.5}, 500, Phaser.Easing.Back.Out, true, 1000);
	this.game.add.tween(this.keyboard).from({alpha: 0}, 500, Phaser.Easing.Back.Out, true, 1000);
	this.game.add.tween(this.keyboard).to({y: 325}, 500, Phaser.Easing.Back.InOut, true, 2000);
	this.game.add.tween(this.instructions).to({alpha: 1}, 500, Phaser.Easing.Linear.Out, true, 2500);
	this.game.add.tween(this.playButton).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true, 3000);
	this.game.add.tween(this.playButton).from({y: 432}, 500, Phaser.Easing.Back.Out, true, 3000);

	this.game.time.events.add (Phaser.Timer.SECOND * 3.5, function ()
	{
		this.playButton.onInputDown.add (this.transitionFromTutorial, this);
	},
	this);
};


Game.prototype.transitionFromTutorial = function ()
{
	this.playButton.onInputDown.remove (this.transitionFromTutorial, this);

	this.game.add.tween(this.playButton).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true);
	this.game.add.tween(this.keyboard).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 250);
	this.game.add.tween(this.instructions).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 500);
	this.game.add.tween(this.logo).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 750);

	this.game.time.events.add (Phaser.Timer.SECOND * 1.5, this.startPlay, this);
};


Game.prototype.startPlay = function ()
{
	this.logo.alpha = 1;
	this.logo.scale.set (0.5);
	this.logo.anchor.set (0.5);
	this.logo.position.set (70, 53);
	/*
	this.mandatory1.bringToTop();
	this.mandatory1.alpha = 1;
	this.mandatory1.position.set (8, 100);
	this.mandatory2.bringToTop();
	this.mandatory2.alpha = 1;
	this.mandatory2.tint = 0xAAAAAA;
	this.mandatory2.position.set (100, 95);
	this.mandatory2.scale.set (1);*/
	this.table = this.game.add.group();
	this.table.create (0, 0, 'Table');
	this.table.position.set (26, 225);
	this.scoreStyle = {font: '56px Gotham', fill: '#ffffff', align: 'right'};
	this.scoreField = this.game.add.text (585, 40, '0', this.scoreStyle);
	this.scoreField.anchor.set (1, 0);
	this.points = this.game.add.sprite (505, 97, 'Points');
	this.music = this.game.add.audio ('Music');
	this.error = this.game.add.audio ('Error');
	this.error.volume = 0.5;

	this.game.add.tween(this.table).from({y: 250, alpha: 0}, 500, Phaser.Easing.Cubic.Out, true);
	this.game.add.tween(this.logo.scale).from({x: 0, y: 0}, 250, Phaser.Easing.Back.Out, true, 500);
	this.game.add.tween(this.logo).from({alpha: 0}, 250, Phaser.Easing.Back.Out, true, 500);
	//this.game.add.tween(this.mandatory1).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 750);
	//this.game.add.tween(this.mandatory2).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 1000);
	this.game.add.tween(this.scoreField).from({y: 20}, 250, Phaser.Easing.Back.Out, true, 750);
	this.game.add.tween(this.scoreField).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 750);
	this.game.add.tween(this.points).from({y: 77}, 250, Phaser.Easing.Back.Out, true, 1000);
	this.game.add.tween(this.points).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 1000);
	
	this.score = 0;
	this.notes = [];
	this.sequence =
	[
		'||--||--||--||--||----|||||-|-|-|-',
		'--||--||--||--||--||||||||-|-|-|-|',
		'-|---||--|---||--|----||||-|-|-|-|',
		'|-|-|-|-|-|-|-|-|-|||||||||-|-|-|-'
	];
	this.check =
	[
		'--------------------------------------------',
		'--------------------------------------------',
		'--------------------------------------------',
		'---------------------------------------------'
	];
	this.index = 0;
	this.playing = [false, false, false, false];

	this.game.time.events.removeAll ();

	this.game.time.events.loop (Phaser.Timer.SECOND * 60 / 65, this.sampleSequence, this);
	this.game.time.events.add (Phaser.Timer.SECOND * 4, function ()
	{
		this.music.play();
	},
	this);
	this.game.time.events.add (Phaser.Timer.SECOND * 4.5, function ()
	{
		this.game.add.tween(this.table).to({y: 235}, 1000 * 60 / 129, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
	},
	this);
	this.game.time.events.add (Phaser.Timer.SECOND * 36, this.transitionFromPlay, this);
};


Game.prototype.sampleSequence = function ()
{
	for (var t = 0; t < this.sequence.length; t++)
	{
		var symbol = this.sequence[t][this.index];
		if (symbol === '|')
			this.createNote (t);
	}

	this.index++;
};


Game.prototype.createNote = function (type)
{
	var note = this.table.create (272, 0, 'Note' + type);
	note.anchor.set (0.5, 0.5);
	note.alpha = 0;
	note.p = 1.0;
	note.t = type;
	this.notes.push (note);
};


Game.prototype.update = function ()
{
	if (this.notes)
	{
		var dt = this.game.time.elapsed / 1000;

		for (var i = 0; i < this.notes.length; i++)
		{
			note = this.notes[i];

			if (note.exists)
			{
				note.p -= 0.25 * dt;
				var pp = 1 + Math.pow ((note.p - 1), 3);

				if (note.p >= 0)
				{
					note.y = 200 - 200 * pp;
					note.x = 271 + 49.5 * (1 - pp) * (2 * note.t - 3);
					note.scale.set (1 - pp, 1 - 0.9 * pp);
					if (pp >= 0.667)
						note.alpha = 3 - 3 * pp;
					else
						note.alpha = 1;
				}
				else if (note.p >= -0.1)
				{
					note.y = 200;
					note.x = 271 + 49.5 * (2 * note.t - 3);
					note.alpha = 1 + 2 * pp;
					note.scale.set(1);
				}
				else
				{
					note.exists = false;
					this.playing[note.t] = false;
				}

				if (note.p > -0.1 && note.p < 0.1)
				{
					this.playing[note.t] = true;

					if (this.game.input.keyboard.isDown (Phaser.Keyboard.D) && (note.t === 0) && (this.check[note.t][this.index] === '-'))
					{
						this.score += 10;
						this.check[note.t] = this.setCharAt (this.check[note.t], this.index, '|');
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.F) && (note.t === 1) && (this.check[note.t][this.index] === '-'))
					{
						this.score += 10;
						this.check[note.t] = this.setCharAt (this.check[note.t], this.index, '|');
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.J) && (note.t === 2) && (this.check[note.t][this.index] === '-'))
					{
						this.score += 10;
						this.check[note.t] = this.setCharAt (this.check[note.t], this.index, '|');
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.K) && (note.t === 3) && (this.check[note.t][this.index] === '-'))
					{
						this.score += 10;
						this.check[note.t] = this.setCharAt (this.check[note.t], this.index, '|');
					}

					this.scoreField.text = this.score;
				}

				if (note.exists)
				{
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.D) && !this.playing[0])
					{
						this.error.play();
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.F) && !this.playing[1])
					{
						this.error.play();
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.J) && !this.playing[2])
					{
						this.error.play();
					}
					if (this.game.input.keyboard.isDown (Phaser.Keyboard.K) && !this.playing[3])
					{
						this.error.play();
					}
				}
			}
		}
	}
};


Game.prototype.setCharAt = function (string, index, char)
{
    if (index > string.length - 1) return string;
    return string.substr(0, index) + char + string.substr(index + 1);
}


Game.prototype.transitionFromPlay = function ()
{
	this.game.add.tween(this.mandatory1).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true);
	this.game.add.tween(this.mandatory2).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 250);
	this.game.add.tween(this.logo).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 500);
	this.game.add.tween(this.points).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 750);
	this.game.add.tween(this.scoreField).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 1000);
	this.game.add.tween(this.table).to({y: 250, alpha: 0}, 500, Phaser.Easing.Cubic.Out, true, 1000);

	this.game.time.events.add (Phaser.Timer.SECOND * 1.5, this.startGameOver, this);
};


Game.prototype.startGameOver = function ()
{
	this.notes = [];

	this.logo.scale.set (1);
	this.logo.alpha = 1;
	this.logo.position.set (299, 95);
	this.scored = this.game.add.sprite (299, 195, 'Scored');
	this.scored.anchor.set (0.5);
	this.scoreField.alpha = 1;
	this.scoreField.anchor.set (0.5);
	this.scoreField.position.set (299, 245);
	this.points.alpha = 1;
	this.points.anchor.set (0.5);
	this.points.position.set (299, 280);
	this.replayButton = this.game.add.button (299, 320, 'ReplayButton');
	this.replayButton.anchor.set (0.5, 0.5);
	this.replayButton.onInputDown.add (this.initReplay, this);
	this.cinema = this.game.add.sprite (299, 366, 'Cinema');
	this.cinema.anchor.set (0.5, 0.5);
	this.watchButton = this.game.add.button (299, 420, 'WatchButton');
	this.watchButton.anchor.set (0.5, 0.5);
	this.watchButton.onInputDown.add (this.clickThrough, this);
	this.mandatory1.bringToTop();
	this.mandatory1.alpha = 1;
	this.mandatory1.position.set (8, 460);
	this.mandatory2.bringToTop();
	this.mandatory2.alpha = 1;
	this.mandatory2.tint = 0xFFFFFF;
	this.mandatory2.position.set (489, 456);
	this.mandatory2.scale.set (1);
	this.disclaimer = this.game.add.sprite (100, 459, 'Disclaimer');

	this.game.add.tween(this.logo).from({y: -50}, 500, Phaser.Easing.Back.Out, true);
	this.game.add.tween(this.logo).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true);
	this.game.add.tween(this.scored).from({y: 175}, 500, Phaser.Easing.Back.Out, true, 500);
	this.game.add.tween(this.scored).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true, 500);
	this.game.add.tween(this.scoreField).from({y: 225}, 500, Phaser.Easing.Back.Out, true, 1000);
	this.game.add.tween(this.scoreField).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true, 1000);
	this.game.add.tween(this.points).from({y: 260}, 500, Phaser.Easing.Back.Out, true, 1500);
	this.game.add.tween(this.points).from({alpha: 0}, 500, Phaser.Easing.Linear.Out, true, 1500);
	this.game.add.tween(this.replayButton).from({y: 300}, 250, Phaser.Easing.Back.Out, true, 2000);
	this.game.add.tween(this.replayButton).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 2000);
	this.game.add.tween(this.cinema).from({y: 346}, 250, Phaser.Easing.Back.Out, true, 2250);
	this.game.add.tween(this.cinema).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 2250);
	this.game.add.tween(this.watchButton).from({y: 400}, 250, Phaser.Easing.Back.Out, true, 2500);
	this.game.add.tween(this.watchButton).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 2500);
	this.game.add.tween(this.mandatory1).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 2750);
	this.game.add.tween(this.disclaimer).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 3000);
	this.game.add.tween(this.mandatory2).from({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 3250);
};


Game.prototype.initReplay = function ()
{
	this.transitionFromGameOver ();
};


Game.prototype.clickThrough = function ()
{
	if (EB)
		EB.clickthrough();
};


Game.prototype.transitionFromGameOver = function ()
{
	this.game.add.tween(this.mandatory2).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 0);
	this.game.add.tween(this.disclaimer).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 250);
	this.game.add.tween(this.mandatory1).to({alpha: 0}, 250, Phaser.Easing.Linear.Out, true, 500);
	this.game.add.tween(this.watchButton).to({y: 400}, 250, Phaser.Easing.Back.In, true, 1000);
	this.game.add.tween(this.watchButton).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 1000);
	this.game.add.tween(this.cinema).to({y: 346}, 250, Phaser.Easing.Back.In, true, 1250);
	this.game.add.tween(this.cinema).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 1250);
	this.game.add.tween(this.replayButton).to({y: 300}, 250, Phaser.Easing.Back.In, true, 1500);
	this.game.add.tween(this.replayButton).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 1500);
	this.game.add.tween(this.points).to({y: 260}, 250, Phaser.Easing.Back.In, true, 1750);
	this.game.add.tween(this.points).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 1750);
	this.game.add.tween(this.scoreField).to({y: 225}, 250, Phaser.Easing.Back.In, true, 2000);
	this.game.add.tween(this.scoreField).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 2000);
	this.game.add.tween(this.scored).to({y: 175}, 250, Phaser.Easing.Back.In, true, 2250);
	this.game.add.tween(this.scored).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 2250);
	this.game.add.tween(this.logo).to({y: -50}, 250, Phaser.Easing.Back.In, true, 2500);
	this.game.add.tween(this.logo).to({alpha: 0}, 250, Phaser.Easing.Linear.In, true, 2500);

	this.game.time.events.add (Phaser.Timer.SECOND * 3, this.startPlay, this);
};


Game.stop = function ()
{
	if (g.music) g.music.stop();
	g.game.time.events.removeAll ();
	g.create ();
};


window.onload = function ()
{
	var parent = document.getElementById ('game');
	Game.init (parent);
}



