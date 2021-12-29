//---------task1---------------
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    // console.log(data[0].region);

    console.log("asian countries : " + data.filter((data) => data.region === "Asia").map((country)=>country.name));

    console.log("population less than 200000 : " + data.filter((data) => data.population < 200000).map((country)=>country.name));

    data.forEach(element => {
        console.log(`Name : ${element.name} , Capital : ${element.capital} , Flag : ${element.flag}`);
    });

    console.log("Total Population : " + data.reduce((sum,element)=> sum + element.population , 0));


    // For printing countries which are having US dollar as currency

    // const filteredData = data.filter(element => element.currencies[0].symbol == '$');
    // filteredData.map(data => console.log(data))

    // console.log(data.filter((element) => element.currencies));
    // console.log(data[0].currencies[0].code);
    // console.log(data.filter(element => {
    //     if(element.currencies[0].symbol == "$") 
    //      {
    //          console.log(element.name);
    //      }
    // }));
    const filtered = data.filter(element => element.currencies && element.currencies[0].symbol == '$')
    filtered.map(country => console.log(country.name))

}
