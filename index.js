const axios = require('axios');
const app = require('express')();
const port = process.env.PORT || 7777; 
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', function (req, res) {
    let id = req.query.user
    axios.get('https://api.github.com/users/' + id +'/followers')
    .then(function(response){
        let data = []
        if (!req.query.user == ''){
        data = response.data
        }  
        res.render('index', {data: data})
        
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