const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')
const User = require('../models/Auth')

router.post('/userReg', async (req, res) => {
    try {
        const {login, password, role} = req.body

        const userLogin = await User.findOne({login})

        if (userLogin) {
            return res.status(202).json({message: 'Пользователь с таким логином уже существует', resultCode: 1})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({login, role, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "Пользователь создан", resultCode: 0})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.post('/login', async (req, res) => {
        try {
            const {login, password} = req.body

            let user = await User.findOne({login})

            if (!user) {
                return res.status(202).json({message: 'Неверный логин или пароль', resultCode: 1})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(202).json({message: 'Неверный логин или пароль', resultCode: 1})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '24h'}
            )

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    })

router.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user.userId).select("-password").select("-__v")
    res.send(user);
}); 

router.get("/users", async (req, res) => {
    try {
        const users = await User.find().select("-password").select("-__v");
        res.send(users);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

module.exports = router