import mongoose from 'mongoose';
import env from '../config/environment.js';

export default async function connect() {
    return await mongoose.connect(env.mongodb_connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
