# 음식물 피하기
from collections import deque

m, n, k = map(int, input().split())
data = [ ['.'] * n for _ in range(m) ]
for _ in range(k) :
    x, y = map(int, input().split())
    data[x - 1][y - 1] = '#'

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def DFS(x, y) :
    stak = deque()
    stak.append((x, y))

    data[x][y] = '.'
    count = 1

    while stak :
        a, b = stak.pop()

        for i in range(4) :
            nx = a + dx[i]
            ny = b + dy[i]

            if nx >= 0 and nx < m and ny >= 0 and ny < n :
                if data[nx][ny] == '#' :
                    count += 1
                    data[nx][ny] = '.'
                    stak.append((nx, ny))
    return count

result = 0
for i in range(m) :
    for j in range(n) :
        if data[i][j] == '#' :
            result = max(result, DFS(i, j))

print(result)