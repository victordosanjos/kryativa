import React from "react";
import descricaoresende from '../../images/descricaoresende.webp';
import logoresende from '../../images/logoresende.webp';
import '../../design/css/Drresende.css';
import profileicon from '../../images/clients/Dr Resende.webp';
import MadeByUs from "../../components/MadeByUs";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


function Drresende() {

    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "KEY"
    })

    const LocalizacaoMap = {
        lat: -20.457725004970996,
        lng: -54.59073578659181,
    }

    return (
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
                    <div className="container">
                        <h3 className="BioText text-start">Proporcionando a harmonia entre seu sorriso e sua face.<br /><br /> Dr. Resende possui graduação em Odontologia pelo PROUNI na Uniderp. Além de, vários cursos na área e ser expert em clareamento dental. Atualmente se encontra especializando em Harmonização Orofacial no Instituto Odontológico das Américas. Com alta performance, realiza um tratamento acolhedor e humanizado.<br /><br />• CRO/MS 7848</h3>
                    </div>
                </div>
                <div className="container text-center aditionalButton">
                    <br />
                    <div className="row">
                        <div className="col descriptionText my-auto">
                            <h3 className="ContatoText text-end">Marque sua consulta comigo</h3>

                        </div>

                        <div className="col">
                            <a href="" tittle="">
                                <button type="btn btn-primary" className="botao">Clique Aqui</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container text-center description">
                    <div className="row justify-content-center">

                        <div className="col-4">
                            <a href="https://e.kryativa.dev/ISKEqY" tittle="Instagram DrResende">
                                <i className="bi bi-instagram socialIconD rounded-circle"></i>
                                <h4 className="profile">Instagram</h4>
                            </a>
                        </div>

                        <div className="col-4">
                            <a href="https://e.kryativa.dev/NEU7IG" tittle="Whatsapp DrResende">
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
                    <a href="https://goo.gl/maps/HCCqcDJQPYTxs9TVA">
                    <h4 className="BioText">Visite meu consultório
                        <br />
                        R. João Akamine, 103 - Santa Fe, Campo Grande - MS, 79021-240</h4>
                    </a>
                </div>

                <div className="container-fluid mapControl">
                    {

                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={LocalizacaoMap}
                                zoom={15}
                            >
                                <Marker position={LocalizacaoMap} />
                            </GoogleMap>
                        ) : <></>
                    }
                </div>

                <br />
                <div className="text-center">
                    <br/>
                    <MadeByUs />
                    <br/>
                </div>


            </div>



        </>
    )

}

export default Drresende;