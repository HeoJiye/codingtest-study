import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class B1654 {
	
	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		long k;	//갖고 있는 길이가 다른 랜선 수 - 자른 건 붙일 수x 불가능한 경우x
		long n;	//만들어야 하는 랜선 수
		//n개보다 많이 만들기 가능, 최대 길이를 구해라.
		
		StringTokenizer st = new StringTokenizer(bf.readLine());

		k = (long)Integer.parseInt(st.nextToken());
		n = (long)Integer.parseInt(st.nextToken());

		long[] list = new long[(int) k];//랜선 각 길이 저장
		long max = 0;
		for(int i=0;i<k;i++) {
			list[i] = Integer.parseInt(bf.readLine());
			max = max < list[i]? list[i] : max;
		}
		//max : 가장 긴 랜선 길이
		
		long left = 1;
		long right = max;
		long mid;	//중간값 저장
		long len = 0;	//결과
		
		while(left <= right) {
			mid = (left+right)/2;	//길이 찾기 중간값 저장
			int cnt=0;
			for(int i=0;i<k;i++) {
				cnt += list[i]/mid;	//생각한 길이(mid)에서 랜선 몇 개 나오는지(cnt)
			}
			if(cnt>=n && len<mid) len = mid;	//n개보다 많이 나옴 -> 길이 더 늘리기 가능
			//n개보다 적게 나올 경우 -> 길이가 더 짧아야 함
			if(cnt < n) right = mid - 1;
			else left = mid+1;
		}
		
		bw.write(String.valueOf(len));
		
		bw.flush();
		bw.close();
		
	}
}
