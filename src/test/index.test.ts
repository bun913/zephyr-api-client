import { describe, it, expect } from 'vitest';
import { add } from '../index';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  it('should handle zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});
