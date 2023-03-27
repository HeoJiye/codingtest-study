import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class B2583 {	//영역 구하기
	//dfs
	static int[] dr = {-1, 1, 0, 0};
	static int[] dc = {0, 0, -1, 1};
	
	static int m;	//세로
	static int n;	//가로
	
	static int range = 0; 	//각 영역 넓이(회당 dfs 최종 결과)
	static char[][] empty;	//전체
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		m = sc.nextInt();	//세로
		n = sc.nextInt();	//가로
		int k = sc.nextInt();	//주어진 직사각형 개수
		int[][] list = new int[k][4];	//직사각형 좌표(k개)
		empty = new char[m][n];	//전체
		ArrayList<Integer> find = new ArrayList<Integer>();	//영역 넓이 저장(dfs 결과 저장)
		
		
		for(int i=0;i<k;i++) {
			for(int j=0;j<4;j++)
				list[i][j] = sc.nextInt();
			for(int j=list[i][1];j<list[i][3];j++)
				for(int r=list[i][0];r<list[i][2];r++)
					empty[m-1-j][r] = 'X';
		}
		
		for(int i=0;i<m;i++)
			for(int j=0;j<n;j++)
				if(empty[i][j]!='X')
					empty[i][j] = 'O';
		
		
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				if(empty[i][j]!='X') {
					range=0;
					dfs(i, j);
					find.add(range);
				}
			}
		}
		Collections.sort(find);
		System.out.println(find.size());
		for(Integer r : find) {
			System.out.print(r+" ");
		}
	}
	
	public static void dfs(int x, int y) {
		empty[x][y] ='X';	//visited
		range+=1;
		
		for(int i=0;i<4;i++) {	//상하좌우
			int dx = x+dr[i];
			int dy = y+dc[i];
			
			if(dx>=0 && dx<m && dy>=0 && dy<n)
				if(empty[dx][dy]!='X') dfs(dx, dy);
		}
		return;
	}
	
}
