let btn = document.querySelector("#btn")

let fileInput = document.querySelector("input")

btn.addEventListener("click", function(){
    fileInput.click()
    // console.dir(fileInput)
})


fileInput.addEventListener("change", function(dets){

    const file = dets.target.files[0]

    if( file){

        btn.textContent = file.name

    }


})
