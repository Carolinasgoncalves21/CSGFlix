var listaFilmes = [
  "https://ingresso-a.akamaihd.net/prd/img/movie/pureza/07b12839-6085-4a74-91a1-63e789879e4c.jpg",
  "https://br.web.img2.acsta.net/pictures/17/11/28/18/32/3262971.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/26/72/20393770.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}