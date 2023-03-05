import mongoose from 'mongoose';

async function connect() {
  const uri = 'mongodb+srv://root:123@clusternode.nliduqy.mongodb.net/test';
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
