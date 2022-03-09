import React from "react";
import catSoon from '../images/catSoon.webp';
import '../design/css/notFound.css';



function NotFound(){

    return(
        <>
        <meta charSet="UTF-8"/>
        <div className="container-fluid text-center vh-100 bgNotFound">
            <img className="notBgFoundImage mx-auto d-block img-fluid " src={catSoon}></img>
            <h2 className="imageText">호기심이 많은</h2>
            <h4 className="meanText"> Não sabe o que significa? Nem a gente.</h4>
            
            <div className="container-fluid text-center">
                <br/>
                <br/>
                <h3 className="lostText text-center">Você está perdido.</h3>
                <h3 className="lostText1 text-center">Página não encontrada</h3>
            
        </div>
        </div>
        
    
      </>
    )
}

export default NotFound;