// https://opentdb.com/api.php?amount=10


async function loadQuestion(){
    const APIUrl ='https://opentdb.com/api.php?amount=1' ;
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    console.log(data.results[0]);
}

loadQuestion();