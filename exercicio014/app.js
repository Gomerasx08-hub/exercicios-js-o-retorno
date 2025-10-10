const timesBrasileiros = [
  "Flamengo",
  "Palmeiras",
  "São Paulo",
  "Corinthians",
  "Atlético-MG",
  "Grêmio",
  "Internacional",
  "Santos",
  "Fluminense",
  "Botafogo",
  "Cruzeiro",
  "Vasco da Gama",
  "Bahia",
  "Sport",
  "Fortaleza",
  "Ceará",
  "Atlético-GO",
  "Coritiba",
  "Goiás",
  "Athletico-PR"
];

console.log(timesBrasileiros);

const cidadesTimes = [
  "Rio de Janeiro",      // Flamengo
  "São Paulo",           // Palmeiras
  "São Paulo",           // São Paulo
  "São Paulo",           // Corinthians
  "Belo Horizonte",      // Atlético-MG
  "Porto Alegre",        // Grêmio
  "Porto Alegre",        // Internacional
  "Santos",              // Santos
  "Rio de Janeiro",      // Fluminense
  "Rio de Janeiro",      // Botafogo
  "Belo Horizonte",      // Cruzeiro
  "Rio de Janeiro",      // Vasco da Gama
  "Salvador",            // Bahia
  "Recife",              // Sport
  "Fortaleza",           // Fortaleza
  "Fortaleza",           // Ceará
  "Goiânia",             // Atlético-GO
  "Curitiba",            // Coritiba
  "Goiânia",             // Goiás
  "Curitiba"             // Athletico-PR
];

console.log(cidadesTimes);

function FnlistaTimes(){
    for (let i= 0; i < timesBrasileiros.length; i++) {
        document.getElementById("lista_times").innerHTML += ` <div class="col border text-center">
            ${timesBrasileiros[0]} - ${cidadesTimes[0]}
        </div>
        `
    }
}

FnlistaTimes()

