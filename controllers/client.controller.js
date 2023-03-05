import ClientService from '../services/client.service.js';

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error('Name, CPF, Phone, Email e Address são obrigatórios.');
    }
    client = await ClientService.createClient(client);
    res.send(client);
    logger.info(`[CLIENT] POST - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info(`[CLIENT] GET`);
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info(`[CLIENT] GET`);
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.clientId ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        'Client ID, name, CPF, Phone, Email e Address são obrigatórios.'
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
    logger.info(`[CLIENT] PUT - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    const client = await ClientService.getClient(req.params.id);
    await ClientService.deleteClient(req.params.id);
    res.send({
      message: 'O Client ID informado foi excluído com sucesso.',
      client: client,
    });
    logger.info(`[CLIENT] DELETE`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
