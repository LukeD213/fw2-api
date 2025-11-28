const { ObjectId } = require("mongodb")

module.exports=(app)=>{
    app.post('/putnoticias', async(req,res)=>{
        try{
            const id=ObjectId.createFromHexString(req.body._id)
            const titulonoticia=req.body.titulonoticia
            const conteudonoticia=req.body.conteudonoticia
            const tiponoticia=req.body.tiponoticia
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .updateOne({_id:id}, {$set:{
                    titulonoticia:titulonoticia,
                    conteudonoticia:conteudonoticia,
                    tiponoticia:tiponoticia,
                    datahoracadastro: new Date()
                }})
            res.status(200).send("Noticia atualizada")
        } catch(error){
            res.status(400).send("Não foi possivel atualizar a noticia")
        }
    })
}