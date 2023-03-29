//bfs - 추가 공부 필요.

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B7562 {	//나이트의 이동
	static int[] dr = {-1, -2, -2, -1, 1, 2, 2, 1};
	static int[] dc = {-2, -1, 1, 2, 2, 1, -1, -2};
	
	static class point{
		int x;
		int y;
		
		public point() { }
		
		public point(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}
	static class testCase{
		int i = -1;
		int[][] board;
		point start = new point();
		point end = new point();
		
		public String print() {
			return "tc : i="+i+", start.x="+start.x+", start.y="+start.y;
		}
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();	//테스트 케이스 개수
		testCase[] tcs = new testCase[n];	//테스트케이스 배열
		
		
		for(int i=0;i<n;i++) {
			testCase tc = new testCase();	//이거 안했더니 전부 마지막에 입력받은걸로 저장됐네..이거 이유가 뭐더라
			tc.i = sc.nextInt();
			tc.board = new int[tc.i][tc.i];
			tc.start.x = sc.nextInt();
			tc.start.y = sc.nextInt();
			tc.end.x = sc.nextInt();
			tc.end.y = sc.nextInt();
			
			tcs[i] = tc;
		}
		/*
		for(int i=0;i<n;i++) {
			System.out.println("tc"+(i+1));
			System.out.println(tcs[i].print());
		}
		*/
		
		//tc별 결과
		for(int i=0;i<n;i++) {
			solution(tcs[i]);
			point end = tcs[i].end;
			System.out.println(tcs[i].board[end.x][end.y]);
		}
		
	}
	
	public static void solution(testCase tc) {
		for(int i=0;i<tc.i;i++)
			for(int j=0;j<tc.i;j++)
				tc.board[i][j] = -1;
		
		bfs(tc);
		
		return;
	}
	public static void bfs(testCase tc) {
		Queue<point> q = new LinkedList<>();
		q.add(tc.start);
		
		tc.board[tc.start.x][tc.start.y] = 0;
		
		while(!q.isEmpty()) {
			point p = q.poll();
			
			if(p.x == tc.end.x && p.y == tc.end.y) break;
			
			for(int i=0;i<8;i++) {
				int dx = p.x + dr[i];
				int dy = p.y + dc[i];
				
				if(dx>=0 && dx<tc.i && dy>=0 && dy<tc.i)
					if(tc.board[dx][dy] == -1 || tc.board[p.x][p.y]+1 < tc.board[dx][dy]) {
						tc.board[dx][dy] = tc.board[p.x][p.y]+1;
						q.add(new point(dx, dy));
					}
			}
		}
		
	}
}
