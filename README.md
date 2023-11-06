## 패키지 매니저

> yarn

### 이유

- 딱히 없음. yarn berry나 pnpm 등의 신상 패키지 매니저를 쓰면서까지 빌드 시간을 단축시킬 프로젝트가 아님.
- npm에 비해 cli가 깔끔하고, 안내 log가 친절함.

### 설치

- node 설치(아마 되어있을 듯)
- npm -g install yarn

### 기본 동작

- yarn add( = npm install ~ )
- yarn create( = npx ~ )
- 프로젝트 cli(yarn dev, build, start, lint 등, = npm run ~ )

## 프로젝트 시작

- 이 repo를 자신의 repo에 fork
- git clone https://github.com/[your_id]/next-netflix-18th.git
- 프로젝트 디렉토리에서 yarn install

## branch 전략

- 기능을 구현하기 전 team repo에서 최신 버전의 master 상태를 pull한 후 개발 진행
- 큼지막한 기능 별로 feature/기능이름 과 같은 형태로 branch 생성 후 코드 작성
- 작성이 완료되면 바로 merge 하는게 아니라 pr 생성(new pull request 버튼 누르면 자동으로 pr template이 적용되어 있음)
- 상대방이 approve 하면 merge 하는 것을 원칙으로 하나 서로 얘기해보고 괜찮다 싶으면 스스로 master에 merge(무튼 merge 하기 전에 상대방에게 확인받기는 해야 함)

## 배포

- 팀 repo 그대로 vercel에 배포하려면 요금을 지불해야 함
- 따라서, 팀 repo를 오대균 github에 fork 하여, 오대균 repo에서 배포 함
- 수동으로 배포하면 번거로우니 다음과 같은 flow로 배포되도록 설정함
  > 1. team repo master branch에 push 발생
  > 2. 오대균 repo의 master branch에 변경사항 자동으로 적용
  > 3. vercel이 이를 인식하고 자동으로 배포 반영

## 궁금한 점이 있다면

- 아무 때나 말하세요
