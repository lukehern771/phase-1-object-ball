function gameObject() {
   let game = { home: {
        teamname: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson":{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans":{
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez":{
                number: 11,
                shoe: 17,
                points: 17, 
                rebounds: 19, 
                assists: 10, 
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee":{
                number: 1,
                shoe: 19,
                points: 26, 
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8, 
                slamDunks: 5,
            },
            "Jason Terry":{
                number: 31, 
                shoe: 15, 
                points: 19, 
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            }
            }
        },


        
    

    away: {
        teamname: "Charolette Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien":{
                number: 4,
                shoe: 18,
                points: 10, 
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo":{
                number: 0,
                shoe: 16,
                points: 12, 
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15, 
                slamDunks: 10,
            },
            "DeSanga Diop":{
                number: 2,
                shoe: 14,
                points: 24, 
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon":{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6, 
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            }
            }
        }

    }
    return game
}

console.log(gameObject());

function allPlayers(){
    let homePlayers = gameObject().home.players
    let awayPlayers = gameObject().away.players
    return {...homePlayers, ...awayPlayers}

}
console.log(allPlayers());

function numPointsScored(){
    let teamObj = gameObject().home.players
    return teamObj ['Alan Anderson']['points']
    
}
console.log(numPointsScored());

function shoeSize(){
    let teamObj = gameObject().home.players
    return teamObj ['Alan Anderson']['shoe']
}

console.log(shoeSize());

function teamColors(){
    let teamObj = gameObject();
    return teamObj ['home']['colors']
}

console.log(teamColors());

function teamNames(){
    let teamNames = gameObject().home.teamname
    let teamNames2 = gameObject().away.teamname
    return [teamNames, teamNames2]
}
console.log(teamNames());

function playerNumbers(teamWeAreLookingFor){
    let game = gameObject();
    let array = []
    for(let gameKey in game){
        if(game[gameKey].teamname === teamWeAreLookingFor){
            for (let key in game[gameKey].players){
                array.push(game[gameKey].players[key]['number'])
                console.log(array)
            }
        }

    }
    
        
 }
    
console.log(playerNumbers("Charolette Hornets"));

function playerStats(){
    let pStats = gameObject().home.players
    return pStats["Alan Anderson"]
}

console.log(playerStats());

function bigShoeRebounds(){
    let bigShoe = gameObject().home.players
    return bigShoe['Mason Plumlee']['rebounds']
}

console.log(bigShoeRebounds());