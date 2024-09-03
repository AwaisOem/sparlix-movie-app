//                nav bar logic
const hideITmaterial = document.querySelectorAll('.hideAble');
const navBar = document.querySelector('nav');
if (screen.width < 645) {
    hideITmaterial.forEach(x => x.style.display = 'block')
    navBar.style.left = "-999%";
} else {
    hideITmaterial.forEach(x => x.style.display = 'none')
}
function hamClick(y) {
    if (screen.width > 645) {
        hideITmaterial.forEach(x => {
            if (x.style.display === 'block') {
                x.style.display = 'none';
                navBar.style.width = "78px";
                y.innerHTML = '<i class="fa-solid fa-bars-staggered" style="font-size: 1rem;"></i>';
            } else {
                navBar.style.width = "350px";
                x.style.display = 'block';
                y.innerHTML = '<i class="fa-solid fa-arrow-left" style="font-size: 1rem;"></i>';
            }
        })
    }
    else {
        if (navBar.style.left === "-999%") {
            navBar.style.left = "0";
            y.innerHTML = '<i class="fa-solid fa-bars-staggered" style="font-size: 1rem;"></i>';
        }
        else {
            navBar.style.left = "-999%";
            y.innerHTML = '<i class="fa-solid fa-arrow-left" style="font-size: 1rem;"></i>';
        }
    }
}
function homeClick() {
    sections.forEach(sec => { sec.style.display = 'none'; })
    Home.style.display = 'flex';
    paintHomePage();
    sessionStorage.setItem('page', 'home');
}
function MarvelClick() {
    sections.forEach(sec => { sec.style.display = 'none'; })
    MarvelSec.style.display = 'flex';
    sessionStorage.setItem('page', 'marvel');
    const MarvelContianer = document.querySelector('#marvel-movies-container');
    MarvelMovieIds.forEach(id => {
        dataFetchByIdOfMovie(id).then(data => {
            SingleMoviePaint(MarvelContianer, data);
        })
    })
}
function HelpClick() {
    sections.forEach(sec => { sec.style.display = 'none'; })
    HelpSec.style.display = 'flex';
    sessionStorage.setItem('page', 'helpPage');
}
function TVListClick() {
    sections.forEach(sec => { sec.style.display = 'none'; })
    TVListSec.style.display = 'flex';
    
    sessionStorage.setItem('page', 'TVList');
}
function MovieListClick() {
    sections.forEach(sec => { sec.style.display = 'none'; })
    MoviesListSec.style.display = 'flex';
    sessionStorage.setItem('page', 'moviesList');
}
let ThemeLoader = () => {
    if (localStorage.getItem('theme') === 'Dark') {
        ThemeSet('Dark');
    }
    else {
        ThemeSet('Bright');
        localStorage.setItem('theme', 'Bright');
    }
}
let ThemeSet = (theme) => {
    const root = document.documentElement;
    // const root = document.querySelector(':root');
    if (theme === 'Dark') {
        root.style.setProperty('--Primary', '#000');
        root.style.setProperty('--Secondary', '#fff');
        root.style.setProperty('--NavBackground', '#0f0f0f');
        root.style.setProperty('--NavColor1', 'rgba(255, 255, 255, 0.632)');
        root.style.setProperty('--Header-Background', 'rgba(0, 0, 0, 0.45)');
    }
    else {
        root.style.setProperty('--Primary', '#fff');
        root.style.setProperty('--Secondary', '#000');
        root.style.setProperty('--NavBackground', '#f3f3f3');
        root.style.setProperty('--NavColor1', 'rgba(0, 0, 0, 0.632)');
        root.style.setProperty('--Header-Background', 'rgba(255, 255, 255, 0.45)');
    }
}
function ThemeToggle() {
    // if (localStorage.getItem('theme')==null) {
    if (localStorage.getItem('theme') === 'Dark') {
        ThemeSet('Bright');
        localStorage.setItem('theme', 'Bright');
    }
    else {
        ThemeSet('Dark');
        localStorage.setItem('theme', 'Dark');
    }
}
let darkThemeButton = document.getElementById('darkTheme');
darkThemeButton.addEventListener('click', () => {
    let icn = document.querySelector('#darkThemeIcn');
    let txt = document.querySelector('#darkThemetxt');
    if (icn.className === 'fa-solid fa-sun') {
        icn.className = 'fa-solid fa-moon';
        txt.innerHTML = 'Dark';
    }
    else {
        icn.className = 'fa-solid fa-sun';
        txt.innerHTML = 'Light';
    }
    ThemeToggle();
})
ThemeLoader();
function closePopUp() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(e => {
        e.style.display = 'none';
    });
    const iframe = document.querySelector('#content-run-iframe');
    iframe.src = "";
}
closePopUp();
LoginShotcutClick();
function OpenLoginPopup() {
    const popup = document.querySelector('.loginPopup');
    popup.style.display = 'flex';
}
function OpenSeasonsPopup(idOfTv) {
    const popup = document.querySelector('.seasonsPopup');
    popup.style.display = 'flex';
    const seasonsCount = document.querySelector('.season-count-container');
    seasonsCount.innerHTML  = "";
    const tvShowName = document.querySelector('.name-of-TvShow');
    dataFetchByIdOfTv(idOfTv).then(data=>
        {
            tvShowName.innerHTML = `Seasons of ${data.name}`;
            for (let i = 1; i <= data.number_of_seasons; i++)
            seasonsCount.innerHTML += `<a class="season-count" onclick="EpisodeFiller(${i},${idOfTv},${data.seasons[i].episode_count})" style="font-size: larger;font-weight: bold;">${i}</a>`;
        })
    }
function EpisodeFiller(seasonNumber , idOfTv ,episodesCount)
{
    const episodeContainer = document.querySelector('.wrapping-card-container');
    episodeContainer.innerHTML = ``;
    for (let i = 1; i <= episodesCount; i++) {
        dataFetchByEpisode(idOfTv,seasonNumber,i).then(data => {
            episodeContainer.innerHTML += `<div class="episode" style="background-image:url('https://image.tmdb.org/t/p/w500/${data.still_path}')" onclick="OpenIframePopup('https:www.2embed.to/embed/tmdb/tv?id=${idOfTv}&s=${seasonNumber}&e=${data.episode_number}')">
            <div><svg xmlns="http://www.w3.org/2000/svg"    style="width: 54px;" fill="#fff" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"/></svg></div>
            <h3 style="text-align:center;color:#fff;">${data.episode_number} . ${(data.name.length>7)?data.name.slice(data.name.length-7):data.name} . ${Math.floor(data.runtime/60)}:${Math.floor(data.runtime%60)}:00</h3>
        </div>`;
        })
    }
}
function OpenComingSoonPopup() {
    const popup = document.querySelector('.comingSoon');
    popup.style.display = 'flex';
}
function OpenIframePopup(url) {
    closePopUp()
    const popup = document.querySelector('.iframePopup');
    popup.style.display = 'flex';
    const iframe = document.querySelector('#content-run-iframe');
    iframe.src = url;
}
function SignUpShotcutClick() {
    const LoginForm = document.querySelector('#Login');
    const SignUpForm = document.querySelector('#SignUp');
    LoginForm.style.display = 'none';
    SignUpForm.style.display = 'flex';
    const ForgetForm = document.querySelector('#ForgetPassword');
    ForgetForm.style.display = 'none';
}
function LoginShotcutClick() {
    const LoginForm = document.querySelector('#Login');
    const SignUpForm = document.querySelector('#SignUp');
    LoginForm.style.display = 'flex';
    SignUpForm.style.display = 'none';
    const ForgetForm = document.querySelector('#ForgetPassword');
    ForgetForm.style.display = 'none';
}
function ForgetPasswordButton() {
    const LoginForm = document.querySelector('#Login');
    const SignUpForm = document.querySelector('#SignUp');
    LoginForm.style.display = 'none';
    SignUpForm.style.display = 'none';
    const ForgetForm = document.querySelector('#ForgetPassword');
    ForgetForm.style.display = 'flex';
}
function deleteThis(x) {
    const bookMarkSection = document.querySelector('#BookMarks');
    bookMarkSection.removeChild(x.parentNode);
    let arr = JSON.parse(localStorage.getItem('BookMarks'));
    let index = arr.indexOf(x.parentNode.id);
    arr.splice(index, 1);
    localStorage.setItem('BookMarks', JSON.stringify(arr))
}
function AddToBookMark(id) {
    showBookMark(id);
    if (!localStorage.getItem('BookMarks'))
        localStorage.setItem('BookMarks', JSON.stringify([]))
    let arr = JSON.parse(localStorage.getItem('BookMarks'));
    arr.push(id);
    localStorage.setItem('BookMarks', JSON.stringify(arr))
}
function showBookMark(id) {
    const bookMarkSection = document.querySelector('#BookMarks');
    dataFetchByIdOfMovie(id).then((data) => {
        bookMarkSection.innerHTML += `<div class="BookMark" id="${id}"><img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="😂">
        <h4 style="font-weight:bold;width: 65%;overflow: hidden;color:#000;height:20px">${data.title}</h4>
        <a onclick="deleteThis(this)"><i class="fa-solid fa-trash-can" style="color:#000;"></i></a></div>`;
    })
}
function loadBookMarks() {
    if (localStorage.getItem('BookMarks')) {

        let arr = JSON.parse(localStorage.getItem('BookMarks'));
        arr.forEach(a => {
            showBookMark(a);
        })
    }
}
function faqtoggle(x) {
    const faqs = document.querySelectorAll(".faq");
    if (x.className === "active-faq-question") {
        x.className = "";
        x.nextElementSibling.className = "";
        x.children[1].style.transform = "";
    } else {
        x.className = "active-faq-question";
        x.nextElementSibling.className = "active-faq-answer";
        x.children[1].style.transform = "rotate(180deg)";
    }
    faqs.forEach((y) => {
        if (y.children[0].className === "active-faq-question" && y != x.parentNode) {
            y.children[0].className = "";
            y.children[1].className = "";
        }
    });
}
function MovieCatagoryClick(x, catagoryID) {
    MovieListClick();
    const catagories = document.querySelectorAll('.catagories > a');
    catagories.forEach(c => { c.className = ""; })
    x.className = "active";
    PopulateMoviesList(catagoryID);
}
function TvCatagoryClick(x, catagoryID) {
    TVListClick();
    const catagories = document.querySelectorAll('.catagories > a');
    catagories.forEach(c => { c.className = "" })
    x.className = "active";
    PopulateTvList(catagoryID);
}
let page = 1;
function PopulateTvList(id) {
    page  = 1;
    const tvCategorySection = document.querySelector('#tv-section-by-catagories');
    tvCategorySection.innerHTML = "";
    dataFetchByGenOfTv(page,id).then(data=>
        {
            LineTvPaintNormal(tvCategorySection ,data);
            tvCategorySection.innerHTML += `<a onclick="loadTvMore(this,${id})">Load more</a>`;
        });
}
function PopulateMoviesList(id) {
    page  = 1;
    const MovieCategorySection = document.querySelector('#movies-section-by-catagories');
    MovieCategorySection.innerHTML = "";
    dataFetchByGenOfMovie(page,id).then(data=>
        {
            LineMoviePaintNormal(MovieCategorySection ,data);
            MovieCategorySection.innerHTML += `<a onclick="loadMovieMore(this,${id})">Load More</a>`;    
        });
    }
    function loadTvMore(x,id)
    {
        const tvCategorySection = document.querySelector('#tv-section-by-catagories');
        x.parentNode.removeChild(x);
        dataFetchByGenOfTv(++page,id).then(data=>
            {
                LineTvPaintNormal(tvCategorySection ,data);
                tvCategorySection.innerHTML += `<a onclick="loadTvMore(this,${id})">Load more</a>`;
            });
    }
    function loadMovieMore(x,id)
    {
    const MovieCategorySection = document.querySelector('#movies-section-by-catagories');

        x.parentNode.removeChild(x);
        dataFetchByGenOfMovie(++page,id).then(data=>
            {
                LineMoviePaintNormal(MovieCategorySection ,data);
                MovieCategorySection.innerHTML += `<a onclick="loadMovieMore(this,${id})">Load More</a>`;
            });
    }