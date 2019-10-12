require('dotenv').config({ path: __dirname + '/.env' })

const current_entry = process.env.WEBPACK_CURRENT_ENTRY

module.exports = {
  rootDir: '.',
  preset: 'ts-jest/presets/js-with-babel',
  roots: [ 'tests/' + current_entry ],
  setupFilesAfterEnv: [ 'jest-dom/extend-expect', '@testing-library/react/cleanup-after-each' ],
  transform: {
    '\\.(ts|tsx)?$': 'babel-jest'
  }
}
