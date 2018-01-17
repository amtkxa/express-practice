// Expressモジュールのインポート
const express = require('express')
const app = express()
const port = 3000

// body-parserを有効にする
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// サーバ起動
app.listen(port, () => {
    console.log('Express Server is started', `http://localhost:${port}`)
})

// GET
app.get('/', (req, res) => {
    res.send(
        '<form method="POST">' +
        '<textarea name="memo">テスト</textarea><br />' +
        '<input type="submit" value="送信">' +
        '</form>'
    )
})

// POST
app.post('/', (req, res) => {
    const body = JSON.stringify(req.body)
    res.send('POSTを受信：' + body)
})
