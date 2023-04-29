const router= require('express').Router();
const path= require('path');
router.get('', function(req,res){
   // res.send('Ruta SobreMi');
   res.sendFile(path.join(__dirname,'../vistas/sobreMi.html'));
});
module.exports=router;