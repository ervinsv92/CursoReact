const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

//express response es para que el intelicense ayude a autocompletar
const crearUsuario = async (req, res = response) =>{
    const {email, password} = req.body;

    //Asegurarse de que solo se envie una respuesta dentro de una peticion, para eso se puede usar el return
    /*
    if(name.length < 5){
        return res.status(400).json({
            ok:false,
            msg:"El nombre debe ser de 5 letras"
        })
    }*/
    try {
        let usuario = await Usuario.findOne({
            email
        });

        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:'Un usuario existe con ese correo.'
            })
        }

        usuario = new Usuario(req.body);

        const salt = await bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name:usuario.name
        });    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
    
}

const loginUsuario = async (req, res = response) =>{
    const {email, password} = req.body;

    try {
        const usuario = await Usuario.findOne({
            email
        });

        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe con ese email.'
            })
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Password incorrecto'
            });
        }

        res.status(400).json({
            ok:false,
            uid:usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
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