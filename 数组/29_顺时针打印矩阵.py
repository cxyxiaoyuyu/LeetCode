# class Solution:
#     def spiralOrder(self, matrix):
#         res = []
#         while(matrix): 
#             res += matrix.pop(0)

#             matrix = list(zip(*matrix))[::-1]
#         return res

# so = Solution()
# res = so.spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
# print(res)

def spiralOrder(matrix):
    if not matrix or not matrix[0]:
        return list()
    
    rows, columns = len(matrix), len(matrix[0])
    order = list()
    left, right, top, bottom = 0, columns - 1, 0, rows - 1
    while left <= right and top <= bottom:
        for column in range(left, right + 1):
            order.append(matrix[top][column])
        for row in range(top + 1, bottom + 1):
            order.append(matrix[row][right])
        print(left,right,top,bottom)
        if left < right and top < bottom:
            for column in range(right - 1, left, -1):
                order.append(matrix[bottom][column])
            for row in range(bottom, top, -1):
                order.append(matrix[row][left])
        left, right, top, bottom = left + 1, right - 1, top + 1, bottom - 1
    return order

res = spiralOrder([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])