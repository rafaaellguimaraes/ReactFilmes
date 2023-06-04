import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import './styles.css';

//https://api.themoviedb.org/3/movie/now_playing?api_key=d77de1725c22192495ea2d3d76329cb1

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "d77de1725c22192495ea2d3d76329cb1",
                    language: "pt_BR",
                    page: 1
                }
            })
            setFilmes(response.data.results)
        }

        loadFilmes();
    }, [])
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;