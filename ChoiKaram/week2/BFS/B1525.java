//bfs

import java.io.*;
import java.util.*;

public class B1525 {	//퍼즐_bfs
	
	static String correct = "123456780";
	static Map<String, Integer> map = new HashMap<>();
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		String init ="";
		for(int i=0; i<3; i++) {
			st = new StringTokenizer(br.readLine());
			for(int j=0; j<3; j++) {
				int num = Integer.parseInt(st.nextToken());
				init += num;
			}
		}
		
		map.put(init, 0);	//key:init, value:0
		System.out.println(bfs(init));
	}
	
	static int bfs(String init) {
	
		Queue<String> q = new LinkedList<>();
		q.add(init);
		while(!q.isEmpty()) {
			String pos = q.poll();
			System.out.println("pos "+pos);
			int move =map.get(pos);	//map 안의 값
			System.out.println("move "+move);
			int empty = pos.indexOf('0');
			System.out.println("empty "+empty);
			int px = empty%3;	//3칸 배열이므로
			int py = empty/3;
			
			if(pos.equals(correct)) {
				return move;
			}
			
			for(int i=0; i<4; i++) {
				int nx = px +dx[i];
				int ny = py + dy[i];
				
				if(nx<0 || ny<0 || nx>2 || ny>2) continue;
				
				int nPos = ny*3 + nx;

				System.out.println("nPos "+nPos);
				char ch = pos.charAt(nPos);
				String next = pos.replace(ch, 'c');
				System.out.println("next "+next);
				next = next.replace('0', ch);
				next = next.replace('c', '0');
				System.out.println("next "+next);
				
				if(!map.containsKey(next)) {
					q.add(next);	//q에 새로 만든 문자열 추가
					map.put(next, move+1);
				}
			}
		}
		return -1;
	}
}
