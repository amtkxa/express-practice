// Expressモジュールのインポート
const express = require('express')
const app = express()
const port = 3000

// ルート
app.get('/', (req, res) => {
    // クエリパラメータなし
    if (!req.query.key1) {
        res.send(
            '<p>' +
            '<a href="/dice/6">6面体のサイコロ</a><br />' +
            '<a href="/dice/12">12面体のサイコロ</a>' +
            '<p>'
        )
    } else {
        const q = parseInt(req.query.key1, 10)
        res.send('今回の値は...' + dice(q))
    }
})

// サイコロ
app.get('/dice/:num', (req, res) => {
    res.send('サイコロの値は...' + dice(req.params.num))
})

function dice(n) {
    return Math.floor(Math.random() * n) + 1
}

// サーバ起動
app.listen(port, () => {
    console.log('Express Server is started', `http://localhost:${port}`)
})
