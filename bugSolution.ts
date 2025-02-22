function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers

function addString(a: string, b: string): string {
  return a + b; // Correct: Both arguments are strings
}

let stringResult = addString("1", "2"); // Correct: Both arguments are strings.