const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/', (req, res) => {
    let endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=G`
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            console.log(response.data)
            res.send(response.data.data.image_original_url)
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;