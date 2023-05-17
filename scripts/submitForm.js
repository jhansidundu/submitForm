const myButton = document.getElementById("mybutton");
myButton.addEventListener("click", function (event) {
  // console.log(event);
  event.preventDefault()
  const firstName = document.getElementById("firstName")
  const lastName = document.getElementById("lastName")
  const middleName = document.getElementById("middleName")
  let firstVal = firstName.value
  let midVal = middleName.value
  let lastVal = lastName.value

  let errorBlock = document.getElementById("black")
  if (firstVal == null || firstVal == "") {
    // document.getElementById("black").classList.remove('invisible')
    document.getElementById("black").classList.add('visible')
    errorBlock.innerHTML = "please fill firstname"
    return
  }

  if (midVal == null || midVal == "") {
    // alert("please fil this mella face")
    // document.getElementById("black").classList.remove('invisible')
    document.getElementById("black").classList.add('visible')
    errorBlock.innerHTML = "please fill middlename"
    return
  }

  if (lastVal == null || lastVal == "") {
    // alert("please fill this challa face")
    // document.getElementById("black").classList.remove('invisible')
    document.getElementById("black").classList.add('visible')
    errorBlock.innerHTML = "please fill lastname"
    return
  }

  // errorBlock.innerHTML = ""

  document.getElementById("black").classList.remove('visible')
  document.getElementById("black").classList.add('invisible')

  // localStorage.setItem("firstName", firstVal)
  // localStorage.setItem("middleName", midVal)
  // sessionStorage.setItem("lastName", lastVal)

  arr = [firstVal, midVal, lastVal];
  console.log(arr)
  localStorage.setItem("jsArray", JSON.stringify(arr))

  window.location.href = "submitToDiffPage.html"

})

