const express =require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        status: 'API FUNCIONANDO'
    })
})

module.exports=router;