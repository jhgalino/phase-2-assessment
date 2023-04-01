export const useGames = () => useState('games', () => [],);
export const useGamesCache = () => useState('gameCache', () => [],);

export function fetchGames () {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
    query: {},
  };

  
}