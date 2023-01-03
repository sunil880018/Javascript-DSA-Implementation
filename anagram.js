function anagram(word1,word2){
    let mp = new Map()

    for(let i=0;i<word1.length;i++){
        let freq = mp.get(word1[i])
        if(freq === undefined)
           mp.set(word1[i],1);
        else
           mp.set(word1[i],++freq);
    }

    let mp1 = new Map();

    for(let i=0;i<word2.length;i++){
        let freq = mp1.get(word2[i])
        if(freq === undefined)
           mp1.set(word2[i],1);
        else
           mp1.set(word2[i],++freq);
    }

    for(let [key,val] of mp1){
        if(!mp.has(key)||mp.get(key)!==val)
            return false;
    }
    return true;
}

console.log(anagram("aaaa","aaaa"));
