import React,{useState} from "react";
import Movie from "./Movie";

export default function SearchMovies(){
    const [query,setQuery] = useState("");
    // movies state to set the movies,its an array so its initial state is empty
    const [movies,setMovies] = useState([]);

    //1. USING ASYNC FUNCTION
    const searchMovies = async (e) => {
        e.preventDefault();        

        const url = `https://api.themoviedb.org/3/search/movie?api_key=911794a5621d7f40a780f23086ab25dd&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            // Fetch is going to return promise and to handle that promise we can use 
                // then etc but we will use async await to actually await the code to ocme back
            const res = await fetch(url);
            // Now we need to convert the response/res above to actual data or json,it also
                // returns a promise as well so we awai that too,we can test data by loggign it
            const data = await res.json();
            // The results response is the array containing the movies so we set that to the state
            setMovies(data.results);
        }catch(err){
            console.error(err);
        } //try catch scope end
    }

    function handleQuery(e) {
        let query = e.target.value;
        setQuery(query);
    }
    return(
        <section>
            <form onSubmit={searchMovies}>
                <label htmlFor="query" className="Label">Movie Name</label>
                <input type="text" name="query" placeholder="eg Prison Break" onChange={handleQuery} value={query} />

                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {/* Map to filter any movie which doesnt have a poster or image and render the results */}
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <Movie movie={movie} />
                    
                ))
                }
            </div>
        </section>
    )

}