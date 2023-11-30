
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})
//  handle Contact form
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("number").value;
    const message = document.getElementById("address").value;
  
    let data;
    if (!name && !email && !subject && !message) {
      // form validation through js
      alert("please fill Out the form");
    } else {
      !name
        ? alert("Name is required")
        : !email
        ? alert("Email is required")
        : !number
        ? alert("Number is required")
        : !address
        ? alert("Address is required")
        : (data = { name, email, subject, message });
      console.log(data);
      resetForm();
    }
    const popupContent = document.getElementById("popup-content");
    const success = document.getElementById("success");
    if (data) {
      popupContent.innerHTML = email;
      success.style.display = "flex";
    } else {
      success.style.display = "none";
    }
  }
  
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
  }
  
  function closePopup() {
    const success = document.getElementById("success");
    success.style.display = "none";
  }
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
  }
  
  function closePopup() {
    const success = document.getElementById("success");
    success.style.display = "none";
  }