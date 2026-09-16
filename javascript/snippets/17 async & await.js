function sumAll() {
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
        sum += i;
    }
    console.log(sum);
}

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const body = await response.json();
        console.log(body);
    } catch (e) {
        console.log(e.message);
    }
    
    sumAll();
}

clear();

//sumAll();
fetchData();