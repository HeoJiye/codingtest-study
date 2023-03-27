import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B2110 {
	public static void main(String[] args) throws IOException {
		//가장 인접한 공유기 사이의 거리
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int n;	//집 개수
		int c; 	//공유기 개수
		
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		n = Integer.parseInt(st.nextToken());
		c = Integer.parseInt(st.nextToken());
		

		int[] list = new int[n];	//집 좌표
		
		for(int i=0;i<n;i++)
			list[i] = Integer.parseInt(bf.readLine());
		Arrays.sort(list);
		
		int left = 1;
		int right =  list[n-1] - list[0];
		int mid, res=0;
		
		while(left <= right) {
			mid = (left+right)/2;	//예상 거리
			
			int cnt = 1;	//공유기 개수
			int pre = list[0];
			for(int i=1;i<n;i++) {
				if(list[i] - pre >= mid) {
					cnt++;
					pre = list[i];
				}
			}
			if(cnt >= c) {
				res = res > mid? res : mid;
				left = mid+1;
			}
			else right = mid-1;
		}
		
		bw.write(String.valueOf(res));
		bw.flush();
		bw.close();
	}

}
