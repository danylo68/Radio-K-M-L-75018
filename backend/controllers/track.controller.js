// const LastfmAPI = require('lastfmapi');
const fetch = require( "node-fetch" );


// exports.callLastFm = async (req, res) => {
//     const lfm = new LastfmAPI({
//         apiKey: '44f765121b8d2d596e531df846c82f9d',
//         apiSecret: '04f2dc0c918d29fad368ebe8f7327f6e',
//     });

//   try {
//     const apiUrl = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="+lfm+"&artist=Cher&album=Believe&format=json"; 
//     const track = await axios.get( apiUrl );
//         // const track = await lfm.track.getInfo({
//         //     'artist': 'Cher',
//         //     'track': ''
//         // });
//         res.json(track.data);
// //      
//         console.log(track.data);
//         // Vérifier si track est défini avant de renvoyer la réponse
//         if (track) {
//             return res.json({ track });
//         } else {
//             return res.status(404).json({ error: 'Aucune information trouvée pour'+ track });
//         }
//     }

//     catch (error) {
//         console.error(error);
//         return res.status(error.code || 500).json({ error: error.message });
//     }
// };




 exports.callLastFm = async (req, res) => {
  
   try {
     const apiUrl = "https://api.mixcloud.com/discover/funk/"
    //  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
     const response = await fetch( apiUrl );
     const data = await response.json();

  res.header('Content-Type', 'text/html');
    //  res.json(data);
   console.log( data );

       const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Data</title>
      </head>
      <body>
        <div>
          <h1>key: ${data.key}</h1>
          <h2>url: ${data.url}</h2>
          <p>name: ${data.name}</p>
        </div>
      </body>
    </html>
  `;
         res.json(html);  
            
    }
    catch (error) {
        console.error(error);
        return res.status(error.code || 500).json({ error: error.message });
    }
};





























