import { getLongestBookByAuthorName } from './task.js';
import { authors, books } from './data.js'

const result = getLongestBookByAuthorName(authors, books, "Jane Austen")
console.log(result);
