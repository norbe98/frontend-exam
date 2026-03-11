export function getLongestBookByAuthorName(authors, books, authorName) {

  const author = authors.find(author => author.name === authorName)

  if (!author) {
    return null
  }
    
}
