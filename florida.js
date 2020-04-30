let table = document.getElementById('usa')
let table2 = document.getElementById('counties')
let flChart = document.getElementById('flChart').getContext('2d')

fetch('https://covidtracking.com/api/states/daily?state=FL', {
  method: 'GET',
}).then((response) =>
  response.json().then((data) => {
    // console.log(data)

    //Getting all the state data using a loop
    for (let i = 0; i < data.length; i++) {
      console.log(data[i])

      //we will start by inserting the new rows inside our table
      let row = table.insertRow(i + 1)
      let date = row.insertCell(0)
      let positive = row.insertCell(1)
      let negative = row.insertCell(2)
      let pending = row.insertCell(3)
      let hospitalized = row.insertCell(4)
      let death = row.insertCell(5)
      let total = row.insertCell(6)

      date.innerHTML = data[i].date
      positive.innerHTML = data[i].positive
      negative.innerHTML = data[i].negative
      pending.innerHTML = data[i].pending
      hospitalized.innerHTML = data[i].hospitalized
      death.innerHTML = data[i].death
      total.innerHTML = data[i].total
    }
  }),
)

Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 18
Chart.defaults.global.defaultFontColor = 'black'

let newChart = new Chart(flChart, {
  type: 'bar',
  data: {
    labels: [
      '3/4',
      '3/5',
      '3/6',
      '3/7',
      '3/8',
      '3/9',
      '3/10',
      '3/11',
      '3/12',
      '3/13',
      '3/14',
      '3/15',
      '3/16',
      '3/17',
      '3/18',
      '3/19',
      '3/20',
      '3/21',
      '3/22',
      '3/23',
      '3/24',
      '3/25',
      '3/26',
      '3/27',
      '3/28',
      '3/29',
      '3/30',
      '3/31',
      '4/1',
      '4/2',
      '4/3',
      '4/4',
      '4/5',
      '4/6',
      '4/7',
      '4/8',
      '4/9',
      '4/10',
      '4/11',
      '4/12',
      '4/13',
      '4/14',
      '4/15',
      '4/16',
      '4/17',
      '4/18',
      '4/19',
      '4/20',
      '4/21',
      '4/22',
      '4/23',
      '4/24',
      '4/25',
      '4/26',
      '4/27',
      '4/28',
      '4/29',
    ],
    datasets: [
      {
        label: 'Positive',
        data: [
          2,
          9,
          9,
          14,
          17,
          18,
          19,
          28,
          32,
          50,
          77,
          116,
          141,
          186,
          314,
          390,
          520,
          658,
          830,
          1171,
          1412,
          1682,
          2355,
          2765,
          3763,
          4246,
          5473,
          6338,
          6955,
          8010,
          9585,
          11111,
          12151,
          13324,
          14747,
          15455,
          16364,
          17531,
          18494,
          19355,
          20601,
          21367,
          22511,
          22897,
          24119,
          25269,
          25996,
          26660,
          27495,
          28309,
          28832,
          30174,
          30839,
          31528,
          32138,
          32846,
          33193,
        ],

        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderWidth: '2',
        hoverBorderColor: 'black"',
      },
      {
        label: 'Deaths',
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          3,
          4,
          6,
          7,
          8,
          10,
          12,
          13,
          14,
          18,
          22,
          28,
          34,
          54,
          56,
          63,
          77,
          87,
          128,
          163,
          191,
          218,
          236,
          296,
          309,
          354,
          390,
          438,
          465,
          483,
          537,
          609,
          646,
          699,
          754,
          781,
          806,
          856,
          910,
          979,
          1031,
          1075,
          1094,
          1101,
          1154,
          1240,
        ],
        type: 'line',

        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black"',
      },
      {
        label: 'Hospitalized',
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          158,
          185,
          217,
          259,
          316,
          406,
          456,
          526,
          594,
          652,
          823,
          949,
          1123,
          1287,
          1462,
          1572,
          1682,
          1999,
          2062,
          2268,
          2487,
          2661,
          2772,
          2833,
          3060,
          3344,
          3460,
          3665,
          3842,
          3930,
          4010,
          4235,
          4469,
          4693,
          4888,
          5045,
          5155,
          5211,
          5266,
          5624,
        ],
        type: 'line',

        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'grey',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black"',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'FL COVID-19 Chart',
      color: 'red',
      fontSize: 25,
    },
  },
})

//Fetching The Case by Country Data
fetch(
  'https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Cases/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  {
    method: 'GET',
  },
)
  .then((response) =>
    response.json().then((data) => {
      console.log(data)
      let counties = data.features

      for (let i = 0; i < counties.length; i++) {
        console.log(counties[i])

        let row = table2.insertRow(i + 1)
        let County_1 = row.insertCell(0)
        let PUIsTotal = row.insertCell(1)
        let CasesAll = row.insertCell(2)
        let C_Men = row.insertCell(3)
        let C_Women = row.insertCell(4)
        let TPositive = row.insertCell(5)
        let TNegative = row.insertCell(6)
        let Deaths = row.insertCell(7)

        County_1.innerHTML = counties[i].attributes.County_1
        PUIsTotal.innerHTML = counties[i].attributes.PUIsTotal
        CasesAll.innerHTML = counties[i].attributes.CasesAll
        C_Women.innerHTML = counties[i].attributes.C_Women
        C_Men.innerHTML = counties[i].attributes.C_Men
        TNegative.innerHTML = counties[i].attributes.TNegative
        TPositive.innerHTML = counties[i].attributes.TPositive
        Deaths.innerHTML = counties[i].attributes.Deaths
      }
    }),
  )
  .catch((err) => {
    console.log(err)
  })
