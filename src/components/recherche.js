import React, { useState } from 'react'
import './recherche.css'

import { Container, Label, Input, Button} from 'semantic-ui-react';

const Recherche = () => {

    const [name, setName] = useState("");

    const [coin, setCoin] = useState({});


    const onClick = () => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`)
            .then((reponse) => reponse.json())
            .then((data) => setCoin(data))
            .catch((erreur) => console.log(erreur));
        console.log(name);
    }


    console.log(coin);


    return (
        <Container className='Recherche' >

            <Label pointing='right'>The Coin</Label>
            <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <Label pointing='right'>Currency </Label>
            <Input type='text' value="United States Dollars" />
            <br />
            <br />
            <Button onClick={onClick}>Recherche</Button>
            <div class="ui black message"> {coin[name] && coin[name].usd}</div>

            <footer>© sauveur-miguel-ernest </footer>

        </Container>
    )
}

export default Recherche
