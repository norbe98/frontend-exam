export function countDifferentLetters(sentence) {
    const sentenceLetters = sentence.toLowerCase().trim().split("")
    const filteredLetters = []
    for (const letter of sentenceLetters) {
        if(letter !== " " && !filteredLetters.includes(letter) && /[a-z]/.test(letter)) filteredLetters.push(letter)
    }
        return filteredLetters.length
}