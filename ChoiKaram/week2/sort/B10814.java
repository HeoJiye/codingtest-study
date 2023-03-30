import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class B10814 {	//나이순 정렬
	static class Person implements Comparable{
		int age;
		String name;
		
		public Person(int age, String n) {
			this.age = age;
			name = n;
		}

		@Override
		public int compareTo(Object o) {
			Person p = (Person) o;
			
			if(p.age < age) return 1;
			else if(p.age==age) return 0;
			else return -1;
		}
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();	//회원수
		//나이 증가순, 먼저 가입
		ArrayList<Person> list = new ArrayList<>();
		
		for(int i=0;i<n;i++) {
			int age = sc.nextInt();
			String name = sc.next();
			sc.nextLine();
			
			Person p = new Person(age, name);
			list.add(p);
		}
		
		Collections.sort(list);
		
		for(Person p : list) {
			System.out.println(p.age+" "+p.name);
		}
	}

}
