
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

function repeatString(title, count, space){
    let arr=[]
    for (let i = 0; i < count; i++){
        arr.push(title)
    }
    return arr.join(space)
}

const rString = (title, count, space) => {
    return title + (space + title).repeat(count-1)
}

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

function checkStart(string, substring){
    let stringStart = string.slice(0, substring.length).toLowerCase()
    return stringStart === substring.toLowerCase()
}

const chStart = (string, substring) => string.toLowerCase().startsWith(substring.toLowerCase())
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const foo3 = (string, number) => string.substring(0, number) + "..."
console.log(foo3("Всем студентам инкубатора желаю удачи!", 10))


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null

function getMinLengthWord (string){
    if(typeof (string) !== "string" || string.length === 0) return null
    const arr = string.split(" ")
    arr.sort((a,b) => a.length - b.length)
    return arr[0]
}
console.log(getMinLengthWord(""))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (string) => {
    return string.toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1))
}

