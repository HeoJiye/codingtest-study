# 지름길
import heapq
INF = int(1e9)

N, D = map(int, input().split())
graphs = [[] for i in range(N + 1)]
distance = [INF] * (N + 1)

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
