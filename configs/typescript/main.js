/* eslint-disable max-len */
// https://typescript-eslint.io/rules/#supported-rules

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "@typescript-eslint/adjacent-overload-signatures": ["error"],
  "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
  "@typescript-eslint/await-thenable": ["error"],
  "@typescript-eslint/ban-ts-comment": ["error"],
  "@typescript-eslint/ban-tslint-comment": ["error"],
  "@typescript-eslint/ban-types": ["error"],
  "@typescript-eslint/class-literal-property-style": ["error", "fields"],
  "@typescript-eslint/consistent-indexed-object-style": ["error"],
  "@typescript-eslint/consistent-type-assertions": ["error"],
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
  "@typescript-eslint/consistent-type-imports": ["error"],
  "@typescript-eslint/explicit-function-return-type": ["off"],
  "@typescript-eslint/explicit-member-accessibility": ["off"],
  "@typescript-eslint/explicit-module-boundary-types": ["error"],
  "@typescript-eslint/member-delimiter-style": ["error"],
  "@typescript-eslint/member-ordering": ["error"],
  "@typescript-eslint/method-signature-style": ["error", "method"],
  "@typescript-eslint/naming-convention": ["off"],
  "@typescript-eslint/no-base-to-string": ["error"],
  "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
  "@typescript-eslint/no-confusing-void-expression": ["off"],
  "@typescript-eslint/no-dynamic-delete": ["error"],
  "@typescript-eslint/no-empty-interface": ["warn"],
  "@typescript-eslint/no-explicit-any": ["warn"],
  "@typescript-eslint/no-extra-non-null-assertion": ["error"],
  "@typescript-eslint/no-extraneous-class": ["error"],
  "@typescript-eslint/no-floating-promises": ["error"],
  "@typescript-eslint/no-for-in-array": ["off"],
  "@typescript-eslint/no-inferrable-types": ["error"],
  "@typescript-eslint/no-invalid-void-type": ["error"],
  "@typescript-eslint/no-meaningless-void-operator": ["error"],
  "@typescript-eslint/no-misused-new": ["error"],
  "@typescript-eslint/no-misused-promises": ["error"],
  "@typescript-eslint/no-namespace": ["error"],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],
  "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
  "@typescript-eslint/no-non-null-assertion": ["off"],
  "@typescript-eslint/no-parameter-properties": ["error"],
  "@typescript-eslint/no-redundant-type-constituents": ["error"],
  "@typescript-eslint/no-require-imports": ["error"],
  "@typescript-eslint/no-this-alias": ["error"],
  "@typescript-eslint/no-type-alias": ["off"],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
  "@typescript-eslint/no-unnecessary-condition": ["error"],
  "@typescript-eslint/no-unnecessary-qualifier": ["error"],
  "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
  "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
  "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
  "@typescript-eslint/no-unsafe-argument": ["error"],
  "@typescript-eslint/no-unsafe-assignment": ["error"],
  "@typescript-eslint/no-unsafe-call": ["error"],
  "@typescript-eslint/no-unsafe-member-access": ["error"],
  "@typescript-eslint/no-unsafe-return": ["error"],
  "@typescript-eslint/no-useless-empty-export": ["error"],
  "@typescript-eslint/no-var-requires": ["error"],
  "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
  "@typescript-eslint/prefer-as-const": ["error"],
  "@typescript-eslint/prefer-enum-initializers": ["off"],
  "@typescript-eslint/prefer-for-of": ["error"],
  "@typescript-eslint/prefer-function-type": ["error"],
  "@typescript-eslint/prefer-includes": ["error"],
  "@typescript-eslint/prefer-literal-enum-member": ["off"],
  "@typescript-eslint/prefer-namespace-keyword": ["error"],
  "@typescript-eslint/prefer-nullish-coalescing": ["error"],
  "@typescript-eslint/prefer-optional-chain": ["error"],
  "@typescript-eslint/prefer-readonly": ["error"],
  "@typescript-eslint/prefer-readonly-parameter-types": ["off"],
  "@typescript-eslint/prefer-reduce-type-parameter": ["error"],
  "@typescript-eslint/prefer-regexp-exec": ["error"],
  "@typescript-eslint/prefer-return-this-type": ["error"],
  "@typescript-eslint/prefer-string-starts-ends-with": ["error"],
  "@typescript-eslint/prefer-ts-expect-error": ["error"],
  "@typescript-eslint/promise-function-async": ["off"],
  "@typescript-eslint/restrict-plus-operands": ["error"],
  "@typescript-eslint/restrict-template-expressions": ["error"],
  "@typescript-eslint/sort-type-union-intersection-members": ["error"],
  "@typescript-eslint/strict-boolean-expressions": ["off"],
  "@typescript-eslint/switch-exhaustiveness-check": ["error"],
  "@typescript-eslint/triple-slash-reference": ["error"],
  "@typescript-eslint/type-annotation-spacing": ["error"],
  "@typescript-eslint/typedef": ["error"],
  "@typescript-eslint/unbound-method": ["off"],
  "@typescript-eslint/unified-signatures": ["error"],
};

module.exports = rules;
