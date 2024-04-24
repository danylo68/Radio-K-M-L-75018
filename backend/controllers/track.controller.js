
// const LastfmAPI = require('lastfmapi');
// const { request, response } = require( "express" );


// verifier apikey si actif ::::::::::::::::::::::::::::::::::

// exports.callLastFm = async (req, res) => {
//     const lfm = new LastfmAPI({
//         apiKey: '44f765121b8d2d596e531df846c82f9d',
//         apiSecret: '04f2dc0c918d29fad368ebe8f7327f6e',
//     } );
  
//   const getArtist = {
//     artist: 'Cher',
//     album: 'Believe'
//   };

//   try {
    
//     const apiUrl = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="+lfm+"&"+getArtist+"&format=json";
//     const responseApi = await fetch( apiUrl, { credentials: 'include' } )
    
//     .then(res => res.json())
//   .then(responseApi => console.log(responseApi));
       
// //         res.json(responseApi );
// // //
// //         console.log(responseApi);
//         // Vérifier si track est défini avant de renvoyer la réponse
//         if (responseApi) {
//             return res.json({ responseApi });
//         } else {
//             return res.status(404).json({ error: 'Aucune information trouvée pour'+ responseApi });
//         }
//     }

//     catch (error) {
//         console.error(error);
//         return res.status(error.code || 500).json({ error: error.message });
//     }
// };



exports.callLastFm = async (req, res) => {
  const apiUrl = "https://api.mixcloud.com/spartacus/?metadata=1&_gl=1*1blu5xg*_ga*NTI1NTMwOTkyLjE3MTA1MTU5NTQ.*_ga_F1JH45MWZ3*MTcxMDUxNTk1NC4xLjEuMTcxMDUxNjA5OC42MC4wLjA.*_fplc*eXk1dHo1UG8ySHpTeUtjQUVJU3FOamJVZmExTGZidnVuZkxUVVlZMkFZeUx4N1lyRU9lRUMyTkNjSnc3SzlKbXdVTDZ5bzZNYTElMkZPMnI2JTJGSXhxWnBRckl4N1Q3Wm01N1l4bUo5OWMlMkIyNXJTSWpXWVBRS1pBUmY2aG9mQiUyQmclM0QlM0Q.";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('La demande à l\'API a échoué.');
    }
    const resdata = await response.json();
    console.log(resdata);
    // res.header('Content-Type', 'text/html');
    res.status(200).send(resdata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};



    //  console.log( dataApi );
      
  //      const html = `
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <title>Data</title>
  //     </head>
  //     <body>
  //       <div>
  //         <h1>key: ${dataApi.key}</h1>
  //         <h2>url: ${dataApi.url}</h2>
  //         <p>name: ${dataApi.name}</p>
  //       </div>
  //     </body>
  //   </html>
  // `;
  //     // res.header('Content-Type', 'text/html');
    //  res.send( dataApi );

























