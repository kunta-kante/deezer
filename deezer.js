// on commence par requpire le card bootstrap 
const albumData = [

    {
        title: "Recouvry",
        picture: "img/recouvry.jpeg",
        tracklist: "http://api.deezer.com/album/595243/tracks",
        albumpreview: "http://cdn-preview-d.deezer.com/stream/c-d28ee67c24d60e740866c7709d772f55-12.mp3",
    },

    {
        title: "Curtain Call: The Hits",
        picture: "img/curtaincall.jpeg",
        tracklist: "http://api.deezer.com/album/119606/tracks",
        albumpreview: "http://cdn-preview-c.deezer.com/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",

    },
    {
        title: "The Eminem Show",
        picture: "img/eminemshow.jpeg",
        tracklist: "http://api.deezer.com/album/103248/tracks",
        albumpreview: "http://cdn-preview-d.deezer.com/stream/c-d5a91f3cf9c2b399c9734223623a3c67-6.mp3",
    },
    {
        title: "The Marshall Mathers LP2",
        picture: "img/themarshall.jpeg",
        tracklist: "http://api.deezer.com/album/7090505/tracks",
        albumpreview: "http://cdn-preview-6.deezer.com/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3",
    },
];

function eminem() {
    cardsDiv.insertAdjacentHTML(`
<div class = "card" style="width: 18rem;">
<img src= "${albumData.picture} class="card-img-top">
<div class="card-body">
    <h5 class="card-title">${albumData.title}</h5>
    <a href="#" class="card-link">${albumData.tracklist}</a>
    <a href="#" class="card-link">${albumData.albumpreview}</a>
</div>`

    }


    document.querySelector('.album-list').innerHTML = `
<h1>albmu(${albumData.length})</h1>
${albumData.map(eminem).join('')}
`