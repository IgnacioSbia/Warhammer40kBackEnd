const { defaults } = require("pg");
const knex = require("../Config/knexfile");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//GetAllRaces
exports.getRaces = async (req,res) =>{
    try {
        const reslt = await knex.select('*').from("Races")
        res.status(200).json({races:reslt})
        
    } catch (error) {
        
    }
}

//RegisterUser
exports.regUser = async(req,res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
        mail: req.body.mail,
        password: password
    }
    try{
        knex('User')
         .insert({
            email : newUser.mail,
            password : password
         })
         .then(res.json({mensaje: "success!"}))
         
         
    }catch(error){
        res.json({error:error.message})
    }   
}

//LoginUser
exports.loginTo = async(req, res)=>{

    const resultado = await knex.select('id','email','password').from("User").where({
        email: req.body.email
    });
    
    try{
        if(await bcrypt.compare(req.body.password, resultado[0].password)){
            const id_user = resultado[0].id
            const token = jwt.sign(
                {
                  name: resultado[0].name,
                  
                },
                process.env.TOKEN_SECRET
              );
              res.status(200).json({
                mensaje: "El usuario se ha logeado correctamente",
                token: token,
                id_user: id_user,
              });
              
        }else{
            res.json({message:'Not Alloweed'})
        }
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

//GetUserById
exports.getUserMail = async(req,res)=>{
    try {
        const rslt = await knex.select('email').from("User").where('id', req.query.iduser);
        res.status(200).json({rslt})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}