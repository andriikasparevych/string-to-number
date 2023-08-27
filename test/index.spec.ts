import { toNumber } from '../src';

describe('toNumber', () => {
  it.each`
    inputString    | expectedOutput
    ${'0'}         | ${0}
    ${'-1'}        | ${-1}
    ${'1'}         | ${1}
    ${'1.123'}     | ${1.123}
    ${'-1.123'}    | ${-1.123}
    ${'0.0'}       | ${0}
    ${'123,456'}   | ${NaN}
    ${'abc'}       | ${NaN}
    ${''}          | ${0}
    ${'Infinity'}  | ${Infinity}
    ${'-Infinity'} | ${-Infinity}
    ${'1e309'}     | ${Infinity}
    ${'-1e309'}    | ${-Infinity}
  `(
    "should return $expectedOutput when passed '$inputString'",
    async ({ inputString, expectedOutput }) => {
      expect(toNumber(inputString)).toBe(expectedOutput);
    }
  );
});
