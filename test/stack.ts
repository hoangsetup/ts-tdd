import {expect} from 'chai';
import {Stack} from '../src/stack';

describe('Stack', () => {
  describe('constructor', () => {
    it('should be initialized without an initializer', () => {
      const s = new Stack<number>();
      expect(s.size()).to.equal(0);
    });

    it('should be initialized with an initializer', () => {
      const s = new Stack<number>([1, 2, 3, 4]);
      expect(s.size()).to.equal(4);
    });
  });

  describe('push', () => {
    it('should be pushed upon', () => {
      const s = new Stack<number>([1, 2, 3, 4]);
      s.push(5);
      expect(s.size()).to.equal(5);
      expect(s.peek()).to.equal(5);
    });
  });

  describe('pop', () => {
    it('should be popped', () => {
      const s = new Stack<number>([1, 2, 3, 4]);
      expect(s.pop()).to.equal(4);
      expect(s.size()).to.equal(3);
    });

    it('should be return undefined when no elements', () => {
      const s = new Stack<number>();
      expect(s.pop()).to.be.undefined;
    });
  });

  describe('peek', () => {
    it('should be peeked', () => {
      const s = new Stack<number>([1, 2, 3, 4]);
      expect(s.peek()).to.equal(4);
      expect(s.size()).to.equal(4);
    });

    it('should be return undefined when empty', () => {
      const s = new Stack<number>();
      expect(s.peek()).to.be.undefined;
    });
  });

  describe('isEmpty', () => {
    it('should be returns true when empty', () => {
      const s = new Stack<number>();
      expect(s.isEmpty()).to.be.true;
    });
    it('should be return false when not empty', () => {
      const s = new Stack<number>([1, 2, 3, 4]);
      expect(s.isEmpty()).to.be.false;
    });
  });
});
