module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    // 'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // 'subject-empty': [0],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [0],
    // 'type-empty': [0],
    'type-enum': [0],
  },
  parserPreset: {
    parserOpts: {
      headerPattern:
        /(^(feat|fix|docs|pref|init|add|build|chore|ci|del|refactor|revert|style|test|merge): (.+){1,50}.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
};
