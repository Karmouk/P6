

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






