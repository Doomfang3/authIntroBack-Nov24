const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { isAuthenticated } = require('../middlewares/route-guard.middleware')

// POST Signup
router.post('/signup', async (req, res, next) => {
  const credentials = req.body // { username: '...', password: '...'}

  const salt = bcrypt.genSaltSync(13)
  const passwordHash = bcrypt.hashSync(credentials.password, salt)

  try {
    const newUser = await User.create({ ...credentials, passwordHash })
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})
// POST Login
router.post('/login', async (req, res, next) => {
  const credentials = req.body // { username: '...', password: '...'}

  // Check for user with given username
  try {
    const potentialUser = await User.findOne({ username: credentials.username })
    if (potentialUser) {
      // Check the password
      if (bcrypt.compareSync(credentials.password, potentialUser.passwordHash)) {
        // The user has the right credentials
        const payload = { userId: potentialUser._id }
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: '6h',
        })
        res.json({ token: authToken })
      } else {
        res.status(403).json({ message: 'Incorrect password' })
      }
    } else {
      res.status(400).json({ message: 'No user with this username' })
    }
  } catch (error) {
    next(error)
  }
})
// GET Verify
router.get('/verify', isAuthenticated, async (req, res, next) => {
  console.log('Log from handler')
  try {
    const currentUser = await User.findById(req.tokenPayload.userId)
    res.json(currentUser)
  } catch (error) {
    next(error)
  }
})

module.exports = router
