
  const container = document.querySelector(".container");

  const loading = document.querySelector(".load");

//The API request takes time. We use async so JavaScript can wait for the response.
async function fetchImages() {
    try {

      loading.innerHTML = "Loading...";

      //Sends a request to the API.
      //await -> Waits until the request finishes.
      //response contains -> the actual response object.
      const response = await fetch("https://cataas.com/cat?json=true");

      //Converts JSON text into a JavaScript object.
      const data = await response.json();

      console.log(typeof data);

      //pass argument
      displayImage(data);

      //Runs if something goes wrong.
    } catch (error) {
      console.log(error);
    } finally {
      loading.style.display = "none";
    }
   
}
     //get aas a parameter
function displayImage(data) {
  // STEP 1: remove previous image
  container.innerHTML = "";
  // STEP 2: create new image
  let image = document.createElement("img");
  // STEP 3: set image data
  //Adds CSS class
  image.classList.add("image");
  image.src = data.url;
  image.alt = "Random cat image";
  // STEP 4: append
  //Adds the image inside the container.
  container.appendChild(image);
}


const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
     fetchImages();
});

 

