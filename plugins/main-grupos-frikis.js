import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/iizo.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Buscas una comunidad de anime? aqui tienes los enlaces de la comunidad frikilandia de WhatsApp, si queréis ver los grupos de Facebook y Telegram pon:* 

*.grupos*
*.Facebook*
*.Telegram*

*➤ Comunidad frikilandia*

*亀🇪🇸 𝔽𝕒𝕟𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🇪🇸亀*
https://chat.whatsapp.com/ChQubdKdYav2XpohU8Vs3R

*🌍 Bola de drac català 🌍*
https://chat.whatsapp.com/Jl57mUSc0Nr0DxdqcB74hI

*🌍 Bola de drac en Valencià 🌍*
https://chat.whatsapp.com/IhWTZM7Wu36AiiXE7mfXak

*🌍 𝗕𝗼𝗹𝗮 𝗱𝗼 𝗱𝗿𝗮𝗴𝗼𝗻 🌍*
https://chat.whatsapp.com/J644aEYo8BXITv6ZOLyYpi

*🌍 Dragoi bola 🌍*
https://chat.whatsapp.com/LE7qPMXoSMH5Rh40R8aPlE

*🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍*
https://chat.whatsapp.com/EGR7UJ4mvjMD0hc0ZoAxwI

*🌍⚡🔥 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑷𝒐𝒌𝒆𝒎𝒐𝒏 🔥⚡🌍*
https://chat.whatsapp.com/KfMhKx6jRUR8jzZB13M2hB

*🌍🍥🍜 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑵𝒂𝒓𝒖𝒕𝒐 🍜🍥🌍*
https://chat.whatsapp.com/CIsIuOpJoEX72KsLMHpMHz

*🌍 👒⛩️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑶𝒏𝒆 𝒑𝒊𝒆𝒄𝒆 ⛩️👒🌍*
https://chat.whatsapp.com/KkanOPfYmn2DE0oErnxdKf

*🌍🦾🦿 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑴𝒂𝒛𝒊𝒏𝒈𝒆𝒓 𝒁 🦿🦾🌍*
https://chat.whatsapp.com/CtZOjnEVUEBHuaEnsNoo7H

*🌍😺🐼 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑹𝒂𝒏𝒎𝒂 ½ 🐼😺🌍*
https://chat.whatsapp.com/CRYP316MujxKFYiIHe9ZEx

*🌍⚔️🛡️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒂𝒕𝒂𝒒𝒖𝒆 𝒂 𝒍𝒐𝒔 𝒕𝒊𝒕𝒂𝒏𝒆𝒔 ⚔️🛡️🌍*
https://chat.whatsapp.com/Bjf43ZD8ZlZBCWE0Yv3jIX

*🌍🃏♣️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑲𝒂𝒌𝒆𝒈𝒖𝒓𝒖𝒊 ♣️🃏🌍*
https://chat.whatsapp.com/By1GlKQ5yLQAYYxhTR8t9N

*🌍⚔️🗡️ 𝑲𝒊𝒍𝒍 𝒍𝒂 𝒌𝒊𝒍𝒍 🗡️⚔️🌍*
https://chat.whatsapp.com/IIH75WjAuzhBSrd05wFsgV

*🌍🎭🐻 𝑩𝒍𝒆𝒂𝒄𝒉 🐻🎭🌍*
https://chat.whatsapp.com/J0vzttZbKXqKeUZPj0fUYa

*🌍💪🦲 𝑶𝒏𝒆 𝒑𝒖𝒏𝒄𝒉 𝒎𝒂𝒏 🦲💪🌍*
https://chat.whatsapp.com/CjPAAmdWQzO07yzPoypr6O

*Ayudanos con el gasto del servidor http://paypal.me/GokuBotyJuan1986*

*Actualizado 22/09/2024.*

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(gruposfrikis)$/i
export default handler
