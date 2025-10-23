const btn = document.getElementById('btn');
const searchInput = document.getElementById('search-input');
const imageContainer = document.getElementById('image-container');

btn.addEventListener("click", function(e){
    e.preventDefault();
    imageContainer.innerHTML = '';
    let searchvalue = searchInput.value;

    let http = new XMLHttpRequest();
    http.open('GET', `https://api.tenor.com/v1/search?q=${searchvalue}&key=LIVDSRZULELA&limit=8`);
    http.responseType = 'json';
    http.onreadystatechange = function (){
        if(http.readyState ===4 && http.status === 200 ) {
            let images = http.response.results;
            displayImages(images);
        }
    };
    http.send();
});

function displayImages(images) {
    for(let i=0; i<images.length; i++){
        let imageSrc = images[i].media[0].gif.url;
        let img = document.createElement("img");
        img.setAttribute('src', imageSrc);
        img.setAttribute('class', "img-gif");

        imageContainer.appendChild(img);
    }
}