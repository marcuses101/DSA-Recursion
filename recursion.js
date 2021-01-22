module.exports = {
  countingSheep(num) {
    if (num === 0) return console.log(`All sheep jumped over the fence`);
    console.log(`${num} Another sheep jumps over the fence`);
    this.countingSheep(num - 1);
  },
  countingSheepIteratively(num) {
    for (let i = num; i > 0; i--) {
      console.log(`${i} Another sheep jumps over the fence`);
    }
    console.log(`All the sheep jumped over the fence`);
  },

  powerCalculator(integer, exponent) {
    if (exponent < 0) return console.log(`exponent should be >=0`);
    if (exponent === 0) return 1;
    return integer * this.powerCalculator(integer, exponent - 1);
  },

  powerCalculatorIterative(integer, exponent) {
    if (exponent < 0) return console.log(`exponent should be >= 0 `);
    let result = integer;
    for (let i = 1; i < exponent; i++) {
      result = result * integer;
    }
    return result;
  },

  reverseString(string) {
    if (string.length === 1) return string;
    return (
      string.slice(-1) + this.reverseString(string.slice(0, string.length - 1))
    );
  },
  reverseStringIterative(string) {
    const stringArray = string.split("");
    const reversedArray = [];
    while (stringArray.length > 0) {
      reversedArray.push(stringArray.pop());
    }
    return reversedArray.join("");
  },
  triangularNumber(integer) {
    if (integer === 0) return 0;
    return integer + triangularNumber(integer - 1);
  },
  triangularNumberIterative(int) {
    let triNum = 0;
    for (let i = int; i > 0; i--) {
      triNum += i;
    }
    return triNum;
  },

  stringSplitter(string, separator) {
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
  },
  stringSplitterIterative(inputString, separator) {
    let string = "";
    let array = [];
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === separator) {
        array.push(string);
        string = "";
      } else {
        string += inputString[i];
      }
    }
    array.push(string);
    return array;
  },

  fibonacci(integer) {
    function fib(array) {
      if (array.length === integer) return array;
      const current =
        (array[array.length - 1] ?? 1) + (array[array.length - 2] ?? 0);
      console.log(current);
      return fib([...array, current]);
    }
    return fib([]);
  },

  fibIterative(int) {
    const arr = [];
    for (let i = 0; i < int; i++) {
      const num = (arr[i - 1] ?? 1) + (arr[i - 2] ?? 0);
      console.log(num);
      arr.push(num);
    }
  },

  factorial(int) {
    if (int === 0) return 1;
    return int * this.factorial(int - 1);
  },

  factorialIterative(int) {
    let current = 1;
    for (let i = 0; i < int; i++) {
      current *= int - i;
    }
    return current;
  },

  mazeEscape(maze) {
    const end = `${maze.length - 1}${maze[0].length - 1}`;
    const mazeMap = new Map();
    maze.forEach((rowArr, row) =>
      rowArr.forEach((_, column) => {
        const adjacentNodes = {
          R: [" ", "e"].includes(maze[row]?.[column + 1])
            ? `${row}${column + 1}`
            : null,
          D: [" ", "e"].includes(maze[row + 1]?.[column])
            ? `${row + 1}${column}`
            : null,
          U: [" ", "e"].includes(maze[row - 1]?.[column])
            ? `${row - 1}${column}`
            : null,
          L: [" ", "e"].includes(maze[row]?.[column - 1])
            ? `${row}${column - 1}`
            : null,
        };
        mazeMap.set(
          `${row}${column}`,
          Object.entries(adjacentNodes).filter(([key, value]) => value)
        );
      })
    );
    let pathString = "";
    function findPath(current = "00", visited = ["00"], path = "") {
      if (pathString) return;
      const adjacent = mazeMap.get(current);
      const seen = [...visited];
      if (current === end) {
        pathString = path;
        return;
      }
      for ([direction, location] of adjacent) {
        if (visited.includes(location)) {
          continue;
        }
        const currentPath = path + direction;
        seen.push(location);
        findPath(location, seen, currentPath);
      }
    }
    findPath();
    return pathString;
  },

  mazeEscapeAll(maze) {
    const end = `${maze.length - 1}${maze[0].length - 1}`;
    const mazeMap = new Map();
    maze.forEach((rowArr, row) =>
      rowArr.forEach((_, column) => {
        const adjacentNodes = {
          R: [" ", "e"].includes(maze[row]?.[column + 1])
            ? `${row}${column + 1}`
            : null,
          D: [" ", "e"].includes(maze[row + 1]?.[column])
            ? `${row + 1}${column}`
            : null,
          U: [" ", "e"].includes(maze[row - 1]?.[column])
            ? `${row - 1}${column}`
            : null,
          L: [" ", "e"].includes(maze[row]?.[column - 1])
            ? `${row}${column - 1}`
            : null,
        };
        mazeMap.set(
          `${row}${column}`,
          Object.entries(adjacentNodes).filter(([key, value]) => value)
        );
      })
    );
    const paths = [];
    function findPaths(current = "00", visited = ["00"], path = "") {
      const adjacent = mazeMap.get(current);
      const seen = [...visited];
      if (current === end) return paths.push(path);
      for ([direction, location] of adjacent) {
        if (visited.includes(location)) {
          continue;
        }
        const currentPath = path + direction;
        seen.push(location);
        findPaths(location, seen, currentPath);
      }
    }
    findPaths();
    return paths;
  },

  mazeEscapeIterative(maze) {
    const end = `${maze.length - 1}${maze[0].length - 1}`;
    const mazeMap = new Map();
    maze.forEach((rowArr, row) =>
      rowArr.forEach((_, column) => {
        const adjacentNodes = {
          R: [" ", "e"].includes(maze[row]?.[column + 1])
            ? `${row}${column + 1}`
            : null,
          D: [" ", "e"].includes(maze[row + 1]?.[column])
            ? `${row + 1}${column}`
            : null,
          U: [" ", "e"].includes(maze[row - 1]?.[column])
            ? `${row - 1}${column}`
            : null,
          L: [" ", "e"].includes(maze[row]?.[column - 1])
            ? `${row}${column - 1}`
            : null,
        };

        mazeMap.set(
          `${row}${column}`,
          Object.entries(adjacentNodes).filter(([key, value]) => value)
        );
      })
    );
    const queue = [{ location: "00", path: "" }];
    const visited = [];
    while (queue.length) {
      const currentNode = queue.pop();
      if (currentNode.location === end) return currentNode.path;
      visited.push(currentNode.location);
      const edges = mazeMap.get(currentNode.location);
      edges.forEach(([direction, location]) => {
        if (!visited.includes(location))
          queue.push({ location, path: `${currentNode.path}${direction}` });
      });
    }
  },
  mazeEscapeAllIterative(maze) {
    const end = `${maze.length - 1}${maze[0].length - 1}`;
    const mazeMap = new Map();
    maze.forEach((rowArr, row) =>
      rowArr.forEach((_, column) => {
        const adjacentNodes = {
          R: [" ", "e"].includes(maze[row]?.[column + 1])
            ? `${row}${column + 1}`
            : null,
          D: [" ", "e"].includes(maze[row + 1]?.[column])
            ? `${row + 1}${column}`
            : null,
          U: [" ", "e"].includes(maze[row - 1]?.[column])
            ? `${row - 1}${column}`
            : null,
          L: [" ", "e"].includes(maze[row]?.[column - 1])
            ? `${row}${column - 1}`
            : null,
        };

        mazeMap.set(
          `${row}${column}`,
          Object.entries(adjacentNodes).filter(([key, value]) => value)
        );
      })
    );
    const queue = [{ location: "00", path: "", visited: [] }];
    const paths = [];
    while (queue.length) {
      const currentNode = queue.pop();
      if (currentNode.location === end) paths.push(currentNode.path);
      const edges = mazeMap.get(currentNode.location);
      edges.forEach(([direction, location]) => {
        if (!currentNode.visited.includes(location))
          queue.push({
            location,
            path: `${currentNode.path}${direction}`,
            visited: [...currentNode.visited, currentNode.location],
          });
      });
    }
    return paths;
  },

  anagrams(string) {
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
  },

  anagramsIterative(string) {
    const answers = new Set();
    answers.add(string);
    const queue = [{ prefix: [], otherChars: string.split("") }];
    while (queue.length) {
      const current = queue.pop();
      if (current.prefix.length === string.length) {
        answers.add(current.prefix.join(''));
        continue;
      }
      for (let i = 0; i < current.otherChars.length; i++) {
        queue.push({
          prefix: [...current.prefix, current.otherChars[i]],
          otherChars: [
            ...current.otherChars.slice(0, i),
            ...current.otherChars.slice(i+1),
          ],
        });
      }
    }
    return answers;
  },

  //input object
  //output indented console log?

  organizationChart(object) {
    let string = "";
    function recursion(obj, indentation = "") {
      for ([key, value] of Object.entries(obj)) {
        if (!value) {
          string = string + indentation + key + "\n";
        } else {
          string = string + indentation + key + "\n";
          recursion(value, indentation + `  `);
        }
      }
    }
    recursion(object);
    return string;
  },

  binaryRepresentation(num, binary = "") {
    if (num === 0) return binary;
    return binaryRepresentation(Math.floor(num / 2), (num % 2) + binary);
  },
};
