




async function Works() {
  const travaux = await fetch ("http://localhost:5678/api/works");
  const JsonTravaux = await travaux.json();
  
}
Works();


async function getWorks() {
  const jsWorks = await Works();
  console.log(jsWorks);
  
}
getWorks();




