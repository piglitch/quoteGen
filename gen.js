// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `“I am more afraid of my mum than Sven-Goran Eriksson or David Moyes.”`,

    person: `Wayne Rooney`
},  {
    quote: `“We are like a bad tea-bag  we never stay in the cup that long”.`,

    person: `Ian Holloway`
},  {
    quote: `“Only God knows …You are talking to him now”`,

    person: `Zlatan Ibrahimovich`
},  {
    quote: `“Then Guardiola started his philosopher thing. I was barely listening. Why would I? It was advanced bulls**t about blood, sweat and tears, that kind of stuff”.`,
    
    person: `Zlatan Ibrahimovich`
},];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    console.log(quotes[random]);
})








