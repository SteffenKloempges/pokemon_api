import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PokemonDetail = () => {

    const { name } = useParams();
    const [single, setSingle] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(response => response.json())
            .then(json => {
                setSingle([json])
                console.log(json)
            });
    }, [])

    console.log(single)

    return (<div className="detail-card">
        {single.map((elt, i) =>
            <div key={i}>
                <h1>{elt.name}</h1>
                <img src={elt.sprites.other.dream_world.front_default} alt="" />
                <p>Height: {elt.height}</p>
                {elt.types.map((elt2, i) =>
                    <p key={i}>Type {i}: {elt2.type.name}</p>
                )}
            </div>
        )}
        <Link to='/'>Back</Link>
    </div>);
}

export default PokemonDetail;