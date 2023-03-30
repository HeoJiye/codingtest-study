import java.util.Scanner;

public class B1743 {	//���Ĺ� ���ϱ�
		//dfs
		static int[] dr = {-1,1,0,0};
		static int[] dc = {0,0,-1,1};
		
		static int range=0;
		static char[][] food;
		
		static int m, n;
		
	public static void main(String[] args) {
		//���� ū �͸� ���Ѵ�
		Scanner sc = new Scanner(System.in);
		n = sc.nextInt();	//����
		m = sc.nextInt();	//����
		int k = sc.nextInt();	//���Ĺ� ����
		
		//k���� ��ǥ(r,c) --- �ߺ�x
		int[][] list = new int[k][2];
		food = new char[m][n];
		
		for(int i=0;i<k;i++) {
			for(int j=0;j<2;j++)
				list[i][j] = sc.nextInt();
		}
		for(int i=0;i<k;i++){
			int r = m-list[i][1];
			int c = list[i][0]-1;
			food[r][c] = 'O';
		}
		
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				if(food[i][j]!='O') food[i][j] = '.';
			}
		}
		
		
		//dfs
		int max = 0;
		
		for(int i=0;i<m;i++)
			for(int j=0;j<n;j++)
				if(food[i][j]=='O') {
					range=0;
					dfs(i,j);
					if(max < range) max = range;
				}
		
		System.out.println(max);
	}
	
	public static void dfs(int x, int y) {
		food[x][y] = '.';
		range++;
		
		for(int i=0;i<4;i++) {
			int dx = x+dr[i];
			int dy = y+dc[i];
			
			if(dx>=0 && dx<m && dy>=0 && dy<n)
				if(food[dx][dy]=='O') dfs(dx, dy);	//ã�� ���̸� dfs
		}
		
		return;
	}

}
