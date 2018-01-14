// Expressモジュールのインポート
const express = require('express')
const app = express()
const port = 3000

// アクセス時のレスポンス
app.get('/', (req, res, next) => {
    res.send('Express Server')
})

// サーバ起動
app.listen(port, () => {
    console.log('Express Server is started', `http://localhost:${port}`)
})
