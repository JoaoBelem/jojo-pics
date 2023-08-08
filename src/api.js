const url = 'http://localhost:8080';

export function PHOTO_POST(data) {
  return {
    url: url + '/photos',
    options: {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data),
      crossDomain: true
    },
  };
}

export function PHOTO_GET() {
  return {
    url: url + '/photos'
  };
}