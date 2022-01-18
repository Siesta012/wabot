let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085871388418]
│ • By.U [085158858516]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [083195903801]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
