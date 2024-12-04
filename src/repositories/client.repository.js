import Client from '../models/client.model.js';

async function insertClient(client) {
    return await Client.create(client);
}

async function getClients() {
    return await Client.findAll();
}

async function getClient(cod_client) {
    return await Client.findByPk(cod_client);
}

async function updateClient(client) {
    await Client.update(client, {
        where: {
            cod_client: client.cod_client,
        },
    });

    return await getClient(client.cod_client);
}

export default {
    insertClient,
    getClients,
    getClient,
    updateClient,
};
