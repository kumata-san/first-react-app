import ReactDOM from 'react-dom' // renderをしないといけないので、index.jsにはこれが必要
import React from 'react'
import App from './App' // 自作コンポーネントパスは原則相対パスで読み込むこと、そうしないとreact-domなどのように依存モジュールだと思われてしまう

ReactDOM.render(<App />, document.getElementById('root'))