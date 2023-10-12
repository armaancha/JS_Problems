// Merge two sorted arrays into a single sorted array.

let a = [4]
let b = [1, 4, 5]
let ans = [];
let i = 0;
let j = 0;

while (i<a.length && j<b.length){
  if(b[j]<a[i]){
    ans.push(b[j]);
    j++;
  }
  else{
    ans.push(a[i]);
    i++;
  }
}
while(i<a.length){
  ans.push(a[i]);
  i++;
}
while(j<b.length){
  ans.push(b[j]);
  j++;
}

console.log(ans)
