from collections import deque
n, m = map(int, input().split())
mapping = []

for _ in range(n) :
    mapping.append(list(map(int, input().split())))
        
temp = [ [0] * m for _ in range(n) ]
result = 0

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def infection(x, y) :
    queue = deque()
    queue.append((x, y))

    while queue :
        a, b = queue.popleft()

        for i in range(4) :
            nx = a + dx[i]
            ny = b + dy[i]

            if nx >= 0 and ny >= 0 and nx < n and ny < m :
                if temp[nx][ny] == 0 : 
                    temp[nx][ny] = 2
                    queue.append((nx, ny))

def countSafe():
    count = 0

    for i in range(n) :
        for j in range(m) :
            if temp[i][j] == 0 :
                count += 1

    return count

def dfs(count) :
    global result

    if count == 3 :
        for i in range(n) :
            for j in range(m) :
                temp[i][j] = mapping[i][j] 
        
        for i in range(n) :
            for j in range(m) :
                if temp[i][j] == 2 :
                    infection(i,j) 
        
        result = max(result, countSafe())
        return

    for i in range(n) :
        for j in range(m) :
            if mapping[i][j] == 0 :
                mapping[i][j] = 1
                count += 1
                dfs(count)
                mapping[i][j] = 0
                count -= 1
                

dfs(0)
print(result)