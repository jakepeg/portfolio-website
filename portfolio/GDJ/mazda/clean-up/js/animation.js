// variables populated in dco_advanced_block.js
var featStrings = [];
var carimgpath = ""; 
var hasDisc = false;
var hasPrice = false;
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};
Math.calc = function(deg, left) {
	if (deg > 0) {
		deg = (90-deg)/2.0;
	} else {
		deg = (90+deg)/-2.0;
	}
	//alert(deg)
	//alert(Math.sin(Math.radians(deg))*left);
	return Math.sin(Math.radians(deg))*left;
};

var elems = [

// prep the rotation containers


{id:"f2", init:"hidden", a:{t:{opacity:1},f:{opacity:1,width:0,height:1000,overflow:'hidden',},dur:20, delay:150, tfn:"linear"}},
{id:"f2a", a:{t:{opacity:1},f:{opacity:1},dur:20, delay:150, tfn:"linear"}},
{id:"f2image", a:{t:{opacity:1},f:{ opacity:1},dur:20, delay:150, tfn:"linear"}},

{id:"f3", init:"hidden", a:{t:{opacity:1},f:{opacity:1,width:0,height:1000,overflow:'hidden',},dur:20, delay:150, tfn:"linear"}},
{id:"f3a", a:{t:{opacity:1},f:{opacity:1},dur:20, delay:150, tfn:"linear"}},
{id:"f3image", a:{t:{opacity:1},f:{ opacity:1},dur:20, delay:150, tfn:"linear"}},

{id:"f4", init:"hidden", a:{t:{opacity:1},f:{opacity:1,width:0,height:1000,overflow:'hidden',},dur:20, delay:150, tfn:"linear"}},
{id:"f4a", a:{t:{opacity:1},f:{opacity:1},dur:20, delay:150, tfn:"linear"}},
{id:"f4image", a:{t:{opacity:1},f:{ opacity:1},dur:20, delay:150, tfn:"linear"}},

{id:"f5", init:"hidden", a:{t:{opacity:1},f:{opacity:1,width:0,height:1000,overflow:'hidden',},dur:20, delay:150, tfn:"linear"}},
{id:"f5a", a:{t:{opacity:1},f:{opacity:1},dur:20, delay:150, tfn:"linear"}},
{id:"f5image", a:{t:{opacity:1},f:{ opacity:1},dur:20, delay:150, tfn:"linear"}},

{id:"f6", init:"hidden", a:{t:{opacity:1},f:{opacity:1,width:0,height:1000,overflow:'hidden',},dur:20, delay:150, tfn:"linear"}},
{id:"f6a", a:{t:{opacity:1},f:{opacity:1},dur:20, delay:150, tfn:"linear"}},
{id:"f6image", a:{t:{opacity:1},f:{ opacity:1},dur:20, delay:150, tfn:"linear"}},


{id:"hand_large", imgSrc:"images/sponge_large.png", init:"hidden",},
{id:"Stage_bgnd2", imgSrc:"images/f1.jpg"},

{id:"logo_blk", imgSrc:"images/logo_blk.png", init:"hidden", a:{f:{top:17, left:822, opacity:0},t:{opacity:1},dur:0,delay:0}},
{id:"Stage_btn", imgSrc:"images/btn2.png", init:"hidden"},
{id:"buttons", a:{t:{opacity:1, bottom:22},f:{opacity:0, bottom:-40},dur:300, delay:50, tfn:"linear"}},
{id:"btn_disc", a:{t:{opacity:0, left:400},f:{opacity:0, left:0},dur:30, delay:0, tfn:"linear"}, dep:"!hasDisc"},
{pause:1500},

{id:"hand", imgSrc:"images/sponge.png", init:"hidden", a:{t:{top:40,left:900,rot:90},f:{top:50,left:-150,rot:70,opacity:1,zIndex:9999},dur:950, delay:700, tfn:"linear"}},

{id:"f2", init:"hidden", a:{t:{width:1000},f:{width:0},dur:640, delay:700, tfn:"linear"}},

{id:"Stage_bgnd2", a:{t:{opacity:0},f:{opacity:1},dur:30, delay:1450, tfn:"linear"}},

{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:60,left:50,width:20,height:20},f:{opacity:1,top:60,left:60,width:2,height:2},dur:250, delay:800, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:100,left:90,width:20,height:20},f:{opacity:1,top:100,left:100,width:2,height:2},dur:250, delay:860, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:80,left:130,width:20,height:20},f:{opacity:1,top:80,left:140,width:2,height:2},dur:250, delay:950, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:80,left:210,width:20,height:20},f:{opacity:1,top:80,left:220,width:2,height:2},dur:250, delay:1100, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:120,left:150,width:20,height:20},f:{opacity:1,top:120,left:160,width:2,height:2},dur:250, delay:1130, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:160,left:190,width:20,height:20},f:{opacity:1,top:160,left:200,width:2,height:2},dur:250, delay:1180, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:140,left:180,width:20,height:20},f:{opacity:1,top:140,left:190,width:2,height:2},dur:250, delay:1250, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:160,left:260,width:20,height:20},f:{opacity:1,top:160,left:270,width:2,height:2},dur:250, delay:1400, tfn:"linear"}},
{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:120,left:250,width:20,height:20},f:{opacity:1,top:40,left:260,width:2,height:2},dur:250, delay:1300, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:60,left:290,width:20,height:20},f:{opacity:1,top:60,left:300,width:2,height:2},dur:250, delay:1360, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:60,left:320,width:20,height:20},f:{opacity:1,top:60,left:330,width:2,height:2},dur:250, delay:1450, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:40,left:380,width:20,height:20},f:{opacity:1,top:40,left:390,width:2,height:2},dur:250, delay:1600, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:80,left:450,width:20,height:20},f:{opacity:1,top:80,left:460,width:2,height:2},dur:250, delay:1630, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:60,left:520,width:20,height:20},f:{opacity:1,top:60,left:530,width:2,height:2},dur:250, delay:1680, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:120,left:600,width:20,height:20},f:{opacity:1,top:120,left:610,width:2,height:2},dur:250, delay:1750, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:80,left:630,width:20,height:20},f:{opacity:1,top:80,left:640,width:2,height:2},dur:250, delay:1900, tfn:"linear"}},

{pause:4000},


{id:"hand_large", a:{t:{top:30,left:1000,rot:60,opacity:1},f:{top:40,left:-150,rot:10,opacity:1},dur:1000, delay:550, tfn:"linear"}},
{id:"f3", init:"hidden", a:{t:{width:1000},f:{width:0},dur:650, delay:630, tfn:"linear"}},

{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:60,left:50,width:20,height:20},f:{opacity:1,top:60,left:60,width:2,height:2},dur:250, delay:800, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:100,left:90,width:20,height:20},f:{opacity:1,top:100,left:100,width:2,height:2},dur:250, delay:860, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:80,left:130,width:20,height:20},f:{opacity:1,top:80,left:140,width:2,height:2},dur:250, delay:950, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:80,left:210,width:20,height:20},f:{opacity:1,top:80,left:220,width:2,height:2},dur:250, delay:1100, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:120,left:150,width:20,height:20},f:{opacity:1,top:120,left:160,width:2,height:2},dur:250, delay:1130, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:160,left:190,width:20,height:20},f:{opacity:1,top:160,left:200,width:2,height:2},dur:250, delay:1180, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:140,left:180,width:20,height:20},f:{opacity:1,top:140,left:190,width:2,height:2},dur:250, delay:1250, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:160,left:260,width:20,height:20},f:{opacity:1,top:160,left:270,width:2,height:2},dur:250, delay:1400, tfn:"linear"}},
{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:120,left:250,width:20,height:20},f:{opacity:1,top:40,left:260,width:2,height:2},dur:250, delay:1300, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:60,left:290,width:20,height:20},f:{opacity:1,top:60,left:300,width:2,height:2},dur:250, delay:1360, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:60,left:320,width:20,height:20},f:{opacity:1,top:60,left:330,width:2,height:2},dur:250, delay:1450, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:40,left:380,width:20,height:20},f:{opacity:1,top:40,left:390,width:2,height:2},dur:250, delay:1600, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:80,left:450,width:20,height:20},f:{opacity:1,top:80,left:460,width:2,height:2},dur:250, delay:1630, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:60,left:520,width:20,height:20},f:{opacity:1,top:60,left:530,width:2,height:2},dur:250, delay:1680, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:120,left:600,width:20,height:20},f:{opacity:1,top:120,left:610,width:2,height:2},dur:250, delay:1750, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:80,left:630,width:20,height:20},f:{opacity:1,top:80,left:640,width:2,height:2},dur:250, delay:1900, tfn:"linear"}},

{pause:4000},

{id:"hand_large", a:{t:{top:50,left:1000,rot:60,opacity:1},f:{top:70,left:-150,rot:10,opacity:1},dur:1000, delay:600, tfn:"linear"}},
{id:"f4", init:"hidden", a:{t:{width:1000},f:{width:0},dur:560, delay:670, tfn:"linear"}},

{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:60,left:50,width:20,height:20},f:{opacity:1,top:60,left:60,width:2,height:2},dur:250, delay:800, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:100,left:90,width:20,height:20},f:{opacity:1,top:100,left:100,width:2,height:2},dur:250, delay:860, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:80,left:130,width:20,height:20},f:{opacity:1,top:80,left:140,width:2,height:2},dur:250, delay:950, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:80,left:210,width:20,height:20},f:{opacity:1,top:80,left:220,width:2,height:2},dur:250, delay:1100, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:120,left:150,width:20,height:20},f:{opacity:1,top:120,left:160,width:2,height:2},dur:250, delay:1130, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:160,left:190,width:20,height:20},f:{opacity:1,top:160,left:200,width:2,height:2},dur:250, delay:1180, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:140,left:180,width:20,height:20},f:{opacity:1,top:140,left:190,width:2,height:2},dur:250, delay:1250, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:160,left:260,width:20,height:20},f:{opacity:1,top:160,left:270,width:2,height:2},dur:250, delay:1400, tfn:"linear"}},
{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:120,left:250,width:20,height:20},f:{opacity:1,top:40,left:260,width:2,height:2},dur:250, delay:1300, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:60,left:290,width:20,height:20},f:{opacity:1,top:60,left:300,width:2,height:2},dur:250, delay:1360, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:60,left:320,width:20,height:20},f:{opacity:1,top:60,left:330,width:2,height:2},dur:250, delay:1450, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:40,left:380,width:20,height:20},f:{opacity:1,top:40,left:390,width:2,height:2},dur:250, delay:1600, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:80,left:450,width:20,height:20},f:{opacity:1,top:80,left:460,width:2,height:2},dur:250, delay:1630, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:60,left:520,width:20,height:20},f:{opacity:1,top:60,left:530,width:2,height:2},dur:250, delay:1680, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:120,left:600,width:20,height:20},f:{opacity:1,top:120,left:610,width:2,height:2},dur:250, delay:1750, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:80,left:630,width:20,height:20},f:{opacity:1,top:80,left:640,width:2,height:2},dur:250, delay:1900, tfn:"linear"}},

{pause:4000},

{id:"hand_large", a:{t:{top:50,left:1000,rot:60,opacity:1},f:{top:70,left:-150,rot:10,opacity:1},dur:1000, delay:600, tfn:"linear"}},
{id:"f5", init:"hidden", a:{t:{width:1000},f:{width:0},dur:560, delay:670, tfn:"linear"}},

{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:60,left:50,width:20,height:20},f:{opacity:1,top:60,left:60,width:2,height:2},dur:250, delay:800, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:100,left:90,width:20,height:20},f:{opacity:1,top:100,left:100,width:2,height:2},dur:250, delay:860, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:80,left:130,width:20,height:20},f:{opacity:1,top:80,left:140,width:2,height:2},dur:250, delay:950, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:80,left:210,width:20,height:20},f:{opacity:1,top:80,left:220,width:2,height:2},dur:250, delay:1100, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:120,left:150,width:20,height:20},f:{opacity:1,top:120,left:160,width:2,height:2},dur:250, delay:1130, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:160,left:190,width:20,height:20},f:{opacity:1,top:160,left:200,width:2,height:2},dur:250, delay:1180, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:140,left:180,width:20,height:20},f:{opacity:1,top:140,left:190,width:2,height:2},dur:250, delay:1250, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:160,left:260,width:20,height:20},f:{opacity:1,top:160,left:270,width:2,height:2},dur:250, delay:1400, tfn:"linear"}},
{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:120,left:250,width:20,height:20},f:{opacity:1,top:40,left:260,width:2,height:2},dur:250, delay:1300, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:60,left:290,width:20,height:20},f:{opacity:1,top:60,left:300,width:2,height:2},dur:250, delay:1360, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:60,left:320,width:20,height:20},f:{opacity:1,top:60,left:330,width:2,height:2},dur:250, delay:1450, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:40,left:380,width:20,height:20},f:{opacity:1,top:40,left:390,width:2,height:2},dur:250, delay:1600, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:80,left:450,width:20,height:20},f:{opacity:1,top:80,left:460,width:2,height:2},dur:250, delay:1630, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:60,left:520,width:20,height:20},f:{opacity:1,top:60,left:530,width:2,height:2},dur:250, delay:1680, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:120,left:600,width:20,height:20},f:{opacity:1,top:120,left:610,width:2,height:2},dur:250, delay:1750, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:80,left:630,width:20,height:20},f:{opacity:1,top:80,left:640,width:2,height:2},dur:250, delay:1900, tfn:"linear"}},

{pause:4000},

{id:"hand", imgSrc:"images/sponge.png", init:"hidden", a:{t:{top:40,left:900,rot:90},f:{top:50,left:-150,rot:70,opacity:1,zIndex:9999},dur:950, delay:700, tfn:"linear"}},

{id:"f6", init:"hidden", a:{t:{width:1000},f:{width:0},dur:590, delay:700, tfn:"linear"}},

{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:60,left:50,width:20,height:20},f:{opacity:1,top:60,left:60,width:2,height:2},dur:250, delay:800, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:100,left:90,width:20,height:20},f:{opacity:1,top:100,left:100,width:2,height:2},dur:250, delay:860, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:80,left:130,width:20,height:20},f:{opacity:1,top:80,left:140,width:2,height:2},dur:250, delay:950, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:80,left:210,width:20,height:20},f:{opacity:1,top:80,left:220,width:2,height:2},dur:250, delay:1100, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:120,left:150,width:20,height:20},f:{opacity:1,top:120,left:160,width:2,height:2},dur:250, delay:1130, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:160,left:190,width:20,height:20},f:{opacity:1,top:160,left:200,width:2,height:2},dur:250, delay:1180, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:140,left:180,width:20,height:20},f:{opacity:1,top:140,left:190,width:2,height:2},dur:250, delay:1250, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:160,left:260,width:20,height:20},f:{opacity:1,top:160,left:270,width:2,height:2},dur:250, delay:1400, tfn:"linear"}},
{id:"bbl1", init:"hidden", a:{t:{opacity:0,top:120,left:250,width:20,height:20},f:{opacity:1,top:40,left:260,width:2,height:2},dur:250, delay:1300, tfn:"linear"}},
{id:"bbl2", init:"hidden", a:{t:{opacity:0,top:60,left:290,width:20,height:20},f:{opacity:1,top:60,left:300,width:2,height:2},dur:250, delay:1360, tfn:"linear"}},
{id:"bbl3",  init:"hidden", a:{t:{opacity:0,top:60,left:320,width:20,height:20},f:{opacity:1,top:60,left:330,width:2,height:2},dur:250, delay:1450, tfn:"linear"}},
{id:"bbl4",  init:"hidden", a:{t:{opacity:0,top:40,left:380,width:20,height:20},f:{opacity:1,top:40,left:390,width:2,height:2},dur:250, delay:1600, tfn:"linear"}},
{id:"bbl5", init:"hidden", a:{t:{opacity:0,top:80,left:450,width:20,height:20},f:{opacity:1,top:80,left:460,width:2,height:2},dur:250, delay:1630, tfn:"linear"}},
{id:"bbl6", init:"hidden", a:{t:{opacity:0,top:60,left:520,width:20,height:20},f:{opacity:1,top:60,left:530,width:2,height:2},dur:250, delay:1680, tfn:"linear"}},
{id:"bbl7",  init:"hidden", a:{t:{opacity:0,top:120,left:600,width:20,height:20},f:{opacity:1,top:120,left:610,width:2,height:2},dur:250, delay:1750, tfn:"linear"}},
{id:"bbl8",  init:"hidden", a:{t:{opacity:0,top:80,left:630,width:20,height:20},f:{opacity:1,top:80,left:640,width:2,height:2},dur:250, delay:1900, tfn:"linear"}},

{pause:1000},

{id:"dateline",  a:{t:{opacity:1,top:85},f:{opacity:0,top:450},dur:250, delay:100, tfn:"linear"}},

{id:"zoom", imgSrc:"images/zoom.png", init:"hidden", a:{f:{opacity:0,left:220,top:-52},t:{left:20,top:72},dur:4000, delay:50, tfn:"linear"}},
{id:"zoom", imgSrc:"images/zoom.png", init:"hidden", a:{f:{opacity:0},t:{opacity:0.3},dur:1750, delay:100, tfn:"eIOExp"}},
{id:"zoom", imgSrc:"images/zoom.png", init:"hidden", a:{f:{opacity:0.3},t:{opacity:0},dur:1750, delay:2000, tfn:"eIOExp"}}


];