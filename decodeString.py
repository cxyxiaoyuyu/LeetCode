def decodeString(s):
    stack, res, multi = [], "", 0
    for c in s:
        if c == '[':
            stack.append([multi, res])
            res, multi = "", 0
        elif c == ']':
            cur_multi, last_res = stack.pop()
            res = last_res + cur_multi * res
        elif '0' <= c <= '9':
            multi = multi * 10 + int(c)            
        else:
            res += c
    return res

str = decodeString("2[abc]3[cd]ef")
print(str)








