module.exports = {
    moduleNameMapper: {
      '@core/(.*)': '<rootDir>/src/app/core/$1',
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage/angular-multi-projects'
  };

// import 'jest-preset-angular/setup-jest';
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig.spec');
// module.exports = {
//   preset: 'jest-preset-angular',
//   roots: ['<rootDir>/src/'],
//   testMatch: ['**/+(*.)+(spec).+(ts)'],
//   setupFilesAfterEnv: ['<rootDir>/src/jest.base.setup.ts'],
//   collectCoverage: true,
//   coverageReporters: ['html'],
//   coverageDirectory: 'coverage/my-app',
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
//     prefix: '<rootDir>/'
//   })
// };

// /* global mocks for jsdom */
// // const mock = () => {
// //   let storage: { [key: string]: string } = {};
// //   return {
// //     getItem: (key: string) => (key in storage ? storage[key] : null),
// //     setItem: (key: string, value: string) => (storage[key] = value),
// //     removeItem: (key: string) => delete storage[key],
// //     clear: () => (storage = {}),
// //   };
// // };

// // Object.defineProperty(window, 'localStorage', { value: mock() });
// // Object.defineProperty(window, 'sessionStorage', { value: mock() });
// // Object.defineProperty(window, 'getComputedStyle', {
// //   value: () => ['-webkit-appearance'],
// // });

// // Object.defineProperty(document.body.style, 'transform', {
// //   value: () => {
// //     return {
// //       enumerable: true,
// //       configurable: true,
// //     };
// //   },
// // });

// /* output shorter and more meaningful Zone error stack traces */
// // Error.stackTraceLimit = 2;


// // outro


