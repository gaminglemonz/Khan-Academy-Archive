/**

Presenting...

.▄▄ ·       ▄• ▄▌▄▄▌      ·▄▄▄▪  ▄▄▄  ▄▄▄ .
▐█ ▀. ▪     █▪██▌██•      ▐▄▄·██ ▀▄ █·▀▄.▀·
▄▀▀▀█▄ ▄█▀▄ █▌▐█▌██▪      ██▪ ▐█·▐▀▀▄ ▐▀▀▪▄
▐█▄▪▐█▐█▌.▐▌▐█▄█▌▐█▌▐▌    ██▌.▐█▌▐█•█▌▐█▄▄▌
 ▀▀▀▀  ▀█▄▀▪ ▀▀▀ .▀▀▀     ▀▀▀ ▀▀▀.▀  ▀ ▀▀▀ 

Started: 1/2/2026
Finished & Released: 1/4/2026

Lemon Games @gaminglemonss
If you liked playing this, vote and consider subscribing!
https://www.khanacademy.org/cs/i/4710238676172800

@CREDITS
NL's Graphic Tool 2.0 - @hyundai.ka / @tr4shc0der (main)

ignore the odd concept of "collecting fires"...

**/
// go away...

// setup
size(600, 600, 1);
smooth();
noStroke();

// variables
var loadLevel, player;

var BLOCKSIZE = 50;
var GRAVITY = 0.35;

var lvl = 0;
var maxFires = 0;

var scene = 'menu';

var keys = {};
var charToBlock = {
    "d" : "dirt",
    "s" : "stone",
    "%" : "portal",
    "^" : "spike",
};

var blocks = [];
var fires = [];
var particles = [];
var enemies = [];
var levels = [
    {
        map: [
"d                    ",
"d                ",
"d",
"d",
"d",
"d",
"d                     ",
"d@           ddddddddddddddddssss       sssss",
"dddddddddddddddddddddddssssssssss       sssss",
"ddddddddddddddddssssddssssdsssss            s",
"ddsssssssssddssssssssssssddd                s",
"ssssssssssssssssdddssssddddd                s",
"sssssssddsssssdddddddddddddd                s",
"ssssssssssssssssssssssssssss                s",
"ssssssssssssssssssssssssssss                s",
"ssssssssssssssssssssssssssss!!!!          % s",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssss",
        ],
        messages: [
            {
                txt: "hello there...",
                x: 225,
                y: 257,
            },
            {
                txt: "⬆\n⬅     ➡\n⬇",
                x: 183,
                y: 113,
            },
            {
                txt: "or WASD",
                x: 303,
                y: 111,
            },
            {
                txt: "it seems like you're\nnew here...",
                x: 754,
                y: 164,
            },
            {
                txt: "I guess I should give\nyou a rundown on how things\nwork here...",
                x: 1239,
                y: 164,
            },
            {
                txt: "over here are the fires.\nthey power the gate, and you\nmust collect all of them to pass.",
                x: 1709,
                y: 574,
            },
        ],
    },
    {
        map: [
"d                                             ",
"d",
"d",
"d",
"d",
"d@",
"d",
"d                !                        eeeee %",
"dddddddddddd^^^^dddddddd     ddddddddddddddddddddd",
"dddddddddsssssssssdddddd     ddddddddddddddddddddd",
"ddddddddssssddddsssddddd     ddddddddddssddddddddd",
"dddddddssssssdddssssdddd     dddssddddssssdddddddd",
"ddddddsssssssssddddsssss     sdssssdddssssdddddddd",
"dddddsssssssssdddsssssss     sdssssddddssddddddddd",
"dddddsssssssssdddsssssss     sdssssddddssddddddddd",
"dddddsssssssssdddsssssss     sdssssddddssddddddddd",
"ddddddsssssssdddddssssssssssssssddssdddddddddddddd",
"ddddddsssssssdddddssssssssssssssddssdddddddddddddd",
"ddddddsssssssdddddssssssssssssssddssdddddddddddddd",
"ddddddsssssssdddddssssssssssssssddssdddddddddddddd",
        ],
        messages: [
            {
                txt: "this isn't a utopia, clearly...\navoid dangerous objects...",
                x: 340,
                y: 270
            },
            {
                txt: "maybe something's down there!\nwanna find out?",
                x: 1140,
                y: 270
            },
            {
                txt: "ha, sucker!\nPress R, and be\nsmarter next time",
                x: 1323,
                y: 737
            },
            {
                txt: "be careful over there...\npack of undead...\nthey are mighty strong, fast,\n and unpredictable...",
                x: 1940,
                y: 270
            },
            {
                txt: "*cough* maybe spacebar will save you\n*cough cough*",
                x: 2237,
                y: 138
            },
        ],
    },
    {
        map: [
"d                                             ",
"d",
"d",
"d",
"d",
"d@",
"d ",
"d",
"ddd  ^dss",
"d    ssss",
"d",
"d                                                 ",
"d                                                 ",
"d                          eeeee!                  ",
"d         ^ssssss   ssssssssssss^                 ",
"d         sssssss   s                               ",
"d               s   s                             ",
"d               s   s                             ",
"d  !!!          s   s                             ",
"ssssss          s^^^s                       ",
"ssssssd                                           ",
"sssssssd                                          ",
"ssssssssd                                       % ",
"sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
"dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
"sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
"dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
"sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
        ],
    },
    {
        map: [
"                                            ",
"",
"",
"",
"",
"",
"",
"   ",
"                @",
"      s    d              d               ee",
"s  !            d    d^^^^^       ^^^  ssssss",   
"   d   ^^^^",
"",
"",
"                                                  %",
"                                             sssssss",
        ],
    },
];

var clicked = false;

// font variables
var font = createFont("Cambria Bold");
textFont(font);
textAlign(3, 3); // center, center

// easy pushMatrix/Style() and popMatrix/Style();
function push() { pushMatrix(); pushStyle(); }
function pop() { popStyle(); popMatrix(); }

// user input
function keyPressed(){
    keys[keyCode] = true;
    keys[String(key).toLowerCase()] = true;
}
function keyReleased(){
    delete keys[keyCode];
    delete keys[String(key).toLowerCase()];
    if (key.toString() === "r"){
        player.reset();
    } // add resetting here to avoid stacking
}
function mouseReleased(){ clicked = true; }

// collisions
function rectRect(a, b){
    return a.x + a.w > b.x && a.x < b.x + b.w &&
           a.y + a.h > b.y && a.y < b.y + b.h;
}

// check if object is on screen
function onCanvas(obj, c){
    return obj.x + obj.w > c.x && obj.x < c.x + width + obj.w &&
           obj.y + obj.h > c.y && obj.y < c.y + height + obj.h;
}


var transition = {
    alpha: 255,
    timer: 60,
    particles: [],
    run: function(){
        if (this.timer >= 0){
            for (var i = 0; i < 15; i ++){
                this.particles.push({
                    x: random(0, width),
                    y: 700,
                    sz: random(50, 80),
                    vy: random(-15, -10),
                });
            }
        }
        for (var i = this.particles.length; i --;){
            var p = this.particles[i];
            fill(255, this.alpha);
            ellipse(p.x, p.y, p.sz, p.sz);
            p.y += p.vy;
            if (p.y <= -p.sz){
                this.particles.splice(i, 1);
            }
        }
        if (this.timer <= 0){
            this.alpha -= 3;
        }
        this.timer --;
    },
    reset: function(){
        transition.timer = 60;
        transition.alpha = 255;
    },
};

var Particle = function(x, y, clr){
    this.x = x;
    this.y = y;
    this.clr = clr;
    this.sz = random(2, 20);
    this.lifetime = 255;
    this.vy = random(-5, -1);
    this.dead = false;
};
Particle.prototype = {
    draw: function(){
        fill(this.clr, this.lifetime);
        ellipse(this.x+cos(frameCount*this.sz/3)*this.sz, this.y, this.sz, this.sz);
    },
    update: function(){
        this.y += this.vy;
        this.lifetime -= 3;
        
        if (this.lifetime <= 0){
            this.dead = true;
        }
    },
    run: function(){
        this.draw();
        this.update();
    },
};

var player = {
    x: 0,
    y: 0,
    w: BLOCKSIZE,
    h: BLOCKSIZE * 3,
    v: { x: 0, y: 0, },
    rigs: [[0, 0], [0, 0]],
    speed: 5,
    grav: GRAVITY,
    falling: true,
    health: 100,
    deaths: 0,
    power: 100,
    powerRadius: 0,
    draw: function(){
        fill(255, 0, 0);
        rect(this.x - this.w/2, this.y - 30, 100*this.w/50, 10, 20);
        fill(0, 255, 0);
        rect(this.x - this.w/2, this.y - 30, this.health*this.w/50, 10, 20);
        if (this.powerRadius > 0.5){
            for (var i = 0; i < 10; i ++){
                fill(240, -150 + this.powerRadius + i * 5);
                ellipse(this.x+this.w/2, this.y+this.h/2, i*(this.powerRadius/5), i*(this.powerRadius/5));
            }
        }
            
        fill(250, 254, 255);
        push();
        
        rectMode(CENTER);
        // strokeWeight(10);
        // stroke(255, 0, 0);
        // point(this.x+this.w/2, this.y+this.h/3);
        translate(this.x+this.w/2, this.y+this.h/3);
        rotate(this.rigs[0][1]-(this.v.x>1||this.v.x<-1?sin(frameCount*this.speed)*30:0));
        
        noStroke();
        rect(0, 20, 20, this.h/3.3, 15);
        
        pop();
        push();
        
        rectMode(CENTER);
        // strokeWeight(10);
        // stroke(255, 0, 0);
        // point(this.x+this.w/2, this.y+this.h/1.5);
        translate(this.x+this.w/2, this.y+this.h/1.5);
        rotate(this.rigs[1][1]-(this.v.x>1||this.v.x<-1?sin(frameCount*this.speed)*30:0));
        
        noStroke();
        rect(0, 30, 20, this.h/2.5, 15);
        
        pop();
        
        rect(this.x, this.y, this.w, this.h/3, 10);
        
        rect(this.x+this.w/2-10, this.y+this.h/3, 20, this.h/2.5, 10);
        
        fill(212, 244, 255);
        rect(this.x, this.y, this.w/3, this.h/3, 10);
        
        push();
        
        rectMode(CENTER);
        // strokeWeight(10);
        // stroke(255, 0, 0);
        // point(this.x+this.w/2, this.y+this.h/3);
        translate(this.x+this.w/2, this.y+this.h/3);
        rotate(this.rigs[0][0]+(this.v.x>1||this.v.x<-1?sin(frameCount*this.speed)*30:0));
        
        noStroke();
        rect(0, 20, 20, this.h/3.3, 15);
        
        pop();
        push();
        
        rectMode(CENTER);
        // strokeWeight(10);
        // stroke(255, 0, 0);
        // point(this.x+this.w/2, this.y+this.h/1.5);
        translate(this.x+this.w/2, this.y+this.h/1.5);
        rotate(this.rigs[1][0]+(this.v.x>1||this.v.x<-1?sin(frameCount*this.speed)*30:0));
        
        noStroke();
        rect(0, 30, 20, this.h/2.5, 15);
        
        pop();
        
    },
    move: function(){
        if (keys.a || keys[LEFT]){
            this.v.x = lerp(this.v.x, -this.speed, 0.15);
        } else if (keys.d || keys[RIGHT]){
            this.v.x = lerp(this.v.x, this.speed, 0.15);
        } else {
            this.v.x = lerp(this.v.x, 0, 0.15);
        }
        
        this.x += this.v.x;
        this.collide(this.v.x, 0);
        
        if ((keys.w || keys[UP]) && !this.falling){
            this.v.y = -9;
            this.falling = true;
        }
        
        this.y += this.v.y;
        this.v.y += this.grav;
        this.collide(0, this.v.y);
        
        if (this.y > height+(levels[lvl].map.length * BLOCKSIZE)||this.health<=0){
            this.reset(true);
        }
        this.health += this.health<100?0.1:0;
        
        if (keys[32]){
            this.powerRadius = lerp(this.powerRadius, 200, 0.05);
        } else {
            this.powerRadius = lerp(this.powerRadius, 0, 0.05);
        }
    },
    collide: function(vx, vy){
        var objs = [blocks, enemies];
        for (var i in objs){
            for (var j in objs[i]){
                var obj = objs[i][j];
                if (rectRect(this, obj)){
                    if (obj.type !== "portal"){
                        if (vx > 0){
                            this.v.x = 0;
                            this.x = obj.x - this.w;
                        }
                        if (vx < 0){
                            this.v.x = 0;
                            this.x = obj.x + obj.w;
                        }
                        if (vy > 0){
                            this.v.y = 0;
                            this.y = obj.y - this.h;
                            this.falling = false;
                            
                            if (obj.type === "spike"){
                                this.health -= 25;
                                this.v.y = -6;
                            }
                        }
                        if (vy < 0){
                            this.v.y = 0;
                            this.y = obj.y + obj.h;
                            this.falling = true;
                        }
                    }
                    if (obj.type === "portal" && fires.length === 0){
                        obj.portalTimer --;
                    }
                }
            }
        }
        for (var i in fires){
            var fire = fires[i];
            if (rectRect(this, fire)){
                fire.life -= 2;
            }
        }
    },
    run: function(){
        this.draw();
        this.move();
    },
    reset: function(death){
        this.health = 100;
        this.power = 100;
        this.x = this.setX;
        this.y = this.setY;
        for (var i = 0; i < 100; i ++){
            particles.push(new Particle(this.setX+20+random(0, this.w), this.setY+this.h-i, color(255)));
        }
        if (death) { this.deaths ++; }
    },
};

var Block = function(x, y, type){
    this.x = x;
    this.y = y;
    this.w = BLOCKSIZE;
    this.h = BLOCKSIZE;
    this.type = type;
    this.angle = 0;
    this.portalTimer = 180;
};
Block.prototype = {
    draw: function(){
        switch (this.type){
            case 'dirt':
                fill(130, 86, 24);
                rect(this.x, this.y, this.w, this.h);
                fill(105, 72, 0);
                triangle(this.x+this.w, this.y, this.x, this.y+this.h, this.x+this.w, this.y+this.h);
            break;
            case 'stone':
                fill(117, 117, 117);
                rect(this.x, this.y, this.w, this.h);
                fill(87, 87, 87);
                triangle(this.x+this.w, this.y, this.x, this.y+this.h, this.x+this.w, this.y+this.h);
            break;
            case 'portal':
                var angle = 0;
                this.w = BLOCKSIZE * 2;
                this.h = BLOCKSIZE * 3;
                
                fill(0);
                push();
                
                rectMode(CENTER);
                translate(this.x+this.w/2, this.y+this.h/2+(fires.length===0?sin(frameCount*4)*15:0));
                rotate(this.angle);
                
                rect(0, 0, BLOCKSIZE, BLOCKSIZE);
                
                rotate(-this.angle * 2);
                fill(255);
                void(fires.length===0?rect(0, 0, BLOCKSIZE/2.5+(180-this.portalTimer)/10, BLOCKSIZE/2.5+(180-this.portalTimer)/10):null); // didn't feel like writing an if statement x.x
                
                pop();
                
                for (var i = 0; i < this.h/10; i ++){
                    push();
                    
                    fill(255, 255, 255, -100+i*((maxFires-fires.length)*2+20));
                    rect(this.x, this.y+i*10, this.w, 10);
                    
                    pop();
                }
                if (fires.length===0){particles.push(new Particle(this.x+20+random(0, this.w-35), this.y+this.h, color(255)));}
                
                this.angle += fires.length>0?0:2;
                
                if (this.portalTimer <= 0){
                    loadLevel(true);
                }
            break;
            case 'spike':
                fill(102, 102, 102);
                beginShape();
                
                vertex(this.x, this.y+this.h);
                vertex(this.x+this.w/2-20, this.y+22);
                vertex(this.x+this.w-35, this.y+this.h-11);
                vertex(this.x+this.w-26, this.y+this.h-33);
                vertex(this.x+this.w-20, this.y+this.h-16);
                vertex(this.x+this.w-10, this.y+this.h-30);
                vertex(this.x+this.w, this.y+this.h);
                
                endShape();
        }
    },
};

var Enemy = function(x, y){
    this.x = x;
    this.y = y;
    this.w = BLOCKSIZE * (1 + Math.round(Math.random()));
    this.h = BLOCKSIZE * (1 + Math.round(Math.random()));
    this.x = this.x - (this.w>BLOCKSIZE?this.w/2:0);
    this.y = this.y - (this.h>BLOCKSIZE?this.h/2:0);
    
    this.v = { x: 0, y: 0 };
    this.grav = GRAVITY;
    this.falling = false;
    this.canFloat = Math.random() < 0.3;
    this.dangerous = Math.random() < 0.05;
    this.range = 10;
    
    this.angle = 0;
    
    this.health = 100;
    this.dead = false;
};
Enemy.prototype = {
    draw: function(){
        fill(255, 0, 0);
        rect(this.x - this.w/2, this.y - 50, 100*this.w/50, 10, 20);
        fill(0, 255, 0);
        rect(this.x - this.w/2, this.y - 50, this.health*this.w/50, 10, 20);
        
        fill(0);
        rect(this.x, this.y, this.w, this.h, 10);
        
        if (frameCount%10===0){
            particles.push(new Particle(this.x+10+random(0, this.w-20), this.y+this.h-10, color(0)));
        }
    },
    move: function(){
        this.angle = atan2(player.y - this.y, player.x - this.x);
        
        if (!this.dangerous){
            this.v.x = cos(this.angle) * 3;
        } else {
            this.v.x += cos(this.angle) / 10;
        }
        this.x += this.v.x;
        this.collide(this.v.x, 0);
        
        this.y += this.v.y;
        this.v.y += this.grav + (this.canFloat ? sin(this.angle) : 0);
        this.collide(0, this.v.y);
        
        if (dist(this.x,this.y,player.x,player.y)<=player.powerRadius){
            this.health-=(max(this.w, this.h)/BLOCKSIZE)/5;
        }
        if (this.health <= 0){ this.dead = true; }
        if (this.dead){
            for (var i = 0; i < 50; i ++){
                particles.push(new Particle(this.x+10+random(0, this.w-20), this.y+this.h-10, color(0)));
            }
        }
    },
    collide: function(vx, vy){
        var objs = [blocks, enemies, player];
        for (var i in objs){
            for (var j in objs[i]){
                var obj = objs[i]===player?objs[i]:objs[i][j];
                if (rectRect(this, obj)&&obj!==this){
                    if (obj === player){
                        player.health --;
                    }
                    if (vx > 0){
                        this.v.x = 0;
                        this.x = obj.x - this.w;
                   }
                    if (vx < 0){
                       this.v.x = 0;
                        this.x = obj.x + obj.w;
                    }
                    if (vy > 0){
                        this.v.y = 0;
                        this.y = obj.y - this.h;
                        this.falling = false;
                    }
                    if (vy < 0){
                        this.v.y = 0;
                        this.y = obj.y + obj.h;
                        this.falling = true;
                    }
                }
            }
        }
    },
    run: function(){
        this.draw();
        if (dist(this.x,this.y,player.x,player.y)<=BLOCKSIZE*this.range){
            this.move();
        }
    },
};

var Fire = function(x, y){
    this.x = x;
    this.y = y;
    this.w = BLOCKSIZE;
    this.h = BLOCKSIZE;
    this.life = 120;
    this.dead = false;
    this.clr = Math.random() < 0.5 ? color(240, 128, 24) :
               color(13, 149, 227);
    this.secondary = this.clr===color(240,128,24) ? color(255, 168, 92) : color(87, 193, 250);
};
Fire.prototype = {
    draw: function(){
        fill(this.clr, this.life+135);
        
        // made with NL's Graphic Tool 2.0!
        push();
        translate(this.x-100-sin(frameCount*4), this.y-140-sin(frameCount*4)*2);
        scale(0.4, 0.4+sin(frameCount*4)/50);
        beginShape();
        vertex(294,517);
        bezierVertex(188,485,284,368,289,317);
        vertex(320,393);
        bezierVertex(347,361,323,286,316,288);
        bezierVertex(355,303,434,459,343,519);
        bezierVertex(331,523,291,517,291,517);
        endShape();
        pop();
        
        fill(this.secondary, this.life+135);
        push();
        translate(this.x-35-sin(frameCount*4), this.y-40-sin(frameCount*4));
        scale(0.2, 0.2+sin(frameCount*4)/100);
        beginShape();
        vertex(294,517);
        bezierVertex(188,485,284,368,289,317);
        vertex(320,393);
        bezierVertex(347,361,323,286,316,288);
        bezierVertex(355,303,434,459,343,519);
        bezierVertex(331,523,291,517,291,517);
        endShape();
        pop();
        particles.push(new Particle(this.x+15+random(0, this.w-20), this.y+this.h-10, this.clr));
        
        if (this.life <= 0){ this.dead = true; }
    },
};

var Button = function(x, y, sz, to){
    this.x = x;
    this.y = y;
    this.to = to;
    this.sz = sz;
    this.ogSZ = sz;
};
Button.prototype = {
    draw: function(){
        fill(76, 154, 255);
        ellipse(this.x, this.y, this.sz, this.sz);
        
        fill(0, 128, 255);
        arc(this.x, this.y, this.sz, this.sz, -90, 90);
        
        if (this.over()){
            this.sz = lerp(this.sz, this.ogSZ+20, 0.05);
        } else {
            this.sz = lerp(this.sz, this.ogSZ, 0.05);
        }
        if (this.clicked()){
            transition.reset();
            this.wasClicked = true;
        }
        if (this.wasClicked && transition.timer <= 10) {
            scene = this.to;
        }
    },
    over: function(){
        return dist(mouseX, mouseY, this.x, this.y)<=this.sz/2;
    },
    clicked: function(){
        return this.over() && clicked;
    },
};
var playButton = new Button(width/2, 480, 140, 'game');

var Camera = function(target){
    this.x = target.x || 0;
    this.y = target.y || 0;
    this.target = target;
};
Camera.prototype = {
    follow: function(){
        this.x = lerp(this.x, this.target.x - width/2, 0.05);
        this.x = constrain(this.x, 0, levels[lvl].map[0].length*BLOCKSIZE + width);
        this.y = lerp(this.y, this.target.y + this.target.h/2 - height/2, 0.05);
    },
};
var cam = new Camera(player);

function loadLevel(nxt){
    if (nxt) {
        lvl ++; 
        transition.reset();
    }
    
    blocks = [];
    fires = [];
    enemies = [];
    
    
    for (var i = 0; i < levels[lvl].map.length; i ++){
        for (var j = 0; j < levels[lvl].map[i].length; j ++){
            var char = levels[lvl].map[i][j];
            var X = j * BLOCKSIZE;
            var Y = i * BLOCKSIZE;
            if (char!==" "&&char!=="@"&&char!=="!"&&char!=="e"){
                blocks.push(new Block(X, char==="%"?Y-BLOCKSIZE*2:Y, charToBlock[char]));
            }
            if (char==="!"){
                fires.push(new Fire(X, Y));
            }
            if (char==="@"){
                player.setX = X;
                player.setY = Y - BLOCKSIZE;
                player.x = player.setX;
                player.y = player.setY;
            }
            if (char==="e"){
                enemies.push(new Enemy(X, Y));
            }
        }
    }
    maxFires = fires.length;
}
loadLevel(false);

var objs = [blocks, enemies, particles];
function menu(){
    playButton.draw();
    
    particles.push(new Particle(random(60, 400), 200, color(255, 149, 0)));
    particles.push(new Particle(random(270, 580), 360, color(0, 64, 255)));
    
    for (var i = particles.length; i --;){
        particles[i].run();
        
        if (particles[i].dead) { particles.splice(i, 1); }
    }
    
    strokeWeight(3);
    stroke(255);
    
    push();
    translate(-41, 37);
    scale(0.7);
    // Title {
    for (var i = 0; i < 5; i ++){
    // Repeat {
    strokeWeight(-9 + i*17);
    stroke(240, 128, 24, 120 + i*5 + sin(frameCount*2)*60);
    line(184, 93, 124, 135);
    line(167, 93, 212, 135);
    line(121, 126, 201, 205);
    line(203, 189, 152, 235);
    line(105, 189, 164, 235);
    
    
    // O
    line(306, 93, 235, 170);
    line(308, 225, 235, 155);
    line(295, 225, 353, 146);
    line(290, 93, 353, 161);
    
    // U
    line(373, 93, 387, 232);
    line(458, 223, 371, 220);
    line(451, 93, 445, 232);
    
    // L
    line(500, 93, 509, 223);
    line(590, 211, 499, 217);
    
    stroke(13, 149, 227, 120 + sin((frameCount-60)*2)*60);
    push();
    translate(-20, 0);
    // F
    line(451, 306, 438, 435);
    line(529, 312, 438, 316);
    line(508, 370, 438, 373);
    
    // I
    line(590, 306, 599, 435);
    line(550, 312, 641, 310);
    line(550, 427, 641, 424);
    
    // R
    line(677, 312, 687, 438);
    line(751, 312, 664, 321);
    line(744, 308, 754, 360);
    line(754, 360, 673, 368);
    line(678, 366, 758, 438);
    
    // E
    line(785, 306, 798, 435);
    line(777, 315, 871, 313);
    line(782, 378, 858, 376);
    line(787, 428, 871, 429);
    pop();
    
    strokeWeight(10);
    stroke(255);
    // }
    }
    
    // S
    line(184, 93, 124, 135);
    line(167, 93, 212, 135);
    line(121, 126, 201, 205);
    line(203, 189, 152, 235);
    line(105, 189, 164, 235);
    
    
    // O
    line(306, 93, 235, 170);
    line(308, 225, 235, 155);
    line(295, 225, 353, 146);
    line(290, 93, 353, 161);
    
    // U
    line(373, 93, 387, 232);
    line(458, 223, 371, 220);
    line(451, 93, 445, 232);
    
    // L
    line(500, 93, 509, 223);
    line(590, 211, 499, 217);
    
    translate(-20, 0);
    // F
    line(451, 306, 438, 435);
    line(529, 312, 438, 316);
    line(508, 370, 438, 373);
    
    // I
    line(590, 306, 599, 435);
    line(550, 312, 641, 310);
    line(550, 427, 641, 424);
    
    // R
    line(677, 312, 687, 438);
    line(751, 312, 664, 321);
    line(744, 308, 754, 360);
    line(754, 360, 673, 368);
    line(678, 366, 758, 438);
    
    // E
    line(785, 306, 798, 435);
    line(777, 315, 871, 313);
    line(782, 378, 858, 376);
    line(787, 428, 871, 429);
    
    pop();
    
    // play
    push();
    translate(-60, -105);
    scale(1.22);
    line(282, 518, 286, 442);
    line(282, 447, 321, 482);
    line(282, 515, 321, 482);
    pop();
    // }
    noStroke();
    
}
function game(){
    translate(-cam.x, -cam.y);
    cam.follow();
    
    for (var i = particles.length; i --;){
        particles[i].run();
            
        if (particles[i].dead) { particles.splice(i, 1); }
    }
    for (var i = fires.length; i --;){
        if (onCanvas(fires[i], cam)){
            fires[i].draw();
        }
        if (fires[i].dead){
            fires.splice(i, 1);
        }
    }
    for (var i = enemies.length; i --;){
        if (onCanvas(enemies[i], cam)){
            enemies[i].run();
        }
        if (enemies[i].dead){
            enemies.splice(i, 1);
        }
    }
    for (var i in blocks){
        if (onCanvas(blocks[i], cam)){
            blocks[i].draw();
        }
    }
    
    for (var i in levels[lvl].messages){
        var message = levels[lvl].messages[i];
        fill(255);
        textSize(25);
        text(message.txt, message.x, message.y+sin(frameCount)*10 + i*5);
    }
    
    player.run();
    resetMatrix();
    
    fill(255);
    push();
    textAlign(1, 1); // left, left
    textSize(20);
    text("Level " + String(lvl+1)+"\nFires Collected: "+(maxFires-fires.length)+"/"+maxFires, 20, 550);
    pop();
    
}
draw = function() {
    try {
        background(0, 37, 122);
        for (var i = 0; i < height; i ++){
            var c = lerpColor(color(0, 15, 130),color(0, 3, 194),i/height);
            stroke(c);
            line(0, i, width, i);
            noStroke();
        }
        
        this[scene]();
        transition.run();
        clicked = false;
        
    } catch (error){
        println(error.message);
    }
};
