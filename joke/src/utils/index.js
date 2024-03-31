const arr = ["😂", "🤣", "😂", "😒", "😜", "😃", "🤢", "🤔", "😢", "😆"]

export function RandomSvg() {

    const picture = Math.floor(Math.random() * arr.length)
console.log("random",arr[picture])

    return arr[picture]
}

