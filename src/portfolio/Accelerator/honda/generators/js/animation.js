var elems = [
    // scene 1
{id:"background", init:"hidden"},
{id:"product", init:"hidden"},
{id:"background2", init:"hidden"},
{id:"product2", init:"hidden"},


{id:"panel_top", imgSrc:"images/panel_top.jpg", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:0, delay:0, tfn:"eIOExp"}},
{id:"panel_bottom", init:"hidden", imgSrc:"images/panel_bottom.jpg", a:{f:{top:0,top:459,opacity:1},t:{top:0,top:459,opacity:1},dur:0, delay:0, tfn:"eIOExp"}},
{id:"background", imgSrc:"images/background.jpg", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:0, delay:0, tfn:"eIOExp"}},

{id:"text1", init:"hidden", imgSrc:"images/text1.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:0, tfn:"eIOExp"}},
{id:"text1", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:2000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:0,left:0,opacity:1},t:{top:-265,left:0,opacity:1},dur:1000, delay:2000, tfn:"eIOExp"}},
{id:"text2", init:"hidden", imgSrc:"images/text2.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:2500, tfn:"eIOExp"}},
{id:"text2", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:4000, tfn:"eIOExp"}},
{id:"text3", init:"hidden", imgSrc:"images/text3.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:5000, tfn:"eIOExp"}},
{id:"product", init:"hidden", imgSrc:"images/product.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:5000, tfn:"eIOExp"}},
{id:"text3", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:6500, tfn:"eIOExp"}},
{id:"text4", init:"hidden", imgSrc:"images/text4.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:7500, tfn:"eIOExp"}},
{id:"text4", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:9000, tfn:"eIOExp"}},
{id:"product", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:9000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:-265,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:1000, delay:9000, tfn:"eIOExp"}},



// LOOP 2

{id:"panel_top", imgSrc:"images/panel_top.jpg", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:0, delay:10000, tfn:"eIOExp"}},
{id:"panel_bottom", init:"hidden", imgSrc:"images/panel_bottom.jpg", a:{f:{top:0,top:459,opacity:1},t:{top:0,top:459,opacity:1},dur:0, delay:10000, tfn:"eIOExp"}},
{id:"background", imgSrc:"images/background.jpg", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:0, delay:10000, tfn:"eIOExp"}},

{id:"text1", init:"hidden", imgSrc:"images/text1.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:10000, tfn:"eIOExp"}},
{id:"text1", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:12000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:0,left:0,opacity:1},t:{top:-265,left:0,opacity:1},dur:1000, delay:12000, tfn:"eIOExp"}},
{id:"text2", init:"hidden", imgSrc:"images/text2.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:12500, tfn:"eIOExp"}},
{id:"text2", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:14000, tfn:"eIOExp"}},
{id:"text3", init:"hidden", imgSrc:"images/text3.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:15000, tfn:"eIOExp"}},
{id:"product", init:"hidden", imgSrc:"images/product.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:15000, tfn:"eIOExp"}},
{id:"text3", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:16500, tfn:"eIOExp"}},
{id:"text4", init:"hidden", imgSrc:"images/text4.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:17500, tfn:"eIOExp"}},
{id:"text4", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:19000, tfn:"eIOExp"}},
{id:"product", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:19000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:-265,left:0,opacity:1},t:{top:0,left:0,opacity:1},dur:1000, delay:19000, tfn:"eIOExp"}},

//{pause:200000000},

// LOOP 3


{id:"text1", init:"hidden", imgSrc:"images/text1.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:20000, tfn:"eIOExp"}},
{id:"text1", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:22000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:0,left:0,opacity:1},t:{top:-265,left:0,opacity:1},dur:1000, delay:22000, tfn:"eIOExp"}},
{id:"text2", init:"hidden", imgSrc:"images/text2.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:22500, tfn:"eIOExp"}},
{id:"text2", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:24000, tfn:"eIOExp"}},
{id:"text3", init:"hidden", imgSrc:"images/text3.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:25000, tfn:"eIOExp"}},
{id:"product", init:"hidden", imgSrc:"images/product.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:25000, tfn:"eIOExp"}},
{id:"text3", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:26500, tfn:"eIOExp"}},
{id:"text4", init:"hidden", imgSrc:"images/text4.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:500, delay:27500, tfn:"eIOExp"}},
{id:"text4", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:29000, tfn:"eIOExp"}},
//{id:"product", a:{f:{top:0,left:0,opacity:1},t:{top:0,left:0,opacity:0},dur:1000, delay:29000, tfn:"eIOExp"}},
{id:"panel_top", a:{f:{top:-265,left:0,opacity:1},t:{top:-500,left:0,opacity:1},dur:1000, delay:29000, tfn:"eIOExp"}},
{id:"button", init:"hidden", imgSrc:"images/button.png", a:{f:{top:0,left:0,opacity:0},t:{top:0,left:0,opacity:1},dur:1000, delay:29000, tfn:"eIOExp"}},


];