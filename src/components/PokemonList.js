import { useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(json => setData(json.results))
    }, [])

    console.log(data);
    // console.log(data[0]);

    return (<div className="grid">
        {data.map((elt, i) =>
            <PokemonItem
                key={i}
                name={elt.name}
                url={elt.url}
            />
        )}
    </div>);
}

export default PokemonList;