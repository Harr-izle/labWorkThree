const images = [
    {
        link:'https://media.istockphoto.com/id/521139269/photo/arsenal-football-club-emirates-stadium.jpg?s=1024x1024&w=is&k=20&c=GxStszwWVbz4UlSpw5EKBVmlttXNjPxabJ39JEzYJwY=',
        name:'Emirate Stadium',
        description: "The home of Arsneal football club",
        altText:'The home of Arsneal football club',
    },
    {
        link:'https://media.istockphoto.com/id/1331511616/photo/old-trafford-stadium-manchester-united-football-club.jpg?s=1024x1024&w=is&k=20&c=WuH1XfLgwJDEx3wnaQgIHYe9zWa8oH8j785BzaM4bW8=',
        name:'Old Trafford',
        description: "The home of Manchester United",
        altText:'The home of Manchester United',
    },
    {
        link:'https://media.istockphoto.com/id/1473328982/photo/manchester-city-etihad-stadium-30th-january-2023.jpg?s=1024x1024&w=is&k=20&c=5bkCBy2uIYJtujcqcnlhWN-gXbv-T-mm8uqOruJWOAo=',
        name:'Ethiad Stadium',
        description: "The home of Manchester City",
        altText:'The home of Manchester City',
    },
    {
        link:'https://media.istockphoto.com/id/1656978439/photo/tottenham-hotspur-stadium.jpg?s=1024x1024&w=is&k=20&c=fftwS-Ty5oSyvB9sSpkoWgx1ay5C_vh7bUcIMFCnOuM=',
        name:'Totteham Hotspurs Stadium ',
        description: "The home of Totteham Hotspurs",
        altText:'The home of Totteham Hotspurs',
    },
    {
        link:'https://media.istockphoto.com/id/1456216500/photo/everton-football-club-goodison-park.jpg?s=1024x1024&w=is&k=20&c=T0Idj9WwRfiayV1o13EsTbgFo-HHf1O4R2a4gsI77n0=',
        name:'Goodison Park',
        description: "The home of Everton",
        altText:'The home of Everton',
    },
    {
        link:'https://media.istockphoto.com/id/1656960567/photo/fulham-football-club-craven-cottage-stadium.jpg?s=1024x1024&w=is&k=20&c=N9hu8kqcbpwRH5b1c8__hIGzzhBQ8bGPeSE4XfRMyQc=',
        name:'Craven Cottage',
        description: "The home of Fulham",
        altText:'The home of Fulham',
    },
    {
        link:'https://media.istockphoto.com/id/1329014281/photo/wolverhampton-wanderers-football-club-molineux-stadium-england-uk.jpg?s=1024x1024&w=is&k=20&c=a9L3uTw434H6bjkTaSGFzxqQv4gJPX752fA-odSHc-U=',
        name:'Molineux Stadium',
        description: "The home of Wolverhampton Wanderers",
        altText:'The home of Wolverhampton Wanderers',
    },
    {
        link:'https://media.istockphoto.com/id/1456243363/photo/burnley-football-club-turf-moor-stadium.jpg?s=1024x1024&w=is&k=20&c=oHiahlb4Onw7c6gWadbFfXCZgwRGgFRUkhVltgFylsk=',
        name:'Turf Moor',
        description: "The home of Burnley",
        altText:'The home of Burnley',
    },
    {
        link:'https://www.shutterstock.com/shutterstock/photos/2090327476/display_1500/stock-photo-liverpool-merseyside-uk-dec-a-general-aerial-view-of-the-anfield-road-building-site-2090327476.jpg',
        name:'Anfeild Stadium',
        description: "The home of Liverpool",
        altText:'The home of Liverpool',
    },
    {
        link:'https://media.gettyimages.com/id/1494300618/photo/fc-barcelona-v-rcd-mallorca-laliga-santander.jpg?s=2048x2048&w=gi&k=20&c=SHoGLTtgvNYsyxryqW1zw8wpLzOc36B43OEV4-R3uGo=',
        name:'Sportify Camp Nou',
        description: "The home of FC Barcelon",
        altText:'The home of FC Barcelona',
    },
    {
        link:'https://media.istockphoto.com/id/2080410046/photo/santiago-bernabeu-stadium.jpg?s=1024x1024&w=is&k=20&c=VNvRf8eWRofkXOgPBVZ_XKZPys8PLY2F28ZAgvI3XWo=',
        name:'Santiago Bernabeu',
        description: "The home of Real Madrid",
        altText:'The home of Real Madrid',
    },
    {
        link:'https://media.istockphoto.com/id/1280304550/photo/signal-iduna-park-westfalenstadion.jpg?s=1024x1024&w=is&k=20&c=GrsNeVuJwRkDl5gw9mYLHElHB2EdnG7ewn1NbpQUUd0=',
        name:'Signal Iduna Park',
        description: "The home of Dortmund",
        altText:'The home of Dortmund',
    },
    

];
const thumbnailContainer = document.querySelector('.thumbnail-container');
const overlayContainer = document.getElementById("overlay")
const overlayImage = document.getElementById("overlay-image")
const overlayHeading = document.getElementById("overlay-heading")
const overlayDesc = document.getElementById("overlay-description")
const closeBtn = document.getElementById("close-btn")
const nextBtn = document.getElementById("next-btn")
const previousBtn = document.getElementById("previous-btn")

const displayImages = (data = []) => {
    thumbnailContainer.innerHTML = '';

    const newImages = data.length ? data : images;

    newImages.forEach((image, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('thumbnail-item');

        imageDiv.innerHTML = `
            <img src="${image.link}" alt="${image.altText}" />
            <p>${image.name}</p>
        `;
        thumbnailContainer.appendChild(imageDiv);
        imageDiv.addEventListener('click', () => showOverlay(index));
    });
}

const showOverlay = (index) => {
    const image = images[index];
    
    overlayImage.src = image.link
    overlayHeading.innerHTML = image.name
    overlayDesc.innerHTML = image.description
    
    overlayContainer.style.display = "flex"
    overlayContainer.style.opacity = "100"

    currentImageIndex = index
}

const closeOverlay = () => {
    overlayContainer.style.display = "none"
    overlayContainer.style.opacity = "0"

    currentImageIndex = null
}
const handleNext = () => {
    if(currentImageIndex < images.length - 1) {
        const image = images[currentImageIndex + 1];

        overlayImage.src = image.link
        overlayHeading.innerHTML = image.name
        overlayDesc.innerHTML = image.description
        
        currentImageIndex = currentImageIndex + 1
    }
}
const handlePrevious = () => {
    if(currentImageIndex > 0) {
        const image = images[currentImageIndex - 1];

        overlayImage.src = image.link
        overlayHeading.innerHTML = image.name
        overlayDesc.innerHTML = image.description
        
        currentImageIndex = currentImageIndex - 1
    }
}

closeBtn.addEventListener("click", () => closeOverlay())
nextBtn.addEventListener("click", handleNext)
previousBtn.addEventListener("click", handlePrevious)

displayImages()