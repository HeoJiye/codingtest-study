import java.io.*;
import java.util.StringTokenizer;
//발표
//마지막에 mod연산을 하는 게 아니라 memo를 처음부터 mod연산을 한 값을 저장.
public class B11051 {
	static int[][] memo;
	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int n, k;
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		n = Integer.parseInt(st.nextToken());
		k = Integer.parseInt(st.nextToken());
		
		memo = new int[n+1][k+1];
		
		for(int i=0;i<n+1;i++)
			for(int j=0;j<k+1;j++)
				memo[i][j] = 0;
	
		int res = solution(n, k);
		
		bw.write(String.valueOf(res));
		
		bw.flush();
		bw.close();
	}
	
	public static int solution(int n, int k) {
		if(k<0 || k>n) return 0;
		if(n<=1 || k==0) return 1;
		if(k==1) return n;
		
		if(memo[n][k]!=0) return memo[n][k];
		
		memo[n][k] = (solution(n-1, k-1)+solution(n-1, k))%10007;
		
		return memo[n][k];
	}
}
