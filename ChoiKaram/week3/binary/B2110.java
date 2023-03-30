import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B2110 {
	public static void main(String[] args) throws IOException {
		//���� ������ ������ ������ �Ÿ�
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int n;	//�� ����
		int c; 	//������ ����
		
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		n = Integer.parseInt(st.nextToken());
		c = Integer.parseInt(st.nextToken());
		

		int[] list = new int[n];	//�� ��ǥ
		
		for(int i=0;i<n;i++)
			list[i] = Integer.parseInt(bf.readLine());
		Arrays.sort(list);
		
		int left = 1;
		int right =  list[n-1] - list[0];
		int mid, res=0;
		
		while(left <= right) {
			mid = (left+right)/2;	//���� �Ÿ�
			
			int cnt = 1;	//������ ����
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
