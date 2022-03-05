import '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../design/css/Dominio.css';
import Tempo from '../icons/verificacao-de-tempo.png';
import Dolar from '../icons/dolar.png'
import DomainImage from '../images/domainImage.jpg'

export default function PaginadeTeste(props) {
    return (
        <div className=" backgroundPrice text-center ">            
            <img className='img-fluid rounded-circle boxImage ' src={DomainImage} alt="imagem para o produto domínio" />
            <br />
            <br />
            <h1 className=" BoxText">DOMÍNIO</h1>
            <h4 className=" boxDescription">Renovação anual</h4>
            <h4 className=" boxDescription pb-2">Sem preocupação, cuidaremos de tudo</h4>
            <br />

            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <img className="img-fluid boxIcons" src={Tempo} alt="ícone de tempo na cor branca" />
                        <h4 className='IconValue'>&nbsp; ANUAL</h4>
                        
                    </div>
                    <div className="col-5">
                        <img className="img-fluid boxIcons" src={Dolar} alt="ícone de dolar na cor branca" />
                        <h4 className='IconValue'>&nbsp;90,00</h4>
                    </div>
                </div>
            </div>
            <br />
            <button type="button" className="btn boxButton" onClick={StripeRedirect} id="checkout">COMPRAR</button>
            <h5 className=" SecureText">Você está em ambiente seguro</h5>
        </div>
    )
};

const stripe = await loadStripe('KEY')

function StripeRedirect() {
    stripe.redirectToCheckout({
        lineItems: [
            {
                price: "PRICE",
                quantity: 1
            },
        ],

        mode: "subscription",
        successUrl: "https://kryativa.dev/sucesso",
        cancelUrl: "https://kryativa.dev/falhou",
    })
        .then(function (result) {
        });
}

