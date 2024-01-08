const requests = {
    Recommended: `/movie/now_playing?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1`,
    New: `/movie/top_rated?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1`,
    Hit: `/movie/popular?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1`,
    Originals: `/movie/top_rated?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1`,
    Trending: `/trending/all/day?api_key=${process.env.REACT_APP_API_kEY}`,
    Reimagined: `/movie/upcoming?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1`,
    Horror: `/discover/movie?api_key=${process.env.REACT_APP_API_kEY}&with_genres=27`,
    Action: `/discover/movie?api_key=${process.env.REACT_APP_API_kEY}&with_genres=28`,
    DisneyJ: `/discover/movie?api_key=${process.env.REACT_APP_API_kEY}&with_genres=10402`,
    Science: `/discover/movie?api_key=${process.env.REACT_APP_API_kEY}&with_genres=878`,
    Animations:`/discover/movie?api_key=${process.env.REACT_APP_API_kEY}&with_genres=16`,
  };
  
  export default requests;