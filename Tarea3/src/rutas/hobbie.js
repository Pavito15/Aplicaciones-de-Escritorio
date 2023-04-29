const router= require('express').Router();
const path= require('path');
router.get('', function(req,res){
    res.sendFile(path.join(__dirname,'../vistas/hobbie.html'));
});

module.exports=router;