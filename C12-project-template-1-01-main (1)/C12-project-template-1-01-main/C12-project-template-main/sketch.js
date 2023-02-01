var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg.loadImage ("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg.loadImage ("Runner-1.png", "Runner-2.png")
}

function setup(){
  
  createCanvas(400,400,);
 //crie um sprite para a pista 
 path = createSprite (400, 400, 60, 400)
//adicione uma imagem para a pista
path.addImage ("path.png" , pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite (400,400, 20,20)
//adicione uma animação de corrida para ele
boy.scale=0.08;
boy.addImage ("Runner-1.png ", "Runner-2.png", boyImg)
//crie um limite à esquerda
leftBoundary=createSprite(370,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary=visibleFalse
//crie um limite à direita
rightBoundary=createSprite(430,0,100,800);
//defina visibilidade como falsa para o limite à direita
ritghBoundary=visibleFalse
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  worldMouse.x
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.bounceoff(rightBoundary)
  boy.bounceoff(leftBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
