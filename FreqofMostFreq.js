const freqOfMostFreq = (k, arr) => {
    var n = arr.length;
    const a = [...arr];
    a.sort((x,y) => x-y);
    let ans = 0;
    var pref = [];
    for(var i=0;i<n;i++) {
        pref[i] = (pref[i-1]||0) + a[i];
    }
    const binSearch = (target) => {
        var L = 0, R = n-1;
        while(L <= R) {
            var mid = L+Math.floor((R-L)/2);
            var diff = ((mid + 1) * target) - pref[mid];
            if(diff <= k && diff >= 0) L = mid+1;
            else R = mid-1; 
        }
        
        return R > -1 ? L : -1;
    }

    for(var i=0;i<n;i++) {
        ans = Math.max(ans, binSearch(a[i]));
    }

    return ans;
}

console.log(freqOfMostFreq());