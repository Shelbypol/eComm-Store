import mongoose from 'mongoose'

// asynchronous b/c when calling .connect or .find it returns a promise and we want to use async await
// second argument of options is to prevent warnings in the console
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log{`Error: ${error.message}`}
        // passing 1 = fail and to exit
        process.exit(1)
    }
}

export default connectDB