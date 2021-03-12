module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] === bracketsConfig[j][0]) {
          if (stack.indexOf(bracketsConfig[j][0]) > -1 && bracketsConfig[j][0] === bracketsConfig[j][1]) {
            stack.pop();
            continue;
          }
          stack.push(str[i]);
        } 
        if (str[i] === bracketsConfig[j][1]) {
          if (stack.length && stack[stack.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
            stack.pop();
          } else if (!stack.length && stack[stack.length - 1] !== bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
            return false;
          }
        } 
    }
  }
  return stack.length === 0;
}