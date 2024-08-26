const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Create goalkeeper and field players arrays for each team
// const [gk1, ...fieldPlayers1] = players1;
const gk1 = players1.at(0);
const fieldPlayers1 = players1.slice(1);

const gk2 = players2.at(0);
const fieldPlayers2 = players2.slice(1);

// 3. Create all players array
// const allPlayers = [...players1, ...players2];
const allPlayers = players1.concat(players2);

// 4. Create final array with all players
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic']);
