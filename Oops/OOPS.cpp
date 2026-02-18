// A structure is a convenient tool for handling a group of logically related data items. 
// It is a user-defined data type with a template that serves to define its data properties. 
// Once the structure type has been defined, we can create variables of that type using declarations that are similar to the built-in type declarations.

//! Limitations of C Structure
// The standard C does not allow the struct data type to be treated like built-in types. ex:
struct complex{
float x;
float y;
};

struct complex c1, c2, c3;

// The complex numbers c1, c2, and c3 can easily be assigned values using the dot operator, but we cannot add two complex numbers or subtract one from the other. For example,
// c3 = c1 + c2 is illegal in C.
// Another important limitation of C structures is that they do not permit data hiding. 
// Structure members can be directly accessed by the structure variables by any function anywhere in their scope. 
// In other words, the structure members are public members.

//! Member functions can be defined in two places --> Outside & Inside  the class definition.

//& Outside the class definition :
// return_type class-name :: function_name (argument declaration){
// Function body
// }    
// ex:  

 void item :: getdata(int a, float b){
    number = a; 
    cost = b;
}

//& Inside the Class Definition
 class item{
 int number; float cost;
 public:
 void getdata(int a, float b);//inline  function 
};



//! FRIEND FUNCTIONS:
// A friend function is a normal function (not a member of the class) but it is given special permission to access the private and protected members of the class.
// Friend functions are used when a function needs special access but does not logically belong to the class.

//&  A friend function possesses certain special characteristics:
// -> It is not in the scope of the class to which it has been declared as friend. So it can be invoked like a normal function without the help of any object of that class
// -> Unlike member functions, it cannot access the member names directly and has to use an object name and dot membership operator with each member name.(e.g. A.x).
// -> It can be declared either in the public or the private part of a class without affecting its meaning.
// -> Usually, it has the objects as arguments

#include <iostream>
using namespace std;

class sample{
int a;
int b;

public: 
sample(int a,int b){
this->a=a;
this->b=b;
}
friend float mean(sample s); //we have to pass object to friend function
//* mean() is NOT part of class But it can access private a and b
};

float mean(sample s){
    return float(s.a+s.b)/2.0;
}

 int main(){
    sample obj(3,5);
    sample obj2(34,35);
//* Because the function is not a member of the class,it does NOT have access to this pointer  so it needs an object to know which data to operate on.
    cout<<mean(obj)<<endl;
    cout<<mean(obj2);                
 }



//friend function ex:
#include <iostream>
using namespace std;

class ABC; //Forward declaration 
// The function max has arguments from both XYZ and ABC. When the function max is declared as a friend in XYZ for the first time, 
// The compiler will not acknowledge the presence of ABC unless its name is declared in the beginning as class ABC; This is known as 'forward' declaration.
class XYZ{
int x ; 
public:
void setvalue(int i){
 x=i;
} 
friend void max(XYZ,ABC);
};

class ABC{
int y ; 
public:
void setvalue(int i){
 y=i;
} 
friend void max(XYZ,ABC);
};

void max(XYZ b,ABC a){ //DEfinition  of friend
   if(b.x>=a.y){
    cout<<b.x;
   }
   else 
      cout<<a.y;
}
int main(){
    ABC abc;
    abc.setvalue(123);
    XYZ xyz;
    xyz.setvalue(233);
    max(xyz,abc);
}

//! Concept of empty class having 1 byte 

#include<iostream>
using namespace std;
class Empty {
};

int main() {
    Empty e1, e2;
    std::cout << "Size of empty class: " << sizeof(Empty) << std::endl;
    std::cout << "Address of e1: " << &e1 << std::endl;
    std::cout << "Address of e2: " << &e2 << std::endl;
    return 0;
}

//! An empty class has a size of 1 byte to ensure that each object of that class has a unique address.
//  The decision to make the size of an empty class 1 byte in C++ is a practical compromise 
//? To ensure that each object has a unique address and that pointer arithmetic, memory allocation, and object lifetime management function correctly.
//? This design choice avoids the complications and undefined behavior that would arise if empty classes had a size of 0 bytes.


class Empty {};
Empty e1, e2;
std::cout << &e1 << std::endl;  // Prints address of e1
std::cout << &e2 << std::endl;  // Should print a different address
//If sizeof(Empty) were 0, both addresses could be the same, leading to undefined behavior when accessing or modifying e1 and e2.


#include<iostream>
using namespace std;
//! Padding concept
class a {
    char c; // 1 byte
    int  a; // 4 byte
    char b; // 1 byte
};
 int main() {
     std::cout << "Size of empty class: " << sizeof(a) << std::endl; 
     return 0;
 }
// it should return size of all class datatypes but that's not the case
// our Operating System reads the data by dividing into segments and for each segment the next data goes to another memory segment thats why:

//* Rule in padding --> place datatypes in multiple of size 
//*                 --> final memory size must be a multiple of largest datatype of class
// the greedy allignmnet also reduces the memory allocation for class (fromt low to large size datatypes)



//! CONSTRUCTOR 
// A constructor is a special member function with the same name as the class, invoked to initialize objects when they are created.
// A constructor that accepts no parameters is called the default constructor. 
// The default constructor for class A is A(). If no such constructor is defined, then the compiler supplies a default constructor. ex  A a;
// Constructors should be declared in PUBLIC:
#include<iostream>
using namespace std;

class customer{
 int a;
 string b;
 public:
 customer(){   //!default constructor
 cout<<"default constructor ";
 }
 customer(int a,string b){ //!parameterized constructor
 this->a=a;  // this points to the particular object that is formed (address store krke rkhta h object ka jisne call kia h)
 this->b=b;
 cout<<"parameterised constructor ";
 }
 inline customer(int aa,string bb): a(aa),b(bb) {//!Inline constructor
 }

};
int main(){
    customer c1; // invokes the default constructor of the compiler to create the object 
    customer c2(123,"RAMA");
    customer c3(c2);//! Copy constructor
}

// The constructor functions have some special characteristics,
// • They are declared in the public section and invoked automatically when objects are created, with no return type.
// • They cannot be inherited but can be called by derived class constructors and can have default arguments.
// • They cannot be virtual, their addresses cannot be referenced, and they make implicit calls to new and delete for memory allocation.

//! constructor overloading-->
// when name of constructor are same but have different parameters 

// A reference variable has been used as an argument to the copy constructor. We cannot pass the argument by value to a copy constructor.
// When no copy constructor is defined, the compiler supplies its own copy constructor.

//! dynamic constructor
// It is used to allocate the memory to the objects at the runtime
// All other constructor allocate memory at compile time 
// It's done with the help of 'new' operator and with this we can dynamically allot memory  as per user need(flexible)

class customer{
 int size;
 int *p;

 public:
 customer(){
    size=s;
    p= new int[size];
 }
};

//! DESTRUCTOR  
// It is the last function that is going to be called before an object is destroyed
// called by same name as custructor but uses(~) before name 
// they are automatically called if not made and release the dynamically allocated memory 
//~ if we specifically call destructor than it our task to free the memory alloted

class customer{
    public:
    string name;
    int *balance;
    
    customer (string name,int bal){
        this.name=name;
        balance= new int;
        *balance=bal
    }
    ~customer(){
        delete balance;  // It does'nt delete the object but deletes the memory dynamically allocated to it(release the memory)
    }
}

// here name etc are stored in stack memory and once object created then it gets removed from the stack and gets destroyed by themselves
// for dynamically allocated memory we use destructors;

// Use Cases of Destructors
// 1.	Memory Management  • Releasing dynamically allocated memory to prevent memory leaks.
// 2.	Resource Management• Closing file handles, network sockets, or releasing other system resources.
// 3.	RAII (Resource Acquisition Is Initialization)• Ensuring that resources are properly acquired and released by binding their lifecycle to the lifespan of objects.


//  ! Construction and Destruction Order

//& 	1.	Construction Order:
// 	•	When objects are constructed, they are initialized in a specific order. For example, if you have a base class and a derived class, the base class constructor is called first, followed by the derived class constructor.
// 	•	Similarly, if you have member objects within a class, they are constructed in the order they are declared within the class.

//& 	2.	Destruction Order:
// 	•	Destructors are called in the reverse order of construction. This means that the most recently constructed object is the first to be destroyed.

//! REASON reverse Destruction Order:

#include <iostream>
class Base {
public:
     Base() { std::cout << "Base Constructor" << std::endl; }
    ~Base() { std::cout << "Base Destructor" << std::endl; }
};

class Derived : public Base {
public:
     Derived() { std::cout << "Derived Constructor" << std::endl; }
    ~Derived() { std::cout << "Derived Destructor" << std::endl; }
};

int main() {
    Derived d;
    return 0;
}
//output
Base Constructor
Derived Constructor
Derived Destructor
Base Destructor

//reason
//! 1.	Construction:
// 	• The Base constructor is called first, followed by the Derived constructor.This ensures that the base part of the derived object is initialized first.
//! 2.	Destruction:
// 	• The Derived destructor is called first, followed by the Base destructor. 
//  • Reverse order ensures that the resources and dependencies managed by the Derived class are cleaned up before the Base class is destroyed.

//  Destructors are called in reverse order of construction to ensure proper resource management and to handle dependencies between objects correctly. 
//  This prevents potential issues that could arise if dependent objects were destroyed while their dependencies were still active.  EX
//^ EX agr same order hota to pehle base class hi ud jati to derived class jo dependent hai base p vo kaam kr nhi pata or active bhi rehti





/*
! Encapsulation 
In C++ is defined as the wrapping up of data and information in a single unit
Encapsulation is defined as binding together the data and the functions that manipulate them.

Two Important  property of Encapsulation 
& > Data Protection: 
    • Encapsulation protects the internal state of an object by keeping its data members private. 
    • Access to and modification of these data members is restricted to the class's public methods, ensuring controlled and secure data manipulation.
& > Information Hiding: 
	• Internal implementation details are hidden from external code.
	• Only the public interface is exposed, allowing for abstraction and easier maintenance.


! Abstraction
Data abstraction is a core feature of object-oriented programming that involves providing only essential information to the outside world while hiding the implementation details.
Types of Abstraction:

	1.	Data Abstraction:    Focuses on providing only necessary information about data, ignoring unnecessary details.
	2.	Control Abstraction: Focuses on providing only necessary information about implementation, ignoring unnecessary details.

Abstraction in C++:

	1.	Using Classes:
        • Classes group data members and functions.
	    • Access specifiers (public, private) control visibility of class members.
	2.	Using Header Files:
        • Functions like pow() in math.h provide functionality without revealing the underlying implementation.
	3.	Using Access Specifiers:
	    • Public Members: Accessible from anywhere in the program.
	    • Private Members: Accessible only within the class.
	    • Public members can interact with private members, enforcing controlled access.

Implementation:
	•	Mark internal implementation details as private.
	•	Expose necessary information via public methods.
*/

//! STATIC 
//they are attribute of classes or class member ,it is declared using static keyword
/* 
• It is initialized to zero when the first object of its class is created. No other initialization is permitted.
• Only one copy of that member is created for the entire class and is shared by all the objects of that class, no matter how many objects are created.
• It is visible only within the class, but its lifetime is the entire program.
*/

// practical need 
// -> In a certain bank for same accnt type same class is prewritten so every time new customer is registered for that same class is called
// -> To calculate the no of accounts of same type we need a variable to cnt these accnts for that static is used 

//-> to know how much balaance is in the entire bank
class customer{
    string name; 
    int account_num,balance; // ye har object k lie har bar create honge(alag copy bnegi)
public:
    static int totalcustomers; // but iski 1 hi copy bnegi ie (ye har object k lie call nhi hoega bar bar) all object ka totalcust points to single copy 
    // this is part of the class (attribute of class) // as its static class memeber so it can be called directly withit objects
    customer(string a,int acc,int bal){
    name=a;
    account_num=acc;
    balance=bal;
    totalcustomers++;  
  }
};
int customer :: totalcustomers=0; //! definition of static data member 

int main(){
    customer a1("deepak",2345,12345);
    customer a2("raman",2325,2235);
}

// Note that the type and scope of each static member variable must be defined outside the class definition. 
// This is necessary because the static data members are stored separately rather than as a part of an object. 
// Since they are associated with the class itself rather than with any class object, they are also known as class variables.

// another implementation of static -> is static member functions
//! we want to acceess private static member with help of  class  only ::--> static meber function is used

#include<iostream>
using namespace std;

class customer{
    string name; 
    int account_num,balance; // ye har object k lie har bar create honge(alag copy bnegi)
    static int totalcustomers; 
public:
customer(string a,int acc,int bal){
    name=a;
    account_num=acc;
    balance=bal;
    totalcustomers++;
}
void display_total(){
    cout<<"by object:"<<totalcustomers<<endl;
}
static void nowdisplay(){
     cout<<"BY STATIC MEMEBR FUNCTION:"<<totalcustomers<<endl;
}

};
int customer:: totalcustomers=0; 

int main(){
    customer a1("deepak",1,12345);
    customer a2("raman",2,2235);
    customer a3("raman",3,2235);
    a3.display_total();// using objects 
    // customer::display_total(); //!error: call to non-static member function without an object argument 
    // bcs objects can only access display_total() but we cannot d this way by class

    // this can be done by static member function 
    // but static member function can only acces static memebrs onlyyy
    customer::nowdisplay();

}

//! Const Member Functions
//Const member functions ensure that an object’s state is not modified when these functions are called.
// If a member function does not alter any data ni the class, then we may declare ti sa a const member function as follows:
void mul(int, int) const; 
double get_balancel() const;

// practical example of a class representing a Book in a library management system. We will use const in various places to ensure immutability and safety.


//! super keyword
// In C++, there is no direct equivalent of the super keyword found in languages like Java. 
//~ However, C++ provides mechanisms to achieve similar behavior through inheritance. 
//~ The super keyword in other languages is used to refer to the superclass or base class from within a derived class, typically to call base class methods or constructors.
//~ In C++, this can be accomplished using the scope resolution operator (::) to access members of the base class.
#include <iostream>
using namespace std;
class Base {
public:
    void show() {
        cout << "Base class show method" << endl;
    }
};
class Derived : public Base {
public:
    void show() {
        cout << "Derived class show method" << endl;
        Base::show();// Call the base class show method
    }
};
int main() {
    Derived obj;
    obj.show();
    return 0;
}
// Example: Calling a Base Class Constructor
// C++ allows you to call the base class constructor from the derived class constructor using an initialization list:
#include <iostream>
using namespace std;

class Base {
public:
    Base(int x) {
        cout << "Base class constructor with value: " << x << endl;
    }
};

class Derived : public Base {
public:
    Derived(int x, int y) : Base(x) {
        cout << "Derived class constructor with value: " << y << endl;
    }
};

int main() {
    Derived obj(10, 20);
    return 0;
}

//! final keyword
// In Java, we can use final for a function to make sure that it cannot be overridden. We can also use final in Java to make sure that a class cannot be inherited. 
// Similarly, the latest C++ standard C++ 11 added final. Use of final specifier in C++ 11: 
// Sometimes you don’t want to allow derived class to override the base class’ virtual function. C++ 11 allows built-in facility to prevent overriding of virtual function using final specifier. 

//agr hum base class k func  k age final lagade to vo error dedege (bcs due to final derived class cannot override vritual base function);

//! this keyword
// The this keyword in C++ is a special pointer that points to the object that is currently executing a member function. 
// It is used within a class’s member functions to refer to the invoking object, allowing you to differentiate between member variables and parameters with the same name, chain member function calls.
#include<iostream>
using namespace std;

class Rectangle {
private:
int length, width;
public:
    Rectangle(int length, int width) {// Constructor
        // Using 'this' to differentiate between member variables and parameters
        this->length = length;
        this->width = width;
    }
};
int main() {
    Rectangle rect(10, 5);
    return 0;
}

//! new keyword & delete keyword
#include <iostream>
using namespace std;

class NewExample1 {
public:
    // Method to display a message
    void display() {
        cout << "Invoking Method" << endl;
    }
};
int main() {
    NewExample1* obj = new NewExample1; // Creating an object of the class dynamically using 'new'
    obj->display();
    // It is used to create the object,It allocates the memory at runtime.,ll objects occupy memory in the heap area.It invokes the object constructor.
    delete obj;// Deleting the dynamically allocated object to free memory
}

//! const keyword
// In C++, the const keyword is used to define constants and enforce immutability. It can be applied to variables, pointers, member functions, and function arguments, among other things. 
// Using const correctly can help make your code safer and more efficient by preventing unintended modifications.
const int* ptr = &maxValue;
// *ptr = 200; // Error: cannot modify the data through the pointer




//! Exception Handling in C++

// Exception handling in C++ is a mechanism used to handle runtime errors, providing a way to react to exceptional circumstances (like dividing by zero, memory allocation failures, etc.) in a controlled manner. This helps to make your program robust and prevents it from crashing unexpectedly.

// Key Concepts
// 	1.	Exceptions:
// 	•	An exception is an error or unexpected event that occurs during the execution of a program.
// 	•	When an exception is detected, it can be “thrown” using the throw keyword.

// 	2.	Try Block:
// 	•	A try block is used to enclose the code that might throw an exception.
// 	•	If an exception occurs within the try block, control is transferred to the corresponding catch block.

// 	3.	Catch Block:
// 	•	A catch block handles the exception thrown by the try block.
// 	•	It is defined with a parameter that matches the type of the exception thrown.

// 	4.	Throw Keyword:
// 	•	The throw keyword is used to signal the occurrence of an exception.
// 	•	It transfers control to the nearest enclosing catch block.

// 	5.	Standard Exception Handling:
// 	•	The C++ Standard Library provides a base class std::exception and various derived classes like std::runtime_error, std::out_of_range, etc.

#include <iostream>
using namespace std;

double divide(double numerator, double denominator) {
    if (denominator == 0) {
        throw "Division by zero error!";
    }
    return numerator / denominator;
}

int main() {
    double num, den, result;

    cout << "Enter numerator: ";
    cin >> num;
    cout << "Enter denominator: ";
    cin >> den;

    try {
        result = divide(num, den);
        cout << "Result: " << result << endl;
    } catch (const char* e) {
        cout << "Error: " << e << endl;
    }

    return 0;
}

//! exception class
                                             STD : EXCEPTION
                                                   ⬇️
----------------------------------------------------------------------------------------------------------------------                              
⬇️                       ⬇️                   ⬇️                    ⬇️                    ⬇️                          ⬇️
std:runtime_error    std:bad_alloc       std:bad_exception       std:bad_alloc     std:bad_cast           logic_failure
                                                                                                   
⬇️                                                                                                                   ⬇️
-------------------------------------------                      --------------------------------------------------------
⬇️                   ⬇️                    ⬇️                     ⬇️             ⬇️                  ⬇️                   ⬇️
std:overflow_error  std:range_error  std:underflow_error    std:domain_error  std:invalid_argument  std:length_error  std:out_of_range


#include<iostream>
using namespace std;
int main()
{
  return 0;
}