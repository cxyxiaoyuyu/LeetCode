import bisect
def findBestValue(arr, target):
    arr.sort()
    n = len(arr)
    prefix = [0]
    for num in arr:
        prefix.append(prefix[-1] + num)
    
    l, r, ans = 0, max(arr), -1
    while l <= r:
        mid = (l + r) // 2
        it = bisect.bisect_left(arr, mid)
        cur = prefix[it] + (n - it) * mid
        if cur <= target:
            ans = mid
            l = mid + 1
        else:
            r = mid - 1

    def check(x):
        return sum(x if num >= x else num for num in arr)
    
    print(ans)
    choose_small = check(ans)
    choose_big = check(ans + 1)

    return ans if abs(choose_small - target) <= abs(choose_big - target) else ans + 1

print(findBestValue([1,2,3,4,5],3))