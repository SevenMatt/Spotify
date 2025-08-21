document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Sleep Token', image: './img/Sleep-Token.jpg' },
        { name: 'Paramore', image: './img/Paramore.jpg' },
        { name: 'Killswitch Engage', image: './img/Killswitch-Engage.jpg' },
        { name: 'Fresno', image: './img/Fresno.jpg' },
        { name: 'System Of A Down', image: './img/system.jpg' },
        { name: 'Rogerio Skylab', image: './img/Rogerio-Skylab.jpg' }
    ];

    const albumsData = [
        { name: '5: The Gray Chapter', artist: 'Slipknot', image: './img/Slipknot-5-The-Gray-Chapter.jpg' },
        { name: 'Take Me Back To Eden', artist: 'Seep Token', image: './img/Take-Me-Back-To-Eden.jpg' },
        { name: 'Nightmare', artist: 'Avenged Sevenfold', image: './img/Nightmare.jpg' },
        { name: 'Leviathan', artist: 'Mastodon', image: './img/Mastodonleviathan.jpg' },
        { name: 'Black Sabbath', artist: 'Black Sabbath', image: './img/Black_Sabbath_debut_album.jpg' },
        { name: 'Homesick', artist: 'A Day To Remember', image: './img/A-Day-To-Remember.jpg' },
        { name: 'Animals As Leaders', artist: 'Animals As Leaders', image: './img/Animals-As-Leaders-Album.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)
    })

       albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        albumsGrid.appendChild(albumCard)
    })

})


