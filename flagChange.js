const elements = document.getElementById("a");

let flag = true


const hello = () => {
  if(flag === true){
  elements.innerHTML = "יש עניין שהכל "
  flag = !flag
}
else{
  elements.innerHTML = "יתהפך לטובה ברחמי השם!!"
  flag = !flag
}
}


