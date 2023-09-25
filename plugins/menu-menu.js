import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `
*⭐️┏━━━━━━━━━━━━━━━━┓
┣*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝘼𝙇𝘾𝘼𝘽𝙊𝙏 🛠️ ]⭐️*
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝘼𝘿𝙈’𝙎]⭐️*
┣⚙️ _${usedPrefix}on *:* off *bienvenida*_
┣⚙️ _${usedPrefix}on *:* off *avisos*_
┣⚙️ _${usedPrefix}on *:* off *autonivel*_
┣⚙️ _${usedPrefix}on *:* off *stickers*_
┣⚙️ _${usedPrefix}on *:* off *autosticker*_
┣⚙️ _${usedPrefix}on *:* off *reaction*_
┣⚙️ _${usedPrefix}on *:* off *audios*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶𝑺]⭐️*
┣🦋 _${usedPrefix}sacar | ban | kick_
┣🦋 _${usedPrefix}grupo *abrir : cerrar*_
┣🦋 _${usedPrefix}group *open : close*_
┣🦋 _${usedPrefix}daradmin*@tag*_
┣🦋 _${usedPrefix}quitar *@tag*_
┣🦋 _${usedPrefix}banchat_
┣🦋 _${usedPrefix}unbanchat_
┣🦋 _${usedPrefix}banuser *@tag*_
┣🦋 _${usedPrefix}admins *texto*_
┣🦋 _${usedPrefix}invocar *texto*_
┣🦋 _${usedPrefix}newdesc *texto*_
┣🦋 _${usedPrefix}bienvenida *texto*_
┣🦋 _${usedPrefix}despedida *texto*_
┃*⭐️[ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 / 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ]⭐️*
┣🦋 _${usedPrefix}play *texto*_
┣🦋 _${usedPrefix}tts es *texto*_
┣🦋 _${usedPrefix}sticker | s *imagen*_
┗━━━━━━━━━━━━━━━━┛

*⚡️ ALCA VENTAS 528241050228 ⚡️*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
