function bounceOff(object1,object2){
    if (object1.x - object2.x < fixedRect.width/2 + movingRect.width/2
      && object2.x - object1.x < fixedRect.width/2 + movingRect.width/2) {
        fixedRect.velocityX = fixedRect.velocityX * (-1);
        movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if (object1.y - object2.y < fixedRect.height/2 + movingRect.height/2
    && object2.y - object1.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }