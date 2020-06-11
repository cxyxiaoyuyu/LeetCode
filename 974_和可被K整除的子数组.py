
def subarraysDivByK(A, K):
    record = {0: 1}
    total, ans = 0, 0
    for elem in A:
        total += elem
        modulus = total % K
        print(modulus)
        same = record.get(modulus, 0)
        ans += same
        record[modulus] = same + 1
        print(elem,total,modulus,same,record,ans)
    return ans

ans = subarraysDivByK([-1,2,9],2)
print(ans)