module.exports = mongoose => {
    const PlayerModels = mongoose.model(
        "player",
        mongoose.Schema(
            // track:
            {
        name: String,
            mbid: String,
            url: String,
            duration: String,
            artist: {
                name: String,
                mbid: String,
                  url: String,
            },
          album: {
      artist: String,
            title: String,
      
      mbid: String,
      url: String,
      image: [Array],
      '@attr': [Object]
    },   
       
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return PlayerModels;
};



//   track: {
//     name: 'Nautilus',
//     mbid: 'cfb9501e-30b4-414c-b565-7b8b9653ec55',
//     url: 'https://www.last.fm/music/Bob+James/_/Nautilus',   
//     duration: '28000',
//     streamable: { '#text': '0', fulltrack: '0' },
//     listeners: '77353',
//     playcount: '246771',
//     artist: {
//       name: 'Bob James',
//       mbid: 'f4d2fc5a-cacb-47c8-b096-ee73864b1aa8',
//       url: 'https://www.last.fm/music/Bob+James'
//     },
//     album: {
//       artist: 'Bob James',
//       title: 'One',
//       mbid: '046ef962-dcd1-435a-bd08-e060c07bd3a5',
//       url: 'https://www.last.fm/music/Bob+James/One',
//       image: [Array],
//       '@attr': [Object]
//     },