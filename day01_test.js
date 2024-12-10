import { assert, assertEquals } from 'jsr:@std/assert';
import { historianHysteria, similarityScore } from './day01.js';

const sampleInput = `3 4
4 3
2 5
1 3
3 9
3 3`;

Deno.test('Part 1 historianHysteria', async (t) => {
  await t.step('processes sample data correctly', () => {
    const result = historianHysteria(sampleInput);
    assertEquals(result, 11);
  });
});

Deno.test('Part 2 similarityScore', async (t) => {
  await t.step('processes sample data correctly', () => {
    const result = similarityScore(sampleInput);
    assertEquals(result, 31);
  });
});
