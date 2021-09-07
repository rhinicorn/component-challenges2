import React, {useState} from "react";
//import DogDisplay from "./DogDisplay";
import { Media } from "reactstrap";


const DogIndex = () => {
    const [result, setResult] = useState('');

     const fetcher = () => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => {
            if(res.status !== 200) {
                throw new Error('fetch error');
            }else return res.json();
        })
        .then(json => {
            if(json.message.length === 0){
                throw new Error('no results');
            }else{
                setResult(json.message);
                console.log(json.message)
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <div>
                <button onClick={fetcher}>Get an awesome dog image</button>
            </div>
            <br></br>
{             <Media>
                <Media left href={result}>
                    <Media object src={result} alt="random dog breed image" width="75%" />
                </Media>
            </Media>}
       </div>
    )
}

export default DogIndex;