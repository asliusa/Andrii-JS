const filterMostOftenNumber = numsArr => {
 counts = []
 numsArr.forEach(num => Boolean(counts[num])? counts[num]+=1 : counts[num]=1)
 for (i=0; i<counts.length; i++){
   if (counts[i] == undefined) {
     counts[i] = -1
   } 
 }
 maxItemValue = numsArr.filter( item => item == counts.indexOf(Math.max(...counts)))[0]
 result = numsArr.filter( item => item != maxItemValue)
 return result
}
