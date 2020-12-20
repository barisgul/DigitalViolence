document.addEventListener('DOMContentLoaded', function(){
var button = document.getElementById('button');
var container = document.getElementById('container');
var imagesArray = ['cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg','cat5.jpg']

button.addEventListener('click',function(){
    var num = Math.floor(Math.random()*(imagesArray.length));
    document.catImage.src = imagesArray[num];
    },false);
},false);