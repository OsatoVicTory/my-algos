const maxSumCircularSubarray = (arr) => {
    const inf = 100000000;
    const n = arr.length;
    let cur_max_sum = -inf;
    let max_sum = -inf;
    let cur_min_sum = inf;
    let min_sum = inf;
    let total = 0;

    for(var i=0;i<n;i++) {
        total += arr[i];

        cur_max_sum = Math.max(arr[i], cur_max_sum + a[i]);
        max_sum = Math.max(cur_max_sum, max_sum);

        if(i>0 && i<n-1) {
            cur_min_sum = Math.min(arr[i], cur_min_sum + a[i]);
            min_sum = Math.min(cur_min_sum, min_sum);
        }
    }

    return Math.max(max_sum, total - min_sum);
}