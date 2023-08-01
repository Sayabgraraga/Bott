const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6288276280732'] // no own
global.packname = '© XzyyBotzz' // nama pack sticker
global.author = 'Imba Store'// nama author 
global.domain = 'https://namadom' // Isi Domain Lu
global.apikey = 'ptla_2Kn090PfeSymY4sAxync7XbI4pHAkgjC5TTybllnTvL' // Isi Apikey Plta Lu
global.capikey = 'ptlc_jTvtqOssK4RsKpJoFobgcVSV0ZBRohIknXeAeSO3Z1W' // Isi Apikey Pltc Lu
// api & cpi srv admin kalo mau di satuin isi sama aja kayak di atas👆
global.domainadmin = 'https://xzyybotzoffl.xyz'
global.apiadmin = 'ptla_2Kn090PfeSymY4sAxync7XbI4pHAkgjC5TTybllnTvL'
global.cpiadmin = 'ptlc_jTvtqOssK4RsKpJoFobgcVSV0ZBRohIknXeAeSO3Z1W'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.qrisdana = { url: 'https://telegra.ph/file/2315c29bdf180abe86c8f.jpg'}
global.qrisgopay = { url: 'https://telegra.ph/file/2315c29bdf180abe86c8f.jpg'}
global.jasapanel = { url: 'https://telegra.ph/file/2315c29bdf180abe86c8f.jpg'}
global.menu = { url: 'https://telegra.ph/file/286e5975bb9124f373e2f.jpg'}
global.anjay = { url: 'https://telegra.ph/file/286e5975bb9124f373e2f.jpg'}
global.qrisallpay = { url: 'https://telegra.ph/file/2315c29bdf180abe86c8f.jpg' } //Gak Usah Di Ganti

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})