import React from 'react';
import {Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div>
                <Link to={null}>
                    <img src='/images/logo.png' alt="Logo" /> 
                </Link>
            </div>
            <div>
                <h5>CONÓCENOS</h5>
                <ul>
                    <li>VISIÓN & MISIÓN</li>
                    <li>STAFF</li>
                    <li>ENFOQUES</li>
                    <li>HISTORIAS DE ÁGAPE</li>
                    <li>HISTOIA</li>
                    <li>ÁGAPE INTERNACIONAL</li>
                </ul>
            </div>
            <div>
                <h5>PARTICIPA</h5>
                <ul>
                    <li>PRÓXIMOS EVENTOS</li>
                    <li>VOLUNTARIOS</li>
                    <li>BECARIOS</li>
                    <li>DONAR</li>
                </ul>
            </div>
            <div>
                <h5>RECURSOS</h5>
                <ul>
                    <li>TIENDA</li>
                    <li>THE FOUR</li>
                    <li>PELICULA JESUS</li>
                </ul>   
            </div>
            <div>
                <h5>CONTACTO</h5>
                <ul>
                    <li>SANT FRUCTUÓS, 2 BAJOS<br />(08004) BARCELONA</li>
                    <li>93 424 30 31</li>
                    <li>INFO@AGAPE.ORG</li>
                </ul>
            </div>
            <div>
                <p>©2019 · Aviso legal | Política de Privacidad</p>
            </div>
        </div>
    )
};

export default Footer;