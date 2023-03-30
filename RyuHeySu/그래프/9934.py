# 완전 이진 트리
k = int(input())
data = list(map(int, input().split()))
tree = [ [] for _ in range(k + 1) ]

def findNode(arr, x) : 
    mid = len(arr) // 2
    tree[x].append(arr[mid])

    if x == k :
        return

    findNode(arr[:mid], x + 1)
    findNode(arr[mid + 1 :], x + 1)

findNode(data, 1)

for i in range(1, k + 1) :
    print(*tree[i])