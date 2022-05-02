import React from "react";
import descricaoresende from '../../images/descricaoresende.webp';
import logoresende from '../../images/logoresende.webp';
import '../../design/css/Drresende.css';
import profileicon from '../../images/clients/Dr Resende.webp';
import MadeByUs from "../../components/MadeByUs";
import Home from "../../design/js/mapResende";



function Drresende () {

    return(
        <>

        <div className="container-fluid d-flex align-items-center vh-100 bgGradiente">
            <img className="BgLogo mx-auto d-block img-fluid" src={logoresende}></img>
        </div>

        <div className="container-fluid bg pagespace">
            <div className="container-fluid bio d-flex">
            <div className="row justify-content-around">
                <div className="col-6 my-auto">
                <img className="LogoBio mx-auto align-items-center" src={descricaoresende}></img>
                </div>
            </div>
            <div className="col-6">
                <img className="BioProfile rounded-circle mx-auto align-items-center d-block" src={profileicon}></img>

            </div>

            </div>
        
        <div className="container-fluid description d-flex">
                <div className="descriptionText">
                    <h3 className="BioText text-center">Proporcionando a harmonia entre seu sorriso e sua face.<br/><br/> Dr. Resende possui graduação em Odontologia pelo PROUNI na Uniderp. Além de, vários cursos na área e ser expert em clareamento dental. Atualmente se encontra especializando em Harmonização Orofacial no Instituto Odontológico das Américas. Com alta performance, realiza um tratamento acolhedor e humanizado.<br/><br/>•CRO/MS 7848</h3>
                </div>
        </div>
        <div className="container-fluid description">
            <br/>
            <div className="row justify-content-around">
                <div className="col-4 descriptionText my-auto">
                    <h3 className="ContatoText text-center">Alguma informação personalizada</h3>
                </div>

                <div className="col-4">
                <a href="" tittle="">
                    <button type="button" className="botao">Clique Aqui</button>
                </a>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center description">
                <div className="row justify-content-center">

                    <div className="col-4">
                        <a href="" tittle="Instagram DrResende">
                            <i className="bi bi-instagram socialIconD rounded-circle"></i>
                            <h4 className="profile">Instagram</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="" tittle="Whatsapp DrResende">
                            <i className="bi bi-whatsapp socialIconD rounded-circle"></i>
                            <h4 className="profile">Whatsapp</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="" tittle="E-mail DrResende">
                            <i className="bi bi-envelope socialIconD rounded-circle"></i>

                            <h4 className="profile">E-mail</h4>
                        </a>
                        <br />
                        <br />
                    </div>

        
                </div>
            </div>
        <div className="container adress text-center">
            <h4 className="BioText">VISITE MEU CONSULTÓRIO<br/>TRAVESSA ILHA BELA, 264 - CAMPO GRANDE, MS</h4>
            <Home/>
            <br/>
            <MadeByUs/>
        </div>
        
     
    </div>

    
    
        </>
    )

}

export default Drresende;