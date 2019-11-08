function onSubmit(){
  $(`.js-submit`).click(event => {
      event.preventDefault();
      clearValues();
      let dogBreed = $(`.js-text`).val().toLowerCase();
      getDog(dogBreed);
    });
}
function getDog(dogBreed){
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response=> response.json())
    .then(responseJson => {
        console.log(responseJson);
        if(responseJson.status !=='success'){
            throw Error(responseJson.message);
        }
        else{
            $(`.js-dogs`).html(`<img src="${responseJson.message}" alt="picture of ${dogBreed}" class="results-img">`)
        }
    })
    .catch(error => {
        console.log("error:  " + error.message);
        $(`.js-dogs`).html(`<p>error : = ${error.message}</p>`)
    });
}
function clearValues() {
  $(`.js-dogs`).html("");
}
$(onSubmit);