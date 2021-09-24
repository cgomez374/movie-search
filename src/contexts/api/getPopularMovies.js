export const getPopularMovies = (setMovies, setError) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2981946d7a75ea943692c98fb27ce426&language=en-US&page=1`)
    .then(async (res) => {
        if(res.ok){
            var data = await res.json();
            if(data){
                setMovies(data);
                setError(false);
            }
        }
        else{
            setError(true);
        }
    })
    .catch((err) => {
        setError(true);
    })
}