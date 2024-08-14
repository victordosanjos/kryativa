import React from "react";
import MadeByUs from "../../components/MadeByUs";
import '../../design/css/Drresende.css';
import profileicon from '../../images/drResende/Dr Resende.webp';
import descricaoresende from '../../images/drResende/descricaoresende.webp';
import logoresende from '../../images/drResende/logoresende.webp';


function Drresende() {

    return (
        <>

            <div className="container-fluid d-flex align-items-center vh-100 bgGradiente">
                <img className="mainLogo rounded mx-auto d-block" src={logoresende}></img>
            </div>

            <div className="container-fluid bg pagespace">
                <div className="container-fluid bio d-flex">
                    <div className="row justify-content-around">
                        <div className="col-7 my-auto">
                            <img className="LogoBio mx-auto align-items-center" src={descricaoresende}></img>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="BioProfile rounded-circle mx-auto align-items-center d-block" src={profileicon}></img>

                    </div>

                </div>

                <div className="container-fluid description d-flex">
                    <div className="container">
                        <h3 className="BioText text-start">Proporcionando a harmonia entre seu sorriso e sua face.<br /><br /> Dr. Resende cirurgião-dentista possuo formação e pós-graduação em Harmonização pelo Instituto Odontológico das Américas. <br></br>
                            Minha missão é realçar a sua beleza natural, proporcionando resultados que elevem sua autoestima e bem-estar.
                            <br></br>
                            <br></br>
                            Cada paciente é único e minha abordagem é sempre personalizada, visando a harmonia perfeita entre saúde e estética. Vamos juntos transformar o seu sorriso e sua confiança!<br /><br />• CRO/MS 7848</h3>
                    </div>
                </div>
                <div className="container text-center aditionalButton">
                    <br />
                    <div className="row">
                        <div className="col descriptionText my-auto">
                            <h3 className="ContatoText text-end">Marque sua consulta comigo</h3>

                        </div>

                        <div className="col">
                            <a href="https://wa.me/5567996911938" tittle="">
                                <button type="btn btn-primary" className="botao">Clique Aqui</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container text-center description">
                    <div className="row justify-content-center">

                        <div className="col-4">
                            <a href="https://www.instagram.com/dr.resendee/" tittle="Instagram DrResende">
                                <i className="bi bi-instagram socialIconD rounded-circle"></i>
                                <h4 className="profile">Instagram</h4>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="https://wa.me/5567996911938" tittle="Whatsapp DrResende">
                                <i className="bi bi-whatsapp socialIconD rounded-circle"></i>
                                <h4 className="profile">Whatsapp</h4>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="mailto:contato@drresende.com" tittle="E-mail DrResende">
                                <i className="bi bi-envelope socialIconD rounded-circle"></i>

                                <h4 className="profile">E-mail</h4>
                            </a>
                            <br />
                            <br />
                        </div>


                    </div>
                </div>
                <div className="container adress text-center">
                    <a href="https://maps.app.goo.gl/UQoyJ1L8D1bLxKbD9">
                        <h4 className="BioText">Visite meu consultório
                            <br />
                            R. Aníbal de Mendonça, 95 - Santa Fe, Campo Grande - MS, 79021-320</h4>
                    </a>
                </div>

                <br />
                <div className="text-center">
                    <br />
                    <MadeByUs />
                    <br />
                </div>


            </div>



        </>
    )

}

export default Drresende;