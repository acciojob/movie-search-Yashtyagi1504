import React,{useRef,useState} from "react"
import { movieContext } from "./movieContext"

const MovieContext = ({children})=>{

    const inputRef = useRef();
    const [movies,setMovies] = useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?apikey=99eb9fd1&s=${inputRef.current.value}`)
        .then(res=>res.json())
        .then(data=>setMovies(data.Search))
        .catch(error=>console.log(error))

        
    }
    return(
        <div>
            <movieContext.Provider value={{movies:movies}}>
                
                <h1>Search Movies</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef}></input>
                    <button>Search</button>
                </form>
                {children}
            </movieContext.Provider>
        </div>
    )
}

export default MovieContext