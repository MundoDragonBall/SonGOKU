let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:YerTX2;;\nFN:Juan1986 \nORG:YerTX2 🌟\nTITLE:\nitem1.TEL;waid=34636445091:51907376960\nitem1.X-ABLabel:YerTX2 🌟\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:YerTX2  🌟\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'YerTX2.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
