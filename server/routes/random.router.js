const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

//${process.env.TMDB_API_KEY}

router.get('/:id', (req, res) => {
    let randomPageNumber = Math.floor((Math.random() * 50) + 1);
    let randomMovieNumber = Math.floor((Math.random() * 20) + 1)
    // console.log('the random number is:', randomPageNumber)
    let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${randomPageNumber}&with_genres=${req.params.id}&language=en-US`
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            console.log('the response is:', response.data.results[randomMovieNumber].original_title)
            res.send(response.data.results[randomMovieNumber])
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;