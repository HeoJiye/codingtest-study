import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class B10709 {	//기상캐스터
	

	public static void main(String[] args) throws IOException {
		//BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		//BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		Scanner sc = new Scanner(System.in);
		String line;
		Integer h = sc.nextInt();
		Integer w = sc.nextInt();
		sc.nextLine();
		
		char[][] current = new char[h][w];
		for(int i=0;i<h;i++) {
			line = sc.nextLine();
			for(int j=0;j<w;j++)
				current[i][j] = line.charAt(j);
		}
			
		int[][] future = new int[h][w];
		
		//초기화
		for(int i=0;i<h;i++)
			for(int j=0;j<w;j++)
				future[i][j] = 0;
		
		//구름 못 오는 자리 -1
		boolean check = false;
		for(int i=0;i<h;i++) {
			check= false;
			for(int j=0;j<w;j++)
				if(current[i][j]=='c') {
					check = true;
					for(int k=j-1;k>=0;k--)
						future[i][k] = -1;
					break;
				}
			if(!check)
				for(int j=0;j<w;j++)
					future[i][j] = -1;
		}
		/*
		 * for(int i=0;i<h;i++) { for(int j=0;j<w;j++)
		 * System.out.print(future[i][j]+" "); System.out.println(); }
		 */
		
		
		//구름 이동
		for(int i=0;i<h;i++)
			for(int j=0;j<w;j++) {
				if(future[i][j] == -1)
					continue;
				if(current[i][j] == 'c')
					for(int k=j+1;k<w;k++) {
						if(current[i][k]!='c')
							future[i][k] = future[i][k-1]+1;
						else
							break;
					}
			}

		for(int i=0;i<h;i++) {
			for(int j=0;j<w;j++)
				System.out.print(future[i][j]+" ");
			
			System.out.println();
		}
		
	}

}
