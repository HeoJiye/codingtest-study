import java.util.Scanner;
import java.util.TreeSet;

public class B1181 {	//단어정렬
	static class TS implements Comparable<TS>{
		String w;
		
		public TS(String w) {
			this.w = w;
		}
		@Override
		public int compareTo(TS t) {
			if(t.w.length() < w.length()) return 1;
			else if(t.w.length() > w.length()) return -1;
			else return w.compareTo(t.w);
		}
	}

	public static void main(String[] args) {
		//짧은 길이, 사전순
		//중복 단어 삭제
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		sc.nextLine();
		TreeSet<TS> wlist = new TreeSet<>();
		
		int j=0;
		for(int i=0;i<n;i++) {
			TS tt = new TS(sc.nextLine());
			wlist.add(tt);
		}
		for(TS tt : wlist) {
			System.out.println(tt.w);
		}
		
		
	}

}
