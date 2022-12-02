import React from 'react';
import '../style/coddity/coddity.css';

function Coddity() {
    return <div className={"coddity_content brown"}>
        <h1 className={"centered"}>Coddity</h1>
        <div>
            <p id="circle1" class="circle">Nous avons voulu trouvé la police la moins lisible</p>

            <p id="circle2" class="circle">Avec des couleurs qui n'avait pas de lien</p>

            <p id="circle3" class="circle">Des animations aléatoire</p>

            <p id="circle4" class="circle">Rendant le texte encore plus difficile à lire</p>

            <p id="circle5" class="circle">Nous esperons que vous avez aimer (chercher dans le code source)</p>
        </div>
    </div>;

}

export default Coddity;