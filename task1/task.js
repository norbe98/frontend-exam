export function getLongestBookByAuthorName(authors, books, authorName) {

    //Find the author
  const author = authors.find(author => author.name === authorName)

  if (!author) {
    return null
  }

  //Author books
  const allBooksByAuthor = books.filter(book => book.author_id === author.id)

  allBooksByAuthor.sort((a, b) => {
    if (b.pages !== a.pages) {
      return b.pages - a.pages
    }
    return a.title.localeCompare(b.title)
  })

  return allBooksByAuthor[0].title
    
}
