/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📑",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *${config.MODE}*
*❖│▸* *ᴘʀᴇғɪx* : *${config.PREFIX}*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』❖*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *Kɢ Tᴇᴄʜ*
*❖│▸* *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *4.2.1*
*┬│▸*
*└──────────────···▸*
  Kᴇʀᴍ & Gɪꜰꜰᴀʀᴇɴᴏ = Kɢ
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.sᴏɴɢ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.sᴘᴏᴛɪꜰʏ*
*┋* *.ᴠɪᴅᴇᴏ4*
*┋* *.ɪᴍɢ*
*┋* *.Lʏʀɪᴄs*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ᴘʟᴀʏ4*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏮EMPIRE KERM🏮* *❒⁠⁠⁠⁠* 
*┋* *.Fᴀᴍɪʟʏ*
*┋* *.Vᴀᴡᴜʟᴇɴᴄᴇ*
*┋* *.ᴄʜᴀɴɴᴇʟ*
*┋* *.sᴜᴘᴘᴏʀᴛ*
*┋* *.ᴇxᴏʀ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ*
*┋* *.ʏᴛᴀ*
*┋* *.ᴍᴏᴠɪᴇɪɴғᴏ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.Gᴏᴏɢʟᴇ*
*┋* *.ᴡᴇᴀᴛʜᴇʀ*
*┋* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 GAME-CMD 🎮* *❒⁠⁠⁠⁠* 
*┋* *.ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*┋* *.ʀᴏʟʟ🎲*
*┋* *.ᴄᴏɪɴꜰʟɪᴘ🪙*
*┋* *.pick*
*┋* *.ᴋᴏɴᴀᴍɪ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔞 NSFW-CMD 🔞* *❒⁠⁠⁠⁠* 
*┋* *.ɴsꜰᴡ*
*┋* *.Eᴊᴀᴄᴜʟᴀᴛɪᴏɴ*
*┋* *.ᴘᴇɴɪs*
*┋* *.ᴇʀᴇᴄ*
*┋* *.ɴᴜᴅᴇ*
*┋* *.sᴇx*
*┋* *.ᴄᴜᴛᴇ*
*┋* *.ᴏʀɢᴀsᴍ*
*┋* *.ᴀɴᴀʟ*
*┋* *.sᴜsᴘᴇɴsɪᴏɴ*
*┋* *.ᴋɪss*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ*
*┋* *.ᴀɪ*
*┋* *.ᴀɴᴀʟʏsᴇ*
*┋* *.ʟʟᴀᴍᴀ3*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.Aʙᴏᴜᴛ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴇᴠᴀʟ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ᴘᴀɪʀ*
*┋* *.sᴀᴠᴇ*
*┋* *.ᴄᴀʟᴄ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ɢɴᴀᴍᴇ*
*┋* *.ɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏɴ*
*┋* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏғғ*
*┋* *.ᴇᴘʜᴇᴍᴇʀᴀʟ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.Dᴇᴠ*
*┋* *.ᴋɢᴛᴇᴄʜ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *✝️ GOD-CMD ✝️* *❒⁠⁠⁠⁠* 
*┋* *.ʙɪʙʟᴇ*
*┋* *.ʙɪʙʟᴇʟɪsᴛ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🤖 BOT-CMD 🤖* *❒⁠⁠⁠⁠* 
*┋* *.ᴠᴇʀsɪᴏɴ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛᴀᴋᴇ*
*┋* *.ᴛʀᴛ*
*┋* *.ᴛᴛs*
*┋* *.ꜰᴀɴᴄʏ*
*┋* *.ᴜʀʟ*
*┋* *.Aɢᴇ*
*┋* *.Cᴏɴᴠᴇʀᴛ*
*┋* *.ᴛɪɴʏ*
*┋* *.ᴛɢs*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋᴇʀᴍ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴄᴀᴛ*
*┋* *.ᴅɪᴀʀʏ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴄᴏᴜᴘʟᴇᴘᴘ*
*┋* *.ꜰɪɴᴅɴᴀᴍᴇ*
*┋* *.ʟᴏʟɪ*
*┋* *.ᴡᴀɪꜰᴜ*
*┋* *.ᴄᴏsᴘʟᴀʏ*
*┋* *.ɴᴇᴋᴏ*
*┋* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*┋* *.Sᴇɴᴅɪᴍᴀɢᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*┋* *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*┋* *.ʟᴏɢᴏ*
*┋* *.ss*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ǫʀ*
*┋* *.vv*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.sʏsᴛᴇᴍ*
*┋* *.ʀᴀɴᴋ*
*┋* *.Tɪᴍᴇᴢᴏɴᴇ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*┋* *.Dᴀɪʟʏꜰᴀᴄᴛ*
*┋* *.Mɪɴᴜᴛᴏʀ*
*┕───────────────────❒*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
