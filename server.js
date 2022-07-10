const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const cupWinners = {
    'montreal canadiens': {
        'wins': 24,
        'lastWin': 1993,
    },
    'toronto maple leafs': {
        'wins': 23,
        'lastWin': 1967,
    },
    'detroit red wings': {
        'wins': 11,
        'lastWin': 2008,
    },
    'boston bruins': {
        'wins': 6,
        'lastWin': 2011,
    },
    'chicago blackhawks': {
        'wins': 6,
        'lastWin': 2015,
    },
    'ddmonton oilers': {
        'wins': 5,
        'lastWin': 1990,
    },
    'pittsburgh penguins': {
        'wins': 5,
        'lastWin': 2017,
    },
    'new york rangers': {
        'wins': 4,
        'lastWin': 1994,
    },
    'new york islanders': {
        'wins': 4,
        'lastWin': 1983,
    },
    'new jersey devils': {
        'wins': 3,
        'lastWin': 2003,
    },
    'tampa bay lightning': {
        'wins': 3,
        'lastWin': 2021,
    },
    'colorado avalanche': {
        'wins': 3,
        'lastWin': 2022,
    },
    'philadelphia flyers': {
        'wins': 2,
        'lastWin': 1975,
    },
    'los angeles king': {
        'wins': 2,
        'lastWin': 2014,
    },
    'dallas stars': {
        'wins': 1,
        'lastWin': 1999,
    },
    'st. louis blues': {
        'wins': 1,
        'lastWin': 2019,
    },
    'calgary flames': {
        'wins': 1,
        'lastWin': 1989,
    },
    'caroline hurricanes': {
        'wins': 1,
        'lastWin': 2006,
    },
    'anaheim ducks': {
        'wins': 1,
        'lastWin': 2007,
    },
    'washington capitals': {
        'wins': 1,
        'lastWin': 2018,
    },
    'no wins': {
        'wins': 0,
        'lastWin': 'never'
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:team', (request,response)=> {
    const team = request.params.team.toLowerCase()
    if (cupWinners[team]) {
        response.json(cupWinners[team])
    } else {
        response.json(cupWinners['no wins'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})