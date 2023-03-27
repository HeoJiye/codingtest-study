import java.util.Scanner;
//��ǥ
public class B1699 {
	static int[] memo;	//���� ����
	public static void main(String[] args) {
		//���� �ּҰ���
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		memo = new int[n+1];
		
		//�ʱ�ȭ - 1�� �������θ� �̷�����ٰ� ����(�ִ� ����)
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
