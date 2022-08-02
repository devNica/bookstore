import AuthorModel from '../models/author.model'

const authorService = {}

authorService.registerBookAuthor = async function (data) {
  const authorDTO = {
    fullname: data.fullname,
    authorImageUrl: data.authorimageurl,
    birthDate: data.birthdate
  }

  if (data?.deathdate) authorDTO.deathDate = data.deathdate

  await AuthorModel.create(authorDTO)
}

export default authorService
