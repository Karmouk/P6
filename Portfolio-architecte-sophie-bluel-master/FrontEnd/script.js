

function getWorks(categoryId = null){
  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let filteredData = data;
      if (categoryId) {
        filteredData = data.filter(work => work.categoryId === categoryId);
      }
     displayWorks(filteredData)
      
    
  })
  .catch(error => {console.log(error)})
}

getWorks()

function displayWorks(work){
  const getGallery = document.querySelector(".gallery");
  getGallery.innerHTML = ''; 
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
    displayCategories(data)
    
      
    
  })
  .catch(error => {console.log(error)})
}

getCategories()

function displayCategories(categories){
  const categoriecontainer= document.querySelector('.categories');
  const categoriestous=document.createElement('button');
  categoriestous.textContent='Tous';
  categoriestous.id='0';
  categoriestous.addEventListener('click', () => {
    getWorks();
  })
 
  categoriecontainer.appendChild(categoriestous)
  
  categories.forEach(categories =>{
    const buttoncategorie = document.createElement('button');
    buttoncategorie.id=categories.id
    buttoncategorie.textContent=categories.name;
    buttoncategorie.addEventListener('click', () => {
      getWorks(categories.id); 
      console.log(categories)
    });
    categoriecontainer.appendChild(buttoncategorie)
    })
  
}


