const mongoose = require('mongoose');
const fs = require('fs');
const models_path = __dirname + '/../models';
const database = 'trivia1027';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${database}`, { useMongoClient: true });

fs.readdirSync(models_path).forEach((file) => {
    console.log(`loading ${file}...`);
    require(`${models_path}/${file}`);
});