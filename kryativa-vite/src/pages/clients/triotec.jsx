import React from "react";
import logoTriotec from '../../images/logoTriotec.png';
import '../../design/css/triotec.css';
import Aurea from '../../images/clients/Aurea.webp';
import Paula from '../../images/clients/Paula.webp';
import Ezequiel from '../../images/clients/Ezequiel.webp';
import Helmet from "react-helmet";


function Triotec() {

    return (
        <>
        <Helmet>
    
{/* <!-- HTML Meta Tags --> */}
<title>Grupo Triotec</title>
<meta name="description" content="Captamos objetivos e necessidades para construção de sonhos."/>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://www.kryativa.dev/clientes/triotec/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Grupo Triotec"/>
<meta property="og:description" content="Captamos objetivos e necessidades para construção de sonhos."/>
<meta property="og:image" content="https://kryativa.dev/images/profileTriotec.webp"/>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="kryativa.dev"/>
<meta property="twitter:url" content="https://www.kryativa.dev/clientes/triotec/"/>
<meta name="twitter:title" content="Grupo Triotec"/>
<meta name="twitter:description" content="Captamos objetivos e necessidades para construção de sonhos."/>
<meta name="twitter:image" content="https://kryativa.dev/images/profileTriotec.webp"/>

        </Helmet>


            <div className="container-fluid d-flex align-items-center vh-100 bgMobileFix BgMarmore">
                <img className="BgLogo mx-auto d-block img-fluid" src={logoTriotec}></img>
            </div>
            <div className="container-fluid text-center pfBg">
                <br />
                <a href="https://e.kryativa.dev/0t2q0g" tittle="Whatsapp Triotec" target="_blank">
                <button type="button" className="contato">Clique para entrar em contato</button>
                </a>
                <br />
                <br />

                <div className="row justify-content-center">
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/Ym0LC9" tittle="Perfil de Aurea Helena" target="_blank">
                            <img className="pfIcon rounded-circle" src={Aurea}></img>
                            <br />
                            <h2 className="pfDescription">Aurea Helena</h2>
                            <h5 className="profile">Engenheira</h5>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/tZaO9C" tittle="Perfil de Paula Tavares" target="_blank">
                            <img className="pfIcon rounded-circle" src={Paula}></img>
                            <br />
                            <h2 className="pfDescription">Paula Tavares</h2>
                            <h5 className="profile">Arquiteta</h5>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://e.kryativa.dev/XwoWwO" tittle="Perfil de João Ezequiel" target="_blank">
                            <img className="pfIcon rounded-circle" src={Ezequiel}></img>
                            <br />
                            <h2 className="pfDescription">João Ezequiel</h2>
                            <h5 className="profile">Engenheiro</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center pfBg">
                <div className="row justify-content-center">

                    <div className="col-4">
                        <a href="https://e.kryativa.dev/wuUFTD" tittle="Instagram da Triotec" target="_blank">
                            <i className="bi bi-instagram socialIcon rounded-circle"></i>
                            <h4 className="profile">Instagram</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="https://e.kryativa.dev/0t2q0g" tittle="Whatsapp Triotec" target="_blank">
                            <i className="bi bi-whatsapp socialIcon rounded-circle"></i>
                            <h4 className="profile">Whatsapp</h4>
                        </a>
                    </div>

                    <div className="col-4">
                        <a href="mailto:contato@grupotriotec.com" tittle="E-mail Triotec" target="_blank">
                            <i className="bi bi-envelope socialIcon rounded-circle"></i>

                            <h4 className="profile">E-mail</h4>
                        </a>
                        <br />
                        <br />
                    </div>
                        <a href="https://e.kryativa.dev/instagram" tittle="instagram kryativa" target="_blank">
                        <h2 className="footer">Desenvolvido pela Kryativa</h2>
                        </a>
                </div>
            </div>



        </>
    )


}

export default Triotec;