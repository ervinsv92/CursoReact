const {response} = require('express');

//express response es para que el intelicense ayude a autocompletar
const crearUsuario = (req, res = response) =>{

    const {name, email, password} = req.body;

    //Asegurarse de que solo se envie una respuesta dentro de una peticion, para eso se puede usar el return
    if(name.length < 5){
        return res.status(400).json({
            ok:false,
            msg:"El nombre debe ser de 5 letras"
        })
    }

    res.json({
        ok:true,
        msg:'registro',
        name, 
        email, 
        password
    })
}

const loginUsuario = (req, res = response) =>{

    const {email, password} = req.body;

    res.json({
        ok:true,
        msg:'login',
        email, 
        password
    })
}

const revalidarToken = (req, res = response) =>{
    res.json({
        ok:true,
        msg:'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}