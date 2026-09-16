clear();

const fetchResult = fetch("https://jsonplaceholder.typicode.com/posts");

fetchResult
        // promise(fetch)가 성공했을 때 실행되는 함수
        .then( function( fetchResponse ) {
                // console.log(fetchResponse);
                // fetch의 http response body를 구해온다.
                const fetchBody = fetchResponse.json();
                console.log(fetchBody);

                return fetchBody;
        } )
        .then( function (body) {
                console.log(body);
        } )
        // promise(fetch)가 실패했을 때 실행되는 함수
        .catch ( function (fetchError) {
                console.log(fetchError);
        } );