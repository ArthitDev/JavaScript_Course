const a = document.querySelector('a')
// const  a = document.getElementsByTagName('a')
console.log(a)


a.setAttribute('href','https://www.google.co.th') //method 1
a.setAttribute('target','_blank')

// a[0].setAttribute('href','https://www.google.co.th') //method 2
// a[0].setAttribute('target','_blank')


const p = document.querySelector('p')
// p.innerHTML = "Hello Website"

const result = {first_Name : "Arthit",
                last_Name : "LungYa"}
const fullName = `${result.first_Name} ${result.last_Name}`
p.innerHTML = fullName