import mongoose from 'mongoose';
let cached=false;
export async function connectDB(){
 if(cached) return;
 await mongoose.connect(process.env.MONGODB_URI,{dbName:'phethagatsa'});
 cached=true;
 console.log('MongoDB Cluster0 connected');
}
