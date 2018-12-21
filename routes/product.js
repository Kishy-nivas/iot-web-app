const express = require('express'); 
const router = express.Router(); 
// index pages 

router.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Handling product get request'
    }); 
}); 



router.post('/', (req,res) =>{
    res.status(200).json({
        message : 'Handling product post request'
    }); 
}); 

router.get('/:productId', (req,res) =>{
    const id = req.params.productId; 
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



router.patch('/:productId', (req,res) =>{
    res.status(200).json({
        message : 'Product updated'
    }); 
}); 


router.delete('/:productId', (req,res) => {
    res.status(200).json({
        message : 'product deleted'
    });
});


module.exports = router; 

