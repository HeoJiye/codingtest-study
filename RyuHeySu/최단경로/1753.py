#최단경로
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

n, m = map(int, input().split())
start = int(input())
graphs = [[] for i in range(n + 1)]
distance = [INF] * (n + 1)

for _ in range(m) :
    a, b, c = map(int, input().split())
    graphs[a].append((b,c))

def dijkastra(start) :
    q = []

    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q :
        dist, now = heapq.heappop(q)

        # 이미 처리 되어 있음
        if distance[now] < dist :
            continue

        for node in graphs[now] :
            cost = dist + node[1]

            if distance[node[0]] > cost :
                distance[node[0]] = cost
                heapq.heappush(q, (cost, node[0]))

dijkastra(start)

for i in range(1, n + 1) :
    if distance[i] == INF :
        print("INF")
    else : 
        print(distance[i])