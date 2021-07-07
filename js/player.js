class Player
{
    constructor(){
        this.name=""
        this.distance=0
        this.index=null
    }

    getCount(){
      var dbref= database.ref("playerCount")
      dbref.on("value", function(data){
        playerCount = data.val()
      })
    }

    update(){
        var playerIndex = "Players/player" + this.index
     database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
     })
    }

    updateCount(count){
     database.ref("/").update({playerCount:count})
    }

    static getAllPlayersInfo()
    {
        var dbref= database.ref("Players") //player1 - name, distance, player2 - name, distance
      dbref.on("value", (data)=>{
          allPlayers = data.val()
      })
    }
}