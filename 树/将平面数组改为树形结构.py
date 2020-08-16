'''
树结构
'''

def convert_tree_sort(arr = []):
    # 根据 parent 字段进行排序
    new_arr = []
    for i in range(len(arr)):
        if arr[i]['parent'] == None:
            new_arr.insert(0, arr[i])
        elif len(new_arr) == 0:
            new_arr.append(arr[i])
        elif arr[i]['parent'] < (0 if new_arr[i-1]['parent']==None else new_arr[i-1]['parent']):
            new_arr.insert(i-1, arr[i])
        else:
            new_arr.append(arr[i])
    return new_arr

def convert_tree(arr, index=0):
    children = []
    for i in range(1, len(arr)):
        if arr[index]['id'] == arr[i]['parent']:
            # 如果有子类，就接着递归
            new_arr = convert_tree(arr, i)
            print(index,new_arr)
            children.append(new_arr)
            print(index,children)
    arr[index]['children'] = children
    return arr[index]

arr = [
    {'id':1, 'parent': None},
    {'id':2, 'parent': 1},
    {'id':3, 'parent': 2},
    {'id':4, 'parent': 1},
    {'id':5, 'parent': 4},
]

#排序
new_arr = convert_tree_sort(arr)

arr = convert_tree(new_arr, 0)
print(arr)