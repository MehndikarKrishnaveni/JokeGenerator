let URL = 'https://official-joke-api.appspot.com/random_joke';
const btn = document.querySelector('#btn')
const container = document.querySelector('#container')
container.innerHTML=`<div>Loading...</div>`
btn.addEventListener('click',()=>{
    generateJoke()
})


const generateJoke =async ()=>{
    try{
    let response =await fetch(URL);
    // console.log(response);
    let data = await response.json();
    console.log(data);
    let setup = data.setup;
    let punchline = data.punchline;
    container.innerHTML = `
                            <div id="setup">${setup}</div>
                            <div id="punchline">${punchline}</div>`;
    }catch(error) {
        container.innerHTML = `<div>Error fetching joke. Try again later!</div>`;
        console.error("Error:", error);
    }
};
