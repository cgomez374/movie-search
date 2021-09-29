export const getMovies = async (query, setMovies, setMsg) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2981946d7a75ea943692c98fb27ce426&language=en-US&query=${query}`);
    var data = await response.json();
    if(data !== null){
        setMovies(data);
        setMsg(false);
    }
    else{
     setMsg('Error! Try Again!');
    }
}