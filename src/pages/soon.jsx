import React from 'react';
import { Div, H5 } from "../design/js/Soon.jsx";
import '../design/css/fonts.css';
import '../design/css/media.css';
import LogoBranca from '../images/logo-branca.webp';


function Soon() {

    return (
        <>
            <Div>
                <br />
                <br />
                <img className="img-fluid ImgMobileFix" src={LogoBranca} alt="Identidade visual da Kryativa em coloração branca e verde água" width="8%" />
                <h1 className="TitleMobileTextFix">EM CONSTRUÇÃO</h1>
                <H5 className="SubtitleMobileTextFix">ENTRE EM CONTATO ATRAVÉS DAS REDES SOCIAIS</H5>
                <br />
                <br />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col-2 text-dark bgControl rounded-pill">
                            <div className="row">
                                <div className="col p-3 ">
                                    <a href="https://e.kryativa.dev/instagram" title="Instagram da Kryativa">
                                        <i className="bi bi-instagram rounded-circle IconsControl"></i>
                                    </a>
                                </div>
                                <div className="col p-3">
                                    <a href="https://e.kryativa.dev/whatsapp" title="WhatsApp da Kryativa">
                                        <i className="bi rounded-circle IconsControl bi-whatsapp"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>

            </Div>



        </>

    )

}

export default Soon;



