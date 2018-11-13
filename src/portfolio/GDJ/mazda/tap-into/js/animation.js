var featStrings = [];
var carimgpath = ""; // overwritten in dco_advanced_block.js
var hasDisc = false;
var hasPrice = false;
var hasRedText = false;
var elems = [

{id:"btn_disc",init:"hidden"},

{id:"Stage_bgnd2", imgSrc:"images/bgnd.jpg"},
{id:"Stage_btn", imgSrc:"images/btn2.png", init:"hidden"},
{id:"campaign_text1a", imgSrc:"images/text1.png", init:"hidden", a:{f:{top:0,left:-300,opacity:0},t:{left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:1600},
{id:"campaign_text2a", imgSrc:"images/text2.png", init:"hidden", a:{f:{top:0,left:-300,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:1600},
{id:"campaign_text3a", imgSrc:"images/text3.png", init:"hidden", a:{f:{top:0,left:-300,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:1600},
{id:"campaign_text1a", a:{t:{left:-300,opacity:0},f:{left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:400},
{id:"campaign_text2a", a:{t:{left:-300,opacity:0},f:{left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:500},
{id:"campaign_text3a", a:{t:{left:-300,opacity:0},f:{left:0,opacity:1},dur:500, delay:300, tfn:"eIOExp"}},
{pause:500},


{id:"exp_car", imgSrcVar:"carimgpath", init:"hidden", a:{t:{opacity:1,left:0},f:{opacity:0,left:0},dur:1000, delay:450, tfn:"eIOExp"}},
{pause:2000},

{id:"redtext", init:"hidden"},
{id:"redtext", a:{t:{opacity:1,top:41,left:-5},f:{opacity:1,top:41,left:-302},dur:1000, delay:150, tfn:"eIOExp"}, dep:'hasRedText'},
{id:"modelname1", init:"hidden", a:{t:{left:2},f:{opacity:1,top:11,left:-302},dur:1000, delay:350, tfn:"eIOExp"}},
{id:"modelname2", init:"hidden", a:{t:{left:2},f:{opacity:1,top:24,left:-302},dur:1000, delay:550, tfn:"eIOExp"}},
{id:"modelname3", init:"hidden", a:{t:{left:2},f:{opacity:1,top:30,left:-302},dur:1000, delay:750, tfn:"eIOExp"}},

{id:"tile", imgSrc:"images/tile.png", init:"hidden", a:{t:{opacity:1},f:{opacity:0},dur:2500, delay:1000, tfn:"eIOExp"}},
{id:"btn_disc", a:{t:{opacity:1,},f:{opacity:0},dur:500, delay:350, tfn:"eIOExp"}, dep:'hasDisc'},
{pause:2000},

// start looping section for features (variable length)
{LP:"start", cntr:"_li_", limit:"feat_li_a"},
{id:"feat_li_a", init:"hidden", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:350, tfn:"eIOExp"}},
{id:"feat_li_b", init:"hidden", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:550, tfn:"eIOExp"}},
{id:"feat_li_c", init:"hidden", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:750, tfn:"eIOExp"}},
{pause:3000},

{id:"hand", imgSrc:"images/hand.png", init:"hidden", a:{t:{opacity:1},f:{top:0,left:29,opacity:0,zIndex:9999},dur:100, delay:450, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"hand", a:{t:{top:5},f:{top:0},dur:100, delay:600, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"tap_anim", imgSrc:"images/tap.png", init:"hidden", a:{t:{opacity:1},f:{top:0,left:26,opacity:0},dur:200, delay:650, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"hand", a:{t:{top:0},f:{top:5},dur:100, delay:750, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"hand", a:{t:{opacity:0},f:{opacity:1},dur:200, delay:900, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"tap_anim",  a:{t:{opacity:0},f:{opacity:1},dur:500, delay:1000, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"feat_li_a", a:{f:{opacity:1,left:550},t:{left:2000},dur:500, delay:1150, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"feat_li_b", a:{f:{opacity:1,left:550},t:{left:2000},dur:500, delay:1350, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{id:"feat_li_c", a:{f:{opacity:1,left:550},t:{left:2000},dur:500, delay:1750, tfn:"eIOExp"}, dep:'hasPrice||(!hasPrice && !lastLoop)'},
{pause:1500},
{LP:"end"},

{id:"price_a", init:"hidden", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:350, tfn:"eIOExp"}, dep:'hasPrice'},
{id:"price_b", init:"hidden", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:550, tfn:"eIOExp"}, dep:'hasPrice'},
{id:"price_c", init:"hidden", matchwidth:"price_val", a:{t:{left:550},f:{opacity:1,left:2000},dur:500, delay:750, tfn:"eIOExp"}, dep:'hasPrice'},

{id:"zoom", imgSrc:"images/zoom1.png", init:"hidden", a:{f:{opacity:1,left:150,top:250},t:{left:800,top:-200},dur:3000, delay:0, tfn:"eOSin"}},
{id:"zoom2", imgSrc:"images/zoom2.png", init:"hidden", a:{f:{opacity:1,left:700,top:-200},t:{left:50,top:250},dur:2000, delay:1000, tfn:"eOSin"}},
];