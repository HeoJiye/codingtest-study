#단어 정렬
n = int(input())
data = []
newData = []

for _ in range(n) :
    data.append(input())

data = list(set(data))
data.sort()
data.sort(key = lambda x : len(x))


print(data)

