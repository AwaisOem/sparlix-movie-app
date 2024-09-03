// painting component
function LineMoviePaint(component, f, str) {
  f(str).then((data) => {
    data.forEach((element) => {
      component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
        }" alt="./img/placeholder.png" draggable="true" onclick="MovieCardClicked(${element.id
        })">
        <a onclick="MovieCardClicked(${element.id
        })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.title
        }</a>
        <div style="display:flex;justify-content: space-between;"><span>${element.release_date.slice(
          0,
          4
        )} • ${Math.round(element.vote_average)} <i class="fa fa-star"
                    style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a onclick="MovieListClick()" >movie</a></div></div>`;
    });
  });
}
function SingleMoviePaint(component, element) {
  component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
    }" alt="./img/placeholder.png" draggable="true" onclick="MovieCardClicked(${element.id
    })">
        <a onclick="MovieCardClicked(${element.id
    })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.title
    }</a>
        <div style="display:flex;justify-content: space-between;"><span>${element.release_date.slice(0, 4)} • ${Math.round(element.vote_average)} <i class="fa fa-star"
                    style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a onclick="MovieListClick()">movie</a></div></div>`;
}
function LineMoviePaintNormal(component, d) {
  d.forEach((element) => {
    component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
      }" alt="./img/placeholder.png" draggable="true" onclick="MovieCardClicked(${element.id
      })">
        <a onclick="MovieCardClicked(${element.id
      })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.title
      }</a>
        <div style="display:flex;justify-content: space-between;">
        <span>${element.release_date.slice(0, 4)} • ${Math.round(element.vote_average)} <i class="fa fa-star"
                    style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a onclick="MovieListClick()">movie</a></div></div>`;
  });
}
function SingleTVPaint(component, element) {
  component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
    }" alt="./img/placeholder.png" draggable="true" onclick="TVCardClicked(${element.id
    })">
        <a onclick="TVCardClicked(${element.id
    })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.name
    }</a>
        <div style="display:flex;justify-content: space-between;"><span>${element.first_air_date.slice(0, 4)} • ${Math.round(element.vote_average)}<i class="fa fa-star"
          style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a  onclick="TVListClick()">tv</a></div></div>`;
}
function LineTvPaint(component, f, str) {
  f(str).then((data) => {
    data.forEach((element) => {
      component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
        }" alt="./img/placeholder.png" draggable="true" onclick="TVCardClicked(${element.id
        })">
        <a onclick="TVCardClicked(${element.id
        })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.name
        }</a>
        <div style="display:flex;justify-content: space-between;"><span>${element.first_air_date.slice(
          0,
          4
        )} • ${Math.round(element.vote_average)} <i class="fa fa-star"
                    style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a onclick="TVListClick()" >tv</a></div></div>`;
    });
  });
}
function LineTvPaintNormal(component, d) {
  d.forEach((element) => {
    component.innerHTML += `<div class="movie-card" id="${element.id}">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path
      }" alt="./img/placeholder.png" draggable="true" onclick="TVCardClicked(${element.id
      })">
        <a onclick="TVCardClicked(${element.id
      })" style="font-weight:bold;font-size:1.1rem;height: 1.3rem;overflow: hidden;width: 165px;">${element.name
      }</a>
        <div style="display:flex;justify-content: space-between;">
        <span>${element.first_air_date.slice(0, 4)} • ${Math.round(element.vote_average)} <i class="fa fa-star"
                    style="font-size:15px;color: rgb(222, 189, 2);"></i></span><a onclick="TVListClick()">tv</a></div></div>`;
  });
}
// home page painting
let paintHomePage = () => {
  const NowPlaying = document.querySelector("[data-NowPlaying]");
  const Popular = document.querySelector("[data-Popular]");
  const Upcoming = document.querySelector("[data-Upcoming]");
  const Sci = document.querySelector("[data-Sci]");
  const popularMovie = document.querySelector("[data-Horror]");
  const TopThiller = document.querySelector("[data-TopThiller]");
  const Kids = document.querySelector("[data-Kids]");
  LineMoviePaint(NowPlaying, dataFetchByCatagory, "/now_playing");
  LineTvPaint(Popular, dataFetchByCatagoryOfTv, "/popular");
  LineMoviePaint(Upcoming, dataFetchByCatagory, "/upcoming");
  LineTvPaint(Kids, dataFetchByCatagoryOfTv, "/top_rated");
  LineMoviePaint(popularMovie,dataFetchByCatagory , "/popular");
  LineTvPaint(TopThiller, dataFetchByCatagoryOfTv, "/on_the_air");
};

// paint movie page
let paintMoviePage = (idOfMovie) => {
  const banner = document.querySelector(".banner-area  >img ");
  const poster = document.querySelector(".name-section-of-movie >img ");
  const title = document.querySelector("[data-Movie-title]");
  const stats = document.querySelector("[data-Movie-Stats]");
  const disc = document.querySelector("[data-Movie-Discription]");
  const trailer = document.querySelector("#movie-content-screen  > iframe");
  const buttons = document.querySelector(".button-section-of-movie");
  const tagBox = document.querySelector(".tag-section-of-movie");
  const CastBox = document.querySelector("[data-Movie-Cast]");
  const SimilarBox = document.querySelector("[data-Movie-Similar]");
  const RecomBox = document.querySelector("[data-Movie-Recommendation]");
  poster.src = ``;
  banner.src = ``;
  trailer.src = ``;
  tagBox.innerHTML = "";
  CastBox.innerHTML = "";
  SimilarBox.innerHTML = "";
  RecomBox.innerHTML = "";
  dataFetchByIdOfMovie(idOfMovie).then(data => {
    poster.src = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    banner.src = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
    title.innerHTML = data.original_title;
    stats.innerHTML = `${Math.floor(data.runtime / 60)}h ${Math.floor(data.runtime % 60)}min • ${data.release_date} • ${data.vote_average} <i class="fa fa-star" style="font-size:15px;color: rgb(222, 189, 2);"></i>`;
    disc.innerHTML = data.overview;
    trailer.src = `https://www.youtube.com/embed/${data.videos.results[0].key}`;
    buttons.innerHTML = `<a onclick='OpenIframePopup("https://www.2embed.to/embed/imdb/movie?id=${data.imdb_id}")'><i class="fa-solid fa-play"></i>Play</a><a onclick="AddToBookMark(${idOfMovie});alert('Movie is added successfully')" ><i class="fa fa-bookmark fa-fw"></i> Add to</a>`;
    for (let i = 0; i < data.genres.length; i++)
      tagBox.innerHTML += `<a onclick="MovieCatagoryClick(${data.genres[i].id})">${data.genres[i].name}</a>`;
    for (let i = 0; i < data.credits.cast.length; i++) {
      CastBox.innerHTML += `<div class="person-card">
        <img src="https://image.tmdb.org/t/p/w200${data.credits.cast[i].profile_path}" alt="./img/placeholder.png" draggable="true"  onclick="PersonCardClicked(${data.credits.cast[i].id})">
        <h3 style="font-weight:bold;font-size:1.1rem">${data.credits.cast[i].name}</h3>
        <p>${data.credits.cast[i].character}</p>
    </div>`;
    }
    LineMoviePaintNormal(SimilarBox, data.similar.results);
    LineMoviePaintNormal(RecomBox, data.recommendations.results);
  });
};
// paint tv page
let paintTvPage = (idOfTV) => {
  const banner = document.querySelector(".banner-area  >img ");
  const poster = document.querySelector(".name-section-of-movie >img ");
  const title = document.querySelector("[data-Movie-title]");
  const stats = document.querySelector("[data-Movie-Stats]");
  const disc = document.querySelector("[data-Movie-Discription]");
  const trailer = document.querySelector("#movie-content-screen  > iframe");
  const buttons = document.querySelector(".button-section-of-movie");
  const tagBox = document.querySelector(".tag-section-of-movie");
  const CastBox = document.querySelector("[data-Movie-Cast]");
  const SimilarBox = document.querySelector("[data-Movie-Similar]");
  const RecomBox = document.querySelector("[data-Movie-Recommendation]");
  poster.src = ``;
  banner.src = ``;
  trailer.src = ``;
  tagBox.innerHTML = "";
  CastBox.innerHTML = "";
  SimilarBox.innerHTML = "";
  RecomBox.innerHTML = "";
  dataFetchByIdOfTv(idOfTV).then(data => {
    poster.src = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    banner.src = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
    title.innerHTML = data.original_name;
    stats.innerHTML = `${data.number_of_episodes} Episodes • ${data.number_of_seasons} Seasons • ${data.vote_average} <i class="fa fa-star" style="font-size:15px;color: rgb(222, 189, 2);"></i>`;
    disc.innerHTML = data.overview;
    trailer.src = `https://www.youtube.com/embed/${data.videos.results[0].key}`;
    buttons.innerHTML = `<a onclick="OpenSeasonsPopup(${idOfTV})"><i class="fa-solid fa-play"></i>Seasons</a>`;
    for (let i = 0; i < data.genres.length; i++)
      tagBox.innerHTML += `<a onclick="TvCatagoryClick(${data.genres[i].id})">${data.genres[i].name}</a>`;
    for (let i = 0; i < data.credits.cast.length; i++) {
      CastBox.innerHTML += `<div class="person-card">
        <img src="https://image.tmdb.org/t/p/w200${data.credits.cast[i].profile_path}" alt="./img/placeholder.png" draggable="true"  onclick="PersonCardClicked(${data.credits.cast[i].id})">
        <h3 style="font-weight:bold;font-size:1.1rem">${data.credits.cast[i].name}</h3>
        <p>${data.credits.cast[i].character}</p>
    </div>`;
    }
    LineTvPaintNormal(SimilarBox, data.similar.results);
    RecomBox.innerHTML = `No Recommendations`
  });
};
// paint person page
let paintPersonPage = (idOfPerson) => {
  const image = document.querySelector("[data-Person-Image]");
  const name = document.querySelector("[data-Person-name]");
  const disc = document.querySelector("[data-Person-details]");
  const infoBox = document.querySelector(".person-info");
  dataFetchByIdOfPerson(idOfPerson).then(data => {
    disc.innerHTML = data.biography || "Not Available";
    name.innerHTML = data.name;
    image.src = `https://image.tmdb.org/t/p/w500${data.profile_path}`;
    infoBox.innerHTML =
      `
    <div>
    <h3>Gender</h3>
    <p>${(data.gender !== 1) ? "Male" : "Female"}</p>
    </div>
    <div>
    <h3>Popularity</h3>
    <p>${(data.popularity) ? data.popularity : "Not Available"}</p>
    </div>
    <div>
    <h3>place_of_birth</h3>
    <p>${(data.place_of_birth) ? data.place_of_birth : "Not Available"}</p>
    </div>
    <div>
    <h3>Birthday</h3>
    <p>${(data.birthday) ? data.birthday : "Not Available"}</p>
    </div>
    <div>
    <h3>Profession</h3>
    <p>${(data.known_for_department) ? data.known_for_department : "Not Available"}</p>
    </div>
    `;
  });
}
let FaqPaint = () => {
  const faqSection = document.querySelector(".faq-section");
  for (let i = 0; i < FAQs.length; i++) {
    const element = `<div class="faq">
          <div onclick="faqtoggle(this)" class="" id="${FAQs[i].id}">
              <h3>${FAQs[i].question}</h3>
              <i class="fa fa-caret-down"></i></div><div class="">${FAQs[i].answer}</div></div>`;
    faqSection.innerHTML += element;
  }
}