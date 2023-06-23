"# foshanxiaoyu.github.io" 
C++ code demo
#include <iostream>

int main() {
    std::cin >> numProducts;
    for(int i = 0; i < numProducts;i++){
        std::cout<<        << i+1 << ;
        std::cout<<        ;
        std::cin.ignore();
        std::getline(std::cin,products[i].name);
        std::cout <<         ;
        std::cin >> products[i].price;
        std::cout <<          ;
        std::cin >> products[i].quantity;
    }
    printSlipHeader();
    std::cout << std::setw(20) << std::left <<" Name";
    std::cout << std::setw(10) << std::left <<" Price";
std::cout << std::setw(10) << std::left <<"Quantity";
    std::cout << std::setw(10) << std::left <<" Total";
    double grandTotal = 0.0;
    for(int i =0;i< numProducts;i++){
        printProductLine(products[i].name,products[i].price,products[i].quantity);
        grandTotal += products[i].price*products[i].quantity;
    }
    std::cout << "================================================\n";
    std::cout << std::setw(40) << std::right <<"Grand Total: "<<grandTotal;
    // Write C+ code here
    std::cout << "Hello world!";

    return 0;
}


#include <iostream>

using namespace std;

struct Product {
  string name;
  double price;
  int quantity;
};

int main() {
  int numProducts;
  cin >> numProducts;

  Product products[numProducts];

  for (int i = 0; i < numProducts; i++) {
    cout << "Product " << i + 1 << ":" << endl;
    cin.ignore();
    getline(cin, products[i].name);
    cout << "Price: ";
    cin >> products[i].price;
    cout << "Quantity: ";
    cin >> products[i].quantity;
  }

  printSlipHeader();
  cout << setw(20) << left << "Name"
       << setw(10) << left << "Price"
       << setw(10) << left << "Quantity"
       << setw(10) << left << "Total" << endl;
  double grandTotal = 0.0;
  for (int i = 0; i < numProducts; i++) {
    printProductLine(products[i].name, products[i].price, products[i].quantity);
    grandTotal += products[i].price * products[i].quantity;
  }

  cout << "================================================\n";
  cout << setw(40) << right << "Grand Total: " << grandTotal << endl;

  return 0;
}

void printSlipHeader() {
  cout << "Slip Header" << endl;
  cout << "================================================" << endl;
}

void printProductLine(string name, double price, int quantity) {
  cout << setw(20) << left << name
       << setw(10) << left << price
       << setw(10) << left << quantity
       << setw(10) << left << price * quantity << endl;
}
