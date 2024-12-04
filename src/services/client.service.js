import clientRepository from '../repositories/client.repository.js';

async function createClient(client) {
    try {
        return await clientRepository.insertClient(client);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getClients() {
    try {
        const clients = await clientRepository.getClients();

        if (clients.length === 0) {
            throw new Error('Não existe clientes cadastrados.');
        }

        return clients;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getClient(id) {
    const client = await clientRepository.getClient(id);

    if (!client) {
        throw new Error('Cliente não encontrado.');
    }

    return await clientRepository.getClient(id);
}

async function updateClient(client) {
    try {
        await getClient(client.cod_client);
        return await clientRepository.updateClient(client);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createClient,
    getClients,
    getClient,
    updateClient,
};
