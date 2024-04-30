export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.503215',
      bl_lng: '25.324261',
      tr_lat: '42.869652',
      tr_lng: '44.552871',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'd9d98d4890msh1d7994cd5c078c8p1dec60jsn75f913f0915e',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
export const options2 = {
  headers: {
    'X-RapidAPI-Key': 'd9d98d4890msh1d7994cd5c078c8p1dec60jsn75f913f0915e',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
}