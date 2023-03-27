import java.util.Scanner;

public class B2343 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		//블루레이 개당 영상 n개(순서 중요)
		//블루레이 개수 최소 -> m개 -> 블루레이 m개에 강의 n개를 나누어 저장
		//블루레이 크기 최소(m개 블루레이 모두 같은 크기여야 함) -> left
		int n = sc.nextInt();
		int m = sc.nextInt();
		int[] list = new int[n];	//각 강의 길이(순서대로) n개
		sc.nextLine();
		for(int i=0;i<n;i++) {
			list[i] = sc.nextInt();
		}
		
		int left = 0;
		int right = 0;
		int mid;
		
		for(int i=0;i<n;i++) {
			right += list[i];	//최대
			left = left > list[i]? left : list[i];
		}
		
		while(left <= right) {
			mid = (left+right)/2;	//블루레이 크기 중간값
			
			
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
				right = mid-1;	//m개보다 적게 나옴 -> 블루레이 크기 줄여야 함 -> right 옮겨
			}
			else {
				left = mid + 1;
			}
		}
		System.out.println(left);
	}

}
