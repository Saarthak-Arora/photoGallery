document.getElementById('vid').play();
var p = 0;
var imgsrc = new Array();
var titl = new Array();
var b = new Array();

var node = document.getElementsByTagName('img');
var tit = document.getElementsByClassName('titles');
var bi = document.getElementsByClassName('img-fluid');




function lessI() {
      if (p >= 8) {
        p = p - 8;
      }

      var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     // console.log(this.responseText); // this is in string 
      var data = this.responseText;
      var dataobj = JSON.parse(data); // this is in the form of object 
      
    }

    var k = 0;
      for (var i = p; i <= p+9; i++) {
        imgsrc[k] = dataobj[i].thumbnailUrl;
        titl[k] = dataobj[i].title;
        b[k] = dataobj[i].url;
        k++;
      }

      bi[0].src = b[0];

      for (var i = 0; i <= 9; i++) {
        node[i].src = imgsrc[i];
        tit[i].innerHTML = titl[i];
      }


  }
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term%27%20+2%20%27=2022-08-09");
  xhr.send();
           

}
  
  

function newI() {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText); // this is in string 
      var data = this.responseText;
      var dataobj = JSON.parse(data); // this is in the form of object 
      
    }

    var k = 0;
      for (var i = p; i <= p+9; i++) {
        imgsrc[k] = dataobj[i].thumbnailUrl;
        titl[k] = dataobj[i].title;
        b[k] = dataobj[i].url;
        k++;
      }

     
      bi[0].src = b[0];
      for (var i = 0; i <= 9; i++) {
        node[i].src = imgsrc[i];
        tit[i].innerHTML = titl[i];
        p++;
      }

  }
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term%27%20+2%20%27=2022-08-09");
  xhr.send();
     
}
  



window.addEventListener('load', (event) => {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText); // this is in string 
      var data = this.responseText;
      var dataobj = JSON.parse(data); // this is in the form of object 
      
    }

    var k = 0;
      for (var i = p; i <= p+9; i++) {
        imgsrc[k] = dataobj[i].thumbnailUrl;
        titl[k] = dataobj[i].title;
        b[k] = dataobj[i].url;
        k++;
      }

      

      bi[0].src = b[0];
      for (var i = 0; i <= 9; i++) {
        node[i].src = imgsrc[i];
        tit[i].innerHTML = titl[i];
        p++;
      }

  }
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term%27%20+2%20%27=2022-08-09");
  xhr.send();

});

function openI(ob){
  var x = parseInt(ob.id);
  bi[0].src =b[x-1];
  
}