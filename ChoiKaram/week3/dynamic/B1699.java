import java.util.Scanner;
//발표
public class B1699 {
	static int[] memo;	//개수 저장
	public static void main(String[] args) {
		//항의 최소개수
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		memo = new int[n+1];
		
		//초기화 - 1의 제곱으로만 이루어졌다고 가정(최대 개수)
		for(int i=0;i<n+1;i++)
			memo[i] = i;
		
		for(int i=0;i<n+1;i++) {
			for(int j=0;j*j<=i;j++)
				//memo[i] = memo[r*r]+memo[i-r*r]
				memo[i] = memo[i-j*j]+1 > memo[i]? memo[i] : memo[i-j*j]+1;
		}
		
		System.out.println(memo[n]);
	}
}
