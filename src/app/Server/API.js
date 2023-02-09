const key = '636130a2277457579b747421b5e9c423';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en&page1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en&page1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en&page2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en&query=horror&page1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en&page1`
};

export default requests;