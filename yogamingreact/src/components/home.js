import React, {useState, useEffect} from 'react'
import api from './api'

function HomePage() {
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        const fetchGeneres = async () => {
            try{
                const response = await api.post('geners',{
                    fields: ['name'].join(','),
                })
                setGenre(response.data)
            }catch(error){
                console.error('Error fetching genre', error)
            }
        }
        fetchGeneres();
    },[])
    return(
        <div>
            <h1>Game Genres</h1>
            <ul>
                {genre.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage