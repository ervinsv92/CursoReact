const {response} = require('express');

//express response es para que el intelicense ayude a autocompletar
const crearUsuario = (req, res = response) =>{
    res.json({
        ok:true,
        msg:'registro'
    })
}

const loginUsuario = (req, res = response) =>{
    res.json({
        ok:true,
        msg:'login'
    })
}

const revalidarToken = (req, res) =>{
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