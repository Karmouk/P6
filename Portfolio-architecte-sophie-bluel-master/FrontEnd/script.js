

function getWorks(){
  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    console.log(data)
     displayWorks(data)
      
    
  })
  .catch(error => {console.log(error)})
}

getWorks()

function displayWorks(work){
  const getGallery = document.querySelector(".gallery");
  work.forEach(work => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src=work.imageUrl
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = work.title;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    getGallery.appendChild(figure);
  })

}

function getCategories(){
  fetch("http://localhost:5678/api/categories")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    
      
    
  })
  .catch(error => {console.log(error)})
}

getCategories()






