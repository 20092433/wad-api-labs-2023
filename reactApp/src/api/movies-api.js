export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=01b4896cfa792f2da52e1c36a18d555f&language=en-US&include_adult=false&include_video=false&page=1`
    )
    return response.json()
  };