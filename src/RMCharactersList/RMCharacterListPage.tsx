import { useState } from 'react';
import './styles.css'

interface RMCharacter {
    id: number | string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {name: string, url: string};
    location: {name: string, url: string};
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}



export const RMCharacterListPage = () => {

    const [characters, setCharacters] = useState<Array<RMCharacter>>([]);

    const fetchApiData = async () => {
        await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => data.results)
        .then((results) => setCharacters(results.map((item: RMCharacter) => item)))
     };

    fetchApiData();


    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Episodes</th>
                    <th>Image</th>
                </tr>
                    {characters.map(item =>
                    <tr>
                        <td><a href={item.url}>{item.name}</a></td>
                        <td>{item.type}</td>
                        <td>{item.gender}</td>
                        <td>{item.status}</td>
                        <td>{item.episode.length}</td>
                        <td><img src={item.image} alt="Not available :(" /></td>
                    </tr>)}
            </table>
        </div>
    )

}