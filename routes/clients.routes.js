const { Router } = require('express')
const router = Router()
const Client = require('../models/Client')


router.get("/getClients", async (req, res) => {
    try {
        const clients = await Client.find().select("-__v");
        res.send(clients);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const client = await Client.findById(req.params.id).select("-__v")
        res.send(client);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.put('/updateClient/:id', async (req, res) => {
    try {
        await Client.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Данные клиента обновлены!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addClient", async (req, res) => {
    try {
        const client = new Client(req.body)
        await client.save()
        res.status(201).json({ message: "Данные клиента добавлены!"})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete("/deleteClient/:id", async (req, res) => {
    try {
        await Client.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Данные клиента удалены!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

});

module.exports = router