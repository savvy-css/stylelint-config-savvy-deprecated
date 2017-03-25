'use strict';

const config = require('../');
const stylelint = require('stylelint');
const validCSS = require('./lib/valid-css');
const invalidCSS = require('./lib/invalid-css');

describe('Linting valid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCSS,
      config
    });
  });

  it('throws no errors', () => {
    return result.then(data => {
      return expect(data.errored).toBeFalsy();
    });
  });

  it('flags no warnings', () => {
    return result.then(data => {
      return expect(data.results[0].warnings.length).toBe(0);
    });
  });
});

describe('Linting invalid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCSS,
      config
    });
  });

  it('throws errors', () => {
    return result.then(data => {
      return expect(data.errored).toBeTruthy();
    });
  });

  it('flags warnings', () => {
    return result.then(data => {
      return expect(data.results[0].warnings.length).toBe(2);
    });
  });
});
