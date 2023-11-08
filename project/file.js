// Get button element
const btn = document.getElementsByClassName("btn");

// Add click event listener 
btn.addEventListener("click", function() {
  alert("Button clicked!");
});

function openForm(){

  document.getElementById("myForm").style.dispay="block";
}

function closeForm(){
  DocumentTimeline.getElementById("myForm").style.display="none";
}
const reg = document.getElementById("btn")
reg.addEventListener("click", function(){
  alert('hiiiii');
});