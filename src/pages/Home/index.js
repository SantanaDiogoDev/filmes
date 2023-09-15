import { useEffect, useState } from "react";
import api from '../../services/api';

//movie/now_playing?api_key=0357fd07df267e396ccdb3a8686fe6f0&language=pt-br

function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect( () =>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "0357fd07df267e396ccdb3a8686fe6f0",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();
    });

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;