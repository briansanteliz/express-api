const {Router} = require('express')
const routes  = Router()

routes.get('/', (req,res)=>{
    const data = {
        "nombre":'Brian',
        "Apellido":"Santeliz"
    }
    res.status(200).json(data)
})

module.exports = routes