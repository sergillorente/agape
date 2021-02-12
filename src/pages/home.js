import React from 'react';

import Slider from '../components/Slider';
import Caroussel from '../components/Caroussel';
import Grid from '../components/Grid';

const firstSliderContent = [
    <div>
        <h2>Personas · Compromiso · Misión</h2>
        <p>Acompáñanos en la mejor de las aventuras</p>
    </div>
]

const secondSliderContent = [
    <div>
        <p>Ciudades donde estamos enfocados</p>
        <h1>Barcelona</h1>
        <button>Conoce lo que hacemos aquí</button>
    </div>
]

const carousselData = [
    {
        image: 'https://images.unsplash.com/photo-1599780196508-80547099535c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1592629831013-5262474e2056?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1591980607210-8ea99bee96f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1467307983825-619715426c70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1270&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1500027202745-eec1ad6523cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
];

const HomePage = () => {
    return (
        <>
                <Slider/>
                
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Autor de la cita</p>
                </div>

                <div>
                    <p>Historias de Ágape</p>
                    <h3>Historias de personas que fueron transformadas</h3>
                    <Caroussel />
                    <p>Ver todas las historias</p>
                </div>  

                <Slider />

                <div>
                    <p>Enfoques Ágape</p>
                    <Grid />
                    <button>Cargar más enfoques</button>
                </div>
        </>
    );
    };

export default HomePage;