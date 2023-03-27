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
		
		long k;	//���� �ִ� ���̰� �ٸ� ���� �� - �ڸ� �� ���� ��x �Ұ����� ���x
		long n;	//������ �ϴ� ���� ��
		//n������ ���� ����� ����, �ִ� ���̸� ���ض�.
		
		StringTokenizer st = new StringTokenizer(bf.readLine());

		k = (long)Integer.parseInt(st.nextToken());
		n = (long)Integer.parseInt(st.nextToken());

		long[] list = new long[(int) k];//���� �� ���� ����
		long max = 0;
		for(int i=0;i<k;i++) {
			list[i] = Integer.parseInt(bf.readLine());
			max = max < list[i]? list[i] : max;
		}
		//max : ���� �� ���� ����
		
		long left = 1;
		long right = max;
		long mid;	//�߰��� ����
		long len = 0;	//���
		
		while(left <= right) {
			mid = (left+right)/2;	//���� ã�� �߰��� ����
			int cnt=0;
			for(int i=0;i<k;i++) {
				cnt += list[i]/mid;	//������ ����(mid)���� ���� �� �� ��������(cnt)
			}
			if(cnt>=n && len<mid) len = mid;	//n������ ���� ���� -> ���� �� �ø��� ����
			//n������ ���� ���� ��� -> ���̰� �� ª�ƾ� ��
			if(cnt < n) right = mid - 1;
			else left = mid+1;
		}
		
		bw.write(String.valueOf(len));
		
		bw.flush();
		bw.close();
		
	}
}
