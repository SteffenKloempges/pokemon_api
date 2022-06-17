import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonItem = (props) => {

    // console.log(props);

    const secondFetchUrl = props.url;
    const [img, setImg] = useState("");

    useEffect(() => {
        fetch(secondFetchUrl)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                setImg(json.sprites.other.dream_world.front_default)
            })
    })

    return (<div className="grid-card">
        <h2>{props.name}</h2>
        <img src={img} alt={props.name} />
        <Link to={`/detail/${props.name}`}>Read More</Link>
    </div>);
}

export default PokemonItem;