// Input is a number
// Output is a string
// Input of recursive call is the previous iteration's number minus one
// Output of recursive call is a string.

function countingSheep(num) {
  if (num === 0) return console.log(`All sheep jumped over the fence`);
  console.log(`${num} Another sheep jumps over the fence`);
  countingSheep(num - 1);
}

function powerCalculator(integer, exponent) {
  if (exponent < 0) return console.log(`exponent should be >=0`);
  if (exponent === 0) return 1;
  return integer * powerCalculator(integer, exponent - 1);
}

function reverseString(string) {
  if (string.length === 1) return string;
  return string.slice(-1) + reverseString(string.slice(0, string.length - 1));
}

function triangularNumber(integer) {
  if (integer === 0) return 0;
  return integer + triangularNumber(integer - 1);
}

function stringSplitter(string, separator) {
  const splitArray = [];
  function split(string, separator, acc = "") {
    if (string[0] === separator) {
      splitArray.push(acc);
      return split(string.slice(1), separator, "");
    }
    if (!string) return splitArray.push(acc);
    return split(string.slice(1), separator, acc + string[0]);
  }
  split(string, separator);
  return splitArray;
}

function fibonacci(positiveInteger) {
  if (positiveInteger === 1) return 1;
  return positiveInteger * fibonacci(positiveInteger - 1);
}

// input is a 2d array and current position.
function mazeEscaper(maze, position = [0, 0]) {
  const [row, column] = position;
  const targetRow = maze.length - 1;
  const targetColumn = maze[0].length - 1;
  if (row === targetRow && column === targetColumn) return "";
  maze[row][column] = "*";

  if (maze[row][column + 1] && maze[row][column + 1] !== "*") {
    return "R" + mazeEscaper(maze, [row, column + 1]);
  } else if (maze[row + 1][column] && maze[row + 1][column] !== "*") {
    return "D" + mazeEscaper(maze, [row + 1, column]);
  } else if (maze[row][column - 1] && maze[row][column - 1] !== "*") {
    return "L" + mazeEscaper(maze, [row, column - 1]);
  } else if (maze[row - 1][column] && maze[row - 1][column] !== "*") {
    return "U" + mazeEscaper(maze[row - 1][column]);
  }
}

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

function allPaths(maze, position = [0, 0], pathString = "") {
  const [row, column] = position;
  const possibleNextPosition = [];
  if (maze[row][column] === "e")
    return console.log(`Path to the exit ${pathString}`);

  if (maze[row]?.[column + 1] && maze[row][column + 1] !== "*") {
    possibleNextPosition.push({
      string: "R",
      position: [row, column + 1],
    });
  }
  if (maze[row + 1]?.[column] && maze[row + 1][column] !== "*") {
    possibleNextPosition.push({
      string: "D",
      position: [row + 1, column],
    });
  }
  if (maze[row]?.[column - 1] && maze[row][column - 1] !== "*") {
    possibleNextPosition.push({
      string: "L",
      position: [row, column - 1],
    });
  }
  if (maze[row - 1]?.[column] && maze[row - 1][column] !== "*") {
    possibleNextPosition.push({ string: "U", position: [row - 1, column] });
  }

  possibleNextPosition.forEach((nextPosition) => {
    const newMaze = maze.map((row) => [...row]);
    newMaze[row][column] = "*";
    const path = pathString + nextPosition.string;
    allPaths(newMaze, nextPosition.position, path);
  });
}

function anagrams(string) {
  // loop through each of the characters of the string
  const answers = [];
  function traverse(string, perm = "") {
    if (!string) answers.push(perm);
    for (let i = 0; i < string.length; i++) {
      traverse(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
    }
  }
  traverse(string);
  return answers;
}

//input object
//output indented console log?

function organizationChart(object) {
  let string = '';
  function recursion(obj, indentation = ''){
    for ([key,value] of Object.entries(obj)){
      if (!value){string = string + indentation + key + '\n'}
      else {
        string = string + indentation + key + '\n';
        recursion(value, indentation + `  `)
      }
    }
  }
  recursion(object)
  return string;
}

function binaryRepresentation(num, binary = "") {
  if (num === 0) return binary;
  return binaryRepresentation(Math.floor(num / 2), (num % 2) + binary);
}

const orgObject = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: null,
        Kyle: null,
        Andra: null,
      },
      Zhao: {
        Richie: null,
        Sophia: null,
        Jen: null,
      },
    },
  },
};

console.log(organizationChart(orgObject));
