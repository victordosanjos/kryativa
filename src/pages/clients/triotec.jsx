import React from "react";
import '../../design/css/triotec.css';
import Aurea from '../../images/clients/Aurea.webp';
import Ezequiel from '../../images/clients/Ezequiel.webp';
import Paula from '../../images/clients/Paula.webp';
import logoTriotec from '../../images/logoTriotec.png';
import MadeByUs from "../../components/MadeByUs";

function Triotec() {

    return (
        <>
            <div className="container-fluid d-flex align-items-center vh-100 bgMobileFix BgMarmore">
                <img className="BgLogo mx-auto d-block img-fluid" src={logoTriotec}></img>
            </div>
            <div className="container-fluid text-center pfBg">
                <br />
                <a href="https://e.kryativa.dev/0t2q0g" tittle="Whatsapp Triotec" >
                    <button type="button" className="contato">Clique para entrar em contato</button>
                </a>
                <br />
                <br />
                <div className="container-fluid servicesControl d-block">
                    <div className="row">
                        <div className="col my-auto">
                            <h2 className="servicesTittle ">Serviços</h2>
                        </div>

                        <div className="col">
                            <h2 className="servicesDesc"> Projeto Arquitetônico Residencial</h2>
                            <h2 className="servicesDesc"> Projeto Arquitetônico Comercial</h2>
                            <h2 className="servicesDesc"> Projeto de Reformas</h2>
                            <h2 className="servicesDesc"> Projeto de Interiores</h2>
                            <h2 className="servicesDesc"> Projeto de Fachada</h2>
                            <h2 className="servicesDesc"> Execução de Obra</h2>
                            <h2 className="servicesDesc"> Regularização de Imóvel</h2>
                            <h2 className="servicesDesc"> Tramites de Prefeitura</h2>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/Ym0LC9" tittle="Perfil de Aurea Helena" >
                            <img className="pfIcon rounded-circle" src={Aurea}></img>
                            <br />
                            <h2 className="pfDescription">Aurea Helena</h2>
                            <h5 className="profile">Engenheira</h5>
                        </a>
                        <a href="https://wa.me/5567992333778" tittle="Perfil de Aurea Helena">

                            <h5 className="profile-2 mx-auto">WhatsApp</h5>
                        </a>

                    </div>
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/tZaO9C" tittle="Perfil de Paula Tavares" >
                            <img className="pfIcon rounded-circle" src={Paula}></img>
                            <br />
                            <h2 className="pfDescription">Paula Tavares</h2>
                            <h5 className="profile">Arquiteta</h5>
                        </a>
                        <a href="https://e.kryativa.dev/tZaO9C" tittle="Perfil de Paula Tavares" >
                        </a>
                        <a href="https://wa.me/5567992889676" tittle="Perfil de Aurea Helena" >
                            <h5 className="profile-2 mx-auto">WhatsApp</h5>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/XwoWwO" tittle="Perfil de João Ezequiel" >
                            <img className="pfIcon rounded-circle" src={Ezequiel}></img>
                            <br />
                            <h2 className="pfDescription">João Ezequiel</h2>
                            <h5 className="profile">Engenheiro</h5>
                        </a>
                        <a href="https://wa.me/5567996590845" tittle="Perfil de Aurea Helena" >
                            <h5 className="profile-2 mx-auto">WhatsApp</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center pfBg">
                <div className="row justify-content-center">

                    <div className="col-4">
                        <a href="https://e.kryativa.dev/wuUFTD" tittle="Instagram da Triotec">
                            <i className="bi bi-instagram socialIcon rounded-circle"></i>
                            <h4 className="profile">Instagram</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="https://e.kryativa.dev/0t2q0g" tittle="Whatsapp Triotec">
                            <i className="bi bi-whatsapp socialIcon rounded-circle"></i>
                            <h4 className="profile">Whatsapp</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="mailto:contato@grupotriotec.com" tittle="E-mail Triotec">
                            <i className="bi bi-envelope socialIcon rounded-circle"></i>

                            <h4 className="profile">E-mail</h4>
                        </a>
                        <br />
                        <br />
                    </div>
                    <br/>
                    <MadeByUs/>
                </div>
            </div>



        </>
    )


}

export default Triotec;