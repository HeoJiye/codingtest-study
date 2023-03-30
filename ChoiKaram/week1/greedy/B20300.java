import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class B20300 {	//서강근육맨
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		Integer n = Integer.parseInt(bf.readLine());	//총 개수
		long[] minus = new long[n];	//각 기구 근손실 정도
		String[] input = bf.readLine().split(" ");
		
		for(int i=0;i<n;i++) {
			minus[i] = Long.parseLong(input[i]);
		}
		Arrays.sort(minus);
			
		long res = n%2==0? find(minus, n) : find(minus, n-1);
		
		bw.write(String.valueOf(res));
		
		bw.flush();
		bw.close();
	}
	
	public static long find(long[] list, int len) {
		long m = (list.length)%2==0? list[0] : list[list.length-1];
		
		for(int i=0;i<len/2;i++) {
			if(m < list[i]+list[len-1-i])
				m = list[i]+list[len-1-i];
		}
		
		return m;
	}
}
