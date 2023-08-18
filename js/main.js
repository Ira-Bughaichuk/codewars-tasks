/*-------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------*/
//const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))
            /*----or--- */
            function colourAssociation(array){
                const result = [];
               
                 for (const pair of array) {
                   const color = pair[0];
                   const association = pair[1];
                   const obj = { [color]: association };
                   result.push(obj);
                 }
               //console.log(result); //[{{white: 'goodness'}},{blue: 'tranquility'}]
                 return result;
            }
  colourAssociation([["white", "goodness"],["blue", "tranquility"],["blue", "tranquility"]])
  
  
  /*-----------MORSE-TASK------------------- */
  const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };
  
  function decode(expr) {
    let decodedMessage = '';
  
    for (let i = 0; i < expr.length; i += 10) {
      const morseCode = expr.slice(i, i + 10);
      
      if (morseCode === '**********') {
        decodedMessage += ' ';
      } else {
        let morseChar = '';
        for (let j = 0; j < morseCode.length; j += 2) {
          const morseSymbol = morseCode.slice(j, j + 2);
          if (morseSymbol === '10') {
            morseChar += '.';
          } else if (morseSymbol === '11') {
            morseChar += '-';
          }
        }
        decodedMessage += MORSE_TABLE[morseChar];
      }
    }
  
    return decodedMessage;
  }
  decode("000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110")
  
/*-----------check-TASK------------------- */
  function check(str, bracketsConfig) {
    const stack = [];
    const openBrackets = [];
    const closeBrackets = [];
    const specialBrackets = new Set();
    const matchingPairs = {};
  
    for (const [open, close] of bracketsConfig) {
        openBrackets.push(open);
        closeBrackets.push(close);
        matchingPairs[close] = open;
  
        if (open === close) {
            specialBrackets.add(open);
        }
    }
  
    for (const char of str) {
        if (openBrackets.includes(char)) {
            if (specialBrackets.has(char) && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (closeBrackets.includes(char)) {
            const lastOpen = stack.pop();
            if (lastOpen !== matchingPairs[char]) {
                return false;
            }
        }
    }
  
    return stack.length === 0;
  }
  check('((()))()', [['(', ')']]) // -> true
  check('())(', [['(', ')']]) // -> false
  check('|(|)', [['(', ')'], ['|', '|']]) // -> false
  check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
  

/*-----------towelSort-TASK------------------- */
  function towelSort(matrix) {
    const newArr = matrix.flatMap((element, index)=>{ //console.log(element, index) 
      if(index % 2 !==0){
        element.reverse();
      }
    return  element})
    //console.log(newArr); //[1, 2, 3, 6, 5, 4, 7, 8, 9]
    return newArr
  
    /*---------or------*/
    if (!matrix || matrix.length === 0) {
      return [];
    }
    let result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        result = result.concat(matrix[i]);
      } else {
        result = result.concat(matrix[i].reverse());
      }
    }
  
    return result;
  }
  towelSort([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
   ])
   towelSort([
    [1, 2],
    [3, 4],
  ]);
  towelSort([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
  
    
/*-----------dataReverse-TASK-------------------*/
  function dataReverse(data) {
    const result = [];
    const numOfSegments = data.length / 8;
  
    for (let i = numOfSegments - 1; i >= 0; i--) {
      const startIndex = i * 8;
      const segment = data.slice(startIndex, startIndex + 8);
      result.push(...segment);
    }
  //console.log(result);
    return result;
  
    /*--------or-------*/
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
      bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
  }
  dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])
  

 /*-----------killer-TASK-------------------*/ 
  function killer(suspectInfo, dead) {
    const arrsName = Object.values(suspectInfo).findIndex(arrOne=> {
    for(let key of dead){
    return  arrOne.includes(key)
      }
    return })
   const name = Object.keys(suspectInfo)[arrsName];
  
   /*---- or---- */
   const killer = Object.keys(suspectInfo).find(x =>  dead.every(y => suspectInfo[x].includes(y)))
   
  //console.log(name);
  }
  
  killer({'James': ['Jacob', 'Bill', 'Lucas'],
   'Johnny': ['David', 'Kyle', 'Lucas'],
   'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill'] ) //James визначити хто вбив 
  

 /*-----------vowelOne-TASK-------------------*/
  function vowelOne(s){ 
    const newArr = []
    const arr = s.toLowerCase().split("").filter(v => {
  
      if(v != "a" && v != "e" && v != "i" && v != "o" && v != "u"){
        newArr.push(0)
      }else{
        newArr.push(1)
      }
  
    });
    //console.log(s);
    //console.log(newArr.join(""));
    return newArr.join("")
  
        /*---------or----*/
        s = s.toLowerCase()
          const arr1 = ['a', 'e', 'i', 'o', 'u']
          let result = ''
          for (el of s) {
            arr1.includes(el) ? result += '1' : result += '0'
          }
          return result
  }
  vowelOne("vowelOne")  // "01010101"
  vowelOne( "abceios" ) // "1001110"   1001110
  vowelOne( "aeiou, abc" ) // "1111100100"    [1, 1, 1, 1, 1, 0, 0, 1, 0, 0]
  

/*-----------minSum-TASK-------------------*/
  function minSum(arr) {
    arr.sort((a, b) => a - b);
      let result = 0;
    
      // Проходимо по масиву, використовуючи два покажчики
      for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        result += arr[i] * arr[j];
      }
    
      return result;
  }
  minSum([9,2,8,7,5,4,0,6])
  
/*-----------sentence-TASK-------------------*/
  function sentence(List) {
    //console.log(List);
    const sortedList = List.sort((a, b) => {
      const keyA = parseInt(Object.keys(a)[0]);
      const keyB = parseInt(Object.keys(b)[0]);
      return keyA - keyB;
    });
    
    const result = sortedList.map(item => Object.values(item)[0]).join(' ');
    
    //console.log("sortedList", sortedList);
    //console.log(result);
    return result;
  }
  sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ])
  

/*-----------isPowerOfTwo-TASK-------------------*/
  function isPowerOfTwo(n){  
    if (n <= 0) {
      return false; // Від'ємні числа та нуль не є степенями двійки
    }
  
    while (n > 1) {
      if (n % 2 !== 0) {
        return false; // Якщо число не кратне 2, то воно не є степенем двійки
      }
      n /= 2;
    }
    
    return true;
  }
   // return Math.sqrt(n) % 2 === 0? true : false
  isPowerOfTwo(2)
  isPowerOfTwo(1024)
  isPowerOfTwo(4096) 
  isPowerOfTwo(333)  
  

/*-----------sortMyStringo-TASK-------------------*/  
  function sortMyString(S) {
    const arrS = S.split("");
    let arr2 =[]
    let arr1 =[]
  
    for( let i = 0; i < arrS.length; i++){
      i % 2 ? arr2.push(arrS[i]) : arr1.push(arrS[i])
    }
    
    //console.log(arr1.join("") + " " + arr2.join(""));
    //console.log([...arr1, ...arr2].join(""));
    return arr1.join("") + " " + arr2.join("")
  }
  /*----or-------*/
  // const sortMyString = s => {
  //   let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  //   let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  //   return even + ' ' + odd
  // }
sortMyString('CodeWars');
  
  
/*-----------maxTriSum-TASK-------------------*/ 
function maxTriSum(numbers){
    const uniqueNumbers = Array.from(new Set(numbers)); // Видаляємо дублікати
    const sortedNumbers = uniqueNumbers.sort((a, b) => b - a); // Сортуємо у невисхідному порядку
  
    let sum = 0;
    for (let i = 0; i < 3 && i < sortedNumbers.length; i++) {
      sum += sortedNumbers[i];
    }
  
      //console.log(sum);
    return sum; 
  }
maxTriSum ([2,1,8,0,6,4,8,6,2,4]) //2 8 6 4
maxTriSum ([-7,12,-7,29,-5,0,-7,0,0,29])
  

/*-----------findMissing-TASK-------------------*/   
function findMissing(arr1, arr2) { 
    arr1.sort();
    arr2.sort();
    
    for (var i = 0; i < arr1.length; i++) {
      if(arr1[i] != arr2[i]) {
        //console.log(arr1[i]); // 2
        return arr1[i];
      }
    }
    /*-------або---*/
          // let result = 0;
  
          // for (const num of arr1.concat(arr2)) {
          //   result ^= num;
          // }
           //console.log(result); //2
          // return result; 
  }
findMissing([1, 2, 2, 3], [1, 2, 3])
  

/*-----------combine-TASK-------------------*/ 
function combine(...objects) {
    const result = {};
  
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        if (result[key] === undefined) {
          result[key] = value;
        } else {
          result[key] += value;
        }
      }
    }
    //console.log(result);
    return result;
}
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB)
 


/*-----------whoseBicycle-TASK------------------- !!!!!!!!!!!!!!*/
 function whoseBicycle(...grades) {
    const arrayGrades = grades.map(obg => Object.values(obg).reduce((acc, val)=> acc+val,0)/Object.keys(obg).length)
    maxGrade = Math.max(...arrayGrades)
    const indexMaxGrade =  arrayGrades.indexOf(maxGrade);
    const sonNames = ['first', 'second', 'third'];
   const indexSonNames = sonNames[indexMaxGrade];
  
  //  console.log(grades);
  // console.log("arrayGrades", arrayGrades);
  //   console.log("maxGrade", maxGrade);
  // console.log("indexMaxGrade", indexMaxGrade);
  //  console.log("indexSonNames", indexSonNames);
  
  
  //   console.log(`the sum of the marks is the highest in the ${indexSonNames } diary.`);
  //   return `the sum of the marks is the highest in the ${indexSonNames } diary.`
    
  
    // const averageGrades = grades.map(gradesObj =>
    //   Object.values(gradesObj).reduce((sum, grade) => sum + grade, 0) / Object.keys(gradesObj).length
    // );
  
    // const maxAverageGrade = Math.max(...averageGrades);
    // const index = averageGrades.indexOf(maxAverageGrade);
  
    // const sonNames = ['First', 'Second', 'Third'];
    // const selectedSon = sonNames[index];
    // console.log(`I need to buy a bicycle for my ${selectedSon} son`);
    // return `I need to buy a bicycle for my ${selectedSon} son`;
  
  
      // for( num of Object.values(diary1)){
      //   console.log(num);
      //   total1 += num;
      //    console.log(total1);
      // }
      // for( num of Object.values(diary2)){
      //   console.log(num);
      //   total2 += num;
      //    console.log(total2);
      // }
      // for( num of Object.values(diary3)){
      //   console.log(num);
      //   total3 += num;
      //    console.log(total3);
      // }
   
  
    // const sun1 =Object.values(diary1);
    // console.log(sun1);
  }
whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 8,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 5,
      'physics': 5,
      'geography': 9,
      'chemistry': 10
    }
  )


/*----------add-TASK------------------- !!!!!!!!!!!!!!!*/ 
  // function add(num1, num2) {
   
  // let numbStr = [];
  //   const str1 = num1.toString().split('')
  //   const str2 = num2.toString().split('')
  //   console.log(str1, str2);
  
  
  //   // str1.map((value1, i) => {
  //   //   const value2 = str2[i];
  //   //   if(str1[i] === str2[i]){
  //   //         let sum = Number(str1[i]) + Number(str2[i]);
  //   //         numbStr.push(sum);
  //   //         console.log(sum);
  //   //         console.log(numbStr);
  //   //       }
  //   //   console.log(`Index: ${i}, Array 1 Value: ${value1}, Array 2 Value: ${value2}`);
  //   // });
  
  
  //   // for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
   
  //   //   const value1 = str1[i];
  //   //   const value2 = str2[i];
  
  //   //   if(str1[i] === str2[i]){
  //   //     let sum = Number(str1[i]) + Number(str2[i]);
  //   //     numbStr.push(sum);
  //   //     console.log(sum);
  //   //   }
  //   //   numbStr.push(str1[i] || str2[i]);
  //   //   console.log(numbStr);
  //   //   // console.log(`Index: ${i}, Array 1 Value: ${value1}, Array 2 Value: ${value2}`);
  //   // }
  
  
  //   let newstr1 = str1.map((val1, ind) => {console.log(val1)
  //      return [ind, val1] })
  //      let newstr2 = str2.map((val2, ind) => {console.log(val2)
  //     return [ind, val2]})
  // console.log(newstr1, newstr2);
  
  //     if(newstr1[0] === newstr2[0]){
  //       console.log(Number(val1)+Number(val2));
  //     }
  //     // console.log(val1 || val2);
  
  
  
  //   // for(let i=0; i< str1.length; i++){
  //   //   for(let i=0; i< str2.length; i++){
  //   //     console.log(str2[i]);
  //   //   //  return str2[i]
  //   //   }
  //   //   console.log(str1[i])
  //     // let numI = Number(str2[i])+Number(str1[i])
  //     // console.log(numI);
  //     // numbStr.push(numI)
  //     // console.log(numbStr);
  //  // }
  //   // console.log(num1 + num2);
  //   // return num1 + num2;
  // }
  //add(15, 165)
  
  
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  for (let i = 0; i < fruits.length; i +=1) { // Change this line
    const fruit = fruits[i]; // Change this line
   // console.log(fruit); // apple plum pear orange
  }