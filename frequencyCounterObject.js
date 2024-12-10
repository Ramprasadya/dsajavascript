function same(arr1,arr2){
     if(arr1.length !== arr2.length){
        return false
     }
     let count1 = {};
     let count2 = {};
     for(let val in arr1){
        count1[val] = (count1[val] || 0) +1
     }
     for(let val in arr2){
        count2[val] = (count2[val] || 0) +1
     }

     console.log(count1)
     console.log(count2)

     for(let key in count1){
        if(!(key**2 in count2)){
            return false
        }
        if(count2[key**2] !== count1[key]){
            return false
        }
     }
     console.log(true)
     
     return true
}


same([1,2,5,4],[1,4,25,16])