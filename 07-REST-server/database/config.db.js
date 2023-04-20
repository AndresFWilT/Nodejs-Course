const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTOpology: true
        });
        console.log(`Database is online`);
    } catch (err){
        console.log(`${err}`);
        throw new Error(`Error to initialize Database`);
    }
}

module.exports = {
    dbConnection
};