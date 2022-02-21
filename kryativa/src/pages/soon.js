import { Div } from "../design/js/Soon.js";
import { H1 } from "../design/js/Soon.js";
import { H5 } from "../design/js/Soon.js";
import '../design/css/fonts.css';
import '../design/css/media.css'


function Soon(){

    return (

    <Div>
        <br/>
        <br/>

    <img className="img-fluid ImgMobileFix" src={require('../images/logo-branca.webp')} alt="Identidade visual da Kryativa em coloração branca e verde água" width="8%" /> 
    <H1
    className="TitleMobileTextFix">EM CONSTRUÇÃO</H1>
    <H5 className="SubtitleMobileTextFix">ENTRE EM CONTATO ATRAVÉS DAS REDES SOCIAIS</H5>
    </Div>


    )

}

export default Soon;



