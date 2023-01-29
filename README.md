# fastcampus-react30

# 1. Basic

## node 및 웹팩설치

```
npm init -y
npm i -D webpack webpack-cli webpack-dev-server
```

- npx webpack-dev-server 개발 서버 실행
- -D : devDependency

## 웹팩 플러그인 설치

```
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
```

**HtmlWebpackPlugin은 webpack 번들을 제공하는 HTML 파일 생성을 단순화합니다. 이 플러그인은 매번 컴파일에 변경되는 해시로 된 파일 이름을 가진 webpack 번들에 특히 유용합니다. 플러그인이 HTML 파일을 생성하도록 하거나 lodash 템플릿을 사용하여 나만의 템플릿을 제공하거나 나만의 로더를 사용할 수 있습니다.**

## eslint prettier 설치

```
    npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

- eslint-config-prettier
  - eslint랑 prettier 겹치는 설정 충돌 방지
  - 코드 오류를 잡는데는 eslint, 코드 포맷팅에는 prettier를 사용하는 방법이다.
- eslint-plugin-prettier
  - eslint에 prettier의 포맷팅 추가 ~ eslint의 플러그인에 추가

## package.json script 설정

- "build": "webpack --mode=production" //공백없는 production 모드로 빌드

```
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "2.8.3"
```

- ^ 유무 차이 : 자동 업데이트 허용 유무

### eslint설치 후 초기화

```
npx eslint --init
```

## workspace setting

```
 {
  "editor.formatOnSave": true, // 저장할때마다 포맷팅
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true  //저장할때 eslint가 fix
  }
}
```
