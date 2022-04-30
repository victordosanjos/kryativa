import { Outlet } from "react-router-dom";
import '../design/css/pagamentos.css'
import metodosDePagamento from '../images/metodosDePagamento.png'

function Pagamentos() {
    return (
        <div className=" container-fluid backgroundFix vh-100 ">
            <div className="row ">
                <div className="col ">
                    <h2 className="mainTittleSup">VAMOS</h2>
                    <h2 className="mainTittleDown">FINALIZAR?</h2>
                    <h4 className="SubTitle">Clica no botão para ser redirecionado ao pagamento</h4>
                    <img className="img-fluid" src={metodosDePagamento}></img>

                </div>

                <div className="col outletControl">
                <Outlet />
                </div>

            </div>
        </div>

    );
}


export default Pagamentos;