// node.js默认在每个js的外部生成以下模块
// (
//   function(exports, require, module, _filename, _dirname) {
//     ...
//   }
// )

// const exports = module.exports
// exports.test = 100 // 往里面添加属性是ok的
// exports = {
//     a: 1,
//     b: 2,
//     test: 100
// } // 这样不行，test是undefined
module.exports = {
    a: 1,
    b: 2,
    test: 100
} // 这样可以
