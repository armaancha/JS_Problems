function findSecondHighest(x){
  if(x.length<=1){
    console.log("Not enough elements");
    return -1;
  }
  let ans1 = Number.MIN_SAFE_INTEGER;
  let ans2 = Number.MIN_SAFE_INTEGER;
  for(let i=0;i<x.length;i++){
    if(x[i]>ans1){
      ans2=ans1;
      ans1=x[i];
    }
    else if(x[i]>ans2){
      ans2=x[i];
    }
  }
  return ans2;
}

console.log(findSecondHighest([-9, -4, -13]));
