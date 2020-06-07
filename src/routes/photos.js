const {Router} = require('express');
const fetch = require('node-fetch')
const photos =  Router()

photos.get('/', async (req,res)=>{
    const url = 'https://jsonplaceholder.typicode.com/photos'
    const response = await fetch(url);
    const data = await response.json();
    res.json({data})
})
module.exports = photos
