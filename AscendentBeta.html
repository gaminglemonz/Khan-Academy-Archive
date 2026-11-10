function program(){
 
// SETUP \\
 	
// GENERAL
noStroke();
size(window.innerWidth, window.innerHeight);

// CANVAS
const sketch = document.querySelector('.sketch');
const ctx = sketch.getContext('2d');
ctx.imageSmoothingEnabled = false;

// MATTER.JS
const { 
	Engine, 
	Events, 
	Bodies, 
	Query, 
	Body, 
	Collision, 
	Composite, 
	World
} = Matter;
const engine = Engine.create();
engine.gravity.y = 1;
engine.gravity.scale = 0.003;

const categories = {
	player: 0x0001,
	npc: 0x0002,
	enemy: 0x0004,
	bound: 0x0008,
	gate: 0x0010,
};

// CONSTANTS
const ENTITY_SIZE = {
	w: 60,
	h: 200,
};
const INTERACT_MSG = "E to Interact";

// CUSTOM FUNCTIONS \\
const Funcs = (function(){
	const _Funcs = {
		dist: (a, b) => Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)),
		radToDeg: (angle) => angle * (180 / Math.PI),
		degToRad: (angle) => angle * (Math.PI / 180),
		lerp: (a, b, t) => a + (b - a) * t,
		weightedRandomness: (items, weights) => {
			const arr = [];
			items.forEach((item, index) => {
				for (let i = 0; i < weights[index]; i ++){
					arr.push(item);
				}
			})
			
			return arr;
		},
		onCanvas: (obj, cam) => { 
			const sz = (obj.r ? obj.r : Math.max(obj.w, obj.h)) + 60; 
			return obj.x + sz > cam.x - width / (2*cam.zoom) && obj.x < cam.x + width / (2*cam.zoom) + sz&&
				   obj.y + sz > cam.y - height / (2*cam.zoom) && obj.y < cam.y + height / (2*cam.zoom) + sz 
		},
	};
	return _Funcs;
})();

const Display = (function(){
	const _Display = {
		text: (msg, x, y, size, options={}) => {
			options = {
				title: false, 
				align: 'center', 
				lineSpacing: 24, 
				letterSpacing: 1,
				format: '',
				font: "Silkscreen",
				...options
			};
			// Provides a way to do newline text cause it's not... there some for reason?
			ctx.letterSpacing = `${options.letterSpacing}px`
			ctx.textAlign = options.align;
			ctx.strokeStyle = 'red'
			const lines = msg.split("\n");
			for (let i = 0; i < lines.length; i ++){
				const isSmall = lines[i].startsWith('-#');
				const line = isSmall ? lines[i].split("-#")[1] : lines[i];
				ctx.font = `${options.format} ${isSmall ? size / 1.2 : size}px ${options.font}`;
				ctx.fillText(line, x, y + i * options.lineSpacing, width);
			}
		},
		capitalize: (txt) => txt[0].toUpperCase() + txt.slice(1),
		pixelArt: (bitmap, palette, pixelSize, x=0, y=0) => {
		    for (let i = 0; i < bitmap.length; i ++){
		        for (let j = 0; j < bitmap[i].length; j ++){
		            if (bitmap[i][j] !== ' '){
		            	pushMatrix();
		            	translate(x, y)
		                fill(palette[bitmap[i][j]]);
		                rect(Math.floor(j * pixelSize), Math.floor(i * pixelSize), pixelSize, pixelSize);
		                popMatrix();
		            }
		        }
		    }
		},
	};
	return _Display;
})();

// IMAGES \\
const imgs = {
  cutscenes: {
    forest_above: function(){
      function tree(x, y, sz) {
          noStroke();
          pushMatrix();
          translate(x, y);
          scale(sz);
          translate(-25, -25);
          fill(87, 50, 23);
          beginShape();
          vertex(28, 26);
          vertex(25, 84);
          bezierVertex(28, 89, 32, 89, 39, 85);
          vertex(36, 26);
          endShape();
          fill(39, 105, 10);
          beginShape();
          vertex(32, 4);
          bezierVertex(26, 18, 25, 19, 21, 22);
          bezierVertex(18, 25, 18, 25, 24, 29);
          bezierVertex(8, 43, 8, 43, 14, 47);
          bezierVertex(4, 67, 4, 67, 8, 71);
          bezierVertex(17, 77, 48, 78, 57, 70);
          bezierVertex(63, 65, 63, 65, 50, 49);
          bezierVertex(58, 43, 58, 43, 40, 30);
          bezierVertex(48, 26, 48, 26, 45, 21);
          bezierVertex(43, 19, 39, 11, 33, 3);
          endShape();
          fill(9, 79, 3);
          beginShape();
          vertex(31, 12);
          bezierVertex(28, 28, 28, 28, 40, 23);
          bezierVertex(34, 30, 29, 32, 29, 33);
          bezierVertex(27, 45, 27, 45, 50, 43);
          bezierVertex(48, 50, 34, 54, 31, 55);
          bezierVertex(28, 72, 28, 72, 56, 64);
          bezierVertex(54, 78, 17, 75, 11, 71);
          bezierVertex(3, 65, 14, 54, 17, 48);
          bezierVertex(11, 43, 11, 43, 26, 28);
          bezierVertex(21, 24, 21, 24, 30, 14);
          endShape();
          popMatrix();
      }
      var trees = [];
      for(var x = 0; x <= width; x += 45){
          for(var y = 0; y <= width; y += 45){
              if(noise(x/100, y/100) * 100 < 51){
                  trees.push({x:x + random(-20, 20),y:y + random(-20, 20)});
              }
          }
      }
      trees.sort(function(a, b){
          return a.y - b.y;
      });
      background(106, 143, 94);
      for(var i = 0; i < trees.length; i ++){
          var t = trees[i];
          tree(t.x, t.y, random(0.7, 1));
      }
      return get();
    },
    clouds_above: function(){
      noStroke();
      fill(255, 250, 242);
      beginShape();
      vertex(0, 0);
      vertex(326,0);
      bezierVertex(354,29,345,60,344,77);
      bezierVertex(356,77,361,77,368,89);
      bezierVertex(390,66,429,78,428,110);
      bezierVertex(454,126,463,157,459,170);
      bezierVertex(455,192,429,206,415,200);
      bezierVertex(400,221,350,222,330,208);
      bezierVertex(328,243,293,266,247,286);
      bezierVertex(273,370,229,419,182,429);
      bezierVertex(125,439,73,407,48,324);
      bezierVertex(34,353,18,353,1,349);
      endShape();
      beginShape();
      vertex(3,600);
      bezierVertex(3,569,11,561,31,557);
      bezierVertex(45,493,146,493,159,530);
      bezierVertex(163,470,206,460,217,460);
      bezierVertex(221,372,334,349,371,439);
      bezierVertex(382,479,369,497,356,514);
      bezierVertex(368,554,368,575,362,598);
      endShape();
      beginShape();
      vertex(656,0);
      bezierVertex(632,9,618,33,613,69);
      bezierVertex(581,66,570,78,565,97);
      bezierVertex(540,96,529,115,529,129);
      bezierVertex(518,140,514,155,514,164);
      bezierVertex(494,159,476,159,470,170);
      bezierVertex(462,170,457,175,462,183);
      bezierVertex(424,223,440,249,469,259);
      bezierVertex(461,309,508,328,531,298);
      bezierVertex(554,396,676,403,695,381);
      bezierVertex(719,419,784,431,809,409);
      bezierVertex(836,431,846,428,854,423);
      bezierVertex(852,451,891,487,914,490);
      vertex(916, 0);
      endShape();
      fill(232, 231, 214);
      beginShape();
      vertex(0, 0);
      vertex(82,0);
      bezierVertex(89,9,81,27,72,42);
      bezierVertex(105,37,124,43,142,72);
      bezierVertex(154,71,166,57,169,45);
      bezierVertex(178,57,198,60,210,59);
      bezierVertex(210,34,244,22,265,33);
      bezierVertex(290,49,303,75,304,90);
      bezierVertex(306,116,317,126,332,132);
      bezierVertex(319,144,311,165,320,195);
      bezierVertex(298,166,271,154,252,154);
      bezierVertex(247,146,232,126,210,123);
      bezierVertex(217,137,207,148,201,151);
      bezierVertex(202,169,214,177,228,174);
      bezierVertex(231,185,253,183,255,180);
      bezierVertex(259,169,279,172,286,184);
      bezierVertex(307,188,317,203,315,226);
      bezierVertex(310,252,275,276,244,279);
      bezierVertex(256,329,255,366,235,392);
      bezierVertex(194,444,122,429,101,408);
      bezierVertex(58,376,55,336,57,317);
      bezierVertex(83,359,130,366,165,340);
      bezierVertex(182,323,181,298,177,285);
      bezierVertex(206,274,219,252,214,233);
      bezierVertex(206,207,176,212,156,232);
      bezierVertex(151,239,146,249,145,254);
      bezierVertex(106,241,71,278,66,294);
      bezierVertex(62,301,61,318,69,333);
      vertex(59,345);
      bezierVertex(50,333,48,322,47,313);
      bezierVertex(41,322,13,325,1,322);
      endShape();
      beginShape();
      vertex(702,2);
      bezierVertex(641,37,653,107,673,117);
      bezierVertex(678,120,690,117,691,107);
      bezierVertex(705,115,729,104,728,72);
      bezierVertex(735,91,753,93,764,85);
      bezierVertex(777,90,782,79,778,61);
      bezierVertex(777,46,784,43,795,40);
      bezierVertex(807,13,841,10,829,50);
      bezierVertex(833,67,830,84,821,96);
      bezierVertex(851,95,862,101,862,105);
      bezierVertex(883,101,904,121,891,154);
      bezierVertex(891,161,899,157,911,144);
      vertex(914,489);
      bezierVertex(900,491,856,449,856,422);
      bezierVertex(847,431,822,428,807,408);
      bezierVertex(868,417,893,362,876,332);
      bezierVertex(864,300,848,300,822,325);
      bezierVertex(801,345,787,382,811,406);
      bezierVertex(781,433,713,420,692,385);
      bezierVertex(643,412,521,357,530,301);
      bezierVertex(502,329,462,300,469,260);
      bezierVertex(412,238,455,185,461,183);
      bezierVertex(461,173,463,171,471,172);
      bezierVertex(479,155,497,158,515,163);
      bezierVertex(515,136,526,128,528,128);
      bezierVertex(528,92,562,95,566,96);
      bezierVertex(567,66,589,62,610,67);
      bezierVertex(612,23,640,5,650,0);
      endShape();
      beginShape();
      vertex(69,600);
      bezierVertex(47,577,85,540,100,549);
      bezierVertex(116,556,124,570,112,597);
      vertex(217,598);
      bezierVertex(218,555,260,551,290,557);
      bezierVertex(288,532,303,519,322,517);
      bezierVertex(330,517,338,539,321,560);
      bezierVertex(341,575,347,587,349,598);
      vertex(361,599);
      bezierVertex(373,543,366,524,356,513);
      bezierVertex(400,469,363,403,327,388);
      bezierVertex(268,359,211,411,217,459);
      bezierVertex(174,474,169,489,159,529);
      bezierVertex(99,480,22,501,27,559);
      bezierVertex(13,561,4,568,2,599);
      endShape();
      fill(171, 169, 147);
      beginShape();
      vertex(0, 0);
      vertex(57,0);
      bezierVertex(64,25,56,56,2,57);
      endShape();
      beginShape();
      vertex(2,94);
      bezierVertex(18,105,42,94,52,73);
      bezierVertex(61,84,93,93,116,84);
      bezierVertex(116,115,167,130,183,128);
      bezierVertex(181,162,219,190,251,172);
      bezierVertex(262,183,280,198,298,195);
      bezierVertex(311,216,311,232,285,244);
      bezierVertex(289,274,276,295,261,301);
      bezierVertex(258,357,210,415,170,418);
      bezierVertex(96,420,70,391,60,346);
      bezierVertex(52,314,67,287,69,285);
      bezierVertex(58,324,86,348,116,352);
      bezierVertex(167,351,180,335,180,297);
      bezierVertex(199,297,214,278,218,259);
      bezierVertex(249,248,219,203,185,219);
      bezierVertex(144,206,130,249,130,252);
      bezierVertex(78,252,65,293,68,327);
      bezierVertex(56,307,64,285,70,279);
      bezierVertex(46,317,29,320,1,313);
      endShape();
      beginShape();
      vertex(652,102);
      bezierVertex(680,143,726,137,731,98);
      bezierVertex(774,106,798,88,815,64);
      bezierVertex(798,104,860,129,884,116);
      bezierVertex(874,140,853,159,845,170);
      bezierVertex(824,180,793,181,780,181);
      bezierVertex(781,190,780,197,775,201);
      bezierVertex(805,203,808,234,813,239);
      bezierVertex(822,213,839,206,848,205);
      bezierVertex(844,181,844,178,844,169);
      vertex(883,116);
      bezierVertex(879,153,886,160,909,163);
      vertex(913,274);
      bezierVertex(900,269,883,286,880,300);
      bezierVertex(857,298,819,318,816,359);
      bezierVertex(806,358,797,362,785,373);
      bezierVertex(800,348,800,329,788,311);
      bezierVertex(783,335,778,338,760,342);
      bezierVertex(791,295,762,251,708,260);
      bezierVertex(664,249,654,291,659,304);
      bezierVertex(632,301,624,326,640,340);
      bezierVertex(657,350,660,339,661,330);
      bezierVertex(669,337,678,336,683,328);
      bezierVertex(687,335,693,335,702,335);
      bezierVertex(699,340,700,347,708,353);
      bezierVertex(687,359,691,379,700,392);
      bezierVertex(685,399,642,388,636,368);
      bezierVertex(586,368,570,348,565,318);
      bezierVertex(527,325,520,311,520,290);
      bezierVertex(509,304,501,303,494,288);
      bezierVertex(481,302,477,300,472,295);
      bezierVertex(463,302,441,299,441,284);
      bezierVertex(435,269,456,261,462,260);
      bezierVertex(460,241,469,233,482,257);
      bezierVertex(492,245,494,244,499,242);
      bezierVertex(492,215,500,210,511,210);
      bezierVertex(521,213,523,222,527,233);
      bezierVertex(536,233,556,208,549,186);
      bezierVertex(590,186,590,159,587,140);
      bezierVertex(604,127,606,116,602,105);
      bezierVertex(593,88,600,75,605,71);
      bezierVertex(621,61,655,62,653,101);
      endShape();
        return get();
    },
    player_dive_0: function(){
      background(0, 0);
      noStroke();
      fill(89, 89, 89);
      beginShape();
      vertex(184,191);
      bezierVertex(159,192,160,204,173,230);
      bezierVertex(186,255,186,255,193,257);
      bezierVertex(206,264,209,264,211,264);
      bezierVertex(239,287,274,285,280,255);
      bezierVertex(281,247,276,233,263,220);
      bezierVertex(233,193,214,188,181,191);
      endShape();
      	fill(179, 130, 104);
      beginShape();
      vertex(129,105);
      bezierVertex(132,97,132,97,140,94);
      bezierVertex(146,93,146,93,152,97);
      bezierVertex(157,100,178,84,213,97);
      bezierVertex(232,95,232,95,259,104);
      bezierVertex(264,104,265,100,265,94);
      bezierVertex(258,75,266,62,275,58);
      bezierVertex(284,54,297,55,300,66);
      bezierVertex(305,74,305,89,302,94);
      bezierVertex(301,105,297,108,294,108);
      bezierVertex(320,110,336,106,341,105);
      bezierVertex(350,103,379,107,390,107);
      bezierVertex(406,102,422,92,424,95);
      bezierVertex(428,100,420,100,426,102);
      bezierVertex(426,103,424,107,420,107);
      bezierVertex(423,112,418,114,415,111);
      bezierVertex(415,117,408,115,405,115);
      bezierVertex(403,115,403,115,398,120);
      bezierVertex(398,123,387,120,380,123);
      bezierVertex(358,124,349,133,329,127);
      bezierVertex(313,128,304,135,300,142);
      bezierVertex(292,155,292,155,286,162);
      bezierVertex(272,181,269,207,274,239);
      bezierVertex(276,287,269,300,255,298);
      bezierVertex(247,301,236,301,227,296);
      bezierVertex(221,284,228,269,235,264);
      bezierVertex(231,238,231,238,224,235);
      bezierVertex(212,236,194,260,155,276);
      bezierVertex(144,279,144,279,134,273);
      bezierVertex(121,264,95,267,82,268);
      bezierVertex(67,274,51,299,44,288);
      bezierVertex(39,275,50,260,69,250);
      bezierVertex(82,241,98,225,100,229);
      bezierVertex(107,232,107,232,107,238);
      bezierVertex(106,243,119,233,140,237);
      bezierVertex(154,241,156,241,161,230);
      bezierVertex(176,209,194,198,209,187);
      bezierVertex(217,181,227,167,235,122);
      bezierVertex(230,114,214,117,200,113);
      bezierVertex(188,110,181,116,159,110);
      bezierVertex(149,116,143,116,148,109);
      bezierVertex(145,105,145,105,142,108);
      bezierVertex(136,108,130,108,130,106);
      endShape();
      	fill(222, 197, 166);
      beginShape();
      vertex(132,98);
      bezierVertex(146,93,146,93,154,97);
      bezierVertex(176,90,181,90,213,97);
      bezierVertex(232,97,232,97,242,102);
      bezierVertex(229,101,207,107,194,97);
      bezierVertex(178,94,166,99,152,104);
      bezierVertex(146,97,146,97,133,98);
      endShape();
      beginShape();
      vertex(369,108);
      bezierVertex(359,113,359,113,331,110);
      bezierVertex(313,111,300,117,294,117);
      bezierVertex(279,133,279,132,268,123);
      bezierVertex(255,136,255,136,261,142);
      bezierVertex(273,137,273,137,279,161);
      bezierVertex(273,169,273,169,274,188);
      bezierVertex(260,188,232,172,232,162);
      bezierVertex(232,133,232,133,239,119);
      bezierVertex(244,118,253,116,260,116);
      bezierVertex(250,130,250,130,266,114);
      bezierVertex(260,132,260,132,272,112);
      bezierVertex(284,107,284,107,292,107);
      bezierVertex(322,109,338,104,349,104);
      bezierVertex(359,105,368,107,368,107);
      endShape();
      beginShape();
      vertex(87,253);
      bezierVertex(99,251,102,258,110,254);
      bezierVertex(126,249,148,255,155,258);
      bezierVertex(161,260,165,257,167,254);
      bezierVertex(161,251,159,238,144,238);
      bezierVertex(131,236,119,237,109,245);
      bezierVertex(105,240,105,240,88,252);
      endShape();
      beginShape();
      vertex(227,280);
      bezierVertex(237,265,237,265,244,263);
      bezierVertex(244,241,244,240,260,235);
      bezierVertex(272,240,272,240,273,259);
      bezierVertex(266,274,266,274,259,284);
      bezierVertex(249,282,232,289,228,295);
      endShape();
      	fill(71, 71, 71);
      beginShape();
      vertex(176,212);
      bezierVertex(194,197,202,188,224,188);
      bezierVertex(256,194,282,204,275,244);
      bezierVertex(263,232,252,227,235,238);
      bezierVertex(233,243,233,243,233,247);
      bezierVertex(227,239,227,239,221,237);
      bezierVertex(212,244,202,248,197,254);
      bezierVertex(203,236,202,218,176,214);
      endShape();
      	fill(112, 112, 112);
      beginShape();
      vertex(259,101);
      bezierVertex(250,97,250,97,241,106);
      bezierVertex(228,124,221,140,213,153);
      bezierVertex(209,165,209,165,209,179);
      bezierVertex(181,184,179,186,165,198);
      bezierVertex(162,200,181,187,219,197);
      bezierVertex(224,197,248,216,262,222);
      bezierVertex(283,237,279,258,279,258);
      bezierVertex(286,227,277,211,278,182);
      bezierVertex(257,159,248,121,258,100);
      endShape();
      	fill(79, 79, 79);
      
      beginShape();
      vertex(184,186);
      bezierVertex(210,185,221,185,249,201);
      bezierVertex(245,193,240,186,231,182);
      bezierVertex(225,179,233,170,249,177);
      bezierVertex(250,173,245,161,244,146);
      bezierVertex(261,166,251,152,247,140);
      bezierVertex(244,129,247,123,254,117);
      bezierVertex(250,110,250,110,255,102);
      bezierVertex(250,100,250,100,237,123);
      bezierVertex(218,148,218,148,236,137);
      bezierVertex(227,152,220,155,216,158);
      bezierVertex(212,163,217,170,215,180);
      bezierVertex(197,180,189,184,185,186);
      endShape();
      beginShape();
      vertex(278,238);
      bezierVertex(274,222,263,213,252,207);
      bezierVertex(267,213,282,223,279,238);
      endShape();
      	fill(74, 30, 0);
      
      beginShape();
      vertex(248,300);
      bezierVertex(258,293,267,276,256,265);
      bezierVertex(249,261,239,261,235,264);
      bezierVertex(261,266,258,276,257,285);
      bezierVertex(256,266,238,267,231,270);
      bezierVertex(245,271,249,279,246,289);
      bezierVertex(245,276,238,275,229,276);
      bezierVertex(243,279,237,288,234,293);
      bezierVertex(229,268,229,268,226,267);
      bezierVertex(216,265,216,265,210,273);
      bezierVertex(210,285,211,295,208,311);
      bezierVertex(205,321,205,334,206,340);
      bezierVertex(216,346,225,337,232,323);
      bezierVertex(237,304,232,298,232,298);
      bezierVertex(244,302,248,301,249,298);
      endShape();
      beginShape();
      vertex(142,225);
      bezierVertex(156,242,157,258,147,270);
      bezierVertex(140,274,138,274,133,272);
      bezierVertex(115,263,102,267,93,268);
      bezierVertex(104,262,106,255,105,250);
      bezierVertex(95,266,85,269,82,269);
      bezierVertex(82,260,82,258,80,258);
      vertex(76,265);
      vertex(81,268);
      vertex(75,273);
      vertex(69,270);
      vertex(65,274);
      vertex(68,278);
      vertex(62,284);
      vertex(58,281);
      bezierVertex(48,292,40,286,39,283);
      bezierVertex(31,261,60,246,90,230);
      bezierVertex(100,223,106,222,108,237);
      bezierVertex(112,252,112,252,90,248);
      bezierVertex(85,252,85,252,89,260);
      bezierVertex(94,257,94,257,95,247);
      vertex(108,249);
      bezierVertex(110,253,110,256,108,264);
      bezierVertex(115,257,117,252,117,242);
      bezierVertex(126,247,121,261,123,262);
      bezierVertex(129,257,133,245,130,240);
      bezierVertex(135,240,139,251,134,265);
      bezierVertex(142,266,149,255,151,245);
      bezierVertex(149,241,142,238,135,237);
      bezierVertex(135,236,135,236,140,234);
      bezierVertex(134,228,136,224,142,226);
      endShape();
      
      
      beginShape();
      vertex(267,99);
      bezierVertex(272,96,278,98,284,101);
      bezierVertex(287,96,289,95,297,93);
      bezierVertex(296,85,296,84,305,93);
      bezierVertex(312,87,312,79,313,67);
      bezierVertex(310,74,309,74,307,75);
      bezierVertex(308,59,306,49,300,42);
      bezierVertex(300,48,300,49,300,52);
      bezierVertex(289,44,286,37,286,23);
      bezierVertex(282,27,281,30,280,33);
      bezierVertex(274,37,270,31,269,26);
      bezierVertex(265,29,265,35,265,36);
      bezierVertex(256,29,244,29,248,31);
      bezierVertex(254,34,255,37,255,43);
      bezierVertex(251,48,246,44,244,42);
      bezierVertex(244,45,245,48,247,50);
      bezierVertex(242,50,238,48,237,48);
      bezierVertex(239,53,242,55,248,62);
      bezierVertex(246,64,243,62,241,61);
      bezierVertex(245,73,246,77,266,96);
      endShape();
      	fill(163, 92, 45);
      beginShape();
      vertex(272,53);
      bezierVertex(281,64,281,79,285,84);
      bezierVertex(284,72,284,60,272,52);
      endShape();
      beginShape();
      vertex(284,25);
      bezierVertex(279,34,279,48,295,57);
      bezierVertex(288,45,287,38,287,26);
      endShape();
      beginShape();
      vertex(300,44);
      bezierVertex(302,53,302,62,299,82);
      bezierVertex(310,73,308,54,301,44);
      endShape();
      beginShape();
      vertex(247,30);
      bezierVertex(253,30,261,33,269,43);
      bezierVertex(260,36,254,33,248,31);
      endShape();
      beginShape();
      vertex(239,50);
      bezierVertex(249,58,258,59,268,63);
      bezierVertex(254,64,249,61,239,51);
      endShape();
      beginShape();
      vertex(311,73);
      bezierVertex(308,83,303,87,301,88);
      bezierVertex(308,93,314,89,313,70);
      endShape();
      return get(37, 20, 389, 322);
    },
    player_dive_1: function(){
      background(0, 0)
      noStroke();
fill(89, 89, 89);
beginShape();
vertex(184,191);
bezierVertex(159,192,160,204,173,230);
bezierVertex(186,255,186,255,193,257);
bezierVertex(206,264,209,264,211,264);
bezierVertex(239,287,274,285,280,255);
bezierVertex(281,247,276,233,263,220);
bezierVertex(233,193,214,188,181,191);
endShape();
	fill(179, 130, 104);
beginShape();
vertex(129,105);
bezierVertex(132,97,132,97,140,94);
bezierVertex(146,93,146,93,152,97);
bezierVertex(157,100,178,84,213,97);
bezierVertex(232,95,232,95,259,104);
bezierVertex(264,104,265,100,265,94);
bezierVertex(258,75,266,62,275,58);
bezierVertex(284,54,297,55,300,66);
bezierVertex(305,74,305,89,302,94);
bezierVertex(301,105,297,108,294,108);
bezierVertex(320,110,336,106,341,105);
bezierVertex(350,103,379,107,390,107);
bezierVertex(406,102,422,92,424,95);
bezierVertex(428,100,420,100,426,102);
bezierVertex(426,103,424,107,420,107);
bezierVertex(423,112,418,114,415,111);
bezierVertex(415,117,408,115,405,115);
bezierVertex(403,115,403,115,398,120);
bezierVertex(398,123,387,120,380,123);
bezierVertex(358,124,349,133,329,127);
bezierVertex(313,128,304,135,300,142);
bezierVertex(292,155,292,155,286,162);
bezierVertex(272,181,269,207,274,239);
bezierVertex(276,287,269,300,255,298);
bezierVertex(247,301,236,301,227,296);
bezierVertex(221,284,228,269,235,264);
bezierVertex(231,238,231,238,224,235);
bezierVertex(212,236,194,260,155,276);
bezierVertex(144,279,144,279,134,273);
bezierVertex(121,264,95,267,82,268);
bezierVertex(67,274,51,299,44,288);
bezierVertex(39,275,50,260,69,250);
bezierVertex(82,241,98,225,100,229);
bezierVertex(107,232,107,232,107,238);
bezierVertex(106,243,119,233,140,237);
bezierVertex(154,241,156,241,161,230);
bezierVertex(176,209,194,198,209,187);
bezierVertex(217,181,227,167,235,122);
bezierVertex(230,114,214,117,200,113);
bezierVertex(188,110,181,116,159,110);
bezierVertex(149,116,143,116,148,109);
bezierVertex(145,105,145,105,142,108);
bezierVertex(136,108,130,108,130,106);
endShape();
	fill(222, 197, 166);
beginShape();
vertex(132,98);
bezierVertex(146,93,146,93,154,97);
bezierVertex(176,90,181,90,213,97);
bezierVertex(232,97,232,97,242,102);
bezierVertex(229,101,207,107,194,97);
bezierVertex(178,94,166,99,152,104);
bezierVertex(146,97,146,97,133,98);
endShape();
beginShape();
vertex(369,108);
bezierVertex(359,113,359,113,331,110);
bezierVertex(313,111,300,117,294,117);
bezierVertex(279,133,279,132,268,123);
bezierVertex(255,136,255,136,261,142);
bezierVertex(273,137,273,137,279,161);
bezierVertex(273,169,273,169,274,188);
bezierVertex(260,188,232,172,232,162);
bezierVertex(232,133,232,133,239,119);
bezierVertex(244,118,253,116,260,116);
bezierVertex(250,130,250,130,266,114);
bezierVertex(260,132,260,132,272,112);
bezierVertex(284,107,284,107,292,107);
bezierVertex(322,109,338,104,349,104);
bezierVertex(359,105,368,107,368,107);
endShape();
beginShape();
vertex(87,253);
bezierVertex(99,251,102,258,110,254);
bezierVertex(126,249,148,255,155,258);
bezierVertex(161,260,165,257,167,254);
bezierVertex(161,251,159,238,144,238);
bezierVertex(131,236,119,237,109,245);
bezierVertex(105,240,105,240,88,252);
endShape();
beginShape();
vertex(227,280);
bezierVertex(237,265,237,265,244,263);
bezierVertex(244,241,244,240,260,235);
bezierVertex(272,240,272,240,273,259);
bezierVertex(266,274,266,274,259,284);
bezierVertex(249,282,232,289,228,295);
endShape();
	fill(71, 71, 71);
beginShape();
vertex(176,212);
bezierVertex(194,197,202,188,224,188);
bezierVertex(256,194,282,204,275,244);
bezierVertex(263,232,252,227,235,238);
bezierVertex(233,243,233,243,233,247);
bezierVertex(227,239,227,239,221,237);
bezierVertex(212,244,202,248,197,254);
bezierVertex(203,236,202,218,176,214);
endShape();
	fill(112, 112, 112);
beginShape();
vertex(259,101);
bezierVertex(250,97,250,97,241,106);
bezierVertex(228,124,221,140,213,153);
bezierVertex(209,165,209,165,209,179);
bezierVertex(181,184,179,186,165,198);
bezierVertex(162,200,181,187,219,197);
bezierVertex(224,197,248,216,262,222);
bezierVertex(283,237,279,258,279,258);
bezierVertex(286,227,277,211,278,182);
bezierVertex(257,159,248,121,258,100);
endShape();
	fill(79, 79, 79);

beginShape();
vertex(184,186);
bezierVertex(210,185,221,185,249,201);
bezierVertex(245,193,240,186,231,182);
bezierVertex(225,179,233,170,249,177);
bezierVertex(250,173,245,161,244,146);
bezierVertex(261,166,251,152,247,140);
bezierVertex(244,129,247,123,254,117);
bezierVertex(250,110,250,110,255,102);
bezierVertex(250,100,250,100,237,123);
bezierVertex(218,148,218,148,236,137);
bezierVertex(227,152,220,155,216,158);
bezierVertex(212,163,217,170,215,180);
bezierVertex(197,180,189,184,185,186);
endShape();
beginShape();
vertex(278,238);
bezierVertex(274,222,263,213,252,207);
bezierVertex(267,213,282,223,279,238);
endShape();
	fill(74, 30, 0);

beginShape();
vertex(248,300);
bezierVertex(258,293,267,276,256,265);
bezierVertex(249,261,239,261,235,264);
bezierVertex(261,266,258,276,257,285);
bezierVertex(256,266,238,267,231,270);
bezierVertex(245,271,249,279,246,289);
bezierVertex(245,276,238,275,229,276);
bezierVertex(243,279,237,288,234,293);
bezierVertex(229,268,229,268,226,267);
bezierVertex(216,265,216,265,210,273);
bezierVertex(210,285,211,295,208,311);
bezierVertex(205,321,205,334,206,340);
bezierVertex(216,346,225,337,232,323);
bezierVertex(237,304,232,298,232,298);
bezierVertex(244,302,248,301,249,298);
endShape();
beginShape();
vertex(142,225);
bezierVertex(156,242,157,258,147,270);
bezierVertex(140,274,138,274,133,272);
bezierVertex(115,263,102,267,93,268);
bezierVertex(104,262,106,255,105,250);
bezierVertex(95,266,85,269,82,269);
bezierVertex(82,260,82,258,80,258);
vertex(76,265);
vertex(81,268);
vertex(75,273);
vertex(69,270);
vertex(65,274);
vertex(68,278);
vertex(62,284);
vertex(58,281);
bezierVertex(48,292,40,286,39,283);
bezierVertex(31,261,60,246,90,230);
bezierVertex(100,223,106,222,108,237);
bezierVertex(112,252,112,252,90,248);
bezierVertex(85,252,85,252,89,260);
bezierVertex(94,257,94,257,95,247);
vertex(108,249);
bezierVertex(110,253,110,256,108,264);
bezierVertex(115,257,117,252,117,242);
bezierVertex(126,247,121,261,123,262);
bezierVertex(129,257,133,245,130,240);
bezierVertex(135,240,139,251,134,265);
bezierVertex(142,266,149,255,151,245);
bezierVertex(149,241,142,238,135,237);
bezierVertex(135,236,135,236,140,234);
bezierVertex(134,228,136,224,142,226);
endShape();


beginShape();
vertex(266,98);
bezierVertex(270,97,277,97,284,102);
bezierVertex(285,97,290,94,297,93);
bezierVertex(297,84,297,84,306,92);
bezierVertex(312,79,312,74,318,69);
bezierVertex(315,69,311,71,307,76);
bezierVertex(308,67,308,53,305,42);
bezierVertex(303,54,303,54,301,55);
bezierVertex(297,38,290,27,285,25);
bezierVertex(285,29,283,34,280,33);
bezierVertex(274,24,269,24,264,24);
bezierVertex(269,29,267,34,265,35);
bezierVertex(258,35,253,31,252,29);
bezierVertex(253,36,253,40,257,45);
bezierVertex(249,43,247,43,242,45);
bezierVertex(245,45,250,51,250,55);
bezierVertex(235,52,230,56,232,56);
bezierVertex(242,58,246,60,247,63);
bezierVertex(242,63,239,64,237,67);
bezierVertex(243,71,251,82,266,97);
endShape();
	fill(163, 92, 45);
beginShape();
vertex(273,58);
bezierVertex(273,70,277,76,283,88);
bezierVertex(280,76,276,67,274,59);
endShape();
beginShape();
vertex(236,54);
bezierVertex(244,52,254,52,261,59);
bezierVertex(249,57,239,54,236,54);
endShape();
beginShape();
vertex(254,31);
bezierVertex(259,35,262,37,276,38);
bezierVertex(269,42,263,42,254,32);
endShape();
beginShape();
vertex(287,28);
bezierVertex(294,36,296,44,296,58);
bezierVertex(292,42,286,31,285,27);
endShape();
beginShape();
vertex(305,55);
bezierVertex(305,64,303,75,295,82);
bezierVertex(304,78,313,65,305,54);
endShape();
beginShape();
vertex(317,69);
bezierVertex(308,74,304,86,304,91);
bezierVertex(312,75,313,73,317,70);
endShape();
      return get(37, 20, 389, 322);
    },
    player_dive_2: function(){
      noStroke();
fill(89, 89, 89);
beginShape();
vertex(184,191);
bezierVertex(159,192,160,204,173,230);
bezierVertex(186,255,186,255,193,257);
bezierVertex(206,264,209,264,211,264);
bezierVertex(239,287,274,285,280,255);
bezierVertex(281,247,276,233,263,220);
bezierVertex(233,193,214,188,181,191);
endShape();
	fill(179, 130, 104);
beginShape();
vertex(129,105);
bezierVertex(132,97,132,97,140,94);
bezierVertex(146,93,146,93,152,97);
bezierVertex(157,100,178,84,213,97);
bezierVertex(232,95,232,95,259,104);
bezierVertex(264,104,265,100,265,94);
bezierVertex(258,75,266,62,275,58);
bezierVertex(284,54,297,55,300,66);
bezierVertex(305,74,305,89,302,94);
bezierVertex(301,105,297,108,294,108);
bezierVertex(320,110,336,106,341,105);
bezierVertex(350,103,379,107,390,107);
bezierVertex(406,102,422,92,424,95);
bezierVertex(428,100,420,100,426,102);
bezierVertex(426,103,424,107,420,107);
bezierVertex(423,112,418,114,415,111);
bezierVertex(415,117,408,115,405,115);
bezierVertex(403,115,403,115,398,120);
bezierVertex(398,123,387,120,380,123);
bezierVertex(358,124,349,133,329,127);
bezierVertex(313,128,304,135,300,142);
bezierVertex(292,155,292,155,286,162);
bezierVertex(272,181,269,207,274,239);
bezierVertex(276,287,269,300,255,298);
bezierVertex(247,301,236,301,227,296);
bezierVertex(221,284,228,269,235,264);
bezierVertex(231,238,231,238,224,235);
bezierVertex(212,236,194,260,155,276);
bezierVertex(144,279,144,279,134,273);
bezierVertex(121,264,95,267,82,268);
bezierVertex(67,274,51,299,44,288);
bezierVertex(39,275,50,260,69,250);
bezierVertex(82,241,98,225,100,229);
bezierVertex(107,232,107,232,107,238);
bezierVertex(106,243,119,233,140,237);
bezierVertex(154,241,156,241,161,230);
bezierVertex(176,209,194,198,209,187);
bezierVertex(217,181,227,167,235,122);
bezierVertex(230,114,214,117,200,113);
bezierVertex(188,110,181,116,159,110);
bezierVertex(149,116,143,116,148,109);
bezierVertex(145,105,145,105,142,108);
bezierVertex(136,108,130,108,130,106);
endShape();
	fill(222, 197, 166);
beginShape();
vertex(132,98);
bezierVertex(146,93,146,93,154,97);
bezierVertex(176,90,181,90,213,97);
bezierVertex(232,97,232,97,242,102);
bezierVertex(229,101,207,107,194,97);
bezierVertex(178,94,166,99,152,104);
bezierVertex(146,97,146,97,133,98);
endShape();
beginShape();
vertex(369,108);
bezierVertex(359,113,359,113,331,110);
bezierVertex(313,111,300,117,294,117);
bezierVertex(279,133,279,132,268,123);
bezierVertex(255,136,255,136,261,142);
bezierVertex(273,137,273,137,279,161);
bezierVertex(273,169,273,169,274,188);
bezierVertex(260,188,232,172,232,162);
bezierVertex(232,133,232,133,239,119);
bezierVertex(244,118,253,116,260,116);
bezierVertex(250,130,250,130,266,114);
bezierVertex(260,132,260,132,272,112);
bezierVertex(284,107,284,107,292,107);
bezierVertex(322,109,338,104,349,104);
bezierVertex(359,105,368,107,368,107);
endShape();
beginShape();
vertex(87,253);
bezierVertex(99,251,102,258,110,254);
bezierVertex(126,249,148,255,155,258);
bezierVertex(161,260,165,257,167,254);
bezierVertex(161,251,159,238,144,238);
bezierVertex(131,236,119,237,109,245);
bezierVertex(105,240,105,240,88,252);
endShape();
beginShape();
vertex(227,280);
bezierVertex(237,265,237,265,244,263);
bezierVertex(244,241,244,240,260,235);
bezierVertex(272,240,272,240,273,259);
bezierVertex(266,274,266,274,259,284);
bezierVertex(249,282,232,289,228,295);
endShape();
	fill(71, 71, 71);
beginShape();
vertex(176,212);
bezierVertex(194,197,202,188,224,188);
bezierVertex(256,194,282,204,275,244);
bezierVertex(263,232,252,227,235,238);
bezierVertex(233,243,233,243,233,247);
bezierVertex(227,239,227,239,221,237);
bezierVertex(212,244,202,248,197,254);
bezierVertex(203,236,202,218,176,214);
endShape();
	fill(112, 112, 112);
beginShape();
vertex(259,101);
bezierVertex(250,97,250,97,241,106);
bezierVertex(228,124,221,140,213,153);
bezierVertex(209,165,209,165,209,179);
bezierVertex(181,184,179,186,165,198);
bezierVertex(162,200,181,187,219,197);
bezierVertex(224,197,248,216,262,222);
bezierVertex(283,237,279,258,279,258);
bezierVertex(286,227,277,211,278,182);
bezierVertex(257,159,248,121,258,100);
endShape();
	fill(79, 79, 79);

beginShape();
vertex(184,186);
bezierVertex(210,185,221,185,249,201);
bezierVertex(245,193,240,186,231,182);
bezierVertex(225,179,233,170,249,177);
bezierVertex(250,173,245,161,244,146);
bezierVertex(261,166,251,152,247,140);
bezierVertex(244,129,247,123,254,117);
bezierVertex(250,110,250,110,255,102);
bezierVertex(250,100,250,100,237,123);
bezierVertex(218,148,218,148,236,137);
bezierVertex(227,152,220,155,216,158);
bezierVertex(212,163,217,170,215,180);
bezierVertex(197,180,189,184,185,186);
endShape();
beginShape();
vertex(278,238);
bezierVertex(274,222,263,213,252,207);
bezierVertex(267,213,282,223,279,238);
endShape();
	fill(74, 30, 0);

beginShape();
vertex(248,300);
bezierVertex(258,293,267,276,256,265);
bezierVertex(249,261,239,261,235,264);
bezierVertex(261,266,258,276,257,285);
bezierVertex(256,266,238,267,231,270);
bezierVertex(245,271,249,279,246,289);
bezierVertex(245,276,238,275,229,276);
bezierVertex(243,279,237,288,234,293);
bezierVertex(229,268,229,268,226,267);
bezierVertex(216,265,216,265,210,273);
bezierVertex(210,285,211,295,208,311);
bezierVertex(205,321,205,334,206,340);
bezierVertex(216,346,225,337,232,323);
bezierVertex(237,304,232,298,232,298);
bezierVertex(244,302,248,301,249,298);
endShape();
beginShape();
vertex(142,225);
bezierVertex(156,242,157,258,147,270);
bezierVertex(140,274,138,274,133,272);
bezierVertex(115,263,102,267,93,268);
bezierVertex(104,262,106,255,105,250);
bezierVertex(95,266,85,269,82,269);
bezierVertex(82,260,82,258,80,258);
vertex(76,265);
vertex(81,268);
vertex(75,273);
vertex(69,270);
vertex(65,274);
vertex(68,278);
vertex(62,284);
vertex(58,281);
bezierVertex(48,292,40,286,39,283);
bezierVertex(31,261,60,246,90,230);
bezierVertex(100,223,106,222,108,237);
bezierVertex(112,252,112,252,90,248);
bezierVertex(85,252,85,252,89,260);
bezierVertex(94,257,94,257,95,247);
vertex(108,249);
bezierVertex(110,253,110,256,108,264);
bezierVertex(115,257,117,252,117,242);
bezierVertex(126,247,121,261,123,262);
bezierVertex(129,257,133,245,130,240);
bezierVertex(135,240,139,251,134,265);
bezierVertex(142,266,149,255,151,245);
bezierVertex(149,241,142,238,135,237);
bezierVertex(135,236,135,236,140,234);
bezierVertex(134,228,136,224,142,226);
endShape();


beginShape();
vertex(266,98);
bezierVertex(277,95,281,98,285,103);
bezierVertex(286,96,291,95,297,93);
bezierVertex(295,84,295,84,304,92);
bezierVertex(311,90,315,74,315,69);
bezierVertex(309,76,309,76,303,76);
bezierVertex(308,64,308,54,308,49);
bezierVertex(307,50,306,53,302,54);
bezierVertex(294,47,289,31,278,22);
bezierVertex(283,29,282,34,282,34);
bezierVertex(275,26,272,25,260,25);
bezierVertex(267,25,267,33,267,39);
bezierVertex(257,28,257,28,251,26);
bezierVertex(259,33,259,40,259,44);
bezierVertex(248,38,242,38,235,40);
bezierVertex(249,43,249,46,249,49);
bezierVertex(244,49,238,49,236,45);
bezierVertex(240,57,248,63,251,63);
bezierVertex(244,67,242,65,240,65);
bezierVertex(241,75,257,90,265,98);
endShape();
	fill(163, 92, 45);
beginShape();
vertex(272,55);
bezierVertex(278,64,284,73,284,85);
bezierVertex(279,78,273,61,272,55);
endShape();
beginShape();
vertex(240,50);
bezierVertex(244,61,252,64,261,67);
bezierVertex(249,58,245,55,241,51);
endShape();
beginShape();
vertex(255,27);
bezierVertex(269,39,269,46,269,53);
bezierVertex(262,38,258,30,253,26);
endShape();
beginShape();
vertex(283,29);
bezierVertex(287,35,299,49,298,66);
bezierVertex(290,45,286,36,282,28);
endShape();
beginShape();
vertex(306,51);
bezierVertex(307,65,302,75,293,82);
bezierVertex(303,78,309,67,306,52);
endShape();
beginShape();
vertex(300,87);
bezierVertex(309,84,312,78,316,70);
bezierVertex(308,91,308,91,303,88);
endShape();
      return get(37, 20, 389, 322);
    },
  },
	prologue: {
		scene_1: function(){
			background(0, 0);
			noStroke();
			fill(66, 67, 84);
			beginShape();
			vertex(268,0);
			bezierVertex(251,38,251,39,267,78);
			bezierVertex(279,138,278,152,276,160);
			bezierVertex(261,178,259,193,269,214);
			bezierVertex(262,294,238,443,171,599);
			vertex(709,599);
			bezierVertex(670,479,646,226,650,217);
			bezierVertex(654,191,654,186,642,169);
			bezierVertex(657,96,658,90,662,76);
			bezierVertex(675,43,678,34,664,1);
			endShape();
			fill(36, 36, 51);
			beginShape();
			vertex(484,205);
			bezierVertex(480,183,480,183,495,161);
			bezierVertex(498,159,560,158,578,187);
			bezierVertex(589,211,589,218,581,227);
			bezierVertex(570,224,563,219,563,215);
			bezierVertex(561,190,541,173,527,177);
			bezierVertex(504,183,498,207,483,205);
			endShape();
			beginShape();
			vertex(351,104);
			bezierVertex(325,173,316,238,309,301);
			bezierVertex(324,400,348,448,357,460);
			bezierVertex(445,427,498,429,560,466);
			bezierVertex(595,388,593,288,584,127);
			bezierVertex(592,242,581,284,575,284);
			bezierVertex(548,288,531,311,523,342);
			bezierVertex(488,310,488,310,480,311);
			bezierVertex(465,312,439,308,436,308);
			bezierVertex(416,307,390,323,373,323);
			bezierVertex(339,297,314,237,349,215);
			bezierVertex(366,173,406,176,425,202);
			bezierVertex(413,241,403,263,393,276);
			bezierVertex(430,259,440,237,433,266);
			bezierVertex(426,293,437,292,453,289);
			bezierVertex(469,272,482,257,485,250);
			bezierVertex(462,236,448,230,444,220);
			bezierVertex(459,173,425,151,371,165);
			bezierVertex(357,170,357,170,348,180);
			bezierVertex(343,185,330,181,341,146);
			bezierVertex(345,130,349,117,351,103);
			endShape();
			beginShape();
			vertex(352,214);
			bezierVertex(376,203,399,199,419,201);
			bezierVertex(378,204,365,209,352,213);
			endShape();
			beginShape();
			vertex(564,218);
			bezierVertex(536,203,525,203,497,201);
			bezierVertex(529,206,545,210,565,218);
			endShape();
			fill(11, 10, 20);
			beginShape();
			vertex(374,205);
			bezierVertex(374,194,393,191,396,200);
			bezierVertex(386,200,379,203,375,204);
			endShape();
			beginShape();
			vertex(521,203);
			bezierVertex(531,203,536,206,541,207);
			bezierVertex(539,195,527,195,523,202);
			endShape();
			beginShape();
			vertex(350,216);
			bezierVertex(361,177,398,177,414,194);
			bezierVertex(419,199,419,199,418,200);
			bezierVertex(411,200,411,200,410,200);
			bezierVertex(396,181,380,177,366,197);
			bezierVertex(364,201,363,209,364,209);
			bezierVertex(367,210,367,210,367,215);
			bezierVertex(359,236,353,271,356,329);
			bezierVertex(349,251,356,222,358,214);
			endShape();
			beginShape();
			vertex(564,219);
			bezierVertex(561,191,534,177,519,186);
			bezierVertex(504,195,502,200,500,201);
			bezierVertex(505,202,505,202,510,198);
			bezierVertex(537,177,553,196,559,210);
			bezierVertex(549,210,549,210,539,207);
			bezierVertex(554,235,556,271,556,333);
			bezierVertex(559,244,559,221,553,214);
			bezierVertex(561,214,563,217,563,217);
			endShape();
			beginShape();
			vertex(392,321);
			bezierVertex(412,314,433,282,448,290);
			bezierVertex(457,292,457,292,471,290);
			bezierVertex(483,283,506,312,531,323);
			bezierVertex(506,311,489,300,480,303);
			bezierVertex(463,308,446,303,442,302);
			bezierVertex(429,300,412,313,393,321);
			endShape();
			beginShape();
			vertex(443,337);
			bezierVertex(439,343,432,336,437,334);
			bezierVertex(448,327,465,329,475,331);
			bezierVertex(486,336,485,342,478,342);
			bezierVertex(473,341,462,327,442,338);
			endShape();
			beginShape();
			vertex(447,255);
			bezierVertex(433,249,433,249,442,234);
			bezierVertex(451,214,462,184,475,222);
			bezierVertex(480,236,480,236,484,242);
			bezierVertex(489,251,487,251,472,257);
			bezierVertex(460,260,448,255,442,253);
			endShape();
			beginShape();
			vertex(268,0);
			bezierVertex(251,38,251,39,267,78);
			bezierVertex(279,138,278,152,276,160);
			bezierVertex(261,178,259,193,269,214);
			bezierVertex(262,294,238,443,171,599);
			vertex(709,599);
			bezierVertex(670,479,646,226,650,217);
			bezierVertex(654,191,654,186,642,169);
			bezierVertex(657,96,658,90,662,76);
			bezierVertex(675,43,678,34,664,1);
			bezierVertex(658,35,640,78,632,148);
			vertex(638,162);
			vertex(639,174);
			bezierVertex(584,107,524,71,505,67);
			bezierVertex(477,104,465,114,463,114);
			bezierVertex(433,88,426,72,423,63);
			bezierVertex(370,82,322,118,281,174);
			bezierVertex(283,158,271,178,270,204);
			bezierVertex(315,135,370,94,411,81);
			bezierVertex(433,119,455,134,458,136);
			bezierVertex(479,118,502,89,506,83);
			bezierVertex(558,104,560,112,560,115);
			bezierVertex(569,154,579,178,588,202);
			bezierVertex(585,288,587,347,590,353);
			bezierVertex(572,431,558,444,553,448);
			bezierVertex(507,425,488,418,459,414);
			bezierVertex(423,419,394,435,364,450);
			bezierVertex(343,426,315,353,309,319);
			bezierVertex(330,175,346,127,351,114);
			bezierVertex(334,153,330,165,330,165);
			bezierVertex(331,141,333,135,335,123);
			bezierVertex(325,141,309,267,302,375);
			bezierVertex(296,467,296,477,296,551);
			bezierVertex(335,511,342,509,403,489);
			vertex(401,552);
			vertex(414,486);
			bezierVertex(436,477,491,483,501,487);
			vertex(505,548);
			vertex(508,489);
			bezierVertex(549,501,567,517,605,557);
			bezierVertex(603,436,603,396,598,362);
			bezierVertex(600,351,600,351,594,324);
			bezierVertex(594,238,589,158,585,129);
			bezierVertex(622,156,637,186,635,194);
			bezierVertex(635,319,659,500,677,544);
			vertex(631,499);
			vertex(636,539);
			vertex(621,511);
			vertex(622,599);
			vertex(289,599);
			vertex(286,537);
			vertex(256,550);
			vertex(258,524);
			vertex(235,535);
			bezierVertex(265,458,286,212,293,175);
			bezierVertex(282,185,271,199,270,205);
			bezierVertex(263,186,269,175,279,160);
			bezierVertex(286,141,281,32,275,0);
			vertex(331,1);
			bezierVertex(335,48,340,72,347,85);
			vertex(352,75);
			bezierVertex(339,37,338,11,338,0);
			vertex(570,1);
			bezierVertex(571,10,569,45,558,80);
			vertex(565,86);
			bezierVertex(574,56,580,14,578,0);
			endShape();
			return get();
		},
		scene_2: function(){
		  background(0, 0);
      noStroke();
      fill(66, 67, 84);
      beginShape();
      vertex(268,0);
      bezierVertex(251,38,251,39,267,78);
      bezierVertex(279,138,278,152,276,160);
      bezierVertex(261,178,259,193,269,214);
      bezierVertex(262,294,238,443,171,599);
      vertex(709,599);
      bezierVertex(670,479,646,226,650,217);
      bezierVertex(654,191,654,186,642,169);
      bezierVertex(657,96,658,90,662,76);
      bezierVertex(675,43,678,34,664,1);
      endShape();
      fill(36, 36, 51);
      beginShape();
      vertex(484,205);
      bezierVertex(480,183,480,183,495,161);
      bezierVertex(498,159,560,158,578,187);
      bezierVertex(589,211,589,218,581,227);
      bezierVertex(570,224,563,219,563,215);
      bezierVertex(561,190,541,173,527,177);
      bezierVertex(504,183,498,207,483,205);
      endShape();
      beginShape();
      vertex(351,104);
      bezierVertex(325,173,316,238,309,301);
      bezierVertex(324,400,348,448,357,460);
      bezierVertex(445,427,498,429,560,466);
      bezierVertex(595,388,593,288,584,127);
      bezierVertex(592,242,581,284,575,284);
      bezierVertex(548,288,531,311,523,342);
      bezierVertex(488,310,488,310,480,311);
      bezierVertex(465,312,439,308,436,308);
      bezierVertex(416,307,390,323,373,323);
      bezierVertex(339,297,314,237,349,215);
      bezierVertex(366,173,406,176,425,202);
      bezierVertex(413,241,403,263,393,276);
      bezierVertex(430,259,440,237,433,266);
      bezierVertex(426,293,437,292,453,289);
      bezierVertex(469,272,482,257,485,250);
      bezierVertex(462,236,448,230,444,220);
      bezierVertex(459,173,425,151,371,165);
      bezierVertex(357,170,357,170,348,180);
      bezierVertex(343,185,330,181,341,146);
      bezierVertex(345,130,349,117,351,103);
      endShape();
      beginShape();
      vertex(352,214);
      bezierVertex(376,203,399,199,419,201);
      bezierVertex(378,204,365,209,352,213);
      endShape();
      beginShape();
      vertex(564,218);
      bezierVertex(536,203,525,203,497,201);
      bezierVertex(529,206,545,210,565,218);
      endShape();
      fill(204, 16, 16);
      beginShape();
      vertex(374,205);
      bezierVertex(387,182,381,191,396,200);
      bezierVertex(386,200,379,203,375,204);
      endShape();
      beginShape();
      vertex(521,203);
      bezierVertex(531,203,536,206,541,207);
      bezierVertex(535,185,532,195,523,202);
      endShape();
      fill(11, 10, 20);
      beginShape();
      vertex(350,216);
      bezierVertex(361,177,398,177,414,194);
      bezierVertex(419,199,419,199,418,200);
      bezierVertex(411,200,411,200,410,200);
      bezierVertex(396,181,380,177,366,197);
      bezierVertex(364,201,363,209,364,209);
      bezierVertex(367,210,367,210,367,215);
      bezierVertex(359,236,353,271,356,329);
      bezierVertex(349,251,356,222,358,214);
      endShape();
      beginShape();
      vertex(564,219);
      bezierVertex(561,191,534,177,519,186);
      bezierVertex(504,195,502,200,500,201);
      bezierVertex(505,202,505,202,510,198);
      bezierVertex(537,177,553,196,559,210);
      bezierVertex(549,210,549,210,539,207);
      bezierVertex(554,235,556,271,556,333);
      bezierVertex(559,244,559,221,553,214);
      bezierVertex(561,214,563,217,563,217);
      endShape();
      beginShape();
      vertex(447,255);
      bezierVertex(433,249,433,249,442,234);
      bezierVertex(451,214,462,184,475,222);
      bezierVertex(480,236,480,236,484,242);
      bezierVertex(489,251,487,251,472,257);
      bezierVertex(460,260,448,255,442,253);
      endShape();
      beginShape();
      vertex(268,0);
      bezierVertex(251,38,251,39,267,78);
      bezierVertex(279,138,278,152,276,160);
      bezierVertex(261,178,259,193,269,214);
      bezierVertex(262,294,238,443,171,599);
      vertex(709,599);
      bezierVertex(670,479,646,226,650,217);
      bezierVertex(654,191,654,186,642,169);
      bezierVertex(657,96,658,90,662,76);
      bezierVertex(675,43,678,34,664,1);
      bezierVertex(658,35,640,78,632,148);
      vertex(638,162);
      vertex(639,174);
      bezierVertex(584,107,524,71,505,67);
      bezierVertex(477,104,465,114,463,114);
      bezierVertex(433,88,426,72,423,63);
      bezierVertex(370,82,322,118,281,174);
      bezierVertex(283,158,271,178,270,204);
      bezierVertex(315,135,370,94,411,81);
      bezierVertex(433,119,455,134,458,136);
      bezierVertex(479,118,502,89,506,83);
      bezierVertex(558,104,560,112,560,115);
      bezierVertex(569,154,579,178,588,202);
      bezierVertex(585,288,587,347,590,353);
      bezierVertex(572,431,558,444,553,448);
      bezierVertex(507,425,488,418,459,414);
      bezierVertex(423,419,394,435,364,450);
      bezierVertex(343,426,315,353,309,319);
      bezierVertex(330,175,346,127,351,114);
      bezierVertex(334,153,330,165,330,165);
      bezierVertex(331,141,333,135,335,123);
      bezierVertex(325,141,309,267,302,375);
      bezierVertex(296,467,296,477,296,551);
      bezierVertex(335,511,342,509,403,489);
      vertex(401,552);
      vertex(414,486);
      bezierVertex(436,477,491,483,501,487);
      vertex(505,548);
      vertex(508,489);
      bezierVertex(549,501,567,517,605,557);
      bezierVertex(603,436,603,396,598,362);
      bezierVertex(600,351,600,351,594,324);
      bezierVertex(594,238,589,158,585,129);
      bezierVertex(622,156,637,186,635,194);
      bezierVertex(635,319,659,500,677,544);
      vertex(631,499);
      vertex(636,539);
      vertex(621,511);
      vertex(622,599);
      vertex(289,599);
      vertex(286,537);
      vertex(256,550);
      vertex(258,524);
      vertex(235,535);
      bezierVertex(265,458,286,212,293,175);
      bezierVertex(282,185,271,199,270,205);
      bezierVertex(263,186,269,175,279,160);
      bezierVertex(286,141,281,32,275,0);
      vertex(331,1);
      bezierVertex(335,48,340,72,347,85);
      vertex(352,75);
      bezierVertex(339,37,338,11,338,0);
      vertex(570,1);
      bezierVertex(571,10,569,45,558,80);
      vertex(565,86);
      bezierVertex(574,56,580,14,578,0);
      endShape();
      beginShape();
      vertex(375,277);
      bezierVertex(349,289,358,291,370,297);
      bezierVertex(393,300,435,276,441,277);
      bezierVertex(461,282,476,276,486,274);
      bezierVertex(523,282,547,293,557,293);
      bezierVertex(568,292,573,280,544,275);
      bezierVertex(586,280,586,280,575,317);
      bezierVertex(576,299,576,299,564,310);
      bezierVertex(541,339,513,363,494,371);
      bezierVertex(504,366,507,363,509,360);
      bezierVertex(473,377,449,374,417,360);
      bezierVertex(380,338,364,317,358,313);
      bezierVertex(352,307,359,325,363,333);
      bezierVertex(346,303,339,284,344,284);
      bezierVertex(351,284,366,278,375,277);
      endShape();
      fill(147, 146, 163);
      beginShape();
      vertex(376,317);
      bezierVertex(378,308,378,308,380,312);
      bezierVertex(383,306,383,306,388,310);
      bezierVertex(393,300,393,300,399,306);
      bezierVertex(406,298,406,298,411,305);
      bezierVertex(418,294,418,294,424,304);
      bezierVertex(433,296,433,296,438,302);
      bezierVertex(441,293,441,293,449,300);
      bezierVertex(463,286,463,286,466,300);
      bezierVertex(478,290,478,290,482,301);
      bezierVertex(494,291,494,291,498,302);
      bezierVertex(507,294,507,294,514,309);
      bezierVertex(526,299,526,299,528,309);
      bezierVertex(536,301,536,301,537,308);
      bezierVertex(544,306,544,306,544,309);
      bezierVertex(552,307,552,307,544,326);
      bezierVertex(538,323,538,323,535,326);
      bezierVertex(532,323,532,323,527,326);
      bezierVertex(523,320,523,320,519,327);
      bezierVertex(513,319,513,319,510,325);
      bezierVertex(499,318,499,318,493,323);
      bezierVertex(480,315,480,315,475,320);
      bezierVertex(466,314,466,314,460,319);
      bezierVertex(450,315,450,315,447,319);
      bezierVertex(445,320,445,320,437,316);
      bezierVertex(429,323,429,323,423,317);
      bezierVertex(416,324,416,324,411,318);
      bezierVertex(406,322,406,322,403,319);
      bezierVertex(397,324,397,324,391,323);
      bezierVertex(386,325,386,325,383,323);
      bezierVertex(378,323,378,323,377,323);
      vertex(386,327);
      vertex(392,326);
      vertex(400,327);
      vertex(403,322);
      vertex(407,324);
      vertex(411,321);
      vertex(416,326);
      vertex(422,320);
      vertex(430,325);
      vertex(438,319);
      vertex(445,322);
      vertex(451,319);
      vertex(460,322);
      vertex(466,316);
      vertex(474,324);
      vertex(480,318);
      vertex(494,325);
      vertex(499,321);
      vertex(509,329);
      vertex(513,323);
      vertex(519,329);
      vertex(523,324);
      vertex(528,328);
      vertex(531,326);
      vertex(536,330);
      vertex(540,325);
      vertex(542,327);
      vertex(536,338);
      vertex(533,335);
      vertex(528,342);
      vertex(527,339);
      vertex(521,345);
      vertex(516,340);
      vertex(506,349);
      vertex(504,343);
      vertex(496,349);
      vertex(492,340);
      vertex(486,348);
      vertex(479,342);
      vertex(472,347);
      vertex(466,341);
      vertex(456,348);
      vertex(450,340);
      vertex(443,346);
      vertex(438,338);
      vertex(433,345);
      vertex(424,340);
      vertex(421,345);
      vertex(412,338);
      vertex(407,343);
      vertex(403,338);
      vertex(399,340);
      vertex(396,334);
      vertex(390,336);
      vertex(389,331);
      vertex(385,332);
      vertex(376,323);
      endShape();
      fill(52, 53, 71);
      beginShape();
      vertex(376,599);
      bezierVertex(396,414,417,397,452,388);
      bezierVertex(559,354,628,407,657,401);
      bezierVertex(665,425,725,500,766,599);
      endShape();
      fill(24, 24, 36);
      beginShape();
      vertex(383,599);
      bezierVertex(389,537,400,501,409,467);
      bezierVertex(396,554,410,582,419,533);
      bezierVertex(419,559,422,583,426,599);
      endShape();
      beginShape();
      vertex(677,597);
      bezierVertex(671,520,664,498,640,424);
      bezierVertex(671,548,651,569,633,522);
      bezierVertex(646,569,635,583,620,506);
      bezierVertex(624,561,615,583,608,599);
      endShape();
      fill(52, 53, 71);
      beginShape();
      vertex(506,514);
      bezierVertex(438,490,438,490,386,434);
      bezierVertex(361,422,337,417,308,417);
      bezierVertex(289,417,252,406,257,374);
      bezierVertex(258,355,277,339,311,346);
      bezierVertex(354,353,354,353,382,367);
      bezierVertex(404,381,473,366,500,332);
      bezierVertex(527,283,527,283,541,263);
      bezierVertex(551,217,551,217,551,198);
      bezierVertex(548,171,548,170,570,161);
      bezierVertex(583,156,614,167,615,195);
      bezierVertex(615,233,615,233,605,267);
      bezierVertex(602,277,580,339,616,307);
      bezierVertex(650,274,656,269,677,244);
      bezierVertex(686,232,698,230,709,233);
      bezierVertex(737,246,737,265,735,275);
      bezierVertex(720,290,685,327,667,350);
      bezierVertex(636,394,685,367,713,358);
      bezierVertex(726,353,726,353,746,361);
      bezierVertex(765,369,765,369,770,390);
      bezierVertex(766,413,766,413,755,419);
      bezierVertex(750,421,723,413,707,422);
      bezierVertex(685,433,684,433,670,446);
      bezierVertex(663,455,666,476,688,483);
      bezierVertex(716,498,716,498,724,513);
      bezierVertex(738,539,754,546,755,549);
      bezierVertex(766,562,761,573,750,578);
      bezierVertex(739,582,725,574,694,554);
      bezierVertex(665,531,661,528,647,522);
      bezierVertex(596,550,545,558,534,541);
      bezierVertex(525,532,511,512,499,512);
      endShape();
      fill(10, 10, 15);
      beginShape();
      vertex(258,376);
      bezierVertex(279,409,339,410,355,400);
      bezierVertex(385,424,450,407,494,397);
      bezierVertex(502,427,514,448,535,458);
      bezierVertex(540,477,557,514,622,503);
      bezierVertex(649,502,649,500,660,507);
      bezierVertex(674,519,674,519,691,526);
      bezierVertex(715,550,732,564,759,556);
      bezierVertex(761,581,743,582,721,571);
      bezierVertex(689,552,678,540,648,521);
      bezierVertex(637,533,568,562,540,547);
      bezierVertex(533,541,506,510,490,508);
      bezierVertex(444,498,402,457,395,445);
      bezierVertex(379,428,339,418,331,419);
      bezierVertex(274,418,254,398,257,377);
      endShape();
      beginShape();
      vertex(435,486);
      bezierVertex(466,509,481,512,492,513);
      bezierVertex(497,513,520,528,532,546);
      bezierVertex(544,553,547,555,565,555);
      bezierVertex(554,561,536,578,490,558);
      bezierVertex(473,550,443,516,435,487);
      endShape();
      beginShape();
      vertex(558,203);
      bezierVertex(569,215,591,219,601,214);
      bezierVertex(607,209,610,205,614,201);
      bezierVertex(615,236,615,238,596,292);
      bezierVertex(592,310,590,330,621,303);
      bezierVertex(613,327,610,328,610,334);
      bezierVertex(593,322,582,325,561,322);
      bezierVertex(568,291,561,230,559,205);
      endShape();
      beginShape();
      vertex(627,351);
      bezierVertex(657,354,681,322,689,311);
      bezierVertex(677,311,663,297,659,281);
      bezierVertex(664,268,669,262,672,259);
      bezierVertex(666,264,696,292,716,292);
      bezierVertex(694,322,651,365,658,371);
      bezierVertex(663,374,681,371,684,370);
      bezierVertex(659,378,657,384,648,391);
      bezierVertex(658,374,644,357,629,353);
      endShape();
      beginShape();
      vertex(645,405);
      bezierVertex(668,432,706,411,713,394);
      bezierVertex(712,385,712,382,718,374);
      bezierVertex(713,395,722,408,750,418);
      bezierVertex(717,417,717,417,699,425);
      bezierVertex(673,444,662,451,671,468);
      bezierVertex(665,438,657,426,646,407);
      endShape();
      beginShape();
      vertex(582,167);
      bezierVertex(602,176,599,186,586,188);
      bezierVertex(610,187,603,174,583,167);
      endShape();
      beginShape();
      vertex(691,241);
      bezierVertex(714,235,729,253,723,267);
      bezierVertex(736,251,712,230,693,241);
      endShape();
      beginShape();
      vertex(737,368);
      bezierVertex(741,366,749,364,759,372);
      bezierVertex(747,369,746,369,738,369);
      endShape();
      return get();
		},
		scene_3: function(){
		  noStroke();
background(0, 0);
fill(66, 67, 84);
beginShape();
vertex(175,57);
bezierVertex(158,51,158,51,156,43);
vertex(95,32);
vertex(159,37);
bezierVertex(170,24,191,26,194,24);
vertex(182,1);
vertex(194,2);
vertex(205,9);
vertex(209,2);
vertex(216,2);
vertex(219,12);
vertex(223,2);
vertex(230,2);
vertex(232,13);
vertex(235,5);
vertex(237,15);
vertex(246,2);
vertex(254,0);
vertex(249,31);
bezierVertex(272,44,272,52,272,52);
vertex(324,58);
vertex(273,59);
bezierVertex(262,72,249,75,245,76);
vertex(247,67);
bezierVertex(257,64,262,56,262,56);
bezierVertex(254,43,249,41,245,39);
bezierVertex(247,58,247,58,245,59);
bezierVertex(248,73,248,73,247,84);
vertex(267,125);
vertex(243,87);
bezierVertex(231,91,229,85,229,85);
bezierVertex(232,103,232,103,245,113);
bezierVertex(253,123,264,150,285,179);
bezierVertex(283,187,284,198,290,223);
bezierVertex(291,242,291,242,298,251);
bezierVertex(299,268,299,268,293,276);
bezierVertex(298,297,303,298,304,298);
bezierVertex(308,305,308,311,307,323);
bezierVertex(311,338,324,347,333,395);
bezierVertex(359,475,367,529,387,599);
vertex(0,600);
vertex(0,490);
bezierVertex(32,354,32,354,45,342);
bezierVertex(71,291,78,269,81,254);
bezierVertex(87,215,96,183,105,174);
bezierVertex(134,124,138,118,137,109);
bezierVertex(147,98,147,86,155,81);
bezierVertex(162,73,162,72,165,62);
bezierVertex(166,59,181,56,182,53);
bezierVertex(184,48,194,49,198,49);
bezierVertex(203,28,203,28,181,38);
bezierVertex(173,42,172,51,179,55);
endShape();

fill(36, 36, 51);
beginShape();
vertex(175,57);
bezierVertex(158,51,158,51,156,43);
vertex(95,32);
vertex(159,37);
bezierVertex(170,24,191,26,194,24);
vertex(182,1);
vertex(194,2);
vertex(205,9);
vertex(209,2);
vertex(216,2);
vertex(219,12);
vertex(223,2);
vertex(230,2);
vertex(232,13);
vertex(235,5);
vertex(237,15);
vertex(246,2);
vertex(254,0);
vertex(249,31);
bezierVertex(272,44,272,52,272,52);
vertex(324,58);
vertex(273,59);
bezierVertex(262,72,249,75,245,76);
vertex(247,67);
bezierVertex(257,64,262,56,262,56);
bezierVertex(254,43,249,41,245,39);
bezierVertex(247,58,247,58,245,59);
bezierVertex(248,73,248,73,247,84);
vertex(267,125);
vertex(243,87);
bezierVertex(231,91,229,85,229,85);
bezierVertex(232,103,232,103,245,113);
bezierVertex(253,123,264,150,285,179);
bezierVertex(283,187,284,198,290,223);
bezierVertex(291,242,291,242,298,251);
bezierVertex(299,268,299,268,293,276);
bezierVertex(298,297,303,298,304,298);
bezierVertex(308,305,308,311,307,323);
bezierVertex(311,338,324,347,333,395);
bezierVertex(359,475,367,529,387,599);
vertex(318,599);
bezierVertex(326,537,330,497,316,445);
bezierVertex(325,388,309,341,298,318);
bezierVertex(301,309,287,283,263,270);
bezierVertex(273,238,242,204,218,188);
bezierVertex(205,186,205,186,198,181);
bezierVertex(196,169,203,151,208,123);
bezierVertex(198,160,197,163,196,165);
bezierVertex(184,150,184,150,189,169);
bezierVertex(192,178,192,178,188,177);
bezierVertex(175,173,175,173,185,188);
bezierVertex(189,197,200,197,201,199);
bezierVertex(209,203,209,203,209,209);
bezierVertex(209,221,209,221,228,286);
bezierVertex(212,257,208,224,197,219);
bezierVertex(206,225,213,280,228,288);
bezierVertex(247,316,247,316,243,346);
bezierVertex(235,381,213,428,204,436);
bezierVertex(212,469,212,469,208,479);
bezierVertex(202,494,196,505,193,517);
bezierVertex(190,525,184,525,172,522);
bezierVertex(165,525,155,518,154,517);
bezierVertex(142,520,134,513,133,509);
bezierVertex(117,509,113,505,108,488);
bezierVertex(111,490,112,496,119,502);
bezierVertex(125,506,125,506,134,505);
bezierVertex(144,516,156,513,157,516);
bezierVertex(165,522,179,520,186,520);
bezierVertex(188,519,196,493,206,474);
bezierVertex(208,464,200,442,198,429);
bezierVertex(194,402,197,378,197,367);
bezierVertex(181,373,139,389,137,402);
bezierVertex(132,420,137,457,133,469);
bezierVertex(124,476,115,483,109,487);
bezierVertex(104,508,122,512,131,515);
bezierVertex(133,522,133,522,136,523);
bezierVertex(110,541,76,578,79,599);
vertex(1,598);
vertex(1,484);
bezierVertex(9,435,32,412,71,377);
bezierVertex(151,346,187,341,197,350);
bezierVertex(217,373,217,375,211,395);
bezierVertex(233,362,233,358,232,351);
bezierVertex(238,330,237,315,225,303);
bezierVertex(219,285,183,278,147,242);
bezierVertex(144,199,143,198,110,176);
bezierVertex(100,186,98,191,96,203);
bezierVertex(107,201,107,201,98,217);
bezierVertex(86,241,85,244,85,251);
bezierVertex(95,251,78,296,37,363);
bezierVertex(31,383,20,409,15,438);
bezierVertex(32,354,32,354,45,342);
bezierVertex(71,291,78,269,81,254);
bezierVertex(87,215,96,183,105,174);
bezierVertex(134,124,138,118,137,109);
bezierVertex(147,98,147,86,155,81);
bezierVertex(162,73,162,72,165,62);
bezierVertex(166,59,181,56,182,53);
bezierVertex(184,48,194,49,198,49);
bezierVertex(203,28,203,28,181,38);
bezierVertex(173,42,172,51,179,55);
endShape();
fill(255);
beginShape();
vertex(232,63);
bezierVertex(235,66,241,69,243,69);
vertex(243,76);
bezierVertex(238,71,232,68,232,63);
endShape();
beginShape();
vertex(234,53);
vertex(238,57);
vertex(238,59);
endShape();

fill(82, 50, 16);
beginShape();
vertex(61,426);
bezierVertex(55,435,53,441,53,448);
bezierVertex(58,441,60,441,60,441);
bezierVertex(56,454,60,465,53,476);
bezierVertex(56,474,60,471,63,466);
bezierVertex(62,475,57,492,63,504);
bezierVertex(69,494,78,488,84,476);
bezierVertex(85,487,83,492,80,495);
bezierVertex(94,487,101,469,101,448);
bezierVertex(102,449,104,456,104,463);
bezierVertex(112,450,109,431,109,426);
bezierVertex(111,425,113,419,113,413);
bezierVertex(104,420,99,419,96,418);
bezierVertex(96,413,85,409,80,412);
bezierVertex(69,410,64,416,61,426);
endShape();
fill(191, 159, 138);
beginShape();
vertex(116,474);
bezierVertex(105,462,110,455,112,452);
bezierVertex(114,446,108,441,106,441);
vertex(109,428);
bezierVertex(119,431,119,431,121,425);
bezierVertex(125,420,125,420,131,421);
bezierVertex(129,449,123,465,116,474);
endShape();
beginShape();
vertex(74,441);
bezierVertex(92,447,107,447,112,438);
bezierVertex(111,424,100,416,80,415);
endShape();
beginShape();
vertex(223,457);
bezierVertex(246,465,246,465,266,494);
bezierVertex(273,498,283,498,283,500);
bezierVertex(285,508,276,508,259,508);
bezierVertex(255,507,248,484,236,478);
bezierVertex(230,476,224,476,219,476);
bezierVertex(219,467,222,462,224,457);
endShape();
beginShape();
vertex(216,484);
bezierVertex(238,491,238,491,243,506);
bezierVertex(244,513,259,516,259,520);
bezierVertex(259,523,259,525,244,523);
bezierVertex(236,522,236,522,234,515);
bezierVertex(232,507,228,499,212,502);
endShape();
fill(82, 50, 16);
beginShape();
vertex(64,430);
bezierVertex(64,442,67,446,66,456);
bezierVertex(74,447,74,435,71,417);
bezierVertex(73,424,75,427,78,430);
bezierVertex(78,428,80,422,83,418);
bezierVertex(86,421,86,428,96,435);
bezierVertex(95,427,95,421,96,420);
bezierVertex(99,424,100,425,101,428);
bezierVertex(101,423,101,419,101,419);
bezierVertex(84,412,77,412,67,417);
endShape();
fill(107, 107, 107);
beginShape();
vertex(129,428);
vertex(120,425);
vertex(118,429);
bezierVertex(125,433,127,439,128,444);
bezierVertex(131,436,131,429,128,428);
endShape();
beginShape();
vertex(204,438);
bezierVertex(219,442,230,444,227,451);
bezierVertex(218,467,219,484,216,491);
bezierVertex(212,510,205,515,202,515);
bezierVertex(200,506,196,505,196,505);
bezierVertex(208,481,211,477,211,473);
bezierVertex(211,468,210,457,205,439);
endShape();
      return get();
		},
		scene_4: function(){
		  noStroke();
background(135, 217, 255);
fill(255);
beginShape();
vertex(154,51);
bezierVertex(127,62,137,85,154,83);
bezierVertex(161,100,222,116,243,99);
bezierVertex(311,160,341,151,382,128);
bezierVertex(432,135,451,90,425,64);
bezierVertex(434,39,411,26,394,37);
bezierVertex(410,23,408,7,402,0);
vertex(199,0);
bezierVertex(185,5,163,16,153,52);
endShape();
beginShape();
vertex(653,220);
bezierVertex(634,218,620,227,628,242);
bezierVertex(617,246,625,256,631,254);
bezierVertex(640,266,665,258,667,252);
bezierVertex(691,267,722,268,738,245);
bezierVertex(774,291,814,295,854,265);
bezierVertex(883,235,883,199,866,178);
bezierVertex(873,144,842,123,824,133);
bezierVertex(780,82,721,99,701,144);
bezierVertex(634,117,632,181,652,220);
endShape();
fill(68, 68, 79);
beginShape();
vertex(54,0);
bezierVertex(67,15,68,24,58,37);
vertex(44,114);
vertex(54,119);
vertex(73,114);
vertex(91,126);
vertex(92,138);
vertex(112,150);
vertex(127,143);
vertex(288,235);
vertex(289,250);
vertex(313,266);
vertex(333,261);
vertex(354,275);
vertex(356,188);
bezierVertex(343,178,358,166,367,160);
vertex(433,119);
vertex(495,174);
bezierVertex(508,183,504,194,494,199);
vertex(494,600);
vertex(0, 600);
vertex(0, 0);
endShape();
fill(50);
beginShape();
vertex(0,0);
bezierVertex(68,16,67,34,52,40);
vertex(26,126);
vertex(45,115);
vertex(71,130);
vertex(73,113);
vertex(92,127);
vertex(92,138);
vertex(124,157);
vertex(127,144);
vertex(288,234);
vertex(289,250);
vertex(331,278);
vertex(332,262);
vertex(355,275);
vertex(355,288);
vertex(375,299);
bezierVertex(392,312,402,328,407,335);
bezierVertex(407,260,405,217,405,202);
bezierVertex(391,189,361,184,356,187);
bezierVertex(349,182,354,174,393,175);
bezierVertex(440,175,522,179,500,193);
bezierVertex(495,200,495,200,493,200);
bezierVertex(493,589,493,599,493,600);
vertex(0, 600);
endShape();
fill(66, 67, 84);
beginShape();
vertex(175,57);
bezierVertex(158,51,158,51,156,43);
vertex(95,32);
vertex(159,37);
bezierVertex(170,24,191,26,194,24);
vertex(182,1);
vertex(194,2);
vertex(205,9);
vertex(209,2);
vertex(216,2);
vertex(219,12);
vertex(223,2);
vertex(230,2);
vertex(232,13);
vertex(235,5);
vertex(237,15);
vertex(246,2);
vertex(254,0);
vertex(249,31);
bezierVertex(272,44,272,52,272,52);
vertex(324,58);
vertex(273,59);
bezierVertex(262,72,249,75,245,76);
vertex(247,67);
bezierVertex(257,64,262,56,262,56);
bezierVertex(254,43,249,41,245,39);
bezierVertex(247,58,247,58,245,59);
bezierVertex(248,73,248,73,247,84);
vertex(267,125);
vertex(243,87);
bezierVertex(231,91,229,85,229,85);
bezierVertex(232,103,232,103,245,113);
bezierVertex(253,123,264,150,285,179);
bezierVertex(283,187,284,198,290,223);
bezierVertex(291,242,291,242,298,251);
bezierVertex(299,268,299,268,293,276);
bezierVertex(298,297,303,298,304,298);
bezierVertex(308,305,308,311,307,323);
bezierVertex(311,338,324,347,333,395);
bezierVertex(359,475,367,529,387,599);
vertex(0,600);
vertex(0,490);
bezierVertex(32,354,32,354,45,342);
bezierVertex(71,291,78,269,81,254);
bezierVertex(87,215,96,183,105,174);
bezierVertex(134,124,138,118,137,109);
bezierVertex(147,98,147,86,155,81);
bezierVertex(162,73,162,72,165,62);
bezierVertex(166,59,181,56,182,53);
bezierVertex(184,48,194,49,198,49);
bezierVertex(203,28,203,28,181,38);
bezierVertex(173,42,172,51,179,55);
endShape();

fill(36, 36, 51);
beginShape();
vertex(175,57);
bezierVertex(158,51,158,51,156,43);
vertex(95,32);
vertex(159,37);
bezierVertex(170,24,191,26,194,24);
vertex(182,1);
vertex(194,2);
vertex(205,9);
vertex(209,2);
vertex(216,2);
vertex(219,12);
vertex(223,2);
vertex(230,2);
vertex(232,13);
vertex(235,5);
vertex(237,15);
vertex(246,2);
vertex(254,0);
vertex(249,31);
bezierVertex(272,44,272,52,272,52);
vertex(324,58);
vertex(273,59);
bezierVertex(262,72,249,75,245,76);
vertex(247,67);
bezierVertex(257,64,262,56,262,56);
bezierVertex(254,43,249,41,245,39);
bezierVertex(247,58,247,58,245,59);
bezierVertex(248,73,248,73,247,84);
vertex(267,125);
vertex(243,87);
bezierVertex(231,91,229,85,229,85);
bezierVertex(232,103,232,103,245,113);
bezierVertex(253,123,264,150,285,179);
bezierVertex(283,187,284,198,290,223);
bezierVertex(291,242,291,242,298,251);
bezierVertex(299,268,299,268,293,276);
bezierVertex(298,297,303,298,304,298);
bezierVertex(308,305,308,311,307,323);
bezierVertex(311,338,324,347,333,395);
bezierVertex(359,475,367,529,387,599);
vertex(318,599);
bezierVertex(326,537,330,497,316,445);
bezierVertex(325,388,309,341,298,318);
bezierVertex(301,309,287,283,263,270);
bezierVertex(273,238,242,204,218,188);
bezierVertex(205,186,205,186,198,181);
bezierVertex(196,169,203,151,208,123);
bezierVertex(198,160,197,163,196,165);
bezierVertex(184,150,184,150,189,169);
bezierVertex(192,178,192,178,188,177);
bezierVertex(175,173,175,173,185,188);
bezierVertex(189,197,200,197,201,199);
bezierVertex(209,203,209,203,209,209);
bezierVertex(209,221,209,221,228,286);
bezierVertex(212,257,208,224,197,219);
bezierVertex(206,225,213,280,228,288);
bezierVertex(247,316,247,316,243,346);
bezierVertex(235,381,213,428,204,436);
bezierVertex(212,469,212,469,208,479);
bezierVertex(202,494,196,505,193,517);
bezierVertex(190,525,184,525,172,522);
bezierVertex(165,525,155,518,154,517);
bezierVertex(142,520,134,513,133,509);
bezierVertex(117,509,113,505,108,488);
bezierVertex(111,490,112,496,119,502);
bezierVertex(125,506,125,506,134,505);
bezierVertex(144,516,156,513,157,516);
bezierVertex(165,522,179,520,186,520);
bezierVertex(188,519,196,493,206,474);
bezierVertex(208,464,200,442,198,429);
bezierVertex(194,402,197,378,197,367);
bezierVertex(181,373,139,389,137,402);
bezierVertex(132,420,137,457,133,469);
bezierVertex(124,476,115,483,109,487);
bezierVertex(104,508,122,512,131,515);
bezierVertex(133,522,133,522,136,523);
bezierVertex(110,541,76,578,79,599);
vertex(1,598);
vertex(1,484);
bezierVertex(9,435,32,412,71,377);
bezierVertex(151,346,187,341,197,350);
bezierVertex(217,373,217,375,211,395);
bezierVertex(233,362,233,358,232,351);
bezierVertex(238,330,237,315,225,303);
bezierVertex(219,285,183,278,147,242);
bezierVertex(144,199,143,198,110,176);
bezierVertex(100,186,98,191,96,203);
bezierVertex(107,201,107,201,98,217);
bezierVertex(86,241,85,244,85,251);
bezierVertex(95,251,78,296,37,363);
bezierVertex(31,383,20,409,15,438);
bezierVertex(32,354,32,354,45,342);
bezierVertex(71,291,78,269,81,254);
bezierVertex(87,215,96,183,105,174);
bezierVertex(134,124,138,118,137,109);
bezierVertex(147,98,147,86,155,81);
bezierVertex(162,73,162,72,165,62);
bezierVertex(166,59,181,56,182,53);
bezierVertex(184,48,194,49,198,49);
bezierVertex(203,28,203,28,181,38);
bezierVertex(173,42,172,51,179,55);
endShape();
fill(255);
beginShape();
vertex(232,63);
bezierVertex(235,66,241,69,243,69);
vertex(243,76);
bezierVertex(238,71,232,68,232,63);
endShape();
beginShape();
vertex(234,53);
vertex(238,57);
vertex(238,59);
endShape();

fill(82, 50, 16);
beginShape();
vertex(61,426);
bezierVertex(55,435,53,441,53,448);
bezierVertex(58,441,60,441,60,441);
bezierVertex(56,454,60,465,53,476);
bezierVertex(56,474,60,471,63,466);
bezierVertex(62,475,57,492,63,504);
bezierVertex(69,494,78,488,84,476);
bezierVertex(85,487,83,492,80,495);
bezierVertex(94,487,101,469,101,448);
bezierVertex(102,449,104,456,104,463);
bezierVertex(112,450,109,431,109,426);
bezierVertex(111,425,113,419,113,413);
bezierVertex(104,420,99,419,96,418);
bezierVertex(96,413,85,409,80,412);
bezierVertex(69,410,64,416,61,426);
endShape();
fill(191, 159, 138);
beginShape();
vertex(116,474);
bezierVertex(105,462,110,455,112,452);
bezierVertex(114,446,108,441,106,441);
vertex(109,428);
bezierVertex(119,431,119,431,121,425);
bezierVertex(125,420,125,420,131,421);
bezierVertex(129,449,123,465,116,474);
endShape();
beginShape();
vertex(74,441);
bezierVertex(92,447,107,447,112,438);
bezierVertex(111,424,100,416,80,415);
endShape();
beginShape();
vertex(223,457);
bezierVertex(246,465,246,465,266,494);
bezierVertex(273,498,283,498,283,500);
bezierVertex(285,508,276,508,259,508);
bezierVertex(255,507,248,484,236,478);
bezierVertex(230,476,224,476,219,476);
bezierVertex(219,467,222,462,224,457);
endShape();
beginShape();
vertex(216,484);
bezierVertex(238,491,238,491,243,506);
bezierVertex(244,513,259,516,259,520);
bezierVertex(259,523,259,525,244,523);
bezierVertex(236,522,236,522,234,515);
bezierVertex(232,507,228,499,212,502);
endShape();
fill(82, 50, 16);
beginShape();
vertex(64,430);
bezierVertex(64,442,67,446,66,456);
bezierVertex(74,447,74,435,71,417);
bezierVertex(73,424,75,427,78,430);
bezierVertex(78,428,80,422,83,418);
bezierVertex(86,421,86,428,96,435);
bezierVertex(95,427,95,421,96,420);
bezierVertex(99,424,100,425,101,428);
bezierVertex(101,423,101,419,101,419);
bezierVertex(84,412,77,412,67,417);
endShape();
fill(107, 107, 107);
beginShape();
vertex(129,428);
vertex(120,425);
vertex(118,429);
bezierVertex(125,433,127,439,128,444);
bezierVertex(131,436,131,429,128,428);
endShape();
beginShape();
vertex(204,438);
bezierVertex(219,442,230,444,227,451);
bezierVertex(218,467,219,484,216,491);
bezierVertex(212,510,205,515,202,515);
bezierVertex(200,506,196,505,196,505);
bezierVertex(208,481,211,477,211,473);
bezierVertex(211,468,210,457,205,439);
endShape();
      return get();
		},
		scene_5: function(){noStroke();
background(135, 217, 255);
fill(255);
beginShape();
vertex(154,51);
bezierVertex(127,62,137,85,154,83);
bezierVertex(161,100,222,116,243,99);
bezierVertex(311,160,341,151,382,128);
bezierVertex(432,135,451,90,425,64);
bezierVertex(434,39,411,26,394,37);
bezierVertex(410,23,408,7,402,0);
vertex(199,0);
bezierVertex(185,5,163,16,153,52);
endShape();
beginShape();
vertex(653,220);
bezierVertex(634,218,620,227,628,242);
bezierVertex(617,246,625,256,631,254);
bezierVertex(640,266,665,258,667,252);
bezierVertex(691,267,722,268,738,245);
bezierVertex(774,291,814,295,854,265);
bezierVertex(883,235,883,199,866,178);
bezierVertex(873,144,842,123,824,133);
bezierVertex(780,82,721,99,701,144);
bezierVertex(634,117,632,181,652,220);
endShape();
fill(68, 68, 79);
beginShape();
vertex(54,0);
bezierVertex(67,15,68,24,58,37);
vertex(44,114);
vertex(54,119);
vertex(73,114);
vertex(91,126);
vertex(92,138);
vertex(112,150);
vertex(127,143);
vertex(288,235);
vertex(289,250);
vertex(313,266);
vertex(333,261);
vertex(354,275);
vertex(356,188);
bezierVertex(343,178,358,166,367,160);
vertex(433,119);
vertex(495,174);
bezierVertex(508,183,504,194,494,199);
vertex(494,600);
vertex(0, 600);
vertex(0, 0);
endShape();
fill(79, 82, 97);
beginShape();
vertex(204,297);
bezierVertex(217,269,216,249,220,236);
bezierVertex(223,212,223,212,230,192);
bezierVertex(227,171,234,167,236,163);
bezierVertex(233,148,228,117,228,113);
bezierVertex(230,108,230,108,230,104);
bezierVertex(243,97,236,93,242,88);
bezierVertex(243,83,248,70,257,63);
bezierVertex(253,57,259,52,259,52);
vertex(260,45);
vertex(252,48);
vertex(258,52);
vertex(255,56);
vertex(247,49);
vertex(211,46);
vertex(249,45);
vertex(259,40);
vertex(260,9);
vertex(266,19);
vertex(280,2);
vertex(288,21);
vertex(291,11);
vertex(290,38);
vertex(313,30);
vertex(290,42);
bezierVertex(297,43,300,46,301,48);
vertex(347,61);
vertex(298,54);
bezierVertex(293,56,289,56,288,56);
bezierVertex(298,52,301,48,288,47);
bezierVertex(289,59,289,59,293,65);
bezierVertex(300,67,300,67,303,72);
bezierVertex(307,72,307,73,310,79);
bezierVertex(327,91,327,91,327,106);
bezierVertex(332,122,332,129,337,133);
bezierVertex(352,138,365,135,369,137);
bezierVertex(372,139,371,139,366,140);
bezierVertex(372,140,376,142,365,144);
bezierVertex(374,147,374,147,360,147);
bezierVertex(364,150,370,152,363,153);
bezierVertex(356,148,353,148,348,148);
bezierVertex(350,163,351,192,345,218);
bezierVertex(339,221,334,220,329,211);
bezierVertex(317,184,317,175,317,169);
bezierVertex(313,158,307,152,307,149);
bezierVertex(309,172,310,179,308,188);
bezierVertex(311,193,313,199,314,201);
bezierVertex(322,230,327,250,333,294);
endShape();
beginShape();
vertex(229,111);
bezierVertex(212,141,212,141,178,150);
bezierVertex(176,153,178,193,189,200);
bezierVertex(221,190,232,164,240,144);
endShape();
beginShape();
vertex(191,152);
bezierVertex(177,155,149,164,162,164);
bezierVertex(160,169,164,168,164,169);
bezierVertex(167,169,169,170,175,167);
bezierVertex(192,159,192,159,192,159);
endShape();
fill(69, 64, 87);
beginShape();
vertex(193,209);
bezierVertex(194,218,198,217,203,215);
bezierVertex(206,210,206,208,206,205);
bezierVertex(210,210,213,206,213,201);
bezierVertex(234,203,248,226,213,232);
bezierVertex(233,232,216,222,204,216);
bezierVertex(198,219,189,219,193,209);
endShape();
beginShape();
vertex(219,219);
vertex(246,195);
vertex(229,197);
endShape();
beginShape();
vertex(338,142);
vertex(352,130);
vertex(353,134);
vertex(346,143);
endShape();
beginShape();
vertex(252,195);
bezierVertex(263,198,276,196,281,192);
bezierVertex(280,187,280,187,274,184);
bezierVertex(261,184,247,184,242,190);
bezierVertex(239,190,234,192,230,195);
bezierVertex(232,186,232,186,232,186);
bezierVertex(239,183,239,183,247,183);
bezierVertex(256,179,266,182,269,176);
bezierVertex(289,185,307,186,307,186);
vertex(308,196);
bezierVertex(288,192,276,209,282,218);
bezierVertex(274,213,273,203,270,202);
bezierVertex(265,226,265,277,268,291);
bezierVertex(245,259,245,251,251,197);
endShape();
beginShape();
vertex(234,123);
bezierVertex(255,133,259,141,263,141);
bezierVertex(246,134,236,136,236,136);
endShape();
beginShape();
vertex(277,143);
vertex(279,132);
vertex(292,124);
vertex(306,117);
vertex(332,119);
vertex(311,135);
vertex(304,134);
vertex(303,130);
vertex(292,132);
vertex(278,142);
endShape();
beginShape();
vertex(303,147);
vertex(315,132);
vertex(309,148);
vertex(323,141);
vertex(323,151);
vertex(315,160);
vertex(307,148);
endShape();
beginShape();
vertex(238,96);
vertex(235,88);
vertex(249,80);
vertex(249,72);
vertex(258,62);
vertex(257,58);
vertex(262,52);
vertex(258,7);
vertex(265,23);
vertex(281,1);
vertex(288,22);
vertex(291,12);
vertex(289,39);
vertex(310,30);
vertex(289,45);
vertex(288,68);
vertex(279,71);
vertex(270,74);
vertex(265,73);
vertex(255,87);
vertex(251,90);
vertex(260,100);
vertex(245,100);
vertex(241,104);
vertex(239,94);
endShape();
fill(44, 46, 54);
beginShape();
vertex(181,157);
bezierVertex(188,165,183,165,181,165);
bezierVertex(181,181,187,204,193,192);
bezierVertex(193,163,190,153,180,156);
endShape();
beginShape();
vertex(268,69);
vertex(268,65);
vertex(273,68);
vertex(270,58);
vertex(270,48);
vertex(278,46);
vertex(280,51);
vertex(283,47);
vertex(286,49);
vertex(283,65);
vertex(286,69);
vertex(278,69);
vertex(278,75);
vertex(275,69);
vertex(267,69);
endShape();
beginShape();
vertex(336,132);
vertex(326,141);
bezierVertex(326,174,326,174,332,201);
bezierVertex(342,226,343,225,348,194);
bezierVertex(348,171,349,149,349,148);
bezierVertex(333,148,328,148,336,133);
endShape();
fill(92, 78, 73);
beginShape();
vertex(0,600);
vertex(0,321);
bezierVertex(78,296,128,283,153,292);
bezierVertex(177,306,263,288,339,272);
bezierVertex(420,258,420,258,424,266);
bezierVertex(504,262,504,262,520,272);
bezierVertex(574,306,603,311,664,297);
bezierVertex(735,317,794,298,820,317);
bezierVertex(863,329,894,340,916,372);
vertex(916, 600);
endShape();
fill(71, 66, 61);
beginShape();
vertex(0, 600);
vertex(0,327);
bezierVertex(72,311,118,299,115,310);
bezierVertex(117,357,45,487,112,393);
bezierVertex(138,349,148,327,163,322);
bezierVertex(278,321,344,306,395,287);
bezierVertex(419,276,402,334,374,425);
bezierVertex(374,468,415,355,438,312);
bezierVertex(420,376,443,349,475,303);
bezierVertex(499,281,515,320,643,316);
bezierVertex(668,310,607,468,684,321);
bezierVertex(693,315,743,321,813,331);
bezierVertex(850,343,784,505,879,366);
bezierVertex(889,369,909,383,915,385);
vertex(9160, 600);
endShape();
fill(179, 144, 117);
beginShape();
vertex(666,391);
bezierVertex(658,355,658,355,668,309);
bezierVertex(669,302,669,302,662,302);
bezierVertex(662,298,668,300,668,300);
bezierVertex(660,291,662,290,670,297);
bezierVertex(665,287,668,285,674,296);
bezierVertex(675,293,672,285,676,288);
bezierVertex(680,296,678,299,678,299);
bezierVertex(675,310,681,333,680,375);
endShape();
fill(133, 133, 133);
beginShape();
vertex(622,366);
bezierVertex(642,381,662,379,669,379);
bezierVertex(680,380,693,385,695,393);
bezierVertex(674,383,662,384,638,389);
bezierVertex(619,382,619,382,619,382);
endShape();
fill(84, 50, 27);
beginShape();
vertex(675,384);
bezierVertex(677,389,678,400,691,404);
bezierVertex(705,413,719,401,719,394);
bezierVertex(724,374,722,363,714,339);
bezierVertex(710,341,713,362,711,363);
bezierVertex(704,351,702,324,694,322);
bezierVertex(697,337,695,348,695,352);
bezierVertex(687,345,687,339,687,332);
bezierVertex(684,340,682,349,683,360);
bezierVertex(679,358,676,348,672,345);
bezierVertex(677,358,674,374,676,384);
endShape();
fill(179, 144, 117);
beginShape();
vertex(524,284);
bezierVertex(522,289,526,303,526,312);
bezierVertex(526,316,527,321,537,317);
bezierVertex(558,316,572,320,585,321);
bezierVertex(584,342,577,370,581,384);
bezierVertex(614,361,614,361,614,361);
bezierVertex(622,340,627,307,612,303);
bezierVertex(610,303,603,300,600,300);
bezierVertex(587,281,565,265,556,255);
bezierVertex(552,234,554,227,555,224);
bezierVertex(556,217,552,215,546,223);
bezierVertex(539,236,540,246,532,254);
bezierVertex(531,256,531,261,542,263);
bezierVertex(549,263,566,298,578,302);
bezierVertex(560,304,551,304,543,306);
bezierVertex(535,297,531,295,530,287);
bezierVertex(528,280,522,281,525,291);
endShape();
beginShape();
vertex(603,410);
bezierVertex(632,424,665,427,691,403);
bezierVertex(701,396,705,388,704,371);
bezierVertex(693,365,691,369,684,369);
bezierVertex(682,373,677,375,674,376);
bezierVertex(677,384,675,385,673,385);
bezierVertex(662,386,645,389,619,388);
endShape();
fill(133, 133, 133);
beginShape();
vertex(689,404);
bezierVertex(677,416,660,417,639,417);
bezierVertex(625,417,609,401,616,395);
bezierVertex(623,386,634,389,640,388);
bezierVertex(629,375,622,368,621,361);
bezierVertex(621,355,621,345,619,333);
bezierVertex(613,334,608,343,601,343);
bezierVertex(593,344,583,345,577,347);
bezierVertex(572,352,553,349,557,358);
bezierVertex(564,365,578,398,610,415);
bezierVertex(639,428,670,423,678,416);
bezierVertex(686,413,693,406,694,403);
endShape();
fill(179, 144, 117);
beginShape();
vertex(681,398);
bezierVertex(674,408,660,405,648,395);
bezierVertex(632,359,632,358,633,305);
bezierVertex(633,299,633,297,627,287);
bezierVertex(632,287,634,295,634,295);
bezierVertex(634,288,634,284,630,280);
bezierVertex(631,276,635,279,639,292);
bezierVertex(639,285,638,279,638,279);
bezierVertex(638,277,644,277,642,292);
bezierVertex(646,283,645,275,648,284);
bezierVertex(647,291,644,300,646,315);
bezierVertex(651,332,651,345,651,355);
bezierVertex(657,364,661,377,664,383);
endShape();
fill(84, 50, 27);
beginShape();
vertex(675,384);
bezierVertex(684,406,690,404,696,404);
bezierVertex(713,406,715,397,721,386);
bezierVertex(715,373,705,371,707,358);
bezierVertex(700,366,705,373,703,380);
bezierVertex(696,377,696,365,690,358);
bezierVertex(688,366,683,379,689,392);
bezierVertex(683,390,678,379,673,377);
bezierVertex(676,385,676,392,680,395);
endShape();
fill(148, 114, 96);
beginShape();
vertex(550,317);
bezierVertex(562,316,578,317,598,317);
bezierVertex(596,325,596,329,593,344);
bezierVertex(595,323,593,321,596,321);
bezierVertex(579,323,572,319,553,317);
endShape();
beginShape();
vertex(555,278);
bezierVertex(560,290,569,297,580,302);
bezierVertex(563,285,555,274,550,270);
endShape();
beginShape();
vertex(645,389);
bezierVertex(653,404,660,405,669,403);
bezierVertex(662,410,644,405,645,390);
endShape();
		  return get();
		},
	},
	npcs: {
		doctor: function(){
			background(0, 0);
			Display.pixelArt([
			    '          !"            ',
			    '        !""""!#         ',
			    '       """##$#$#        ',
			    '       !!"!"!$"%        ',
			    '      ""!""$$"&\'        ',
			    '     ("""$!""&&\'        ',
			    '     ""!#"!$!&)\'        ',
			    '     &"!#$$$*&\'\'        ',
			    '     +,&"""&&-\'\'\'       ',
			    '       &&&&&&+ \'\'\'      ',
			    '       &&&&,,    .      ',
			    '       &""""&&          ',
			    '      """""""&          ',
			    '      !$!#$"!#%         ',
			    '      "#$!#$"#,         ',
			    '      ""$!$!$"&         ',
			    '     &/!###""#*         ',
			    '     ",!##"&#!!         ',
			    '     &&"#!"&"$&%        ',
			    '     ,""!!"&#$&&        ',
			    '    /*%00*"&!"#*        ',
			    '      0&&,**$"#,        ',
			    '      *&!!&&00*         ',
			    '      /$!##",&&         ',
			    '      &""""!&""         ',
			    '      ,"!"""&$#         ',
			    '      ,"""""&"!(        ',
			    '      ,!!$!!*"$$        ',
			    '      &!!!"$,"#$        ',
			    '      !!#""#*"!$        ',
			    '      ",#$""1"""        ',
			    '     &"&"#!##""#        ',
			    '     *"&""""$"""        ',
			    '     ,"&""!!""!"        ',
			    '     ,"*"""!"0!"        ',
			    '     &"*&"""!0!$2       ',
			    '     ,",&"!"0!""#       ',
			    '     &"*&""00!"""       ',
			    '     &!,,&000!"""       ',
			    '     &1*****!!"""       ',
			    '     *&***&&""!!#       ',
			    '     *&,,,""!"$"$       ',
			    '     *&,&"!!"!1!"       ',
			    '     ,,&"!#$"!*$$       ',
			    '     ,,&!"$"$"*!#       ',
			    '     **-$$$#"$*!#       ',
			    '     **""!##!","""      ',
			    '     **$$"""""*""#      ',
			    '     **"!#$"$"*"!!      ',
			    '    /,*!!"!""$*#"$      ',
			    '    ***!"""!!$*"!#      ',
			    '    **,"!""$"",!"#      ',
			    '    **,"!*##!$,"#"      ',
			    '    **,!!-#$"!,$!"      ',
			    '    ,*,"""#!"!,"!$      ',
			    '    **&"*"$"$!&!!"      ',
			    '   ****!,!""$#&&""0     ',
			    '   ****"*!#!##&&$!#     ',
			    '   ***,*,!""$&&&"#$     ',
			    '   ***3**"!!#*,&!"!     ',
			    '   ***&*""#"$&,&""!     ',
			    '   ***,*!#"!!*,&"$!     ',
			    '  *****,"!""#,*,!$"     ',
			    '  *****!""!!&***"""%    ',
			    ' *****!!!$!"****/"""    ',
			    ' ****!"""!"******,&4    ',
			    '        ""              ',
			], {
			    "0" : -13631424,
			    "1" : -12582800,    "2" : -14680032,    "3" : -12578704,    "4" : -14680016,    " " : -16777216,    "!" : -11530128,    "\"" : -11534224,    "#" : -11534208,    "$" : -11530112,    "%" : -14680000,    "&" : -12582816,    "'" : -1,    "(" : -15728624,    ")" : -4144960,    "*" : -13631408,    "+" : -15728608,    "," : -12582832,    "-" : -12578720,    "." : -3856,    "/" : -13631392,
			}, 3);
			return get(0, 0, 60, 202);
		},
		traveler: function(){
			background(0, 0);
			Display.pixelArt([
			    '                     !                                      ',
			    '                   ""#"$%&                                  ',
			    '                  "\'""$"#"$                                 ',
			    '                  \'##"#$"(#)                                ',
			    '                  \'\'"####*+,+-.                             ',
			    '                  ""\'/#$010233\'4                            ',
			    '                  "\'56-7*8,((8,                             ',
			    '     9:       ;<; \'5(+==>?0;"37                             ',
			    '     @A       $<7),8-B60-*?3###C                            ',
			    '     D&      ;EE#FG6=HI-=?+EE$;                             ',
			    '     JK     ;;7F<<7<0-LL-0;"E$7                             ',
			    '     JM     E$#NO"3G<-LE8P"EJ3;                             ',
			    '    D"MQ R<PO#2S8T("77EJEE#"EE7                             ',
			    '     JJ  U5U323<VG3W#;$E"EEEJ;                              ',
			    '     #E U(<7537GXXG7Y"ZEEEEJM                               ',
			    '     37 G#L(577FGXG7J;E5"E[                                 ',
			    '     N<7;23UE$]<GG]ZS2ELJ                                   ',
			    '     2\'332<3E;<GGGGE37;"                                    ',
			    '     N3E737#E;^GZGF;)7]5                                    ',
			    '     3#\'U<2#;;]G<_F;52Z5                                    ',
			    '     #\'3U33\';F7GFZ;;53FJ                                    ',
			    '     #`23U#\'3FFG<F;#(33;                                    ',
			    '     <#3U#N5;FFCZZ"ENOZ                                     ',
			    '     <##3UNE;F]]F^"#2#<                                     ',
			    '     3E#23E;F;CF7;E\'SF<                                     ',
			    '     O3]Ga\'^FFGGZ"#(O7F                                     ',
			    '    33#738#;F;;E]##O77F                                     ',
			    '    #7UUN3#;;ZGXZ(#3;7<                                     ',
			    '    333<U<NE3;GZ73bb_7;                                     ',
			    '    USNU<U#E;<FFV#"3#3E                                     ',
			    '    3S73E##;$;GZZ333Ua                                      ',
			    '    Y#5###\'\'$$<ZFE3cG<                                      ',
			    '     T   d)\'$;FGZ\'2e224                                     ',
			    '     7    ;EE;;FG;ZG7fg                                     ',
			    '     h    EE#$;b;GZi;j^                                     ',
			    '     7    N\'\';E;<7ke24e                                     ',
			    '     (    \'\'\')3E;G#Xjgl]                                    ',
			    '     (   m5#5#EEFGZnS(op                                    ',
			    '     3    ``#\'\'E7<?))qq                                     ',
			    '    %T     qqq)2,+?rr"J                                     ',
			    '    ^#     q)qq)6*?s"rM@                                    ',
			    '    7]     q))"q,+-t"uu@                                    ',
			    '    33     )v)))I--6JJJu                                    ',
			    '    37    )"")))#2Lq""@@M                                   ',
			    '    "\'    J"q)))""q""ruMM                                   ',
			    '    #3    r"qq))vq"""rJu@                                   ',
			    '    EE    w""q))q""q"""uu                                   ',
			    '    $E    w""qqqq """rJ"u                                   ',
			    '    $#    "q")""q """"""uM                                  ',
			    '    ##    "qqq""   q"JJJ"J                                  ',
			    '          ""qq"r   """"J$^                                  ',
			    '         "v")q"5   ""q"q\'J"                                 ',
			    '        J"q""""     qq)v)E"                                 ',
			    '       :"q")""#     vv")"##                                 ',
			    '       ""qq"""      """J3#                                  ',
			    '      r"""q)""      qw"q)J                                  ',
			    '      """qq)"       "r"v"J                                  ',
			    '     Ar"""""        "wJ"J"                                  ',
			    '    ^"wvv""         ""rq""                                  ',
			    '    7U)q""r         w"""ux                                  ',
			    '    7<<73x          JrJ"vx                                  ',
			    '    E5<<<3          $7EGy<3                                 ',
			    '    ##\'"`           ^7<a(y]                                 ',
			    '   #####             "))`"                                  ',
			    '   #3#3"             \'#$#3                                  ',
			    '  $#\'E#z              "\'##{                                 ',
			    '  O#]$E               #3#3                                  ',
			    ' $T(##7               #"72J                                 ',
			    ' #33#33               ##77#                                 ',
			    'J$75#$3#              33327"                                ',
			    '  #$E#3<7W]           3##3]S3                               ',
			    '     )%\'#\'7           #3N33(7]Sh7                           ',
			    '                      ##37#E3233]                           ',
			    '                      AA#  #7EJ                             ',
			], {
			    "0" : -5736376,
			    "1" : -4943776,    "2" : -11256796,    "3" : -12043228,    "4" : -10470364,    "5" : -13619176,    "6" : -6522808,    "7" : -11253712,    "8" : -10467292,    "9" : -8092540,    " " : 0,    "!" : -9671584,    "\"" : -13619164,    "#" : -12832732,    "$" : -12043216,    "%" : -11253700,    "&" : -11250616,    "'" : -13622248,    "(" : -10467280,    ")" : -14408680,    "*" : -4946860,
			    "+" : -6525880,    "," : -8891344,    "-" : -7312324,    "." : -4943788,    "/" : -4157344,    ":" : -9671572,    ";" : -12040144,    "<" : -10464208,    "=" : -6525892,    ">" : -4946872,    "?" : -5733292,    "@" : -12826564,    "A" : -10461100,    "B" : -9680860,    "C" : -9671608,    "D" : -12829636,    "E" : -12829660,    "F" : -11250640,    "G" : -9674692,    "H" : -5733304,
			    "I" : -8101828,    "J" : -12829648,    "K" : -12040120,    "L" : -9677776,    "M" : -12040132,    "N" : -12832744,    "O" : -12046300,    "P" : -8098756,    "Q" : -8882056,    "R" : -10461112,    "S" : -9677764,    "T" : -11256784,    "U" : -11253724,    "V" : -9671620,    "W" : -9674668,    "X" : -8885176,    "Y" : -8882068,    "Z" : -10461124,    "[" : -12037060,    "]" : -10464196,
			    "^" : -11250628,    "_" : -10461136,    "`" : -13622236,    "a" : -8888260,    "b" : -12040156,    "c" : -9674704,    "d" : -10464172,    "e" : -11259868,    "f" : -8095660,    "g" : -7306144,    "h" : -9674680,    "i" : -7309228,    "j" : -7306156,    "k" : -12046312,    "l" : -5727112,    "m" : -10464184,    "n" : -10470352,    "o" : -8891332,    "p" : -9680836,    "q" : -14405596,
			    "r" : -13616080,    "s" : -7312312,    "t" : -8101840,    "u" : -12826576,    "v" : -14408668,    "w" : -13619152,    "x" : -13616092,    "y" : -8098744,    "z" : -6513520,    "{" : -7306108,
			}, 3);
			return get(0, 0, 99, 222);
		},
	},
	statues: {
		god: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                                                                                                      ',
    '                                                 !!!""##$$                                                                                            ',
    '                                                 %%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&\'\'\'((()))***!!!"""###                                                 ',
    '                                                $%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                $%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                $%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                                 ',
    '                                                !%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%$                                                ',
    '                                                !%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%$                                                ',
    '                                                !%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%$                                                ',
    '                                                !%%%%%%%%%%%%%%%%%%%%%%%%%%%+%%%%%%%%%%%%%%%%%%%%%%%%$                                                ',
    '                                                *%%%%%%%%%%%%%%%%%%%%%%%%%%%,%%%%%%%%%%%%%%%%%%%%%%%%#                                                ',
    '                                                *%%%%%%%%%%%%%%%%%%%%%%%%%%%,+%%%%%%%%%%%%%%%%%%%%%%%#                                                ',
    '                                                *%%%%%%%%%%%%%%%%%%%%%%%%%%%-+%%%%%%%%%%%%%%%%%%%%%%%#                                                ',
    '                                                *%%%%%%%%%%%%%%%%%%%%%%%%%%%.+%%%%%%%%%%%%%%%%%%%%%%%#                                                ',
    '                                                *%%%%%%%%%%%%%%%%%%%%%%%%%%+/+%%%%%%%%%%%%%%%%%%%%%%%"                                                ',
    '                                                )%%%%%%%%%%%%%%%%%%%%%%%%%%+0+%%%%%%%%%%%%%%%%%%%%%%%"                                                ',
    '                                                )%%%%%%%%%%%%%%%%%\'%%%%%%%%+1,%%%%%%%%%%%%%%%%%%%%%%%"                                                ',
    '                                                )%%%%%%%%%%%%%%%%%)\'%%%%%%+.2-%%%%%%%&&%%%%%%%%%%%%%%"                                                ',
    '                                                )%%%%%%%%%%%%%%%%%))&%%%%,3424/%%%%%%(\'%%%%%%%%%%%%%%"                                                ',
    '                                                (%%%%%%%%%%%%%%%%%)*)\'&%%-42224+%%%&(*\'%%%%%%%%%%%%%%"                                                ',
    '                                                (%%%%%%%%%%%%%%%%%)***(%,122222/%%(***\'%%%%%%%%%%%%%%"                                                ',
    '                                                (%%%%%%%%%%%%%%%%%(**)%/42222224/%\'***\'%%%%%%%%%%%%%%!                                                ',
    '                                                (%%%%%%%%%%%%%%%%&))%/422222222223,(**\'%%%%%%%%%%%%%%!                                                ',
    '                                                \'%%%%%%%%%%%%%%%\'(%/4410/..-.//3124/%))&%%%%%%%%%%%%%!                                                ',
    '                                                \'%%%%%%%%%%%%%%(\'/440,+%%%%%%%%++-324/&)\'%%%%%%%%%%%%!                                                ',
    '                                                \'%%%%%%%%%%%%&(+110-+%%%%%%%%%%%%%%,044.\'\'%%%%%%%%%%%!                                                ',
    '                                                \'%%%%%%%%%%%%\'-43,%,,%%%%%%%%%%%%%%%,./11,\'%%%%%%%%%%!                                                ',
    '                                                &%%%%%%%%%%%(-40+%%,.%%%%%%%%%%%%%%%/,%+02/%%%%%%%%%%!                                                ',
    '                                                &%%%%%%%&&&\'+40+%%%+0+%%%%%%%%%%%%%-1+%%%.4-&%%%%%%%%!                                                ',
    '                                                \'&\'\'\'\'(((()\'33+%%%%%3-%%%%%%%%%%%%+13%%%%%.4,&%%%%%%%!                                                ',
    '                                          *+/0033333333333032,%%%%%%/0%%%%%%%%%%%%,4/%%%%%+10**))))((!                                                ',
    '                                               *.000331111420%%%%%%%-4%%%%%%%%%%%%.2,%%%%%%.243300///-&())"$                                          ',
    '                                                &%%+++++,,-1.%%%%%%%+4+%%%%%%%%%%%01%%%%%%%-230000///+#$$                                             ',
    '                                                &%%%%%%%%%%.3%%%%%%%+1+%%-/+,0/+%%0/%%%%%%%04+%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%+0-%%%%%%%/++.013330/+%0-%%%%%%,1.%%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%%+.-%%%%%%,%/.14/-110/%.,%%%%%%0.%%%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%%%%--+%%%%%+.456.,4674+,+%%%%+00%%%%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%%%%%+-,%%%%+0180+%-9:3+%%%%%-0.%%%%%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%%%%%%%,.+%%++++%%%%%+++%%%+0/,%%%%%%%%%%%%*                                                ',
    '                                                &%%%%%%%%%%%%%%%%%%+%%%%%%+--,%%%+%%+-,%%%%%%%%%%%%%%)                                                ',
    '                                                &%%%%%%%%%%%%%%%%%%%%%+%,-0..0.+%+%%%%%%%%%%%%%%%%%%%)                                                ',
    '                                                %%%%%%%%%%%%%%%%%%%%%%+%-00////0-%%%%%%%%%%%%%%%%%%%%)                                                ',
    '                                                %%%%%%%%%%%%%%%%%%%%%%+++00--.0./%%%%%%%%%%%%%%%%%%%%)                                                ',
    '                                                %%%%%%%%%%%%%%%%%%%%%%+/%,/313-,0%%%%%%%%%%%%%%%%%%%%)                                                ',
    '                                                %%%%%%%%%%%%%%%%%%%%%%%3.%%++++0/%%%%%%%%%%%%%%%%%%%%)                                                ',
    '                                                %%%%%%%%%%%%%%%%%%%%%%%04.%%%+/4-%+%%%%%%%%%%%%%%%%%%)                                                ',
    '                                               $%%%%%%%%%%%%%%%%%%%%%%%/243--124,%+%%%%%%%%%%%%%%%%%%)                                                ',
    '                                               $%%%%%%%%%%%%%%%%%%%%%%%/2221/221+%,%%%%%%%%%%%%%%%%%%)                                                ',
    '                                               $%%%%%%%%%%%%%%%%%%%%%%%/222/-423+%,%%%%%%%%%%%%%%%%%%)                                                ',
    '                                               $%%%%%%%%%%%%%%%%%%%%%%%0222./223%%.%%%%%%%%%%%%%%%%%%(                                                ',
    '                                               $%%%%%%%%%%%%%%%%%%%%%%%34.40124.%%/+%%%%%%%%%%%%%%%%%(                                                ',
    '                                               #%%%%%%%%%%%%%%%%%%%%%%+10++31/,+%%0.,,%%%%%%%%%%%%%%%(                                                ',
    '                                               #%%%%%%%%%%%%%%%%%%%%%%,1,-%./%+,%%/4110%%%%%%%%%%%%%%(                                                ',
    '                                               "%%%%%%%%%%%%%%%%%%%%%%---+%./%%.+%-2241,%%%%%%%%%%%%%(                                                ',
    '                                               "%%%%%%%%%%%%%%%,....-%,+-%%./%%-.%+143/,%%%%%%%%%%%%%(                                                ',
    '                                               "%%%%%%%%%%%%%%,14221-%%.+%%//%%+3.%+3221,%%%%%%%%%%%%(                                                ',
    '                                               !%%%%%%%%%,141332221-%%+-%%%//%%%-1,%,3441-.33,%%%%%%%(                                                ',
    '                                               !%%%%%%+..12224424/+%%%-+%%%/.%%%%03+%+/4131223+%%%%%%(                                                ',
    '                                               *%%%%%%,42240-040,%%%%--%%%%0.%%%%,4.%%%.440.1230+%%%%(                                                ',
    '                                               *%%%%%%%,/-+,31-%%%%%,/%%%%%0.%%%%%/2-%%%-12/+.12.%%%%\'                                                ',
    '                                               *%%%%%%++++.1/+%%%%%,0+%%%%%3.%%%%%+13+%%%+020++/.%%%%\'                                                ',
    '                                               )%%%%%+/4414/+%%%%%%0-%%%%%%3.%%%%%%-2-%%%%+02/./-%%%%\'                                                ',
    '                                               )%%%%%%%+.310.+%%%%/0%%%%%%%1.%%%%%%%31+%%%%,12410-%%%\'                                                ',
    '                                               (%%%%%%%%%+,041.%%.1+%%%%%%%1.%%%%%%%-4-%%,3443-,++%%%\'                                                ',
    '                                               (%%%%%%+,,%%%-14/+3-%%%%%%%%1.%%%%%%%+10+0223,%,/313+%\'                                                ',
    '                                               (%%%%%%0344/,%+0413+%%%%%%%%4.%%%%%%%%04143-%-322224,%\'                                                ',
    '                                               \'%%%%\'(%+,.41,%%,34.%%%%%%%%4-%%%%%%%+123,+%/4222223+%\'                                                ',
    '                                               \'%%%%))&%%%-30/+%+/40+%%%%%+4-%%%%%%,11.%%%-4-%,/42-&%\'                                                ',
    '                                               &%%%\'*)&%%%,/%-/,%%,31-+%%%+4-%%%%+.1/+%%+,+10+%%+/&&%&                                                ',
    '                                               &%%%(*\'%%%%//%%+..%%+-43+%%,4-%%%,1/,%%%+++%1//%%%%\'(%&                                                ',
    '                                               &%%&)\'%%%%%0-%%.43-%%%,31-%-4-%+.3-%%%%%+%%%1+0+%%%&(%&                                                ',
    '                                               %%%&\'%%%%%%/,%,14+--+%%+.10/4-,//+%%%%%%%%%%1+,.%%%%(&&                                                ',
    '                                               %%%&&0/+%%%.+%/2/%%+-+%%%,0440/,%%%%++%%%%%%1-%+%%%%\'&&                                                ',
    '                                               %%%&,241.+%-,+44,%%%+,+%%%+/3.%%%%%++%%%%%%%140.-+%%%&&                                                ',
    '                                               %%%&%/,+.3---321+%%%%%+++%%%+%%%%+,+%%%%%%-%1220010-+&\'                                                ',
    '                                               %%%%\'%%%%-1/3420%%%%%%%+,,%%%%%%,,+%%%%%%%3%324,+,043+&                                                ',
    '                                               %%%&(&%%%-44222.%%%%%%%%%,-,%%--,%%%%%%%%%4-324+%%%-31+                                                ',
    '                                               %%%(\'%%%%.42224-%%%%%%%%%%,./.1.%%%%%%%%%%40/24+%%%%+.,                                                ',
    '                                               %%()&%%%%/22224,%%%/30,%%%,+,.1.%,/,%%%%%%11.24,%%%%%%&                                                ',
    '                                               %\'*\'%%%%%022221+%%+042210./+%,4303-%%%+%%%34-24,%%%%%%&                                                ',
    '                                               &)\'%%%%%%322221+%,,+,-////1+-324/+%%%,3/%%02344,%%%%%%&                                                ',
    '                                               \'\'11-%%%%322223%%023,%%%%+430-/1+%%%%,423+-2214,%%%%%%&$                                               ',
    '                                              $(&.01.+%%322220%-2414/,%%%3+%%.1+%%%%+3223,4244,%%+,-,+*                                               ',
    '                                            )()***)\'.0+%/2222.+12/,.41/%%/+%%.1+%%%%%.22230224,%/1440-\'#                                              ',
    '                                          "&\')*(,/-%),3,.2222,/21,%%,043,.+%%.1+%%%%%+42223221+023.%\')**!#                                            ',
    '                                        #*******(+/11-.104222-13,,.-+%,013+%%.1+%%+,%%-422422104.%\'((*******(!*)!                                     ',
    '                                   (*************%.-040.222233/+.42441.+-4,%%.1++/140+%.4222214-%),/&************!                                    ',
    '                                  #\'%%%\'(***&+%%%%+.,32/32221/+.4222222434,%%.43222220+%/42224/,.11+)********(++&)*$                                  ',
    '                                 )&%+,.-+&\')-221/,%%./123422.%%+-./0342224,%%.222222224-+-1224.123+(********+1413/+("                                 ',
    '                               $&%%%%%+-3+%%+.12243,%./44224,%%%%%%%+,---0,%%.222222222410-022422/+(*******%44.+++,.,!                                ',
    '                              !%%%%%%%%%.1,%-4103424//412221+%%%%%%%%%%%%/,%%+4,%%%+,-.031414222222224130.\'42/%%%%%%,,*                               ',
    '                             )%%%%%%%%%%%03+.222431224222224-+%%%%%%%%%%%0,%%%3+%%%%%%%+-/342222222222222.023+%%%%%%%+%"                              ',
    '                            \'%%%%%%%%%%%%,43+322222222222222410,%%%%%%%%%3,%%%.+%%%%+/1422222222222222223/24+%%%%%%%%%%&(                             ',
    '                           )%%+%%+%%%,--++32.+0114414222222222223-,++%%%%.+%%%,++,.322222222222222244410-123,30-+%+.+%/+%%"                           ',
    '                          #+,%-+%.+%,143+%021+%+,,,+1222222222222411300.-../0333342222422222222221.-,,++,420%-240%+4.%0-,.%                           ',
    '                          (-,%0+00%%.42/%+122.%%%%%%-22222222222210/.--,,,,--./00/.--,,-./3122221+%%%%%%.220%%021+%33%./,3%                           ',
    '                          \'.+,0+1.%%.23%%.2223+%%%%%+03330/010,,-,,,,,,+++++%%%++++,,,,+%%%++-/3/+%%%%%%0223+%-41+%/1%.0+1+#                          ',
    '                         (%.,,3+1.%%01+%-/2221+%%%+-++++%%%%,-.-++++,-./0333333333/.,,+++%%%%%%++++..+%%3224,%+11+%/1%-1+3+&#                         ',
    '                        "%+.-,1+30%%30+--+3224,+--,%%%%%%+,-+%%+,,,,,+%%%%+++,+++%%%%%+%%%%%%+,%%%%%-33,12224--41+%03%.1+3+%&                         ',
    '                        (+4//,4,.3+%110,%%/222//+%%%%%+-,,+-0/.--,,++,,,++%%%%%%%%%%%%%%%+,,..%%%%%%%+044223.3141+%1/%/0,1-,%)                        ',
    '                        %-44302.%4-%3,%%%%0220,%%%%%%%%,011130.,,,--,,+%%%%%%%%%%%%%%%%-03.,+%%,0,%%%%+.2223+++-1+.4,%4331-,,%                        ',
    '                        %.21.113,20-0+%%%,42/%%%%%%%%-0.+,.01442430//.---,,,,,,,-../0330-++-/344/+%%%%%%/221+%%%3-44,/242-%+0%"                       ',
    '                        %/2.,,,03001-%%%%.20%%%%%%%%%%+030-,++,-/0033311114444411130/../3444130-,+%%%%%%+322.%%%.12433.,1-%+3+)                       ',
    '                        +32,-,%+++/-%%%%%34,%%%%%%%%%%%%+.4413.+%%%+++++,,,,,,,-..//////.--,,-03-%%%%%%%%+124-%%%,43,+%%1-%+3+\'                       ',
    '                       !+42+-,%%%%/,%%%%%43+%%%%%%%%%-,%%%+/142243/.-,+++++%%%%%%%+++++,-./3440,%%%%%%%%%%-423%%%+13+%%%3-%+1,\'                       ',
    '                       ),22%-,%%%%0,%%%%,2/%%%%%%%%%%-1.+%%%+-0122224444113300000333114442210,%%%%++%%%%%%%024%%%%13+%%%3.%+1,&                       ',
    '                       (-24%-,%%%+0,%%%%04,%%%%%%%%%%+143+%%%%%+-3222222222222222222222223-+%%%%%--%%%%%%%%,44%%%%31+%%%3.%+4,%                       ',
    '                       \'-21%.,%%%+3+%%%,13%%%%%%%%%%%%.224.+%%%%%%+/31422222222222224430,%%%%%%,./+-%%%%%%%%04+%%%01+%%%3/%-4,%$                      ',
    '                       &,43%.,%%%+3+%%%02/%%%%%%%%%%%%%32221/+%%%%%%++,.03144244410.-++%%%%%%,/3.%04,%%%%%%%+1-%%%/1+%%%0/%30%%$                      ',
    '                       &%/0%.,%%%,3%%%%42-%%+.+%%%++%%%,222224/+%%%%%%%%%%+,---,+%%%%%%%%%%+/44-%-22-++%%%%%%.0%%%-4,%%%00%3-%*                       ',
    '                       \'%,/%/,%%%-0%%%+22+%%,1,%%%+.+%%%/4222224/-,%%%%%%%%%%%%%%%%%%%%%+-/423+%,422-,+%%%%%%+3,%%+4-%%%/0+0,%                        ',
    '                       )%-/+/+%%%-0%%%+23%%%-4-%%%%/.%%%+.4222222413.+%%%%%%%%%%%%%%%+-014220+%+0222--,%%%%%%%/-%%%4-%%%.0+0-%                        ',
    '                       (%-.+0+%%%./%%%-2.%%%.2/%%%%,4+%%%%,3222222222210-+%%%%%%%+-/3422224-%%%-2224+.-%%%%%%%-.%%%1.%%%-3+//%                        ',
    '                       (%.-,0+%%%/.%%%.4,%%%.23%+%%+10%%%%%%.142222222222210../31222222243,%%%,1222/%/.%%%%%%%-.%%%00%%%,3+.0%                        ',
    '                       \'%.,,0%%%%0-%%%/1,%%%/24%-+%%/4,%%%%%%.-/422222222222222222222221-+%%%+12223+%0/%%%%%%%-/%%%/3%%%+3+-3+$                       ',
    '                       &%/,.0%%%%3,%%%33+%%%022%-.%%,23%%%%%%+..,.34222222222222222224/+%%%%%/2224,%%10%%%%%%%-0%%%.1%%%%3+,1,"                       ',
    '                       &%/,./%%%%3,%%+10+%%%322%-1+%%12.%%%%%%%-3/,,/3142222222222410+%%%%%%-4224,%%%43%%%%%%%,1%%%-1+%%%0,+1-!                       ',
    '                       %+0+/.%%%+1+%%+40%%%%122+,4.%%.24,%%%%%%%+0410,+,-32222224/,+%%%%%%%+4224.%%%+21%%%%%%%,4%%%,1,%%%/,%30)                       ',
    '                      "%+3+0-%%%.3+%%,2.%%%%122++43+%,423+%%%%%%%%/4221/-++,-.-+%%%%%%%%%%+1222.%%%%-24%%%%%%%+4+%%+1-%%%.,%/4\'                       ',
    '                      )%,3+3+%%%00%%%-4,%%%%422++14,%+324.%%%%%%%%%.4222240.%%%%%%%%%%%%%%/224/%%%%%024%%%%%%%+1,%%+3/%%%.-%.2&                       ',
    '                      &%.0+3+%%%3/%%%/4%%%%%422%%320%%-224,%%%%%%%%%-4222221+%%%%%%%%%%%%-4220+%%%%%324%%%%%%%%3-%%%03%%%-.%-4,$                      ',
    '                      %%/.-0%%%+1-%%%31%%%%%422%%/24,%%1223+%%%%%%%%%+.000.+%%%%%%%%%%%%,4223+%%%%%+124+%%%%%%%./%%%.2%%%,0%,4."                      ',
    '                     $%%3,0/%%%+4+%%+10%%%%%422+%,220%%/222/%%%%%%%%%%%%%%%%%%%%%%%%%%%+3223+%%%%%%+424+%%%%%%%+0%%%,2,%%,3%+1/*                      ',
    '                     !%%1+1.%%%-1%%%,1.%%%%%422-%%422,%+4224,%%%%%%%%%%%%%%%%%%%%%%%%%%.221+%%%%%%%-224+%%%%%%%%/%%%+4.%%+1+%30(                      ',
    '                     (%,3+1,%%%.0%%%-4-%%%%%422.%%0220%%/2221+%%%%%%%%%%%%%%%%%%%%%%%%,424-%%%%%%%%.224+%%%%%%%%.+%%%10%%%3-%.1&                      ',
    '                     %%//,1+%%%0-%%%.4+%%%%%422/%%.421,%-42223+%%%%%%%%%%%%%%%%%%%%%%+124-%%%%%%%%%0224+%%%%%%%%-+%%%/3+%%/.%+4,                      ',
    '                    $%+1--3%%%+3,%%%/4%%%%%%1220%%,4220%%32222.%%%%%%%%%%%%%%%%%%%%%%024.%%%%%%%%%+3224+%%%%%%%%,,%%%,1+%%,0%%1."                     ',
    '                    *%,1+..%%%,3+%%%33%%%%%%1223%%+3222,%,42224-%%%%%%%%%%%%%%%%%%%%-420+%%%%%%%%%,4224+%%%%%%%%+-%%%%1,%%%3%%00\'                     ',
    '                    (%-0%/,%%%-3%%%%4/%%%%%%3221+%%.2223%%022221,%%%%%%%%%%%%%%%%%%%323+%%%%%%%%%%-4224+%%%%%%%%,/%%%%0-%%%0+%.3+                     ',
    '                    \'%/-+3,%%%./%%%,2-%%%%%%3221+%%+1222.%,422223+%%%%%%%%%%%%%%%%%/21+%%%%%%%%%%%.2224+%%%%%%%%,0%%%%./%%%/-%,1+$                    ',
    '                    &%0,,3+%%%/-%%%04,%%%%%%0224,%%%/2223+%022222/+%%%%%%%%%%%%%%%,44,%%%%%%%%%%%%02224%%%%%%%%%,1+%%%-3%%%-/%+3-!                    ',
    '                   "%,3+.0+%%%3,%%+11,%%%%%%/224-%%%+4224-%,422224.%%%%%%%%%%%%%%%02.%%%%%%%%%%%%%42224%%%%%%%%%+1,%%%,1+%%+0%%/0(                    ',
    '                   \'%/0%0/%%%+3+%%+43+%%%%%%/222.%%%+02224+%0222222.%%%%%%%%%%%%%,40%%%%%%%%%%%%%,22221%%%%%%%+++4-%%%%3,%%+/+%-4%                    ',
    '                   %+1,%3,%%%//%%%-23+%%%%%%.2220%%%%/4222/%+1222221,%%%%%%%%%%%%/3+%%%%%%%%%%%%%022223%%%%%%%/0+43%%%%./%%%-+%,4-"                   ',
    '                  *%-1%+1%%%%1-%%%020%%%%%%%-2223%%%%.32224,%.2222221+%%%%%%%%%%+1,%%%%%%%%%%%%%+12222/%%%%%%%32+14+%%%+3%%%-,%%10(                   ',
    '                  &%3.%/0%%%,1%%%+32.%%%%%%%-2224+%%%.-22220++32222221+%%%%%%%%%/.%%%%%%%%%%%%%%,42222.%%%%%%+32,12.%%%%3+%%,/%%/1%                   ',
    '                  %,1+%3.%%%-/%%%,42,%%%%%%%,4224,%%%/-32224,%-42222223+%%%%%%%%.%%%%%%%%%%%%%%%.22222-%%%%%%+12,120%%%%/.%%+3+%+4-#                  ',
    '                 "%./%,1+%%%.,%%%.42%%%%%%%%+4222,%%%/0-22223%%/22222220%%%%%%%%%%%%%%%%%%%%%%%%022224,%%%%%%+12-321+%%%+0%%%.-%%30&                  ',
    '                 (%3,%-3%%%+0+%%%021%%%%%%%%+1222-%%%/4+32222.%%322222220+%%%%%%%%%%%%%%%%%%%%%+122221+%%%%%%+12/324,%%%%/+%%%/%%.1+#                 ',
    '                 &-3+%/-%%%-0%%%+42/%%%%%%%%+3222/%%%/2..42223+%,12222222/%%%%%%%%%%%%%%%%%%%%%-222221+%%%%%%+120322/%%%%-,%%%.+%,1-)                 ',
    '                #+1/%%0,%%%/-%%%.22-%%%%%%%%%02221%%%/24-12224-%%.22222224.%%%%%%%%%%%%%%%%%%%%/222223+%%%%%%+3210221%%%%,-%%%--%%33&                 ',
    '                \'.4+%,3+%%%0+%%+124,%%%%%%%%%/2224%%%0220322220%%%/42222222/%%%%%%%%%%%%%%%%%%%1222220%%%%%%%+3243224,%%%+0+%%+.%%.2,*                ',
    '                +3.%%//%%%-/%%%,424+%%%%%%%%%.2222+%%3224322221,%%+/14222221+%%%%%%%%%%%%%%%%%-222222/%%%%%%%%32412220%%%%/-%%%-+%,40%                ',
    '               ).3%%+1,%%+1,%%%/223%%%%%%%%%%-4222-%%1222222222-%%%%++,-.//-%%%%%%%%%%%%%%%%%+1222222/%%%%%%%%02242222,%%%+/%%%,-%%31+\'               ',
    '               &1.%%,3%%%,0%%%,122/%%%%%%%%%%,4222.%%4222222222-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%,4222222-%%%%%%%%/22222220%%%%/,%%%0,%-4-%!              ',
], {
    "0" : -12040120,
    "1" : -13092808,    "2" : -14145496,    "3" : -12566464,    "4" : -13619152,    "5" : -12050400,    "6" : -13621208,    "7" : -13096920,    "8" : -10473424,    "9" : -9420736,    " " : 0,    "!" : -5723992,    "\"" : -5197648,    "#" : -4671304,    "$" : -4144960,    "%" : -8882056,    "&" : -8355712,    "'" : -7829368,    "(" : -7303024,    ")" : -6776680,    "*" : -6250336,
    "+" : -9408400,    "," : -9934744,    "-" : -10461088,    "." : -10987432,    "/" : -11513776,    ":" : -10471368,
}, 4);
			return get(0, 0, 600, 600);
		},
		knight_1_head: function(){
			background(0, 0);
			Display.pixelArt([
			    '            !""#         ',
			    '          $$$$$$$"       ',
			    '         %$$$$$$$&&      ',
			    '         $\'($$$$)*&      ',
			    '         ++,$$$$&&&      ',
			    '         $$-$$$$&&&      ',
			    '         $$-$$$$&&&      ',
			    '         $$-$$$$&&&      ',
			    '         $$-$$$$&&&      ',
			    '        .$$/$$$$&&&!     ',
			    '        0$$$$/$&&&&1     ',
			    '        2$$$$+&&&3&&     ',
			    '         $4$$*&&&5&&     ',
			    '        0$$6&*&&73&&8    ',
			    '        $$)&9            ',
			    '        $79 :::::::2     ',
			    '        \' ;::::::::::    ',
			    '       < :::::::::::::   ',
			    '        :::::::::::::::  ',
			    '       ::::::::::::::::  ',
			    '      :::::::::::::::::: ',
			    '     =:::::::::::::::::: ',
			    '     :::::::::::::::::::>',
			    '     :::::::::::::::::::/',
			    '    .::::::?::::::::::::/',
			    '    :::::-::::::::::::::/',
			    '    ?::!@:::::::::::::::/',
			    '    ::-A::::::::::::::::/',
			    '    :::B::::::::::::::::/',
			    '    ::::::::::::::::::::/',
			    '    :::::::::::::::::::C/',
			    '    ::D::::::::::::::::@/',
			    '    ::?:::::::::::::::://',
			    '    ::-::::::::::::::::/>',
			    '    ::::::::::::::::::@/ ',
			    '    :::E::::::::::::::// ',
			    '    :::::::::::::::::@// ',
			    '    ::::B::::::::::::/// ',
			    '     :::B:::::::::::@/// ',
			    '     :::B::::::::::!///? ',
			    '     :::?::::::::::////  ',
			    '     :::C:::::::::@////  ',
			    '     :::!::::::::C/////  ',
			    '     :::::::::::://////  ',
			    '     ::::::$$$$"9//////  ',
			    '     :::::$$$$$$$$&////  ',
			    '     :::::$$$$$$$$$&&/@  ',
			    '     :::::$$$$$$$$$$&&F  ',
			    '     :::::$$$$$$$$$$$&9  ',
			    '     :::::$$$$$$$$$$$G1  ',
			    '    2:::::$$$$$$$$$$$$&  ',
			    '    ::::::$$$$$$$$$$$$$  ',
			    '    ::::::$$$$$$$$$$$$$" ',
			    '    ::::::$$$$$$$$$$$$$H ',
			    '   I::::::$$$$$$$$$$$$$& ',
			    '   :::2   $$$$$$$$$$$$&7 ',
			    '          $$$$$$$$$$$7&C ',
			    '          #$$$$$$$$$1&&  ',
			    '           J$$$$$$$&&&7% ',
			    '           !K$$$$H&&&&L" ',
			    '           !!!"&&&&&&LL, ',
			    '           !!!!!"7&&LLLL ',
			    '           !!!!!!!GLLLL, ',
			    '           G,M!!!GLLLLLN ',
			    '            ,LLLLLLLLLL  ',
			    '              LLLLLLLL   ',
			    '                LLLLL    ',
			    '                  ,,     ',
			], {
			    "0" : -7305048,
			    "1" : -9936768,    "2" : -6776656,    "3" : -10989464,    "4" : -10987424,    "5" : -11515824,    "6" : -9410416,    "7" : -10461064,    "8" : -5723976,    "9" : -8884080,    " " : 0,    "!" : -7831392,    "\"" : -8357736,    "#" : -5726024,    "$" : -8884072,    "%" : -6252368,    "&" : -10463112,    "'" : -9936776,    "(" : -10461088,    ")" : -10463120,    "*" : -11513760,
			    "+" : -9936784,    "," : -9410424,    "-" : -9934728,    "." : -6250312,    "/" : -9410432,    ":" : -7829344,    ";" : -7829336,    "<" : -6778712,    "=" : -5723968,    ">" : -7305064,    "?" : -8882040,    "@" : -9408376,    "A" : -8357744,    "B" : -9934736,    "C" : -8355688,    "D" : -9408392,    "E" : -9410440,    "F" : -8882032,    "G" : -9408368,    "H" : -9934712,
			    "I" : -7303000,    "J" : -8882024,    "K" : -8357728,    "L" : -9934720,    "M" : -7833440,    "N" : -5726032,
			}, 3);
			return get(0, 0, 75, 204);
		},
		knight_2_head: function(){
			background(0, 0);
			Display.pixelArt([
			    '             !"         ',
			    '            """"        ',
			    '           """"""       ',
			    '         #"""""""$      ',
			    '       %"""&\'"""""      ',
			    '      (((((((()"""      ',
			    '      ((((((((((\'"*     ',
			    '      "+\',-)(((((("     ',
			    '      "./,01112((((     ',
			    '      "34(0111115((     ',
			    '      "6"10111111\')     ',
			    '      ""41011111\'78     ',
			    '      ""\'1911155555:    ',
			    '      ""11.155555555    ',
			    '      ""1\')55555555     ',
			    '     ;"\'1555555555      ',
			    '     ""1(555555558      ',
			    '    <"11555555)&1=      ',
			    '    "11=555)\'>>>>"      ',
			    '    1: )55>>/<????      ',
			    '       5\'>"????????@    ',
			    '      4>/$???????????   ',
			    '     >>$?????????????@  ',
			    '    >A????????????????  ',
			    '   4$?????????????????? ',
			    '   ???????????????????? ',
			    '  ??????????????????????',
			    '  ??????????????????????',
			    '  ??????????????????????',
			    ' ???????????????????????',
			    ' ???????????????????????',
			    ' ?????????B<????????????',
			    ' ????????44?????????????',
			    'C??????B44B?????????????',
			    '?????B4444??????????????',
			    '?$"444444$??????????????',
			    '<4444444$???????????????',
			    'B44444A????????????????B',
			    'D4444$?????????????????A',
			    '"44"\'??????????????????4',
			    'E"\'\'\'?????????????????$4',
			    ' \'\'\'\'?????????????????DB',
			    ' \'\'\'\'$????????????????4 ',
			    ' \'\'\'\'\'$??????????????$4 ',
			    ' \'\'\'\'\'\'$?????????????"4 ',
			    ' \'\'\'\'\'\'$?????????????44 ',
			    ' \'\'\'\'\'/??????????????44 ',
			    '  \'\'\'\'??????????????B4A ',
			    '  \'\'\'\'??????????????44F ',
			    '  \'\'\'"??????????????44G ',
			    '  \'\'\'??????????????$44  ',
			    '  \'\'\'??B"4/////!???B44  ',
			    '  \'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'(44  ',
			    ' \'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'HHH  ',
			    ' A\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'HHH1 ',
			    '  ?????$444I/\'\'\'\'\'\'HHH  ',
			    '  ?????<44444444I\'\'HHH  ',
			    '  ?????<444444444445HH  ',
			    ' ??????B44444444444\')HJ ',
			    ' ??????B444444444444))% ',
			    ' ??????B444444444444))) ',
			    ' ??????B444444444444/)) ',
			    '???????B444444444444K)) ',
			    '???????C44444444444I))) ',
			    '??      44444444444&))) ',
			    '        4444444444I)))) ',
			    '        $444444444))))  ',
			    '         444444447)))L  ',
			    '          F44444I))))   ',
			    '            M44I))))    ',
			    '              J))))     ',
			], {
			    "0" : -13619152,
			    "1" : -10987408,    "2" : -12040104,    "3" : -12566464,    "4" : -9934720,    "5" : -11515808,    "6" : -10987416,    "7" : -10463112,    "8" : -9408384,    "9" : -13092808,    " " : 0,    "!" : -8884088,    "\"" : -9408376,    "#" : -8357744,    "$" : -8355688,    "%" : -9936784,    "&" : -10989464,    "'" : -10463120,    "(" : -11513760,    ")" : -11513752,    "*" : -7831400,
			    "+" : -10989472,    "," : -11513768,    "-" : -13092800,    "." : -12040112,    "/" : -9936776,    ":" : -8882040,    ";" : -7303008,    "<" : -8357736,    "=" : -9934728,    ">" : -10461064,    "?" : -7831392,    "@" : -7829344,    "A" : -9410432,    "B" : -8882032,    "C" : -6776656,    "D" : -8884080,    "E" : -8355696,    "F" : -7829352,    "G" : -6252376,    "H" : -11515816,
			    "I" : -9936768,    "J" : -6776672,    "K" : -10989456,    "L" : -10461072,    "M" : -9410424,
			}, 3);
			return get(0, 0, 72, 213);
		},
		knight_upper_arm: function(){
			background(0, 0);
			Display.pixelArt([
			    '                                  ',
			    '                                  ',
			    '                                  ',
			    '                  !""""#          ',
			    '               """"""""""""       ',
			    '             """"""$%$&"""""      ',
			    '           """""\'\'\'\'\'\'\'\'\'"""(     ',
			    '          """"\'\'\'\'\'\'\'\'\'\'\'\'\'")     ',
			    '         """&\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'*+    ',
			    '        """%\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'+    ',
			    '       """,\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'-    ',
			    '       "",\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'-.   ',
			    '      "".\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'"-   ',
			    '    """"\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'/--  ',
			    '   ,"\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'&--  ',
			    '   "%\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'&--0 ',
			    '   "\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'/--- ',
			    '  ""\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'---- ',
			    '  ""\'\'\'&\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'---- ',
			    '  ""&\'"""\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'---- ',
			    '  """"""""\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'---- ',
			    '   """   ""\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'---- ',
			    '    "    """\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'/---- ',
			    '         """\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'----1 ',
			    '         """\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'----  ',
			    '         """\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'/----  ',
			    '        2"""&\'\'\'\'\'\'\'\'\'\'\'\'\'\'----)  ',
			    '         """"".\'\'\'\'\'\'\'\'\'\'\'%----+  ',
			    '          """""""%\'\'\'\'\'\'\'\'---)++  ',
			    '            *"""""""$\'\'\'\'/-)+++3  ',
			    '            4/*""""""""""(+++++   ',
			    '            44//"""""""""*++++    ',
			    '            44$55))""""""-++$     ',
			    '            4/""66666)""")"       ',
			    '            """"-66666666)"       ',
			    '           $""""""-666-""""       ',
			    '           """"""""*"""""""       ',
			    '           """"""""""""""""       ',
			    '           """""""""""""""7       ',
			    '           4444""""""%\'\'\'\'        ',
			    '           44""""".\'\'\'\'\'\'\'        ',
			    '           44""""\'\'\'\'\'\'\'\'\'        ',
			    '           48""""\'\'\'\'\'\'\'\'\'        ',
			    '           49""""\'\'\'\'\'\'\'\'-:       ',
			    '            44"&\'\'\'\'\'\'\'\'/-4       ',
			    '            ;4""\'\'\'\'\'\'\'%--.       ',
			    '             8""\'\'\'\'\'\'\'---/       ',
			    '             <""\'\'\'\'\'\'----4       ',
			    '             """\'\'\'\'\'/----        ',
			    '             """\'\'\'\'\'-----        ',
			    '             4""\'\'\'\'-----         ',
			    '              """\'\'\'---)          ',
			    '               """%/-+(           ',
			    '                """+(             ',
			    '                  *               ',
			    '                                  ',
			    '                                  ',
			], {
			    "0" : -6250328,
			    "1" : -8884096,    "2" : -7829352,    "3" : -6776672,    "4" : -9408384,    "5" : -12040112,    "6" : -12042160,    "7" : -9408376,    "8" : -9934720,    "9" : -9410432,    " " : 0,    "!" : -6252376,    "\"" : -10989464,    "#" : -8355696,    "$" : -10461072,    "%" : -10461064,    "&" : -10987408,    "'" : -9934728,    "(" : -11515808,    ")" : -12040104,    "*" : -11513752,
			    "+" : -12042152,    "," : -9936776,    "-" : -11513760,    "." : -10463120,    "/" : -10987416,    ":" : -7303016,    ";" : -8884088,    "<" : -8882040,
			}, 3);
			return get(0, 0, 99, 165);
		},
		knight_lower_arm: function(){
			background(0, 0);
			Display.pixelArt([
			    '      !!!      ',
			    '     !!!!!"    ',
			    '    ##!!!!!!   ',
			    '   ####!!!!!!  ',
			    '   #####!!!!!! ',
			    '   ###$%&&\'!!! ',
			    '   $((((&&&&&& ',
			    '  ((((((&&&&&&)',
			    '  ((((((*&&&&&&',
			    '  ((($###!&&&& ',
			    '   ######!!!!& ',
			    '   ######!!!!! ',
			    '   ######+!!!# ',
			    '   ######)!!!, ',
			    '   -#####)!!!  ',
			    '    #####.!!!  ',
			    '    #####.!!!  ',
			    '    #####.!!!  ',
			    '    #####)!!*  ',
			    '    #####*!!/  ',
			    '    #####!!!   ',
			    '    #####!!!   ',
			    '   ( ####!!&   ',
			    '   ((((.*&&&   ',
			    '   0((((&&&&   ',
			    '  ###(((&&&.   ',
			    '  #####$!!!+   ',
			    '  #######!!!   ',
			    ' ########!!!   ',
			    ' ########.!!   ',
			    ' #########!*   ',
			    '#########.!    ',
			    '#########!!    ',
			    '#########!1    ',
			    ' "2#####$!     ',
			], {
			    "0" : -9408376,
			    "1" : -6776664,    "2" : -5723976,    " " : 0,    "!" : -10987416,    "\"" : -8355696,    "#" : -9408384,    "$" : -9410432,    "%" : -9934728,    "&" : -11513760,    "'" : -10989464,    "(" : -10461064,    ")" : -10461072,    "*" : -10463120,    "+" : -10987408,    "," : -6250320,    "-" : -7829352,    "." : -9936776,    "/" : -7831408,
			}, 3);
			return get(0, 0, 45, 105);
		},
		knight_upper_leg: function(){
			background(0, 0);
			Display.pixelArt([
			    ' !!!!!!!!""""""""#$$$',
			    ' !!!!!!!!"""""""$$$$$',
			    '%!!!!!!!!"""""""$$$$$',
			    '!!!!!!!!!"""""""$$$$$',
			    '!!!!!!!!!"""""""$$$$&',
			    '!!!!!!!!!""""""\'$$$$( ',
			    '!!!!!!!!!""""""#$$$$)',
			    '!!!!!!!!!""""""#$$$$',
			    '!!!!!!!!!""""""*$$$$',
			    '!!!!!!!!!""""""+$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$$',
			    '!!!!!!!!!""""""$$$$,',
			    '!!!!!!!!!""""""$$$$-',
			    '!!!!!!!!!""""""$$$$.',
			    '!!!!!!!!!""""""$$$$',
			    '/!!!!!!!!""""""$$$$',
			    ' !!!!!!!!""""""$$$$',
			    ' !!!!!!!!""""""$$$$',
			    ' !!!!!!!!""""""$$$$',
			    ' !!!!!!!!""""""+$$$',
			    ' !!!!!!!!""""""#$$$',
			    ' !!!!!!!!"""""""$$#',
			    ' !!!!!!!!0""""""*$1',
			    ' 2!!!!!!!3""""""""',
			    '  !!!!!!!4""""""""',
			    '  !!!!!!!5""""""""',
			    '  !!!!!!!6""""""""',
			    '  !!!!!!!!""""""""',
			    '  !!!!!!!!""""""""',
			    '  7!!!!!!!""""""""',
			    '   !!!!!!!""""""""',
			    '   !!!!!!!""""""""',
			    '   !!!!!!!"""""""8',
			    '   8!!!!!!"""""""',
			    '    !!!!!!5""""""',
			    '    !!!!!!!"""""6',
			    '     !!!!!!""""9',
			    '      !!!!!!4!!',
			    '       %!!!!!!',
			    '         !!!2',
			], {
			    "0" : -10463120,
			    "1" : -8357752,    "2" : -7303008,    "3" : -10461072,    "4" : -9936776,    "5" : -9934728,    "6" : -9410432,    "7" : -8884088,    "8" : -7829352,    "9" : -9934720,    " " : 0,    "!" : -9408384,    "\"" : -10987416,    "#" : -11513760,    "$" : -12040112,    "%" : -8355696,    "&" : -11513768,    "'" : -10989464,    "(" : -9934736,    ")" : -8355704,    "*" : -11515816,
			    "+" : -12040104,    "," : -10461080,    "-" : -8882048,    "." : -6776672,    "/" : -8357744,
			}, 3);
			return get(0, 0, 63, 135);
		},
		knight_lower_leg: function(){
			background(0, 0);
			Display.pixelArt([
			    '           !"                     ',
			    '           !!!#                   ',
			    '           $!!!!%                 ',
			    '            &!!!!!                ',
			    '             ##&!!!!\'(((((((      ',
			    '             ###)!!!!((((((**     ',
			    '            +#####!!!,----.&!     ',
			    '            ######)!!!/--0(((+    ',
			    '            #######!!!!0--(((1    ',
			    '            #######&!!!2--(".+    ',
			    '            #######"!!!34(***     ',
			    '            #######"!!.((****     ',
			    '            #######&!!((5**!&%    ',
			    '            +######!!!54.(((()    ',
			    '             #####)!!!!0((((((.   ',
			    '             #####6!!!!02((((("   ',
			    '              ###"!!!!5-0((((((-  ',
			    '              ##)!!!!!/03****5&5  ',
			    '               )!!!!!&4((6******  ',
			    '               !!!!!!7((((******  ',
			    '               !!!!!8)((((******) ',
			    '               !!!!)-(((((6*****9 ',
			    '               !!!9-0((((((*****6 ',
			    '               !!&--/((((((*****5 ',
			    '               %:---3((((((*****5 ',
			    '                 ---0((((((*****5 ',
			    '                 ----0(((((*****6 ',
			    '                 -----8((((*****; ',
			    '                 ------2((.*****  ',
			    '                 -------((6*****  ',
			    '                 <------4(5****=  ',
			    '                  ------8(5****   ',
			    '                  ------7(*****   ',
			    '                  -------(****    ',
			    '                  -------(****    ',
			    '                   ------(****    ',
			    '                   ------(****    ',
			    '                   ------4***#    ',
			    '                   ------4***     ',
			    '                   ------2***     ',
			    '                   ------2***     ',
			    '                  >------3***     ',
			    '                  -------8***     ',
			    '                  0------0***     ',
			    '                 !!"------5**?    ',
			    '                @!!!57----9**!    ',
			    '                !!!!!!2---(***    ',
			    '                8!!!!!!)--(****   ',
			    '               ;-05!!!!!)-.****(  ',
			    '              !!5--"!!!!!95*****  ',
			    '             !!!!5--2!!!!A5*****  ',
			    '            6!!!!!6--,!!!AA*****9 ',
			    '           <-2!!!!!9--3!BAAB****5 ',
			    '      C\'<-----7!!!!!2--3BAAD****! ',
			    '   E-----------0!!!!!7--"AAA***** ',
			    '   -------------0!!!!57)&AAA***** ',
			    '  ----0222877----2BFAA!(AAAA***** ',
			    ' ---2(((((((((((((AAAAAAAAAA****" ',
			    '---2((((((((((((((BAABGH          ',
			], {
			    "0" : -8355688,
			    "1" : -7305064,    "2" : -9408376,    "3" : -8884080,    "4" : -9410424,    "5" : -10987408,    "6" : -10463120,    "7" : -8357736,    "8" : -8882032,    "9" : -10461064,    " " : 0,    "!" : -10987416,    "\"" : -9934728,    "#" : -9408384,    "$" : -6776672,    "%" : -7829360,    "&" : -10461072,    "'" : -6778712,    "(" : -9934720,    ")" : -9410432,    "*" : -10989464,
			    "+" : -6776664,    "," : -8884088,    "-" : -7831400,    "." : -9936776,    "/" : -8357744,    ":" : -8882040,    ";" : -7829352,    "<" : -7829344,    "=" : -8355696,    ">" : -7831392,    "?" : -6778720,    "@" : -8884096,    "A" : -12040104,    "B" : -11513760,    "C" : -6776656,    "D" : -11515808,    "E" : -6252368,    "F" : -11515816,    "G" : -9408392,    "H" : -6776680,
			}, 3);
			return get(0, 0, 99, 177)
		},
		axe: function(){
			background(0, 0);
			Display.pixelArt([
			    '    !         ',
			    '   !!!   "    ',
			    '  #!!!   $    ',
			    '  !!!!%& \'    ',
			    ' #!!!%%%()(   ',
			    ' !!!*%%%($    ',
			    ' !!!+%%(($    ',
			    ' !!!%%%($$    ',
			    ' !!!%%,($$    ',
			    ' !!!%%%($$    ',
			    ' !!!%%%-$$    ',
			    ' !!!%%%%()    ',
			    ' !!!.%%%()/   ',
			    ' !!!0   $$$   ',
			    ' #!!1   $$$   ',
			    '  !!    $$$   ',
			    '  !!    $$$   ',
			    '  !!    $$$   ',
			    '   !    $$$   ',
			    '   !    $$$   ',
			    '   !    $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        $$$   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        222   ',
			    '        333   ',
			    '        333   ',
			    '        333   ',
			    '        333   ',
			    '        333   ',
			    '        $$$   ',
			    '        %45   ',
			    '        555   ',
			], {
			    "0" : -8355696,
			    "1" : -7829360,    "2" : -10987416,    "3" : -10985368,    "4" : -9932680,    "5" : -9934728,    " " : 0,    "!" : -7827296,    "\"" : -9934736,    "#" : -7303008,    "$" : -10987424,    "%" : -9408392,    "&" : -6776672,    "'" : -11513768,    "(" : -10987432,    ")" : -12040120,    "*" : -7829352,    "+" : -9408384,    "," : -9934744,    "-" : -10461088,    "." : -9406336,
			    "/" : -7303024,
			}, 3);
			return get(3, 0, 30, 200);
		},
		spear: function(){
			background(0, 0);
			Display.pixelArt([
    '    !         ',
    '    "         ',
    '   ##         ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   ##$        ',
    '   !"$        ',
    '   "$         ',
    '   $%         ',
    '    &         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '    !         ',
    '   \'(         ',
    '    #         ',
    '   )#*        ',
    '    #         ',
], {
    " " : 0,
    "!" : -10461080,    "\"" : -9934736,    "#" : -9408392,    "$" : -10987424,    "%" : -12040120,    "&" : -12040112,    "'" : -8882056,    "(" : -10987432,    ")" : -6776672,    "*" : -8355704,
}, 3);
			return get(9, 0, 9, 207);
		},
	},
	logo: {
		ring: function(){
			background(0, 0);
			Display.pixelArt([
    '                                !!"#$$%&&\'(("!                            ',
    '                            "$&)*+,+-../0122344$#                         ',
    '                         "&&-*2/.++55-6789:-.;/;<%%"                      ',
    '                      !$=*$>?.@@%\'$\'(A\'BCDEF&GH900I=J"                    ',
    '                    "K%#=/LMK\'N2&$)=OPQRSTLUSV$+W51X-&4"                  ',
    '                  !$\'"=.5K+%C%XEFYZ[]^_`Wa-bcBdef,\'T1@*&%!                ',
    '                !(% %-<+g(hij%Dk?6UlmnopqrUsUJtuvuwxLy1LJ+\'               ',
    '               "$ #zTMFY{|}~¡¢££?;UC¤XXT¥¦§¨b©ªa«-xz=¬4®06\'%!             ',
    '             !#$!&L¦Tx=¯°«±²³{5¦0¬¬0NX´´¥N1´Eltµ¶p·_¸¹)º»/;(J"            ',
    '            !(\'(6Y».¼E½¾¿ÀÁm10;¬Y&\')YÂF.¬¬Ã;0NTN´MX1BÄ$ÅÆ´D;&J#           ',
    '           !\'\'&27%&P$ÇÄÈwÉ¯¤.ÂYÊ$"!ÊYgÂÂ,=$,ÃF¬;NXÇË¤ÌÍ\'£ÎÏÇL,&(          ',
    '          !$$+;Ð)ueÑMÒ©c´56FY&,FF.¬:T´¥TX;.FÂY-Ó+5\'ÔnEÕfUcÏÇÖÓ6K(         ',
    '         !$4-9J,ØÙ{¸ÚÛzI.Y,)Â.0XTXNT¥¥¥¥X2;..8tJÜ~,M{4hÝ{HÇ¡C,-+&#        ',
    '        !$$.0ÞÂhßàáâÔE;Y)*Y2¬X@/;2TTT´T¥¥X0;/8¤?Kpã¤xxÄ(Õ*5PPä+L&J"       ',
    '       !\'K/åXÂ¡æÂçè¾´.Ê$Y20´MNDT/Y68--*é,.-6&b8êëì¦2xw®í4îÂ=Qï&(L%%!      ',
    '       \'&;¥ð´ë«ñò2´XL+Ê.X¥Tól2*)6&(\'($\'$&=*=;<¤Dôõ¸¤öxøùë{Ó.úÍû*J-(\'      ',
    '      "%-TÄ.KTüýþÿNÂ&,;Tå¦¦1)6&#!!      !"(&*M5kxĀ¦ā¯ĂJă½$½MíèĄąĆë=*#     ',
    '      $\'T7-ą³b¼*ć-F%Y¬´D¾TY6&(!             "%*45ë?ĈĉÜāĊċ%ÂtČčĎď¼D2&4!    ',
    '     "J;¬$AĐfđĒ¦JÂ%Y;2¾T;$+(!                 \'J»L2DöēēĔ.òĕë¬Ėùėî.9L$\'    ',
    '     %Ê0¤$Ę_ęĚěë.%+6/X´-*%"                    "&U½8ðĜĝòëė2ÜT.DýĞ-\'N)J!   ',
    '    "\'07LûQuğĠE¬Y+TtX´.6\'!                      "&ºJøġoîĢģĤĥĞTćÌĦħ.7¦ì\'   ',
    '    &L0\'&ąbĨĩ´XF,DETX.6\'                         #+4ĕĀĪīHĬDĭĮēD9įħÜJN*)!  ',
    '   "%XxFfİıİĲT.&-¾ÓT.6$                           $½ĞEwĥĳĴn¤ē£Ò;ĵ{|Ķ¾>"#  ',
    '   +.ÇxÂ-Vķ£ĸ¬,58¾.;6%!                           "4K½Ĺĺ©Ļļt¤Ľø0ľĿhvUX=&! ',
    '  "(TÎĳx-ŀŁłX¬Y1E¯:K&!                             #*\'ĺŃÕåńŅĞ1797ņU=ńD;»# ',
    '  %-¥ēŇåÇňŌō;);-ŎTY=(                               $-ŏøÔŐ¯¼l«´;XőĐ.7ÿå%$ ',
    ' !J;ó4J4īª>D¬+96Ò84$                                !J»wĤÿlkŒ7DÂ¬¿öööĮå-J ',
    ' #&X¯}œŔŕŖ´/*.2¡TĆJ"                                 (*"¤kÄ´=*9=.DlŒĤ.Ä/%"',
    ' &-TÔµŗŘř5¥;Ê¬´ÊX)$                                   %6s\'ùŚ2ćë,.Dþ¶ś&cT((',
    ' );I¡ŜŝĚŞ¥N@-*şY.=#                                   #=Ĳ¡UŠÿh¯9.X7vÑ$\'T&$',
    '!%NH½SšŢţT0*D8cĉ4%!                                    %6JŤ4ťð5şÂ2JŦ`ç6N6$',
    '#&N4%ÛeĩŧT/,;7/¬)$                                     #=««āŨù*9Ê;2ũOB«@@=',
    '\'6N\'AŪOODX;Êlū¤;=(                                     !&½ĂMÐŬëE,8ŭŮůŰSH2J',
    'KLTÊű]´¥¥0¬-Èxb.J#                                      $66lE5x7YH´ŲųÙPŴ´J',
    'J@¥Y%ºŵŶt0&@2D6=%"                                      \'4-ŷ2ŸÇ6Y¦ÄŹźdCÖÇ=',
    'J;¥¥XIěė9;Ê¾1.6%$!                                      #+4¯KŻxż-2ÄīŽŇÿĳ¥)',
    '=/¥ŇŇÎžƀN0Â¦ë¸.J$!                                      #)4Ɓ@«ş2,0ÄƂtÔÔēå)',
    '=/T*T½ĒƃN07¾Eĺ@=%!                                      #)½M¥)ėNÊ?ðƄŕE.=T+',
    'J/TàXkņƅN08þHĦ=6%!                                      ()JëöÓ/0=¬wč{Ɔ=¡N+',
    'J;X+LkPƇX0D¤¤E/.&"                                      ()=TxĲ7¬+;=@ō^&{T)',
    '=;T%½sŔeT0UHUU9;=(                                      \'=)Çƈ¥ë..;DƉƊƆƋ{T=',
    '=@T$fƆƌÀ/0Jæ¤4D¬J\'                                      $*+üÔŴƍÂ.0XŲŲR&ÖT)',
    'J.T$İĨ½}DXK´ŠƎ\'zK%!                                     %=Ĳ1¬ş7..0@ũƏZÂxX=',
    '%LTtfƆƐƑ5T*āŵƒþDz=#                                    "%\'XêDø;);N¡ŞP&F2/*',
    '\'*TĳYAął5T2ĽHƓxƔD($                                    \'%+ø¡´ŨYƕ;NħņĔ6*X;=',
    '#$TDðÇE¼aT2H7ŐƖ4Ɨ¦4#                                  !\'=6Ƙ¯8IYF0@ƙtƚ¥ÇÇ-&',
    '!KXå¥ƎĭīƛĸXxD¦Ɯt¯¦fK"                                 \'J=2¥Ð+F)¬0ĞųƝéƋū´4\'',
    ' +;ÇÐŜŏĀƄ5XLƞpƟ4õ{ŏJ$                                !$&&9¤D¬ÂY0¥¡Ơ{+Â´NJ"',
    ' &-¥xO{Jļ¶TJ«m¼ĕƒ4JĲJ\'                               $==;ŨlT¬).0Tơß§-&X;)!',
    ' ($¥Dºú¦Ƣƣ´;ćƤ.2¿Ɵã¸#J(                             #)&=;¥7¬,Y;NtƥûV)ŷT-$ ',
    ' !=0ÇĲ}ƦhB;¥8ĕćƘ;ŸK½««=#                           "&$½¦É22Â\'.0TƧĚ}ı=¦¥4# ',
    '  %6Çƨ.ŌHŸÜƩLƪĽƫnēĴbÈJ-=#                         !%%*¥xƒ¦L)Â;0JƥƬŝƭÔ¥;)! ',
    '  #&XTKİv»ħĂÇŻĹ´p¦ðÔƮćW»#K#"!!!"""               !%%)¥ÐxT.$,¬DNáƯPÅ~2¥»\'  ',
    '   &6¥ÄÂuƌ8ưÿ4ćƱģÝƘő.ƲƳƴî"J*666+""%\'            !&$&¥D¥ò+Â)¬îD;Ô¿MƵøå2="  ',
    '   \'K0T\'=şxwö´mÜƒŐ2ëý7ĵƶ&9*$xkM2nĞ¡b!          #)$ÊlTń*;F&.NTöŒƷMEÎ¥å\'\'   ',
    '   !&+¥ÇĳÏÎÈ7@@õ£¨Ƹƹńƺ¹ĉoWƻĭ6ƼĞį¤D½"         !C+Ê2¥=¾1.F&.T¼ƽ5Ý¾XK¥Î.J"   ',
    '    (=;åÏÎüÐŒ´.½£ƾ¾Ħ¯ƿǀĤĔt´ēxDǁÿ7%!         (+$L¦ĸ>00FF&F0´ūǂǃO{F%¥T½\'    ',
    '     %\'XĳÿÎCħÖL.ŻlƽāǍbň¦5aĒ¼Ð¦4´+!       !#=».0¥¾TTFÂÂ)FXEÇǎǏǐ¡İÊ7Ç&&!    ',
    '     !J-Tĳk«^Å+.¬.îŻWǑǒǓǔmƽŠ¢lDĜ«$!!!"($=&=Y1¥ĸ¾X;YÂ+ÊFN7ǕǖŪǗhû%ǘÇ.=#     ',
    '      #*/Tĳ©KƝŔÊFXDÊ8bĤėxŹġ{½tÌÄÐ7ÊîzM*,.8¦¾>DNDÂ)Ê\'Y.;£ŠćǙǚƐP~`Ç/*#      ',
    '       \'JXTEĝhQVY,¼Nü.¦ƟÇǛƞwDƍI¦7*86´´TT¥TT´DIÂÂÂ$ÊÂ;0I6´*ðJƵSvÇ;&#       ',
    '        $4X¥ÄxSS-¯øa0¬.ŏŻĈǜƮ¹ŒǕ7ŏşL;NTXX/?12FÂF%ÊÂ¬0X;½J;/+X)ǚx?$\'        ',
    '         $b1ÇDĳExǝŤŵƺ;0-½īƳĝ¤Ý¦ÒëlLÓ-¬¬LÂY,,)+YF.0X1¦ǞǟĘL(.ūÇÇ0%\'         ',
    '          $=;ÇĳĳùƵųÛ.ŠƒTMć¿5Ą2Eė´¬Ê%$$\'$%,Â..¬;0XX7ǞǠØiPƆÁÊ´å/½(          ',
    '           \'=¦´´¯ÅQǡb6fǙ´8Ľ2¦5.9¬;;;¬¬¬¬;;;/0;0TöŤēǢIŜŗǙǣkXT+J(           ',
    '            ()=X¥ƍƖ^Ǥè,¬TŻƻl090XTXNN0?;0XTXX@~]¡X/ŇwŗñŚtD´N)4!            ',
    '             #%KXÇxĲ]{Y¬î¾āǕŐƍ61T´z/;@@>T´ǥƀǦǧǨŔÂ.êĳĺÎĳÇT.J$!             ',
    '              !$*YTålø,.ÐT4ǩǗ#ÞŠ¬.ùǃǪǫƏQ@;þi{b=~|$=ĳÎåT0%)"               ',
    '                #&=/T¥2¦¥E.6uŀSQłéş5UǬĘ+YYE%ŬmǭǭǐºøT¥1Ê=(!                ',
    '                 !$=*0T¥ÇDǁ&,fPŬƍUūŔǏǢǮǯƮǐĸUşÎÄc¯DT1)=$"                  ',
    '                   !$)=@X¥T¦*l»)~lÎ5J4ºŔAS¥¦N¥¥T0-(Ê\'"                    ',
    '                      (&+J80XX?X¾ÇǰÇ´ş£¤lXTTX.+$+&(!                      ',
    '                        !\'%J=4=L;;;;;0/;;.,)&)%(!                         ',
    '                            "#\'$&&J=**=J&%$("!                            ',
], {
    "0" : -11776,
    "1" : -994816,    "2" : -994801,    "3" : -7861,    "4" : -3961,    "5" : -990916,    "6" : -4021,    "7" : -990931,    "8" : -990946,    "9" : -990961,    " " : -1,    "!" : -16,    "\"" : -31,    "#" : -46,    "$" : -91,    "%" : -106,    "&" : -121,    "'" : -76,    "(" : -61,    ")" : -136,    "*" : -4006,
    "+" : -151,    "," : -181,    "-" : -4036,    "." : -4066,    "/" : -11761,    ":" : -990976,    ";" : -7921,    "<" : -7846,    "=" : -3991,    ">" : -11746,    "?" : -7936,    "@" : -7906,    "A" : -983071,    "B" : -3939916,    "C" : -983131,    "D" : -998641,    "E" : -1985521,    "F" : -226,    "G" : -7801,    "H" : -1981666,
    "I" : -7891,    "J" : -3976,    "K" : -3946,    "L" : -4051,    "M" : -987061,    "N" : -15616,    "O" : -2953036,    "P" : -7868176,    "Q" : -5902096,    "R" : -5902111,    "S" : -983101,    "T" : -1002496,    "U" : -986986,    "V" : -1966096,    "W" : -990841,    "X" : -998656,    "Y" : -196,    "Z" : -1966111,    "[" : -1966141,    "]" : -1969966,
    "^" : -3936046,    "_" : -2953021,    "`" : -3936061,    "a" : -7895251,    "b" : -987001,    "c" : -1981636,    "d" : -9834256,    "e" : -8851216,    "f" : -983116,    "g" : -983251,    "h" : -986956,    "i" : -1969981,    "j" : -4915231,    "k" : -1977766,    "l" : -994771,    "m" : -3947671,    "n" : -5917591,    "o" : -5921446,    "p" : -6908341,    "q" : -6912181,
    "r" : -5921491,    "s" : -2956936,    "t" : -990901,    "u" : -3936016,    "v" : -4922941,    "w" : -4942321,    "x" : -2972401,    "y" : -990796,    "z" : -7876,    "{" : -986971,    "|" : -2956891,    "}" : -2952991,    "~" : -983161,    "¡" : -987016,    "¢" : -7883656,    "£" : -1977781,    "¤" : -990886,    "¥" : -1989376,    "¦" : -994786,    "§" : -3932176,
    "¨" : -4930711,    "©" : -4934566,    "ª" : -6908326,    "«" : -987046,    "¬" : -4081,    "®" : -1981621,    "¯" : -1981651,    "°" : -6892906,    "±" : -7879786,    "²" : -7883626,    "³" : -6889021,    "´" : -1985536,    "µ" : -4926826,    "¶" : -7887511,    "·" : -7887526,    "¸" : -3943816,    "¹" : -6908356,    "º" : -983146,    "»" : -3931,    "¼" : -3955441,
    "½" : -987031,    "¾" : -998626,    "¿" : -4934581,    "À" : -1969951,    "Á" : -3939901,    "Â" : -211,    "Ã" : -241,    "Ä" : -2968561,    "Å" : -6889006,    "Æ" : -2956876,    "Ç" : -2972416,    "È" : -2964676,    "É" : -4934596,    "Ê" : -166,    "Ë" : -5929216,    "Ì" : -6904486,    "Í" : -4919071,    "Î" : -4946176,    "Ï" : -5933056,    "Ð" : -994756,
    "Ñ" : -5905951,    "Ò" : -3955411,    "Ó" : -987091,    "Ô" : -990856,    "Õ" : -8866651,    "Ö" : -1985491,    "Ø" : -1969936,    "Ù" : -7872031,    "Ú" : -6896746,    "Û" : -1969996,    "Ü" : -1977751,    "Ý" : -5909851,    "Þ" : -3901,    "ß" : -6896731,    "à" : -983191,    "á" : -10828876,    "â" : -10836586,    "ã" : -986941,    "ä" : -1966171,    "å" : -2976256,
    "æ" : -6900616,    "ç" : -5905996,    "è" : -8862811,    "é" : -983176,    "ê" : -1973881,    "ë" : -1981681,    "ì" : -3916,    "í" : -5925316,    "î" : -987076,    "ï" : -986926,    "ð" : -2968546,    "ñ" : -4942291,    "ò" : -1977826,    "ó" : -15601,    "ô" : -4934551,    "õ" : -6900631,    "ö" : -4942306,    "ø" : -2968531,    "ù" : -5925331,    "ú" : -7872046,
    "û" : -6885136,    "ü" : -987106,    "ý" : -2956921,    "þ" : -5921476,    "ÿ" : -3959281,    "Ā" : -2960746,    "ā" : -3947701,    "Ă" : -1973896,    "ă" : -4938406,    "Ą" : -8858941,    "ą" : -2952976,    "Ć" : -983266,    "ć" : -3951541,    "Ĉ" : -9853591,    "ĉ" : -994741,    "Ċ" : -2964706,    "ċ" : -2960761,    "Č" : -7902961,    "č" : -9865111,    "Ď" : -2964631,
    "ď" : -5909881,    "Đ" : -5902126,    "đ" : -11827336,    "Ē" : -7895221,    "ē" : -3955426,    "Ĕ" : -1977736,    "ĕ" : -2964661,    "Ė" : -5929186,    "ė" : -1977811,    "Ę" : -2949166,    "ę" : -10824991,    "Ě" : -13801096,    "ě" : -6904456,    "Ĝ" : -3955396,    "ĝ" : -6912226,    "Ğ" : -2960791,    "ğ" : -11823451,    "Ġ" : -6896716,    "ġ" : -994696,    "Ģ" : -8882116,
    "ģ" : -8885986,    "Ĥ" : -5917606,    "ĥ" : -7899106,    "Ħ" : -5913736,    "ħ" : -4922956,    "Ĩ" : -9838096,    "ĩ" : -11804176,    "Ī" : -11831221,    "ī" : -5921461,    "Ĭ" : -8878291,    "ĭ" : -994726,    "Į" : -2972371,    "į" : -5913751,    "İ" : -983086,    "ı" : -3936076,    "Ĳ" : -990871,    "ĳ" : -3959296,    "Ĵ" : -6904501,    "ĵ" : -5925301,    "Ķ" : -5905981,
    "ķ" : -12791071,    "ĸ" : -1002481,    "Ĺ" : -6904516,    "ĺ" : -2968516,    "Ļ" : -7887541,    "ļ" : -9861286,    "Ľ" : -1977796,    "ľ" : -8870551,    "Ŀ" : -9849706,    "ŀ" : -2949136,    "Ł" : -13793386,    "ł" : -1970041,    "Ń" : -11823481,    "ń" : -1973926,    "Ņ" : -11831206,    "ņ" : -7891336,    "Ň" : -5929201,    "ň" : -8874406,    "Ō" : -1970011,    "ō" : -5906026,
    "Ŏ" : -4934611,    "ŏ" : -2960806,    "Ő" : -7883641,    "ő" : -7887496,    "Œ" : -4938451,    "œ" : -983056,    "Ŕ" : -4919056,    "ŕ" : -8874391,    "Ŗ" : -8870521,    "ŗ" : -6892876,    "Ř" : -13789531,    "ř" : -11831176,    "Ś" : -5929171,    "ś" : -5913706,    "Ŝ" : -3936031,    "ŝ" : -9845806,    "Ş" : -11823466,    "ş" : -1985506,    "Š" : -2956906,    "š" : -5905936,
    "Ţ" : -12818056,    "ţ" : -8858956,    "Ť" : -5917576,    "ť" : -4938436,    "Ŧ" : -11819596,    "ŧ" : -3943801,    "Ũ" : -2960776,    "ũ" : -11827306,    "Ū" : -8858926,    "ū" : -1989361,    "Ŭ" : -3939931,    "ŭ" : -1002466,    "Ů" : -12810346,    "ů" : -10832701,    "Ű" : -8855071,    "ű" : -986911,    "Ų" : -12798781,    "ų" : -12814201,    "Ŵ" : -2972386,    "ŵ" : -4926841,
    "Ŷ" : -9853546,    "ŷ" : -998611,    "Ÿ" : -1973941,    "Ź" : -10848166,    "ź" : -10832731,    "Ż" : -1973911,    "ż" : -987121,    "Ž" : -7895206,    "ž" : -6912196,    "ƀ" : -10836571,    "Ɓ" : -2968486,    "Ƃ" : -10848181,    "ƃ" : -10832716,    "Ƅ" : -11835031,    "ƅ" : -11819611,    "Ɔ" : -4919086,    "Ƈ" : -11811901,    "ƈ" : -998581,    "Ɖ" : -9841966,    "Ɗ" : -12802636,
    "Ƌ" : -983206,    "ƌ" : -7868191,    "ƍ" : -2964646,    "Ǝ" : -4946161,    "Ə" : -9849661,    "Ɛ" : -3943771,    "Ƒ" : -10844296,    "ƒ" : -2964691,    "Ɠ" : -7879801,    "Ɣ" : -1973851,    "ƕ" : -983221,    "Ɩ" : -3947686,    "Ɨ" : -1977706,    "Ƙ" : -3951571,    "ƙ" : -10832746,    "ƚ" : -3959266,    "ƛ" : -7891366,    "Ɯ" : -3939946,    "Ɲ" : -6888991,    "ƞ" : -4938466,
    "Ɵ" : -7891381,    "Ơ" : -2953066,    "ơ" : -10840456,    "Ƣ" : -6900601,    "ƣ" : -9865126,    "Ƥ" : -4938421,    "ƥ" : -10848151,    "Ʀ" : -2953051,    "Ƨ" : -10844311,    "ƨ" : -1977841,    "Ʃ" : -4938481,    "ƪ" : -7891396,    "ƫ" : -2960821,    "Ƭ" : -12798766,    "ƭ" : -4919101,    "Ʈ" : -5909866,    "Ư" : -10840441,    "ư" : -7906816,    "Ʊ" : -990826,    "Ʋ" : -6904531,
    "Ƴ" : -4930681,    "ƴ" : -5925286,    "Ƶ" : -5898256,    "ƶ" : -3943846,    "Ʒ" : -7875946,    "Ƹ" : -9853576,    "ƹ" : -8874421,    "ƺ" : -8870536,    "ƻ" : -3951556,    "Ƽ" : -4930726,    "ƽ" : -6908371,    "ƾ" : -8874436,    "ƿ" : -7887481,    "ǀ" : -10852036,    "ǁ" : -1981606,    "ǂ" : -9853561,    "ǃ" : -5921431,    "Ǎ" : -7895236,    "ǎ" : -9838111,    "Ǐ" : -5909836,
    "ǐ" : -6885166,    "Ǒ" : -8870566,    "ǒ" : -6912241,    "Ǔ" : -10844326,    "ǔ" : -5913796,    "Ǖ" : -7879771,    "ǖ" : -6892891,    "Ǘ" : -1966126,    "ǘ" : -1970056,    "Ǚ" : -6904471,    "ǚ" : -3939961,    "Ǜ" : -4934536,    "ǜ" : -2968501,    "ǝ" : -8878231,    "Ǟ" : -9845836,    "ǟ" : -8862781,    "Ǡ" : -4930651,    "ǡ" : -12794911,    "Ǣ" : -5913721,    "ǣ" : -7868206,
    "Ǥ" : -10840411,    "ǥ" : -9857401,    "Ǧ" : -6900586,    "ǧ" : -10821151,    "Ǩ" : -11800336,    "ǩ" : -2953006,    "Ǫ" : -6904441,    "ǫ" : -8870491,    "Ǭ" : -1966156,    "ǭ" : -3951526,    "Ǯ" : -4926811,    "ǯ" : -6889036,    "ǰ" : -3963136,
}, 3);
			return get(0, 0, 220, 224);
		},
	},
	player: {
		fall: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                          ',
    '                       !!!                                                ',
    '                      !!!!                                                ',
    '                      !!!                                                 ',
    '                     !!!!                                 ""              ',
    '                     !!!!                                 !#"             ',
    '                     !!!!                                 !!$"            ',
    '                     !!!                                  !!!%"           ',
    '                     !!!                                  !!!!"           ',
    '                     !!!       &&&                         !!!!"          ',
    '                     !!!       &&&                         !!!!"          ',
    '                     !!!      &&&&                         !!!!("         ',
    '                     !!!      &&&                         )"""*+""        ',
    '                     !!!     &&&&                        ,"!!!!-."        ',
    '                     !!!     &&&&                      !!!"!!!!/   "      ',
    '                     !!!     &&&                    0#"1!!"*!     &2"     ',
    '                     !!!     &&&                  !!"!3""!#4      &&5"    ',
    '                     !!!     &&&              !!!!!-"!!6""         &&17   ',
    '                     !!!     &&&             !!!!!!89!!!:          &&&"   ',
    '     ;<=            !!!!     &&&            !!!!!!!"!!!            &&&1)  ',
    '   >??????@         !!!!     &&&           !!!!!!!!"!!             &&&&"  ',
    '  A??????B         !!!!!    &&&&          !!!!!!!!CD               &&&&"  ',
    '  ?????E\'FEE       !!!!     &&&&          !!!!!!                  1&&&&"G ',
    ' ???????2EEE      !!!!!     &&&&         !!!!!!!                &"&HI"I"" ',
    ' ????????JEEEK    !!!!H     &&&        LLLL!!!!!            MI&&&"N&&&&O"P',
    ' ??????????EEE   !!!!!    &&&&&       QLLLLL!!!       &&&&&"&""&&"R&&&    ',
    ' ??????S????GE   !!!!!  &&&&&&        LLLLLLL!!   &&&&&&&&(O&&""&"8       ',
    'T?????J!!!J???  !/\'EEK&&&&&&&         LLLLLLLL\'&&&&&&&&&&&"&&&K""         ',
    '@?????!!!/\'H????EEE&&&&&&&&&KUV      LLLLLLLW&&&&&&&&&&&&XY&&&&           ',
    'Z????????<EE\'[?]E&&&&&&&&&&EE\'VV^_   LLLLLLLLW&&&&&&&&&&&"&&&             ',
    ' ??????????EEEEE&&&&&&&&&&EEEELV_VLVULLLLLLLLL&&&&&&&&   M                ',
    ' `??????????\'EE&&&&&&&&&EEEEEELVVVLVVLLLLLLLLLa&&&&&                      ',
    '   ???b??????cE&&&&&&&KEEEEEEEVVVVLV^LLLLLUVVUL&&&&                       ',
    '    ??d?????e?fE&&&&&EEEEEEEEgVVV^UVLLLLLLLLLLUVh&                        ',
    '      ???????b SK&iEEEEEEEEE\'VVVVLVLLLLLLLLLLLLLVV                        ',
    '      jk ??l?e   &EEEEEEEEEmVVVVVLLLLLLLLLLLLLLLUVV                       ',
    '          ??e?e      EEEHnVVVVVVVLLLLLLLLLLLLLUVVV                        ',
    '           ?o??p          L_VVVVVULLLLLLLLLLUVV_LL                        ',
    '            ?qro             LVVVVLLLLLLLL_VVLLL                          ',
    '             s  l              VVVVLLLLLLVULLt                            ',
    '             u                   VVVLLLLLLL                               ',
    '                                  UV_LLLLL                                ',
    '                                   LV^LL                                  ',
], {
    "0" : -9945048,
    "1" : -10471400,    "2" : -6260640,    "3" : -9418712,    "4" : -8368072,    "5" : -7315384,    "6" : -6786992,    "7" : -11526144,    "8" : -11524088,    "9" : -5736360,    " " : 0,    "!" : -5210008,    "\"" : -12050432,    "#" : -10999800,    "$" : -6789048,    "%" : -7841736,    "&" : -4155264,    "'" : -4683664,    "(" : -10473448,    ")" : -7837608,    "*" : -10997744,
    "+" : -8894424,    "," : -6262696,    "-" : -6789040,    "." : -10999792,    "/" : -5207960,    ":" : -5210016,    ";" : -9414584,    "<" : -11519968,    "=" : -8886184,    ">" : -9412536,    "?" : -12572656,    "@" : -10467280,    "A" : -7833496,    "B" : -9940936,    "C" : -8892368,    "D" : -7837616,    "E" : -4681616,    "F" : -8366016,    "G" : -8890304,    "H" : -5207952,
    "I" : -11526136,    "J" : -10995680,    "K" : -4681608,    "L" : -9408400,    "M" : -9418704,    "N" : -5734296,    "O" : -7841728,    "P" : -7311264,    "Q" : -8355712,    "R" : -9945056,    "S" : -12048368,    "T" : -9938872,    "U" : -10987432,    "V" : -11513776,    "W" : -6256520,    "X" : -8892360,    "Y" : -9947112,    "Z" : -8886192,    "[" : -11519976,    "]" : -5736352,
    "^" : -9934744,    "_" : -10461088,    "`" : -7305096,    "a" : -8882064,    "b" : -13625336,    "c" : -6786984,    "d" : -13623288,    "e" : -14149624,    "f" : -9942992,    "g" : -6258584,    "h" : -5205896,    "i" : -4157320,    "j" : -8359840,    "k" : -10465224,    "l" : -13099000,    "m" : -6784920,    "n" : -7309200,    "o" : -13096944,    "p" : -13096936,    "q" : -11515848,
    "r" : -10991568,    "s" : -13098984,    "t" : -8882056,    "u" : -9412528,
}, 3);
			return get(0, 0, 222, 129);
		},
		idle: function(){
			background(0, 0);
			Display.pixelArt([
			    '                                                                          ',
			    '',
			    '           !!!"#',
			    '        $""""""""%',
			    '       """""""""!"&',
			    '       "!"""""""""\' ',
			    '       """""""""(""',
			    '      !""""\'!""")\'"  ',
			    '      """\'!*+\'"",\'!   ',
			    '      "-!""./0"\'12 ',
			    '     !3!!""\'*\'"451  ',
			    '      !""""61\'",5, ',
			    '      """"",1\'",5 ',
			    '      """!\'2,"\',1  ',
			    '     7"8!9:2(";',
			    '     "9"3",11%<',
			    '     9"=>\',,11? ',
			    '    3@!A BCDD21,',
			    '     !3  DDDDD15',
			    '     "   DDDDD111',
			    '         DDDDD115E',
			    '         DDDDD1111',
			    '         DDDDF1111',
			    '         DDDD11111',
			    '         DDDD11111,',
			    '         DDDD111111',
			    '         DDDD11111,',
			    '         DDDF1,211G',
			    '         DDD,1555EH',
			    '         DDDHIJKGLH',
			    '         DDDHHHMHHH',
			    '         DDDNHHHHLOP',
			    '          DDDHHMHHMQ',
			    '          DDDRMMMLHQ*',
			    '          DDDDSHHHHT*/',
			    '         UVDDFWMMMSX/*/',
			    '         HUDDDYMMHHZ)*//',
			    '         HS[DDDWMMMMW,**/',
			    '         LLMDDD[MMHH] //*/',
			    '         MHMRDDDSMMMH  /*/',
			    '         MHMMDDD>MMHH   ***',
			    '         MHMM^DDDMMHH   */*',
			    '        _LHMM[DDDMMHH',
			    '        MHUMMMDDDMMHM',
			    '        MHMMMRDDDMMMM',
			    '        MHMMMZED`MMMM_',
			    '        MHMMHMSMMaMMMM',
			    '        HHHGDDb>cWMMM',
			    '        Hd DDDDDF)))*',
			    '           DDDDDD****',
			    '           DDDDD2***/',
			    '           DDDDD****/',
			    '           DDDDC**/**',
			    '           FDDDe**/*E',
			    '          DDDDD,**/*',
			    '          DDDDD//*/*',
			    '         fDDDDgg/**/',
			    '         hiDDD/f+//',
			    '        jDf+D **f//',
			    '        DDDfk //lm^',
			    '        DDD1f *//n',
			    '        CD2?  *+of',
			    '        fffp  ffpg',
			    '        f,CD qr/*',
			    '        iDD  st/*',
			    '        pfu   ufu',
			    '        DDv   **w',
			    '       xDFfD ***f+',
			    '       DDfDDD,*f/*/,',
			    '       FfCDDDDD2+/*//*',
			    '       f,DDDDDDDD*/***/',
			    '      ffffy,DFDzff?{|ff0',
			    '           (fff}  }0;',
			], 
			{
			    "0" : -10866146,
			    "1" : -4944786,    "2" : -4289416,    "3" : -14150656,    "4" : -7573936,    "5" : -4289426,    "6" : -5600146,    "7" : -10858446,    "8" : -13495296,    "9" : -13492726,    " " : 0,    "!" : -12834796,    "\"" : -12834806,    "#" : -12832226,    "$" : -12174296,    "%" : -12179436,    "&" : -12176866,    "'" : -12179446,    "(" : -11521516,    ")" : -5602706,    "*" : -4947346,
			    "+" : -5602716,    "," : -4944776,    "-" : -13492736,    "." : -9550286,    "/" : -4947356,    ":" : -6916006,    ";" : -10205646,    "<" : -8229296,    "=" : -14148096,    ">" : -7568776,    "?" : -6918576,    "@" : -10200506,    "A" : -14148086,    "B" : -6258076,    "C" : -3631486,    "D" : -4286846,    "E" : -4942206,    "F" : -4286856,    "G" : -7571346,    "H" : -11513776,
			    "I" : -10858426,    "J" : -6915996,    "K" : -9542576,    "L" : -10197916,    "M" : -9539986,    "N" : -8887206,    "O" : -10855836,    "P" : -8224136,    "Q" : -9545136,    "R" : -8884636,    "S" : -9539976,    "T" : -8229286,    "U" : -10855846,    "V" : -10203066,    "W" : -8884626,    "X" : -8887216,    "Y" : -5600126,    "Z" : -11513786,    "[" : -8229276,    "]" : -12169136,
			    "^" : -4286836,    "_" : -8882056,    "`" : -6913416,    "a" : -8882066,    "b" : -5600136,    "c" : -6258056,    "d" : -8224126,    "e" : -3628916,    "f" : -12182016,    "g" : -8894926,    "h" : -6921136,    "i" : -11524086,    "j" : -4284286,    "k" : -3628926,    "l" : -6260646,    "m" : -11526646,    "n" : -10210796,    "o" : -8892366,    "p" : -12182006,    "q" : -4939636,
			    "r" : -10210786,    "s" : -4942196,    "t" : -10868716,    "u" : -11526656,    "v" : -8894936,    "w" : -8234436,    "x" : -4284276,    "y" : -11524076,    "z" : -9550296,    "{" : -7579066,    "|" : -10866156,    "}" : -10863576,
			}, 3);
			return get(11, 5, 70, 214);
		},
		walk_0: function(){
			background(0, 0);
			Display.pixelArt([
    '               !"#                                                        ',
    '           $%%%%%%%%&                                                     ',
    '           %%%%%%%%%%%                                                    ',
    '          %%%%%%%%%%%%\'                                                   ',
    '          %%%%%%%%%%%%%                                                   ',
    '         !%%%%%%%%%%(%%                                                   ',
    '         %%%%%)*%%%%+%%                                                   ',
    '         %,%%%-..%%+/ %                                                   ',
    '        %0%%%%%.1%%22                                                     ',
    '       \'3%%%%%/.(%4225                                                    ',
    '         %%%%%22%%+22                                                     ',
    '        \'%%%%%22%%22                                                      ',
    '        %%%%672%%"22                                                      ',
    '        %8%8%229%:                                                        ',
    '       %8%8%/222%                                                         ',
    '      &8%,;%2222+5                                                        ',
    '        %8 %<<<<22                                                        ',
    '       %8  2<<<<=22                                                       ',
    '       ,   2<<<<<22<                                                      ',
    '           2<<<<<222                                                      ',
    '           2<<<<<222                                                      ',
    '           25<<<<222=                                                     ',
    '           22<<<<5222                                                     ',
    '           >2<<<<=222                                                     ',
    '          .?2<<<<<222                                                     ',
    '          .@25<<<<222                                                     ',
    '          .AB2<<<<22+                                                     ',
    '          .)CD<<<<22E                                                     ',
    '         F..CCG<<<2@C                                                     ',
    '          ..CCC<<<HCC                                                     ',
    '          ..CCCC<<<<@                                                     ',
    '          .ICCCC2<<<<<                                                    ',
    '          .CCCCC?J<<<<<                                                   ',
    '          .CCC???BD<<<<<                                                  ',
    '          @CC????CCC<<<<<<                                                ',
    '          KC????????B <<<<<<                                              ',
    '          C???????CCC   <<<<<                                             ',
    '          ???????????C   <<<<                                             ',
    '          ?C???????CCCL   <<<<                                            ',
    '         ??C???????B?KK    <<<                                            ',
    '         ?C?????????CC?M    <<                                            ',
    '         ?C????????KCC??                                                  ',
    '        ?CC????????CCCB??                                                 ',
    '        ?C?????????CCC???                                                 ',
    '       ?KC????C????C??????                                                ',
    '       ?CB??BC????????????                                                ',
    '       CCCCC?????????????                                                 ',
    '       KC <<<2????????N...                                                ',
    '         O<<<<<<   .......                                                ',
    '         <<<<<<<    ......                                                ',
    '         <<<<<<     P......                                               ',
    '         <<<<<<      ......                                               ',
    '         <<<<<        .....                                               ',
    '         <<<<<         ....                                               ',
    '       <<<<<<         .....                                               ',
    '      Q<<<<<<         .....                                               ',
    '      PR<<<<          S....                                               ',
    '      <S<<<           .ST..                                               ',
    '     <<-U<V           ..WSX                                               ',
    '     <<<S<            ....S                                               ',
    '    <<<<YZ            <...[                                               ',
    '    TTTTR              .]SS                                               ',
    '    SSSR               SSS.                                               ',
    '    <<<<               T^..                                               ',
    '   7S-<                 U_X.                                              ',
    '   <`ST                 SSSS                                              ',
    '   <<<a                 ...R.O                                            ',
    '  <<<S<                 <..T.......<                                      ',
    '  <bR<<<                 .^.......cS                                      ',
    '  Sd<<<<<                .S.....XSR                                       ',
    ' SSR<<<<<<V              e-f7bTSS                                         ',
    '  gSS7<<<<<<             SSSSh                                            ',
    '     iSSRiSS             j                                                ',
    '        kA                                                                ',
], {
    "0" : -14150656,
    "1" : -6263206,    "2" : -4944776,    "3" : -6252926,    "4" : -11521506,    "5" : -4289416,    "6" : -14148086,    "7" : -6918576,    "8" : -14150646,    "9" : -9547726,    " " : 0,    "!" : -9545146,    "\"" : -12179436,    "#" : -10863576,    "$" : -8226716,    "%" : -12834806,    "&" : -12176876,    "'" : -10861006,    "(" : -8892356,    ")" : -5602716,    "*" : -7576496,
    "+" : -4944786,    "," : -13492726,    "-" : -8234436,    "." : -4947356,    "/" : -10205656,    ":" : -6255496,    ";" : -7568776,    "<" : -4286846,    "=" : -4286856,    ">" : -5600146,    "?" : -9539986,    "@" : -8226706,    "A" : -6915986,    "B" : -10197916,    "C" : -11513776,    "D" : -9542566,    "E" : -8882066,    "F" : -4284276,    "G" : -8884636,    "H" : -4942206,
    "I" : -6918556,    "J" : -5600136,    "K" : -10855846,    "L" : -7566196,    "M" : -8224126,    "N" : -6258066,    "O" : -3628916,    "P" : -4947346,    "Q" : -10866146,    "R" : -11524086,    "S" : -12182016,    "T" : -11526656,    "U" : -9552856,    "V" : -4284286,    "W" : -8894936,    "X" : -5605286,    "Y" : -10210796,    "Z" : -6255486,    "[" : -9552866,    "]" : -5605276,
    "^" : -10208226,    "_" : -7579076,    "`" : -6260646,    "a" : -11526646,    "b" : -8236996,    "c" : -10868726,    "d" : -7576506,    "e" : -8237006,    "f" : -6921146,    "g" : -5594996,    "h" : -10868716,    "i" : -10866156,    "j" : -9550296,    "k" : -6913426,
}, 3);
			return get(3, 0, 105, 222);
		},
		walk_1: function(){
			background(0, 0);
			Display.pixelArt([
    '              !"#$                                                        ',
    '           #########                                                      ',
    '          ###########                                                     ',
    '         %############                                                    ',
    '         #############                                                    ',
    '         ##########&##                                                    ',
    '        %####\'(####)##                                                    ',
    '        ######**##") #                                                    ',
    '       +,,####**##))-                                                     ',
    '       .######//##)))                                                     ',
    '        #####0)1#2))                                                      ',
    '        #####))3#))4                                                      ',
    '       %#5##%)6##))                                                       ',
    '       ###,#)))##                                                         ',
    '      7,#,##)))#7                                                         ',
    '      8##8 &44))9                                                         ',
    '       #8 :;---));                                                        ',
    '       8  <-----))                                                        ',
    '      =   ------)))                                                       ',
    '          )-----)))                                                       ',
    '          )-----))))                                                      ',
    '          ;;----))))                                                      ',
    '           )----))))                                                      ',
    '           )----))))                                                      ',
    '           )----))))                                                      ',
    '           >----4)))                                                      ',
    '           ?----;)))                                                      ',
    '           @A----)))?                                                     ',
    '           BB----)/?B                                                     ',
    '           BB----C?BB                                                     ',
    '           BBB---)BBB                                                     ',
    '           BBB----)@B                                                     ',
    '           BBBB----DB                                                     ',
    '          BBB@CE----F                                                     ',
    '          BB@CCCG----                                                     ',
    '         FB@CCCCCH----                                                    ',
    '         @BCCCCCCCI----                                                   ',
    '         BCCCCCCCCCC----                                                  ',
    '         BCCCCCCCCC@B----                                                 ',
    '         CCCCCCCCCC@C----                                                 ',
    '         C@?CCCCCCCCBB----                                                ',
    '         CB?CCCCCCCCBCJ---                                                ',
    '         CBCCCCCCCCCB@C---                                                ',
    '         CBCCCCC?CCCBCCK                                                  ',
    '         CBCCCCBCCCCCCCC                                                  ',
    '         CBCCC??CCCCCCCC                                                  ',
    '        L?BCC@@CCCCCCCCC                                                  ',
    '        CBBCBCMECCNCCCC*                                                  ',
    '         BBB------O*****                                                  ',
    '            ------******                                                  ',
    '            ------******                                                  ',
    '            ------)*****                                                  ',
    '            -----P *****                                                  ',
    '            -----   *****                                                 ',
    '          Q------   *****                                                 ',
    '          R------   ****-                                                 ',
    '         -R-----   *****                                                  ',
    '        --S)---    RT***                                                  ',
    '       ---UV--     *WR**                                                  ',
    '       ---OR-      **XRY                                                  ',
    '      RRZ--R       ****R                                                  ',
    '     [WRRRW        P***]                                                  ',
    '     R;---          *VRR                                                  ',
    '    -^R--           RRR*                                                  ',
    '    --RR            R_**                                                  ',
    '   ----$            9T**                                                  ',
    '  -)R^;              RRRU                                                 ',
    '`RRa----             ***R                                                 ',
    ' RR9----b            **c&*****-                                           ',
    '   R&----            **R*******(W                                         ',
    '    R9----           *]_******RR                                          ',
    '     RRO---          OR****(RR\'                                           ',
    '       RRRd          RRRRRRWe                                             ',
    '          f          Rg                                                   ',
], {
    "0" : -7576496,
    "1" : -7573936,    "2" : -10863576,    "3" : -12834796,    "4" : -4289416,    "5" : -14148086,    "6" : -5602716,    "7" : -12176876,    "8" : -14150646,    "9" : -7576506,    " " : 0,    "!" : -8887216,    "\"" : -11521506,    "#" : -12834806,    "$" : -6255486,    "%" : -12179436,    "&" : -6260646,    "'" : -10208216,    "(" : -5605286,    ")" : -4944776,    "*" : -4947356,
    "+" : -12176866,    "," : -13492726,    "-" : -4286846,    "." : -9545146,    "/" : -4944786,    ":" : -7568786,    ";" : -4286856,    "<" : -8229286,    "=" : -10861016,    ">" : -6258066,    "?" : -10197916,    "@" : -10855846,    "A" : -10855856,    "B" : -11513776,    "C" : -9539986,    "D" : -6913416,    "E" : -8884626,    "F" : -8882056,    "G" : -8884636,    "H" : -7568776,
    "I" : -9542566,    "J" : -8224126,    "K" : -4942196,    "L" : -7566196,    "M" : -8882066,    "N" : -6255496,    "O" : -4947346,    "P" : -3628916,    "Q" : -4939636,    "R" : -12182016,    "S" : -10868726,    "T" : -8236996,    "U" : -8892366,    "V" : -6918576,    "W" : -11524086,    "X" : -6921146,    "Y" : -5605276,    "Z" : -10868716,    "[" : -5602706,    "]" : -6921136,
    "^" : -11526656,    "_" : -8237006,    "`" : -5597556,    "a" : -8234436,    "b" : -3628926,    "c" : -6263206,    "d" : -8894926,    "e" : -5594996,    "f" : -6258056,    "g" : -5597566,
}, 3);
			return get(0, 0, 99, 222);
		},
		walk_2: function(){
			background(0, 0);
			Display.pixelArt([
    '         !"#$                                                             ',
    '      %########&                                                          ',
    '     \'##########"                                                         ',
    '     ############                                                         ',
    '    (############)                                                        ',
    '    #############*                                                        ',
    '    #####+,###-.#*                                                        ',
    '   /#0###++1##23)\'                                                        ',
    '   #4#####+5#622                                                          ',
    '    #####2+##222                                                          ',
    '   7#####28##22                                                           ',
    '   #####92:##22                                                           ',
    '   #####22##822                                                           ',
    '  ;#<#=522##                                                              ',
    '  #4#4#222>#                                                              ',
    ' <?#4 #2@A22B                                                             ',
    '  5<  C@@@@22                                                             ',
    '  #?  2@@@@222                                                            ',
    '  D   A@@@@222                                                            ',
    '      E@@@@E222                                                           ',
    '      E@@@@2222                                                           ',
    '      2@@@@2222                                                           ',
    '      2@@@@2222E                                                          ',
    '      2@@@@22222                                                          ',
    '      F@@@@22222                                                          ',
    '      G@@@@22228                                                          ',
    '      G@@@@2222H                                                          ',
    '      G@@@@2222I                                                          ',
    '      F2@@@88JKI                                                          ',
    '      LM@@@IGNII                                                          ',
    '      OI@@@PIIIN                                                          ',
    '      IIQ@@@GGIG                                                          ',
    '      III@@@@GGN                                                          ',
    '      IINR@@@III                                                          ',
    '     IIIGG@@@@II                                                          ',
    '     IIGGGS@@@HI                                                          ',
    '     IGGGGG@@@@N                                                          ',
    '    GIGGGGGG@@@TI                                                         ',
    '     GGGGGGGF@@@G                                                         ',
    '     GGGGGGGG@@@@                                                         ',
    '      GKGGGGG2@@@O                                                        ',
    '      GGIGGGGG@@@H                                                        ',
    '      GGINGGGG@@@U                                                        ',
    '      GGGIGGGGV@@P                                                        ',
    '      GGGINGGGW@@@@                                                       ',
    '      OGGGIGGGGX@@@                                                       ',
    '        GGIKGI@@@@@@                                                      ',
    '        +GKIIY@@@@@@                                                      ',
    '        ++GII2@@@@@@                                                      ',
    '        +++IZ+[@@@@@@                                                     ',
    '        ++++++ @@@@@@                                                     ',
    '        +++++] ^@@@@@                                                     ',
    '        +++++ @^@@@@@                                                     ',
    '        +++++@@^@@@@                                                      ',
    '       +++++@@@^@@@                                                       ',
    '      _++++E@@@`@@                                                        ',
    '      ^++++^a@@bc                                                         ',
    '     +de++c^^^^a                                                          ',
    '     ++^++^@@@@                                                           ',
    '     ++fg@^a@@                                                            ',
    '    ++++@@@^J                                                             ',
    '    dCh@@@@A                                                              ',
    '    ^^_@i^aA                                                              ',
    '    :^^^J@@@[                                                             ',
    '   J^C^^@@@@@                                                             ',
    '   +a^jk^@@@@@                                                            ',
    '   +++^ X^@@@@[                                                           ',
    '  @++lm   ^a@@@                                                           ',
    '  ++^n++   ,^^^8                                                          ',
    '  o^+++++     77                                                          ',
    ' ^^p+++++++                                                               ',
    ' qa^^p++++++                                                              ',
    '     r^^^^^^^                                                             ',
    '         s                                                                ',
], {
    "0" : -14150656,
    "1" : -8892366,    "2" : -4944776,    "3" : -8889796,    "4" : -14150646,    "5" : -12179436,    "6" : -11521516,    "7" : -5597556,    "8" : -4944786,    "9" : -10205656,    " " : 0,    "!" : -6910856,    "\"" : -10861006,    "#" : -12834806,    "$" : -9545146,    "%" : -10861016,    "&" : -8887216,    "'" : -11518936,    "(" : -7568786,    ")" : -8229286,    "*" : -10203076,
    "+" : -4947356,    "," : -9550286,    "-" : -6260646,    "." : -11518946,    "/" : -8226716,    ":" : -5602716,    ";" : -12176876,    "<" : -14148086,    "=" : -13492726,    ">" : -6918566,    "?" : -7568776,    "@" : -4286846,    "A" : -4286856,    "B" : -3628916,    "C" : -6918576,    "D" : -11516366,    "E" : -4289416,    "F" : -8884626,    "G" : -9539986,    "H" : -8882066,
    "I" : -11513776,    "J" : -5602706,    "K" : -10197916,    "L" : -7566196,    "M" : -10855856,    "N" : -10855846,    "O" : -8882056,    "P" : -5600136,    "Q" : -9542566,    "R" : -4942206,    "S" : -8226696,    "T" : -8226706,    "U" : -6913416,    "V" : -4942216,    "W" : -7571356,    "X" : -6255496,    "Y" : -8884636,    "Z" : -6260636,    "[" : -4284286,    "]" : -4947346,
    "^" : -12182016,    "_" : -10210796,    "`" : -10868716,    "a" : -11524086,    "b" : -8237006,    "c" : -8236996,    "d" : -6263216,    "e" : -10866156,    "f" : -6921146,    "g" : -11526656,    "h" : -6921136,    "i" : -7576496,    "j" : -10868726,    "k" : -10208216,    "l" : -8894936,    "m" : -7579076,    "n" : -5605276,    "o" : -5605286,    "p" : -10208226,    "q" : -9547716,
    "r" : -10866146,    "s" : -4939636,
}, 3);
			return get(3, 0, 60, 222);
		},
		walk_3: function(){
			background(0, 0);
			Display.pixelArt([
    '             !"#                                                          ',
    '         $%%%%%%%%%                                                       ',
    '         %%%%%%%%%%%                                                      ',
    '        %%%%%%%%%%%%%                                                     ',
    '        %%%%%%%%%%%%%                                                     ',
    '       &%%%%%%%%%%\'%%                                                     ',
    '       %%%%%((%%%%)%%                                                     ',
    '       %%%%%*++%%,- %                                                     ',
    '      %.%%%%%+/%%))                                                       ',
    '     0$%%%%%*/1%%)))                                                      ',
    '       %%%%%))2%/))                                                       ',
    '      3%%%%%))%%))                                                        ',
    '      %%4%45)5%%))                                                        ',
    '      %6%6%))\'%2                                                          ',
    '     %6%6%")))%7                                                          ',
    '    86%49!:;;))7                                                          ',
    '      %6 %<<<<))=                                                         ',
    '     26  ><<<<=))                                                         ',
    '     4   ;<<<<=));                                                        ',
    '         =<<<<;)))                                                        ',
    '         <<<<<))))                                                        ',
    '         <<<<<)))))                                                       ',
    '         <<<<<)))))                                                       ',
    '         <<<<;)))))                                                       ',
    '         <<<<))))))                                                       ',
    '         <<<<))))))                                                       ',
    '         <<<<))))))                                                       ',
    '         <<<=)))))?                                                       ',
    '         <<<@))))A@                                                       ',
    '         <<<@@@@B@@C                                                      ',
    '         <<<@@@@@@DE                                                      ',
    '         <<<)@@@DB@F+                                                     ',
    '         <<<<@BDGBBH++                                                    ',
    '         I<<<BBD@@@\'+++                                                   ',
    '         @<<<BBD@@@)++++                                                  ',
    '        D@<<<JBBBBB  ++++                                                 ',
    '        @@<<<<BBBBB@  +++++                                               ',
    '        @BK<<<BBBBBB   <++++                                              ',
    '        GBB<<<BBBBBBB   /+++                                              ',
    '        BBB<<<BBBBBBB    ++++                                             ',
    '         BBL<<MBBBBBBB    +++                                             ',
    '         BBM<<<BBB@BBB    /<                                              ',
    '         BBB<<<BBB@BBBN                                                   ',
    '         BBB<<<BBB@BBB<                                                   ',
    '         BBO<<<BBB@BA<<<                                                  ',
    '         BB<<<)BBB@L<<<<                                                  ',
    '          BBBBD@BBP<<<<<<                                                 ',
    '          +QBBB@@@<<<<<<<                                                 ',
    '          +++RBB@@ <<<<<<<                                                ',
    '          ++++++@   <<<<<<                                                ',
    '          ++++++     <<<<<<                                               ',
    '          +++++:      <<<<<                                               ',
    '          +++++       <<<<<                                               ',
    '         )+++++      S<<<<                                                ',
    '        ++++++       <ST<<                                                ',
    '       S+++++<       U<VS<                                                ',
    '      WS+++++         <<7S                                                ',
    '      ++X+++          <<<<                                                ',
    '     =++S++           <<:S                                                ',
    '     +++XY            7SSV                                                ',
    '     ++++S            XS)<                                                ',
    '    SSSSX              <<<W                                               ',
    '    SSSX<              SSSZ                                               ',
    '    [+++               <<<7                                               ',
    '   ]SS+                ^<<S<<_                                            ',
    '   ++SS                U<()<<<<<<<M                                       ',
    '  /+++`                W<S<<<<<<<SS                                       ',
    '  ++XT+                 ab<<<<=SS                                         ',
    ' +cS++++                SSSSSSSd                                          ',
    'SSX++++++              eS5                                                ',
    ' SSS++++++                                                                ',
    '   fSg+++++                                                               ',
    '     hSSSS[i                                                              ',
    '          j                                                               ',
], {
    "0" : -8226716,
    "1" : -6916006,    "2" : -10863576,    "3" : -7568786,    "4" : -13492726,    "5" : -8892356,    "6" : -14150646,    "7" : -5602706,    "8" : -11518936,    "9" : -12174296,    " " : 0,    "!" : -9542576,    "\"" : -12176876,    "#" : -12176866,    "$" : -6252926,    "%" : -12834806,    "&" : -6910846,    "'" : -6260636,    "(" : -6260646,    ")" : -4944776,    "*" : -12179436,
    "+" : -4947356,    "," : -8231866,    "-" : -6918576,    "." : -14150656,    "/" : -4947346,    ":" : -4944786,    ";" : -4289416,    "<" : -4286846,    "=" : -4286856,    ">" : -7573936,    "?" : -6913426,    "@" : -11513776,    "A" : -8226706,    "B" : -9539986,    "C" : -8224126,    "D" : -10197916,    "E" : -9542566,    "F" : -8887196,    "G" : -10855846,    "H" : -6918556,
    "I" : -7571356,    "J" : -6913416,    "K" : -8882066,    "L" : -5600136,    "M" : -4942206,    "N" : -4284276,    "O" : -6255496,    "P" : -8884636,    "Q" : -6915986,    "R" : -8884626,    "S" : -12182016,    "T" : -10208226,    "U" : -4284286,    "V" : -10866156,    "W" : -3628916,    "X" : -11524086,    "Y" : -7579066,    "Z" : -10868726,    "[" : -10868716,    "]" : -6263216,
    "^" : -3626356,    "_" : -3628926,    "`" : -11526646,    "a" : -8894936,    "b" : -6921136,    "c" : -9552856,    "d" : -7573916,    "e" : -9547716,    "f" : -11524076,    "g" : -8236996,    "h" : -10205656,    "i" : -9552866,    "j" : -6258056,
}, 3);
			return get(0, 0, 105, 222);
		},
		walk_4: function(){
			background(0, 0);
			Display.pixelArt([
    '                   !"#                                                    ',
    '               !$$$$$$$$"                                                 ',
    '              %$$$$$$$$$$$                                                ',
    '              $$$$$$$$$$$$&                                               ',
    '             \'$$$$$$$$$$$$$                                               ',
    '             $$$$$$$$$$$($$                                               ',
    '             $$$$$)"$$$$*$$                                               ',
    '            +$,$$$)))$$-. $                                               ',
    '            $/$$$$")0$$11                                                 ',
    '           ,2$$$$$3)3$4115                                                ',
    '            6$$$$$1*$$-11                                                 ',
    '            $$$$$$11$$11                                                  ',
    '            $$$$,718$$11                                                  ',
    '           9$/$/$1:"$.                                                    ',
    '           $/$/$8110$                                                     ',
    '          "/$,;$1111<                                                     ',
    '         = #$/ "555>11                                                    ',
    '           $/  >5555111                                                   ',
    '           ,   55555111                                                   ',
    '               555551111                                                  ',
    '              5555551111                                                  ',
    '              55555111115                                                 ',
    '             55555?111111                                                 ',
    '             555551111111                                                 ',
    '             555511111111                                                 ',
    '            5555511111111>                                                ',
    '            5555111111111)                                                ',
    '            5555@1111111*)                                                ',
    '           5555A@@111111AB)*                                              ',
    '           555 C@@@D*E*A@F))))                                            ',
    '           555  @@@@@GG@@H))))))                                          ',
    '           555 C@@@@@@@@A >)))))))                                        ',
    '           555 @@@@@@IAG@   -)))))))                                      ',
    '          J555 @@@@AAAGAA      ))))))))                                   ',
    '          5555 @@@AGI@@@@         ))))))                                  ',
    '          555 @@@AAAAA@@@          )))))-                                 ',
    '          555 @@AAAAAAAAA            ))))                                 ',
    '          555K@AAAAAAAAA@G            ))L                                 ',
    '          555A@AAAAAAAAAA@                                                ',
    '          55MAAAAAAAAAAAAA                                                ',
    '         555  AAAAAAAAAAAAG                                               ',
    '         555  AA@AAAAAAAAAA                                               ',
    '         555   AAIAAAAAAAAA                                               ',
    '        5555   AA@AAAAA@AAA                                               ',
    '       5555    AAI@AAAA@AAA                                               ',
    '        55M    AAA@AAAA@AAA5                                              ',
    '               AAA@@AAA@AA55                                              ',
    '                AAA@AAIA5555                                              ',
    '                )AA@IA@555555                                             ',
    '                ))AI@@5555555                                             ',
    '                *)EA@@1555555J                                            ',
    '                L)))@))M555555                                            ',
    '                 )))))) 555555                                            ',
    '                 )))))   55555                                            ',
    '              5N))))))    5555                                            ',
    '            *)O)))))))   55555                                            ',
    '           )))P))))))    55555                                            ',
    '         O))))P))))))    PQ555                                            ',
    '        PPP))RO))))      5RPS5                                            ',
    '       P)TPP)OB5          55NPL                                           ',
    '     ))PU))ON             5555P                                           ',
    '   ))))PQ)*               555EP                                           ',
    'VPWXY))ZN                 55NP[                                           ',
    ' PP:YR0]                   PP:5                                           ',
    '  P)))))                   P155                                           ',
    '  P^))))                   R__0                                           ',
    '   P))))                    PPPP                                          ',
    '   `a)))                    555N555  5J                                   ',
    '    PU))>                   J55O5555555O                                  ',
    '     P0))                    5X?555555P^                                  ',
    '      PO)                    5P55555bPc                                   ',
    '       dO                    1PSR[PPN                                     ',
    '                             PPPPe                                        ',
    '                             P                                            ',
], {
    "0" : -8234436,
    "1" : -4944776,    "2" : -12176866,    "3" : -10205656,    "4" : -12834796,    "5" : -4286846,    "6" : -6910856,    "7" : -6260646,    "8" : -9547726,    "9" : -8887216,    " " : 0,    "!" : -10203076,    "\"" : -12179436,    "#" : -10861006,    "$" : -12834806,    "%" : -11521506,    "&" : -10861016,    "'" : -8884646,    "(" : -10863576,    ")" : -4947356,    "*" : -4944786,
    "+" : -7568776,    "," : -13492726,    "-" : -4947346,    "." : -6260636,    "/" : -14150646,    ":" : -6918576,    ";" : -12834786,    "<" : -12176876,    "=" : -14148086,    ">" : -4289416,    "?" : -4286856,    "@" : -11513776,    "A" : -9539986,    "B" : -5602716,    "C" : -8224126,    "D" : -6915996,    "E" : -5602706,    "F" : -6915986,    "G" : -10197916,    "H" : -8229276,
    "I" : -10855846,    "J" : -3628916,    "K" : -7566196,    "L" : -4284276,    "M" : -4284286,    "N" : -11524086,    "O" : -11526656,    "P" : -12182016,    "Q" : -10868726,    "R" : -7576506,    "S" : -6918566,    "T" : -7579076,    "U" : -5605286,    "V" : -6255486,    "W" : -10868716,    "X" : -8894936,    "Y" : -6921146,    "Z" : -5605276,    "[" : -9550296,    "]" : -8237006,
    "^" : -10866156,    "_" : -8892366,    "`" : -10208226,    "a" : -9552866,    "b" : -8236996,    "c" : -5597556,    "d" : -11524076,    "e" : -8231856,
}, 3);
			return get(0, 0, 120, 222);
		},
		walk_5: function(){
			background(0, 0);
			Display.pixelArt([
    '         !"#$                                                             ',
    '      %########&                                                          ',
    '     \'##########(                                                         ',
    '     ############                                                         ',
    '    )############*                                                        ',
    '    #############+                                                        ',
    '    #####,-###.##(                                                        ',
    '   ##/###,,0##123"                                                        ',
    '   #/####4,##511                                                          ',
    '  6 #####1,##111                                                          ',
    '   7#####18##11                                                           ',
    '   #####91:#511                                                           ',
    '   #####11##111                                                           ',
    '  ##;##)11##                                                              ',
    '  #/#/#1115#                                                              ',
    ' /<#/ #1=118                                                              ',
    '  #/  >====11                                                             ',
    '  #   =====111                                                            ',
    '  ?   =====111                                                            ',
    '      =====1111                                                           ',
    '      =====1111                                                           ',
    '      ====@1111                                                           ',
    '      ====11111A                                                          ',
    '      ====11111@                                                          ',
    '     B====111111                                                          ',
    '     ====C111118                                                          ',
    '     ====111111D                                                          ',
    '     ====111111E                                                          ',
    '     ====E1118DE                                                          ',
    '     F==GEEEDHEE                                                          ',
    '      ===EEEEEEHI                                                         ',
    '      ===EEEJDJH,,                                                        ',
    '      ===KDDHHDD,,,                                                       ',
    '      K===JJEEEE,,,,                                                      ',
    '     EE===LDJEEE=,,,,                                                     ',
    '     EE====DDDDE  ,,,,,                                                   ',
    '    DEDM===DDHEE   B,,,,                                                  ',
    '    DEDD===DDDDDJ   @,,,,                                                 ',
    '    JDJD6===DDDEE    =,,,                                                 ',
    '     DEDD===DDDDE     I,,,                                                ',
    '     DEDD===NDDHE      ,,                                                 ',
    '     DEDD====DDDJO                                                        ',
    '     DEDDL===DDDED                                                        ',
    '     DEHDD===DDDDD                                                        ',
    '     DEHDL===DDDDDD                                                       ',
    '     DEHDD==MDDDDDD                                                       ',
    '     DEJDDEDDDDDDDD                                                       ',
    '     DEEJE=====DDD                                                        ',
    '      EEP======,,,B                                                       ',
    '      E  ======,,,,                                                       ',
    '         ======,,,,                                                       ',
    '         ======,,,,                                                       ',
    '          =====,,,,                                                       ',
    '          =====,,,,                                                       ',
    '          =====,,,,                                                       ',
    '         =====I,,,                                                        ',
    '         =====,,I                                                         ',
    '        QR====,                                                           ',
    '       S=TR==8                                                            ',
    '       ,==UR=                                                             ',
    '      RR===VW                                                             ',
    '     ,,R====W                                                             ',
    '    ,,,X==TRU                                                             ',
    '   ,,,YRRRRW                                                              ',
    ' WRRRZ,,WU==                                                              ',
    '  RR,,,,[Q==                                                              ',
    '   RW,,,>RRR                                                              ',
    '    R],,I===                                                              ',
    '     RT,@==R=                                                             ',
    '      RR==Z8====                                                          ',
    '        =CR========                                                       ',
    '        =R=======CR^                                                      ',
    '        RRRRUYQVRR_                                                       ',
    '        `   abb                                                           ',
], {
    "0" : -11521506,
    "1" : -4944776,    "2" : -9547726,    "3" : -10861016,    "4" : -9550296,    "5" : -10863576,    "6" : -7568776,    "7" : -12179436,    "8" : -4944786,    "9" : -8889796,    " " : 0,    "!" : -6913416,    "\"" : -10861006,    "#" : -12834806,    "$" : -8887206,    "%" : -12176866,    "&" : -7571346,    "'" : -12834796,    "(" : -8887216,    ")" : -12176876,    "*" : -6252916,
    "+" : -8884646,    "," : -4947356,    "-" : -11521516,    "." : -5602706,    "/" : -14150646,    ":" : -6918566,    ";" : -13492726,    "<" : -11516366,    "=" : -4286846,    ">" : -5602716,    "?" : -6910846,    "@" : -4289416,    "A" : -4284276,    "B" : -3628916,    "C" : -4286856,    "D" : -9539986,    "E" : -11513776,    "F" : -4284286,    "G" : -6258066,    "H" : -10197916,
    "I" : -4947346,    "J" : -10855846,    "K" : -4942216,    "L" : -8882066,    "M" : -7571336,    "N" : -4942206,    "O" : -8882056,    "P" : -9542566,    "Q" : -7576506,    "R" : -12182016,    "S" : -8894936,    "T" : -8234436,    "U" : -10208226,    "V" : -10866156,    "W" : -11524086,    "X" : -5605286,    "Y" : -6921136,    "Z" : -8237006,    "[" : -7576496,    "]" : -8236996,
    "^" : -11526656,    "_" : -7571356,    "`" : -8231866,    "a" : -5597566,    "b" : -6913426,
}, 3);
			return get(3, 0, 75, 222);
		},
		swing_0: function(){
			background(0, 0);
			
			Display.pixelArt([
    '      !                                                                   ',
    '     """                                                                  ',
    '     #""                                                                  ',
    '      """                                                                 ',
    '      """"                                                                ',
    '       """                                                                ',
    '        """                                                               ',
    '         """                                                              ',
    '         $%$&                                                             ',
    '     \'((((((((                                                            ',
    '     ((((((((((                                                           ',
    '     (((((((((((                                                          ',
    '    ((((((((((((                                                          ',
    '    (((()%(((&((                                                          ',
    '   *(+((%""((#((                                                          ',
    '   ,,(((("$($#"                                                           ',
    '    ((((-"((###                                                           ',
    '   (((((##((##"                                                           ',
    '   (((((#"(.##                                                            ',
    '  /(+((#"(("""                                                            ',
    '  (0(+(##%(""                                                             ',
    ' +1(0 ####(""                                                             ',
    '  (0 23333##                                                              ',
    '  ,  .3333##                                                              ',
    '     #3333###                                                             ',
    '     #3333###                                                             ',
    '     #3333###                                                             ',
    '     #3333####                                                            ',
    '     #3333####                                                            ',
    '     43333####                                                            ',
    '      3333####                                                            ',
    '      3333###5                                                            ',
    '      333####6                                                            ',
    '      333"7#68                                                            ',
    '      #3386988                                                            ',
    '     883338898                                                            ',
    '     883333986                                                            ',
    '     888333498                                                            ',
    '    9866333388                                                            ',
    '    89666333:6                                                            ',
    '    8666663338                                                            ',
    '   6666666533!                                                            ',
    '    6966666333\'                                                           ',
    '    69666666333                                                           ',
    '   696666666333                                                           ',
    '   686666666;335                                                          ',
    '   6866669666333                                                          ',
    '   6866696666336                                                          ',
    '   68669666666666                                                         ',
    '  <8868666646666                                                          ',
    '   8873333366;="                                                          ',
    '     333333"""""                                                          ',
    '     333333"""""                                                          ',
    '     33333 """"""                                                         ',
    '     33333  """""                                                         ',
    '     33333  #""""                                                         ',
    '     3333   """""                                                         ',
    '    33333  >""""                                                          ',
    '    ?3333  @>"""                                                          ',
    '    >333   ">="                                                           ',
    '    3>33  """>"                                                           ',
    '   333>3  """AB                                                           ',
    '   3333$  "AC>                                                            ',
    '   33A>   >>>D                                                            ',
    '   >>>D   """                                                             ',
    '   E333   >>"                                                             ',
    '   D>!3   ">>                                                             ',
    '    E>>  """>                                                             ',
    '    33>  "">""                                                            ',
    '   33>33 ">"""""                                                          ',
    '   3E3333333""""""                                                        ',
    '   D)3333333#""""CE                                                       ',
    '  )>>>C=!F>>E>>>>                                                         ',
    '        GH                                                                ',
], {
    "0" : -14807296,
    "1" : -10859716,    "2" : -7899031,    "3" : -3959176,    "4" : -8885911,    "5" : -5929096,    "6" : -9868951,    "7" : -5929111,    "8" : -11842741,    "9" : -10855846,    " " : 0,    "!" : -4942216,    "\"" : -4946071,    "#" : -4946056,    "$" : -10863586,    "%" : -11850481,    "&" : -5932966,    "'" : -8885926,    "(" : -12833521,    ")" : -9876691,    "*" : -7902886,
    "+" : -13820416,    "," : -13820401,    "-" : -11850466,    "." : -6919846,    "/" : -8885941,    ":" : -6915976,    ";" : -8882071,    "<" : -8882056,    "=" : -5932951,    ">" : -11854336,    "?" : -7902901,    "@" : -4949911,    "A" : -6919861,    "B" : -6915991,    "C" : -9880546,    "D" : -7906756,    "E" : -10867441,    "F" : -7906741,    "G" : -8889781,    "H" : -6912136,
}, 3);
			return get(2, 0, 56, 222);
		},
		swing_1: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                          ',
    '                             !!!                                          ',
    '                            !!!!                                          ',
    '       """"""""            !!!!                                           ',
    '      """"""""""           !!!                                            ',
    '     """"""""""""         !!!                                             ',
    '     """"""""""""#       !!!                                              ',
    '     """"""""""""$      !!!!                                              ',
    '    """""!%"""&\'"(      !!!                                               ',
    '    ")"""*!+"",""-     !!!!                                               ',
    '   ./"""""!0"",,      !!!!                                                ',
    '    """""!!"",,,      !!!,                                                ',
    '    """"",!"",,      !!!!                                                 ',
    '   ""1""2,+"2,,     !!!!                                                  ',
    '   ".".",!"",,  !!!!!!!                                                   ',
    '  "..."2,,"" !!!!!!!!!                                                    ',
    ' 3)../",,,4"!!!!!!!!!                                                     ',
    '5# "6 "777,,!!!!!!!                                                       ',
    '  "6  ,7777,,!!!!                                                         ',
    '  1   77777,,,!                                                           ',
    '      77777,,,                                                            ',
    '      77777,,,                                                            ',
    '      77777,,,,                                                           ',
    '      77777,,,,                                                           ',
    '      77777,,,,                                                           ',
    '      77777,,,,                                                           ',
    '      77778,,,,                                                           ',
    '      7777,,,,,                                                           ',
    '      9777,,,,9                                                           ',
    '      :777,,,,:                                                           ',
    '      ;777;;<:;                                                           ',
    '      ;777=:;;:                                                           ',
    '      ;#777;;<;                                                           ',
    '     >;;7777;;<                                                           ',
    '     ;;;9777?:;                                                           ',
    '     ;;<<7777;;                                                           ',
    '    :;<<<?7778;                                                           ',
    '    ;<<<<<9777;                                                           ',
    '    ;<<<<<<7777<                                                          ',
    '    <:<<<<<<777@                                                          ',
    '    <;<<<<<<<777                                                          ',
    '    <;<<<<<<<777                                                          ',
    '    <;<<<<<<<A777                                                         ',
    '   >:;<<<<<<<<777                                                         ',
    '   <;:<<<<:<<<777>                                                        ',
    '   <;<<<<;<<<<A7<<                                                        ',
    '   <;<<<;<<<<<<<<<                                                        ',
    '   :;<:;<<<<><<<<<                                                        ',
    '   ;;;777777<<<5!!                                                        ',
    '      777777!!!!!!                                                        ',
    '      777777!!!!!!                                                        ',
    '      77777 !!!!!!                                                        ',
    '      77777  !!!!!                                                        ',
    '      77777  !!!!!                                                        ',
    '      7777   !!!!!                                                        ',
    '     77777   !!!!!                                                        ',
    '     77777  B!!!!!                                                        ',
    '    B7777   !B!!!                                                         ',
    '    8B777   !CC!7                                                         ',
    '    7*B77  !!!BD                                                          ',
    '    77EC   !!!!B                                                          ',
    '    777B   !!+F                                                           ',
    '    777E   BBBB                                                           ',
    '    BBBE   CD!!                                                           ',
    '    BG7    B!!                                                            ',
    '    !77    BBB                                                            ',
    '    BBC    !!C                                                            ',
    '    77B   !!!B,                                                           ',
    '    77C7  !DB!!!                                                          ',
    '    7H!777!B!!!!!!                                                        ',
    '   7,E7777777!!!!!!!                                                      ',
    '   7B777777777!!!!IE                                                      ',
    '   BBBB,77!BBBBBBBJ                                                       ',
    '       &BBB                                                               ',
], {
    "0" : -11850481,
    "1" : -13820401,    "2" : -9876691,    "3" : -6912136,    "4" : -5932951,    "5" : -8882071,    "6" : -14807296,    "7" : -3959176,    "8" : -4942216,    "9" : -5929096,    " " : 0,    "!" : -4946071,    "\"" : -12833521,    "#" : -7899031,    "$" : -11850466,    "%" : -7906756,    "&" : -8889796,    "'" : -10863586,    "(" : -10859731,    ")" : -13824256,    "*" : -7906741,
    "+" : -5932966,    "," : -4946056,    "-" : -9876676,    "." : -12837361,    "/" : -13820416,    ":" : -10855846,    ";" : -11842741,    "<" : -9868951,    "=" : -9868966,    ">" : -8882056,    "?" : -8885911,    "@" : -9872806,    "A" : -7899016,    "B" : -11854336,    "C" : -9880546,    "D" : -4949911,    "E" : -10867441,    "F" : -8893651,    "G" : -6916006,    "H" : -7902901,
    "I" : -6919861,    "J" : -11854321,
}, 3);
			return get(2, 0, 96, 220);
		},
		swing_2: function(){
			background(0, 0);
			
			Display.pixelArt([
    '          !"#                                                             ',
    '       $$$$$$$$$                                                          ',
    '      $$$$$$$$$$$                                                         ',
    '     %$$$$$$$$$$$$                                                        ',
    '     $$$$$$$$$$$$$                                                        ',
    '     $$$$$$$$$$&$$                                                        ',
    '    \'$$$$$($$$$)$$                                                        ',
    '    $*$$$$(($$$)+$                                                        ',
    '   $,$$$$$-($$().                                                         ',
    '    $$$$$$)($$)))                                                         ',
    '    $$$$$/)0$1))                                                          ',
    '    $$$$$))$$)).                                                          ',
    '   $$2$21)/$$))                                                           ',
    '   $,$,$)))$3                                                             ',
    '  $,$,45)))$6                                                             ',
    ' , $2 4)77))(                                                             ',
    '   *8 37777))(                                                            ',
    '  $9  (77777))(                                                           ',
    '  :   )77777))((.                                                         ',
    '      )77777)))(((                                                        ',
    '      )7777;)))((((                                                       ',
    '      )7777))))(((((                                                      ',
    '      )7777)))))(((((                                                     ',
    '      )7777)))))(((((((((((((((((((((                                     ',
    '      <7777)))))  ((((((((((((((((((((                                    ',
    '      =7777)))))    ;((((((((((.((((((                                    ',
    '      =7777))))>                    (                                     ',
    '      =7777))))<                                                          ',
    '      =7777)))<?                                                          ',
    '      <777;?<<??                                                          ',
    '      @A777????<                                                          ',
    '      ??7777@<<@                                                          ',
    '      ??#777>@<<                                                          ',
    '     @??<7777???                                                          ',
    '     ??<<B7777?<                                                          ',
    '    =?<<<<;7778C                                                          ',
    '    @@<<<<<7777?                                                          ',
    '    ?<<<<<<<777%                                                          ',
    '    @<<<<<<<B777@                                                         ',
    '    <@<<<<<<<7777                                                         ',
    '    <?<<<<<<<D777                                                         ',
    '    <?<<<<<<<<777.                                                        ',
    '    <?<<<<<<<<>777                                                        ',
    '    <?<<<<<<<<?777                                                        ',
    '   <@?<<<<@<<<<;78<                                                       ',
    '   <?@<<<?<<<<<<<<<                                                       ',
    '   <?<<?@<<<<<<<<<<                                                       ',
    '   C???777ED7<<<<>                                                        ',
    '   <= 7777777((((((                                                       ',
    '      777777(((((((                                                       ',
    '      777777 ((((((                                                       ',
    '      777777 ((((((                                                       ',
    '      77777   (((((                                                       ',
    '      77777   (((((                                                       ',
    '      77777   (((((                                                       ',
    '     77777   F(((((                                                       ',
    '     77777   G((((                                                        ',
    '    HG7777  ((G((;                                                        ',
    '    7IJ77   ((KK(                                                         ',
    '    77GI7   (((G(                                                         ',
    '    777G0   (((H                                                          ',
    '    7777L  MFKGG                                                          ',
    '    77LG   KGGGH                                                          ',
    '    GGGN   O(((                                                           ',
    '    G;77   GG0(                                                           ',
    '    G)77   0GGG                                                           ',
    '    GGGI   (((K                                                           ',
    '    777G   ((K-.                                                          ',
    '    77)P. ((G0(((                                                         ',
    '    77G7777GQ((((((                                                       ',
    '    7G77777777(((((((                                                     ',
    '    G777777777R(((-FG                                                     ',
    '   GGGGF(7MIGG1GGGGS                                                      ',
    '       \'LGGI                                                              ',
], {
    "0" : -5932966,
    "1" : -10863586,    "2" : -13820416,    "3" : -11850466,    "4" : -10863571,    "5" : -11850481,    "6" : -6916006,    "7" : -3959176,    "8" : -8885911,    "9" : -9872806,    " " : 0,    "!" : -6912121,    "\"" : -9872821,    "#" : -8885926,    "$" : -12833521,    "%" : -6912136,    "&" : -11846626,    "'" : -7899046,    "(" : -4946071,    ")" : -4946056,    "*" : -12837361,
    "+" : -10859731,    "," : -14807296,    "-" : -4949911,    "." : -3959161,    "/" : -7902901,    ":" : -12833506,    ";" : -4942216,    "<" : -9868951,    "=" : -8882056,    ">" : -6915991,    "?" : -11842741,    "@" : -10855846,    "A" : -10855861,    "B" : -8882071,    "C" : -7895161,    "D" : -7899016,    "E" : -5929096,    "F" : -8893651,    "G" : -11854336,    "H" : -5932951,
    "I" : -9880546,    "J" : -11854321,    "K" : -10867441,    "L" : -10867426,    "M" : -5929111,    "N" : -9876691,    "O" : -5936806,    "P" : -7906741,    "Q" : -6919861,    "R" : -7906756,    "S" : -9880531,
}, 3);
			return get(2, 0, 112, 220);
		},
		swing_3: function(){
			background(0, 0);
			Display.pixelArt([
    '          !"!                                                             ',
    '      #$$$$$$$$%                                                          ',
    '      $$$$$$$$$$$                                                         ',
    '     $$$$$$$$$$$$$                                                        ',
    '     $$$$$$$$$$$$$                                                        ',
    '    !$$$$$$$$$$&$$                                                        ',
    '    $$$$$&\'$$$$($$                                                        ',
    '    $)$$$*++$$,- $                                                        ',
    '   ./$$$$$++$$((                                                          ',
    '    $$$$$0+,$%(((                                                         ',
    '    $$$$$(($$(((                                                          ',
    '   $$.$$$(($$((                                                           ',
    '   $$$$.(($$$((                                                           ',
    '  $$1$1$((2$                                                              ',
    '  1)$3$+((+$                                                              ',
    ' 14$3 $(56((6                                                             ',
    '  $3  -5555((                                                             ',
    '  .   55555(((                                                            ',
    '      55555(((                                                            ',
    '      55555((((                                                           ',
    '      55555((((                                                           ',
    '      55555((((                                                           ',
    '      55555((((                                                           ',
    '      55555((((                                                           ',
    '      65555(((((                                                          ',
    '      75555((((8                                                          ',
    '      75555((((9                                                          ',
    '      !5555((((:                                                          ',
    '      ;5556((7;:                                                          ',
    '      :555::9;::                                                          ',
    '      :6555:::::+                                                         ',
    '      ::555(;9:;++                                                        ',
    '     ;::5555;;9<+++                                                       ',
    '     :::=5555::>++++                                                      ',
    '    ?::996555#: +++++                                                     ',
    '    ;:999955559   ++++                                                    ',
    '    :9999995557;   ++++5                                                  ',
    '    :999999@555;    ++++                                                  ',
    '    9;9999996555     ++++                                                 ',
    '    9:99999995555     +++                                                 ',
    '    9:99999995555     +++                                                 ',
    '    9:99999999555      ++                                                 ',
    '   9;:999999995557                                                        ',
    '   9:;9999:999(555                                                        ',
    '   9:9999:9999@559                                                        ',
    '   9:999:9999999999                                                       ',
    '  ?;:99:9999999999A                                                       ',
    '   :::B5554459999+                                                        ',
    '   ;  555555++++++                                                        ',
    '      555555++++++                                                        ',
    '      555555++++++6                                                       ',
    '      55555  ++++++                                                       ',
    '      55555  ++++++                                                       ',
    '      55555   +++++                                                       ',
    '      5555   ++++++                                                       ',
    '     55555  C+++++                                                        ',
    '    D55555  +E++++                                                        ',
    '    E&555   +FG++                                                         ',
    '    5E+55   ++E\'+                                                         ',
    '    55E55  H+++E                                                          ',
    '    555E   ++++D                                                          ',
    '    5558   &DEEE                                                          ',
    '    5+GE   EEED                                                           ',
    '   IEEE(   ++++                                                           ',
    '    D555   EE++                                                           ',
    '    D55    JEEK                                                           ',
    '    EEE    +++K                                                           ',
    '    55+   +++E+                                                           ',
    '    55G5  ++E++++                                                         ',
    '   55F85556E++++++(                                                       ',
    '   5IG5555555(++++++L                                                     ',
    '   5E555555555&+++-GE                                                     ',
    '  BEEEEM(6-EEEGEEEE,                                                      ',
    '       CEEE>                                                              ',
], {
    "0" : -10863571,
    "1" : -13820401,    "2" : -10863586,    "3" : -14807296,    "4" : -6912136,    "5" : -3959176,    "6" : -4942216,    "7" : -5929096,    "8" : -5929111,    "9" : -9868951,    " " : 0,    "!" : -7899031,    "\"" : -9876676,    "#" : -8885926,    "$" : -12833521,    "%" : -11850481,    "&" : -6919861,    "'" : -5932966,    "(" : -4946056,    ")" : -13824256,    "*" : -11850466,
    "+" : -4946071,    "," : -8889796,    "-" : -5932951,    "." : -12837361,    "/" : -13820416,    ":" : -11842741,    ";" : -10855846,    "<" : -9872806,    "=" : -8885911,    ">" : -7902886,    "?" : -7895161,    "@" : -7899016,    "A" : -8882056,    "B" : -6915991,    "C" : -8889781,    "D" : -9880546,    "E" : -11854336,    "F" : -8893651,    "G" : -10867441,    "H" : -3959161,
    "I" : -6916006,    "J" : -6923701,    "K" : -7902901,    "L" : -3955321,    "M" : -6919846,
}, 3);
			return get(2, 0, 73, 222);
		},
		stab_0: function(){
			background(0, 0);
			Display.pixelArt([
    '                !"""""                                                    ',
    '             #""""""""""                                                  ',
    '             $"""""""""""                                                 ',
    '             """""""""""""                                                ',
    '            %"""""""""""""                                                ',
    '            """""$"""""&""                                                ',
    '            """""\'\'""""&""                                                ',
    '           "()"""$\'*""\'+ "                                                ',
    '          ,-""""""\'.""&&                                                  ',
    '            """""&\'""/&&&                                                 ',
    '           """"""&&""&&&                                                  ',
    '           ""("".&0""&&                                                   ',
    '          1"2"("&&""/3&                                                   ',
    '          "2")"+&&""                                                      ',
    '         "-")("&&&0"                                                      ',
    '        ) ""- 4333&&5                                                     ',
    '          "-  63333&&                                                     ',
    '          -   33333&&&                                                    ',
    '         #    33333&&&                                                    ',
    '              33333&&&&                                                   ',
    '             \'33333&&&&                                                   ',
    '            \'\'33333&&&&                                                   ',
    '            \'\'33333&&&&                                                   ',
    '           \'\'\'33333&&&&                                                   ',
    '           \'\'\'33333&&&&7                                                  ',
    '          \'\'\'\'33333&&&&8                                                  ',
    '          \'\'\'633336&&&&9\'\'\'                                               ',
    '          \'\'\'\'7333&&&&&:\'\'\'\'                                              ',
    '          \'\'\'\'#333&&&7;:\'\'\'                                               ',
    '           \'\'\':333::9;::  <                                               ',
    '              :3336:::::                                                  ',
    '              :#333#;9;:                                                  ',
    '             :::3333:;9=                                                  ',
    '             :::%3336::                                                   ',
    '            9::993333::                                                   ',
    '            ::99993333;                                                   ',
    '            :99999%333>                                                   ',
    '           99;999993333:                                                  ',
    '           99:9999993336                                                  ',
    '           9;;99999993336                                                 ',
    '           9:9999999933339                                                ',
    '          =9:99999999;33399                                               ',
    '          9:;99999999:333?9                                               ',
    '          9:999999999:333699                                              ',
    '         9::9999:9999:633999                                              ',
    '         9:999;:999999999999                                              ',
    '         :::::999999999999@\'                                              ',
    '         ;;6333?99A9999A*\'\'\'\'                                             ',
    '           3333333    \'\'\'\'\'\'\'                                             ',
    '           3333333    &\'\'\'\'\'\'                                             ',
    '           333333      \'\'\'\'\'\'\'                                            ',
    '           333333       \'\'\'\'\'\'                                            ',
    '           33333         \'\'\'\'\'                                            ',
    '          333333         \'\'\'\'\'                                            ',
    '         333333         8\'\'\'\'\'                                            ',
    '        B33333<         CC\'\'\'\'                                            ',
    '       <C&3333          \'BC\'\'                                             ',
    '       36B333           \'\'BD\'                                             ',
    '      333B33            \'\'\'BE                                             ',
    '      333F6             \'\'\'\'B                                             ',
    '     33336B             \'\'.B+                                             ',
    '     BBBBB              BBBB                                              ',
    '     ////               BB\'\'                                              ',
    '    BG33<               C\'\'\'                                              ',
    '    HBC3                DBBB                                              ',
    '   533B0                \'\'IC                                              ',
    '   333J                 \'\'\'C\'                                             ',
    '  33JB3<                \'\'JK\'\'\'                                           ',
    '  .B*333                \'HB\'\'\'\'\'\'\'&                                       ',
    ' BB633333               \'B\'\'\'\'\'\'\'\'KB                                      ',
    '  BBD333333             BBBJ*\'\'HBBB                                       ',
    '    BB63333<            BFCBBBBB+                                         ',
    '      BBFL/M                                                              ',
    '        N/4B                                                              ',
], {
    "0" : -5929111,
    "1" : -9872821,    "2" : -13820416,    "3" : -3959176,    "4" : -10863586,    "5" : -3955321,    "6" : -4942216,    "7" : -5929096,    "8" : -6915991,    "9" : -9868951,    " " : 0,    "!" : -11850466,    "\"" : -12833521,    "#" : -8885926,    "$" : -11850481,    "%" : -6912136,    "&" : -4946056,    "'" : -4946071,    "(" : -12837361,    ")" : -13820401,    "*" : -5932951,
    "+" : -8889796,    "," : -9872836,    "-" : -14807296,    "." : -7906741,    "/" : -7902901,    ":" : -11842741,    ";" : -10855846,    "<" : -3959161,    "=" : -8882056,    ">" : -9872806,    "?" : -7899016,    "@" : -8885911,    "A" : -8882071,    "B" : -11854336,    "C" : -10867441,    "D" : -9880546,    "E" : -8893651,    "F" : -11854321,    "G" : -10867426,    "H" : -5932966,
    "I" : -6919846,    "J" : -7906756,    "K" : -6919861,    "L" : -9876691,    "M" : -6916006,    "N" : -5925241,
}, 3);
			return get(0, 0, 108, 222);
		},
		stab_1: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                          ',
    '               !!!!!!!"                                                   ',
    '             "!!!!!!!!!!                                                  ',
    '             !!!!!!!!!!!!                                                 ',
    '            #!!!!!!!!!!!!$                                                ',
    '            !!!!!!!!!!!!!%                                                ',
    '            !!!!!&!!!!%!!%                                                ',
    '           %!\'!!!((!!!)!!*                                                ',
    '           !\'!!!!+(!!!)) %                                                ',
    '          ,-!!!!!+(!!+))                                                  ',
    '           !!!!!!)(!!)))                                                  ',
    '           !!!!!&)(!.))                                                   ',
    '          /!0!!!))!!)))                                                   ',
    '          !!0!01)2!!                                                      ',
    '         304!4!)))!!                                                      ',
    '         40!\' .)))5%                                                      ',
    '          !\'  )666))                                                      ',
    '          4  "66666))                                                     ',
    '         !   766666))8                                                    ',
    '             )66666)))                                                    ',
    '             )66666)))                                                    ',
    '             )66666))))                                                   ',
    '             )66666))))                                                   ',
    '             )6666)))))(                                                  ',
    '             96666)))))(                                                  ',
    '             :6666)))))((                                                 ',
    '              6666)))))((                                                 ',
    '              6666)))))(()((((((((((((()                                  ',
    '              6666))));((((((((((((((((((                                 ',
    '              6666<$=;>((((((((((((((((((8                                ',
    '              ?666>;?>>   )(((@        ((                                 ',
    '             ?>6666>>>;                                                   ',
    '             >>=666A;>;                                                   ',
    '             >>>6666;;;                                                   ',
    '            ?>>;B666B>>                                                   ',
    '            >>;;;6666>>                                                   ',
    '            >;;;;;6666>                                                   ',
    '           ;;;;;;;C666D                                                   ',
    '           ?;;;;;;;6666>                                                  ',
    '           ;?;;;;;;;6666                                                  ',
    '           ;>;;;;;;;9666/                                                 ',
    '          ;?>;;;;;;;;6666;                                                ',
    '          ;>;;;;;;;;;E666;9                                               ',
    '         9;>;;;;;;;;;>666;;                                               ',
    '         ;>?;;;;?;;;;>666;;;                                              ',
    '         ;>;;;;>;;;;;;9B;;;;                                              ',
    '         >>;;>?;;;;;;;;;;;;(                                              ',
    '         >>>B/;;;;;;;;;;;F((                                              ',
    '           66666)A   (((((((7                                             ',
    '           6666666    (((((((                                             ',
    '           666666     @((((((                                             ',
    '           666666      ((((((8                                            ',
    '           66666        ((((((                                            ',
    '           66666         (((((                                            ',
    '         666666         ((((((                                            ',
    '        G666668         H((((                                             ',
    '       8H66666          IH(((                                             ',
    '       6H6666           (JH((                                             ',
    '      66)G66            ((GH(                                             ',
    '      666H6             (((H                                              ',
    '     6666H8             (((K                                              ',
    '     HHLMF              IHHH                                              ',
    '    7HHHH               HHN(                                              ',
    '    H6666               O(((                                              ',
    '    HH66                HHN(                                              ',
    '    6HH                 KGHH                                              ',
    '   666K                 (((H                                              ',
    '  666H+                 ((PO((                                            ',
    '  6HQ666                (MJ((((((                                         ',
    ' HH666666               (H((((((((O                                       ',
    'RHHH666666              HSO(((((KHH                                       ',
    '   HH566666            HHHHHHHHHH                                         ',
    '     HHT6666                                                              ',
    '       HHHHH                                                              ',
], {
    "0" : -12837361,
    "1" : -8893636,    "2" : -11850481,    "3" : -10859731,    "4" : -13820416,    "5" : -5929111,    "6" : -3959176,    "7" : -4942216,    "8" : -3959161,    "9" : -8882056,    " " : 0,    "!" : -12833521,    "\"" : -10863571,    "#" : -9872836,    "$" : -8885926,    "%" : -11850466,    "&" : -7902901,    "'" : -14807296,    "(" : -4946071,    ")" : -4946056,    "*" : -11846626,
    "+" : -5932966,    "," : -11846611,    "-" : -9876676,    "." : -10863586,    "/" : -6912136,    ":" : -7895161,    ";" : -9868951,    "<" : -6915991,    "=" : -7899031,    ">" : -11842741,    "?" : -10855846,    "@" : -3955321,    "A" : -8882071,    "B" : -5929096,    "C" : -7899016,    "D" : -9872806,    "E" : -7902871,    "F" : -5932951,    "G" : -10867441,    "H" : -11854336,
    "I" : -8893651,    "J" : -9880546,    "K" : -7906756,    "L" : -9880531,    "M" : -6919861,    "N" : -5936806,    "O" : -4949911,    "P" : -10867426,    "Q" : -11854321,    "R" : -5925241,    "S" : -6923701,    "T" : -8889796,
}, 3);
			return get(0, 0, 126, 222);
		},
		stab_2: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                          ',
    '               !!!!!!!"                                                   ',
    '             #!!!!!!!!!!                                                  ',
    '             !!!!!!!!!!!!                                                 ',
    '            $!!!!!!!!!!!!!                                                ',
    '            !!!!!!!!!!!!!!                                                ',
    '            !!!!!%!!!!&\'!!                                                ',
    '           (!)!!!**&!!+,!!                                                ',
    '           !-!!!!%*&!!++ "                                                ',
    '          .#!!!!!%*!!/++                                                  ',
    '           !!!!!!+*!!+++0                                                 ',
    '           !!!!!\'+*!!++                                                   ',
    '           !1!!!++!!+++                                                   ',
    '          !!1!23+&!!                                                      ',
    '         41)!5!+++!!                                                      ',
    '         )1!- &+++*!                                                      ',
    '          !-  +666++**                                                    ',
    '          )  766666++***                                                  ',
    '         !   866666+++****                                                ',
    '             +66666+++******                                              ',
    '             +66666+++******** +****90*****                               ',
    '             +66666++++***********************                            ',
    '             +66666++++  **********************                           ',
    '             866669++++     8+*6******9********                           ',
    '              6666+++++                    ***                            ',
    '              6666+++++                                                   ',
    '              6666+++++                                                   ',
    '              6666+++++                                                   ',
    '              6666++++:                                                   ',
    '              9666;7;:<                                                   ',
    '              <666<:=<<                                                   ',
    '             ><6666<<<:                                                   ',
    '             <<?666@:<:                                                   ',
    '             <<<6666:::                                                   ',
    '            =<<:A6669<<                                                   ',
    '            <<:::6666<<                                                   ',
    '            <:::::6666<                                                   ',
    '           :::::::@666?                                                   ',
    '           =:::::::9666<                                                  ',
    '           :=:::::::6666                                                  ',
    '           :<:::::::B666C                                                 ',
    '          :=<::::::::6666:                                                ',
    '          :<:::::::::D666:>                                               ',
    '         >:<:::::::::<666::                                               ',
    '         :<=::::=::::<666:::                                              ',
    '         :<::::<::::::ECB:::                                              ',
    '         <<::=<::::::::::::*                                              ',
    '         <<<CA:::::::::::F**                                              ',
    '           666669E   ********                                             ',
    '           6666666    *******                                             ',
    '           666666      ******                                             ',
    '           666666      6******                                            ',
    '           66666        ******                                            ',
    '           66666         *****                                            ',
    '         666666         9*****                                            ',
    '        G666666         H****                                             ',
    '       0H66666          IH***                                             ',
    '       6H6666           *IH**                                             ',
    '      66+H66            **JH*                                             ',
    '      666H6             ***GK                                             ',
    '     6666H8             ***%                                              ',
    '     HHJ%*              LHHH                                              ',
    '    8HHHH               HH%*                                              ',
    '    H6666               M***                                              ',
    '    HH66                HH%*                                              ',
    '    6HH                 IGHH                                              ',
    '   666/                 ***H                                              ',
    '  666HM                 **LM**                                            ',
    '  6HH666                **G******                                         ',
    ' HH666666               *H*********                                       ',
    'NHHH666666              HIF*****%HH                                       ',
    '   HHF66666            HHHHHHHHHH                                         ',
    '     HHO6666                                                              ',
    '       HHHHH                                                              ',
], {
    "0" : -3955321,
    "1" : -12837361,    "2" : -13820401,    "3" : -10863586,    "4" : -10859716,    "5" : -13824256,    "6" : -3959176,    "7" : -8885926,    "8" : -3959161,    "9" : -4942216,    " " : 0,    "!" : -12833521,    "\"" : -11846626,    "#" : -8885941,    "$" : -7899031,    "%" : -6919861,    "&" : -11850481,    "'" : -9876691,    "(" : -11850466,    ")" : -13820416,    "*" : -4946071,
    "+" : -4946056,    "," : -10863571,    "-" : -14807296,    "." : -11846611,    "/" : -7902901,    ":" : -9868951,    ";" : -6915991,    "<" : -11842741,    "=" : -10855846,    ">" : -8882056,    "?" : -9868966,    "@" : -7899016,    "A" : -6912136,    "B" : -8885911,    "C" : -5929096,    "D" : -9872806,    "E" : -8882071,    "F" : -5932951,    "G" : -10867441,    "H" : -11854336,
    "I" : -7906756,    "J" : -9880546,    "K" : -7902886,    "L" : -8893651,    "M" : -5932966,    "N" : -5925241,    "O" : -8893636,
}, 3);
			return get(0, 0, 141, 222);
		},
		shield_walk_0: function(){
			background(0, 0);
			Display.pixelArt([
			    '                 !"#                     ',
			    '             $%%%%%%%%"                  ',
			    '            #%%%%%%%%%%%                 ',
			    '            %%%%%%%%%%%%$                ',
			    '            %%%%%%%%%%%%%                ',
			    '           %%%%%%%%%%%"%%                ',
			    '           %%%%%&\'%%%()%%                ',
			    '          *%+%%%,&&%%-( %                ',
			    '          %.%%%%%&/%%--                  ',
			    '         01%%%%%/&2%(---                 ',
			    '           %%%%%-3%%---                  ',
			    '          %%%%%%--%%--                   ',
			    '          %%4%53-6%%--       7           ',
			    '         8%.%.%-3(%          9:          ',
			    '         %.%.%;--<%         999          ',
			    '        45%+ %----&=       :999          ',
			    '       > %4? 2=999--       9999          ',
			    '         %5  -99999--      9999          ',
			    '         +   -999999-      999           ',
			    '             -9999999-     999           ',
			    '             --999999=     999           ',
			    '            =---999999@    999           ',
			    '            &----999999    999           ',
			    '           )&-----999999  @999           ',
			    '           &&A-----999999 9999           ',
			    '           &&B------99999 9999           ',
			    '          &&&AC------99999999            ',
			    '          &&&ADE------9999999            ',
			    '          &&& DDF----1D999999            ',
			    '          &&& DDDDDDBDD 999              ',
			    '          &&& DDDDDDDDG                  ',
			    '          &&&BDDDDDDDBD                  ',
			    '          &&&DDDDDBGDDB                  ',
			    '          &&&DDDBBBBBGD                  ',
			    '          &&HDDBBBBDDDD                  ',
			    '          &&DDBBBBBBBBD                  ',
			    '          &EDBBBBBBBDDD                  ',
			    '          &AGBBBBBBBBBBD                 ',
			    '          &BBDBBBBBBBBGD                 ',
			    '         &&ABDBBBBBBBGDGG                ',
			    '         &&BDBBBBBBBBBGDBB               ',
			    '         &EBDBBBBBBBBGDDBBB              ',
			    '         &BGDBBBBBBBBGDDBBBB             ',
			    '        &&BDGBBBBBBBBDDDBBBB             ',
			    '         ABDBBBBGGBBBDGBBBBBB            ',
			    '         BDDBBBDGBBBBBBBBBBB             ',
			    '         BDGBGDBBBBBBBBBBBA&&            ',
			    '         DDD!9IABBBBBBBA)&&&&            ',
			    '            9999999   &&&&&&&&           ',
			    '            999999     &&&&&&&           ',
			    '            999999      &&&&&&=          ',
			    '           799999        &&&&&&          ',
			    '           999999         &&&&&          ',
			    '           999997         &&&&&          ',
			    '          999999          &&&&&          ',
			    '         J99999           J&&&&          ',
			    '        9K99999           LKM&&          ',
			    '       99K9999            &&JK,          ',
			    '       99K399             &&&&K          ',
			    '      999=N9               &&&&*         ',
			    '     O3999K                &&PKQ         ',
			    '     KKKKK                 &KKR&         ',
			    '     99=&                   K,&&         ',
			    '    KK999                   &&&&         ',
			    '    9KK9                    9KKKL        ',
			    '   999K                      &&&K&&      ',
			    '  999)K                      &&&L&&&&&&&K',
			    '  9SK)9:                     )&K&&&&&&,K*',
			    'OKK)9999                     @&K&&&&&6K  ',
			    'MKKT99999                     &J&UJKKT   ',
			    '   KK99999                    KKKK"      ',
			    '    6K)9999                   K          ',
			    '      KKKTV@                             ',
			    '         WKO                             ',
			], {
			    "0" : -12570592,
			    "1" : -7307152,    "2" : -11522016,    "3" : -5205904,    "4" : -12574704,    "5" : -13623280,    "6" : -11522032,    "7" : -3100528,    "8" : -10465232,    "9" : -4153216,    " " : 0,    "!" : -8359840,    "\"" : -10469328,    "#" : -9412544,    "$" : -9412528,    "%" : -12570608,    "&" : -5210016,    "'" : -9420752,    "(" : -11517920,    ")" : -5210000,    "*" : -5201776,
			    "+" : -13623296,    "," : -6262704,    "-" : -4157328,    "." : -14675968,    "/" : -9416656,    ":" : -3104624,    ";" : -6262688,    "<" : -6258592,    "=" : -4157312,    ">" : -7307136,    "?" : -11517904,    "@" : -4153200,    "A" : -8359824,    "B" : -9408400,    "C" : -8355728,    "D" : -11513776,    "E" : -6258576,    "F" : -10461104,    "G" : -10461088,    "H" : -9408416,
			    "I" : -5205888,    "J" : -10473456,    "K" : -11526144,    "L" : -8368064,    "M" : -8363968,    "N" : -11526128,    "O" : -8363952,    "P" : -10473440,    "Q" : -7315376,    "R" : -8368080,    "S" : -9420768,    "T" : -10469344,    "U" : -7315392,    "V" : -7311280,    "W" : -7311264,
			}, 3);
			return get(0, 0, 123, 222);
		},
		shield_walk_1: function(){
			background(0, 0);
			Display.pixelArt([
			    '                   !"#$                  ',
			    '                %&&&&&&&&$               ',
			    '               &&&&&&&&&&&#              ',
			    '               &&&&&&&&&&&&              ',
			    '              \'&&&&&&&&&&&&&             ',
			    '              &&&&&&&&&&&&&&             ',
			    '              &&&&&()&&&*+&&             ',
			    '             %&,&&&((-&&.&/&             ',
			    '             &0&&&&)(1&&..               ',
			    '            23&&&&&((&&(..               ',
			    '             #&&&&&.4&&...               ',
			    '             &&&&&1.5&&..                ',
			    '             &&&&6..&&7..                ',
			    '            )&,&,&.8&&         99        ',
			    '            &0&0&4..:&         99        ',
			    '           62&0 &....*        999        ',
			    '          ; &2< *9999..       999        ',
			    '            &=  .99999..      999        ',
			    '            2   .999999.      999        ',
			    '                .999999>.     999        ',
			    '                ..999999.     999        ',
			    '                ...999999     999        ',
			    '                ....999999   ?999        ',
			    '                .....999999  9999        ',
			    '               (@.....99999  9999        ',
			    '               (A.....>99999 999         ',
			    '               (A4.....>99999999         ',
			    '              .(AB......>9999999         ',
			    '              ((ABBC....D$999999         ',
			    '              ((EBBBBBFABB 999           ',
			    '               (GBBBBBBBBF               ',
			    '              >(BBBBBBBBAB               ',
			    '               (BBBBBAFBBA               ',
			    '               4BBBAAAAAFB               ',
			    '               FBBAAAFBBBB               ',
			    '               BBAAAAAAAFB               ',
			    '               BAAAAAAABBB               ',
			    '              AFAAAAAAAAAAF              ',
			    '              AABAAAAAAAAFB              ',
			    '              HABAAAAAAABBB              ',
			    '              AFFAAAAAAAAFBH             ',
			    '              ABAAAAAAAAABBA             ',
			    '              ABAAAAAAAAABBAA            ',
			    '             AFBAAAAAAAAFBBAA            ',
			    '             ABFAAAABAAABBAAAA           ',
			    '             ABAAAABAAAAAAAAAA           ',
			    '            HFBAAFBAAAAAAAAAAA           ',
			    '             BBBBAAAAAAAAAAAA4           ',
			    '             BF99999995@@(((((           ',
			    '               9999999 (((((((           ',
			    '               9999999  ((((((           ',
			    '               999999   ((((((           ',
			    '               999999    (((((9          ',
			    '             3999999I     (((((          ',
			    '            9J999999      (((((          ',
			    '           99J999999     5((((>          ',
			    '         999>J99999      K((((           ',
			    '        :999L-9999       JL(((           ',
			    '       JJJ99M>9          (JM((           ',
			    '      J9KJJLJ            ((JJ(           ',
			    '     9J:998              (((NJ           ',
			    '   9997J99               ((((M           ',
			    '  99999J                 ((JJ7           ',
			    'JJJJJJJ!                 JJJOI           ',
			    ' JJ9999                  PP((I           ',
			    '  J>9999                  MO(9           ',
			    '  QJ9999                  JJJL           ',
			    '   JO999                  (((J           ',
			    '    J>999                 ((-(((         ',
			    '     JM99                 ((J(((((((>    ',
			    '      JJ5                 (J((((((((J    ',
			    '        J                 KJ((((((JJQ    ',
			    '                         "JJJJJJJJQ      ',
			    '                          :              ',
			], {
			    "0" : -14675968,
			    "1" : -11522032,    "2" : -13623280,    "3" : -6254464,    "4" : -5210000,    "5" : -5205904,    "6" : -12574704,    "7" : -7311280,    "8" : -6258592,    "9" : -4153216,    " " : 0,    "!" : -5201776,    "\"" : -8363952,    "#" : -10465232,    "$" : -8359840,    "%" : -10469328,    "&" : -12570608,    "'" : -11517920,    "(" : -5210016,    ")" : -11522016,    "*" : -8363968,
			    "+" : -7315376,    "," : -13623296,    "-" : -7315392,    "." : -4157328,    "/" : -8355728,    ":" : -9416656,    ";" : -9412528,    "<" : -10465200,    "=" : -12566480,    ">" : -4157312,    "?" : -4153200,    "@" : -6258576,    "A" : -9408400,    "B" : -11513776,    "C" : -7311264,    "D" : -7307152,    "E" : -8359824,    "F" : -10461088,    "G" : -9412512,    "H" : -8355712,
			    "I" : -3104624,    "J" : -11526144,    "K" : -6262704,    "L" : -8368080,    "M" : -10473456,    "N" : -10473440,    "O" : -6262688,    "P" : -9420768,    "Q" : -9416640,
			}, 3);
			return get(0, 0, 111, 222);
		},
		shield_walk_2: function(){
			background(0, 0);
			Display.pixelArt([
			    '         !!!!"                           ',
			    '      !!!!!!!!!!                         ',
			    '     !!!!!!!!!!!!                        ',
			    '     !!!!!!!!!!!!                        ',
			    '    #!!!!!!!!!!!!!                       ',
			    '    !!!!!!!!!!!$!!                       ',
			    '    !!!!!%&!!!&&!!                       ',
			    '   \'!(!!!)%*!!+) !                       ',
			    '   ,-!!!!!%$!!++                         ',
			    '    !!!!!%%!!.++/                        ',
			    '   #!!!!!++!!++0                         ',
			    '   !!,!!1++!!++                          ',
			    '   !!!!!++!!2++       /                  ',
			    '  $!-!3!++!!         //                  ',
			    '  !(!(!+++4!         //                  ',
			    ' - !( !+00++0       ///                  ',
			    '  $3  5////++       ///                  ',
			    '  !6  +/////++      ///                  ',
			    '  7   +//////+      ///                  ',
			    '      +0//////+     ///                  ',
			    '      ++0/////0     ///                  ',
			    '      +++0//////    ///                  ',
			    '      ++++//////   ////                  ',
			    '      8++++//////  ////                  ',
			    '      9+++++////// ///:                  ',
			    '      9++++++///// ///                   ',
			    '      ;<++++++////////                   ',
			    '      ;=>++++++///////                   ',
			    '       ===8+++9=/////                    ',
			    '       =====99==  /                      ',
			    '       ========9                         ',
			    '      <=====<9<=                         ',
			    '      ====99<<99                         ',
			    '      ===9<=====                         ',
			    '     <==99999===                         ',
			    '     ==99999999=%                        ',
			    '     =<999999999?                        ',
			    '    9=99999999999?                       ',
			    '     9999999999999#                      ',
			    '     99999999999999                      ',
			    '     @999999999<999A                     ',
			    '      ;99<999999999?                     ',
			    '       99<=99999<99//                    ',
			    '       999==9999=9////                   ',
			    '       9999==999=//////                  ',
			    '       99999==99"//////B                 ',
			    '        99999==<A///////                 ',
			    '         #9999==9//C/////                ',
			    '          %%A9==  /C/////                ',
			    '          %%%%%% //C/////                ',
			    '          %%%%%%///C////                 ',
			    '          4%%%%////C//                   ',
			    '           %%%DC///C/                    ',
			    '           %%%CCCC8C                     ',
			    '          4%%C0/8EF                      ',
			    '         1%%0CC//                        ',
			    '         C%0//C&                         ',
			    '        %G/////.                         ',
			    '        *085CCH                          ',
			    '       %CC10///                          ',
			    '       %%CC/////                         ',
			    '       D%%CC////                         ',
			    '      ECCCCCE////                        ',
			    '      %%%%  IC////                       ',
			    '      CJ%%   #CC8/                       ',
			    '      *CCB     KCC                       ',
			    '     %%%C                                ',
			    '     %%.C                                ',
			    '    %%CD%%                               ',
			    '    JC%%%%%                              ',
			    '   CCL%%%%%%                             ',
			    '    1CC&%%%%%%                           ',
			    '       CCM*%%%                           ',
			    '         NCCCC#                          ',
			], {
			    "0" : -4157312,
			    "1" : -10469344,    "2" : -7315376,    "3" : -13623280,    "4" : -5210000,    "5" : -8363968,    "6" : -8355728,    "7" : -11517904,    "8" : -5205904,    "9" : -9408400,    " " : 0,    "!" : -12570608,    "\"" : -8359840,    "#" : -7307152,    "$" : -11522016,    "%" : -5210016,    "&" : -6262688,    "'" : -9412544,    "(" : -14675968,    ")" : -7311280,    "*" : -6262704,
			    "+" : -4157328,    "," : -12574704,    "-" : -13623296,    "." : -6258592,    "/" : -4153216,    ":" : -3100528,    ";" : -8355712,    "<" : -10461088,    "=" : -11513776,    ">" : -10461104,    "?" : -8359824,    "@" : -7303024,    "A" : -6258576,    "B" : -4153200,    "C" : -11526144,    "D" : -7315392,    "E" : -10473456,    "F" : -7311264,    "G" : -9420768,    "H" : -9416656,
			    "I" : -11526128,    "J" : -8368080,    "K" : -7307168,    "L" : -11522032,    "M" : -9420752,    "N" : -8363952,
			}, 3);
			return get(0, 0, 75, 222);
		},
		shield_walk_3: function(){
			background(0, 0);
			Display.pixelArt([
			    '                 !"#$                    ',
			    '              %%%%%%%%%                  ',
			    '             %%%%%%%%%%%                 ',
			    '            &%%%%%%%%%%%%                ',
			    '            %%%%%%%%%%%%%                ',
			    '            %%%%%%%%%%\'%%$               ',
			    '           (%%%%%)%%%%*%%+               ',
			    '           %%,%%%))%%%*-%.               ',
			    '          /00%%%%))%%1**                 ',
			    '          ,%%%%%%*)%%***                 ',
			    '           %%%%%%*2%%**                  ',
			    '           %%%%%2*(%1**                  ',
			    '          3%0%%%**%%**4                  ',
			    '          %%%,,5*1%%         66          ',
			    '         \',0,0%***%%         66          ',
			    '         7,%8 \'****9        666          ',
			    '          %8  *666:**       666          ',
			    '          0  $66666:*       666          ',
			    '         "   ;666666:*      666          ',
			    '         <   **666666*      66           ',
			    '             **:666666*     66           ',
			    '             :**:666666    666           ',
			    '              ***:666664   666           ',
			    '              ****666666   666           ',
			    '              *****666666  666           ',
			    '              =*****666666 666           ',
			    '              >******66666?666           ',
			    '              @A******66666666           ',
			    '              @BB*****>:66666            ',
			    '              BBBBBBC>BB 66              ',
			    '              BBBBB@BBB>                 ',
			    '              BBBBBBBB>B                 ',
			    '              BBBBB>@B@>                 ',
			    '             @BBB>>>>>@B                 ',
			    '             BBB>>>BBBBB                 ',
			    '             BB>>>>>>>B@                 ',
			    '            >B>>>>>>>>>B)                ',
			    '            BB>>>>>>>>>>)                ',
			    '            B>>>>>>>>>>>>)               ',
			    '            @>>>>>>>>>>>>>)              ',
			    '             >>>>>>>>>>>>>D              ',
			    '             >>@>>>>>>>>>>>4             ',
			    '             >>>B>>>>>>B>>>D             ',
			    '             >>>>B>>>>>B>>E6             ',
			    '             >>>>@B>>>>B>E666            ',
			    '             >>>>>BB>>>B!6666            ',
			    '              >>>>>B@>>F666666           ',
			    '              )>>>>>B>B6666666           ',
			    '              ))E>>>BBB66666666          ',
			    '              ))))E>>B@ 46666666         ',
			    '              ))))))      666666         ',
			    '              ))))))       66666         ',
			    '              )))))6       66666         ',
			    '             ;)))))        66666         ',
			    '           G))))))6        HI666         ',
			    '          DH))))))         6JHK6         ',
			    '         D)H)))))          466LHM        ',
			    '        4))H))))            6666N        ',
			    '        )))H))D             666HH        ',
			    '       O)))H)               6:HH6        ',
			    '      9HHP)H                 HH66        ',
			    '      )LHHH                  H666        ',
			    '     HH)))                    HHHH       ',
			    '    2)HN)                     H1:66      ',
			    '   ))))H                       66Q6666666',
			    '  ))))L9                       66H666666K',
			    '  NHHN))                       62N66666HH',
			    '9HH)))))                       6H666OHH/ ',
			    '  HH)))))                       HHHHH    ',
			    '   HH))))                      HHQ       ',
			    '    HH))))                               ',
			    '     -HR)))                              ',
			    '       HHHR                              ',
			    '          S                              ',
			], {
			    "0" : -13623280,
			    "1" : -7315376,    "2" : -5205904,    "3" : -11522016,    "4" : -4153200,    "5" : -6262688,    "6" : -4153216,    "7" : -13623296,    "8" : -14675968,    "9" : -11522032,    " " : 0,    "!" : -6254464,    "\"" : -10465232,    "#" : -10465216,    "$" : -6250352,    "%" : -12570608,    "&" : -12570592,    "'" : -10469328,    "(" : -11517920,    ")" : -5210016,    "*" : -4157328,
			    "+" : -7307136,    "," : -12574704,    "-" : -10469344,    "." : -9412528,    "/" : -9416640,    ":" : -4157312,    ";" : -3104624,    "<" : -7303040,    "=" : -6258576,    ">" : -9408400,    "?" : -3100528,    "@" : -10461088,    "A" : -10465200,    "B" : -11513776,    "C" : -7307152,    "D" : -5210000,    "E" : -8359824,    "F" : -8355728,    "G" : -8363968,    "H" : -11526144,
			    "I" : -10473440,    "J" : -6262704,    "K" : -10473456,    "L" : -7315392,    "M" : -9416656,    "N" : -8368080,    "O" : -6258592,    "P" : -9420768,    "Q" : -11526128,    "R" : -8368064,    "S" : -8363952,
			}, 3);
			return get(0, 0, 123, 222);
		},
		shield_walk_4: function(){
			background(0, 0);
			Display.pixelArt([
    '                    !"""#                ',
    '                 """"""""""              ',
    '                $"""""""""""             ',
    '                """""""""""""            ',
    '                """""""""""""            ',
    '               %""""""""""&""            ',
    '               """""\'("""")""            ',
    '               "*"""+(("",- "            ',
    '              "."""""(&"")))             ',
    '             /0""""""&\'"")))             ',
    '               """"")),"1))              ',
    '              2"""""))"")))              ',
    '              ""3"4,)5""))               ',
    '             6"4"4"))5""         77      ',
    '             "4"4"")))"1        777      ',
    '            "8"*9#)))))5        777      ',
    '           % :". ";777))<       777      ',
    '             ".  \'77777))       777      ',
    '             *   )777777))      777      ',
    '                 );777777)      77       ',
    '                 ))77777777    777       ',
    '                 )))777777;    777       ',
    '                 ))))777777    777       ',
    '                 )))))777777   777       ',
    '                 =)))))777777  777       ',
    '                 >))))))777777 777       ',
    '                  ?))))))77777 777       ',
    '                  @-))))))77777777       ',
    '                  @@$)))))?777777        ',
    '                  @@@@AB:?@@777          ',
    '                  @@@@@CC@@@             ',
    '                  @@@@@@@@?@             ',
    '                 C@@@@@??@@C             ',
    '                 @@@@??????@             ',
    '                 @@@??@@@@@D             ',
    '                ?@@??????@@\'             ',
    '                @@????????CA             ',
    '                @C????????CC(            ',
    '                @??????????CE&           ',
    '                ????????????@(           ',
    '                ??C?????????@((          ',
    '                 ?@??????????((          ',
    '                =??@?????????((;         ',
    '                ???@?????@???((&         ',
    '                =??@@????@???((-         ',
    '                 ??C@????C???            ',
    '                 ???@???@???7            ',
    '                  ??@C??CF7777           ',
    '                  (?C@?@777777           ',
    '                 7(:?@@G777777           ',
    '                 )(((@@)777777           ',
    '                 &(((E((7777777          ',
    '                 &(((((  777777          ',
    '              (H(((((((   77777          ',
    '           I(((H((((((    77777          ',
    '         J((((KL((((((    77777          ',
    '        MHH(((H((((((    N77777          ',
    '      (H(OHH(PH((((()    QK777           ',
    '   ((((H(((HQH(          7HR77           ',
    'HH+((((HS(&              77HT7           ',
    ' HLUHHRH                 777HM           ',
    ' HR((((                  7777            ',
    '  H((((                  75HH            ',
    '  H((((                  HHH&            ',
    '  KS(((                  H;77            ',
    '   H(((                  Q)77            ',
    '   QH((                  HHHH            ',
    '    HH((                 77;5            ',
    '     HH&                 777H7           ',
    '      /                  77H7777I        ',
    '                         7H)77777777     ',
    '                         PR7777777;+E    ',
    '                        HHHHUO)\'UHHE     ',
    '                        NHVW/HHH,        ',
], {
    "0" : -6254464,
    "1" : -8363968,    "2" : -11517920,    "3" : -12574704,    "4" : -13623296,    "5" : -7311280,    "6" : -5201776,    "7" : -4153216,    "8" : -14671872,    "9" : -12570592,    " " : 0,    "!" : -9412528,    "\"" : -12570608,    "#" : -11522016,    "$" : -8359840,    "%" : -11517904,    "&" : -5210000,    "'" : -6258592,    "(" : -5210016,    ")" : -4157328,    "*" : -13623280,
    "+" : -11522032,    "," : -9416656,    "-" : -5205904,    "." : -14675968,    "/" : -10469328,    ":" : -7307152,    ";" : -4157312,    "<" : -3104624,    "=" : -8355712,    ">" : -6254448,    "?" : -9408400,    "@" : -11513776,    "A" : -9412512,    "B" : -10461104,    "C" : -10461088,    "D" : -7303024,    "E" : -7311264,    "F" : -8355728,    "G" : -5205888,    "H" : -11526144,
    "I" : -4153200,    "J" : -9416640,    "K" : -10473440,    "L" : -7315376,    "M" : -8368080,    "N" : -10469344,    "O" : -6262704,    "P" : -8368064,    "Q" : -11526128,    "R" : -10473456,    "S" : -7315392,    "T" : -9420752,    "U" : -9420768,    "V" : -6258576,    "W" : -7307168,
}, 3);
			return get(0, 0, 111, 222);
		},
		shield_walk_5: function(){
			background(0, 0);
			Display.pixelArt([
    '          !""""                          ',
    '       #"""""""""$                       ',
    '       """""""""""                       ',
    '      """""""""""""                      ',
    '      """""""""""""                      ',
    '      """"""""""%""                      ',
    '     ""&""\'("""")""                      ',
    '     "*""""((""\'% "                      ',
    '    "+"""""(("")))                       ',
    '   , """""")-"")))                       ',
    '     """"".)/"0))                        ',
    '     """""))""))1                        ',
    '    ""*"2")/""1)       33                ',
    '    "2"2")))""         33                ',
    '   "+"2&")))"4        333                ',
    '  \'+"*5,%)11)%        333                ',
    '    "+ !13333))       333                ',
    '   67  8333333)       333                ',
    '   "   11333331)      33                 ',
    '       ))333333)     933                 ',
    '       )))333333)    333                 ',
    '       3)))333333    333                 ',
    '       :))))333333   333                 ',
    '        ))))133333   333                 ',
    '        )))))133333  333                 ',
    '        ;)))))133333 333                 ',
    '        <))))))133333333                 ',
    '        ==))))))1333333                  ',
    '        ===>)))?=>33333                  ',
    '        ======@==< 33                    ',
    '        ========<=                       ',
    '        ======@@=<                       ',
    '       A====@@<@@=                       ',
    '       ===@@<====@                       ',
    '       ==@@@@@===B                       ',
    '      @=@@@@@@@@@!                       ',
    '      <=@@@@@@@===(                      ',
    '      =@@@@@@@@@@@C9                     ',
    '      =@@@@@@@@@<==(                     ',
    '      @@<@@@@@@@@@=((                    ',
    '       @=@@@@@@@@==((                    ',
    '       @=@@@@@@@@<@((D                   ',
    '       @=@@@@@@@@<=;()                   ',
    '       @=@@@@@@@@<@@(%                   ',
    '       @=@@@@=@@@@@@                     ',
    '       @=@@@<@@@@@@@                     ',
    '       @=@@@<@@@;@@@A                    ',
    '       @=<<<13333@@@                     ',
    '       A==!333333(((                     ',
    '        = 3333333(((                     ',
    '           333333(((                     ',
    '           333333(((                     ',
    '           333333(((                     ',
    '            33333(((                     ',
    '           %33331(((                     ',
    '         )(33333-(((                     ',
    '        EFG33333((                       ',
    '       HEE/E3339                         ',
    '      EE(.3IJ33                          ',
    '     (HE((33EK3                          ',
    '   ((((EL%333EF                          ',
    ' EH.(((L  3333E                          ',
    ' EEF((((  31JE                           ',
    '  E(((((  EEEM                           ',
    '  IE((((  E-33                           ',
    '   E((((  E333                           ',
    '    E(((( EEEE                           ',
    '    NE((( 333J                           ',
    '     NEM( 333O3                          ',
    '       EE 33E3333                        ',
    '          3E33333333                     ',
    '          EC33333333K                    ',
    '         EEEEGC1%OEEP                    ',
    '         Q   /EEEO                       ',
], {
    "0" : -10469344,
    "1" : -4157312,    "2" : -13623296,    "3" : -4153216,    "4" : -11522016,    "5" : -12570592,    "6" : -10465232,    "7" : -14671872,    "8" : -6258576,    "9" : -4153200,    " " : 0,    "!" : -8359840,    "\"" : -12570608,    "#" : -9412528,    "$" : -6250352,    "%" : -5210000,    "&" : -12574704,    "'" : -11517920,    "(" : -5210016,    ")" : -4157328,    "*" : -13623280,
    "+" : -14675968,    "," : -5201776,    "-" : -5205904,    "." : -6262688,    "/" : -8363968,    ":" : -3100528,    ";" : -8359824,    "<" : -10461088,    "=" : -11513776,    ">" : -9412512,    "?" : -8355728,    "@" : -9408400,    "A" : -8355712,    "B" : -7311264,    "C" : -6258592,    "D" : -3104624,    "E" : -11526144,    "F" : -7315392,    "G" : -9420768,    "H" : -6262704,
    "I" : -10473440,    "J" : -10473456,    "K" : -9416656,    "L" : -7315376,    "M" : -8368080,    "N" : -8363952,    "O" : -9420752,    "P" : -9416640,    "Q" : -6258560,
}, 3);
			return get(0, 0, 75, 222);
		},
	},
	backgrounds: {
		city_broken: function(){
			background(0, 0);
			Display.pixelArt([
    '!!!!!!!!!!!!!!!!!!!!!!!!!"""#$$%%%&\'\'\'\'&&&(()))**********+++++++++*********,))((((&&\'\'\'\'%%%$$$$!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!"""#$$%%%&\'\'\'\'&&&(()))**********+++++++++*********,))((((&&\'\'\'\'%%%$$$$!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!""$-$$%%%&\'\'\'&&&(()))*********...........++++*****,*)))((&&&\'\'\'%%%$$$$!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!"#----%%\'\'\'\'\'&&(((),*******.............../++*****,,))))((&&&\'\'\'&%%%--$!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!"$$$$%01\'&&&&&((())********...................********))(((&&&&&&%%%$$$$""!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!"$$$$%01\'&&&&&(())*******+.....................+*******)((((&&&&&%%%%$$$##!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!"$$$%%01\'&&&&(()),******+......2222222222........******))(((&&&&\'%%%%$$$##!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!-$$$%%00\'&&&&(((),*****+....222222222222222.......***,,*)(((&&&&\'%%%%$$$#"!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!-$$$%%03&&&&&()4,,****.....22222222222222222......+******)(((&&&\'&%%%%$$$"!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!-$$$%%%3&&&&&()4,,****.....22222222222222222.......******))((&&&\'&%%%%$$$"!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$%%13&&&&&&()4******....22222225555552222222.....******))((&&&&&&%%%$$$!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$01\'\'&&&&(()4,****+.....222225555555555222222.....****,,4)(&&&&\'&%%%$$-$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$%0\'\'&&&&(()),****6.....222222255577555552222.....******4)(&&&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'&&&&(())****66....22222228777772225522222....6*****4)(&&&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'\'\'&&(())****66...22222222799::788855522222.....****,)(((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'\'\'&&((),,***66...22222227;:<=>?77755522222.....****,4)((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'&&&&&((),****6....22222287@ABCDE97755522222.....****,4)((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!"""$$$%%%\'&&&&((()*****6...222222877FBDDGB@H777555222.....*****))((&&\'&%0%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!"""$$$%%%\'&&&&((()*****6...22.+I2255FBBDDB@9777522222.....*****))((&&\'&%0%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!"""$$$%%%\'&&&&((()*****6...22)JKI255FLBBDA:9777522222.....*****))((&&&&%0%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!"""$$$%%%\'&&&&((()*****6...22MNOK.28@AABBP97777522222.....*****))((&&&&%0%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'&&&&(()*,***......MQRSJ.87:>=F?77755522222.....****,4)((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'\'\'&&(()*,***6.....JTUUVW27777877775552222......****,))((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'\'\'\'&&(()*****6.....XKUUVX25555255555552222......****,)(((&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%1\'&&&&((()*****.....+)UUUK*555225555552222.....******4)(&&&&\'&%%%$$$$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%\'&&&&(((4*****+..6.JTUUUVT255.Y2ZZ5552222....+****,,4)(&&&&\'10%%$$-$!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%0&&&&%[3),*******&JV]UUUUV.5+JV[..2222..2...++****,)))(&&&&\'00%%$$-!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$%%%%&&&3VV^(_*****)[VVU]`UUUUX2(aUVW*.22.6)...6+******))((&&&&\'00%$$$$!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!$$$$%0%%&3bUUV&_*****&aUUUUUUUUUc.JUR]dWI6..*J*.6*+******))((&&&&\'00%$$$$"!',
    '!!!!!!!!!!!!!!!!!!!!$!!!!$$$$%%%%13eUUUK_,,**)3]U`UUUU`UU^fKUUUKKMg..JVX6**+*****))((&&&&\'&%%%$$$#"!',
    '$$!!""!!!!$$!!!!!!!!$"^^^$$$$$UUa$aOUUUUe)**,^U]U```]Uhiijd^UUUUUUT.WM]),)[f***,*)(((&&&klk%%%$$$#"!',
    '!!aa!eee!""!"!!!!#""emnop$$$$$UU`eaOUU`UU[&(4^UUUaUUUNqrsntuUUUUUUUJKTUK&KV3,,,*)((((&3Kv[%%%%$$###!',
    '!!`aaewUaaa"""""!""Uxyz{o$$$$$UU`a`UUU`UU^[&|^UUUeVU}h~¡¢{t£UUUUUUUK[TU[K[U¤(,,))(((&&M¥¦§T[%$$$##"!',
    '!!`aU¨©ªNN«aaa"""!u¬®¯°±{^$$$$eU`a`UUU^VUVVK¤USUeTTT²³´µ°¶t£UUUUUUR^^eUT^^UR[))()((&&&·¸¹®º»£$$$$#""',
    '!!`aN¼½¾©¼¼hUa"#"aj¿µÀÁ±Â¤"##$`U```U``$aUUUhx}UUeTÃÄÅÅÆ±Ç¶ÈTU`]VU]`aaUU`VVUÉÊgv[4&&&&dË¶ÁÁÌnÍe$$!!!"',
    '``U`¨¼Î½ÏÎ½ÐUaa"a`xÑÌ®ÒÓÔÕ`##eÖØØ``UUUea]UR©¾¨UUUVÙÚ±±±ÁÁ¶tuUUxÛ£u3aUUUØNUURÜÝÞ^3aVa[·s±ÁÁÁßÍ$$!!!$"',
    'UUU`¨¼ÎÎÎ½½ÏNU`a`Uxà±áÓ¯âãw``wUÏäN`UUR}NUUU©¾åUUUUæçÁ¢¢ÁÁèÈéTNÑÑê»§uUUØë½¾}]ì¿íhwURUØî±ÁÁÁïìðñ!!!!!e',
    'UUUU¨³ÎÎÎ½½Ï}UUa`Uxà±òóââôØ``UUÎ¼hURRR}NRRU©¾åUUUUæçÁ¢¢ÁÁèÈvTNõöìä»uUNjøù¾}]úàì»URRRûü±ÁÁÁýêþa!!""!e',
    'ûûUNmúÿÎÎÎÎÏ¨ªĀ¨RUxā±ÁÁÁ±ß}UUUUôúäU}RRªª}}}©¾¨UUU}iĂ¹ÌÁÁÁăÈvv¨ĄąĆ½ÏNNhćĈÎÎ¼SĉĊoċ¨UU¨ÿÁÁÁÁÁČ¬þ½hNV"$»',
    '©©}©čĎďÎÎÎÎÏ¨²¾¾xUxā±ÁÁÁ±Â}Āª³³ëomäĐå¨ªĐx©đÏ¾¨UU¨¼ĒēĉáÀÁÁáĔ§äĐĄĕĆÎÏ}UªÍĈĖ½Ïjîsė®ĘR}¼¶ÁÁÁÁï¬ęĖĚ½Ï©Na½',
    'úú¼ÏěĎċÎÎÎÎÏ¨ÏÏ¾ÐUxā±±ĜĜ±ĝĘúĞÅès¶Ğ³¾ªª©đ¼ċğÿ¾¨UN©Ï©iĠèÌÁÁáæä³½®ĕĆÎÏ}N½ě¯ìãĉċÌ±ÌÔÕRĒúĈÁÁÁÁz¼Ü¬ĊÿÎ¼¨aġ',
    'ĊĊÑÿČĎċÎ½ÎÎÏ}¼ÏÎ¾x¼ô±ĢóâÁģÕyĊµĢ±¹nùÎÐÐ©ĐÏĎĤõ½¼xªÎÿĥĦČÓ±ÁÁzä¼ÎħĨĩāÎÎªäãģ¯ôĎzèÁÁÁ±ċ©mĄ±ÁÁÁµĄ¼³¬ČÎÎÏ¨uo',
    'ÔÔĄÿ´ĎċÎ½ÎÎÏN©¼ÎÎÐÎĪµĢÓóÁïīn¶ÁÁÁsČúÎÐÐ©Đ½ÅÔĬ½½½¾ĆĭĮįs±ÁÁÁz¼³ÎħèİĪÎÎ½¬ĪÀ¯ĩİ±ÀıÁÁ¢ĕĲĪáÁÁÁÁÔāÏ³¬ĨÏÎÏ¨Ø{',
    'ĳĳĎĄĴĄãÎ½ÎÎ¾uu¨ÐċĄ®ò±ÀÓ¯Á±ĵn¶ÁÇzĎm©ÿđ¼©¾úÔĶķ½²½ĸĹµÓĺÁÁÁÁÁÓ³ÎÎħèÔ®ì³®èÓÁĻļóÁÁÁÁÁÁĈĺÓÀÁÁĈòôÎ¾ì¿Ĩ³ÎÏĒ½s',
    'ĎĎĲĤssòĎÿÎÎ½¼xxäôÓ¯ÀÁĽÔsÁÇô®¶¢ÇõÎäĒÿ½½½ĉz±±ķÎ¼³ĸÌÁóÒÁÁÁÁÁĈìm½ħèĶČìÿ¯ÀÁÁÁÁÁÁÁĻÁÁÁÁÁÁÁ±ľĺè¾ÐÎĄČsČĪÑúĳĻ',
    'òòôĤ¯ÀÌzãħÎÎÏ¼³¬èâÀÁÁĽÔsÁÇĎİáÁÁĬÑm²ĄoqãÅsÁ±Ŀã½ÿôÀÁÀâÁÁÁÁÁĈãm½ÿĺŀČĥêÀÁÁÁÁÁÁÁÁĢÁÁÁÁÁÁ±ĈĿĄĎä©Î®á±sòèĨò±',
    'ÌÌĪĄ¯ÁÁĈÑĲÎÎÎ¾ÿċĈÀ±ÁÁÁÔs±Ç®İĺÁ¢ĄĪÑ½ÂîëôrÁÁ±ĿĠúìĪÀÁÁÁÁÁÁÁÁĈãú½ÿĺŀİŁĵÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÀzłyĠjxÎĨòÁÁ±sĈÀÁ',
    '±±Ď®¯ÁÁÀĠãÎÿÿõŃïÁÁÁÁÁÁòÓâÇÔssĢÁÁÁsńĶľÒĩsÁıĽÒŅņôòÁÁĜŇÁÁÁÁÁâĬôĲĆÌÁµňŌÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ±ļō½³xÕ½ČòÁÁÁ±âÁÁ',
    '±±Ą®âÁÁâôÑõČ®òÌÁÁÁÁÁÁÁÒľâÇÀ±±±ĶÁÁâŎÁÁÁÌ±ÁıÁÌïĬĬïÁÁĜŇÁÁÁÁÁÁ¢ÓŏĆ±ÁÁÁŐÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ±ĨôÑĉÑħĨòÁÁÁÁÁÁÁ',
    '±±Ą®¯ÁÁsõĎĨs¯±ÁÁ±¯ĜÁÁÁ¯âĜÁÁÁÁ±ĶÁÁÁâÁÁÁ±ÁÁÁÁÁĶŏĩĶÁÁÀĜÁÁÁÁÁÁÁÀòő±ÁÁÁŐÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÌÓò¯ĤĆÅĈÁÁÁÁÁÁÁ',
    '±±ĄİâÁÁòöİs±±ÁÀsĺļĜÁÁÇ±±ÁÁÁÁÁÌÁÁÁÁÁÁÁÁÁÁÁÁÁÁ±ĿķÁÁÁÁÁÁÁÁÁÁÁÁÁÀŒ±ÁÁÁœÁÁÁÁÁÁÁÁÁÁÇÁÁıÁÁÁÁÁ±±ÁĺĬĈ±ÁÁÁÁÁÁ¯',
    '±±ĄĨâÁÇŔöèµÁÁÁsĴŏÒâÁÇĜÁÁÁÁÁÁÀâÁÁÁÁÁÁÁÁÁÁÁÁÇÁ±ŕŕÁÇÁÁÁÁÁÁÁÁÁÁÁÁÌÁÁÁÁœÁÁÁÁÁÁÁÁÁÇÇÇÁıÁÁÁÁÁÁÁÁÒķÌÁÁÁÁÁÁÁÓ',
    'ÁÁ®áÀÁÇĺ¶ĈÁÁÁÓĨŖĪ±ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁĶĶÁ±ÔÌ±ÁÁÁÁÁÁÁÇĜÁÁÁÁÁĿÁÁÁÁÁÁÁÁ¯±ÁÁÁ±ÁÁÁÁÁÁÁÁÁĶÁÁÁÁÁÁÁÁĩ',
    'ÁÁ¶Ó±ÁÁ¯¯âÁÁÁ±òŗĺÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁĢÁÁÇÇÁÁÁÁrŘĨáÁÁÁÁÁÇÁĜ¯µÁÁÁÁŎÁÁÁÁÁÁÁ±ÒáÓÓÓľ±ÁÁÁıÁÁÁÇÁÁÁÇÇÁÁÁÌĪ',
    'ÁÁzó±ÁÁĜâ±ÁÁÁ±¯èĈÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ±ÁÁÁÁÁÁÁ±üĪČÂÁÁÁÁÁÁÁĜ¯sâÁÁÁŎÁÁÁÁÁÁÁÁ¯òÓÓ¯Ó±ÁÁÁÁÌâ±ÇÁÁÁÇÇÁÁÁ±ŏ',
    'ÁÁ¯âĢÁÁÁÁÁÁÁÁÁÀâ±ÁÁÁÁÁÁÁÁÁÁÇÇÇÁÁÁÁÁÁÁÁÁÁÁââÀÁÁÁµüāĊÂÁÁÁÁÁÁÁĜ¯ĈÓÀ±ÁŎÁÁÁÁÁÁÁÁÁÔÓÓóÌÁÁÁÁÁòľ¯ÁÁÁÁĢÁÁÁÁÁĺ',
    'ÁÁââÁÁÁÁÁÇĜÁÁÁÁÁÁÁÁÁÁÁÁÁÁĜÁĜĜĜÇÁÁÁÁÁÁÁÁÁ±Ŏœz±ÁÁµrĭ®ÅÁÁÁÁÁÁÁÀ¯ĈÓÀ±ÁŎÁÁÁÁÁÁÁÁÇµřľŚÌÁÁÁÁ±ĨśzÁÁÁÁÁÁÁÁÁÁ±',
    'ÁÁĜÀÁÁÁÁÁÁÁÁÁÇÇıÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁĿŗ¶ÁÁÁÇÁss¯ÁıÁÁÁÁÇÁÁÁÁııÁÌÁÁâŜÁÁÁÁıÁ±±±ÁÁÁÁÁÁĈòÓÁÁÁÁÁÁÁÁÁÁÇ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁââÁÇÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁĜĜÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÇÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
    'ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ',
], {
    "0" : -491448,
    "1" : -491440,    "2" : -1005472,    "3" : -1015728,    "4" : -487336,    "5" : -1005464,    "6" : -1007528,    "7" : -1003416,    "8" : -1003424,    "9" : -1003408,    "!" : -1019832,    "\"" : -1019840,    "#" : -1017792,    "$" : -1017784,    "%" : -1015736,    "&" : -1013680,    "'" : -489392,    "(" : -1011632,    ")" : -1011624,    "*" : -1009576,    "+" : -1009568,
    "," : -485288,    "-" : -493496,    "." : -1007520,    "/" : -483232,    ":" : -1525640,    ";" : -1527704,    "<" : -1525624,    "=" : -1523568,    ">" : -1523576,    "?" : -1527696,    "@" : -1525632,    "A" : -2043728,    "B" : -2568008,    "C" : -3092288,    "D" : -2568000,    "E" : -1521504,    "F" : -2047856,    "G" : -2565952,    "H" : -1003400,    "I" : -1533864,
    "J" : -1537968,    "K" : -1540016,    "L" : -2043720,    "M" : -2064312,    "N" : -2594752,    "O" : -1546168,    "P" : -2045792,    "Q" : -2592704,    "R" : -2072512,    "S" : -2072520,    "T" : -2066360,    "U" : -2070464,    "V" : -2068416,    "W" : -1535912,    "X" : -1535920,    "Y" : -2062264,    "Z" : -1529760,    "[" : -1540024,    "]" : -2070472,    "^" : -1542072,
    "_" : -487344,    "`" : -1546176,    "a" : -1544128,    "b" : -1017776,    "c" : -1537976,    "d" : -1537960,    "e" : -1544120,    "f" : -485280,    "g" : -2062256,    "h" : -3119040,    "i" : -3645368,    "j" : -3119032,    "k" : -1013688,    "l" : -489400,    "m" : -6270920,    "n" : -9947096,    "o" : -9422808,    "p" : -7321560,    "q" : -8898520,    "r" : -12574688,
    "s" : -13623264,    "t" : -2590640,    "u" : -2068408,    "v" : -2064304,    "w" : -2070456,    "x" : -3645376,    "y" : -8896464,    "z" : -12048344,    "{" : -11522016,    "|" : -1013672,    "}" : -2596800,    "~" : -9949152,    "¡" : -13625320,    "¢" : -15198184,    "£" : -2592696,    "¤" : -1542064,    "¥" : -2590648,    "¦" : -5216184,    "§" : -3641272,    "¨" : -3121088,
    "©" : -4171712,    "ª" : -4171720,    "«" : -3121096,    "¬" : -5744576,    "®" : -10471376,    "¯" : -13623256,    "°" : -15722456,    "±" : -14673888,    "²" : -5220296,    "³" : -5220288,    "´" : -10999768,    "µ" : -14149600,    "¶" : -11522008,    "·" : -5742528,    "¸" : -6793152,    "¹" : -13096928,    "º" : -6793160,    "»" : -3643328,    "¼" : -4696000,    "½" : -5746632,
    "¾" : -5222344,    "¿" : -7319496,    "À" : -14671840,    "Á" : -15198176,    "Â" : -12048352,    "Ã" : -2064296,    "Ä" : -2062240,    "Å" : -11524056,    "Æ" : -13625312,    "Ç" : -15198168,    "È" : -2588592,    "É" : -1548216,    "Ê" : -3116984,    "Ë" : -9945040,    "Ì" : -14147552,    "Í" : -8370128,    "Î" : -5746624,    "Ï" : -5222336,    "Ð" : -4696008,    "Ñ" : -7845832,
    "Ò" : -12570576,    "Ó" : -13096920,    "Ô" : -13098976,    "Õ" : -4169656,    "Ö" : -1546184,    "Ø" : -2594744,    "Ù" : -2588584,    "Ú" : -3110808,    "Û" : -3116976,    "Ü" : -4693952,    "Ý" : -4691896,    "Þ" : -4165560,    "ß" : -10471384,    "à" : -7845840,    "á" : -12046296,    "â" : -14147544,    "ã" : -7321544,    "ä" : -4169664,    "å" : -3123136,    "æ" : -3643320,
    "ç" : -4691888,    "è" : -11522000,    "é" : -2066352,    "ê" : -6268864,    "ë" : -10999776,    "ì" : -6795208,    "í" : -6268872,    "î" : -11524064,    "ï" : -14149608,    "ð" : -4693944,    "ñ" : -1542080,    "ò" : -12572632,    "ó" : -13621208,    "ô" : -8372168,    "õ" : -8370120,    "ö" : -8894408,    "ø" : -12574696,    "ù" : -6272968,    "ú" : -6797256,    "û" : -2596792,
    "ü" : -12050400,    "ý" : -14147560,    "þ" : -4167608,    "ÿ" : -6270912,    "Ā" : -3647432,    "ā" : -7847880,    "Ă" : -4169648,    "ă" : -11519952,    "Ą" : -9947088,    "ą" : -8894400,    "Ć" : -7321536,    "ć" : -4167600,    "Ĉ" : -13098968,    "ĉ" : -8898512,    "Ċ" : -10473432,    "ċ" : -6795200,    "Č" : -10997720,    "č" : -10473440,    "Ď" : -9422800,    "ď" : -6795192,
    "Đ" : -4698056,    "đ" : -4698048,    "Ē" : -3647424,    "ē" : -3123128,    "Ĕ" : -3114928,    "ĕ" : -8896448,    "Ė" : -5744584,    "ė" : -12574680,    "Ę" : -3121080,    "ę" : -5218240,    "Ě" : -9949144,    "ě" : -10997728,    "Ĝ" : -14671832,    "ĝ" : -13098984,    "Ğ" : -7847888,    "ğ" : -7319488,    "Ġ" : -8372176,    "ġ" : -6797264,    "Ģ" : -14673880,    "ģ" : -13623272,
    "Ĥ" : -10473424,    "ĥ" : -5744568,    "Ħ" : -5218232,    "ħ" : -6272960,    "Ĩ" : -10997712,    "ĩ" : -9945032,    "Ī" : -8896456,    "ī" : -5220280,    "Ĭ" : -9420744,    "ĭ" : -7845824,    "Į" : -7317432,    "į" : -6791088,    "İ" : -10995664,    "ı" : -15722464,    "Ĳ" : -6797248,    "ĳ" : -9420752,    "Ĵ" : -12572640,    "ĵ" : -6268856,    "Ķ" : -14673896,    "ķ" : -10471368,
    "ĸ" : -7323600,    "Ĺ" : -13101032,    "ĺ" : -12046288,    "Ļ" : -14149592,    "ļ" : -13096912,    "Ľ" : -15196128,    "ľ" : -12572624,    "Ŀ" : -10995656,    "ŀ" : -14675944,    "Ł" : -5742512,    "ł" : -9420736,    "Ń" : -10995672,    "ń" : -9942984,    "Ņ" : -12574704,    "ņ" : -8374224,    "Ň" : -14145488,    "ň" : -13101024,    "Ō" : -7317424,    "ō" : -11526120,    "Ŏ" : -11519944,
    "ŏ" : -9947080,    "Ő" : -10469312,    "ő" : -9418688,    "Œ" : -12570584,    "œ" : -10993600,    "Ŕ" : -12048336,    "ŕ" : -11521992,    "Ŗ" : -8374216,    "ŗ" : -9945024,    "Ř" : -9422792,    "ř" : -13098960,    "Ś" : -12046280,    "ś" : -10473416,    "Ŝ" : -13094856,
}, 6);
			return get(0, 0, 600, 400);
		},
		forest: function(){
			background(0, 0);
			pushMatrix();
			translate(0, -14)
			Display.pixelArt([
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"#$$$$$$$$$$$%&&&&&&&&&&&&\'$$$$#(!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!(!!!!)"*+)#$$$,!!-$$$$$$$$$$$$$.\'&&&&&&&&&&&&%$$$$$$!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!/(+/$,(*-$$$$$$$$$$##$$$$$$$$$$$$$0\'&&&&&&&&&&&&&1$$$$$$*!!!!!!!!!!)#$2(!!!!',
    '!!!!!!!!!!$$$$$$$$$$$$$$$$$$3\'.$$$$$$$$$$04\'&&&&&&&&&&&&&&&4$$$$$$"*"*!!!*#-*$$$$$-!!!',
    '!!!!!!!!!*$$$$$$$$$$%50..36\'&&&7$$$$$$$$8\'&&&&&&&&&&&&&&&&&\'$$$$$$$$$$9:*$$$$$$$$$#!!!',
    '!!!!!!!*"#$$$$$$$$$;&&&&&&&&&&&&%60$$$83\'&&&&&&&&&&&&&&&&&&&3$$$$$$$$$#<=$$$$$$$$2>!!!',
    '!!!!!!)$$$$$$$$$$$1&&&&&&&&&&&&&&&&&??&&&@A&&&&&&&&&&&&&&&&&\'.$$$$$$$$BCD/$$$$$$2!!)!!',
    '*!!!*2$$$$$$#$$$$$\'&&&&&&&&&&&&&&&&&&&&&AEF&&&&&&&&&&&&&&&&&&\'G8$$$$$$HCCI#$$$$$$/"J-"',
    '$$$$$$$$$$$$KL$$84&&&&&&&&&&&&&&&&&&&&&&MCDN&&&&&&&&&&&&&&&&&&&&%$$$$OCCCCP$$$$$$$$$$$',
    '\'6$$$$$$$$$QRCS%&&&&&&&&&&T&&&&&&&&&&&&&UCCVA&&&&&&&&&&&&&&&&&&&&4$$$WXCCCY-$$$.\'13%.$',
    '&&&%;333Z\'&TCCEA&&&&&&&&&[D]&&&&&&&&&&&^_CCC`&&&&&&&&&&&&&&&&&&&&&&&abcCCCCd$$$4&&&&.$',
    '&&&&&&&&&&AR_CCF&&&&&&&&&eCDA&&&&&&&&&&fbCCCD^&&&%4\'&&&&&&&&&&&&&&&gcbhCCCCCi8%&&&&&0$',
    '&&&&&&&&&&TcCCCDj&&&&&&&^DCCk&&&&&&&&&lbhCCCCmA4$$$$.%&&&&&&&&&&&&jCbbhCCn_CD&&&&&&&4$',
    '&&&&&&&&&AhbCCCCU&&&&&&&kcCCCA&&&&&&&oXbhCCCCCp$$$$$$.&&&&&&&&&&&&Aqhbbbb_CCm&&&&&&&&1',
    '&&&&&&&&jrbXCCCCCs&&&&AsbhCCCRA&&&&&MCbbhC_hCCD$$$$$$$Q&&&&&&&&&&&&&tbbbuCqv&&&&&&&&&&',
    '&&&&&&&^wbbXCCuuCwx&&&yubhCh_CT&&&&&Amnbbbb_CCz$$$$$$$5&&&&&&&&&&&A{bbcCCCC|A&&&&&&&&&',
    '&&&&&&&AUnbbcbhCCEA&&&A`cbbuCoA&&&&&&A}bbXCCfj\'$$$$$$$G&&&&&&&&&&^tbbbuCCCCC~A&&&&&&&&',
    '&&&&&&&&A¡bbbnCw¢A&&&&x£b¤_CRM&&&&&&x¥bbhCCCCFA0$$$$$$$¦§&&&&&&&¨VbbbbCCCCCCCV@&&&&&&&',
    '&&&&&&&&©ªbbuCCC`&&&&^«bbuCCCCo&&&&N}bbbCCCCCCq¬$$$$$$#®d$\'&&&&¨RbbbbbCCCCCCCCDv&&&&&&',
    '&&&&&&&¯bbbnCCCCCUA&A}bbbCCCCCC°A&±²bbbbCCCCCCCD³$$$$$iCC´8&&&&µhbbbbbnCCCCCC_CR&&&&¶©',
    '&&µ@&Ambbbb_CCCCCCCjCbbbbnCCCC_C·jCbbbbbCCCCCCCCC¸#-#$¹_CC$Q&&&gubbbbbbbbbbbbbCº&&&&»C',
    '&^w»A¡XbbbbCCCCCCCCC°cbbbbbbbbXD¼µhbbbbbh_CC__uuCY!!½¾XCCC¿7&&&&FnbbbbbbbbbbXCmx&&&@CC',
    '&`CCUubbbbbhCCCCCC_CCubbbbbbbÀCÁ&¶Dbbbbbbbbbbbb¤C<!½¾¤¤CCCCÂ&&&xwÀbbbbbbbbbnCC·&&&&ÃuC',
    'AuCCCubbbbbbbX¤bbbbCCXbbbbbcuCCw±&ÄnbbbbbbbbbbcCÅÆ!ÇDbbuh_CÈ&&&snbbbbbbbXuCCCCC`&&@c_C',
    'tbCCCVubbbbbbbbbbbuDnbbbbbCCCCCCEjDXbbbbbbbbXuCCÉ½!!ÊËbbuCÌ#4&AVbbbbbbb_CCCCCCCwMjÍbCC',
    'b¤CC_Cnbbbbbbbbbc_CDbbbbbXCCCCCCCVhbbbbbbbcuCCCCCÎ!ÏÐbb_CCz$.&`cbbbbbbbCCCCCCCCCRÑbbCC',
    'bbhXCChbbbbbbbh_CCCCnbbbbhCCCCCC__bbbbbbbCCCCCCCCCÒDbbhCCCCÓÌÔVbbbbbbbcCCCCCCCCCCCbbhX',
    'bbXCCcbbbbbbuCCCCCCCCcbbbÀCCCuÀbhcbbbbbbbCCCCCCCCC_bbbnCCCCCCÕnbbbbbbbhCCCCCCCCC_Chbbn',
    'bXCCC_bbbbbbCCCCCCCCCCbbbbbbbbbhubbbbbbbcCCCCCCCCCbbbbX_C_uuuChbbbbbbbcCCCCCuhbb_hbbuC',
    'bhCCCCCcbbbbCCCCCCCCCCCnhXXÀnCYÕnbbbbbbbhCCCCCCCC_ubbbbbbbbbCYubbbbbbbbhucbbbbbnnbbcCC',
    'bhCCCCCChbbbCCCCCCCCC_CÖØÙÙÙÚÛÛÕnbbbbbbbcCCCCCncbbCbbbbbbbcCwÛÜCcbbbbbbbbbbbbc_nbbbhCC',
    'bbhnhhcuCbbbCCCCC_ncbnCÕÝÙÙÙÚÛÛÒ_bbbbbbbbchÀbbbbbuÀbbbbbhCCCCYÚÛÒÕYCuhhhhhuDYÕCbbbbcCC',
    'bbbbbbÀ_XbbbhunÀbbbbcCÞÚßÙÙàÚÛÛÛÒwhXbbbbbbbbbbXnCubbbbb_CCCCCCÕÛÛÛÛÛÚÙáââÙÚÛÛÒ_bbbbbXã',
    'bbbbXnC_bbbbbbbbbb¤uCÕÛÛÚääÚÛÛÛÛÛÛÒÜåDCæææææDYÕÖÕbbbbbbCCCCCCCCÒÛÛÛÛÚÙÙÙÙÙÚÛÛÛÜhbbbbbb',
    'bbcuCCCC_nhccchnuDåÖÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚÙÙÙÙÙÚÛÛÛCbbbbbªCCCCCCu_YÛÛÛÛçÙÙÙÙÙÚÛÛÛYhbbbbbb',
    'bbCCCCCCCYâââââÒÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚÙÙÙÙÙÚÛÛÛCbbbbbb_CunXbXCÖÛÛÛÛÚâÙÙÙèÚÛÛÒubbbbbb¤',
    'bbCCCCCCCCâÙÙÙÙçÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚÙÙÙÙÙÚÛÛÛÒubbbbbbbbbbhCÒÛÛÛÛÛÛÚßØçÛÛÛÛYbbbbbbuC',
    'bbCCCCCuc_éÙÙÙÙçÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚàÙÙÙèÚÛÛÛÛÚÒÕYuæææ_YÕÒÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛnbbbbbb_C',
    'bbuunbbbcCàÙÙÙÙêÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛëßÚÛÛÛÛÛÛÛÛÛÛäÙÙÙçÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛìbbbbbbbCC',
    'bbbbbbÀ_YÚÚÝèëÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛäÙÙÙêÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛCbbbbbbbCC',
    'íîîîïÕÒÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛêàÙàçÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛwbbbbbbbh_',
    'ßÙÙÙðÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚÚÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÒDÀbbbbbbb',
    'ØÙÙÙñÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÒÕY²uæææ',
    'ÚâÙÝÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛäÙÙÙ',
    'ÛÚÚÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛòÙÙÙ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛñÙÙÙ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÚÝÙè',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ',
    'óóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóóó',
], {
    "0" : -2033432,
    "1" : -4132624,    "2" : -1513264,    "3" : -2557720,    "4" : -4656904,    "5" : -3084056,    "6" : -3608336,    "7" : -2559768,    "8" : -1509152,    "9" : -1513256,    "!" : -3092304,    "\"" : -2039608,    "#" : -986912,    "$" : -984864,    "%" : -5181192,    "&" : -6229761,    "'" : -5705480,    "(" : -2568008,    ")" : -2565960,    "*" : -2565952,    "+" : -3092296,
    "," : -2039600,    "-" : -1511208,    "." : -1509144,    "/" : -2037552,    ":" : -4142944,    ";" : -3082000,    "<" : -12025808,    "=" : -6768512,    ">" : -2563904,    "?" : -5705473,    "@" : -7282472,    "A" : -6229768,    "B" : -3088192,    "C" : -14129144,    "D" : -14129136,    "E" : -13600736,    "F" : -10442632,    "G" : -3084048,    "H" : -9922472,    "I" : -12025816,
    "J" : -1511200,    "K" : -7819144,    "L" : -9398184,    "M" : -7808816,    "N" : -6758176,    "O" : -2561848,    "P" : -6242160,    "Q" : -4656912,    "R" : -13602792,    "S" : -6762304,    "T" : -8337224,    "U" : -12548032,    "V" : -13602784,    "W" : -10448824,    "X" : -15708160,    "Y" : -13602800,    "Z" : -3606288,    "[" : -6231824,    "]" : -7284528,    "^" : -6756112,
    "_" : -14653432,    "`" : -9389928,    "a" : -7810872,    "b" : -16232448,    "c" : -15706104,    "d" : -9924528,    "e" : -10444688,    "f" : -12550088,    "g" : -8335176,    "h" : -15181816,    "i" : -5191520,    "j" : -7282464,    "k" : -10968976,    "l" : -8861520,    "m" : -12023736,    "n" : -15179768,    "o" : -9916280,    "p" : -8863584,    "q" : -13076440,    "r" : -14127072,
    "s" : -9916272,    "t" : -13602776,    "u" : -14655480,    "v" : -8335168,    "w" : -14127088,    "x" : -6229776,    "y" : -7810880,    "z" : -9396128,    "{" : -13074376,    "|" : -9387872,    "}" : -14653416,    "~" : -12021688,    "¡" : -11497384,    "¢" : -9914224,    "£" : -13076424,    "¤" : -15708152,    "¥" : -14127064,    "¦" : -7292800,    "§" : -3608352,    "¨" : -6756120,
    "©" : -10440576,    "ª" : -16232440,    "«" : -14129120,    "¬" : -3084064,    "®" : -13078504,    "¯" : -10971032,    "°" : -12021680,    "±" : -7284520,    "²" : -14653424,    "³" : -3614536,    "´" : -3612480,    "µ" : -11495336,    "¶" : -7808824,    "·" : -11495328,    "¸" : -5717864,    "¹" : -13076448,    "º" : -13076432,    "»" : -13074384,    "¼" : -8863576,    "½" : -3094352,
    "¾" : -7823256,    "¿" : -8345496,    "À" : -15706112,    "Á" : -10442624,    "Â" : -6233896,    "Ã" : -12021672,    "Ä" : -10968984,    "Å" : -9924536,    "Æ" : -3094360,    "Ç" : -4144992,    "È" : -11497400,    "É" : -11501520,    "Ê" : -4669288,    "Ë" : -14655472,    "Ì" : -7819152,    "Í" : -14653408,    "Î" : -8873896,    "Ï" : -3618648,    "Ð" : -12027856,    "Ñ" : -14127080,
    "Ò" : -12550112,    "Ó" : -12552152,    "Ô" : -8339304,    "Õ" : -13076456,    "Ö" : -12550120,    "Ø" : -11513832,    "Ù" : -10997736,    "Ú" : -12025824,    "Û" : -12023776,    "Ü" : -12552168,    "Ý" : -11515880,    "Þ" : -13600752,    "ß" : -11511784,    "à" : -10995688,    "á" : -11522024,    "â" : -11519976,    "ã" : -15181824,    "ä" : -12031968,    "å" : -13076464,    "æ" : -14657528,
    "ç" : -12027872,    "è" : -11517928,    "é" : -13084656,    "ê" : -12029920,    "ë" : -12034024,    "ì" : -13078512,    "í" : -13082608,    "î" : -13086704,    "ï" : -13080560,    "ð" : -12034016,    "ñ" : -11509736,    "ò" : -11509728,    "ó" : -12023768,
}, 7);
			popMatrix();
			return get(0, 0, 600, 270);
		},
		cabin_interior: function(){
			background(0, 0);
			Display.pixelArt([
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!"""!"""""""""""""""""""""!"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""!""""""""""""""""""""""""""""""""!""!!!!!!!!!!!!',
    '!!!!!!!!!!!!#$%&%%\'\'\'\'\'\'\'%\'\'\'\'\'(%&\'\'\'\'%((%&\'\'\'\'\'\'&&\'\'\'\'\'&&\'\'\'\'\'\'%)\'\'\'&\'\'\'\'\'\'\'\'\'&&%)\'\'\'%&%&\'\'\'\'\'\'\'\'\')&%%(\'\'\'\'\'\'%\'\'\'\'\'(\'\'\'&\')&%%(\'\'\'\'\'\'&&%%%*+!!!!!!!!!!',
    '!!!!!!!!!!",%&\'\'\'(\'\'\'\'\'\'\'\'\'\'\'\'\'\'((\'\'\'\'(\'\'&\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'&\'\'\'\'(\'%&\'\'\'\'\'\'\'-.\'\'(&\'\'\'\'\'\'\'(\'\'\'\'\'\'\'\'\'\'\'\'\'((\'\'\'\'\'\'\'\'\'(\'(&*+!!!!!!!!!',
    '!!!!!!!!!!/0(-1(%0%&(&%&%0(((22200%%%00%%$%%&%(\'(%%&(\'((00%((\'((0%(((%((%%%%\'\'(%%$%&\'&0%00(((\'(((\'((%0%(%&&((20%(\'\'\'(&((%&\'(%0%&(((((%00\'--%3"!!!!!!!!',
    '!!!!!!!!!#$\'45--5556666575789:;<=:=9>>?0\'-47555555711555556@@66665-7555575555-55557(75556@6@5555665557457775@5555\'%(\'&(55555555775555555(75-&A"!!!!!!!',
    '!!!!!!!!#%\'7661B6C6CDCCCCC5E>FFFGGFFHGI%-75666CCCC65J6KKDKLLLKKKCCCKKKLLKKKKCM666CM5NCCCCCDKKKKKKKKKKKKKOKKDDCDKK6-44476DCCDDDDDKKKCCCCK(-55-&*"!!!!!!',
    '!!!!!!!+*&-4713-5P555557-418>FQGRRQFQFS0(14555555571(-77P55P55P6PP-56665P6P54\'-5577145PP555P5776655555-75565556C612\'-\'(-5755755555555555T044-\'%U"!!!!!',
    '!!!!!!/$&56C733*0&%*3**33**VWRXYZ[RRRR9]]3*TT***000***3*%0******%03%%$TT*********T*333%&***TT***0T*3*0*3*****T(&0*3*3]3**333*TTTT***0%033306P7\'%U"!!!!',
    '!!!!!+0(4PC50****%0**%0**00^_R`[RXQQX[I]33$000%%%%%%%%T0&%*0000$0$$0%*0000%0%00*%%T3**000%%%%%%0000**0$3*000000%%%*3*3*00*3000000000T00***31657\'%U!!!!',
    '!!!!+U0\'-123]333**3*0(&*3**^abbYcbdZZYe]]33**$00000000*0(&3**T*$******00000000T*&&03****T0000T0*TT*30%03********%&%*33*&&T3TT00T0TT******333T\'\'\'%3/!!!',
    '!!!+*&-5K6T3*$000000%\'(0*00fgZZ[RYY[[Z933*T0%%%%%%%%%%0%\'(*0%%&&(&&&%%%&%%%%%%%0&(030%%%%&&&%%%%%%%T%&%T%%&%%%00T%(%3*0\'\'0*00%%%%%%%%%%0%00T*-P55($#!!',
    '!!"3%-557T]3*000%%000-\'0*00fgZXYYZZYYZ9]3*00%%%%%%%%%%$%.\'*T0%%Eh2&(%%&((((%%%%0\'\'%30%0%%%8i(\'\'(((Ej0%175P55\'000T*%03*%--0*00(%%&%&((%%0%%00*T-754&*+!',
    '!"U*\'45-333*T0%%2%2%0--00%%8kYXYlYZYdY9]3*00%%%%%%%%%%0%\'(*00%0mnop2(((%0(((((2%\'\'%30%0%28qrsP5t5stnf0(\'\'44s&**0000000%4-%*0%((((((((((((2%00*3%44-0A+',
    '"A%\'457T3**0%(\'\'1\'\'((7-%%(\'EuZcR[aXRXXv3*0%(5CP6CP4PC6666-$0%&(wxy2\'\'1-1(1-1-1\'%\'(0*%&(z{|}~¡¡r¢£¡~¤¥¦(-5CPP(02((%%&(%(4420(\'\'\'\'------1-1\'\'\'&%0T1574(*',
    'A$(47@*33*$%%&(\'\'\'(((7-2%((h§bYYbYd[YYe3*0%(-7-557-447555\'**%%y¨©ª82\'\'\'((1\'(L\'p«¬®¯°¯¯«}±²³´µ¶·v¸¥¥eS¹T&--\'\'%-6CC-0%&%(4420(\'1\'\'\'1\'11\'\'\'\'1\'((%0*3177-%',
    '$*%11T3333**0000%0%027-20%%pºYXRZ[YRXXv]33*0(-%.P-%&54\'\'4\'333*2»¼\'½300%%0%%0P´¾¿¿¿¿¿ÀÁÂÃÄ|¤~ssÅ³ÆssÇµ30\'PC55\'&44s(3*0*%44%*0%%%%%%%%%%%%%%0000**T0(((0',
    '\'%-CD%74T%0%&(\'\'4\'\'((4-2%\'\'EuZRZ[[RR[Xv33$%%-P)4O5\'.C5.4C.3*00(È64&*%(\'\'\'\'1%6ÉÊÊÊËËËÊÌÌ`ÄÍsÎÎPPssss5\'*%\'5C4C\'&PÏ5\'*0%%&4-20(\'\'\'\'1---1111\'\'((\'(0.P4D661',
    '&07CÈ&-4-P*$%%%\'L\'((%-1%%((8a[[YY[[XZ[=33*00\'5\'.Ï5&.67.4P.3300(6@-%*0%((((&05vÐÑÑÑÑÑÑÒÓ_ÔÕÖØsÎÎsss4ÙÚ*0\'5sPC\'&4Û5\'3*00%--%0%%&((\'\'\'\'\'\'\'(((%%%%T\'54KC6\'',
    '%*7CÜ%-41533***2C%00%1\'00%%fÝÞÞWÃÞÞ_ÃgßàTTT04645PP44PP5564$**T01-\'0TT022%%0páâããäåæãã|ç||èé\'44ssss¡ÕeV0-4555((755\'3T00%\'\'0T00%%%%%%%2(2%000T00*-4-KC6(',
    '%*7CÜ1CKK77@6676K66CCK66DDCDê»êêëêêìíîêDD@6CKKKCKKLLKKKCLDCDDKDKKKDD6KK6DDKKëêïíïíðñëëëëñ»êDDLKDKLLê»66CKKKKD6KKDDDKKCKKKCDKDC6DDKKDDDKKDD@6CD6CK6ÈD6(',
    '(05CÜ1CLL77KKK@KÈDLLLLKDKLÜÈÈÜÜÈÈLLLÜÈÈLKDDLLLL6KÈÈÈÈÈLCKKLÈLÈLLÜÜÈKKÜÈÈÜÜÜÜKCÈLÜÈÜKKKLLKKÈÈòÈÈÈÈLLKKLKKLLÈLÈDLKDKLÈLKKLKDLLLLCKLÈÈLLÈÜÜLLKDCKKKK6ÈKC(',
    '(05DÈ300-0*00007\'0%2((%0%0%2((((22(2((2ó022((((2(((((((222((((((((((((((((((2%2((((((((((((((((((((((((((((((2(0T2(22((((2((222((((((((22%220%%%%%LÈC\'',
    '(0@KÜ$\'-C((444464\'4554zz¡ôõ75556PP65755Jq555666P55PP66P66P6666666665666666665-N55P6666PPPP5PP66666C666P66666P55õÚ¡5566PPP66PP655555PPP5554N@14755-ÜÜC-',
    '%$5KÜ*2(6\'5556@C\'\'---4-(-1\'-¡ö¡¡özöÖÖöÖ((---ø-11---7ø---7-ø477777-777-777777øùø44--ø----7-47--7777ø77--7ø-1774-ù011----741------------11-\'ù1(--1((ÈÈC-',
    '(07DÜ,3%6*03**2C*%%*T((T*%\'8e=9=úû=9ú9ü]%\'(*****TT%\'(*302%000000000000ø-2000-&0((000T00000((T%7-0T01(TTTTT0\'-(3T*TTTT*(4-0333TT%\'(0TT**0%%*330\'(T*KK61',
    '(05CÜU*(P0((((163(-(0--%(4-pýþÿFĀFFāĂ>ú]0%%*00%%%%%((00(-\'%(((\'\'\'\'\'\'((--((\'(-(((((((((((((--%%-\'(((-\'((((((\'\'(0%&(((&%(\'(000%%%%\'(0%%%%%%%000T(4\'%LÈD1',
    '(07CÜ*%15-7755560014\'77-742pÞăĂĄĄFĄ:ą¢v33**0%&(\'\'\'\'((((\'7-%-ùùĆ1------\'\'\'\'---1-1Ćùć-1--11\'75(\'1\'1----------\'((\'\'\'111\'\'\'(%2(\'(((\'(((\'\'\'(((((((%0(--ÜÜD\'',
    '%$5DÜ**7-*3*00--000-7554700pÞĈwmĂ=ĉ³Ċċú3***0%%((((((((%\'570øČččć1-----.\'.\'---\'\'(ĎďĐ-(\'ù(1(55((\'(\'\'\'1\'\'1\'\'\'\'\'(((((((\'\'((((((((2(((((((((((((22%0*2-ÜÜD\'',
    '(07DÜ]*6\'%*00%5\'%%^8455-2%(8đéĒēĔĕôĖėeI3*00%(((((\'\'(\'\'215722ĘęęĚěěĜĝqĜĜĜĜĜĞĞěÿÿğĠġĢ2(\'j81(55((\'\'11\'(\'11-1(1--111\'1111\'\'\'\'111111\'((\'\'\'\'\'\'(((&%%0T*(ÜLD(',
    '\'%7KÜ]TD\'5555-D(\'(^p(55(21-haģE-P5ø%jQĤ¦*0%\'111-1111-1(155\'ùĥĦħĨĩĪĪīĬĭĪĪĪĪĮįĪĪĪİıħĲ2-7ĳ8--@61-7ø--11---øø--ø-øø77777777øø777ø---1----11111\'((2%%*(ÜLK1',
    '(%5LÈU0K%(%(11K\'(\'p8\'57((11haº¤.OK-ĴµÃĄ3*0%\'11\'ĵĶķøĳ)ĸ&\'57\'ùĐııĹĭĺĻļĽĪľľľľĿŀŁŁłŃńŅĲć7øpĔø-@61-ø7øø777øøø-1--111111-1111111\'11---\'1hzĆņŇĆ1-ňŌōŎ000(ÜÈK\'',
    '(07CÜ]0K$0*0%-C(%(j8(57(%((8ºRŏ8KL\'¹=RŏŐ3*0%22%ùĵőôÿŒœŔ)77(óĐıŕŖŗŘřļŚľĻĻľśŜŝŞşŠšŕıĦó1(´Ţ(\'661(ķţŤťťťťŦŦŧø%\'\'--------1------z(21\'(´ŨğũŪūŬó1ŭŮůŰT*T(ÈLD(',
    '(07CÈ3(C&\'%(\'5C(\'(ű8-57((1\'¶XcÞŲLO(ű:R_ų*0%(((2ĆĵŴôŵŶŷŸĸ75(ćĐŹźŻżŽžƀƁŁƂƃƄƅƆƇŠƈƉƊƋıı2-ƌe?p-66(1ƍŦŦťŦŦŦŦťţ7111N755P6666655555Bz%1--ċƎƏƐčĘƑƒ(ƓƔŬƕT00\'ÜLD-',
    '\'04KL]15(-1-4CC\'\'jvĕ-55((1zƖXRÞƗs-%Ƙ>QÃßT0%(((%ĵĵ@yƙƚƛƜĸ75\'ùĎŹźƝƞƟƠơƢƄƣƤşŠƥƦƧƨƩƪƫııùøƬƌƭp-661-ƍƮţƯťťťưťƱø1-(71(%%((((((%%2(--21--ƲƳƴƵ)ƶ*T(čƷƷŬà00\'ÜÜK1',
    '(07KÈ]1-3$30(C6(E¥·´8@5((\'ÚºYY[ƸŲ&f=R[[_ű0%((ćƹù1@ôƺŶƻƼ.75\'ćĐŹźƽƾƿǀơǁǂǃǍǎŞǏƦǐǑǒǓǔıǕù-oǖǗô7C61-ƍƮţƯŦťţţťƱø1-1C1&\'\'.\'\'-\'\'\'\'\'(P421--ǘǙǘǚŷǛǜT(ǝŪūǞ*00\'ÜÜK1',
    '%*5KÜU-\'(\'2(-Cø02ĳöj855(0%¢Z[XRQ¥½ǟeĤĄĤý?3T00ǠǡǢ56@@5PP775%óĐŹŕǣǤǥǦŎǧǨǩǪǫǨǬǭǮǯǰǱƫıǕó(jǲǳh1CC((ķƮťţţǴţťŦţù%((6-E\'\'----...\'Úh67%%((ǵċĉEǶǷ%(\'-7-1%0*\'ÜÈK1',
    '\'%5KÈ]7(45557C-((ǵǸė855(2Ĕu§acRRWŏ·ėnnĞǵǟV0%%ǹŇó00%22(%(75(ćĐıŕǺǻǼǽǾǿȀȁȂȃƇȄȅƇȆȇȈźıı21ĕăȉp-CC(1ƍƮťǴƯţŦţţţ1\'1\'6zǟ¥ƭÚÚ¶¶µ¥¥¥ß¶672(1-777447777777--(*\'ÜÈD1',
    '\'%5KÜU43$%0(\'C(\'1¶Ȋǵ855(ȋčȌȍkRRR[HéȎȏŭȐȑ¸ű0%%ȋƹT00%%0%0(75\'ùĎıŕȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢźııù7h¶ȣh-661-ȤťťťŦŦŦŦţƯø--15\'f8f8½88888½p867(--(0%TT*****T**0***\'ÜÈK1',
    '(05ÈÜU7*%%*%-C0\'1ĕ´?857(2ĶĳÕÕHRR[RéȥȦȧȨȩeßT0%ćƹď2(ǹćùȪ2\'75\'2ĎıźȫƿƿȬȭȮȯȰȚȱȲȳȴȵȶƋȷƋıŹù--1-ø-66\'1¼ķƍƍƍƍƍƍǴȤø1-161\'4.44444444.\'67(---(%0%%%%%%%%0%T00\'ÜÈL-',
    '%T4DÈ*6(1-11-60((88p(572f~Eȸă>RHRR¢ǢǡȹŇȋI=V*00ȺĎȺóȻƺȼȽ8\'772óĐıźƫȾȾȿɀɁɂɃɄɅɆɇȁɈɉƫɊŕıŹó\'\'\'11166(((\'(((((((ù((\'\'6-.4454454s44-\'67%((\'(%%((((((((2%%%0(ÈLK\'',
    '&0-DÜT7\'754-5P(\'1-11\'57-t55»»JɋɋɋɋNP555-õėz00ȋŇɌ¼yňɍȽɎĝ177(2ĐıźɏȔƿșͰͱͲͳȔɅʹͶͷͺȫƫǔƋıŹ2-----166\'1-ø---1-1ćù111\'P-.4454s55544-\'672\'(1-11111111111\'\'%0\'ÈKK\'',
    '\'%7LÜ0-0%%0(6-(\'---117-7N5666666CCC666@N¡t¡00ȋǹø7ĔȸăǘͻÚ\'75\'ćĐıźɏȾͼͽͿΆΈȔɄΉΊΌΎΏƫǱΐźıı2--77ø-661-ø@557-P¼ūΑ-\'-15-.4454s55544-.67(1\'----ø---------1(%\'ÜÈK1',
    '(%7LÈ%-%&(0(C(%(((((17-888((8EEEEEhzhE2\'(8p*T(1-1----77775(2ΒıΓΔƿΕΖΗΘɉȔɄȡΙΚǰΐΛΐΜźııó\'\'\'1115@((11ù\'2j(ȋŅġT2((@1.4-s45P5544.\'672((\'\'1111\'\'\'\'\'\'\'((%%\'ÜÜK1',
    '%07LÜ(4566P5K%%222(((7-¶_³-h9ŏĄĄĄýĄŏŏ9¥-8ŏŏų3T%000000(%(75(óĐıŕǡȤţƯķȤΝΝΞΞΟΠΡΣΤΥΦǔŅŅƒ\'\'\'1((55((ĆǹŇć282ΧŅęΨ(\'(6-.4454555544.\'67%((((((\'\'(((((((((%0(ÈÈD1',
    '&07LÜ\'\'\'--\'-C%(2ù--\'17-ΩYu¡iQRZXXaR[[G·¡ΪcRΫ00%0%%%(2%0(55\'ćĐıŹȹķòÈÈÈÈÈÈÈKòƍΜάέŹΓŅĦή---ø-155(1ŇŪǝŬǹ-1ίĦęΰ\'-1@-Ųi-5455ss44-.5421---------------1(0\'ÜÈK1',
    '&04KÈ(&&&(016%%8ƭ\'\'((7-ΪaX··XαŵĂΫΫΫċÝαÃĤ_cQű$%%(\'\'1147(\'75(ćĥĎčņ¼66ķķ666@ɋɋβγδŇǝĲĘġή-ø62-155(1ù220ù-1ūıΒƑ(1\'P-i9¶74s5s444-\'5-%\'1--------1\'\'\'1112(5ÜÜK1',
    '03-CL.0%&%*\'6TTVű00024-ΪYYX[ağεζ,A,ζηċXRXYXΫ3*T0%%%%4K5177%00002((ù1111(2θιĳóκƻ&ħTT0(16*227722&λμν0%óξıħοT2(61ȣπΫ-44544444\'5-T0%%%%%%%%%0%%%%8ρςĝ5σÜK(',
    '%*-KL\'(455-5500^ĕ%8p24-ΪYYRY·τ,3ǜυφφUŐuYRYXΫ*0%%((\'(5OP147(\'1---7ø77777ø16ķ&(χœυŇ1\'11-60\'(772(&ψμω%(ȋƷƷħοó((P\'jvf444s4444.\'410%(((((((((((((¤ϊϋόύ6σÈC(',
    '(0-KL\'0&((%540ĕĕ¥j^Ţ%--¶RÃRcƬζ]*υƼώ*],ßÃ>RQű*0%%&(\'\'7CP1--(11ĵĵĵǢϏøǢǢøǢǢĵǢøùù.ĸ&1-----60(\'-C555Îs-75ĵĥŅΒϐó((5\'&E\'44444444.\'P10(((((\'\'\'(((((¤±ϑ²gâ6σLD1',
    '%*-6È\'$(((05-3ĳy¡¡zĳ2.\'µZXXkų]*υϒϓϒυ*3ĕXRYRΫ*000%%(%7OP(\'-666CDCDDķDDCDDDD6656656(111160((1------.11ùϔĠĠϐƒ((5\'\'-.444444-.\'-C(TȋȋήȋȋȋȋȋήήήήήÕϕϖÝ9Ϊ6ÜLD1',
    '%*46L0\'PPP56\'3pĳ1P-Ú0\'\'¢YXZkű3ƶƼϗϘϓμƶTƭϙXlXΫ3*T000%%7P.(\'\'(((%\'\'\'\'\'\'\'\'\'\'.\'((&&((\'(1\'((50(%1%033***30TϚęϐϛT2(5\'\'4.4----...\'\'CǹϜƋƫƫƫƫƫƫƫźŕıńıϝϖϞϟϠn5ÜKD1',
    '(046È3\'55546(*%ϡ8.2ŢV\'\'¥ÃWRđű*ϢϗϘϣϤϗϥ%ȣcQRQű*00((%(((-.\'\'\'00%3*3*%%%%%%$$*3***0%\'----\'10((-\'%T0&%00\'2ΨϦϛT%(27(\'.\'-..-..\'\'\'\'CǝǕńŕŕŕŕńŕΓŕŕńńńϧϨ²ϩĊΩøÜLK(',
    '(046È,%((%-6**%8¶s\'j3\'(¢YZ[kϪ$ϫØOϬϭØǛ0ƌaRYcΫ*T0--&0%\'75P54&%-3$*%(&&&((%%%00$%.%(4P664z*(%-1\'44444.-\'*TT%(%%4((.&.\'\'\'\'\'&&%(6ίħĦĦĦĦĦĦĲĦĦĦĦĦĦūMtBöÖ-ÈKC\'',
    '%*-5K]&\'.(163308zP(j^(&¸[RRgϪƶƶ$).ÛώϮ*ȣXHRQϯ327((-&*(\'%*&($%5*%**000000000*&((5*0((000\'300\'\'\'sP¡ÙP4-(3**000048ĕÚEzhEhEE8ϡǟĳ6ίϰħĦĦŅŅĲĲĲĲŅŅħϰϱ(%E&(%KC6(',
    '(045K%5665563*0ϡ\'4Ej*(ΩģXQQ_ǟϲi¶ÚĳÚϲϡϡ¥Ã_cÃĄĕ(\'%%(0%45\'\'4-026*(%(\'------..(.\'(50(5-%(\'50%0\'\'\'s54Ös41230%%%%0-8űjjjjjjjϳϪϪűj5ǝĎČČǞǞČČǞǞČČǞΑĥϴ5(Ú&4(KC6(',
    '(047C3%\'\'%44**%8\')%f3fWZYcXcccXXggXXagÃZRZ[R¥-%\'\'27%44%%440(6*%$0%%%%%%%%%*(%(5%%7-0%%50%0(((.444-\'(23*0%%00-%%\'&\'&)\'\')&&%25óƒTT0TTT00TTTTà35%**4(KC6(',
    '%01-50&\'.(71%21----(28ϵééƸéÝéÝÝéÝƸéééȍÝéŵÝÝƸ¶(((1(-(4ĸƶώ-1϶ȋ5T0à϶϶ƒ϶϶϶϶϶϶϶Ϸ20(4϶Ϸĵù϶(24ώ.(\'-\'((((((\'(%(((((2-((\'\'\'\'\'\'\'\'\'(&15(%%%%%%%22%00%%%5(0T4\'@77%',
    'C6CCKÈÜÜÜÈÜKσσϸϸσϹσÜσϹϹϺϸϸÜϸϻϹϻϹϸσϻϻϻϻϸϹϸϸϸϹϸÜϸσϸϸÜϼƛϽκ¼δϾĥϔȺοϔϐęęϐϐęęęęϿęęϐϐƑȺϐϿĐčġȹ¼ØƼƛЀÜϹϸσÜÜϸϹϸLϸϸϸÜσϸσÜϸϹϹϹϹϹσϸϸϸϸϸÜÈÜÜϸϹÜÜσσσÜσσÜσÜÜσϸϹϸÜÈKKKKKC',
    '566CCCCOCCCPCCCCCOCCKKKKKOCKKKKKKKKKOKKKKCCCOKKKKKDǶƻǶPЁɌȹǡδǡǡǡδδδδδδǡǡδǡǡδδŪδδδǡǡǡǡȹő7ǶƻƻCKKKKKKKK6KKKKKKKCDKKKKKKKKKKKC6CCKKCCKKCCCKDKKCKDDDCDCDCCC5',
    '74777445777444477577774777477777555775557747555575574477777ø77øø77øø77777777ø77777ª7777777777777775557757777775555555777577477777777777777777775577474',
    '1--1--1-------------------\'---------------1-------------------------1-------1-----ô11----------1---777-ø7----1ø774----1-------------------------------',
    'üЂЂ?üЃü?üЃЃüüüЃüüüЃ???ЃüüüЂЃüüüüüЃüüüü?üЃüüüЃЃ???Ѓ??üЃü??ЃüüЃЃ??Є??üЃ???Ѓ??Ѓü?ü?Ѓ??ЂЄ??Ѓü??üЃ??üЄ??üü?ü??Є???Ѓ???????ЃüüЃü??Ϋ??üü?üüü?ЃЄü??ЃüüüЃ??ЃЃüü',
    ';;;Ā:<ĀĀĀ;<ĀĀЅ;FF:<ĀFĀ<;Ѕ::;ĀĀЅFЅІĀF:;ĀĀ:ĀĀ:;ІFFĀІ:І;;:FF<ĀF;:ĀF:ĀFЅ<FFĀЇĀЅ:::FĀЈĀFĀ;FF:ЅFĀ::FFЅ;FFĀ:ĀFĀЅ;FFĀІ:;;ĀFFĀ;ĀĀ:ЅFĀ;FF:ĀĀЅ:ĀĀ::ĀĀ:;FĀ:<ĀĀ;<Ā:',
    ';Ā;F:ЈЅ;FGFFĀЅЇЅĀQFFGĀЉ<ЅFЊĀFFЅĀ:<ĀFGGFĀ::ĀFQĀQFĀЇІ:QGFĀĀЈЅFQFFFІ:ĀGĀFFЅЇFĀĀGQFĀЋĀFRQGĀ;:FGGGЊF:<FFĀІĀĀQGFGFĀ<І;QGGFĀ<ЅĀĀĀFGĀGF<:ĀĀGFF;;FGGĀGFЅЇЅĀQЅЅЅ',
    'ЅĀІú=ЉІ<ІF::Ї;;;Ї:ЅЅ:==<ЇІЅЅ;=;Ї=<Ї<FF:<;<Ї;Ā::=:;І<FЅ:<;ЈЇЇЅ:І:;;<>ЅЅ<;<;ЉЅЅЅЈ;ЇІЇĀЅ;<=<Ї:ĀЅ:<::;Ї;;;Ї:ЅЅЅ<:<;<ĀĀЅ<;=ІЇ::ІĀІЅ<;;Ї<Ѕ;Ї<;;<Ā:Ā;;;:Ї:Ѕ<:',
    'ІІЈ;ЅІЅ;ЋЇЌЋЉ::Ѕ<ЈЉЋЋ::Ā<ЋЇЉЈ::І:::ЈЉЉЈ;ЅЅ<Ћ<ЋЈ;:::ЉЇЈЋ<:ІЅЉЉЉЉ:Ѕ:ІЋЇ<;:;ĀЋЉЉЈЋЅ::ЋІ<Ј;:::ЉЇЉЋ<ЅЅ:<:Ā:;ЉЇЋЈ<ЅЅЅІЉЇЋЉЅЅЅ<Љ;<ЈЌЈІЅ::<:;І::ЅЉЇЈЋ<ЅĀЅЇ<<ЌЉ',
    'ЍЍЎЏАБАЏЎЎВЎБАЏЏБЎЎГЎАДАБЎЎЎЎАЏБЏБЏЎЎГЎЏААБЎЎВЎБАЏЏЍЎГЎБЏБАБЎЎЎЏАЏБЎЎЎБАЏАЕЎЎГЎААЏЎЎЎЎЏЏАЏЎЎЎЎБААЏБЏЏЏЏЎЎГЎБАЏАБЎЎГЍАААБЎББЎВЎБААЏБЏББАААЕЎГВБАААЍЎЎЖГ',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
], {
    "0" : -11524096,
    "1" : -9552896,    "2" : -10866176,    "3" : -12837376,    "4" : -8242176,    "5" : -7584256,    "6" : -6926336,    "7" : -8239616,    "8" : -10866166,    "9" : -12171716,    "!" : -16777216,    "\"" : -16121856,    "#" : -14153216,    "$" : -11526656,    "%" : -10868736,    "&" : -10213376,    "'" : -9555456,    "(" : -10210816,    ")" : -9558016,    "*" : -12182016,    "+" : -15463936,
    "," : -14150656,    "-" : -8897536,    "." : -8900096,    "/" : -14808576,    ":" : -12169136,    ";" : -12171696,    "<" : -12827066,    "=" : -12171706,    ">" : -11513776,    "?" : -12832216,    "@" : -7581696,    "A" : -12839936,    "B" : -8237046,    "C" : -6270976,    "D" : -6268416,    "E" : -10210806,    "F" : -11511206,    "G" : -10855836,    "H" : -10853276,    "I" : -12174276,
    "J" : -8237036,    "K" : -5613056,    "L" : -4957696,    "M" : -6926326,    "N" : -7581686,    "O" : -5615616,    "P" : -6928896,    "Q" : -10855846,    "R" : -10197916,    "S" : -12832206,    "T" : -12179456,    "U" : -13495296,    "V" : -12834806,    "W" : -10200486,    "X" : -9539996,    "Y" : -8882066,    "Z" : -8884626,    "[" : -9539986,    "]" : -13492736,    "^" : -12179446,
    "_" : -10855856,    "`" : -10853286,    "a" : -8884636,    "b" : -8226696,    "c" : -9542556,    "d" : -8882056,    "e" : -11516356,    "f" : -11524086,    "g" : -9542566,    "h" : -10208246,    "i" : -10208226,    "j" : -11521516,    "k" : -8884646,    "l" : -8226706,    "m" : -10861016,    "n" : -9547726,    "o" : -11518966,    "p" : -11521526,    "q" : -9550316,    "r" : -8892376,
    "s" : -7586816,    "t" : -7584246,    "u" : -9542576,    "v" : -12829646,    "w" : -8889826,    "x" : -8231906,    "y" : -10205686,    "z" : -9552886,    "{" : -6918596,    "|" : -7573936,    "}" : -8889806,    "~" : -8242166,    "¡" : -8239606,    "¢" : -10861006,    "£" : -9552866,    "¤" : -8894946,    "¥" : -11518936,    "¦" : -12837366,    "§" : -8226716,    "¨" : -6260676,
    "©" : -7573956,    "ª" : -8892406,    "«" : -12829656,    "¬" : -13485006,    "®" : -13482446,    "¯" : -14140366,    "°" : -14795726,    "±" : -4284296,    "²" : -7571366,    "³" : -11516366,    "´" : -12174296,    "µ" : -10863576,    "¶" : -10863586,    "·" : -10858436,    "¸" : -11518926,    "¹" : -13492716,    "º" : -8887206,    "»" : -6923766,    "¼" : -8237056,    "½" : -10868726,
    "¾" : -16098706,    "¿" : -16748916,    "À" : -16751476,    "Á" : -16751486,    "Â" : -16098696,    "Ã" : -10197926,    "Ä" : -5597576,    "Å" : -8894936,    "Æ" : -9552876,    "Ç" : -8239586,    "È" : -4955136,    "É" : -13482436,    "Ê" : -16756616,    "Ë" : -16754056,    "Ì" : -16756626,    "Í" : -7573946,    "Î" : -6931456,    "Ï" : -6273536,    "Ð" : -14790566,    "Ñ" : -14790556,
    "Ò" : -15448486,    "Ó" : -15445926,    "Ô" : -6913426,    "Õ" : -8887226,    "Ö" : -8897526,    "Ø" : -7589376,    "Ù" : -8239596,    "Ú" : -10208236,    "Û" : -8244736,    "Ü" : -4299776,    "Ý" : -10200506,    "Þ" : -10200496,    "ß" : -12174286,    "à" : -12834816,    "á" : -8234466,    "â" : -8889796,    "ã" : -6916006,    "ä" : -5602716,    "å" : -6258076,    "æ" : -6258086,
    "ç" : -8229306,    "è" : -9545156,    "é" : -9545146,    "ê" : -6268406,    "ë" : -5610486,    "ì" : -6265836,    "í" : -5610476,    "î" : -5613036,    "ï" : -4955116,    "ð" : -4952556,    "ñ" : -4955126,    "ò" : -5610496,    "ó" : -11521536,    "ô" : -9550326,    "õ" : -8894956,    "ö" : -8894966,    "ø" : -8894976,    "ù" : -10208256,    "ú" : -12829636,    "û" : -12827076,
    "ü" : -13487576,    "ý" : -10858416,    "þ" : -10855866,    "ÿ" : -10858446,    "Ā" : -11513766,    "ā" : -12169146,    "Ă" : -11516376,    "ă" : -9545176,    "Ą" : -11513786,    "ą" : -10203106,    "Ć" : -10205696,    "ć" : -10863616,    "Ĉ" : -8231896,    "ĉ" : -10861026,    "Ċ" : -8889836,    "ċ" : -10858456,    "Č" : -12824576,    "č" : -13477376,    "Ď" : -13474816,    "ď" : -12171776,
    "Đ" : -14130176,    "đ" : -10197936,    "Ē" : -8234476,    "ē" : -7579126,    "Ĕ" : -10863606,    "ĕ" : -12176866,    "Ė" : -8234486,    "ė" : -8892396,    "Ę" : -14135296,    "ę" : -15443456,    "Ě" : -12174316,    "ě" : -10855886,    "Ĝ" : -10200526,    "ĝ" : -9550306,    "Ğ" : -9547736,    "ğ" : -11516386,    "Ġ" : -15440896,    "ġ" : -14788096,    "Ģ" : -16096256,    "ģ" : -9545136,
    "Ĥ" : -10858426,    "ĥ" : -14132736,    "Ħ" : -14125056,    "ħ" : -14782976,    "Ĩ" : -14777756,    "ĩ" : -16725776,    "Ī" : -16723206,    "ī" : -13467016,    "Ĭ" : -12156306,    "ĭ" : -16723216,    "Į" : -14112076,    "į" : -14114656,    "İ" : -15430526,    "ı" : -13469696,    "Ĳ" : -14780416,    "ĳ" : -10863596,    "Ĵ" : -10213366,    "ĵ" : -9550336,    "Ķ" : -10203136,    "ķ" : -6923776,
    "ĸ" : -8902656,    "Ĺ" : -15425396,    "ĺ" : -15409936,    "Ļ" : -16065286,    "ļ" : -12153736,    "Ľ" : -10840466,    "ľ" : -16720646,    "Ŀ" : -12796226,    "ŀ" : -12801376,    "Ł" : -15409926,    "ł" : -15412486,    "Ń" : -14770046,    "ń" : -12811776,    "Ņ" : -14127616,    "ņ" : -10858496,    "Ň" : -10855936,    "ň" : -7571386,    "Ō" : -6910876,    "ō" : -7566246,    "Ŏ" : -7571396,
    "ŏ" : -11516346,    "Ő" : -13492726,    "ő" : -8234496,    "Œ" : -9560566,    "œ" : -6281216,    "Ŕ" : -9565696,    "ŕ" : -12156416,    "Ŗ" : -14767476,    "ŗ" : -15412516,    "Ř" : -8856426,    "ř" : -12788496,    "Ś" : -9527186,    "ś" : -12785926,    "Ŝ" : -6240066,    "ŝ" : -10179936,    "Ş" : -9509126,    "ş" : -8198406,    "Š" : -8853766,    "š" : -12143486,    "Ţ" : -12176876,
    "ţ" : -4950016,    "Ť" : -2981376,    "ť" : -4292096,    "Ŧ" : -3636736,    "ŧ" : -5607936,    "Ũ" : -12827086,    "ũ" : -11511286,    "Ū" : -11508736,    "ū" : -12819456,    "Ŭ" : -12164096,    "ŭ" : -6908316,    "Ů" : -6250396,    "ů" : -10190306,    "Ű" : -7568846,    "ű" : -12834796,    "Ų" : -9555446,    "ų" : -13490156,    "Ŵ" : -7579136,    "ŵ" : -10200516,    "Ŷ" : -10213356,
    "ŷ" : -6283776,    "Ÿ" : -6946816,    "Ź" : -12814336,    "ź" : -11498496,    "Ż" : -13454196,    "ż" : -12791126,    "Ž" : -8208846,    "ž" : -11477786,    "ƀ" : -10843006,    "Ɓ" : -8216466,    "Ƃ" : -14099246,    "ƃ" : -13443886,    "Ƅ" : -11475206,    "ƅ" : -6229766,    "Ɔ" : -4271426,    "Ƈ" : -7555936,    "ƈ" : -6885126,    "Ɖ" : -5579566,    "Ɗ" : -8864126,    "Ƌ" : -11501056,
    "ƌ" : -11518956,    "ƍ" : -6265856,    "Ǝ" : -12164046,    "Ə" : -10855916,    "Ɛ" : -12827126,    "Ƒ" : -14137856,    "ƒ" : -12176896,    "Ɠ" : -10848236,    "Ɣ" : -8879586,    "ƕ" : -10195456,    "Ɩ" : -9547716,    "Ɨ" : -10210796,    "Ƙ" : -12179426,    "ƙ" : -11511226,    "ƚ" : -10871276,    "ƛ" : -6286336,    "Ɯ" : -6291456,    "Ɲ" : -10177396,    "ƞ" : -8861556,    "Ɵ" : -7558626,
    "Ơ" : -6234916,    "ơ" : -8221576,    "Ƣ" : -6247826,    "ƣ" : -10167116,    "Ƥ" : -8861586,    "ƥ" : -8861496,    "Ʀ" : -8211296,    "Ƨ" : -10819846,    "ƨ" : -11475216,    "Ʃ" : -10835416,    "ƪ" : -9516926,    "ƫ" : -10843136,    "Ƭ" : -12832236,    "ƭ" : -11518946,    "Ʈ" : -2978816,    "Ư" : -5605376,    "ư" : -4947456,    "Ʊ" : -4294656,    "Ʋ" : -12169156,    "Ƴ" : -13477316,
    "ƴ" : -12169186,    "Ƶ" : -11526646,    "ƶ" : -10871296,    "Ʒ" : -13472256,    "Ƹ" : -10203076,    "ƹ" : -11516416,    "ƺ" : -10200536,    "ƻ" : -6936576,    "Ƽ" : -6941696,    "ƽ" : -9522046,    "ƾ" : -8869296,    "ƿ" : -8877056,    "ǀ" : -8861536,    "ǁ" : -5592466,    "ǂ" : -9509136,    "ǃ" : -8208816,    "Ǎ" : -9524686,    "ǎ" : -10167076,    "Ǐ" : -9516866,    "ǐ" : -10164486,
    "Ǒ" : -10167096,    "ǒ" : -11498486,    "Ǔ" : -11490746,    "ǔ" : -10840576,    "Ǖ" : -13467136,    "ǖ" : -6263286,    "Ǘ" : -7579116,    "ǘ" : -10858466,    "Ǚ" : -11511256,    "ǚ" : -10871286,    "Ǜ" : -8252416,    "ǜ" : -11529216,    "ǝ" : -12166656,    "Ǟ" : -12169216,    "ǟ" : -12176856,    "Ǡ" : -9545216,    "ǡ" : -10198016,    "Ǣ" : -8892416,    "ǣ" : -10190266,    "Ǥ" : -8226776,
    "ǥ" : -7574016,    "Ǧ" : -8221626,    "ǧ" : -6258116,    "Ǩ" : -6903166,    "ǩ" : -7568866,    "Ǫ" : -8224246,    "ǫ" : -7561126,    "Ǭ" : -8221596,    "ǭ" : -8224166,    "Ǯ" : -7558526,    "ǯ" : -7566276,    "ǰ" : -9540096,    "Ǳ" : -10845676,    "ǲ" : -4292076,    "ǳ" : -6918636,    "Ǵ" : -6263296,    "ǵ" : -10205666,    "Ƕ" : -6934016,    "Ƿ" : -8247296,    "Ǹ" : -4294636,
    "ǹ" : -10861056,    "Ǻ" : -10190296,    "ǻ" : -8221686,    "Ǽ" : -8221696,    "ǽ" : -8874436,    "Ǿ" : -8226736,    "ǿ" : -7568826,    "Ȁ" : -7555966,    "ȁ" : -7566316,    "Ȃ" : -8224256,    "ȃ" : -8216486,    "Ȅ" : -7563656,    "ȅ" : -8221586,    "Ȇ" : -8221636,    "ȇ" : -9537536,    "Ȉ" : -10190316,    "ȉ" : -10203096,    "Ȋ" : -7576546,    "ȋ" : -11518976,    "Ȍ" : -12821986,
    "ȍ" : -9542586,    "Ȏ" : -6918606,    "ȏ" : -8219036,    "Ȑ" : -8224186,    "ȑ" : -8892386,    "Ȓ" : -10185166,    "ȓ" : -8219126,    "Ȕ" : -8874496,    "ȕ" : -9527216,    "Ȗ" : -7563666,    "ȗ" : -5595046,    "Ș" : -10177426,    "ș" : -9529836,    "Ț" : -9532406,    "ț" : -9519486,    "Ȝ" : -8853776,    "ȝ" : -7550786,    "Ȟ" : -8211306,    "ȟ" : -8856366,    "Ƞ" : -10182586,
    "ȡ" : -10187766,    "Ȣ" : -10177476,    "ȣ" : -11521506,    "Ȥ" : -6921216,    "ȥ" : -8229356,    "Ȧ" : -9537506,    "ȧ" : -9540046,    "Ȩ" : -10850806,    "ȩ" : -9547766,    "Ȫ" : -10861046,    "ȫ" : -10843126,    "Ȭ" : -9527236,    "ȭ" : -7563696,    "Ȯ" : -4939686,    "ȯ" : -10179986,    "Ȱ" : -9529846,    "ȱ" : -10177416,    "Ȳ" : -8856356,    "ȳ" : -7548226,    "ȴ" : -7558556,
    "ȵ" : -9516896,    "ȶ" : -10185186,    "ȷ" : -10840566,    "ȸ" : -8887246,    "ȹ" : -10200576,    "Ⱥ" : -13482496,    "Ȼ" : -10197986,    "ȼ" : -11516396,    "Ƚ" : -10197966,    "Ⱦ" : -8219136,    "ȿ" : -10187736,    "ɀ" : -8224196,    "Ɂ" : -4939696,    "ɂ" : -10835356,    "Ƀ" : -8874486,    "Ʉ" : -9532416,    "Ʌ" : -11495876,    "Ɇ" : -9514316,    "ɇ" : -7553396,    "Ɉ" : -10177436,
    "ɉ" : -10185196,    "Ɋ" : -10182656,    "ɋ" : -7579106,    "Ɍ" : -9542656,    "ɍ" : -8226746,    "Ɏ" : -6913446,    "ɏ" : -10187776,    "Ͱ" : -8224216,    "ͱ" : -5597636,    "Ͳ" : -11495836,    "ͳ" : -10185206,    "ʹ" : -10832736,    "Ͷ" : -9524626,    "ͷ" : -8877016,    "ͺ" : -10835346,    "ͻ" : -8231876,    "ͼ" : -8877036,    "ͽ" : -10187746,    "Ϳ" : -8884716,    "Ά" : -6913496,
    "Έ" : -12809156,    "Ή" : -12153806,    "Ί" : -11490666,    "Ό" : -9524606,    "Ύ" : -9537516,    "Ώ" : -12809166,    "ΐ" : -9529856,    "Α" : -13479936,    "Β" : -14785536,    "Γ" : -12153856,    "Δ" : -10845696,    "Ε" : -7563776,    "Ζ" : -9532396,    "Η" : -8884726,    "Θ" : -7571436,    "Ι" : -10182536,    "Κ" : -10182546,    "Λ" : -8871936,    "Μ" : -8216576,    "Ν" : -6258176,
    "Ξ" : -6260736,    "Ο" : -6260716,    "Π" : -6918626,    "Ρ" : -7576576,    "Σ" : -6250496,    "Τ" : -8869376,    "Υ" : -9524736,    "Φ" : -10185216,    "Χ" : -12827136,    "Ψ" : -13490176,    "Ω" : -10205646,    "Ϊ" : -10205656,    "Ϋ" : -12832226,    "ά" : -12809216,    "έ" : -12151296,    "ή" : -12174336,    "ί" : -12822016,    "ΰ" : -13485056,    "α" : -9540006,    "β" : -8889846,
    "γ" : -10850816,    "δ" : -10853376,    "ε" : -14803456,    "ζ" : -14806016,    "η" : -14148086,    "θ" : -7579096,    "ι" : -7576536,    "κ" : -6278656,    "λ" : -5625856,    "μ" : -7597056,    "ν" : -10221056,    "ξ" : -12816896,    "ο" : -14793216,    "π" : -13487566,    "ρ" : -7576506,    "ς" : -8231856,    "σ" : -3644416,    "τ" : -14148096,    "υ" : -10218496,    "φ" : -12184576,
    "χ" : -5623296,    "ψ" : -4970496,    "ω" : -10873856,    "ϊ" : -5600156,    "ϋ" : -4284286,    "ό" : -4942206,    "ύ" : -8231866,    "ώ" : -10215936,    "Ϗ" : -9547776,    "ϐ" : -15446016,    "ϑ" : -1655146,    "ϒ" : -7594496,    "ϓ" : -3652096,    "ϔ" : -14790656,    "ϕ" : -3626356,    "ϖ" : -4939646,    "ϗ" : -3654656,    "Ϙ" : -1673216,    "ϙ" : -8882076,    "Ϛ" : -14798336,
    "ϛ" : -14142976,    "Ϝ" : -12161536,    "ϝ" : -10192836,    "Ϟ" : -6913436,    "ϟ" : -7573976,    "Ϡ" : -9547746,    "ϡ" : -10866156,    "Ϣ" : -8907776,    "ϣ" : -1665526,    "Ϥ" : -1670656,    "ϥ" : -8249856,    "Ϧ" : -14140416,    "ϧ" : -11503586,    "Ϩ" : -6255516,    "ϩ" : -5605346,    "Ϫ" : -12179436,    "ϫ" : -8905216,    "Ϭ" : -6923756,    "ϭ" : -5613046,    "Ϯ" : -9563136,
    "ϯ" : -12834786,    "ϰ" : -15438336,    "ϱ" : -14132726,    "ϲ" : -10866146,    "ϳ" : -11524076,    "ϴ" : -13482486,    "ϵ" : -10203086,    "϶" : -12832256,    "Ϸ" : -12829696,    "ϸ" : -3641856,    "Ϲ" : -2986496,    "Ϻ" : -3641846,    "ϻ" : -2986486,    "ϼ" : -4965376,    "Ͻ" : -6939136,    "Ͼ" : -11511296,    "Ͽ" : -16098816,    "Ѐ" : -5618176,    "Ё" : -8889856,    "Ђ" : -13490136,
    "Ѓ" : -13490146,    "Є" : -13487586,    "Ѕ" : -12169126,    "І" : -12827056,    "Ї" : -12829626,    "Ј" : -13484996,    "Љ" : -13484986,    "Њ" : -11511196,    "Ћ" : -13487556,    "Ќ" : -14142926,    "Ѝ" : -16116716,    "Ў" : -16119286,    "Џ" : -15461346,    "А" : -15458786,    "Б" : -15461356,    "В" : -16777206,    "Г" : -16774646,    "Д" : -14803426,    "Е" : -16119276,    "Ж" : -16774656,
}, 4);
			return get(0, 0, 600, 300);
		},
		cabin: function(){
			background(0, 0);
			Display.pixelArt([
    '        !"##$$%&#\'#()                                                                                                                                 ',
    '        *+,,-.$/-0-12                                                                                                                                 ',
    '        \'##\'\'345&63(7                                                                                                                                 ',
    '        89:;;9;:9:::                                                                                                                                  ',
    '         634$&&<&&3=                                                                                                                                  ',
    '         >/0,?.@+?/4                                                                                                                                  ',
    '         #6&@#6(##&A                                                                                                                                  ',
    '         BC4$$DE$E(FGHIHHHJKKLKKKMIKKKKKKKINKIKKKKKLINKKLKKKKKMIKKKKKIIIIIKKKKKIINIIKKIIJJHIIJIIIIJHMIIKKKIOIHIIKKKKIIIIIIKIIJJHHMHOIIIIIHNIP         ',
    '         +-#+Q/,+-\'ARSTUSVVWXYYZ[STWZYWZWWTST]WWWZWWSU^WW[WW[_`_^WW[WWVaS]W[[[[[W`TWW[[[TVU`VTW[[WV`UTTbW[WVTU`V]W[WWT`UTVT_VVS`U`STTVTTVUcTH         ',
    '         /@$-.#@/@&Adeeeefefffgffefeffefffeheeeeeffehieeeffefeheeeeffjjheeefefeeeeeeeeeeeeijeeeeeeeeheeeffeeeieeeefeeeeheeeeeejeieeeeeeeehhek         ',
    '         $&(&655857Flmnoppppnmnnqppqrrsponrqnnqnqpnnspnpnnnqnmpqqnptnqqppqssqqqnmpqnsqnnnmsqqqntnqqppsqnppqqnpqqqnnnqqqppqpnppnqnpnpnqnnptpnn         ',
    '         !/@&5/-C6&Fusvwxyyz{|zzzyyzzzzyyz}}zzzzzyzzzzy{zzzzyvzzzzzyzzz{yzzzzz~z{yzzzzzzyvzzzzyvyzzyzzzzyyzzz{zzzyyz}zz{yzzz{vzzzyyyzzzz{xzzy         ',
    '         ---@¡,--/\'=nvv|zzzzy~~~~zz~~~~}}~~~~~~~~z~¢z~z}~~~£zz~~z~¢~}~¢zz~~~~~~~z~~~¢~~¢z|~~~~zy~~¢z~¢~~zzz~zz~~~z~~~~¢zz¤~zz¥~~~~z~~¢~~zz~¢z¦        ',
    '         @/#\'&@#//\'F§nnsxxxxswxxvws{xvxqsxxxxxxxxsrvvvwsxvvvxpvxvxwsxxvssxvxvwvxqxxxvxxvwpxvvxxpxxxssrxxssrxxsxvxwsxxxrssvvxwprxxxssxxxxxsxxwr        ',
    '        ¨&&34<85&57Fopppppsssqsssswvpssss©spsssssssspsvwvvsssswppssssssssspssssspsssspssssptws©ssssssspsssssssspssssppssssspswssspsssspsssssss        ',
    '        ªD4«D55«744Fqv{{y|zzzy{zzz¢z{zzzzzyyzzyyyzzz{{z¢zzyzzzzyxzzzzyzzzz{zzzzyvzzzzxzzzzyvzzzzyzzzzy|zzzzyzz{{zzzzvyzzzzz|zzzzz{zzzzv{zzyzyy¬       ',
    '        2$$5//C3&#&®xzzzzz~~~~z~~~~~z~~~~~z~~~~z¢~~~z¢¯¯¯~z~~~~z~~~~¢z~~~}z~~~¢z°~~~~z~~~~~|~~~zz~~~~z}~~¢zz~~¢}~~~~z¢~~¢~}z~~~¢¢¢~~~~zz~~z}~¢y       ',
    '       ±²547&&&4457²zz¢~zy~~~}~~~~~~y³~~~zy~~~~¥´~~~zz~~~~z~~~~y}~~~zz~~~~v~~~~zy~~~}y~~~~z|~z~~z¢~~~yz~~~|~~~}y~~´~zz~~~~~z}~~~~z´~~zyz~~z~z~z       ',
    '       ²uFF;µ==FFFFossqsspsssssssssspssssspsssspssssppswsspsvssppswsppswsspsqssspswsrpssssstssssspsssppssspsssspssssppsssssppsssspqsssspssppssp¶      ',
    '      ·yxxvxrprxxxxxyyrx{{yyy{{rsxx{xxx{{y{yy{vsx{y{xyy{xsvxy{{y{{{{xs{v{{{x{x{{x{y{{xxy{xx{{y{xsxxx{x{{y{xsx{{{xv{{y{{xx{{xs{x{{xwx{yyxxxxwxxv¸      ',
    '      ¹~~¢~zzyz~~~~~~~zz~~~~~~~zz~~~~|z~~~¢~~~zz~~~~¢~~~¢yz~~}z~~~~~zz~z~¢zz~~¢¢z~~~~z}~~~z~~~~zy}z~~z~~~~~z~~~~zz~~~~~~z¢~zz~~~~zz~~~~zzz~z}~¢}º     ',
    '     »~³~~´~z´´~~~~~³~z~~´~³´~~z´~~~~v´~³~~¯¯~~~³³~~~~¯~´z~~³¯~~~~~~~}~~~~~z³³~~}~¼~³z½~~~z³¯~~´z´~~~}~~½¯´z½¯³~~z³¯¯¯~~~~~´z~~~¯~z´½³~}´~~~z´~~°     ',
    '     wvvvssvssvvvsvvvvppvvsv©©vsvvvvvpv©vvvv©vvsvvvvvvvvvssvvvsvxvvvwswv©vssvvvvsvvvvswvwvsvvw©wsvwwxrsvvvvsxvvvvsvvvvwvvwvvsvvvvvvsvvvv©vvwpvvvv¾    ',
    '     xxrpsrrxrsvvwwwvxqrxvxvsrvxxxsxxqxxssvxxxvsvvssvxxvxxwvvxsrwxxxrpssxxvrvvrprxxxxrssxxxvssvxrxxxvssvxxxqwxwxrrxvrpswvsxvxxvssxxxvxwsxxvrpsvxx¬    ',
    '    ¿zzzxy}}~yz~¢zyzzzzzzzzz{zzzzzzz¢zzyxzz~zzz¥zzyyzzzzzzyz~yyzzzzzyvyzzzz¢~zzxzzz~~}z{zzzzzxz~~~zzz{yz}zzy|zzzzz~zyxyzzzz~z}z{{zzzzzy{zzzzvyzzz°    ',
    '    ´~~~z~~~~z¯~~~z~~~~~¯~~~}~~~~~~~~¢~zy~~~~~~z~~z~~~~~~¢¢z~}}~~~~~}|~z~~~~~~~z~~¢¯~~}z~~~z¢z~~~~~~~zz~~~¢z|~~~~~~~¢z~~~z~¯~~~}z~~~~~}z~~~~zz~~~zÀ   ',
    '   Á~~~zy~z¢}z~~~z|}z~z~´~~zzzzz~}zzzzzz|~¢z¢~zÂ~}zyz}~z~}zzzy|~zzzzzv°zz¢Âz~~zy~~zzzzyy~zz~zvz~~z~z~yy¢~zzzvzz~zzz~~{zzz~~~~}zzy~z¢z}zzz~Âzzyz}zy¸   ',
    '   xsswqqsssspsssspssssqsswspssssspssspspsssssssssppsssspssssspsssssspsssssswwspswssvsppssssspssssrssppwsssstsqssqsssppsswssswsspwwssssspspsspqqsps¾  ',
    '  Àzzyx{zyyyyy¥xvyy¥yyvxyyzy{vv{yy{v{{v¥{|yxwxy{|yyvyy{vx{|y||yyy|vvyy{|xvyyyz¥{vyxv¥{{yyyvxyy{{sxy{yv{yyv{yyyywx{|{{yyy{yvvy¥y¥{yxv{{v{{{|y¥y{v{{{Ã  ',
    '  zz¢~z~~~~~~~zzz~~~¢z{zz~z~zzz~~¢zz~zz~~~zzyzzzz~~yz¢zyzzzzzz}~¢¢zz~~~~zy~z~~~zy~zy¢zzz}}y}z¢~zy}~zzzzzzy}~~~zyz¢z~~z~¢~~z|~¢~zz~zz~¢z}zz}~~~zzz¢z}  ',
    ' ·½½½´´½¼½~³½¯½z}½¯½½´¥½½¼¯³´³½³~¯½~~~z½½¼¯~y½~¼½³~}½~½z´½~³~~~¯½~z´½½¼½~¥½³½³Ä³z~~z½´³~½½~´½½~´z´½½½´´´~z´½½~~}¥½½½½}~¼½¼½|´½½´~¼³y½´z´½´~³~~³~z´´´Å ',
    ' Ævvrsssrsppsssppssssptwsssspsssppstsppwssssmsssssstssspsssssppwssppssssspssspsspsppsssssspssssspsssssswsssssswptssssppsssstpssspssmpsppsppssssstsssp1',
    'ÇÈddiÉÉjjÊËÉÉÉÉÉÉÉdiËÉÉ::9ÉÉiÉÉ:ÉÉ:Ë:ÉÉÉÉ:ÉÉÉÉÉd:ËÉÉÉÉÉÉÉËÉddÉËÉÉ:ÉdËÉ:ÉÉÉdÉÉÉd9Ì:Éd:É:ÉdËÉÉÉÉÉÉÉÉÉÊÉ:É::iÉËÉÉËÉhdÍÉ:ÉÉÉÉ:ÉÉÉÉË:É:ËÉÉÉÉÉ::ÉÉÉÉhdÉËÉËÉG',
    '`[VTTUÎWWUegÏÐÈÏÈÏÑÑfÈfÑefÏÐUUUÏÏgeÒegÏÏÏÏÏÓRfeiieÏÏfgÏÏÏeÈT_feÏUÏÑÉiRÏÏUÏeeÈÈeiegÏffÐÏÏeÓgRÓfÔÏÏÏRiiieffeÕjÖfiÎ_`ieÏÏÏÈgÑffÑegeÑÑÑgÈfÑÑfÏÏÏgf``fÉfRÈÇ',
    ' NWWW`SYWÏÑÈÎ```VVTTSVVSTTTTVTWbTVT```S`S``SVSSUUUSSSSUÎUfÈT`ffÎc``ÎUSV`aS```S`SS``S`VV`Î```c`STVV``SÎSSÎcccUÐe`VchÈUÐÐ``US`ÎUS`Uc`SUcUSc`ÎÐÈg`SÏiÏUf#',
    '  GØÙÉiÚÚÚÌÌÌÙÙÙhhÒÙÌÙÙÙÙÙÙÒÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÌÌÙÙÙÙÌÌÙÙÌÌÍÙÙÌÌÌÌÙÙÌÚÙÙÙÙÙÙÙÌÚÚÙÌÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÌÌÙÒÒÉÌÍÙÌÙÌÙÛÙÙÙÚÒÙÒÙÙÙÙÙÙÙÙÙÌÙÚÙÙÙÌÌÌÌÌÌÜÙÌ3 ',
    '    ÝÞßUÐÐihf`ÐeeeejeeihhhhhjieeeihijhiihhhhjhÒeeeeiÉRÎÏhigÈÏÈihÏ`ÈeijieheeeeieehhjeheejejeeeiihheeeihhhhhÏÐeiÉÈÈÏÉifÐÐehieieihheihhhihheÈÈhÉhfÖjkà¡  ',
    '    áÎU___ÑÎ[YÏfÔÏUÐÏÏÏgfÏÏÈÈÏÏÏÏÏÏÏgfÈUÏÈUÏÔfÏÐÏffÏjhâWTe`TWTe`WWfeÖdàÈÏÏgggh=RãÏÏÈfÏUUÏUÏÔfgfÏÏÏgffgÏggfÔZ[Ïe`SThÏW_fgÏccUÏÔÏÈÔfÏÏÏÏÏffÈXTiÈS`Rdä   ',
    '     åTZZWÏYWÏÏU`TS````Î```S`````T``SU```ÎÎ`TS``SSS`ejfWæÎWZæWUZ[ÖÈUURÖSS`SS`ÈkÈSSSS`VTVTTV````S`````SS``UÈÐæ[ÔYW_eWYÏRUSTVVVTTTVTTV``UÐÐÏåZUTWWUj    ',
    '     çWææWUWfeffffffffffèçæéééêééëééêêæææcefffffgfffhkeeìWíîYVS[feefeÇeefffffhReffffffffgggffffffgfffffffffefZïæYWÔ_feefffffÔgfffffffffffeeSTTZY`g    ',
    '     ðWYY`gffÏUUUS`cUÏÏfííæææææYYZZYZYZW_ÈÖÈÏÏÎSUUUUjjÏfÏÎYîYaÏefÏÏÈgñggÏUUÏÏeRjfUSUUUS`U`USaUUUSaUUUScUUUUÏgÐÐêòZefgUSÎSc```S`S`SÎU``T`UÐRfÏT`Wcó    ',
    '      ôWWTefÐWWWW[__YWYUWVeeffffeeefeeeeWSâWW_SÎ_Tb`Dõ``ÈeíXWShgÎaTåöøùúSVV__RûàÏTWW_______________WW___T_WTcfÏæZ_efcT_`çæææüüééæüæüüæî[XYfÏeÎÈ_U     ',
    '      ýWZWÑgSV_WWW__æZþVæZeÿmtm;demmmm;eZVçĀZZWgTT`G(ādÏUeWYYĂeÏ`T`ÏăĄăąÏT]TÎhûĆg`TT_ÏćfdeÔććÔdÉÔćÔÏĈedfÔÏTV`ÏfæYWÑgS__aëòëëĉëëĊĊċČëëëëéòíÑÏÖÎUæ`     ',
    '      čæZWÑÖUUÐUÎUÏÝìíçWĎďhnĐđ¯~Ēf½Đ¯~xàĂWíēíĔďeÏÐfĕ<ĕ;hÈÖēææWefÏÏgĖėĘęĚeÏUÏãĄěAàÈÐUÐUSÈGgÎUÎÐÇjÐÎÏÎUgkgÈeÈÐÈÈÏòæYeùÈUÐÏYWWYæYYYYZ[WZZYW__eÏfÈhY_     ',
    '      ĜæYĝieeĈĈfÏćfR_W[[_Ğd§¼Đ¯~ğÏ~¼~¢xGĠTWX[`Rifffàìå<ieiçææWieffgġöĢģęąÑĈfąĤĥĦĆefÔÏfÒiÏÚÒeÑiRÑiÑÒÒÒÒÇÉÒeÏĈĈeRòææiifÔfeefÒÉÉħÉÒÙÒÒÙiÒÚÚffifÉ4ĨR`     ',
    '      ĜææĝÑÏS[WWWWV`SS[SS`e§¯¯¯zĩÏy¯¢zxGTS`VSÎÎfSVÐĪīĬĭeÐfēééWeÏT_ĮįĖúøİİgVÏıĲĥĳĆÏT[[VV``eUTSÐÇfÈTTSSÏĴfU`T_SÐÈéæYÑgTWWÏĝWegÏÏfÏÏÏUfÐÏfeZWfÎk38Ēh     ',
    '      ĜææYÑÏSWWW[___YWĀVòZe§z~zzĩÏxzzyrÇĀ[ēæWZXfSS`GĵĶ#eUÏæêüWfU``úķĖĸøİhgTĹĺěĤĲĆgTW]__`ÎeÎVT`ójU__T_Î«fT`VTT`ÈòææÑÏT_TÐçYfÏTVT[VW[aWT`Ïéæf`igÎjd     ',
    '      ĜæéĝÑÏ`STTS``_æXĀVĻYe;x¸xrÇÏnyxxnÈæļēYaæWfUÎfAókFhÈfçêæWeÈ`TUeãÈąøàÏ`ãĲĥĽĳĆg`TS`T`óeÐSVUDdÎ`SSÎÈ=e`````ÐÈòæYif```ÐçYeÈÐÐTT`WWSW_SÏëæe`jľĿďR     ',
    '      ĜêéĝÒeefeefeÓÎéXēVòYegUSSS_VVUSUUfYæçVWæWieeeiÎeÉÑeÓçæé_ihfeehf`eieefhĞŀĲ«Łieefffà7Éeffł«9efłeà=FĕhffffeRòêYiieeffçYj(Ēğğ4ó4<ğğĞÎUëæifjŃńIG     ',
    '      ĜééYigUSTTT``_êæXVæWii=ĒkkÈÏk=AAdjZXY^ææWfUSV`ÈfÏU`Ïçæé[eÏ_V_VUffÏSVVSÈàûàgUS__SR38<GTÈğ(=kÏTÎA==FdUVSSÐÈëéYif`V`ÈòZdAdĕkkkGGkkjÈÏëæeÐdŅMğj     ',
    '      ĜééYeÏS[[[[[__æææS^We§¢~zyğRz~z{qG[[VæXXTgS___VT`TTÏòêéWeÐWZYYZíWW^[ZZWÐRÈSW[[[Wjņ3ŇĞ`È«ĕ;AÈWÎF77®dÐ_WVcÈòæYiR`_TÐòYeÈ``WWT[WTWWVÏňüeTR««dR     ',
    '      ĜééYeÏST_TTTT`WXY`STe§zzy{ÇÏyz{{qRVSUZ^_SfS``SVVS``ÏçêéWfUV_W[W[WWWWWWWTÐSTT_TT_jŌŇŇGSR7«9Fg``j==FdÐ`SSUgòææiR`TTÈçYfÎÎGÎ`TæZWZZWUëæeTÈÏU``     ',
    '      ĜêéYifÏUÎÎÐÐÎōOēòçĔĪd;{yyxÇÏr{{xqkMíŎòæĔHeÏÈÏÐÐUUÈÈeçééWefÏÐÐ`SUÐÐUcUUÐÐUUÎÎUUUÎŏ8Ň3eÎjAĕ99eÏÏRĕ=9fÏÏÏÏRÖéêæheÈUURçYf`_TZWWæZ[æZWUëæeÐÏYêæW     ',
    '      ĜééĝieÈÎUcÎÎÐÖÈÐUÔÏjh;x{xrGÈq{xxnàRÈÏcUÈehÈÏÎÎ```UÈfçæéYheÈÎ```ÎãúàgUU``````````ÎÈGÖÐSÎRfeeÏÎS`cÏÈÎ`ccUÏÈĻéYheÈÎÎÏçYfUWWæYZæY[æZZUéYiÐfWééW     ',
    '      ĜéêWÑÏTWWZWWW`UÏcfcÈe;nŐőnjennőŒ§R`ÏÎSÐUUfVWWWZWWWTÏçæéYeÏT[WWWåįėĖœ`WWYZZYZZZYZWW_WWWZWWW_WZZWWTWWZWW_`ÏééæeÏT[WÐēYfSWWææææZVâĞ_UéYe`UZëéW     ',
    '      ĜêæWÑÏSTTV_VTÎffÐfÏķøŔøĘĤįùăœŕĤŖøùÈfÎÐÏÏÏfT[WWW_TT`ÈçééWeÏ`V]]_ŗăġęĚø`][WWW_[WW[^TV[WWW]WTVTT_T__WW[TVSUÈéæYeÏS_TÐòYfS[bææļæZÎó7kfæZeSUWéé_     ',
    '      ŘææWigSVSSVVTUfeeiąėřŚėėĢŗėśŜŝėŞėœĤŁiÑiheÏ`VTTTVSSUgçéæWeÏ`TVT`gã_şùÚgÎ`T_VWW_WWWTWWW__W_W___TTTVV_WTTSÐÈææYeg`T`ÏçZfSWbæZZæZÇ=FĕàæZeUÈWêé_     ',
    '      ĜéæWÒegÏÏÏÏÏÏÏfgfeàăœąăĚąĳĳŠøœšąŢİİŁeeggÏÈÏÏÈÏÏÏggÖeçéæ_hegÏÏÏÏffaÔÑheÏÏÏUUUUUUUUUUUUÏUUÏÏUUUUUÏÏÏÏÏÏÈRRţēæYhhggÏgçYfS[^æYZæWe=ddeæWifeìææ_     ',
    '      ŤææWigS__]WWWW_T`Ôì__åå_åťååťķúŦŧŨ`ee`STT__WW_T__Tcgçææ]eg`T`UUÈÏYSeefÏUÏgffgfffeeeeeeÔÏÏUSSÏÓÓÓÓÑÑÓÓÏSÏÖææYie`TTÐçYeSWbæZZXZÏàĕdeüWiUÏYêæ_     ',
    '      ŤYæWeÏT[WW[WW[WW_ÏYXũũ]ĀYîæYWĝ]î[[Vfe`___VT_^V]VVV`ÏēææWeÏ`T`ÐÐÈÏïÐfgÈÈÐÏÏÈÈggÈgÈÈÏfÈÈÈÏgÈÈÐÎWĀæYYYZâÈÎUÈæYZig`VTÈēZfÎ`_ZWWZWSTÏÈÏüWeUÈWêæT     ',
    '      ŘXYWÑÏT____WWWT_TÏYĀYŪYéææĀêææîæYū_ÈeÐS`T`S`SSTSSVUfíææWeÏ```æŎæææææææçææòòòüòææçæææéòææYYÏfÈÏÎUSSUUÐeÏÈÈæZWig`VTÈæWjÈGã_TVWWaW_VÏæWeÐRWéæ`     ',
    '      ŤZZ`ifÏUUUÏUUUUUUfÎ`TVŧ_T___TSSTT``ehfgÏÏÏÏgfÏÏÏÏÏgeíZZTheÏÏÏ_`_WW__W__WWWWW__TTTT_TTTTTV`eifÔ_^WWW`_eeefZWWiefÏÈÖēWj«ĒĒóóŬŬÇĞŬÇ`Ïæ_ife_ææS     ',
    '      ŤWWTieÏUUUUUUUÏUcÏfihhÉiiiiiiiiÚeÉihfÏÏÏUÏÏUÏÏÏUUUÏÑĂWWTieÏÏfeieiiiiiiiiiiiiiiiiiiiiiiieeÉihfÏS[SVSÎ_eeeeWW_ihgUÏfíWd=ĕAĕ=AAA=AAÈÏæ_igÑ_YY`     ',
    '      ý[W`iÏSTWWWWWWWWWW_ÏeÑegÏggggfRÒeifÏSVWW_WWW[_WT_V`fWWW`eÏTVSÐfÐeieeeeeeeeeeffffffffeeeÐÐiefÈUTSYSU`WeÏÏfW_Tif`TTÏW_iłRRÏÏÏcÐÔUÈ`ÏYThUR`WWÎ     ',
    '      ý[W`iÏ``TTT_W_WWWWW`ÏgÏUU``cSÎUUgÏÏcTVTTTTTTT`````cf_TTÎeÈc``ÈUTRegÏÎÎ``ÎÐÐÈÏÐÈÐUUUÏÏÏÈW`ifggUVTT`T`TeggeTT`ifU``ÏW_eÏ`ÈV_V[_SZW`fW`hÏRÐWWÏ     ',
    '      ŭT_ÎigÐ`ÐÐUc``SSS```ÐÏÏÎUÐÐÐUUUUÐÈÐÐ`ccS`UU``cUÐÐÐÈeÎÐÎÈifÐcUR`WÏegÈYîüêææZ`Ï````U`UScÎæ_iÖRgÏVSSSTÎ`eàReÎÎÈÚeÏUÎf``eÏSÎ``US`UTSÎfT`iRjÈ``R     ',
    '      $ÞĪÞkdĞÇóĩĩGàĩŬóŬóĞGĩŬŬĩóGàĩĩĩóóàGóĩÞĩĞğàĩÇĩGGóĩğĞõĩóŬŬğk9dkààÎ[R:ddÏfjeefÏjdjdjjhjààjRZ_ÉddegÐU``UÏÎhdkğóŬĩĒddjàe``ÈÐÎÐÎÎÐÎÎÈÐÐÈÏÎÈidĩóŬŬĞŌ    ',
    '     Ů/,?/#«$#-//$&Q-/,/#\'-?/-@$#-?/##&?--?/##Dů#C&3//#&5!/Q/#&dğ4«ĒÐTf9AĕÝfFĕFd`jAAAĒ=A««=AGZ`ÉAAAGSca`ÎÎRdĕBŰC-/C4«<<RçææYæææéòæææYZYZYWÒ4-"-/#3    ',
    '     .C//#&«3#C@\'E$@"@/#&3//#@#5&/"@#\'%#///#6&%@#\'EE/#\'54@#/#\'39«<«ĒÏSe9=AOÔAAAàWàAĒĒ««=««ĒAGV`ÉAAĕeiÉ:9Éih9A&##/#67Ē<ğà_`TTV_WWWWW_VT```ÎÉ«@#@#&5    ',
    '     5%&6%«A45EE%««3$EE5ğ«5&335««53&ED«%&&E55ğA515««5544«45&34«;=«ĒAfÐeFAĕűfFAAdVàA=AĒ=AĒAĒkkUÈÉAĕdU:9ĕĕ9fe:ĕĒ<8337ĕ=««ĕefÉiÉÉiÉiiiiÉiiÉfhdA4%E5<=    ',
    '     E3<<&5ĒF7«<5##4Ē5EB#$«%5=45&&4=D355<<«DD6\'5«4$\'5«ğĒĒE5Ē<3E=9kAkkGkFĕAGd«Ē=ĕjkĒ==ĕ«=ĒkA9kÇR9FĕAàĕ9AAĕdĆ9A5&4=%5«FA=dÐÎRRRRRRReÖRRÖRf`ÈÉ=55««5D(   ',
    '     \'$%E#$4944\'##\'53#"##$4\'$4$C#$&«&@#6%44\'#$$64&#$E5D«D\'$5E\'&«AEE$\'#$4$"E&/@\'3<##$55/##$5D\'B\'&D$#$E«##$5E««\'$54$$49Ē<ÇçíēæüçòçææææææíYììh<5&45&5A   ',
    '     %%4<55<9««455%7%5DE%%«55«%5D%%«D5%5<Ē«45%4%«4%D4<<«<%5<<54«F<«%&5%«%3D55E5%«5354753554«E35Dğ%544«5554ğ«A544«%4«9A«j``__TT__T___WW_TÎÐÉĒ4(«<<4=   ',
    '     ŌŌŌŌ0ŌŌņŌŌŌŌŌŌŌŌŌŌŌŌŌ.ŌŌ.ŌŌŌŌŌ¡ŌŌŌŌŌ.ŌŌŌŌŌŌŌ.ŌŌŌŌŌŌŌŌŌŌŌŌŌŌņŌŌŌŌŌŌ¡ŌŌŌŌŌŌŌŌ.Ō0ŌŌŌŌŌŌ0.¡ŌŌŌŌ.ŌŌŌŌ¡ŌŌŌŌŌŌ.ŲŌŌ¡ŌŌŌņŌŌ.---ůůůůůůůůů+ů----¡ŌŌŌŌŌŲ0    ',
], {
    "0" : -8882066,
    "1" : -11513776,    "2" : -14142926,    "3" : -11516346,    "4" : -12829646,    "5" : -12171716,    "6" : -10858416,    "7" : -13487566,    "8" : -12171706,    "9" : -14803436,    " " : 0,    "!" : -9540006,    "\"" : -10197936,    "#" : -10200496,    "$" : -10858426,    "%" : -12174276,    "&" : -11513786,    "'" : -10855856,    "(" : -12829636,    ")" : -9539976,    "*" : -8224146,
    "+" : -8226716,    "," : -8226706,    "-" : -8884636,    "." : -9539996,    "/" : -9542566,    ":" : -14805996,    ";" : -15461356,    "<" : -12832206,    "=" : -14145496,    ">" : -7571346,    "?" : -8884646,    "@" : -10197926,    "A" : -14145506,    "B" : -10855866,    "C" : -10200486,    "D" : -12174286,    "E" : -11516356,    "F" : -14803426,    "G" : -12834786,    "H" : -10205646,
    "I" : -9547726,    "J" : -9550286,    "K" : -8892366,    "L" : -8889806,    "M" : -10203086,    "N" : -9547716,    "O" : -9550296,    "P" : -9545146,    "Q" : -8882076,    "R" : -12834796,    "S" : -10866166,    "T" : -10210796,    "U" : -11524086,    "V" : -10210806,    "W" : -9552876,    "X" : -8897526,    "Y" : -8894956,    "Z" : -8897516,    "[" : -9552886,    "]" : -10208246,
    "^" : -9555446,    "_" : -10208236,    "`" : -10866156,    "a" : -10868726,    "b" : -9555436,    "c" : -11521526,    "d" : -14148076,    "e" : -13492726,    "f" : -12837366,    "g" : -12834806,    "h" : -14148086,    "i" : -14150646,    "j" : -13492716,    "k" : -13490146,    "l" : -16116716,    "m" : -16116706,    "n" : -15458776,    "o" : -16114146,    "p" : -16114136,    "q" : -15458766,
    "r" : -15456206,    "s" : -16114126,    "t" : -16116696,    "u" : -15458786,    "v" : -16111556,    "w" : -16111566,    "x" : -15456196,    "y" : -15453626,    "z" : -15453616,    "{" : -15456186,    "|" : -16111546,    "}" : -15451056,    "~" : -15451046,    "¡" : -9542556,    "¢" : -15453606,    "£" : -16106406,    "¤" : -16108966,    "¥" : -16108986,    "¦" : -12166556,    "§" : -15461346,
    "¨" : -8882056,    "©" : -16114116,    "ª" : -12827066,    "«" : -13487576,    "¬" : -12827056,    "®" : -14803416,    "¯" : -15451036,    "°" : -14795696,    "±" : -12824486,    "²" : -14800846,    "³" : -14795676,    "´" : -14795686,    "µ" : -14800856,    "¶" : -10853266,    "·" : -9534836,    "¸" : -14798266,    "¹" : -14137766,    "º" : -10195336,    "»" : -10192756,    "¼" : -15448476,
    "½" : -14793116,    "¾" : -11511206,    "¿" : -12166546,    "À" : -10192766,    "Á" : -12824466,    "Â" : -16108976,    "Ã" : -14140336,    "Ä" : -14793106,    "Å" : -14137756,    "Æ" : -14142916,    "Ç" : -12176866,    "È" : -12179436,    "É" : -14806006,    "Ê" : -14150636,    "Ë" : -15461366,    "Ì" : -15463936,    "Í" : -15463926,    "Î" : -11521516,    "Ï" : -12179446,    "Ð" : -11524076,
    "Ñ" : -13495286,    "Ò" : -14150656,    "Ó" : -13495296,    "Ô" : -12182006,    "Õ" : -14148096,    "Ö" : -12837356,    "Ø" : -14808566,    "Ù" : -14808576,    "Ú" : -14806016,    "Û" : -15461376,    "Ü" : -16119286,    "Ý" : -10863586,    "Þ" : -11518926,    "ß" : -10863576,    "à" : -13490156,    "á" : -6255496,    "â" : -10208226,    "ã" : -12176876,    "ä" : -8887206,    "å" : -10863596,
    "æ" : -8239596,    "ç" : -8237026,    "è" : -7579106,    "é" : -7581676,    "ê" : -7584236,    "ë" : -6926316,    "ì" : -9550306,    "í" : -8894946,    "î" : -8894966,    "ï" : -10868716,    "ð" : -8234436,    "ñ" : -11518956,    "ò" : -7581666,    "ó" : -12176856,    "ô" : -8231866,    "õ" : -13492706,    "ö" : -12171766,    "ø" : -13487606,    "ù" : -13490166,    "ú" : -12832246,
    "û" : -12829666,    "ü" : -8237036,    "ý" : -7573936,    "þ" : -8242166,    "ÿ" : -16116726,    "Ā" : -8239606,    "ā" : -14142936,    "Ă" : -9552866,    "ă" : -13485046,    "Ą" : -13487596,    "ą" : -14145526,    "Ć" : -14145516,    "ć" : -12182016,    "Ĉ" : -12837376,    "ĉ" : -6268386,    "Ċ" : -6268396,    "ċ" : -6270956,    "Č" : -6270946,    "č" : -6916006,    "Ď" : -8892386,
    "ď" : -10205656,    "Đ" : -14790536,    "đ" : -14132606,    "Ē" : -13490136,    "ē" : -8239586,    "Ĕ" : -8892376,    "ĕ" : -14148066,    "Ė" : -12827126,    "ė" : -12169196,    "Ę" : -10853346,    "ę" : -13482476,    "Ě" : -14140406,    "ě" : -12827096,    "Ĝ" : -6260656,    "ĝ" : -9550316,    "Ğ" : -12832226,    "ğ" : -12832216,    "Ġ" : -11521506,    "ġ" : -12824566,    "Ģ" : -11511276,
    "ģ" : -14800886,    "Ĥ" : -13485036,    "ĥ" : -12827106,    "Ħ" : -14800876,    "ħ" : -14153216,    "Ĩ" : -13484996,    "ĩ" : -12174296,    "Ī" : -10861006,    "ī" : -2318266,    "Ĭ" : -4949966,    "ĭ" : -6910856,    "Į" : -12174326,    "į" : -12171756,    "İ" : -14142966,    "ı" : -12171746,    "Ĳ" : -13487586,    "ĳ" : -14142956,    "Ĵ" : -10866146,    "ĵ" : -6260676,    "Ķ" : -8234466,
    "ķ" : -12832236,    "ĸ" : -11513826,    "Ĺ" : -12174316,    "ĺ" : -12824546,    "Ļ" : -6926306,    "ļ" : -8242156,    "Ľ" : -14142946,    "ľ" : -6918596,    "Ŀ" : -4947406,    "ŀ" : -13485026,    "Ł" : -14803446,    "ł" : -13492736,    "Ń" : -5602736,    "ń" : -1657766,    "Ņ" : -11516366,    "ņ" : -10197916,    "Ň" : -10855846,    "ň" : -6923746,    "Ō" : -9539986,    "ō" : -10861016,
    "Ŏ" : -7581656,    "ŏ" : -12179426,    "Ő" : -14798286,    "ő" : -15456216,    "Œ" : -14798296,    "œ" : -12827116,    "Ŕ" : -10855906,    "ŕ" : -10850786,    "Ŗ" : -11508716,    "ŗ" : -12829686,    "Ř" : -6916016,    "ř" : -12166636,    "Ś" : -10197986,    "ś" : -11511286,    "Ŝ" : -12169206,    "ŝ" : -10853366,    "Ş" : -10853356,    "ş" : -12176886,    "Š" : -12829676,    "š" : -14798326,
    "Ţ" : -13482486,    "ţ" : -12181996,    "Ť" : -6918576,    "ť" : -11518966,    "Ŧ" : -10205676,    "ŧ" : -10863606,    "Ũ" : -10858476,    "ũ" : -10205686,    "Ū" : -9547756,    "ū" : -8892396,    "Ŭ" : -11518936,    "ŭ" : -8231856,    "Ů" : -7568776,    "ů" : -8229276,    "Ű" : -9542576,    "ű" : -10205666,    "Ų" : -8884626,
}, 4);
			return get(0, 0, 600, 296);
		},
		dungeon: function(){
			background(0, 0);
			Display.pixelArt([
    '!""#"""""#####$$%%%%%&&\'(())&*++,*+-,...,,,,...../..././01101111232111123322401115/,667,,.5,.//8/.88....,,,,,---)-)()&)&$$$$9$###"""#:::";"##;;;<<=>??',
    '!!!"!!!""""#####%%%$$%&&&())\'*+-+*+-,..,,,+,.....8.../81110511111111111122210111188.667,,@7-...///8/..,.,,,,,--)))(((&&$$$$$9$$#$####:##";"##;=;<>=>??',
    '!!!"!"!""""""###%%%%%%%%&&)&%AB)+*B)+..++,+,,..../...585511551500321551111110011000,667,*,6-.../0888..,,,,,,,-())))((&&$$$$$$$#######;##;;#"#;=;<>=>?C',
    '!!!"!!!!!""!""##%%%$%&&&(((&%+B)B*B),.,+,,,,,,././.../.8880558.55255588588810081888,D6@+,*6).@88/8/8..,,,,,,,E))&)-(&&&%$$#$$$###""#"""#;;""#;==<>=<CC',
    '!!F!F!!!!!!"""##$##%G%%%%&&&%+H&B+B\'-,--+,+,,,,..8,.,.@888@15.888155588881011001080,66*+,*6(.@8/88./.,+,,,+,-((&&)&&&&&%$###$$###""#"""#;;""";==?>=>CC',
    'FF!!FFF!!!!!!"#"#"######%&%%GAH%\'+H)-,E++++,,,,..8.,./1@@@855@@88D18888885011008111,@6*+,+6&.@@8/8,.,,-++,+,,((&&)&&&$$%####$#""""!"";""=="""===??>?CC',
    'IFF!FFFF!!!!!"""#""####G%%%%GJH%\'+&&),))))++,.,..@,,.@@,.@@78.,..1888@@...@@88..888,66*+++K&,,,..8,,++)-++,,+(&&&)&&&$$&####$##"""!"""""=="""=>=??>LCC',
    'FFF!FFF!!F""!!""#""#$%%%%%$%GJ\'%&+&$),(())))+,,,,.,,,@@,.@8@@.,..1588..5@,..@8,@88@+M6*B++6$-+,@,8+-)++N())N-(&%%B%&%%$&#######""!"""!!"=="!"=<>C?>LCC',
    'IIIIFFFF!F!F!!""#"""####%&#%OJH%%B&$&,()\'))(+++,,,++,@*,.@8.@,...1@881885@@,@8,@@@8+DP*BBB6G+,,.,8,+,++BB)(()&&%%(%%%%G%##""#"""!!!!!=!"=>"!">?>CCLLCC',
    'IIIIFIF!FF!!!!""#""""##G%&#%OJQ%%B&$&,(&&)(&+++++,++,,,.@@@..,@..5@@@@5115.,18,@8.8+PD*B++P%,@,+,8,+++B)))&)&%%%%%%&%##%""""#"""!F!!!!!"=>!!"=?>CC?LCC',
    'RRI!IIF!FF!IF!""#""""###G%G%GB%%%H%#\',&%%%&%&))++,+B+,,,@@,,,+,+,1.,+,@@@@,,88+,,,,+PD*B++PG(B(B+8+()((&&\'&B)%%%G&%%%G#%"""""""!!FF!!FF!>>!!!>L>CCL?CC',
    'SRI!IFFFF!!FFF"!#!"""#G##&%%GB%%%B%#&N&%%%%%%&\'++,)\'B,+B,@,+*B+++8,,B**+,,,+.8B+++BH6P*H++6#%\'&%+8(&(&&&&%)B)&%GG(%%%#%%""""#""!!FF!FFF!>>!!!>L>CC??CT',
    'SSI>RLFF!!FFFF"!#!!!!"""G&%%G+%%&+%"%+&%%%%%%&&+B+BBB+8,@@*D@BB+B@,,)B,+,*+B@@U++BBBPP*BABPG&&&&B,)&&%%%%%%&&%GG#%&GH%%""!!!#"!FFFF>FFF!>L!F!>?>TTCCST',
    'VSI>RLIFFFIIFF"!#!!!!!""#&G#OB%%&B%"%-%#G%%G%&%U(+BBBB+@88@+++BB+@,+B+B+,BB&*8UB+BB+66ABBAWG%%%%U,&&%%G%%GG&&%G#""%&%%#!!!!!""!FFFF>FFF!>LFF!>?LTTCCTT',
    'XSYFRFIIFF!IIF"!"!!!!!!"G%##G+%%&+%"%(%G#"G""GG(B+%\'BB+@,,@,+BBBB@++BB)BB\'Q\'@8&&B\'&BZZ*BBAMGGG%%&+&%%%GGGGG&&%GGG%%G%##G"!!!"!!FFFLLFFFF>LFFFLCLTTCCTT',
    'SRIFIFFIFFFFFF"!#F!!!!!"&&%#G+%%&+%"&&UG"""#"G#&&U%%+@+@**8+,+))B@+U[&\'&&G"B88+\'&%%HZZA[BJ]&G%G%U,+%GG!F!GG&&%"G&%&GGGGGG!!!""!F!FILFF!!!LFFFLCLTTRRRS',
    'IFFFF!!F!!!F!OG%%%GGGGGG&&%GG+%%&+&&(U+%%GO^%%[UBABA_**M]@MM@M**A8++BBBB+""@`aaABBB[]ZA[BBb%&[B+@8MA[H!?FH%HBB[[BHBHH^B^%GOG%%%GO"FFFFRRRRIFFLCLTTRSST',
    'IIFIIFFIFISTIF!OG%GGGOOGGOOGGB%%&+&G%GGGHOFBAHA*]M]]]6PZ6PWWW66]]M6A]]M*B!"A]PDb]*AB]]J[[BAOHAbA****AU!!%B%G[[[%%[[%GG%GO!!!OOOO!!FFIRTXTRIIILCLTTRTTT',
    'LIYYRRRRTCTXCC?ccFFF!!!!!!!!GA%%%B[!""!!OFCOOO^HH[HHAAAAA****AAAAAAB]**G"c!G"[ABABAHbbJ^[UA"HBB^BU^^%G!F!!FCFFF!d!!!cFFFFFFFFIFFILLCCTTXXTCLLRTRTTTTTT',
    'IIIIIIIRTXTTTTI"GGGOGGGGG%%%%B%G%B[#%GFeRCCCCI"&B[BB[[&B+B++A+BBBB+BB+%Fc!!!F![[[&%%bAf%[^J!G%%%[U[%%%"!F?LCLe!"#%%GGGGGOO"""!!!!FFRTTTTXXTRLRTRTTSTTT',
    'IIIIIIITXXTCTTC"GGGGGO""G%%%GBGG%H%G%GCCC?LCCCeU++BBBBBBBA++A*+*******G??F!eec&UB[&%AAH%%^H!%%%[BB[[[&&gCC??CCCG%%%GGGGGGO""!!!!!FFCXXTTXXXRLCTRXTSTTT',
    'IIIIIIIRXXTCTTC!OGGOOOOGGG%%GHGGGH%"%G?CC??CCCFUBBBBBB+AAAAAAA+AAAAA*AGe?Ie??F[[[%%%JJhG^^[!%%^^^[[%%%[OCTCCCTCOGGGGGGGOO"!!!!!!!FICTXXXXXTRRRTRXTTTTT',
    'IIIIIIICTTTTTCIOGOOOOOGOO%GGOHGOOHGGGG!CFCCTLRG[[H[[[[BAAAABBBBBBBBBAAGI!C?C"!^%%%%GHJHGGG^cG%^%^^%%^%G!C?CCTRCO%GGGGGOO"!!!!!!!FFITTTXXXXXTRTTRXXTTTT',
    'IIIIIFITTSTTTCIOOOOOOOGOOOG%!^OOO^OOGG"?FCCTII%^[[[[[HBBAAABHBHHHHB+AJ!F!C?IGIG%%%GGhfhi^^iFGGGG%%%%%^GFCFTCTFC!GGGGGGOO"O!!!!!FFFITTTXXXXXTRTTTXXTTTT',
    'IYIIIIFRRTXTTCIOO!OOOOOOOGGGFOOGGO!OGO!eTTCTTRG^Hh%^^HHBBJBHHH[HHHHH[J!IICCCOIG^%GGOghhH^GOcGGGGG%%GG^GIIITTTICFOOOOOOOOOg!!FFFFFFIRYXXXXXXTRCTXXXSTST',
    'YYYYYIIYRXXXTRF"O!!!ggOOOOOOFOhHHOFOOO"cCTRTC!G%^^GGG%^HHH[^^^^hHHHBHB^OCCCCFIGGGGOOgfj]Ah!FOOOGGGGGG%GFFYTTTYCFOOOOOOOOggg!FFFFFFIIRXXXXXXSYYSXXXSSTT',
    'YYIYIIIYSXXXTRF!!!!!g!OgOOggFghJHOF!OO!ICTRTk!OGi^GGG^hhH^^i^iGhHHHBHHhOkRTCYIGOOOOgghjlAmFIOOgOOGGGGiGg!CTXTRCFOggg!!ggF!!FFFFIFFIIRXXnXXnSYISXnXSTTX',
    'YYYYYYYSSXXXTRF!F!!ggggggOggFFFg!FFgOg!FCTRTC!OGGGGGi^ihhi^iii^G^^HHh^GOCCCCCIOOOOg!gOOOggFIggggOOGOGGGggCTTTTTFFFFFFFFFFFFFFFIIFFIIIXXXXXXTTTXXXXVTST',
    'YYYYYYYRSXXXXRF!F!!gg!!F!!g!FggggggFg!!FRTRTkFOOOOGOOOOGiiGGGOGG^^^^^hiOCTRTIOgOggggOGGiOOOFFgggOOOOOGGggRTSTTLFFFFFFFFFFFFFFIIIFIIYYXXXXXVSSSSTXnXXVV',
    'CRRRYYYSTXXXXSFFFFFFFFFFFFFFFgggFFFIF!FIRTCTCIgOOgOOgggOOOgOiOOOOGGiiGO!RTRTIggggg!FOOOggggIFFggggggOOOFFSXTXRIIIFIFIIFIFFIFIIIIIYYCCXXXXXXTSSXXXnXXXX',
    'TSSSSSSTSXXXXTYIIIIYIIIIIIIFFFFgoFFIIIICTTTTTYIFFFFFFFFggFFggFFFgOOOgggITTTTYFFFFFFoggOgggoFIFIIIIIFFFIYYTTXXTRYIIIIIIIIYYYYYYYRSTTSTXnXnnXXXSXXXnXXXX',
    'XXXXXXTXXnnnnXTTCRRSRCCSCRkCIFFIFFITCCTTXXTXXTkkTCkkCCkIICeeIYCkIeCeeIYCXXTXTkeCeeeIoooFFFFCYkRTCkCTYeCTCXXXnXCTTCCTTCCTTCTSTTTTXXXXXnnnnnXXXXXXnnnnnn',
    'XXXXXXXXXnnXXTTSRRSSTTTSRCCTIFFFFFITTTTXXXTXXTCkTCYCTTYYRTkkYCCCYkCYIIYTTXTXTkICIIIIoooFFoFIYYYTCCTTkkCTRXXXXXTTTTTTTTTTTTTTTTTTXXXXXnnnnnXVVVXXnnnnnn',
    'XXXXXXXXXnnXnXXSSSSTTTTTSSTTIIIIIIYTTTTXXXXXXTTTTTSSTSkRTTTTSTTCCCTCCkRTXXXXTTCTYYYYIIIIIIIkYRSTTTTTTTTTTXXXXXXXTTSTTTTTXTTXXXXXXXXXXnnnnnXXVXXXnnnnnn',
    'XXXXXXXXXnXXXXTTTTTTTTTTTTTTYIYYIIYTTTTXXXXXXTTTTTTTTTTTRRRTRCTTTTTTTCTTXXXXXTCCRRCYIIIIIIIYCSTSTTTTTTTTTXXXnXXTTTTTTTTXTXXXXXXXXXXXXnnnnnXXXXXnnnnnnn',
    'XXXXXXXXXXXXnXXXXXXXVVTTXXTSIIIIIIITXSTXXXXXXXTTTTTTTTTTTTTTTTTTTTTTTTTTXXXXXTTTTTTIopIIIppITTTTTTTTTTTXXXXXnXXXXXXXXXXXXXXXXXXXXXXXXnnnnnXXVXXXXnnnnn',
    'VXXXVXTXXXXVXXSSSSqqYYYYYYYYYYYYYYYYYYYSSSTTSYIIIIIIIIIIIIIIIFFIFFIFFFIIYYYYYIFIIFFIIIYYYYIIIIIIIIIIIYYqSTSSSSYYYYYYYYYYYqYYSSSSSSSSXXXXnXXXXXXXXnnnnn',
    'XXXXXXXXXSSSSSSSSSRYRRRYYYYYIYIIIIYIIIYYIIIYYIIIIIIIIFIIIFIIFFFFFFFFFIFFFFFIFFFFFFFIIIIIIIIIYIIIIIIYYYIIYYYYYYYYYYYYYYYYYYYYqqqTSSSSTTTSSTVXXXXXXXXnnn',
    'SSSRRRRRYYIIIIIIIIIFFIIIIIFFFF!!FFF!gFF!FFFFFFogo!!FggOOOOOOggOgggggggggggggggggggoggFFoFFFFFFFFFFFFFFFFFFFFIIIIIFFIIIIIIIIIIYYYYYYYYYYYRRSSSSSSSSTTXX',
    'YRRYYIIIIIIIIFFFFFg!!FFFF!ggggOOOOOOOggggggggggOOOgOOOGOOOOOOgOOOOOgggggOOOOggggggggggggggggggggggggggggFFFFFFFFFFFFFFFFFFIIIIIIIIIIYYYYYIYYRRRRRSSSST',
    'IIIIIIIIFFF!oFFFFF!gggOOOOOOOOOOOOOOOgOOOOOOOOOOOOOOOGiGOOOOGOOOOOOOOOOOOOOOOOOOOOOgOOOgOOOOOOOOgggOOgggggggggggggggFFFFFFFFFFFFFFFFFIIIIIIIIIYYRSRRSS',
    'IIIIIIIFFFFFFFF!!gggOOOOOOOOOOOOOOOOOOOOOGGOOOOOOGGGiiiimOOOOGiiimimOOGiiGGiGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOggggggFFFFFFFIIFIIIIYYYYYRRR',
    'IIIIIFFFFFFFFFF!gggOOOOOGGGOOOOOOOrOOOGOrsrOmtmmmmmmmmmmimmiGssGiimgGiiimmGimmOOtrOOOOOOOgOOOOOOOOOOOGGGOGGOOOOgOOOOOOOOOOOggggg!FFFFFFFFIIFIIIIIYYYYR',
    'IIFFFF!!!!ggOOOOOrrOiGimmmmmmmGmsGimmmmmmmmmmmhhhhhhmihhmmmmimiiirOOsmGOOOOtmmittrtOimrOOGOuOtOOOOOiOOsiiGOOOOOOOOOOOOOOOOOOOOOOggggggg!FFFFFFIIIIYYYY',
    'IFFFF!gggOOOOOOsmmmiimmmmmmmmmmmmhhhhhhhmmhhhhhHHhhhhhhhhhmmmmmmmhGGmimiiimmmmmrumuOtrmmmmmOOOmmttOtOOOmGOGGGGOOOOOOOGmmiiiGOOOOOggggg!FF!!gFFFFIIIIIY',
    'FFFFFgggggOgOOOOOOGmmhmimmmmmmmmmhhhhhhhmmmhhhHHhhHfhhhhhhhhhhhhmhOhhhmhmimhmmhummmmmmmmmmumOOumGiOrttrOOimmiiGGOOOOOrOOOOOOOOOOOOOOOOOgggggggFFFFFIII',
    'FFF!gggggOOrOOGssmmmmmmmmmmmmmmhhmhhhmhhhmmhhhhhhhhhhhhhhmhhmmmmhOmmmmmmhmmmmmhmmtimmmummmuuugmmmOmiiiimGmhtOGiOOOGGGsOOrOOOOOOOOOOOOOgggggg!FFFFFFFII',
    'FFogggOOOOrrssmmmhhmmmmmmmmmmmmhhhhhhhmmhhhhhhhhhfmhhhmmhhhmmmmmmrmmmhhmmhhmmhhmmmmmmmmmmmmmmmOutmmiimmmmGmiOOOOOmmmmmmGsGmuOOOOOOOOOgOgg!FFFFFFFIIIII',
    'IFF!gggggOOOOOOrmsrrmurrmmmmmmmmGOmummmhhmmmhhhhfhhhhhmmmhmmmmmmmhmhhmimmmsmmmmmmmmmmimmmmmmmmmrmmmmimmmmimiimrgOOOOOiOtmmmtOOOrOOOOOOOgggggggFFFFFFFI',
    'oogggggOOOOgOOOOrmmmmmmmmmmmmmmrrmmmummmhmhhmmhmhmhmmmhhhhhmmmmfrmmmmmmmmmmmmmmhummmmmmmuummummOrmmitmtimmttmOrrOOOOOOOOrOOOOOOOOmOOOOOOgggggggoFFFIII',
    'FFFggrggggOgrsGGsmmmmmmmmmummmmhmmmmmmhmmmmmmhvmhhwfhhhmmmmmmmmhmhmhhhhihhmhhmhhrmmmmmmmmmmmmmmmtOmuiriGOOOOOrmrrmrmGOGrrOrOOOggggOFggggggggg!gFFFFIFY',
    'FFooggggOOOOrrrrGmimmmmhhHmhhffhhhhhhhhhmhmmmhgOmmmmmmmmmmmmmuhFmmmmmmmimmmmmmmhrmmmmmmmmmmmmmmumummmOOtmumrOOOOrrmOOGOiimmtOrOOOOOOOgggOggggggg!FFFFI',
    'FFoogFggOOOrmmmmmhhhhhhhHmmhmhmummmhmmmmmmmhwmmmummrrruOummurrrxmmmssmmmmmmmsrrmOrrOOOOrrrrrruuuummmmimmmmOttOOOOOOrmmOiGOOOOOOrggggggOOgggggg!FFFFIII',
    'gFoFoggggOOuummmmmmmmmhhmmmimrrrrrrrrrrrumhmumsmmummmmmmmumtumrrmuummmhmmmmmmmmrJrrrrrrrrrrOOtuuGmhmuitOuOOOOgOgrOOruumrOmGOOOggggggggggggFFFFFFIIIIII',
    'FFFFogggggrrrrrrrrrmurgrmmrrmmmmmummrrrOrhgOummrmmrmmmmummuummuhmmmmmummmmruOOOuhgmmuuuuuuOOuuurOrrmgrOOOgggggggggggggggFoggggggggggggFFFFFFIYFFIIIIII',
    'FoogggggggxrOOrrrrruurrrrurrsmmmmmmmmsmmhgrrrrrrmurrrrmmummmhgmmmhhhhhhmmmummmmmmmmmmmmmmmurOrumOuuumrOOrgggggggggggggggxugggggggoFFoFFFFFFIIFIIIIIIII',
    'FFFFggggggxxrrrrrmIgrrrrrrmummmmmmummmmvgrmmmrrrrrrrmummurrrhIrmmmmhhhmmmmmmsmmuhmmmmimmmmmOOOrrgOOrrhoxrOOOOrggOOgggggggggmIggFFoogoFFFFFFIIIIIIIIIII',
    'FFoggggxrrrrrrrrmxrrrmmmmmrmmmhhmmmmmmyommmsusmmmmmmmmmmmmmmxmmmrrmmmmmmmmmmmmmmmmmmmmmmmmmmrOrrOrrrrrmxrgOgggggOrrrOggrOgggOFoggggggoFFFFFFFFFIIIFYII',
    'FFFggggggxrrrmgrrrOOrrrrrmmmmmmmmmmmmhxrmmmmmmmmmmmmhmmmmmmhrmmmmmmhmmmmmmmmmmmmmmummmmmmmumurOmmmuurOrmFggggggggggggggggggggmrFgggggggggggFoFFFFFIIFI',
    'FooFgxgOrrrxogrrrrrrrrrummOrrrrsmmmmhFmmmhmmhmmmmmhhhhhhhmwruhhhhhhhhhmmmmmmmmmmmwoummmmmmuuurrrrrrrrxxrxoggggggOOOOOOOOgggggggOgoggggggggggggFFFFFFFI',
    'FogggxggxmxxgxrrrrrrrrmurmurrrrmmmhmrmmmhhhhhhmmmmmmhhhmmhzghhhhhhhhhhmmmmmmmmmhmhouuuuuruuurOOrrrxgrgggxugggOOOgOOOrOOgggggggggggggggggggggFFFFFFFIII',
    'gxgxxggrroxrrrrrrrrrOOrmrmmmrmmmmhmrhhhhmmmhhmmmmmmmmhhhhhmrhhhmmhhfhhhhhhhhmmmmsmmrrrOOrrrOOrOrrurgggggggmoggggggggOOggggggggggggggoggggggFFFFFFFIIII',
    'ggggxrggxrrrrrrrrrrrrrrrsrrsmmmmmmummmmmmmmmmmmmmhhhhhhhhfxmhhhhhhhhhffHfhhhmhmmmmhgmmmmmmmrrrrrgxggggggggOrIgrxxggggggggggggggggggggIFoFFoFFFIIIIIIII',
    'FFogxIggxxxgxrrrrrurrrrrmmmrmmmfxrmmmrmmmmmmmmmmmhhHfHhHhfxhhhhmhhhhhhhhmmmmmmmmrrJgmmmmmmmmmurrrrOOrgOgggxrrogxggggggggggggggggggoFFo{YFFFFIIIIIIIIII',
    'FFIFIFooogxggggxxrrrrummuummmmhorhmhmhmhhmmmmmhhmhhhhhhhzmmhhHhhhhhhhhhhhhhmmmmmmmmxrmmmummmmrrrrrrrrrxxrrrxugFxgggggggggggggggooFoFFFFFIYIIIIIIIIIIIY',
    'IYIIFFFFFFoggggggrrrrrrrmmmmmzImmmhhhhhmhhmmhhhhhhhhhhhhvghhhhmhhfhHfffhhhmmmmmmmmmmrurummmummumuurrrrrrrrrxrmIgggxggggggggggggoooFFFFFFIFVYIIIYYYYYYY',
    'IIFFFFFFFFFggggOgrrrrmurmmmmhgxhhhmmhhhhhmmhhhmmmmmmmmhyxxmmmmhmmhhhhhhhhhmmhmmmmmmh|rurruurrrurrrrrrxrrxxrrrumxxrOOOggOggggggoFFoFFIIIIIIFYSRYYYYYRRS',
    'FFFFFooFoFgxggxOOrOOrrrrrrmhgssrmmmmmmmmmmmmmmmmhmmmmmmhFmhhhhhmhhmhmhhmhhhhmmmmmmmmIrrrrrurrrrrrrrrrrrrrrrrrrrmorOOOOgOggggoFFFFFFIIIIIIIIIIRRYYYYRSS',
    'FFFFFFFoooggxxxrgrrrrggrrmmorrssmsmmruuummmmmmhhhhhhhhhmrhhhhhhhhhhhhhhmmmmmmmmmmrmmIxrrrrrrrrrrrrrrOrrrOrrrxrrrmggrxgggggoooooFFFFIIIIIIIIYYYYRRYqRRS',
    'FFFFFFFgggooxxxrrgrxxrrrwmgrumsrrruuumsrrmmmmmhhhmhhmh}ohhhhhhhhhhhhhhmmmmmmmmurrrumFguurrrrOrrrrrrrrrrrrrrrrrrrrmFgxggggggoFFFoooFFFIIIIIYYYYYYYSYYYR',
    'FFFFF{oFFoxxxxxrrrrrrrmhr|rrrmmmmmurrrrsmmrummmhhmmmmhm|hhhhhhhhhhhhhhhhhmmmmmmsmuumxorrrrrrrrrurrrrgrrrrxrrrrrrrumFggrxxxggg!F!oFFFIIIIIIIIYYYYYISRRY',
    'IFFFFFFFFF|gxrrrrrrxrfxIxmmmmrsmmurrrrurrrummmmmmmmmmyorhhmhhhhhhhhhhhhhhhhhmmmmmmmmmFrruusrrumurrurrxxrxxrrrrggOrrrYggggggggggggoFFFFFIIIIIIIIYYYIYRR',
    'IIIIIIIIFFooogxxxxxxrmY{rrrrrruuuuruurrrrummmmmmmmhmmhImmmmhhmmmhhhhhhhhmmhmmmmmmmmmzxrumuuursmuurrrrxrrxOrrxxxxOrrrgYogoooooFFFFoFIIIIIFIIIIIYYYYYYIR',
    'IIIIIIIFFFFFFo|xxxxrgI{xrxxrrrrrrrrrrrrrummmmmmmmmmmhuxmmmmmmmmmmhhhhmhmmmmmmmmmmmmmmuxuusrurrrrrrrrrrrrrOggxxxxggggggYooFFFFFFIFIIIIIIIIIIIIIYYYYYYYY',
    'IIIIIIIIIIIFFFF{||xrq|xxxxxxxxxxrrrrrrrrrummumsmmmmmzIrmmmmhmmmmhmmmmmmhhmmmmmmmmmmmmhxrurrrrrrrrrrrrrrrggggggggggggggFYFgFFFFIIIIIIIIIIIYYYYYYYIYYYYY',
    'IIIIIIIIIIIIFFF||rxYFxxxxxxxxxxxxrrrrrrrrmmrurrurrshr|mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmh|rrmrrrrrrrrrrrrrrrggggxxggggggggFIFFFIIIIIIIIIIIYYYYYYYYYIYYYYY',
    'IIIIIIIIIIFF||xxuFSIxx|xxxxxxxxxxxxxrrrrrursmmmurumhFrmmmmmmmmmmmmmmmmmmmmmmmmmmmumurhF|rrrrrrrrrrrrrrxxxrxrxxxxxggggggsYYFFFIIFIIYYYYYYYYYYYYYYYYYYYY',
    'IIIIIFFF{F{{||xrrIF|xxxxxxxxxrrrrrrrrrrrrrrrmmmmmmhr{mmmmmmmmmmmmmmmmmmmmurrrrrrmruuumo|rsmrrrrrrrrrxxxxxxxgxxggggxgoogx|IIFFFIIIIIYYYYYYYYYYYYYYYYYYY',
    'IIIIIIII~{{{{{xxY|xx|xxxxxxxrrrxxxxxrrxxrxrrrummmmzrxmmmmmmmmhmmmmmmmmuuurrrrrrrrrrrrmr|xrrrrrrrrrrrxxxxxxxxxxxggoogFoFooxIIFFIIIIIIIIYYYYYYYYYYYYYYYY',
    'IIIIIIIF{{FII||I|||||||xxxxxxxxxxxxxxxxruummmrrurmyFrmmmmmmmmmmmmurrrrrrrrrxxxrrrrrrrrmIxrrrrrrrrxxxxxxxxxx||||oooFFFFFFII|IYIIIIIIIIIYYYYYYYYYYYYYYYY',
    'IIIIIIIIFIIIxIY{||||||||||xxxxxxxxxxxxxrrururrrrrm{|rrrrrrrrrrrrrrrrrrrrrrrxxxxxrxrxxxmIxxxrrxxrrxxxxxxxggoo|ooFFFFFFFFIIIIxYIIIIIIIIIIIYYYIYYYYYYYYYY',
    'IIIIIIIIIIF|IY~{{|||||||||xxxxxxxxx|xxxxxxxxxxxxxmIxrrrrrsrrrrrxxxrrrrrrrrrrrxxxxxxxxxsx|xxxxxxxxxxxxxxx|||{FF{IFFFFIIIIIIIIISYIIIIIIIYYYYYYYYYSSYqYSS',
    'IIIIIIIYYI{YYII{{{||||{|{{|xxxxx|||||||xxxxxxxxxrr~xxxxrrrrrxxxxxxxxrrrrrrrrrxxxxxxxxxxrIxxxxxxxxxxxxxxx||||{FFFIIIIIIIIIIIYYFSqYYIIYIYYYYYYYYYRSqYSSS',
    'YYYIIIIIF¡YSYII~I{{{{{F{|{F{{{||{FF|||||x||||||xhIIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx||xxxrIxxxxxxxxxx|xxxx|||FFFFF{FFIIIIIIIYYYYIVSYYYYYYYYYYYYYYYYYYRSS',
], {
    "0" : -15716200,
    "1" : -15191912,    "2" : -15191904,    "3" : -15189856,    "4" : -15716192,    "5" : -15191920,    "6" : -15189872,    "7" : -15191928,    "8" : -15716208,    "9" : -16246680,    "!" : -16246712,    "\"" : -16246704,    "#" : -16246696,    "$" : -16246688,    "%" : -16244640,    "&" : -16244632,    "'" : -15720344,    "(" : -16244624,    ")" : -15720336,    "*" : -15716224,    "+" : -15718280,
    "," : -15718272,    "-" : -15720328,    "." : -15718264,    "/" : -15718256,    ":" : -16248744,    ";" : -16248752,    "<" : -16773056,    "=" : -16248760,    ">" : -16248768,    "?" : -16773064,    "@" : -15716216,    "A" : -15716232,    "B" : -15718288,    "C" : -16773072,    "D" : -15189864,    "E" : -16244616,    "F" : -16246720,    "G" : -16244648,    "H" : -15718296,    "I" : -16246728,
    "J" : -15716240,    "K" : -15189880,    "L" : -16248776,    "M" : -15714160,    "N" : -16242568,    "O" : -16244656,    "P" : -15187816,    "Q" : -15720352,    "R" : -16248784,    "S" : -16248792,    "T" : -16773080,    "U" : -16242576,    "V" : -16248800,    "W" : -15187808,    "X" : -16773088,    "Y" : -16246736,    "Z" : -15187824,    "[" : -16242584,    "]" : -15714168,    "^" : -16242592,
    "_" : -15714152,    "`" : -15187800,    "a" : -15714144,    "b" : -15714176,    "c" : -16771008,    "d" : -16771000,    "e" : -16771016,    "f" : -15716248,    "g" : -16244664,    "h" : -15718304,    "i" : -16242600,    "j" : -15714184,    "k" : -16771024,    "l" : -15712120,    "m" : -15718312,    "n" : -16773096,    "o" : -16244672,    "p" : -16244680,    "q" : -16246744,    "r" : -15720368,
    "s" : -15720360,    "t" : -16242608,    "u" : -15718320,    "v" : -15189896,    "w" : -15716256,    "x" : -15720376,    "y" : -15191960,    "z" : -15191952,    "{" : -15722432,    "|" : -15720384,    "}" : -15189888,    "~" : -15722440,    "¡" : -15722424,    "¢" : 0,
}, 4);
			return get(0, 0, 600, 335);
		},
		city_1: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                      !"#$%                                                                                                                                                                 ',
    '                                                                                                                                   &\'\'()))&***                                                                                                                                                              ',
    '                                                                                                                                 +),-........-                                                                                                                                                              ',
    '                                                                                                                                &/0-..........-)1                                                                                                                                                           ',
    '                                                                                                                               -((0-....--....-(2                                                                                                                                                           ',
    '                                                                                                                              3456///((,,,,,(((78#                                                                                                                                                          ',
    '                                                                                                                             9:;<448###$$$$$$$#"!;1                                                                                                                                                         ',
    '                                                                                                                           =:>?@ABCDDDDEEEFDDEDGHIJ                                                                                                                                                         ',
    '                                                         +KKKKKLKM                                                         "N>OPGDDDDDDDEDDDDDDFJOQ                                                                                                                                                         ',
    '                                                         MRSRRRRR=                                                         QTUOHPJCQQCCCGCGCCQJQJVJW                                                                                                                                                        ',
    '                                                         MRSSXXXS=                                                         Q:YHJZCCZZCCBDBBCCJJCCCBW                                                                                                                                                        ',
    '                                                         [RSSX]SR=                                                         ^D_```Waa__Wb bb__a_aa_`b                                                                                                                                                        ',
    '                                                         [cSSSSRRd                                                         :eHHff!8%%,))-))))M)!ghC                                                                                                                                                         ',
    '                                                         [cRRRRRR2                                                         :ijTk;;l,0//,0,/,00/kmn:                                                                                                                                                         ',
    '                                                         [cRRRRRRd                                                         oigTlk;l8/77/((//((pqrmf                                                                                                                                                         ',
    '                                                         [cRRRSRR=                                                         oggTs<tuulpp8888884nrvrf                                                                                                                                                         ',
    '                                                         [cRRRRRRK                                                         ogiTlwk8p8///////8lnrrrxa                                                                                                                                                        ',
    '                                                   #     [cRRRRRco=                                                        oiiT8<<887/7////lySrrrmz{                                                                                                                                                        ',
    '                                                  [s     [RRRRRRRyK                                                        oiiT88487//l55plq||rrnn}~9                                                                                                                                                       ',
    '                                                  2o     [RRRRRRRco                        1oK             ¡¢              oijg8<£8///588l]¤¤n¤rrnJ}}                                                                              F¥F¥QQQQQQQ¡QQQQ¥                                                        ',
    '                                                 [Ky¦    [RRRRRRRco                        [Ry            1oo2  [#2        ogig8p§8(/555lq¤m¤]]nnnHxz{                                                                             ¨N©©iN::TNN:F::Q^                                                        ',
    '                                                 2cco1   [cRRRRRRco                        dRc¢           2RRo=1¨RK        ogigl888(/5uyS¤mnªgqªª>x@«¬                                                                            3QN¢®T:QQ:¨^Q©Q¨¥Q3                                                       ',
    '                                                 2Rcc1   [RRSSRRRco                     #ocRSRyoK        ¢oRRRRR¯RRo       oijgo488((lqnnnª>k<RªO°±²?{                                                                          ³FCCCF¥C¥FF©DDDF¥CCQQ3                                                      ',
    '                                                 2Rc´1   McRRRRRcco                     KRRSSRcoK        2oRSRR]]RRo       QQGDGFFFEEFGGGGGGDFGZAµ¶²@~                                                                         Fijjj····jjjjjjjjjjiij¥                                                      ',
    '                                                 2Rco1   %cRcccccco                    +oR]XRScoK        2RXRSSX]]Ro       ::PP::::::::PPPPP:HHHH¸@@z`                                                                         3ii¹iii¹Tiiii]]]]]]]]]¡                                                      ',
    '                                                 2RRy1   2cRcccycco                    1oR]XRXcoK        2R]RRSR]]Rs       Niºjjjjjjjjjjjjjj···jj»¸@x                                                                           ¹NNTi:Q!oooRRRRRRR¯]]¨[                                                =    ',
    '                                                 2RRc1   2cRccRoyco                    1oRSSSRcoK        2R]RRRS]i¼#       Rij½¾¾¾¾¾¾¾njn¾¾¾¾¾¾¿¿¿UOx                                                                           ·oN½½o#K<KK´RRRRRRRRRRRc1                                            ¢oy=   ',
    '                                 ¡               2Rcc1   2cccccycco                `   1oRRRigRRRK¡"#    2cSRRRR]gRK       ¨QGCCCCCCCCCCCCCCCGCCCCJ¸x                                                                           :KR½½¨2####locRRoocyRRRc1                                           ¢Ko´sÀM ',
    '                                =jQÁ3  1%[1+++   ÂlsR[   2cRcccyycs               ÃGa  1oRRijiigRRRRo    2cRRRRR]RRs       ¨¨Q:HHH:Fdd"""""#="::::CJ{                                                                           C"!TT¡2#$$#8KKK<KKoooRRc1                                           #oo´oo# ',
    '                               ©ijjj:©=oRcosssLLsKLs]%   2cRcyyoycs     ÄF:3     E}GÁa 3oRg>>gTTRRgR¼    #cRRSRR]Rco       oNjrvvrrl//555Å588p¤rrrQa                                                                            ¥F©©Fdd#$$d(#KK"KKK!¨occ[                                           #ooooo# ',
    '                              :¾R¼oKKlsoyyccRX]]ÆÆÆÆÇ%   2ycyyyoccs    Qj¿Èj©    ÁBEÁEaF:HHHHJJP:::¨Q3 `3KcRRRRRRRccK#%    oNTÉÉÉrry5/55Ê5578pnrrmQ3                               %                                            =2%M222((2)2$oi#<oKKoycR[                                           Àooooo# ',
    '                         =d2MMoRRgRcRX]]¾·ËËËËËËËËËËi[   2ccyyyyccs    Qjj¾¾F    _Ì_Wa_aÁÍEEEÍÍÍ©E©ÁÁWaGPNRRRRRcRRcRoÎ¦    oNT?Érrr¤y//65558/8nrmmQ`                               ¢                                            =d2%2((((22(R¾|]]RKKoyy2                                            Àoocoo# ',
    '                     1  MoyosyRXiÏjj··ËËÐÑÑÒÓÒÔÔË·ÔÔR[  MKccyyyyyco    ^ii·¾Q    bÕbaQQ"FÁ%%M%3311dE ©Qejjnn]RRcRccRys#    oT>?Ïrrr¤<(8555p588nrmmQ                                2                                            F=22$####dd#ir½½½]oKKoy2                                            Àoocyo# ',
    '                    [cssscRR]¾¾¿ÖÐÐÑÒÔØÙÚÚÙØÛÚ¹iRcNÜN[ Mlycyyyyoyco    ^ji·¿N2ls=   ©r½ÝyFÞßàß2%áál¼ K]¿¿¿È¿¿iRcRcc]ys#    og>ÏÏrÉrSp(55llll58S¤rmQ              ¡o#               =                                            ¥=dd#####=#"i¾¾r|¾]KKoco1                    KKK2              ©d   #oocco# ',
    '                [R88KycXÆ|ÈâÔÑÔØØÙÔÔÚRyãääy¼=5ääääoÜN[ oycyyyyyoyco    Qij¾½¾ooo=   ©½½Xå¡Þæàß%%ááãN on¿¿¿ÏÏÈ¿]cRccgosKL1  og>ÏÏrrry8/8558555l5SrrQ         ¢   1Kc#               K[                                           F=2M$$(((##4]r½½|]R#Kycy1                   Koss#              %o   ÀooooooK',
    '              ¢%#Ryc]]·ËËÔÔØØç¹NooR¼ClS|ÇÝSodÊèèééoÙN[ cRcyyyyyoycy#   ¨¾½½ê¾yoo=   D½Så8¡0ààæ%Máàå¼ 8qr¿¿ÏÏÏ¿nRcycqoslsM  ox¸ÏÏmrr]</555555åqlyq¤Q         #   %ocK               oK                                       222=¥#2¢##$$###lnrrr½]o#Kocc1                  1ocos#              Qg1  Kooooooo',
    '            [=oycRi·¿ËÔÔÔ¹ÚÚTNyåäëìl©5ívîv¤o2ÊèèèèyÙN[ cccyyyyyoycccM  :¾r½î|yos#  `EiK8$"2-0-%%ïï8!Wd!Tj»ÏÏÏÏÏigRRgosssM  ¼xzÏnmmrrk7888555uglÅlRQ©[       K   #oRo2              Ry%                                      ccco¡#ddK###8#"R¾||r½]K"Kocc1                  [ocos#             1gn3  !;>>kooy',
    '          ¡oyyc]¾¾ÔÒÔÙÚÚTðgRåñññìììÅ³ÅS||ò]s¢ÊèèèóyÜN[ cccyooyosyccc2  ¨gRrv|yoo¡ÁW3©G=FFFddd©©©©©dFDF©EZU»ÏÏ»»ô?nRRosslM  xzxjªnrrrg888888884888KQ:R!      Î  %RRRo2              Rc2                                      ycco¡###888KK#K¾|||rri¨¡Kocy1                  [ccos#   N         []¿da}hõ«ögkkk',
    '        ¢KoyS¾ÈâÔØÙØjøãååìRRãääììììÅ©åðùäÝ]o2ÊëìììyÜ¼[ ycyyooyosycccsKK]¾]¾½|yooKEbbE¾kyk¨8666dd66l¨ag¾nj¿¿ú¿¿»»únRyosll[  hO@rnnmn¤ng88855/848555F!yo      o [oRRRoK             dRRo#1                  ¢                 cccoF#d2####8=¡½½½½½r¾i¡Kocy1              1## MccosL   ¼         3j¿OO@I«ûüÉ??O',
    '      ¢2KcXi·ËÑÔºTÚ¹yìììììRRãäìììììÅ³äììäðøo25ììììyÜN#=ycyyooyosycNNNNRjjji¾¾Roo¡_b ©ò||]¨/ýýþ%%0þão i½rr¿¿¿¿ú»»¿iRyosll#2d>¶¶?Ïmnnn¤¤Sp/55885555lFQco      o 2RcRRcs2           ¢oRRcl#M                ¢ÎM     %%%1       yccoF####8LK8¨g½½½½½½r¾¡Kocy1             1Kos=LcRosK¢¢¡iF       `~U@?@@«ûûü«««@',
    '     %cyR]¾âÑÔºÿNãÚRùìììììRRãäìììììÅ³5ììììão25ìĀìĀcÜNoRgcyooooosyRT¹ºjº¹ººººj¾yo#   ©½½òr¨6ßàßM1ààåo g|n|¾¿¿¿¿¿ËjRycyslsok;Oāā¶IÏÏ¤¤mrrl655555555lF¡cy     1o1#ccRRcosM         %sR]RyslL[       1     1=RR¢    %#oÎ¢       yccoF¡K¡KKKK#Rr½½½½½½½¾¡Kocc1             oRRRRRRXossRij¿¿3      AzxzOO¸@??ú@¶Ă²',
    '   ]]cR]ÈÖÑØØçøììù¹RùìùìììRRãììììììÅ©5ììììðy25ìĀìðRÛoygÉgyosooosyRTjË¿ºTºjjT·½cs=   ©rr½½!o6áßMMààÅo g]kRnrrÏ¿¿ËRyccysloyg@@āăāă@?mrmnm<855558Å55l©¡Rc     dyKoRcRRcooM         #RX]Rcoll¢              %RR%      #¢        oycoF¡KKKKKK$¼|½||||rr¾¡Kocc1      ©¨¨::::]|||]]¾|cso¿¾¾êĄ©     UUUUxUUUO»UUÏ@ā@',
    '  LRX]¾ËÔØÙRcãìììù¹RùìùìììNRðìììĀìðl³Åììììðy25ìĀìðRÙohOr¿nRossssyRj¿êêj·¿¿¿j¿½cs#   ©½½½¿QRlßąd¢áá5< KäÊl]rr>njeNcycossyyg@xz@«zAZCQGGGFÃFFFFFFFÃFEQRc#   Mscogi¯RccosM         ¡RR]Ryosl¢               ¨!                 occo©FQ!QKKK4¡KoNi]NoR¾¡Kocc1    3N¾½½½½½½îîîîîvvîRlo¿¿¿½ê©    PúVYĆćĆYYĈĈYĆ»ûûö',
    'M#cXi·ËØº¹ÚyĀìĀììù¹RðìììììRRðììðĉððl³äììììðy25ìðĀðSÔ>O@ôú¿nRosssyRjnr½j¿¿¿¾j·½cs#   a:::P©Fd1M3`**%© %)%%FQQĊQCBQoycsssyyg@UOôûUHPPJJJJPPPPPPPPPPPJ:RcoM  2ycRj¿¾RccosM         ¡RR]Ryssl¢               "#                 oycoQP:::K¡KK##KoRRl¡on"Koco1  3¡NĄĄĄîîîîîîîîċîîîîRlo½¿¾Èê©   aºËČćčćĆĆĆĈYĆĎĈ@ûö',
    'cR]¾ËØÚÚRøÚãìĀððìð¹RðððððìRRãìĀĉďĐđl©äĀĀììðy25Āðððqú??ôĒúúr¾csssyRjNn¿j¿ÈÈjº·¿ys# b`WaÁÍEaaa_WW```W__W_a_W``aaaÍG!ycssoyygē¾j»?»jjjjjjjjjjjjjjjjjjeNRco%  2ccR¾½¿RccssM         ¡RR]RysKKM               d¢                 yycR¹TTTN!KKL##Koool"o]=4ocK   iêîîêêêêêêêêêĄîĄĄîêRsc½¾¾Èê©   FºĔĆččVVĈĆVVYĎĕĖ@?',
    'c]½ÐØÚyðíÆÚãĀĀðììð¹Rí½òÇøðRRãìðíòòíl©äðððìėc(äðððqÏ?öúúÉêÉÉÉRsssãRj¼j¿j¿êêjj·¾yy¡_ÁÁD::eTTTTTeºjºTTeeHeTºTeHPeeeiRoossooyyRnj»ö¿¾jj¾¾n¾¾¾¾¾¾¾n¾¾¿¿CQccy%  2ccRn¿¾RccssM         KRR]RysKKM  [¢           =[          ¢221   oycRN¾]ocoolK8#KloosKNn#8sod  ½ĄîîîĄêêêêêê½êêĄêêêêRsc½È¿Èê©  P»ĔĔYčĆêîËZ¿½ºĎčµĘ¸',
    '·ËÔÔ¹yðÝ|¾¹ãĀĀððĀð¹iÝòvÝĐðRRėøÝęòòíl©äðððøRTPNN¼¼UUĚµ@?@@?úÉT:e:HeeeeUVVººeHeVeHYYěPYH¨!!PP¨KK::K"¡!P!K!QPe>¼::eRcoolsooooo©JĚxGDDDBBDGDDDDDDGGGGGÍFooo#¢©¡ooo¼NNoRRss#+       2oRRSRysll82d[            ¢[         ¢KKK#   oyyoG:Ĝ::¨!!K""KooooK!N"KooK  êĄĄê½|i¼¼¼¼¼¼¼¼¼¼R¾½Rscîîêîî©   JĔĔĆĎĆ½î¿ć½|TĎčĈzĈ',
    'ÔÔØ¹yðíòòrĝãĀððððð¹iÇòò|ĉðRRėø|òòòÝs©ãðððSgVĞeeYYVĚĈ°ā@û²??»HYYYYYeeYYYYYYYYYYYYYČYĞeYNÎ#QQ¡88¡F222#C##¡!:>r¼¨:eRyo¨oK""¡¨oFJĚ}Ãddd%%©©%%%9©©©d=FF©Fo¨!KK¨¨¨¨!!!¨¨NiolK2       oRRRSRcssoos´1            ¢[         KoosL[  ooyoQTTTTgRRK##KKooK#¡!"Kscy[ êîê½|g<4¡¡44"""44o]½Rscî½½îê©   DËËĆĎĆròjć½|TččĈ¸ğ',
    'ÔØÚððø½òò|¯ððððððð¹Rí|½òÇĐRRððÝ½½òĠy³ãðððøgVĞeVČĞĞVĔ@ā²ööÉ»YĞĞYYYĞĞVĞĞYĞĞĞĞYĞĞĞYYYYĞVVË¼#QQ"Â8¡F222"Z"K:j»úġR:eºiR¨ZNQÍEBQ´iUz>yyyl,(68//875l8åãėėFQN¼¨¨oooo¨¨¼¼¨¨N¯oll#       oRRRSRcooRRoR[            d¢         oyosK2  ooyc]|½r½½½ro##88KKL##K##Kcc[ ½îê½n<4K!!!K!!KKK¼nêikRv¾]ê¿F   CËËĆčĆr|iZrrTččĈĔČ',
    'øiÚðĀĐòòò|ĝøðððððĢTRøĐ|½½|ºNãðS|½òĠy©ãððððiÑÑÐÐÐÐÐģĤĤô@IöĥĥÐÐÐÐÒÒÒÐÐÐÐÑÑÐÐÐÐÐÐÐÐÐÐÐÐÐÖË¨#QFd2Â¡"22#:U>»?úTjÉTjÖêniTĈjºVjjjii>õēkyuÅ(//7/887ll7yøėėF:½½rrr½½rr½½½r¼N]osK#       oRRcRcyoRXRRc[     ¡  1   ==         oyolK2  ooyci|½½½½½|o##Klll4##K##lcc[ ]½½¾]!#K¾½½½½½¾oK;?@@IûöÏnÉ??IOxU»ºĆĎĆ½ònY½rTččĆYY',
    'ĐiÚððøí½ò|¹øððĢððø¹RSÝ½½½½jRðøÝ|½½ďc©ãøøĐđiÓÒĦĦģÒÒÒĒÒÒĘûĤĥĦÒÑÑÒÓÓÒÑÑÓħÓÓÒĦÑÒĦĦÓÓÓÓÐÑÑĨÖN#QQ#(Â¡¡(2LNË»ôúÖ¿úú¿úÖÖÈ¿¿ĒģËĔËËË¿½Ï@?n¤SlÅ5585555ãyløøøė"N½½½½½½½½½½½½r¨N]oss#       occcRccRXXXScÀ1    o=[    #d         oyolL¦  oooci¾½½½½½|o##KlllK8K¨#8lcc[ ]½r¾]o8KròòòvnkogO@@@@I?»Ï??û?OOUHºĆčĆº»ºVË»VčV»¿»',
    'Đ¯Úðððð|½¾¹øððøĢĐø¹iÝ½½½½½·RøÝ|½½½ĩR©ãėøÝíjĪÓīĤúË»ĔħħÒīûĤĬÖÐÒÒÓĪÓÓÓÓÙVÔVĔĭÓÓÑĦÒĔVVÒÓÓÖÖN#GQ=Į2¡Q#2#NÖģúĥĬįĬúêĬêÖêêêÖÖÖÖúÖÖĬċ?O?rrnÅååÅ555l5yøyøøøø¡:]]]]]iii]]]]i!¼]ossL       ycccRccXXXXSco#    o=     #d        =RNolL#  oooo:ijij¾¾¾!##KKKKKLQP#8lcy[ Æ|¾n¾o8Kr½½½vqll»ô@@??ô»»»ô»??U»UUºĆčćYĈČVĔĔ¸VËê½·',
    'ĐRÚėððð||¾ºøĢĢøĐĐX¹]Çò½½½ò·RSò½½½½ĩR©ãðSòòģİÓģêîò|jÓÓÒīûöġîıÐÒÒÓÓÓÓÓ¹]îRTÒĭÓÓĦċÝyyÔÓÓÖÖN2DF¢++FQ=d=¨ÈêįċċċĬÖÖêĬêįĬêêÖÖĬÖêċċĄ»OÏrrq8ååååååÅlãė<øøøS¡¡¨!!!!!KK!!!¨!!NiRslKF      yccccycX]]]qco#    o      "=   F:eºËË»U¼lK#  sso!FPPQQ:TN"==#88848"F#8lyc[ ¾¾¾¾¾o8Kr½½½v]y<»?@Ï¿¿¿»»»»j»»jjË¿ĔĆččĎčćĚôô»úê¿ºP',
    'ĐRÚøððøėĐSÚcðøÝ|ď|º¾ò½½½½ò·iÝ½½½½½ĩR©ãøíòòģİİÒÖvîĲ¿ÓÓÓģöêvîîÐÒÒÓÒÑÒÓÈòĳò¿ÒÓÓÓÐîÝøėÔÓÓÖË¨¢DF¢++=Qd22#:¡gĬö»»?ĊTjU]gRi¯¾¿]]¾¿]>O¿r]ylååå5ÅÅlåėy<ėėėø"¨iniiiiiiii]nii¾¾Rok>xĴĴhĊ  cccccycX]XXSco#    o      ":ePCeVeeVUUº¼lL#  sooyin¾¾¾¾|¾o""KKKKlK8K#Kloc[ ]]n¾no4<|½ò½½òrj¿?@¸JBBBGGCCZZZZHºĔĆččĵYO?@ĶVË¿¿jP',
    'ĐRÚøĢĢĐðĢøÚøððí|ò½º¾ò½½½½½·i|½½½½½ďR³ãøíòòËİİÒÖîîò¿ÓÓÓÒöêvvîÖÒÓÓÓÒÒÓÖîĳîÖÒÓÓÓĦîÝėyÔÓÓÖÖĜFCCF©©FQF"FFCF:»ÉúúÉj¿Ö¿¿¿|r|¿Örr¿¿]h>r]yåååååÅÅlåyėy<SSøS¡¨]rr||||r½r½½rTi¾Ryg?O?ķ?UffªgRcRycX]]]Syo#    o1 [MM2KiºVeeeeeeeVº¼lL#  ssoyn|||rr||RK"oosooKKK"Koyc[ ]]¾¾noKKo¼¼¼NRgn»?ôYTTT:GBBHTTjZJUĔĆčĆeO?öûô»j·ËºP',
    'ĐRÚøĐĐĐøĉqÚSĢðĢÇò½º¾½½½½½½jin½½½½½ďR³ãøíòòËİİÓÖîîò¿ÓÓÓÒúròò½ËÒħĪÓÓÑÓÖîııÖÓÓÓÑĸî]yyËÓÓÖÖTQQQQ¡¡QQQQCCC¥Q:jÖê¿¿êêÖê½½½½ÖÖċċê¿n¼:j<lluuåll<llyyu<gkyy"!]½½½½½½½½½½½½¨N]R¼hOUO»OzO??>NooooNgggRoo#    o22sooooiºeeeeeeeeVUolL#  sssoTiiTiiig¼¡#<llslKKK"Koo#  ]]¾¾¾o4K#d##""!gjÏ»Ĺ¾òr]JBB¾½½vPJUĔYćČÉ?ûööö?ºË·º:',
    'ĐRºSĐĐíqn¿ĔSĐĐøĐÇ½º¾½½½½½rji¾½½½½½|R=ãøíòòËİİÓÖċîîÖÓÓÓÒÖSíÇRºħħÜĺÓÑÓÖîîîÖÓÓÓÑĦî]ySÐÑÒÖÖN#CQQ##¡Q"#2=C=Â#QTN"$oTTgRcccjÖòv½Ë]¼QQ$(8<t<ĻĻļt8§4"ĊĻ"2%©fÏê½½r½½½½½½½r¨¼iNQCCCJJQJU??UPCCCCC}xHJJ¨#    ooooooooiTeeHeeeeeVe¨KKL1 lssKDCCCCCCGCF=###8###L""KK   ]]]¾¾<#4K44444!Ľ¿ú¸BgÝSgJBG¾òî½JJUºYĈĔ?I??öö?º½¿¹:',
    'eĞÛV>ēOõ@@zēªSøĐÝ½º¾ę½½½½|j]Æ½½½r||R©ãøXn|ËİİÒËjºjĔĪÓÓÓÐTTUTĔÒÓİÓÓÑÑÔº¹ºËÒÓÓÒÐjT:TÐÒÓÖ¿N#QJ¡Â(FFd22=C#Â#¡·Ö¿¿êÖÖÖêêêêÖêêêêÖîTQK8<kĻļľľľ¶¶ĴĴOOOklpl!>ÉriNNNNNNNN¼¼!¼gRQGGGCCCCJT»PCCCCCCJJJJP¼#    ooooooooi·jeeeeeeeVºolKK##lsoyijjjj¾¾¾¨##8LKKKKKK¡Koo   ]]n¾]oK4""44444!n¿xĿg|r]JĿBnvîrJJTºČČOúööŀööú»ê¿¹:',
    'ČČČČĔôû@²@@ô»TTNTºČ·½½r½½|¾]Æ½½||||R=ãSgº¾ËİÓÑģĔĔËÔÓÓÓÓÐÔĔÔÔÒÒÓÓÓÒÑÑÔĔºĔÔÒÓÓÒÑÔĔĔÔÐÓÓÖ¿N#QQ"ÂÂ"F(22=C#K¼YôĤöĬĬúË¿¿¿¾¾¿êêîêêòTQ!<Ĵēļā²«²Łāû?ŀŀûē>gk>ÏķÉnggigggggggNgiRQGCJPP:P:eje:PPPP:::eeTNK   %ooooooooiË»eeeeººVºËioKloRkk;g¾r½½½½½½o##KlloRRol¡lyo%  ]]¾¾]oKKNRggRRRg¿¿xĿgòò]JĿBnvî½JJT»ºĔôûöööööúËê¿¹:',
    'ÛČČČÚÔĤģôû?ģÙÛÛČłŃĆºË¾¾¾¾¾j¹i½½||r|R=ciºńËÒÓÓÑÐÑÐĦÑÓÓÓÓÑÐĦĦĦÑÓÓÓÒÒÒÒÑÐÐÐÑÒÓÓÓÒĦĦĦĦÐÓÓÖÖN#QQ"#Â¡¡(22#C!h@Ņņ²ûöķÏUggRyy]r|òêrÝR!fĴēēO@?ûöŇ°öŀööûû?mqnēēķrr½½½½½½½½½i]¾NQGQTjjjjjjj·jjĜTiij¾jjjio21%¡coyccccyijºeeeeUTºj¿iRlo>?OOOOÏr½½½½½|¼"#lllo|¾RK¡Kocy1 ]]¾¾noKoròvòò½½½êúUĿT¾nTCĿBj¾¿¿JJUË»»û«ûû?ööúËê¿ºP',
    'ÚÛČÛÛÚĒģô@?ĔÛÛÛÛÛÛČČČČČČČÛĆĆĞ¿½½rr|RFR¿ģÒĦÒĪÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÒÓÓÓĪÓÓÒÓÓÓÓÓÓÓÓÓÓÓÓÓÒÒÑÓÓÖÖN#QQ¡8Â¡F%2Â#C¸ňŌĘû²ĂÉmmI@ēqøøėėėėōSSSgõōōōSªª>öā±@m?«ûÏ¤ŎøøėėøS|½½½½½½½ê½NR¾RQDG½vvîvvvòvvrP¿vvvv¾:giRcooRRcR]]]RRgiiN:QCCQT¿]cok>@²āûööû¿r|rr¾j:"#4##Kn¾N""KsRc[ i]¾|¾o¨º½vò½½½½òê¿ĚÍBGBGBĿĿGFDGBJU·VºÉöň±āôĬêËËËjP',
    '¿¿ËÚÛÚÙÔô@?¿ºÛÛÛÛÛČČČÛČĞČČłłĞÚÚºººÚĞěiËÒİīÒĪĪÜÜČńČÜÓÓÓÓÓÜÜńČÓÓÓĪÓÓÑÑÙČńńÙÓÓÓÓÒÜÜÙÙÐÒÓÖË¨2GQ=MM=FMMMdJôĘņŏņ²IŐőÝ¤qŎĉĉĉøøSSĉĉøSSqSSSĉÝŎ¤Œ²ňňIķÉr¤ÝíSSSSSí|êv½½½vvê½NgnRQBC¿½½v½vv½vv¿C·ËČČĞYĆYYPZZěěZZZZZZZZZZZZBœœŔœBĆZZZZĚŕņĘ²²²²ûÉ||rr|¼"#Kllo¾|iKKKocy[ ]]n¾]oKoròòòò½½½¿UAĿBBBBBBBBEĿBBJTjj»úĘû?úêêê¿¿ÈÈ¿',
    'vv½ÚÛČČÚĔôúrjÛÛÛÛÛČÚººÚÚÚÛČÛÛÛÛÛÚÛÛČĞºËÒńÒÒÓÓÜČ:HHVÓÓÓÓÓÚºĔUØÓÓÓÓÒÑÒÔºĔeÚÒÓÓÒÐËºUUģÓÓÖËKMDF©++d=+++¢JOĘĘīĘû?ĲĲďďĠĠĠĠĠĠĠĠĠĠŖŖÝÝÝÝŖĠ|ďďmķ?Ăň«öŗvďĠĠĠÇÇĠĠÇ]innnnnnni¼T]RQGC¾½½½½½½½½½¾FºÛŘřřŘŚŚŘřřřŘŘśřśŜŜŜŜœřŜŜŜĵĵĵĵĵŜśřřřřčŝŕŕňŁŁňûÉr||r|¼"#osoR||]lKsyyy[ ]]]¾¾oKKgiigggggjHBĿĿĿŔŔĿBBEĿBBBJTjj¿úûĤÉê½ÈÈ¿¿È½ê',
    'ĳĳ½ÚČČČČÛĔú|jÛÛÛÛÚÚj¾¿»»ºÚÛÛÛÛÛÚÚČÛÛÚÙÔÒńÒÒÓÓÙTySRTÓÓÓÓÒ]|v|ÔÓÓÓÓÓÒÓÈòòSiÒÓÓÑĨîòÝRÔÓÓÖ¿!MDC=M+=FM[[¢QU?êîÉķķvvŞŞŞşŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞòŞòÉII²ĂûöŒvŞŞşşşŞŞŞŞ]!¨oooo¨¨¨¨NiRQGCn¿¿¿¿¿r¿¿¿jCVČŚŘŘřŘŚŚŚŚŚŚŘřŘŘŠśśřřŘŘŘŘŘŘŘŘŘŚŚŚŚŘŘŘČĒµŕŁŁņĤÉ¿|||ncK#osoR|¾RlKloyy[ ]]¾¾¾oKK"""""""#TJÍÍBGBBBĿBBGGGBJTj¿¿Ëêöú·jjj·j·¿¿',
    'vv½ÚČČČČÛĔģºÚÛÛČÚÔÙËúËVČÛÛČÛÛÛÛĶ¸VÚÚÚÚØØÙģīĘĘûúrò|·ÓÓÓÓÒ½òîòģÓÓĪĪÓÒÓÖòòSjÑÓÓÑĨîò|SģÓÓÐÖTCCQQQQQJQQCCQÏġġŞķmďĲďĠĠĠĠšššššššĠĠĠĠĠĠĠĠĠĠĠĲÉķŒŀ«öŗòďššššššššşď¾¾|rr|¾¾¾gi]RQCCP::::::T:::VÔÐÑÐÐÑÑÑÑÐÑÑÑÑÑÑÑÑÐģĒĒÒÐÐĦÐÐÐÑÑÑÑÑÑÑÑÐĦĦĤûīīöö¿j¾¾¾]oK"soo¼¾¼!K!¨ooo[ ]n¾¾¾oK44444"44"TJÍĿj½|iJBBin]gCJTj¿¿Ë¿ÉÏTQQ:P:eºË',
    'òò½ÚÛÛÛČÚVZBœœœĎĎZVĒ¸Zœœœœœœœœœć¸¸ĆŢœBœœĕZĚ@ôĤöÉvò¿ÓÓĪÓÒ½vîòģÓÓĪĪÓÒÓÖĳòSjÒÓÓÑĨîòÝSģÓÓÖÖVCJQCCCCCCQCCQHjvĲ¤őŖŖĠššĠššššţĐãíĠĠĠĠĠĠĠĠĠĠŖŖďŗŗŀûķ¤ĠďĠššššššĠĩò½½½½½½½½rNR]RQGFGQQQCCQQQCJÚģÐÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑĦīŤÑÑÑĸÑÑÑÑÑÑÑÑÑťťÑÑÒôĘīĥöÉj:::::Q¡KsyR]|goKKooyo[ ]]]]noKK44444444jPÍBiòò]JBBnr||QJTjËËË¿úÏºjTT¿¾¹Tj',
    '½¿¿ÚÛÛÛČÛĞœœœœĕĹŦŦµŕµĹŔŔŔœŧŧŧÍÍć»¸ćœÍÍÍÍœœA¸Ĕ?ĤĤvvÖÓĪĪÓÒ½îîîÒÓÓĪÓÓÒÓÖĳò]jÒÓÓÑĨîrÝSËÓÓÖÖºZPPP:PPPP:::::ir¤ŖĠďďďďďďďĠšĠţð#ĉšĠďďďďďďĠÝííŖÉŗŀû?¤ŖĠíĠşşÇŖšĠď½r½½½rrr½rNN]RQFF:::::::NĜĜeÔÐÑÓÓÓØÔÔÔÔÔÔÔÔÔÔËÔÓÑĦÓÓÓÓĦÐÐÐÐÐÐÐÐÐÔºÔĔĔôôīīö¿UPQQQQQ¡Koc]||]RlKoycy[ ]]]]]o4Ko¼¼oo¼kNjPÍBgòò]JBBnòòrJJTj···Ë¿»jòjiĳòjT¹',
    'ººÚÛÛČČČČłěěĆĈŕ@@āāŕŕzĈYĆĆĆĆěĆYUôŕĚYYYYYYĈVVº»?öövÖÓÓÓÓÔêîîîÐÓÒħÓÓÓÓÖvò|ËÒÓÓÑĥî|Ý]ÒÓÓÖÖºP:Tjjjjjjjjj··¾|őŖďvîv½vîvòŖţţė#ĉšĠòîîîvîr¼gqn?ŗķ²ÉďĠÝo¾ııiXĠš|¾¾¾¾¾nn¾¾¾RinRQCQ½êvvvv½ò½êĄįĨÐÓÓÓÔÝÝ]]ÝÝÝÝÝÝÝ|ËÐÒĪÓÓťĸċîîĳĳîîòò|Rnª>ôīĒŕ?ngRRR´coKKoR]||nRsKsocy[ n]]]]o"!½òò½½½òvjZÍĿnîv|PBBiòv|JJTj···j»»j½igòrjºº',
    'VVÛÛÛČČČČĞeeT>ûûû??jOI»UTTTTTTTUO@UTNTTT¸ô»j¿úúÉÉúģÒÓÓÓĔjjn¿ÒÓÓĪĪÓÒÑjggjĔÒÓÓÒÖ¾gRnģÓÓÐÖT"PeĜQ!QQQf::QQNÝĠďrÖÖ½½vêÖ¿ĠŨíã8ĉšĠòòîĳîv|l<kĴûŗŗ«ÉÝíŖ¨nĳıNSţĠ]gTTTgiTTgTTTiT::e½½½½½½½½½½êĨĨÐÓÓÓÔSōkkãėėS|òÝkÚÒÒĪÓÓÒĨċîîîîvvòÝė<nqgÒÒÒĒ?»jj]RccoKKy]||||ioKooyy[ ]]]]]o4!|òò½òòòòjZÍB¾ĳî¾PBBi½òòJJTj····»»¿niijn¿¿·',
    'eĞĞČÛÛÛĞĞĞ:Q!h?û?ÏT::xHfQQ!!QQQhO?hQQQfĚ@?Ïj¿úú¿úúÐĦÒÓÓģËËúÖÒÒÓĪĪÓÒÒËËËËģÑÓÓÒÐËËË¿ÐÒÓÐÖiKPe:QQQQQQQQ:Q¼ÝĠĠrÖÖúÖêêê½ššíã8ĉũĠďòòvvò|l<t;ēŗŗŀĲÝíĠ¨jîîNSĠĠiTTTTTTTTTTTTTTNĜT¾¿¿½½½½½½½êŪĨÐÓÓÓºSy<<ååėS½òď]ÚÓÓİÓÓÒĨîîîîvvò|SyoRkRØÓÒĒÏ»ºjjNoooK¡o]||||gKKsoyo1 ]]]]]oK!||||½½òîjZÍBPH:JGBBHe::GJTj····jjºTT¹j¿¿ÈÈ',
    'jºeČÛÛÛÚÚeQFFĊ@@O>:QQQFFF¡Q¡¡"¡:>?H"FQJ¬O@O>nÏÏ¿úĥĦĦĦÒÓÐĦĦĦĦÑÓÓÓÓÓÒÓÑĦÐÐÐÐÓÓÒÑÐÐÐÐÐÒÒÐÖjo:e:¡F¨:NN¼:ĜQ¼ÇĠšĩêģģģÖêêòššţėKĉŨţÇďòòòò|k;kkªrÉŀòĠŖĠ:jòòNSšĠ]TT¹TTTTTTTTTTTTTT·¾¿È¾¾¾¾¾¾¿ÖĨÐÓÓÓºkå<<låėÝvvò½ÙÓÓİÓÒģĨîîvîîv½]kyyåå¼ØÓĒôj»ËË¾N¨ooKKo]¾|||RL¡lyy#  ]]]]]oK!]]g]]]¾|ºZÍĿÍÍÍEĿBGHZBZĹJT·Ë···jTTTTjË¿¿Èê',
    'îv½ÚČÛÚ½|NQFdGO>UTTi:FQF¡TTNNTT:Qēh:Tg>Uh°±z¿nn¿ÖÐĦīīÒÓÓÓÓÓÓÓÓÓÓÓÒÒÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÒÓÓÐÖi¨:T:"¡R|vòò¾:QN|ššď½ËËËÖúúrĠšţøėţšĠÝÝ|òvv½]Ý]qq|ķ²ŗďŖŖ¨jîòNSšĠÝ]iiiinnniiii]]nn¾r½½¾Ĝ:::::eÐÖÐÓÓÓÔSy<<ååSďvvv½ÙÒÒĪÓÒÒįîîvîîò|RuåuååoĺØÒģj¿Èê½¾i]g¼¼i¾¿¿¾¾RK¡oco   ]]]]]oK!K""""¡K4:ZŔBBBBBBGYÖVPËeeº·····jjj·jjê»¿ê¿',
    '½½½ÚČČČr|R^FdFxÏrr½no©FFQn]SS]]oFēH¨]ÆrúÏ@±ūÏ¿¿¿ÐÐÑÒÒÓÓÓÓÓÒÒÓÓÓÓÓÒÒÓÓÒÒÒÓÓÓÓÓÓÓÓÓÓħŬŬÐÖjRni:"QR|ò|ò½NQ¼ÇŖšď½½½½êêvòššĐl8Đţţãyqnòvò½òrªuÝķ²òSSŖ!iîîNSšĠÝiNNNNNNNNN¼¼Niii]¾¿jJQCQQQQ:ÐÖÐÓÓÓÔ]ėuoããÝòòîďqÚÒÒħÓÓÑįîîvîvÝykyãyėã¼ĺĺÓÒÒÒÒÒÒÒÔÔÔĔÙÔÒÐÖ|¾RKKoco   ]]]]]oK!gn¿¿¾NK4:ZÍBBBBBBBYÖËUVVº»¿¿·¿¿¿j¾½¿·Ö¿êĄj',
    '¿½½ËÚČĞºiT:F=FAj½îîòR©d=Q¾]]]||NFO:¨Ý|½êÏ@ă±Ïrr¿ÖÖÐÒÒÒÒÑÐÐÖÖÑÓÓÓÓÒÒÓÑÖĨÖÒÓÓÓÒÑÖģģĒŕŁŁīÖ¾g¤nNFQN|òďò½TQ¼¤ŖĠďêò½½½vîòšĠĐå#øŭţååyqòvòòîvrSÝrķĲSøţ!jîîiXššÝ]n¾nn¾nnnjnniiggj¿¿>}He::ĜTºÖŪÑÓÓÓÔ]ėyyėSÝ|]ÝSōVÓÒħÓÓÑįîîvî|SåSėėyėy¼ØÓÓÒÒÑÒÒÒÒÒÑÒÒÒÒÑÐ¿¾goKKsyo%  ]]]]]oK!nêîîn¼KK:CÍBHTT:GBZ¿Ö¿jVVº¿¿¿¿¿·jjò½¿ÈÈÈÈ·',
    '¿¿r¿ºÚĞVVee¡=FCRrĳîîi©d=Q¾]]Ýòòg"O:¨]|òvn@āā¿½r¿êêÖÒģģģÐ½½òîÐÓÓİÓÓÑÓÖîŮòÈÒÓÓÑĨîÉ?@ā±±²ĤÏg]|gQQ¼]vòòrTQ¼¤őĠďò|rrròòĩĠĠĐðKĉũţåãėSòvòòvîò|ďĲÉďSøţy¾ĳĳ|Ýšš]|îîòòîîîîvîî½ig>O?ô@¶¿¿»»¿¿ÈÖŪÐÓÓÓÔÝSyyėÝÝSååyyVÓÒÒÓÓÑĨîò½½Sãėōėėyėy¼ØÓÓÓÓĭĭĭĭĭĭĭĭĭÒŤÑË]]oKK¡looo%[]]]]]o4!¾½ê½RolKTZÍĿjvònJBBËêvvHYU·¿¿¿Ëjji½½½ÈÈ¿j·',
    'r¤nr¿jĞ¸OOĜF==F¼|ıîîi©d=Qi]Ý|Ĳ|¼FO:oÝĩvvr?¶ā¿½r¾êÖÐÒÒÒÒÑêvîvÐÓÓÓÓÓÐÒÖîĳîÖÓÓÓÑĥêÉ@ŁāňňāôÏn]¤jeQ:i½òĲ]:QhmrďďďĠďĠĠĠĠĠĠšĉy!íĠţãSÝSòvvòòvîòďďrrRøţŖĠůůĠĠšŨ]|îî½½½îîvîîî½iO@?ā±Ł«ö?@ûÉêêÖÖÐÑÓÓË|SōkSøėėėėėyVÔÒĒÓÓÑĨî½¤Sėėėėėyuėå¼ÓÓÓÓÜĪÓÓÓÓÓĪİİĪĪÒË¾]olKKsoooyR]]]]]o4KRNTUiyllTJÍĿg||]JBBËêvrPPU·ËËË·¿jNn½îį¿ºTT',
    '¤nnrmÏOI?Ïj¡==Fjîıîîi©==¡i]|òòòRFUf¨|òîv¿?¶ā¿r¾·ÖÖÐÒÒÒÒģêîîòËÓÓĪÓÒÑÓÖîĳîÖÒÓÓÒÒ@@¶ā¶¶āŕû?Ïr|i:Q!¼TN¼:^QUŗĲmmďĠĠĠĠĠĠĠŖţíyKĉĠŖoo¼¼NNRNNTTTÝďmĲíĉšĠšššĠĠĠĠ]¾½½½½½vvvòvêr>z¶@@āā@?I@²öÉêĥĥÐÓÓÓÔrď]SĉSSSėėø]ÙÒÒÒÓÓÑĨî|SSyėøōøėyĉė¼ØÓÓÒËÖÖÖÖÖ¿Ë¿ºČİÑË]ollKKsyyRR]]]]]]o4K¾|r½r|]lTJÍĿiò½]JBB¿îî½PJT·Ë··¾jTe¾¾¿įjTee',
    'n¤rrrm????ÏQFFF¾îĳîîn===¡n|rvòògFUf¨||òvr@¶ājr¾¾ÖÖÐģģÒģģêîîòģÓÓİÓÒÑÓÈîŮıêÒÓÓĒŕ±ăāā¶@@@²I?Éri:Q:::::PPPjÉĲ??m¤őď|¤¤őĠšţĐlĐĠĠRRRRRRRRRRRRÝďőşŖíššĠĠĠĠĠĠĠ]igiggiiiiij»ÏO@I??I@@@@@ûööĤĤĥÐÓÓÓÔ¿¿jgqqggk¼RiÙÒÒÓÓÓÑĨ¿iRR¼¼RkR¼¼gRTØÓÓÒÈ½Ĳòr||||gYİÑË]llllKsyoR]]]]]]]oK!||¤|òrnyTPBŔjòò]JZY¿îî½JJT·ËË·¿jjTËË·¿jºT:',
    'ÏrròrmÉ??ķ?f""fnêîvvn===Qn||½r|NFxf¼|]r½rO¶@nr¾¾êÖúģģīīģċîîıÐÓÓİİÓÑÓÖîŮıÖÒÓÓĒā±ăā@ňņ²@āā²örieTTTTTTTeejÉÉķ???mrÉ?mĲĠšţĐãĐŭũũšššššššĠĠĠĠššĠşŖţšŖĠĠĠŖŖĠţ]¼¡QQQQFFQQA°ā@?ÉÉ???ôŕ@?ööûĘĤĥÐÒÓÑÒËUUUUOUxVVVVĔÒÒÓÓÓÑĨÚVVºVVVVVVHVVVÓÓÓÒÈ|ÇÇÝÝÝÝ¤TĞĪÒËXyollKoRR¯]]]]]]]oK<]RyS|Ï>gjHBŔT½rgJY»Èê½nCJTËËËË¿¿¿·¿ê¿Tj¿j:',
    '@ôÉĲrÉÉÉķ«²@xfjjjjjjNF==¡TTggig¨=":Tiin¿¿zā@¿¾¾¾ĄêÖģģģģģĄîvîģÓÓĪİÓÒÓÖîîîÖÒÓħħŕ²āā@āāā±ā²ûÉrjTTj¿¾¾¿¿jTU?vvvêvvîîêvòďĠţĐyíũššššššĠĠĠĠššĠšššůííţo¾ĳîgSĠĠ]gRgggiRggRÏ@āāā@û±±āöô??öû@ā@ûĤģÓÒģģĤû²ň²²ĘúģÒÓØÓÑÓÓÓÑĨÒÓØØØÓÓÓÒÒØØØÓÑÓÓÒÈr|Ý||¤||TYİÓº¯êRlsn½½¾¾]]]]]]]oK<iR¼RjõăxjeZBQQQQCZZ¿UJCBJU¿ËË·¿¿¿êĄĄ¿TËêê»',
    'ŕ¸Ĕ»»@@¶ā²û²õĴ»h:::¼¼!!QQ::::::Q"¡QQQ!:TÏ@¶²¿¿jjÖÖÖģģģÒģÖÖÖÖÐÒÓĪÓÓÐÑÐÖÖÖģÒİŰŁāĘ²ŕô@@²ā@?öÉÉnTĜ¾½ê½½½jUO?ŗÉÉêvòòîîvêrŖĉė4ĉšŖ¤őőē¤mű¤őĠšĠššššĉĐţ¨nĳĳNSţĠ]iiiiiiiiin??@āā@ûŕā@É?@@ô@«ûûöúÙńčćµćŲŦųµŕ²ûĶğŘŘŘŘŘŚŘŘčŘŘŘŘŘŚŚŘŘŘŚŘŘŚŚŚŚŚĎj|||¤ÝÝ|TĆİÒº¯Ą¾gc¼RiR]]]]]]]]oKKooo;Oāă¶@VZBGGGGGĹZËeBGA¬z¿¿Ë·¾¿êêĄĄê¿Èêîê',
    'µĚVVĶ¸ŕăăā²@¸ĚHGDDDGQQPJCGGBGGGFDDDDEEDGĚĚŕûģj¹ºËģÐÐģģÒÒÒÒÒÒÒÓÓÓÓÓÐÐÒÒģÒÒħŰŁŁāĤĤĤĤ??û??úÉöÉÏTT¾½vò½rjTO?ĲÉÉêê½½òvêÖúmŎy!q¤¤Oēē¶ēIIIm¤¤¤őőĠďøėŖ¨nĳı¼cŭţ]]¾¾¾¾¾nnn???û@ā@Ę???ÉÉ?@ô?ûöĤöĔğčśŴčŴŵĵřčĶ@@ųśŵŵŵŵŵŵŵŵŵŵŵŵŵŵŵŵŶŶŷŵŵŵŵŵŵŵŵŸT|ÝÝÝÝÝ|TĆİÒjRĄ½ncKoooR¯]]]]]]oKKoo¼>@¶¶««¸ABBBĹBBBĹ»UAA¬µāú¿¾¾¾Èêêêêêêêêîî',
    'ĖĖĚYĚVĔ?¶ăľûUœŧŧŧŧŹŹŧœĎœŧŧŧŧŧŧŧŧŧŧŧŧŧŧŧŧŧŔĚĤĔVĞĞVÔÐÑģģÒÓÓÓÓÓÓÓÓÓÓÓÒÓÓÒÒÓÓħŁāņ@ûöööÉÉúĥĬöúöö»TTj¾r½½¾jTU?ĲvvÖÖË¿vÖģģú?ªqēI²@āā¶¶@I«III«@?ķrďcyŖ!jĳĳ¼cũţX¾îîvò½½vvúô?û@@ŕŕûû?ÉööÉÉööûô?ĶŚŠŠŘŘŠŘŘřřĈôĶčśśśśśśśśśśśśśśśśśśśśśśśśŠśśŠŘTÝÝÝÝ]S¾eĆĪÑjRĄ¿RsKooooR]]]]]]oKKgg>?ûûûû«@zBBBBGBBBĔ?I¶°z@É¿¾¿¿¿¿¿¿¿¿¿È½ê¿',
    '??ôĔĔ»Ëú@ă¶I»UYYĚVV¸¸??OĚVĈYĞYYYĞĞĞĞĞYĞČVz@«?ĔVĞeÔÐÐģÒÒÓÓÓÓÓÓÓÒÐÒÒÑÒÓÓÜÓÓÒģīĘ@ā@ÉöĬĬöö?I«ûĤúÏT¾½ê½½½jTUÏĲĲvîîËÔģÖÖ½|ŖÝÝķmmm¤¤nªq¤¤¤¤m??m¤ďĩÝíŖKiîvRSšţX¾vîvòvvîvv?@@ûĤööĬÉÉöĥĤŀġöööööúģÒÒÒÒÒÐÐÐÐģĘÐģÒÒÒÒÑÑÑÑÑÑÑÑÒÒÑÑÑÑÑÒÒÑÑÒÑÒÑÐËnÝÝ]ÝÝÝ|eĆİÒjiêioK¡KoooR]]]]]]oKK¾¾Ï?²²²@@?OGPTH:GBB»¿»U@«ŀÉ¿¾¿¿¿jeTTTºËË·È',
    '?OVVHYe¸@¶¶«?Ïe¸O@??@Ăû??ô¸T::::PPPPP:P:H@@@ŀ»jº»úÖÐģÒÓÒÐÖÖÖÒÓÓÓÓÒģÒģÖÖÖģģĦĥĤ?@ĤöĬĬöööûûĤÉööÉT¾êêêê½¿U>ķòòvÖÖú¿¿êê½ĠĠţĉmRkkoooo<oyyo¼hh¼R]òÝíŖ¡ivvgXĠĠ]¾òîòòvvêêġ@@@ûûĤöĤÉÉĬöĤööööĤööĬĥÐÑÑÑÑÑÑÑÑģģÑÑÑÑÑÑÑÑÑÑÑÑÐÑĭĦĦĦÑÑÑÑÑÑÑÑÑÑÑÐÐĔÚÚVÚºVºČğĪÒºNĄT!K¡KKK¨oR]]]]n;<!rÏI@ûû«@@??Ěj¾¾gJBBË½rÏ?I?¿¿¾¾¿¿jTj¾jT¿È¿Ë',
    'ĚAZZGBGćĚāā@?Ï¼xOIŀû²ă¶???>f"QQ¡¡FFF""""Ċx@@ö¿¾¿ÉÉúĒÒÒÒÐ½vîîÐÓÓĪÓÒģÒÖvîîêģģĥöööĬĬĬöÉÉööĬĬÉöÉ¿Tj¿¿¿¿Ë·UOķŗŗ¿»ôô?Ïnn¾ĠĠíøRooooooooooooo¼ooR]ĩíøŖ!TrÉ>]ĠĠ]¾½ò½½òvÉÉġû@@²ĘûûĤöĬöûööĤĤĤûĤĤöĥÓÓÓÓÓÓÓÓÓÓÒÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÒÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓİźŻŻŻŻżżżżĪÑ¹NĄ¹¨¨!!!¨¨¨N]]]]n>¼<¾?@@ûûûĘ@?É»¾½òiJBBË½ò½?@O¿¿¾¾¿¿jT½Ž½T¿Ąêº',
    'ŔBBBBBBÍĹžƀ¶?Ï:Q:Ïķ@²@ā@??Qd=FFF=d©©====="hÉÉÏjÏÉÉ@āņĒÒģ½òîvÐÓÓÓÓÒģÒÈòòvêúÓģĤġĬĬĬġöúêöĬĬÉÉÉ»¼NNTTeeĜeTz¶mķOxŕā±ƁfKsSŖţø4|ƂŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞůĉĐţ>Tx@āªĠĠ]¾½v½½vvÉĤûöĘā²öĤôúĤĤ?@?öú??û@ûŀúÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÑÑÓÓÓÓÓÓÓĪĪÓÓÓÓĪĪĪĪÓÓİÒËnêniigRRRRii]]]]Ï>h¼n?û@āā@ôĤöö¸n||gQBBË½||ÏOõ¿¾···jºTòî½Tj½½H',
    'jj¾¿¿¿¿BBAňûO:"=Q>ēôôIIOxJFddFF===dd==FFFd:ÉÉÏjÏÉ?IôĘŕŕģn|òòģÓÓÓÒÑģÒ·Ý||rúÓÒģĬĬĬĬĬĬĥĥĬĬêÉÉÉÏNĜT¹ÚeeeU¸@«??I@mmēOÝíţţĠøl#SşŞòòòòòr|òvvòòòşůşøėŖőm???¤ĠĠ]]¾||rrrÉÉÉööûûööööĬĬöÉöĬĬÉööĤööĤÓÓÒÒÒÒÒÓÒÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓØØÒÓÓÒÒÓÓÓÓÓÓÓħİħħħħÒÒÑÐ½įioooooooRR]]nÏ@@Ĵt;õ@????úôĘĤ?rò½nPBĕË½r|UxO¿¾¾¾¾¿·i½î½T¿¿je',
    '¿½îîîî½CBƃ²ûO::¼ir¿úĘ¶û?ÏiTTTTTTTQFQNNNNNFQUÉ¿jÏÉķ??ôŕŕÒ¾|òòÐÓÓÓÓÒÒÓË|||ÉúÓÓÒÖêĬĬêÖĥĥĬĬêÉÉrnTĜ¹·ºÚÚºj?²¶I?@¶ķķmmďůšššíylĐĠĩ¿¿¿¿¿j·¿È¿¿½ďĠĠşíĉůĲÉÉŗķmőĠ]i]]nn¾n¾¿¿ŒŒööĬĬĬĬĬįĬêêĬĬĬġööööĬÒČÚÖÖÖÖÖÐÒÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÔ¿Ö·ËÖÖÒÓÓĦĦÐÒÒÒģģģģĦĥĦË¾êRsKKlsssoR]]Ï??IOĴO@@??É?@ŕĘĤövv½nPBĹË½ò½HĚO¿¾¾·¾¿¿¿½½¿¿Ö¿jU',
    'j¿vîîî½ZDĹ²ûOUj½îîêöûāûĬċċċċċîċċê:¡¼òrr½½QFJ¿¿nÏÉÉķ?@ôôÒêvvvÐÒÓÓÓÒÒÒÖò|½êúÒÓÒÐêêêêÐĥĨįĬÉrr¤iTTi¾jº·j>É?¶ē?@āI?ķrďĠĠĠĠŖÝøţĠ|·»»ËººjËË»Ĕ¿|ĠĠşĠŖď¤mĲďÏÏ¤Ŗ]iNRRRigginÉġġöġġĬĬĬċįêêêĬĬĬööĬĬĬÒĆYîîvòîÐÒÓÓÓÓÓÓØØØØØØØØÓÓØÓÓÓÓÖîòÝ|îîÑÓÑĥĦĦĦĥĥĥĥĥĥĥĥĨ·RêRsKKsssKoR]nÏ?ûûû?ûûûöúÉúā@ûöööÉ¾TJBGË½rrPH»¿¾¾··¿ÈÖÖ¿¿ĄêÈ¿º',
    'j·¿îîîÈZBZ?ö>:j|òvv??ûöĬĬîîîĄêċċê:¡oĲnn¾|QF:¿¾nÏÉÉêĬīīĤĤîî½vÐÓÓÓÓÒÐÒÖòÝrÖģģÒÒÖê½½ċĨĦĦÖÖ¾S]]iT·iRo¾|nT?öŗď¤mIrďÝøøĐĐĐÝm¤ãíď½¿¾jjºjj·ººj¾½òšŞíĐĐøėøĐøøĐø|]!¨¨¨:¨NR]rÉÉÉÉÉêÉêêêį¿¾ĬĬĬġĬĬĬĬÒěPîòòòòâÓÓÓÐÖËËĔºÚVVVVĔËÐËÓÓťÓêv|ėÝò½ÔÓÓÓÓÓÓÓÓÓÓÓÓÓÓĭjRêRslKsoosoRrÏ@@²ûöŀ²ûĤúĥĥĬÉöööÉÉUZZGBGËºPJGAO¾¾¾¾··¿Öjj·ÈêÈjH',
    '¾¿êêêĄîZBGh?ÏT·||ò|???¸?ĬċîĄĄĄîîêQF¨òr¾¾¾QFQ¿njnÉêêÉ@ŕ@@»ĔĔ»ĔÓÓÓÓÓģÒĔÚVVVVÒÒÒģ»ºº»ÐĦĦÖê¿]r|iN¹NNR¾|nTÏÉŗĲďm?ĲĲďŖŖŖďmÏķrSţď½êêêêÈ½½½½½½½½ĩšşíĐţŖŖţţŖĠĠŖ|¾¾r¿¿r¾¾ii¾¿rvrrêr¿ÖįĨÖÈ¾nn¾ÖÖÖÐÑěPòďĩďÝËÓÓÓÐįċĄêêĄĄêêúÖĄįÐÑÓÓÓÖòÝė¤ò¾ØØÓÐÖÖÖ¿¿¿¿ÈºVÓĭº´êRsKKlsssog???I?ÉÉÉ@?ööĬĬêÉĬĬĬÉÉUĹZZBG·eGĹGJU¾¾¾¾¾¿¿È¿È½¿Öê¿U',
    '¿rîêêîċJBG:?»¼·||Ĳ|Ï??x»ċċîĄĄĄîî½QF¨|½½r¾Q=Q¾njnÉÉêÉ?@@?ŕŬŕĒĒĒÓĪĪÓÐÒÙÜÜÜČÜÓģģôĔÙÚĔģĦĦÖįrnķrnNTTg]¾¿nj»Ïr|ďrmĲďďĠďĲŗöû?r¤ŖĠòîîċċîîîĄîîĄêòĠĠşĉĐĠššĠÝĠĠĠĠÝ¾êîîîvvrnii¾|ê¾nr¾¾¿ÖĥÖ¿iiinÖŪÐÒÑĆPòòòĲÝËÓÓÓÑįŮċîċŮŮŮċêįįįÐÑÓÓÓÖò|y¤vrÔØÓÖ½Ĳr]||Ç|gĞĪĭºRêRsKKoRRso¼>>>>ª>nnĴ>nnnrêúêĬĬöÏVZJZZZËeGZZYT·¾¾¾¾¿ÈÈÈêê¿ÈêÈ¿',
    'j¿òvvvêYGC:úUQjròòòr?OH»îċîĄĄĄîî½¨F¨|½½½rQ=¡·jj¾êÉÉêÉÉÉöô@²ûĘĒħħÓÒÐÒÓÓÓÓÓÒÒúúúÒØÙÔÐĦĦÖĨrn?ÉÏTTj¾]¾¿¿êºj¾]rrròďĠŖ¤Éööû?mÉďĠďêîîċŮŮŮċîċċêďšĠşSSĠĠĠíN]ÇĠĠ]¾½vvvvvriiin¾¾ji¾¾¾¾nģË]]]]¾ÖĨÐØÓĆPîîvòďâÑÓÓÑŪîîĄċŮŮċįÖêÖÐÐÒÓÓÓÖîòy¤îîÑØÓÖr|¤SqÝÝÝTYĪÑºRêRslKR]¾oooN¼RRRoRSSSRRRn¿nêêÉÉUPPPPPH¿TZJPeT·¾¾¾·ÈêÈ¿¿ÈÈÈÈ¿È',
    'iijijºeËHGP?>Qj½òîòÉÏHÃTĄĄĄĄĄĄĄĄÈQF!|vîêrQ³Fjj·¾êêêêêêú?@??Ĥ@²ĘĒÓÒËVĈĈĈČÙ»»¿Éúº»»UÔÐĥÖįêÉÉķ?ēg¿¿iTTjêe:T¨jj¼êöúÉķġġöĤĤŀēmnjÖêĄĄîŮŮêêįî½ĠţĠĩííĠÇÝíR]]]ĠÇ¾½Ąêvvî¾g]j·¿¿¿¿Èêê¿¿ÐÖ¿¿½¾iÖÖÐØÓŃPòòòòòâÑØØÑÖîîĄċƄĬċċģÔģÖÐÑÓÓÓÖîòåÝîîÑØØÖ½ò|ÝÝÝÝrºƅİÒ¹NêRssKs¯î½½îîvvîîvvîîîîîò]RiÖĔYYTTeigg]¿TJJHeT¾¿¿¾¾¿¿jjjjjjjjj',
    'ê½¿iii¹¾jeP>¼Qj½òòòr>fÃTĄĄĄĄĄĄĄĄÈ^Q¼|½ò½½Q³Fj··¿ÉÉÉêêêúÉ?ÉÉ²@ûĤĘÒÒúĔÔģúÖÖêêêÖģ¸@@»ÔÐĥÖÖêÉÉÉÉÉhTjj·¿êċ»Ë¿TTT:j>UU?ÉŗöööÉÏÉr|ÈêĄįċıċêêċċÖÇŨĠĩĉSĠÇÇĠÝ||ÆÇÆ¾½vvvvv¿n¾½êêêêêêîĄêêĥêêêĄ½¿ÖŪÐÓÓƆJďďďďòâťÓÓÐÖĄĄêêĄċŮċÔÔģÐÑÓÓÓÓÖòďėÝòvÑÓÒÖ||ÇíÝÝÝ¤TĆİÑ¹RêRssolR½ròîîîîîvnX]]]]|v¿¿ÖËeZYTTeTNNi¿i:::HT·¿¿¿¾¿¿jººººT¹ºT',
    'Ůî½¾iiij¾j::QQ¾½½rr|gĊFTĄĄĄĄĄĄĄĄÈ^:j¤nrrrQDFj·Ë¿úúúú¿¿¿ÏÏÏ»ņôûöĤīģúÐÐŪîîîîîĄÖôāā²ĤģÐĥÖêêÉrr¿n::T¿½ĄîĄÖêîÈºT¹¹TeTúÉröööÉ?Ér|ÈêĄįƄċêêîıŮÖ|ĠĠďqq||ďĩď||ÇÇ]¾½vvvvêÈ¿¿êîĄĄîîĄêêêêĥêêĄêêêÖŪÐÓÓƆZ|||||ËÓÓÓÐÖêÖÖêĄŮŮîĔÒģÒÑÒÒÑÓÈò|SÝ|òÔØÒÖ||ÝSÝÝÝÝTĆİÒ¹RêRoRRRR]]½vvîîòòyllooy]½¿¿įjHJTTTTT¼Tj¿jR¼P:T·¿¿¿¾È¿jTºjjTTºj',
    'îò½½jTgº¿¿VQFQjj¿¿¿jTFF¹ĄêĄĄĄĄĄĄÈ^T¿nxO¿¿fFG·Ë··ÒŤģËjTT:NĜTúúÉöööĬÉģÐÖ½êêêîêú?¶ā@ûöĤĥúįĬr¾T:::ejêêêê¿êîċŮ¿ËêÖËj¾êÉÉöĬöû??¿¿ËÖĄĄîêÖĄîĳŮÖďĠŖĠ¤mÉr½½|ÝÝÇĠÇ¾½vêêê½¿¿ËêêêêêêêÉêêêĥÖêê½êêÖÖÐÓÓŃJn¾|r|ËÒÓÒÐÖÖÖÖĄŮŮŮîÔÔÒÒÒÔģÐÓÈ½¾qn|¾ÔØÔÈ½½rS|r||ºČİÒ¹RêRR|¤¤nRi|½êîvò½o8KyyyS¾RgįjeP¹Tiiigg¾Ö¿g¼:HT·Ë¿¾¾¿ËTTËÖ¿ºTº¿',
    'ê½êîê½½êê¿PQ¡QĞJQJQQQ:ĜËĄêêêĄêĄĄ½:Q¨:f::¨¾TQj···úêê¿jTTTj·¿ĬöÉÉúúúúģÐÖêêĄĄêô@?@ĘĤöĬĬĤ?ĬĬvĄÈËËº¿êêêĄĄË¿ËËêËÖîîîê½êêÉêĬĤ?n|ďď½êĄĄįċîêîĳċģrď¤@@?örĲĲ|íííŖ|r½êêêêê¿¿Èêê½½½½¿½êêĬĥêêêêêêÖÖÐÓÓØÔÖÐÐÐÐÐÑÓÓÐÖĄÖÖĄŮŮıêÒÔÒÒÑÖú»ÒÐÐÐÐÐÐÐÓÓÑĥĬêê¿úģÒÐģÒĪÑºRĄ¾n¤n¤nR]|òvv½½½o8KRcyR¾igĨjePYHTjjgTT¾jTHUU»ÈêÈ¾·ÑÑ·êÖÖÖÖÖÖj',
    'êêvvêêêêÐÔƇěGCÛĞPG©FQ¨:¿ĄįĄĄîĄċċ½:¡Q:h:¼i½·Tjj·¾ÉÉÉúÏj>j»¿ÉÉêêú¿¿Ë»»»¿ĄêĄêģŕŕ@@ĤĤĬöĤĤ?ûĤÉîîêÖ¿ÖêÈÖêįÖË»ĔËËËÖ¿ÖÖÈêÉ?ĤĤûûÏrďď|½êêĬċîÖÖêįĥÉķ?²¶IÉÉķķm¤Ýőďrêêêêêê¿¿Èêê½¿¿¿¿É½êêĬĤöêêêêêÖÖÐÓÓÒÒĒÒÒÒÑÑÒĒŁÒÖêċÖêŮıîêģÖÖÐÑÒÔÙÔÐÐÔÒÑÑĦÑÓÒĦĬêêÉ¿¿ģģģĒħÒË|½|¤|¤¤]R]ròv½½½½oLKooyR|igį¿jeHHTj>UUUjj»¸µ¸ôêêÈ·Ðƈĸ¿êÖÖįêêÖj',
    '¿ËË½êêÖÖģÓƉČPPÑÓÚJ©Q:QNjÖêêêêêêê¿T:fxxx>½êÖ¿···¿ķÉÉ?ú??Ïúúúú¿úúú¿¿ºjj¿îêêÖĒŕŕ@ĤĤĤģŕ@ôô??ô¿½êêêêÈ¿ÖêîĄ¿ËËËËÈÈËËËÈÉú?@???@úrďď½êÖÖĄêģËģÖĬĤûûûIIö???ķImrķĤīģêêêê¿¿êêê¿jUj¿êêêêĬĤĤöĬĬêêÖÖÐÓÒÒĒŕĒÒģÒÒĒņ±ŕôúċÖÖêêÖúËÖÖÐÒÔÙÓÐÖģÙØØØÓÜÛÛÒģúÉr¿¿¿¿Ë»»ģĥî¿Ïmrr|ÝSnr½½½rr½oLl8loR|]]įÉ¿jUUj»j¸ŕāg¿É²āāûúêÈ·ĨƊĸ½êÖÖċêÖÖÖ',
    'ƇŃŃ¿îĄ¾êêêĄ¿¿ÖĨĦƉİÍej:jjºË»ËËUºUº¿ô@ā±ā?îÖÖįĥÐģËĤûû???ÉêÉ?ô¿j·êúĬêj¿¿¿îîê?ŕŕôĤĥĤôƋŘčƅƅúúj¡¨>öêċįúêċċĄêÖÖËêîċċêÈêêrnhg]n]mÉrv½¿È¿ÖÖ»Ë¿ú?ûĤĤĘöĬö«Iķö@ûû@ĘħŰģôôÉ¿½ê½ê¿jeT¿ċêêêĬû?ûöĬêêÖÖÐÒī@@Ĥ²ĘĤÒāăāň±±āô»UVUĔºVĔĔĔôôģĦÐÐÔƇÒÒÙŃœŧŜƌƍÒÉÏÉrnrê½Ï?Ĭċ¾»?rrr||¾|||¿¿¿roLlÂ8lRr|rĬ?nn¾¾¿êúôāă>¿öû²²ûûĬÈ¾įƎƈêêÖÖįĄÖÖĄ',
    'Ëººêî½¿½êîîċêģƏœÍœBU¿jjUUËË»»ºĔ»ôô@@?ûôÒÒÓÓÒÒÒÒÒÒĬġöīúÉÉÉÉúË¿ÉÉÉööúêÉêîÉ?@IûöĤƐĒúÜÜĔĔÙúúj:j¿êġċċĬĬöêċċċîÖê½½ĄĄêêÏÏÏŕÏrrrrÉ?ÉÉ¿¿¾¿¿ÉÉúĤĤ?ĤĤööööööööIûĬöĤúģúúúêê½êê»jjj¿êêêêêûöööĤöêêįĨĥûĘ²ûöĤĤûŕ²²²û«²²?ôĔĔĔ»ĔºĔ»@ŕ?ÒƇĎƑƒÛģúºDĞĔĔÙÓÐÉvvêrêvvvvvġ½ú?úr|||¾¾r½½rrrnn|n]]¾½êöö?¿¿nn¿êêĤû?n½ĬûûûööĬêêĨƓƉêêêĄċĄêêį',
    'È¿¿½¿¾··¿½êê¿ºŻBÁDQTji»»»újTePeTHxxxx»UYĞYYĞĞĞeeejúöīĘú¿UUTTTTTUUhUjjTTUxxxU»ĤżīģYČUºĔ»j·j¿¿êêööûĘûûĤ?»jjji¹j¹¹TH:TĚU>>jgThUUT:::TT>O@@@¸UUjjUUU>>HhUUTTTeeTTTTTjHHU?ô??úÏUxjUUUj>TËºUĚĚĚxU»?@ĚxĚ¬xxxxxHHHVeHPeVĚHOĒĶYCěÚúúºPeĔËºVUjjÏÉvv¿jjÏÏú¿>U>Tgiinrê¿¿¿¿¿¾¾¾n¾¾j½ÏUUUTTÏÏôôú»¸Uj¾¿xx¸@?ûÏjËØÙ>UUTºUºjj',
    '¾¿½¿ji·¹jj¿jT:ĔeP:ĜTTTÏ?úúT::Q:PQ::QJU:QQQQQQ^^^Q:Uúôôôj:QQ:QQQ^QCC::QQ:::QPeģĭĦ»CCJHVeT·È¿¿¿ú?@Łā@ô@¬AP::::PQQQQQQHHHHJGFQP:PQQQQQ:HĚzzHP^::QJJJPQQQQQQQQC¥CQQQQP:h@āā@?HQQPC¥QĜPQĜQCQQQQQU>UH:QQQJQQ^QQQPPQQ::JQĚô?»Th>ú»ºËeeºeP:::UÏĬêj:HU¸O»:P:Q:Ĝ:jêêjjjjjºººTjjT¿TQQ:^Jô@@ŕôUH:TiTPQ}Ě@@x:TºUffJQQQJPQ',
    'ºj¿¿·¾½¾·¾¿¾jTT¹j·ºjjTjËËjºj··ºººjººjj¹¹¾jjjjjjjTTjj¿Ëjjjjjjjjjj¹TT¹¹jjjjj¹jºe»ô¸QFFCCT·¾·jjj¿»ºVjjjjºjjjijjº¹¹jjjjjj¿jPQQQTjjiijjjTTjjjjj¾·jjjjjjjºjjj·jjjiTjjjjjjjjjºUjPQT:CFQj··jTTjjj¹¹jjjjj·jT¹jjiiiiijjjijjjºjjjjjj¾jºTºjjºjj·jjn¿¿··Èj»¿»HJPe¹ºjjjjººj·ºjj·jjjjjjjjjjj¿ËĔUVĔËËºjjjjjjjjjjº·¾jj¾¿i¹j·¹',
    '·¾¿¿¿¿½¿¾¾¾¾njj¾¾¾¾¾¾¾¿¿¿¿¿¿¿¿¾·¾¾¾jj¾jj¾··¾¾¾¾¾ijj¾¾¾n¾¾¾¾¾¾¾¾¾¾jjjjn¾¾¾¾¾¾jj¾¿»jjjji¾¿¿¿¾¿¿½¿¿·¾¾jjjjjjjj¾j·¾¾¾¾¾¾¾¾¾jj·¾¾¾¾¾¾¾¾¾jj¾njjj¾¾jjjn¾¾jjjj¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾jj¿¿jj·¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾jj¾¾¾j¾¾¾¾¾jjjjiiijjjj¾¾¾¾j¾¾¾¾¾¾¾¾¾¿r¿¿¿¿¿¿¿¿¾jjjjjj¾···¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿·jj¾¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾jj¾¾j',
    '¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾r½½½r½r¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿rr¿¾¾¿¿¿rrrr¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½½½¿¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿¿½½½È½½¿¾¾¾¾¾¾¾¾¿¿¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾½¾¿¿¾¿¿¿¿¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾',
    '¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¾¿¿rrr¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿r½½¿¿¿½½½½½½r¾rrr½rrr¾¿¿r¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¿¿¿¿¾½½¿¿¿¾¾¾¾¾¾¾¾¾¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿¿¿¾¾¾¾¾¾¾¾¾¾¾¾¿¿¾rr¿¿¿',
    '¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾½êċîîîċŮŮŮŮıĳîıŮŮŮıîıŮĄĄċ½½½¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾ni¾¾¾¿½½½½½½½È¿¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾rr¾¾¾¾¾¾¾¿½½½½¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾',
    'ńńĶVj¾jVVĶĶVVĔ¿½½½½¾¾¾¾iiiiiRTiiin¾¾¾¾¾¿½¿ËĔńŝŝŝŝĔ¿¿¾¾½½½½½½r|||||¾r|r½½½½½È¿¿ĶĶĶĶVĶĶĈČVVVj¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾jUĶĶńńńńŝVjjUĚVĚVVVVV¾¾¿¾¾¾¾¾¾niiiin¾¾¾¾¾¾jVVVVVVVUnnniiiiiiiin¾¾jĶĶĔÖ½îîîîîîîîîîîîîċîîîîıċîîîî½¿r¾¾¾nn¾¾¾¾¾¾¾jVVĈĈĚĚĚVjn¾¾UVVVVVVVjjVVVVVVVĶVj¾¾¾¾¾¾¾¾¾¾nnn¾iii¾¾¾¿½êêËĶĶĶĶĶńńĶºj¾¾¾¾¾nnnn',
    'ńńńĶj¾jVĶĶĶĶĶĔÈêê½½r¾¾¾niiiiRgiiin¾¾¾¾¾r½¿ËĔĶĶĶĶńĔÖ½¾¾¾¾¾¾¾¾]iiiii]]]]¾¾¾¾¾¾¾jĶńĈŝČĶńńńńVĚj¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¾¾¾¿·ĔĶĶĶĶĶńńVjjUĚµµVVĶĶV¾¿r¿¾¾¾¾¾¾]]iin¾¾¾¾¾¾jĶĶĶĶVVVU¾¾¾iiiiiiin¾¾¾·ĶĶĔêêîċîċƄŮŮŮîîîîîîîııŮŮŮîîċî½¿r¾¾¾n¾¾¾n¾¾¾¾jĶVĈĈĚĚĚVj¾¾¾UVĚVVĶĶVjjVĶĶĶĶĶĶĶĶj¾¾¾¾¾¾¾¾¾¾n]]¾iii¾¾¾¿½½È»ĶńńńńńńĶºj¾¾¾¾¾nnnn',
    '¾¾¾¾¾¾¾¿¿¿¿¾¾¾¾¿¿¾¾¿rr¿¿¿r¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½½îîî½êê½¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾½½¾¿¿¿r½½½r½½½½½½½½½½½½r¿¿r½½½¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿r¿¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¿¿¿¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿¿¿¿¿¿¾¾¾¾¾¿½½¾¾È½î½½¾¾¾¾¾½êîîî½¿¿½¿¾¾¾¾¾½r½½¿¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿½r¿rrrrr¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿È¿¿¿¿¿¾¿¿',
    ':jên¾¿½¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾½½½½r¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¿¾¾¾¾¾¾¾¿¿¾¾¿¾¿¿¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¿¿¾¾¾¾¾¿¿½¿¾¾¿¿¾¾¾¾¾¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿r¿½½½îîîîîîîî½½¾¾¾¾¿·jj¾···¿¾¾¾¾êê¾½½r½½½¿ê',
    'n¿ê½½½½Ni¾¾¾¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾½½½½êîîîîîîîîîîîîîîîîîîî½½½½½¾¾¿¿¿¾¿¿¿¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½½½½½½½½½½½½½¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½½½½½½½½½¾¾¾jj¾ÈÈ½½½Ëj½¿¾·jĜ:TjjºT»»»»',
    'êêêvîê½:Njn¾¿ú¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿½¿¿¿¾¾¾¿¾¿¿¾¾¾¿½v½êîċŮŮŮŮŮŮŮŮċċŮŮŮŮŮŮŮŮŮċîĄîî½¾ËËË»»»Ë»ººjººººººUU¹ii¾¿¿¾n¾¾¿¾¾¾¿¾¾¾¾¾½½½½îîîîċîîċîċîîîî½½½½¿¾¾¾¾¾¾¾¾Ë¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¿½½¿¿¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾¾iTT¾½êvvî¿jêÈ¿¿¹^Qe¹ºTH»ô»j',
    '½½½½½½½½T¨TÈÖĦê½¿¿¾¾¾¾¾¾¾¾¾¾¾¾r½½½¿¿¾½½½½êêêêê½½½êêêêÖÈ¾êƄƔv½½½vîîîĄĄê½Ąê½êêêvîîîîîîî½îŮċTĈƕŝųųųƕųćĆćųƖƗƘƖƖƙƚGQQ¿êĬú??êê½½îîê½¾¿½îŮŮŮŮŮŮŮŮîĳŮŮıĳîŮċŮŮƔŮî¾¿½½¿¿¿ËÒ¿¿¿¾½r¾¾¾¾¾¾¾¾¾¾¾¿¿¾¾¿¿¿¿¿¿¿¿¿¾¾¾¿ôģÖêÈ¾¾¾¾¾¾¿¿¾¾¾¾¾¿¿¿¿½r½½½½½r½½½½êê½½½¿¾¾¿½½½½¿¿¿¾¾¾¾¾¾¾¾¾¾¾¿¾¾¾¾¾¾¾¾¾¾¾¾¾¿r¿^:iê½½½r½¾i½½½½½êê½¿È½½îċċċ',
    '¿êîîĄêê½ÈjH»ĘƛĤöÉêê½½½½½½½½½½½êêêêêê½êêê??ûĘ?@?êêêêÈ¿¿ÈÈêêê½½êîîîîċċċċîċîêġ?@?Éîîîîêê¿¿êêjjĔººº»»ººUºººĔĔ»»ººjjjÉú?Iûû?êêêêêê½½½êêĄîîîîîîċċċêúöêîĄêêîêêê½ê½½rô@ĒŤĥê½½½½È½½È½½½½½½½êê½½½½êê½½½½ÈrrúôĤĤĥúêêêêêê½ËVĚ½½½½½½½½½½½êêêê½½½êêêêĄêêêê¿jTjTNT·¾jj·Èêê½ÈÈ¿½½½êêêêêÈ½½½½È½»@@:j½êĄêêêêêĄêêêêÖêêîĄĄĄêêĄĄî',
    '¿Èê½½½½¿¿¿UÏ?ôúÉÉêê½ÈÈ½½½½jºj¿ËË¿ËjjjË·jO»¸xx¬Hj½ê½¿¾¿¿¿¿¿¿¿½Èjj···¿È½êê¿j¿UĚĚUjji¿¿¿¿··¿¿ÈÈÈ¿È½ê½½È¿¿¿È¿½êêêê½¿êú?????úêê½È¿¿È½½½È¿¿¿¿È½½¿j>UU»¿¿·¿¿¿¾¾¿¾·¾¿?»ĔôÖê½½½½ê½¿jT¹TTTTT·½ÈÈ¿ÈÈ¿¿¿¿¿½¿¿úúúúú¿¿½½½½È¿jUe¿È½½½È¿¿ÈjTTTjjTTTTTºjj»»»»T:QTQ¨TTTeej¿êê·TeH·È½êêê¿Tee:eT¹jU»?Uj¿ÈÈ¿¿½¿È¿j¹¹ºU·Èê¿:FFFFFF',
    '¾·j·¾¾¿¾¿¿·¿¿¾¾¿¾¾¿jii½½½½TPH»UUºU::TUTeUjT:HPQ:¾¿·jjjjj¾¾¾j¾j:PeTTjj¾ÈÈjTU:JJP:::j¿¾T::NT¹ii¹ijjêċêiTTTN¾êîċ½·jjjjjjij¹j¿½¿¿ÈÈ½½½È¿···¿¿¾jĜ:TTij·jj¾¿·j·jj·¾½¾ii¹TTi¾êĄ½·TP^^QQQ:¹¿¿¿¿¿¿·¾··¾ê¿¿ÈÈ½½¿¿¿¿¾¿¿¾jjjjj¾jTN¹jj¿¹:¨:TTQQQFQPPQTUeePQQeQ:i:::T¹j¾¿i:QQjÈ½½ê½·QCFFFQTTj¿ê¿¿¿¿¾¾¿¿¿¾jT::::TTĜQ       ',
    'iTTTTjîĄîÈ::::N::::Q¡Q½îîċ¾ijê··¿jjj·¿·jjjjj··¿¿iTN::Tii½î¿^F:½¿¿ÈĄĄîîƄċċîjjjjj·¿êîĄT            iêT     FjêêF 3=FFFFFFF¡TîîîîîîîîîîîîċîîîîêêĄîîîîîîîċîîîîîîîî¿T¨   3iîîîċêjjj·¾½êîîîĄêîêêêêêîîîîîîîîîîî½j¾¿È¿¿È¿¿jF  ©:N¿êĄîîê¿ijjj··jj¿¿·j·¾¾·j·¿jj¿êÈjTT½îîċċîêĄîîîÈ¿¿¿¿êîîċċċîîîîîîîîîîîîê½½È:[         ',
    '      Ä Ä             jêj3    T½ê½½½¿©                        ¢¾·Q  Ä[3[3[        Ä               3                      FêêêĄêêê¾Q3[[[[[[[   [  [[[[3[[[3333[        3®33  33Ä   Ä            [[[  Ä                      [33©¡¿½½½½½½½½½½½êêê½½êê½½T      [[33[  ®¨Ąê½½½êĄîĄîîîĄĄêêêêĄĄĄĄĄĄF              ',
    '                      ©¡©     :êê½TQF                          F=                                                         ¥¥¡Q¡¡¡©                                                                                             [¿êĄĄîĄêê½¿¿ĄîîîêîîĄĄî:               ¡¡¡¡¡QQ¡¡¡¡Q¡¡¡¡¡¡¡¡¡¡¡Q               ',
    '                              ¡jiT                                                                                                                                                                                              Njjj·jjjN¨:jjjjjjjjj¾Q                                                      ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
    '                                                                                                                                                                                                                                                                                                            ',
], {
    "0" : -8343360,
    "1" : -5193536,    "2" : -7298896,    "3" : -5197648,    "4" : -9400176,    "5" : -10448736,    "6" : -9400144,    "7" : -9396064,    "8" : -9400160,    "9" : -6246240,    " " : 0,    "!" : -9404288,    "\"" : -8351600,    "#" : -8351584,    "$" : -8347488,    "%" : -6246224,    "&" : -6242112,    "'" : -6242096,    "(" : -8347472,    ")" : -7294800,    "*" : -5189424,
    "+" : -5193520,    "," : -8343376,    "-" : -7294784,    "." : -7290688,    "/" : -9396048,    ":" : -9408400,    ";" : -11505568,    "<" : -10452864,    "=" : -7303008,    ">" : -11509680,    "?" : -12562384,    "@" : -11509712,    "A" : -8355744,    "B" : -6254464,    "C" : -7307136,    "D" : -6254448,    "E" : -6250352,    "F" : -7303024,    "G" : -7303040,    "H" : -9408416,
    "I" : -12558288,    "J" : -8355728,    "K" : -9404272,    "L" : -9404256,    "M" : -6246208,    "N" : -10461072,    "O" : -11509696,    "P" : -8359824,    "Q" : -8355712,    "R" : -11509648,    "S" : -12558224,    "T" : -10461088,    "U" : -10461104,    "V" : -9412528,    "W" : -4149072,    "X" : -12562320,    "Y" : -8359840,    "Z" : -7307152,    "[" : -5197632,    "]" : -12562336,
    "^" : -8359808,    "_" : -4149088,    "`" : -4144976,    "a" : -5197664,    "b" : -3096400,    "c" : -11509632,    "d" : -7298912,    "e" : -9412512,    "f" : -9404304,    "g" : -11509664,    "h" : -10456992,    "i" : -11513760,    "j" : -11513776,    "k" : -11505552,    "l" : -10452848,    "m" : -13610944,    "n" : -12562352,    "o" : -10456960,    "p" : -10448752,    "q" : -12558240,
    "r" : -13615040,    "s" : -10456944,    "t" : -10452880,    "u" : -11501440,    "v" : -14667728,    "w" : -11501456,    "x" : -10457008,    "y" : -11505536,    "z" : -10457024,    "{" : -7298944,    "|" : -13615024,    "}" : -9404320,    "~" : -8351632,    "¡" : -8355696,    "¢" : -6250320,    "£" : -11501472,    "¤" : -13610928,    "¥" : -7307120,    "¦" : -7302992,    "§" : -10448768,
    "¨" : -9408384,    "©" : -6250336,    "ª" : -12558256,    "«" : -12558304,    "¬" : -9404336,    "®" : -5201744,    "¯" : -11513744,    "°" : -9404352,    "±" : -9404368,    "²" : -11509728,    "³" : -6254432,    "´" : -10461056,    "µ" : -9408448,    "¶" : -11505616,    "·" : -11517872,    "¸" : -10461120,    "¹" : -10465184,    "º" : -10465200,    "»" : -11513792,    "¼" : -10456976,
    "½" : -13619136,    "¾" : -12566448,    "¿" : -12566464,    "À" : -8355680,    "Á" : -5201760,    "Â" : -8351568,    "Ã" : -7298928,    "Ä" : -4149056,    "Å" : -10452832,    "Æ" : -12566432,    "Ç" : -13615008,    "È" : -12570560,    "É" : -13615056,    "Ê" : -10448720,    "Ë" : -11517888,    "Ì" : -5197680,    "Í" : -5201776,    "Î" : -9408368,    "Ï" : -12562368,    "Ð" : -11522000,
    "Ñ" : -10473424,    "Ò" : -10469328,    "Ó" : -9420752,    "Ô" : -10469312,    "Õ" : -4144992,    "Ö" : -12570576,    "Ø" : -9420736,    "Ù" : -9416640,    "Ú" : -9416624,    "Û" : -8368048,    "Ü" : -8368064,    "Ý" : -13610912,    "Þ" : -8347456,    "ß" : -8343344,    "à" : -8339232,    "á" : -7290656,    "â" : -11521984,    "ã" : -11505520,    "ä" : -11501408,    "å" : -11501424,
    "æ" : -8343328,    "ç" : -10469296,    "è" : -12545872,    "é" : -11497296,    "ê" : -13619152,    "ë" : -12545888,    "ì" : -12549984,    "í" : -13610896,    "î" : -14671824,    "ï" : -7294768,    "ð" : -12554096,    "ñ" : -11497312,    "ò" : -14667712,    "ó" : -12549968,    "ô" : -11513808,    "õ" : -11505600,    "ö" : -13615072,    "ø" : -12558208,    "ù" : -12550000,    "ú" : -12566480,
    "û" : -12562400,    "ü" : -13615088,    "ý" : -9391936,    "þ" : -9396032,    "ÿ" : -9416608,    "Ā" : -12554080,    "ā" : -10457040,    "Ă" : -11505632,    "ă" : -10452944,    "Ą" : -13623248,    "ą" : -9391920,    "Ć" : -7311264,    "ć" : -7307168,    "Ĉ" : -8359856,    "ĉ" : -13606800,    "Ċ" : -8351616,    "ċ" : -14671840,    "Č" : -8363952,    "č" : -6258592,    "Ď" : -6258576,
    "ď" : -14663600,    "Đ" : -13606784,    "đ" : -13606768,    "Ē" : -10465232,    "ē" : -12558272,    "Ĕ" : -10465216,    "ĕ" : -6254480,    "Ė" : -8355760,    "ė" : -12554112,    "Ę" : -11513824,    "ę" : -13619120,    "Ě" : -9408432,    "ě" : -7311248,    "Ĝ" : -9412496,    "ĝ" : -10465168,    "Ğ" : -8363936,    "ğ" : -7311280,    "Ġ" : -14663584,    "ġ" : -14667744,    "Ģ" : -12558192,
    "ģ" : -11517904,    "Ĥ" : -12566496,    "ĥ" : -12570592,    "Ħ" : -11522016,    "ħ" : -9416656,    "Ĩ" : -12574688,    "ĩ" : -14667696,    "Ī" : -8372176,    "ī" : -11517920,    "Ĭ" : -13619168,    "ĭ" : -10473440,    "Į" : -7298880,    "į" : -13623264,    "İ" : -8368080,    "ı" : -15720416,    "Ĳ" : -14663616,    "ĳ" : -15720400,    "Ĵ" : -11505584,    "ĵ" : -4153216,    "Ķ" : -9412544,
    "ķ" : -13610960,    "ĸ" : -11526112,    "Ĺ" : -7303056,    "ĺ" : -8372160,    "Ļ" : -9400192,    "ļ" : -10452912,    "Ľ" : -10452896,    "ľ" : -10452928,    "Ŀ" : -6250368,    "ŀ" : -13610976,    "Ł" : -9408464,    "ł" : -7315360,    "Ń" : -6262688,    "ń" : -8363968,    "Ņ" : -9412576,    "ņ" : -10461152,    "Ň" : -8355776,    "ň" : -10457056,    "Ō" : -9408480,    "ō" : -12554128,
    "Ŏ" : -13606816,    "ŏ" : -9416672,    "Ő" : -14659520,    "ő" : -14659504,    "Œ" : -14663648,    "œ" : -5205888,    "Ŕ" : -5201792,    "ŕ" : -10461136,    "Ŗ" : -14659488,    "ŗ" : -14663632,    "Ř" : -5210000,    "ř" : -5205904,    "Ś" : -5210016,    "ś" : -4157328,    "Ŝ" : -4157312,    "ŝ" : -8359872,    "Ş" : -15716288,    "ş" : -15716272,    "Š" : -4161424,    "š" : -15712160,
    "Ţ" : -6258560,    "ţ" : -14659472,    "Ť" : -10469344,    "ť" : -9424848,    "Ŧ" : -7303072,    "ŧ" : -4153200,    "Ũ" : -14663568,    "ũ" : -15712144,    "Ū" : -12574672,    "ū" : -8351680,    "Ŭ" : -9412560,    "ŭ" : -15708048,    "Ů" : -15724512,    "ů" : -15712176,    "Ű" : -8363984,    "ű" : -13606848,    "Ų" : -6254496,    "ų" : -7307184,    "Ŵ" : -4153232,    "ŵ" : -3104640,
    "Ŷ" : -3100528,    "ŷ" : -3100544,    "Ÿ" : -2056064,    "Ź" : -4149104,    "ź" : -7319504,    "Ż" : -7319488,    "ż" : -7315392,    "Ž" : -14671808,    "ž" : -8351664,    "ƀ" : -9400272,    "Ɓ" : -9400256,    "Ƃ" : -15720384,    "ƃ" : -8351648,    "Ƅ" : -14675936,    "ƅ" : -7315376,    "Ɔ" : -6262672,    "Ƈ" : -7319472,    "ƈ" : -10477536,    "Ɖ" : -9424864,    "Ɗ" : -11530208,
    "Ƌ" : -6266800,    "ƌ" : -6266816,    "ƍ" : -7323600,    "Ǝ" : -10477552,    "Ə" : -6270912,    "Ɛ" : -6262704,    "Ƒ" : -6262656,    "ƒ" : -7315344,    "Ɠ" : -9428960,    "Ɣ" : -15724528,    "ƕ" : -7311296,    "Ɩ" : -6258608,    "Ɨ" : -6258624,    "Ƙ" : -5205952,    "ƙ" : -6254512,    "ƚ" : -6250384,    "ƛ" : -10465248,
}, 2);
			return get(0, 0, 600, 400);
		},
		depths: function(){
			background(0, 0);
			Display.pixelArt([
    '!!!"##!!!!!"!"#$%%&$%%%!!!!!!!!!#&!!!&##""#!!!"!!!!!!!!!!&!!!\'!!!!!!!!"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!!',
    '!!!""#!!!!!!!""$)*&$)$)!!!!!!!!!##"""#$$"#$!!!!!!!!!!!!!!&"!!&!!!!!!!!"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!!!!!!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!""!!!!"!!!!',
    '!!&&+&!!!!!""!"$%)!"$%%!"!!"!!!!&#"""#))##$!!!!"!!!!!!!!!#&!""!!!!!!!""!&&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!"!!!!!"&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"""!!!!!!!!',
    '!!#&#!!!!!!""!&$))!!%%,&"!"&"!!!&#!&"#))$#!!!!!!!!!!!!!!!##!"!!!!!!"!"!!&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!!"!!+"##!!!!!!!!!!!!"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"""!!!""!!!!',
    '"&&$$!!!!!!"!!")#$!!%%-#!!"""!!!"#!""#$*$!!!!!!!!!!!!!!!!##"#!!!!!!&""#&#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&#!!!#&!!"#&!!!!!!!!!"!!"!!"!!"!!!!!!!!!!!!!!!!!!!!!!!!"""!!""!!!!',
    '"#$#$!!!!!!!!!&)!!!!%%.#!!"#"!!!!!!##$&$$!!!!!!!!!!!!!!!!&#&&"&!!!!"!&#"#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"&"!""#&!#"#$"!!!!!!"""!&"!!!!!!"!!!!!!!!!!!!!!!!!!!!!!!"""!!"!!!!!',
    '&#$$$!!!!!!"!!&$!!!!*,.##!&"!!!!!!!!&##)$!!!!!!!!!!!!!!!!&#!"#!!"!""!&###!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!&!&!&"##!$!#&!!"!!!!&&"!&"!!!"!!!!!!!!!!!!!!!!!!!!"!!!!!""""&"!!!!!',
    '"$$&"!!!!!!"!!!#!!!!,,,##"#"!!!!!!!!&&#)*"!!!!!!!!!!!!!!!"&!##!!"!""!"###!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!&!&"#"&$!!!!"#"!!!#&#"""!"!""!"!!!!!!!!!!!!!!!!!"!!!!!""#!""!!!!!',
    '"$$!!!!!!!!!!!!!!!!!,/,+$#$"!!!!!!!!&!#)0"!!!!!!!!!!!!!!!"#!###!#!"#!"$$&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!#!&!&!##!!!!##!!!!$$#$##"""!!!""!!!!!!!!!!!!!!!!"!!!!!!"&!""!!!!!',
    '!$$!!!!!!!!!!!!!!!!!$)%"$#$&!!!!!!!!&!"$$!!!!!!!!!!!!!!!!&#!!"###!!""&$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!!#!&!&!#!"!!!&#!!!!#$"$$#"&"!!!&"!!!!!!!!!!!!!!!!"!!!!!!"!!"&"!!!!',
    '!$#!!!!!!!!!!!!!!!!!!$$&)##!!!!!!!!!"!!$#!!!!!!!!!!!!!!!!"#!!"#)"!!!"#)0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!"!#&!!"!!!#&!!!!"%#)$#&#&!!!""!!!!!!!!!!!!!!!!"!!!!!"&!!&&"!!!!',
    '"#!!!!!!!!!!!!!!!!!!!)"1$$!!!!!!!!!!!!!)#!!!!!!!!!!!!!!!!!"!!#$)"#"#""$)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&&!"!"+!!&!!!&#!!""!%#%)###$!!!!&!!!!!"!!!!!!!!!!#!!!!!"&!""##!!!!',
    '&$!!!!!!!!!!!!!!!!!!!$!)$#!!!!!!!!!!!!!)#!!!!!!!!!!!!!!!!!#&!$#0!#+#!!$0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&#!!!!!!!"!!!##!!#"!%#%)###$!!!!!!!!!##!!!!!!!!!+&!!!!!##!"###!!!!',
    '&$!!!!!!!!!!!!!!!!!!!$!%##!!!!!!!!!!!!!)#!!!!!!!!!!!!!!!!!!!!0*0#!$&!!$0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"$!!!!!!!!!!!"&&#$!!%#%)"###!!!!"!!!!!!!!!!!!!&#&&!#!!!#$"#&##!!!!',
    '&)!!!!!!!!!!!!!!!!!!!$!%&#!!!!!!!!!!!!!)#!!!!!!!!!!!!!!!!!!!!)0$$!##!!$#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!!!!!!!!!!&&&$!!*#$$#&#!!!!!"!!!!!!!"!!"!!""##!!!"!#$"####!!!!',
    '!&!!!!!!!!!!!!!!!!!!!!!%##!!!!!!!!!!!!!$#!!!!!!!!!!!!!!!!!!!!),0$!#&!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*!!!!!!!!!!!!#&#$!!#!$&&##!!!!!&!!!!!""!!"&!"!&#!+!!"!######!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!%#"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!2))$($#!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0!!!!!!!!!!!#$"#$!!!!#$#(#!!!!!"!!!!!&#!!"&!#&##!!!!#"##"#!#!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!%#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)&*)#3#!!$"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*#!!!!!!!!!!#)###!!!!"$#!#!!!!!!!!!!!!#!!"#"##"#!!!!#&$##!!#!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!%$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*$3#!!!$"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$#!!!!!!!!!!#)+#!!!!!!##"&!!!!!!!!!!!!&!"&""###&!!!!"#$##!"#!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!)#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*)3&!!!)&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#*#"!!!!!!$$"!!!!!!!!!!!"!#&"&####&!!!!!+###$!&$!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!$*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*2#!!!!&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&$#!!!!!!!)0!!!!!!!!!!!!#"&#&&#!###!!!!!!##&$!"#!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!#2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!2,!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$$!!!!!!!))"!!!!!!!!!!!""!$$"#\'##$!!!!!##&!$!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!"4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!20!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$$!!!!!!!)*&!!!!!!!!!!!!&!)#"#!!!"!!!!!##&"#!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!!!!!#0!!!!!!!!!!!!!"!####&"!!!!!!!!"!!!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!,)#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!!!!!#$!!!!!!!!!!!!!!&##$#!!#!!"!!!!###!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!,#3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#"!!!!!!#0!!!!!!!!!!!!!!#"###!5(!!!!!!!!+#!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0!!!!!!!!!!!!!!!!!!!!!**0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#"!!!!!!#$!!!!!!!!!!!!!&$!$$#"!!!#!!!!!!##!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!6#!!!!!!!!!!!!!!!!!!!!*$0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##!!!!!!#$!!!!!!!!!!!!!&##00#!!!!+!!!!!!##!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!7#!!!!!!!!!!!!!!!!!!!!))$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&!!!!!!!#0#!!!!!!!!!!!!###0*$(!!!&!!!!!!#$!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#8#!!!!!!!!!!!!!!!!!!!!#$#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#0#!!!!!!!!!!!!!&##*0#!!!&!!!!!!$#!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!9:#!!!!!!!!!!!!!!!!!!!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$*"!!!!!!!!!!!!!&##20#!!!#!!!!!!$#!!!!!!!!!',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;6#!!!!!!!!!!!!!!!!!!!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#)!!!!!!!!!!!!!!$$#*0$"!!#!!!!!!#&!!!!!!!!!',
    '!!!!!!!!!!!!*!!!!!!!!!!!!!!!!!!!!!!!!!!!<6#!!!!!!!!!!!!!!!!!!!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##!!!!!!!!!!!!!!0$#0*$"!(&!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!=!!!\'!!!!!!!!!!!!!!!!!!!!!!#>6#!!!!!!!!!!!!!!!!!!!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*$#0*#+(5!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!?#!!!!!!!!!!!!!!!!!!!!!!!!!7@7#!!!!!!!!!!!!!!!!!!!!!0!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0$#*4$##!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!-A(!!!!!!!!!!!!!!!!!!!!!!!!7BC#"(!!!!!!!!!!!!!!!!!!!*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)0**D###"!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!!EE!!!!!!!!!!!!!!!!!!!!!!!!!7FG!\'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0)*0####!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!$A8!!!!!!!!!!!!!!!!!!!!!!!!!7HG#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!02*0#$$"!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!484!!!!!!!!!!!!!!!!!!!!!!!!06>8(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4D*)#$#!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!D82!!!!!!!!!!!!!!!!!!!!!!!!8@6I)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4$2$###!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!!D80!(!!!!!!!!!!!!!!!!!!!!!DH@7D8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*#4$#$$!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!(480!!!!!!!!!!!!!!!!!!!!!!!=JHGK65!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#A$##$!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!#4$*!!!!!!!!!!!!!!!!!!!!!!!7L>II9!!(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#*$!"#!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!!04#0!(!!!!!!!!!!!!!!!!!!!!!IM>787\'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)$!#!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!#-I#$!!!!!!!!!!!!!!!!!!!!!!!8@M777!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##!!!!!!!!!!!!!!!!!!!!!!!0*##!!!!!!!!!!!!!!!!!!!!',
    '!!!!!!!!!*84##!(!!!!!!!!!!!!!!!!!!!!0>@>867!(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!8I!!!!!!!!!!!!!!!!!!!!!!!$*##!!!!!!!!#+!!!!!!!!!!',
    '!!!!!!!!!044##!!!!!!!!!!!!!!!!!!!!!!DF@7D7=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!NO!!!!!!!!!!!!!!!!!!!!!!!04#!!!!!!!!!##!!!!!!!!!!',
    '!!!!!!!!!042##!!!!!!!!!!!!!!!!!!!!!!2FM8448!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!N6!!!!!!!!!!!!!!!!!!!!!!!#D#&!!!!!!!#0#!!!!!!!!!!',
    '!!!!!!!!!0D2)#!!!+!!+!!!!!!!!#!!!!!!2@@GP48!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>6!!!!!!!!!!!!!!!!!!!!!!!#*#!!!!!!!!)D#!!!!!!!!!!',
    '!!!!!!!!!)2**##!!!!!!!!!!!!!!40!!!!!D@H7PD8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#&!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>7!!!!!!!!!!!!!!!!!!!!!!!#*#!!!!!!!!$2#!!!!!!!!!!',
    '!!!!!!!!"$*4*$#!!!!!!!\'!!!!!06*!!!!);@HE4D8!(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"$"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;O*!!!!!!!!!!!!!!!!!!!!!!#*!!!!!!!!!#*#!!!!!!!!!!',
    '!!!!!!!!#*D-**#!!!!!!!(!!!!!8H*!(!!QBH>IKD8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;66!!!!!!!!!!!!!!!!!!!!!!&$!!!!!!!!!#05!!!!!!!!!!',
    '!!!!!!!!#*4400#!!!!!!!5!!!!!ER0!!(0ST@>4O8U!!(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>66!!!!!!!!!!!!!!!!!!!!!!"#!!!!!!!!!$35!!!!!!!!!!',
    '!!!!!!!$4D240D#!!!!!!+!!!!!!-60!((#H;V>Q844!!"#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#HW8!!!!!!!!!!!!!!!!!!!!!!!+!!!!!!!!#*$!!!!!!!!!!!',
    '!!!!!!!#2D4,00#!!!!!!!!!\'!!!A6*!55#FFH68KPU!!##!(!!!!!\'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;X74!!!!!!!!!!!!!!!"!!!!!!!!!!!!!!!!#4*#!!!!!!!!!!',
    '!!!!!!!#**22###!!!0)!!!!!!!!89V0!!0FFH67I48!!#0!!!!(#!\'(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#)#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"!!!!!!!!!!!!!YB670!!!!!!!!!!!!!&#!!!!!!!!!!!!!!!!#4*#!!!!!!!!!!',
    '!!!(!!!$**,*$*##!!0)!!!!!!!!-96$!!2HT>7GKK8!!AD!!!!(!!"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*$#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#4#!!!!!!!!!!!!>B>GV!!!!!!!!!!!!!&#!!!!!!!!#!!!!!!!#2*#!!!!!!!!!!',
    '!!!!!!#0)*20$*$#!!##!!!!!!!!8V8#!!M@H>7QDI4!"=D!!\'!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!0)$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$7#!!!!!!!!!!!#>B<86#!!!!!!!!!!!!"#!!!!!!!!!!!!!!!!#*0#!!!!!!!!!!',
    '!!!!!!#00**0$0$#!!##!!!!!!!$7:I#!!M@F>78DI4!!4D!!5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!$)$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#4#!!!!!!!!!!!DZ[<86I!!!!!!!!!!!!"#!!!!!!!!!!!!!!!!#0##!!!!!!!!!!',
    '!!&!\'!"))0*)$0$$!!##!!!!!!!*]68#!!9@H>OI^I8#!DK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#!!!$)#!!!#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#4#!!!!!!!!!!!6[F687G!!!!!!!!!!!!&&!!!!!!!!!!!!!!!*$0##!!!!!!!!!!',
    '!\'#!!!"$$)0$00))!!$#!!!!!!!2RV84!!7HT>7D^480044!!!(!!\'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#0!!!$))#!00!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#4)!!!!!!!!!!!M_F>788!!!!!!!!!!!!""!!!!!!!!!!!!!!!4$)##!!!!!!!!!!',
    '&!!!!&0$$)*00*00!!#&!!!!!!+4>>`7#!=HHMGD0D4*D8D!!!!!(!&4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$*!!))00#+OG5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**#!!!!!!!!!!!Y[Fa748!!!!!!!!!!!!&"!!!!!!!!!!!!!!!D*)#$"!!!!!!!!!',
    '"!!!!#0$#)*)$$)0!#$!!!!!!!09966W#38HH7ID^004480!!!!!!!#H!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#)!!)#))$#=A#!!!!!!!!!!!!!!!!!!!!!!(!((!!!!!\'480!!!!!!!!!!!O[bb7G0!!!!!!!!!!!!&#!!!!!!!!!!!!!!!20)#$#!!!!!!!!!',
    '&"!!!&*0$**##$0*$$$\'!!!!!!*99V66#:DH<7GD30#4D70!!!!!!!#a!!!!!!!!!!!!!!!!!!!!!!!!!!!!\'!!!!!#)0!$00#$#4I5!!!!!!!!!!!!!!!!!!!\'!!!(!!!!!!!#U-*#5!!!!!!!!07Fb@W<#!!!!!!!!5!!!&#!!!!!!!!!!!!!!!44*$#!!!!!!!!!!',
    '!!&"&%$$#$*)$$$0\'&&&!!!!"!0c9678#67H66WDd##444)!!!!!!!#7!!!!!!!!!!!!!!!!!!!!!!!#(!!!!!!!!!##*!#))$$$74!!!\'!!!!!!!!!!!!!!!!\'\'!\'!\'!!!!!!&--*$!!!!!!!!!ATbbF66##!!!!!!$!!!!&#\'!!!!!!!!!!!!!!**$$#&!!!!!!!!!',
    '!!%##)$$#*)$$$$$#!!&!!!!###=9eWQ44CT667D^##IDD0!!!!!!!ID(!!!!!!!!!!!!!!!!!!!!!!#+!!!!!!!!#$#$"#$)$)-74+!!!!!!!!!!!!!!!!!!!!#!!!!\'!(!!!2=U0#!!!!!!!!!8MFb[7G*0!!!!!!%!!!!&##"!!!!!!!!!!!!$2*####!!!!!!!!!',
    '!!$#&%#"$%)$$#$&#"##"!!&###89eQQGD7>W6GD^#!8PDd!!!!!!!H4!!!!!!!!!!!!!!!!!!!!!!!##!!(!!!!!$$#$*#)$##A94!!!!!!!!!!!!!!!!!!!&!!!!(!!!!!!!*?=$#!!!!!!!!#OFFZZ76*0!!!!!!0(!!&####!!!!!!!!!!!!$*4*"!!!!!0!!!!!',
    '"!#"&%$#)*)$##$+#&##&"5####-V78QHE666YID0#!I0^0#!!!!!!E0!!!!!!!!!!!!!!!!!!!!!!!##!!(5!!!!##&#0))$$$AID5!!!!!!!!!!!!+))!!!!!!!!5!!!!!!$4-4#"!!!!0!!!ITZHH786*0!!!!!!$#!!#####!!!!!!!+!!!!004*#!!!!!#!!!!!',
    '!"&"$$"#$0$##K$!"###"!!!#$A=97If><H6>Y8P^05^gPP$!!!!!!8D#!!!!!!!!!!!(!!!!!!!!!!$#!!!!!!!!#$####*0#)E40!!!!!!!!!!!5!#U0!!!!!!!(!!!\'!!!-h-*$!!!!$I#!(I>HaH8DQD0!!!!!!##!!&##$#!!!(!!!#+!!!)2,*##!!!!#!!!!!',
    '$$"!####)0$$0O#"!###!!#!#0=8e8IG6;FH;GD0^^00dP*3!((!!!8D0!!!!(!(\'!!!!!!!!!(!!!"*0#!!!(!!!######0)#I9I)!!!!!!!!!!!!(#*$!!!!!!!!!(55!!!?e82$!!!!6D(!(I@FZ>84K40!!!!!##&!!&##$#!!!!!!!#+!!##*,)##!!!!#!!!\'5',
    '***!#&##%*$#YW#"!!"##"$"#$--448Y>>THTC000000#D*0!#&5!0EP0!!!!(!(#!!!!!!!!(!!!!#$$"!!!(!!"#####00#4>9I0#!!!!!!!!!!!!#0#!!!!!!!!+5555""4h8A#!&!!;D#"(4FBH>QIK80##d!!##&!!##)$#"!!!!!!#+!!*$2,*#"!!!#d!!(#(',
    '$*0$!!!"$*)#i7&!!!"##&$##)-4448;6H;M9D0D0ggd#D*)!##5!ICP^!!!(!#((!(!(!!!#!!!!!#$#!!(!!!!#$#"$0$$#8H98*0!!!!!!(((!!!")#!!!!!!!!((!((!!4h--$&&(!:D#&!DTbH>I844D0$0#!&##!##$0$#"!!!(!!##!!**,*%&#!(!+d!!!!#',
    '!#*#*!!&$)##YI#!!!!"#&!"$$**4Q6M7@TM>40D^0g##0*#!##5!7GjD!!!5((5\'#!!!!!!!!!!!!##"!!!#!!(+&###0)!!8@640*!!!!!!(!!!!!#*"!!!!5!(!55#(!"!0h4-#"#(#8E$"0<@Ba>I72D40#0#!&#"!##$#!&"!!!5(#$+!!*),/%&!!!5!d#!(##',
    '!!##)!!&$##$>4#!!!!"+!#!"$08DI>6:C6>D00Dd#0(#0*$"###!QI00!!(###"5)5!!"!#5!!!!!###!!((#!##&#$I00!#7MCD^*!!!!!!!!\'5(#$)(#!(5(!##!\'!!!#*,=,,#&"(#8D9#*Y>FH>88PDD3#0#!"&"!$##&I#"!!(#!##!!*$*,*)###"!!##+(!!',
    '!"$#*!!#*#!GZI7&!!!!+0#!#*0*04>9DTD6ID^0000(#0D0!###6QI00#!####(#$#+!!###5!(!!#$"#!"##!#""!$)$#"DFM<A025!!!!!!!55\'###!!!#!!!(\'!!##!#,-=24#"!&#4P8$*6OkabQ4000*00#"!#!!####>D!!!5!!&$"!%%%%*$####!!##!!&!',
    '!!#$$)0&#&&GFI:&!##!#E0)#*#0*7>66E#DDD^D0^D#dP*#!###784DD*#####5!#((+##+###"(##$##"#"!"!!!!#+0!#4M6740)!!!!!!!!\'!+$)###!\'!(!##(5####*#?=2&&"#0U0*$ITFaZZ8400D000#"!!"!#&##<I\'!!!!!+##&%%$%%&#3#(!###!!!!',
    '!!#0#04##"#OkP8$$$$##4$)#*00$7M9M:544DDK0000(0##$$\'&DG80D0#######&!+#######!+#$###!&!!#!""5##*502>>I00d\'!!!!!!&&##0$#!(##0((#!#&5##,%)UU*#&!#C4#887H>HH0ID00300#d#!!!&$%#0YY#!!!!!"##"$%0%)########(!!!!',
    '"&!#0*D$$#A6OP8))$#!!40#*0D2$89M<^#AD0^0000d(0d#D*!$4GI0D0##5###+#+#######!!+####!!!!#*#&!"##4#0A9>I#0#!!#!!!+"#(5#$#!(##8#(5(#"!##%%G,4$##!&24086H66aFIDDK#d0##0#"!!$$$#8HC$&!!#!&#&#%$D$1"###)0d(!!!!!',
    '"!!!$DD#**I6O^D###&!#2P#00*00776C00D2Dgd0dDdd#0\'00#4III^^0###&&!#)+(##0###!!#####5!!&#E0"!##!I$$E<94#00!!#!!!!##!(#$)#+##4###++!!##*RT-U!##!&0E0*G>GiFFI0D4#g0d####"!$$##8>8$$!$4!&#!$$8D$!&##)00#!!#!!!',
    '&!!!#*D#*4DGO^*"&!""080$2)0#D7EC:d*DDKd#0d3#0!d040&D0ID003##0#!!$$"!+0D#&#&""$$$##!!&#4#!!+#A8##76>Dg00!!#!!!#5!!!&$%#(##4$##++!!&!)l>=%&&&!#07408>7>H6D0445g^0####2#$&!"8;80&!0?!""!#*<^+!""5#3##!!!!!!',
    '!$###*8*$*K76^0#!!!&*40"D)#3P48CId4DDDddd0#gd!#IG0&DDG00##+*I$(#$$"##AI#&+#!##$*#&!!!#A#!!!":8$G76>I0##0$#!!!#!!!$#))+##0,4##5"!!#$*BE?%&#&!0470D<68>6OD0K0+dQGd#(!A#"&#$7;ID##$4#$#"#$G^"#"!!####!#!!!!',
    '!"!#4084"0DG^d03!"!!0*0##$d044883gDD*0##d#d0d!#0D0D4IQ03###DD##"&$"##24#5\'$!"$$%$"!!"#80!"!!D*#666O4Dd#0##!!$0"!#*&$$#$$,?=""!!"!!)RB8/##$"!*48))667H>8#d40##If###&00!!"07ODD#"*A$#&###ODD$%&!!(!$##!!!!',
    '!!#!0084$00I0#03##!#020*!0d04A4P#dDD0####5gg(!!300D0D000#0#*G))&#,!!!4I#!!$!!$)$$!!!+88D#!(0*70<8H7d0g#0"&!!#0#!!$$$%###,47!"!!#!!$HF64%$#"!$*8*#666680#3Ig(P780+#&0g!&!0G6*3##=-$!&)#6ODA%$&!!!#)##!!&!',
    '#\'!!#0D4$d0D0ggd#0!0D*!4##0*4264d0DP0###!##5g!(#d0D#D0g0000DI#"!$)!"#-8#!$!!+##/$!!!"7ID$!!=477A4980P###!""!&#0-#!$**!##*?-!&!!&!!)aHH@$*$"!#*=0#GG<>7000IP0I>I##!#$g!#&DO700#$,40###!G6dD%#"!!#$#)(!!!!',
    '!!!)#0440##P#d#5m00)0#P*(!#04?D#0***d##5#####A!##5^D0Q0D^DPII$!%**#"2-**&!"!#,,,$$)!!*4##!#6@0*E9O0#0#!#!#!#%$0&)#&)$!"$*,*!"!$#!!#9[>4$%&""0,6#084Q6D0*00#0K6D^#!##d"$4CIEn#d+-4#!"!!4*##)&&!&)&!!&!"!!',
    '20###04D####!d550-4*4$##"!#2240d0A0d##5(5!!#*0#!#d#d#00P00DID4&!!$/#0444#$$$,*$!!!$#0#)!#$4960I767A00#(##!08%**#!!!$)#!$*,3!*##""#CFH>8)24!$02GD0D*GO0gPP80dDEDg5!!5#$)*I4A0##**0##!!#0D5#####*$&&!!$)"&',
    ',**4*!)40###!$#5#*0***,20#)D40d^#g8#(##(5(#*g#d!5d5##!(D00j^^0&!&#A*8400*##"$$)""!2!##$5#+DMDoM@M4#0dD##!!#2,*DD#!#$$$##)$#+)####A6MT6*$,*!)2H;IDDGOD##06K00OIg0#55d5##*8D05#(#"###$$*#*!!#$##&!$!!#%$"#',
    '***0*)***0##&I55####)440$D2*20#0008+#)#!5#D00#g#(#(!(!!!!ggdg3(#&#D)*40#0$$"""####0####$#0EV0HE>HD0##0#5!0D0*4840)$#!####$!!!##"#OH>A7D4*$!04994AD6DP0#06d00DDd^##d#!53PII*#0!+"#0#*#3#0+#$#$$#$$&!#$$!!',
    '!!$2*24284##D8##0d#((#$*D80####00A###D#!!$0*5d0#!(!5#30##0g####P#**$$$##0##$$$)))0#)#(0A#IC73=0EOID###5(#DDD0***$4?2*0##!!!!!#8!$CH60D042*2447*0$P8#84#4=#0DIDd0d5dd((d4444#d!#$##**0)04D00##0*,$!!!##!!',
    '!!!3#$4**40*4400dd#####02D##!###8A#d#DD#!#**###((5!5d#0DDD*0D00D#0$###0#######$0*0000I4K30*0#4D0DDj#5#5Dg4*D0500#-44*2)\'!###$0I#D76>^D#D448*0*#0#0DD8ID48##IDD###5#gp!#4II=0#!\'#!#)020**D0000**$!!!!!!!!',
    '!!!!$!###0,2*D00000000)$$)#30##04*#d!$0!!!####!!##!!###*0D2*00**000000**000000300A7Ij7DD30)ICD3#DD6E#!8M6E000####0*#*000*20PA7D0IOOT<I8DKDDD$!#8!#0EAD*#058780d#55#O55*444205!!!!##$##0)##)**$$#&&&&""!!',
    '!!!"0$######$00D*00#044*#0#+#(!002###0#00$!(#!#DDD#!!!(##)####0E8A48844878E8D047I877DI4422DA8240DD40I7740DIHG00##&05####0*D00TG6ZYHZF#DO^000000D08#0D4P3#79>D0*0#"d6!+*00P084(!!5#!!!!#&$))0)$4*0##"&&"!',
    '!!!!##*0$####P0IA442$44##0)#!!)00##!!##$#!#!#4AD0000!#(!!##!#0^0#IM84C*8GCA-AK8E8876848-4DD87O7>6663ED#####D#0DIE0*00000#0T;C>6n784DI##n^d#**3A8><GID0462e*7#d00#!!A#!###*DDm!!05#!!!!!!!&""*U**)$#&##&&',
    '!!!!!504#!"#!(#DDD$#+5!!!#4448?A8!&E!!!#!!!20#*)#00#54^##5!(d5!(!!g#(0D^877844878TMC8T8GI0DD[9AF6:e=7667CIE88*00D**444<97F6>9<!#04QD40#d0(K6MM9MADG977G#)+P#0#58D#4g!*8!!0I0(#000$#\'!!!(!#=*,*0$+!$#"!"#',
    '!!!!"#&##+###!5#*00+5!!##!#D=22**0#000##!!5!!!!####4I#3DP0#!00^##(00000000PIDQ>=7CT0H6D4Dd###d#I47848E4I788EC788778@EE67>T>Bg^0DIDDDDD0#!(dD*6CE670)0DD##40##2DI#00305##0D#!!#**#3$$##$&#h=4*0*&!&##!!!&',
    '!!!!!!+$##"!!+!#####(!!!!#0$####0#*00d########!######(D45(###gP0dd0#d#g##dI9MH>>R6AII0#I;7D*)###300**0*C777E877C4Y7>:I#IE#DIg^DID0DD76H7##!5(#0d+DDAA4D*4DD0d3##07:-D03#m000#$(#00$000)*:hU*,,#!!&#!"""!',
    '""!!!!!######$#024240#+!##0#!#0#0###d000000d##00###0P0d0000000DD**3ddd3D2*44DD48=7G8DD044IEID8I4***0DD446<6C87>I000D0#0D3gd0DD0K40*0#I8D0#55#(!##33d0****4IAD44*442A###00*D*###*A,**0$#=2--,,)!""#!!!!!!',
    '$$#&""!!!##"!#&#$0)***#!##$!!###(#5+########00*0###33###00###0D=8D030D08D0*0##d#04D*DI8888EGGIDD8I44E788>>>>I484IIID0*0000##I4#P000D0##030#3#####3d####300D**4-20000!##(######*4,2)###!,&),,%#!&!!!!!!!!',
    '###&#&!!!))##!!!!!#$###!!!#!!!5#!!5####"##0020000##000DDD4D0##4D0!##04D00#00ggddd030D44IIG7C7787666:C784**4DD44I7GE8KDDD400D0d0DDDD0#00DDKKDDD0####0d###00000##*0##0#)##"#+$##*$*0####!"!&)$*2##&!!!!!!!',
    '!!"##""!!##$###!!"####00$!g################&!!!##00002**22D0##0###(#!#0#0#0000000##0000DP487=88887:77E40)))0*DDDI4AD44DDDKDID2*D00#0D^0D0D*DD03##0d###0000$#$##$)0$$0$###$**#!#""##!"#!!!###4*#+&!!!!!!!',
], {
    "0" : -15198184,
    "1" : -16774120,    "2" : -15195100,    "3" : -15201256,    "4" : -14408656,    "5" : -15987712,    "6" : -12040108,    "7" : -12829624,    "8" : -13619140,    "9" : -12037024,    "!" : -16777216,    "\"" : -16777204,    "#" : -15987700,    "$" : -15987688,    "%" : -15984604,    "&" : -16774132,    "'" : -16774144,    "(" : -15990784,    ")" : -15984616,    "*" : -15198172,    "+" : -15990772,
    "," : -15195088,    "-" : -14405572,    "." : -15195076,    "/" : -15198160,    ":" : -12826540,    ";" : -11247520,    "<" : -12037036,    "=" : -13616056,    ">" : -11250592,    "?" : -13619128,    "@" : -10457992,    "A" : -14405584,    "B" : -9668488,    "C" : -12826552,    "D" : -14408668,    "E" : -13616068,    "F" : -9671560,    "G" : -12829636,    "H" : -10461076,    "I" : -13619152,
    "J" : -8882032,    "K" : -13622224,    "L" : -9668476,    "M" : -11247508,    "N" : -9671548,    "O" : -12040120,    "P" : -14411740,    "Q" : -12832708,    "R" : -11250580,    "S" : -8089408,    "T" : -10458004,    "U" : -14408644,    "V" : -12040096,    "W" : -12043192,    "X" : -8878972,    "Y" : -11250604,    "Z" : -9671572,    "[" : -8882044,    "]" : -12037012,    "^" : -14411752,
    "_" : -8092528,    "`" : -12832696,    "a" : -10461088,    "b" : -8882056,    "c" : -12826528,    "d" : -15201268,    "e" : -12829612,    "f" : -12832720,    "g" : -15198196,    "h" : -13616044,    "i" : -11253676,    "j" : -14408680,    "k" : -10464160,    "l" : -8878960,    "m" : -15984628,    "n" : -13622236,    "o" : -13619164,    "p" : -15201280,
}, 3);
			return get(0, 0, 600, 300);
		},
	},
	buildings: {
		building_1: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                                                          ',
    '                                                                                                          ',
    '                                                                                                          ',
    '                                                                !"#     $%% %%"                           ',
    '                 %  #"!      %                               %  %&\'(%!!)*+# $,-    %                      ',
    '             %"%../)0&),.%%/%1/  2!                         %."#)033.4*&+\'5..$$.6%,)! !!                  ',
    '            %7++*1\'8*&*1*.9498+:)\'#%  "                   /!:;.4999\'130.)<,,")5,5:&1)+))!                 ',
    '           %%.*\'1=..>0?**\'00\'.+\'0).9.;;:@@#            ();1\'0\'..99A0.B>4)C.5,A5D:99+01?\'?)#%              ',
    '           +0*>*EF$=;91..)0DGH<I<<JKLGMNOPPQQQQQRSRRQMTUVTWXTGHXYZZ[Z9\'4=49]5HV94++9^<Z?XHG_QQMNRRRR`a    ',
    '          #).\'*=b55)/:.,c<9Wde9?ZWddfghghihhhgggjkgggMSWlTfMNmnGWooo9Z::**9+<We9.D.)DXeXjijhhjjjjijiia    ',
    '           !:<=$pq09):DorTsfjdXd`ij`jggggjghgggggggggjQQGIhttQutg`vwvvH:9:)9DoexXeHevyj`jhhhhghjjjhjja    ',
    '           !:..z5)4):9oHveX``w{{iijjjjjiiiiiijjggggjjjjjfQjgg|Mggi`w}v~@@)9490?HHre¡¢¢i``iijijjiwijjha    ',
    '           :;::£,:$):4)Do¤HH¥¥¥¦¦¦¦¦¦¦¦¦¦¦¦¦}}}}}}}§¦¦¥¥¦¦¦¦}}¡v}¡¤(~HH):.4C)?YHH¥¤¥¦¦¥¦¦}¦}}¡¦¡}}}¦¦a    ',
    '          %..Y((a@.)¨¥9:@©a(aªªªª««ªªªªªªªª««ª«««ª«ªªªªaªaaaªªª@ª««¬@ª[)@::)91.:DDH(ªªªªªª«ªªªªª«®®«®«    ',
    '           @<¨:(a¥D.¤¡¤:¥¦¥¥®®®¯}}}°¦¦®®®±²±±¯°}§®®®®®®®®¯¯®®®®¥¦¡}¡¤¡H<\'.($-.;Y)H¡¥®¦¦®®®®¯¦¦¦¦§§}¦}a    ',
    '           @Y@¥~¤«¤)°°}D¡}}}²±±³±±±³²²²²}±±±±}³³±±±²²±³³³³³±±±±}±±±re¡?0?@:,5,:.H}}§±²²±±±±±±±±}³³³²}     ',
    '            @:¥¡D¡¡5´±±v}±³³³³³³³³³³³³±³²µ{{{}³³±³³³³³³¶·¶³³³³³³³³¸´´e¹[0H<5-)::¡}}}³³³³³³³³³³³³³³³³¢a    ',
    '            ©(¥°¤¡ºH±±±r´³³³³³³³³³³³³³³³²»¼½Q}±³³³³±³³³³³³³³³³³³³³³³³T[[¾¤Z)$.:¥}}`°¿³³³³³³³³³³³³³³±¦     ',
    '             ©¦Àeeº´´±±±¸¸³³³³³³³³³³³³³³²ÁggÂ°³³³³³³³³³³¸¸¸³³³³³³³³±À}¥[Zq\')+:,vÃ`R°¿³³¸¸³³³³³³³³³³³      ',
    '              ¡¿rH¡±ÂÄÅÆÇÇÇÇÈÈÄÇÆÆÇÇÉ³³³±½ggÊ}³³³²ËËËËËËÇËËËÌËÌËËËËËÍÆ9<:¥<+)::¡±QÎ°±dÄÄÄÄÄÏÆÆÐ³³³³³      ',
    '              ¡¿Ñe´¸ÆvÒÒÒÒ¦NvÒÒ~~~vÓR¶¶·³¼ggÊ°³³³±ÔvvvvvvvÕÕÕÕÓÖRR`dÃ¢Z9<@H\'\'.o´³{t°³`SÒvvvvÒÓØ³³Ù³³      ',
    '              ¡¿¢e±·ÔÒ©©©©¥ÚÚÚÚÛÚ©©~Ü³³·³ÝtgÊ°³³³³ÞÚÚÚÚÚÚ©©©ÚÚÚS¼¼¼PQMs9@@@0)oHt³{Ý²·RS¥Ú©¥¥ÚNÂ³³³³¸      ',
    '              ¡¿±e±¸ßÕ~~¥¥HÚÚÚÚ©¥~ÛÕ_¿³³³àtt_°³³³³ÞÚÚÚÚÚÚ©ÚÚÚÚÚSáâÝãäå09¤@<.+:Hd`hÝ²·RSÚÚÚÚÚÚæÂ³³³³³      ',
    '              ¦¿±r³±çèèéê©c¥Ú¥ÚcëììÕÜ¿³¿³íîîÝÙ·³³¿ïÚÚÚÚÚÚ©ª©ÚÚÚæ¼¼OðäP?<e¥9.9H¥QijÊÙ·Mæ¥¥ÚÚ©aÓÂ³³³³³      ',
    '              ®¿³±³³ëêèèèêÛÚÚ~êììë~ÒÐ³¿¿±ÝîgÝÙ·³³¿ñaÚÚÚÚÚ©aÚÚÚÚÕ½OòðäO0<àeZ?o¡¡tggÝ°¿Ræ¥¥ÚÚa©ÓÂ³³³³³      ',
    '              ®³³³³³Í~~êèèêéëÕìë¥Ú¥ÒÜ¿³³±ÝggÊ°³³³¿ó`ÚÚÚÚÚ©ÚÚÚÚÚvåòððätK<f¥Z\')}}ÝggÝ¯¿`ÖÚÚÚÚÚÚNÂ¿³³³³      ',
    '              ¯³³³³³ÍS¥¥~cèôôôì~¥¥Òy_³¿³±íhgà°³³³³óÁ¥ÚÚÚÚ©ÚÚÚÚÚÕõQÉðttkS»¦D).e}öggÝ}¿ÃN¦Ò¦vvySÂ³³³³±      ',
    '              ®³³³³³ÌyvÕììêÛèôèêêc~~_³³³±¼½øù°³³³³óÁ¢ÚQ¦Ú©ÚÚÚ©©HQttúttkMà¦D\'D¡}R»»½²³`NÚÚ©©¥¥æÂ¿³³³±      ',
    '              ¦±³³³³ÔÖûôôôé~Ú¥cìéêéëÐ³¿³}µ{{w}³³³³ñtQkkM¦ÚÚÚaa©~¦ÒÃMQQMMÂ¡L1)¡}i{{{±·`æÚ©ÚÚÚ¦æÂ³³³³³      ',
    '              ¦±±³³³ÍôüôÛ¥¦aÚÚÚ©©êéë_³³³}j{{àÙ·³³Ùñ»tOtý¥¥ÚÚaÚÚÚÚÚÚSþþQ¼Æ}DZo¡±¼{{»}³`Ö©ÚÚÚÚ¥æÂ³³³³³      ',
    '              ¦³³³³³ÌÒ¥¥Ú¥¦©¥¥¥©~ÚÚ~_³À³}Ý»»Ê°·¶³Ùñttgttu¥ÚÚaÚÚÚ©©©dHTk¼Æ}I.o}Àÿ»ùÊ°³`ÖÚÚÚÚ¥ÚæÂ³³¿³³      ',
    '              ¦³³³³³ËÒÚc©¥¥Ú¥¥¥©©Ú¥¥É¿ÀÀ}¼ÁÁÝ°¿³³Àñ¼Átgt`ÚÚÚÚÚÚÚ©©ÚddTk¼Ā}ā.o}±íÁÁÝ°³`Ö¥¥ÚÚÚÚNÂ¿³³³³      ',
    '              }³³³³³Ç¥©Ú©X¥¥~¥¥©©ÚÚ¥Ă¿¿³²¼ÁÁÝ¯¿³³³ă½ääÁÁjÚ©ÚÚÚÚÚÚÚ©ÚÚÚ©¼Í¢}oD´±ĄÁÁÝ}³`æ¥Ú¥©Ú©vÂ¿³³³¸      ',
    '              ¡±II³¢ÐSSąĆćĈĈĈĂĂąĂÉÉĂĂ¿¿·±¼ÁÁÝ¯³³³±ĉ¼t|ägyÚÚÚÚÚÚÚÚÚÚ¥ÚÚÚ¦Í³TZor±ÝÁÁâ²·i_ÉÉÐÉMMÉ_³³³³µ      ',
    '            #/v¢Ċr±¢SSSSSRRRRRRRRRRMR¿¶·³Ý»»à®±±±Ùĉ¼g`¢´Ã¦¥ÚÚÚ©ÚÚ¥¥¥ÚÚÚ¥Ô³āĊe¡±ÂttÝ±·`RR`MRMRR`³³³³{      ',
    '             )veĊċ±±±±±±³³³±±±±±³³³³³³³¶³ČO»Ø®±±±²ă»j¢±r`¢¢¥¥a©ÚÚ¥¥¥ÚÚ¥¥Ô³ÑI´ċ±Ê»Pö±³³±±³³³³³³±³³³³³      ',
    '            :)<<H}rr³³³³³³³³³³³³³³³³³³³³³čggÝ¯³³³²Ì`dRdÃSÃSNNÕÕvÕÕÓÓÓyvvÐ³¢e¢r±íggÝ²³³³³³³³³³³³³³³³³      ',
    '           %6:?¤¡¡LZeĊW³³³³³³³³³³³³³³³³³³Čggà°³··PËËÇÇÇÇÇÇÇËĎÏÆďÇÇÇĐÍÍÍÇÆ`¢eÑ±³âggÝ°³³³³³³³³³³³³³³³³      ',
    '            @:<JsD4[0DZrLr¢±±}´I±rI±³³³¶³âggà¯¶··}¦¦¦¦¦¦¦¦¦¦§¦®®¦¦}}}}}}§}¢e³³±íggÝ°³±³³³³³³³³³³³³³³      ',
    '           :@<<+H4)0DHq0;Zo}}?Z?eċe±³¿¿¶³íííØ®¿³³¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿±±¿¿¿¿³³±}³±±Âđđí°³³³³³³³³³³³³³³³³      ',
    '           )<0<D¤))DeuDIXsuvSuDslXWR¢}³¶±g{w»¯³³³³¿¿¿¿¿¿¿³¿¿¿¿¿³³¿±±³³³¿³³±´³³±h{{Á}³²RRRRRRRM`³³³³¿      ',
    '            %;0e¥¥:¥vHDDHvyvyNNDXNNNy±±³±t{{»¯³³³³³³¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿³³³¿³³³±´³³³½µĒ¼±³¢æNNNNNNNS³³³³³      ',
    '            @)<v¥D:@RÚ¥:@©©ÚÚÚÚD©©©¥R³³³²h{g»¯¿³³³³³³¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿À±³³³³±±³³³tĒĒ½²³`SÚÚÚÚÚÚÓÂ³³³³±      ',
    '             :Ze¤¤oHØÚ©©©Ú¥¥ÚÚÚ@@@@~M³³³²Č¼áí®¿³³³³¿¿¿¿¿¿¿³±±±¿¿¿¿¿¿¿³³³¿¿¿³³³³ē¼½Ý°³`ĔÚÚÚÚÚÚNÂ¿³³±}      ',
    '            ©<TsDeovì~¥©©Ú¥¥ÚÚÚ(¥~cëßr³±}ČÁÁđ}³³³³³³³¿¿±rÑ´eesW³¿¿³³³³±³³³³³³³³âÁÁÝ°¿`ÖÚÚÚ©ÚÚÓÂ¿³³³±      ',
    '            :)vIoo¤¡ĕÛêÛa©¦¥¥¥¥c©(êêĖ9´´¡ČtÁö}±d±³³Lr¿¿±ėK4oZ?LāI±±±±±±¿³³¸¸³³³âthÝ°¿`ÖÚÚÚÚÚÚNÂ¿³³³·      ',
    '            @%rr¤e¡}üìèêêÛ¥¦¥¥¥Ûëêêìì$I?oÝhhÝvW<II[[LIW´e0?<<09[<IrL<r±±±rs¸¸³³ÝÁtÝÙ¿`æÚÚÚ©Ú¥ÃÆ³³³³·      ',
    '            :¬WT¤¡¡´ĕ~êêëììë¥~ëêììèĘęHZ<<ĚQěI[*\'KK49K<?K??Z?9oL[<<[<ZDo<;ZZLĜ³ÀÊÝÝÊ²¸`S¥¥¥Ú¥¦dÅ³³³³{      ',
    '             @He¤H¤´ì~~~Úëûëôèôôôôê~v}eIvPT¹*?):::¨@D)@@@Y:@@@@HDD:DD.<0))DDH±±tggÁ°¿`SÚÚaaÚÚNÄ±³³³{      ',
    '             ©Wā¡DH¡Ä¥©ªa©ééôôôôc~Ú~RÀrr}ĝwIZRÃrÃrWd¢ed```QjQw````ÑdD9DIWWSSM¦}w{{g°¿`R¥ÚÚÚÚÚNÂ±²³³{      ',
    '            ,<WÑLov}ÂÒ¥¥ëôìôôê~(©©©~ÉÀ±±}îĞWoRrvvvHvvvy¢¢ğ¢ğğ¢wğ¢±¢¢rHXeN¢yy}«}wğ{g°ÀÃNÚÚÚÚÚÚÓÂÀ³³³{      ',
    '           ©<9*?D¡v}ÂÒ~ìéôôc¥a©~ÛcĠĠÉÀ±±}ČġĢDíÿ_đöXííàÝÊíRííÊöđÊ»ØÊ»PÐÏÐö_ÊàR¥}``i_°¿dæ¥¥¥¥¥©ÓÐ±³³³±      ',
    '            (;<oH¡¡vPêêêê~ÛÚÕ~~¥©(Û~ÖÀÙÀ²áîjKàđđÊÝđÊÊÊÊÊöÆöÊÆöÊööÊöÊÂÂÂààÊÊÊØ¦}QggÝ}³`S¥¥¥¥¥ ÕÐÀ±³³±      ',
    '            ")XVe¦Â~P©~ê©c$cHvvvv©~cÉÀÀÀ²¼gjąªyry¦y¡¦¦¦¦¦¡¡¦¦¦v¡v¦¡¦¦¦¦¦¦¦yr¦¯}tgg¼}³`S¥¥Ú@©:ÕÐÀ±²±}      ',
    '            ,,GWHDDDsģsĤĥĦ944JJSuSSSSÀ¿¿²½gjÐ¯««®¦®®®®®®®®®«««««®®®®®«««««¥¦¦±±½ÁhÝ}±ÃNvÕD)¬<sl´³³±±      ',
    '           #:.ee<?ZDoIWT<<<¬<<XMÉ___MÙ¿³²¼gjÐÙ°±®®®®®®¦®®}®®®«®®®®®®®®®®®®®§²³³¼ÁÁâ}²æSSßcD9D?<e±³³³      ',
    '          /.:<eċZ*?H¤?<Ie¡¦HoD¦°}ÙÀÀÀ³³¿ÙÝ»»ÂÙ±¦®°}}}}}²±±±²}}}}}}²²²}}}}}}}³³±ÊÝÝí}±}¦¥¬HD<?Zv±³¿³³      ',
    '          !,)4?ZHL400??e´´}}X<´±³³³³¿³³³}»tt»¿¿ÙÙÖħĨħĈħħßĆĆĂĎßĩĪĪĪĔĆĨĎßĈĈy³³³³²hhh½²³±±´ee<??o¢³³³³³      ',
    '           )=q?D¥īDDD<Z<´±±±}¡}´±³³³³³³¿}j{{t¿¿³³ģÖĬĬĭĮĬĬįĭĈĨħĪĬĬĪİĪĪĪıĨĪv³³³}}i³{g}³³r¡eZ?¤?Hyr}³³³      ',
    '         ::+:;?JL..4@???9DZ95D@@@a¯°²Ù²²¦ww{jÙ¿³³~ÕÖĩßĩêëëÖĲĩĩßĩëcÛcëëģÕÕ}³³³³²ğ³{{¦}XDeH::¥o<<):¡}}~     ',
    '          %:)9ĳ@~@@<@:)Doo<It¢ÁggÁÁĴááátrÃ¢`jÙ¿³³yÓÕÕÓv~~~~ÒvvvÒ~ÚÚ¥~~v~vy¢³³³²iiji`áÁÁÁÁhhhhXsftÁÁggĵ    ',
    '          :\'9JHsH~vXDZ@¤eXsXjj|ggggghhNj¤KN»Q¯ÙÀ«ĔĂĔĔæĔßußĲĲSGąĔÖÖßßÖÖÖÖÖÖ¦³²}}»ÝÝøwjÁÁÁîgĶg{wggtÁggg     ',
    '         :.)):HDryğrZ.De}w``jµ{ķ{ğ¢ğwÃDXZovQQ®³³®ÉĂSĂĂďĈĆĈĪßMMĔĔĨħĂĂSSSĔæÕ¦±³³²âggÝ²w{ķĒķ{ķ{wwwğğĒ{{{     ',
    '         !%:::@H¦¦¥:DY:¦¦¦¡}}}}}}§¦@H:)o9.Hv`}³³}ĂĸÖÖæĔĂĂĔĔĔÉĔÖßĨĹĸĂĂĸĸÖÖÕ¦±³³±ČggÝª®§}}}}}§¦¦§§}}§§¦     ',
    '           %:)HZ¡¯eHD:.v}¦®®¯°°°°¦¥@oD)<\')DHr}³³³yvÒÚ¥~~~Õv~~~~~~~ÒÒÒ~~~ÒÒ¦³³³³âîgÝ«®®®¯¯¯°°°°¯®®®®¯~     ',
    '          !("(oo}±¢IDoDr±±²²²²²±}±HDZ<)DDNWHs¡³³³±SÕa©©ĵ©Ûaaĵĵĵĵĺ©Ú¥ªÚ©Òë¦}³³³±Ý»t»®Ù±²²±±³³¿¿³³±±³³H     ',
    '         %)% %:er±¢¡XDeğy³³±¡³±±rHHoI<+\'H`XDD¤¡³³±ÉÛ©Ú©©Ú~aaaÚaaĺÚÚÚÚ©©Õë±³³³±²P»Øà®À³³¢±³³Ļğ³³³³³³³~     ',
    '        !(55(6HrHr¢wDo¢¡eevH}³eH¢eD\'?)))@DDDoH±³±±ħÕ©ÚÚÚÚ~ĵaaaª©~ĺĺ©Ġ(©Nĭ³³³³±}ØttČ¦¿¿Ãæ±±¢ÓļÃļ±³³³³~     ',
    '       ,+@+$,"Decr¢}DDreHHvDHeDDHeH<Z..:@..oooā³±NĬÕ©ÚÚÚÚÛaaaaªcÛ~Û~(©aNĭ³³³³}}¼ĒgÝ®¿¢Ãæ`wÃSæÃÖÃæğ³·~     ',
    '      %"$$):,,9Xer¢¢Hv±´}eeeZ??ee¤©¥oZ+:))DDo):Ñ¢üĽÕÚÚÚ~Ú~Òĵĵa©êÛcÛ~©aaÕľ³³³³³±ÝggÝ®±Ã¢ÃÃ²`¢¢Ŀ¢RæŀğŁ~     ',
    '        ().5,,DrDD¢¢XDvv¢NeeY<<HZZ@HDD59)oIWł)o{ŁğįÕ©¥~~~~a©ÚÚ~êêêÛÚ©©aÕÖ³ğN³³±Čgj¼ª¢Ã¢Ļğ¢i¢¢¢¢ĻRR¢·~     ',
    '       "/,:.,,I±DX¢±rHr¡}ee¡eroZH¤¡HHL?;:eŃWe:H±±±ħÕ©¥~~Ú~a©Ú~êêêÛ¥Úa©~ëĪ¢NN³³±Ø»»P«±ĹÃ`¢yĻyÃyyy¢ĿNńH     ',
    '   @!  Ņ:)::,)<WIXā¢rD¥¥HDv¥v¢yHD¤±¡D?<..))oI::¡±±ĈÕ©~~~~Û©¥ÒèêêêÚ¥ªĵa©ĩį±¢¢±±²¼gg»®²æŀj`¢ÃwyyĿw¢Ãļğ~     ',
    '  %);:(6)(5,(9+ZDHv}´Dv¤rr¢¡r³±HD¤HD)).,D.)<D@<e¢¢Ĉë©Ûĺ~~ÛÚÒÛêê©ëÚ¥Úa©©ĩû¢±±±±²¼hhÝ®±æyĿ¢R¢¢¢Ŀwy¢ÃĿ³~     ',
    ' @@)0IDHH(55,(<oovv±¢Õrvvr¢}IeeHHH):D,,,:)D:):)vÓôĈģÚ~~~~cÚÕęê©©ëÚÚÚa©©ĩìņ¢±±±²¼ggÝ¦±æÃ¢¢N}}ğwĿĿæ²³¶~     ',
    '©<D[ITIHHH,5,(<H¡vc¢¢vever¢}ZZD¥~¦DH:,:,(D,HD:HrNèĆĩÚ~~~~ÛÚÛèêa©ë¥¦Úa~ÕĩôëÓÓÓ±±_QQ»¡²ÃÃÃÃÓy¢yyy`æğ³¶H     ',
    '<?KKXoHH~H:Ň,ŇIre¥,¦¢y¦yy¢¢¡<Ze¥ryrH::,,:ň<DXD¥²³²ÃÕÚ~~~¥~ģÛê©ªÚë¥¦Úĵ©~ëû²±±±±²Ąwwà¦}¢æÃÃr}¢ğğw{ğğŌÀ      ',
    '%DZHD<D:(@~(,:IeHHHHyy¡¤HvvrereHoHD:H(()HD)Dg¥¡²³²¢vv¥~~¥êìê©ÚaÚë¥¦aÛìĘëō²±±±³²QÑ`W:}±±³¢r²ğ}ğ{{{ğ±Àa     ',
    ' :o<oD:((K@H<+Z<DHHoHHH.)DDsKDZ??<D<DĦY)<9)D¡¥¡¥}±ÃvvyÚ¥ëëéÛÚ©a©ëÛìôôì~~ì¢±±±¢±WWW?)¡±±¢e4}}H~}}}ve´ ~    ',
    ':<ZsDHH4<<DHo;DoeeeIo?Z.)DDZD<D¤HZC9?.\'==)))¬D¤e¡rĽ~¡yvìêê~aa~©êììĲì~~¥cìy±eDy´I<4Doe´N9<)ZHZ,}²rH¤¡@!    ',
    'IoHHH~(:<99qZDooe¥Hooo94<<??<?<L¤HD99::<*9.<9cH¡rSŎ~Ò~êÛÛÛ©©aÛĠÛë~ûôìì~~Ûy}oZoZoD<ZDZZ<))9\')\',¡}<?Do©!!o  ',
    '!©HH~()@Ho?qJ?DoHD?3*oL<DDD9?<DoH<:(£:,9)4+YHHHevĆÒX¬¬~ÖßßĨĆĤlĂĂĂĂĂĂĔĔÖÕĆÒvZ?9))<?::<<<?D:)))<HH<9<5(:@   ',
    ' ©HHHH<ZHJ0LDD¤H<C9?9L9?H¤HD+HH?:)),5$)ZH::9DHHHHĩ~(:(cÕÖÖëÖģģXÖÖÖÖÖÖNÖÕÉÒHD:+44;.\'D9=9ZD<:5:,549D¬+5:~!  ',
    ' ©HHoZKZDDLDHH¥HD<<o<DD<D¥¥~:HD?\'\'),94::DD(:(<:c~ģ~()HģÖußĩĔĔßģÕXXģÕXÕģÕXcD099?Z4D.)D<DHD)(:(H,),:¬:,H:@!!',
    ' (DILIoHHHo~HH¤HHHH:HHHHHH~HD<<9):(?9ooH::(H((),(ģßßĖĆĔĂĂĂĂĂĂĔĔĔĆĆąąąÖuc44<9ZYDHDHD)Do@@::(@c,,:((((,((((@',
    ' %!%"@©©@@@©((@@@(@@@©©%©©(:(Ho::),::::(©%%@(:.),(©@©(~~~~~~ĺ(¥©¥©~~ÚÚ©())::::::,~(::Y::):@:(%%%%         ',
    '                                                                                                          ',
    '                                                                                                          ',
    '                                                                                                          ',
], {
    "0" : -11505632,
    "1" : -11505648,    "2" : -13615104,    "3" : -9400288,    "4" : -10457056,    "5" : -12566512,    "6" : -13619200,    "7" : -11513856,    "8" : -10452976,    "9" : -11509728,    " " : -16777216,    "!" : -16773120,    "\"" : -14671872,    "#" : -15720448,    "$" : -11513840,    "%" : -15724544,    "&" : -10457072,    "'" : -12558320,    "(" : -14671856,    ")" : -13615088,    "*" : -10452960,
    "+" : -11509744,    "," : -13619184,    "-" : -10461168,    "." : -12562416,    "/" : -14667776,    ":" : -14667760,    ";" : -13610992,    "<" : -12562400,    "=" : -9404384,    ">" : -8351696,    "?" : -12558304,    "@" : -15720432,    "A" : -9404352,    "B" : -9400272,    "C" : -9404368,    "D" : -13615072,    "E" : -10465264,    "F" : -10469376,    "G" : -12558256,    "H" : -14667744,
    "I" : -13610960,    "J" : -10457040,    "K" : -11509712,    "L" : -12558288,    "M" : -12558240,    "N" : -13615040,    "O" : -11501440,    "P" : -11505552,    "Q" : -12558224,    "R" : -12562336,    "S" : -12562352,    "T" : -12558272,    "U" : -12554176,    "V" : -11505600,    "W" : -13610944,    "X" : -13615056,    "Y" : -14663664,    "Z" : -13610976,    "[" : -11505616,    "]" : -8351712,
    "^" : -8351664,    "_" : -11509648,    "`" : -13610912,    "a" : -16773104,    "b" : -9412592,    "c" : -13619168,    "d" : -13610928,    "e" : -14663632,    "f" : -13606816,    "g" : -13606784,    "h" : -12558208,    "i" : -13610896,    "j" : -13606800,    "k" : -12554128,    "l" : -11509696,    "m" : -13602704,    "n" : -12554160,    "o" : -14663648,    "p" : -9408480,    "q" : -10452944,
    "r" : -14663616,    "s" : -12562384,    "t" : -12554112,    "u" : -12562368,    "v" : -14667728,    "w" : -14659488,    "x" : -10448768,    "y" : -14667712,    "z" : -9412576,    "{" : -14659472,    "|" : -13602688,    "}" : -15716288,    "~" : -14671840,    "¡" : -15716304,    "¢" : -14663600,    "£" : -12570608,    "¤" : -15716320,    "¥" : -15720416,    "¦" : -15720400,    "§" : -15720384,
    "¨" : -15716336,    "©" : -15724528,    "ª" : -16773088,    "«" : -16768992,    "¬" : -12566496,    "®" : -16768976,    "¯" : -16768960,    "°" : -16764864,    "±" : -15712176,    "²" : -15716272,    "³" : -15712160,    "´" : -15712192,    "µ" : -14655376,    "¶" : -15712144,    "·" : -15708048,    "¸" : -15708064,    "¹" : -13606880,    "º" : -16764880,    "»" : -11505536,    "¼" : -11501424,
    "½" : -11505520,    "¾" : -14659552,    "¿" : -16760736,    "À" : -16760752,    "Á" : -12554096,    "Â" : -9404288,    "Ã" : -13615024,    "Ä" : -8355712,    "Å" : -8355696,    "Æ" : -8351600,    "Ç" : -7303024,    "È" : -7307120,    "É" : -11509664,    "Ê" : -9404272,    "Ë" : -6250352,    "Ì" : -6250336,    "Í" : -7298912,    "Î" : -12562320,    "Ï" : -8351616,    "Ð" : -10456976,
    "Ñ" : -14659504,    "Ò" : -14671824,    "Ó" : -13619136,    "Ô" : -6246240,    "Õ" : -13619152,    "Ö" : -12566464,    "Ø" : -10456960,    "Ù" : -16764848,    "Ú" : -15724512,    "Û" : -13623264,    "Ü" : -10461072,    "Ý" : -10452848,    "Þ" : -5197648,    "ß" : -11513792,    "à" : -10452864,    "á" : -11501408,    "â" : -10452832,    "ã" : -8351648,    "ä" : -12550000,    "å" : -11501456,
    "æ" : -12566448,    "ç" : -9420768,    "è" : -11522016,    "é" : -11522000,    "ê" : -12570592,    "ë" : -12570576,    "ì" : -11517904,    "í" : -9400160,    "î" : -13602672,    "ï" : -5193552,    "ð" : -10452912,    "ñ" : -4144976,    "ò" : -10452896,    "ó" : -4144960,    "ô" : -10469328,    "õ" : -10457008,    "ö" : -9400176,    "ø" : -10456944,    "ù" : -11509632,    "ú" : -9404320,
    "û" : -10469312,    "ü" : -10465232,    "ý" : -9400208,    "þ" : -12554144,    "ÿ" : -8347488,    "Ā" : -8347504,    "ā" : -14659520,    "Ă" : -10461088,    "ă" : -3096400,    "Ą" : -10448752,    "ą" : -11509680,    "Ć" : -10461104,    "ć" : -10456992,    "Ĉ" : -9408416,    "ĉ" : -3092288,    "Ċ" : -14659536,    "ċ" : -15712208,    "Č" : -10448736,    "č" : -10448720,    "Ď" : -8355728,
    "ď" : -9408400,    "Đ" : -7298928,    "đ" : -8351584,    "Ē" : -14655360,    "ē" : -9404256,    "Ĕ" : -11513776,    "ĕ" : -8363968,    "Ė" : -11513808,    "ė" : -13606864,    "Ę" : -10469344,    "ę" : -11517920,    "Ě" : -11505568,    "ě" : -13606832,    "Ĝ" : -15708080,    "ĝ" : -14651248,    "Ğ" : -14655392,    "ğ" : -14663584,    "Ġ" : -14675952,    "ġ" : -9400144,    "Ģ" : -9396080,
    "ģ" : -12566480,    "Ĥ" : -10461120,    "ĥ" : -11513824,    "Ħ" : -10461152,    "ħ" : -9412512,    "Ĩ" : -10465200,    "ĩ" : -11517888,    "Ī" : -9412528,    "ī" : -9400256,    "Ĭ" : -8359840,    "ĭ" : -7311264,    "Į" : -7311248,    "į" : -8363952,    "İ" : -9416640,    "ı" : -7307152,    "Ĳ" : -10465216,    "ĳ" : -10461136,    "Ĵ" : -11505504,    "ĵ" : -16777200,    "Ķ" : -13606768,
    "ķ" : -14659456,    "ĸ" : -11513760,    "Ĺ" : -10465184,    "ĺ" : -14675936,    "Ļ" : -13615008,    "ļ" : -11517872,    "Ľ" : -8359856,    "ľ" : -7311280,    "Ŀ" : -14667696,    "ŀ" : -12566432,    "Ł" : -15708032,    "ł" : -10452928,    "Ń" : -13606848,    "ń" : -14663568,    "Ņ" : -15728640,    "ņ" : -12570560,    "Ň" : -13623280,    "ň" : -9404336,    "Ō" : -15716256,    "ō" : -8368064,
    "Ŏ" : -8359824,
}, 3);
			return get(0, 0, 318, 257);
		},
		building_2: function(){
			background(0, 0);
			Display.pixelArt([
			    '                                                                      ',
			    '                                                 !                    ',
			    '                                                "#$                   ',
			    '                                              $%&\'()*                 ',
			    '                                             +##,#-./$                ',
			    '                                             $.(--..0$                ',
			    '                                             $-,,#-1-*                ',
			    '                                             2-,,#-1.*                ',
			    '                                             !3,,##41$                ',
			    '                                             !(,,#-.1                 ',
			    '                                             $(55#-..                 ',
			    '                                             $-#--1..                 ',
			    '                                             +4---...+                ',
			    '                                             *.+$$$$.                 ',
			    '                                            *+.$+ 6$.                 ',
			    '                                             $$$$+$$4$                ',
			    '                                            *.$+* $6-$                ',
			    '                                      7--/"-#%---8-8#-$               ',
			    '                     *                ########999###:-"$              ',
			    '                   **;*<              +-----8-,%#####...              ',
			    '                   *=>6?@*            ",###%9#AA8##,,..$              ',
			    '                 @B+CDECC<F@          "%-4-#,##G-.1,,..$              ',
			    '                ?=C;H=I<<???*         "#-#-####J3K5,,..$              ',
			    '                *LE;<+MNMC+CC+        "##O#%%##P--#,Q..$              ',
			    '              *?=RR<<CSNNTCEE*        "9#.(9%#1(-.-#,..$              ',
			    '              *<R<CCFF++++CC<<C*      $,%-,,,8-,8-#%A--$              ',
			    '            *<R<CU<M+CEUDMLEL;<I++   $.%8%9A,8####9QA--.       +//.   ',
			    '    *VWVXYVWZV[]^MIUU<U_;R<??"`QVWaVVWab]bbcbbbbQ]bbVcV]VbVbbbVWXXV"  ',
			    '    !aVVVVV]VVVVbQd<<?+CC++6?eccVVVc]bV]VffVVVa]Vbbbbbcbc]bbg]c]c]Q"  ',
			    '    $[QQQQA%^A^QQMhh<DUCC?C"i9%%AAA^^^A^QQQ^QQ^^^A^^^%%^^AAQ]^A]QA%"  ',
			    '     !..!$$!!+!+++++?N?<C?++++!!!!!j/+!/.++.////..++++!!+++///.+++$$  ',
			    '     2klmmkn)ll)j+N??N`I?+jjnllll)noo)jmnnmmmnnn)lllllnlkmmmmnmoll*   ',
			    '     *pqnopoprpsllt"?N+I++/lrururp)prljooooooosppppppopupssqsplrrr*   ',
			    '     *pqllvvqqqqq)ss)N;??+")eqwsrsnpplnopq^^xxy]wppprroxxx^x^^lzrp*   ',
			    '     *prll"{{..{3xrptt;C++$$$$-ls)nppo)ope|\'(\'}~¡rsorrs3{.¢£¤Gl¥zu*   ',
			    '     *ssl)?$$0{{\'xrrss¦RC+$$§§#lolnprsnrrq¨00|~©¡rossso3$$Pª«¡ozzu*   ',
			    '     *ppll"{$0{{¬xppol"?$+0$$$(lllnsslnrrw®00{{¤¡osssso|$$¢ª¤¡lzuu*   ',
			    '     *proll$$000Pxsoool?.{{{$$-tsln)lnmprw00${{£bpsspps.0$¯£¤¡lzuu*   ',
			    '     *prsll{0$0{3^oooooM#$1100-Its/os)jsse000$0Kcpsppps1{.KP£Glurr*   ',
			    '     *proll0$$$$|^ooossM°{}±0{#Mtqlupljooe²$$$$Kcrppppo.$$K£}Glrrp*   ',
			    '     *orlll$$$$04^osoppM|P¤K1³|tpslupljloe²$0$0±V´rpppo1$§±0£Gloso*   ',
			    '     *prsl)²$0$03xpssprq,µ¤P££}rplluulmooe${{{{{V´pppsl4$§±$KGlrpr*   ',
			    '     *prso).4(4##eososss,~}®PPPlll)rronso:.--:--]´pppsl4-#33#%lrpr*   ',
			    '     *pslq¶¶¶¶¶¶¶^ssoooxV¶¶¶¶¶¶)ll)lol)soV¶YYYWWYprrpr]YY¶VVVVjrsp*   ',
			    '     $rll)j///jjjnppppsljjjjjjjnsl)lljnsoj+jjj///rrrppojjjjjj+jrpr*   ',
			    '     *ponloopppsopppppppssoloooool)osnjosooooosrrppppppssoooollrpr*   ',
			    '     *psllooopssssssssoossoosoool))pplnspooossooppsprpsoooooooozps2   ',
			    '     *prsooppporssossosssssssooool)pplnpppooosoooopprppsooollolzpp*   ',
			    '     *ppss··xxxxxspsspss···rr·xooll´´ljosq·rr···qppprpoxrrrrrrl·pr*   ',
			    '     *spooQ£\'PPP®^pppppo|K±K(PPrpsopplnoo^|34K|Pcrppppo-..4-(|lqoo2   ',
			    '     TppllG}~PPP}¸ppsprqPP{$0±}rpslrll)¹p^\'²0P®}bpppppo1$$(0£\'lrsr*   ',
			    '     TppllQ®{{$0}xssssqq®300{{®rso)srl)ppA3$²KP¤csssooo1$${²®Jlzrz*   ',
			    '     TppolQº00$0}xoosssq®{0{{(¨rsl)pplmps^5²²¢£¤bppssso10011£¨ozru*   ',
			    '     *ppsoA¯10$$}¥sssssq3$000®}rsonpp)jolw|0{PP£Vrpppps400±P¢Gouru2   ',
			    '     *osloA4000{.¥pprpsq»0$$$0|zzs)ppljoo^±²²¢£¤Vurppps40$4K£Goupp*   ',
			    '     *lsllA4000{.rppppprP$$$$05rpolsolnps^±²²¢®£Vrppppo40$1{£Gorpp2   ',
			    '     *ssll]{0000{^pppppr50$$$05qo)losln´p^(40¢P±Vrppsso.$$4{¼Glrpr2   ',
			    '     *psol^{{400{%)ppprr±.{-${|rsl)pplnpp^®±|3K3Vrppppo.01±{0Glzrr*   ',
			    '     Tppll]]]]c]Qe)lpppqcbbbbVVqpslzzo)pp]VVV½½½]rprrrq]]cb]]Vlzuz*   ',
			    '     Tps))eeeqvv`)))sppsqqeeeqqlpslzzlmsseqqeeee)sssprqveeeeeenzuz*   ',
			    '     Tso))llsssl))))"pppssooosprpo)uulmopslsssoooosporrsospsollzrr*   ',
			    '     2ll))llollll))))rrppppsosssso)spln¹ppssssssssspprrpppppoolrpr2   ',
			    '     2llm)l)loslll)))srrppppoooooonoslnpppsosporppppsrpprosooolrsq*   ',
			    '     *s)ollmlllll)lttprssssoooololnl)lnpsoolooppspppprosooollolqll2   ',
			    '     *prol9ee8#8#tt))ppq#######lslnsplmpp^--:8#|Arpsool#:888#9lzss2   ',
			    '     *prslA)/"{{.tl)))rr--0{{0|qolnpplnop^{$0{{¨Vupollo.²²/$|blzrr2   ',
			    '     *ppol%-):1-et)))qrr({$0$$|rponpplnpp^($00{|bursooo.$²::|clrrr2   ',
			    '     *rpln%4/)"qeessoqqq30²$$$5rpojuus)ppw.$$$$.crpsoos-0$.:|bl·rr*   ',
			    '     *ssln%-.¾¾:1Assosls¼{§²$±©sso)ursnppw{.$$$±]oossqr40$.(PGozrr*   ',
			    '     *mlml,1.:l/-^sslolN¼{$²²{Pssolsq)npp^{{$²²±Qlooorr400.4|Gopsl2   ',
			    '     *osllA.{-.¾:^ts)t"){{$$$²5sssluulmpp^{{$$$4]oooosr4{{003Glzpr2   ',
			    '     *ppol,.{-{0¿^s)tt)t.000$$5lol)rplmppw{$$$0{Vppsooo10$$$0Glzrr2   ',
			    '     Tppol,.{4{{-^o)))lo.$$0${#qsl)prlmppw0$0{0{Vupppso1$$4$$,lzrr2   ',
			    '     Tpsl)9#%%%%#el)""oq9%AQAA]qpolpplmoo^89^^^^^upppss99%^%9A)Àpr2   ',
			    '     *slnj½½ÁÁ^]V^ll?"oxV¶¶¶VVV)pslrpnjll]Á]]Á½½]pppppqV½ÁÁÁ]]jzpr2   ',
			    '     *ll)/jjjjjjj)lt"tpslllllllsso)psmjlonjjjmnnorpsspsl)l)m)llrsp2   ',
			    '     *ll)))))))l))ttMMppsssosssssl)osnjlollll)oopppsosssssoooonros2   ',
			    '     *)ln))))))l))l"M)pssloososslmjnnnjolnnlnllnlossooooosoollmoll2   ',
			    '     *ll)lNN)llllltMtpssoooosssosonlolnooooossoolllooosoooooollrql2   ',
			    '     *oslmA%A,,^A)tMsps)999999,lpsluuljssq^^x^^^:llllll^99999%nzrr2   ',
			    '     *sslm80{..{.^tMsssq.{0000#ssoluul/)sq0000$$^soollo.$$0$09nzrr2   ',
			    '     Tssln9{{1{04eM)lssq1.0$$05sslnuulj)se{00{0$]pppsso1{$10.%n·pr2   ',
			    '     !ssll9{0{$$-`)M"osq11$$$05sslmuuonl)e0$0{0$]orpprq4{$1{{%)·rr2   ',
			    '     $osll9{0{$$"ML?tssq1{00$0|pso)´uonole$$${00crpprrq4{$411%lzsp2   ',
			    '     *llmn9{{0..ER¦??R)q14.0¼4|rrslsonjose0{{1.¼]pppprs±1.414,lsrp2   ',
			    '     *osnm9{$0${I=NL<;jl{{$$0{5qsslppljose²001.$]pppsoo4{0.14^lrpp*   ',
			    '     *osln9{${0{7tÂ;R+j).$$00{5rsl)pplmspe0{{4"0Ãpssooo4004{1^)rpp2   ',
			    '     *psl)9{04..Ä"??N??+$$${{0#rso)pplmls^0{{-).]psssso.{.-.1^)rpr2   ',
			    '     *rslme-----"MÅ¦NLE?<.-888#sso)pplmsoe8^^%eedpoosso88###%%nzrr*   ',
			    '     Trome¶¶V½ÃtÆLjtLÇUM+MÈVÈYÉspplupljoo½ÊVVÁV½]opsssx½½VÊÊÊÊ)Àrr2   ',
			    '     *oo)mmjjmj)???LË<M?<?)llolorplurljooÌmnmmklopppssl/llllllnÀrr2   ',
			    '     *ll)mlllllll)MMME??;I)l)slqpslrplmoloslooppppppltl)sossoolrrp2   ',
			    '     */"j)ee88))t"``???++")))lsll))ssljllÃxqq:q)tvvvMMM)eqqqq^noll2   ',
			    '     *ll"½½½½Ã¸^^ÃÃeM??""/""/.MML;))s)jlqY¶½½ÁÁÍddQ%iE8]V[]VVV"qlq*   ',
			    '     *sslte88:8""M:"C+j))8:::"D;R;;)s)jllq):88:))888""":"""888/rsr*   ',
			    '     *pslNo!!$$$$)k)++.$.++!.LDM;++;s)j)ool$$$.ÎÎ00$0$$$$$$!olnrpr*   ',
			    '     *pl))´...!..ll"I776{$!!"RHL?DÇRlm?)srk+.{0.$0000000....¹omror*   ',
			    '     *o)nmp!.....""777..Ï.$..<R;+EE<?j??trm+..0$$$0000..."//olmrlp2   ',
			    '     *t)))o.....{7ÐÄÑI{{77...N;EME<?;;+?lqm+....0...{....///slNslo2   ',
			    '     jM)jNl./...7ÄÄÄ77{.7{{44+;MC?+;?+++Nt/!{...........////s?jMtl!   ',
			    '     TM?jN?j/...4ÄÐ47.7ÄÄ7744.?CC?jN?j+jm)+!.$.....+...."/..t?jM)lS@  ',
			    '     jI?+j+!.....ÄiÄIÒi4Ä4.7.76C+j?jjj+m)??!0......+..../""/M?j)))+   ',
			    '     +?++++$...ÓÄÄMi7Ä477{7Ó77.++!jjj++jmM?+...1.........-".;++NNN?FS ',
			    '     T???+?!..7Ôii7Iii.7i.Ð7Ð7{jj!+<+++N??<+..{.I78I7771.../?C+??NFC  ',
			    '   Õ?jS?C+?!.7Ó7ÄI7ÄÄI""7I{.{...j+EMC+?;?<?+.+7IiÄ"7EIM7...+?++<<?SS  ',
			    '   *DLÖR?++.87C.7...77.ME.{{..6+?"L?UMMM?++++8888#,-""I"76""C?+<??S+  ',
			    '*Õ;E??ÕÕ;?$"Ä++$$$$$+$6IC++++++?=;?<??<;??++"ØG,,,,,,,"??+7"D??ÙSSTT2 ',
			    ' **S?CS *S++6CS++$$*+*666++*     @ @@****2***         2**6     2      ',
			    '                                                                      ',
			    '                                                                      ',
			], {
			    "0" : -15724512,
			    "1" : -14671824,    "2" : -15728640,    "3" : -13615040,    "4" : -14667728,    "5" : -12566448,    "6" : -15720432,    "7" : -14667744,    "8" : -12566480,    "9" : -11517888,    " " : -16777216,    "!" : -14675952,    "\"" : -13619168,    "#" : -12566464,    "$" : -15724528,    "%" : -11513792,    "&" : -9408384,    "'" : -11509664,    "(" : -13619136,    ")" : -12570592,    "*" : -15724544,
			    "+" : -14671856,    "," : -11513776,    "-" : -13619152,    "." : -14671840,    "/" : -13623264,    ":" : -12570576,    ";" : -12566512,    "<" : -13615088,    "=" : -11513840,    ">" : -10457072,    "?" : -13619184,    "@" : -16773120,    "A" : -10465200,    "B" : -14667776,    "C" : -14667760,    "D" : -10461152,    "E" : -12562400,    "F" : -15720448,    "G" : -10461088,    "H" : -11509744,
			    "I" : -13615072,    "J" : -10461072,    "K" : -13615024,    "L" : -11513824,    "M" : -12566496,    "N" : -12570608,    "O" : -11517872,    "P" : -12562336,    "Q" : -10461104,    "R" : -12562416,    "S" : -14671872,    "T" : -14675968,    "U" : -11509728,    "V" : -8359840,    "W" : -7307152,    "X" : -7303056,    "Y" : -7307168,    "Z" : -8355728,    "[" : -9408432,    "]" : -9412528,
			    "^" : -10465216,    "_" : -11505632,    "`" : -11513808,    "a" : -8355744,    "b" : -9408416,    "c" : -9412512,    "d" : -10461120,    "e" : -11517904,    "f" : -8359824,    "g" : -8363936,    "h" : -11509712,    "i" : -12562384,    "j" : -13623280,    "k" : -11526112,    "l" : -11522016,    "m" : -12574704,    "n" : -12574688,    "o" : -10473440,    "p" : -9420768,    "q" : -10469328,
			    "r" : -9420752,    "s" : -10469344,    "t" : -11517920,    "u" : -8372176,    "v" : -10465232,    "w" : -10469312,    "x" : -9416640,    "y" : -9416624,    "z" : -8368080,    "{" : -15720416,    "|" : -12562352,    "}" : -11509648,    "~" : -11505552,    "¡" : -9408400,    "¢" : -13610912,    "£" : -12558224,    "¤" : -11505536,    "¥" : -8368064,    "¦" : -11517936,    "§" : -16777200,
			    "¨" : -10456976,    "©" : -10456960,    "ª" : -12554112,    "«" : -11505520,    "¬" : -11513760,    "®" : -12558240,    "¯" : -14663600,    "°" : -12562368,    "±" : -14667712,    "²" : -16773104,    "³" : -12558208,    "´" : -8372192,    "µ" : -11509632,    "¶" : -7311264,    "·" : -9416656,    "¸" : -8363968,    "¹" : -9424864,    "º" : -14663616,    "»" : -13610928,    "¼" : -15720400,
			    "½" : -8359856,    "¾" : -11522000,    "¿" : -13623248,    "À" : -7319504,    "Á" : -8363952,    "Â" : -10465248,    "Ã" : -9412544,    "Ä" : -13615056,    "Å" : -11522032,    "Æ" : -8359872,    "Ç" : -10457056,    "È" : -7307184,    "É" : -6258592,    "Ê" : -7311280,    "Ë" : -12558304,    "Ì" : -11526128,    "Í" : -9408448,    "Î" : -14675936,    "Ï" : -15716320,    "Ð" : -14663632,
			    "Ñ" : -14663648,    "Ò" : -11505616,    "Ó" : -13610960,    "Ô" : -13610976,    "Õ" : -13619200,    "Ö" : -10461168,    "Ø" : -11509680,    "Ù" : -13623296,
			}, 3);
			return get(0, 0, 209, 324);
		},
		building_3: function(){
			background(0, 0);
			Display.pixelArt([
			    '                                    !"#$"%&&                                              ',
			    '                                   &\'&&&&&&!                                              ',
			    '                                    &()(*)!                                               ',
			    '                                    &+&\'))&!                                              ',
			    '                                   ()&(&),-                                               ',
			    '                                    !./&#,-                                               ',
			    '                                   !-)/,()-                                               ',
			    '    !0)))))))1"2345/"6666766"83609:/((;(((0<"")!                                          ',
			    '    9=44"44774>4$??7444>>@@====444"477777744=4#!                                          ',
			    '    <=44444444$4444444444$$44444??47777774A447#                                           ',
			    '    /=>====="=====B@@@==B===C""444=C==@@@@==4?%                                           ',
			    '    1/////*(((////*///////////"//////()///D///)                                           ',
			    '    !)(//!!!!!!!!EEEEE!!EEEEE!!FEE!!!!!!!E./G)!                                           ',
			    '    !==4=E!EEEEEEEEEEE!EFEEEEEEEEEEEE!!E&&(44)!                                           ',
			    '    &@=4=EE!EEEEEEEEFFF&&&FEEEEEEEEFEE&,,,/77#!                                           ',
			    '    &==4"EE&E&&&&,,,,,&&FF&,,,,&,,,,,&&,,)/77#!                                           ',
			    '    !"B="!!EE&&&&&FEEEFEE!!E&&&!EF!EE!!E&)/H7)!                                           ',
			    '   !=I44==44??74777777@4$$47777444447747777??J,!       -K                                 ',
			    '   F=44?44444444444444?$$$777$44444444>4444447)        LM   M                             ',
			    '   &=4??44@@>>>>>444444444444444>@@@@=C=>44447#!     M-NOOPQRS! T                         ',
			    '   &=@>>===="==="=4444=4444$??$4@44@=@==>4444?#!    PUVUONPOUUP&W-K                       ',
			    '     )(()X!!!!!!YYX!!!!!!!!!!!!!!!!YYYYYYX&)(&Z!  K -SWO[PW]OO[UUOPK!                     ',
			    '    F""="EE&FFEEE!!!!!!EEE!!!!!!!!!!!!!!!!(44.!   QP[W]UPUMUU^U__[_`P                     ',
			    '    S@=4=&EEFFEEEEEEEEEEEEEEEEEEEE!EEEEE!FD??)   KQa[+S`M`-```b`bU[ca[W+! dTTd            ',
			    '    S==4=&FFEEEF&,,,&&&&&&&,,,F&&F&E&&&&,.D77)! +0090+00;+;;;;+P`_P[WPO;467</00(;[^;8=+   ',
			    '    &=44=FEEE&&,&&,,&&&&&&&,&&&FFEEE&&&,,.*74)! !74675e4453388<0<`++P]56776e6664OfU57g(   ',
			    '    h444"5==3========444H4=?44===I4444?=44444=& Ke34444e4e3444=44WiWW4666eeeeee4/jkggg(   ',
			    '    /=44444$4$444444$$4$444444444444444444444=(  6e44eeeee3ee4e4e+4;l7666eeeee46445777m   ',
			    '    /=4$$444444444444444@==@>>>444@4444$@4444@*  6444e664eeee4ee4e3<96eeene44eg66667eo)   ',
			    '    p"=44=4=44444@4444>>44>4==44444444>4444444D! 74e366eeeee43e4444n44eee443e6ee666633)   ',
			    '     ,)q)!!E!!EEEE!!!Y Y!!!!!!!!EE!!!!!!!!!((&!  64e4))))\'\'r)))))))))),.&()&))##))&(()&   ',
			    '    &""""!!!EEEEE!!!E!!!!!!!EEE!!!EEE!!Y!E)B@)!  7ee42E!E!!!!E!!!EE!YXX )""&!)),,&(==/    ',
			    '    &=44=E!!!EEEE!EEEEEFEEEEEEF&&FEEEEE!!E(44)!  s664/&!!!!!!EE!!EEE!!!!;43)&&,,&,(44/    ',
			    '    &=4t=&E&!!!E&&&&&,,,&FEE&&,,&&EE!EEEEE(44)!  s684/&E!!EEEEE!!!EE!EEE(5n)))&&&)(e"9    ',
			    '    !"=4=EEEE&&,&F&&&,,,&&&&,,&&FE!!!EF&&,(44#!  74e3u&EEFF!FFF!!EEEEEEE/74)))&&))(4<;    ',
			    '   !08====44444444=444444444I4444==4444444444@%  6343u&FF&&E&FFE&FF&&FEF/73),)&&))(7=<    ',
			    '   !"==4@4444444$$4$4444444444444444444$44$$44(  3843/&F&&.&E&.EF!F&&&,&/63)))&&))(74/    ',
			    '   !84?7$77777$?$7$?77444???77??$7?747777777$4(  3n33/&FFSSSFEFY  !!!&&E(e4)))&&))(64<    ',
			    '   !<"=======4444444>@===44444>@==4==@@==@4444(! 4344/366l3336ee44=4e777=74))),,))(ee<    ',
			    '    !)(()!!!!!EE!!!EEE!!!!!!!!!!!!!!!!!!!!&((&F! 64ee=ss74ee44443344e66e67e))),&))(ee<    ',
			    '    SC=4"!!!!EEEE!EEEE!!EEEEFE!!!X!!EEE!!E)=4#&  6e66=vv7666e6eee66ee6e66e4))),&))(46<    ',
			    '    )=>4=F!!EEEEEEEFFFFEEEEEFFF&F&!F&&&FF&/77)!  6ee6=v7e66e65666664e6766e4),&&&.&(e6<    ',
			    '    +==4=&&&EEEEFFFF&F&&&&&&&&&&&&,,,,&,&,/77)!  633e/((((((m;((q))))q((/e4)))))m)(e4<    ',
			    '    &954=&&&&&,&&&&&&FF&&,,,,&&&&&,..&&.))(==)&  63442&EEE!!!!!!!E!!!!EE0e4),&&&&)(66<    ',
			    '    0"=="====C"=====B========4===>>>==CC"=====&  6344/&EEE!!!EEEEE!EE!!!/4n)))E!,)(76<    ',
			    '   !)""B"""/////"wG"""G""www"""""""""""""="""",&&"/<"2&!!!!!EEEEEFEEEE!!/44)))FE))(e6<    ',
			    '   !444444en777774777766e77476e4e47444446744t4444444e6u"&!EFFF&&E!FFEEEE<4n)))&&))(ee<    ',
			    '   !4444444=344444443334434n=4443=44444864444=="4n=n==///"&E&,,,&&&&F&&&"43);)&&))(e6<    ',
			    '    &&&&&&&&&&&&,,&&,,&&&&&&&&&&&&F&&&&&&&&&&&&&&&&&&&&)((/)).,,E&E!E&,,"44)(m&&\')(44<    ',
			    '    !&&&&..,,,,&,,..,.&&&&&&&&&&&&&FF&&&&&&&&&,..&&&&F!&)(/(3n==5588n333964)(m&&)m(4n<    ',
			    '     D((D///DD//DDDDD/D((((((**(((((((((((((**DDD(D**.).&&\'/6e443n8=4444444)((&&)((44<    ',
			    '     w(/////w/G////wG//w///////(((*DD////D/D/////;/G")))),844ee=n33444e4e4=)((&&)((44<    ',
			    '    !"//(==============("@=I>=="=C=====88"""x==((;wD*)%)))=7eeee4444eeeee4=)))&&,)(44<    ',
			    '    !B//=F&&&&&&&&&&&&"*CE&&&&F&&FF&&&F&&&&&&&E"G/wGw))##)/"37744444ee6e64=))((((((44<    ',
			    '    !=Gw4&&&&&E&&&&&F&>/=E&&&EEF&&&&&&&F&&&!!!F"Gw/wG))&,,))))))))))))))m3=)&))))))e=<    ',
			    '    !=w/4F&&!EF&E&E!&&4/=!&E!!EFFFEEE!!!EE!!!&&"Gwww%).E&!!EEFE!E!!EE!!!(44).&,,,)(44<    ',
			    '    !=//4EEEEEF&EEE!F&=D= !!EEF&FEEE!EF!E!!E&&&"G//w/.,!,!!!!EE!!!EE!!!!24n)))EE&)(4e<    ',
			    '    !B//4F&FFF!F!EE!!!>D=YFFFFF,F,E!!EE!E!!!&F&"/////))!)E!EEEE!!!EE!!!!/nn)()FF&)(449    ',
			    '    ;"//4&&&,&!&FEE!F&=/@!&,,&F).F&&&F!!!FEE!!&G/////))F)&!!!EE!!EEEE!!!9e4)m)EE,)(449    ',
			    '    -"//4,,,&F&SFFF!F&=/>&,,F,.,&&FFFF!EF&&FFEEw//(/D))&)&E!!E&F&FFF&&&E"e4)))&&&)(449    ',
			    '    +</("&FE!!!!!EE!E&//4EFFFFF&FE!!!! !!E&EE)&(/Dp((,)&)&E!!,.F&E&,,&)&"4n)))&&&)(449    ',
			    '   -yzzs4vvs77=777vvvsv({|}|zz7vzz||z{~vvvvvvvv¡=vv7¡4),,&&..,)FF!,#)%*)"4=)))&&,)(44/    ',
			    '   K-)),,&&,&&&&&,,..))).,,,,,,)).,...,,,,,,....)).))&&)#)%"</900/29""""/43)))&&.)(=3/    ',
			    '    ;G////D///////w/////D/D///////////DD/////////((D/)),&))3nn=="(9<=n=n44n)q)&&,)(44/    ',
			    '    -/((////////////(///////*////////(/D////////G;p//)##)/"4444444nn4"4443=)q)&&&)(44/    ',
			    '    &/D*////(///////////D/////////////////////wG*;GGw#%%%/544e444443443444=)))&&&)/44/    ',
			    '    -/DD(DD///D**((((((**DDD*DDDDDD*(((((((((///*(GGG#(((0544nee444333n33n=),),&))(44/    ',
			    '    &B//(/*D/**(*/*((//)////////////////////*(*//(/wG))))("n344ee43"====n3=)(((((((34/    ',
			    '    &Cw/=&&&&&&!&&&&&&=w7F,,,&&&&,&&&&&E,,&&FFFBD(///))Y)&&&&&,),\'&&&&&&(4n)&&&&&&(44/    ',
			    '    &Bw/3&&&&FEEEE&&E&@w7&,&&F&EEEF&EE&FE&&EE!!"(///w\')Y)X!!!EEEEE!!!!!!/34))&&EE)(44/    ',
			    '    &B/D4&E!!EEFEEE!&,>G7&&EEFFEEEYE&F&FFE!!!!!BDwGw"))Y)!!!!EE!E!!!!!!!/=5))&!!&)(44/    ',
			    '    &"D*4!EE!!F!!EFF&&=*eEFFEEF&!!F&&F&FF&!FFF&C*/D/(,)!)E!!!EE!!EE!!!!E2=")),EE&)(44/    ',
			    '    &"/D3E&&F&!FFFF!F&=*4E&FFF!!FFFFEE!&!EF!&&&C(//w/))!#EE!!EE!!EEEEEEE(n¢r)&E&&)(n4/    ',
			    '    &"//4F&&&EFF&&&FF&=D4EFFFFF&,FFFEE&EF&&&E!&=(p(//))Y)!!!!!&!EEE&,&&&(n=&))E&&)(44/    ',
			    '    &"/D3F&&!&F&,&,&&,8*4!FFFE&&,,&FEF&F&&&,&&&C(1((/,,Y)&&&!&,!&&,#),).u5")()&&&)(34/    ',
			    '    +//(0EFE&&&FF&FFE&%%"!EFF&&&&&F&&F&!&&&&&&&((11;(&,!)&SS&,.&!&&#.)))D=")()&&&)(n4/    ',
			    '   &8==<"443I4"3Inn33=3."=3343==4444444=44444444#38"I#())&((((/((/00/////=B)()&&&&(n3/    ',
			    '   -D(((%(((((%(%###)#((()#%((((((((((((((((((((D*()(),&.&""""/""(/""""""=B)()&&&)(=n0    ',
			    '   !/DDD///////DD*DDDD///DDDD//////DDD*(((*DD/////((/()))/""""""£""""/""""");)&&&)(=n0    ',
			    '   +/D/////DDDD*DDD*D////////D(////D***((D((/(///DD(/(##)/G"""""""""""""""")()&&))(==0    ',
			    '   +/*D///(*D*(D////D/////////*DD/(*(*(*DDD**////////(##)/"""="""""""""""BB)))&,))(=80    ',
			    '   WH44Cw====I>>>>>4444">4444444>444444B======I4="=C=C..)//"""""""u/""*/"B=)))))))(==0    ',
			    '   -&&&&&&&\'))&\'))))))))B,))\')))),&,))))))\',\'\')))\'))\'&&0)&))))))(()))))#%BB)&))))))==0    ',
			    '     )),/E!!!!!!!EEEEE)(=&!!!!!!!!!!EE!EEEE!!XX!(#)))&&!!!!!!EEEEE!EEEEE("B))&!E&((=52    ',
			    '     /*/"&E!!EE!EF&E!E,*@&!!!EE!E!!EEE!EEE!!E!!E\'((((&&!!!!!EEEEEE!EE!EE("",))E&&((==/    ',
			    '    !///=&EEFFFEFEEF&F%/4&!!EEE!EEEEEE!E!EFEFFF,*(///)&!!!E!EEEEE!!E!FE!(/w.))F&&((==/    ',
			    '    !B//4&E&F&FE&FFFFF//4&!!EEE!EEEE!!!!EFFEFFF#/////#.!EEE!EEE!EF!EFEEE("w)))&&&((==(    ',
			    '    !"//4)FEF&&EEEEEFF/94&&!F&FEEEEEEE!EEFFEFF&%//w/D),!EEE!!!!EEE!EFFFF*"w)()&&&(("=(    ',
			    '    !C//4SF&E&&&&&&&&,"(=&&&F+S&,&!!!EEE!FFF&,&#///(*)&!E!!!EEE!!EE&...,*"")()&&&((==(    ',
			    '    !C//4&F&&,&&FF&&&D"/4&&&SSSQ&&&&&&&&&&&&&.)%////D).&&!!!EEE!!&&&....*"")()&,&((==(    ',
			    '    !"DD4,F&!..&&&,&(D"/7&&&&!E!!&&&&&&&&.&&&))(/////#)F!!EEEE&!&.&&#%%.(w*#(#,.&((5¢(    ',
			    '    !"D(>&)),).&&&)\'&D"/4&&,!EE!&&&&E!&&&&,,.).((////))!&EFEF&&E#%&####.(//)((.&.(*"=2    ',
			    '    WG((>),#,))Z&,).,¤h*4&FE&F&!&&&&!!&&&,,&#%,#(w///))&&FFE.%%#%%,)%##.(/*\'(#.#,2/¢=(-   ',
			    '    WGD/4)%%.))&&&),&%/(4&E&&&&!&&,&E,&&&,,&¥##((w///#)&&EFE,%¤.%¤&.%##.#(()(#)))2/5=)-   ',
			    'KT TPGpp=&(%)))&&,.,E#h(>&EFF&&!,,!Z,&Z&&,&&¥##))/(//))F&FEE,.%..%&,%%&S1/()(()))(("=(_Q  ',
			    'f¦_M-/(2x&)))))&&)),&.;)@&EEEF&!&,,,&&&&&&,&.)#))(0;D++!M&EE...S11.&&&)&;m2)(;);)2("";P   ',
			    'ff[_-/;;<&)++))&&)).,)++=&-EEEE!&&,&,&E&&,,&&)%&)(;;(&`-M-&F&§1SS&F&&SSS;m;);;m;))(9<;-T- ',
			    'P[_M-/+¨(!+`+))&&)))..WW+--!EEE+W)&,&&&&&,,&&))&)#;;(---W+&+FQS©PF)FSP[F+W;+W+;;)¦;0^+-_ª ',
			    'UWP--DW¨1--+S,)E&.+f[+_«+W--&P!`-Q&&&&&&&.,&++S-+)W+)¬-`[+W`WWP®SQSSPSMMS[&+[+m))W+k¯-W-  ',
			    '-MMWK;°W)&W&))(((;M+`±W²²f_WW[WPSM+!!!!!!&+SQ+`QW-°_¦¬`¦`W+`++-SQS+SS[WW«°[`--&&&-&;¦«³M- ',
			    '-QM³´°«W++--&&&&SWa¦[µ[[[_[©f[[©P©P+SS+P1OP^OPµ¶°µ·«°´«««¸«««``````---------M¹--º»`««´»`¼¹',
			    'ª``¹¹`´´-¹`ºP[¦W+`MMQ«__«MMM---[!-_[[WSP[[W[_``º`-¹--¹¹¹---¹KKªK                          ',
			], {
			    "0" : -11513792,
			    "1" : -13615056,    "2" : -11517888,    "3" : -8355728,    "4" : -8355712,    "5" : -9412512,    "6" : -7303040,    "7" : -7303024,    "8" : -9408416,    "9" : -10465200,    " " : -16777216,    "!" : -15724528,    "\"" : -10461088,    "#" : -13619136,    "$" : -8355696,    "%" : -13615040,    "&" : -14671840,    "'" : -13623248,    "(" : -12566464,    ")" : -13619152,    "*" : -12566448,
			    "+" : -13619168,    "," : -14671824,    "-" : -14671856,    "." : -14667728,    "/" : -11513776,    ":" : -11517904,    ";" : -12566480,    "<" : -10461104,    "=" : -9408400,    ">" : -9404288,    "?" : -8351600,    "@" : -9408384,    "A" : -8359808,    "B" : -10461072,    "C" : -10456976,    "D" : -12562352,    "E" : -15724512,    "F" : -15720416,    "G" : -11509664,    "H" : -8351616,
			    "I" : -9404304,    "J" : -7303008,    "K" : -15724544,    "L" : -12558304,    "M" : -14667760,    "N" : -12558288,    "O" : -12562384,    "P" : -13615072,    "Q" : -15720432,    "R" : -11505616,    "S" : -14667744,    "T" : -16773120,    "U" : -11509712,    "V" : -11505600,    "W" : -12566496,    "X" : -16773104,    "Y" : -16777200,    "Z" : -14675936,    "[" : -12562400,    "]" : -11509696,
			    "^" : -11513808,    "_" : -13615088,    "`" : -13619184,    "a" : -10461136,    "b" : -9408464,    "c" : -9404336,    "d" : -15728640,    "e" : -7307136,    "f" : -11509728,    "g" : -6254448,    "h" : -11509680,    "i" : -8351632,    "j" : -10457008,    "k" : -10461120,    "l" : -8355744,    "m" : -12570576,    "n" : -8359824,    "o" : -10465216,    "p" : -12562368,    "q" : -12570560,
			    "r" : -13623264,    "s" : -6250352,    "t" : -7307120,    "u" : -11517872,    "v" : -6250336,    "w" : -11513760,    "x" : -10456992,    "y" : -5193552,    "z" : -5197648,    "{" : -5197664,    "|" : -4149072,    "}" : -4144976,    "~" : -5201760,    "¡" : -7298912,    "¢" : -9412496,    "£" : -10465184,    "¤" : -13615024,    "¥" : -14667712,    "¦" : -11513824,    "§" : -14663632,
			    "¨" : -12570592,    "©" : -13610976,    "ª" : -14675968,    "«" : -12566512,    "¬" : -14675952,    "®" : -14663648,    "¯" : -10465248,    "°" : -11513840,    "±" : -8351696,    "²" : -10457056,    "³" : -11517936,    "´" : -12570608,    "µ" : -10461152,    "¶" : -11517920,    "·" : -12562416,    "¸" : -11509744,    "¹" : -14671872,    "º" : -13623280,    "»" : -12570624,    "¼" : -12566528,
			}, 3);
			return get(0, 0, 270, 306);
		},
		building_4: function(){
			background(0, 0);
			Display.pixelArt([
			    '                                       !"#$%       ',
			    '                                     &\'()"**+      ',
			    '                                    %,-./012#3     ',
			    '                                    &!!!!!!!!!!    ',
			    '                                    %**-4256$7%    ',
			    '                                    $*08"9#$$$%    ',
			    '                                    !$#:#2*6!$%    ',
			    '                                    !*0;0:#*<$=    ',
			    '                                    !*,0##2$$*     ',
			    '                                    %<:-###$$$     ',
			    '                                    !$402*56>$     ',
			    '                                    !*#-0:9$$$     ',
			    '                                   =!#-01#****=    ',
			    '                                   =%%%?!!!!?!!    ',
			    '        @     =@    %= A            B*%!&&%%!!     ',
			    '       &CD@7= EFG   %HDIJ&@ &       %$%+%%7%!$     ',
			    '       @KLMENNOLN  &JLPELJOQA% R=@BS$!!T$! G!*     ',
			    '    %DQLLKUVMLEJJGWEVVEVAMAJAJELJWD=5%%X %!@%*     ',
			    '   7YZKP[]^_[E`EVUVaKbcdeAUIULLAffEg&=&@@ =7%$Q7D  ',
			    '   =@ZYE^hiJN&7NJEjklJEmgJJnAVQQopqrrsstuuruvwwxy  ',
			    '   @NKYJ&&EE7GzzXaXR$XEE7YEJ{X33*X|ppqyyyyyxxx-yr  ',
			    '    EOJX77MEJGRXQXX*XXXzzJG7GX*|******#####q####R  ',
			    '   zVJN33}~QXlx¡33¢;rryzlawp£rrwww¤¤¤¤w¥¥¥¥w¥w¥wp  ',
			    '   =N{No-¦VM3x§¨©arrt¦vª}£wy«rr}}¬®®®®¯¥¥}¤rru¬¨l  ',
			    '     zJ°t¬±Q3¤*X3Q3p²®¬©¥ªp33|**v¬¬®®®p#3#**x®®¦x  ',
			    '    =mgJ¬®±³3s*´´µ¶<··¸¦¬®p¶¶¹>$º¬¬®§§:6´¶B>¦®¬¸²% ',
			    '     zE3¬¬©QRs*´´»µ2···v··p¶»¹¹*·®®§§§:¶´¶B<®¬·®©% ',
			    '     &{©¬tvzx¦4%6¼¼½···¾·¬:»¹¿¼2¸®®§u§:»¶6»5®¾·®²% ',
			    '      7¦®®¦Qvu#2¼¼À½·¬¬¬®®pÁÁ<¼5¬§®uu®0¿¿Â¹2¬¾®®x  ',
			    '      Xu®®uªª¬12´¶»1¬®®®¬®p6!B´>¬®®®¬¬02¶¶´1¾t®¬x  ',
			    '      %¦·¾¬aªº:>¶¶¶Ã¬®§®¨¦p´¶´¶<·®¬¬®¬0¼¶»¶Ã¬¬¬¾x  ',
			    '      %®¬¾uMÄ®#¶´´´2§u®®¬¸:¶¶¶¶5·¬¬®¬¬0>´´¶5®¬·l3@ ',
			    '      %¬¬¬¬au®*´$%%*¸®®®¸·:¶>>»¼·¬¬®®®:!%*%6t®¬ªª= ',
			    '      %¾§®®Åux¾ÆÇttÆ¤®¬¬¾tÈ¾ÉÉÉÆ|®®®®§¦tÇsssx®§ÅÅ= ',
			    '      %¬uuuÅ§¦rÊrrrw¦¬¬¬¬¸rrr¤¤r}¬¬¬¬¬wrr²²xr®}±K  ',
			    '      %u®®®©¬®®®®®¸¬¸¤¬®®®®§®®®®¸¬®§®®¸¸¬§§u¨¤KËE Ì',
			    '     =%È®®¬±¸®®¬§®¬®®®®®u¬®§®®®®¸¬¬¬¬®¬¸¬§§uuvjKj S',
			    '     S%È®®¬Í¬®¬®®®®®®®®¬¸¸¸¸¸¬¬¸·¬¬§¬¬¬¬®§§§®®}KXS7',
			    '      %·¥®¬}¸u¥¥¥¥¥¥v¬¸¬·º¥¦¥¥¥v¤¬®®®®rwwww¯x¬¬xX%?',
			    '      %®¦®®}¸®6»¶6¶6º¸····#666»»¸®®§§®#¶¶>>¹)¾¬uÎ=%',
			    '      %ºu§uv¬®<6´6»Ãº·¬¸¸¸#¹»¶><Ï§§§®®,>6ÐÑ½sªÒs3= ',
			    '      %Óu§§®®®5¹»´69º¬¬®®®Ô¼6´><Ï§§§§®y¹¹¼´ÕwKJ¬p  ',
			    '     =%Ó§®®®®¬*»´´»1º¬®§§®#»TT¹5Ï§®®®®y>´»´¼wKMp3  ',
			    '     S%Ó²§®®®¬2½½¼¼1·u®®®¬:¼½½¼½Ó®®®®®0ÖØ¹Ù¼rMªÚ3  ',
			    '      %¤v®®®®®2¹´´B1·§®®®¸p¶!¶¶<·¦®®§§yÛ»´¶<RQas*  ',
			    '     S%º§®®®®®4Ü´%B1·®®®®¸:¶¶¶´¹¸¨§§§§y»´´%¶3XXÝ3  ',
			    '      %·§®®§®®#´´´´:·®®®®®:´´´´>uu®®¦®y¶¶%%´¯3Eo3  ',
			    '      %¬§®®®®§*61<5:¬®®®®®:¶>Ã¶5v®®®®®q!%7%!y«Qj*  ',
			    '      %v®®®®®¤²Ê-Êr¯¤§§§§®xrÊ²Êrp®®®®¥r|p3:,quMQX&=',
			    '      %·®®®®®®uu¦u¦¦u§®¨®®®®tuuuu®®®®®*$¥¦¦¦¨¨KKz% ',
			    '     =%Ó®®®¦®®®®§§®§®®®®®¬¬¬®u®®§u¤¦uq«wuuu§§®Y³Å& ',
			    '      %Ó®®®¥®®®®®u®®®u®¦u®®®uuu§§®¦rxyw®®®®®®¾l}#  ',
			    '      %Ó®®®®®v¤}}¥¥¥®¬¸¬®®r¤²¡x²p}rÞÊ®rwww¥w¤·l¦|  ',
			    '      =¨®®®®®®$!!*>$r¦r²v¨$!6¶66©¤u¬®¸:$$6!>x¸²uq  ',
			    '     =%ß®®®®®®Ã6»¶´Ã¦}r©²²*»»¹»¼¸¬¬¸¬¸0¹>>¶>u®¤¬p  ',
			    '      %ß§®§§®®#>¶´´2®uuu§§Ã¹¹»»¼º¬®¦®¬x¹»¹´¹u§§§p  ',
			    '      %Óu¦¦u®®1¼5´´½¬uu¦¦u266´´<·®®§®®x>»<T¹®§§uq  ',
			    '      %Ó¦¦¦¦§®1¼½5¼à¬uuu¦¦*¹½½¼á¸§§§§§Þâ¼½½Û®®uup  ',
			    '      %¬¦¦¦¦§t1>¶¶´½¸§uu¦¦3´%%%>¸uu¦uu0¼>»´¼®®§tq  ',
			    '      %º¥¦¦u¦u9¶´´´½¬¦uu¦¦#¶¶¶´<¬¨¦uu¦05¶¶´¼t®¥®,  ',
			    '      %·¦¦uu¦u:´%´´½u¦uu®®p»»6¶2§®®u¥¦y>´´%¹¦§§®,  ',
			    '      %¸¦¦¦¦uup*##ã:v¦¦¦u®:52#*à¦®®§uuy*R#X*v§§®ª  ',
			    '      =¦¦¦¦¥u¤y,,:::x¦¦¦u¦x¡¡¡yx,§uuuvy,::yy:§uup  ',
			    '      %Ï¦¦¥¤v¦¦v¦¦¦¦u¦¦u®®§u§§§§§u¦¦uu¦§§§u¦¦¦u¤X  ',
			    '     S%Ï¦¥¥rÊ¦¨¨¦¦¦¦u¦¦uuuu¦ä¦¨v¦¦¦uuu¦®®u¦¥¥¥¥}ª  ',
			    '      %¸¥v¥}¤¥¥¤v¥v¨¨ä¤¥¥¥r¦¨¨ä¥ä¥¦¦¦¦¦¦u¦¥v¥¥¥¥3  ',
			    '      %¥¤¤wr-¤}¤¤Þp:,,,,yy:¥¥¥}¤¤¤¥¥w¥¥¥¥¥}}r¤¤¤3  ',
			    '      %¨¤¤0-Ý-¤r¤²p!¶!66!60w¥¥¥ww¥Ñ(w"Õ¤}}¤¤¤r¤wp  ',
			    '      %¥¤r--(Ð-rrr«>$!6>*$-¥¥w-wr-ààå910}¤¤¤rrw¥p  ',
			    '      %¦¤Ê0---ÐÐ0r¡<¹>>>R$x¤¤"((-xàå½½åÛ¤Ê-rw¥¤}p  ',
			    '      %¦rÊ-----ÝrÊ²5¹!!!$$y¤år0x0à1xå0"Ý-Ñ-(¥¥vvp  ',
			    '      %¦---Ð--o0r²²¹>¶¶!$>0¤å9x0rå0àÞ"r--Â-Ð¯ww¥\'  ',
			    '      %¦¤-Þ0----²²²>>!¶!$!x¤0àààÑ0"àåÑà(åÂ9år¤¤¤7& ',
			    '      S¤r²x---0ÊÊ²©*!$>5X!,¤0Ê-å"àå0"ååà-:xxxrxrR  ',
			    '      %¦¤ÊÊxÊÊrrr¡3$5555G*w¤¤r9¤w¤o0å0rr:x²pxpjË &{',
			    '    æç!¦¤¤rÊÊ:Êrr¡ª$555¼X$0¤rÞ--:oÊ¤²xxr²pËQ~MEmg{%',
			    '    @^zyè3rÊÊã3k3¡«$5À55$7:Ê0rÊrxÊÊrypã3lRVEmUAED&=',
			    '  æéN{E7YMãxyMMMJQÅGRR>>*X:©x¯r;Êx0y$ÅjM~ZANzUê&cVG',
			    '  %&{Aë[ëfWRQìíLaXXlyª«,yyRJ±ãr;rRXËGNGMVVUV{^îêêEJ',
			    '=D7KYMEUAAEïYEgJ7*3p:p::#*RJgM~jêêAððUêmnEEJzEJJ{gN',
			    '{N&{J{nzz&JzzEê7ÅXXX$+$$$\'$zêênJnéz{N{{N&N&DDDDGg==',
			    '   %       S=%ññ                 ==                ',
			], {
			    "0" : -11250604,
			    "1" : -12829624,    "2" : -13619140,    "3" : -12829648,    "4" : -12832708,    "5" : -14405584,    "6" : -15198172,    "7" : -14408680,    "8" : -10464160,    "9" : -12826552,    " " : -16777216,    "!" : -15198184,    "\"" : -12040108,    "#" : -12829636,    "$" : -14408668,    "%" : -15987700,    "&" : -15198196,    "'" : -13622236,    "(" : -11250592,    ")" : -8882056,    "*" : -13619152,
			    "+" : -14411752,    "," : -11253688,    "-" : -10461088,    "." : -8092540,    "/" : -10461076,    ":" : -12040120,    ";" : -9671572,    "<" : -14408656,    "=" : -15987712,    ">" : -15195100,    "?" : -15201268,    "@" : -16774144,    "A" : -12826600,    "B" : -16774132,    "C" : -12820432,    "D" : -15984628,    "E" : -13616104,    "F" : -13609948,    "G" : -15195112,    "H" : -12034012,
			    "I" : -11244496,    "J" : -14405608,    "K" : -12037072,    "L" : -12823516,    "M" : -12826588,    "N" : -15195124,    "O" : -13613020,    "P" : -12034000,    "Q" : -13616092,    "R" : -14405596,    "S" : -15990784,    "T" : -16777204,    "U" : -11247580,    "V" : -12037084,    "W" : -15192040,    "X" : -13619164,    "Y" : -11247568,    "Z" : -10458052,    "[" : -10458064,    "]" : -8095696,
			    "^" : -11250664,    "_" : -11250652,    "`" : -9668536,    "a" : -12829660,    "b" : -8879044,    "c" : -10461148,    "d" : -8879056,    "e" : -9668560,    "f" : -13613032,    "g" : -14405620,    "h" : -12832744,    "i" : -9671632,    "j" : -12826576,    "k" : -12037060,    "l" : -10461112,    "m" : -12037096,    "n" : -13619188,    "o" : -11247532,    "p" : -12040132,    "q" : -12043204,
			    "r" : -9671584,    "s" : -8092552,    "t" : -7303036,    "u" : -7303048,    "v" : -8092564,    "w" : -8882068,    "x" : -10461100,    "y" : -11250616,    "z" : -13619176,    "{" : -14408692,    "|" : -12832720,    "}" : -8882080,    "~" : -12040156,    "¡" : -10464184,    "¢" : -9668500,    "£" : -12043216,    "¤" : -8885152,    "¥" : -8095636,    "¦" : -7306120,    "§" : -6516616,
			    "¨" : -7306132,    "©" : -9671596,    "ª" : -11250628,    "«" : -11253700,    "¬" : -6513532,    "®" : -6516604,    "¯" : -8885140,    "°" : -12037048,    "±" : -10461124,    "²" : -9674668,    "³" : -10458040,    "´" : -15987688,    "µ" : -15981532,    "¶" : -15984616,    "·" : -5727088,    "¸" : -5727100,    "¹" : -15195088,    "º" : -5724016,    "»" : -15984604,    "¼" : -14405572,
			    "½" : -13616056,    "¾" : -6513520,    "¿" : -14402488,    "À" : -14402500,    "Á" : -15195076,    "Â" : -13616044,    "Ã" : -13616068,    "Ä" : -8092576,    "Å" : -12040144,    "Æ" : -6516592,    "Ç" : -7306108,    "È" : -5724004,    "É" : -7303024,    "Ê" : -9674656,    "Ë" : -11250640,    "Ì" : -14411764,    "Í" : -9668524,    "Î" : -12832732,    "Ï" : -4937584,    "Ð" : -11247520,
			    "Ñ" : -12037024,    "Ò" : -6513544,    "Ó" : -4937572,    "Ô" : -12826564,    "Õ" : -13612984,    "Ö" : -13612960,    "Ø" : -12823444,    "Ù" : -10457992,    "Ú" : -8878996,    "Û" : -14405560,    "Ü" : -16774120,    "Ý" : -10458016,    "Þ" : -10464172,    "ß" : -4934500,    "à" : -12826540,    "á" : -14408644,    "â" : -15192004,    "ã" : -13616080,    "ä" : -8095648,    "å" : -12037036,
			    "æ" : -15198208,    "ç" : -13622260,    "è" : -8882092,    "é" : -12829684,    "ê" : -12829672,    "ë" : -10458076,    "ì" : -14402536,    "í" : -12823528,    "î" : -10461160,    "ï" : -11247556,    "ð" : -12040168,    "ñ" : -15990772,    "ò" : 0,
			}, 3);
			return get(0, 0, 149, 243);
		},
		road: function(){
			background(0, 0);
			Display.pixelArt([
    '  !"#$$%$$#&\'(()))*)+,*-..\'++/+0$12+//$/*3*.***))++)\'\'**4)-*(-)55$$%%#0(*+167&8$+-)+++&/$9##%/7+#:;\'*+*(++7&#<%/+6777+87((+\'//*+*-*5%"%%%%$*.*.===.*\'7$%%>+(.?..((.@=;+(8).A*/%$$$>#$8/$*.=-*\'+;+((/%%<BB<%#/*.=.C?..?.=====7;/D#E/&7+//(=(/7(.=((-.*6++*(*6((*8+-((7>666.(+5$1$%1++1>#/*AFAF==AGF.(/##"%H  ',
    '  I#$//$1+D+*((**JKJ*+.*7*+7\'+\'\'++\'+/+++*\'*-7+\'JJ**J***(1)----J111/$/+7.(+)**7++7.*\'\'\'7++$///+7+#&+*(7*(**\'7+#>+***&7+/\'((**++-**(*$$/$%%#/*(+(..=.(*\'+$%+*((**(((-.-\'\'(++L(*1/++18/+1/M+(.((**+7*(/#////$///7(=.)*(*+7(((--77+&/&0+(7++((*&7*(((((((*77*78777*++(((7$+;+((+8+)+/+\'+++//*.=(.((==(*(&//:%H  ',
    '  I#::/&\'*&7\'\'\'\'*((((7(;://;77\'((++;&\'((*(\'+D#&--**(***(/&\'((***\'7;&7(*(\'7(\'\'\'******\'\'77\'777777/"+77\'77\'*\'\'\'*&&***7:+&:77\'**7*-(*7+#&*/#NN&7+:+\'***\'77\'&#**7;&&+*\'777**7;E#/+&;*77777&#"#&*7\'*\'7777::7777;+&&/7777;&&#:&7&77777+&++&777\'77;&7;&7777777777/<&/#;+7\'*7&#:##&777*\'7777777&/77O&7&&77D:;&&&&PI  ',
    '   QQQQQQPPPPRRSSRPPPPPQQQQQQQPPPQQQQQTPPRQQQQQPRPPPQQQPQQPPUQQQQQQQPRQPPPPPPPPSQQQQPPQQQQQQQQQQIQQQUPPUQQQQUQQQQUUQQQQQQRPPUQPPRQQQPPQQQSSPQQQUUUPPQQQQQUQQQQ"PPPPPPPPQQQQQUQQPUUPPQQQQQRPPPUUQQQQQQUQQQPPQQQUUUUQQQQQPPQQURVPPPQQSPRPPPPPQQQQQQQQQQQQQQQQQQQQQPPPPRWQHQQPPPPPUQPPPPPQQPUQQPPPUTQQPVPQQQI  ',
    '  IPPPPPPPP"PPPPPPPVVPQQQQQUPPPPPPPPPPPPPPUUUUTPPPPQUUUPPPPVPPPPPPPRPPQRPPQPPPPPPPPPPPPPPPPPTTPPQPPPPPPPPPUQUUUUPPPPPUQQUUQQUPPPPUUUQQWQQQWQSUPPPPPPPPPPUPPPPPPPPPPPPPPPPPPPPPPPPUUUQXQQQQQQQUUPPPPPPPUTPPPRUUUUUUUUQQRUQQQUUPPUQIQQSQQQPPPPPPPPPUUUUUUUPPPPUUUPPPPQXXQQQIPPPPPPPPPPUUUUPUUUPQQQQQQ"PQQUUI  ',
    ' !HV:::::::N:::::::::VQUPP"P::::::::::::VPPPPPPPPPPPPPVV:::::::::VVPPVPPPPPPPVVVVV:::::::::::VVPVY:::::YVVPPPPPVVVY:VPPPPPPPPVPPPPPPPQQSSQQSPVPPPPV::::::::::VVVVVVV:::::::::VVVVPPPQQQQQQQQPPPPPVVY:::::VNYVVVVVPPPPPPPUUPPPPPUQQQPPSQSPPPPPVY:VPPPPVV:::VVPPPPPPPQQQQQQQPPPVPPPPPPPPPPPPPPPPPPPUS""QQPPI  ',
    ' IP::::Z&&&Z[&::::::::VVPVPV::PV:&&ZZ:::::VPPPPPPVVVV:::::Z:::::::VVVVVVVPPPPPPPPVV::ZZ::::::]VVV:::VVPPPPPPVVVVVVV:YY::::VVVVPVVVPPPPPVVPPVVPPPPP::::::&&[ZZ:::::::::::::::::::::VPPPVVVVPPPPPPPV::::::ZZZZ:::::VPPPVPPPPPPPPPPPPPVVPPPPPPPPV:::VVV:::::::VPPPPPPPPPPPPRPUPPPPPPPPPPPTPPPPV:::::PPPPPPPUI  ',
    ' IPVVVVV:::YYVPVV::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::VVVVVVVVVVVVY::YYYVVVV::YVPPPVY::::VV:::V::YVY:::::::VVVVVV::VVPVVVVPPVVVVVVVVVY:Y::V:VV:::::Y:::::::YVPPPPPVPPPPPPPPPPPPPPPVVVVPPPVVVVYY::::YVVVVVVPPPPPPPPPPPPPPPVVVVVVVV:::::::::VVPPPPPPPPPPPVPPVVVVVVVVVPPPPP^  ',
    ' IPVVVVVVVVVVVVVV:::::::::::::::::::::::::::::::YVVVV::::::::::::::::Y::::::::::Y::VVPPPPVVVVVVVVVY:::::::::::::VVVVVV:::::Y::::::Y::::::::VVY:::::::VVVVVVVVVVVYYY::::::::::::::::::::::::::VVPPPPPPPPPPPPPPPPVVVVVVVVVVVVVV::YVVVVVVVVVVVVVVVPPPPPVVVVVVYVVVVVVV::::::::::::VVVPPPPPVPPPPPPPPPVV:::VVVVQ  ',
    ' ^VVV::::::::::::::::::::::::::::::::::::::::VV:VYVV:::::::::::::::::V::YVVVVVV::::VVVPVV:::VVVVVY::::::::::::::::::::::::::::VVVVVVYYVVVVVVVV::::::::::::::::::::::::::::::::::::::::YY:VVYVVVVVVPVVPVVVVVV:V::::::VVVVV:VVV:YVVVVPPVVVVV::::::::V::::::::::VVV::::VVVV]::::::]VV::PPPPPVPPPVVV:::::::]]Q  ',
    ' ^VV::ZZ&&:::Z:::::::::::::::ZZZZ_Z::::::::::]V]::&&::::::::::::::::::::::::::::ZZ:::Z:::::::::::::YVVVY::::::::::::::::::DMNPPPPVVVVVVVVPVVVPVVVVV:::::::::::::::::::::::YV:VVVVVVV:::VVVVVPPPV:::VV::ZZ:::::::::::VV:::::::::Y::::PV:::::Z:::::::ZZ::::::ZZZZZ::::PQPPPP:::::]VVD/NPVVV]]::::::::::::::UI ',
    ' Q::::Z::::::::P:Z:::::::::::::::::::::V:::::VPP::Z:::::::V::::::::::Z::::::::::::VPPPV:::::VVVVV:::VVVVVYVV:::::::::YN::::::::::::VVY::::::::VVVVVVV:VVVVPPPVVVVV::VVV:::::::::::::::::::ZZ::::::::::::::::::VV::::V:::::::YVVVPPPPPPPVPPPVVVVV:::::::V:::::::Z:::Z:P:VVP:::::VPP::::::::::::::::::::VVVPI ',
    ' X:::Z&Z::::::::::::::::::::::::::::Z::::::::::V:::::::Z::VVVV::::::::::::::::VVVVVVPPVVVV:VVVV:::::VVPPVVVV::Y:Y:::YPP#:::::::::::::::::::VV:VVVVVVVVVVVVPPPVVVVVVVVPVV:::::::::::::::::::::::::::::::VV:::]VPPVVVVPVVVVVVVVVVVVVVVVVVVVPPVVVV:::::::VVV:::::::::::::::VV:::::VPPVVVV::VYVVVVVVVVV:::::VPQ ',
    ' ^VV:ZZ:ZZ::::::::::::::::::::VVY:::::::::::::::]VVVVV:[::VVVV:::::::::::::YVPPPPV:::YVVPVVVVPP::Z:::VPPVPPV:VVVVVVV]VVPV::V::::::V:::VVVVPPPVVVVVVVV:VVPPVVPVPPVVVVVPPPVVVY:::::::::::::VVV::V]::::VPPPPVVVVVPPPPPPPPPPPPPPVVVV::::::YVVY:::::::::::VPVVV:::::::::::::YVY::VVVVPPPPPPVVVVVPVPPPPPV::::::VP ',
    ' IPPVVV::VV:::YYYV:::::::::::YVV:VVPPPVVVVVPPPVVVVVYVV:::::::VVPPVVVVVVVVVV:PUPPV:::::::V:]VPQUP:::::::::VV:]]:::::::VPPPN:RP::::VVPPYY::VVVVVY::::VVVVPPPPPPPPPPPPPPPPPVPPVPPPPPPPPPPPPPPPPPPPVV::::PIIQPV:::::VPPPPPPPPPPPPPPPPPPVPPPPPPPPPPPV]]:::PQPV]:::::::::::::VVPVVPPPPPPPPPPPV::::::VPPPPVVVVVVVP ',
    ' ^PPPVVVVVVVVVVV:::::::::::::VVVVPPPPPVVVPPPPPPPPPPPPPV::VV:::VVVVVVVVVVVVVYVV::::V:Z:QQQQQQQQP:VVVVVVVVVVVVVVVVVVVV::VY:::PV:::YV:VVVYVVVVVYVVVVY:YVVVPPPPPPPPPPPPPPPPPVVVVVVPVVVVVVVVVVVVVVVVVVPVVVVPPPVVV::VVVPPPPPPPPPPPPPPPVVVVPPPPPPPPPPPPPPV:VVPVV]:VVV:YVVVVVVVVVVVPQVPPPPPPVVV:VVPVVPPPPPPPVVVVVVP ',
    'IQPVVY:VVVVVVVVVV::::::::::::::VPPPPPVVVVPPPPPPPPPPPPPPVPPPPV:::]]::VV::VV:::::YVPUPVP`IIIIII^P:VVVPPVVPPPPPPPPPPPVV:::::::Y::VVVY::::YVVVVVVVVVVVVVVVVVPVPPPVVVVVVVVPPPPVVVVVVVV:]VVY:::VVVVVVVPPPVV::VVVPVVVVPVVVY#PPPPPPPPPPPVVVVPPPPPPPPPPPPPPPPPPPVVVVPPPVVPPPVPPPPPPPUQVPPPPPPVVVVVPPPPPPPPPPPVVVPVVP ',
    'QPY:DDDD##:#NPP#:::::::::::::DDD:####:::VN###::##NPV:::#NPPP:::DDDD:::::DDD/D:#NPPQXQQQQQ`^^^IP:V:#########NNNNN##:DDDDD:PPVVPPPPPDD//D:::::#::#########::::::DDDDDD::######PN##::#:::D:::::#NPPPN::::DD:###NN#:::#MaPPNPNN#######NN##:#:##NNN###NP#PPPP#####NNN##:NPPPPUPUPPPPPNPPN:::NVPPPPN#########NPPP ',
    'M##bcdefghijkQlmhjnD::VV::33abcjhfffefjm:3ofhdjcjp:::3bjbaDDmbjgdddaD:#bqhhdjaba::VVPPPPY:NN::PPSbchhjjhhhhjjbbbcccjjjhjkQ^QQQ`QQ"bohffgghjccccccjjjcbjjrMpbmaohooohoobbjjbbNMbrppbhggsdjjjjbpaMabbbhhjdjjjcbpchhjjjjapp#pbcjstsfjbbjjhhhhjjjjhgdcmdk^Qubdjjco3oocapkIIIIII`Q^IkjbcjcbbnD:MaMpbjdggddjcaa#P ',
    '#NNMaa3aaaMa#PPMa3/:::::::DDMMua33333aaM:#MaaaMMuM:VV:MaMM::MMaaaaa#:::D3/MaaDa:::::VPPVVVPPVPPPPMM$3aaaaaaaMMMMMuuuaa33#PUPVPQPPPMMaaaaaaaMMuMMMaaaMMaaM#MMDD/33/33/DMaaa$D:DaaMMa333aaaaaaMM###MMMMMaaaMMMM#Maaaaau#MMNMMMaaaauMMMMMMMMMMaMMMuaMMaNUUNMaMMMM#MMMNM#QPQIIIT:PPNaMaaMMMM:V###MMaaaaaaaM##NU ',
    'PPVVVVYVV::::::VV::::::::::VVVPPPPPPPPPPPUPPPPPPPVVVPVVVVVVPPPPPPPVVVVVVPPPVVVVVV:::VPPPVPPPPPPPPPPPPPPPPPPPPPPPPPVVVV:Y::V:::PPVPPPPPPPPPPPPPPPPPPPPPPPVVVVVVVVY::VVPPPVPPV:YYVVVVVVVPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRPPPPPPUUPPPPPPPPPPPPPPPPPUUPPPPPPPPPP:PQQQP:VPPPVPPPPPPPPPPPPPPPPPPPPPPPPQI',
    'PPVVV::::Z&Z::::::::::Y:YPVVVVVPPPPPPPQQ^QP::VVPVVVPPPPPPVVPPPVVPPVVVVVPPPVVVVPVVVVVPPPP:VPPPVPPPVPPPPPPPPPV]:YVV::::::::::VV]]PPVPPVVVVVVVVVVVVVVVVPPVVVPPPPVVVVVPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPTPPPPPPPPPPPPPPPPPPVVVVVPPPPPPPPPPPPPPPPVVVVVVVV:VVVVV:YVVVVVVPPPPPPPVPPPPPPPPPPPPPPPPPPPPPPPPPUI',
    'VVVVV::::::::VVPPVVVVPPPPPPPPPVV:::VYVVVP:::::::::VVPPPPPPPPPPPPPPV]:::::VVVPPPVPPY::::::::::::VPVPPTPPPVVV:::::PPVPPPPPPPPPPP:VVVVVVVVV]::::::]VV::::::::::VVVPPPQ^^QQQPVVVVVVPPVPPPPPPPPPUPPPUUUUPPPPPPPPPPPPVV:VVVVVPPPPV::::::::VVVVVPPPPPPPPPVVV:::::::VVPPPP:::::::VVV:::::::::YVVVPPPPPPPPPPV]::ZZ:Y"',
    'PPPPVV:::::VVVVVVVVPPPPPPPVVVVV::::::::::::::::::::VVVVVVVVVVVVVVVV:::::::VVVVVYYV::::::PVVVVVYYVVPPPPPPPVVV]:VPPV::PPVVVVVPPPVVPPPPPVVPVVV::VVVVPVVVVVVVV::YVPPPPUQQQQPPPPPVVVVPVPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPV::VVVVVPVPVVVVPPPPVPPPPPPPVPPPPPVVVVVVVVVVVVVVPPVV::Y::YVVY:YVVVVVVVVVVVVVVVPPPPPPVV:::::PQ',
    'PPPPPPY:::VPV::::::PPPPVVVYY::::::::::::::::::::::YY::::::::::::::V:::::::YVV::::::VV::VPPPPPPPPPPPPVPPPPVVVVVVPV:::PPV]::VVVVV:VVPPVVVPPPPVVVVVPPPPPPPPV::::VPPPPPPPPPPPPPPVVVPPPPPPPPVVPPPVVVVVVVPVVVVVPPPPPPPPVVVVVVPPVPPPPPPUUPPPPPPPPVVVPPVPPVVPPPPPPPPPPPPPVVPPPPVYVVY:VVPPPPPPPPVVVVVVVVPPPPVVV]]VYP^',
    ':YVVPPPV::PQPZ:PP::PPPPPPPPPV:::::::::::::::::::::YV:::::::::::P:::::::::::::VV::VPVVVVY::VPPPPTII^QPPPV::Z:::::::::Q^QP::VV:::&Z:::::VV:]V::::VPPUPVPP::Z:::VVVVVVVVVVVPPVVVVVPPPPPPPPPPPVY:::::::::::::VVVVVPPPPPPPPPPPPPPPPPPPPPPTPPPPVVVPPPPPPPPVVVVPPPPQQQQUPPPPPV:::::::VVVVPPVPPPPPPP:::V]VV::::::::P',
    'PPPPVVY:::PQRPPPPPVPPPPVY::::::::UUPVVV::::::VVPPPPPVV::PV:::::P:::::::YVVV::::::::::VVVVVPPPPPPQQUUPPPPPPPPPPPVPVYYPQQQPPVVV:::VVVVVY::VPQQQQQQUPPVVPPPV::::VVPPPPPPPPPVVV:VVY::VPPPPPVVVVVVVP:::::::::YVVPPPPPP:::VVVVVVPPPPPPPPPPPPVVV::::YYVVVVPPPPPPPPPPPPPPPPPPPPPVVV::::YVVPPPPPPPVVVVVVV::::::VPPPPP',
    'PPPPV:YVVPPPPPPPPPPPPPPVVV::::::VPPPVVV::::::VVVPPVV:::YPV:::PQQPPYYYVVPPVVVVVV:::::::VVPPPPPPPPPPPPPP:::PQQPPPPPPPPPPQQRPPPPPPPPPPPPVVVPQ^QQQIQQQQPPPPPPVV]VVPPPPPPPPPPPPPVVVVY:VPPPPPPPPPPPPPVY:#::::VPPPPPPPPPVPPP[:PPPPPPPPVVPPPPPPPPVVVVVVVVVVPRUPPPPPPPPPTUPPPPPPPPPPPPPVVVVVVPPPVVPVVVVVVVVV::VVPPPPU',
    'PPUP#:PPPVY:::PPPPUTPUPPPPPPPPPP::::#P:::::::::::::#:::PPPVYvPIIQPPPPPPPPPPPPPP:::[Z:::#PPPPPPV:::PPPP:&:PQ"PPP"QQPPPV:::PPPPPPPPPPPPPPPQQQQQQ`QQIIQUUUPPPPPPPPPVPPVPPPPUPPPPPPPPPPPPPPPPPPPPP:::P#PPPPPPPPPPPPV:VPPP&#SUPPPPPPPPPPPPPPPVVVPPPPPPPPPPPPPPPVPPPUQQQPPPPPPPPUQQQP:::::PPPPPPPPPPPPPPPPPPV:VPUQ',
    'QQQ#/#QQ:&777;#PSwQQQQQ"""""QwQP//##>v#:&&&&&&:PP##""wQQQQQQ""QHIIIIQQQQQ^QQPP&&777&&&#%5%<"P//&++NQ"PP"QQ:7/P""QQQw:&777&:[ZVQQQxQQQQQPPP"HWIIHHII``IIIHIQQPUP:&P:&<&7&/&:Q""QQPPPPQQIIHQQQQP(7/%%"QQQQQQQQP#&77&&#"Q"wHQQQQQQQUQQQ&E:&&&::YPQPUQQ:&y&$/77&&:QQIIQQQQQQQQ^^QI:&:&&:QUQQ%QQQQ"#/"SQQw"P&:PQ"',
    '&&&/&+&;7**+/;7;&++77+;&/+7+&/&++++++/+77\'\'7\'\'77+;+++++77777++7&&&&&&D&&&&&&&&&7777777;+++++7***(*+&+\'*\'++7*7+&//&;;777\'(*777&&&+;&+;;777;&::&&&&D&&&&&&/D&&&&&&\';O7+*\'7\'*7&+77+&&;&;;&::/&&&+=(7+3#:&&&&&&&&/+*((\'7+&&&&&::/&&&/&&&777;Z&&&&&&[::&7+/#%#:/777&&&&&&&&&&&&&&&&77;77&&&&D:&;;&+***++\'7+777;&&',
    '&&/#:&&&;+&##:;&&&;;;;;&D&;O&&&&&/&&&:&;&&///&&&&&&7;&&7+77;&&;&&&&&&&&&&&[[&&:&&&&&&&&&&&&;7++;&&&&&7777;;&&&&/&&;&&&D&&;&&&&&&;;&+;&&;&&&&&&&&&&&&&&&&&&&&:/D&+&/&&&&&;&&&;77&&&&&;+&&:/&&&&7&&&&::&&&&&&&&:&&;7;&+&&&&&Z::&&&&&&DDD&&::::[&&Z::&&/#"""Pv&&&&&&&&&&&&&&&&&7&&&&&&&&&:::&;&&&;+7&;77;&&&&&&',
    'PRQQP:VQPPQQRPPPPPPPPPVPPUPPVPPPPPPPPPPYVQWWWHQQ:PP:PPPPPPPTPPPPUUPVVYVPPQIQRPPPPPPUUPPUQPPVVPPQQRPPTPPUVVPPUPPP:VPPUQRRPPPQPPPPPPVPPPQRUQPPVVVPPPPPPPPPPPPPUQQP:"w"PPPPPQQP:VPUUPPVPPVPPPPPPPPUUPPVVVVPPPPPPPPPP:PPVVRQPVPUQPPVPPRHWWQPPPPPPPPPPPPwwUUPPPRPPUQPPQPPPPPPPPP::PUPPVVPRPQU:PPPPQQUUPPPPPPQPPPP',
], {
    "0" : -11509680,
    "1" : -10461120,    "2" : -9412528,    "3" : -10465216,    "4" : -9408448,    "5" : -11513824,    "6" : -10456992,    "7" : -10461088,    "8" : -11509696,    "9" : -13615088,    " " : -16777216,    "!" : -15724544,    "\"" : -13619168,    "#" : -12566480,    "$" : -11513808,    "%" : -12566496,    "&" : -11513776,    "'" : -9412512,    "(" : -9408400,    ")" : -9408432,    "*" : -9408416,
    "+" : -10461104,    "," : -10461136,    "-" : -8359824,    "." : -8355728,    "/" : -11513792,    ":" : -12566464,    ";" : -10465200,    "<" : -13615072,    "=" : -8355712,    ">" : -12562384,    "?" : -9404320,    "@" : -7307152,    "A" : -7307136,    "B" : -12562400,    "C" : -9404336,    "D" : -11517888,    "E" : -12562368,    "F" : -7303040,    "G" : -7303024,    "H" : -14671856,
    "I" : -15724528,    "J" : -8359840,    "K" : -8355744,    "L" : -10457008,    "M" : -11517904,    "N" : -12570576,    "O" : -10465184,    "P" : -13619152,    "Q" : -14671840,    "R" : -13623248,    "S" : -13623264,    "T" : -14667728,    "U" : -14671824,    "V" : -13619136,    "W" : -14675952,    "X" : -14675936,    "Y" : -12570560,    "Z" : -12566448,    "[" : -11517872,    "]" : -13615040,
    "^" : -15724512,    "_" : -12562352,    "`" : -15720416,    "a" : -10465232,    "b" : -8363984,    "c" : -7315408,    "d" : -6262736,    "e" : -5210048,    "f" : -6258624,    "g" : -6262720,    "h" : -7311296,    "i" : -9412544,    "j" : -7311312,    "k" : -11517920,    "l" : -12570592,    "m" : -9412560,    "n" : -9416640,    "o" : -8363968,    "p" : -9416656,    "q" : -7315392,
    "r" : -8364000,    "s" : -6258640,    "t" : -5210064,    "u" : -10469328,    "v" : -13615056,    "w" : -14667744,    "x" : -15720432,    "y" : -11513760,
}, 3);
			return get(0, 0, 900, 99);
		},
	},
	construct: {
		head: function(){
			background(0, 0);
			Display.pixelArt([
    '               !',
    '               "',
    '               #',
    '               #$',
    '               #%',
    '               #&',
    '               #%',
    '               #%',
    '               #%',
    '               "#',
    '               #&',
    '               &\' ',
    '               "%',
    '              (#&',
    '              (#&',
    '              (##',
    '              )#&',
    '              ##%',
    '              *"%',
    '              )#\' ',
    '              )#\' ',
    '              +,%',
    '             )---',
    '       .\'    +++%.    # ',
    '      ../%  (0+,%.1  2%%&',
    '      ...\'&-3-++4..\'%5\'%\'    ',
    ' (+    ..\',--(-+%.++56%& ',
    ' ""-$  ...%,,+++&"2+4%\', 7&&&% ',
    ' ##"\'  (..$.-#+\'&&8%%%%  9\'%8%   ',
    ' #$$:  +1.+.-%+&%"%"\'%++  \'$\';*   ',
    ' 5\'$  +.+.3$\'$$:$$%%\'\'\'#7  $\'6$      ',
    ',<3.5=.7.&$$4+#&,,\'$\',6/#5>+#%%  ',
    '-#<5#13?-@$0A+%%-"-\':%B&%8%%%%% ',
    '-&##--3-$\'-"CDDDD+,-%$#&%;%%%%% ',
    ' +E5."5\'\'-4/+D\'+D",-F%$%%%&"7"   ',
    ' (((..-G7-7H+D%-D5+++54++,.I..',
    '  /J--K&(4?,$%DDD%%55E+-++-7+L',
    '  ((5..\'M.,+&NO,\'MP54+Q0++(((  ',
    '  (5-..,-..%5+,,-2#.+,5-RS4(%',
    '  (.(...4-..&47747++R&-+++T.',
    '   ((#-..5%-#+-,5"+&4--+4((?',
    '   ((-U.-3-4+-,,7R4,+++0.U.',
    '    -.-"3..$+++7,,V+++7&(J#',
    '     (..&3,"44H4,%$-+W+7("\' ',
    '    957..-\',57+-+5X+%,%;&4$ ',
    '     Y\'##-".%7++=;T$%\'\';774   ',
    '    "++555#..-.--+-\'755,M\'\'   ',
    '    #+H55,/%-.++R7#5-"\'%\'\'%   ',
    '    #H<\'\'\'\'%\'\'::Z\'$\'%%\'\'%\'$           ',
    '    6-5M\'\'\'%\'\'\'$\'\'%\'\'\'\'$;N$            ',
    '    \'#"4\'\'\'$$$\'$$$\'$[:$$%%\'       ',
    '     ..3(+4M74"#44]4477&M7<',
    '    (...(((()77#7M&4447".T+',
    '    (..%.(444&%^\'\'\'4+   &..-   ',
    '   .+&5                   &+&',
], {
    "0" : -8882064,
    "1" : -8357768,    "2" : -10463144,    "3" : -8355720,    "4" : -10987432,    "5" : -10461088,    "6" : -13621208,    "7" : -11513776,    "8" : -13094864,    "9" : -6250336,    " " : 0,    "!" : -6776688,    "\"" : -12040120,    "#" : -12566464,    "$" : -14671840,    "%" : -13619152,    "&" : -13092808,    "'" : -14145496,    "(" : -7829368,    ")" : -7303024,    "*" : -6776680,
    "+" : -9408400,    "," : -9934744,    "-" : -8882056,    "." : -8355712,    "/" : -9934752,    ":" : -15198184,    ";" : -13619160,    "<" : -12042176,    "=" : -9410456,    ">" : -10461096,    "?" : -8884112,    "@" : -14147552,    "A" : -10461080,    "B" : -12564416,    "C" : -9932696,    "D" : -15724528,    "E" : -11513784,    "F" : -9406344,    "G" : -12040128,    "H" : -9936800,
    "I" : -8353664,    "J" : -8884104,    "K" : -9410448,    "L" : -5723992,    "M" : -10987440,    "N" : -14145504,    "O" : -10985384,    "P" : -9406352,    "Q" : -13621200,    "R" : -9408408,    "S" : -13092816,    "T" : -7829376,    "U" : -7831424,    "V" : -14147544,    "W" : -11511720,    "X" : -14669792,    "Y" : -10989488,    "Z" : -14143448,    "[" : -14671848,    "]" : -12566472,
    "^" : -15198176,
}, 4);
			return get(0, 0, 124, 220);
		},
		body: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                        ',
    '                !"""#"$$%&\'()*))+),                     ',
    '             -./)--01#.0%--2)3\'++&"")&                  ',
    '           +)$4)&+*5*//*%/++6*)-.)-.+*7&                ',
    '          **-&-)03+*.008,%0#9")--,),-%0$%+              ',
    '        :**--&;0)+<=9##991###>&"&"##--%*&:*             ',
    '       ://0)%..#9$+*#9$$#"0.#-*+=?""<,@)+)A:B           ',
    '      **6)*&$&+&%//*.,%.&$1.&#+)(?@###-&)+&+;           ',
    '     <:)+*&;C&))//5%+)/&+%&)&+,&+*0""..,%+-*-,:         ',
    '   ++*++/-)+-+D,/E+&+-&%+)&F&-C***-))\'+-.%)+".))        ',
    '  )&%+**-)+++G)$EH*I&D6%::%:%+%)GE&)-%&()*&))?%,&       ',
    ' ++2++%%&))+&-))E/:&)%HJ)KA-%*%5**0&-3-)+.-+)+)L$9      ',
    ')*)+***E)&-+))*-///%M)&%%%%&+%&//*0I++$.)+)-)+.$"#      ',
    '+*-***+*++-&-(+%E//)%&*M)-)*&%*5/%&-%-*++-+*,""".-      ',
    ' 0$+G//+****//>&*++EEI%I&I%%%*5*/0&**E///\',"""""0       ',
    '  %".&**/555///+&)5//3/*+*//+*EE,>**/*)+..""<+0.0       ',
    '  0+*+0-%**///3*+*6*-*555*///+)%*+**N-""""D:0%%.        ',
    '  .%:C://,0,*/**++6+)****)E***-++-""".O*/,*C0%&         ',
    '   $/&://::/)P)/*++3-++)+3+++*,".."0+6::%%+%%%%         ',
    '   $///::::/H:*///+3&=0=,..$)*/::::*:::6),),;%%         ',
    '   %/+///:://:E///:Q:::::/:::H*:RH:%::+S%,)%%,%         ',
    '   +T%:%0U%,:/*//HH::::::/:HH:E/H::$*%0&,.$%C$%         ',
    '   A)$V40,)*)$O>/::F:::::/HH:T$%,,$&*O."..$4,$%         ',
    '   A$$%,0..0*5/-*+))-,0$,..42)+/*)$$0.<..<$  $,         ',
    '    0    "../**-*>3++>+++6****+$P......""               ',
    '         -"..0*>**))))++>*****+%P..00"..0               ',
    '          "......W.=&-)*/*E+%$".0""""<""                ',
    '           """...W"..1%%#,,#."<.."""##@#                ',
    '          A""""99"""""".9$.."<."99#XX@0"                ',
    '          B-."#.Y."""""""<""".#.".#"W00.                ',
    '           0,##"00+&%"@@#"""#Z..""",#"..                ',
    '           .0C/+9<:*&+>0.<$)"W..".,""<"0                ',
    '           ...&S*&[*+3>+&+,0]+&"W.""#"#%                ',
    '          ##...4,.*33\'^+&++-0.""""""#,$"#               ',
    '         +_-&0W"..+*))++)6&%.."""""%%,%@.               ',
    '         ,0*/+)&&&,0"##"##"##0.&&&)`*,0"&,              ',
    '         ,%a)-*6*/+5*&0"""",)+**++a.0."?0.              ',
    '         &+$#"//**+*5+2@#9-*)))&++..""?0..,             ',
    '        %%6,+%),.0."R-+0$0+)).#0=#9"$0.%"&"             ',
    '        &+*%)&*%&&&&$)++%%**#%&%I.&.##"+<&"$            ',
    '       *+**0)&/)&*5%&?+*#-**,%-b&@%.cD#&,+&*            ',
    '       +))&3%&/)&&#*&$*/"+*"&%""+W$<@%/+."".            ',
    '        %)*//++&&G)+;%*)"))I&%O--&-"-+--0"$             ',
    '          %*/*+*%8/3%%/)9S3d%%&>0%-%.%..$               ',
    '          )$1@,/*&%M&-)+##))0%I-%+0.#.D/&%              ',
    '          /HHeJ$:E&-)+\'O%,&-(-2&**":+::H,,              ',
    '          *HQ/::#+//E)$"D&"O+3++%?:;%:::%.              ',
    '          )::::::*")0?""\'(?##$0#*::,+::$#               ',
    '            -//)e:$+3.""))"<.0&$)*%),0*                 ',
    '               B  OG)-##++"9)--0#                       ',
    '                   ++2# ,-.  &&":                       ',
    '                   /%&# &6.  %":                        ',
    '                        ++.                             ',
    '                        +6.                             ',
    '                         +"                             ',
], {
    "0" : -13092808,
    "1" : -14671848,    "2" : -10461096,    "3" : -9410456,    "4" : -12040128,    "5" : -8357768,    "6" : -8882064,    "7" : -11515824,    "8" : -12042176,    "9" : -15198184,    " " : 0,    "!" : -6774632,    "\"" : -14145496,    "#" : -14671840,    "$" : -12566464,    "%" : -11513776,    "&" : -10987432,    "'" : -9936800,    "(" : -9934752,    ")" : -9934744,    "*" : -8882056,
    "+" : -9408400,    "," : -12040120,    "-" : -10461088,    "." : -13619152,    "/" : -8355712,    ":" : -7829368,    ";" : -11513784,    "<" : -13619160,    "=" : -12566472,    ">" : -9408408,    "?" : -14147552,    "@" : -14145504,    "A" : -7303024,    "B" : -5723992,    "C" : -11515832,    "D" : -10463144,    "E" : -8355720,    "F" : -8353664,    "G" : -8884112,    "H" : -7831424,
    "I" : -10987440,    "J" : -7305080,    "K" : -8880008,    "L" : -10459032,    "M" : -10989488,    "N" : -9406352,    "O" : -13094864,    "P" : -13092816,    "Q" : -7829376,    "R" : -7831416,    "S" : -12568520,    "T" : -8353656,    "U" : -12564416,    "V" : -8880000,    "W" : -13621208,    "X" : -14143440,    "Y" : -9410448,    "Z" : -12566456,    "[" : -8882048,    "]" : -10985384,
    "^" : -9932696,    "_" : -12038072,    "`" : -8884104,    "a" : -11511728,    "b" : -12042168,    "c" : -14147544,    "d" : -9406344,    "e" : -7303032,
}, 4);
			return get(0, 0, 200, 220);
		},
		hand: function(){
			background(0, 0);
			Display.pixelArt([
    '                 !"                                     ',
    '               #$%$                                     ',
    '              &\'%%$%   $$%                              ',
    '              %(\')%%  !*+,-$                            ',
    '              ./$$""  $0+0,&                            ',
    '             123*43"2$\'3056(                            ',
    '             %&3330"% #700,+                            ',
    '          !\'\'\'3833*$%%9($$\'\'\'\'%                         ',
    '         .%\'\'\'2*:43$"3304*;\'%\'\'%                        ',
    '         2&($* ,   \',333+*30330"\'                       ',
    '        "&(&,0      ,<33=>(33334&                       ',
    '        $?00+&       ,@0A&&3333,0B                      ',
    '        $00002       .%$&&A3A&&,&C                      ',
    '        $30*3"       %%D3*00&&30,4                      ',
    '       C$3*0,3       $%%%$D3("(3*E                      ',
    '        ,4,,",      \'+0$%3)%3&&3*<                      ',
    '        ***4\'4      "333*\'"%3&&&&F                      ',
    '      *G$30*$,     \'0303*H",&3&>&,                      ',
    '      $,,(0,2<I    $3330,<$4\'%%3*,                      ',
    '     $8,<*0*"4&    4*0A&4(00%\'\'\'*J                      ',
    '    $+*2K,**,L("      04&3,%$\'\'(,<                      ',
    '    A44  0**40,3      %,0,M%#N"&44                      ',
    '   %***  $*443,,       O,,K&&(3P<                       ',
    '   (**I   4Q4ER         ,4*33&,K                        ',
    '  !***     I              2*00,                         ',
    '  \'***                    (*33,                         ',
    '  08S2                    #00**                         ',
    ' #%\'92                    $330,                         ',
    ' \'T&,2                   "**0,K                         ',
    ' %33Q                    $004<                          ',
    ' 333,                    &0,4                           ',
    'U&O3,                     *,,                           ',
    ' V+,,                                                   ',
    ' <&0*                                                   ',
], {
    "0" : -10461088,
    "1" : -16248816,    "2" : -12566464,    "3" : -10987432,    "4" : -8882056,    "5" : -10463144,    "6" : -9934752,    "7" : -13092816,    "8" : -10985384,    "9" : -9936800,    " " : 0,    "!" : -15724528,    "\"" : -13092808,    "#" : -15198184,    "$" : -13619152,    "%" : -14145496,    "&" : -11513776,    "'" : -14671840,    "(" : -12040120,    ")" : -14145504,    "*" : -9934744,
    "+" : -10461096,    "," : -9408400,    "-" : -10989488,    "." : -16250872,    "/" : -13094864,    ":" : -8353664,    ";" : -14671848,    "<" : -8355712,    "=" : -9410456,    ">" : -11513784,    "?" : -10461080,    "@" : -12042176,    "A" : -10987440,    "B" : -12568512,    "C" : -7303024,    "D" : -14147552,    "E" : -8884112,    "F" : -8355720,    "G" : -14669784,    "H" : -10459040,
    "I" : -5723992,    "J" : -8357768,    "K" : -7829368,    "L" : -14147544,    "M" : -9406352,    "N" : -13619160,    "O" : -11511728,    "P" : -9408408,    "Q" : -8882064,    "R" : -7303016,    "S" : -12040128,    "T" : -13090760,    "U" : -15200240,    "V" : -10463136,
}, 4);
			return get(0, 0, 136, 136);
		},
		arm: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                        ',
    '   !"#$$%                                               ',
    '  &\'(\')!)$*                                             ',
    ' +(& ,$))-$\'                                            ',
    ' .(!*/0)+)!(0                                           ',
    ' 1(2314\'0 ./25                                          ',
    '+61$"1/768\'13"                                          ',
    ' 61*"18(98:1&1;                                         ',
    ' -(.<=8.1/"9$>!6                                        ',
    ' &1\'1 ?> .68?1!)*                                       ',
    ' 3&"*  &@!*A$!\'-B9                                      ',
    '   )!$**-$#"61-((4                                      ',
    '    &)*!"!!611!(((                                      ',
    '     &&&)&&&!!C1D(                                      ',
    '      )E&&-?1"$1(                                       ',
    '       &&&E"!""(F                                       ',
    '       \'..G&""!&HI                                      ',
    '       (.\'..\'!/ */                                      ',
    '        -..*. 8  8                                      ',
    '         \'+  J 8 /3I"9                                  ',
    '                 &$(((3                                 ',
    '              3+@K91((4                                 ',
    '             ))11!K#(((                                 ',
    '            L&!\'!K169.                                  ',
    '            &E&&!06-I                                   ',
    '            &&&"\'M9 3                                   ',
    '             &)M8 68/                                   ',
    '                9 "IN                                   ',
    '                8 /9O$                                  ',
    '                 P $1\';((6                              ',
    '                 -*1166Q61                              ',
    '               -R!1111!Q(0/                             ',
    '               +&--11119A\'                              ',
    '                &&&11-.&8                               ',
    '                -&S-$/! \'                               ',
    '                     I! "                               ',
    '                     6  !T                              ',
    '                  3   ! $I                              ',
    '                 --$!"!1!3                              ',
    '                 --#$$U6(63                             ',
    '                 -V$%"66(Q6                             ',
    '                 ++)\'-WK6(0                             ',
    '                  \'8/)9))&!                             ',
    '                  9/ 2+$)S3                             ',
    '                 (/8 X                                  ',
    '                 // / .                                 ',
    '                6/\'8/                                   ',
    '               6/9 /Y8                                  ',
    '               // 6I 3                                  ',
    '              Z[  / 3                                   ',
    '              3! 6  /                                   ',
    '                I3                                      ',
    '                (  3                                    ',
    '                 Z/                                     ',
    '                 3                                      ',
], {
    "0" : -9408408,
    "1" : -9408400,    "2" : -15198184,    "3" : -6250336,    "4" : -8357768,    "5" : -7827320,    "6" : -8882056,    "7" : -7305072,    "8" : -7303024,    "9" : -7829368,    " " : 0,    "!" : -9934744,    "\"" : -10461088,    "#" : -10463144,    "$" : -10987432,    "%" : -10461096,    "&" : -13619152,    "'" : -12566464,    "(" : -8355712,    ")" : -14145496,    "*" : -11513776,
    "+" : -14671840,    "," : -11513784,    "-" : -13092808,    "." : -12040120,    "/" : -6776680,    ":" : -12566472,    ";" : -9406352,    "<" : -10987424,    "=" : -7305080,    ">" : -8884112,    "?" : -10459040,    "@" : -12038072,    "A" : -8884104,    "B" : -7829376,    "C" : -8882048,    "D" : -7831424,    "E" : -13619160,    "F" : -10989480,    "G" : -12040128,    "H" : -6774632,
    "I" : -5723992,    "J" : -12564416,    "K" : -9410456,    "L" : -14147552,    "M" : -13621208,    "N" : -7303016,    "O" : -9936800,    "P" : -10987440,    "Q" : -8355720,    "R" : -13094864,    "S" : -14669792,    "T" : -5197656,    "U" : -8882064,    "V" : -10989488,    "W" : -13619144,    "X" : -6252384,    "Y" : -9934752,    "Z" : -7303032,    "[" : -6250344,
}, 4);
			return get(0, 0, 108, 220);
		},
	},
	keese: {
		0: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                       ',
    ' !                                                                     ',
    '  "                                                                    ',
    '   #$                                                                 %',
    '    &\'                                                              (% ',
    '     )*                                                            +%  ',
    '      *,-                                                         .%   ',
    '       *,/                                                      0*1    ',
    '        *22                                                    &,,$    ',
    '         *,,-                                                 \',*3     ',
    '          2,,+                                               ***4      ',
    '           *,,*                                            5*,,"       ',
    '            ,6613                                         +*2*2        ',
    '             1,,,2                                      7%1,*8         ',
    '              **9*1:                                   ;11*9+          ',
    '               <1111;                                )1%%1%=           ',
    '                =%%<%%6                            .>>>%%%.            ',
    '                 *%>>=6&                          36<>=??@             ',
    '                  2>=%2AB                         A29===C              ',
    '                   21*,66-     D          E      22*1=%F               ',
    '                    GH?1*1E    IJ        KL     %*11=6M                ',
    '                      N*%%1:   OPQR     SQT    *%>*=UV                 ',
    '                       0WX21#   YZQ[]^Q_Z`a  -b*=c3                    ',
    '                      d   ef2+  Yg]hiji_kl  +6mn    :                  ',
    '                       o    Mpq rK`_i_h]sg tq@     u                   ',
    '                       E     SvwYTxS]QkSyz{[|                          ',
    '                             }[i~x¡¢_k|[i£ji¤                          ',
    '                              ¥z¦§¡¨*/©¨ª«igO                          ',
    '                               ¬®~¯°±²³´¨yµ                            ',
    '                               EY¶·¸¹º»¼½¾¿                            ',
    '                                ¥~ÀÁÂÃÄÅÆÇ                             ',
    '                                ÈÉÊËÂÌ»ÍÎÏ                             ',
    '                                 ÐÑÒÓÔÕÖØ                              ',
    '                                  XºLÙÚÛ                               ',
    '                                  *ÜÝÞß?o                              ',
    '                                   0   àÈ                              ',
    '                                  J    Ç                               ',
    '                                  á    (                               ',
], {
    "0" : -3618616,
    "1" : -8231846,    "2" : -7571346,    "3" : -5594976,    "4" : -6252916,    "5" : -6252906,    "6" : -6915986,    "7" : -3618626,    "8" : -7571336,    "9" : -8229286,    " " : 0,    "!" : -5592406,    "\"" : -7568766,    "#" : -6910836,    "$" : -4937046,    "%" : -8887206,    "&" : -7568776,    "'" : -8226706,    "(" : -6250346,    ")" : -9542566,    "*" : -8229276,
    "+" : -8884636,    "," : -7573916,    "-" : -2963256,    "." : -8887196,    "/" : -6913416,    ":" : -4279116,    ";" : -8231836,    "<" : -8889766,    "=" : -9545136,    ">" : -8889776,    "?" : -8887216,    "@" : -10200496,    "A" : -6258056,    "B" : -5594986,    "C" : -8226696,    "D" : -9539986,    "E" : -4276546,    "F" : -9545126,    "G" : -10203066,    "H" : -6255486,
    "I" : -11513776,    "J" : -11516366,    "K" : -10203076,    "L" : -10858436,    "M" : -11516346,    "N" : -4939626,    "O" : -6908266,    "P" : -4942226,    "Q" : -4284306,    "R" : -3621236,    "S" : -3623816,    "T" : -12174296,    "U" : -1649986,    "V" : -4279126,    "W" : -8884626,    "X" : -11518916,    "Y" : -14145516,    "Z" : -2968446,    "[" : -4939676,    "]" : -3626376,
    "^" : -5597586,    "_" : -4284316,    "`" : -4281736,    "a" : -11513786,    "b" : -9547696,    "c" : -12832216,    "d" : -6255496,    "e" : -6250336,    "f" : -10203056,    "g" : -8229306,    "h" : -4942246,    "i" : -5600176,    "j" : -5597606,    "k" : -2310516,    "l" : -6916026,    "m" : -8229266,    "n" : -14145506,    "o" : -3621186,    "p" : -7573936,    "q" : -7571366,
    "r" : -13490146,    "s" : -5597596,    "t" : -7571356,    "u" : -10197926,    "v" : -3626386,    "w" : -4279146,    "x" : -8887236,    "y" : -5600166,    "z" : -6258096,    "{" : -4937076,    "|" : -2968456,    "}" : -9542576,    "~" : -14148076,    "¡" : -8231876,    "¢" : -4942236,    "£" : -6258106,    "¤" : -4937096,    "¥" : -13490156,    "¦" : -10200526,    "§" : -11516376,
    "¨" : -6913436,    "©" : -6913426,    "ª" : -4942256,    "«" : -7571386,    "¬" : -4934486,    "®" : -11518926,    "¯" : -12834786,    "°" : -4947436,    "±" : -331756,    "²" : -1645026,    "³" : -992166,    "´" : -14153216,    "µ" : -6908286,    "¶" : -15463926,    "·" : -4304896,    "¸" : -336886,    "¹" : -4276716,    "º" : -14803446,    "»" : -331676,    "¼" : -339316,
    "½" : -12839926,    "¾" : -9545146,    "¿" : -3623776,    "À" : -4960256,    "Á" : -334326,    "Â" : -12832246,    "Ã" : -16121856,    "Ä" : -334236,    "Å" : -336756,    "Æ" : -7584226,    "Ç" : -10860996,    "È" : -2963266,    "É" : -12174306,    "Ê" : -6273526,    "Ë" : -344566,    "Ì" : -16774656,    "Í" : -1662896,    "Î" : -9550276,    "Ï" : -4939656,    "Ð" : -6913446,
    "Ñ" : -10863566,    "Ò" : -4294646,    "Ó" : -2302956,    "Ô" : -12829686,    "Õ" : -997366,    "Ö" : -7581656,    "Ø" : -8226746,    "Ù" : -8884656,    "Ú" : -12832226,    "Û" : -12834776,    "Ü" : -13490136,    "Ý" : -12171716,    "Þ" : -9542556,    "ß" : -14145496,    "à" : -989496,    "á" : -4934476,
}, 3);
		return get(0, 0, 213, 115);
		},
		1: function(){
			background(0, 0);
			Display.pixelArt([
    '              !                                            "           ',
    '                                                            #          ',
    '             $                                               %         ',
    '            &                                                \'         ',
    '           ()                                                *&        ',
    '          +\',                                                 -#       ',
    '         ./0                                                  .\'.      ',
    '        1/2.                                                  .\'++     ',
    '        \'/3.                                                  4+5/#    ',
    '       \'\'+6$                                                   ++/&    ',
    '      7-/869                                                   +:+;3   ',
    '      <=2)+                                                    ;3>/+   ',
    '      /+?)+                                                    /38+/4  ',
    '     #++)3;                                                    23)+/.  ',
    '     /+@)3+                                                    33)A/+4 ',
    '    +/+))3+                                                    +3)8+++ ',
    '    \'+3B)03                                                    )3)8)65 ',
    '   C+28)):2                                                    +>))B2+D',
    '   E/38)3+/*                                                   /+6)F)3+',
    '   368036/\'&                                                  G\'/63H836',
    '  I+3036++/J                                                  J;+630)36',
    '  K:)36+++/\'                                                  ;++6662B3',
    '  <3?6+/////(                                                #\'//++66L)',
    '  3>)+///+///                                                ./////+6))',
    '  E++//////;-&                                              GJ//////56)',
    '  )M\'=////////,                                             &-=/////++8',
    '  $0\'\'-&\'////+;                                            &=//++/\'-/+)',
    '  $+=&J-\'/+++++(            N                7            O//+++/=---;6',
    '  P/\'-==/++++++6Q            RS            TU             /+/+/+//=//-3',
    '  VW\'\'+3633+6666+            XYZ          []^            \'+6++\'+333///_',
    '   W)BU`UM`+633))3           Pabcd      efghT           G+33663M?MUU?$i',
    ' jkH\'-\'=+3lmM266/>6n         opqrrsZtu[[bfvw9         x\'3+33)ymlPK++/=B',
    ' z   ;////5+P{E33:66+O       |o}cbg~b~g¡bq¢£         \'--33>)¤¥K+///\')4 ',
    '       \'////;+¥P330>:/0?      ¦§¨f©ª«¬«bf®¯£      4.666+3)U°+++///+    ',
    '         &J-\'/6F°3+3F?3+/±²³  ´µ¶·¸«¡¹¹ºq¢Y»  ¼²--/2@@F))l`K+/\'\'+      ',
    '           G-½/+B$FB?E)8¤¾¿ºÀ ÁlÂÃvºººsÄ~Å¹° ÆfcÇPPU8)88?P+/=È(        ',
    '             &--+?0?B+03K¶ºbÉYÊËlÌs®fqÄÍ¹«¹Î~ÏfcÐ3338B))M2/-\'4         ',
    '              7&\'Ñ>800)ÒÓ)Ôb¹Õ´ÖØYsbqÙÙb¹¯¯ÚÛ~bÜ8<()3)82{/\'Ý           ',
    '                G88U      oËÞßàÑáâãäå\'+á¢~É¶¯æÖ       ç8{G             ',
    '                           ÊÊpÖèMéêëìíîïåÉßðñ^Á                        ',
    '                             ò¦o´óôõöøùúûü~Åý                          ',
    '                             þÿĀāĂăĄąĆćĈĉĊµÉ                           ',
    '                             |$ċČčĎďĐđĒēĔĕ°µ                           ',
    '                              Ė#ėĘęĚđĐěēĉĜĝ                            ',
    '                              ĞÎğĠġĢđđĒģĤĥâ                            ',
    '                               ÞĦħĨĩąĪīĬĭY                             ',
    '                                à8:Įįİı8Ĳ                              ',
    '                                38làlP¤)5                              ',
    '                                >@çQM ĳĴĵ                              ',
    '                                Ķk  ķ  +ĸ                              ',
    '                                Ĺ+     83                              ',
    '                                Q+     `Ý                              ',
    '                                 H     B                               ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
], {
    "0" : -8889766,
    "1" : -6910836,    "2" : -8231836,    "3" : -8887206,    "4" : -4279116,    "5" : -8229286,    "6" : -8231846,    "7" : -3618616,    "8" : -10203066,    "9" : -6250346,    " " : 0,    "!" : -9539996,    "\"" : -4276546,    "#" : -8226706,    "$" : -10200496,    "%" : -5597546,    "&" : -6913416,    "'" : -7571346,    "(" : -7571336,    ")" : -9545136,    "*" : -2963256,
    "+" : -8229276,    "," : -5594976,    "-" : -6915986,    "." : -8229266,    "/" : -7573916,    ":" : -8887216,    ";" : -7573906,    "<" : -8884636,    "=" : -7571356,    ">" : -8889776,    "?" : -10860986,    "@" : -9547706,    "A" : -10205636,    "B" : -10203056,    "C" : -6908266,    "D" : -6910846,    "E" : -9542566,    "F" : -9547696,    "G" : -7568776,    "H" : -9545126,
    "I" : -6252906,    "J" : -6915976,    "K" : -8887196,    "L" : -10205626,    "M" : -10860996,    "N" : -8882066,    "O" : -7568766,    "P" : -12174286,    "Q" : -3621186,    "R" : -11513786,    "S" : -12171716,    "T" : -12829646,    "U" : -11516356,    "V" : -3621196,    "W" : -1649976,    "X" : -14145526,    "Y" : -5597596,    "Z" : -3623806,    "[" : -4281746,    "]" : -2965886,
    "^" : -12174296,    "_" : -4281696,    "`" : -11518916,    "a" : -4279166,    "b" : -4284316,    "c" : -3623816,    "d" : -3623796,    "e" : -2965866,    "f" : -3626376,    "g" : -4942256,    "h" : -4281736,    "i" : -6255486,    "j" : -4279136,    "k" : -2965836,    "l" : -13490146,    "m" : -13490136,    "n" : -6908276,    "o" : -14145506,    "p" : -12832236,    "q" : -2968446,
    "r" : -3628946,    "s" : -4284306,    "t" : -3626366,    "u" : -8231886,    "v" : -2310526,    "w" : -8229306,    "x" : -5594986,    "y" : -10858426,    "z" : -9542556,    "{" : -11518926,    "|" : -9539986,    "}" : -6255516,    "~" : -4942246,    "¡" : -4286876,    "¢" : -4942236,    "£" : -9545156,    "¤" : -12176856,    "¥" : -12834776,    "¦" : -14148076,    "§" : -11516376,
    "¨" : -1652576,    "©" : -4939686,    "ª" : -5600186,    "«" : -5602736,    "¬" : -6260666,    "®" : -2310516,    "¯" : -6258106,    "°" : -12832216,    "±" : -6913426,    "²" : -7571366,    "³" : -9542586,    "´" : -14803436,    "µ" : -10203076,    "¶" : -9545166,    "·" : -994656,    "¸" : -4281756,    "¹" : -5600176,    "º" : -3626386,    "»" : -12829656,    "¼" : -6910866,
    "½" : -6918556,    "¾" : -6913436,    "¿" : -994666,    "À" : -2963286,    "Á" : -13487576,    "Â" : -12176866,    "Ã" : -4939666,    "Ä" : -1652586,    "Å" : -5600166,    "Æ" : -4939656,    "Ç" : -9545146,    "È" : -6258056,    "É" : -6255536,    "Ê" : -14145516,    "Ë" : -13490156,    "Ì" : -6258096,    "Í" : -3623826,    "Î" : -8229316,    "Ï" : -5597606,    "Ð" : -10861016,
    "Ñ" : -11518936,    "Ò" : -8884626,    "Ó" : -8226696,    "Ô" : -11516386,    "Õ" : -4939676,    "Ö" : -12174306,    "Ø" : -5602726,    "Ù" : -2968456,    "Ú" : -10861026,    "Û" : -5597616,    "Ü" : -4281726,    "Ý" : -6252916,    "Þ" : -6255526,    "ß" : -6913466,    "à" : -14148086,    "á" : -6913446,    "â" : -5597586,    "ã" : -7571376,    "ä" : -8234426,    "å" : -7568786,
    "æ" : -6913456,    "ç" : -10858416,    "è" : -12834786,    "é" : -12171736,    "ê" : -15466486,    "ë" : -13487616,    "ì" : -10198016,    "í" : -10855936,    "î" : -14808576,    "ï" : -12179426,    "ð" : -8887226,    "ñ" : -12176876,    "ò" : -11516366,    "ó" : -8242166,    "ô" : -999926,    "õ" : -329216,    "ö" : -9537526,    "ø" : -987106,    "ù" : -331656,    "ú" : -999836,
    "û" : -15466496,    "ü" : -6916006,    "ý" : -4937046,    "þ" : -12832226,    "ÿ" : -14148066,    "Ā" : -15461366,    "ā" : -10868726,    "Ă" : -1670656,    "ă" : -334326,    "Ą" : -984556,    "ą" : -16119296,    "Ć" : -13490176,    "ć" : -331686,    "Ĉ" : -334196,    "ĉ" : -3631516,    "Ċ" : -14155776,    "ċ" : -14806006,    "Č" : -7586806,    "č" : -1668086,    "Ď" : -331756,
    "ď" : -2960866,    "Đ" : -16777216,    "đ" : -16121856,    "Ē" : -331696,    "ē" : -331626,    "Ĕ" : -2971006,    "ĕ" : -4960226,    "Ė" : -6255506,    "ė" : -8902646,    "Ę" : -2986496,    "ę" : -334316,    "Ě" : -7566306,    "ě" : -331676,    "Ĝ" : -12839926,    "ĝ" : -10203096,    "Ğ" : -6252946,    "ğ" : -10208216,    "Ġ" : -2989056,    "ġ" : -339436,    "Ģ" : -3621346,
    "ģ" : -341926,    "Ĥ" : -7584236,    "ĥ" : -9547716,    "Ħ" : -12834796,    "ħ" : -9555446,    "Ĩ" : -2323456,    "ĩ" : -987126,    "Ī" : -7566316,    "ī" : -336886,    "Ĭ" : -4302326,    "ĭ" : -7573926,    "Į" : -8887286,    "į" : -4276686,    "İ" : -5597676,    "ı" : -9547746,    "Ĳ" : -10858436,    "ĳ" : -14145496,    "Ĵ" : -12176846,    "ĵ" : -4942196,    "Ķ" : -4281706,
    "ķ" : -10200486,    "ĸ" : -1652556,    "Ĺ" : -9542576,
}, 3);
			return get(0, 0, 213, 159);
		},
		2: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                          ',
    '                             !"             #                             ',
    '                             $%&          \'()                             ',
    '                             *+,-        -.+#                             ',
    '                             /0112+"   31456*                             ',
    '                78           9:;<1=,>>?@A<BC            DE                ',
    '               FGGH7I         J0KL.MNMO=4PNQ        RSEGGHT               ',
    '              UUHHHUE7UUU\'V   WXYZ1M==MAL@@[   ]7U^_E`aEHHbU              ',
    '            c_FHbU^defgdh`i+  Wj[kP44A=l5Am[ n+k`TdopfFUbEETE             ',
    '           qTTUEarff#sddft2-=uJvt61P44PZ=MMQk?BLwxFForyeT7zFTTn           ',
    '          qbbb{8ff|dddddF}i=Mm~v¡¢,£P¤<4=OM¥.11¦§¨©dªdFgWf7«Thb¬          ',
    '         DUbFo®¯ªpª©©©F©©T°±m²j³NAA´µ¶·4@¸¹ºM¹»FDFFFFFFF¼e«¯dFbU½         ',
    '        ¾Ub¨soo`UdFFFhhFSs J¿ÀÁ¿)QqWÂÃxaÄ=MÅ´¿W ÆTT¨¨hhFoTbF¼FTE7"        ',
    '       nUbhFªFsbTdTDÇn      È%[WfÉÊËÌÍÎÏÐÑOCÒ"      cDU©©§FrboUbE7        ',
    '       UbhDoTTdUGÓ           ÔÕÖØÙÚÛÜÝÞßàáâ»            ^`ToETdhUE7       ',
    '      abTFr¨b©FU7            ã$äåæËçèØéêëìØí             EbFTEFgbbbU      ',
    '     UUTh|FbE©TUî             ¿EïðñòèóôßõöF`             ^bhFEbªrTbU^     ',
    '    Tbbhds§`7FTa              øCeùúòèûüýþÿĀ               Ehd7UFsFTbb^    ',
    '   UaThF|FTUHgbî               6āĂăÍóóĄąĆ¡ć               7hoĈbFsgT§bhÒ   ',
    '  SThFªdsFbEHpT                 ĉ)ĊċČčĎĆ³ď                 ToHaFdrdhhbbÆ  ',
    '  7U`§Fr#FbUHeT                 ĐFđĒáoj)¨                  Æo_bFdrgFbUU8  ',
    '  HEb§sodhbEGoē                 đ}Ē°JĔĒWb                  qo`bhdorFbU_Ĉ  ',
    '  77`Tr#F¨TEGd                  ĕ Ė d  fė                   bUbhFdogbU7H  ',
    '  87UªsF¨bUzz#                  ďĘ  p  S¯                   FEUb§FdoaEHH  ',
    ' ÆH7UgdTaUHI                     F     qd                    ēĈEa¨FdsE7H  ',
    ' T8HUªhTU7ę                      d     Ě                       ^Eb§FěE78n ',
    ' DH7dªTbI                              Ė                        ¬_bhdTH8Ó ',
    ' UH7oTU7                                                          UaFoHH7 ',
    ' 7HzªT^                                                            UTF7HU ',
    ' 77aFU                                                              UFEH7 ',
    'ēĈ7bTĜ                                                              ĚbUHE ',
    'rĈ_FS                                                                ^§8Hĝ',
    '½8US                                                                  ©HH ',
    ' 8UĞ                                                                  WH7 ',
    ' 7_                                                                    H7 ',
    ' 7U                                                                    7I ',
    ' IÆ                                                                    7F ',
    ' UF                                                                    ęÓ ',
    ' ª                                                                     D  ',
    ' È                                                                     ğ  ',
], {
    "0" : -12174306,
    "1" : -4284316,    "2" : -3623816,    "3" : -4281726,    "4" : -3626386,    "5" : -2310526,    "6" : -6255516,    "7" : -7571346,    "8" : -6913416,    "9" : -3618626,    " " : 0,    "!" : -11513786,    "\"" : -2960696,    "#" : -10858426,    "$" : -13487576,    "%" : -10858446,    "&" : -9542576,    "'" : -8226716,    "(" : -6910876,    ")" : -11516366,    "*" : -12829646,
    "+" : -3623806,    "," : -4939676,    "-" : -2968446,    "." : -4939686,    "/" : -12171716,    ":" : -14148066,    ";" : -6255526,    "<" : -2968456,    "=" : -4942246,    ">" : -3626366,    "?" : -5597606,    "@" : -4942236,    "A" : -4284306,    "B" : -2965886,    "C" : -9545156,    "D" : -8887196,    "E" : -7573916,    "F" : -9545136,    "G" : -6258056,    "H" : -6915986,
    "I" : -7571336,    "J" : -14148076,    "K" : -1650016,    "L" : -3626376,    "M" : -5600176,    "N" : -6258096,    "O" : -6258106,    "P" : -2310516,    "Q" : -8887226,    "R" : -3618616,    "S" : -9542566,    "T" : -8887206,    "U" : -8229276,    "V" : -4934486,    "W" : -13490146,    "X" : -10200506,    "Y" : -10203096,    "Z" : -1652586,    "[" : -12174296,    "]" : -8887186,
    "^" : -8229266,    "_" : -7573906,    "`" : -8229286,    "a" : -8231836,    "b" : -8231846,    "c" : -4934476,    "d" : -10203066,    "e" : -12176846,    "f" : -12832216,    "g" : -11518926,    "h" : -8889776,    "i" : -4281736,    "j" : -14148086,    "k" : -4939666,    "l" : -2965876,    "m" : -5600166,    "n" : -4279116,    "o" : -10860996,    "p" : -12174286,    "q" : -10200486,
    "r" : -11516356,    "s" : -10860986,    "t" : -11516376,    "u" : -4939656,    "v" : -13490156,    "w" : -10861016,    "x" : -12832206,    "y" : -14145506,    "z" : -7571356,    "{" : -1652546,    "|" : -11518916,    "}" : -9547706,    "~" : -14145516,    "¡" : -7571376,    "¢" : -7571396,    "£" : -4281756,    "¤" : -1652596,    "¥" : -9547736,    "¦" : -2307956,    "§" : -8887216,
    "¨" : -8889766,    "©" : -9547696,    "ª" : -10203056,    "«" : -3623766,    "¬" : -6252906,    "®" : -6255486,    "¯" : -2307916,    "°" : -13490136,    "±" : -12174316,    "²" : -5600186,    "³" : -8884656,    "´" : -6258086,    "µ" : -7573936,    "¶" : -6915996,    "·" : -4284296,    "¸" : -4942256,    "¹" : -6255536,    "º" : -11518946,    "»" : -5597596,    "¼" : -12176856,
    "½" : -4937046,    "¾" : -7568766,    "¿" : -12832226,    "À" : -8887236,    "Á" : -9542596,    "Â" : -14803446,    "Ã" : -14150646,    "Ä" : -8229296,    "Å" : -8229306,    "Æ" : -8884636,    "Ç" : -10200496,    "È" : -4276556,    "É" : -14808566,    "Ê" : -2976236,    "Ë" : -334326,    "Ì" : -329186,    "Í" : -329206,    "Î" : -987076,    "Ï" : -4286926,    "Ð" : -14811126,
    "Ñ" : -6916006,    "Ò" : -7568776,    "Ó" : -9545126,    "Ô" : -10858436,    "Õ" : -14803436,    "Ö" : -15463926,    "Ø" : -16121856,    "Ù" : -3641856,    "Ú" : -342006,    "Û" : -329196,    "Ü" : -15463936,    "Ý" : -11516416,    "Þ" : -331706,    "ß" : -331626,    "à" : -3634086,    "á" : -13492716,    "â" : -8884666,    "ã" : -10855856,    "ä" : -14800866,    "å" : -10215936,
    "æ" : -3644416,    "ç" : -331746,    "è" : -16774656,    "é" : -331716,    "ê" : -331636,    "ë" : -999806,    "ì" : -5613016,    "í" : -8231866,    "î" : -6910846,    "ï" : -11526656,    "ð" : -2989056,    "ñ" : -336886,    "ò" : -987086,    "ó" : -16119296,    "ô" : -987056,    "õ" : -999796,    "ö" : -11526646,    "ø" : -6252926,    "ù" : -4304896,    "ú" : -997366,
    "û" : -16119286,    "ü" : -987066,    "ý" : -334216,    "þ" : -4955106,    "ÿ" : -7573926,    "Ā" : -4942226,    "ā" : -12834796,    "Ă" : -9558006,    "ă" : -1668096,    "Ą" : -331736,    "ą" : -2986496,    "Ć" : -8894936,    "ć" : -5595006,    "Ĉ" : -6915976,    "ĉ" : -12176866,    "Ċ" : -7576506,    "ċ" : -2965976,    "Č" : -3618756,    "č" : -989666,    "Ď" : -5602806,
    "ď" : -7568786,    "Đ" : -10205636,    "đ" : -14806006,    "Ē" : -14805996,    "ē" : -3621186,    "Ĕ" : -12174276,    "ĕ" : -6913426,    "Ė" : -8884626,    "ė" : -994626,    "Ę" : -2307906,    "ę" : -8226706,    "Ě" : -9542556,    "ě" : -10205626,    "Ĝ" : -4276546,    "ĝ" : -8226696,    "Ğ" : -6250346,    "ğ" : -6910836,
}, 3);
			return get(0, 0, 222, 120);
		},
	},
	daydeath: {
		// Body
		0: function(){
			background(0, 0);
			Display.pixelArt([
    '                        !"#$$$$$%&                                     ',
    '                     \'()$$*+$$$$+$+(,-                                 ',
    '                   .)$$+$$)$$$$$+(/++*(0                               ',
    '                 1+$+()$++$$$$$$$(234(**(                              ',
    '                (+$$$$$$$$$$$$$$(567$+89():                            ',
    '              ;($$$$$$$$$$$$$$$$/<=)(>466?@A   B1                      ',
    '             ;+$$$$$$$$$$$$$$$$$/C+)DEFFGH/$ IJK    LJM                ',
    '             ($($$$$$$$$$$$$$$$$/+)5EE67N(+7OPQ& "RSB         \'&##T    ',
    '            (($$$$$$$$$$++$$$$$$+/C6EEU45VFW(XY2Z\'S[    \']#RSSSR0      ',
    '           1$$$$$$$$((+++$$$$$$$$$^E_O9`a(Wb_.6I[ScdRRReSfgfSR&        ',
    '           *$$$$$$$$$$$$$$$$($$+hij5k^EEH5EEUH77SRfJlm`WW%SR[          ',
    '          no((+$$$+o(($/$$$(#(+$pq(o=rs^(^6HBtNuvwEEEE6xySB            ',
    '          (+(%7))++,Ozz$)*(((.[({++*)$7(p|(5}~.EEEEEG¡RS#              ',
    '         ¢$(&+#d£(¤(/(¥¦()£§$(]]7W6WY((B¨@^©G(#GEE>[ªe#;               ',
    '         H[()$)(,(+($+$«¤]¬(+$)(\'=;(¥$hB¥(xE®§(>xRSR%                  ',
    '          ¯$+/$+$)$+(/o$()+$$$(+=°¤(/($)]±$T+.(gS²&                    ',
    '           )$$)$$$$$$+$$$$$$$$$$§O+$+$$+/±(7cO«6W³n#[                  ',
    '           ±+)++$$$$$$$$$$$$$$$$($+$$$$$+$(()+´EbEEWlgS\'               ',
    '            .(//$$$$$$$$$$$$$$$$$$$$$$$$)+/$O)WEEEW|[BSµ%L             ',
    '             H(/$$$$$$$$$$$$$$$$$$$$$$$$+/((¶Jª##RSe#L                 ',
    '              L(++$$$$$)$$$$$$$$$$$$$$$$$)+%%·S,¥¥§(&                  ',
    '                .(+$++++)(++$$$$+++))++()$[  ¯H¯)$$+(                  ',
    '                  [)$*$h$//$$$$$)$/*$**o,      ¸,/$$+¹                 ',
    '                     [(+()$$$$$$/$$(+(¯         L+)//º                 ',
    '                         ¹»[#.=H%\'2             "o$+$¼                 ',
    '                                                ($+)(                  ',
    '                                               "$++$.                  ',
    '                                              ;(/($(½                  ',
    '                                              ($+$h,                   ',
    '                                             ()$)+o¹                   ',
    '                                            ($/($$»                    ',
    '                                           °$$+$(¯                     ',
    '                                          ($/($)0                      ',
    '                                         (($)+h%                       ',
    '                                       ¾($/$+)¿                        ',
    '                                      À($$$+(¿                         ',
    '                                      ($$/++Á                          ',
    '                                     ($)++$¯      0ÂÃ¹                 ',
    '                                    °o$+()¯   ·ByyÄÄyÅyy"              ',
    '                                   #++)¤¦yy#[ny§SyyyªªyyÅy¹            ',
    '                                  »+1#yyyªSySSSSSyyyyyySyyy¿           ',
    '       ¤[yyyyyyyB¥Æ               (]yyÅ§yyySyyySySyyyyyyy§Åy±          ',
    '   T#ySª§RSRRRRSyÅyy#%"·         ÇyÅy§yyyyySyySyyÅyyyyyyÅySyy%         ',
    ' ¾yªSyyyyyyyyyyyÅSÈ¤Â&yyB[      ÉyÅySyyyyySySySySyySyyyyyyyySÅ#        ',
    'Ê§ÅÅyªyyyyyyyyyyyªyS§y¥=O¤¿     ByySÅyyyyyyySySyySyySÅyyyÅÅyyy§!       ',
    ' yË§yyyyyyyyyySSyyyªSySyy£,(r  0yyªyyyyyySyySyyyySyySyyyÅyyyyÅB        ',
    '  SyyyyyªSSyyyyyÅªSy§yySÅÄBÀ@Ì7#ySyyyyyyySyySyySySyyySyyÅyÅÅy1         ',
    '  2"yySÅyyyyyyªSyyySyyySy±   %]ÅySyyyyyyyyyySyySyyyyyyyyÅyÅy\'          ',
    '    yªyÅyyySSyyy1y§ÅyÅÅ#      yySyyyyyyySyyyyyySyySyyySyÅÄy;           ',
    '    #1ÀyyySyyyÅy yyyÅy&      ;yyyyyyyyyySyyyyyySyySyyyySyÅ¢±           ',
    '     <¢yyyyyyËy0 #Åy[        yy§yyyyyyyyyyyyyyyyyySyyyyySy%y           ',
    '       ySyyyyyÍ              yRyyyyyyyyyyyyyyyyySySyyyyyÄÅSy           ',
    '       \'yÅÅ#\'                #yÅÅyyÅyyySyyyyyyyySyyyÅÅyyyÅÅ¿           ',
    '                              ÈyyÅÅyyyyªyyyyyyyySyySyyyyyy#            ',
    '                    !\'[BB[Î&¿ &[yyÅÅyyySyyyyyyyyyyySyyÅyy#             ',
    '                 x#yy§yÅÅyyz,7.,(#]yyyyyyyyyyyyyySyySÅyy¥B±            ',
    '                yyyÅyÅ§yy¥7¥yyyy](¥¥yy§yÅyyyyyyyySyySy[%È§SyB          ',
    '               yySSyËyy§BcyyySSSyÈ.yÅÅyyyyÅÅSyyyySyyySyy1§yyRSy®       ',
    '              \'"ÊyÅySyyxyyÅyÅyyyÅSÈ(1§ÅyÄËÅySyyyyyyyÅyÅ§1ÅySSyy§B      ',
    '                #yySSy¤§SySSSyyyÅyy" Í»¥&%#yyyyyyySyyÅy¥ySyyyyªyyS[    ',
    '              [yyªyS§Ï§SyyyyÅSSÅyÅÅy      &#ÅÅÅÅyySyyy&SyyySÅyÅÅSÅRÎ   ',
    '             ¯ÅySyySySªyySyyyÅyySÅyy%    ®ySyyyyyySÅyyyÅyyyyy§yyyªyS¯  ',
    '             yÅRyySySSyËyyyyyyÅy¤¯§yËÀ     ¢ÈyyÅËyyyÅ&ySyyyyËÅSyyySyn  ',
    '             ySyªyySyªyyyySyyyyyy¾ ±#T         "ByyS1 BSyySyy#Sy%&M    ',
    '             yÄÅySySySyyyyÅSyyyyÅy                 §2  ByyÄyx0%B       ',
    '             %ÅSySSySyySyyÅSyyyyÅyB                     ·By%           ',
    '              [ªyySySyySÅyyyySyyyÅy                                    ',
    '             À%ÅSyySyyySyyyyyÅSSyyy                                    ',
    '              yË§ªÅSyyySy¥<&yyyÅyyB                                    ',
    '               yySyyyyyy§±Æ                                            ',
    '               yyySÅyyyÄy%                                             ',
    '               yRy§·                                                   ',
    '                ªB&®                                                   ',
    '                À                                                      ',
],
			{
    "0" : -13615056,
    "1" : -13606880,    "2" : -12562368,    "3" : -10440560,    "4" : -8347568,    "5" : -10457024,    "6" : -13582144,    "7" : -9400240,    "8" : -11517920,    "9" : -9408448,    " " : 0,    "!" : -6250352,    "\"" : -15716336,    "#" : -12554192,    "$" : -10444736,    "%" : -12558288,    "&" : -14663664,    "'" : -14667760,    "(" : -9396144,    ")" : -10444720,    "*" : -9392064,
    "+" : -9396160,    "," : -10448816,    "-" : -8351632,    "." : -11501504,    "/" : -10440640,    ":" : -9404320,    ";" : -10456992,    "<" : -10457008,    "=" : -10452928,    ">" : -11489120,    "?" : -11485008,    "@" : -9400256,    "A" : -10452880,    "B" : -12558304,    "C" : -8351664,    "D" : -12550048,    "E" : -14626624,    "F" : -11505584,    "G" : -13578048,    "H" : -11505600,
    "I" : -15712240,    "J" : -11509712,    "K" : -11513808,    "L" : -14667744,    "M" : -8355728,    "N" : -10461120,    "O" : -10448832,    "P" : -13602736,    "Q" : -11489136,    "R" : -12550096,    "S" : -12550112,    "T" : -11509680,    "U" : -11501456,    "V" : -10457040,    "W" : -12533584,    "X" : -14655408,    "Y" : -10465232,    "Z" : -11505568,    "[" : -13610976,    "]" : -14659568,
    "^" : -12537696,    "_" : -12541808,    "`" : -12533600,    "a" : -12541792,    "b" : -14626608,    "c" : -15720448,    "d" : -14659552,    "e" : -13598688,    "f" : -11505632,    "g" : -10461136,    "h" : -10440624,    "i" : -12554160,    "j" : -12537680,    "k" : -8355776,    "l" : -13606848,    "m" : -13598624,    "n" : -11505616,    "o" : -9392048,    "p" : -9404352,    "q" : -12562400,
    "r" : -12554176,    "s" : -11489104,    "t" : -12558256,    "u" : -14647200,    "v" : -13578064,    "w" : -13582160,    "x" : -12558272,    "y" : -12554208,    "z" : -16764928,    "{" : -8351680,    "|" : -10448768,    "}" : -12533568,    "~" : -12541824,    "¡" : -12554144,    "¢" : -9404304,    "£" : -15712256,    "¤" : -16769024,    "¥" : -15716352,    "¦" : -14655472,    "§" : -11501520,
    "¨" : -10465248,    "©" : -14626640,    "ª" : -11501536,    "«" : -11497408,    "¬" : -11497424,    "®" : -11509696,    "¯" : -13615072,    "°" : -9396128,    "±" : -14663648,    "²" : -13598704,    "³" : -13606832,    "´" : -15708112,    "µ" : -13598672,    "¶" : -16769008,    "·" : -8351616,    "¸" : -14667728,    "¹" : -8355712,    "º" : -11513776,    "»" : -15720432,    "¼" : -9408400,
    "½" : -12566464,    "¾" : -7303024,    "¿" : -12562384,    "À" : -7298928,    "Á" : -13610960,    "Â" : -16773120,    "Ã" : -15724528,    "Ä" : -13602784,    "Å" : -12554224,    "Æ" : -7303040,    "Ç" : -10452912,    "È" : -13606896,    "É" : -14671840,    "Ê" : -7298944,    "Ë" : -13602800,    "Ì" : -10444752,    "Í" : -10461104,    "Î" : -13610992,    "Ï" : -14663680,
}, 3);
			return get(0, 0, 208, 222);
		},
		1: function(){
			background(0, 0);
			Display.pixelArt([
			    '                         !"#$%                                         ',
			    '                     &\'(()*)*)((\'+,                                    ',
			    '                  -\'**.\'))....))(\').+                                  ',
			    '                #\'*).\')*.........).\'/)+                                ',
			    '               0)))))))))))))))).1234).\'#                              ',
			    '              \')))))))))))))))))5#64).7\'.8                             ',
			    '             \').))))))))))))))).*9.(:;<=>7#   ?#                       ',
			    '            (.)())))))))))))))).)45@AB@ACD\'EFGH     IJ                 ',
			    '           \')))()..)))).)))))))))*\'KBB2LM).\'#NO  PQG          RP#S     ',
			    '          TU)(()))))..)))))))))...VBWA1\'X.N\'Y1?XZ[,     SP#]^^^_       ',
			    '          \'*\'`)\'))*))`)\')))))))).;abc(daefBghaijklS_GQ^^^m[Q^n         ',
			    '         T*)`\'0\'))\'\'\'\'.U))))))).opqrVBBs\'ABtuov]Q^wG8-;xSQ^v           ',
			    '         (0-    u(E    \'*\'(+y+\'m@U5.ezA4{B|}Z7\'~¡¢BBBt{m^]             ',
			    '         o          £_ o0¤ o¥¦§e¨8u:\')\'\'b©\'?Aª«BBBBC2j^]¤              ',
			    '         ¬  #n®,  ¯\'y¦¦°  I\'.±®²?¢zM\'GuX³´aµR¥BBBAfj^yl                ',
			    '          ¶n*.O·¶O\'*)\'¸®®¦()(\'±¦\'qy¥#.¥v\'3BL(¹Asº^^v»                  ',
			    '          \'))))).)))))\'wv\'))))\'vn¶_\')\'u¦¶\'¼\'u\'j^^O                     ',
			    '          0*)))).))))))`)))))))\'.)))))\'\'G.¹½(¾as#jvE                   ',
			    '           \'))))))))))))))(()))))))))))(\'¶\'\'\'¿BBBas8jP¤                ',
			    '           R)))))))))..)..)))..))())))).)\'*u\'aBBBA;À1^Q#Á              ',
			    '            Â(*.)...))))))))))))))))))).().²#yGGm^^G,                  ',
			    '              \'5)))))))))))))))))))))))*.\'88EGGnnw:                    ',
			    '               Ã\')).)))))))))))))))))))()P  ÄQ(\'\')\'Å                   ',
			    '                 ,\'`)))))))))))))))))))\'      k)*\'.#                   ',
			    '                    n:\')`))**5)**)``\',         \')))u                   ',
			    '                        Æ$P©DMM©P,»            \')))+                   ',
			    '                                              Ç\')).#                   ',
			    '                                              È))))¬                   ',
			    '                                             T\'*.*\'                    ',
			    '                                            T\').()£                    ',
			    '                                           É\'*).)u                     ',
			    '                                          ¬\'5..5\'                      ',
			    '                                         ¬\'.().\'E                      ',
			    '                                        ¬\')).*\'Å                       ',
			    '                                       ¬\').)\')£                        ',
			    '                                      ¬\')U)()k                         ',
			    '                                     Ê\')(U.\'k                          ',
			    '                                    ¤\'*).).£                           ',
			    '                                    \')\'U.`£     ÄP##_I                 ',
			    '                                   ¹..\'\')Ë   ÄyyyyyyÌÌy8               ',
			    '                                  L\'\'¶ÍÌÎy^wwÏ^yyyyy^^yyyn             ',
			    '                                 k\'±yyy^ÏyÌQQ^y^yyyyyyy^yÌ_            ',
			    '     "ÐyyyyyÌyyyy&_»             \'vyyQ^Ìyy^ÌÌ^^yy^yyyyy]^yÌP           ',
			    '  Ç&y^^^yÌyyy^^Ï^^yyyyy_        #yyy^Ìyyyy^yywy^yy^yyyyyÌy^ÌyÇ         ',
			    ' PÏ^yy^^^^^^^^^Ï^wwP,#ÑÐyv     ÊGÌy^yyyyy^yyy^yyyyyyyyyyyyy^^y         ',
			    'P^yÌ^yyyyyyyyyy^^yyQyyv±MMÐ    PÌÌ^Ìyyyyyyyyyyyy^yy^yyyyyyyÌyy         ',
			    ' P^yyyyyyyy^^^yyyy^Ì^yÏyyv_(0I»Ìywyyyyyy^yyyyy^yÏyyyyyyyyyyyy¤         ',
			    '  yOyÌy^yyyyyÌy^^yyyyyÌ^yP  0)vyyÌyyyyyy^yyyyy^yyyyy^yyyyÌÎG           ',
			    '   Ey^yÎyyyy^^yyÐy^yyyyw-    PyÌ^yyyyyyyyyyyyyÏyyyyyÌ^yyÌ]P            ',
			    '    ÌGyyyÌ^yÌyyy¤yyÌy^&      Py^yyyyyyy^yyyyyyyyy^yyyy^yyÒI            ',
			    '    oj &y^yyÌyy?¤wyy&I       yÌ^yyyyyyy^yyyyyyyyy^yyyyÌ^Ì¤y            ',
			    '       y^yyÌÎy_  ##S        _ÌÏÌyyyÌyyy^yyyyyyy^Ì^yyyyyÌÏÎ&            ',
			    '       jÌÌÌyyE              PyyÌÌyyyyyyyyyyyyyy^yyyyyyyyy^$            ',
			    '        $-$                  &ÌyÌyyyyyyyyyyy^yy^yy^yyyyÌÎy             ',
			    '                              ÄyyyÌyyy^yyyyy^yyyyy^yyyyÌyE             ',
			    '                  $ywyyyyyy_G()\'_yÌyyy^ÌyyyyyyyyyyyyyÌÌyo              ',
			    '                ¶yÌyy^ÌÌy_0P¶yG¥\'uÓyyyyyyyyyyyyy^yy^Ìy_jyyPÇ           ',
			    '               yyyyyyÌÏyG_yy]yyyÍuyÎy^yyyyyyyyyy^yyyÏ_yyy^^^y"         ',
			    '              ©G&yyÏ^yy©ywQ^yÌy^w&0y^yyyyyy^yyyyyyyÌy^^¶y^^Ìywy"       ',
			    '                vyÌyyj¥wÏ^^yyÌyyÌy±$_vyyyyy^yyyyyyyy]y¥^yyyy^yyÏv      ',
			    '              PyyÏyy^kÏyÌyyy^^yÌyÌyÇ      ¥yyyyyy^yÌy¶^yy^^yyy^y^y     ',
			    '             vÌy^^^^^wyy^yyyyy^^yy]y    Fy^yÌÌÌyy^yyyyy^yyy^^yyyyy^    ',
			    '             Îy^yyÏy^^Qyy^yyyÌy·jwyy$     ¥yyyÌyyyyy±yyy^yyyyyyÍyÌyÄ   ',
			    '            "^^y^^y^yy^yy^yyyyyyÇ nyP        £&yÎ^^y Ì]ÌÌÏyyyÏy,yP     ',
			    '             Îyyy^yy^y^yyy^yyyyyyR               $w$  yÌy^ÌIÅQv        ',
			    '             yyÏyy^y^y^yyyy^yyyyyy                     Pyy#            ',
			    '             Ôy^^yyyyyyyyyyy^yyÌyÌ                                     ',
			    '             TGy^^y^yyyyÌyyyy^^yÌyT                                    ',
			    '             ?yyy^yyyyy^y__&yyyy^w                                     ',
			    '              oyyy^yyyyyÐI     ¤                                       ',
			    '               w^y^yyyyyy-                                             ',
			    '              Ey^Ì_                                                    ',
			    '               PyvnÊ                                                   ',
			    '                                                                       ',
			], {
			    "0" : -10448816,
			    "1" : -11509712,    "2" : -12545920,    "3" : -11493232,    "4" : -8347568,    "5" : -10440624,    "6" : -11489136,    "7" : -10461136,    "8" : -13606864,    "9" : -10461120,    " " : 0,    "!" : -6246256,    "\"" : -10457008,    "#" : -12558288,    "$" : -13615072,    "%" : -9404320,    "&" : -12558304,    "'" : -9396144,    "(" : -10444720,    ")" : -10444736,    "*" : -10440640,
			    "+" : -10448832,    "," : -14663648,    "-" : -13610960,    "." : -9396160,    "/" : -9400256,    ":" : -9400240,    ";" : -11497344,    "<" : -11501488,    "=" : -13578064,    ">" : -12541808,    "?" : -12558272,    "@" : -8351664,    "A" : -12533584,    "B" : -14626624,    "C" : -13582160,    "D" : -10452912,    "E" : -9404304,    "F" : -10456992,    "G" : -12554192,    "H" : -11517936,
			    "I" : -12562368,    "J" : -11513792,    "K" : -11485024,    "L" : -12554176,    "M" : -10452928,    "N" : -10440528,    "O" : -14659552,    "P" : -13610976,    "Q" : -12550096,    "R" : -11509696,    "S" : -11509680,    "T" : -15720432,    "U" : -9392064,    "V" : -10440544,    "W" : -14622528,    "X" : -11513824,    "Y" : -15712224,    "Z" : -12562400,    "[" : -13598688,    "]" : -13602784,
			    "^" : -12550112,    "_" : -14663664,    "`" : -9392048,    "a" : -13582144,    "b" : -11489120,    "c" : -8359856,    "d" : -12554160,    "e" : -9404352,    "f" : -13602752,    "g" : -11501456,    "h" : -10444704,    "i" : -12533616,    "j" : -11505616,    "k" : -16773120,    "l" : -10461104,    "m" : -11505632,    "n" : -15716336,    "o" : -12562384,    "p" : -13598624,    "q" : -8351648,
			    "r" : -10457040,    "s" : -12545936,    "t" : -13578048,    "u" : -11501504,    "v" : -13606880,    "w" : -11501520,    "x" : -9391968,    "y" : -12554208,    "z" : -12541824,    "{" : -12550048,    "|" : -12537712,    "}" : -9404336,    "~" : -10444656,    "¡" : -11485008,    "¢" : -14630720,    "£" : -14667744,    "¤" : -7298928,    "¥" : -15716352,    "¦" : -14655472,    "§" : -15708160,
			    "¨" : -12554144,    "©" : -11505600,    "ª" : -8347552,    "«" : -12533568,    "¬" : -11513776,    "®" : -14655488,    "¯" : -8355712,    "°" : -10452896,    "±" : -15712256,    "²" : -16764928,    "³" : -8347584,    "´" : -12558256,    "µ" : -14626608,    "¶" : -14659568,    "·" : -14659584,    "¸" : -16760832,    "¹" : -9396128,    "º" : -11509728,    "»" : -7303024,    "¼" : -10448768,
			    "½" : -15720448,    "¾" : -12550064,    "¿" : -16752576,    "À" : -13602736,    "Á" : -13619152,    "Â" : -11505584,    "Ã" : -13615088,    "Ä" : -14667760,    "Å" : -13615056,    "Æ" : -6250352,    "Ç" : -8351616,    "È" : -9400224,    "É" : -12566464,    "Ê" : -10461088,    "Ë" : -14671856,    "Ì" : -12554224,    "Í" : -13606896,    "Î" : -13602800,    "Ï" : -11501536,    "Ð" : -13610992,
			    "Ñ" : -14663680,    "Ò" : -16769024,    "Ó" : -15712240,    "Ô" : -9408400,
			}, 3);
			return get(0, 0, 208, 222);
		},
		2: function(){
			background(0, 0);
			Display.pixelArt([
			    '                       !"#$%                                           ',
			    '                   &\'\'(()()()\'\'*+                                      ',
			    '                ,\'(-\'.)))))....).\'/                                    ',
			    '              0\'.)..)))....)))))-1).2                                  ',
			    '             341)))))))))))))).5.\'.\'\'16                                ',
			    '            7.-.)))))))))))))))()89:)-\';                               ',
			    '           <)-)))))))))))))))))\'\'=<...\'(;                              ',
			    '          3(...-))))))))))))))))>\'.\'?@9:>!   A                         ',
			    '          .-.)).\')))))))))))))))(1.BCDECF. GH6     I                   ',
			    '         J).1\'\'())))(()))))))).-.\'KLCMNO\')PQ$   RS,           0T       ',
			    '        6UA    V-.\'7W\'1))))))))4\'XCCYZ[>)]5V!^_`/       abcS/3         ',
			    '                "     \')))))...def<dg:hi2j\'klm`n  !^o``````3           ',
			    '                      p1UVqp$5rs\'.teCCZ.eCu3v`/b`wS/H"tv`c             ',
			    '                             6x<\').dByz{Cj:7bW|}~Cj¡¢£``               ',
			    '                            ¤ 2eCy]W()$eDo¥¦§¨CCCC9£SS©                ',
			    '                          "ª«¬$_®>\'H\'\'id¯Fj2°CC¡EH``A                  ',
			    '                  0ªn    2)¬ª±^²³ªª\'^´\'µC¡2¬¶l·w`/©                    ',
			    '           <n¸+ +H)&¸ª¹¬^\'\')cª«««´\')$º²\'¡»vW_``/6                      ',
			    '        #n¼.)´o²)-.)5co².()4(-¸½*\'-(\'¾G¿d_\'Àl°_/n                      ',
			    '        01.-))\'.))))..\'))))))..)))..(.SR\'\'1ÁC¶¡eVw&n                   ',
			    '         J(.)))))))))))))))))))))))).)\').J1CCCCClÂÃ`ÄG                 ',
			    '         6)))))))))))))))))))))))))))).).bÅH$$``Sv¦                    ',
			    '          ;))))))))))))))))))))))))))).(\'ÆÇcc^^/$                      ',
			    '           +\')).()))..))))))))).))--))(J  ^SJ4).\'+                     ',
			    '             d1-\'..))))))))))))))..).\'2     È\'.))V                     ',
			    '               _\'1)).))))))))))\')51\'*        W))4*                     ',
			    '                 ¼<\'\')))))))))))\'20          _)-.W                     ',
			    '                       p$$$$p                \'..)*                     ',
			    '                                            T))-ÉÊ                     ',
			    '                                            11)-\'                      ',
			    '                                           U)...$                      ',
			    '                                          c4).1\'                       ',
			    '                                         n))\'..¤                       ',
			    '                                        G.)\'(\'Ê                        ',
			    '                                       Ê)-)))Å                         ',
			    '                                      Ê\').1-*                          ',
			    '                                     T-).)(2                           ',
			    '                                    Ê.)\'51W                            ',
			    '                                   T.-))1d                             ',
			    '                                  Ë1().1W     VPH/3½                   ',
			    '                                  \'-\'\'\'W    cvvvvvvvvv;                ',
			    '                                 J)U¬Ìvv`&&`&vÍÍvvv``ÍÍH               ',
			    '          !++!                  V.^vvv``vv`Î`v`vvvvvv`vÍ/              ',
			    '     GHÍvÍvvvvvvvHG            Ï»/Ív`vvvv``vvÎv`vvvvvvv`Ív0            ',
			    '  bv`&vvÍÍÍvvv``&`vvvv/È       $`Ív`vvvv`vÎv`vvv`vvvvÍvv`vÍb           ',
			    ' /`vÍvÎÎ`&`Î````S&&¸Å<bo/¦    ¼vv`vvvvvv`vÎv`v`vv`vvvvvvvv`v           ',
			    '$vv``vvvvvvvvv`Îvv``v`HPW2"   3vv`vvvvv`vvÎv`vvvvvvvvvÍvvvÍv           ',
			    ' 3`Ívvvv```Î`vvvÍ`v`vvvvvnU)20Ìv`vvvvvv`vvÎvvvv`vv`vvÍvvvÍv            ',
			    '  ÐbÍv`vvvvvvv``vÍvvvv`v^  #)Hv`vvvvvvvvvv`vvvv`vvv`vvvÑv/             ',
			    '   Av`vÍvvv``vvvovvvvv&0    Òvv`vvvvvv`vvv`vv`v`vvvvvÍv`^              ',
			    '    Î²3Ív`vvvvv"H`vÍÍ3      Hv`vvvvvvv`vvvvvvÎvvvvvv`vv^©              ',
			    '     G v`vvvvÍ3 cÓvc6       vvvvvvvvvv`vvvvvv`vvvvvvv`v¸v              ',
			    '       vvvvvv3   +         G``vvvvvvvvvvvvvvvvvv`vvvvvvSv              ',
			    '       <vvvc               6vÍvvvÍvvvvvvvvvvvvvv`vvvvvvÍ¸              ',
			    '                            ;vÓvvvvvv`vvvvvvvv`vvÍvvvvÍv               ',
			    '                   ab3$$cÔb©Õ_¬vÍvvvv`vvvvvvvv`vv`vÍÍvv                ',
			    '                ©vvv`ÍÍvvÖ<W$3$\'^vvvvvvvvvvvvvvÍv`Ívv^/^               ',
			    '               HÍÍvÍvÎvv<3ovvvvc½PvvÎvÍvvv`vvvÍvvv`v^bv`vv;            ',
			    '              v````vÍvH&Hv`````vb´vvvvvÍÍÍ`vvvv`vvÍ&vv&`vv`v$          ',
			    '             Øp vÍvÍ&c´vvÍvvvvvvv_3&ÍÍvvÍvvvvvv`vvvÑÍvvÍÌÎvv`v¦        ',
			    '              Õvv``Î&^vvvv``vvvvvv    !Anvvvvvv`vvÍv¾vv`ÍvvvSvÎ3       ',
			    '             Hvv`v``v```vvvÍv`vvvÍ3    ¦vÎÍÍÍvvvvvÍcv`vvv`vÍÍ`v`c      ',
			    '            Vvv``vÎ`v`vÍ`vvvÍvvÎ`vv     HvÑvvvvv`vvvÍv`vvÍvvÍÍ`Ì`"     ',
			    '            HÍvÍv`v``vvvvvvvÍvH  /`n       bvÍÑv`v3v`Ív`vÌÍ``/v_a      ',
			    '            $vvS`ÍÎv`vvvÍÎvvvvÍv               ½vv  /vvvvH vv          ',
			    '            ¦ÍÑv`Ívvvvvvvv`vvvvvv                _   3vv/+             ',
			    '             ^vÍ`ÎvÎvvvvÍÍv`vvvvÍ                                      ',
			    '              Îvv`vvvv`vÑvvv``vvÍG                                     ',
			    '             &```vÎvvv`vH3vvvvvÎ`                                      ',
			    '              v``Ívvvvvv     ÙGÙ                                       ',
			    '              ÚÍv`vÍÍÍÍvH                                              ',
			    '              _`ÍSV0!¼Ò                                                ',
			    '               &v3¦                                                    ',
			    '               _                                                       ',
			], {
			    "0" : -10456992,
			    "1" : -9392048,    "2" : -10452928,    "3" : -13610976,    "4" : -9392064,    "5" : -10440624,    "6" : -7298928,    "7" : -10452912,    "8" : -9400208,    "9" : -11485008,    " " : 0,    "!" : -8351616,    "\"" : -11509696,    "#" : -14667744,    "$" : -12558288,    "%" : -7298944,    "&" : -11501520,    "'" : -9396144,    "(" : -10440640,    ")" : -10444736,    "*" : -11501504,
			    "+" : -9404304,    "," : -12562368,    "-" : -10444720,    "." : -9396160,    "/" : -12554192,    ":" : -12554160,    ";" : -12558272,    "<" : -11505600,    "=" : -10436448,    ">" : -8347568,    "?" : -12545936,    "@" : -8351664,    "A" : -13615056,    "B" : -12541824,    "C" : -14626624,    "D" : -13606864,    "E" : -12541808,    "F" : -10440544,    "G" : -13615072,    "H" : -12558304,
			    "I" : -13619136,    "J" : -9396128,    "K" : -11485024,    "L" : -15675200,    "M" : -10440528,    "N" : -10461120,    "O" : -11493232,    "P" : -14663680,    "Q" : -11505584,    "R" : -15720448,    "S" : -12550096,    "T" : -15720432,    "U" : -10448832,    "V" : -13610960,    "W" : -10448816,    "X" : -12533568,    "Y" : -13582160,    "Z" : -11505568,    "[" : -8351680,    "]" : -11513824,
			    "^" : -14663664,    "_" : -11505616,    "`" : -12550112,    "a" : -8351632,    "b" : -15716336,    "c" : -13606880,    "d" : -9400240,    "e" : -12533584,    "f" : -13586288,    "g" : -9404352,    "h" : -12533600,    "i" : -10457040,    "j" : -13582144,    "k" : -15712224,    "l" : -12537696,    "m" : -11513808,    "n" : -14663648,    "o" : -13606896,    "p" : -9404320,    "q" : -8355728,
			    "r" : -9404368,    "s" : -9408448,    "t" : -10465216,    "u" : -13598640,    "v" : -12554208,    "w" : -11505632,    "x" : -10461152,    "y" : -10444640,    "z" : -8347584,    "{" : -12545904,    "|" : -14663632,    "}" : -11497328,    "~" : -12537680,    "¡" : -13578048,    "¢" : -12537712,    "£" : -11509712,    "¤" : -14671840,    "¥" : -8351648,    "¦" : -12562384,    "§" : -9408464,
			    "¨" : -13594512,    "©" : -11509680,    "ª" : -14655472,    "«" : -14655488,    "¬" : -15712240,    "®" : -10457024,    "¯" : -13602752,    "°" : -14655424,    "±" : -15704064,    "²" : -15712256,    "³" : -15708160,    "´" : -15716352,    "µ" : -12550048,    "¶" : -14626608,    "·" : -13606848,    "¸" : -14659568,    "¹" : -15708144,    "º" : -14651392,    "»" : -9400256,    "¼" : -9408400,
			    "½" : -16769024,    "¾" : -16764928,    "¿" : -9396176,    "À" : -12550080,    "Á" : -15708096,    "Â" : -10452896,    "Ã" : -12562416,    "Ä" : -13598688,    "Å" : -12562400,    "Æ" : -12558256,    "Ç" : -12550032,    "È" : -16773120,    "É" : -10444752,    "Ê" : -14667760,    "Ë" : -11509664,    "Ì" : -13602784,    "Í" : -12554224,    "Î" : -11501536,    "Ï" : -10461088,    "Ð" : -12558320,
			    "Ñ" : -13602800,    "Ò" : -7303040,    "Ó" : -12550128,    "Ô" : -13610992,    "Õ" : -10457008,    "Ö" : -14659552,    "Ø" : -10461104,    "Ù" : -9408416,    "Ú" : -6246256,
			}, 3);
			return get(0, 0, 208, 222);
		},
		3: function(){
			background(0, 0);
			Display.pixelArt([
			    '                      !"#                                              ',
			    '                 $%&&\'()*\'+&,-                                         ',
			    '               .&)\'&&***))*****&/                                      ',
			    '             0&+**+****++*****&\')&1                                    ',
			    '            -+*****************++&),                                   ',
			    '           2*)*******************3(*&                                  ',
			    '          -+\'*+*****************+4567+8                                ',
			    '         9+&&&&+***************++:;<+*+#                               ',
			    '         8     =&**))+*********)&>+?&@?+                               ',
			    '                A4BB4&********+&*&3CDEFGH  =                           ',
			    '                     9&*******++(GIJJGKL18-/     M                     ',
			    '                      2*))**)+&+NKJOJPQN+%R   ST9           U          ',
			    '                      V$! W.&)XYZ[]5^&_+X+`abcd      9-eBTb            ',
			    '                            f&_**ghijL-4Z&klcm W/-BncccnT#             ',
			    '                             <iH&+CLLoGKJ^ecccbpbqrhstT1               ',
			    '                             ouLiv+AHGLJJwxyz{|JJK}2T~                 ',
			    '                             P¡¡¢\'?+4i£P¤¥A&¦§¨J{cn¤                   ',
			    '                          0      ©ª«&6¬®Ki4¯J°-cc~                     ',
			    '                        `=±ª²  =ª~«±³GJJC&´}Bcnx                       ',
			    '                  0     &&«µ±±ªªS\'&ª«+i<XABcc¶                         ',
			    '                 S±ª9 9S+*&~ª±ªB*++·o\'&V,,JZ¸¹tº                       ',
			    '            ¤   ·)&³ª±³**++?&,&\'++)*&\'\')p»JJJJZ¼pTx                    ',
			    '          -\'«¥ª½****&T&********+*+****++PY´´¾1-cbB.                    ',
			    '        ~·**+*&&?****+***************++&¿cBccbS                        ',
			    '        U3&***************************\'ÀÁÂ&\'+&&                        ',
			    '         \'+*\'***+*)******************\'9  0U)\'*)W                       ',
			    '          &&*&+*+++********++**\'++*3,      &)+?1                       ',
			    '           B?)*&**********++**+*)?&=       ,*+*o                       ',
			    '             o&*3)&********)3*)&-          &+**N                       ',
			    '               #e&&&+***+&&&-0            U+++&                        ',
			    '                                          &)+\'&                        ',
			    '                                         o)++)U                        ',
			    '                                        ·+**)&                         ',
			    '                                       À*)++&                          ',
			    '                                      =+&\')?V                          ',
			    '                                     Ã&\')3*¤                           ',
			    '                                     &3)&3%                            ',
			    '                                    &&)**,                             ',
			    '                                   &*+\'*\'                              ',
			    '                                  H*&**&                               ',
			    '                                 ¤(*+*&       ÄÅ=                      ',
			    '                                U+&+)&8    ¤bbÆÆÆÆbBf                  ',
			    '                                &)&b¤bbbBpB2cbbbccbbb¹                 ',
			    '                               H+¤bbÆccbÆctbcbÆÆÆÆÆtbÇb                ',
			    '     $«bbbbbbbbbb/            V&ÈbbcbbbÆcctbbbcbbbbbbtbb               ',
			    '  Éebccbbbbbbccccbbbb¹.       ÊÇbbcbbbbcbcbbcbÆcbbbbbbcbb/             ',
			    ' ~tbbbT2tttttccccppËw·«b~    Ì¹bbcbbbbbbbcbbbbbbbbbbbbbbcb             ',
			    ' bbbcbbbbbbbbbccÆbcbcb¤24V   /bbcbbbbbcbbcbcbcbbtbbbbbbbbb             ',
			    ' "tbbbbbcccccbbbbcbcbcbb-~*48bbcbbbbbbcbbcbcbcbbbbbbbÆbdb9             ',
			    '  ¤·bbtbbbbbbbtcbbtbbbb¹   \'¤ÆcbbbbbbbbbbcbcbbbbbcbÆÆbÆb               ',
			    '   fÆTbbbbbcbÆb¤btbbbbV     ÆbcbbbbbbcbbbcbbbbbbbbcbbÆÈ                ',
			    '    BÍ¤bbtbbbbb bÆbbb      SÇcbbbbbbbcbbbtbbbbtbbbbcÆB Î               ',
			    '     = bTbbÆdÆ0 pb¹N       bbbbbbbbbbbbbbcbbcbcbbbbbcbB                ',
			    '       cbÆbbbf             cbbbbbbbbbbbbbcbbcbbbbbbbÆcÏ                ',
			    '       VbbB.               BÆbbbbbbbcbbbbcbbbbÆbbbbbbd-                ',
			    '                            ~bÆbbbbÆcbbbbcbbbbbcÆÆbÆdb                 ',
			    '                 ÉVBbbbbbbSoX½¤bbbbbbbbbbtbbbcbbbÆbb¹                  ',
			    '               ²bÆbbcbÏdË4Íe-Ð&A«Æbcbbbbbtbbbcbbcbb·bÇ¹Ñ               ',
			    '              «ÆbbÆbb2¹HSbÆbÆbbobbbcbbbbbcbbbcbbbTSB·bccbl             ',
			    '             x2~cctcbÈ«2tccbbbcb4bcbÇbbbbbbbbbbbbbcbbbcbbcc-           ',
			    '               eÆÆbb2¤cttcbbbÆbbÒÓ·eBBbbcbbbbbcbÆbb-2bÆÆc2btb          ',
			    '             VbÇTbcc~tbbbbbcbbbÆb0     ¤2bbbbbtbbÆScbÆcbbbbbbc#        ',
			    '            .ÇÆTcbc2cbbcbÆbbbcbbbb    SbbÆbbbbbbÆebÆcbbbcbÆbcb2        ',
			    '            bÆcbbcbÆbcbbbbbbbª.btÏl     `¹bÆÆdbbbBbbbcbbÆtbBbb¹        ',
			    '            bbÆccbcbbcbbcbbbbbe  V=         lebc¤ bÇÆbcb«eÆV1          ',
			    '            ¹bbbcbbcbcbbbcbbbbÏB               Èf  ¹bÇ2V#ÔN            ',
			    '            0bcbbcbbbcbÆÆbcbbbbb                     N1                ',
			    '             SccbbtbbcbbbÆÆcbbÆÆ.                                      ',
			    '             bbtcbbbbbcbbbbcÆc2b1                                      ',
			    '             ¤Æbccbbbbc    8-~a9                                       ',
			    '              ~bbcÆÆbbbb                                               ',
			    '             Õbcb~ÖUUÀÉ                                                ',
			    '               Ïe~=                                                    ',
			    '                                                                       ',
			], {
			    "0" : -10456992,
			    "1" : -11509696,    "2" : -11501520,    "3" : -9392064,    "4" : -9400240,    "5" : -10457024,    "6" : -9408464,    "7" : -9404368,    "8" : -11509680,    "9" : -9404304,    " " : 0,    "!" : -6250352,    "\"" : -9404320,    "#" : -8351616,    "$" : -10457008,    "%" : -11501504,    "&" : -9396144,    "'" : -10444720,    "(" : -10440624,    ")" : -10440640,    "*" : -10444736,
			    "+" : -9396160,    "," : -10448816,    "-" : -12558288,    "." : -13610960,    "/" : -14667760,    ":" : -12550032,    ";" : -13582176,    "<" : -9404336,    "=" : -12562368,    ">" : -10457040,    "?" : -9392048,    "@" : -10452944,    "A" : -9396128,    "B" : -12554192,    "C" : -12554176,    "D" : -11485008,    "E" : -7307184,    "F" : -11489104,    "G" : -8351664,    "H" : -10452928,
			    "I" : -12537712,    "J" : -14626624,    "K" : -13582144,    "L" : -13578048,    "M" : -14671840,    "N" : -12558272,    "O" : -14626608,    "P" : -10452912,    "Q" : -12533568,    "R" : -11509712,    "S" : -15716336,    "T" : -12550096,    "U" : -15720432,    "V" : -13615072,    "W" : -7303040,    "X" : -9400256,    "Y" : -11489120,    "Z" : -12533584,    "[" : -13590400,    "]" : -12554160,
			    "^" : -9404352,    "_" : -8347568,    "`" : -13619168,    "a" : -12562400,    "b" : -12554208,    "c" : -12550112,    "d" : -13602784,    "e" : -13606880,    "f" : -7298928,    "g" : -11517936,    "h" : -10452880,    "i" : -10440544,    "j" : -13582160,    "k" : -12541792,    "l" : -12562384,    "m" : -15720448,    "n" : -13598688,    "o" : -11505600,    "p" : -11505616,    "q" : -13602752,
			    "r" : -13602736,    "s" : -10465232,    "t" : -11501536,    "u" : -11493248,    "v" : -10465248,    "w" : -10452896,    "x" : -14663648,    "y" : -13598608,    "z" : -10448768,    "{" : -12558256,    "|" : -14638960,    "}" : -13606848,    "~" : -13610976,    "¡" : -8351648,    "¢" : -10444704,    "£" : -11505584,    "¤" : -14663664,    "¥" : -13606896,    "¦" : -15708112,    "§" : -14626640,
			    "¨" : -14630720,    "©" : -15724544,    "ª" : -14655472,    "«" : -14659568,    "¬" : -11505568,    "®" : -12545920,    "¯" : -14643072,    "°" : -12537680,    "±" : -14655488,    "²" : -13615056,    "³" : -15712256,    "´" : -12537696,    "µ" : -15704064,    "¶" : -16764928,    "·" : -15716352,    "¸" : -12550048,    "¹" : -12558304,    "º" : -14659552,    "»" : -15712224,    "¼" : -13598624,
			    "½" : -10448832,    "¾" : -11493232,    "¿" : -12554144,    "À" : -14667744,    "Á" : -9412544,    "Â" : -11509728,    "Ã" : -9408400,    "Ä" : -9408416,    "Å" : -12566464,    "Æ" : -12554224,    "Ç" : -13602800,    "È" : -13610992,    "É" : -7303024,    "Ê" : -9400224,    "Ë" : -16769024,    "Ì" : -13619152,    "Í" : -15712240,    "Î" : -8355712,    "Ï" : -12550128,    "Ð" : -16773120,
			    "Ñ" : -10461104,    "Ò" : -14659584,    "Ó" : -14671856,    "Ô" : -13615088,    "Õ" : -11513776,    "Ö" : -15724528,
			}, 3);
			return get(0, 0, 208, 220);
		},
		
		// Tongue
		tongue_0: function(){
			background(0, 0);
			Display.pixelArt([
			    '               !"#$%&\'\'())))*\'+,-./',
			    ' .     01234\'56())))))))))))7))77)89\':"',
			    ' \')))77))))))))))))))))))))))))))))))7)(;.',
			    '  "+<))777))))))))))))))))))))<=>?$57)))))6',
			    '     @6*))))))))))))))))))9\'AB      C\')))7)',
			    '        >3D\'*))))))8\',3>E              F*))',
			], {
			    "0" : -8363888,
			    "1" : -13623200,    "2" : -14679984,    "3" : -12578688,    "4" : -11534176,    "5" : -10485568,    "6" : -9432880,    "7" : -9436944,    "8" : -9432864,    "9" : -10481456,    " " : 0,    "!" : -7307104,    "\"" : -13627312,    "#" : -13631408,    "$" : -13631392,    "%" : -11530096,    "&" : -10481504,    "'" : -10481472,    "(" : -10485552,    ")" : -9436960,    "*" : -9436976,
			    "+" : -10481488,    "," : -11530080,    "-" : -12578704,    "." : -12574624,    "/" : -6254416,    ":" : -10477408,    ";" : -12578672,    "<" : -10485536,    "=" : -10477376,    ">" : -12574608,    "?" : -9416560,    "@" : -11534192,    "A" : -11526000,    "B" : -10465152,    "C" : -14680000,    "D" : -10477392,    "E" : -13623216,    "F" : -12582800,
			}, 3);
			return get(0, 0, 129, 18);
		},
		tongue_1: function(){
			background(0, 0);
			// fill(255,0,0)
			// rect(0,0,210,30);
			Display.pixelArt([
			    '                      !"#$%                                            ',
			    '                 &\'())))))*)+(,-                                       ',
			    '              %.))))))*))))))))))/                                     ',
			    '            01)))))2(111())))))*))*3                      45666        ',
			    '         73)))))+89        "1)))))))):;             </1=:>:::::))+"    ',
			    '?#@A#/>:)))))BC               ?())))))):>3,?##?/,1>>:+)))))))))))):>1D ',
			    ' EFG>+>.?HI                     J/)*))*))):::::+))))))**)))**)))))=KL  ',
			    '                                   MN)))))))))))*))*))))***O3P         ',
			    '                                      Q,))))))))))):1R                 ',
			    '                                         S,:+TU                        ',
			], {
			    "0" : -13627312,
			    "1" : -10481472,    "2" : -9432864,    "3" : -10481488,    "4" : -10469248,    "5" : -14679984,    "6" : -13627296,    "7" : -13623200,    "8" : -11534176,    "9" : -6254416,    " " : 0,    "!" : -9416544,    "\"" : -12578704,    "#" : -11526016,    "$" : -13623168,    "%" : -8363872,    "&" : -10473328,    "'" : -9432896,    "(" : -10481456,    ")" : -9436960,    "*" : -9436944,
			    "+" : -9436976,    "," : -11530080,    "-" : -11521936,    "." : -11530064,    "/" : -11530096,    ":" : -10485552,    ";" : -12574592,    "<" : -13623216,    "=" : -10485536,    ">" : -10485568,    "?" : -12578688,    "@" : -10469232,    "A" : -9420656,    "B" : -10485600,    "C" : -11526032,    "D" : -8359792,    "E" : -6254432,    "F" : -10473344,    "G" : -10477392,    "H" : -11521920,
			    "I" : -10461056,    "J" : -7307104,    "K" : -8376096,    "L" : -7319360,    "M" : -9416576,    "N" : -10481504,    "O" : -9432880,    "P" : -5209888,    "Q" : -9416560,    "R" : -8372032,    "S" : -8359776,    "T" : -9428800,    "U" : -6266672,
			}, 3);
			return get(0, 0, 210, 30);
		},
		tongue_2: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                                                                              ',
    '!""#!$%                                                                                                                       ',
    '     &\'()                                                                                                                     ',
    '       *"#+                                                                                                                   ',
    '         ,-(.                                                                                                                 ',
    '          /"01                                              23456/                                                            ',
    '            789:                                      ;<"=>000000-??"@A                                                       ',
    '             +90"A                                /$B0800000000000000880CD                                 4;$,;)4            ',
    '               70-"+                            E"00000000000000000000F>>0>@                          GHB--00008000-I+        ',
    '                J=00",                        K>88000000000080000008000009900(LM                 +G(?88->>>>>99>>>0008=N      ',
    '                  O?0P>Q+                  RH000000000000000000000000080800>>>>>??(LS)TUVWXY@(99000>9>>000000000000->>>0?L    ',
    '                    H0FF8>C;             ;"000000000000->?9>>?00000000080000000->>>>000000000>>>>>-0000000000000000000>>>0?G  ',
    '                      700000>?"(@K,EN@"=FF000000000"7;&        &Z(=0000F008800000000000->>>--0000000000000000000000000000>0?[ ',
    '                        L=000000000000000000F80-Q]                 6H=000000000000088800000000000000000000000000000--"^       ',
    '                          _N"0000088880080FF(KJ                       )(0F00800000000000000000000000088888000-"`              ',
    '                              WK@((""""(LS/                              L=-0000000000000000000000000-9"`                     ',
    '                                                                           &H>080080000F0000000>"a                            ',
    '                                                                              )H"-080F0>??^                                   ',
    '                                                                                  3b                                          ',
], {
    "0" : -9436960,
    "1" : -10473328,    "2" : -12570528,    "3" : -15728592,    "4" : -14675904,    "5" : -14675920,    "6" : -13623216,    "7" : -11530096,    "8" : -9436944,    "9" : -10485568,    " " : 0,    "!" : -10477392,    "\"" : -10481472,    "#" : -10477376,    "$" : -12578704,    "%" : -6254416,    "&" : -12574624,    "'" : -10477408,    "(" : -10481488,    ")" : -13627312,    "*" : -8359792,
    "+" : -14680000,    "," : -13631392,    "-" : -9436976,    "." : -8355680,    "/" : -7307104,    ":" : -13631408,    ";" : -12578720,    "<" : -11534176,    "=" : -10481456,    ">" : -10485552,    "?" : -9432880,    "@" : -12582768,    "A" : -15728576,    "B" : -9432896,    "C" : -10481504,    "D" : -13627328,    "E" : -13627280,    "F" : -10485536,    "G" : -13627296,    "H" : -11530080,
    "I" : -10485584,    "J" : -11517840,    "K" : -13631376,    "L" : -12582784,    "M" : -12578736,    "N" : -12578688,    "O" : -12574608,    "P" : -8388384,    "Q" : -11530064,    "R" : -8363888,    "S" : -14679968,    "T" : -9416560,    "U" : -7311200,    "V" : -7307088,    "W" : -10465152,    "X" : -14679984,    "Y" : -11530112,    "Z" : -12582800,    "[" : -11526000,    "]" : -15728560,
    "^" : -8372016,    "_" : -9416576,    "`" : -8372032,    "a" : -8367936,    "b" : -9420640,
}, 3);
			return get(0, 0, 375, 57);
		},
	},
	fire: {
		0: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
			    '',
			    '                           !"#$%&',
			    '                         \'()*+,-. ',
			    '                        /012345678',
			    '                       9+:2;<   =>',
			    '                   ?@AABCCDE',
			    '                   FGHHIIJK',
			    '                  LMINOPQRS',
			    '                  STUVWXYZ[]',
			    '                 ^[T_`aXWbcd',
			    '                 efTghijklmno',
			    '                pqcrstuvwxcyz',
			    '                {|[}   ~¡¢£¤¥',
			    '                 ¦§¨   ©¡ª«',
			    '                 ¬®    ¯¡°±',
			    '  ²³              ´    µ¶·¸',
			    '  ¹º»¼                 ½¶¾¿',
			    ' ÀÁÂÃÄÅ                ÆÇÈÉ',
			    ' ÊËPÌÍÎÏ               ÐÑÒÓ',
			    'ÔÁÕÖØÙÚÛ               ÜÝÝÄÞ',
			    ' Êßàáâãäå             æçèQéê',
			    ' ëìíîïð¼  ñòó         ÁôõQöø',
			    '     ùú  ûüýþ       ÿĀāāāxĂăĄą',
			    '         ĆlćĈ   æĉĊĀlPċÌČÕĂĂćßč',
			    '        ĎďĐđPßĒēlĔĕćËĖėĘęĚějjĜĝĞ',
			    '       ğĠġĢģđĤěěĥĦħÌĖØęĨģPĩĒĪīĬĭ',
			    '       ĮįİıĨĲPĳđVėİıėĴĐēÕÕĵĶķ',
			    '      ĸĹİĺėĻļPÕÕPØİĺİĽĲľĤĿŀ',
			    '      ŁċłĘėĘŃńŅŅńņėİĻŇňľŌōŎ',
			    '      ŏŐőŒœĖĲňŅőŔŕėĻėŖŅľŗŘ',
			    '      řŐŚśĐĐŔĥŚĥĲŜėĻŝŞőľşŠ',
			    '      šŐŐŐśŢVŔĥśŢţėėŤťőŦŧ',
			    '     ŨũŐVVVļĨŪūĐŬŭĻœŮŚŚůŰ',
			    '   űŲųŴůVĨŵŶŷŷŷŸŸŹźŻVůżŴŰ',
			    '  ŽžżůůƀļĘįįĻŶŶƁŹƂŸŻŮťťƃƄ',
			    '  ƅļŴƆŴƀƇŤƀŒĢŸŸŹŹƂŹƈţŒƀƉƊƋ        ƌƍ',
			    '  ƎƏųŴŴŴƐƆƐƑŕœŶŹƒƓƔƂŭƕƖƗţƘ       ƙƚƛ',
			    '  ƜYŴYYÌYƑƐƐŤţƝįŭŸƂƂƒŸźŵġƞƟ      ƠļơƢ',
			    '  ƣŤŤŪĠƤĖļƐƐƐƐƐƥƦƧƨƩƂƓƓƒƪƫƗƬƭƮƯưƱŕƀƲƳ',
			    '  ƴƵƶƷƸƹƺƱYƐƻƻƐƐƐƦƦƞƼƓƽŭƾƫƻƇƿǀĨǁļYƐYŬ',
			    '  ǂǃǍ    ǎƞƐƻƻƻƻƻƻƻǏƕŷƒĽƦǐƻaǑƦƇǑaaƻǑħ',
			    '  ǒǓ      ơǏƻǏǏǏǏǐǐǐǔǕŸǖǏǐǗƿĴĘƝǘǙǙaǙħ',
			    '          ǚǛǘǙǙǏǐǐǏǏǘłŹƕǜǙǙƝŹƓƁŝǏǙaǝǞ',
			    '           ǟǠǙǐǡǙǐǏǏǘǕǢŸƨǣĢǤǥƓƈǦǐǧǘĨǨ',
			    '           ǩǘǪǪǐǫǪǪǪǬźǭǮƽƓǥǭǥǕǠǏǏǘƝǯǰ',
			    '           ǱǠǪǪǪǪǪǲXǳƁǭǴǵǶǶǭǷǸǠǲǫǹǺǻ',
			    '           ƕXǼǼǼǼXǼǦƈǥǶǽǽǶǵǭǾǦǼǲǿȀ',
			    '          ȁȂǼȃȃǹǹǦȄĺǥǽǽǽǽǽǴǵǷȅȆXXȇ',
			    '        ȈȉȊȋƈĢĢįƈƂȌǽȍȍȍǽǽǴǽǴǶĻȅȎȏȐ',
			    '       ȑĺȒȓȔȕǥǥǭǶǽǶǥǢƁƁȋȖǢǽȍȍƁȗȎȆȘș',
			    '       ȚțȒȜȊǢȍȍȍǽǢȝȞȟȒȠȒȡȢǵȣǽŸȗȤȥȦȧ',
			    '        ǯȨȩȪȫȌȍǶȋȬȜȜȭȭȭȮȯȡȌȍǶȰȤȜȱȲ',
			    '         ȳȬȠȠȴŶŸȵȊȶȶȷȄȶȟȠȸȔŶȢȒȪȹȺ',
			    '          ȻȼȽȾȨȿɀɁɂɂɃɄɅǺɆȊȱȨȱɇɆɈ',
			    '           ɉȲɊɋɌ         ɍɎɏͰͱ',
			], {
			    "0" : -2205130,
			    "1" : -1418710,    "2" : -2205142,    "3" : -3383242,    "4" : -6535126,    "5" : -7717846,    "6" : -6535114,    "7" : -4165030,    "8" : -11264494,    "9" : -7719394,    " " : 0,    "!" : -5338504,    "\"" : -8107978,    "#" : -6920614,    "$" : -5736340,    "%" : -7323088,    "&" : -10471894,    "'" : -7717858,    "(" : -3384790,    ")" : -2598364,    "*" : -2598358,
			    "+" : -2990026,    "," : -2596810,    "-" : -2595262,    "." : -6138820,    "/" : -7326172,    ":" : -1811926,    ";" : -4960726,    "<" : -10872826,    "=" : -11659252,    ">" : -12838900,    "?" : -5731708,    "@" : -4171210,    "A" : -2991568,    "B" : -1810384,    "C" : -1810390,    "D" : -3776458,    "E" : -11266036,    "F" : -4959178,    "G" : -2206672,    "H" : -1417174,
			    "I" : -1810396,    "J" : -2203606,    "K" : -7716322,    "L" : -3754834,    "M" : -2990032,    "N" : -2202082,    "O" : -1802710,    "P" : -1403332,    "Q" : -1407946,    "R" : -2202070,    "S" : -6533590,    "T" : -1807318,    "U" : -1805788,    "V" : -1005496,    "W" : -212908,    "X" : -209836,    "Y" : -609202,    "Z" : -1805782,    "[" : -2592190,    "]" : -9685474,
			    "^" : -8900584,    "_" : -223672,    "`" : -220600,    "a" : -214450,    "b" : -1409494,    "c" : -1807312,    "d" : -4956100,    "e" : -4957642,    "f" : -1807306,    "g" : -2590672,    "h" : -3773398,    "i" : -2982352,    "j" : -1404874,    "k" : -215974,    "l" : -1404868,    "m" : -1808854,    "n" : -2593726,    "o" : -9687010,    "p" : -4148044,    "q" : -3380164,
			    "r" : -2595280,    "s" : -8505838,    "t" : -10081774,    "u" : -8111086,    "v" : -3381724,    "w" : -618436,    "x" : -1406410,    "y" : -2198968,    "z" : -7716316,    "{" : -5332324,    "|" : -2986948,    "}" : -8505826,    "~" : -6141928,    "¡" : -1804234,    "¢" : -1805776,    "£" : -2197438,    "¤" : -5349322,    "¥" : -10473448,    "¦" : -4956106,    "§" : -4954558,
			    "¨" : -12049378,    "©" : -6140386,    "ª" : -1805764,    "«" : -6140380,    "¬" : -9292270,    "®" : -8501200,    "¯" : -5745634,    "°" : -2592202,    "±" : -9292276,    "²" : -9685480,    "³" : -10475002,    "´" : -9281440,    "µ" : -4166608,    "¶" : -1411018,    "·" : -2592208,    "¸" : -9289192,    "¹" : -2192812,    "º" : -2194360,    "»" : -4163506,    "¼" : -9289180,
			    "½" : -2985418,    "¾" : -2197450,    "¿" : -9289198,    "À" : -8107990,    "Á" : -1801156,    "Â" : -1802704,    "Ã" : -2195908,    "Ä" : -2587576,    "Å" : -11262970,    "Æ" : -2195902,    "Ç" : -1411024,    "È" : -1409476,    "É" : -7318498,    "Ê" : -2589118,    "Ë" : -1801168,    "Ì" : -610732,    "Í" : -2192842,    "Î" : -4558276,    "Ï" : -11656168,    "Ð" : -1799614,
			    "Ñ" : -1016266,    "Ò" : -1802698,    "Ó" : -4163518,    "Ô" : -4943746,    "Õ" : -1010116,    "Ö" : -211348,    "Ø" : -209806,    "Ù" : -219052,    "Ú" : -2587582,    "Û" : -8895970,    "Ü" : -1799608,    "Ý" : -1409482,    "Þ" : -2569024,    "ß" : -1798072,    "à" : -3768772,    "á" : -4559824,    "â" : -1403314,    "ã" : -2192824,    "ä" : -6528982,    "å" : -4936018,
			    "æ" : -4163524,    "ç" : -1406398,    "è" : -1407940,    "é" : -1404856,    "ê" : -5338516,    "ë" : -6132664,    "ì" : -8892880,    "í" : -13233646,    "î" : -12838894,    "ï" : -5347786,    "ð" : -2584486,    "ñ" : -5742538,    "ò" : -1798054,    "ó" : -5344696,    "ô" : -1013182,    "õ" : -1014724,    "ö" : -1404862,    "ø" : -6925282,    "ù" : -9287638,    "ú" : -8499664,
			    "û" : -5740996,    "ü" : -1406392,    "ý" : -1011646,    "þ" : -6137314,    "ÿ" : -2578312,    "Ā" : -1798078,    "ā" : -1406404,    "Ă" : -1013194,    "ă" : -2192830,    "Ą" : -5346250,    "ą" : -7316944,    "Ć" : -2191282,    "ć" : -1011652,    "Ĉ" : -5347804,    "ĉ" : -2980804,    "Ċ" : -2587588,    "ċ" : -1007026,    "Č" : -612274,    "č" : -6134212,    "Ď" : -2584498,
			    "ď" : -1796536,    "Đ" : -1003954,    "đ" : -1403338,    "Ē" : -1403320,    "ē" : -1403326,    "Ĕ" : -2192836,    "ĕ" : -1799620,    "Ė" : -609190,    "ė" : -205186,    "Ę" : -206728,    "ę" : -208270,    "Ě" : -217522,    "ě" : -1011658,    "Ĝ" : -613810,    "ĝ" : -2188186,    "Ğ" : -9682390,    "ğ" : -4555198,    "Ġ" : -1791916,    "ġ" : -209812,    "Ģ" : -603028,
			    "ģ" : -1795012,    "Ĥ" : -616900,    "ĥ" : -1007038,    "Ħ" : -212884,    "ħ" : -607648,    "Ĩ" : -606112,    "ĩ" : -1010110,    "Ī" : -3767230,    "ī" : -7316950,    "Ĭ" : -8894428,    "ĭ" : -11259880,    "Į" : -1795000,    "į" : -601486,    "İ" : -203650,    "ı" : -205192,    "Ĳ" : -1401790,    "ĳ" : -1010122,    "Ĵ" : -208264,    "ĵ" : -1008556,    "Ķ" : -5741008,
			    "ķ" : -10468828,    "ĸ" : -4160440,    "Ĺ" : -1400242,    "ĺ" : -598402,    "Ļ" : -203644,    "ļ" : -609196,    "Ľ" : -604570,    "ľ" : -615364,    "Ŀ" : -616888,    "ŀ" : -6135766,    "Ł" : -3370930,    "ł" : -604564,    "Ń" : -1793470,    "ń" : -1401796,    "Ņ" : -1008580,    "ņ" : -212890,    "Ň" : -1002406,    "ň" : -1008574,    "Ō" : -615358,    "ō" : -2586046,
			    "Ŏ" : -4544362,    "ŏ" : -2976184,    "Ő" : -613816,    "ő" : -1007044,    "Œ" : -1397176,    "œ" : -603022,    "Ŕ" : -1400254,    "ŕ" : -1002412,    "Ŗ" : -1005490,    "ŗ" : -1401784,    "Ř" : -6132694,    "ř" : -4160452,    "Ś" : -613822,    "ś" : -1007032,    "Ŝ" : -1791928,    "ŝ" : -208276,    "Ş" : -1398718,    "ş" : -2582974,    "Š" : -5333896,    "š" : -3366292,
			    "Ţ" : -1400248,    "ţ" : -1395628,    "Ť" : -1002418,    "ť" : -1005502,    "Ŧ" : -613828,    "ŧ" : -4160458,    "Ũ" : -4154254,    "ũ" : -2188216,    "Ū" : -607654,    "ū" : -1003948,    "Ŭ" : -1000864,    "ŭ" : -206722,    "Ů" : -1398712,    "ů" : -612286,    "Ű" : -4948432,    "ű" : -5736388,    "Ų" : -1003942,    "ų" : -610738,    "Ŵ" : -610744,    "ŵ" : -205180,
			    "Ŷ" : -202096,    "ŷ" : -203638,    "Ÿ" : -203632,    "Ź" : -203626,    "ź" : -205174,    "Ż" : -999316,    "ż" : -612280,    "Ž" : -5731744,    "ž" : -1003936,    "ƀ" : -1003960,    "Ɓ" : -202090,    "Ƃ" : -203620,    "ƃ" : -1003966,    "Ƅ" : -3369406,    "ƅ" : -3764152,    "Ɔ" : -610750,    "Ƈ" : -607660,    "ƈ" : -599938,    "Ɖ" : -1397182,    "Ɗ" : -1790380,
			    "Ƌ" : -1779514,    "ƌ" : -5338540,    "ƍ" : -8889808,    "Ǝ" : -2579884,    "Ə" : -215980,    "Ɛ" : -609208,    "Ƒ" : -215992,    "ƒ" : -202084,    "Ɠ" : -202078,    "Ɣ" : -203614,    "ƕ" : -1392550,    "Ɩ" : -1788850,    "Ɨ" : -1395634,    "Ƙ" : -2974648,    "ƙ" : -2174266,    "ƚ" : -1395610,    "ƛ" : -4154290,    "Ɯ" : -2974636,    "Ɲ" : -604576,    "ƞ" : -1000876,
			    "Ɵ" : -5341636,    "Ơ" : -3369394,    "ơ" : -1394086,    "Ƣ" : -6522826,    "ƣ" : -1394068,    "Ƥ" : -2581432,    "ƥ" : -1002424,    "Ʀ" : -1000882,    "Ƨ" : -606118,    "ƨ" : -996244,    "Ʃ" : -599932,    "ƪ" : -601492,    "ƫ" : -1000888,    "Ƭ" : -5341654,    "ƭ" : -3754864,    "Ʈ" : -4939138,    "Ư" : -4545922,    "ư" : -4945336,    "Ʊ" : -2185132,    "Ʋ" : -1395640,
			    "Ƴ" : -2182048,    "ƴ" : -1392526,    "Ƶ" : -1395616,    "ƶ" : -3366310,    "Ʒ" : -8103382,    "Ƹ" : -8495038,    "ƹ" : -3358540,    "ƺ" : -5336980,    "ƻ" : -607672,    "Ƽ" : -603016,    "ƽ" : -202072,    "ƾ" : -1394092,    "ƿ" : -212902,    "ǀ" : -212896,    "ǁ" : -1000870,    "ǂ" : -3364756,    "ǃ" : -6129598,    "Ǎ" : -9677758,    "ǎ" : -2175820,    "Ǐ" : -606130,
			    "ǐ" : -606136,    "Ǒ" : -607666,    "ǒ" : -10072528,    "Ǔ" : -12441070,    "ǔ" : -999340,    "Ǖ" : -601480,    "ǖ" : -999334,    "Ǘ" : -214456,    "ǘ" : -606124,    "Ǚ" : -212914,    "ǚ" : -6919126,    "Ǜ" : -1788844,    "ǜ" : -999352,    "ǝ" : -214444,    "Ǟ" : -1788826,    "ǟ" : -6524386,    "Ǡ" : -604588,    "ǡ" : -212920,    "Ǣ" : -200542,    "ǣ" : -996250,
			    "Ǥ" : -598390,    "ǥ" : -200536,    "Ǧ" : -603040,    "ǧ" : -211372,    "Ǩ" : -5734852,    "ǩ" : -2174278,    "Ǫ" : -604594,    "ǫ" : -604600,    "Ǭ" : -1392556,    "ǭ" : -200530,    "Ǯ" : -202066,    "ǯ" : -6128074,    "ǰ" : -7702432,    "Ǳ" : -4945360,    "ǲ" : -209842,    "ǳ" : -603034,    "Ǵ" : -200518,    "ǵ" : -200524,    "Ƕ" : -198988,    "Ƿ" : -596848,
			    "Ǹ" : -997792,    "ǹ" : -603046,    "Ǻ" : -4943812,    "ǻ" : -4939114,    "Ǽ" : -603052,    "ǽ" : -198982,    "Ǿ" : -993154,    "ǿ" : -209848,    "Ȁ" : -2971582,    "ȁ" : -4547500,    "Ȃ" : -206740,    "ȃ" : -209830,    "Ȅ" : -994714,    "ȅ" : -601504,    "Ȇ" : -601516,    "ȇ" : -4155844,    "Ȉ" : -6126532,    "ȉ" : -2968492,    "Ȋ" : -599956,    "ȋ" : -200554,
			    "Ȍ" : -198994,    "ȍ" : -198976,    "Ȏ" : -208294,    "ȏ" : -208300,    "Ȑ" : -3364792,    "ȑ" : -8098750,    "Ȓ" : -599968,    "ȓ" : -993190,    "Ȕ" : -202102,    "ȕ" : -199000,    "Ȗ" : -200548,    "ȗ" : -208282,    "Ș" : -2573734,    "ș" : -7307686,    "Ț" : -2962240,    "ț" : -2575264,    "Ȝ" : -599974,    "ȝ" : -596860,    "Ȟ" : -598414,    "ȟ" : -205210,
			    "Ƞ" : -598432,    "ȡ" : -598420,    "Ȣ" : -596866,    "ȣ" : -198970,    "Ȥ" : -206758,    "ȥ" : -994738,    "Ȧ" : -2178970,    "ȧ" : -8888272,    "Ȩ" : -205198,    "ȩ" : -994732,    "Ȫ" : -205216,    "ȫ" : -598408,    "Ȭ" : -993172,    "ȭ" : -599980,    "Ȯ" : -599986,    "ȯ" : -598438,    "Ȱ" : -599950,    "ȱ" : -205204,    "Ȳ" : -4940716,    "ȳ" : -3756448,
			    "ȴ" : -596872,    "ȵ" : -599944,    "ȶ" : -599962,    "ȷ" : -601498,    "ȸ" : -203674,    "ȹ" : -1389472,    "Ⱥ" : -5338564,    "Ȼ" : -6521284,    "ȼ" : -1389466,    "Ƚ" : -203668,    "Ⱦ" : -596884,    "ȿ" : -2178982,    "ɀ" : -4154302,    "Ɂ" : -6128080,    "ɂ" : -6916054,    "Ƀ" : -7312342,    "Ʉ" : -7705564,    "Ʌ" : -6522832,    "Ɇ" : -3361714,    "ɇ" : -598426,
			    "Ɉ" : -8100322,    "ɉ" : -2962246,    "Ɋ" : -2968468,    "ɋ" : -7310806,    "Ɍ" : -3358546,    "ɍ" : -5730208,    "Ɏ" : -4152736,    "ɏ" : -5335468,    "Ͱ" : -6126520,    "ͱ" : -5728654,
			}, 4);
			return get(0, 0, 148, 220);
		},
		1: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
    '                                                        ',
    '                        !"#$%                           ',
    '                       &\'\'()*                           ',
    '                      +,-.                              ',
    '                     /012                               ',
    '                   345678                               ',
    '                  9:;<=>0                               ',
    '                  ?@ABCDE                               ',
    '                  ?FGHIJK                               ',
    '                  L    MNO                              ',
    '                        PQR                             ',
    '                         ST                             ',
    '                         UV                             ',
    '                         WX                             ',
    '                                                        ',
    '                                                        ',
    '  YZ[                                                   ',
    ' ]^_`                                                   ',
    ' abcd          efg                                      ',
    '    h       ijkllmn                                     ',
    '           opqrstuv    wx                               ',
    '         ymqrzr{| }    ~¡                               ',
    '        ¢£rzzz¤¥      ¦§¨                               ',
    '       ©ª¤¤«¬®¯°      ¢£±²                              ',
    '       ³´µ¶·¸¹º»¼    ½¾¿ÀÀÁÂ                            ',
    '       ÃÄµ«ÅÆÇ«¿ÈÉÊËÌÍÎÏÐÑÈ¢                            ',
    '      ÒÓÔ¿ÕÖØÙÚÛÜÝÞÈÞª_ß   àá                           ',
    '      âµãÄäåæØçèåéêëìí                                  ',
    '      îÔï¬äðñæØØÆØæèòó                                  ',
    '      ôÄõöøÝÝùèæúæêûøü                                  ',
    '     ýþÿĀ  ā_¬ĂăæĄąĆÚ                                   ',
    '     ćĈĉ     ĊċĆČčûĎþď                                  ',
    '     Đđ       ĒĎēĔċĔĕĖ      ĀÑė¢Ęę                      ',
    '     Ě        ěąĎĜČĔĝĞ     ğĠĝċēċġ                      ',
    '              ĢģċČéùĔĤĥ    Ħġìĝĝìġ                      ',
    '               ħ<ĨæĩĪìī    ĬĪĭìČĮį                      ',
    '               İĪıĲĳÇČ®ĠĴĵĶðČĭäķ                        ',
    '               ĸĪĹĺĺèĻĻĻĻļðĽČČľĿ                        ',
    '              ŀùðŁłĳŃĽĻĻńĻŅèĽņŇ                         ',
    '          ňŌōŎıļŏŐłőŒœĻĻĻ·ĄŔĽŕŖ                         ',
    '          ŗŘŘŘřŚŔśśőŜŝĻŞœÖĳőŜĻş                         ',
    '    Š     šŚŚŢţţŤĺśĳťŦŦŧļĄŐśŨũļŪ                        ',
    '   ūŁŬ    ŭŮţţţţůŰĺŐŤřűŲŢťųŴłŵŢţŶ                       ',
    '   ŷťŸ    ŹűźŻŢţűżŨŽžƀŢŢűŢĄŴƁƂżŢƃ                       ',
    '   ŪţŻƄƃƅŜŻƆźźźźƇżŵŽśéƈƉƊźŰŽƋłƌŻƍ                       ',
    '   ƄƎƎźƏŻźŻźƇźźƇƇƐŨŽƁƑŏƈƈĄųŽƋƒƓƔƕ                       ',
    '   ƖƎŮŮŮŮƈƗƗƘƘƙƇƊƚƛƜƜśƝųƞłƜƜƒĳƌƟƠ                       ',
    '   ơƢƎƎƎƎƣƤƥĳƦƘƘƔŵƒƧƨƩƧƩƪƫƋĺƬƭƭŁ                        ',
    '    ƮƢƎƎƯƔưƱƋŐƲƑĲśƫƫƳƴƵƴƪƜłƶƘƔƷ                         ',
    '     ƸƐƹƺƻƼƽƫƪƪƩƧƫƧƧƫƵƴƴƜƞƾƯƯƿ                          ',
    '      ǀǁǂǃǍĳƧǎƴƫƋśƞúŐƋƫƫłƶǏƯǐǑ                          ',
    '       ǒǍǂǓǔǕƋƱǖǗƦƭƹǁǘƽƱǙǚǓƹƶ                           ',
    '        ƬǍǍǛǜǝǝǞǓǓǓǓǓǍǝǟǝǍǓǁƠ                           ',
    '         ǠǝǡǡǡǍǢǣǣǤǤǥǓǍǓǍǢƶǦ                            ',
    '          ǧǨǩǪǪǫǬǭǮǯǰǱǩǲǪǰ                              ',
		], {
		    "0" : -2596822,
		    "1" : -2203606,    "2" : -4564432,    "3" : -4948372,    "4" : -3381700,    "5" : -2988502,    "6" : -2593756,    "7" : -2203618,    "8" : -4565974,    "9" : -2965318,    " " : 0,    "!" : -3366250,    "\"" : -2986936,    "#" : -2593720,    "$" : -3773356,    "%" : -6132634,    "&" : -4155772,    "'" : -3384772,    "(" : -5344672,    ")" : -4942192,    "*" : -5335408,
		    "+" : -4161952,    "," : -2991574,    "-" : -2990026,    "." : -2175802,    "/" : -4171210,    ":" : -3383248,    ";" : -1802698,    "<" : -610738,    "=" : -612274,    ">" : -2595298,    "?" : -6138826,    "@" : -2592202,    "A" : -222124,    "B" : -1011640,    "C" : -215968,    "D" : -2197462,    "E" : -2203600,    "F" : -4954564,    "G" : -4954576,    "H" : -4562896,
		    "I" : -3377086,    "J" : -2195890,    "K" : -2593738,    "L" : -2965312,    "M" : -4550524,    "N" : -3380158,    "O" : -4552078,    "P" : -3756382,    "Q" : -3770284,    "R" : -2968402,    "S" : -5742526,    "T" : -4949920,    "U" : -7316926,    "V" : -5341594,    "W" : -6524320,    "X" : -2569018,    "Y" : -3765652,    "Z" : -2587564,    "[" : -5336962,    "]" : -5346226,
		    "^" : -1401754,    "_" : -1796530,    "`" : -2963782,    "a" : -5736358,    "b" : -4949944,    "c" : -2581408,    "d" : -5731720,    "e" : -4158874,    "f" : -2980780,    "g" : -4160410,    "h" : -4148050,    "i" : -2968408,    "j" : -3377080,    "k" : -2589118,    "l" : -1802692,    "m" : -2194360,    "n" : -5346232,    "o" : -3762568,    "p" : -2195902,    "q" : -1407940,
		    "r" : -1407946,    "s" : -1016266,    "t" : -1801150,    "u" : -2587576,    "v" : -4558276,    "w" : -4948378,    "x" : -3373996,    "y" : -3764128,    "z" : -1407952,    "{" : -1406404,    "|" : -3370906,    "}" : -2570566,    "~" : -2586028,    "¡" : -4559818,    "¢" : -2584492,    "£" : -1799620,    "¤" : -1406410,    "¥" : -2195914,    "¦" : -3761020,    "§" : -1798072,
		    "¨" : -4556740,    "©" : -3761032,    "ª" : -1403320,    "«" : -1798090,    "¬" : -1401790,    "®" : -610732,    "¯" : -1010110,    "°" : -2194378,    "±" : -2584516,    "²" : -4157338,    "³" : -3768766,    "´" : -1011652,    "µ" : -1404874,    "¶" : -2192848,    "·" : -609196,    "¸" : -206734,    "¹" : -211354,    "º" : -1796548,    "»" : -1404862,    "¼" : -4158892,
		    "½" : -3370912,    "¾" : -1798078,    "¿" : -1403332,    "À" : -212884,    "Á" : -1400224,    "Â" : -2570572,    "Ã" : -2586046,    "Ä" : -1010116,    "Å" : -214432,    "Æ" : -205192,    "Ç" : -607648,    "È" : -1796536,    "É" : -3768772,    "Ê" : -4154254,    "Ë" : -3759490,    "Ì" : -3374008,    "Í" : -618424,    "Î" : -1406398,    "Ï" : -615352,    "Ð" : -1400230,
		    "Ñ" : -1793446,    "Ò" : -3364732,    "Ó" : -1403326,    "Ô" : -1010122,    "Õ" : -2191306,    "Ö" : -999328,    "Ø" : -205186,    "Ù" : -209806,    "Ú" : -1795006,    "Û" : -1796554,    "Ü" : -1793476,    "Ý" : -1400248,    "Þ" : -1796542,    "ß" : -3764116,    "à" : -4552084,    "á" : -3754834,    "â" : -1796524,    "ã" : -1403344,    "ä" : -610744,    "å" : -208276,
		    "æ" : -206728,    "ç" : -211348,    "è" : -606112,    "é" : -209812,    "ê" : -1002406,    "ë" : -212890,    "ì" : -1005496,    "í" : -2191288,    "î" : -2192836,    "ï" : -1008580,    "ð" : -1002412,    "ñ" : -603034,    "ò" : -1795000,    "ó" : -3367828,    "ô" : -1401778,    "õ" : -1008574,    "ö" : -1400236,    "ø" : -1793464,    "ù" : -1397170,    "ú" : -203644,
		    "û" : -1400254,    "ü" : -2175814,    "ý" : -3366280,    "þ" : -1400242,    "ÿ" : -1007020,    "Ā" : -2974624,    "ā" : -4155796,    "Ă" : -1795018,    "ă" : -1790392,    "Ą" : -603028,    "ą" : -1007032,    "Ć" : -1007044,    "ć" : -1397146,    "Ĉ" : -1794982,    "ĉ" : -2968426,    "Ċ" : -2974636,    "ċ" : -1007038,    "Č" : -1003960,    "č" : -215974,    "Ď" : -613822,
		    "ď" : -2966884,    "Đ" : -1397140,    "đ" : -3759478,    "Ē" : -1005490,    "ē" : -612286,    "Ĕ" : -1005502,    "ĕ" : -1398712,    "Ė" : -3764146,    "ė" : -1793452,    "Ę" : -2977708,    "ę" : -3762580,    "Ě" : -2182006,    "ě" : -1398688,    "Ĝ" : -610750,    "ĝ" : -612280,    "Ğ" : -2188216,    "ğ" : -2966872,    "Ġ" : -1397164,    "ġ" : -1398700,    "Ģ" : -2968432,
		    "ģ" : -1794994,    "Ĥ" : -1793470,    "ĥ" : -1779514,    "Ħ" : -4547476,    "ħ" : -3367840,    "Ĩ" : -1395634,    "ĩ" : -208264,    "Ī" : -1003954,    "ī" : -2977720,    "Ĭ" : -4157374,    "ĭ" : -1003966,    "Į" : -1398706,    "į" : -2183572,    "İ" : -3762598,    "ı" : -1395628,    "Ĳ" : -599932,    "ĳ" : -203638,    "Ĵ" : -2974642,    "ĵ" : -4155820,    "Ķ" : -3367858,
		    "ķ" : -1397158,    "ĸ" : -3370948,    "Ĺ" : -1000864,    "ĺ" : -203632,    "Ļ" : -609208,    "ļ" : -607660,    "Ľ" : -1002424,    "ľ" : -1003948,    "Ŀ" : -1781062,    "ŀ" : -2570590,    "Ł" : -603016,    "ł" : -202084,    "Ń" : -1394086,    "ń" : -609214,    "Ņ" : -1395640,    "ņ" : -1002418,    "Ň" : -2579890,    "ň" : -2575228,    "Ō" : -4157356,    "ō" : -4550584,
		    "Ŏ" : -3366328,    "ŏ" : -604570,    "Ő" : -202090,    "ő" : -205174,    "Œ" : -1787308,    "œ" : -609202,    "Ŕ" : -206722,    "ŕ" : -215986,    "Ŗ" : -2970004,    "ŗ" : -2183584,    "Ř" : -1000876,    "ř" : -607666,    "Ś" : -1000882,    "ś" : -202078,    "Ŝ" : -1394092,    "ŝ" : -1000888,    "Ş" : -215992,    "ş" : -1791928,    "Š" : -3360094,    "š" : -1790374,
		    "Ţ" : -606130,    "ţ" : -606124,    "Ť" : -997780,    "ť" : -999334,    "Ŧ" : -607672,    "ŧ" : -214456,    "Ũ" : -599944,    "ũ" : -1394098,    "Ū" : -1788832,    "ū" : -4547482,    "Ŭ" : -3756412,    "ŭ" : -3363214,    "Ů" : -211372,    "ů" : -1392556,    "Ű" : -996244,    "ű" : -606136,    "Ų" : -214450,    "ų" : -598396,    "Ŵ" : -595294,    "ŵ" : -601486,
		    "Ŷ" : -2573698,    "ŷ" : -3366316,    "Ÿ" : -1392538,    "Ź" : -2578360,    "ź" : -604594,    "Ż" : -604588,    "ż" : -997804,    "Ž" : -200536,    "ž" : -203626,    "ƀ" : -604576,    "Ɓ" : -202072,    "Ƃ" : -206716,    "ƃ" : -2576800,    "Ƅ" : -1392544,    "ƅ" : -2576806,    "Ɔ" : -999346,    "Ƈ" : -604600,    "ƈ" : -604582,    "Ɖ" : -212908,    "Ɗ" : -211378,
		    "Ƌ" : -198994,    "ƌ" : -996256,    "ƍ" : -2575258,    "Ǝ" : -209836,    "Ə" : -209830,    "Ɛ" : -996262,    "Ƒ" : -601480,    "ƒ" : -200542,    "Ɠ" : -601492,    "Ɣ" : -603046,    "ƕ" : -2968450,    "Ɩ" : -1787302,    "Ɨ" : -603040,    "Ƙ" : -603052,    "ƙ" : -603064,    "ƚ" : -997798,    "ƛ" : -596854,    "Ɯ" : -200530,    "Ɲ" : -598384,    "ƞ" : -598390,
		    "Ɵ" : -208282,    "Ơ" : -1781068,    "ơ" : -2970016,    "Ƣ" : -209824,    "ƣ" : -208288,    "Ƥ" : -202108,    "ƥ" : -200554,    "Ʀ" : -599956,    "Ƨ" : -198988,    "ƨ" : -593740,    "Ʃ" : -200524,    "ƪ" : -200518,    "ƫ" : -198982,    "Ƭ" : -994708,    "ƭ" : -601504,    "Ʈ" : -1394080,    "Ư" : -208294,    "ư" : -1387918,    "Ʊ" : -199000,    "Ʋ" : -599938,
		    "Ƴ" : -592198,    "ƴ" : -198976,    "Ƶ" : -200512,    "ƶ" : -599950,    "Ʒ" : -2575264,    "Ƹ" : -3361696,    "ƹ" : -601510,    "ƺ" : -208300,    "ƻ" : -601516,    "Ƽ" : -994720,    "ƽ" : -200548,    "ƾ" : -601498,    "ƿ" : -2180518,    "ǀ" : -2570602,    "ǁ" : -599962,    "ǂ" : -599980,    "ǃ" : -206764,    "Ǎ" : -599968,    "ǎ" : -198970,    "Ǐ" : -206752,
		    "ǐ" : -206746,    "Ǒ" : -2572144,    "ǒ" : -2178970,    "Ǔ" : -599974,    "ǔ" : -993172,    "Ǖ" : -595312,    "ǖ" : -593764,    "Ǘ" : -990082,    "ǘ" : -598402,    "Ǚ" : -595318,    "ǚ" : -993184,    "Ǜ" : -993190,    "ǜ" : -991648,    "ǝ" : -598420,    "Ǟ" : -598426,    "ǟ" : -203656,    "Ǡ" : -1387912,    "ǡ" : -598432,    "Ǣ" : -205216,    "ǣ" : -203674,
		    "Ǥ" : -203680,    "ǥ" : -598438,    "Ǧ" : -2175832,    "ǧ" : -2174284,    "Ǩ" : -2570626,    "ǩ" : -1782670,    "Ǫ" : -1782664,    "ǫ" : -2569078,    "Ǭ" : -2175838,    "ǭ" : -2174290,    "Ǯ" : -2569048,    "ǯ" : -2963824,    "ǰ" : -2965378,    "Ǳ" : -2572168,    "ǲ" : -1782676,
		}, 4);
			return get(0, 0, 148, 220);
		},
		2: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
    '                       !"                               ',
    '                      #$                                ',
    '                     %&                                 ',
    '                     \'(                                 ',
    '                     )*                                 ',
    '                   +,-./                                ',
    '                   012345                               ',
    '                       67                               ',
    '                        8                               ',
    '                                                        ',
    '                  9:                                    ',
    '                ;<=>                                    ',
    '                ?@A                                     ',
    '               B@CD                                     ',
    '               EFGHI                                    ',
    '               JKLMN                                    ',
    ' OP            QRSHT                                    ',
    '              UVWXY                                     ',
    '          Z[]^_`a                                       ',
    '         bcdefgh      ijk                               ',
    '        lmWdnfo       pqr                               ',
    '       sotuvwRx      yzm{|                              ',
    '      }~f¡¢w£¤¥¦   §¨©ª«¬®                              ',
    '     ¯°tFg±²¢v³¢´µ¶·¸    ¹                              ',
    '     º»¼º½¾¿ÀÁÂÃÄÅ»Æ                                    ',
    '     YÇ      ÈÁÉÄÊË                                     ',
    '              ¥ÌÍÎ                                      ',
    '              ÎÏÊ        ÐÑÒÓ                           ',
    '              ÔÊÊÕ      bÖØÙÂÚ                          ',
    '              ¨RÊÛ      UÜ³ÝÞßà                         ',
    '              áuâÏã     äåæçèé                          ',
    '              êuëìÞí    îïð                             ',
    '              Úñòóôõö  øÛùú                             ',
    '             ûüýâþÿôĀßāßùù                              ',
    '    Ăă       ĄąĆâćĈĉÞĊċČčĎ                              ',
    '   ďĐđ       ĒēĔēĉĕĖėĘęĚěĜĝéĞğ                          ',
    '  ĠKēČġ      ĢģĤĥēĦĕħĨĩĪīóĬĭĮ¢ď                         ',
    '  įİĔĥ¢ı     ĲĤĤĳģĴĵĨĶķĪĸĬģģĤĥčĹ                        ',
    '  ĺĥĤĻóčļĽľĿŀģģģģŁģłħŃķħĩĦģģģĤÝń                        ',
    '  ŅĤĤĤĤĤčÝčņóŇňŌōĤģīķĶķĶŎĩŏĤĤóÂ                         ',
    '  ŐģőőőŒĬŒŒőĉĘœŔĦŕīėĶŖŗĶĶĕŇőőŒŘ                         ',
    '  řŚőőśŜŝŞŞşŠĩŗŗŎšĨĶŢŃĶĨţŚŞŤťņŦ                         ',
    '   ŧťŨũŪūĸŠũŬŭŮůŮŗŢĶĖŰŬĸűŞŨŨűī                          ',
    '   ŲŚŨűųħŎĚŴĨŮŵŮŵŮŢŶŷŸŸŞťŹźťīŻ                          ',
    '    żŹŸŽĪŢŮŢŮŮŮŮŵžķćŸŸŹŹŸŹŸƀ                            ',
    '    ƁŹŸŸƂĶŮžžŵŵŵŵžƃ¤ƄƄƅƅŸŸŝ                             ',
    '    ƆźŸƅƇŃŵƈƈƈƈƈƈƉĨćƊƊƊƅƊƊƋ                             ',
    '   ƌƍƅƊƆƎƏƉƈƐƐƉƑƐƈŢĈƅƒƒźƒƅƓ                             ',
    '   řƔƕƍ£ŃƉƑƑƑƑƉƉƑƑžœƍƖƅƒƗƗƆƘ                            ',
    '    ƙƚƛƜƝƑƑƞƑƑƑƑƑƑƉƟƠƖƖƖƗơƢŜ                            ',
    '    ƣƛƛƤƥħŵƉƑƑƉžŢƟƝƏƥƦƧƧƧƧƨƩ                            ',
    '     ƪƫƬƦƭƮƯƝžƯƮưƱųƲƳƴƧƧƵƵƤƶ                            ',
    '       ƷƸƛƹƱūūƭƺƺƻƼƹƽƾƵƧƵƺƂ                             ',
    '         ƿǀƹǁƻƬƤǂǃǍǎƬǁƬƼƭǏ                              ',
    '                    ǐǑƿŲ                                ',
], {
    "0" : -5340040,
    "1" : -6925246,    "2" : -6925240,    "3" : -6532036,    "4" : -3776452,    "5" : -4548982,    "6" : -6132640,    "7" : -6135730,    "8" : -7708588,    "9" : -3360076,    " " : 0,    "!" : -9287620,    "\"" : -6914440,    "#" : -5744056,    "$" : -4545892,    "%" : -4946824,    "&" : -4171204,    "'" : -6141910,    "(" : -3384772,    ")" : -5748700,    "*" : -2991562,
    "+" : -5734804,    "," : -4954552,    "-" : -2990020,    "." : -2202046,    "/" : -4559788,    ":" : -3358534,    ";" : -4154230,    "<" : -3380158,    "=" : -4166578,    ">" : -5733250,    "?" : -3774922,    "@" : -2198986,    "A" : -4956100,    "B" : -4943746,    "C" : -1805782,    "D" : -4562890,    "E" : -5740996,    "F" : -1404868,    "G" : -1802698,    "H" : -2983876,
    "I" : -3361624,    "J" : -5344714,    "K" : -1003954,    "L" : -215962,    "M" : -1013176,    "N" : -3375538,    "O" : -5346220,    "P" : -5344684,    "Q" : -3770314,    "R" : -1007032,    "S" : -1011640,    "T" : -4949938,    "U" : -4161970,    "V" : -2195914,    "W" : -1801162,    "X" : -1799608,    "Y" : -3757936,    "Z" : -4549000,    "[" : -4951492,    "]" : -4559818,
    "^" : -2982340,    "_" : -1801150,    "`" : -2983882,    "a" : -4158868,    "b" : -4552090,    "c" : -2195908,    "d" : -1801168,    "e" : -1013194,    "f" : -1407952,    "g" : -1406398,    "h" : -2968414,    "i" : -4559806,    "j" : -4951480,    "k" : -2965324,    "l" : -3366262,    "m" : -1801144,    "n" : -1799632,    "o" : -2589124,    "p" : -3378628,    "q" : -2195896,
    "r" : -2586028,    "s" : -3366274,    "t" : -1406410,    "u" : -612274,    "v" : -211354,    "w" : -209818,    "x" : -2587588,    "y" : -3363178,    "z" : -2587570,    "{" : -1799602,    "|" : -4154242,    "}" : -2976154,    "~" : -1801156,    "¡" : -1010116,    "¢" : -1003948,    "£" : -206734,    "¤" : -604576,    "¥" : -2189758,    "¦" : -3768772,    "§" : -2570572,
    "¨" : -4948414,    "©" : -4556740,    "ª" : -4945306,    "«" : -4948384,    "¬" : -4559812,    "®" : -4555180,    "¯" : -2968420,    "°" : -1008562,    "±" : -1798084,    "²" : -1796548,    "³" : -209812,    "´" : -1403314,    "µ" : -2586052,    "¶" : -2980804,    "·" : -1796524,    "¸" : -4160440,    "¹" : -4943752,    "º" : -3765664,    "»" : -1798072,    "¼" : -3374008,
    "½" : -3759490,    "¾" : -3364726,    "¿" : -4157344,    "À" : -2586046,    "Á" : -1796542,    "Â" : -1397164,    "Ã" : -212896,    "Ä" : -1403338,    "Å" : -1010122,    "Æ" : -4158898,    "Ç" : -3364714,    "È" : -3374014,    "É" : -215980,    "Ê" : -1401784,    "Ë" : -4555198,    "Ì" : -1401796,    "Í" : -1403332,    "Î" : -3767236,    "Ï" : -1401790,    "Ð" : -2966872,
    "Ñ" : -4552096,    "Ò" : -4946860,    "Ó" : -3369370,    "Ô" : -4160446,    "Õ" : -2178904,    "Ö" : -1794988,    "Ø" : -609178,    "Ù" : -604558,    "Ú" : -2582962,    "Û" : -2582968,    "Ü" : -1795000,    "Ý" : -609190,    "Þ" : -1398712,    "ß" : -2188216,    "à" : -2174272,    "á" : -4550566,    "â" : -613822,    "ã" : -2977720,    "ä" : -4946848,    "å" : -610738,
    "æ" : -606106,    "ç" : -2188198,    "è" : -3363184,    "é" : -1779514,    "ê" : -3364738,    "ë" : -613828,    "ì" : -1007044,    "í" : -4157356,    "î" : -4154248,    "ï" : -1400248,    "ð" : -1794994,    "ñ" : -612280,    "ò" : -1007038,    "ó" : -609202,    "ô" : -1398718,    "õ" : -1793464,    "ö" : -2572114,    "ø" : -2174266,    "ù" : -612268,    "ú" : -2177356,
    "û" : -2966890,    "ü" : -1005484,    "ý" : -612286,    "þ" : -208282,    "ÿ" : -607654,    "Ā" : -1795006,    "ā" : -2976184,    "Ă" : -2183578,    "ă" : -3761062,    "Ą" : -2579890,    "ą" : -1397176,    "Ć" : -1005502,    "ć" : -603034,    "Ĉ" : -206728,    "ĉ" : -1002412,    "Ċ" : -1005496,    "ċ" : -1397170,    "Č" : -1002406,    "č" : -609196,    "Ď" : -610732,
    "ď" : -1790368,    "Đ" : -1788850,    "đ" : -3369394,    "Ē" : -2579896,    "ē" : -1003960,    "Ĕ" : -610750,    "ĕ" : -205186,    "Ė" : -203638,    "ė" : -599944,    "Ę" : -603028,    "ę" : -1000864,    "Ě" : -206710,    "ě" : -1000870,    "Ĝ" : -215986,    "ĝ" : -2186674,    "Ğ" : -2569042,    "ğ" : -2572126,    "Ġ" : -4154260,    "ġ" : -3364744,    "Ģ" : -3369406,
    "ģ" : -1002424,    "Ĥ" : -609208,    "ĥ" : -610744,    "Ħ" : -1392544,    "ħ" : -202090,    "Ĩ" : -203626,    "ĩ" : -205174,    "Ī" : -203632,    "ī" : -999328,    "Ĭ" : -1002418,    "ĭ" : -1791928,    "Į" : -1790386,    "į" : -3367852,    "İ" : -1003966,    "ı" : -3367846,    "Ĳ" : -2188222,    "ĳ" : -609214,    "Ĵ" : -1395634,    "ĵ" : -997780,    "Ķ" : -202078,
    "ķ" : -202084,    "ĸ" : -997786,    "Ĺ" : -2573686,    "ĺ" : -2185132,    "Ļ" : -215992,    "ļ" : -1791916,    "Ľ" : -3366286,    "ľ" : -3363202,    "Ŀ" : -3367864,    "ŀ" : -2579902,    "Ł" : -1002430,    "ł" : -1394092,    "Ń" : -200542,    "ń" : -2178916,    "Ņ" : -2578348,    "ņ" : -607660,    "Ň" : -1000882,    "ň" : -999334,    "Ō" : -1394098,    "ō" : -1000888,
    "Ŏ" : -203620,    "ŏ" : -1395628,    "Ő" : -2578336,    "ő" : -607672,    "Œ" : -607666,    "œ" : -202096,    "Ŕ" : -206722,    "ŕ" : -606112,    "Ŗ" : -593752,    "ŗ" : -202072,    "Ř" : -2576782,    "ř" : -2570584,    "Ś" : -606118,    "ś" : -999346,    "Ŝ" : -601492,    "ŝ" : -604582,    "Ş" : -606130,    "ş" : -999352,    "Š" : -1392550,    "š" : -598378,
    "Ţ" : -200536,    "ţ" : -601480,    "Ť" : -212914,    "ť" : -606124,    "Ŧ" : -1384762,    "ŧ" : -1395616,    "Ũ" : -606136,    "ũ" : -1392556,    "Ū" : -991624,    "ū" : -203650,    "Ŭ" : -996238,    "ŭ" : -203614,    "Ů" : -200530,    "ů" : -202066,    "Ű" : -599938,    "ű" : -999340,    "Ų" : -2174284,    "ų" : -598402,    "Ŵ" : -205180,    "ŵ" : -200524,
    "Ŷ" : -599932,    "ŷ" : -997798,    "Ÿ" : -604588,    "Ź" : -604594,    "ź" : -603058,    "Ż" : -1386316,    "ż" : -2183608,    "Ž" : -996250,    "ž" : -198988,    "ƀ" : -1394086,    "Ɓ" : -2182072,    "Ƃ" : -994702,    "ƃ" : -205168,    "Ƅ" : -211372,    "ƅ" : -603052,    "Ɔ" : -603040,    "Ƈ" : -994708,    "ƈ" : -200518,    "Ɖ" : -198982,    "Ɗ" : -209836,
    "Ƌ" : -1392526,    "ƌ" : -2570590,    "ƍ" : -601504,    "Ǝ" : -993160,    "Ə" : -199000,    "Ɛ" : -200512,    "Ƒ" : -198976,    "ƒ" : -209842,    "Ɠ" : -1788832,    "Ɣ" : -206746,    "ƕ" : -208294,    "Ɩ" : -208300,    "Ɨ" : -601516,    "Ƙ" : -2573710,    "ƙ" : -601498,    "ƚ" : -206758,    "ƛ" : -599968,    "Ɯ" : -598408,    "Ɲ" : -198994,    "ƞ" : -198970,
    "Ɵ" : -595294,    "Ơ" : -1387930,    "ơ" : -599986,    "Ƣ" : -601510,    "ƣ" : -2966938,    "Ƥ" : -993184,    "ƥ" : -596866,    "Ʀ" : -598426,    "Ƨ" : -206764,    "ƨ" : -599974,    "Ʃ" : -599950,    "ƪ" : -1784200,    "ƫ" : -205198,    "Ƭ" : -205210,    "ƭ" : -993178,    "Ʈ" : -991618,    "Ư" : -200548,    "ư" : -993166,    "Ʊ" : -993172,    "Ʋ" : -593770,
    "Ƴ" : -199024,    "ƴ" : -202120,    "Ƶ" : -599980,    "ƶ" : -1389448,    "Ʒ" : -3361690,    "Ƹ" : -1389472,    "ƹ" : -599962,    "ƺ" : -598432,    "ƻ" : -205216,    "Ƽ" : -205204,    "ƽ" : -596878,    "ƾ" : -598420,    "ƿ" : -2572150,    "ǀ" : -1389466,    "ǁ" : -203674,    "ǂ" : -2572192,    "ǃ" : -2570626,    "Ǎ" : -1785772,    "ǎ" : -206740,    "Ǐ" : -3360142,
    "ǐ" : -2966914,    "Ǒ" : -1782658,
}, 4);
			return get(0, 0, 148, 220);
		},
		3: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
    '                                                        ',
    '                   !"                                   ',
    '                  #$%                                   ',
    '                  & \'(                                  ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '               )*                                       ',
    '              +,-                                       ',
    '              ./0                                       ',
    '              123                                       ',
    '             45678                                      ',
    '            9:;<=>?                                     ',
    '       @A8BCD7EFG                                       ',
    '     HIJKL2MNO                                          ',
    '     PQRSSTUV                                           ',
    '    WXYZ[]^_`        a                                  ',
    '   bcdefghijkl       mn                                 ',
    '   op       qr      stu                                 ',
    '   &        vwx                                         ',
    '             yz{|                                       ',
    '              Az}~                                      ',
    '               ¡¢£                                      ',
    '               ¤¥#    ¦§¨©                              ',
    '               ª«     ¬®¯                               ',
    '               °±    ²³´                                ',
    '     µµ        ¶·¸   ¹ºz                                ',
    '    »¼½       ¾¿À¿ÁÂÃÄÄÅ                                ',
    '   ÆÇÈÄÉ      Ê¼ËÌJÍÎÏÎÐ                                ',
    '   ÑÒÓÔÕÖØ  ÂÙ¼ÎÚÛÚÜÜÈÝ¼Þß                              ',
    '  àáÜÈÝÏÒÒâãÎÒäåæçèÜÝÝÝÒÀÚé                             ',
    '  êëäìíîïïðñäòóôõöøÒÝÝùúÛúûü                            ',
    '  ýþÿíùñññññÿòóĀçöøùÒíÀúāĂăûĄ                           ',
    '   ąññññùùòòòòòĆćĈËùùùæĉāćĊÚċ                           ',
    '   ČùñññùòčĎďĐòđĒĈďùēĔĕçćĖėÀĘ                           ',
    '   ęĐĚùĐěÌĜćĝĞĆğĠĂġĔòĔĢģĤÛĥĔĦ                           ',
    '   ħěēēĨçĩĪīīĪĖĬĠĠĭõĔĚĮįĔěĐēİ                           ',
    ' ıĦĲĐēēĳçĴīīīīīĵĵĶĖçķĸĸĸēēĐĹĺ                           ',
    'pĻļļļļļĲĽğććīľľľľĵĿŀĢŁłŃŃĲþń                            ',
    'ŅņłŇňņņŌōņõŎćĶľĶĶĪŏōŐőłłŐŒ                              ',
    'œņŀŔŎŇŕŖņőőņĊĶľĵīĜŇŐŐŐłĸķŗ                              ',
    'ŘřçŚŎĤ  śŜŌŐđĵŝľĠŞņŐŐłşŠġ                               ',
    ' šğŚŢţ    ŤťŦĵŧŧĠŨũũũũşŪū                               ',
    ' ŬŭŮŎŕů  ŰŨűāŝŲųĴõŴŪŴŴŵŨŕŶ                              ',
    ' ŷŸŹźŻŞŷżŀŻŽĴŧŧŲŝğžŴŴŴŴŴŴřƀ                             ',
    ' ƁŻƂŞŴƃžƄŞƅĠųƆųƇƈƉĂƊƂƋŻŴŴŴƃŨűƌ                          ',
    ' ƍƄƋŴƎƏƐĭƑƒƉƈƆƆƓƓƓųĠƔƕƄƖƗƂƋŪƄƘ                          ',
    '  ƙƄƂƋƚŚĴŝųƆƆƓƉĴƛƜųƉĴƝƞĶƟƂƠơŸ                           ',
    '   ƢƣơơƤĴƓƆŲƓĶƥźƦźĂƉŲƧųŝźƨƩƦƪ                           ',
    '     ƫƬƦƭĴųƜĂźƦƮƮƦƯĒųƓŝāƦƮưź                            ',
    '      ƱźƲƳƭƴƦƮƵưźŸƊƶāĂŔƴƷƸƹ                             ',
    '       ƺƻƼƽƲƷźƾƿ   ǀǁǂƾǃǍ                               ',
    '          ŰǎǏ                                           ',
], {
    "0" : -6138832,
    "1" : -2983876,    "2" : -1802698,    "3" : -4562896,    "4" : -4158868,    "5" : -1799614,    "6" : -222136,    "7" : -2590660,    "8" : -4548994,    "9" : -2966866,    " " : 0,    "!" : -6135730,    "\"" : -4151134,    "#" : -3361618,    "$" : -4956088,    "%" : -7320004,    "&" : -3360076,    "'" : -6920614,    "(" : -3361612,    ")" : -4548982,    "*" : -6134194,
    "+" : -4157308,    "," : -2590648,    "-" : -5745610,    "." : -4168138,    "/" : -1805764,    ":" : -2589118,    ";" : -1409476,    "<" : -1804246,    "=" : -2198980,    ">" : -2980768,    "?" : -4547434,    "@" : -3757936,    "A" : -4152700,    "B" : -4946830,    "C" : -5347774,    "D" : -2983870,    "E" : -3378634,    "F" : -4166602,    "G" : -4953010,    "H" : -4158874,
    "I" : -2587588,    "J" : -1400242,    "K" : -612268,    "L" : -1799620,    "M" : -1804234,    "N" : -2589124,    "O" : -3762568,    "P" : -2586046,    "Q" : -613810,    "R" : -214432,    "S" : -211354,    "T" : -215968,    "U" : -1406404,    "V" : -3773392,    "W" : -3375550,    "X" : -2194372,    "Y" : -1796536,    "Z" : -2586052,    "[" : -2582974,    "]" : -2977732,
    "^" : -2191294,    "_" : -1404856,    "`" : -3770308,    "a" : -4548988,    "b" : -4161970,    "c" : -2587570,    "d" : -4561360,    "e" : -6138850,    "f" : -6532060,    "g" : -6528982,    "h" : -6922186,    "i" : -6922192,    "j" : -5349340,    "k" : -2587576,    "l" : -3363172,    "m" : -3768754,    "n" : -4552084,    "o" : -5344684,    "p" : -2965330,    "q" : -5347798,
    "r" : -2980792,    "s" : -5338510,    "t" : -2586034,    "u" : -3372442,    "v" : -5336974,    "w" : -2584492,    "x" : -4949950,    "y" : -5343160,    "z" : -2586040,    "{" : -3372466,    "|" : -3761032,    "}" : -1798060,    "~" : -4553620,    "¡" : -2982328,    "¢" : -1011640,    "£" : -4948378,    "¤" : -2980786,    "¥" : -1011628,    "¦" : -2174266,    "§" : -2582950,
    "¨" : -2186650,    "©" : -4155790,    "ª" : -3375544,    "«" : -1403314,    "¬" : -2977708,    "®" : -1796530,    "¯" : -4157326,    "°" : -4556734,    "±" : -1401778,    "²" : -4552102,    "³" : -1401772,    "´" : -3375556,    "µ" : -3369364,    "¶" : -3768772,    "·" : -1796542,    "¸" : -4553650,    "¹" : -2977726,    "º" : -1403326,    "»" : -2976184,    "¼" : -1400248,
    "½" : -3372478,    "¾" : -4152706,    "¿" : -1794994,    "À" : -1003954,    "Á" : -4160440,    "Â" : -3759496,    "Ã" : -4160458,    "Ä" : -1401784,    "Å" : -4161988,    "Æ" : -3762580,    "Ç" : -1007032,    "È" : -613828,    "É" : -3364732,    "Ê" : -2188216,    "Ë" : -609190,    "Ì" : -1000864,    "Í" : -1401790,    "Î" : -1400254,    "Ï" : -1007044,    "Ð" : -3767236,
    "Ñ" : -2977714,    "Ò" : -1005496,    "Ó" : -615364,    "Ô" : -1008574,    "Õ" : -1400236,    "Ö" : -4160446,    "Ø" : -3363190,    "Ù" : -1793452,    "Ú" : -1397164,    "Û" : -208264,    "Ü" : -1007038,    "Ý" : -613822,    "Þ" : -4157356,    "ß" : -2965342,    "à" : -1781056,    "á" : -1398700,    "â" : -1793470,    "ã" : -1795012,    "ä" : -1005502,    "å" : -1398724,
    "æ" : -1395634,    "ç" : -205186,    "è" : -1000870,    "é" : -2581420,    "ê" : -3366280,    "ë" : -1003948,    "ì" : -612280,    "í" : -612286,    "î" : -612292,    "ï" : -1005508,    "ð" : -1003972,    "ñ" : -610750,    "ò" : -1003960,    "ó" : -1397176,    "ô" : -1397182,    "õ" : -997792,    "ö" : -205180,    "ø" : -1395628,    "ù" : -610744,    "ú" : -208270,
    "û" : -1395616,    "ü" : -3367846,    "ý" : -2573662,    "þ" : -1002406,    "ÿ" : -1003966,    "Ā" : -1788856,    "ā" : -203638,    "Ă" : -596854,    "ă" : -997780,    "Ą" : -1779514,    "ą" : -2186668,    "Ć" : -1394080,    "ć" : -203632,    "Ĉ" : -599932,    "ĉ" : -1392538,    "Ċ" : -208258,    "ċ" : -3364750,    "Č" : -3366286,    "č" : -1397170,    "Ď" : -607654,
    "ď" : -1002412,    "Đ" : -609202,    "đ" : -603022,    "Ē" : -202090,    "ē" : -609208,    "Ĕ" : -1002424,    "ĕ" : -211360,    "Ė" : -203626,    "ė" : -603016,    "Ę" : -2578336,    "ę" : -3364744,    "Ě" : -609214,    "ě" : -1002418,    "Ĝ" : -206722,    "ĝ" : -205174,    "Ğ" : -604558,    "ğ" : -598396,    "Ġ" : -202084,    "ġ" : -1394086,    "Ģ" : -1000882,
    "ģ" : -1787314,    "Ĥ" : -997786,    "ĥ" : -606112,    "Ħ" : -1790374,    "ħ" : -2579896,    "Ĩ" : -212902,    "ĩ" : -205168,    "Ī" : -203620,    "ī" : -202078,    "Ĭ" : -595300,    "ĭ" : -599938,    "Į" : -607678,    "į" : -1002430,    "İ" : -1790362,    "ı" : -3363196,    "Ĳ" : -607660,    "ĳ" : -1000876,    "Ĵ" : -200542,    "ĵ" : -202072,    "Ķ" : -200536,
    "ķ" : -211366,    "ĸ" : -607672,    "Ĺ" : -609196,    "ĺ" : -2575228,    "Ļ" : -999334,    "ļ" : -607666,    "Ľ" : -604570,    "ľ" : -202066,    "Ŀ" : -601474,    "ŀ" : -1392550,    "Ł" : -1000888,    "ł" : -606136,    "Ń" : -214456,    "ń" : -2178916,    "Ņ" : -4547488,    "ņ" : -606124,    "Ň" : -604582,    "ň" : -606118,    "Ō" : -999340,    "ō" : -212908,
    "Ŏ" : -603028,    "ŏ" : -999328,    "Ő" : -606130,    "ő" : -999352,    "Œ" : -1395622,    "œ" : -4547476,    "Ŕ" : -203650,    "ŕ" : -604576,    "Ŗ" : -212884,    "ŗ" : -2178928,    "Ř" : -2569030,    "ř" : -1392556,    "Ś" : -202096,    "ś" : -2177380,    "Ŝ" : -1787302,    "ŝ" : -200530,    "Ş" : -603040,    "ş" : -604600,    "Š" : -211378,    "š" : -2575276,
    "Ţ" : -996244,    "ţ" : -999316,    "Ť" : -1787296,    "ť" : -604588,    "Ŧ" : -601486,    "ŧ" : -200524,    "Ũ" : -997804,    "ũ" : -604594,    "Ū" : -209836,    "ū" : -2971564,    "Ŭ" : -2970028,    "ŭ" : -993154,    "Ů" : -202102,    "ů" : -3364768,    "Ű" : -2569042,    "ű" : -996262,    "Ų" : -200518,    "ų" : -198988,    "Ŵ" : -603052,    "ŵ" : -603058,
    "Ŷ" : -2570590,    "ŷ" : -2576812,    "Ÿ" : -996250,    "Ź" : -203656,    "ź" : -599956,    "Ż" : -603046,    "ż" : -3759544,    "Ž" : -599944,    "ž" : -996256,    "ƀ" : -3363202,    "Ɓ" : -2970022,    "Ƃ" : -601510,    "ƃ" : -996268,    "Ƅ" : -601504,    "ƅ" : -1389466,    "Ɔ" : -198976,    "Ƈ" : -592192,    "ƈ" : -592198,    "Ɖ" : -198994,    "Ɗ" : -994708,
    "Ƌ" : -601516,    "ƌ" : -1785748,    "ƍ" : -3361660,    "Ǝ" : -208288,    "Ə" : -206734,    "Ɛ" : -598402,    "Ƒ" : -994696,    "ƒ" : -991612,    "Ɠ" : -198982,    "Ɣ" : -993166,    "ƕ" : -994726,    "Ɩ" : -599950,    "Ɨ" : -203662,    "Ƙ" : -3363220,    "ƙ" : -2180494,    "ƚ" : -205204,    "ƛ" : -200554,    "Ɯ" : -199006,    "Ɲ" : -598390,    "ƞ" : -598384,
    "Ɵ" : -598408,    "Ơ" : -208300,    "ơ" : -208294,    "Ƣ" : -2965354,    "ƣ" : -601492,    "Ƥ" : -994714,    "ƥ" : -991618,    "Ʀ" : -599968,    "Ƨ" : -200512,    "ƨ" : -206764,    "Ʃ" : -206758,    "ƪ" : -2178970,    "ƫ" : -1390996,    "Ƭ" : -206752,    "ƭ" : -596872,    "Ʈ" : -599974,    "Ư" : -993172,    "ư" : -205210,    "Ʊ" : -2968474,    "Ʋ" : -598426,
    "Ƴ" : -596878,    "ƴ" : -598414,    "Ƶ" : -596896,    "ƶ" : -596866,    "Ʒ" : -203668,    "Ƹ" : -1782688,    "ƹ" : -2966920,    "ƺ" : -2567500,    "ƻ" : -1784224,    "Ƽ" : -205192,    "ƽ" : -205198,    "ƾ" : -2968480,    "ƿ" : -2569060,    "ǀ" : -2963806,    "ǁ" : -3756448,    "ǂ" : -2575258,    "ǃ" : -4148122,    "Ǎ" : -2174284,    "ǎ" : -2965360,    "Ǐ" : -2569048,
}, 4);
			return get(0, 0, 148, 220);
		},
		4: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
    '                 !"                                     ',
    '                 #$                                     ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '                                                        ',
    '           %&\'                                          ',
    '           ()*                                          ',
    '           +,                                           ',
    '          -./                                           ',
    '        0123                                            ',
    '    456789:;                                            ',
    '   <=:>>?@AB                                            ',
    '   CDEFGHIJK                                            ',
    '   LM  NOPQR                                            ',
    '         STU                                            ',
    '          KVW                                           ',
    '           XYZ                                          ',
    '             []                                         ',
    '              ^   _`abcX                                ',
    '              d  efghij                                 ',
    '   klmmno     p   qrst                                  ',
    ' Xuvwxyz{         `|}                                   ',
    '   ~¡¢£v¤         ¥¦                                    ',
    '    §¨©ª«         ¬k                                    ',
    '     W®¯«         °n    ±²                              ',
    '      ³´µ         ±´¶·¸¹º»°                             ',
    '      ¼v½          ¾¿ÀÀÁÂÃÄÅ                            ',
    '      ÆÇÈÉ         ÊËÌÍÎÏÂÊÐ                            ',
    '      ÑÒÓ¨ ÔÕÖØÙÚÛÜÑÝÓÞÏßàÍá                            ',
    '      âããÑäåÓãææççãÑÝÓèéêëìí                            ',
    '      îïÝÑðññòÝããÑÓóIïôõöéèøù                           ',
    '      öúûóüÏÏýòþôÿë£óöûĀIrÃéā                           ',
    '     ÜïĂĂôăàßìòôêßĄąĆsćĈĉĊċČč                           ',
    '   ċsĆðôĎñèďĐđññàĒēøĔ                                   ',
    ' ċĕøĖėĘę  ĚěĜĝĞÎğĝĠéġ                                   ',
    ' ėĢèģ      ĤÏĥĦĦĝēħĨø                                   ',
    ' ĩĨĪ       īĬĝĭĦĮįĨĢİ                                   ',
    ' ěÂı       ěĲĳĴĮĵĶķķĸ                                   ',
    ' ĕĹ        ĺĻļĽįľĿŀĿŁ                                   ',
    ' yął        ŃļĽįýńŅņŇ                                   ',
    ' ňýŌ       ōêŎßđŎŏŀńĎŐ                                  ',
    'őňńŒœŔŕŖŗŘŘħŒřđŚśŜŝŞŒşŠ    āš                           ',
    ' ëŢţŤŒťŦŧŦŤŒŨŦÎũŪūĥŝŦŬêŭŮůŰűŲ                           ',
    ' ŰųųŨŨŨŴţţŦŦŦųÏŵŪŶŚđűŦţŦťŷŸŦŹ                           ',
    '  źųŻŨŨŻżųŽŸžƀƁŪŪŪƂƃžŦƄżƅƆƇŦħ                           ',
    '  ƈƉŻŻŻŻųƊƋđśĦŪƌƍƌŶŚĐƎƏžƐƑƒƊƓ                           ',
    '  ħƔƕƔŻŻƉƖƗƘŶƌƍƍƍƍƌŶƘūĥĥŚƑƙƚƛ                           ',
    ' ƜƝƉƞƔƉƔƉƟĦƌƍƍƠƍƍƍƌƌƍƍƂŚĥơƚƢƣ                           ',
    ' ŌƤƉƥƦƧƨƨƩƪƫƌƍƍƍŶŶŶƂƍŶƬƭƮƥƯƋ                            ',
    '  ĳưƥƯƧƨƩƝƮƪūƌƌƫğƒƱƃƫĥƆƮƯƮƇł                            ',
    '   ƲƳƢƮƯƴƨƴƵƶĄĴƷƸƹƥƵƺƶƵƻƮƼ                              ',
    '      ƽƾƻƴƻƻƿǀƤƤưǁǁưǀǀƮǂǃ                               ',
    '       ǍĐǎǏēǐ    ǑǒǓǔǕ                                  ',
], {
    "0" : -4550530,
    "1" : -3773386,    "2" : -1804234,    "3" : -3378628,    "4" : -2969950,    "5" : -4953022,    "6" : -5346250,    "7" : -4558282,    "8" : -3770320,    "9" : -2195914,    " " : 0,    "!" : -5336950,    "\"" : -4940650,    "#" : -6923704,    "$" : -6530488,    "%" : -4154218,    "&" : -3771820,    "'" : -6131098,    "(" : -4562884,    ")" : -2593720,    "*" : -4942192,
    "+" : -3380170,    "," : -2592196,    "-" : -3770296,    "." : -616870,    "/" : -4165054,    ":" : -1804240,    ";" : -5742538,    "<" : -4152688,    "=" : -1801138,    ">" : -219046,    "?" : -219058,    "@" : -217510,    "A" : -2590672,    "B" : -5346238,    "C" : -4954564,    "D" : -2590654,    "E" : -2592202,    "F" : -2983876,    "G" : -3378634,    "H" : -2587594,
    "I" : -610732,    "J" : -1404862,    "K" : -5346232,    "L" : -5343142,    "M" : -3756388,    "N" : -2569024,    "O" : -4943752,    "P" : -3768766,    "Q" : -1011640,    "R" : -5341606,    "S" : -3757930,    "T" : -2195890,    "U" : -4948390,    "V" : -4953028,    "W" : -2570566,    "X" : -4545898,    "Y" : -5736364,    "Z" : -4945288,    "[" : -5343148,    "]" : -4152676,
    "^" : -8101804,    "_" : -5344690,    "`" : -3768760,    "a" : -2587576,    "b" : -2586034,    "c" : -4951486,    "d" : -8891326,    "e" : -2570560,    "f" : -2980792,    "g" : -1398694,    "h" : -214426,    "i" : -1401772,    "j" : -4945300,    "k" : -4550548,    "l" : -2977702,    "m" : -2582956,    "n" : -2582950,    "o" : -4940662,    "p" : -6123382,    "q" : -2979256,
    "r" : -1003942,    "s" : -1791910,    "t" : -4549000,    "u" : -2979244,    "v" : -1796536,    "w" : -1796542,    "x" : -609184,    "y" : -606106,    "z" : -1798078,    "{" : -5344696,    "|" : -1796524,    "}" : -4154242,    "~" : -4160428,    "¡" : -610726,    "¢" : -212890,    "£" : -209812,    "¤" : -4556728,    "¥" : -3373996,    "¦" : -4158868,    "§" : -3366280,
    "¨" : -2582968,    "©" : -1007026,    "ª" : -215968,    "«" : -4948408,    "¬" : -3370912,    "®" : -2191288,    "¯" : -215962,    "°" : -4157338,    "±" : -3363184,    "²" : -4154248,    "³" : -3370918,    "´" : -1007014,    "µ" : -4555198,    "¶" : -2191294,    "·" : -3366286,    "¸" : -3761038,    "¹" : -2977714,    "º" : -1795000,    "»" : -1794994,    "¼" : -3370924,
    "½" : -3767230,    "¾" : -1401778,    "¿" : -615364,    "À" : -1007038,    "Á" : -1793470,    "Â" : -607654,    "Ã" : -1003948,    "Ä" : -1793446,    "Å" : -2572108,    "Æ" : -2189752,    "Ç" : -1401790,    "È" : -2188216,    "É" : -2965336,    "Ê" : -1401784,    "Ë" : -615358,    "Ì" : -1008574,    "Í" : -1791928,    "Î" : -603022,    "Ï" : -206722,    "Ð" : -3369376,
    "Ñ" : -1007032,    "Ò" : -1008580,    "Ó" : -1400254,    "Ô" : -2572114,    "Õ" : -3764146,    "Ö" : -2186668,    "Ø" : -2188210,    "Ù" : -2976184,    "Ú" : -3369388,    "Û" : -3367846,    "Ü" : -2581426,    "Ý" : -613816,    "Þ" : -1002406,    "ß" : -203644,    "à" : -603028,    "á" : -2581420,    "â" : -1008568,    "ã" : -613822,    "ä" : -1398700,    "å" : -1400248,
    "æ" : -613828,    "ç" : -219064,    "è" : -609196,    "é" : -1397170,    "ê" : -1394092,    "ë" : -208276,    "ì" : -606118,    "í" : -1397158,    "î" : -1795006,    "ï" : -1005496,    "ð" : -1005490,    "ñ" : -1397176,    "ò" : -1398718,    "ó" : -1003954,    "ô" : -1003960,    "õ" : -1400260,    "ö" : -1398712,    "ø" : -1397164,    "ù" : -2570572,    "ú" : -1003966,
    "û" : -610744,    "ü" : -211354,    "ý" : -607660,    "þ" : -612286,    "ÿ" : -604576,    "Ā" : -610738,    "ā" : -3363202,    "Ă" : -610750,    "ă" : -1395628,    "Ą" : -202108,    "ą" : -1000870,    "Ć" : -1398706,    "ć" : -3366292,    "Ĉ" : -3363196,    "ĉ" : -2573662,    "Ċ" : -2175808,    "ċ" : -2968432,    "Č" : -1790362,    "č" : -3363190,    "Ď" : -1002412,
    "ď" : -1394086,    "Đ" : -598402,    "đ" : -599944,    "Ē" : -202102,    "ē" : -205180,    "Ĕ" : -1793458,    "ĕ" : -1790374,    "Ė" : -1395622,    "ė" : -1000852,    "Ę" : -1395610,    "ę" : -2183566,    "Ě" : -2576770,    "ě" : -1000864,    "Ĝ" : -599938,    "ĝ" : -203632,    "Ğ" : -603016,    "ğ" : -203638,    "Ġ" : -206728,    "ġ" : -1791922,    "Ģ" : -1002424,
    "ģ" : -2576788,    "Ĥ" : -1002394,    "ĥ" : -202090,    "Ħ" : -202084,    "ħ" : -1392550,    "Ĩ" : -1002418,    "ĩ" : -606100,    "Ī" : -1790368,    "ī" : -1397152,    "Ĭ" : -999328,    "ĭ" : -202078,    "Į" : -598396,    "į" : -1392544,    "İ" : -2185138,    "ı" : -3361648,    "Ĳ" : -1394098,    "ĳ" : -994696,    "Ĵ" : -202096,    "ĵ" : -1787296,    "Ķ" : -1000882,
    "ķ" : -609208,    "ĸ" : -2578330,    "Ĺ" : -606112,    "ĺ" : -2575228,    "Ļ" : -1788850,    "ļ" : -1391002,    "Ľ" : -203650,    "ľ" : -1000876,    "Ŀ" : -607666,    "ŀ" : -607672,    "Ł" : -2578348,    "ł" : -1779520,    "Ń" : -2182048,    "ń" : -606130,    "Ņ" : -1000888,    "ņ" : -214450,    "Ň" : -1790386,    "ň" : -209818,    "Ō" : -3363214,    "ō" : -3361660,
    "Ŏ" : -999334,    "ŏ" : -212908,    "Ő" : -2174278,    "ő" : -2174272,    "Œ" : -606124,    "œ" : -3761080,    "Ŕ" : -3756424,    "ŕ" : -4155820,    "Ŗ" : -1788826,    "ŗ" : -2576806,    "Ř" : -2182054,    "ř" : -999340,    "Ś" : -200542,    "ś" : -598390,    "Ŝ" : -601486,    "ŝ" : -603034,    "Ş" : -999346,    "ş" : -2578354,    "Š" : -2175820,    "š" : -1390984,
    "Ţ" : -604600,    "ţ" : -604594,    "Ť" : -209830,    "ť" : -604582,    "Ŧ" : -604588,    "ŧ" : -603046,    "Ũ" : -211372,    "ũ" : -202072,    "Ū" : -200524,    "ū" : -200536,    "Ŭ" : -211366,    "ŭ" : -2578360,    "Ů" : -3761086,    "ů" : -3366322,    "Ű" : -2182060,    "ű" : -997798,    "Ų" : -1785766,    "ų" : -603052,    "Ŵ" : -211378,    "ŵ" : -202066,
    "Ŷ" : -198988,    "ŷ" : -997792,    "Ÿ" : -603040,    "Ź" : -1392556,    "ź" : -1785772,    "Ż" : -209836,    "ż" : -603058,    "Ž" : -209824,    "ž" : -996256,    "ƀ" : -601492,    "Ɓ" : -203620,    "Ƃ" : -198994,    "ƃ" : -596860,    "Ƅ" : -209842,    "ƅ" : -997804,    "Ɔ" : -994708,    "Ƈ" : -599950,    "ƈ" : -3364786,    "Ɖ" : -601516,    "Ɗ" : -601504,
    "Ƌ" : -205186,    "ƌ" : -198982,    "ƍ" : -198976,    "Ǝ" : -996250,    "Ə" : -996262,    "Ɛ" : -993166,    "Ƒ" : -200554,    "ƒ" : -993160,    "Ɠ" : -1785760,    "Ɣ" : -208300,    "ƕ" : -208306,    "Ɩ" : -598420,    "Ɨ" : -199012,    "Ƙ" : -200530,    "ƙ" : -993172,    "ƚ" : -994720,    "ƛ" : -2178964,    "Ɯ" : -3756436,    "Ɲ" : -206752,    "ƞ" : -601522,
    "Ɵ" : -993184,    "Ơ" : -200512,    "ơ" : -598408,    "Ƣ" : -599956,    "ƣ" : -2570596,    "Ƥ" : -599962,    "ƥ" : -599980,    "Ʀ" : -208294,    "Ƨ" : -206764,    "ƨ" : -206758,    "Ʃ" : -601510,    "ƪ" : -596866,    "ƫ" : -199000,    "Ƭ" : -595312,    "ƭ" : -991630,    "Ʈ" : -599968,    "Ư" : -599974,    "ư" : -205210,    "Ʊ" : -1386388,    "Ʋ" : -2177386,
    "Ƴ" : -1389460,    "ƴ" : -598444,    "Ƶ" : -598432,    "ƶ" : -598414,    "Ʒ" : -205192,    "Ƹ" : -598426,    "ƹ" : -205222,    "ƺ" : -203656,    "ƻ" : -598438,    "Ƽ" : -2177416,    "ƽ" : -2177428,    "ƾ" : -203668,    "ƿ" : -205216,    "ǀ" : -205204,    "ǁ" : -203674,    "ǂ" : -2175892,    "ǃ" : -1777984,    "Ǎ" : -2174290,    "ǎ" : -202120,    "Ǐ" : -202114,
    "ǐ" : -2175856,    "Ǒ" : -2570602,    "ǒ" : -2572174,    "Ǔ" : -2178958,    "ǔ" : -2178946,    "Ǖ" : -2569048,
}, 4);
			return get(0, 0, 148, 220);
		},
		5: function(){
			background(0, 0);
			// fill(255, 0, 0);
			// rect(0, 0, 148, 221);
			Display.pixelArt([
    '             !                                          ',
    '           "#$                                          ',
    '       %   &\'                                           ',
    '     ()*+,-./                                           ',
    '    012345678                                           ',
    '    9:;<=>?@                                            ',
    '    A   BCDE                                            ',
    '          FG                                            ',
    '          HI                                            ',
    '           JK                                           ',
    '            LM                                          ',
    '                     NOP                                ',
    '                    QRSTU                               ',
    '                    VWXY                                ',
    '    Z[]^_           `a                                  ',
    '    bcdefg          h                                   ',
    '   ijklmno                                              ',
    '       pqr             stu                              ',
    '        v             wxyz{                             ',
    '                      |}~¡¢£                            ',
    '                      s¤¥¦§¨©                           ',
    '                     ª«    ¬®                           ',
    '           ¯°        ±²     ³                           ',
    '           ´«     µ¶µ·¸                                 ',
    '           ¹º    »¼¼½¾¿                                 ',
    '           mÀÁ  ÂÃÄÄÅÆÇ                                 ',
    '           È¼ÉÊËÌÍÎÏÐÑª                                 ',
    '           ÒÃÓÔÕÖØÙÚÛÜ                                  ',
    '   ÝÞßàá    âãØäåæÕçè                                   ',
    '   éêëÎìí    îïðñòË                                     ',
    '   óëôõÝ     öòøøùú       ûÂ                            ',
    '   üýÂ%       þÿĀã       āĂă                            ',
    '   ì¶         ÕÿĄą       Ćòć                            ',
    '  Ĉĉ          ĊĄĄċČč    ĎòďĐđ                           ',
    ' ĒēĔĕ         ÛĖėĘøęĚě ĜĝĄĞğĠ                           ',
    ' ġĢģĤ       ĥĦħĨĩĪæģďòīąĘģĬĄĭ                           ',
    'Įįģģģİ     ıĲģğĳĴĵĶæďķĘĸĢĹĺĬĭ                           ',
    'ĻģðñģļĽľĿ  ŀŁģģłŃńŅņŇķģňļŌģģō                           ',
    'ŎŇĨŏŐőŒœŔŕŖŗŘģģřŚńśĵŜæŝŞņşñĬŔ                           ',
    'ŠšŢşĶţŤŘťĺŁŦťŦŦļŧĵŨũŃĵŪŪūŬŭŘŮ                           ',
    'ůšŒŤŰĴņœűŦűŲųűŴŴŘŵśśũśŃŬŶŮŷŷŸ                           ',
    ' ŹŒœæĶźŻŒŒŷŷŷŒŒűœżŽžŨŨƀƁŹŒűŒŮ                           ',
    ' ƂšŒœƃŪŧƄƄœŒŒŒļŧŰƅŨƆƆŨƇŻƈƉŌĩƊ                           ',
    '  ƋŭƌšƍĴŏŵƎţƃŹƏŪśŨƆƆŨńƃƌƐƑ                              ',
    '    ƒŹƓƀƀƀĵƔƕƖƗƔĶƀŽŨĴƃƌƘŮ                               ',
    '     ŹƙƀƆũƚƛƜƝƝƞŻäŃŨƟƠơƝƢ                               ',
    '     ƏƃũƆƀƔƞƣƝƝƤƤƥĶũƀƦƧơƤƨ                              ',
    '     ƏƩƪƀƫƬƭƮƯưƮơƣƩƪƱƪƲƮƖƠ                              ',
    '     ƳƴƵƔƶƷƸƹƺƻƼƽƮƞƶƾƾƸƿƴƍ                              ',
    '      ǀǁǂǃǍĥ    ǎǏǐǑƶǒƁǏǓ                               ',
], {
    "0" : -6132652,
    "1" : -3771832,    "2" : -2589124,    "3" : -1008568,    "4" : -2191300,    "5" : -1796542,    "6" : -1802698,    "7" : -2197444,    "8" : -6528946,    "9" : -5346232,    " " : 0,    "!" : -3356986,    "\"" : -7713226,    "#" : -5349310,    "$" : -4542802,    "%" : -2569018,    "&" : -4166578,    "'" : -6530494,    "(" : -4940656,    ")" : -3771838,    "*" : -3378634,
    "+" : -3770296,    "," : -5744080,    "-" : -4562896,    "." : -2197432,    "/" : -6527404,    ":" : -6527416,    ";" : -6135742,    "<" : -3768760,    "=" : -1403308,    ">" : -1403320,    "?" : -615346,    "@" : -4953022,    "A" : -3360070,    "B" : -4547440,    "C" : -4954570,    "D" : -2192818,    "E" : -2569024,    "F" : -5347768,    "G" : -5336956,    "H" : -3754834,
    "I" : -5343136,    "J" : -8495020,    "K" : -6917536,    "L" : -4149586,    "M" : -4542808,    "N" : -4151140,    "O" : -4951474,    "P" : -5734810,    "Q" : -4945300,    "R" : -1799596,    "S" : -1802686,    "T" : -2584468,    "U" : -4149592,    "V" : -2584486,    "W" : -2194360,    "X" : -6532054,    "Y" : -4544350,    "Z" : -2570566,    "[" : -3768754,    "]" : -2979250,
    "^" : -4949950,    "_" : -6129574,    "`" : -2977696,    "a" : -5742538,    "b" : -2979244,    "c" : -1799602,    "d" : -219046,    "e" : -217510,    "f" : -1403302,    "g" : -6129568,    "h" : -6129562,    "i" : -5733262,    "j" : -4948396,    "k" : -4157314,    "l" : -4555180,    "m" : -1791904,    "n" : -610708,    "o" : -5730178,    "p" : -2567482,    "q" : -2186644,
    "r" : -5335414,    "s" : -4948408,    "t" : -2977708,    "u" : -2581414,    "v" : -4545898,    "w" : -5736382,    "x" : -2581426,    "y" : -212884,    "z" : -1397158,    "{" : -3765676,    "|" : -5739460,    "}" : -1002394,    "~" : -1003942,    "¡" : -612268,    "¢" : -1796536,    "£" : -2189734,    "¤" : -4157338,    "¥" : -3360082,    "¦" : -4149610,    "§" : -4949944,
    "¨" : -2188192,    "©" : -4945312,    "ª" : -2963782,    "«" : -3370924,    "¬" : -5338510,    "®" : -5341612,    "¯" : -2578318,    "°" : -4942216,    "±" : -5341618,    "²" : -3765688,    "³" : -3751756,    "´" : -2186662,    "µ" : -4549012,    "¶" : -3757954,    "·" : -2582956,    "¸" : -4160440,    "¹" : -1793446,    "º" : -2582962,    "»" : -4160446,    "¼" : -1400248,
    "½" : -1400242,    "¾" : -1400236,    "¿" : -4553644,    "À" : -2188210,    "Á" : -2569030,    "Â" : -4154260,    "Ã" : -1398700,    "Ä" : -1007044,    "Å" : -1007038,    "Æ" : -1793452,    "Ç" : -4547464,    "È" : -1791898,    "É" : -2188216,    "Ê" : -3761050,    "Ë" : -3367840,    "Ì" : -1795000,    "Í" : -1793470,    "Î" : -609190,    "Ï" : -1003954,    "Ð" : -1400254,
    "Ñ" : -2186668,    "Ò" : -3761044,    "Ó" : -1005496,    "Ô" : -1002400,    "Õ" : -1790380,    "Ö" : -607648,    "Ø" : -208264,    "Ù" : -209806,    "Ú" : -1397164,    "Û" : -1395622,    "Ü" : -4550566,    "Ý" : -4940680,    "Þ" : -1788826,    "ß" : -1395610,    "à" : -3367846,    "á" : -5335432,    "â" : -3762598,    "ã" : -1003948,    "ä" : -205180,    "å" : -206722,
    "æ" : -603028,    "ç" : -3370930,    "è" : -4151158,    "é" : -4154254,    "ê" : -603022,    "ë" : -211348,    "ì" : -1788820,    "í" : -4940686,    "î" : -2974642,    "ï" : -1790392,    "ð" : -208270,    "ñ" : -999334,    "ò" : -1395628,    "ó" : -3756394,    "ô" : -1790368,    "õ" : -1395604,    "ö" : -3363196,    "ø" : -1002418,    "ù" : -609184,    "ú" : -1781056,
    "û" : -1788808,    "ü" : -4152718,    "ý" : -1788838,    "þ" : -1002406,    "ÿ" : -609208,    "Ā" : -610738,    "ā" : -3754840,    "Ă" : -999316,    "ă" : -4943782,    "Ą" : -609202,    "ą" : -609196,    "Ć" : -4549030,    "ć" : -2971558,    "Ĉ" : -2973076,    "ĉ" : -1000852,    "Ċ" : -2183602,    "ċ" : -215980,    "Č" : -1002412,    "č" : -2973094,    "Ď" : -2965330,
    "ď" : -1000888,    "Đ" : -1394092,    "đ" : -4547488,    "Ē" : -3756400,    "ē" : -607642,    "Ĕ" : -1000864,    "ĕ" : -3756406,    "Ė" : -211360,    "ė" : -606118,    "Ę" : -607666,    "ę" : -1000876,    "Ě" : -1394080,    "ě" : -3361654,    "Ĝ" : -3361648,    "ĝ" : -1790386,    "Ğ" : -607672,    "ğ" : -1000882,    "Ġ" : -999322,    "ġ" : -2183584,    "Ģ" : -607660,
    "ģ" : -606124,    "Ĥ" : -2578348,    "ĥ" : -2172730,    "Ħ" : -3367870,    "ħ" : -1000870,    "Ĩ" : -206728,    "ĩ" : -601480,    "Ī" : -1390996,    "ī" : -2579896,    "Ĭ" : -212908,    "ĭ" : -606112,    "Į" : -4545946,    "į" : -999328,    "İ" : -3759514,    "ı" : -2570578,    "Ĳ" : -606106,    "ĳ" : -205174,    "Ĵ" : -200542,    "ĵ" : -202078,    "Ķ" : -202090,
    "ķ" : -606130,    "ĸ" : -214444,    "Ĺ" : -208282,    "ĺ" : -209824,    "Ļ" : -2970022,    "ļ" : -604582,    "Ľ" : -1788850,    "ľ" : -4154302,    "Ŀ" : -2963794,    "ŀ" : -4155820,    "Ł" : -211366,    "ł" : -601474,    "Ń" : -200530,    "ń" : -200536,    "Ņ" : -202072,    "ņ" : -599938,    "Ň" : -999340,    "ň" : -999346,    "Ō" : -206740,    "ō" : -1392550,
    "Ŏ" : -2971564,    "ŏ" : -598402,    "Ő" : -996244,    "ő" : -1391008,    "Œ" : -603052,    "œ" : -603046,    "Ŕ" : -1787308,    "ŕ" : -4152736,    "Ŗ" : -2965354,    "ŗ" : -1788856,    "Ř" : -604588,    "ř" : -997786,    "Ś" : -203626,    "ś" : -200524,    "Ŝ" : -603016,    "ŝ" : -996250,    "Ş" : -994708,    "ş" : -202102,    "Š" : -3756430,    "š" : -996262,
    "Ţ" : -1389472,    "ţ" : -203638,    "Ť" : -601498,    "ť" : -604594,    "Ŧ" : -211372,    "ŧ" : -599944,    "Ũ" : -198982,    "ũ" : -198988,    "Ū" : -200548,    "ū" : -199012,    "Ŭ" : -202096,    "ŭ" : -1391014,    "Ů" : -603040,    "ů" : -2569036,    "Ű" : -203632,    "ű" : -209836,    "Ų" : -209842,    "ų" : -211384,    "Ŵ" : -211378,    "ŵ" : -993154,
    "Ŷ" : -205192,    "ŷ" : -603058,    "Ÿ" : -997810,    "Ź" : -601504,    "ź" : -595312,    "Ż" : -601492,    "ż" : -993148,    "Ž" : -200518,    "ž" : -200512,    "ƀ" : -198994,    "Ɓ" : -1387918,    "Ƃ" : -2968474,    "ƃ" : -598408,    "Ƅ" : -996256,    "ƅ" : -199000,    "Ɔ" : -198976,    "Ƈ" : -199006,    "ƈ" : -208300,    "Ɖ" : -208294,    "Ɗ" : -1389430,
    "Ƌ" : -2966914,    "ƌ" : -601510,    "ƍ" : -596860,    "Ǝ" : -596854,    "Ə" : -599956,    "Ɛ" : -209830,    "Ƒ" : -1787296,    "ƒ" : -2965378,    "Ɠ" : -599950,    "Ɣ" : -596866,    "ƕ" : -206746,    "Ɩ" : -599974,    "Ɨ" : -598426,    "Ƙ" : -601516,    "ƙ" : -993166,    "ƚ" : -596842,    "ƛ" : -993178,    "Ɯ" : -206758,    "Ɲ" : -599980,    "ƞ" : -599968,
    "Ɵ" : -202084,    "Ơ" : -993172,    "ơ" : -205222,    "Ƣ" : -2178988,    "ƣ" : -206764,    "Ƥ" : -206752,    "ƥ" : -599962,    "Ʀ" : -991618,    "Ƨ" : -993190,    "ƨ" : -2966920,    "Ʃ" : -596884,    "ƪ" : -199018,    "ƫ" : -200560,    "Ƭ" : -991648,    "ƭ" : -598444,    "Ʈ" : -205216,    "Ư" : -203674,    "ư" : -203668,    "Ʊ" : -197464,    "Ʋ" : -202126,
    "Ƴ" : -599926,    "ƴ" : -203656,    "Ƶ" : -991624,    "ƶ" : -991636,    "Ʒ" : -991642,    "Ƹ" : -596878,    "ƹ" : -1782676,    "ƺ" : -3360136,    "ƻ" : -3361672,    "Ƽ" : -1784218,    "ƽ" : -205198,    "ƾ" : -595330,    "ƿ" : -598420,    "ǀ" : -2174272,    "ǁ" : -2968462,    "ǂ" : -1782682,    "ǃ" : -1387924,    "Ǎ" : -2177416,    "ǎ" : -1779514,    "Ǐ" : -2572174,
    "ǐ" : -1782688,    "Ǒ" : -1386400,    "ǒ" : -1386388,    "Ǔ" : -3360106,
}, 4);
			return get(0, 0, 148, 220);
		},
	},
	hearts: {
		full_heart: function(){
			background(0, 0);
			Display.pixelArt([
			    ' !!!  !!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    ' !!!!!!!!',
			    '  !!!!!!',
			    '   !!!!',
			    '    !!',
			], {
			    " " : 0,
			    "!" : color(255, 50, 20),    "\"" : -626116,
			}, 20);
			return get(0, 0, 200, 160);
		},
		half_heart: function(){
			background(0, 0);
			Display.pixelArt([
			    ' !!!  ...',
			    '!!!!!.....',
			    '!!!!!.....',
			    '!!!!!.....',
			    ' !!!!....',
			    '  !!!...',
			    '   !!..',
			    '    !.',
			], {
			    " " : 0,
			    "!" : color(255, 50, 20),    "." : color(0),
			}, 20);
			return get(0, 0, 200, 160);
		},
		empty_heart: function(){
			background(0, 0);
			Display.pixelArt([
			    ' !!!  !!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    ' !!!!!!!!',
			    '  !!!!!!',
			    '   !!!!',
			    '    !!',
			], {
			    " " : 0,
			    "!" : color(0),    "\"" : -626116,
			}, 20);
			return get(0, 0, 200, 160);
		},
		flash_heart: function(){
			background(0, 0);
			Display.pixelArt([
			    ' !!!  !!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    '!!!!!!!!!!',
			    ' !!!!!!!!',
			    '  !!!!!!',
			    '   !!!!',
			    '    !!',
			], {
			    " " : 0,
			    "!" : color(255),    "\"" : -626116,
			}, 20);
			return get(0, 0, 200, 160);
		},
	},
	misc: {
		redwood: function(){
			background(0, 0);
			Display.pixelArt([
			    '!"#!#$$$%$$$&\'()##"#\'\'$#"',
			    '$"#!$#*$+&$$$#\'*##",\'-$#+',
			    '$+#$,#**\'#$$$-\'*("##\'"##&',
			    '!#"$$#$*#"%$*\'\'$+#&"($$"$',
			    '$+##$\'!$\'##.$\'$%\'!""+$%\'$',
			    '!"#"*/0""##."\'0"/$##+""1*',
			    '##""$/""#####\'*#/$#"\'##\'*',
			    '$2$"*\'#$##+#0\'$\'\'*#+2""\'$',
			    '#.$+*\'"!#!+$"3##\'*#\'#$"\'*',
			    '"#$#*\'+"+$##"$""\'*#"$"$\'$',
			    '#+$#!#$\'+$"""$"#\'$#"0\'$\'$',
			    '$\'$#$$"!#*"""$#$\'!#"#"$\'$',
			    '0\'$#""#"#*##"$\'"+"#$"\'$\'#',
			    '\'\'\'$##$"###"#$*"3*4$#$$"#',
			    '\'/"$##$+###"""*\'/#$$#$"$,',
			    '\'/"$""$+##!"#(5$\'"$$#$""$',
			    '\'/#$+#.\'#"$##+$"\'(#&"$"#"',
			    '\'#$#"#*\'\'!"+0\'$&\'(#3""#!\'',
			    '\'#*\'+#*\'#!++#",\'+(#/"""$#',
			    '/#$\'++$/"$++$""##(#\'""!$+',
			    '3$4\'"+$\'#$\'+$"#0#+2""+\'$\'',
			    '+$+\'$"$5"#/*$"2"$##\'$\'+4\'',
			    '+$\'/"#&$$(/*$$##$!"\'$2+*/',
			    '+$\'/$#"$$\'/,$.#($\'&#$#+*/',
			    '#4\'3$#"!$\'3!#*#"$$$"$"\'$3',
			], {
			    "0" : -6268366,
			    "1" : -7584206,    "2" : -6273496,    "3" : -7586776,    "4" : -4955076,    "5" : -5610446,    "!" : -5613016,    "\"" : -6270926,    "#" : -6270936,    "$" : -5613006,    "%" : -6268376,    "&" : -5615566,    "'" : -6928856,    "(" : -6926286,    ")" : -4952516,    "*" : -4955086,    "+" : -6926296,    "," : -5615576,    "-" : -6928846,    "." : -4957646,    "/" : -7584216,
			}, 9);
			return get(0, 0, 220, 220);
		},
		redwood_floor: function(){
			background(0, 0);
			Display.pixelArt([
			    '!""#$$!$!!!!!%&\'$$(()$*$*+$$($$,$$,-!!&&&&&&',
			    '...*/00122321.141521222426172811.1.955.7271.',
			    ':92/01232;1<121111==11122/100.22>33>3?@331.:',
			    '52>A114;33?32B2;;1;;33@;762501112;>333>;2710',
			    '332111..1=2@32CC.2772;8222222828D:E11;28.01B',
			    '.00.17;1.0/00...221..10..18...11.....112;27.',
			    '233>2;17251211C.1F822B228287..9CC.G.1111121=',
			    '2222BB221..72@DEAED.G...GGF.F...D..D22B@222H',
			    '1.17.10:C:21.31.131A.11.111..1..711..182320I',
			    '21==.72811.111.552?2.51=77217.75.2322..AAC1I',
			    '3322190.90172B@22;1.11.51..125102@210./AAD=;',
			    'J-$!E%%%%---(K((!!!!"""!!!----$!!$$$$"$L(,$$',
			    ';;>;2;;>>MM37;;>23?MNMM3?33>M??342O3??;;3??M',
			    '3;;4;;;;4;14;4;>3O>>;>>332>3333;>>;>>;14;;;>',
			    '7;1151<11;1123>2322>>>33M?M3M?M33311;;;241;7',
			    ';3M3333332781=5500000004;32;>;>;3MNMMM?3;;O;',
			    '?3@3>3333;221;;<1117712MMPM;;MM42>33OM3>;OOM',
			    'QB3M3@33333415;@3311<1;;>MM>;@10=5072221;=..',
			    '2=D.C9....CC...F..FF.G1.1.1.1.90C.@222222222',
			    'PRNMMMMMM?MMM;11.1118717271717.7177888G44MMM',
			    'OO>O>>4O;;O3>;>O2..1...005511187F1..1.G3O>;>',
			    ';;>;;2;4O>4>>;44F21./:0222215087BF189..;;;;2',
			    '$$($$$,$SS-$$**$$$K-$-T(((UVL($$(($*($JK$(((',
			    '12;B@322;;1.1111.11111.18..1..1122>2;23;;2;;',
			    '71..55..00..9..0CC0C0000000...0.111.11111781',
			    '77F781;2210WW..9...=05;221.....9111117111722',
			    '9..;;;2;21=113I1/2>M205117;..780::::C00DC...',
			    '0.2332?333321<<055505=;1700C::90.80..2@7C/X/',
			    '.11>>MI311111111171111;;;::=0.@2.XY.12@70:..',
			    '8FC21222@@3;112222222222ZC/:D..I8EAG@ZGA882I',
			    '0727...277219.5)44>>>>;>2>>;;15555111"N11119',
			    '72;7.5==5=..113(111.55=5..5=500121;;;[85.171',
			    '11==5177119011;*41;111=55=2?>;7=..051L117222',
			    '"*]L*-E^-J$((T(,-,,*+)_^!!$L]+"!%!S(UT(($*S"',
			    '0.G2271900555000571;;>21D98.:01?20A8I;155C0:',
			    'C:9;;;;;211;2111;1;;;;;2C;3;771:1322XC22.C:0',
			    '...223333211412;23M?@332H7.1/.;1.`1B.0.2CCD.',
			    '111122222222B2222111@?32;2...123M??@>2222222',
			    '?>.5001.171=...0Y00.>>3;;1151;2111;;211111??',
			    '.9000511;2771.0005;3@3222211=50091.1.=111132',
			    '82122@@@3@3288227;82G8Z22@81...GF822FF.C0881',
			    '&11;>>>;42;>;;4;>3MMM;&11112>=143M5a3N>50;21',
			    '-?M>O1;>;;;;>3>;;;44;4!51<5=;3333;;1=5550:=2',
			    '$2;;111<1551;44;;2;;4>$>3N?>>>1;3>33333>>333',
			], {
			    "0" : -10213366,
			    "1" : -8900076,    "2" : -8242146,    "3" : -7584226,    "4" : -8244716,    "5" : -9558006,    "6" : -12182006,    "7" : -8897516,    "8" : -8897506,    "9" : -9557996,    "!" : -10871276,    "\"" : -11529206,    "#" : -12187116,    "$" : -11526636,    "%" : -10213346,    "&" : -10215916,    "'" : -10873846,    "(" : -12181996,    ")" : -12184556,    "*" : -12184566,    "+" : -12842486,
			    "," : -11524066,    "-" : -10868706,    "." : -9555436,    "/" : -10871286,    ":" : -10868726,    ";" : -8242156,    "<" : -8900086,    "=" : -9555446,    ">" : -7586786,    "?" : -6928856,    "@" : -7584216,    "A" : -11526646,    "B" : -8239586,    "C" : -10213356,    "D" : -10210796,    "E" : -10868716,    "F" : -8900066,    "G" : -9555426,    "H" : -8242136,    "I" : -6926296,
			    "J" : -11526626,    "K" : -11524076,    "L" : -12839926,    "M" : -6928866,    "N" : -6270936,    "O" : -7586796,    "P" : -6273496,    "Q" : -10213376,    "R" : -6270946,    "S" : -11529196,    "T" : -12181986,    "U" : -12837356,    "V" : -12839916,    "W" : -10210806,    "X" : -11526656,    "Y" : -10871296,    "Z" : -8239576,    "[" : -10215926,    "]" : -13495286,    "^" : -9557986,
			    "_" : -10871266,    "`" : -12184576,    "a" : -10215936,
}, 9);
			return get(0, 0, 220, 220);
		},
		grass: function(){
			background(0, 0);
			Display.pixelArt([
        "     a                                                          ",
        "    aa                a                                         ",
        "    aa           a   aa               a                         ",
        "    aa  a   a    aa  aa  a            a                a       a",
        "   aaa  a   ba  aaa  aa  a            a    a           a    a  a",
        "   aaaaaa  aaa  aaa aaa  a          a aa  aa  aa   a   a    a  a",
        "   aaaaaa  aaa aaaaaaaa aa  aa aa  aa aa  aa  aa   a   aa   aa a",
        "  acaaaaaaaaaaaaaaaaaaa aa  aa aa aacaaa  aa  aa  aa   aa   aaaa",
        "  aaaaacaaaabcbaaaacaaaaaa  aaaaabaaaaca  aa  aab aaa aaaa aaaaa",
        " aacaaaaabbbbababbbbbbbabaaaaacccacaaacaaaaa aaaaacaaaaaaaaaaaab",
        "aaaaaababbbbbabbbbbbbbbbbaaaabbbaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaa",
        "aaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbaaaaaacaaaaaaaaaaaaabbbbbb",
        "aaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaaaaaacaaabbbbbbbbb",
        "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaabaaaaabbbbbbbbbb",
        "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "bbbbbbaadddddddabbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbabbbbbb",
        "bbbbbddddddddddddbbbbbbbbbbbbbbbbbbddddddddddbbbbbbbbdddddddbbbb",
        "daabdddddddddddddddaaabdddddddbbbbdddddddddddddbbbbbdddddddbbbbd",
        "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        "ddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        "dddddeddeeeeeeedddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeed",
        "ddddeeeeeeeeeeeeeeeedddddddddeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeee",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffeeeeeeeeee",
        "eeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeff",
        "efffffffffffffeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffff",
        "ffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff",
        "fffffffffffffffffffffeeeeeeeeeefffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    ], {
        " ": color(255, 0, 0, 0),
        "a": color(28, 105, 13, 255),
        "b": color(32, 117, 15, 255),
        "c": color(25, 94, 11, 255),
        "d": color(108, 79, 21, 255),
        "e": color(121, 88, 24, 255),
        "f": color(96, 70, 19, 255),
    }, 10);
    		return get(0, 0, 640, 610);
		},
		evergreen: function(){
			background(0, 0);
			Display.pixelArt([
    '                     !                      ',
    '                     "                      ',
    '                   "#$%&                    ',
    '                   "\'($%                    ',
    '                   "\'($(                    ',
    '                   "\'($(                    ',
    '                   "\'$$%                    ',
    '                 )*"\'$((&+                  ',
    '                 "",($(($&                  ',
    '               -"".((($$$(&                 ',
    '              !"/%%$$$$$$$(0                ',
    '              "".11$$$$$$$%$2               ',
    '            34546"788$($$8"",*9             ',
    '            :;:4<".((%%$$(,"==>             ',
    '               4?"""""&$$$(&                ',
    '             >>-""@%%%($$$$(                ',
    '             "",""7$$($$$$$$$%              ',
    '           *""""#$$$$$$$$$$$$$%&            ',
    '           *".771$$$$$$$$$$$(((A            ',
    '         *","((($$$$$$$$$$%("""7*B          ',
    '       C:DEEE55"/8($$$$$$$FFFGHGHI?J        ',
    '       K44444457#(($$$$$$(FFL"IIIIIJ        ',
    '              "*"".($$$$MMNFO               ',
    '              "/""@%%%%8O,PQ7               ',
    '            -"R$7"""""""""88SS              ',
    '           B""$((%#"""%$%%$$SS8T            ',
    '           ",,$$$(#"""($$$$$88SU            ',
    '         """(($$$(($$$8$$$$$$$88VT          ',
    '       9W"\'%$$$$$$$$$$$$$$($$($$$(&         ',
    '       )""A%%%(($$$$$$$$$$(2%%%(%%$X        ',
    '     :4EEE44E",1$$$$$$$$$$((*""""*"""       ',
    '       DEEEEE",71$$$$$$$$$7,""""""")        ',
    '       YKKKEE"""\'%($$$$$((""""""BBB9        ',
    '           ZE"""""/$$$$$,,""""")            ',
    '           ??""##"7####\'""""##/#            ',
    '         *",""[$$,"""""""""78SSVVT          ',
    '       9*,"""8$$$$%,""(%%%(%]VSS$VU^        ',
    '       *"""[O$$$$$$7""1$($$$SSS88S8_        ',
    '     )"""""(($$$$$$$$$$$$$$$$$($S$SS8       ',
    '    `55""""""($$$$$$$$$$$$$$$$RRRaRRa7@     ',
    '   !b?b*"""""%%%%$$$$$$$$$8%%%O,"cRRRR7     ',
    '  KDEEEEEE5"""""\'$($$$$$$$",,,7"5b555b55d   ',
    ' eDDDDEEEEE??"""77/$$$$877""""IIb55b55554>  ',
    ':4D4D44EDEEDE""""".((((("f--""5b5555g?b5??  ',
    '       4EEEEEEEEED55555555555555bbb`        ',
    '       :444E4E4444EbbbDbgb5?555b?4?:        ',
    '           DEE;    hiijj    ??g?            ',
    '                   hkijl                    ',
    '                   hkmjl                    ',
    '                   hkmnl                    ',
    '                   hkmnl                    ',
    '               ohhkpnllllllq                ',
    '            rsthhokipmnlllll                ',
    '            ohhhhhuimkqlllllllv             ',
    '         hoohhhhhhkmmmmpmmmppppwps          ',
], {
    "0" : -10440608,
    "1" : -13586384,    "2" : -13582288,    "3" : -15712256,    "4" : -15708144,    "5" : -16752640,    "6" : -14651376,    "7" : -14643168,    "8" : -12533696,    "9" : -12554176,    " " : 0,    "!" : -10448800,    "\"" : -14647264,    "#" : -13590480,    "$" : -12533712,    "%" : -12537792,    "&" : -11489216,    "'" : -12541904,    "(" : -12537808,    ")" : -13598672,    "*" : -13598688,
    "+" : -11493296,    "," : -14647280,    "-" : -14651360,    "." : -13594592,    "/" : -13590496,    ":" : -14659552,    ";" : -13610960,    "<" : -14655472,    "=" : -12550080,    ">" : -11501488,    "?" : -15704048,    "@" : -13594576,    "A" : -12541888,    "B" : -13602768,    "C" : -14663648,    "D" : -15708160,    "E" : -16756736,    "F" : -16744448,    "G" : -15699968,    "H" : -16748544,
    "I" : -15699952,    "J" : -11505584,    "K" : -15712240,    "L" : -15695872,    "M" : -16740352,    "N" : -16740336,    "O" : -15695856,    "P" : -14639072,    "Q" : -14639088,    "R" : -15691760,    "S" : -12529600,    "T" : -11485104,    "U" : -11485120,    "V" : -12529616,    "W" : -12550096,    "X" : -10440624,    "Y" : -14663664,    "Z" : -14659568,    "[" : -14643184,    "]" : -11481024,
    "^" : -10436496,    "_" : -10436528,    "`" : -14655456,    "a" : -15691776,    "b" : -15704064,    "c" : -15691744,    "d" : -15708128,    "e" : -10452896,    "f" : -13602784,    "g" : -16752624,    "h" : -11522032,    "i" : -10469344,    "j" : -7315408,    "k" : -10473440,    "l" : -6270928,    "m" : -9424864,    "n" : -7319504,    "o" : -11522016,    "p" : -9420768,    "q" : -7319488,
    "r" : -10461104,    "s" : -9412528,    "t" : -9408432,    "u" : -10473456,    "v" : -7315392,    "w" : -9420752,
}, 4);
    		return get(0, 0, 161, 220);
		},
		dungeon_floor: function(){
			background(0, 0);
			Display.pixelArt([
    '!"#$%&\'()*++,+*-./,00/,123456789:;7<=->?@ABCDEFGAHAIJKELMNO)PQR)SSTUVU\'+WX',
    '+(++YZ[]^[__`+3a_b((YY--b+c8d$e6fdg8hijklmno[pqrs(4:t0uv)wQ)Y(x:.%y$d0+U/z',
    '`+{|y$3+u33Ot:O^*[`/b-+`/Q}~x8exy$:¡¢£Rjj¤[--(¥¦f|{tyfu+-:§O+~:yfyf¨6gU-++',
    '©©{§.$+,u+0ªª~Uw`«b0b(bY/Y9¬¡e;$gxf®9¯*^°*/`_-±²ftx~~:,U`£³]+ft~tf´µ6¡(ªY3',
    'Q+|b§e0W¶·t¸·¸¶\'¹º`»/+§+¼½¾}¾x¡¿g$À6¬+ÁQYOÂÃÄÅÆK%®%fyfÇt+È_Q3É±±yÊ}E8Ë¡¶Á»',
    'ÌÍ&AÎÏDÐÑÒÓÔÕÖØÙÚÛÜÝÞßÙàÙáâãäåæçäèéêëìíéîéïðñòóôãõöøùúûàààáØüáÙýþÜÿĀāLĂăĄE',
    '0tą:ąttvffĆ\'YTº]3*)ćĈĉĊċČčlĎº¤º7qďT]]^+`YĐ20©PđĒď^º*ēÄ3+::/YOUĔĕ:Y3*^]-`-I',
    ',fąf¡yfty:ĖObT[*O`^*°:ė]P_O+3««7ĘYbbb_(ªYę¨,(U_+©_]QĚě3Y.|\'©bO/ÄuO)RO+QTYĜ',
    '§:fxtft||{ĝ]bY^*ď*º¼*ĉ¤Tď-++/©O:½ªU\'U`b+]Ğh|\'\'b``+(UğĠOY333TTTġĢf3©)bU+^3ă',
    'T§t|Yuyĉ.vģ*-Q+O©T_*£Ĥj^\'(W/Y33ĥYQ`(U\'U\'+¹8ª+º^//+,2x%U33,033_t]ª3_TTQQ_ď$',
    'ĦħĨĩäÙĪīöäÙĬĭĮĪįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁŁłŃBģńŅņŇňáŌōŎŏõŏéŐőŒőœŔŔîŕŖŗŘřŚþÜŅÔēśŜŝ',
    'ŞşŠšvdtŢQ°ţ^ŤťŦuŧŨũŪūŬÁtg¡Ā®fŭd¿¡ŮůŰűYUª3ŦÆŦ§Ųų<W·Ŧ\'WŴ¥ŲŵŶ§±Èŷy¡WŸŴ~ŅŵvĞÆĉ',
    '\'-©]`d8y+O*O[-(.}%®ą¡ffttgŹźąf%%¬$ą8ŅŻtt:Y0,+Y`6ffft:%tª:ĥ+xątªt%~tżE+Y+.t',
    '+`_-Qdh%\'+TU[`Yġ9ŭąxxff|:gÖxfuªu~:t:5:tftb`+Y_^Ž~%:t:v{.48:ž~x..ª\'¨µ93U{ªv',
    'Q`-YYftfsġb0QƀƁ+Ż¾É:ªt:{ftăU(/+3Y:ªf$fy:vbU/++[ŽªªffƂ.((bƃWxx:±ŷÇąf~d3-+Tĉ',
    'uYƄ((ƅIƆIƇ=ƈƉƊƋƌ<L@J@vt:Ƃ|ƍQº^Ǝav+/f¡ĉwƏt(§+3v^JĐŤƐƐƑ¼ėďƒMƓƓNłdeJĥƔ8¨/ªÉ3-',
    'cĞ^P^ďƐčnnƕTƖOÄƗ_ƘƙƚėpƛĘ½ƜŠƝÆƞƟƠƙơƢŠ¹ƣ`ÂšƤ1ƘƞƥƦƧ¹šÂųƨƙƦƩÆÂƖƪƫƜ^ĉƬu`ƙÂěƭjoƮ',
    'AƯư_Ƃ3Q]*ėƱ+`§+¸É2OƲºƳ½YƴƵ»u/Ŧ`ƶ|ƵƷƷƸ+Æƴ¹Æ8Ƹ`+ƸÈ\'3QTƹƺ+Ʒ+u{§_+.ƻWŷ+UÆŵěº¤Ƈ',
    'Ƽ-3OO3]*Đ«Ʊ|`YU+3u-`¥ƽ`-U.tª3+-Xt+ª(WYQY+ª8U+-uÈYT]b?\'+bY++-T©Yô+ĉO_Q^PĒđƾ',
    'ƿTwĉ[Ta°kºǀbvƂ-w`-TVÄǁvĉƄĉġ+ę*3ł|/bQYYǂT¯Èē_-QĉvĉTǃwƈ+ŷ+vƂ§Ƃa£/@.³*a)«jĒđǍ',
    'ǎājǏǐǑǒǓǔǕǖǗƀǘw£Ē[Ǚ[£Ɣaaǚwwǃǚ-*@4¼ġǛ-ġǜ£-wdƂǝwpwǞǝ[£ǟǠǡǢƀǣǙǤǒǥǦǧ@?ƀǙǙǒǨǩǪǫ',
    'ĊǬǭĊĊ&đĊǭǮĎĊǯċǩǰljkjċ°*b_^ǱmĐǩǲǳǥǐ[čjaƑƑć°kǭǴǵǶŽ**]TTĎĎĈǷǀ-Y(-*Y..|»°čǸnǮǪ',
    'ǹĐ°«ǷǺ°[ºRĈǯº*jǻ`ǼQ**[]*+ǽǾ*[ė°¤đĐ£čj+Y`-RºjęǯċEY]]T[Y3P[Ə%.::\'bg.vƺ:ėT[jđ',
    '^R)-*þ*O)_]*ďOYč\'*3)]ǿT*QǼÍTď*T[)©)*TÈƁOT*Q)^3Ť&`\'OT,b(OOV6yªf~yUt.ŲȀT*ė[Ď',
    ')^°ºkÕ(]*[©ď^*«¤WYQ3©ď3^PǼü3Q[ǿ©^^T[«:ĉ(---©^©ÈA++/uW+YYYƂ¬ytvfvO3|,ȁQ)ėĐė',
    'č°jnċğQ*TknȂĎ*Pȃ-^T[qaTVȄǚȅƏȆjȇlȈ[ȉȊ*´YĉŤ.ŤťǹƁOȋ¸+.TƧy\'Æ`§Ê¨ȌȍtŭgƻąȎµºȄĊºº',
    'ƃđǏǓ*[Ɯ^ė^XjĐǀ[¼ȏ[jȆĐĥ0Ȑȑ:Ĥġ0¸ąŅȒȓȔd:ȕȖƻ¨ȗȘd´ș¨ƂǞƂȚțdbVġǢ0dȗvƂǒȜ6d;ȝȞȟNƔ¨Ƞ',
    'dj«Đ)*)*``Ǣ`^]ĐĐď)¤°ȡŭ~tąf:f%ąȢĄȣ¡|xy%xg¡xþ¶x%t$Ĕ0~fȤÈb,:g%xf¡$ôx¡6¡xt%t%ȥ',
    'Ȧ°j[`^º*©+ĥ3Oďėġ(©^O*5t{xyt{:$%B$y.tyxfą$¡&x$y8¢¡f~¡²¸,0%~tff$¨ȧ6¬¬fą$fxfō',
    'ȟčTĈǿ_*º°©Ȍ3ijđĒº[)©Ȩ8tU,\'0+WxąŽȜ:Ƃttxf$fąĝ6~|~5ů¬¡$$Ÿb3,%fuWgfȩ´ą¡ąg~~x~A',
    '4ȪĊĐºTǯlĒ(ǞǽkĎĈĒęĊĒȡqȟtb+`Y(`.y%ª|fv+3\'+(tȒtytƬ¡®fut¨Ŵ]*Yft+(ttô¨fą$%~~%xȥ',
    'nȫĐǀiǟ[ǓǭǩȬȭǑǨȮȯġǞĤƈĉǜǲǀǛ@ƶĚƃȟ$ȰŶNȚȱȲ9ȩ8ȱddȱƔeȳģȴHIȵMMȶĚȷȸƽē¢ȷMǎȹȺ$^ȁnȫmǳǓ',
    'RǿP¤UȻkĈǷė^©*ď°v/Ƃ*YQ©Uď[¼Ƃ]^ȼTqR«Ĉ°-¨1,/ª/uy{Ƭ9SĠŤȽ©^PºQfůȾ3Y,O*`ªªǛjđĎċǒ',
    '«¤]]1Ī°ė«**Y]*-(-YQ)-/+P_`Ż[)+P-ª3]+_ǞOY(yª,.~u8*Q-3bª0\'2¨t+QYQ\'fv\'ȿYT°Đ*P',
    'ººď30AǯĒljQQ^`YyQ**^©+Y(`©´_]*`-3Tb-/d-`-|:ª/{\'¢PR``Tb©^-Ɣfŵ©[3-:tT¿w«ĈǸj^',
    'Ĉ[ďO+ȷĎǯ°ĈĒ)º[b`ĐQ)*3-`O`-$ėiĈj)*)_qƄwYU]ŵŵ++bƴcjċď^*^U,,Ĕȗ3+(*Q)\'Ƅ¿ɀ[kjjP',
    'EȸŭȌƔɁMǙȚɂɃ4ȐɂɃ!ɄȗȐɃǡɅɆȬ[dwɇɈ«ɉƔƂāȀśǟɊNȶēô<4Ɠ@ȷɋĖɌ@ȐɍŁƓȐƔd<ȤȖƌɎɏͰɉǘ0ǘƊǤǟͱͲ',
    '9§3]*©T¤ĎjǔT©**ºđĐP[Ȩġ_©^PO*ºǯǸēh~¡ągąfąȣ¢ü(+3Y_-Q/,;2\'YY+U+\'-bͳ{|/bÉª$:.ý',
    '&_Q/0Q-*^*Ǥ³TUº^jk)Qėȱb]bďO]ĈjĊģ¢fª{%u,f$ȷʹ|b\'(Y(+3+¬1UUªWU+\',\'Ͷ~t%txȌȗƻ¨ͷ',
    'rƁ3_`^T3YYƄͺ]°RTƑďOͻƁȟ/*©)O+OºPôȢf%ªª|§~fcͼÇ+//ª\'-uÉJ¶ą.0,+Y(\'*Ů|:xxgf%g%ͽ',
    'r_ÉY(O©(tWȗŷ½3]©¥^(ą®6f`ĉ_`Æ\'+TĜŰg~+.t0:{ȝͿt+bŵΆ-+,(LW0ȾY0Ƅ(`++Ȝ{tÇfΈg¡$¬Ή',
    'ȤŖȒ&ŖΊÐŖàΉΌÙÙÜΎÞßȥÑÑΏΐÑÒEB99ΑΒrΓǺΔÙΐÕΊȴΑ;ēňŽƔ@Žhs<JΕŖàȸΊŖŖȻÔΖß"ĄΊÍþþΗΐßAßͽ',
    '[OTT¤ΘÉ§ƁÆƁ3|\'¸ujǿ^*QΙđk*T}ȊȊ^ǿjȃ^ČΚΛŤƁ+È-ĉ`Qb+Μ\'`-bÆƬ\'Ä¥ŷΝtU|{¶$ƻx¿á©q*Ŵv',
    '30T3ΞÜtvUbt{{f:0**]T[ĒĒ^ºȡģ«ĈĈ[j*[Ǹnn/:||ąªĔÉ/ƸKb(\'Ĕ:ªª/Y£xttf+É.¨98ßQ/+U+',
    'uª-\'*Ο:fª:ªą6žxȌǢŤ©Q-_-Æ3ΠB+OTƄ©3ĒđP^:Çąą$~ttª:ȸ3`U\'+U0`+Ρ5¢g$6x´Σȸ9Ø*b.0t',
    '~:Uª*ú¨$¡¬d5$8¡6wŠvtÈ((§+0Õ%ąª:ĉĉQ^_|Ȟ:f$¡%x¡ąd"\'+Yª+(,+_ȱŌǎ8ē;5;ΑEȸΤ0+.xf',
    'ȕǞɇŶŜéΥΦGΧĖƆņØIΨΩΪŶEŶ=ΫƔάέήȲȺġƈƔƹY-ίΣΰŜe7ŶαȜβγŅü:ƀǣǢwȐġ:ƔMδεGζζáηͼθικ?Ɣλμł',
    'ν°°ţ_¥^nǬnξy:ª00ªy::u$aƑοŤπ[Ę/Ʋ*ρς_Ť)Ġ)zƗ°%ƯŦť_._^¥ĠyąΈσƧW±§/`VŶΈgȟtÈƁ¥+aN',
    'ȸj-TÉOOYǂQƐ¾xą%ą$t$yÈτR^kǓ«ĎĐjº[°[Oď*O3/|Ɓ8_©v{{U-ƄƄ:ŬΈt.:hhąž4ͳ2~:,Y+OY+~',
    'HpP*-*+,ª*w¾®ygy¡gf~fυ)¤R©3`φOOǡĐjQ-T_-OUťs*Y+{y_*O,sΈt%tf6;¬ů4ȓ/fWU-%,bOȜ',
    'χ\'Qb_½`QÄ`ŶȜȣźµąxxdd$ψ`ͻ`Ų``+ƁzǞȊqb¥)ÆƯƴÈY6[Ȅ_Ɓt3Ä*ŴtĔ,ωƯϊÇϋȟ$:Ω¬0t§`-/3`Ȝ',
    'ό´O***Ť¥ƁÈȱɌȸh¬¬69ŅύώMYÄƁσŲŠÅ+Ä´TT)ƘÄ`TÄ¥¯¢ΆƲ_ϏϏĠ`,ªƻ0ª¸ƖƖϐϑžƻƓ6ddȌ0,b+ÈUŇ',
], {
    "0" : -9799018,
    "1" : -10324846,    "2" : -10324848,    "3" : -9009500,    "4" : -9667946,    "5" : -10983806,    "6" : -10457974,    "7" : -10062704,    "8" : -10720634,    "9" : -11115392,    "!" : -9142116,    "\"" : -12037008,    "#" : -11114878,    "$" : -10589046,    "%" : -10456946,    "&" : -11641738,    "'" : -9666916,    "(" : -9666918,    ")" : -8351570,    "*" : -8483156,    "+" : -9404256,
    "," : -9798502,    "-" : -9009502,    "." : -9535844,    "/" : -9535332,    ":" : -9799530,    ";" : -10589560,    "<" : -10589050,    "=" : -10062706,    ">" : -9141604,    "?" : -9667434,    "@" : -9931120,    "A" : -11905424,    "B" : -10983808,    "C" : -11115396,    "D" : -10720638,    "E" : -11246978,    "F" : -11509640,    "G" : -11642254,    "H" : -11378568,    "I" : -11247496,
    "J" : -10325878,    "K" : -11904906,    "L" : -10852224,    "M" : -10456950,    "N" : -10062192,    "O" : -9008986,    "P" : -8087884,    "Q" : -8877402,    "R" : -7825226,    "S" : -7167294,    "T" : -8746328,    "U" : -9535330,    "V" : -8877916,    "W" : -10062186,    "X" : -9799532,    "Y" : -9141088,    "Z" : -11904910,    "[" : -8351572,    "]" : -8614740,    "^" : -8351056,
    "_" : -8877400,    "`" : -9141086,    "a" : -8352084,    "b" : -9272672,    "c" : -11378562,    "d" : -10457462,    "e" : -10325876,    "f" : -10193774,    "g" : -10457460,    "h" : -10852220,    "i" : -8483158,    "j" : -7693642,    "k" : -7693128,    "l" : -7429956,    "m" : -7167812,    "n" : -6904126,    "o" : -7298880,    "p" : -8877404,    "q" : -8482644,    "r" : -11641224,
    "s" : -10193264,    "t" : -9931114,    "u" : -9930602,    "v" : -9404258,    "w" : -9010016,    "x" : -10325872,    "y" : -10062188,    "z" : -9272670,    "{" : -9667942,    "|" : -9667430,    "}" : -11246976,    "~" : -10325360,    "¡" : -10720630,    "¢" : -10983292,    "£" : -8746330,    "¤" : -8219472,    "¥" : -8877398,    "¦" : -11773322,    "§" : -9273184,    "¨" : -10325874,
    "©" : -8746326,    "ª" : -9799016,    "«" : -8351060,    "¬" : -10589558,    "®" : -10851704,    "¯" : -9008990,    "°" : -7956812,    "±" : -10193258,    "²" : -11772810,    "³" : -8878426,    "´" : -10456948,    "µ" : -10852218,    "¶" : -10456944,    "·" : -10325870,    "¸" : -9799528,    "¹" : -9140570,    "º" : -8087886,    "»" : -9797990,    "¼" : -8483668,    "½" : -9140574,
    "¾" : -10851706,    "¿" : -10983290,    "À" : -11114876,    "Á" : -9799012,    "Â" : -9008984,    "Ã" : -8877910,    "Ä" : -8746324,    "Å" : -9273182,    "Æ" : -9535328,    "Ç" : -10193772,    "È" : -9799014,    "É" : -10193260,    "Ê" : -10983804,    "Ë" : -11247488,    "Ì" : -10721152,    "Í" : -11510152,    "Î" : -11904400,    "Ï" : -6905156,    "Ð" : -12299668,    "Ñ" : -12168082,
    "Ò" : -11903882,    "Ó" : -12431254,    "Ô" : -12036496,    "Õ" : -11773836,    "Ö" : -11905936,    "Ø" : -11379080,    "Ù" : -12694940,    "Ú" : -12957086,    "Û" : -12693912,    "Ü" : -12431766,    "Ý" : -12562838,    "Þ" : -12694426,    "ß" : -12168596,    "à" : -12563352,    "á" : -11905938,    "â" : -9668462,    "ã" : -14011314,    "ä" : -13353384,    "å" : -12958626,    "æ" : -13484458,
    "ç" : -13221798,    "è" : -12827040,    "é" : -13353386,    "ê" : -13879218,    "ë" : -14405562,    "ì" : -14669250,    "í" : -14011318,    "î" : -13748142,    "ï" : -13352872,    "ð" : -13747120,    "ñ" : -14537152,    "ò" : -14405570,    "ó" : -14011832,    "ô" : -10984320,    "õ" : -13484972,    "ö" : -13484456,    "ø" : -13352868,    "ù" : -13747114,    "ú" : -12826012,    "û" : -12694942,
    "ü" : -11510666,    "ý" : -13089700,    "þ" : -12037010,    "ÿ" : -11642768,    "Ā" : -12431768,    "ā" : -8877920,    "Ă" : -11905426,    "ă" : -11641740,    "Ą" : -12037012,    "ą" : -10457458,    "Ć" : -11511178,    "ć" : -7430468,    "Ĉ" : -7825228,    "ĉ" : -9141600,    "Ċ" : -7167298,    "ċ" : -7298882,    "Č" : -6903612,    "č" : -7298884,    "Ď" : -7429958,    "ď" : -8219470,
    "Đ" : -7956814,    "đ" : -7693130,    "Ē" : -8087888,    "ē" : -10720636,    "Ĕ" : -10193262,    "ĕ" : -7956808,    "Ė" : -10984322,    "ė" : -8351058,    "Ę" : -9272160,    "ę" : -8614744,    "Ě" : -10851708,    "ě" : -8482642,    "Ĝ" : -11246980,    "ĝ" : -11379592,    "Ğ" : -8483154,    "ğ" : -10982780,    "Ġ" : -8615252,    "ġ" : -9404260,    "Ģ" : -8483152,    "ģ" : -10589564,
    "Ĥ" : -9273186,    "ĥ" : -10194290,    "Ħ" : -12299674,    "ħ" : -14931394,    "Ĩ" : -14273468,    "ĩ" : -14800326,    "Ī" : -12826526,    "ī" : -13747628,    "Ĭ" : -13352870,    "ĭ" : -13220768,    "Į" : -13352354,    "į" : -12958112,    "İ" : -14010806,    "ı" : -14011834,    "Ĳ" : -12958632,    "ĳ" : -13221290,    "Ĵ" : -13616560,    "ĵ" : -13353394,    "Ķ" : -13616566,    "ķ" : -13879730,
    "ĸ" : -11773840,    "Ĺ" : -11511180,    "ĺ" : -10589568,    "Ļ" : -10984836,    "ļ" : -10195318,    "Ľ" : -9668466,    "ľ" : -11379596,    "Ŀ" : -12300696,    "ŀ" : -10984834,    "Ł" : -9931122,    "ł" : -9799534,    "Ń" : -12168600,    "ń" : -10458492,    "Ņ" : -11247494,    "ņ" : -11379082,    "Ň" : -12037014,    "ň" : -12037526,    "Ō" : -11642252,    "ō" : -12036498,    "Ŏ" : -11774352,
    "ŏ" : -12695456,    "Ő" : -11115908,    "ő" : -13221284,    "Œ" : -13616044,    "œ" : -14011316,    "Ŕ" : -13879726,    "ŕ" : -13352356,    "Ŗ" : -11904908,    "ŗ" : -13879214,    "Ř" : -14669248,    "ř" : -13484464,    "Ś" : -13747122,    "ś" : -10457464,    "Ŝ" : -10194806,    "ŝ" : -12169626,    "Ş" : -9010008,    "ş" : -9141596,    "Š" : -8877396,    "š" : -9403742,    "Ţ" : -9010012,
    "ţ" : -8219984,    "Ť" : -8351568,    "ť" : -8352082,    "Ŧ" : -9141598,    "ŧ" : -10983802,    "Ũ" : -10852214,    "ũ" : -10589556,    "Ū" : -10456942,    "ū" : -9930600,    "Ŭ" : -10193770,    "ŭ" : -10720632,    "Ů" : -10721146,    "ů" : -10721144,    "Ű" : -11115390,    "ű" : -11642250,    "Ų" : -9141084,    "ų" : -9008470,    "Ŵ" : -9667428,    "ŵ" : -9403744,    "Ŷ" : -10193778,
    "ŷ" : -9535842,    "Ÿ" : -10324844,    "Ź" : -12037524,    "ź" : -10457972,    "Ż" : -10062190,    "ż" : -10852216,    "Ž" : -10983294,    "ž" : -10194286,    "ƀ" : -9009504,    "Ɓ" : -9009498,    "Ƃ" : -9142112,    "ƃ" : -10325366,    "Ƅ" : -9010014,    "ƅ" : -7167302,    "Ɔ" : -11116422,    "Ƈ" : -10062710,    "ƈ" : -9535848,    "Ɖ" : -9667948,    "Ɗ" : -10193780,    "Ƌ" : -10852222,
    "ƌ" : -9010530,    "ƍ" : -11772812,    "Ǝ" : -8614742,    "Ə" : -8877914,    "Ɛ" : -8088912,    "Ƒ" : -7693640,    "ƒ" : -7825738,    "Ɠ" : -9535850,    "Ɣ" : -9931118,    "ƕ" : -7036222,    "Ɩ" : -9535840,    "Ɨ" : -8351054,    "Ƙ" : -9404254,    "ƙ" : -9008472,    "ƚ" : -8876884,    "ƛ" : -9008474,    "Ɯ" : -8745812,    "Ɲ" : -8745300,    "ƞ" : -9272156,    "Ɵ" : -9930086,
    "Ơ" : -10324336,    "ơ" : -9403228,    "Ƣ" : -9140568,    "ƣ" : -8482640,    "Ƥ" : -9535326,    "ƥ" : -9666400,    "Ʀ" : -9403230,    "Ƨ" : -9798500,    "ƨ" : -9535334,    "Ʃ" : -9797986,    "ƪ" : -9009496,    "ƫ" : -9141082,    "Ƭ" : -9799526,    "ƭ" : -7692612,    "Ʈ" : -9273706,    "Ư" : -9666914,    "ư" : -9010010,    "Ʊ" : -7562570,    "Ʋ" : -8614228,    "Ƴ" : -11378052,
    "ƴ" : -9272158,    "Ƶ" : -9403232,    "ƶ" : -9799020,    "Ʒ" : -9666402,    "Ƹ" : -9797988,    "ƹ" : -9800044,    "ƺ" : -10061674,    "ƻ" : -10062702,    "Ƽ" : -11773326,    "ƽ" : -11510150,    "ƾ" : -9799536,    "ƿ" : -11642764,    "ǀ" : -7694668,    "ǁ" : -11379078,    "ǂ" : -9008988,    "ǃ" : -8484182,    "Ǎ" : -9799022,    "ǎ" : -10983296,    "Ǐ" : -8088402,    "ǐ" : -8352086,
    "Ǒ" : -7956816,    "ǒ" : -7694156,    "Ǔ" : -7693644,    "ǔ" : -6641470,    "Ǖ" : -7036740,    "ǖ" : -6509886,    "Ǘ" : -8746846,    "ǘ" : -8088916,    "Ǚ" : -8877406,    "ǚ" : -8484184,    "Ǜ" : -8878430,    "ǜ" : -8483672,    "ǝ" : -8615256,    "Ǟ" : -9535846,    "ǟ" : -9404778,    "Ǡ" : -8747360,    "ǡ" : -8877918,    "Ǣ" : -8746332,    "ǣ" : -8615258,    "Ǥ" : -8484186,
    "ǥ" : -7430986,    "Ǧ" : -8089428,    "ǧ" : -10721150,    "Ǩ" : -7298888,    "ǩ" : -7036226,    "Ǫ" : -6640444,    "ǫ" : -8878434,    "Ǭ" : -7167300,    "ǭ" : -6903614,    "Ǯ" : -6114098,    "ǯ" : -7561544,    "ǰ" : -5851442,    "Ǳ" : -11115904,    "ǲ" : -7562058,    "ǳ" : -7429960,    "Ǵ" : -6509372,    "ǵ" : -6509370,    "Ƕ" : -6246196,    "Ƿ" : -7035710,    "Ǹ" : -7167296,
    "ǹ" : -7562056,    "Ǻ" : -12826016,    "ǻ" : -7167810,    "Ǽ" : -8483670,    "ǽ" : -8615254,    "Ǿ" : -11642762,    "ǿ" : -7956810,    "Ȁ" : -8746334,    "ȁ" : -7694670,    "Ȃ" : -8219986,    "ȃ" : -7561540,    "Ȅ" : -8088400,    "ȅ" : -12168080,    "Ȇ" : -7694666,    "ȇ" : -7430472,    "Ȉ" : -7692616,    "ȉ" : -7692618,    "Ȋ" : -7430470,    "ȋ" : -11510662,    "Ȍ" : -9931116,
    "ȍ" : -9536356,    "Ȏ" : -9536874,    "ȏ" : -7824712,    "Ȑ" : -9404262,    "ȑ" : -9141602,    "Ȓ" : -11247492,    "ȓ" : -10721148,    "Ȕ" : -10063732,    "ȕ" : -9536362,    "Ȗ" : -10326390,    "ȗ" : -9800042,    "Ș" : -11905422,    "ș" : -9667944,    "Ț" : -9141090,    "ț" : -9535336,    "Ȝ" : -10589562,    "ȝ" : -10326386,    "Ȟ" : -10194288,    "ȟ" : -10193776,    "Ƞ" : -12299672,
    "ȡ" : -8350544,    "Ȣ" : -11246462,    "ȣ" : -11115388,    "Ȥ" : -11773324,    "ȥ" : -12168084,    "Ȧ" : -10324852,    "ȧ" : -10852736,    "Ȩ" : -8218958,    "ȩ" : -11115394,    "Ȫ" : -6904638,    "ȫ" : -7298886,    "Ȭ" : -8088404,    "ȭ" : -7693646,    "Ȯ" : -7430474,    "ȯ" : -7825744,    "Ȱ" : -10982782,    "ȱ" : -10325362,    "Ȳ" : -10589048,    "ȳ" : -11641222,    "ȴ" : -11246466,
    "ȵ" : -11378570,    "ȶ" : -10193266,    "ȷ" : -11114880,    "ȸ" : -11378566,    "ȹ" : -10720122,    "Ⱥ" : -10325364,    "Ȼ" : -11904396,    "ȼ" : -8087890,    "Ƚ" : -7429952,    "Ⱦ" : -9536358,    "ȿ" : -11114364,    "ɀ" : -8352598,    "Ɂ" : -8351576,    "ɂ" : -8483160,    "Ƀ" : -8483674,    "Ʉ" : -8746336,    "Ʌ" : -8615260,    "Ɇ" : -8219988,    "ɇ" : -9273188,    "Ɉ" : -7694158,
    "ɉ" : -8352088,    "Ɋ" : -7957332,    "ɋ" : -9404264,    "Ɍ" : -11115906,    "ɍ" : -9800048,    "Ɏ" : -10457978,    "ɏ" : -10063222,    "Ͱ" : -9011044,    "ͱ" : -11510154,    "Ͳ" : -11379084,    "ͳ" : -11116416,    "ʹ" : -12563868,    "Ͷ" : -10853244,    "ͷ" : -13221288,    "ͺ" : -8878424,    "ͻ" : -9140572,    "ͼ" : -12432284,    "ͽ" : -13221800,    "Ϳ" : -12431772,    "Ά" : -9666404,
    "Έ" : -10325358,    "Ή" : -13352874,    "Ί" : -12036494,    "Ό" : -14274494,    "Ύ" : -12826528,    "Ώ" : -13616556,    "ΐ" : -12300182,    "Α" : -11378564,    "Β" : -11641226,    "Γ" : -13221286,    "Δ" : -12430742,    "Ε" : -10194292,    "Ζ" : -11905420,    "Η" : -12168086,    "Θ" : -12694424,    "Ι" : -7956300,    "Κ" : -6640442,    "Λ" : -6378294,    "Μ" : -11641220,    "Ν" : -10326384,
    "Ξ" : -8350542,    "Ο" : -12957600,    "Π" : -8745814,    "Ρ" : -9667432,    "Σ" : -11247490,    "Τ" : -12431770,    "Υ" : -12300698,    "Φ" : -11774354,    "Χ" : -10984838,    "Ψ" : -11379594,    "Ω" : -10194294,    "Ϊ" : -9930606,    "Ϋ" : -9404774,    "ά" : -9404772,    "έ" : -9537386,    "ή" : -12958628,    "ί" : -9800046,    "ΰ" : -11116418,    "α" : -10457976,    "β" : -10590080,
    "γ" : -11248010,    "δ" : -12169112,    "ε" : -12037528,    "ζ" : -11905940,    "η" : -12563870,    "θ" : -12169624,    "ι" : -11905942,    "κ" : -12694944,    "λ" : -9931634,    "μ" : -10063218,    "ν" : -11246464,    "ξ" : -6772542,    "ο" : -7956298,    "π" : -8219982,    "ρ" : -6904124,    "ς" : -7693126,    "σ" : -9666912,    "τ" : -10720118,    "υ" : -10456434,    "φ" : -10982776,
    "χ" : -11904912,    "ψ" : -10588534,    "ω" : -9930088,    "ϊ" : -10589042,    "ϋ" : -10457970,    "ό" : -12430740,    "ύ" : -11246982,    "ώ" : -10851712,    "Ϗ" : -9140576,    "ϐ" : -9667940,    "ϑ" : -9142110,
}, 5);
			return get(0, 0, 222, 220);
		},
		gate: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                                                                    ',
    '                                                                                                    ',
    '                                                                                                    ',
    '                                                                                                    ',
    '                                                                       !!"  #! $!!                  ',
    '                                             %&&\'((((((((              (()  $* +((                  ',
    '                           +++++++,%%%-....../&&&00000000****#         11#   1 %0(*2                ',
    '                       ####(((((((3&&&&&&&&&&&&&&&&&&&&&&(4552222              675(*21              ',
    '                      8((((&&&&&&((((((9&&&&&&&&&&&&&&&&&&&&&((((88              &9\'(:#             ',
    '                    ;<<0000&&&&&&&&&&&3((0&&&=>>>=.../&&&&&/.&&&&&?              &&3((@             ',
    '                 ###A(B&&&&&&&&&&&&&&&033&&&&/..C////==/&&&C=>//&&/....          D&&0BEF            ',
    '                 G((3&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/==/&&&C=>./&&&&&&&888H.-     //&0BI            ',
    '              "((4&&&&&&&&JJ00J&&&&&&&&&&&&&&&&&&&&&&JJJJJ&&&&.....&&&&&&&&&=88    K&&B(#8          ',
    '            !!G(9L&&///=MN000J000J0OPJ&&&&&&&C.=.NPPOJJJJJJJJ00N..=>&&&&&&&&&&&H   K&&B((Q          ',
    '           "((99J&&/..=.MN0000PPOJ000&&&&&&&&=?->RSNNNNNNJ00J000///M//.JJ&&&&&&&&  K&&B((Q          ',
    '          #((9&&&&&.=/&./N0J00TTTJJJJ&&&&&&&&>?U?VWRWWWXXY0J&JJJJ00JSM.N0&&&&&&&&Z K&&[](Q          ',
    '         G^00&&&&&&=/&&00JJ0OPJ&&&&&&&&&&&&&&&&H%%%,_``>=a&&&&JJJ00JNM.bN00J&&&&&& K&&&&(Q          ',
    '        #QB&&&&&///.&&&000JJ&&&&&.-->??--=..&&&&&.>==>-??=--->..JJJJJNNRSNJ00&&&&&&&&&&&(((         ',
    '        (c&&&&&&...&&&&000J&&/.---?%%%%?%?--->==.d`%%%U``-???-..M/&&&/NeMMN000&&&&&&&&&&(((         ',
    '       (&&&&&&&&=.&J00JJ00J&C=-%%?%UU%%%%%%%%?>-=?HHHHHHU?```%?-=./&./&&/MSOO0&&&&&&&&&&c9(G        ',
    '       (&&&&&&/.C/&0000JN/&-%UU`%UHHHHHHHHHHUUU%UU%%%-HHH?HHHHHH==.&>.&&&/.fO0&&&&&&&&&&&c((        ',
    '       (&&&&&&/=/&J000N>..-??%HHHHHHHHHHHHHHHHH%?%%%`U`HHH`UHHHH>>=.%?=C&&&>>J&&&&&&&&&&&&&(        ',
    '     G(&&&&&&-6.&J0JJ0N>..-??%HHHHHHHHHHHHHHHHH??%UHHHg`HHH%HHHHU>===?=.=JJ//&&&&&&C>C&&&&&(Q       ',
    '     G(&&&/##7/&&J0JJM..>>.?%HHHHHHHHHUUHHHHH??%HHHHHHH`HHH%HHHHU-===?===JJJ&&&&&&&/>.&&&&&(2$      ',
    '     G(&&.=  K&&&JJJNM..-??UHU-%UUU``H>-->-?H???HHHHHHHHHHHHHHHHHH=..=>>>NN0==.&&&&&/..&&&&((h      ',
    '     G(&&`   K&&&JJJNM.-%%U%%`%UU%=%%>`UU`UUHUUUHHHHHHHHHHHHHHHHHH%-==`H--=Je&/=&&&&&.=&&&&&ch      ',
    '     h(     &&&&&JJJ.==?%`H?%%%HH?&?%.HHHHHHHHHHHHHHHHU%%%HHHHHHHHH`--UH?-XNNC..M/&&&.=&&&&&ch      ',
    '     h(     &&&J00J-=>-HHH-??%HHH?&>-HHHHHHHHHHHHHHHHH?&.=%HHHHHHHHHHHHHU=YSJ>>&iY&&&.=&&&&&ch      ',
    '     h(    j&&&000J?=>-H??%HHU?..>HHHHHHHHj6DDDDDZHHHHH%>>%&>--HHHHHHHHHH?>S=U%&fY.0&...&&&&ch      ',
    '     h(   8&&&&00JJ?>>VU%%UHH%>=>?HHHHHHHH66DDDDDj77K7ZH%%Z>--=>-HHHHHHHH`VM=%?.NM.NN//=&&&&ch      ',
    '     k"   8&&&&0TfR.>--?UHHHH?&>`HHHHHHHHHDDDDDDDDD6D6jj666H?>&.=HHHHUUUHU?.=?-=&/.NN&&=&&&&ch      ',
    '         7-&&&J0OOS=-?%UHHHH-=HHHZZj6DDDD6DD6DK76ZHHDDDDjj6666-&C-HH%&>-HHHH>???&/..N0J>&&&&ch      ',
    '         U&&&&000NM=-%%HHHHHU`HHZj666DDD6ZDDDDDDD666D6jDDDjDD67??%HHU?.CHHHH>.=U&&&./OP&&&&&ch      ',
    '     h(  U&&&&JJ00/.=>VHHHHHHHHH7j666DDD6HDDDDDDDDDDDjj666jDD6jH`-HHHU=/%HHHV=>`/&&=/3O/&&&&ch      ',
    '     h(  U&&&&0000N=>--?HHHHHHHZ7KKDDDUZKKjjZ666ZDDHHjDZZZj6666jU&UHHH-..UHH,-??./&=/&J=&&&&ch      ',
    '     ;F  U&&&&000NN=---HHHHHH%.%ZjDD6HZjDDDDDDDDDD6jKjjDD66DDDjj7UHHHHHU.-`H`--?&&&.&&J=&&&&ch      ',
    '         U&&&&000Y=-%??HHHHHH?.UZjD66H76DDDDDDDDDD66jj6DDDjDDD6j7HZZHHHH=-%HU%%?./&&&00=&&&&ch      ',
    '        &&&&&&000/=>%HHHHHHH?=-ZjKHHHHDD6jZ7DDD6DDDD6DDK6DZjDDDD7ZjjHHHH`=?HU%%?./&&&03=&&&&Lh      ',
    '        &&&&&&O0/M=>%HHHHHH%>=H66jKU`D67HjDDDDDDDDDD6DDKKj6Z6Dj66j66ZZZZH?`HU%%-./&&&OP=&&&&&>      ',
    '        &&&&&JON>==-UHH%HHH?-?j6jj7ZZDD6j6DDDDDDDDDDDDD666D6666666jjZZ7jH%?-`U`=&&&&&00J&&&&&&&6    ',
    '        &&&&&&/=?--HHHH-HHH>-UD6jKZKj6DDDDDDDDDDDDDDDDDDDDDD66DDjD7ZZZjjH`V.``%=/&&&&00Y&&&&&&&6    ',
    '        &&&&&&/=???HH->>HHH&-j6Djj666DDDDDDDDDDDDDDDj6DDDDKD6jDDD666KKjjHHHU`%?../&&&00R&&&&&&&6    ',
    '        &&&&&&/>???HH->HHHHHZjD6ZZDDDDDDDDDDDDDDDDDjH76DDD6DD6HZjj66KK7ZHHHH`H`../&&&00S&&&&&&&6    ',
    '        &/..&&.%=d%H>>-HHHHHZjDj77DDDDDDDDDDDDDDDDD677jDDD6D66HZjj66jjZHHHHH_H`../&&&00S&&&&&&&6    ',
    '        &==.&/=??--H.-%HHHHHjD6Hj6DDDDDDDDDDDDDDDDDDDjU6DD6DjKHZ6j666jU-UHHHlH`../&&&00N&&&&&&&6    ',
    '       -&.=/&/>-%?>=/>-HHHHZ77Z76DDDDDDDDDDDDDDDDDDDDDD666jD66H7DjDDDDU>?HHHgH`../&&00J.&&&&&&&6    ',
    '       &&..&&C>>%%>&&=-HHHHZKj6K6D6DDDDDDDDDDDDDDDDDDDDDj76DDDH7D6DDDDZ??HHHHHHH./&&JJJ.&&&&&>8     ',
    '       &&..&&.?>?%?&&>?HHHHZKj6K6DjDDDDDDDDDDDDDDDDDDDDDj76DDDZ7D6DDDDZ%%HHHHHHHC/&JJJJC&&&&&>      ',
    '       &...&NYWa>??&=-?HHZZZZ76Z6DDD6DDDDDDDDDDDDDDDDDDDDDDDDD6D6HDDDDKHUHHHHHHH&&&J000&&&&&&>      ',
    '       &///&NSmi>--&=-?HHH`ZZKDjDD666DD66DDDDDDDDDDDDDDDDDDDD6DDDKDDDDKH?UHHHHH-./&JJ00&&&&&&>      ',
    '       &&&&&PTno=C&&.-%HHU-Z7jDj6DjDDD6jjDDDDDDDDDDDDDDDDDDDDjDDDD66D67H>`HHHHU-/&&&&&&&&&&&&&2@    ',
    '       &...&0Ofo>.&&=-?H`%-ZKj6UjDDDDDZjDDDDDDDDDDDDDDDDDD66jDDDDDjjDKZH>`HHHHU>&&&&&&&&&&&&&&($    ',
    '       &...&03So.C&&.?%H??%ZD6ZH6DDDDDK6DDDDDDDDDDDDDDDDDDDDDDDD66ZZDZZH=`HHH&&&&&&&&&&&&&&&&&($    ',
    '       &.//JO3So&&&/=UHH?-?7D6ZZ6DDDDDK6DDDDDDDDDDDDDDDDDDDDDDDDD677DZZH>`HHH&&&&&&&&&&&&&&&&&($    ',
    '       &&&&JPONW&&&.-HHH?>=KD6H6DDDDDDZjDDDDDDDDDDDDDDDDDDDDD66DD6DDDHHH>UHHH>=&&&&&&&&&&&&&3c($    ',
    '      %&&&&J30/W&&C>`HHH?.&K6jHUjDDD6D?ZDDDDDDDDDDDDDDDD66DD66DDD7DDDHHH=`HHHH%&J00&&&&&&&&&c(($    ',
    '      %&&&&J000N&&C-HHHH?.&KjKZjjjDDDD6jjDDDDDDDDDDDDDDD6j6DDDD667DDDHHH.UHHHH%&00J&&&&&&&&&c(#     ',
    '      %&&&&JJJ00&&.-HHHH?./KK776KKDDDDD6jDDDDDDDDDDDDDDD6jjDDD66jjDD6HHH.UHHH..&O0&C&&&&&&&&c(      ',
    '      %&&&&&00JJ&/=?HHH&???HH76DZUZDDDDDDD6DDDDDDDD6DDDK66K666KKZDDDZHHH%HHH%.C&O0&/&&&&&&&0c*      ',
    '      %&&&&&0000&C=?HHH&%=/HH7DDD6KDDDDDDDDDDDDDDDDZ7jDDDD6DDD7jDDZZHHHHH.-H%>>&00JJ//&&&&&BQ       ',
    '      ,3&&&&0000&.>?HHHC%=&HH7DDD6j6DDDDDDDDDDDDDDDZ76DDDDDDDD7jD6ZZZZHHU.VH->>&NN00M.&&&&&BQ       ',
    '      Q(&&&&0000JM>.`HH>H=&HH7DK7jD77DDDDDDDDDDD6DDDDDDDDDDDD6DDjHZ7jZZH-=>%&->&NNN0/.&&&&&BQ       ',
    '      Q(&&&&JJ0PNM-HHHH-H?>HZjDZZjD6jHK6DKDDDDDD66DDDD6DDDDDDDjjK?7j6HHH--%U>%?&&NS0&&&&&&&BQ       ',
    '      Q(&&&&&J0ONM-HH%?>H?--ZKDKZ76jj7j66jDD6DDDj66DDDDD66666j77ZU77jZZZ=?`U?%?&&&JJ&&&&&3(@        ',
    '      Q(&&&&&J00SY-HH>=.U%-&H7DjZZKjj6j666D6Z6DDK66DDDD6j7jjjHHHUZZZZZZZ&%UUU?-&&&J0&&&&&3(@        ',
    '      Q((3&&&JJJfb-%H%?>/>?&UZjZ77HZ7D6K7DHHHjDDDjj6DDDD666jjZKH>j7ZHj7H?UUUU=.&&&J0&&&&&3(@        ',
    '      #:(3&&&JJJOSV%U%??.=H?>=?HZ7DjZjD6HZKDD7Z76DD6DDD6j7jKKH%`HH777Z%V?UUU-H%&&&JP&&&&3A    ($    ',
    '        (3&&&&&J0SW?U?-?.=H%>.-HHZDj7jD6HHKDD7Z76DD6DDD6KZ77KH%UK%7KKH?=%UHH>Vp&NN0O&&&&3A    q#    ',
    '        (((&&&&JJNb?U?-?/&=H-/.?%HKjjHK7ZHZ7KDDD6jZHZZZZU?-`UUZZZ%HHHHU%UUHHU`iNOO00&&&&3A          ',
    '        k<(&&&&JJ0NRV%`-//>.>?.--HZ7jHZZZHHZZZZD6D6jDDDD666K77H`VHHHH-%UHHHH?VfnfNJ&&&&&&>          ',
    '         A(&&&&J00NPR??..=?&>H%??`HZZHH`?-%HHHH7777ZZZZZj6jHHHU%>HHHH-%HHHHH->fcNOO&&&&&>#    *$    ',
    '         A(&&&&J000TSV-.==?&>HH%%%HHHHH%>=?UUHHHHHHU%%%U7jKU%%%`HHHHHHHHHHHU&/fT03O&&&&&-     Fk    ',
    '         A((&&&&JJJJORa...-=-HHHH%%HHHHHHV-?>??V%?-U>-UHU%???-HHHHHHHHHH-/&&>=OTO&&&&&&&-     #     ',
    '          #(&&&&&&00OSR-..>=-HHHU%``%UHHH?%%?%%?U%%H?%HHU%-%`%HHHHHHHH%?=/&&XM00&&&&&&&&-     ($    ',
    '          2(&&&&&&J000N>...=>?HHHHU?V?UU`UHHHHHHHHHHHHHHU%-UHHHHHHHHHU>&&&&&00J0&&&&&&&H7     ($    ',
    '          2(&&&&&&&J000J.=>./.%%%%%-VUU%?-%HHHHHHHHHHHU%UUU`%%-????->....&&JJJJJ&&&&&&&       ($    ',
    '          #@B&&&&&&&000S//.-?-.``%%%%UU`%??-CroHHHHHHH`%%%>-?%%`U->>=>>=&00JSS/&&&&&&&&     H&($    ',
    '            (L&&&&&&&&J//0/=--.%U````HU`%%?>&ioHHHHHHH`%%%>-?%%%U->==>>=/NN&bS../&&&&/     .c(($    ',
    '            (9&&&&&&&&J/M0/.=>>=HHHHHH-%%%U%>&,s-.%HHHHHHHHHHH%---?-====>..=>>../&&&&/K #KKCc()@    ',
    '            (9&&&&&&&&JNY=/&&.=>??%HHHHH?>%%-.&&&&.==>?HHHHHHHHHHHHHHH%?-=>>C/.=/&&&&&& K&&&c(      ',
    '            @:\'&&C6d&&&&&/==-&/.%%?%HHHHU`H%->&&&&//C=>--`HHHHHHHHHU%%->->...==/&&&&&&&=.&&9t@      ',
    '             q(&&C -&&&&&&=>-&/.%%?-HHHHHHH%>>&&&&&&&====%HHHHHHHHH`-->=>>.&==/&&&&&&&&&&0B(Q       ',
    '             q(&&&&7%/&&&&&&&&&&&/.>==??UHHHHH>??>.C&&&&...>==>>>=>-?=..&.==.C&&&&&&&&&&&3((Q       ',
    '               (]&&7  &&&&&&&&&&&&&&&JN=--==>-----??>&&JJJJJ&&&..==.&&&&=/&&&&&&&&&&&&&((((@        ',
    '               Qu4&?U `?&&&&&&&&&&&&00OMM=//M==..===M&&0330J&&&/C..C/C&&=&&&&&&&&&&&Lcc(vQQ#        ',
    '                :(&&&  6>&&&&&&&&&&&33P00JJJJJ&&&JJJJJ00PPOJ&&&&&&...=/&&&&&&&&&3333\'())Q           ',
    '                E(&&&   D&&&&&&&&&&&OOJJJJJ000OO0JJJJJ&&JJJP&&&&&&&&&&&&&&&&&&&&9(((((              ',
    '                 #(5&      K&&&&&&&&&0PTPPPO0JJJJNMMSbbS=..J&&&(((((cc0&&&3cc](((G                  ',
    '                 #(9[+     DHHHH&&&&&&OPOOO00JJJJNMMYbbY...&&&&9999999L333whh2hhh!                  ',
    '                 #((((          &&&&&&&JJJJJJJJJJNN/../&&&&&&&&&&&&&&&9(((Q                         ',
    '                      ()            /&&(((&&&&&&&&&&&&&&&&&&&&&   #666k$$$@      Q(                 ',
    '                      #!<           8#D"A(9999&&&&&&&&&&&&&&&&&>>>>>>>6      $x QG"                 ',
    '                       qE               ;***I(0&&&&&&&&&&&&&&&&&&&&&&&y#### #!< )G                  ',
    '                       q<1   111 ##         z(((((3&&&&&&&&&&&&&c(((((((((Q ((<                     ',
    '                        @(@  ((( )(         #11111)BBBBBBBBBBBBB((@1111111# 11#                     ',
    '                        #!#  !!! "!               $!!!!!!!!!!!!:<<                                  ',
    '                                                                                                    ',
    '                                                                                                    ',
], {
    "0" : -16736016,
    "1" : -2035472,    "2" : -10456880,    "3" : -16740112,    "4" : -16748320,    "5" : -16744208,    "6" : -3084033,    "7" : -5185281,    "8" : -983041,    "9" : -15707952,    " " : -1,    "!" : -5193488,    "\"" : -4140816,    "#" : -986881,    "$" : -3092240,    "%" : -9383681,    "&" : -16731905,    "'" : -15712048,    "(" : -15716160,    ")" : -11505456,    "*" : -14663488,
    "+" : -9404192,    "," : -9387792,    "-" : -11480833,    "." : -14630657,    "/" : -15683329,    ":" : -6246176,    ";" : -10452784,    "<" : -12562224,    "=" : -13582081,    ">" : -12533505,    "?" : -10432257,    "@" : -2039568,    "A" : -12558128,    "B" : -15712064,    "C" : -15679233,    "D" : -2035457,    "E" : -13614912,    "F" : -13610800,    "G" : -7298848,    "H" : -7282433,
    "I" : -14667584,    "J" : -16736001,    "K" : -5181185,    "L" : -16744224,    "M" : -14634753,    "N" : -15687440,    "O" : -15691536,    "P" : -15695632,    "Q" : -8351520,    "R" : -13586192,    "S" : -14638864,    "T" : -15695648,    "U" : -8331009,    "V" : -11484929,    "W" : -12537616,    "X" : -13586177,    "Y" : -14634768,    "Z" : -6233857,    "[" : -15703840,    "]" : -15703856,
    "^" : -13614896,    "_" : -8339216,    "`" : -8335105,    "a" : -12533520,    "b" : -13590288,    "c" : -15699744,    "d" : -12529409,    "e" : -15683344,    "f" : -14642960,    "g" : -7286529,    "h" : -11509552,    "i" : -11489040,    "j" : -4132609,    "k" : -3088144,    "l" : -9395984,    "m" : -12541712,    "n" : -13602592,    "o" : -9391888,    "p" : -9387777,    "q" : -4144912,
    "r" : -10440464,    "s" : -10436353,    "t" : -9400096,    "u" : -11501344,    "v" : -13610816,    "w" : -14647072,    "x" : -9404208,    "y" : -4136705,    "z" : -6250272,
}, 3);
			return get(14, 11, 276, 276);
		},
	},
	weapons: {
		axe_1: function(){
			background(0, 0);
			Display.pixelArt([
    '                                                      !""#$               ',
    '                                                  %&\'()*\'"\'"\'"            ',
    '                                                +(,-./011((,)234          ',
    '                                               ,5.00/6789:6-(&\';<=        ',
    '                                              &,.0->60:???@,6:,AB%*       ',
    '                                             C5&/::DEFGHIJGKHD6:5L2*      ',
    '                                            M      N/OPQR(&NS9T,?UVWX     ',
    '                                                    H.YSZ:N[]C^    _`     ',
    '                                                    31O6NZOD)C            ',
    '     a                                              O@??Rb::6             ',
    '   cdGV H                                      V0?0[0e:f]f::g.            ',
    ' hi@6(j/k[+ Ol                            mn_oS@DpDD:SqrsqF7-6Rt          ',
    'i[:OuHUh0v0:rqD@DD[@:[D[[[D[[SDDDDqS:::::ON/jwS?.?j6iixVyqzE6:OVNSR.%     ',
    '{|{q,`R}~¡¢-£¤1.?(S11R/(&R1,?R[RR?¥¦¡§§¡¨©ª"«H¬P®[¯©°±²³´µq¶·¸&¹Rº»¼½®®   ',
    ' {?9¾¿Nw:9:[OOOwOS@[[[O?@À[[@S[@O[OEEEÁEE@O:9[OpS6[]]ÂcÃoÄ¿6Å0[  lÆ       ',
    '  ®i:b1¦6                                      :::6DDÇ6?È?É:"/wl          ',
    '    Ê²                                          Y  3?/[@V(Sw0P            ',
    '                                                    %0@/EË6:,             ',
    '                                                    #)YS9Ì.D)H            ',
    '                                                    .O·&@,5@?VB           ',
    '                                             Í  3,6.?FH.NJÎÁO:k[lÏ        ',
    '                                              HÐ+5/:Ñ@wÒÓÒ?D0[RVÔÕ        ',
    '                                               4(B5(,-:::@S/((!Ö·         ',
    '                                                  R&A1/0./1.Ø¦P           ',
    '                                                     ÙCVVØØn              ',
], {
    "0" : -14148066,
    "1" : -13490136,    "2" : -8884626,    "3" : -7566206,    "4" : -6908276,    "5" : -12174276,    "6" : -14803426,    "7" : -14142916,    "8" : -14803416,    "9" : -15458786,    " " : 0,    "!" : -12171716,    "\"" : -11513776,    "#" : -10855846,    "$" : -6908266,    "%" : -9542556,    "&" : -12832206,    "'" : -12171706,    "(" : -13487576,    ")" : -12829636,    "*" : -10855856,
    "+" : -11513786,    "," : -12829646,    "-" : -13487566,    "." : -14145506,    "/" : -14145496,    ":" : -15461356,    ";" : -8224136,    "<" : -6252906,    "=" : -9539996,    ">" : -12827066,    "?" : -14803436,    "@" : -15463926,    "A" : -11516346,    "B" : -10200496,    "C" : -10858426,    "D" : -16119286,    "E" : -11518936,    "F" : -10861016,    "G" : -10203086,    "H" : -12174296,
    "I" : -10200516,    "J" : -10858446,    "K" : -10861006,    "L" : -8226706,    "M" : -4934486,    "N" : -13490146,    "O" : -14806006,    "P" : -10858436,    "Q" : -13490126,    "R" : -12832216,    "S" : -14805996,    "T" : -10853266,    "U" : -10863576,    "V" : -12174286,    "W" : -8882066,    "X" : -5594976,    "Y" : -11516366,    "Z" : -14142936,    "[" : -15461366,    "]" : -14142926,
    "^" : -8887206,    "_" : -6910846,    "`" : -9542566,    "a" : -5597566,    "b" : -13487556,    "c" : -12834796,    "d" : -14806016,    "e" : -16121856,    "f" : -14800846,    "g" : -11513766,    "h" : -13490156,    "i" : -14150646,    "j" : -14145486,    "k" : -14800856,    "l" : -8884646,    "m" : -6250346,    "n" : -7568766,    "o" : -12176866,    "p" : -16119296,    "q" : -12834786,
    "r" : -13492726,    "s" : -8887246,    "t" : -7568796,    "u" : -12832226,    "v" : -14140346,    "w" : -14148076,    "x" : -10203096,    "y" : -3623806,    "z" : -8231876,    "{" : -14148086,    "|" : -15461346,    "}" : -8889806,    "~" : -11518946,    "¡" : -12827056,    "¢" : -9545146,    "£" : -14150636,    "¤" : -6913446,    "¥" : -8229286,    "¦" : -11516356,    "§" : -12827046,
    "¨" : -13484986,    "©" : -12176856,    "ª" : -8226726,    "«" : -10850696,    "¬" : -10203066,    "®" : -7568776,    "¯" : -12169126,    "°" : -9550306,    "±" : -8887216,    "²" : -8889796,    "³" : -9545156,    "´" : -6255516,    "µ" : -2307946,    "¶" : -5600166,    "·" : -8887226,    "¸" : -9537406,    "¹" : -8224126,    "º" : -12176876,    "»" : -4942236,    "¼" : -4284296,
    "½" : -6255486,    "¾" : -14803446,    "¿" : -10205646,    "À" : -15463936,    "Á" : -11516376,    "Â" : -13492716,    "Ã" : -9547726,    "Ä" : -6260666,    "Å" : -11511206,    "Æ" : -10860996,    "Ç" : -12171696,    "È" : -8889786,    "É" : -13484996,    "Ê" : -4937056,    "Ë" : -12169136,    "Ì" : -15458796,    "Í" : -8226696,    "Î" : -11518926,    "Ï" : -3621206,    "Ð" : -10197916,
    "Ñ" : -14148056,    "Ò" : -14145516,    "Ó" : -12174306,    "Ô" : -7568786,    "Õ" : -4281716,    "Ö" : -7571346,    "Ø" : -10858416,    "Ù" : -8224146,
}, 3);
			return get(0, 0, 220, 75);
		},
		axe_4: function(){
			background(0, 0);
			
			Display.pixelArt([
    '                                                      !"#!                ',
    '                                                  $%&\'()*(\'&+,            ',
    '                                                -./012(34)567(08          ',
    '                                              !9)/:;<=>?@AB;CD6CEF        ',
    '                                             -EG(HI\';JKLMLN*O(;PQRS       ',
    '                                            F,    T)3U)V0WX7(YZ;:7[-      ',
    '                                                    ]^_`a;7bcTd    ef     ',
    '                                                    ghi;@j`kl             ',
    '      M                                             X;OiHm3no             ',
    '    pXQ)qL                                     rstuo_tmvLsmtwx            ',
    '  _;B3yhst(z{*|                           q} ~ ¡Oo¢gmLB:£¤G¥oj)  B@)_¦    ',
    ' §))K¨©+K=ª(L_G«3jv`^)jvomooooooo¬`oouuoo®)m4¯;i3`I=§&¨K¤°£/*w¬±u²³´µQ:E¶ ',
    '+§m·2¤S¸¨X¹ºO»º¼m^ihor½m^^mx½;s¾;iO¿ÀÁÁÁÁ@³ÂÃQÄDÅoÆ+ÇÈÉ/ÈÊ1ËPÌ;TmX1ÍÎ]    ',
    ' ¦Ïh;XÉX;^3;`;;;3))3*;A)B3;;;;;h;;Ð^)Ñ33i``;3;O`hiÒZÂyÇÓ88ÔÑÕk;  ÖÈ       ',
    '   ]®uØÊX±                                     ¡i\'o;«Õm;?3ÙjÀmuV          ',
    '     0Ú  À                                     cÂsio);¬oÄr_(ÛM            ',
    '                                                    `Üv;:iÝosc            ',
    '                                                    ±mÞ¾\'¢`oß[            ',
    '                                                   ÖAv*¬³353àg            ',
    '                                           á¶     âP;ãB=23gVÊä4@          ',
    '                                           åÓe@Kmt)BÞÎææÎç\'/J;ODLGeè      ',
    '                                             égê´LÕuA²XL7XX\'²±P:D"-       ',
    '                                              +K*¨E)3wÕmir¾±_JgÄ-ë        ',
    '                                                .Ç=ì¤íÈí\'#FÎ3g%î          ',
    '                                                  8É/(A3LC\'Gé8            ',
    '                                                     ïðáEðå               ',
], {
    "0" : -2972326,
    "1" : -998551,    "2" : -1985446,    "3" : -10863586,    "4" : -9872851,    "5" : -4949956,    "6" : -1981576,    "7" : -4946101,    "8" : -998566,    "9" : -1989331,    " " : 0,    "!" : -3901,    "\"" : -990811,    "#" : -1981561,    "$" : -3931,    "%" : -1002421,    "&" : -3959236,    "'" : -6919891,    "(" : -8893666,    ")" : -9876706,    "*" : -10863601,
    "+" : -1989316,    "," : -990841,    "-" : -994711,    "." : -2976196,    "/" : -6923746,    ":" : -1985431,    ";" : -11850481,    "<" : -7899031,    "=" : -9880546,    ">" : -7906801,    "?" : -5929171,    "@" : -5933011,    "A" : -8889826,    "B" : -10867441,    "C" : -8893651,    "D" : -7902916,    "E" : -1981591,    "F" : -994681,    "G" : -5936851,    "H" : -7906771,
    "I" : -10855846,    "J" : -2972311,    "K" : -5936866,    "L" : -7906786,    "M" : -3959206,    "N" : -3959191,    "O" : -12837376,    "P" : -7902931,    "Q" : -6916036,    "R" : -4942231,    "S" : -994726,    "T" : -5929126,    "U" : -5932981,    "V" : -6919876,    "W" : -7902946,    "X" : -9880561,    "Y" : -12829636,    "Z" : -10859701,    "[" : -3955351,    "]" : -3959221,
    "^" : -11850466,    "_" : -5932996,    "`" : -13820416,    "a" : -6912151,    "b" : -9880576,    "c" : -6912136,    "d" : -2968441,    "e" : -4949971,    "f" : -986941,    "g" : -8889811,    "h" : -11846626,    "i" : -12833521,    "j" : -14803441,    "k" : -12833491,    "l" : -5925256,    "m" : -12833506,    "n" : -11846641,    "o" : -13820401,    "p" : -7910626,    "q" : -2964556,
    "r" : -10859716,    "s" : -11846611,    "t" : -13816546,    "u" : -13820386,    "v" : -12837361,    "w" : -12829651,    "x" : -7902901,    "y" : -5933026,    "z" : -8889796,    "{" : -5925241,    "|" : -5929111,    "}" : -4938346,    "~" : -4942216,    "¡" : -5921386,    "¢" : -13824241,    "£" : -1985461,    "¤" : -3963091,    "¥" : -13816531,    "¦" : -994636,    "§" : -7910641,
    "¨" : -2980051,    "©" : -1985476,    "ª" : -11838886,    "«" : -13824256,    "¬" : -14807296,    "®" : -10867456,    "¯" : -11850496,    "°" : -1989301,    "±" : -9876691,    "²" : -8893681,    "³" : -4942246,    "´" : -1989286,    "µ" : -4942261,    "¶" : -990796,    "·" : -9884401,    "¸" : -3963106,    "¹" : -8882056,    "º" : -5929141,    "»" : -5929156,    "¼" : -11854321,
    "½" : -10863571,    "¾" : -10859731,    "¿" : -7906756,    "À" : -8885941,    "Á" : -7899046,    "Â" : -9872821,    "Ã" : -5925271,    "Ä" : -6916021,    "Å" : -2968456,    "Æ" : -9865096,    "Ç" : -6923761,    "È" : -4946116,    "É" : -4949986,    "Ê" : -6919906,    "Ë" : -4953811,    "Ì" : -9872806,    "Í" : -1993156,    "Î" : -3963076,    "Ï" : -8893696,    "Ð" : -11854336,
    "Ñ" : -10859746,    "Ò" : -14807281,    "Ó" : -2972341,    "Ô" : -2972356,    "Õ" : -11842756,    "Ö" : -1977661,    "Ø" : -11842741,    "Ù" : -10855861,    "Ú" : -1989271,    "Û" : -8889781,    "Ü" : -15790321,    "Ý" : -15790336,    "Þ" : -6923731,    "ß" : -7902886,    "à" : -11846581,    "á" : -1002406,    "â" : -4946131,    "ã" : -4946086,    "ä" : -9868966,    "å" : -990781,
    "æ" : -1985416,    "ç" : -2968471,    "è" : -990826,    "é" : -2976211,    "ê" : -9876721,    "ë" : -7786,    "ì" : -2976181,    "í" : -2968486,    "î" : -7801,    "ï" : -7771,    "ð" : -994696,
}, 3);
			ctx.shadowBlur = 0;

			return get(0, 0, 220, 75);
		},
		shield: function(){
			background(0, 0);
			Display.pixelArt([
    '            ',
    '        !   ',
    '       !"#  ',
    '      $%&\'  ',
    '     "%"()  ',
    '    "%%("*+ ',
    '  ,-"./.(01 ',
    ' 2!-(!34/"5.',
    ' 6.7!2!,/%(8',
    ' (!9:9(".7!;',
    ' ($/6(4<(=!>',
    ' (.?@@7A2+!$',
    ' (./BC(/@/!;',
    '/($/D2((A#(6',
    '((!/E6/2/FGH',
    '((.(I2JK!LJ2',
    'A($!$/!JMNG.',
    'A(.7M(J/I+&6',
    '((@(M/8"JOJ$',
    'A6P((A/AJC66',
    'A0Q/AMRS//J(',
    'A8MA(Q8(&A2(',
    ' 82!A@JRJ$!/',
    '  (!8JA/J@6T',
    '  A6/JA/08A(',
    '  828/((/((1',
    '  !JMAM9A(A!',
    '   A26/(2<2 ',
    '   /(R/4A(8 ',
    '   A(QR/J4A ',
    '    /(8/(A( ',
    '    /(J.RA  ',
    '     /(8@M  ',
    '     /A8/A  ',
    '      8A4   ',
    '      U8A   ',
    '       /%   ',
], {
    "0" : -16777216,
    "1" : -10465200,    "2" : -13623264,    "3" : -9416640,    "4" : -15720416,    "5" : -9416656,    "6" : -13619168,    "7" : -14667728,    "8" : -15724544,    "9" : -15724512,    " " : 0,    "!" : -13619152,    "\"" : -12566464,    "#" : -4144960,    "$" : -12570576,    "%" : -11513776,    "&" : -11517888,    "'" : -10461104,    "(" : -14671840,    ")" : -9408416,    "*" : -6250352,
    "+" : -5201760,    "," : -12566448,    "-" : -8355712,    "." : -12566480,    "/" : -15724528,    ":" : -10469328,    ";" : -10465232,    "<" : -14671824,    "=" : -6250336,    ">" : -8359856,    "?" : -16773120,    "@" : -12570592,    "A" : -14671856,    "B" : -13623296,    "C" : -8363968,    "D" : -9412544,    "E" : -11517904,    "F" : -5201792,    "G" : -11513792,    "H" : -11517920,
    "I" : -12570608,    "J" : -14675952,    "K" : -10465216,    "L" : -991040,    "M" : -13623280,    "N" : -3096400,    "O" : -7307152,    "P" : -6254464,    "Q" : -14675968,    "R" : -15728640,    "S" : -15720432,    "T" : -13615040,    "U" : -9412512,
}, 6);
			return get(0, 0, 60, 210);
		},
	},
};

// INPUT \\
class Keys {
    constructor(){
        this.keys = {
        	'up': ['ArrowUp', 'KeyW'],
        	'down': ['ArrowDown', 'KeyS'],
        	'left': ['ArrowLeft', 'KeyA'],
        	'right': ['ArrowRight', 'KeyD'],
        	'zoomIn': ['KeyC'],
        	'zoomOut': ['KeyX'],
        	'space': ['Space'],
        	'interact': ['KeyE'],
        	'reset': ['KeyR'],
        	'sprint': ['ShiftLeft'],
        	'enter': ['Enter'],
        	'buttonUp': ['KeyI'],
        	'buttonDown': ['KeyK'],
        	'dismiss': ['KeyB'],
        };
        for (let i = 0; i < 9; i ++){
        	this.keys[i + 1] = [`Digit${i + 1}`];
        }
        
        this.pressed = {};
        this.released = {};
        this.clicked = {};
        
        document.addEventListener('keyup', (e) => {
            delete this.pressed[e.code];
            this.released[e.code] = true;
        });
        document.addEventListener('keydown', (e) => {
            this.pressed[e.code] = true;
            this.clicked[e.code] = true;
        });
    }
    update(){
        for (let k in this.clicked) delete this.clicked[k];
        for (let k in this.released) delete this.released[k];
    }
    keyByValue(obj, v){
        return Object.keys(obj).find(k => obj[k].includes(v));
    }
    getAction(action, key){
        for (let k in this.keys){
                for (let v = 0; v < this.keys[k].length; v ++){
                const value = this.keys[k][v];
                if (value in action){
                    const act = this.keyByValue(this.keys, value);
                    if (act === key) return true;
                }
            }
        }
        return false;
    }
    press(key){
        return this.getAction(this.pressed, key);
    }
    release(key){
        return this.getAction(this.released, key);
    }
    click(key){
        return this.getAction(this.clicked, key);
    }
}
let keys = new Keys();

class Mouse {
    constructor(config){
        this.x = mouseX;
        this.y = mouseY;
        
        this.clicked = {};
        this.released = {};
        this.pressed = {};
        
        const buttons = ['left', 'middle', 'right'];
        
        this.cam = config.cam;
        
        document.addEventListener('mouseup', (e) => {
            this.released[buttons[e.button]] = true;
            this.clicked[buttons[e.button]] = false;
            this.pressed[buttons[e.button]] = false;
        });
        document.addEventListener('mousedown', (e) => {
            this.released[buttons[e.button]] = false;
            this.clicked[buttons[e.button]] = true;
            this.pressed[buttons[e.button]] = true;
        });
    }
    update(){
        this.x = mouseX;
        this.y = mouseY;
        this.clicked = {};
        this.released = {};
    }
    intersects(shape, obj){
        if (shape === 'rect'){
            return this.x > obj.x && this.x < obj.x + obj.w &&
                   this.y > obj.y && this.y < obj.y + obj.h;
        } else if (shape === 'circle') {
            const r = obj.r ? obj.r / 2 : Math.max(obj.w, obj.h) / 2;
            return Funcs.dist(this, obj) <= r;
        }
        return;
    }
}
let mouse = new Mouse({ cam: null });

// CLASSES \\

// PARTICLES
class Particle {
	constructor(config){
	    this.x = config.x;
	    this.y = config.y;
	    
	    this.w = config.w;
	    this.h = config.h;
	    
	    this.xVel = random(0, 1);
	    this.yVel = random(-0.5, 0);
	    
	    this.clr = config.clr;
	    
	    this.gravity = config.gravity !== undefined ? config.gravity: config.gravity;
	    
	    this.angle = Math.random() * 360;
	    
	    this.weight = config.weight !== null ? config.weight: 4;
	}
	display(){
		fill(this.clr);
		
		pushMatrix();
		rectMode(CENTER);
		translate(this.x, this.y);
		rotate(this.angle);
		
		rect(0, 0, this.w, this.h);
		
		popMatrix();
	}
	run(){
	    this.yVel += (this.gravity * this.weight) / 10;
	    
	    this.x += this.xVel;
	    this.y += this.yVel;
	    
	    this.xVel *= 0.99999;
	}
}

// TYPING TEXT
class TypingText {
	constructor(config){
		this.x = config.x;
		this.y = config.y;
		
		this.txt = config.txt;
		
		this.sz = config.sz;
		
		this.options = config.options;
		
		this.index = 0;
		this.speed = config.speed;
		this.setDelay = config.delay;
		this.delay = config.delay;
		this.dir = 1;
		
		this.clr = config.clr || 'black';
	}
	display(){
		ctx.fillStyle = this.clr;
		Display.text(this.txt.substring(0, this.index), this.x, this.y + sin(frameCount * 3) * 5, this.sz, {...this.options});
	}
	update(){
		if (this.delay <= 0){
			this.index += this.dir;
			this.delay = this.setDelay;
		}
		this.index = constrain(this.index, 0, this.txt.length)
		this.delay -= this.speed;
	}
	updatePos(obj){
		this.x = obj.x;
		this.y = obj.y;
	}
	run(){
		this.display();
		this.update();
	}
}

// ANIMATED ART
class AnimatedArt {
	/**
	 * Display art with multiple frames to make animation
	 * @constructor
	 * 
	 * @param {number} frames - Number of frames in animation
	 * @param {number} [delay=60] - Delay between each frame
	 * @param {boolean} [bounce=false] - Whether or not the animation restarts or bounces back
	 * @param {Object} offset - Art position
	 * @param {number} w - Width of each image
	 * @param {number} h - Height of each image
	**/
    constructor(game, frames, delay=60, bounce=false, offset={x: 0, y: 0}, w, h){
        this.frames = frames;
        this.curFrame = 0;
        this.maxFrames = this.frames.length;
        this.delay = delay;
        this.timer = this.delay;
        this.bounce = bounce;
        this.dir = 1;
        
        this.w = w;
        this.h = h;
        this.offset = offset;
        
        this.game = game;
    }
    update(){
        if (this.timer <= 0){
            if (!this.bounce){
                if (this.curFrame < this.maxFrames - 1) {
                    this.curFrame ++;
                } else {
                	this.finished = true;
                    this.curFrame = 0;
                }
            } else {
                if (this.curFrame === this.maxFrames - 1){
                    this.dir = -1;
                } else if (this.curFrame === 0){
                    this.dir = 1;
                }
                this.curFrame += this.dir;
            }
            this.timer = this.delay;
        }
        this.timer --;
    }
    display(){
        image(this.frames[this.curFrame], this.offset.x, this.offset.y, this.w, this.h);
    }
    setFrames(frames, reset=false){
        this.frames = frames;
        this.maxFrames = frames.length;
        if (reset) this.curFrame = 0;
    }
    run(){
    	if (!this.game.loading){
    		this.display();
    		this.update();
    	}
    }
}

// FIRE
class Fire {
	constructor(game, config){
		this.x = config.x;
		this.y = config.y;
		
		this.w = config.w;
		this.h = config.h;
		
		this.game = game;
		this.executable = 'display';
	}
	initArt(){
		let frames = [];
		Object.keys(imgs.fire).forEach(key => frames.push(imgs.fire[key]));
		this.img = new AnimatedArt(this.game, frames, 5, false, {...this}, this.w, this.h);
		this.init = true;
	}
	display(){
		if (!this.init){
			this.initArt();
		} else {
			this.img.run();
		}
	}
}

// DISPLAYS
class DisplayImg {
	/**
	 * Display images throughout the world
	 * @constructor
	 * 
	 * @param config {Object} - Configure the image
	 * @param config.x {number} - X position
	 * @param config.y {number} - Y position
	 * @param config.w {number} - Image width
	 * @param config.h {number} - Image height
	 * @param config.img {Object} - Image
	**/
	constructor(game, config){
		this.x = config.x;
		this.y = config.y;
		
		this.w = config.w;
		this.h = config.h;
		
		this.img = config.img;
		
		this.game = game;
		this.executable = 'display';
	}
	display(){
		image(this.img, this.x, this.y, this.w, this.h);
	}
}

// PHYSICS OBJECT
class PhysicsObj {
	/**
	 * Create a new body that interacts with other bodies using Matter.js
	 * @constructor
	**/
	constructor(config){
		this.x = config.x;
		this.y = config.y;
		
		if (config.circle){
			this.r = config.r
			this.body = config.body ?? Bodies.circle(this.x, this.y, this.r/2, {
				object: this,
				isStatic: config.static || false,
			})
		} else {
			this.w = config.w;
			this.h = config.h;
			this.radius = config.radius || 0;
			this.body = config.body ?? Bodies.rectangle(this.x, this.y, this.w, this.h, {
				object: this,
				isStatic: config.static || false,
			});
		}
		
		this.exists = true;
		
		if (this.alive || this.alive === undefined) Composite.add(engine.world, this.body);
	}
	updatePos(updateAngle=true){
		this.x = this.body.position.x;
		this.y = this.body.position.y;
		if (updateAngle) this.angle = this.body.angle;
	}
	updateBody(){
		if (typeof this.offset === 'object'){
			Body.setPosition(this.body, {
				x: this.x + Math.cos(this.angle) * this.offset.x - this.offset.y * Math.sin(this.angle),
				y: this.y + this.offset.x * Math.sin(this.angle) + this.offset.y * Math.cos(this.angle)
			});
		} else {
			this.body.position.x = this.x;
			this.body.position.y = this.y;
		}
		this.body.angle = this.angle;
	}
	move(x, y){
		Body.setVelocity(this.body, { x, y });
	}
	accelerate(x, y){
		Body.applyForce(this.body, this.body.position, { 
			x, y
		});
	}
}

// ENTITY
class Entity extends PhysicsObj {
	/**
	 * Simple class for creating new entities
	 * @extends
	**/
	constructor(game, config){
		super(config);
		
		this.game = game;
		this.executable = 'run';
		
		this.stunTimer = 0;
		
		this.resistance = 1;
	}
	takeDamage(amt, kb, src){
		this.health -= amt * this.resistance;
		this.damageTimer = 10;
		if (src){
			this.stunTimer = 5;
			
			const angle = Math.atan2(src.y - this.y, src.x - this.x);
			this.move(
				-Math.cos(angle) * kb + this.body.velocity.x,
				-5
			);
		}
	}
	run(){
		this.display();
		if (this.game.active){
			this.update();
			this.updatePos();
		}
		
		this.stunTimer --;
	}
}

// PLAYER
class Player extends Entity {
	constructor(game, config){
		config.w = ENTITY_SIZE.w;
		config.h = ENTITY_SIZE.h;
		super(game, config);
		Body.set(this.body, {
			label: "player",
		    inertia: Infinity,
		    collisionFilter: {
		    	category: categories.player,
		    	mask: categories.bound | categories.enemy,
		    	group: 0,
		    },
		});
		
		this.setX = this.x;
		this.setY = this.y;
		
		this.v = { x: 0, y: 0 };
		this.speed = 6;
		this.maxSpeed = 6;
		
		this.dir = 1;
		this.targetDir = 1;
		
		this.maxHealth = 20;
		this.health = this.maxHealth;
		this.displayHealth = this.health / 2;
		
		this.maxAttackTimer = 19;
		this.attackTimer = 0;
		this.attacks = ['swing', 'stab'];
		this.attackType = 0;
		
		this.items = {};
		
		this.kills = {
			construct: 0,
			daydeath: 0,
			keese: 0,
			total: 0,
		};
		
		this.state = "idle";
		this.animations = {
			"idle": new AnimatedArt(this.game, [imgs.player.idle], 7, false, this, this.w, this.h),
			"fall": new AnimatedArt(this.game, [imgs.player.fall], 7, false, this, this.w, this.h),
			"walk": new AnimatedArt(this.game, [imgs.player.walk_0, imgs.player.walk_1, imgs.player.walk_2, imgs.player.walk_3, imgs.player.walk_4, imgs.player.walk_5], 7, false, this, this.w, this.h),
			
		};
		
		this.maxStamina = 100;
		this.stamina = this.maxStamina;
		this.displayStamina = this.stamina;
		this.staminaGlowTimer = 0;
		this.recoverGlowTimer = 0;
		this.staminaStack = [];
	}
	reset(death){
		Body.setPosition(this.body, {
			x: this.setX,
			y: this.setY
		});
		Body.setVelocity(this.body, {
			x: 0, 
			y: 0,
		})
		this.x = this.setX;
		this.y = this.setY;
		if (death){
			this.health = this.maxHealth;
		}
	}
	initAnimation(state){
		if (this.initArt){
			this.img = this.animations[state];
			this.img.curFrame = 0;
			this.init = true;
		} else {
			
			this.animations = {
				"idle": new AnimatedArt(this.game, [imgs.player.idle], 0, false, { x: 0, y: 0 }, this.w, this.h),
			// "fall": new AnimatedArt(this.game, [imgs.player.fall], 7, false, { x: 0, y: 0 }, this.w, this.h),
				"walk": new AnimatedArt(this.game, [imgs.player.walk_0, imgs.player.walk_1, imgs.player.walk_2, imgs.player.walk_3, imgs.player.walk_4, imgs.player.walk_5], 10, false, { x: 0, y: 0 }, this.w, this.h),
				
				"shield_walk": new AnimatedArt(this.game, [imgs.player.shield_walk_0, imgs.player.shield_walk_1, imgs.player.shield_walk_2, imgs.player.shield_walk_3, imgs.player.shield_walk_4, imgs.player.shield_walk_5], 10, false, { x: 0, y: 0 }, this.w, this.h),
				"swing": new AnimatedArt(this.game, [imgs.player.swing_0, imgs.player.swing_1, imgs.player.swing_2, imgs.player.swing_3], 5, false, { x: 0, y: 0 }, this.w, this.h),
				
				"stab": new AnimatedArt(this.game, [imgs.player.stab_0, imgs.player.stab_1, imgs.player.stab_2], 5, false, { x: 0, y: 0 }, this.w, this.h),
			};
			this.initArt = true;
		}
	}
	setState(state){
		if (this.state === state && this.img) return;
		this.state = state;
		this.initAnimation(state);
	}
	staminaWheel(x, y, radius, stam, maxim, prev){
		strokeCap(SQUARE);
	    if(this.staminaGlowTimer > 0) {
	    	ctx.shadowBlur = 5;
	    	ctx.shadowColor = 'rgb(255, 104, 87)';
	    }
	    stroke(this.staminaGlowTimer > 0 ? 255 : color(255, 0, 0));
	    strokeWeight(radius/3);
	    noFill();
	    arc(x, y, radius*2/3, radius*2/3, -90, (prev/maxim)*360-90);
	    
	    ctx.shadowBlur = 0;
	    
	    if (this.recoverGlowTimer > 0){
	    	ctx.shadowBlur = this.recoverGlowTimer;
	    	ctx.shadowColor = 'rgb(178, 255, 178)';
	    }
	    
	    stroke(0, 255, 0);
	    arc(x, y, radius*2/3, radius*2/3, -90, (stam/maxim)*360-90);
	    
	    ctx.shadowBlur = 0;
	    
	    this.staminaStack.push(stam);
	    if (this.staminaStack[this.staminaStack.length-2] - this.staminaStack[this.staminaStack.length-1] > 1) {
	        this.staminaGlowTimer = 30;
	    }
	    if (this.staminaStack.length > 20) {
	        this.staminaStack.shift();
	    }
	    if (this.stamina < this.maxStamina){
	    	this.recovered = false;
	    }
	    if (this.stamina >= this.maxStamina && !this.recovered){
	    	this.recovered = true;
	    	this.tired = false;
	    	this.recoverGlowTimer = 20;
	    }
	   	if (this.stamina <= 0){
	   		this.tired = true;
	   	}
	    
	    this.displayStamina = Funcs.lerp(this.displayStamina, this.stamina, 0.1);
	    
	    this.stamina += 0.2;
	    this.stamina = constrain(this.stamina, 0, this.maxStamina);
	    
	    this.staminaGlowTimer --;
	    this.recoverGlowTimer --;
	}
	display(){
		
		rectMode(CENTER);
		// fill(255, 0, 0);
		// rect(this.x, this.y, this.w, this.h);
		pushMatrix();
		
		translate(this.x, this.y);
		scale(this.dir, 1);
		
		imageMode(CENTER);
		pushMatrix();
		if (this.state === 'swing'){
			switch (this.img.curFrame){
				case 0: 
					translate(15, -106);
					rotate(-30);
					// image(imgs.weapons.slash_0, 33, -28);
				break;
				case 1: 
					translate(65, -97);
					rotate(-10);
					// image(imgs.weapons.slash_1, 21, -29);
				break;
				case 2: 
					translate(65, -26);
					rotate(13);
					// image(imgs.weapons.slash_2, 24, -24);
				break;
				case 3: 
					translate(31, 3);
					// image(imgs.weapons.slash_3, 32, -20);
				break;
			}
		} else if (this.state === 'stab'){
			switch (this.img.curFrame){
				case 0: 
					translate(42, -32);
					rotate(-10);
				break;
				case 1: 
					translate(65, -29);
					rotate(-10);
				break;
				case 2: 
					translate(73, -50);
					rotate(-10);
				break;
			}
		} else {
			translate(10, 10);
			rotate(20);
		}
		if (this.state === 'stab' || this.state === 'swing'){
			scale(0.6)
			image(imgs.weapons.axe_4, 0, 0);
		}
		popMatrix();
		if (!this.init){
	    	this.initAnimation("idle");
	    } else {
	   		const frame = this.img.frames[this.img.curFrame];
		  	this.img.w = frame.width * (this.h / frame.height);
		  	this.img.h = frame.height * (this.h / frame.height);
		  	this.img.run();
		  	// this.img.curFrame = 5;
	    }
	    
	    if (this.state === 'shield_walk'){
			switch (this.img.curFrame){
				case 0: 
					translate(30, -55);
					rotate(10);
					// image(imgs.weapons.slash_0, 33, -28);
				break;
				case 1: 
					translate(40, -55);
					rotate(10);
					// image(imgs.weapons.slash_1, 21, -29);
				break;
				case 2: 
					translate(30, -55);
					rotate(10);
					// image(imgs.weapons.slash_2, 24, -24);
				break;
				case 3: 
					translate(30, -55);
					rotate(10);
					// image(imgs.weapons.slash_3, 32, -20);
				break;
				case 4: 
					translate(40, -55);
					rotate(10);
					// image(imgs.weapons.slash_3, 32, -20);
				break;
				case 5: 
					translate(30, -55);
					rotate(10);
					// image(imgs.weapons.slash_3, 32, -20);
				break;
			}
			image(imgs.weapons.shield, 0, 0, imgs.weapons.shield.width * 0.4, imgs.weapons.shield.height * 0.4);
		}
		popMatrix();
		
	    this.staminaWheel(this.x - 60, this.y - 90, 30, this.displayStamina, this.maxStamina, this.staminaStack[0]);
	}
	handleFalling(){
		// Use raycasting to determine if the player can jump
		// Since Matter is tricky sometimes, this was really the only reliable solution I could find
		
		const start = {
		    x: this.body.position.x,
		    y: this.body.position.y + this.h / 2
		};
		
		const end = {
		    x: start.x,
		    y: start.y + 5
		};
		
		const w = this.w - 2;
		
		const labels = ['bound', 'stairs', 'enemy'];
		const hits = Matter.Query.ray(Composite.allBodies(engine.world).filter(body => labels.includes(body.label)), start, end, w);
		
		strokeWeight(4)
		stroke(0, 0, 255);
// 		line(start.x, start.y, end.x, end.y);
		noStroke();
		
		this.falling = hits.length === 0;
		
		// Set fall state
		// if (this.body.velocity.y > 3 && this.falling){
		// 	this.setState('fall');
		// }
	}
	handleDir(){
		this.dir = Funcs.lerp(this.dir, this.targetDir, 0.1);
	}
	handleHealth(){
		this.displayHealth = this.health / 2;
	}
	handleAttack(){
		this.holdingShield = mouse.pressed.right;
		if (mouse.clicked.left && this.attackTimer <= 0 && !this.tired){
			this.stamina -= 7;
			if (this.attackType === 1){
				this.accelerate(2 * this.targetDir, 0);
			}
			this.hit = false;
			this.attackTimer = this.maxAttackTimer;
		}
		if (this.attackTimer === -1){
			this.attackType ++;
			this.attackType = this.attackType % 2;
		}
		if (this.attackTimer > 0 && this.attackTimer < 20){
			if (this.attackTimer < 20){
				this.game.enemies.forEach(e => {
					if (e.y > this.y - this.h / 2 - e.h / 2 && e.y < this.y + this.h / 2 + e.h / 2){
						if (this.targetDir === 1){
							if ((e.x - e.w / 2) > this.x && (e.x - e.w / 2) < this.x + 180 && 
								!this.hit){
								e.takeDamage(5, 30, this);
								this.hit = true;
							}
						} else if (this.targetDir === -1){
							if ((e.x + e.w / 2) < this.x - 30 && (e.x + e.w / 2) > this.x - 180 && 
								!this.hit){
								e.takeDamage(5, 30, this);
								this.hit = true;
							}
						}
					}
					if (e.health <= 0){
						const enemyName = e.constructor.name.toLowerCase();
						if (!this.kills[enemyName]){
							this.kills[enemyName] = 1;
						} else {
							this.kills[enemyName] ++;
						}
					}
				});
			}
			this.setState(this.attacks[this.attackType]);
		}
		this.attackTimer --;
	}
	update(){
		this.handleDir();
		this.handleHealth();
		this.handleFalling();
		this.handleAttack();
		
		this.resistance = this.holdingShield ? (this.game.zone === 0 ? 0.1 : 0.25) : (this.game.zone === 0 ? 0.4 : 1);
		
		if (frameCount % 60 === 0 && this.health > 0){
			this.health += 1;
		}
		
		if (this.x > this.game.camera.bounds.max.x && this.game.rendered && this.game.zone !== 0){
			this.game.zone ++;
			this.setX = this.game.camera.bounds.min.x;
			this.game.reset();
			// if (this.game.rendered) this.reset();
		} else if (this.x < this.game.camera.bounds.min.x && this.game.rendered && this.game.zone !== 0) {
			this.game.zone --;
			this.setX = this.game.camera.bounds.max.x;
			this.game.reset();
			// if (this.game.rendered) this.reset();
		}
		
		if (keys.press("sprint") && this.stamina > 0){
			this.stamina -= 0.4;
			this.speed = this.maxSpeed + 3;
		} else {
			this.speed = this.maxSpeed;
		}
	
		if (keys.press("left")){
			this.v.x = -this.speed;
			this.targetDir = -1;
			if (this.attackTimer <= 0) this.setState(this.holdingShield ? ('shield_walk') : 'walk');
		} else if (keys.press("right")){
			this.v.x = this.speed;
			this.targetDir = 1;
			if (this.attackTimer <= 0) this.setState(this.holdingShield ? ('shield_walk') : 'walk');
		} else {
			this.v.x = 0;
			if (this.attackTimer <= 0) {
				if (this.holdingShield){
					this.img.timer = 1;
					this.setState('shield_walk');
				} else {
					this.setState('idle');
				}
			}
		}
		
		if (keys.press("up") && !this.falling && this.body.velocity.y > -1){
			Body.setVelocity(this.body, {
				x: this.body.velocity.x,
				y: -16,
			});
		}
		if (this.stunTimer <= 0) this.move(this.v.x, this.body.velocity.y);
		
		this.health = constrain(this.health, 0, this.maxHealth);
	}
}

// ITEM POPUP
class ItemPopup {
	constructor(config){
		this.opacity = 0;
		this.y = 50;
		
		this.imgAngle = config.imgAngle;
		this.img = config.img;
		this.name = config.name;
		this.description = config.description;
		this.action = config.action;
		this.w = config.w;
		this.h = config.h;
	}
	display(){
		ctx.globalAlpha = this.opacity;
		
		pushMatrix();
		translate(0, this.y);
		
		noStroke();
		fill(0, 200)
		rect(width / 2, height / 2, 400, 150);
		
		const w = this.w || 140;
		const h = this.h || this.img.height * (w / this.img.width);
		pushMatrix();
		translate(width / 2 - 130, height / 2);
		rotate(this.imgAngle || 0);
		imageMode(CENTER);
		image(this.img, 0, 0, w, h);
		popMatrix();
		
		ctx.fillStyle = 'white';
		Display.text(this.name, width / 2 - 60, height / 2 - 40, 16, { format: "900", align: "left", font: "Cinzel" });
		Display.text(this.description, width / 2 - 60, height / 2 - 10, 10, { lineSpacing: 14, align: "left", font: "Cinzel" });
		
		fill(255);
		translate(width / 2, height / 2 + 75 + sin(frameCount * 3) * 2);
		scale(0.6);
		triangle(-10, -10, 5, 10, 20, -10);
		
		noFill();
		stroke(255);
		strokeWeight(2);
		triangle(-19, -14, 6, 18, 29, -14);
		
		popMatrix();
		
		ctx.globalAlpha = 1;
	}
	update(){
		if (this.dismissed){
			this.opacity = Funcs.lerp(this.opacity, 0, 0.05);
		} else {
			this.opacity = Funcs.lerp(this.opacity, 1, 0.05);
		}
		this.y = Funcs.lerp(this.y, 0, 0.05);
		
		if (keys.click("enter") && this.opacity > 0.9){
			this.action();
			this.dismissed = true;
		}
	}
	run(){
		this.display();
		this.update();
	}
}

// QUESTS
class Quest {
	constructor(npc, config){
		this.npc = npc;
		
		this.name = config.name;
		this.condition = config.condition;
		
		this.txt = config.txt;
		this.progressTxt = config.progressTxt;
		
		this.reward = config.reward;
		
		this.popupTimer = 180;
		this.popupX = width * 2;
		this.ringSize = 0;
	}
	display(){
		if (this.condition()){
			ctx.fillStyle = 'rgb(0, 255, 0)';
		} else {
			ctx.fillStyle = 'white';
		}
		Display.text(this.txt + "\n" + this.progressTxt(), 35, 130, 16, { align: "left" });
	}
	runPopup(){
		fill(0, 120);
		
		if (this.popupTimer <= 0){
			this.popupX = Funcs.lerp(this.popupX, -width / 2 - 100, 0.1);
		} else {
			this.popupX = Funcs.lerp(this.popupX, width / 2, 0.1);
		}
		rect(this.popupX, 200, 950, 100);
		
		strokeWeight(2);
		stroke(255, 227, 102, 255 - map(this.ringSize, 0, 900, 0, 255));
		noFill();
		ellipse(width / 2, 200, this.ringSize, this.ringSize);
		
		ctx.fillStyle = 'white';
		Display.text(this.name, this.popupX, 160, 34, { font: "Cinzel", format: "900" });
		if (this.condition()){
			Display.text("COMPLETE", this.popupX, 210, 24, { format: "900" });
		} else {
			Display.text(this.txt, this.popupX, 210, 24, { format: "900" });
		}
		
		if (this.popupTimer <= 120){
			this.ringSize = Funcs.lerp(this.ringSize, 900, 0.03);
		}
		
		if (this.condition() && !this.finished){
			this.finished = true;
			this.ringSize = 0;
			this.popupTimer = 120;
		}
		
		this.popupTimer = constrain(this.popupTimer, 0, 180);
		this.popupTimer --;
	}
	update(){
		
	}
	run(){
		if (this.popupTimer <= 0 && !this.condition()) this.display();
		this.update();
		this.runPopup();
	}
}

// CONVERSATION
class Conversation {
	constructor(game, config){
		this.x = 166; 
		this.y = 440;
		this.translateY = 0;
		
		this.arr = config.arr;
		
		this.dialogueNum = config.dialogueNum;
		this.position = 0;
		this.speed = 0.35;
		this.finished = false;
		this.selected = 0;
		
		this.active = true;
		
		this.game = game;
		this.curOption = this.arr[this.dialogueNum].options[this.selected];
		
		this.quest = config.quest;
		
		this.speaker = config.speaker;
	}
	display(){
		pushMatrix();
		translate(0, this.translateY);
    	const convoLine = this.arr[this.dialogueNum].dialogue.substring(0, this.position);

		if (this.position > this.arr[this.dialogueNum].dialogue.length) {
		    this.finished = true;
		} else {
		    this.finished = false;
		}
		
		fill(0, 120);
		rect(width / 2, height - 100, width, 200);
		
		if (this.speaker){
			const w = 150;
			const h = this.speaker.img.height * (w / this.speaker.img.width);
			imageMode(CORNER);
			image(this.speaker.img, 10, this.y - 100, w, h);
			imageMode(CENTER);
		}
		
		ctx.fillStyle = 'white';
		Display.text(convoLine, this.x + 10, this.y + 10, 16, { align: "left" });
		
		if (this.arr[this.dialogueNum].options) {
			const offsetY = 32 + convoLine.split("\n").length * 32;
			const gap = 32;
			
		    for (var i = 0; i < this.arr[this.dialogueNum].options.length; i++) {
		        Display.text(this.arr[this.dialogueNum].options[i].line, this.x + 30, this.y + offsetY + i * gap, 16, { align: "left" });
            }

			fill(0, 0, 255);
			Display.text('>', this.x + 10, this.y + offsetY + this.selected * gap, 16, { align: "left" });

		}
		
		this.position += this.speed;
		popMatrix();
	}
	update(){
		
		if (this.arr[this.dialogueNum].options){
			if (keys.click("buttonUp") && this.selected > 0) {
				this.selected -= 1;
			}
			if (keys.click("buttonDown") && this.selected < this.arr[this.dialogueNum].options.length - 1){
				this.selected += 1;
			}
		}
		if (keys.click("enter")){
			if (this.finished) {
				if (this.dialogueNum < this.arr.length - 1){
				this.curOption = this.arr[this.dialogueNum].options[this.selected];
					if (!this.curOption.leads){
						this.dialogueNum ++;
					} else {
						this.dialogueNum = this.curOption.leads;
					}
				    if (this.arr[this.dialogueNum].item){
				        this.game.popup = this.arr[this.dialogueNum].item;
				    }
					this.position = 0;
					this.selected = 0;
					if (this.curOption.action) {
						this.curOption.action();
					}
				} else {
					this.spoke = true;
					if (this.quest){
						this.game.quest = this.quest;
					}
				}
			} else {
				this.position = this.arr[this.dialogueNum].dialogue.length + 1;
			}
		}
		if (this.spoke){
			this.translateY = Funcs.lerp(this.translateY, 300, 0.1);
		}
		
	}
	run(){
		if (this.active){
			this.display();
			this.update();
		}
	}
}

// NPC
class Npc extends Entity {
	constructor(game, config){
		config.w = config.w || ENTITY_SIZE.w;
		config.h = config.h || ENTITY_SIZE.h;
		super(game, config);
		Body.set(this.body, {
			label: "npc",
		    inertia: Infinity,
		    collisionFilter: {
		    	category: categories.npc,
		    	mask: categories.bound,
		    	group: 0,
		    },
		});
		
		this.v = { x: 0, y: 0 };
		this.speed = 6;
		
		this.dir = 1;
		this.targetDir = 1;
		
		this.exists = true;
		
		this.target = config.target;
		
		this.name = config.name;
		
		this.text = new TypingText({
			x: this.x,
			y: this.y,
			txt: INTERACT_MSG,
			speed: 1,
			delay: 5,
			sz: 16,
			clr: 'white'
		});
		
		this.state = "idle";
		
		this.img = config.img;
		
		this.conversation = config.conversation;
		this.quest = config.quest;
		if (this.quest){
			this.conversationBefore = config.conversationBefore;
			this.conversationDuring = config.conversationDuring;
			this.conversationAfter = config.conversationAfter;
		}
	}
	
	display(){
		pushMatrix();
		
		translate(this.x, this.y);
		scale(this.dir, 1);
		
		const w = this.img.width * (this.h / this.img.height);
		const h = this.img.height * (this.h / this.img.height);
		image(this.img, 0, 0, w, h);
		
		popMatrix();
		
	}
	handleFalling(){
		// Use raycasting to determine if the player can jump
		// Since Matter is tricky sometimes, this was really the only reliable solution I could find
		
		const start = {
		    x: this.body.position.x,
		    y: this.body.position.y + this.h / 2
		};
		
		const end = {
		    x: start.x,
		    y: start.y + 5
		};
		
		const w = this.w - 2;
		
		const labels = ['bound', 'stairs'];
		const hits = Matter.Query.ray(Composite.allBodies(engine.world).filter(body => labels.includes(body.label)), start, end, w);
		
		strokeWeight(4)
		stroke(0, 0, 255);
// 		line(start.x, start.y, end.x, end.y);
		noStroke();
		
		this.falling = hits.length === 0;
		
		// Set fall state
		// if (this.body.velocity.y > 3 && this.falling){
		// 	this.setState('fall');
		// }
	}
	handleDir(){
		this.dir = Funcs.lerp(this.dir, this.targetDir, 0.1);
	}
	update(){
		const angle = Math.atan2(this.target.y - this.y, this.target.x - this.x);
		if (Funcs.dist(this, this.target) > 10){
			this.v.x = Math.cos(angle) * this.speed;
		} else {
			this.v.x = 0;
		}
		
		this.handleFalling();
		this.handleDir();
		
		this.move(this.v.x, this.body.velocity.y);
		
		if (this.conversation !== undefined || this.quest){
			if (!this.quest){
				this.conversation.speaker = this;
			} else {
				this.conversationBefore.speaker = this;
				this.conversationAfter.speaker = this;
				this.conversationDuring.speaker = this;
			}
			this.text.run();
			this.text.updatePos({ x: this.x, y: this.y - this.h / 2 - 30});
			if (Funcs.dist(this.game.player, this) <= 160){
				if (keys.click("interact")){
					if (!this.quest){
						this.game.conversation = this.conversation;
					} else {
						if (this.game.quest === this.conversationBefore.quest){
							if (this.conversationBefore.finished){
								this.game.conversation = this.conversationAfter;
							} else {
								this.game.conversation = this.conversationDuring;
							}
						} else {
							this.game.conversation = this.conversationBefore;
						}
					}
				}
				this.text.dir = 1;
			} else {
				this.text.dir = -1;
			}
		}
	}
}

// ENEMY
class Enemy extends Entity {
	constructor(game, config){
		super(game, config);
		Body.set(this.body, {
			label: "enemy",
			inertia: Infinity,
			collisionFilter: {
				category: categories.enemy,
				mask: categories.bound | categories.player,
				group: 0,
			},
		});
		
		// This indicates whether or not the enemy has already been killed.
		this.alive = true;
		
		this.id = config.id;
	}
	run(){
		if (this.game.defeatStack.includes(this.id)){
			this.alive = false;
		}
		if (this.alive){
			if (this.health <= 0){
				this.game.defeatStack.push(this.id);
			}
			this.display();
			this.update();
			this.runAI();
			this.updatePos();
		}
	}
}

// KNIGHT [ENEMY]
class Knight extends Enemy {
	constructor(game, config){
		config.w = 180;
		config.h = 600;
		super(game, config);
		Body.setMass(this.body, 100000);
		
		this.rigs = {
			arms: {
				right: {
					upper: 0,
					lower: 107,
				},
				left: {
					upper: 0,
					lower: 0,
				},
			},
			legs: {
				right: {
					upper: 0,
					lower: 0,
				},
				left: {
					upper: 0,
					lower: 0,
				},
			},
			body: 0,
		};
		
		this.range = {
			min: 300,
			max: 1200,
			attack: 390
		};
		
		this.v = { x: 0, y: 0 };
		this.speed = 8;
		
		this.attackTimer = 0;
		this.maxAttackTimer = 150;
		
		this.dir = 1;
		this.targetDir = 1;
		
		this.type = config.type;
		this.weapon = this.type === 1 ? "axe" : "spear";
		
		this.maxHealth = 100;
		this.health = this.maxHealth;
	}
	display(){
		// fill(255,0,0)
		// rect(this.x,this.y,this.w,this.h)
		
		pushMatrix();
		
		translate(this.x, this.y);
		scale(-this.dir, 1); // Negative direction since sprites were drawn facing left
		
		// LEFT ARM {
		
		pushMatrix();
		
		translate(16, -210);
		rotate(this.rigs.arms.left.upper);
		image(imgs.statues.knight_upper_arm, 0, 92, imgs.statues.knight_upper_arm.width * 1.2, imgs.statues.knight_upper_arm.height * 1.2);
		
		
		pushMatrix();
		
		translate(26, 181);
		rotate(this.rigs.arms.left.lower);
		image(imgs.statues.knight_lower_arm, 0, 68, imgs.statues.knight_lower_arm.width * 1.6, imgs.statues.knight_lower_arm.height * 1.6);
		
		popMatrix();
		
		popMatrix();
		
		// }
		
		// LEFT LEG {
		
		pushMatrix();
		
		translate(-18, 44);
		rotate(this.rigs.legs.left.upper);
		image(imgs.statues.knight_upper_leg, 0, 41, imgs.statues.knight_upper_leg.width * 1.0, imgs.statues.knight_upper_leg.height * 1.0);
		
		popMatrix();
		
		
		pushMatrix();
		
		translate(-29, 102);
		rotate(this.rigs.legs.left.lower);
		image(imgs.statues.knight_lower_leg, 0, 80, imgs.statues.knight_lower_leg.width * 1.2, imgs.statues.knight_lower_leg.height * 1.2);
		
		popMatrix();
		
		// }
		
		pushMatrix();
		
		translate(0, -95);
		rotate(this.rigs.body);
		image(imgs.statues[`knight_${this.type}_head`], 0, 0, imgs.statues[`knight_${this.type}_head`].width * 2, imgs.statues[`knight_${this.type}_head`].height * 2.0);
		
		popMatrix();
		
		// RIGHT LEG {
		
		pushMatrix();
		
		translate(27, 39);
		rotate(this.rigs.legs.right.upper);
		image(imgs.statues.knight_upper_leg, 0, 41, imgs.statues.knight_upper_leg.width * 1.0, imgs.statues.knight_upper_leg.height * 1.0);
		
		popMatrix();
		
		
		pushMatrix();
		
		translate(1, 102);
		rotate(this.rigs.legs.right.lower - 10);
		image(imgs.statues.knight_lower_leg, 8, 89, imgs.statues.knight_lower_leg.width * 1.2, imgs.statues.knight_lower_leg.height * 1.2);
		
		popMatrix();
		
		// }
		
		// RIGHT ARM {
		
		pushMatrix();
		
		translate(16, -210);
		rotate(this.rigs.arms.right.upper);
		image(imgs.statues.knight_upper_arm, 0, 92, imgs.statues.knight_upper_arm.width * 1.2, imgs.statues.knight_upper_arm.height * 1.2);
		
		
		pushMatrix();
		
		translate(26, 181);
		rotate(this.rigs.arms.right.lower);
		
		
		translate(10, 141);
		rotate(-90);
		image(imgs.statues[this.weapon], 0, -91, imgs.statues[this.weapon].width * 2, imgs.statues[this.weapon].height * 2);
		
		rotate(90);
		
		translate(-10, -141);
		image(imgs.statues.knight_lower_arm, 0, 68, imgs.statues.knight_lower_arm.width * 1.6, imgs.statues.knight_lower_arm.height * 1.6);
		
		
		popMatrix();
		
		popMatrix();
		
		// }
		
		popMatrix();
		
		fill(0, 120);
		rectMode(CORNER)
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.maxHealth, 10);
		fill(255, 0, 0);
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.health, 10);
	}
	handleDir(){
		if (this.game.player.x > this.x) this.targetDir = 1;
		if (this.game.player.x < this.x) this.targetDir = -1;
		this.dir = Funcs.lerp(this.dir, this.targetDir, 0.1);
	}
	handleRigs(state){
		switch (state){
			case 'walk':
				// Iterate through upper, lower legs
				Object.keys(this.rigs.legs).forEach(side => { 
					// Iterate through right/left sides
					Object.keys(this.rigs.legs[side]).forEach((section, index) => {
						const segment = this.rigs.legs[side][section];
						const newInd = side === 'right' ? 1 : -1;
						this.rigs.legs[side][section] = 5 + (sin(frameCount * 3) * (section === 'upper' ? 10 : 20)) * newInd;
					}); 
				});
				Object.keys(this.rigs.arms).forEach(side => { 
					// Iterate through right/left sides
					Object.keys(this.rigs.arms[side]).forEach((section, index) => {
						const segment = this.rigs.arms[side][section];
						const newInd = side === 'right' ? 1 : -1;
						this.rigs.arms[side][section] = 5 + (sin(frameCount * 3) * (section === 'upper' ? 10 : 20)) * newInd;
					}); 
				});
			break;
			case 'attack':
				Object.keys(this.rigs.arms).forEach(side => { 
					// Iterate through right/left sides
					Object.keys(this.rigs.arms[side]).forEach((section, index) => {
						const segment = this.rigs.arms[side][section];
						if (this.attackTimer < this.maxAttackTimer && this.attackTimer > this.maxAttackTimer / 2){
							this.rigs.arms[side][section] = Funcs.lerp(segment, 120, 0.1);
						} else if (this.attackTimer <= this.maxAttackTimer / 2){

							this.rigs.arms[side][section] = Funcs.lerp(segment, -20, 0.1);
						}
						
					}); 
				});
			break;
			case 'rest':
				// Iterate through upper, lower legs
				Object.keys(this.rigs.legs).forEach(side => { 
					// Iterate through right/left sides
					Object.keys(this.rigs.legs[side]).forEach((section, index) => {
						const segment = this.rigs.legs[side][section];
						this.rigs.legs[side][section] = Funcs.lerp(segment, 0, 0.1);
					}); 
				});
				Object.keys(this.rigs.arms).forEach(side => { 
					// Iterate through right/left sides
					Object.keys(this.rigs.arms[side]).forEach((section, index) => {
						const segment = this.rigs.arms[side][section];
						this.rigs.arms[side][section] = Funcs.lerp(segment, 0, 0.1);
					}); 
				});
		}
	}
	runAI(){
		const angle = Math.atan2(this.game.player.y - this.y, this.game.player.x - this.x);
		const distance = Funcs.dist(this, this.game.player);
		if (distance < this.range.attack){
		} if (distance > this.range.min && distance < this.range.max){
			this.v.x = Math.cos(angle) * this.speed;
			this.handleRigs('walk');
		} else if (distance < this.game.player.w) {
			if (this.game.player.x > this.x) {
				this.accelerate(-0.08, 0);
			} else if (this.game.player.x < this.x) {
				this.accelerate(0.08, 0);
			}
		} else {
			this.v.x = 0;
			this.handleRigs('rest');
		}
	}
	handleAttack(){
		const p = this.game.player;
		const dir = this.targetDir;
		if (this.attackTimer <= this.maxAttackTimer / 2){
			if (p.y > this.y - this.h / 2 - 20 && p.y < this.y + this.h / 2 + 20){
				if (dir === 1){
					if (p.x > this.x + 50 && p.x < this.x + this.range.min && 
						!this.hit){
						p.takeDamage(6, 7, this);
						this.hit = true
					}
				} else if (dir === -1){
					if (p.x < this.x - 50 && p.x > this.x - this.range.min && 
						!this.hit){
						p.takeDamage(6, 7, this);
						this.hit = true;
					}
				}
			}
		}
		if (this.attackTimer <= 0){
			this.hit = false;
			this.attackTimer = this.maxAttackTimer;
		}
		
		this.handleRigs('attack');
		this.attackTimer --;
	}
	update(){
		this.handleAttack();
		this.handleDir();
		this.move(this.v.x, this.body.velocity.y);
	}
}

// CONSTRUCT [ENEMY]
class Construct extends Enemy {
	constructor(game, config){
		config.w = 81;
		config.h = 200;
		super(game, config);
		
		this.rigs = {
			right: 0,
			left: 0,
		};
		
		this.range = {
			min: 160,
			max: 500,
			attack: 250,
		};
		this.v = { x: 0, y: 0 };
		this.speed = 3;
		
		this.attackTimer = 60;
		this.setAttackTimer = 60;
		
		this.health = 50;
		this.maxHealth = this.health;
	}
	display(){
		imageMode(CENTER);
		pushMatrix();
		
		translate(this.x, this.y + sin(frameCount * 3) * 5);
		// fill(255, 0, 0);
		// rect(0, 0, this.w, this.h);
		
		const r = 0.5;
		image(imgs.construct.head, 0, -94, imgs.construct.head.width * r, imgs.construct.head.height * r);
		image(imgs.construct.body, 0, 15, imgs.construct.body.width * r, imgs.construct.body.height * r);
		
		// Right arm
		pushMatrix();
		translate(51, -14);
		rotate(this.rigs.right);
		image(imgs.construct.arm, 26, 50, imgs.construct.arm.width * r, imgs.construct.arm.height * r);
		image(imgs.construct.hand, 39, 90, imgs.construct.hand.width * 0.2, imgs.construct.hand.height * 0.2);
		popMatrix();
		
		// Left arm
		pushMatrix();
		translate(-50, -14);
		rotate(this.rigs.left);
		scale(-1, 1);
		image(imgs.construct.arm, 26, 50, imgs.construct.arm.width * r, imgs.construct.arm.height * r);
		image(imgs.construct.hand, 39, 90, imgs.construct.hand.width * 0.2, imgs.construct.hand.height * 0.2);
		popMatrix();
		
		popMatrix();
		
		noStroke();
		fill(0, 120);
		rectMode(CORNER)
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.maxHealth, 6);
		fill(255, 0, 0);
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.health, 6);
	}
	handleAttack(){
		const arm = this.game.player.x > this.x ? "right" : "left";
		const dir = (arm === 'left' ? -1 : 1);
		if (Funcs.dist(this, this.game.player) <= this.range.attack){
			if (this.attackTimer < 60 && this.attackTimer > 20){
				this.rigs[arm] = Funcs.lerp(this.rigs[arm], -113 * dir, 0.1); // Raise arm
			} else if (this.attackTimer <= 30){
				if (Funcs.dist(this, this.game.player) > this.range.min) this.accelerate(0.3 * dir, 0); // Jump forward
				this.rigs[arm] = Funcs.lerp(this.rigs[arm], 10 * dir, 0.2); // Bring arm down
			}
			
			const p = this.game.player;
			
			if (p.y > this.y - this.h / 2 - 20 && p.y < this.y + this.h / 2 + 20){
				if (dir === 1){
					if (p.x > this.x + 50 && p.x < this.x + this.range.min && 
						!this.hit){
						p.takeDamage(2, 7, this);
						this.hit = true
					}
				} else if (dir === -1){
					if (p.x < this.x - 50 && p.x > this.x - this.range.min && 
						!this.hit){
						p.takeDamage(2, 7, this);
						this.hit = true;
					}
				}
			}
				
			if (this.attackTimer <= 0){
				this.hit = false;
				this.attackTimer = this.setAttackTimer;
			}
		
			this.attackTimer --;
		} else {
			Object.keys(this.rigs).forEach(key => {
				// Lower arms after attacking
				this.rigs[key] = Funcs.lerp(this.rigs[key], 0, 0.2)
			});
			this.attackTimer = this.setAttackTimer; // Reset attack timer to max time
		}
		Object.keys(this.rigs).forEach(key => {
			// Lower the arm that is not active in attacking
			if (arm !== key){
				this.rigs[key] = Funcs.lerp(this.rigs[key], 0, 0.2);
			}
		});
	}
	runAI(){
		const angle = Math.atan2(this.game.player.y - this.y, this.game.player.x - this.x);
		const distance = Funcs.dist(this, this.game.player);
		if (distance > this.range.min && distance < this.range.max){
			this.v.x = Math.cos(angle) * this.speed;
		} else if (distance < this.game.player.w) {
			if (this.game.player.x > this.x) {
				this.accelerate(-0.08, 0);
			} else if (this.game.player.x < this.x) {
				this.accelerate(0.08, 0);
			}
		} else {
			this.v.x = 0;
		}
	}
	update(){
		this.handleAttack();
		this.move(this.v.x, this.v.y);
	}
}

// KEESE [ENEMY]
class Keese extends Enemy {	
	constructor(game, config){
		config.w = 170;
		config.h = 80;
		
		super(game, config);
		this.body.applyGrav = false;
		
		this.v = { x: 0, y: 0 };
		this.speed = 4;
		this.range = {
			min: 200,
			max: 700,
			attack: 270,
		};
		this.maxAttackTimer = 180;
		this.attackTimer = this.maxAttackTimer;	
		
		this.maxHealth = 40;
		this.health = this.maxHealth;
	}	
	initArt(){
		let frames = [];	
		Object.keys(imgs.keese).forEach(key => frames.push(imgs.keese[key]));	
		this.img = new AnimatedArt(this.game, frames, 8, false, {...this}, this.w, this.h);	
		this.init = true;	
		
	}	
	display(){
		if (!this.init){
			imageMode(CENTER);
			this.initArt();
		} else {
	   		const frame = this.img.frames[this.img.curFrame];
		  	this.img.w = frame.width * (this.h / frame.height);
		  	this.img.h = frame.height * (this.h / frame.height);
			this.img.offset = {...this};
			this.img.run();	
		}	
		
		fill(0, 120);
		rectMode(CORNER)
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 15, this.maxHealth, 6);
		fill(255, 0, 0);
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 15, this.health, 6);
	}
	collide(body, type){
		if (type === 'start' && body.label === 'player' && !this.hit){
			body.object.takeDamage(3, 5, this);
			this.hit = true;
		}
	}
	handleAttack(angle){
		if (this.attackTimer <= 30){
			this.accelerate(
				Math.cos(angle) * 0.5,
				Math.sin(angle) * 0.5
			);
		}
		if (this.attackTimer <= 0){
			this.hit = false;
			this.attackTimer = this.maxAttackTimer;
		}
		this.attackTimer --;
	}	
	runAI(){
		const distance = Funcs.dist(this, this.game.player);
		const angle = Math.atan2((this.game.player.y-this.game.player.h/2) - this.y, this.game.player.x - this.x);
		if (distance <= this.range.max && distance >= this.range.min){
			this.v.x = Math.cos(angle) * this.speed;
			this.v.y = Math.sin(angle) * this.speed;
		} else {
			if (distance < 180){
				this.v.x = -Math.cos(angle) * this.speed + 3;
				this.v.y = -Math.sin(angle) * this.speed + 3;
			} else {
				this.v.x = 0;
				this.v.y = 0;
			}
		} 
		
			this.handleAttack(angle);
	}	
	update(){	
		if (this.attackTimer > 0) this.move(this.v.x, this.v.y);
	}
}

// DAYDEATH [ENEMY]
class Daydeath extends Enemy {
	constructor(game, config){
		config.w = 416;
		config.h = 444;
		super(game, config);
		Body.set(this.body, {
			isStatic: true,
		});
		
		this.dir = 1;
		
		this.health = 70;
		this.maxHealth = this.health;
		
		this.attackTimer = 0;
		this.maxAttackTimer = 16;
		this.cooldown = 180;
		
		this.range = {
			min: 800,
			max: 1200,
			attack: 800,
		};
	}
	initArt(){
		let frames = [];
		let tongueFrames = [];
		Object.keys(imgs.daydeath).forEach(key => {
			if (!key.startsWith('tongue')){
				frames.push(imgs.daydeath[key]);
			} else {
				tongueFrames.push(imgs.daydeath[key]);
			}
		});
		this.img = new AnimatedArt(this.game, frames, 4, false, { x: 0, y: 0, }, this.w, this.h);
		this.tongueImg = new AnimatedArt(this.game, tongueFrames, 4, false, { x: 0, y: -162, });
		
		
		this.init = true;
	}
	display(){
		if (!this.init){
			this.initArt();
		} else {
	   		const frame = this.img.frames[this.img.curFrame];
		  	this.img.w = frame.width * (this.h / frame.height);
		  	this.img.h = frame.height * (this.h / frame.height);
		  	
	   		const tongueFrame = this.tongueImg.frames[this.tongueImg.curFrame];
		  	this.tongueImg.w = -tongueFrame.width * 2;
		  	this.tongueImg.h = tongueFrame.height * 2 - 162;
		  	
		  	pushMatrix();
		  	translate(this.x, this.y);
		  	scale(-this.dir, 1);
		  	rotate(this.attackTimer <= 0 ? sin(frameCount * 3) * 5 : 0);
		  	
			imageMode(CORNERS);
			if (this.img.curFrame > 0) this.tongueImg.run();
			
			imageMode(CENTER);
			this.img.run();
			
			popMatrix();
			if (this.attackTimer <= 0){
				this.img.curFrame = 0;
				this.tongueImg.curFrame = 0;
			}
		}
		
		
		fill(0, 120);
		rectMode(CORNER)
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.maxHealth, 6);
		fill(255, 0, 0);
		rect(this.x - this.maxHealth / 2, this.y - this.h / 2 - 70, this.health, 6);
	}
	runAI(){}
	handleDir(){
		this.dir = this.game.player.x > this.x ? 1 : -1;
	}
	handleAttack(){
		if (this.attackTimer <= 0 && this.cooldown <= 0){
			this.hit = false;
			this.attackTimer = this.maxAttackTimer;
			this.cooldown = 180;
		}
		const p = this.game.player;
		const dir = this.dir;
		if (this.attackTimer > 0){
			if (p.y > this.y - this.h / 2 - 120 && p.y < this.y + this.h / 2 + 120){
				if (dir === 1){
					if (p.x > this.x + 400 && p.x < this.x && 
						!this.hit){
						p.takeDamage(2, 20, this);
						this.hit = true
					}
				} else if (dir === -1){
					if (p.x > this.x - 400 && p.x < this.x && 
						!this.hit){
						p.takeDamage(2, 20, this);
						this.hit = true;
					}
				}
			}
		}
		this.cooldown --;
		this.attackTimer --;
	}
	update(){
		this.handleDir();
		this.handleAttack();
	}
}

// EYEBALL [ENEMY]
class Eyeball extends Enemy {
	constructor(game, config){
		config.circle = true;
		config.r = 120;
		super(game, config);
		
		this.range = {
			min: 160,
			max: 400,
			attack: 250,
		};
	}
	display(){
		fill(255, 0, 0);
		ellipse(this.x, this.y, this.r, this.r);
		
		
	}
	handleAttack(){}
	handleDir(){}
	runAI(){}
	update(){
		this.handleAttack();
		
	}
}

// BOUNDING BOX
class BoundingBox extends PhysicsObj {
	/**
	 * A simple class that provides collisions throughout the world
	 * @extends
	**/ 
	constructor(game, config){
		super(config);
		Body.set(this.body, {
			isStatic: true,
			label: "bound",
			collisionFilter: {
				category: categories.bound,
				mask: categories.player | categories.npc | categories.enemy,
			},
		});
		
		this.executable = 'run';
	}
	display(){
// 		rectMode(CENTER)
// 		noFill();
// 		strokeWeight(10);
// 		stroke(255, 0, 0);
// 		rect(this.x, this.y, this.w, this.h);
// 		noStroke();
	}
	run(){
		this.display();
		this.updatePos();
	}
}

// STAIRS
class Step extends PhysicsObj {
	constructor(game, config){
		super(config);
		Body.set(this.body, {
			label: "bound",
			isStatic: true,
			collisionFilter: {
				group: 0,
				mask: categories.player | categories.enemy | categories.npc,
				category: categories.bound,
			},
		});
	}
	display(){
		rectMode(CENTER)
		fill(255, 0, 0);
		rect(this.x, this.y, this.w, this.h);
	}
	run(){
		this.display();
		this.updatePos();
	}
}

class Stairs {
	constructor(game, config){
		this.x = config.x;
		this.y = config.y;
		
		this.w = config.w;
		this.stepSize = config.stepSize;
		this.num = config.num;
		this.steps = Array.from({ length: this.num }, (_, index) => new Step(game, {
			x: this.x - (index * this.stepSize) / 2,
			y: this.y - (index * 20),
			w: this.w - (index * this.stepSize),
			h: 20,
		}));
		
		this.executable = 'run';
	}
	run(){
		this.steps.forEach(step => step.run());
	}
}

// DOOR
class Door {
	/**
	 * A new door that leads to another zone
	 * @constructor
	 * 
	 * @param game {Game} - Game class
	 * @param config {Object} - Configure door
	 * @param config.x {number} - X position of door
	 * @param config.y {number} - Y position of door
	 * @param config.type {string} - Type of door
	 * @param config.setX {number} - New position the player will spawn in after spawning (X)
	 * @param config.setY {number} - New position the player will spawn in after spawning (Y)
	**/
	constructor(game, config){
		this.x = config.x;
		this.y = config.y;
		
		this.type = config.type;
		
		this.text = new TypingText({
			x: this.x,
			y: this.y - 200,
			txt: INTERACT_MSG,
			speed: 1,
			delay: 5,
			sz: 16,
			clr: 'white',
		});
		
		this.setX = config.setX;
		this.setY = config.setY;
		
		this.zone = config.zone;
		this.zoneCooldown = 0;
		
		this.game = game;
		this.executable = 'run';
	}
	display(){
		fill(255, 0, 255);
		rect(this.x, this.y, this.w, this.h)
		if (this.type) image(imgs.doors[this.type], this.x, this.y, this.w, this.h);
	}
	update(){
		if (Funcs.dist(this, this.game.player) <= 160){
			this.text.dir = 1;
			if (keys.click("interact")){
				this.game.player.setX = this.setX;
				this.game.player.setY = this.setY;
				this.game.zone = this.zone;
				this.game.rendered = false;
			}
		} else {
			this.text.dir = -1;
		}
		this.text.run();
	}
	run(){
		this.display();
		this.update();
	}
}

// GATES
class Gate extends PhysicsObj {
	constructor(game, config){
		super(config);
		Body.set(this.body, {
			isSensor: true,
			isStatic: true,
		});
		this.executable = 'run';
		this.game = game;
		
		this.angle = 0;
		
		this.text = new TypingText({
			x: this.x,
			y: this.y - this.h / 2 - 50,
			txt: INTERACT_MSG,
			speed: 1,
			delay: 5,
			sz: 16,
			clr: 'white'
		});
		
		this.cost = round(Math.max(this.w, this.h) / 100);
		
		this.errorTimer = 0;
	}
	display(){
		ctx.save();
		
		ctx.shadowBlur = 20;
		ctx.shadowColor = 'white';
		
		pushMatrix();
		translate(this.x, this.y);
		rotate(this.angle);
		imageMode(CENTER);
		image(imgs.misc.gate, 0, 0, this.w, this.h);
		popMatrix();
		
		ctx.restore();
		
		this.angle = sin(frameCount / 60) * 720;
	}
	update(){
		this.text.run();
		if (Funcs.dist(this.game.player, this) <= this.w + 100){
			if (this.game.quest && this.game.quest.name === 'Mysterious Gate' && this.game.zone === 8){
				this.game.quest.condition = () => true;
			}
			if (keys.click("interact")){
			    if (this.game.zone === 8 && !this.game.sceneTo){
			        this.game.sceneTo = 'finish';
			        this.game.transition.reset(180);
			    }
				if (this.game.player.items.orb && this.game.player.items.orb.count >= this.count){
					this.game.zone = 100;
					this.game.reset();
				} else {
					this.errorTimer = 180;
				}
			}
			this.text.dir = 1;
		} else {
			this.text.dir = -1;
		}
		
		if (this.errorTimer > 0){
			this.text.txt = "NOT ENOUGH ORBS";
			this.text.clr = 'red';
		} else {
			this.text.txt = `Cost: ${this.cost} orbs`;
			this.text.clr = 'white';
		}
		
		
		this.errorTimer --;
	}
	collide(body, type){
	}
	run(){
		this.display();
		this.update();
	}
}

// Zones
class Zones {
	static zones = [
		// Dungeon
		(game) => {
			if (!game.rendered){
				
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 641,
					w: 8704,
					h: 200,
				})); // Floor [bound]
				
				game.displays.push(new DisplayImg(game, {
					x: 0,
					y: 56,
					w: 900,
					h: 900,
					img: imgs.statues.god
				})); // God statue
				for (let i = 0; i < 25; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -2440 + i * 222,
						y: 610,
						w: 222,
						h: 220,
						img: imgs.misc.dungeon_floor
					}));
					game.displays.push(new DisplayImg(game, {
						x: -2440 + i * 222,
						y: 830,
						w: 222,
						h: 220,
						img: imgs.misc.dungeon_floor
					}));
					
					game.displays.push(new DisplayImg(game, {
						x: -2440 + i * 222,
						y: 1050,
						w: 222,
						h: 220,
						img: imgs.misc.dungeon_floor
					}));
					game.displays.push(new DisplayImg(game, {
						x: -2440 + i * 222,
						y: 1270,
						w: 222,
						h: 220,
						img: imgs.misc.dungeon_floor
					}));
				} // Floor [display]
				
				game.enemies.push(new Knight(game, {
					x: 1200,
					y: 400,
					type: 1,
					id: "knight_1"
				}));
				
				game.enemies.push(new Knight(game, {
					x: 200,
					y: 400,
					type: 2,
					id: "knight_2"
				}));
			}
			game.camera.bounds = {
				min: {
					x: -1573,
					y: -208,
				},
				max: {
					x: 2400,
					y: 898
				},
			};
			game.camera.zoomBounds = {
				min: 0.4,
				max: 1,
			};
		},
		
		// Cabin
		(game) => {
			if (!game.rendered){
				game.bounds.push(new BoundingBox(game, {
					x: 491,
					y: 606,
					w: 1704,
					h: 200,
				})); // Floor [bound]
				game.bounds.push(new BoundingBox(game, {
					x: -459,
					y: 25,
					w: 200,
					h: 943,
				})); // Left wall [bound]
				game.bounds.push(new BoundingBox(game, {
					x: 1303,
					y: 25,
					w: 200,
					h: 943,
				})); // Right wall [bound]
				game.npcs.push(new Npc(game, {
					x: 91,
					y: 349,
					w: ENTITY_SIZE.w + 20,
					h: ENTITY_SIZE.h + 100,
					img: imgs.npcs.doctor,
					target: {
						x: 200,
						y: 200,
					},
					quest: true,
					conversationBefore: new Conversation(game, {
						arr: [
							{
								dialogue: "Oh... it seems you are awake, at last.", 
								options: [
									{
										line: "Where am I? Who are you?",
									},
								],
							},
							{
								dialogue: "Straight to the point, huh? Why don't we start with\nhow you're feeling.", 
								options: [
									{
										line: "Confused...",
									},
									{
										line: "Alright!",
										leads: 3,
									},
								],
							},
							{
								dialogue: "-#Patient seems to not be doing so well... as\n-#expected with that kind of fall...", 
								options: [
									{
										line: "What happened?",
										leads: 4
									},
								],
							},
							{
								dialogue: "Well, that's excellent news!\n-#Was afraid that concussion was more than minor...\n-#you fell from a huge distance, after all...", 
								options: [
									{
										line: "What happened?",
									},
								],
							},
							{
								dialogue: "I'm not sure, you tell me.",
								options: [
									{
										line: "Uh..."
									},
								],
							},
							{
								dialogue: "-#Patient seems to be suffering from memory loss...\nWell, anyways, while you're here,\ncan you help me out with something?",
								options: [
									{
										line: "Sure thing!"
									},
								],
							},
							{
								dialogue: "There are some Constructs outside that have made\nit very difficult for me to get medicine and supplies.\nDo you think you can get rid of them for me?",
								options: [
									{
										line: "No problem!",
									}
								],
							},
							{
								dialogue: "Thanks! I found this lying next to you, you'll\nprobably need it.",
								options: [
									{
										line: "Okay"
									},
								],
								item: new ItemPopup({
									name: "Darrow's Axe",
									description: "The axe wielded by an extraordinary\nhero. Legend says, the axe has the\npower to overcome the God Statue\nand its servants.",
									imgAngle: -45,
									img: imgs.weapons.axe_1,
									action: () => {
										game.player.items.axe = {
											img: imgs.weapons.axe_1,
											count: 1,
										};
									},
								}),
							},
						],
						quest: new Quest(game, {
							name: "Forest Lurkers",
							txt: `Kill 5 Constructs`,
							progressTxt: () => `${game.player.kills.construct}/5`,
							condition: () => game.player.kills.construct >= 1,
						}),
						dialogueNum: 0
					}),
					conversationDuring: new Conversation(game, {
						arr: [
							{
								dialogue: "Have you killed all of the constructs?", 
								options: [
									{
										line: "No, still trying.",
										leads: 2,
									},
									{
										line: "Yes, they're all gone!",
									},
								],
							},
							{
								dialogue: "What do you mean? I can still hear some outside.", 
								options: [
									{
										line: "Sorry, I'll keep trying.",
									},
								],
							},
							{
								dialogue: "Ok, come back when you've killed all five.", 
								options: [
									{
										line: "Ok!",
									},
								],
							},
						],
						dialogueNum: 0
					}),
					conversationAfter: new Conversation(game, {
						arr: [
							{
								dialogue: "Have you killed all of the constructs?", 
								options: [
									{
										line: "Yes, all five!",
									},
								],
							},
							{
								dialogue: "Amazing! Here's a reward for getting rid of them for me.", 
								options: [
									{
										line: "Wow, thanks!",
									},
								],
								
								item: new ItemPopup({
									name: "Sage's Shield",
									description: "The shield completemented by\nDarrow's Axe. It can withstand immense\nforces without breaking.",
									w: imgs.weapons.shield.width * 0.55,
									h: imgs.weapons.shield.height * 0.55,
									img: imgs.weapons.shield,
									action: () => {
										game.player.items.shield = {
											img: imgs.weapons.shield,
											count: 1,
										};
									},
								}),
							},
							{
								dialogue: "Of course. With your axe and shield, you should be\nwell prepared to go into the city.", 
								options: [
									{
										line: "What city?",
									},
								],
							},
							{
								dialogue: "Nexton City, which is a little far out east of this cabin.", 
								options: [
									{
										line: "I've never heard of that...",
									},
									{
										line: "Ok, I'll set out.",
										leads: 5,
									},
								],
							},
							{
								dialogue: "-#Has the patient potentially lost some of their memories?\nNexton City is the city that has been overrun by monsters\nthat have crossed through gates...",
								options: [
									{
										line: "..."
									},
								],
							},
							{
								dialogue: "But with your equipment, you'll still fare better there than\nstaying in the forest with me. Plus,\nthere is a mysterious large gate... might be worth checking out.",
								options: [
									{
										line: "Goodbye!"
									},
								],
							},
						],
						
						quest: new Quest(game, {
							name: "Mysterious Portal",
							txt: `Find the large gate`,
							progressTxt: () => ``,
							condition: () => game.zone === 8 && game.player.x > 100,
						}),
						dialogueNum: 0
					}),
				})); // Doctor
				
				game.fires.push(new Fire(game, {
					x: -16,
					y: 379,
					w: 148 * 0.8,
					h: 220 * 0.8,
				})); // Fire
				
				for (let i = 0; i < 5; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -459,
						y: i * 220 - 157,
						w: 220,
						h: 220,
						img: imgs.misc.redwood
					})); // Left
					game.displays.push(new DisplayImg(game, {
						x: 1303,
						y: i * 220 - 157,
						w: 220,
						h: 220,
						img: imgs.misc.redwood
					})); // Right
				} // Walls [display]
				for (let i = 0; i < 8; i ++){
					game.displays.push(new DisplayImg(game, {
						x: i * 220 - 244,
						y: 637,
						w: 220,
						h: 220,
						img: imgs.misc.redwood_floor
					}));
					
					game.displays.push(new DisplayImg(game, {
						x: i * 220 - 343,
						y: 857,
						w: 220,
						h: 220,
						img: imgs.misc.redwood_floor
					}));
				} // Floor [display]
				game.displays.push(new DisplayImg(game, {
					x: 428,
					y: 235,
					w: 1600,
					h: 800,
					img: imgs.backgrounds.cabin_interior
				})); // Cabin interior
				
				game.doors.push(new Door(game, {
					x: 859,
					y: 359,
					w: 152,
					h: 249,
					setX: 73,
					setY: 406,
					zone: 2,
				}));
				for (let i = 0; i < 10; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -989 + i * 1280,
						y: 811,
						w: 1280,
						h: 959,
						img: imgs.misc.grass
					}));
				}
			}
			game.camera.bounds = {
				min: {
					x: -773,
					y: 0,
				},
				max: {
					x: 5216,
					y: 600
				},
			};
			game.camera.zoomBounds = {
				min: 0.8,
				max: 1,
			};
		},
		
		// Cabin Right / Forest #1
		(game) => {
			if (!game.rendered){
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 6000,
					h: 200,
				})); // Floor [bound]
				
				game.bounds.push(new BoundingBox(game, {
					x: -836,
					y: 25,
					w: 200,
					h: 943,
				})); // Left wall [bound]
				
				game.displays.push(new DisplayImg(game, {
					x: -500,
					y: 90,
					w: 1600,
					h: 800,
					img: imgs.backgrounds.cabin
				})); // Cabin
				for (let i = 0; i < 20; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -1600 + i * 1280,
						y: 811,
						w: 1280,
						h: 959,
						img: imgs.misc.grass
					})); // Grass
					game.displays.push(new DisplayImg(game, {
						x: -2005 + i * 798,
						y: 159,
						w: 640 * 0.8,
						h: 840 * 0.8,
						img: imgs.misc.evergreen
					})); // Trees
				}
				
				game.enemies.push(new Construct(game, {
					x: 900,
					y: 400,
					id: 0
				}));
				game.enemies.push(new Construct(game, {
					x: 1400,
					y: 400,
					id: 1,
				}));
				
				game.doors.push(new Door(game, {
					x: 76,
					y: 322,
					w: 152,
					h: 249,
					setX: 873,
					setY: 406,
					zone: 1,
				}));
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
			game.camera.bounds = {
				min: {
					x: -773,
					y: 0,
				},
				max: {
					x: 3000,
					y: 600
				},
			};
			game.camera.zoomBounds = {
				min: 0.5,
				max: 1,
			};
		},
		
		// Forest #2
		(game) => {
			if (!game.rendered){
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 6000,
					h: 200,
				})); // Floor [bound]
				
				for (let i = 0; i < 20; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -1600 + i * 1280,
						y: 811,
						w: 1280,
						h: 959,
						img: imgs.misc.grass
					})); // Grass
					game.displays.push(new DisplayImg(game, {
						x: -2005 + i * 798,
						y: 159,
						w: 640 * 0.8,
						h: 840 * 0.8,
						img: imgs.misc.evergreen
					})); // Trees
				}
				
				game.enemies.push(new Construct(game, {
					x: 200,
					y: 400,
					id: 2,
				}));
				game.enemies.push(new Construct(game, {
					x: 1000,
					y: 400,
					id: 3,
				}));
				game.enemies.push(new Construct(game, {
					x: 1600,
					y: 400,
					id: 4,
				}));
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
			game.camera.bounds = {
				min: {
					x: -773,
					y: 0,
				},
				max: {
					x: 3000,
					y: 600
				},
			};
			game.camera.zoomBounds = {
				min: 0.5,
				max: 1,
			};
		},
		
		// Forest #3
		(game) => {
			if (!game.rendered){
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 6000,
					h: 200,
				})); // Floor [bound]
				
				for (let i = 0; i < 20; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -1600 + i * 1280,
						y: 811,
						w: 1280,
						h: 959,
						img: imgs.misc.grass
					})); // Grass
					game.displays.push(new DisplayImg(game, {
						x: -2005 + i * 798,
						y: 159,
						w: 640 * 0.8,
						h: 840 * 0.8,
						img: imgs.misc.evergreen
					})); // Trees
				}
				
				
				game.enemies.push(new Daydeath(game, {
					x: 2000,
					y: 400,
					id: 5,
				}));
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
			game.camera.bounds = {
				min: {
					x: -773,
					y: 0,
				},
				max: {
					x: 3000,
					y: 600
				},
			};
			game.camera.zoomBounds = {
				min: 0.5,
				max: 1,
			};
		},
		
		// Forest #4
		(game) => {
			if (!game.rendered){
				
				game.camera.bounds = {
					min: {
						x: -773,
						y: 0,
					},
					max: {
						x: 3000,
						y: 600
					},
				};
				game.camera.zoomBounds = {
					min: 0.5,
					max: 1,
				};
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 6000,
					h: 200,
				})); // Floor [bound]
				
				for (let i = 0; i < 20; i ++){
					game.displays.push(new DisplayImg(game, {
						x: -1600 + i * 1280,
						y: 811,
						w: 1280,
						h: 959,
						img: imgs.misc.grass
					})); // Grass
					game.displays.push(new DisplayImg(game, {
						x: -2005 + i * 798,
						y: 159,
						w: 640 * 0.8,
						h: 840 * 0.8,
						img: imgs.misc.evergreen
					})); // Trees
				}
				
				
				game.enemies.push(new Keese(game, {
					x: 200,
					y: 100,
					id: 6
				}));
				
				game.enemies.push(new Keese(game, {
					x: 500,
					y: 100,
					id: 7
				}));
				
				game.enemies.push(new Daydeath(game, {
					x: 2000,
					y: 400,
					id: 8
				}));
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
		},
		
		// City #1
		(game) => {
			if (!game.rendered){
				game.camera.bounds = {
					min: {
						x: -773,
						y: 0,
					},
					max: {
						x: 3000,
						y: 600
					},
				};
				game.camera.zoomBounds = {
					min: 0.5,
					max: 1,
				};
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 8500,
					h: 200,
				})); // Floor [bound]
				
				game.displays.push(new DisplayImg(game, {
					x: 2500 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); 
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); // Road
				
				// Buildings
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: -100,
					w: imgs.buildings.building_1.width * 5,
					h: imgs.buildings.building_1.height * 5,
					img: imgs.buildings.building_1
				}));
				game.displays.push(new DisplayImg(game, {
					x: 2674 - 417,
					y: -100,
					w: imgs.buildings.building_2.width * 5,
					h: imgs.buildings.building_2.height * 5,
					img: imgs.buildings.building_2
				}));
				
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 155,
					w: imgs.backgrounds.city_1.width * 5,
					h: imgs.backgrounds.city_1.height * 5,
					img: imgs.backgrounds.city_1
				}));
				
				// Gates
				game.gates.push(new Gate(game, {
					x: 1200,
					y: 360,
					w: 300,
					h: 300,
				}))
				
				
				game.enemies.push(new Keese(game, {
					x: 200,
					y: 100,
					id: 8
				}));
				game.enemies.push(new Keese(game, {
					x: 500,
					y: 100,
					id: 9
				}));
				game.enemies.push(new Keese(game, {
					x: 500,
					y: 100,
					id: 10
				}));
				
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
		},
		
		// City #2
		(game) => {
			if (!game.rendered){
				game.camera.bounds = {
					min: {
						x: -773,
						y: 0,
					},
					max: {
						x: 3000,
						y: 600
					},
				};
				game.camera.zoomBounds = {
					min: 0.5,
					max: 1,
				};
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 8500,
					h: 200,
				})); // Floor [bound]
				
				game.displays.push(new DisplayImg(game, {
					x: 2500 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); 
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); // Road
				
				// Buildings
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: -100,
					w: imgs.buildings.building_2.width * 5,
					h: imgs.buildings.building_2.height * 5,
					img: imgs.buildings.building_2
				}));
				game.displays.push(new DisplayImg(game, {
					x: 2674 - 417,
					y: -100,
					w: imgs.buildings.building_4.width * 5,
					h: imgs.buildings.building_4.height * 5,
					img: imgs.buildings.building_4
				}));
				
				// game.displays.push(new DisplayImg(game, {
				// 	x: 2674,
				// 	y: -100,
				// 	w: imgs.buildings.building_3.width * 5,
				// 	h: imgs.buildings.building_3.height * 5,
				// 	img: imgs.buildings.building_3
				// }));
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 155,
					w: imgs.backgrounds.city_1.width * 5,
					h: imgs.backgrounds.city_1.height * 5,
					img: imgs.backgrounds.city_1
				}));
				
				// Gates
				game.gates.push(new Gate(game, {
					x: 359,
					y: 360,
					w: 200,
					h: 200,
				}));
				game.gates.push(new Gate(game, {
					x: 2578,
					y: 360,
					w: 350,
					h: 350,
				}));
				
				game.enemies.push(new Keese(game, {
					x: 200,
					y: 100,
					id: 11
				}));
				game.enemies.push(new Keese(game, {
					x: 500,
					y: 100,
					id: 12
				}));
				game.enemies.push(new Construct(game, {
					x: 500,
					y: 400,
					id: 13
				}));
				
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
			}
		},
		
		// City #3
		(game) => {
			if (!game.rendered){
				game.camera.bounds = {
					min: {
						x: -773,
						y: 0,
					},
					max: {
						x: 3000,
						y: 600
					},
				};
				game.camera.zoomBounds = {
					min: 0.3,
					max: 1,
				};
				game.bounds.push(new BoundingBox(game, {
					x: 0,
					y: 606,
					w: 8500,
					h: 200,
				})); // Floor [bound]
				
				
				game.npcs.push(new Npc(game, {
					x: 91,
					y: 349,
					w: ENTITY_SIZE.w + 20,
					h: ENTITY_SIZE.h + 100,
					img: imgs.npcs.traveler,
					target: {
						x: 91,
						y: 200,
					},
					conversation: new Conversation(game, {
						arr: [
							{
								dialogue: "Hmm...", 
								options: [
									{
										line: "Hello?",
									},
								],
							},
							{
								dialogue: "Oh! My apologies. I'm invested with studying this\ngate...", 
								options: [
									{
										line: "Why?",
									},
								],
							},
							{
								dialogue: "-#Can't this guy just leave me alone...\nWell, out of all the others that popped up, this one\nseems to be an... anomaly.", 
								options: [
									{
										line: "Why is that?",
									},
								],
							},
							{
								dialogue: "Most of the gates aren't too much bigger than the average\nhuman... but the radius of this one\nspans almost as much as the building!", 
								options: [
									{
										line: "Interesting...",
									},
								],
							},
							{
								dialogue: "Indeed! Now, I must get back to my research...",
								options: [
									{
										line: "Uh..."
									},
								],
							},
						],
						dialogueNum: 0
					}),
				})); // Traveler
				
				game.displays.push(new DisplayImg(game, {
					x: 2500 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); 
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 650,
					w: 3000,
					h: 400,
					img: imgs.buildings.road,
				})); // Road
				
				// Buildings
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: -289,
					w: imgs.buildings.building_3.width * 5,
					h: imgs.buildings.building_3.height * 5,
					img: imgs.buildings.building_3
				}));
				game.displays.push(new DisplayImg(game, {
					x: 2674 - 417,
					y: -100,
					w: imgs.buildings.building_2.width * 5,
					h: imgs.buildings.building_2.height * 5,
					img: imgs.buildings.building_2
				}));
				
				game.displays.push(new DisplayImg(game, {
					x: 1000 - 417,
					y: 155,
					w: imgs.backgrounds.city_1.width * 5,
					h: imgs.backgrounds.city_1.height * 5,
					img: imgs.backgrounds.city_1
				}));
				
				// Gates
				game.gates.push(new Gate(game, {
					x: 1000,
					y: -160,
					w: 700,
					h: 700,
				}))
				
				game.enemies.push(new Keese(game, {
					x: 2000,
					y: 100,
					id: 11
				}));
				game.enemies.push(new Keese(game, {
					x: 2600,
					y: 100,
					id: 12
				}));
				game.enemies.push(new Construct(game, {
					x: 2000,
					y: 400,
					id: 13
				}));
				
				
				// game.stairs.push(new Stairs(game, {
				// 	x: 400,
				// 	y: 478,
				// 	w: 334,
				// 	num: 5,
				// 	stepSize: 20,
				// }));
				
				game.bounds.push(new BoundingBox(game, {
					x: 3081,
					y: 25,
					w: 200,
					h: 943,
				})); // Right wall [bound]
			}
		},
	];
	static render(game, zone){
		game.reset();
		Zones.zones[zone](game);
		
		game.rendered = true;
	}
}

// CAMERA
class Camera {
    constructor(game, target){
        this.target = target;
        this.x = target.x || 0;
        this.y = target.y || 0;
        
        this.behavior = 'smooth';
        this.zoom = 1;
        this.speed = 0.1;
        this.angle = 0;
        this.game = game;
        
        this.bounds = {
        	min: {
        		x: -Infinity,
        		y: -Infinity,
        	},
        	max: {
        		x: Infinity,
        		y: Infinity,
        	},
        };
        this.zoomBounds = {
        	min: 0.4,
        	max: 1,
        };
    }
    start(){
        pushMatrix();
        translate(width / 2, height / 2);
        scale(this.zoom);
        translate(-this.x, -this.y)
        rotate(this.angle);
    }
    end(){
        popMatrix();
    }
    handleZoom(){
        if (keys.press("zoomOut")){
        	this.zoom -= 0.01;
        } else if (keys.press("zoomIn")){
        	this.zoom += 0.01;
        }
        
        this.zoom = constrain(this.zoom, this.zoomBounds.min, this.zoomBounds.max);
    }
    follow(){
        const targetX = this.target.x;
        const targetY = this.target.y;
        if (this.behavior === 'smooth') {
	        this.x = Funcs.lerp(this.x, targetX, this.speed);
            this.y = Funcs.lerp(this.y, targetY, this.speed);
        } else if (this.behavior === 'static') {
            this.x = targetX;
            this.y = targetY;
        }
        
        const minX = this.bounds.min.x + (width / 2) / this.zoom;
        const maxX = this.bounds.max.x - (width / 2) / this.zoom;
        const minY = this.bounds.min.y + (height / 2) / this.zoom;
        const maxY = this.bounds.max.y - (height / 2) / this.zoom;
        
        this.x = constrain(this.x, minX, maxX);
        this.y = constrain(this.y, minY, maxY);
        
	    this.angle = lerp(this.angle, 0, 0.1);
    }
    run(){
    	this.follow();
    	this.handleZoom();
    }
}

// BACKGROUNDS
class Background {
	constructor(game, config){
		this.game = game;
		this.camera = this.game.camera;
		
		this.img = config.img;
		this.parallax = config.parallax;
		this.w = config.w;
		this.h = config.h;
	}
	display(){
		const x = width / 2 * this.parallax;
		const y = height / 2 * this.parallax;
		image(this.img, x, y, this.w, this.h);
	}
}

let last = performance.now();
let fps = 0;
const Scenes = (function(){
	const _Scenes = {
		'menu' : function(g){
		    image(imgs.cutscenes.forest_above, 0, 0, 916, 600);
			
			const scale = constrain((frameCount / 30), 0, 70);
			image(imgs.cutscenes.clouds_above, -scale/2, -scale/2, 916 + scale, 600 + scale);
			
			image(imgs.cutscenes[`player_dive_${round(frameCount / 7) % 3}`], g.playerDiveX, g.playerDiveY + sin(frameCount * 1.2) * 15, 378, 251);
			
			fill(0, 20);
			rectMode(CORNER)
			rect(0, 0, width, height);
			
			ctx.save();
			ctx.globalAlpha = constrain(g.logoOpacity, 0, 1);
			if (g.blur <= 30) ctx.filter = `blur(${g.blur}px)`
			pushMatrix();
			translate(width / 2 + 40, 50);
			rotate(90);
			image(imgs.weapons.axe_4, 0, 0);
			popMatrix();
			noStroke();
			
			ctx.save();
			ctx.fillStyle = 'white';
			ctx.shadowBlur = 5;
			ctx.shadowColor = 'white'
			Display.text("The Last Sage", width/2, 180, 44, { format: "900", font: "Cinzel", align: "center" });
			Display.text("ASCENDENT", width/2, 135, 63, { format: "900", font: "Cinzel", align: "center" });
			
			if (keys.click('enter') && !g.sceneTo){
			    g.sceneTo = 'game';
			    g.reset();
			    g.zone = 0;
			    g.transition.reset(120);
			}
			
			ctx.fillStyle = 'white'
			Display.text('PRESS ENTER TO START', width / 2, height - 50, 20, { format: "900", align: "center"});
			ctx.restore();
		},
		'game' : function(g){
			const now = performance.now();
			noStroke();
			background(0);
			if (g.backgrounds){
				g.backgrounds[g.sector].display();
			}
			fill(0, 30);
			rect(width / 2, height / 2, width, height);
			
			
			if (!g.rendered) {
			    Zones.render(g, g.zone);
			}
			g.zoneCooldown --;
			g.camera.start();
			
			g.runObjs();
			g.player.run();
			
			g.camera.end()
			g.camera.run();
			
			const time = now - last;
			last = now;
			if (frameCount % round(fps+1) === 0){
				fps = 1000 / time;
			}
			
			g.UI.hud();
			
// 			Display.text(`Player: (${round(g.player.x)}, ${round(g.player.y)})`, 890, 30, 16, { align: "right" });
// 			Display.text(`Bodies: ${Composite.allBodies(engine.world).length}`, 890, 58, 16, { align: "right" });
// 			Display.text(`FPS: ${round(fps)}`, 890, 87, 16, { align: "right" });
			
			if (g.conversation){
				g.conversation.run();
			}
			
			if (g.quest){
				g.quest.run();
			}
			
			if (g.popup){
				g.popup.run();
			}
			
			
			if (g.zone < 1){
				g.sector = 'dungeon';
				if (g.enemies.length <= 0 && !g.sceneTo){
				    g.transition.reset(120);
					g.sceneTo = 'prologue';
				}
			} else if (g.zone >= 1 && g.zone < 6){
				g.sector = 'forest';
			} else if (g.zone >= 6){
				g.sector = 'city';
			}
			
			if (g.player.health <= 0){
			    g.UI.death();
			}
			
			// g.active = (!g.conversation || !g.conversation.spoke);
		},
		'prologue': function(g){
			imageMode(CORNER);
			image(imgs.backgrounds.dungeon, 0, 0, 2200, 1100);
			
			if (g.prologueTimer < 600){
				image(imgs.prologue.scene_1, 0, 0);
				ctx.fillStyle = 'white';
				if (g.prologueTimer < 600){
					Display.text("You... defeated MY servants?\nHow could that be....", 610, 160, 14, { font: "Cinzel", format: "italic 900", align: "left" });
				}
			} else if (g.prologueTimer >= 600 && g.prologueTimer < 1400){
			  translate(random(-3, 3), random(-3, 3));
				image(imgs.prologue.scene_2, 0, 0);
				ctx.fillStyle = 'white';
				resetMatrix();
				Display.text("Well... no matter. I'll just handle\nthis myself.", 579, 160, 14, { font: "Cinzel", format: "italic 900", align: "left" });
			}
			 else if (g.prologueTimer >= 1400 && g.prologueTimer < 2800){
			  translate(random(-3, 3), random(-3, 3));
				for (let i = 0; i < 6; i ++){
				  image(imgs.misc.dungeon_floor, -400 + i * 222, 517, 222, 200);
				}
				image(imgs.prologue.scene_3, 0, 0);
				ctx.fillStyle = 'white';
			}
			 else if (g.prologueTimer >= 2800 && g.prologueTimer < 3000){
			  translate(random(-3, 3), random(-3, 3));
				image(imgs.prologue.scene_4, 0, 0);
				ctx.fillStyle = 'white';
				
			} else if (g.prologueTimer >= 3000){
			  translate(random(-3, 3), random(-3, 3));
				image(imgs.prologue.scene_5, 0, 0);
				ctx.fillStyle = 'white';
			} 
			if (g.prologueTimer >= 3000 && !g.sceneTo){
			  g.sceneTo = 'dive';
			  g.transition.reset(240);
			}
			
			g.prologueTimer += 3;
		},
		'dive': function(g){
			image(imgs.cutscenes.forest_above, 0, 0, 916, 600);
			
			const scale = constrain((frameCount / 30), 0, 70);
			image(imgs.cutscenes.clouds_above, -scale/2, -scale/2, 916 + scale, 600 + scale);
			
			image(imgs.cutscenes[`player_dive_${round(frameCount / 7) % 3}`], g.playerDiveX, g.playerDiveY + sin(frameCount * 1.2) * 15, 378 - scale, 251 - scale);
			
			ctx.save();
			ctx.globalAlpha = constrain(g.logoOpacity, 0, 1);
			if (g.blur <= 30) ctx.filter = `blur(${g.blur}px)`
			pushMatrix();
			translate(627, g.axeY);
			rotate(90);
			image(imgs.weapons.axe_4, 0, 0);
			popMatrix();
			if (g.blur <= 0) g.axeY = Funcs.lerp(g.axeY, 190, 0.05);
			noStroke();
			
			pushMatrix();
			translate(588, 284);
			rotate(g.ringAngle);
			if (g.blur <= 5){
				ctx.shadowColor = 'yellow'
				ctx.shadowBlur = constrain(map(10 - g.blur, 0, 10, 0, 40), 0, 40);
			}
			imageMode(CENTER);
			image(imgs.logo.ring, 0, 0, 150, 150);
			popMatrix();
			imageMode(CORNER);
			
			ctx.fillStyle = 'white';
			if (g.blur <= 0){
				ctx.shadowColor = 'white';
				ctx.shadowBlur = 4;
			}
			for (let i = 0; i < 2; i ++){
				Display.text("The Last Sage", 489, 316, 34, { format: "900", font: "Cinzel", align: "left" });
				Display.text("ASCENDENT", 489, 280, 53, { format: "900", font: "Cinzel", align: "left" });
			}
			
			if (g.blur <= 0) g.ringAngle = Funcs.lerp(g.ringAngle, 50, 0.01);
			ctx.restore();
			
			ctx.shadowBlur = 0;
			ctx.filter = 'none';
			
			if (g.diveTimer <= 0){
				g.blur += 0.5;
			} else {
				g.blur -= 0.5;
			}
			if (g.blur > 10){
				g.playerDiveX = Funcs.lerp(g.playerDiveX, 300, 0.05);
				g.logoOpacity -= 0.2;
			}
			if (g.playerDiveX > 299){
				g.playerDiveY += 2;
			}
			ctx.globalAlpha = 1;
			g.diveTimer -= 5;
			
			if (g.playerDiveY > 640 && !g.sceneTo){
			    g.zone = 1;
				g.sceneTo = 'land';
				g.reset();
				g.transition.reset(120);
			}
		},
		'land': function(g){
			imageMode(CENTER);
			image(imgs.backgrounds.forest, width / 2, height / 2, 1461, 682);
			image(imgs.player.fall, width / 2, g.playerFallY);
			
			
			pushMatrix();
			translate(0, -g.playerFallY / 2 + 300)
			for (let i = 0; i < 20; i ++){
					image(imgs.misc.evergreen, -2071 + i * 522, 200, 640 * 0.8, 840 * 0.8); // Trees
				}
			image(imgs.misc.grass, width / 2, 740, 916)
			
			g.playerFallY += 6;
			g.playerFallY = constrain(g.playerFallY, -600, 520);
			popMatrix();
			
			if (g.playerFallY >= 50 && !g.sceneTo && g.scene !== 'game'){
				g.sceneTo = 'game';
				g.transition.reset(120)
			}
		},
		'finish': function(g){
		    background(0);
		    
		    ctx.fillStyle = 'white';
		    Display.text("TO BE CONTINUED...", width / 2, height / 2 - 70, 40, { format: "bold", align: 'center' });
		    
            Display.text("Thank you to everyone on Team\nOceanus (TCO 2026) who helped make this!\nBe sure to subscribe to all of us if\nyou enjoyed this!", width / 2, height / 2 + 70, 24, { lineSpacing: 42 });
		},
	};
	return _Scenes;
})();

class Game {
	/**
	 * Bundle and execute main game functions
	 * @constructor
	 * 
	 * @param {Object} config - Configure game
	 * @param {string} config.scene - Set game scene
	 * @param {Object} config.debug - Configure debug/developer settings
	**/
	constructor(config){
		// Scenes
		this.scene = config.scene
		// this.sceneTo = config.scene;
		
		// Player
		// this.shardNum = 0;
		this.player = new Player(this, {
			x: 209, y: 374,
		});
		
		// Camera
		this.camera = new Camera(this, this.player);
		
		// Conversation
		this.conversation = null;
		
		// Quest
		this.quest = null;
		
		// Popup
		// this.popup = null;
		
		// Area Management
		// this.level = parseInt(localStorage.getItem("level")) || 0;
		this.zone = 0;
		this.sector = 'forest';
		
		// Cutscene Properties
		this.axeY = 120;
		this.ringAngle = 0;
		this.blur = 0;
		this.diveTimer = 600;
		this.logoOpacity = 1;
		this.playerDiveX = 78;
		this.playerDiveY = 208;
		this.playerFallY = -200;
		this.prologueTimer = 0;
		
		// Enemy ID Counter
		this.enemyId = 0;
		/**
		 * Stack of IDs with enemies that have already been killed, 
		 * preventing respawning after moving back into the zone
		**/
		this.defeatStack = []; 
		
		// Tutorial
		// this.popups = [
		// 	new Popup({ timer: 300, msg: "Welcome, young soul. You have been tasked with\ncollecting the shards that hold this world together.\nOf course, before you can do that, you'll need to learn\nhow to control your abilities..."}),
		// 	new Popup({ timer: 600, msg: "First of all, remember you can use WASD or\narrow keys\nto move. If you press space bar, you can turn\nyourself into an orb, in which you can move about freely\nand not collide with anything.\nYou have a sword that you can click to swing at enemies."}),
		// 	new Popup({ timer: 300, msg: "Pay attention to your health\non the bottom left and your power bars on the bottom\nright. You cannot perform activities like sprinting\n(shift), use your sword, using time-lock (Z)\n, or turn into an orb."}),
		// 	new Popup({ timer: 300, msg: "There are 3 sections that you must complete.\nFirst, the Sculkscape which have sentries that shoot lasers.\nNext, the Echo Caves which have spiders that jump on you.\nFinally, the Sea of Memories. The serpents there drop\nshards on death." }),
		// 	new Popup({ timer: 300, msg: "That's all you need to know...\nGood luck..." }),
		// ];
		
		// UI
		// this.sector = 'Sculkscape';
		this.deathOpacity = 0;
		// this.deathButtons = new ButtonSet(this, {
		// 	x: width / 2,
		// 	y: 309,
		// 	buttons: [
		// 		new Button({
		// 			txt: "Replay",
		// 			action: () => {
		// 			    this.reset();
		// 			}
		// 		}),
		// 		new Button({
		// 			txt: "Menu",
		// 			action: () => this.sceneTo = 'menu',
		// 		}),
		// 	],
		// });
		this.pulseHeartScale = 1;
		this.UI = {
			hud: () => {
					// LEVEL
					ctx.fillStyle = 'white';
					// Display.text(`${this.sector}`, 60, 59, 22, { format: 'bold', align: "left" });
					// Display.text(`Level ${this.level + 1}`, 60, 89, 22, { format: 'bold', align: "left" });
					
					fill(0, 136, 163, 180);
					noStroke();
					
					rectMode(CENTER);
				
					// HEARTS
					pushMatrix();
					translate(46, 38);
					let offsetX = 0;
					let offsetY = 0;
					
					for (let i = 0; i < this.player.maxHealth / 2; i ++){
					    image(imgs.hearts.empty_heart, i * 30, 0, 25, 20);
					    
					}
					if (this.pulseHeartScale >= 1.5) this.pulseHeartScale = 1;
					const health = this.player.displayHealth; // Round health 
					const halfHeart = health % 1 >= 0.5;
					for (let i = 0; i < Math.floor(health); i ++){
					    image(imgs.hearts.full_heart, i * 30, 0, 25, 20);
					}
					if (halfHeart) image(imgs.hearts.half_heart, Math.floor(health) * 30, 0, 25, 20);
					popMatrix();
					
					this.pulseHeartScale += 0.02;
					
					ctx.fillStyle = 'white';
					Display.text(`${this.sector.toUpperCase()}\nZone ${this.zone}`, 33, 79, 20, { format: "900", align: "left"});
					
					// HOTBAR
					// fill(120, 96, 0);

					// beginShape();
					// vertex(0,477);
					// vertex(152,477);
					// vertex(198,504);
					// vertex(599,504);
					// vertex(599,599);
					// vertex(0,598);
					// vertex(0,477);
					// endShape();
					
					// for (var i = 0; i < 7; i ++){
					// 	fill(194, 153, 72);
					// 	rectMode(CORNER);
					// 	rect(26 + i * 80, 522, 60, 60);
					// }

			},
			death: () => {
				ctx.globalAlpha = this.deathOpacity;
				
				fill(0);
				rectMode(CENTER);
				rect(width / 2, height / 2, width, height);
				
				ctx.save();
				ctx.shadowBlur = 6;
				ctx.shadowColor = 'red'
				ctx.fillStyle = 'red'
				Display.text("You Died", width / 2, 108, 40, { format: "bold", })
				
				Display.text("ENTER TO RESTART", width / 2, height / 2, 30, { format: "bold", })
				ctx.restore();
				
				this.deathOpacity = constrain(this.deathOpacity, 0, 1);
				this.deathOpacity += 0.01;
				
				if (keys.click('enter')){
				    this.reset(true);
				}
				
				ctx.globalAlpha = 1;
			},
		};
		
		// Image loading
		this.curLoad = 0;
		this.loading = true;
		this.imgLen = 0;
		Object.keys(imgs).forEach(category => {
			Object.keys(imgs[category]).forEach(img => {
				this.imgLen ++;
			});
		});
		
		
		// Transition
		const self = this;
		this.transition = {
			timer: 0,
			maxTime: 120,
			dir: 1,
			reset: function(time){
				this.timer = 0;
				this.dir = 1;
				this.maxTime = time;
			},
			run: function(){
				if (this.timer >= this.maxTime){
					this.timer = this.maxTime;
					this.dir = -1;
					self.scene = self.sceneTo;
				}
				
				if (this.timer <= 0) {
					this.timer = 0;
					if (this.dir === -1) {
			            self.sceneTo = false;
			        }
				}
				
				fill(0, map(this.timer, 0, this.maxTime, 0, 255));
				rectMode(CENTER);
				rect(width / 2, height / 2, width, height);
				
				this.timer += this.dir;
			},
		};
		
		this.resetObjs();
		
		// Activity
		this.active = true;
		
		// Initialize physics
		this.handlePhysics();
	}
	handleSave(){
		this.player.handleSave();
		
	    localStorage.setItem("level", this.level)
	}
	reset(death){
		this.rendered = false;
		this.deathOpacity = 0;
		this.resetObjs();
		this.player.reset(death || false);
	}
	resetObjs(){
		if (this.objs){
			this.objs.forEach(arr => {
				arr.forEach((obj, index) => {
					if (obj.body) Composite.remove(engine.world, obj.body)
				});
			});
		}
		
		this.displays = [];
		this.npcs = [];
		this.fires = [];
		this.doors = [];
		this.stairs = [];
		this.gates = [];
		this.enemies = [
			// new Daydeath(this, {
			// 	x: 400,
			// 	y: 400,
			// })
		];
		this.bounds = [];
		this.objs = [this.displays, this.bounds, this.fires, this.gates, this.enemies, this.stairs, this.doors, this.npcs];
	}
	loadImgs(){
		Object.keys(imgs).forEach(category => {
			Object.keys(imgs[category]).forEach(key => {
				imgs[category][key] = imgs[category][key]();
				this.curLoad ++;
			});
		});
		
		if (this.curLoad >= this.imgLen) {
			this.loading = false;
		} else {
        
	       	background(0)
	        pushStyle();
	            noFill();
	            strokeWeight(10);
	            strokeCap(SQUARE);
	            stroke(255);
	            arc(width / 2, height / 2, 300, 300, 0, this.curLoad * 100);
	        popStyle();
	        
	        fill(255);
	        textFont(createFont("sans-serif"), 49);
	        textAlign(CENTER, CENTER);
	        text("Loading...", width / 2, 100);
        	
		}
	}
	runObjs(){
		this.objs.forEach(arr => {
			for (let i = arr.length - 1; i >= 0; i --){
				const obj = arr[i];
				if (obj.health <= 0 || (obj.alive === false)) {
					obj.dead = true;
				}
				if (obj.exists || !(obj instanceof PhysicsObj)) obj[obj.executable]();
				
				// if (!Funcs.onCanvas(obj, this.camera)){
				// 	if (obj.exists){
				// 		if (obj.body) Composite.remove(engine.world, obj.body);
				// 		// console.log("Object removed")
				// 		obj.exists = false;
				// 	}
				// } else {
				// 	if (!obj.exists){
				// 		if (obj.body) Composite.add(engine.world, obj.body);
				// 		obj.exists = true;
				// 	}
				// }
				if (obj.dead){
					if (obj.body) Composite.remove(engine.world, obj.body)
					arr.splice(i, 1)
				}
			}
		});
	}
	handlePhysics(){
		Events.on(engine, 'beforeUpdate', (e) => {
			const grav = engine.gravity;
			const bodies = Composite.allBodies(engine.world);
			bodies.forEach(body => {
				if (body.applyGrav === false){
					Body.applyForce(body, body.position, {
                        x: -grav.x * grav.scale * body.mass,
                        y: -grav.y * grav.scale * body.mass
                    });
				}
			});
		});
		// Call `collide` functions for bodies based on collision state
		Events.on(engine, 'collisionStart', (e) => {
			let pairs = e.pairs;
			
			for (let pair of pairs){
				let { bodyA, bodyB } = pair;
				
				const dirA = { x: pair.collision.normal.x, y: pair.collision.normal.y };
				const dirB = { x: -pair.collision.normal.x, y: -pair.collision.normal.y };
				
				const objA = bodyA.object || bodyA.parent?.object;
				const objB = bodyB.object || bodyB.parent?.object;
				
				if (objA && objA?.collide !== undefined){
					objA.collide(bodyB, 'start', dirA);
				}
				if (objB && objB?.collide !== undefined){
					objB.collide(bodyA, 'start', dirB);
				}
			}
		}); // When a collision is started
		Events.on(engine, 'collisionActive', (e) => {
			let pairs = e.pairs;
			
			for (let pair of pairs){
				let { bodyA, bodyB } = pair;
				
				const dirA = { x: pair.collision.normal.x, y: pair.collision.normal.y };
				const dirB = { x: -pair.collision.normal.x, y: -pair.collision.normal.y };
				
				const objA = bodyA.object || bodyA.parent?.object;
				const objB = bodyB.object || bodyB.parent?.object;
				
				if (objA && objA?.collide !== undefined){
					objA.collide(bodyB, 'active', dirA);
				}
				if (objB && objB?.collide !== undefined){
					objB.collide(bodyA, 'active', dirB);
				}
			}
		}); // When a collision is ongoing
		Events.on(engine, 'collisionEnd', (e) => {
			let pairs = e.pairs;
			
			for (let pair of pairs){
				let { bodyA, bodyB } = pair;
				
				const dirA = { x: pair.collision.normal.x, y: pair.collision.normal.y };
				const dirB = { x: -pair.collision.normal.x, y: -pair.collision.normal.y };
				
				const objA = bodyA.object || bodyA.parent?.object;
				const objB = bodyB.object || bodyB.parent?.object;
				
				if (objA && objA?.collide !== undefined){
					objA.collide(bodyB, 'end', dirA);
				}
				if (objB && objB?.collide !== undefined){
					objB.collide(bodyA, 'end', dirB);
				}
			}
		}) // When a collision has ended
	}
	run(){
		if (this.loading){
			this.loadImgs();
		} else {
			Engine.update(engine, 1000 / 60);
			Scenes[this.scene](this);
			
			this.backgrounds = {
				"dungeon" : new Background(this, {
					img: imgs.backgrounds.dungeon,
					parallax: 0.8,
					w: 1200,
					h: 600,
				}),
				"forest" : new Background(this, {
					img: imgs.backgrounds.forest,
					parallax: 0.8,
					w: 1200,
					h: 600,
				}),
				"city" : new Background(this, {
					img: imgs.backgrounds.city_broken,
					parallax: 0.6,
					w: 1506,
					h: 905,
				}),
				"depths" : new Background(this, {
					img: imgs.backgrounds.depths,
					parallax: 0.6,
					w: 940,
					h: 470,
				}),
			};
			if (this.sceneTo) this.transition.run();
		}
		mouse.update();
		keys.update();
	}
}

const game = new Game({
	scene: 'menu',
});
const draw = () => {
    try {
	game.run();
    } catch (err){
        println(err.stack)
    }
};

if (window.innerWidth < 916){
	println("Wrong screen size! Please add ?width=916 to the end of the URL!")
}

}

runPJS(program)
