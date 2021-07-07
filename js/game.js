class Game{
    constructor(){
    }

    getState(){
      var dbref= database.ref("gameState")
      dbref.on("value", function(data){
          gameState= data.val()
      })
    }

    update(state){
     database.ref("/").update({gameState:state})
    }

    startGame(){
        console.log("game" + gameState) 
        if(gameState===0){
          
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
            car1=createSprite(400,height)
            car1.addImage("car1",car1img)
            car2=createSprite(650,height)
            car2.addImage("car2",car2img)
            car3=createSprite(860,height)
            car3.addImage("car3",car3img)
            car4=createSprite(1100,height)
            car4.addImage("car4",car4img)
            cars= [car1,car2,car3,car4]
        }
    }

    play(){

      form.hideForm()
     //write or set it means set in the database
     //(get = reading from the datab)
      Player.getAllPlayersInfo();

           
      if(allPlayers!==undefined)
      {
        image(trackimg,0,-height*4,width,height*5)
         var y = height;
         var index = 0;

          for(var plr in allPlayers)
          {
             y = height - allPlayers[plr].distance  //600 -0 , 600 -100

             cars[index].y =y
             
             push()
             fill("white")
             textSize(20)
             text(allPlayers[plr]. name,cars[index].x-25 , cars[index].y+80)
             pop()

            if(index+1 === player.index)
            {
               camera.position.y = cars[index].y+1
               ellipse(cars[index].x,cars[index].y,100,100)
            }
           else
           cars[index].shapeColor = "black"

           index = index +1;
           
             
          }



      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+= 50
      console.log(player.distance)
      player.update()

      if(player.distance>=2900){
       gameState=2
       }
     }
     drawSprites()
    }

    end(){
     console.log("GAME END")
     fill("black")
     textSize(30)
     text("Game has ended wait for all players to finish ", width/2-100,camera.position.y)

    }
}