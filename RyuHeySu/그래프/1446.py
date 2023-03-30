# 지름길
import heapq
INF = int(1e9)

n, d = map(int, input().split())
graphs = [[] for i in range(d + 1)]
distance = [INF] * (d + 1)

for i in range(d) :
    graphs[i].append((i + 1, 1))
    
for _ in range(n) :
    start, end, length = map(int,input().split())
    
    if end > d :
        continue
    graphs[start].append((end, length))

def dijkastra(start) :
    q = []

    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q :
        dist, now = heapq.heappop(q) # 제일 짧은 교차로.

        # 이미 처리 되어 있음
        if distance[now] < dist :
            continue

        for node in graphs[now] :
            cost = dist + node[1]

            if distance[node[0]] > cost : # 이전 경로보다 현재 경로가 더 짧다면.
                distance[node[0]] = cost # 갱신
                heapq.heappush(q, (cost, node[0]))

dijkastra(0)
print(distance[d])