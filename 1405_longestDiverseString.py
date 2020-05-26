def longestDiverseString(self, a: int, b: int, c: int) -> str:
        #先算出了最终结果, 含多少个a, 多少个b,多少个c.
        d = {'a':min(a,2*(b+c+1)),'b':min(b,2*(a+c+1)),'c':min(c,2*(b+a+1))}
        # 最终结果字串的总长度.
        n = sum(d.values())
        res = []
        # 依次把字母填到结果里: 需要注意的是, 每次只填一个字母.
        for i in range(n):
            #候选的字母
            cand = set(['a','b','c'])
            if len(res)>1 and res[-1]==res[-2]:
                # 看当前拼好的字串, 最后2个字母是否一样, 如果一样, 把这个字母从候选里移掉.
                cand.remove(res[-1])
            # 找到剩余候选字母里, 最长的那个字母.
            tmp = max(cand,key=lambda x:d[x])
            # 将它加到结果里. 
            res.append(tmp)
            # 把它的剩余计数减去1. 开始下一轮.
            d[tmp] -= 1
        # 返回处理的结果.
        return ''.join(res)