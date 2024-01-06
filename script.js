const apiKey = "829abd2f59161186fe076a0bf306e719";
const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE"

/* api키 연결하고 데이터 받아오기 */
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 829abd2f59161186fe076a0bf306e719.eyJhdWQiOiI4MjlhYmQyZjU5MTYxMTg2ZmUwNzZhMGJmMzA2ZTcxOSIsInN1YiI6IjY1OTk1Nzg5YmQ1ODhiMDIwNDU3NTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.014IzV6JFQswTqZDfeIjHDud_khco-fa3a_GOd4V2gE'
    }
};

const URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// fetch(URL, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


const appendCard = async () => {
    let res;

    try {
        res = await loadJson(URL); //loadJson 함수로 데이터받아오기
        const DATA = res //변수에저장  
        //반복문돌면서 객체 순회해서 각 값 넣어서 카드 붙이기
        let movieDataArr = DATA['results'] //영화값들만 저장. 객체로 구성된 배열 형태 [{}, {}, ... {}]
        console.log(movieDataArr[0]);
        let addHTML = ''; //
        let title; //영화 제목
        let voteAverage; //평점
        let overview; //내용 요약
        let posterPath; //포스터 이미지 경로

        

        movieDataArr.forEach(i => {
            title = i['original_title'];
            voteAverage = i['vote_average'].toFixed(2); //소수점 2번째 자리까지만
            overview = i['overview'];
            posterPath = i['poster_path'];

            // console.log(i[`original_title`]) //배열의 i번째의 'original_title' 키에 접근.
            addHTML = `
            <div class="card">
                    <img class="movie-img" src="https://image.tmdb.org/t/p/original/${posterPath}">
                <div class="movie-content">
                    <div class="name-rating-box">
                        <span class="movie-name">${title}</span>
                        <span class="rating">⭐ ${voteAverage}</span>
                    </div>
                    <p class="movie-overview">${overview}</p>
                </div>
            </div>
            `;
            // document.querySelector('.movie-cards-row').empty();
            document.getElementById("movie-cards-row").innerHTML += addHTML
        });
        


    } catch (error) {

    }
}


const loadJson = async (URL) => {
    const response = await fetch(URL);
    if (response.status === 200) {
        let data = response.json();
        return data;
    } {
        // throw new HttpError(response);
    }
}

appendCard();