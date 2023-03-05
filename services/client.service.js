import ClientRepository from '../repositories/client.repository.js';
import SaleRepository from '../repositories/sale.repository.js';

async function createClient(client) {
  return await ClientRepository.insertClient(client);
}

async function getClients() {
  const client = await ClientRepository.getClients();
  if (client.length > 0) {
    return client;
  }
  throw new Error('Não existe Clients na tabela.');
}

async function getClient(id) {
  if (await ClientRepository.getClient(id)) {
    return await ClientRepository.getClient(id);
  }
  throw new Error('O Client ID informado não existe.');
}

async function updateClient(client) {
  await getClient(client.clientId);
  return await ClientRepository.updateClient(client);
}

async function deleteClient(id) {
  await getClient(id);
  const sale = await SaleRepository.getSalesByClientId(id);
  if (sale.length > 0) {
    throw new Error(
      'Não é possível excluir o Client ID pois ele tem compra de produto.'
    );
  }
  return ClientRepository.deleteClient(id);
}

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
