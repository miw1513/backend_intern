const axios = require('axios');
const app = require('express')();
const port = process.env.PORT || 7777; 



// app.get('/', function (req, res) {
//     let user = 'miw1513'
//     res.send('<h1>Hello Node.js</h1>' + user)
// })

// app.get('/index', function (req, res) {
//     res.send('<h1>This is index page</h1>' + 'dasdasd <br> kuy')
// })

var user = 'miw1513'
githubAPI(user)

function githubAPI(user) {
axios.get('https://api.github.com/users/' + user +'/followers')
     .then(function(response){      
     console.log(response.data[0].login)
     })
     .catch(function(error){          
         if (error.response) {
        //  // The request was made and the server responded with a status code
        //  // that falls out of the range of 2xx
        //    console.log(error.response.data);
        //    console.log(error.response.status);
        //    console.log(error.response.headers);

        return 'error'
         }
     });

     

    }

app.listen(port, () => {
    console.log('Starting at port ' + port)
})