const axios = require('axios')

let cacheMemory = {};




function getMovieHandler(req, res){

    let cityName =req.query.city;
  
    let movieURL =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`
    

    if (cacheMemory[cityName] !== undefined){

        res.send(cacheMemory[cityName])
    }
else {
    try{

        axios.get(movieURL).then(movieResult =>{


            let  newMovieArray = movieResult.data.results.map(element => {

                return new Movie(element);
            })

            cacheMemory[cityName] = newMovieArray;
            res.send(newMovieArray)
            console.log('wewwew');

        });
    }
    catch(error){

        res.send(error)
        

    }
}



}


class Movie {

    constructor(element){


        this.title = element.title;
        this.overview = element.overview;
        this.average_votes = element.average_votes;
        this.total_votes = element.total_votes;
        this.image_url = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
        this.popularity = element.popularity;
        this.released_on = element.release_date;
    }
}




module.exports=getMovieHandler