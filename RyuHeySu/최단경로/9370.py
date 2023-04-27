# 미확인 도착지
# 1. g -> h를 경유하는 교차로가 반드시 있어야 한다.
# 2. 1을 만족하는 도착지가 후보군 x에 있어야 한다. 

# 잘못 해석했다. g->h/h->g를 지나면서 최단거리로 갈 수 있는 도착지여야?한다...아닌데..
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

T = int(input())

# 최단 경로 구하기
def dijkastra(start) :
    q = []

    heapq.heappush(q, (0, start))
    distance[start][0] = 0

    while q :
        dist, now = heapq.heappop(q) # 제일 짧은 교차로.

        # 이미 처리 되어 있음
        if distance[now][0] < dist :
            continue

        for node in graphs[now] :
            cost = dist + node[1]

            if distance[node[0]][0] > cost : # 이전 경로보다 현재 경로가 더 짧다면.
                distance[node[0]][0] = cost # 갱신
                distance[node[0]][1] = now
                heapq.heappush(q, (cost, node[0]))

for _ in range(T) :
    n, m, t = map(int, input().split())
    s, g, h = map(int, input().split())

    graphs = [[] for i in range(n + 1)]
    # 경로 기록
    lines = [0] * (n + 1)
    distance = [[INF, i] for i in range(n + 1)]

    for _ in range(m) : # 도로 개수
        a, b, d = map(int, input().split())
        graphs[a].append((b, d)) # a -> b로 가는 거리 d
    
    dijkastra(s) # 최단 경로 구한다.

    answer = []

    for _ in range(t) : # 후보지 개수
        x = int(input())
        
        length, _= distance[x] # 최단 길이
        parent_node = x

        while parent_node != s:  
            next = distance[parent_node][1]       
            
            if (parent_node, next) == (g, h) or (next, parent_node) == (g, h) :
                answer.append(x)
                break
            
            parent_node = next

        # 경유지를 통과한 최단거리와 비교한다.
    answer.sort()
    print(*answer)


