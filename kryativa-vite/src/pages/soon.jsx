import React from 'react';
import '../design/css/fonts.css';
import '../design/css/media.css';
import { Div, H1, H5 } from "../design/js/Soon.jsx";
import LogoBranca from '../images/logo-branca.webp';


function Soon() {

    return (

        <Div>
            <br />
            <br />
            <img className="img-fluid ImgMobileFix" src={LogoBranca} alt="Identidade visual da Kryativa em coloração branca e verde água" width="8%" />
            <h1 className="TitleMobileTextFix">EM CONSTRUÇÃO</h1>
            <H5 className="SubtitleMobileTextFix">ENTRE EM CONTATO ATRAVÉS DAS REDES SOCIAIS</H5>
        </Div>


    )

}

export default Soon;



