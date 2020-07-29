const { Router } = require('express')
const router = Router()
const Material = require('../models/Material')


router.get("/getMaterials", async (req, res) => {
    try {
        const materials = await Material.find().select("-__v");
        res.send(materials);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const material = await Material.findById(req.params.id).select("-__v")
        res.send(material);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

// router.put("/updateTask/:id", async (req, res) => {
//     try {

//         const task = await Task.findById({ _id: req.params.id });

//         task.taskTitle = req.body.taskTitle,
//         task.taskText = req.body.taskText,
//         task.edited = "1",
//         task.editedDate = req.body.editedDate

//         await task.save()

//         res.status(200).json({ message: "Задание обновлено!", resultCode: 0 })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }

// })

//Добавление и удаление заданий
router.post("/addMaterial", async (req, res) => {
    try {
        const newMaterial = new Material(req.body)
        await newMaterial.save()
        res.status(201).json({ message: "Материал добавлен!", resultCode: 0 })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});
// router.delete("/deleteTask/:id", async (req, res) => {
//     try {
//         await Task.findByIdAndRemove({ _id: req.params.id })
//         res.status(200).json({ message: "Задание удалено!" })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }

// });







module.exports = router