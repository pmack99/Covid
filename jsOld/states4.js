let table = document.getElementById('usa')

fetch("https://covidtracking.com/api/states", {
	"method": "GET",

})

.then(response => response.json().then(data =>{
    console.log(data)
    
//Getting all the country statistic using a loop
    for(let i = 0; i<data.length;i++){
        console.log(data[i]);


        
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let lastUpdateEt = row.insertCell(0);
        let state = row.insertCell(1);
        let positive = row.insertCell(2);
        let negative = row.insertCell(3);
        let hospitalized = row.insertCell(4);
        let death = row.insertCell(5);
        let total = row.insertCell(6);
        

        state.innerHTML = data[i].state;
        positive.innerHTML = data[i].positive;
        negative.innerHTML = data[i].negative;
        hospitalized.innerHTML = data[i].hospitalized;
        death.innerHTML = data[i].death;
        total.innerHTML = data[i].total;
        lastUpdateEt.innerHTML = data[i].lastUpdateEt;
      

    }
}));


