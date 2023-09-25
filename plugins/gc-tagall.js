const handler = async (m, {isOwner, isAdmin, conn, const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* 𝙰𝙻𝙲𝙰𝙱𝙾𝚃🌟`;
  let teks = `*𝙼𝙴𝙽𝙲𝙸𝙾𝙽 𝙶𝙴𝙽𝙴𝚁𝙰𝙻*\n\n🌟 𝙰𝙻𝙲𝙰-𝙱𝙾𝚃 \n\n🌟 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `⭐️ @${mem.id.split('@')[0]}\n`;
  }
   teks += `* 𝙲 𝚁 𝙴 𝙰 𝚃 𝙾 𝚁 \n\n*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;