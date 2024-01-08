// const apiKey = "829abd2f59161186fe076a0bf306e719";
// const apiToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE";

/* api키 연결하고 데이터 받아오기 */
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE"
  }
};

const URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
// fetch(URL, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

const loadJsonMovieData = async (URL) => {
  try {
    const response = await fetch(URL, options);
    if (response.status === 200) {
      const data = await response.json();
      return data["results"];
    }
  } catch (error) {
    throw new HttpError(response);
  }
};

/* 카드 만드는 함수 */
const RenderCards = async (movieDataArr) => {
  try {
    let addHTML = ""; //
    let title; //영화 제목
    let voteAverage; //평점
    let overview; //내용 요약
    let posterPath; //포스터 이미지 경로

    movieDataArr.forEach((movieObj) => {
      //영화 데이터 배열 순회
      title = movieObj["title"]; //배열 내 객체의 ['key']값의 value 저장
      voteAverage = movieObj["vote_average"].toFixed(2); //소수점 2번째 자리까지만
      overview = movieObj["overview"];
      posterPath = movieObj["poster_path"];
      idValue = movieObj["id"];

      addHTML = `
              <div class="card" id="card"><p id="id" style="display:none">${idValue}<p>
              <img class="movie-img" src="https://image.tmdb.org/t/p/original/${posterPath}" alt="Movie Poster">
              <div class="movie-content">
              <div class="name-rating-box">
              <span class="movie-name">${title}</span>
              <span class="rating" id="rating">⭐ ${voteAverage}</span>
              </div>
              <p class="movie-overview">${overview}</p>
              </div>
              </div>
              `;

      document.getElementById("movie-cards-row").innerHTML += addHTML;

      /* 카드 클릭 시 ID alert창 띄우기 */
      const cards = document.querySelectorAll(".card"); //id값이 card인 요소들 모두 가져와서 배열에 저장

      /* 가져온 card 배열 순회하며 클릭 된 카드의 이벤트 생성 */
      cards.forEach((card) => {
        card.addEventListener("click", function (e) {
          target = e.currentTarget;
          const idValue = target.children[0].textContent; //id값 가져오기
          alert(`🎬Movie ID : ${idValue}`);
        });
      });
    });
  } catch (err) {
    (err) => {
      //통신 실패 시
      if (err instanceof HttpError && err.response.status == 404) {
        alert("통신 실패");
      } else {
        throw err;
      }
    };
  }
};

/* API를 활용하여 받아온 데이터로 구성한 카드 생성하기 */
const appendCard = async () => {
  let res;

  try {
    res = await loadJsonMovieData(URL); //loadJsonMovieData 함수로 데이터받아오기
    const movieDataArr = res; //영화값들만 저장. 객체로 구성된 배열 형태 [{}, {}, ... {}]
    RenderCards(movieDataArr); //받아온 데이터로 카드 RenderCard
  } catch (err) {
    (err) => {
      //통신 실패 시
      if (err instanceof HttpError && err.response.status == 404) {
        alert("통신 실패");
      } else {
        throw err;
      }
    };
  }
};

appendCard();

/* 검색한 조건에 맞는 영화 카드만 생성하기 */
const appendSearchedCard = async () => {
  const inputMovie = document.getElementById("input-movie").value.toLowerCase(); //사용자가 입력한 값
  document.getElementById("movie-cards-row").innerHTML = ""; //HTML을 비운 상태로 설정

  let res;
  try {
    res = await loadJsonMovieData(URL); //loadJsonMovieData 함수로 데이터받아오기
    const movieDataArr = res; //영화값들만 저장. 객체로 구성된 배열 형태 [{}, {}, ... {}]

    const titleMatchArr = movieDataArr.filter((keys) => keys["title"].toLowerCase().includes(inputMovie)); //input으로 들어온 문자열을 포함하는 title을 갖고 있는 객체 추출
    RenderCards(titleMatchArr); //추출한 객체 배열들로 RenderCard

    if (titleMatchArr.length === 0) {
      //일치 검색 결과가 없을 때 유효성 검사
      alert("검색 결과가 없습니다.");
      appendCard();
    }
  } catch (err) {
    (err) => {
      //통신 실패 시
      if (err instanceof HttpError && err.response.status == 404) {
        alert("통신 실패");
      } else {
        throw err;
      }
    };
  }
};

/* Go버튼 누를 시 사용자가 입력한 input과 일치하는 영화 검색 */
const goBtn = document.getElementById("search-btn");
goBtn.addEventListener("click", async () => {
  appendSearchedCard();
});

/* input-movie요소에서 Enter 버튼 누를 시 사용자가 입력한 input과 일치하는 영화 검색 */
const inputEnterPressed = document.getElementById("input-movie");
inputEnterPressed.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    appendSearchedCard();
  }
});
