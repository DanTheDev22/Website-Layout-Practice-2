/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard-scss"],
  'rules': {
    'property-no-deprecated':'warn',
    'no-duplicate-selectors':'warn',
    'block-no-empty':'warn',
    'color-no-invalid-hex':'warn',
    'no-invalid-position-declaration':'warn',
    'no-irregular-whitespace':'warn',
    'selector-max-id': 0,
    'selector-max-universal': 1,
    'number-leading-zero' :'always'
  }
};
