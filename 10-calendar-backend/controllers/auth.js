const {response} = require('express');
const Usuario = require('../models/Usuario');

//express response es para que el intelicense ayude a autocompletar
const crearUsuario = async (req, res = response) =>{
    //const {name, email, password} = req.body;

    //Asegurarse de que solo se envie una respuesta dentro de una peticion, para eso se puede usar el return
    /*
    if(name.length < 5){
        return res.status(400).json({
            ok:false,
            msg:"El nombre debe ser de 5 letras"
        })
    }*/
    try {
        const usuario = new Usuario(req.body);

        await usuario.save();

        res.status(201).json({
            ok:true,
            msg:'registro'
        });    
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
    
}

const loginUsuario = (req, res = response) =>{
    const {email, password} = req.body;

    res.status(200).json({
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