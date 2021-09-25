'use strict'

const express = require('express')
require('dotenv').config();
const cors = require('cors')
const axios = require('axios')
const server = express();
const getWeather = require('./src/weather.js')
const dataWeather = require('./data/weather.json') 
const getMovieHandler = require('./src/movies.js')

const PORT = process.env.PORT;


server.use(cors());





server.get('/weather', getWeather)
server.get('/movies', getMovieHandler)












server.listen(PORT, () => {

    console.log(`Listening on PORT ${PORT}`);
})






















///old way 
// ///server.get('*',(req,res)=>{

//     res.status(404).send()})    


///new way

////localhost:3001/getPhoto?searchQuery=flower
// async function getPhotoHandler(req, res) {

//     // res.send('inside getPhoto')
//     let searchQuery2 = req.query.searchQuery; //flower
//     //key-url
//     // https://api.unsplash.com/search/photos?query=flower&client_id=V9tMkmpbpMeWkxyWBvGaaATT9VUPl9zsCDqlNVusEYY
//     ///

//     let photoUrl = `https://api.unsplash.com/search/photos?query=${searchQuery2}&client_id=${process.env.UNSPLASH_KEY}`

//     console.log(photoUrl)


//     let newPhotoArray = []

//     console.log('before sending request')


//     try {
//         console.log('inside request');
//         let photoResult = await axios.get(photoUrl)
//         //   res.send(photoResult.data);

//         newPhotoArray = photoResult.data.results.map(item => {

//             return new Photo(item)
//         })
//         res.send(newPhotoArray)
//     } catch (error) {
        
//         console.log('error in getting data', error);
//     }


//     console.log('after sending request');
    
// }










// server.get('/', homeRouteHandler);
// server.get('/getPhoto', getPhotoHandler)
// server.get('*', notFoundHandler);

// function homeRouteHandler(req, res) {

//     res.send('home route')


// }





//  function getPhotoHandler(req, res) {

//     // res.send('inside getPhoto')
//     let searchQuery2 = req.query.searchQuery; 
//     //key-url
//     // https://api.unsplash.com/search/photos?query=flower&client_id=V9tMkmpbpMeWkxyWBvGaaATT9VUPl9zsCDqlNVusEYY
//     ///

//     let photoUrl = `https://api.unsplash.com/search/photos?query=${searchQuery2}&client_id=${process.env.UNSPLASH_KEY}`

//     console.log(photoUrl)


//     let newPhotoArray = []

//     console.log('before sending request')



//     axios.get(photoUrl).then(photoResult=>{
//                 console.log('inside request' );

//                 newPhotoArray = photoResult.data.results.map(item => {
//                     return new Photo(item)
//                 })
                
                
//                 res.send(newPhotoArray)
//             }).catch(error=>{

//                 res.send(error)
//             })
    
//         }
       
       
       
       
       
//                 //     try {
// //         let photoResult = await axios.get(photoUrl)
// //         //   res.send(photoResult.data);


// //           
// //        
// //        
// //     } catch (error) {
        
// //         console.log('error in getting data', error);
// //     }


    
// // }





// function notFoundHandler(req, res) {

//     res.status(404).send()


// }


// // classes
// class Photo {

//     constructor(item) {

//         this.imageUrl = item.urls.small
//     }
// }










// server.listen(PORT, () => {

//     console.log(`Listening on PORT ${PORT}`);
// })



