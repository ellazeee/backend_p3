const express = require("express");
const app = express();
const menuRoutes = require('./routes/menu')
const karyawanRoutes = require('./routes/karyawan')
const pelangganRoutes = require('./routes/pelanggan')
const dbConnection = require('./config/database')

app.use(express.json())
app.use('/', (req, res, next) => {
    console.log("Request Masuk")
    next()
})
app.use('/menu', menuRoutes)
app.use('/karyawan', karyawanRoutes)
app.use('/pelanggan', pelangganRoutes)


app.listen(3000, () => {
    console.log("Sudah berjalaan di port 3000");

});

