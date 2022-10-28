let btn=document.querySelector('#new-button');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const arr=[
    {
        quote:`The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        person:"Nelson Mandela"
    },
    {
        quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. `,
        person:'Steve Jobs'
    },
    {
        quote:`If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
        person:'Oprah Winfrey'
    },
    {
        quote:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        person:'James Cameron'
    },
    {
        quote:`Many of life's failures are people who did not realize how close they were to success when they gave up.`,
        person:'Thomas A. Edison'
    },
]
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*arr.length);
    quote.innerText=arr[random].quote;
    person.innerText=arr[random].person;
})