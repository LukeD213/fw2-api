module.exports=(app)=>{
    app.post('/postnoticias', async(req,res)=>{
        try{
            const titulonoticia=req.body.titulonoticia
            const conteudonoticia=req.body.conteudonoticia
            const tiponoticia=req.body.tiponoticia
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .insertOne({titulonoticia:titulonoticia,
                    conteudonoticia:conteudonoticia,
                    tiponoticia:tiponoticia,
                    datahoracadastro: new Date()
                })
            res.status(200).send("Noticia Cadastrada")
        } catch(error){
            res.status(400).send(error)
        }
    })
}