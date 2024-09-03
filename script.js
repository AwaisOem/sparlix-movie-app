// single page sections
const Home = document.querySelector('#home');
const MoviePage = document.querySelector('#movie-content-screen');
const TVPage = document.querySelector('#TV-content-screen');
const PersonPage = document.querySelector('#person-content-screen');
const MarvelSec = document.querySelector('#Marvel-Movies');
const HelpSec = document.querySelector('#Help-screen');
const SearchSec = document.querySelector('#Search-screen');
const MoviesListSec = document.querySelector('#Movies-screen');
const TVListSec = document.querySelector('#TV-screen');
const sections = document.querySelectorAll('.container > section');
//single page app pagination
document.body.onload = function()
{
(()=>{
    sections.forEach(sec=>{sec.style.display = 'none';})
    let page = sessionStorage.getItem('page');
    if (page === 'moviePage')
    {
        MoviePage.style.display = 'flex';
        let idOfMovie = localStorage.getItem('current_Movie_id');
        paintMoviePage(Number(idOfMovie));
    }
    else if (page === 'TVPage')
    {
        MoviePage.style.display = 'flex';
        let idOfTV = localStorage.getItem('current_TV_id');
        paintTvPage(Number(idOfTV));
    }
    else if (page === 'personPage')
    {
        PersonPage.style.display = 'flex';
        let idOfPerson = localStorage.getItem('current_Person_id');
        paintPersonPage(Number(idOfPerson));
    }
    else if (page === 'moviesList')
    {
        MoviesListSec.style.display = 'flex';
    }
    else if (page === 'TVList')
    {
        TVListSec.style.display = 'flex';
    }
    else if (page === 'helpPage')
    {
        HelpSec.style.display = 'flex';
    }
    // else if (page === 'searchPage')
    // {
    //     SearchSec.style.display = 'flex';
    // }
    else if (page === 'marvel')
    {
        MarvelSec.style.display = 'flex';
        const MarvelContianer = document.querySelector('#marvel-movies-container');
        MarvelMovieIds.forEach(id=>{
        dataFetchByIdOfMovie(id).then(data=>{SingleMoviePaint(MarvelContianer , data);})
    })
    }
    else
    {
        Home.style.display = 'flex';
        paintHomePage();
        sessionStorage.setItem('page','home');
    }
})();
    loadBookMarks();
    FaqPaint(); 
    const MovieCatagoriesContianer = document.querySelector('#movies-catagories');
    const TVCatagoriesContianer = document.querySelector('#tv-catagories');
    MovieCatagoriesContianer.innerHTML =``; 
    TVCatagoriesContianer.innerHTML =``; 
    movie_catagories.forEach(s=>{MovieCatagoriesContianer.innerHTML +=`<a onclick="MovieCatagoryClick(this,${s.id})">${s.name}</a>` })
    tv_catagories.forEach(s=>{TVCatagoriesContianer.innerHTML +=`<a onclick="TvCatagoryClick(this,${s.id})">${s.name}</a>` })
}
document.addEventListener('DOMContentLoaded',()=>
{
    
})
function MovieCardClicked(idOfMovie)
{
    sections.forEach(sec=>{sec.style.display = 'none';})
    MoviePage.style.display = 'flex';
    paintMoviePage(idOfMovie);
    localStorage.setItem('current_Movie_id',idOfMovie);
    sessionStorage.setItem('page','moviePage');
}
function TVCardClicked (idofTV)
{
    sections.forEach(sec=>{sec.style.display = 'none';})
    MoviePage.style.display = 'flex';
    paintTvPage(idofTV);
    localStorage.setItem('current_TV_id',idofTV);
    sessionStorage.setItem('page','TVPage');
}
function PersonCardClicked(idOfPerson)
{
    sections.forEach(sec=>{sec.style.display = 'none';})
    PersonPage.style.display = 'flex';
    paintPersonPage(idOfPerson);
    localStorage.setItem('current_Person_id',idOfPerson);
    sessionStorage.setItem('page','personPage');
}
function SearchIt(x)
{
    const searchField = document.querySelector('#seachBarMain');
    const searchTextShow = document.querySelector('#search-keyword-span');
    const resultDisplay = document.querySelector('#search-result-section');
    resultDisplay.innerHTML = "";
    let keyword = searchField.value;
    if (keyword==="") {
        alert('Please Enter Something to search');
        return;
    }
    else
    {
        sections.forEach(sec=>{sec.style.display = 'none';})
        SearchSec.style.display = 'flex';
        searchTextShow.innerHTML = keyword;
        let  query = keyword.split(' ').join('%20');
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`)
        .then(res =>res.json())
        .then(data=>
        {
            if (data.results.length===0) {
                resultDisplay.innerHTML += '<p style="opacity:0.7;">No results found</p>';
            }
            else
            {
                data.results.forEach(d=>
                {
                    if (d.media_type==='tv') {
                        SingleTVPaint(resultDisplay , d);
                    }
                    else if (d.media_type==="movie")
                    {
                        SingleMoviePaint(resultDisplay , d);
                    }
                    else if (d.media_type==="person")
                    {
                        resultDisplay.innerHTML +=`<div class="person-card">
        <img src="https://image.tmdb.org/t/p/w200${d.profile_path}" alt="./img/placeholder.png" draggable="true" onclick="PersonCardClicked(${d.id})">
        <h3 style="font-weight:bold;font-size:1.1rem">${d.name}</h3>
        <p>${d.character}</p>
    </div>`;
                    }
                })
            }
        })
    }
}