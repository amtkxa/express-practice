// Expressモジュールのインポート
const express = require('express')
const app = express()
const port = 3000

// multerモジュールのインポート
const multer = require('multer')
const path = require('path')

// ファイルのアップロード先の指定
const tmpDir = path.join(__dirname, 'tmp')
const pubDir = path.join(__dirname, 'pub')
const uploader = multer({ dest: tmpDir })

// サーバ起動
app.listen(port, () => {
    console.log('Express Server is started', `http://localhost:${port}`)
})

// GET
app.get('/', (req, res) => {
    res.send(
        '<form method="POST" acton="/" enctype="multipart/form-data">' +
        '<input type="file" name="File">' +
        '<input type="submit" value="アップロード">' +
        '</form>'
    )
})

app.use('/pub', express.static(pubDir))

// POST
app.post('/', uploader.single('File'), (req, res) => {

    // Debug
    console.log(req.file)

    // ファイルの形式チェック
    if (req.file.mimetype !== 'image/png') {
        res.send('PNG画像以外はアップロードできません')
        return
    }

    // ファイルを移動する
    const fname = req.file.filename + '.png'
    const dest = pubDir + '/' + fname
    const fs = require('fs')
    fs.rename(req.file.path, dest)

    // HTMLを出力
    res.send('ファイルを受信しました<br />' + `<img src="/pub/${fname}" />`)
})
