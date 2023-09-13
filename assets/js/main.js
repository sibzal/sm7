let news = []

let inputNameNews = document.getElementById('inputName')
let inputAuthour = document.getElementById('inputAuthour')
let inputText = document.getElementById('inputText')
let inputDate = document.getElementById('inputDate')
let btn = document.getElementById('btn')

let newsPlace = document.querySelector('.news-content')
function showArray(arr){
    arr.forEach(x => {
        newsPlace.insertAdjacentHTML('beforeend', `
        <div class="news">
            <div class="name_and_date">
                <h1>${x.name}</h1>
                <p class="date">${x.date}</p>
            </div><br>
            <p class="descr-news">${x.text}</p>
            <br><br>
                <div class="authour_and_id">
                <h3 class="name">${x.authour}</h3>
            </div>
        </div>
    `)
    });
}

function addArray(){
    let object = {
        id: 5,
        name: inputNameNews.value,
        authour: inputAuthour.value,
        date: inputDate.value,
        text: inputText.value
    }
    news.push(object)
    newsPlace.innerHTML = ''
    inputNameNews.value = ''
    inputAuthour.value = ''
    inputDate.value = ''
    inputText.value = ''
    showArray(news)

}

btn.addEventListener('click', addArray)


