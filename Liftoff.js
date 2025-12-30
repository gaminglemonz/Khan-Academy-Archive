/**

LIFTOFF
Escape From Earth

Lemon Games @gaminglemonss
December 2025

@INSTRUCTIONS
Press space to start rocket
Use A/D or RIGHT/LEFT keys to steer
Use W/UP or spacebar to increase speed

@CREDITS
Image loading by ski @thelegendski

updates after release:
Replaced collision system by Bob Lyon with my own

**/

// jshint esnext : true
// jshint ignore : start

noStroke();
smooth();

const powerupList = ["healthkit", "shield"];
let clouds = [];
let asteroids = [];
let particles = [];
let powerups = [];
let lasers = [];
let titlePos = [
    {
        x: -600,
        from: -600,
        to: 100,
    },
    {
        x: 1200,
        from: 1200,
        to: 70,
    },
    {
        x: -600,
        y: 520,
        from: -600,
        to: 120,
    },
];

let mouse = {};
let keys = {};
let cam = {
    x: 0,
    y: 0,
    zoom: 0,
};

let elevation = 0;
let countdown = 3;
let timer = 0;
let spawnTime = 30;

let started = false;
let finished = false;
let showThumbnail = false;

let scene = 'load';

let textColor = color(255, 255, 255);
textAlign(3, 3);

function createPixels(bitmap, palette, pixelSize){
    for (let i = 0; i < bitmap.length; i ++){
        for (let j = 0; j < bitmap[i].length; j ++){
            if (bitmap[i][j] !== ' '){
                fill(palette[bitmap[i][j]]);
                rect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
            }
        }
    }
}

// IMAGES + LOADING \\
let imgs = {
    // Sprites
    rocket: function(){
        background(0, 0);
        
        createPixels([
            "       5",
        	"      155",
        	"     11155",
        	"    1111555",
        	"   111111555",
        	"   000000000",
        	"   000000000",
        	"   000000000",
        	"   000111000",
        	"   001   100",
        	"   001   100",
        	"   001   100",
        	"   000111000",
        	"   000000000",
        	"   000000000",
        	"   000001000",
        	"   000001000",
        	"  10000015001",
        	" 1100000050011",
        	" 1500000050051",
        	" 1500000050051",
        	"115000000500511",
            "    5551111",
        ], {
        "-": color(0, 0),
    	"0": color(199, 0, 0),
    	"1": color(232, 3, 3),
    	"2": color(255, 82, 82),
    	"3": color(242, 133, 0),
    	"4": color(255, 162, 56),
    	"5": color(214, 26, 26),
    	"6": color(255, 174, 87),
    	"7": color(235, 94, 0),
    	"8": color(245, 98, 0),
    	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 90, 140);
    },
    fire1: function(){
        background(0, 0);
        
        createPixels([
        	"    1     111   11",
        	"         1221",
        	"         221   ",
        	"         22      ",
        	"        2221      ",
        	"   11   2321",
        	"  22    231",
        	"  2     232 1",
        	"        232 21",
        	"         2322411",
        	"         2233211",
        	"        12333321",
        	"       1223332 2",
        	"      1222233",
        	"      12322221",
        	"     123423322",
        	"     2332333321",
        	"     2333344332",
        	"     223344443",
        	"      22344443",
        	"        33443",
        	"         333",
        ], {
        	"1": color(196, 0, 0),
        	"2": color(217, 65, 0),
        	"3": color(240, 128, 0),
        	"4": color(255, 255, 0),
        	"5": color(214, 26, 26),
        	"6": color(255, 174, 87),
        	"7": color(235, 94, 0),
        	"8": color(245, 98, 0),
        	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 104, 140);
    },
    fire2: function(){
        background(0, 0);
        
        createPixels([
        	"    1    111   11",
        	"        1221 1",
        	"        2222   ",
        	"         22    11   ",
        	"        2221     1 ",
        	"   11  22321",
        	"  22   2321",
        	"  2    2332 1",
        	"       2332 21",
        	"        2322211",
        	"         2234211",
        	"        12333321",
        	"       1223332 2",
        	"      1222233",
        	"      12322221",
        	"     123423322",
        	"     2332233321",
        	"     2332334332",
        	"     223334443",
        	"      22344443",
        	"        33443",
        	"         333",
        ], {
        	"1": color(196, 0, 0),
        	"2": color(217, 65, 0),
        	"3": color(240, 128, 0),
        	"4": color(255, 255, 0),
        	"5": color(214, 26, 26),
        	"6": color(255, 174, 87),
        	"7": color(235, 94, 0),
        	"8": color(245, 98, 0),
        	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 109, 140);
    },
    fire3: function(){
        background(0, 0);
        
        createPixels([
        	"         111",
        	"   11   11211",
        	"  1     122 2 11",
        	"         22    11",
        	"       2221     1",
        	"      22321",
        	"   11 2321",
        	"  112 2332",
        	"  22   2332 11",
        	"  2    22322211",
        	"         2243211",
        	"          234321",
        	"       11 2232 2",
        	"      1222223",
        	"     122322221",
        	"    1223423322",
        	"    22342233321",
        	"    22332333332",
        	"     223334433",
        	"      2 334443",
        	"        34443",
        	"         343",
        ], {
        	"1": color(196, 0, 0),
        	"2": color(217, 65, 0),
        	"3": color(240, 128, 0),
        	"4": color(255, 255, 0),
        	"5": color(214, 26, 26),
        	"6": color(255, 174, 87),
        	"7": color(235, 94, 0),
        	"8": color(245, 98, 0),
        	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 104, 140);
    },
    fire4: function(){
        background(0, 0);
        
        createPixels([
        	"     1   111  1",
        	"         11211",
        	"         122 2  1",
        	"           22     1",
        	"          2221     1",
        	"          22321",
        	"   11    2321",
        	"  112    2332",
        	"  2      2332 11",
        	"         22322211",
        	"         2234211",
        	"          244321",
        	"      11 2232 2",
        	"     1222223",
        	"    122342221",
        	"    1223423322",
        	"    22332233321",
        	"    22332333332",
        	"     223334433",
        	"      2 334443",
        	"        334443 ",
        	"         3343",
        ], {
        	"1": color(196, 0, 0),
        	"2": color(217, 65, 0),
        	"3": color(240, 128, 0),
        	"4": color(255, 255, 0),
        	"5": color(214, 26, 26),
        	"6": color(255, 174, 87),
        	"7": color(235, 94, 0),
        	"8": color(245, 98, 0),
        	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 104, 140);
    },
    fire5: function(){
        background(0, 0);
        
        createPixels([
        	"     1    111  1",
        	"         11211",
        	"         122221  ",
        	"         22321 ",
        	"          2331",
        	"          22321",
        	"   11      2321",
        	"  112      2332",
        	"  2        23321",
        	"          2232221",
        	"         22334221",
        	"          234221",
        	"       1 2232 2",
        	"      122223",
        	"     12342221",
        	"     123423322",
        	"     2332233321",
        	"     2332333332",
        	"     223334433",
        	"      23344443",
        	"        344443 ",
        	"         3443",
        ], {
        	"1": color(196, 0, 0),
        	"2": color(217, 65, 0),
        	"3": color(240, 128, 0),
        	"4": color(255, 255, 0),
        	"5": color(214, 26, 26),
        	"6": color(255, 174, 87),
        	"7": color(235, 94, 0),
        	"8": color(245, 98, 0),
        	"9": color(245, 116, 3),
        }, 6);
        
        return get(0, 0, 104, 140);
    },
    cloud: function(){
        background(0, 0);
        
        createPixels([
            '     1111',
            '   11111111     111',
            '  1111111111   11111 11',
            ' 11111111111111111111111',
            '2111111111111111111111111',
            '3222222222222222222222222',
        ], {
            '1': color(255),
            '2': color(207, 236, 255),
            '3': color(178, 225, 255),
            
        }, 8);
        
        return get(0, 0, 200, 250);
    },
    asteroid: function(){
        background(0, 0);
        
        createPixels([
            '  11111',
            ' 1123331',
            '133311231',
            '322311313',
            '311233322',
            '311233222',
            '433332224',
            ' 4222224',
            '  44444',
        ], {
            "1": color(99, 26, 33),
            "2": color(164, 83, 92),
            "3": color(134, 51, 59),
            "4": color(138, 53, 47),
        }, 8);
        
        return get(0, 0, 100, 100);
    },
    asteroidfire: function(){
        background(0, 0);
        
        createPixels([
            '       1',
            '       1',
            '      11',
            '      11',
            '      11   1',
            '     1111  1',
            '     1111111',
            '     11111111',
            '   1 11211111',
            '   1 11211111',
            '   1 13211111',
            '   1113211111',
            '  111112111111',
            '  111122213111',
            '  111122213111',
            '  111223223111',
            '  111223221111',
            ' 11122232221111',
            ' 11132232221111',
            ' 11132232221111',
            ' 11132232221111',
            ' 11122333221111',
            '111122333221111',
            '1111223332211111',
            '1111223332211111',
            '1112233333221111',
            '1122333333322111',
            '1223333333332211',
            '1223222222232211',
            '1232111111123211',
            '1221       12221',
            '1211       11221',
            '111         1111',
        ], {
            '1': color(255, 223, 184),
            '2': color(252, 220, 93),
            '3': color(255, 160, 92),
        }, 6);
        
        return get(0, 0, 100, 300);
    },
    stars: function(){
        background(0, 0);
        
        for (let i = 0; i < 100; i ++){
            pushStyle();
                stroke(255);
                strokeWeight(3);
                point(random(0, 600), random(0, 600));
                
            popStyle();
        }
        
        return get(0, 0, 600, 600);
    },
    healthkit: function(){
        background(0, 0);
        
        createPixels([
            "   11111111",
            "   1      1",
            " 111111111111",
            "11111122111111",
            "11111122111111",
            "11112222221111",
            "11112222221111",
            "11111122111111",
            "11111122111111",
            " 111111111111 ",
        ], {
            "1": color(255),
            "2": color(255, 0, 0),
        }, 5);
        
        return get(0, 0, 70, 70);
    },
    shield: function(){
        background(0, 0);
        
        createPixels([
            "   1111111",
            " 11222333311",
            "1221111111331",
            "1212223333131",
            "1212223333131",
            "1212223333131",
            " 12122333131",
            " 12122333131",
            "  121233131",
            "  121233131",
            "   1213131",
            "    12131",
            "     111",
        ], {
            "1": color(97, 97, 97),
            "2": color(130, 130, 130),
            "3": color(115, 115, 115),
        }, 5);
        
        return get(0, 0, 70, 70);
    },
    shieldArc: function(){
        background(0, 0);
        
        createPixels([
            "       1111",
            "     11222211",
            "    1222222221",
            "   122333333221",
            "  12233333333221",
            "  12333333333321",
            " 1223334444333221",
            " 1223344444433221",
            " 1223344444433221",
        ], {
            "1": color(255, 255),
            "2": color(255, 200),
            "3": color(255, 180),
            "4": color(255, 140),
        }, 5);
        
        return get(0, 0, 120, 120);
    },
};
let curLoad = 0;
function load(){
    
    let obj = Object.keys(imgs);
    let l = obj.length;
    
    
    imgs[obj[curLoad]] = imgs[obj[curLoad]]();
    
    curLoad ++;
    
    if (curLoad >= Object.keys(imgs).length){
        scene = 'game';
    }
    
    background(0);
    pushStyle();
        noFill();
        strokeWeight(10);
        strokeCap(SQUARE);
        stroke(255);
        arc(width / 2, height / 2, 300, 300, 0, curLoad * (360/l));
    popStyle();
    
    fill(255);
    textFont(createFont("sans-serif"), 49);
    textAlign(CENTER, CENTER);
    text("Loading...", width / 2, 100);
    
    imageMode(CENTER);
    image(imgs[obj[curLoad-1]], width/2, height/2);
    imageMode(CORNER);
}

// USER EVENTS \\
function mousePressed(){
    mouse[mouseButton] = true;
}
function mouseReleased(){
    delete mouse[mouseButton];
}
function keyPressed(){
    keys[keyCode] = keys[String(key).toLowerCase()] = true;
    if (keys.t){
        showThumbnail = !showThumbnail;
    }
}
function keyReleased(){
    delete keys[keyCode];
    delete keys[String(key).toLowerCase()];
}

// COLLISIONS \\
function arrRange(arr){
    var maxIndex = 0, minIndex = 0;
    var maxVal = arr[0], minVal = arr[0];
    for (var i = 0; i < arr.length; i ++){
        if (typeof arr[i] === "number"){
            if (arr[i] > maxVal){
                maxVal = arr[i];
                maxIndex = i;
            } 
            if (arr[i] < minVal){
                minVal = arr[i];
                minIndex = i;
            }
        } else { 
            continue;
        }
    }
    return { 
        maxIndex: maxIndex, 
        minIndex: minIndex, 
        max: maxVal, 
        min: minVal,
        range: Math.abs(maxVal - minVal),
    };
}
function pointPoint(a, b){
    return dist(a.x, a.y, b.x, b.y) <= b.r / 2;
}
function rotatePoint(x, y, c, angle){
    return {
        x: (x-c.x)*cos(angle)-(y-c.y)*sin(angle)+c.x,
        y: (x-c.x)*sin(angle)+(y-c.y)*cos(angle)+c.y
    };
}
function outlinePoints(shape, vertices, steps, angle){
    var points = [];
    var verticesX = [];
    var verticesY = [];
    var _vertices = [];
    var center;
    
    for (var i = 0; i < vertices; i ++){ 
        var pointPos = [i + 1, (i + 1) % vertices + 1];
        
        var x1 = shape["x"+pointPos[0]];
        var y1 = shape["y"+pointPos[0]];
        var x2 = shape["x"+pointPos[1]];
        var y2 = shape["y"+pointPos[1]];
        
        verticesX.push(x1);
        verticesY.push(y1);
    }
    
    center = {
        x: arrRange(verticesX).min + abs((arrRange(verticesX).max - arrRange(verticesX).min)) / 2,
        y: arrRange(verticesY).min + abs((arrRange(verticesY).max - arrRange(verticesY).min)) / 2,
    };
    for (var i = 0; i < vertices; i ++){
        var pointPos = [i + 1, (i + 1) % vertices + 1];
        var verticeX = rotatePoint(shape["x"+pointPos[0]], shape["y"+pointPos[0]], center, angle).x;
        var verticeY = rotatePoint(shape["x"+pointPos[0]], shape["y"+pointPos[0]], center, angle).y;
        
        _vertices.push({
            x: verticeX,
            y: verticeY,
        });
        
        for (var j = 0; j < steps; j ++){
            var x = lerp(shape["x"+pointPos[0]], shape["x"+pointPos[1]], j/steps);
            var y = lerp(shape["y"+pointPos[0]], shape["y"+pointPos[1]], j/steps);
            var rotatedPoint = rotatePoint(x, y, center, angle);
            
            strokeWeight(5);
            // point(x, y);
            // point(rotatedPoint.x, rotatedPoint.y);
            points.push({ x: rotatedPoint.x, y: rotatedPoint.y });
        }
        
        var x1 = shape["x"+pointPos[0]];
        var y1 = shape["y"+pointPos[0]];
        var x2 = shape["x"+pointPos[1]];
        var y2 = shape["y"+pointPos[1]];
        // strokeWeight(1);
        // pushMatrix();
        //     translate(center.x, center.y);
        //     rotate(angle);
            
        //     line(x1 - center.x, y1 - center.y, x2 - center.x, y2 - center.y);
            
        //     strokeWeight(5);
        //     point(x1 - center.x, y1 - center.y);
        // popMatrix();
    }
    
    strokeWeight(5);
    point(center.x, center.y);
    
    return { 
        points: points,
        center: center,
        vertices: _vertices,
    };
}
function polyPoly(a, b){
    for (var v = 0; v < b.vertices.length; v ++){
        var x = b.vertices[v].x;
        var y = b.vertices[v].y;
        for (var i = 0; i < a.points.length; i ++){
            if (x < a.center.x &&
                y < a.center.y){
                if (x > a.points[i].x &&
                    y > a.points[i].y){
                    return true;
                }
            } else if (x < a.center.x && 
                       y > a.center.y){
                if (x > a.points[i].x &&
                    y < a.points[i].y){
                    return true;
                }
            } else if (x > a.center.x && 
                       y < a.center.y){
                if (x < a.points[i].x &&
                    y > a.points[i].y){
                    return true;
                }
            } else if (x > a.center.x && 
                       y > a.center.y){
                if (x < a.points[i].x &&
                    y < a.points[i].y){
                    return true;
                }
            }
        }
    }
    return false;
}
function constructRect(obj){
    return {
        sides: 4,
        x1: obj.x,
        y1: obj.y,
        x2: obj.x + obj.w,
        y2: obj.y,
        x3: obj.x + obj.w,
        y3: obj.y + obj.h,
        x4: obj.x,
        y4: obj.y + obj.h,
    };
}
function rectRect(a, b){
    var rectA = constructRect(a);
    var outlineA = outlinePoints(rectA, rectA.sides, 2, a.angle||a.r||0);
    var rectB = constructRect(b);
    var outlineB = outlinePoints(rectB, rectB.sides, 2, b.angle||b.r||0);
    
    return polyPoly(outlineA, outlineB) ||
           polyPoly(outlineB, outlineA);
}

// PIXEL FONT \\
function Text(msg, x, y, sz){
    let chars = {
    
    // Pixel Font Characters {
    'A': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#   #",
            "#   #",
            "#####",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'B': function(){
        
        
        createPixels([
            "####",
            "#   #",
            "#   #",
            "####",
            "#   #",
            "#   #",
            "####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'C': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#    ",
            "#",
            "#    ",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'D': function(){
        
        
        createPixels([
            "####",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'E': function(){
        
        
        createPixels([
            "#####",
            "#   ",
            "#   ",
            "####",
            "#   ",
            "#   ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'F': function(){
        
        
        createPixels([
            "#####",
            "#   ",
            "#   ",
            "####",
            "#   ",
            "#   ",
            "#",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'G': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#   ",
            "# ### ",
            "#   #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'H': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "#   #",
            "#####",
            "#   #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'I': function(){
        
        
        createPixels([
            "#####",
            "  #  ",
            "  # ",
            "  #",
            "  # ",
            "  # ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'J': function(){
        
        
        createPixels([
            "####",
            "   #",
            "   #",
            "   #",
            "   #",
            "#  #",
            " ##",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'K': function(){
        
        
        createPixels([
            "#  #",
            "#  # ",
            "# #",
            "##",
            "# # ",
            "#  #",
            "#  #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'L': function(){
        
        
        createPixels([
            "#",
            "#  ",
            "# ",
            "#",
            "# ",
            "# ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'M': function(){
        
        
        createPixels([
            "## ##",
            "# # #",
            "# # #",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'N': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "##  #",
            "# # #",
            "#  ##",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'O': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'P': function(){
        
        createPixels([
            " ###",
            "#   #",
            "#   #",
            "#   #",
            "####",
            "#",
            "#",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'Q': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "#  #",
            " ## #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'R': function(){
        
        
        createPixels([
            "####",
            "#   #",
            "#   #",
            "#   #",
            "####",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'S': function(){
        
        
        createPixels([
            " ###",
            "#   #",
            "#   ",
            " ###",
            "    #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'T': function(){
        
        
        createPixels([
            "#####",
            "  #",
            "  #",
            "  #",
            "  #",
            "  #",
            "  #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'U': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'V': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "#   #",
            " # #",
            " # #",
            " # #",
            "  #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'W': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "#   #",
            "# # # ",
            "# # #",
            "# # # ",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'X': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            " # #",
            "  #",
            " # #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'Y': function(){
        
        
        createPixels([
            "#   #",
            "#   #",
            "#   #",
            " ####",
            "    #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'Z': function(){
        
        
        createPixels([
            "#####",
            "    #",
            "   #",
            "  #",
            " #   ",
            "#   ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'a': function(){
        
        
        createPixels([
            "",
            "",
            "#### ",
            "    #",
            " #### ",
            "#   #",
            " ####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'b': function(){
        
        
        createPixels([
            "#",
            "#   ",
            "#  ",
            "####",
            "#   # ",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'c': function(){
        
        
        createPixels([
            "",
            "    ",
            " ###",
            "#   #",
            "#   ",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'd': function(){
        
        
        createPixels([
            "    #",
            "    #",
            "    #",
            " ####",
            "#   #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'e': function(){
        
        
        createPixels([
            "",
            "    ",
            " ###",
            "#   #",
            "#####",
            "#   ",
            " ####",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'f': function(){
        
        
        createPixels([
            " ##",
            "#  #",
            "#  ",
            "###",
            "#   ",
            "#",
            "#",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'g': function(){
        
        
        createPixels([
            '',
            '',
            " ###",
            "#   #",
            "#   #",
            " ####",
            "    #",
            "    #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);
        
        
    },
    'h': function(){
        

        createPixels([
            "#    ",
            "#    ",
            "#    ",
            "#### ",
            "#   #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'i': function(){
        

        createPixels([
            "  #  ",
            "     ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'j': function(){
        

        createPixels([
            "    #",
            "     ",
            "    #",
            "    #",
            "    #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'k': function(){
        

        createPixels([
            "#    ",
            "#    ",
            "#  # ",
            "# #  ",
            "###  ",
            "#  # ",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'l': function(){
        

        createPixels([
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'm': function(){
        

        createPixels([
            "     ",
            "     ",
            " # # ",
            "# # #",
            "# # #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'n': function(){
        

        createPixels([
            "",
            "",
            "#### ",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'o': function(){
        

        createPixels([
            "",
            "",
            " ### ",
            "#   #",
            "#   #",
            "#   #",
            " ### ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'p': function(){
        

        createPixels([
            "",
            "",
            "#### ",
            "#   #",
            "#   #",
            "#### ",
            "#    ",
            "#    ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'q': function(){
        

        createPixels([
            "",
            "",
            " ### ",
            "#   #",
            "#   #",
            " ####",
            "    #",
            "    #",
            "    ##",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'r': function(){
        

        createPixels([
            "",
            "",
            " ###",
            "#   #",
            "#    ",
            "#    ",
            "#    ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    's': function(){
        

        createPixels([
            "",
            "",
            " ####",
            "#    ",
            " ### ",
            "    #",
            "#### ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    't': function(){
        

        createPixels([
            "  #  ",
            "  #  ",
            " ### ",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'u': function(){
        

        createPixels([
            "",
            "",
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            " ### ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'v': function(){
        

        createPixels([
            "",
            "",
            "#   #",
            "#   #",
            "#   #",
            " # # ",
            "  #  ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'w': function(){
        

        createPixels([
            "",
            "",
            "#   #",
            "#   #",
            "# # #",
            "# # #",
            " ### ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'x': function(){
        

        createPixels([
            "",
            "",
            "#   #",
            " # # ",
            "  #  ",
            " # # ",
            "#   #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'y': function(){
        

        createPixels([
            "",
            "",
            "#   #",
            "#   #",
            "#   #",
            " ####",
            "    #",
            " ### ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    'z': function(){
        

        createPixels([
            "",
            "",
            "#####",
            "   # ",
            "  #  ",
            " #   ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '.': function(){
        

        createPixels([
            "",
            "",
            "",
            "",
            "",
            "",
            "#",
        ], {
            '#': color(textColor),
        }, sz);

        
    },    
    ',': function(){
        

        createPixels([
            "",
            "",
            "",
            "",
            " #",
            " #",
            "#",
        ], {
            '#': color(textColor),
        }, sz);

        
    },    
    '!': function(){
        

        createPixels([
            "#",
            "#",
            "#",
            "# ",
            "#  ",
            "   ",
            "#",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '?': function(){
        

        createPixels([
            " ##",
            "#  #",
            "   #",
            " ## ",
            " #  ",
            "    ",
            " #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '1': function(){
        

        createPixels([
            "  #",
            " ##",
            "# #",
            "  # ",
            "  #  ",
            "  #   ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '2': function(){
        

        createPixels([
            " ###",
            "#   #",
            "#   #",
            "   # ",
            "  #  ",
            " #   ",
            "#####",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '3': function(){
        

        createPixels([
            " ###",
            "#   #",
            "    #",
            "  ## ",
            "    #",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '4': function(){
        

        createPixels([
            "#   #",
            "#   #",
            "#   #",
            "#####",
            "    # ",
            "    #",
            "    #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '5': function(){
        

        createPixels([
            "#####",
            "#   ",
            "#   ",
            "####",
            "    # ",
            "#   #",
            " ###",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '6': function(){
        

        createPixels([
            " ###",
            "#   #",
            "#   ",
            "####",
            "#   #",
            "#   #",
            " ###   ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '7': function(){
        

        createPixels([
            "#####",
            "    #",
            "    #",
            "    #",
            "   #",
            "  #",
            "  #",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '8': function(){
        

        createPixels([
            " ###",
            "#   #",
            "#   #",
            " ###",
            "#   #",
            "#   #",
            " ###   ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '9': function(){
        

        createPixels([
            " ###",
            "#   #",
            "#   #",
            " ####",
            "    #",
            "#   #",
            " ###   ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '0': function(){
        

        createPixels([
            " ###",
            "#   #",
            "##  #",
            "# # #",
            "#  ##",
            "#   #",
            " ###   ",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '-': function(){
        

        createPixels([
            "",
            "",
            "",
            "#####",
            "",
            "",
            "",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '+': function(){
        

        createPixels([
            "",
            "  #",
            "  #",
            "#####",
            "  #",
            "  #",
            "",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    ':': function(){
        

        createPixels([
            "",
            "#",
            "#",
            "",
            "",
            "#",
            "#",
            "",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    '\'': function(){
        

        createPixels([
            "#",
            "#",
        ], {
            '#': color(textColor),
        }, sz);

        
    },
    // }
    };
    
    let offsetY = 0;
    let offsetX = 0;
    for (let i = 0; i < msg.length; i ++){
        if (msg[i] === '\n'){
            offsetY += sz/1.2;
            offsetX = 0;
        } else if (msg[i] === ' '){
            offsetX += 15;
        } else {
            translate(x + offsetX, y + offsetY);
            chars[msg[i]]();
            resetMatrix();
            // if (msg[i] === 'l'){
                // offsetX += sz*6;
            // } else {
                offsetX += sz*6;
            // }
        }
    }
}

// PARTICLES \\
const Particle = (function(){
    function Particle(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.clr = config.clr || 0;
        this.v = config.v || {x: 0, y: 0};
        this.smoke = config.smoke || false;
        this.sz = random(7, 12);
        this.a = 255;
        this.angle = 45;
        this.dead = false;
        
        this.run = function(){
            if (!this.smoke){
                fill(this.clr, this.a);
                rect(this.x, this.y, this.sz, this.sz);
            } else {
                pushMatrix();
                    translate(this.x, this.y);
                    rotate(this.angle);
                    rectMode(CENTER);
                    
                    fill(this.clr, this.a);
                    rect(0, 0, 45, 45);
                popMatrix();
            }
            
            if (this.a < 0){
                this.dead = true;
            }
            
            this.a -= 3;
            this.x += !this.smoke?this.v.x:0;
            this.y += !this.smoke?this.v.y:0;
            this.v.y += 0.1;
            this.angle += 2;
        };
    }
    return Particle;
})();

// CLOUDS \\
const Cloud = (function(){
    function Cloud(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.vx = config.vx || 4;
        this.size = config.size || 80;
        this.dead = false;
        
        this.draw = function() {
            image(imgs.cloud, this.x, this.y, this.size, this.size);
        };
        this.move = function(){
            this.x += this.vx;
            if (this.x > cam.x + width + this.size*4){
                this.dead = true;
            }
        };
        this.run = function(){
            this.draw();
            this.move();
        };
    }
    return Cloud;
})();

// ASTEROIDS \\
const Asteroid = (function(){
    function Asteroid(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.vy = 0;
        this.grav = random(0.1, 1);
        this.w = 65;
        this.h = 60;
        this.frame = 1;
        this.dead = false;
        this.angle = 0;
        
        this.draw = function() {
            image(imgs.asteroidfire, this.x - 10, this.y - 180);
            image(imgs.asteroid, this.x, this.y, 100, 100);
        };
        this.move = function(){
            this.y += this.vy;
            this.vy += this.grav;
            
            if (this.dead){
                for (let i = 0; i < 50; i ++){
                    particles.push(new Particle({
                        x: this.x,
                        y: this.y - random(30, 60),
                        clr: color(138, 53, 47),
                        v: {
                            x: random(-5, 5),
                            y: random(4, 10),
                        }
                    }));
                }
            }
        };
        this.run = function(){
            if (this.x > cam.x - 100 && this.x < cam.x + width*2){
                this.draw();
            }
            this.move();
        };
    }
    
    return Asteroid;
})();

// POWERUPS \\
const Powerup = (function(){
    const Powerup = function(config){
        this.x = config.x;
        this.y = config.y;
        this.w = config.w || 30;
        this.h = config.h || 30;
        this.type = config.type;
        this.dead = false;
    };
    Powerup.prototype.run = function() {
        for (var i = 0; i < 25; i ++){
            fill(255, 255, 255, 50 + i/5 + sin(frameCount)*30);
            ellipse(this.x + this.w/2, this.y + this.h/2 - 7, i * 4 + sin(frameCount)*2, i * 4 + sin(frameCount));
        }
        image(imgs[this.type], this.x, this.y, this.w, this.h);
        this.y += 3;
        if (this.y > cam.y + 1400){
            this.dead = true;
        }
    };
    return Powerup;
})();

// PLAYER \\
let player = {
    x: 645,
    y: 390,
    w: 90,
    h: 140,
    v: { x: 0, y: 0 },
    speed: 0,
    state: 1,
    angle: 0,
    health: 100,
    targetHealth: 100,
    throttle: false,
    dead: false,
    shieldLife: 0,
    draw: function() {
        pushMatrix();
        translate(this.x+this.w/2, this.y+this.h/2);
        rotate(this.angle);
        
        imageMode(CENTER);
        if (this.throttle) {
            pushMatrix();
            rotate(180);
            image(imgs["fire" + this.state], -15, -this.h + 10, this.w + 20, this.h + 20);
            popMatrix();
        }
        
        image(imgs.rocket, 0, 0);
        if (this.shieldLife > 0){
            image(imgs.shieldArc, 20, 0, this.w + 70, this.h + 20);
        }
        popMatrix();
        imageMode(CORNER);
        rectMode(CORNER);
    },
    move: function() {
        this.throttle = true;
        if (this.throttle && !this.dead) {
            this.v.y = this.speed;
            if (keys[DOWN] || keys.s){
                this.speed = -4;
            } else {
                this.speed = -7;
            }
            
            if (keys[32] || (keys[UP] || keys.w)){
                this.speed = -10;
            }
        } else {
            this.throttle = false;
            this.speed = 0;
            this.v.y += 0.2;
            this.angle += this.v.x > 0 ? 2 : -2;
        }
        if (this.y > 460){
            this.v.y = 0;
            this.y = 460;
            this.v.x = 0;
        }
        this.y += this.v.y;
        
        if (!this.dead){
            if (keys.a || keys[LEFT]){
                this.angle = lerp(this.angle, -30, 0.05);
                this.v.x = lerp(this.v.x, this.speed-10, 0.05);
            } else if (keys.d || keys[RIGHT]){
                this.angle = lerp(this.angle, 30, 0.05);
                this.v.x = lerp(this.v.x, -this.speed+10, 0.05);
            } else {
                this.angle = lerp(this.angle, 0, 0.05);
                this.v.x = lerp(this.v.x, 0, 0.05);
            }
        }
        this.x += this.v.x;
        
        if (timer % 7 === 0) {
            this.state ++;
            if (this.state > 5){
                this.state = 1;
            }
            particles.push(new Particle({
                x: this.x+this.w/2,
                y: this.y+this.h,
                clr: color(117, 117, 117),
                smoke: true,
            }));
        }
        
        for (let i = 0; i < asteroids.length; i ++){
            if (!this.dead && rectRect(this, asteroids[i])){
                this.targetHealth -= this.shieldLife>0?0:10;
                asteroids[i].dead = true;
            }
        }
        for (let i = 0; i < powerups.length; i ++){
            if (!this.dead && rectRect(this, powerups[i])){
                if (powerups[i].type==="healthkit"){
                    this.targetHealth += 10;
                } else if (powerups[i].type==="shield"){
                    this.shieldLife = 600;
                }
                powerups[i].dead = true;
            }
        }
        if (this.shieldLife > 0){
            this.shieldLife -= 3;
        }
        this.health = lerp(this.health, this.targetHealth, 0.05);
        this.health = constrain(this.health, 0, 100);
        if (this.targetHealth <= 0 
            && elevation < 1000) this.dead = true;
    },
    reset: function(){
        this.dead = false;
        this.health = 100;
        this.targetHealth = 100;
        this.x = 645;
        this.y = 390;
        this.v = { x: 0, y: 0 };
        this.angle = 0;
        asteroids = [];
        countdown = 3;
        timer = 0;
    },
    run: function() {
        this.draw();
        if (started && countdown <= 0) this.move();
    },
};

// THUMBNAIL \\
function thumbnail(){
    for (let i = 0; i < 20; i++) {
        let clr2 = color(0, 187 - elevation/5, 255 - elevation/5);
        let clr1 = color(0, 119 - elevation/5, 255 - elevation/5);
        fill(lerpColor(clr1, clr2, i / 10));
        rect(0, i * 60, width, 60);
    }
    pushStyle();
    pushMatrix();
    
    imageMode(CENTER);
    translate(400, 340);
    rotate(-30);
    pushMatrix();
        rotate(180);
        image(imgs.fire1, -20, -300, 240, 380);
    popMatrix();
    image(imgs.rocket, 0, 0, 240, 380);
    
    
    popMatrix();
    popStyle();
    
    textColor = color(0);
    Text("LIFTOFF", 47, 47, 10);
    Text("Escape From Earth", 47, 127, 5);
    Text("PLAY NOW", 220, 520, 8);
    
    textColor = color(255);
    Text("LIFTOFF", 40, 40, 10);
    Text("Escape From Earth", 40, 120, 5);
    Text("PLAY NOW", 213, 513, 8);
}

// SCENES + DRAWING \\
function game() {
    
    if (elevation > 2000) image(imgs.stars, 0, 0, width, height);
    scale(cam.zoom+1);
    translate(-cam.x - cam.zoom*50, -cam.y - cam.zoom*8);
    
    if (!player.dead && elevation < 1000){
        cam.y = lerp(cam.y, player.y - height / 2 + (!started ? -100 : -600), 0.05);
        cam.x = lerp(cam.x, player.x + player.w/2 - width / 2 + cam.zoom*width/1.5, 0.05);
    }
    for (let i = clouds.length; i--;) {
        clouds[i].run();
        if (clouds[i].dead) {
            clouds.splice(i, 1);
        }
    }
    for (let i = particles.length; i --;){
        particles[i].run();
        if (particles[i].dead){
            particles.splice(i, 1);
        }
    }
    for (let i = asteroids.length; i --;){
        asteroids[i].run();
        if (asteroids[i].dead){
            asteroids.splice(i, 1);
        }
        if (asteroids[i].y > cam.y + 1400){
            asteroids[i].dead = true;
        }
    }
    for (let i = powerups.length; i --;){
        powerups[i].run();
        if (powerups[i].dead){
            powerups.splice(i, 1);
        }
    }
    if (!started) {
        if (frameCount > 50) {
            titlePos[0].x = lerp(titlePos[0].x, titlePos[0].to, 0.07);
        }
        if (frameCount > 100) {
            titlePos[1].x = lerp(titlePos[1].x, titlePos[1].to, 0.07);
        }
        if (frameCount > 150) {
            titlePos[2].x = lerp(titlePos[2].x, titlePos[2].to, 0.07);
        }
    } else if (started) {
        timer++;
        cam.zoom = lerp(cam.zoom, -0.3, 0.05);
        
        if (frameCount % 5 === 0 && countdown <= 0) {
            asteroids.push(new Asteroid({
                x: random(cam.x - width*2, cam.x + width*4),
                y: random(cam.y - 600, cam.y - 200),
            }));
        }
        if (frameCount % 100 === 0 && countdown <= 0) {
            powerups.push(new Powerup({
                x: random(cam.x - width*2, cam.x + width*4),
                y: random(cam.y - 600, cam.y - 200),
                w: 70,
                h: 70,
                type: powerupList[round(random(0, powerupList.length-1))]
            }));
        }
    }
    player.run();
    
    // Ground
    for (let i = 0; i < 26; i++) {
        const clr2 = color(0, 255, 21);
        const clr1 = color(0, 166, 11);
        fill(lerpColor(clr1, clr2, i / 10));
        rect(player.x - 900, 510 + i * 60, 1800, 60);
    }
    
    resetMatrix();
    if (frameCount % spawnTime === 0 && elevation < 1000) {
        clouds.push(new Cloud({
            x: random(cam.x - width, cam.x - 200),
            y: random(-1000, 200),
            vx: random(1, 7),
            size: random(100, 250),
        }));
    }
    if (started) {
        titlePos[0].x = lerp(titlePos[0].x, titlePos[0].from, 0.07);
        titlePos[1].x = lerp(titlePos[1].x, titlePos[1].from, 0.07);
        titlePos[2].y = lerp(titlePos[2].y, 1200, 0.07);
        if (timer < 220) {
            if (timer % 60 === 0) countdown--;
            Text(countdown > 0 ? countdown.toFixed(0) : "LIFTOFF!", countdown > 0 ? 265 : 40, 300, countdown > 0 ? 12 : 12);
        }
        Text("Elevation: " + elevation.toFixed(0) + "m", 28, 850, 4);
        
        // Health
        for (let i = 0; i < 10; i ++){
            let gap = i * 3;
            if (player.health > 40){
                fill(255, 255, 255, 200-gap*10);
                gap = gap+sin(frameCount*2)*2;
            } else {
                fill(173, 0, 0, 200-gap*10);
                gap = gap+sin(frameCount*5)*4;
            }
            quad(45-gap, 90+gap, 70-gap, 50-gap, 575+gap, 50-gap, 550+gap, 90+gap);
        }
        
        fill(255, 0, 0);
        // rect(50, 50, 500, 40);
        quad(50, 90, 70, 50, 570, 50, 550, 90);
        
        fill(0, 255, 0);
        // rect(50, 50, player.health * 5, 40);
        quad(50, 90, 70, 50, player.health*5+70, 50, player.health*5+50, 90);
        
        // Shield Life
        if (player.shieldLife > 0){
            for (let i = 0; i < 10; i++){
                let gap = i * 3;
                if (player.shieldLife > 40){
                    fill(255, 255, 255, 200 - gap * 10);
                    gap = gap + sin(frameCount * 2) * 2;
                } else {
                    fill(173, 0, 0, 200 - gap * 10);
                    gap = gap + sin(frameCount * 5) * 4;
                }
                quad(45 - gap, 170 + gap, 70 - gap, 130 - gap, 575 + gap, 130 - gap, 550 + gap, 170 + gap);
            }
            fill(255, 0, 0);
            // rect(50, 130, 500, 40);
            quad(50, 170, 70, 130, 570, 130, 550, 170);
            fill(0, 89, 255);
            // rect(50, 130, player.health * 5, 40);
            quad(50, 170, 70, 130, player.shieldLife * 5/6 + 70, 130, player.shieldLife * 5/6 + 50, 170);
        }

        
        if (timer % 500 === 0){
            spawnTime -= 5;
        }
    }
    
    // Title Screen
    textColor = color(0);
    Text("LIFTOFF", titlePos[0].x+7, 107, 10);
    Text("Escape From Earth", titlePos[1].x+7, 207, 5);
    Text("Click To Start", titlePos[2].x+7, titlePos[2].y+7+200, 5);
    
    textColor = color(255);
    Text("LIFTOFF", titlePos[0].x, 100, 10);
    Text("Escape From Earth", titlePos[1].x, 200, 5);
    Text("Click To Start", titlePos[2].x, titlePos[2].y+200, 5);
    
    
    // Dead Screen
    if (player.dead){
        Text("You didn't make it...", 70, 200, 4);
        Text("Click to try again.", 70, 290, 4);
        
        if (mouse[LEFT]){
            player.reset();
        }
    } else if (elevation >= 1000) {
        Text("You made it out!", 25, 340, 7);
        Text("Click to play again!", 42, 490, 5);
        if (mouse[LEFT]){
            player.reset();
        }
    }
    
    if (!player.dead) elevation = -player.y/20;
    if (elevation < 0){
        elevation = 0;
    }
    
}
function draw() {
    
    for (let i = 0; i < 20; i++) {
        let clr2 = color(0, 187 - elevation/5, 255 - elevation/5);
        let clr1 = color(0, 119 - elevation/5, 255 - elevation/5);
        fill(lerpColor(clr1, clr2, i / 10));
        rect(0, i * 60, width, 60);
    }
    
    if (mouse[LEFT]) {
        started = true;
    }
    try {
        this[scene]();
        if (showThumbnail) thumbnail();
    } catch (e){
        // println(e.message);
    }
}
if (height !== 900){
    println("Wrong screen size!\nGo here: https://www.khanacademy.org/computer-programming/liftoff-escape-from-the-earth-game/5991178950000640?height=900");
}

