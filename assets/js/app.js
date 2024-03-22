const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Agrege el punto .name
const $b = document.querySelector('.blog'); // cambie el # por el punto .blog
const $l = document.querySelector('.location');

async function  displayUser (username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  // Agrege esta linea para transformar el json en objeto
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`   
}

displayUser('stolinski').catch(handleError);