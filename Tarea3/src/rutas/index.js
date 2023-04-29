const express= require('express');
const router=express.Router();
const sobreMRoutes=require('./sobreMi');
const hobbRoutes=require('./hobbie');


router.use('',express.json());

router.use('/sobreMi', sobreMRoutes);
router.use('/hobbie', hobbRoutes);

module.exports=router;