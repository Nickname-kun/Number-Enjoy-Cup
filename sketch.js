var sketch;//出力するファイルの名前を定義
var dot = {
  x: 0,
  y: 0
}
var col = {//色の変数
  r: 0,
  g: 0,
  b: 0
}
function windowResized() {
    resizeCanvas(windowWidth, 810,WEBGL);
    background(30);//リサイズ後に色を再描画
}
function setup() {
    canvas = createCanvas(windowWidth,810,WEBGL);
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background(30);
}

function draw() {
   frameRate(6);
   rotateX(frameCount * random(0,10));
   rotateY(frameCount * random(0,10));
   line(random(200,600),random(200,600),300,300);
   stroke(random(0,255),random(0,255),random(0,255));
}
new p5(sketch, "container1");//このsketchを、htmlで指定したIDの要素へ出力する