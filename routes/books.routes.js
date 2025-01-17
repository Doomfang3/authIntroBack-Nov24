const { isValidObjectId } = require('mongoose')
const Book = require('../models/Book.model')
const { isAuthenticated } = require('../middlewares/route-guard.middleware')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find().populate('createdBy', '-passwordHash')
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAuthenticated, async (req, res, next) => {
  const bookToCreate = req.body
  try {
    const newBook = await Book.create({ ...bookToCreate, createdBy: req.tokenPayload.userId })
    res.status(201).json(newBook)
  } catch (error) {
    next(error)
  }
})

router.delete('/:bookid', isAuthenticated, async (req, res, next) => {
  const { bookid } = req.params
  if (isValidObjectId(bookid)) {
    try {
      const potentialBookToDelete = await Book.findById(bookid)
      if (potentialBookToDelete) {
        if (potentialBookToDelete.createdBy == req.tokenPayload.userId) {
          await Book.findByIdAndDelete(bookid)
          res.status(204).json()
        } else {
          res.status(403).json({ message: "You cannot delete a book you didn't create" })
        }
      } else {
        res.status(400).json({ message: 'No book with the provided Id' })
      }
    } catch (error) {
      next(error)
    }
  } else {
    res.status(400).json({ message: 'invalid id' })
  }
})

module.exports = router
