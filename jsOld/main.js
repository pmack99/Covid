//Decalring the Different Variable and Objects
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let statistic_taken_at = document.getElementById("statistic_taken_at");
let table = document.getElementById('countries_stat')

// Fetching the Data from the server

//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
    }
})
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;
    statistic_taken_at.innerHTML = data.statistic_taken_at;
    

})).catch(err => {
    console.log(err);
});

//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
    }
})
.then(response => response.json().then(data =>{
    console.log(data)
    let countries_stat = data.countries_stat;
//Getting all the country statistic using a loop
    for(let i = 0; i<countries_stat.length;i++){
        console.log(countries_stat[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let new_cases = row.insertCell(2);
        let deaths = row.insertCell(3);
        let new_deaths = row.insertCell(4);
        let serious_critical = row.insertCell(5);
        let recovered_per_country = row.insertCell(6);
        let total_cases_per_1m_population = row.insertCell(7);

        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        new_cases.innerHTML = countries_stat[i].new_cases;
        deaths.innerHTML = countries_stat[i].deaths;
        new_deaths.innerHTML = countries_stat[i].new_deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered;
        total_cases_per_1m_population.innerHTML = countries_stat[i].total_cases_per_1m_population;

    }
}))
.catch(err => {
    console.log(err);



});


