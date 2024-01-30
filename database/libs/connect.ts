'use server'
import mongoose from "mongoose";
const connectMongoDB = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URL) 
    console.log('connefcted to mongodb');
    
} catch (error) {
    throw new Error('Error while connecting')
}
}

export default connectMongoDB