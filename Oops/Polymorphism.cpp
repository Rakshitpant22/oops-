//!“polymorphism"
// It simply means 'one name, multiple forms'.
// The word “polymorphism” means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more than one form. 

/*

                                        POLYMORPHISM
                                            |
                --------------------------------------------------------   
                |                                                       |
           COMPILE TIME                                              RUNTIME
               ⬇️                                                       ⬇️   
     ----------|------------                                     Virtual function   
     ⬇️                    ⬇️                                                                                                  virtual functions
    function              operator                                  
   overloading          overloading

It would be nice if the appropriate member function could be selected while the program is running. This is known as run time polymorphism. 
How could it happen? C++ supports a mechanism known as virtual function to achieve run time polymorphism.
At run time, when it is known what class objects are under consideration, the appropriate version of the function is invoked. 
Since the function is linked with a particular class much later after the compilation, this process is termed as late binding. 
It is also known as dynamic binding because the selection of the appropriate function is done dynamically at run time.
Dynamic bindings is one of the powerful features of C++. This requires the use of pointers to objects.
We shall discuss in detail how the object pointers and virtual functions are used to implement dynamic binding.


^ FUNCTION OVERLOADING
 It is a feature in OOP where multiple functions have the same name but different parameters (different number of arguments or types of arguments).
 Purpose: To perform different tasks under a single function name, improving code readability and organization.

Key Points:
	1.	Same Name, Different Parameters: Functions are distinguished by the number of arguments or types of arguments they accept.
	2.	Types of Overloading: Change in Number of Arguments:
*/

#include <iostream>
using namespace std;

class AreaCalculator {
private:
    double area;

public:
    AreaCalculator(double side) {//square
        area = side * side;
    }
    AreaCalculator(double length, double width) {//rectangle
        area = length * width;
    }
    AreaCalculator(double radius, bool isCircle) {//circle
        area = 3.14159 * radius * radius;
    }
    void displayArea() {
        cout << "Area: " << area << endl;
    }
};
int main() {
    AreaCalculator square(5.0);            
    AreaCalculator rectangle(10.0, 4.0);   
    AreaCalculator circle(3.0, true);      

    square.displayArea();     
    rectangle.displayArea();  
    circle.displayArea();     
}

//^ Operator overloading
// allows operators to have different meanings based on the data types of their operands, enabling custom behavior for operators with user-defined types.
// Key Points:

// 	1.	Custom Behavior:
// 	•	Operators can be given custom functionality for user-defined types (e.g. classes).

// 	2.	Syntax:
// 	•	The operator keyword is used to define an operator function.
// 	•	The function can be a member or a non-member function.

// 	3.	Types of Overloadable Operators:
// 	•	Arithmetic operators (+, -, *, /)
// 	•	Relational operators (==, !=, <, >)
// 	•	Logical operators (&&, ||, !)
// 	•	Assignment operators (=, +=, -=)
// 	•	Increment and decrement operators (++, --)
//~ •   except a few like ::, ., .*, and ?:

#include <iostream>
#include <string>
using namespace std;

class String {
private:
    string str;

public:
    String(const string &s) : str(s) {}

    // Overload + operator to concatenate strings
    String operator+(const String &other) {
        return String(str + other.str);
    }

    void display() const {
        cout << str << endl;
    }
};

int main() {
    String s1("Hello ");
    String s2("World!");

    String s3 = s1 + s2;  // Uses overloaded + operator
    s3.display();  // Output: Hello, World!

    return 0;
}
 
// example:
#include<iostream>
using namespace std;
class Complex{
    int real;
    int img;

    public :
    Complex(int real,int img){ //constructor 
        this->real=real;
        this->img=img;
    }
    void display(){
        cout<<real<<"+i "<<img<<endl;
    }
    //^ Operator overloading 
    //! within a class we can acces private members of same type of object
    Complex operator+(const Complex  &c){ //paseed as a reference
       return Complex(real+c.real,img+c.img);
    }
};
int main()
{
Complex c1(3,9);
Complex c2(4,3);
Complex c3=c1+c2; 
c3.display(); 
}
//! Operator overloading allows us to define the behavior of operators (like +) for user-defined types (like Complex).
//! we can use operator as a function (operator overloading)
//~ no matching constructor for initialization of 'Complex'
//~ occours because we have make res object for which tere is no constructor so we have to make default constructor



//^! Runtime Polymorphism / Late binding / dynamic polymorphism
// This type of polymorphism is achieved by Function Overriding.The function call is resolved at runtime in runtime polymorphism. 
// In contrast, with compile time polymorphism, the compiler determines which function call to bind to the object after deducing it at runtime.

#include<iostream>
using namespace std;

class Animal{
    public:
     virtual void speak() {
        cout<<"huhuhu"<<endl;
    }
};
class Dog :public Animal{
    public:
    void speak(){
     cout<<"Bark"<<endl;
    }

    void temp(){
        cout<<"only in derived class"<<endl;
    }
};
int main()
{
    Animal *p = new Dog(); //* Dynamic binding (runtime polymorphism) requires a base pointer/reference,
    p->speak();  // if virtual is not declared then prints huhuhu else bark

// In the main function, an Animal pointer p is used to point to a Dog object.
// The call to p->speak() now invokes the speak() method of the Dog class, with the help of the virtual function mechanism.

// p->temp(); // this cannot be called bcs temp is not a member in base class whose pointer is called
            // ie agr base class m function ha tabhi use derived m compile/runtime m access kr skte hai

    // Dog *d=new Dog();
    // d->speak();
    // d->temp();
}

/*
? Need
* When we use a base class pointer to point to a derived class object, and both classes have a function with the same name,
* by default, the base class version of the function is called.
~ This happens because of early binding (compile-time binding):
the compiler decides which function to call based on the pointer type, not the object type.
* To make sure the derived class function is called ,we declare the base class function as virtual.

* This tells the compiler : "Don’t bind this function call at compile time — decide it at runtime based on the actual object the pointer points to.”
*  We use virtual when we don’t want the base class function to run through a base pointer, but the derived one.

! Actual Use of Virtual Functions
A virtual function is a member function that is declared in the base class using the keyword virtual and is re-defined (Overridden) in the derived class.
Virtual functions are Dynamic in nature. 

* They are defined by inserting the keyword “virtual” inside a base class and are always declared with a base class and overridden in a child class
A virtual function is called during Runtime


!  PURE VIRTUAL FUNCTION:
A pure virtual function is a function declared in a base class that has no definition there —it’s meant to be overridden by derived classes.
  class Base {
   public:
~  virtual void show() = 0;  // pure virtual function
  };
“ This function must be implemented in derived classes.”

!  ABSTRACT CLASS
* A class with at least one pure virtual function becomes an abstract class.

~ we cannot create object for abstract class/ (we cannot instantiate abstaract class)
* Jab hum chahte hain ki kisi class ka object kabhi directly create na ho,tab hum abstract class banate hain. 
* Abstract class ka purpose hota hai — sirf base structure (interface) define karna, aur uske derived classes uske functions ko implement karengi.

*/
#include<iostream>
using namespace std;
class Shape {
public:
    virtual void draw() = 0;  // pure virtual function → makes class abstract
};
// Shape s;  // ❌ Error -> Ab Shape ka object directly create nahi kar sakte:
class Circle : public Shape {
public:
    void draw() override { //* we have to override pure virtual function of derived class
    cout << "Drawing Circle";
    }
};
int main(){

// * Runtime polymorphism -> as called derived class using base class ptr reference
Shape* s = new Circle();  
s->draw(); 

//! Not runtime polymorphism
Circle * c = new Circle();
c->draw();
}               

/*
In java we can directly create abstract class using Keyword = abstract



! In C++, the constructor cannot be virtual;
because when a constructor of a class is executed there is no virtual table in the memory, means no virtual pointer defined yet. 
So, the constructor should always be non-virtual.

! virtual destructor is possible;
~ Deleting a derived class object using a pointer of base class type that has a non-virtual destructor results in undefined behavior. 
~ To correct this situation, the base class should be defined with a virtual destructor. 
For example, the following program results in undefined behavior. 

CPP program without virtual destructor 
causing undefined behavior
#include <iostream>
using namespace std;

class base {
public:
	base()	 
	{ cout << "Constructing base\n"; }
	~base()
	{ cout<< "Destructing base\n"; }	 
};

class derived: public base {
public:
	derived()	 
	{ cout << "Constructing derived\n"; }
	~derived()
	{ cout << "Destructing derived\n"; }
};

int main()
{
derived *d = new derived(); 
base *b = d;
delete b;
getchar();
return 0;
}
! Here the derived constructor is actually being called, but the derived destructor is not called when you delete the object through a pointer of type base. 
! This happens because the destructor in the base class is not declared as virtual.

*/

// A program with virtual destructor
#include <iostream>
using namespace std;

class base {
public:
	base()	 
	{ cout << "Constructing base\n"; }
	virtual ~base()
	{ cout << "Destructing base\n"; }	 
};

class derived : public base {
public:
	derived()	 
	{ cout << "Constructing derived\n"; }
	~derived()
	{ cout << "Destructing derived\n"; }
};

int main()
{
derived *d = new derived(); 
base *b = d;
delete b;
getchar();
return 0;
}
