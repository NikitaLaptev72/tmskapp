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



router.put('/updateMaterial/:id', async (req, res) => {
    try {
        await Material.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Материал обновлён!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addMaterial", async (req, res) => {
    try {
        const newMaterial = new Material(req.body)
        await newMaterial.save()
        res.status(201).json({ message: "Материал добавлен!"})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete("/deleteMaterial/:id", async (req, res) => {
    try {
        await Material.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Материал удалён!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

});


// router.put("/updateMaterial/:id", async (req, res) => {
//     try {
//         const material = await Material.findById({ _id: req.params.id });

//         material.name = req.body.name,
//         material.purchasePrice = req.body.purchasePrice,
//         material.sellingPrice = req.body.sellingPrice

//         await material.save()

//         res.status(200).json({ message: "Материал обновлён!", resultCode: 0 })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// })

module.exports = router