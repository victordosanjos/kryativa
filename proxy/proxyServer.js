var express = require('express');
var cors = require('cors');
const axios = require('axios');
const { response } = require('express');

var app = express();
app.use(cors()); 

app.listen(4000, function () {
    console.log("Server started on port 4000");
});

const API_KEY = "RGAPI-6698a718-9d4c-4ff6-8dee-46739c08d226";

app.get('/getPlayerOneMatches', async (req, res) => {
    const continent = req.query.playerOneContinent;
    const PUUID = req.query.playerOneEPUUID;
    const API_CALL = continent + "." + "api.riotgames.com/lol/match/v5/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY;

    //Call the API to see matches
    const gameIDS = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err => err);

    //List IDS
    console.log(gameIDS);

    //Loop and save IDS
    var matchDataArray = [];
    for (var i = 0; i < gameIDS.lenght; i++ ) {

        // Salva as informações recebidas do GameIDS
        const matchID = gameIDS[i];

        const matchData = await axios.get(continent + "." + "api.riotgames.com/lol/match/v5/matches/" + matchID + "?api_key=" + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData)
    }

    res.json(matchDataArray);


});
