// #include <iostream>
// #include <emscripten/emscripten.h>

// extern "C" {
//     // 这个宏是告诉编译器：别把这函数给我优化没了，爷待会儿要在 JS 里点名让它干活
//     EMSCRIPTEN_KEEPALIVE 
//     int add_nums(int a, int b) {
//         return a + b;
//     }
// }

// int main() {
//     std::cout << "WASM 模块已就绪，哥们！" << std::endl;
//     return 0;
// }

#include <iostream>

int main() {
    std::cout << "WASM 模块已就绪，哥们！" << std::endl;
    return 0;
}