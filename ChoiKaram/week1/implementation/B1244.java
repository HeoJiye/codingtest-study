import java.util.Scanner;

public class B1244 {	//����ġ

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();	//1<=����ġ ����<=100
		
		int[] slist = new int[n];	//����ġ ����(���� �� 1)
		for(int i=0;i<n;i++) {
			slist[i] = sc.nextInt();
		}
		sc.nextLine();
		int st = sc.nextInt();	//1<=�л���<=100
		int[][] student = new int[st][2];	//����(��1��2), ���� ��(m)
		for(int i=0;i<st;i++)
			for(int j=0;j<2;j++)
				student[i][j] = sc.nextInt();
		
		//���⿡�� �ݺ������� �л� �Ѹ�
		for(int i=0;i<st;i++)
			slist = change(slist, student[i]);
		
		for(int i=0;i<n;i++) {
			if(i!=0 && i%20==0)
				System.out.println();
			System.out.print(slist[i]+" ");
		}
	}
	
	public static int[] change(int[] slist, int[] student) {
		
		int m = student[1];
		
		switch(student[0]) {
		case 1:	//����
			for(int i=0;i<slist.length;i++)
				if((i+1)%m==0)
					slist[i] = onOff(slist[i]);
			break;
		case 2:	//����
			slist[m-1] = onOff(slist[m-1]);
	
			int size = slist.length-m+1>m? m:slist.length-m+1;
				
			for(int i=1;i<size;i++) {
				if(slist[m-1-i]==slist[m-1+i]) {
					slist[m-1-i] = onOff(slist[m-1-i]);
					slist[m-1+i] = onOff(slist[m-1+i]);
				}else break;
			}
			
			break;
		}
			
		
		return slist;
	}
	public static int onOff(int sw) {
		return sw==1?0:1;
	}
}
