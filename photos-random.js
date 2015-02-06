
function images(id){

    var lista_imagenes = ["http://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Schloss_Chaumont.JPG/640px-Schloss_Chaumont.JPG",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/640px-Schloss_Neuschwanstein_2013.jpg",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manzanares_el_Real-Castillo.jpg/640px-Manzanares_el_Real-Castillo.jpg",  
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Alcazar-Segovia.jpg/640px-Alcazar-Segovia.jpg",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Matsumoto_Castle_1-1.jpg/640px-Matsumoto_Castle_1-1.jpg",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Himeji_Castle_01s2048.jpg/640px-Himeji_Castle_01s2048.jpg",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg/640px-Tower_of_London_viewed_from_the_River_Thames.jpg",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vista_de_la_Aljaferia.JPG/640px-Vista_de_la_Aljaferia.JPG",
                      "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/N%C3%B6_kreuzenstein_2006_01.JPG/640px-N%C3%B6_kreuzenstein_2006_01.JPG"];
    var img = lista_imagenes[Math.floor(Math.random() * lista_imagenes.length)];
    document.getElementById(id).innerHTML = "<img src=" + img + ">";
}


                      
