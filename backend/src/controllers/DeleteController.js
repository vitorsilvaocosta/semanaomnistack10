const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async destroy(request, response){
        const {github_username} = request.query;

        let dev = await Dev.findOne({ github_username });

        console.log(
            {message: "ID: " + dev.id}
        ); 
     
        dev = await Dev.deleteOne({ _id: dev.id });

        return response.json( {message: "Usuario Deletado!"} );
    }
};