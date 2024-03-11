const obj = {
    name: "John Doe",
    age: 30,
    city: "Holon",
  };
  
  // מציאת הפריט
  const item = Object.values(obj).find((item) => item === "Holon");
  
  // מציאת המפתח של הפריט
  const key = Object.keys(obj).find((key) => obj[key] === item);
  
  // שינוי הפריט
  obj[key] = "Tel Aviv";
  
  console.log(obj); // { name: "John Doe", age: 30, city: "Tel Aviv" 
  
  console.log(arry);
  console.log(uniqArry);
  console.log(sortArry);