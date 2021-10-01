const router = require('express').Router();

router.get('/chat', (req,res) => {
    console.log('chat');
}) 

module.exports = router;