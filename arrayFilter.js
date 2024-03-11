const arry = [1,2,2,3,3,4,5,6,9]

const uniqArry = arry.filter((item,index,self)=> {return self.lastIndexOf(item) === index} )
const sortArry = arry.sort((a,b)=> 
{
  if (a % 2 === b % 2) {
  return a - b;
}

// אם a זוגי ו-b אי-זוגי, החזר -1 (a יופיע לפני b)
if (a % 2 === 0) {
  return -1;
}

// אם a אי-זוגי ו-b זוגי, החזר 1 (b יופיע לפני a)
return 1;
}
)

