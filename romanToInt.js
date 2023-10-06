function romanToInt(x){
  let m = new Map();

  m.set('I', 1);
  m.set('V', 5)
  m.set('X', 10)
  m.set('L', 50)
  m.set('C', 100)
  m.set('D', 500)
  m.set('M', 1000)

  let ans = 0;
  for(let i=0;i<x.length;i++) {
    if((i<x.length-1) && (m.get(x[i+1]) > m.get(x[i]))) {
      ans-=m.get(x[i]);
    }
    else{
      ans+=m.get(x[i]);
    }
  }
  return ans;
}

console.log(romanToInt("LVIII"))
