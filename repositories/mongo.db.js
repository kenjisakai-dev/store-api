import mongoose from 'mongoose';

// já faz o pool de conexões
async function connect() {
  const uri =
    'mongodb+srv://root:123@clusternode.nliduqy.mongodb.net/store-api';
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
