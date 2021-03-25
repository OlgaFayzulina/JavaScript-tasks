// Сервер

const express = require('express');

const app = express();

const listener = app.listen(4444, () => {
    console.log('Веб-сервер запущен на порте ${listener.address().port}');
});