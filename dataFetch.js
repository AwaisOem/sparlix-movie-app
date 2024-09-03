let API_KEY = "<TMBD_API_KEY>";
async function dataFetchByCatagory(stri) {
  return await fetch(
    `https://api.themoviedb.org/3/movie${stri}?api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.log("fetch error"));
}
async function dataFetchByCatagoryOfTv(stri) {
  return await fetch(
    `https://api.themoviedb.org/3/tv${stri}?api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.log("fetch error"));
}
async function dataFetchByGenOfTv(Page , categoryId) {
  return await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${Page}&with_genres=${categoryId}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.log("fetch error"));
}
async function dataFetchByGenOfMovie(Page , categoryId) {
  return await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${Page}&with_genres=${categoryId}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.log("fetch error"));
}
async function dataFetchByIdOfTv(id) {
  return await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=images,credits,videos,recommendations,similar,episodes`
  )
    .then((resourse) => resourse.json())
    .then((data) => data);
}
async function dataFetchByEpisode(tv_id,currSea,currEpiso) {
  return await fetch(
    `https://api.themoviedb.org/3/tv/${tv_id}/season/${currSea}/episode/${currEpiso}?api_key=${API_KEY}`
  )
    .then((resourse) => resourse.json())
    .then((data) => data);
}
async function dataFetchByIdOfMovie(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=images,credits,videos,recommendations,similar`
  )
    .then((resourse) => resourse.json())
    .then((data) => data);
}
async function dataFetchByIdOfPerson(id) {
  return await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
  )
    .then((resourse) => resourse.json())
    .then((data) => data);
}
async function dataFetchByIdOfCompany(id) {
  return await fetch(
    `https://api.themoviedb.org/3/company/${id}?api_key=${API_KEY}`
  )
    .then((resourse) => resourse.json())
    .then((data) => data);
}
let MarvelMovieIds = [
  33, 241, 268, 278, 289, 301, 345, 364, 396, 403, 414, 415, 466, 475, 497, 521,
  526, 534, 559, 561, 600, 603, 616, 619, 636, 644, 652, 702, 819, 820, 1124,
  1250, 1251, 1271, 1273, 1372, 70, 75, 78, 272, 296, 298, 299, 795, 155, 161,
  163, 182, 203, 752, 767, 2139, 2135, 2133, 2162, 221, 227, 311, 314, 4628,
  4823, 4858, 4925, 5236, 5375, 5491, 5503, 5551, 5825, 5917, 5919, 6023, 6463,
  6949, 5172, 8438, 11153, 11170, 5123, 5146, 7459, 4722, 4922, 9944, 10195,
  10201, 8487, 10339, 5652, 10843, 9618, 10952, 7270, 6479, 9906, 10066, 10229,
  10242, 13411, 9708, 10326, 11977, 11983, 12444, 12508, 10341, 10386, 12610,
  10731, 5517, 11950, 7840, 10907, 13167, 13223, 11002, 11011, 11068, 9417,
  9425, 9705, 11542, 11546, 11943, 6519, 11934, 11933, 12445, 13960, 12697,
  5683, 15301, 15342, 13183, 11025, 16007, 13370, 11331, 16933, 11821, 18402,
  11962, 11979, 13732, 19380, 10877, 5851, 20002, 20006, 20007, 20329, 20726,
  20802, 20813, 20849, 21683, 21711, 23051, 22543, 22584, 22787, 22797, 22825,
  22832, 22874, 22954, 23168, 23330, 23759, 23957, 24798, 26319, 29973, 23098,
  23107, 28569, 31511, 23077, 26378, 36818, 37626, 26331, 24405, 41394, 41762,
  42658, 42659, 49521, 41357, 41515, 45243,50056,50073,50078,50107,50219,50231,
  50379,50415,50512,50675,50929 ,52227 ,52228 , 52229
];











let movie_catagories = [
  {name:"Adventure",id:12},{name:"Action",id:28},{name:"Comedy",id:35},{name:"Thriller",id:53},{name:"Fantsy",id:14}
  ,{name:"Western",id:37},{name:"Science Fiction",id:878},{name:"War",id:10752},{name:"TV Movie",id:10770},{name:"Romance",id:10749}
  ,{name:"Animation",id:16},{name:"Drama",id:18},{name:"Documentary",id:99},{name:"Crime",id:80}
  ,{name:"Mystery",id:9648},{name:"Music",id:10402},{name:"Horror",id:27},{name:"History",id:36},{name:"Family",id:10751}
];
let tv_catagories = [
  {name:"Action & Adventure",id:10759},{name:"Animation",id:16},{name:"Sci-Fi & Fantasy",id:10765},{name:"War & Politics",id:10768},{name:"Western",id:37},
  {name:"Comedy",id:35},{name:"Documentary",id:99},{name:"News",id:10763},{name:"Talk",id:10767},{name:"Soap",id:10766},
  {name:"Crime",id:80},{name:"Family",id:10751},{name:"Drama",id:18},{name:"Reality",id:10764},{name:"Mystery",id:9648},
  {name:"Kids",id:2}
];
let FAQs = [
  {
    id: "Q1",
    question: "What are the main features?",
    answer:
      "You can Watch movies and tv shows here. yoou can bookmark it for future use. Switch servers and download movies and tv shows find anny movie through smart search. And in future you can able to perform actions through your voice commands.you can also change themes and see informations about actors and other stuff.",
  },
  {
    id: "Q2",
    question: "Why there is no content showing?",
    answer:
      "Be patient. Actually in this Single page website you cann't see loading at all soo there is some processing running behind the scene so you have to wait untill content is loaded and ready to serve.Untill that you can sing a song or chat with our voice assistance like about weather or his own intros😅.",
  },
  {
    id: "Q3",
    question: "Cann't Able to run it?",
    answer:
      "Maybe there are server problems or stuff is removed. Click on play button or any episode and then be patient sometimes it will redirect to ads just close them and back to main tab sometimes it will take some time to load but when loading is completed you can watch that or download that. you can also change servers",
  },
  {
    id: "Q4",
    question: "How to contact for queries?",
    answer:
      "You can directly Whatsapp or email us or use any social media,You can also ask to voice assistant(OeM!) or click on team or about developer options to contact through their websites.",
  },
  {
    id: "Q5",
    question: "That is so good I like your efforts😊",
    answer:
      "Thank You So much thats means a lot to me🥰. If your a technical person you can follow me on github for your contributions in similar projects and also this project",
  },
];
