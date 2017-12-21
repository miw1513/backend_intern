const axios = require('axios');
const app = require('express')();
const port = process.env.PORT || 7777; 


app.get('/user/:user', function (req, res) {
    let id = req.params.user
    axios.get('https://api.github.com/users/' + id +'/followers')
    .then(function(response){      
        res.json(response)
    })
    .catch(function(error){          
        if (error.response) {
            return 'error'
        }
    });
});

app.listen(port, () => {
    console.log('Starting at port ' + port)
})