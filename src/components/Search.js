import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState("");
    // console.log(input)

    return (<div className="search">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
        <input type="text" id="input-text" onChange={(e) => setInput(e.target.value)} />
        <Link className="btn" to={`/detail/${input}`}>Search</Link>
    </div>);
}

export default Search;