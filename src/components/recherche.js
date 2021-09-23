import React, { useState } from 'react'
import './recherche-accueil.css'

import { Container, Label, Input, Button } from 'semantic-ui-react';

const Recherche = () => {

    const [name, setName] = useState("");
    const [currensy, setCurrensy] = useState("")
    const [coin, setCoin] = useState({});


    {/* recuperation des donnees dans l'API */ }
    const onClick = () => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=${currensy}`)
            .then((reponse) => reponse.json())
            .then((data) => setCoin(data))
            .catch((erreur) => console.log(erreur));
        console.log(name);
    }


    return (
        <Container className='r-a' >
            <Label pointing='right'>The Coin</Label>
            <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />


            {/* menu deroulant pour choisir la monnaie */}
            <Label pointing='right'>Currency </Label>
            <select class="ui dropdown" onClick={(e) => setCurrensy(e.target.value)}>
                <option value="">&#128183; &#128181; &#128184;</option>
                <option value="usd">United States Dollars</option>
                <option value="cad">Canadian Dollars</option>
                <option value="eur">Euro</option>
                <option value="gbp">British Pound Sterling</option>
                <option value="mxn">Mexican Peso </option>
                <option value="jpy">Japanese Yen</option>
                <option value="sats">Satoshi</option>
                <option value="eth">ETHER</option>
                <option value="xau">Gold - Troy Ounce</option>
            </select>
            <br />
            <br />

            <Button onClick={onClick}>SEARCH</Button>
            <div class="ui black message"> {coin[name] && coin[name][currensy]}</div> {/* affichage du resultat du coin */}
            <footer>© sauveur-miguel-ernest </footer>
        </Container>
    )
}

export default Recherche;
