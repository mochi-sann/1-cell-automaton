/*
  * 000   0
*   001   1
*   010   1
*   011   1
*   100   1
*   101   0
*   110   0
*   111   0
*/

const SIZE = 161;
const REPEAT = 100;
type ConvertType = 0 | 1;
type ConvertInput = Array<0 | 1>;
const ComparisonArray = (array: any, array2: any): boolean => {
  return JSON.stringify(array) === JSON.stringify(array2);
};
const CovertAutomaton = (input: ConvertInput): ConvertType => {
  if (ComparisonArray(input, [0, 0, 0])) {
    return 0;
  } else if (ComparisonArray(input, [0, 0, 1])) {
    return 1;
  } else if (ComparisonArray(input, [0, 1, 0])) {
    return 1;
  } else if (ComparisonArray(input, [0, 1, 1])) {
    return 1;
  } else if (ComparisonArray(input, [1, 0, 0])) {
    return 1;
  } else if (ComparisonArray(input, [1, 0, 1])) {
    return 0;
  } else if (ComparisonArray(input, [1, 1, 0])) {
    return 0;
  } else if (ComparisonArray(input, [1, 1, 1])) {
    return 0;
  } else return 0;
};

const main = () => {
  // 最初の変数を初期化する
  let Pattern = Array(SIZE).fill(0);
  let prePattern = Pattern;
  prePattern[Math.floor(SIZE / 2)] = 1;
  // 描画するところ
  for (let i = 0; i < REPEAT; i++) {
    prePattern = Pattern.map((value, i) => {
      return CovertAutomaton([Pattern[i - 1], value, Pattern[i + 1]]);
    });
    Pattern = prePattern;
    console.log(Pattern.join(""));
  }
};
main();
