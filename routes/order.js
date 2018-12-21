const express = require('express'); 
const router = express.Router(); 
// index pages 

router.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Handling order  get request'
    }); 
}); 



router.post('/', (req,res) =>{
    res.status(200).json({
        message : 'Handling order post request'
    }); 
}); 

router.get('/:orderId', (req,res) =>{
    const id = req.params.orderId; 
    console.log("Got request for product id " + id); 
    if(id == 'special'){
        res.status(200).json({
            message : 'A special request',
            id : id
        }); 
    }else{
        res.status(200).json({
            message : 'A ordinary request',
            id : id
        }); 
    }
}); 



router.patch('/:orderId', (req,res) =>{
    res.status(200).json({
        message : 'order updated'
    }); 
}); 


router.delete('/:orderId', (req,res) => {
    res.status(200).json({
        message : 'order deleted'
    });
});


module.exports = router; 

