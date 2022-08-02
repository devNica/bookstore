import authorService from '../services/author.service'

const authorController = {}

authorController.renderAuthorRegistrationForm = async (_req, res, _next) => {
  try {
    res.render('authors/add')
  } catch (error) {
    res.json({ message: error.message })
  }
}

authorController.registerBookAuthor = async (req, res, _next) => {
  try {
    await authorService.registerBookAuthor({ ...req.body })
    res.redirect('/bookstore/v1')
  } catch (error) {
    console.log(error)
    res.json({ message: error.message })
  }
}

export default authorController
