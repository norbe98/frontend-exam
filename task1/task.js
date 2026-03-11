export function getLongestBookByAuthorName(authors, books, authorName) {

    //FINDING AUTHOR
  const author = authors.find(author => author.name === authorName)

  if (!author) {
    return null
  }
    
}
