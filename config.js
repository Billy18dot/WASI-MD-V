//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Durban,South_Africa.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "27613106647@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "27781242411";
global.sudo = process.env.SUDO || "27781242411";
global.owner = process.env.OWNER_NUMBER || "27781242411";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURBVjdmNjNOQmJ0SGJIM1UvV0kwVVdlNUIvbWJ3RFQ3Y0pGVVVVSGNtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXlSTEdLL1BKUENMN3FyYTUrQU5yY1NiVkZGRVNLQXFmMFRpZVlvR1FDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR01zRVpFQVhDS2JHbUVoMXFMeFp0YWMrdkhVRVNuSW5WRWQ5NWU2QTJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmODgxQm5yQ3JmakJqRGN5MndKWmF0SHhsTU9WclRvVitnTmtmT3JQWFZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBa3RxbllwazloSENYMFlhNURaSi91MGtLcjk3TEFDRmdXenozeVc5Vk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRUSVJuTFZmSm9XNkdMVXZmTzFBbFhwV01Wa3VjYzVkNHZqN2tXWW5hbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FtZExEbC9pOFRyR1dESWNVc2x6S043SU1wRVlvdUFvU3BoTUkvLzdGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielRnbEU3c2x1MDZIK3R5d3laUnR5Q054ajBrREFsemhyNXhTUXlueTZFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNRN2dKZFlxKzBLK1YwY1B3NFA5N2lKblJkZjF1UHBpQktFcGZkemhPYzdzVm9Hczh2THRBN3h5bWFackZtSnE3aUlRbERQVWgvRHpncUdaVVozamdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJQbEJRTjk1S0VFT0F1Qk9DejIzUHFtK0RJOFhOS0ltLzh0UFkvaTFTSjdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0dGM4eW9sQlNQeWtYY0YzZlVuM1p3IiwicGhvbmVJZCI6ImNlOWIyMDE0LWMwMjQtNGZhNi05YjE1LWVjZTdkNTE4YzRlZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0U3AzNEpHcUEwWVROdnFRR1NQWkNocjg3Vzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEIrZDVUU0ZtZ3BXWWs2ZG1VbGlVWnlIVDRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY0MVJHNUdYIiwibWUiOnsiaWQiOiIyNjM3ODE1MjYxNDg6NjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRm9yw6ppZ27DqnIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xEVXJDZ1E3c1BydVFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRzT011VVBqS21vN3hXRUdXbEtxWDFWZFh1Ylc4enpVZWpybitwei9LZzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ims1VTliS0w0OWtFcUFOdzVQL0FXM2N1bWM3bHVNOWJRc3NPT3krRlNVdVpSaTlXZTRxR2pwRU1OV0FyWklZZ1dEdGxJZlNnVTVNRU50M040V0VQdUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpNlkzTW9PUkF5WDhZdmhSZy9MakVBdEhDL0lyakFxQ09kN2liWm9uRHdkbU44R2dxNDE4SW5IbGc3cVJHNVZRbGwrd09tRkpSaCtXK29CbHJ1M3VqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MTUyNjE0ODo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVN0RqTGxENHlwcU84VmhCbHBTcWw5VlhWN20xdk04MUhvNjUvcWMveW9PIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxOTEyMTg3fQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-FOREINGER-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "foreigner",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FOREIGNER-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Mr-JONES",
  errorChat: process.env.ERROR_CHAT || "27781242411",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
