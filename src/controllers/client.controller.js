import logger from '../loggs/logging.js';
import clientService from '../services/client.service.js';

async function createClient(req, res, next) {
    try {
        const client = req.body;
        const { name, cpf, phone, email, address } = client;

        if (!name || !cpf || !phone || !email || !address) {
            throw new Error(
                'Nome, CPF, Telefone, Email e Endereço são obrigatórios.',
            );
        }

        const response = await clientService.createClient(client);

        logger.info('[CLIENT] POST - Cliente criado com sucesso.');
        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getClients(req, res, next) {
    try {
        const clients = await clientService.getClients();

        logger.info('[CLIENT] GET - Clientes obtidos com sucesso.');
        return res.status(200).send(clients);
    } catch (err) {
        next(err);
    }
}

async function getClient(req, res, next) {
    try {
        const client = await clientService.getClient(req.params.cod_client);

        logger.info('[CLIENT] GET - Cliente obtido com sucesso.');
        return res.status(200).send(client);
    } catch (err) {
        next(err);
    }
}

async function updateClient(req, res, next) {
    try {
        const client = req.body;
        const { cod_client } = client;

        if (!cod_client) {
            throw new Error('Código do cliente é obrigatório.');
        }

        const response = await clientService.updateClient(client);

        logger.info('[CLIENT] PATCH - Cliente atualizado com sucesso.');
        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createClient,
    getClients,
    getClient,
    updateClient,
};
