const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async update(request, response){
        const {github_username , techs} = request.query;

        let dev = await Dev.findOne({ github_username });

        const techsArray = parseStringAsArray(techs);

        // deletar
        // dev = await Dev.deleteOne({ _id: dev.id});

        dev = await Dev.updateOne({ _id: dev.id},{
                $set: {
                    github_username: github_username,
                    techs: techsArray,
                }
            }
        );

        return response.json({message: {github_username , techs }});
    }
};