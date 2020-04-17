let dateArray = []
let positiveArray = []

function chartFetch() {
  fetch('https://covidtracking.com/api/us/daily', {
    method: 'GET',
  }).then(response =>
    response.json().then(data => {
      console.log(data)
    }),
  )

  Chart.defaults.global.defaultFontFamily = 'Lato'
  Chart.defaults.global.defaultFontSize = 18
  Chart.defaults.global.defaultFontColor = 'black'

  let usaChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],

          backgroundColor: 'green',
          borderWidth: 1,
          borderColor: 'black',
          hoverBorderWidth: '3',
          hoverBorderColor: 'black"',
        },
        {
          label: 'Deaths',
          data: [0, 0, 0, 0, 0, 0, 0, 27, 36, 39],
          type: 'line',

          backgroundColor: 'red',
          borderWidth: 3,
          borderColor: 'white',
          hoverBorderWidth: '3',
          hoverBorderColor: 'black',
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'USA COVID-19 cases',
        color: 'black',
        fontSize: 25,
      },
    },
  })
}

chartFetch()
