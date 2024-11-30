import { useEffect } from "react";
import seta from "../../Assets/seta3.png";
import "./cardHome.css";

export default function CardHome(props) {

    useEffect(() => {
        function turnImage() {
            if (props.saida) {
                const imagem = document.querySelector('.imagem');
                // Adiciona um ID à imagem
                imagem.id = 'imagem-invertida';
            }
        }
        turnImage()
    },[])
    return (
        <div className="card">
            <div className="title">
                <span>{props.title}</span>
                <img src={seta} className="imagem"/>
            </div>
            <span className="value">R$ {props.value}</span>
        </div>
    )
}