import React from 'react';
import "../style/sexinfo/main.css"
import Game from "../components/sexinfo/Game";
import {Provider} from 'react-redux'
import configureStore from '../stores/store'


const store = configureStore()

function Home() {
    return <div className={"sexinfo_content"}>
        <h1 className={"sexinfo_h1"}>PREVENTION ET INFORMATION - SERIOUS GAME</h1>
        <p>
            Ceci est un Serious Game crée par l'équipe Man I Love Frogs dans le cadre du sujet principal de la Nuit de l'Info 2022.
        </p>
        <p>
            Il a pour but d'éduquer les plus jeunes générations afin de les aider à prendre en main leur sexualité.
            Le jeu est inspiré du célèbre "Flappy Bird", un jeu très compliqué pour montré à quel point éviter des MST sans être protégé est compliqué :)
        </p>

        <div className={"sexinfo_game"}>

            <div className={"window"}>
                <Provider store={store}>
                    <Game />
                </Provider>
            </div>
        </div>

    </div>;
}

export default Home;