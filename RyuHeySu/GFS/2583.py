from pickle import TRUE
from collections import deque
m, n, k = map(int, input().split())
data = [ [0] * n for _ in range(m) ]
for _ in range(k) :
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2) :
        for j in range(x1, x2) :
            data[i][j] = 1

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
stak = deque()

def DFS(x, y) :
    count = 1
    data[x][y] = 1
    stak.append((x,y))

    while stak :
        a, b = stak.pop()

        for i in range(4) :
            nx = a + dx[i]
            ny = b + dy[i]

            if nx >= 0 and nx < m and ny >= 0 and ny < n :
                if data[nx][ny] == 0 :
                    count += 1
                    data[nx][ny] = 1
                    stak.append((nx, ny))
    return count

result = []
def main() :
    for i in range(0, m) :
        for j in range(0, n) :
            if data[i][j] == 0 :        
                result.append(DFS(i,j))

main()
result.sort()
print(len(result))
print(*result)
