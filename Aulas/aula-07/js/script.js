console.log("olá");

async function getGatinho() {
  const url = "https://api.thecatapi.com/v1/images/search";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((dados) => console.log(dados[0].url));
  const response = await fetch(url);
  const gatinho = await response.json();
  return gatinho[0];
}

async function mostraGatinho() {
  // Chama função que obtém um gatinho
  const gato = await getGatinho();

  //   referência da div com id container-gato
  const container = document.querySelector("#container-gato");

  //   cria um <p> e aduciona um texto
  const paragrafo = document.createElement("p");
  paragrafo.innerText = gato.url;

  //   cria um elemento <a> com seus atributos
  const link = document.createElement("a");
  link.href = gato.url;
  link.innerText = gato.url;
  link.target = "_blank";
  //   Cria uma <img> e adiciona atributos src, width e height
  const imagem = document.createElement("img");
  imagem.src = gato.url;
  imagem.width = gato.width;
  imagem.height = gato.height;

  //   Adiciona o elemento <img> na div container-gato
  container.appendChild(imagem);
  //   Adiciona o elemento <p> na div container-gato
  container.appendChild(paragrafo);
  //   Adiciona o elemento <a> na div container-gato
  container.appendChild(link);
}
