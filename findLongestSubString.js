function isVoEven(str,l,s){
    var string = str.substring(l,s+1)
    for(let vow of vowel){
        var re = new RegExp(`[${vow}]`,'g')
        if(string.match(re).length % 2 !== 0){
            return false
        }
    }
    return true
}