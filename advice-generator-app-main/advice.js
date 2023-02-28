const fetchAdvice = async() => {
const res = await fetch("https://api.adviceslip.com/advice")
const data = await res.json()
console.log(data);
document.getElementById('title').innerHTML = `advice ${data.slip.id}`
document.getElementById('text').innerHTML = `"${data.slip.advice}" `
}
fetchAdvice()


const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    fetchAdvice();

});