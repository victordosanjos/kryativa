import React from "react";
import logoTriotec from '../../images/logoTriotec.png';
import '../../design/css/triotec.css';
import profileicon from '../../images/profileicon.png';


function Triotec() {

    return (
        <>
            <div className="container-fluid d-flex align-items-center vh-100 bgMobileFix BgMarmore">
                <img className="BgLogo mx-auto d-block img-fluid" src={logoTriotec}></img>
            </div>
            <div className="container-fluid text-center pfBg">
                <br />
                <button type="button" className="contato">Clique para entrar em contato</button>
                <br />
                <br />

                <div className="row justify-content-center">
                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="Perfil de Aurea Helena" target="_blank">
                            <img className="pfIcon rounded-circle" src={profileicon}></img>
                            <br />
                            <h2 className="pfDescription">Aurea Helena</h2>
                            <h5 className="profile">Perfil 1</h5>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="Perfil de Paula Tavares" target="_blank">
                            <img className="pfIcon rounded-circle" src={profileicon}></img>
                            <br />
                            <h2 className="pfDescription">Paula Tavares</h2>
                            <h5 className="profile">Perfil 2</h5>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="Perfil de João Ezequiel" target="_blank">
                            <img className="pfIcon rounded-circle" src={profileicon}></img>
                            <br />
                            <h2 className="pfDescription">João Ezequiel</h2>
                            <h5 className="profile">Perfil 3</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center pfBg">
                <div className="row justify-content-center">

                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="Instagram da Triotec" target="_blank">
                            <i className="bi bi-instagram socialIcon rounded-circle"></i>
                            <h4 className="profile">Instagram</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="Whatsapp Triotec" target="_blank">
                            <i className="bi bi-whatsapp socialIcon rounded-circle"></i>
                            <h4 className="profile">Whatsapp</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="https://www.google.com.br/" tittle="E-mail Triotec" target="_blank">
                            <i className="bi bi-envelope socialIcon rounded-circle"></i>

                            <h4 className="profile">E-mail</h4>
                        </a>
                        <br />
                        <br />
                    </div>

                </div>
            </div>



        </>
    )


}

export default Triotec;