const { Router } = require('express')
const router = Router()
const Froze = require('../models/Froze')


router.get("/getFrozes", async (req, res) => {
    try {
        const frozes = await Froze.find().select("-__v");
        res.send(frozes);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const frozes = await Froze.findById(req.params.id).select("-__v")
        res.send(frozes);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.put('/updateFroze/:id', async (req, res) => {
    try {
        await Froze.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Замер обновлён!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addFroze", async (req, res) => {
    try {
        const newFroze = new Froze(req.body)
        await newFroze.save()
        res.status(201).json({ message: "Замер добавлен!"})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete("/deleteFroze/:id", async (req, res) => {
    try {
        await Froze.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Замер удалён!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

});

module.exports = router