module.exports = (app) => {
    app.get('/noticias',  async (req, res) => {
      await app.DBClient.connect();
  
      const noticias = await app.DBClient.db('portal')
      .collection('noticias').find({name:/Stark/}).toArray();
  
      console.log(noticias);
      res.json({msg:"Noticias Ok!",noticias})
    })}