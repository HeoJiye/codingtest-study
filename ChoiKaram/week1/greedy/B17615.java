import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class B17615 {	//볼 모으기
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		Integer n = Integer.parseInt(bf.readLine());
		String balls = bf.readLine();
		
		char[] change = new char[n];

		int r=0,b=0;
		
		for(int i=0;i<n;i++) {
			change[i] = balls.charAt(i);
			if(change[i]=='R') r++;
			else b++;
		}
		int res = r>b? b: r;
		int find;
		//right
		if(change[change.length-1]=='R') find = r-findRight(change, 'R');
		else find = b-findRight(change, 'B');
		
		res = res>find? find: res;
		
		//left
		if(change[0]=='R') find = r-findLeft(change, change[0]);
		else find = b-findLeft(change, change[0]);
		
		res = res>find? find: res;
			
		
		bw.write(String.valueOf(res));
		
		bw.flush();
		bw.close();
	}
	//오른쪽에서부터 연속
	public static int findRight(char[] balls, char point) {
		int cnt=0;
		
		for(int i=balls.length-1;i>=0;i--) {
			if(balls[i]!=point)
				break;
			else cnt++;
		}
		
		
		return cnt;
	}
	//왼쪽에서부터 연속
	public static int findLeft(char[] balls, char point) {
		int cnt=0;
		
		for(int i=0;i<balls.length;i++) {
			if(balls[i]!=point)
				break;
			else cnt++;
		}
		
		
		return cnt;
	}
	
}
