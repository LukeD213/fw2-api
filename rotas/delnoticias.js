const { ObjectId } = require("mongodb")

module.exports=(app)=>{
    app.delete('/delnoticias', async (req,res)=>{
        try{
            const id= ObjectId.createFromHexString(req.body._id)
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({_id: id})
            res.send("Noticia apagada")
        } catch(error){
            res.status(400).send("Erro ao apagar a noticia: "+error)
        }
    })
}