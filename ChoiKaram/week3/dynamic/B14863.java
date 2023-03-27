import java.io.*;
import java.util.StringTokenizer;

public class B14863 {
	static int[][] memo;	
	static int[][] list = new int[100][4];
	static int n, k;
	
	public static void main(String[] args) throws IOException {
		//전체 모금액 최대한 많이
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		n = Integer.parseInt(st.nextToken());	//도시 개수
		k = Integer.parseInt(st.nextToken());	//사용 가능 시간
		
		memo = new int[n+1][k+1];
		
		for(int i=0;i<n;i++) {
			st = new StringTokenizer(bf.readLine());
			list[i][0] = Integer.parseInt(st.nextToken());
			list[i][1] = Integer.parseInt(st.nextToken());
			list[i][2] = Integer.parseInt(st.nextToken());
			list[i][3] = Integer.parseInt(st.nextToken());
		}
		
		for(int i=0;i<n+1;i++)
			for(int j=0;j<k+1;j++)
				memo[i][j] = 0;
		
		int res = solution(0,0);	//초기에는 구간도 사용한 시간도 0
		
		bw.write(String.valueOf(res));
		
		bw.flush();
		bw.close();
	}
	public static int solution(int dis, int time) {
		if(time > k) return Integer.MIN_VALUE;
		if(dis == n) return 0;
		
		if(memo[dis][time] != 0) return memo[dis][time];
		
		//도보
		int a = solution(dis+1, time+list[dis][0])+list[dis][1];
		//자전거
		int b = solution(dis+1, time+list[dis][2])+list[dis][3];
		
		memo[dis][time] = Math.max(a, b);
		
		return memo[dis][time];
	}

}
