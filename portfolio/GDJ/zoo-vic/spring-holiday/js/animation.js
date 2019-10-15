

var elems = [
    // scene 1 in
{id:"butterfly1", init:"hidden", a:{f:{rot:-120,top:10,left:900,opacity:1},t:{top:40,left:-50,opacity:1},dur:4000, delay:200, tfn:"eIQ"}},
{id:"butterfly2", init:"hidden", a:{f:{rot:20,top:40,left:-80,opacity:1},t:{top:-10,left:900,opacity:1},dur:4000, delay:300, tfn:"eIQ"}},
{id:"text1", init:"hidden", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:0, delay:0, tfn:"eIOExp"}},
{pause:500},
    // scene 1 out
{id:"text1", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:3000, tfn:"eIOExp"}},
{pause:500},
    // scene 2 in
{id:"text2", init:"hidden", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:3500, tfn:"eIOExp"}},
{id:"frog", init:"hidden", a:{f:{top:200,left:576,opacity:1},t:{top:-20,left:576,opacity:1},dur:500, delay:4000, tfn:"eIOExp"}},
{pause:2500},
    // scene 2 out
{id:"text2", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:5000, tfn:"eIOExp"}},
{id:"frog", a:{f:{top:-20,left:576,opacity:1},t:{top:200,left:576,opacity:1},dur:500, delay:4500, tfn:"eIOExp"}},
{pause:500},
    // scene 3 in
{id:"text3", init:"hidden", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:5500, tfn:"eIOExp"}},
{id:"babyroo", init:"hidden", a:{f:{top:200,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:500, delay:6000, tfn:"eIOExp"}},
{pause:2500},
    // scene 3 out
{id:"text3", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:7000, tfn:"eIOExp"}},
{id:"babyroo", a:{f:{top:0,left:0,opacity:1},t:{top:200,left:0,opacity:0},dur:500, delay:6500, tfn:"eIOExp"}},
{pause:200},
    // scene 4 in
{id:"text4", init:"hidden", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:7500, tfn:"eIOExp"}},
{id:"zebra", init:"hidden", a:{f:{top:200,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:500, delay:8000, tfn:"eIOExp"}},
{pause:2500},
    // scene 4 out
{id:"text4", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:9000, tfn:"eIOExp"}},
{id:"zebra", a:{f:{top:0,left:0,opacity:1},t:{top:200,left:0,opacity:1},dur:500, delay:8500, tfn:"eIOExp"}},
{pause:200},
    // scene 5 in
{id:"button", init:"hidden", a:{f:{top:20,left:30,opacity:0},t:{top:20,left:30,opacity:1},dur:1000, delay:9500, tfn:"eIOExp"}},
{id:"footer", init:"hidden", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:9500, tfn:"eIOExp"}}
];