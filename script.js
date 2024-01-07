const apiKey = "829abd2f59161186fe076a0bf306e719";
const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE"

/* api키 연결하고 데이터 받아오기 */
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE'
    }
};

const URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// fetch(URL, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

const loadJson = async (URL) => {
    const response = await fetch(URL, options);
    if (response.status === 200) {
        let data = response.json();
        return data;
    } {
        // throw new HttpError(response);
    }
}

/* API를 활용하여 받아온 데이터로 구성한 카드 생성하기 */
const appendCard = async () => {
    let res;

    try {
        res = await loadJson(URL); //loadJson 함수로 데이터받아오기
        const DATA = res //변수에저장  

        let movieDataArr = DATA['results'] //영화값들만 저장. 객체로 구성된 배열 형태 [{}, {}, ... {}]
        // console.log(movieDataArr[0]);
        let addHTML = ''; //
        let title; //영화 제목
        let voteAverage; //평점
        let overview; //내용 요약
        let posterPath; //포스터 이미지 경로

        movieDataArr.forEach(movieObj => { //영화 데이터 배열 순회
            title = movieObj['original_title']; //배열 내 객체의 ['key']값의 value 저장
            voteAverage = movieObj['vote_average'].toFixed(2); //소수점 2번째 자리까지만
            overview = movieObj['overview'];
            posterPath = movieObj['poster_path'];
            idValue = movieObj['id'];

            addHTML = `
            <div class="card" id="card"><p id="id" style="display:none">${idValue}<p>
            <img class="movie-img" src="https://image.tmdb.org/t/p/original/${posterPath}">
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
        });


        /* 카드 클릭 시 ID alert창 띄우기 */
        let cards = document.querySelectorAll('.card'); //id값이 card인 요소들 모두 가져와서 배열에 저장
        // console.log(card);

        cards.forEach(card => { //가져온 card 배열 순회하며 클릭 된 카드의 이벤트 생성
            card.addEventListener('click', function (e) {
                target = e.currentTarget;
                let idValue = target.children[0].textContent; //id값 가져오기
                alert(`🎬Movie ID : ${idValue}`)
            });

        });

    } catch (err) {
        err => { //통신 실패 시
            if (err instanceof HttpError && err.response.status == 404) {
                alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
            } else {
                throw err;
            }
        }
    }
}


appendCard();


/*
const showID = async () => {
    //카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
    // 무슨 데이터가 필요할까 ? 1. json에서 받아온데이터에서 id값.
    // 
    // 2. 클릭한 요소의 id값
    // 로직
    // 1. 일단 데이터 받아와서 저장?
    // 2. 클릭 이벤트로 클릭한 카드 요소 id값 가져오기
    // 3. alert로 출력

    let res;

    try {
        res = await loadJson(URL); //loadJson 함수로 데이터받아오기
        const DATA = res //변수에저장  
        let movieDataArr = DATA['results'];
        movieDataArr.forEach(i => {
            idValue = i['id'];
        });
        

        let keyEqualsId = movieDataArr.map((keys) => keys['id']) //key:id 인 값들만 배열 새로 반환 0:234 , 1:342
        console.log(keyEqualsId);

        


    } catch (error) {

    }
    */
