var titulos = {
    "titulo1": "Lorem Aqui",
    "titulo1-2": "Lorem Alla"
};

var image1 = {
    "url": "https://firebasestorage.googleapis.com/v0/b/titamedia.appspot.com/o/images-tita%2Fimage-big.png?alt=media&token=a32e8109-56b5-47aa-99dd-1a374b94705a",
    "caption": "Image 1 Slider",
    "clase": "menu-image"
};

var image2 = {
    "url": "https://firebasestorage.googleapis.com/v0/b/titamedia.appspot.com/o/images-tita%2Fimage-big2.png?alt=media&token=ad4beb25-7e89-40e1-a5c4-fc82416676e2",
    "caption": "Image 1 Slider",
    "clase": "menu-image"
};

var image3 = {
    "url": "https://firebasestorage.googleapis.com/v0/b/titamedia.appspot.com/o/images-tita%2Fimage-big3.jpg?alt=media&token=981f0d81-701c-4eb5-936b-078e73e28c2c",
    "caption": "Image 1 Slider",
    "clase": "menu-image"
};

var output = document.getElementById('titulo2');
output.innerHTML = 'Lorem ipsum dolor sit amet';

var ima1 = document.getElementById('ima1');
ima1.innerHTML = '<img src="' + image1.url + '"class="' + image1.clase + '">';

var ima2 = document.getElementById('ima2');
ima2.innerHTML = '<img src="' + image2.url + '"class="' + image2.clase + '">';


var ima3 = document.getElementById('ima3');
ima3.innerHTML = '<img src="' + image3.url + '"class="' + image3.clase + '">';