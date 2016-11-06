/* Music 
======================================*/
var playlist = [
	{
		"song"    : "Hello, world!",
		"album"   : "Kekkai Sensen",
		"artist"  : "BUMP OF CHICKEN",
		"artwork" : "http://www.bumpofchicken.com/helloworld_colony/images/jkt03.jpg",
		"mp3"     : "music/chicken.mp3"
	},
	{
		"song"    : "Boku No Kotoba Dewa Nai Kore wa Bokutachi No Kotoba",
		"album"   : "Arslan Senki",
		"artist"  : "UVERworld",
		"artwork" : "http://www.c-k-jpopnews.fr/wp-content/uploads/60772_uverboku.jpg",
		"mp3"     : "music/arslan.mp3"
	},
	{
		"song"    : "Uragiri no yuuyake",
		"album"   : "Durarara!",
		"artist"  : "THEATRE BROOK",
		"artwork" : "http://www.nautiljon.com/images/people/00/87/mini/theatre_brook_8178.jpg?11351536791",
		"mp3"     : "music/durarara_1.mp3"
	},
	{
		"song"    : "Complication",
		"album"   : "Durarara!",
		"artist"  : "ROOKIEZ is PUNK'D",
		"artwork" : "http://www.nautiljon.com/images/people/00/53/mini/rookiez_is_punk_d_23235.jpg?10",
		"mp3"     : "music/durarara_2.mp3"
	},
	{
		"song"    : "Catal Rhythm",
		"album"   : "Kuroko No Basket",
		"artist"  : "GRANRODEO",
		"artwork" : "http://www.nautiljon.com/images/cd/00/85/mini/karma_to_labyrinth_56658.jpg?0",
		"mp3"     : "music/kuroko_self.mp3"
	},
	{
		"song"    : "Feed A",
		"album"   : "God Eater",
		"artist"  : "OLDCODEX",
		"artwork" : "http://www.nautiljon.com/images/cd/00/37/mini/feed_a_56373.jpg?0",
		"mp3"     : "music/god_eater.mp3"
	},
	{
		"song"    : "Closer",
		"album"   : "Naruto",
		"artist"  : "Inoue Joe",
		"artwork" : "http://www.nautiljon.com/images/cd/00/03/mini/me_me_me_15830.jpg?1339942779",
		"mp3"     : "music/naruto_joe.mp3"
	},
	{
		"song"    : "Hikaru Nara",
		"album"   : "Shigatsu Wa Kimi No Uso",
		"artist"  : "Goose House",
		"artwork" : "http://www.nautiljon.com/images/cd/00/04/mini/hikaru_nara_53040.jpg?0",
		"mp3"     : "music/shigatsu.mp3"
	},
	{
		"song"    : "くちづけ Diamond",
		"album"   : "Yamada-Kun To 7-Nin No Majo",
		"artist"  : "WEAVER",
		"artwork" : "http://www.nautiljon.com/images/cd/00/29/mini/kuchizuke_diamond_55392.jpg?0",
		"mp3"     : "music/yamada.mp3"
	},
	{
		"song"    : "Again",
		"album"   : "Full Metal Alchemist",
		"artist"  : "Yui",
		"artwork" : "http://www.nautiljon.com/images/cd/00/17/mini/again_17071.jpg?1345844886",
		"mp3"     : "music/fma.mp3"
	},
	{
		"song"    : "Imagination",
		"album"   : "Haikyu!!",
		"artist"  : "SPYAIR",
		"artwork" : "http://www.nautiljon.com/images/cd/00/23/mini/imagination_50532.jpg?0",
		"mp3"     : "music/haikyu.mp3"
	},
	{
		"song"    : "Wind",
		"album"   : "Naruto",
		"artist"  : "Akeboshi",
		"artwork" : "http://www.nautiljon.com/images/cd/00/46/mini/roundabout_15664.jpg?0",
		"mp3"     : "music/wind.mp3"
	},
	{
		"song"    : "Perfect Time",
		"album"   : "Nanatsu no Taizai",
		"artist"  : "Sawano Hiroyuki",
		"artwork" : "http://www.nautiljon.com/images/ost/00/97/mini/nanatsu_no_taizai_-_original_soundtrack_13279.jpg?11425222808",
		"mp3"     : "music/perfect.mp3"
	},
	{
		"song"    : "Lapis Lazuli",
		"album"   : "Sword Art Online",
		"artist"  : "Aoi Eir",
		"artwork" : "http://www.nautiljon.com/images/cd/00/76/mini/d_azur_55967.jpg?0",
		"mp3"     : "music/lapis.mp3"
	},
	{
		"song"    : "No pain, No game",
		"album"   : "Btooom!",
		"artist"  : "Nano",
		"artwork" : "http://www.nautiljon.com/images/cd/00/56/mini/no_pain_no_game_limited_pressing_44565.jpg?1422614918",
		"mp3"     : "music/nano_pain.mp3"
	},
	{
		"song"    : "Hero's Come Back!!",
		"album"   : "Naruto",
		"artist"  : "nobodyknows+",
		"artwork" : "http://www.nautiljon.com/images/cd/00/63/mini/hero_s_come_back_2036.jpg?1429276527",
		"mp3"     : "music/naruto_heroes.mp3"
	},		
	{
		"song"    : "IN MY WORLD",
		"album"   : "Ao No Exorcist",
		"artist"  : "ROOKIEZ is PUNK'D",
		"artwork" : "http://www.nautiljon.com/images/cd/00/94/mini/from_dusk_till_dawn_43349.jpg?0",
		"mp3"     : "music/blue_exorcist.mp3"
	},
	{
		"song"    : "Kyouran Hey Kids!!",
		"album"   : "Noragami",
		"artist"  : "THE ORAL CIGARETTES",
		"artwork" : "http://a3.mzstatic.com/us/r30/Music6/v4/11/92/c0/1192c0b8-bb20-e450-a4ad-191f076379a4/cover170x170.jpeg",
		"mp3"     : "music/noragami_aragato.mp3"
	},		
	{
		"song"    : "Courage",
		"album"   : "Sword Art Online",
		"artist"  : "Tomatsu Haruka",
		"artwork" : "http://www.nautiljon.com/images/cd/00/63/mini/courage_limited_anime_edition_53236.jpg?0",
		"mp3"     : "music/courage.mp3"
	},
	{
		"song"    : "Spirit Inspiration",
		"album"   : "Zetsuen No Tempest",
		"artist"  : "Nothing's Carved In Stone",
		"artwork" : "http://www.nautiljon.com/images/cd/00/43/mini/silver_sun_43834.jpg?1350666571",
		"mp3"     : "music/tempest.mp3"
	},
	{
		"song"    : "Unravel",
		"album"   : "Tokyo Ghoul",
		"artist"  : "TK [Ling tosite sigure]",
		"artwork" : "http://www.nautiljon.com/images/cd/00/39/mini/fantastic_magic_52193.jpg?1433701822",
		"mp3"     : "music/tokyo_ghoul.mp3"
	},
	{
		"song"    : "Goya no Machiawase",
		"album"   : "Noragami",
		"artist"  : "Hello Sleepwalkers",
		"artwork" : "http://www.nautiljon.com/images/anime/00/65/mini/noragami_2956.jpg?11443859489",
		"mp3"     : "music/noragami.mp3"
	},
	{
		"song"    : "Nevereverland",
		"album"   : "N",
		"artist"  : "Nano",
		"artwork" : "http://www.nautiljon.com/images/cd/00/72/mini/n_46227.jpg?0",
		"mp3"     : "music/nano_nevereverland.mp3"
	},
	{
		"song"    : "Now or Never",
		"album"   : "N",
		"artist"  : "Nano",
		"artwork" : "http://www.nautiljon.com/images/cd/00/72/mini/n_46227.jpg?0",
		"mp3"     : "music/nano_never.mp3"
	},
	{
		"song"    : "Gangsta : Soundtrack",
		"album"   : "Gangsta",
		"artist"  : "Gangsta",
		"artwork" : "http://www.nautiljon.com/images/ost/00/65/mini/gangsta_-_drama_cd_5_14856.jpg?11435947312",
		"mp3"     : "music/gangsta_soundtrack.mp3"
	},
	{
		"song"    : "Renegade",
		"album"   : "Gangsta",
		"artist"  : "R・O・N",
		"artwork" : "http://www.nautiljon.com/images/cd/00/18/mini/renegade_56681.jpg?0",
		"mp3"     : "music/gangsta_op.mp3"
	},
	{
		"song"    : "King",
		"album"   : "Fools - EP",
		"artist"  : "Lauren Aquilina",
		"artwork" : "http://a3.mzstatic.com/eu/r30/Music/v4/df/b0/cb/dfb0cb77-a9e5-fd25-14e7-e6728a2ec963/cover170x170.jpeg",
		"mp3"     : "music/lauren_king.mp3"
	},
	{
		"song"    : "Rock, Scissors, Paper",
		"album"   : "Re:make",
		"artist"  : "ONE OK ROCK",
		"artwork" : "http://www.nautiljon.com/images/people/00/11/mini/one_ok_rock_2711.jpg?11363106786",
		"mp3"     : "music/rock_paper.mp3"
	},
	{
		"song"    : "Rashisha",
		"album"   : "Barakamon",
		"artist"  : "SUPER BEAVER",
		"artwork" : "http://www.nautiljon.com/images/cd/00/59/mini/aisuru_55295.jpg?0",
		"mp3"     : "music/barakamon.mp3"
	},
	{
		"song"    : "Papermoon",
		"album"   : "Soul Eater",
		"artist"  : "Tommy heavenly6",
		"artwork" : "http://www.nautiljon.com/images/cd/00/96/mini/papermoon_13069.jpg?1360617939",
		"mp3"     : "music/papermoon.mp3"
	},
	{
		"song"    : "DO IT",
		"album"   : "Kuroko No Basket",
		"artist"  : "GRANRODEO",
		"artwork" : "http://www.nautiljon.com/images/cd/00/24/mini/crack_star_flash_44542.jpg?0",
		"mp3"     : "music/kuroko_doit.mp3"
	},
	{
		"song"    : "Catal Rhythm",
		"album"   : "Kuroko No Basket",
		"artist"  : "OLDCODEX",
		"artwork" : "http://www.nautiljon.com/images/cd/00/97/mini/contrast_silver_46479.jpg?1379621456",
		"mp3"     : "music/kuroko_catal.mp3"
	},
	{
		"song"    : "Sign",
		"album"   : "Naruto",
		"artist"  : "FLOW",
		"artwork" : "http://www.nautiljon.com/images/cd/00/41/mini/flow_anime_best_34314.jpg?1439128293",
		"mp3"     : "music/naruto_sign.mp3"
	},
	{
		"song"    : "Ignite",
		"album"   : "Sword Art Online",
		"artist"  : "Aoi Eir",
		"artwork" : "http://www.nautiljon.com/images/cd/00/76/mini/d_azur_55967.jpg?0",
		"mp3"     : "music/ignite.mp3"
	},
	{
		"song"    : "Only my railgun",
		"album"   : "To Aru Kagaku no Railgun",
		"artist"  : "fripSide",
		"artwork" : "http://www.nautiljon.com/images/cd/00/75/mini/infinite_synthesis_32057.jpg?0",
		"mp3"     : "music/railgun.mp3"
	},
	{
		"song"    : "Color",
		"album"   : "Freezing",
		"artist"  : "MARiA",
		"artwork" : "http://www.nautiljon.com/images/cd/00/45/mini/color_kimi_wo_mamoritai_freezing_intro_outro_theme_33354.jpg?1326669606",
		"mp3"     : "music/color.mp3"
	},
	{
		"song"    : "Omega Rhythm",
		"album"   : "Omega Rhythm",
		"artist"  : "UPLIFT SPICE",
		"artwork" : "http://www.nautiljon.com/images/cd/00/67/mini/omega_rhythm_20776.jpg?1369430958",
		"mp3"     : "music/omega.mp3"
	},


];

/* General Load / Variables
======================================*/
var rot = 0;
var duration;
var playPercent;
var rotate_timer;
var armrot = -45;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
var arm = document.getElementById("arm");
var next = document.getElementById("next");
var song = document.getElementById("song");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var album = document.getElementById("album");
var artist = document.getElementById("artist");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
var artwork = document.getElementsByClassName("artwork")[0];
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", 	bufferUpdate, false);
load();

/* Functions
======================================*/
function load(){
	pauseButton.style.visibility = "hidden";
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	album.innerHTML = playlist[currentSong]['album'];
	album.title = playlist[currentSong]['album'];
	artist.innerHTML = playlist[currentSong]['artist'];
	artist.title = playlist[currentSong]['artist'];
	artwork.setAttribute("style", "background:url(http://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
	music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	music.load();
}
function reset(){ 
	rotate_reset = setInterval(function(){ 
		Rotate();
		if(rot == 0){
			clearTimeout(rotate_reset);
		}
	}, 1);
	fireEvent(pauseButton, 'click');
	armrot = -45;
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	album.innerHTML = playlist[currentSong]['album'];
	album.title = playlist[currentSong]['album'];
	artist.innerHTML = playlist[currentSong]['artist'];
	artist.title = playlist[currentSong]['artist'];
	artwork.setAttribute("style", "background:url(http://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
	music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	music.load();
}
function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
  if (sec < 10){ 
    sec  = "0" + sec;
  }
  return min + ':' + sec;
}
function timeUpdate() {
	bufferUpdate();
	playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";
	timer.innerHTML = formatSecondsAsTime(music.currentTime.toString());
}
function bufferUpdate() {
	bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
	bufferhead.style.width = bufferPercent + "px";
}
function Rotate(){
	if(rot == 361){
		artwork.style.transform = 'rotate(0deg)';
		rot = 0;
	} else {
		artwork.style.transform = 'rotate('+rot+'deg)';
		rot++;
	}
}
function RotateArm(){
	if(armrot > -12){
		arm.style.transform = 'rotate(-38deg)';
		armrot = -45;
	} else {
		arm.style.transform = 'rotate('+armrot+'deg)';
		armrot = armrot + (26 / duration);
	}
}
function fireEvent(el, etype){
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}
function _next(){
	if(currentSong == playlist.length - 1){
		reset();
	} else {
		fireEvent(next, 'click');
	}
}
playButton.onclick = function() {
	music.play();
}
pauseButton.onclick = function() {
	music.pause();
}
music.addEventListener("play", function () {
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
	rotate_timer = setInterval(function(){ 
		if(!music.paused && !music.ended && 0 < music.currentTime){
			Rotate();
		}
	}, 10);	
	if(armrot != -45){
		arm.setAttribute("style", "transition: transform 800ms;");
		arm.style.transform = 'rotate('+armrot+'deg)';
	}
	arm_rotate_timer = setInterval(function(){ 
		if(!music.paused && !music.ended && 0 < music.currentTime){
			if(armrot == -45){
				arm.setAttribute("style", "transition: transform 800ms;");
				arm.style.transform = 'rotate(-38deg)';
				armrot = -38;
			}
			if(arm.style.transition != ""){
				setTimeout(function(){
					arm.style.transition = "";
				}, 1000);
			}
			RotateArm();
		}
	}, 1000);
}, false);
music.addEventListener("pause", function () {
	arm.setAttribute("style", "transition: transform 800ms;");
	arm.style.transform = 'rotate(-45deg)';
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
	clearTimeout(rotate_timer);
	clearTimeout(arm_rotate_timer);
}, false);
next.onclick = function(){
	arm.setAttribute("style", "transition: transform 800ms;");
	arm.style.transform = 'rotate(-45deg)';
	clearTimeout(rotate_timer);
	clearTimeout(arm_rotate_timer);
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	arm.style.transform = 'rotate(-45deg)';
	armrot = -45;
	if((currentSong + 1) == playlist.length){
		currentSong = 0;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	} else {
		currentSong++;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	}
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	album.innerHTML = playlist[currentSong]['album'];
	album.title = playlist[currentSong]['album'];
	artist.innerHTML = playlist[currentSong]['artist'];
	artist.title = playlist[currentSong]['artist'];
	artwork.setAttribute("style", "transform: rotate("+rot+"deg); background:url(http://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
	music.load();
	duration = music.duration;
	music.play();
}
previous.onclick = function(){
	arm.setAttribute("style", "transition: transform 800ms;");
	arm.style.transform = 'rotate(-45deg)';
	clearTimeout(rotate_timer);
	clearTimeout(arm_rotate_timer);
	playhead.style.width = "0px";
	bufferhead.style.width = "0px";
	timer.innerHTML = "0:00";
	music.innerHTML = "";
	arm.style.transform = 'rotate(-45deg)';
	armrot = -45;
	if((currentSong - 1) == -1){
		currentSong = playlist.length - 1;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	} else {
		currentSong--;
		music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
	}
	song.innerHTML = playlist[currentSong]['song'];
	song.title = playlist[currentSong]['song'];
	album.innerHTML = playlist[currentSong]['album'];
	album.title = playlist[currentSong]['album'];
	artist.innerHTML = playlist[currentSong]['artist'];
	artist.title = playlist[currentSong]['artist'];
	artwork.setAttribute("style", "transform: rotate("+rot+"deg); background:url(http://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
	music.load();
	duration = music.duration;
	music.play();
}
volume.oninput = function(){
	music.volume = volume.value;
	visablevolume.style.width = (80 - 11) * volume.value + "px";
}
music.addEventListener("canplay", function () {
	duration = music.duration;
}, false);