import React, { useState } from "react";
import axios from "axios";

function MatchedBefore() {

    const [playerOneName, setPlayerOneName] = useState("");
    const [playerOneData, setPlayerOneData] = useState({});
    const [playerOnePUUID, setPlayerOnePUUID] = useState("");
    const [championsRotationIDs, setChampionsRotationIDs] = useState();
    const [playerOneMatches, setPlayerOneMatches] = useState([]);
    
    // Botão de pesquisa
    async function searchPlayer(event) {

        if (document.getElementById("locationSelector").value === "default") {
            return document.getElementById("selectServerError").innerHTML = "Você precisa selecionar um servidor"

        } if (!playerOneName) {
            return document.getElementById("selectPlayerError").innerHTML = "Seu nome não pode estar em branco"

        } else {
            document.getElementById("selectPlayerError").innerHTML = ""
            document.getElementById("selectServerError").innerHTML = ""
        }
    
        
        await axios.get("http://localhost:4000/playerOneInformation", 

        { params: { 
            playerOneLocation: document.getElementById("locationSelector").value, 
            playerOneEName: playerOneName }
        })

            .then(function (response) {
                setPlayerOneData(response.data)
                setPlayerOnePUUID(response.data.puuid)
            }).catch (function (error) {
                    console.log(error);
            })

        }

 // Get API Call = Champios Rotations IDs   
 async function findChampiosRotationIDS(event) {
    await axios.get("http://localhost:4000/championRotation",

    { params: {
        playerOneLocation: (document.getElementById("locationSelector").value)}
    })

    .then(function (response) {
        setChampionsRotationIDs(response.data);
    }).catch (function (error) {
        console.log(error);
})

}
    async function findPlayerOneMatches(event) {
        axios.get("http://localhost:4000/getPlayerOneMatches", 

        { params: { 
            playerOneContinent: document.getElementById("locationContinent").value, 
            playerOneEPUUID: playerOnePUUID }
        })

            .then(function (response) {
                setPlayerOneMatches(response.data)
            }).catch (function (error) {
                    console.log(error);
            })

        }


//   Begin HTML PAGE

    return (

        <div className="container-fluid">
            <br />

            <div className="container">
                <div className="row">
                    <div className="col">
                    <select id="locationContinent" className="form-select" aria-label="Default select example">
                                <option value="default">Select your server continent</option>
                                <option value="https://americas">Americas</option>
                                <option value="https://asia">Asia</option>
                                <option value="https://europe">Europa</option>

                            </select>
                        <h3 id="selectContinentError"></h3>
                     <br />
                    </div>
                    <div className="col">
                    <select id="locationSelector" className="form-select" aria-label="Default select example">
                            <option value="default">Select your server location</option>
                            <option value="https://br1">BR</option>
                            <option value="https://eun1">EUN</option>
                            <option value="https://uew1">EUW</option>
                            <option value="https://jp1">JP</option>
                            <option value="https://kr">KR</option>
                            <option value="https://la1">LA 1</option>
                            <option value="https://la2">LA 2</option>
                            <option value="https://na1">NA</option>
                            <option value="https://oc1">OC</option>
                            <option value="https://tr1">TR</option>
                            <option value="https://ru">RU</option>
                        </select>
                        <h3 id="selectServerError"></h3>
                    </div>

                </div>
            </div>

            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Your player id" aria-label="Search" aria-describedby="search-addon" onChange={e => setPlayerOneName(e.target.value)} />

                <button type="button" onClick={searchPlayer} className="btn btn-outline-primary">FOR TESTING ONLY</button>
                <button type="button" onClick={findPlayerOneMatches} className="btn btn-outline-primary">Search</button>
            </div>
            <br/>

            <button type="button" onClick={findChampiosRotationIDS} className="btn btn-outline-primary">See champion rotation</button>



            <h3 id="selectPlayerError"></h3>

            {JSON.stringify(playerOneData) != '{}' ?
                <>
                <br/>
                    <div className="container">
                        <img className="rounded-circle img-fluid " width="100" height="100" src={"https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/" + playerOneData.profileIconId + ".png"}></img>
                        <h4 id="playerOneName"> Summunors name: {playerOneData.name}</h4>
                        <h4 id="playerOneLevel">Summoner Level: {playerOneData.summonerLevel} </h4>
                    </div>
                </>
                :
                <>
                    <p>No player data</p>
                </>
            }




        </div>

    );
    
}


export default MatchedBefore;