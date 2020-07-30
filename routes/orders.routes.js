const { Router } = require('express')
const router = Router()
const Order = require('../models/Order')


router.get("/getOrders", async (req, res) => {
    try {
        const orders = await Order.find().select("-__v");
        res.send(orders);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).select("-__v")
        res.send(order);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.put('/updateOrder/:id', async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Данные клиента обновлены!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addOrder", async (req, res) => {
    try {
        const order = new Order(req.body)
        await order.save()
        res.status(201).json({ message: "Данные клиента добавлены!"})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete("/deleteOrder/:id", async (req, res) => {
    try {
        await Order.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Данные клиента удалены!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

});

module.exports = router