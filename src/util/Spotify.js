const clientId = '5b90662a40db47f1852e16397926f955'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
const endpoint = 'https://api.spotify.com/v1/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
          return accessToken;
        }
    
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }
      },
    async search(term) {
        const accessToken = await Spotify.getAccessToken();
        const response = await fetch(endpoint+'search/?q='+term+'&type=track', {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        }
        const trackList = jsonResponse.tracks.items.map(track => ({
            title: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            id: track.id,
            uri: track.uri

        }));
        return trackList;

    }
}
export default Spotify;