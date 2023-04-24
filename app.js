const prompt = document.getElementById('prompt')
const results = document.getElementById('answer')
const questions = document.getElementById('questions');

function callChatGPT() {
    const url = 'https://openai80.p.rapidapi.com/chat/completions';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'c3db37aaecmsh7399545a0d127efp1ab80ajsn4429b2485cc3',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body: `{"model":"gpt-3.5-turbo", "messages":[{"role":"user", "content":"${prompt.value}"}]}`
    }
    fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
        let txt = prompt.value
        
        let resultsTxt = response.choices[0].message.content
        results.innerHTML += `<div>
        <p class="results">${txt}</p>
        <p class="results2">${resultsTxt}</p>
        </div>`
    })
    .catch((err) => console.error(err))    
}
