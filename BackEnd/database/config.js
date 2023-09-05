const mongoose = require('mongoose');

const connectionDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB ONLINE');   
    } catch (error) {
        console.log(error);
        throw new Error('DB CANT INICIALIZATE');
    }
};


module.exports = connectionDB;