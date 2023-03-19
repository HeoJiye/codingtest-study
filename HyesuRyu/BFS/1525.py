from collections import deque

data = [ list(map(int, input().split())) for _ in range(3) ]
nameTag = []
for i in range(1, 8, 3) :
    nameTag.append([i, i+1, i+2])
nameTag[2][2] = 0

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def BFS(x, y) :
    queue = deque()
    queue.append((x, y))
    count = 0
    
    while queue :
        a, b = queue.popleft()
        
        if (a, b) == (2, 2) :
            if data == nameTag :
                return count
            else :
                return -1
        
        for i in range(4) :
            nx = a + dx[i]
            ny = b + dy[i]
            
            if 0 <= nx < 3 and 0 <= ny < 3 :
                if data[nx][ny] == nameTag[a][b] :
                    data[a][b] = data[nx][ny]
                    data[nx][ny] = 0
                    count += 1
                    queue.append((nx, ny))
    
    return -1

n, m = 0, 0
for a in range(3) :
    for b in range(3) :
        if data[a][b] == 0 :
            n, m = a, b
            break

print(BFS(n, m))
           