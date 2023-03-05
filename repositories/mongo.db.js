import mongodb from 'mongodb';

function getClient() {
  const uri = 'mongodb+srv://root:123@clusternode.nliduqy.mongodb.net/test';
  return new mongodb.MongoClient(uri);
  // cria um objeto de conexão
}

export { getClient };
