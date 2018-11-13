// paths for the music notes to move along
paths.push(new AnimPath(svgPath("M166,155.1c-23.4-9-60.9-10.5-36.9-36s66-63,7.5-64.5,C78.1,53.1,18.1,71.1,27.1,26.1")));
paths.push(new AnimPath(svgPath("M164,173.1c-12.8-10.4-40.7-9.5-36.9-36c3.9-27.9,41.8-55.2,7.5-64.5,C78.1,57.2,65,70.5,74,25.5")));
paths.push(new AnimPath(svgPath("M174,150c-22-6.5,18-46.5-7.5-56.5c-26.2-10.3-53.6,34.7-85,18,c-33-17.5,36-40.5-42-65.5")));
paths.push(new AnimPath(svgPath("")));
paths.push(new AnimPath(svgPath("")));
paths.push(new AnimPath(svgPath("")));

var elems = [
{id:"zoo-twilights", imgSrc:"images/zoo-twilights.png", init:'hidden'},	
{id:"bg", imgSrc:"images/bg.jpg", init:'hidden', a:{t:{opacity:1,left:0,top:1, width:298, height:598}}},	
{id:"gradient-up1",a:{f:{left:0,top:500,width:298,height:100},t:{left:0,top:500,width:298,height:100},dur:0, delay:0}},
{id:"lineup",imgSrc:"images/lineup.png", init:'hidden'},	
{id:"bgtop",imgSrc:"images/bgtop.jpg", init:'hidden'},	
{id:"zoo-twilights",a:{f:{rot:-90,opacity:1,left:0,top:-20},t:{rot:0,opacity:1,left:0,top:-20},dur:1000, delay:300}},	

//a:{f:{rot:-90},t:{rot:0},dur:200, delay:200}



/* Positions for MREC
{id:"bandicoot", imgSrc:"images/base.png", a:{t:{opacity:1,left:0,top:0, width:298, height:246}}},	
{id:"k1", imgSrc:"images/k1.png", init:'hidden',a:{t:{opacity:0,left:84,top:114, width:119, height:111}}},	
{id:"k2", imgSrc:"images/k2.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
{id:"k3", imgSrc:"images/k3.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
{id:"k4", imgSrc:"images/k4.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
{id:"k5", imgSrc:"images/k5.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
{id:"k6", imgSrc:"images/k6.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
{id:"k7", imgSrc:"images/k7.png", init:'hidden',a:{t:{opacity:0,left:84,top:115, width:119, height:111}}},	
*/

{id:"bandicoot", imgSrc:"images/base.png", a:{t:{opacity:1,left:0,top:122, width:298, height:246}}},	
{id:"k1", imgSrc:"images/k1.png", init:'hidden',a:{t:{opacity:0,left:84,top:236, width:119, height:111}}},	
{id:"k2", imgSrc:"images/k2.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"k3", imgSrc:"images/k3.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"k4", imgSrc:"images/k4.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"k5", imgSrc:"images/k5.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"k6", imgSrc:"images/k6.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"k7", imgSrc:"images/k7.png", init:'hidden',a:{t:{opacity:0,left:84,top:237, width:119, height:111}}},	
{id:"n1", imgSrc:"images/n1.png", init:'hidden'},	
{id:"n2", imgSrc:"images/n1.png", init:'hidden'},	
{id:"n3", imgSrc:"images/n1.png", init:'hidden'},	
{id:"n4", imgSrc:"images/n1.png", init:'hidden'},	
{id:"n5", imgSrc:"images/n1.png", init:'hidden'},	

// Bandicoot Anim 1
{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1300}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1300}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1500}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1500}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1700}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1700}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1800}},	

{id:"n1", a:{t:{opacity:0.7},delay:1100 }},	
{id:"n1", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1100}},	
{id:"n1", a:{path:0,dur:1900, delay:1100, tfn:"linear"}},	
{id:"n1", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1150, tfn:"eIOExp"}},	

{id:"n2", a:{t:{opacity:0.7},delay:1400 }},	
{id:"n2", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1400}},	
{id:"n2", a:{path:1,dur:1900, delay:1400, tfn:"linear"}},	
{id:"n2", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1450, tfn:"eIOExp"}},	

{id:"n3", a:{t:{opacity:0.7},delay:1700 }},	
{id:"n3", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1700}},	
{id:"n3", a:{path:2,dur:1900, delay:1700, tfn:"linear"}},	
{id:"n3", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1750, tfn:"eIOExp"}},	

{id:"n4", a:{t:{opacity:0.7},delay:2000 }},	
{id:"n4", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2000}},	
{id:"n4", a:{path:0,dur:1900, delay:2000, tfn:"linear"}},	
{id:"n4", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2050, tfn:"eIOExp"}},	

{id:"n5", a:{t:{opacity:0.7},delay:2300 }},	
{id:"n5", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2300}},	
{id:"n5", a:{path:1,dur:1900, delay:2300, tfn:"linear"}},	
{id:"n5", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2350, tfn:"eIOExp"}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2100}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2300}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2300}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2700}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2700}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2800}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2900}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3000}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3000}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3100}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3200}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3200}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3300}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3300}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3400}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3400}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3600}},	

{id:"text1",imgSrc:"images/text1.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:1500}},	
{id:"text2",imgSrc:"images/text2.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:2000}},	
{id:"text1",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:3000}},	
{id:"text2",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:3000}},	

{pause2:0},

{id:"text3",imgSrc:"images/text3.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:0}},	
{id:"text4",imgSrc:"images/text4.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:500}},	
{id:"text5",imgSrc:"images/text5.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:1000}},	
{id:"text6",imgSrc:"images/text6.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:1000, delay:1500}},	

// Bandicoot Anim 2
{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1300}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1300}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1500}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1500}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1700}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1700}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1800}},	

{id:"n1", a:{t:{opacity:0.7},delay:1100 }},	
{id:"n1", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1100}},	
{id:"n1", a:{path:0,dur:1900, delay:1100, tfn:"linear"}},	
{id:"n1", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1150, tfn:"eIOExp"}},	

{id:"n2", a:{t:{opacity:0.7},delay:1400 }},	
{id:"n2", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1400}},	
{id:"n2", a:{path:1,dur:1900, delay:1400, tfn:"linear"}},	
{id:"n2", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1450, tfn:"eIOExp"}},	

{id:"n3", a:{t:{opacity:0.7},delay:1700 }},	
{id:"n3", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1700}},	
{id:"n3", a:{path:2,dur:1900, delay:1700, tfn:"linear"}},	
{id:"n3", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1750, tfn:"eIOExp"}},	

{id:"n4", a:{t:{opacity:0.7},delay:2000 }},	
{id:"n4", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2000}},	
{id:"n4", a:{path:0,dur:1900, delay:2000, tfn:"linear"}},	
{id:"n4", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2050, tfn:"eIOExp"}},	

{id:"n5", a:{t:{opacity:0.7},delay:2300 }},	
{id:"n5", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2300}},	
{id:"n5", a:{path:1,dur:1900, delay:2300, tfn:"linear"}},	
{id:"n5", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2350, tfn:"eIOExp"}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2100}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2300}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2300}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2700}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2700}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2800}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2900}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3000}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3000}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3100}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3200}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3200}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3300}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3300}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3400}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3400}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3600}},	

{pause2:0},
{id:"zoo-twilights",a:{f:{left:0,top:-20},t:{left:0,top:-60},dur:500, delay:300}},	
{id:"bandicoot", imgSrc:"images/base.png", a:{f:{left:0,top:122},t:{left:0,top:80},dur:500, delay:400}},	

{id:"k1", imgSrc:"images/k1.png", init:'hidden',a:{t:{opacity:0,left:84,top:194, width:119, height:111}}},	
{id:"k2", imgSrc:"images/k2.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	
{id:"k3", imgSrc:"images/k3.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	
{id:"k4", imgSrc:"images/k4.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	
{id:"k5", imgSrc:"images/k5.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	
{id:"k6", imgSrc:"images/k6.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	
{id:"k7", imgSrc:"images/k7.png", init:'hidden',a:{t:{opacity:0,left:84,top:195, width:119, height:111}}},	

{id:"text3",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:500}},	
{id:"text4",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:500}},	
{id:"text5",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:500}},	
{id:"text6",a:{f:{opacity:1,left:0,top:0},t:{opacity:0,left:0,top:0},dur:500, delay:500}},

{pause2:0},	

// Bandicoot Anim 3
{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1300}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1300}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1500}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1500}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1700}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1700}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1800}},	

{id:"n1", a:{t:{opacity:0.7},delay:1100 }},	
{id:"n1", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1100}},	
{id:"n1", a:{path:0,dur:1900, delay:1100, tfn:"linear"}},	
{id:"n1", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1150, tfn:"eIOExp"}},	

{id:"n2", a:{t:{opacity:0.7},delay:1400 }},	
{id:"n2", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1400}},	
{id:"n2", a:{path:1,dur:1900, delay:1400, tfn:"linear"}},	
{id:"n2", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1450, tfn:"eIOExp"}},	

{id:"n3", a:{t:{opacity:0.7},delay:1700 }},	
{id:"n3", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1700}},	
{id:"n3", a:{path:2,dur:1900, delay:1700, tfn:"linear"}},	
{id:"n3", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1750, tfn:"eIOExp"}},	

{id:"n4", a:{t:{opacity:0.7},delay:2000 }},	
{id:"n4", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2000}},	
{id:"n4", a:{path:0,dur:1900, delay:2000, tfn:"linear"}},	
{id:"n4", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2050, tfn:"eIOExp"}},	

{id:"n5", a:{t:{opacity:0.7},delay:2300 }},	
{id:"n5", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2300}},	
{id:"n5", a:{path:1,dur:1900, delay:2300, tfn:"linear"}},	
{id:"n5", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2350, tfn:"eIOExp"}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2100}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2300}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2300}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2700}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2700}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2800}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2900}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3000}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3000}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3100}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3200}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3200}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3300}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3300}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3400}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3400}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3600}},	

{id:"text7",imgSrc:"images/text7.png", init:'hidden',a:{f:{opacity:0,left:0,top:70},t:{opacity:1,left:0,top:70},dur:500, delay:0}},	

{id:"lineup",a:{f:{opacity:0,left:0,top:400},t:{opacity:1,left:0,top:180},dur:5000, delay:-2500}},	
{id:"lineup",a:{f:{left:0,top:180},t:{left:0,top:-100},dur:5000, delay:2500}},

{id:"gradient-down",a:{f:{left:0,top:387,width:298,height:100},t:{left:0,top:387,width:298,height:100},dur:0, delay:3000}},	
{id:"gradient-up2",a:{f:{left:0,top:520,width:298,height:100},t:{left:0,top:520,width:298,height:100},dur:0, delay:3000}},	
{id:"bgtop",a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:0, delay:3000}},	

{pause2:50},


{id:"logos",imgSrc:"images/logos.png", init:'hidden',a:{f:{opacity:0,left:0,top:0},t:{opacity:1,left:0,top:0},dur:500, delay:0}},	
{id:"stamp",imgSrc:"images/stamp.png", init:'hidden',a:{f:{opacity:0,left:0,top:76},t:{opacity:1,left:0,top:76},dur:300, delay:0}},	
{id:"buy-button",imgSrc:"images/buy-button.png", init:'hidden',a:{f:{opacity:0,left:0,top:76},t:{opacity:1,left:0,top:76},dur:1000, delay:0}},	


// Bandicoot Anim 4
{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1300}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1300}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1500}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1500}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1700}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1700}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1800}},	

{id:"n1", a:{t:{opacity:0.7},delay:1100 }},	
{id:"n1", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1100}},	
{id:"n1", a:{path:0,dur:1900, delay:1100, tfn:"linear"}},	
{id:"n1", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1150, tfn:"eIOExp"}},	

{id:"n2", a:{t:{opacity:0.7},delay:1400 }},	
{id:"n2", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1400}},	
{id:"n2", a:{path:1,dur:1900, delay:1400, tfn:"linear"}},	
{id:"n2", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1450, tfn:"eIOExp"}},	

{id:"n3", a:{t:{opacity:0.7},delay:1700 }},	
{id:"n3", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1700}},	
{id:"n3", a:{path:2,dur:1900, delay:1700, tfn:"linear"}},	
{id:"n3", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1750, tfn:"eIOExp"}},	

{id:"n4", a:{t:{opacity:0.7},delay:2000 }},	
{id:"n4", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2000}},	
{id:"n4", a:{path:0,dur:1900, delay:2000, tfn:"linear"}},	
{id:"n4", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2050, tfn:"eIOExp"}},	

{id:"n5", a:{t:{opacity:0.7},delay:2300 }},	
{id:"n5", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2300}},	
{id:"n5", a:{path:1,dur:1900, delay:2300, tfn:"linear"}},	
{id:"n5", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2350, tfn:"eIOExp"}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2100}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2300}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2300}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2700}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2700}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2800}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2900}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3000}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3000}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3100}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3200}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3200}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3300}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3300}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3400}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3400}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3600}},

{id:"buy-button",a:{f:{opacity:1,left:0,top:76},t:{opacity:0,left:0,top:76},dur:1000, delay:4000}},	
{id:"view-button",imgSrc:"images/view-button.png", init:'hidden',a:{f:{opacity:0,left:0,top:76},t:{opacity:1,left:0,top:76},dur:1500, delay:5000}},	

{pause2:50},

// Bandicoot Anim 5
{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1300}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1300}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1500}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1500}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1700}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:1700}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:1800}},	

{id:"n1", a:{t:{opacity:0.7},delay:1100 }},	
{id:"n1", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1100}},	
{id:"n1", a:{path:0,dur:1900, delay:1100, tfn:"linear"}},	
{id:"n1", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1150, tfn:"eIOExp"}},	

{id:"n2", a:{t:{opacity:0.7},delay:1400 }},	
{id:"n2", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1400}},	
{id:"n2", a:{path:1,dur:1900, delay:1400, tfn:"linear"}},	
{id:"n2", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1450, tfn:"eIOExp"}},	

{id:"n3", a:{t:{opacity:0.7},delay:1700 }},	
{id:"n3", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:1700}},	
{id:"n3", a:{path:2,dur:1900, delay:1700, tfn:"linear"}},	
{id:"n3", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:1750, tfn:"eIOExp"}},	

{id:"n4", a:{t:{opacity:0.7},delay:2000 }},	
{id:"n4", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2000}},	
{id:"n4", a:{path:0,dur:1900, delay:2000, tfn:"linear"}},	
{id:"n4", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2050, tfn:"eIOExp"}},	

{id:"n5", a:{t:{opacity:0.7},delay:2300 }},	
{id:"n5", a:{f:{rot:-40}, t:{rot:60},dur:1700, delay:2300}},	
{id:"n5", a:{path:1,dur:1900, delay:2300, tfn:"linear"}},	
{id:"n5", a:{f:{opacity:0.7},t:{opacity:0},dur:1900, delay:2350, tfn:"eIOExp"}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2100}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2200}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2200}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2300}},	

{id:"k7", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2300}},	
{id:"k7", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2400}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2400}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2600}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2600}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2700}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2700}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:2800}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:2900}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3000}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3000}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3100}},	

{id:"k1", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3100}},	
{id:"k1", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3200}},	

{id:"k4", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3200}},	
{id:"k4", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3300}},	

{id:"k5", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3300}},	
{id:"k5", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3400}},	

{id:"k2", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3400}},	
{id:"k2", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3500}},	

{id:"k3", a:{t:{opacity:1},f:{opacity:1},dur:100, delay:3500}},	
{id:"k3", a:{t:{opacity:0},f:{opacity:0},dur:200, delay:3600}},

];