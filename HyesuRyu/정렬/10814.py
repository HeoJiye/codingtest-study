#나이순 정렬
import sys
n = int(sys.stdin.readline())
data = []
for _ in range(n) :
    data.append(list(sys.stdin.readline().split())

data.sort(key = lambda x : int(x[0]))

for person in data :
    print(person[0], person[1])