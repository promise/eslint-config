// https://typescript-eslint.io/rules/#supported-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "@typescript-eslint/adjacent-overload-signatures": ["off"],
  "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
  "@typescript-eslint/await-thenable": ["error"],
  "@typescript-eslint/ban-ts-comment": ["error"],
  "@typescript-eslint/ban-tslint-comment": ["error"],
  "@typescript-eslint/class-literal-property-style": ["error", "fields"],
  "@typescript-eslint/consistent-generic-constructors": ["error"],
  "@typescript-eslint/consistent-indexed-object-style": ["error"],
  "@typescript-eslint/consistent-type-assertions": ["error"],
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
  "@typescript-eslint/consistent-type-imports": ["error"],
  "@typescript-eslint/explicit-function-return-type": ["off"],
  "@typescript-eslint/explicit-member-accessibility": ["off"],
  "@typescript-eslint/explicit-module-boundary-types": ["error"],
  "@typescript-eslint/member-ordering": ["off"],
  "@typescript-eslint/method-signature-style": ["error", "method"],
  "@typescript-eslint/naming-convention": ["off"],
  "@typescript-eslint/no-array-delete": ["error"],
  "@typescript-eslint/no-base-to-string": ["error"],
  "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
  "@typescript-eslint/no-confusing-void-expression": ["off"],
  "@typescript-eslint/no-deprecated": ["error"],
  "@typescript-eslint/no-duplicate-enum-values": ["error"],
  "@typescript-eslint/no-duplicate-type-constituents": ["error"],
  "@typescript-eslint/no-dynamic-delete": ["error"],
  "@typescript-eslint/no-empty-object-type": ["warn"],
  "@typescript-eslint/no-explicit-any": ["warn"],
  "@typescript-eslint/no-extra-non-null-assertion": ["error"],
  "@typescript-eslint/no-extraneous-class": ["error"],
  "@typescript-eslint/no-floating-promises": ["error"],
  "@typescript-eslint/no-for-in-array": ["off"],
  "@typescript-eslint/no-import-type-side-effects": ["error"],
  "@typescript-eslint/no-inferrable-types": ["error"],
  "@typescript-eslint/no-invalid-void-type": ["error"],
  "@typescript-eslint/no-meaningless-void-operator": ["error"],
  "@typescript-eslint/no-misused-new": ["error"],
  "@typescript-eslint/no-misused-promises": ["error"],
  "@typescript-eslint/no-mixed-enums": ["error"],
  "@typescript-eslint/no-namespace": ["error"],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],
  "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
  "@typescript-eslint/no-non-null-assertion": ["off"],
  "@typescript-eslint/no-redundant-type-constituents": ["error"],
  "@typescript-eslint/no-require-imports": ["error"],
  "@typescript-eslint/no-restricted-types": ["error"],
  "@typescript-eslint/no-this-alias": ["error"],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
  "@typescript-eslint/no-unnecessary-condition": ["error"],
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": ["error"],
  "@typescript-eslint/no-unnecessary-qualifier": ["error"],
  "@typescript-eslint/no-unnecessary-template-expression": ["error"],
  "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
  "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
  "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
  "@typescript-eslint/no-unnecessary-type-parameters": ["error"],
  "@typescript-eslint/no-unsafe-argument": ["error"],
  "@typescript-eslint/no-unsafe-assignment": ["error"],
  "@typescript-eslint/no-unsafe-call": ["error"],
  "@typescript-eslint/no-unsafe-declaration-merging": ["error"],
  "@typescript-eslint/no-unsafe-enum-comparison": ["error"],
  "@typescript-eslint/no-unsafe-function-type": ["error"],
  "@typescript-eslint/no-unsafe-member-access": ["error"],
  "@typescript-eslint/no-unsafe-return": ["error"],
  "@typescript-eslint/no-unsafe-type-assertion": ["off"],
  "@typescript-eslint/no-unsafe-unary-minus": ["error"],
  "@typescript-eslint/no-useless-empty-export": ["error"],
  "@typescript-eslint/no-wrapper-object-types": ["error"],
  "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
  "@typescript-eslint/only-throw-error": ["error"],
  "@typescript-eslint/parameter-properties": ["error"],
  "@typescript-eslint/prefer-as-const": ["error"],
  "@typescript-eslint/prefer-enum-initializers": ["off"],
  "@typescript-eslint/prefer-find": ["error"],
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
  "@typescript-eslint/promise-function-async": ["off"],
  "@typescript-eslint/related-getter-setter-pairs": ["error"],
  "@typescript-eslint/require-array-sort-compare": ["error"],
  "@typescript-eslint/restrict-plus-operands": ["error"],
  "@typescript-eslint/restrict-template-expressions": ["error"],
  "@typescript-eslint/return-await": ["error"],
  "@typescript-eslint/strict-boolean-expressions": ["off"],
  "@typescript-eslint/switch-exhaustiveness-check": ["error"],
  "@typescript-eslint/triple-slash-reference": ["error"],
  "@typescript-eslint/typedef": ["error"],
  "@typescript-eslint/unbound-method": ["off"],
  "@typescript-eslint/unified-signatures": ["error"],
  "@typescript-eslint/use-unknown-in-catch-callback-variable": ["error"],
};
