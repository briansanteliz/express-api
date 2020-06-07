const {Router} = require('express');
const movies = require('../database.json');
const _ = require('underscore');
const router =  Router()

router.get('/', (req, res)=>{
    res.status(200).json(movies)
})

router.get('/:id', (req, res)=>{
   const {id} = req.params
   const data = movies.filter(movie=>movie.id==id);
    res.json(data)  
})

router.post('/', (req, res)=>{
   const { pelicula, genero, año, actor  } = req.body
    if(pelicula && genero && año && actor){
        const id = movies.length + 1; 
        // const data = {
        //     id,
        //     pelicula,
        //     genero,
        //     año,
        //     actor
        // }
    const data = {id, ...req.body}
     movies.push(data)
     res.json('Saved').status(200)
    }else{
        res.json('Todos los campos son obligatorios').status(403)
    }
})

router.delete('/:id', (req, res)=>{
        const {id } = req.params;
        movies.forEach((pelicula,i)=>{
            if(pelicula.id == id){
                movies.splice(i,1)
        res.json({message:'movie deleted successfully', data:movies});
            }
            
        })
})

router.put('/:id', (req, res)=>{
    const {id} = req.params;
   const { pelicula, genero, año, actor  } = req.body
   if(pelicula && genero && año && actor){
     movies.forEach((movie, i)=>{
         if(movie.id == id){
            movie.pelicula = pelicula;
            movie.genero = genero;
            movie.año = año;
            movie.actor = actor
         }
     })
     res.json({message:'Movie update successfully', data:movies})
   }else{
    res.json('Todos los campos son obligatorios').status(403)

   }
    
})
module.exports = router