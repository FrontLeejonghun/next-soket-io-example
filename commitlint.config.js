module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'fix', // 오류 수정
        'feat', // 기능 추가
        'add', // 파일 추가
        'update', // 업데이트(동작하는 코드 변경)
        'delete', // 파일 삭제
        'refactor', // 리팩토링(동작하는 코드 개선)
        'deps', // 의존성 추가
        'docs', // 문서 작성 및 수정
        'hotfix', // 긴급 수정
      ],
    ],
  }
}
