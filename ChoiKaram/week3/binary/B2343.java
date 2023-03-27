import java.util.Scanner;

public class B2343 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		//��緹�� ���� ���� n��(���� �߿�)
		//��緹�� ���� �ּ� -> m�� -> ��緹�� m���� ���� n���� ������ ����
		//��緹�� ũ�� �ּ�(m�� ��緹�� ��� ���� ũ�⿩�� ��) -> left
		int n = sc.nextInt();
		int m = sc.nextInt();
		int[] list = new int[n];	//�� ���� ����(�������) n��
		sc.nextLine();
		for(int i=0;i<n;i++) {
			list[i] = sc.nextInt();
		}
		
		int left = 0;
		int right = 0;
		int mid;
		
		for(int i=0;i<n;i++) {
			right += list[i];	//�ִ�
			left = left > list[i]? left : list[i];
		}
		
		while(left <= right) {
			mid = (left+right)/2;	//��緹�� ũ�� �߰���
			
			
			int sum = 0;
			int cnt = 0;
			for(int i=0;i<n;i++) {
				if(sum+list[i] > mid) {
					cnt += 1;
					sum = 0;
				}
				sum+=list[i];
			}
			if(sum!=0) cnt+=1;
			
			//System.out.println(left+" "+right+" "+mid+"  "+cnt);
			if(cnt <= m) {
				right = mid-1;	//m������ ���� ���� -> ��緹�� ũ�� �ٿ��� �� -> right �Ű�
			}
			else {
				left = mid + 1;
			}
		}
		System.out.println(left);
	}

}
