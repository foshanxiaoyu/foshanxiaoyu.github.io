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
