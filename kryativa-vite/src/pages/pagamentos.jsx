import { Outlet } from "react-router-dom";
import { Div, H2 } from "../design/js/pagamentos";
import '../design/css/pagamentos.css'
import metodosDePagamento from '../images/metodosDePagamento.png'

function Pagamentos() {
    return (
        <div className="backgroundFix vh-100 container-fluid">
            <div className="row mx-auto ">
                <div className="col-4 LineSpace">
                    <h2 className="mainTittleSup">VAMOS</h2>
                    <h2 className="mainTittleDown">FINALIZAR?</h2>
                    <h4 className="SubTitle">Clica no botão para ser redirecionado ao pagamento</h4>

                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>

                        <div className="col ">
                        <img className="img-fluid" src={metodosDePagamento}></img>
                        </div>
                    </div>

                </div>
                <div className="col">
                </div>
                <div className="col-4" >
                <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Pagamentos;