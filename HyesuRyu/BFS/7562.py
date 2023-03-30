#나이트의 이동
from collections import deque
k = int(input())

dx = [1, 1, 2, 2, -1, -1, -2, -2]
dy = [2, -2, 1, -1, 2, -2, 1, -1]

def BFS(x, y) :
    queue = deque()
    queue.append((x, y))
    while queue :
        a, b = queue.popleft()

        for i in range(8) :
            nx = a + dx[i]
            ny = b + dy[i]
        
            if (0 <= nx < n) and (0 <= ny < n) :
                if data[nx][ny] == -1 :
                    return data[a][b] + 1
                if data[nx][ny] == 0 :
                    data[nx][ny] = data[a][b] + 1
                    queue.append((nx, ny))


for _ in range(k) :
    n = int(input())

    data = [ [0] * n for _ in range(n) ]
    x, y = map(int, input().split())
    a, b = map(int, input().split())

    data[a][b] = -1
    result = BFS(x, y) if (x, y) != (a, b) else 0
    print(result)




