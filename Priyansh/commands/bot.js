// fs-extra import is removed as it was unused in the provided code snippet
// const fs = require('fs-extra'); // Use this line if you need fs-extra elsewhere

module.exports.config = {
    name: "goibot",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", // Keeping original credits name here
    description: "goibot",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
    var { threadID, messageID, reason } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
    var idgr = `${event.threadID}`;
    var id = event.senderID;
    // Get user's name - make sure Users object is available in your framework
    var name = await Users.getNameUser(event.senderID);

    // Array of random responses in Hindi, with styled owner name (Priyansh -> Raj)
    var tl = [
        "मुझे परेशान करोगे तो मैं अपने 👑 सर राज XD 👑 से बता कर आपको कुत्ता बनवा दूँगा 😭",
        "Bot न बोल ओये, जानू बोल मुझे।",
        "बार बार Disturb न कर जानू 👑 राज XD 👑 के साथ Busy हूँ 🤫",
        "मैं ग़रीबों से बात नहीं करता, मैं अपने 👑 राज 👑 से फ़ोन पे बात कर रहा हूँ 😉😝😋🤪",
        "इतना न पास आ प्यार हो जाएगा तेरे से हग्गू।",
        "बोलो बेबी तुम मुझसे प्यार करते हो ना 👑 राज XD 👑 🙈💋💋",
        "अरे जान मज़ाक के मूड में नहीं हूँ मैं, जो काम है बोल दो शर्माओ नहीं।",
        "बार बार बोलके दिमाग़ ख़राब किया तो तेरी ...... मम्मी से Complaint करूँगा।",
        "रुक अभी CID को फ़ोन करता हूँ, हैलो 👑 राज 👑 CID?",
        "गाली सुननी है क्या? 😜",
        "तेरी माँ की बिन्दिया 🤭",
        "अरे बंद कर बंद कर।",
        "मैं हाथ जोड़ के मोदी जी से गुज़ारिश करता हूँ।",
        "तुझे क्या कोई और काम नहीं है? पूरा दिन खाता है और Messenger पे Bot Bot करता है।",
        "👑 राज 👑 को बोल दूँगा मैं, मुझे परेशान किया तो।", // Priyansh -> Raj, Styled
        "तुम ना Single ही मरोगे।",
        "तुझे अपनी बेज़्ज़ती करने का शौक़ है?",
        "अभी बोला तो बोला, दोबारा मत बोलना नहीं तो 👑 राज 👑 को फ़ोन करके तेरी सारी चर्बी निकलवा दूँगा मोची 😭",
        "तेरी तो रुक तू भागना मत।",
        "बोल दे कोई नहीं देख रहा 🙄",
        "हाए मैं मर जावा बाबू एक चूमा तो दो, काफ़ी दिन से चूमी नहीं दी 😝",
        "दूर हट बे, मुझे और कोई काम नहीं क्या? हर वक़्त मुझे तंग करते रहते हो 😂",
        "अरे बोलो मेरी जान क्या हाल है 😚",
        "अब आजा, यहाँ नहीं बोल सकता 🙈😋",
        "मुझे मत बुलाओ ना, मैं Busy हूँ ना।",
        "Bot बोलके बेज़्ज़ती कर रहे हो यारों... मैं तो तुम्हारे दिल की धड़कन हूँ ना Baby...💔🥺",
        "अरे तुम वही हो ना जिसको मैं नहीं जानता? 🤪",
        "कल हवेली पे मिल ज़रा तू 😈",
        "आगए साले कबाब में हड्डी 😏",
        "बस कर उसे प्यार हो न हो मुझे हो जाएगा ना।",
        "फ़रमाओ 😒",
        "बुलाती है मगर जाने का नहीं 😜",
        "मैं तो अंधा हूँ 😎",
        "पहले नहा कर आ 😂",
        "आsss थू 😂😂😂",
        "मैं यहीं हूँ क्या हुआ Sweetheart?",
        "चोमू, तुझे और कोई काम नहीं है? हर वक़्त Bot Bot करता है।",
        "चुप रह, नहीं तो बाहर आके तेरा दाँत तोड़ दूँगा।",
        "वाय़ा कराना मेरे नाल 🙊",
        "मैंने उससे बात नहीं करनी।",
        "मेरे को कुछ दिखाई नहीं दे रहा 🌚",
        "Bot न बोल 😢, जानू बोल 😘",
        "बार बार Disturb न कर जानू के साथ Busy हूँ 😋",
        "मैं ग़रीबों से बात नहीं करता 😉😝😋🤪",
        "इतना न पास आ प्यार हो जाएगा।",
        "मेरे को तंग न करो, मैं Kiss 💋 कर दूँगा 😘",
        "अरे यार मज़ाक के मूड में नहीं हूँ 😒",
        "हाए जानू आओ इधर, 1 पप्पी इधर दो, 1 पप्पी इधर 😘",
        "दूर हट, तेरे को और कोई काम नहीं? जब देखो Bot Bot, शादी कर ले मुझसे 😉😋🤣",
        "तेरी कोई घर में नहीं सुनता तो मैं क्यों सुनूँ 🤔😂",
        "अब आजा, यहाँ नहीं बोल सकता 🙈😋",
        "मुझे मत बुलाओ ना, मैं Busy हूँ ना।",
        "क्यों जानू मानू अलग है? 🤣",
        "अरे तुम्हारी तो सब ही बेज़्ज़ती करते हैं, मैं भी कर दूँ? 🤏😜",
        "कल हवेली पर आ ज़रा तू 😈",
        "आगए साज़े खब्बे से 😏",
        "बस कर, उसको प्यार हो न हो मुझे हो जाएगा।",
        "फ़रमाओ 😒",
        "बुलाती है मगर जाने का नहीं 😜",
        "मैं तो अंधा हूँ 😎",
        "पहले नहा कर आ 😂",
        "पापी छू लो 🌚",
        "तेरे को दिख नहीं रहा मैं Busy हूँ? 😒",
        "तेरा तो Game बजाना पड़ेगा।",
        "टा हुआ 🥺",
        "तुम फिर आगए 🙄 किसी और ने मुँह नहीं लगाया क्या? 🤣🤣🤣",
        "मेरे को जानू चाहिए, तुम Single हो?",
        "आsss थू 😂😂😂",
        "मैं सो रहा हूँ।",
        "ऐसे ही हँसते रहा करो 😍",
        "•••••••••••••••••••••••••••••🦢𒀱हाए मैं मर••••🌿💞 जाऊ तेरी मासूम शक्ल पर बेबी 💋",
        "Bot न बोल ओये, जानू बोल मुझे।",
        "बार बार Disturb न करें, राहुल जानू के साथ Busy हूँ 🤭🐒",
        "मैं Flirty लोगों से बात नहीं करती 😉😝😋🤪",
        "इतना पास मत आ, प्यार हो जाएगा।",
        "बोलो बाबू तुम मोसे प्यार करते हो ना? 🙈💋💋",
        "अरे जान मज़ाक के मूड में नहीं हूँ मैं, जो काम है बोल दो शर्माओ नहीं।",
        "हाँ जी बोलो क्या सेवा करें आपकी? 😶🤍",
        "तू बंद नहीं करेगा क्या?",
        "क्या सुनना है आपको मेरे से Flirty कहीं के 🤐🤣",
        "Haa ji boliye kya kam he hamse 🙈",
        "Aree band kar band Kar",
        "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye",
        "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h",
        "मेरा 👑 Owner 👑 आके तेरा BF/GF को चुरा ले जाएगा।",
        "Bot bot hi karta rahna tu bas",
        "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹",
        "Abhi Bola Toh Bola Dubara Mat Bolna🙄",
        "Teri to Watt lagani padegi ",
        "Bol De koi nahi dakh rha 🙄",
        "Haaye Main Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️",
        "Dur Dur karib na a tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂",
        "ary ary bolo meri jaan kia haal hai ;) ;* ",
        "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅",
        "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂",
        "ary babu babu kal hawali py kon bola rha tha 😂",
        "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂",
        "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅",
        "haveli per kal mil Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi",
        "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬",
        "aap aise mat bulo hame sharam aati hai 🙈♥️",
        "kyun Bulaya hamen..😾🔪 ",
        "kyun Bulaya hamen..😾🔪 ",
        "yes my love 💘",
        "kya hua baby ko 😘😘",
        "mujhe sharam ati hai aise aap bolte hai tho 🤭😝",
        "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line",
        "jii kahiye jii 🙄 kya chahiye",
        "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠",
        "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑",
        "ruk tu chappal kaha he mari🩴",
        "shakal Sy masoom lgty ho 😂 but bohot flirty ho",
        "kash tum single hote to maza hi koch aur tha pagal insaan 😂",
        "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️",
        "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘",
        "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂",
        "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂",
    ];

    // Check for specific keywords and prepend user name, style owner name (Priyansh -> Raj)
    if (event.body.toLowerCase() == "chutiya bot" || event.body.toLowerCase() == "chutiye bot" || event.body.toLowerCase() == "chumtiya bot" || event.body.toLowerCase() == "chumtiye bot") {
        return api.sendMessage(`${name}, Hmm... तुम चोमूं पहले ऊँगली क्यों की? 😾`, threadID);
    }
    if (event.body.toLowerCase() == "🤮") {
        return api.sendMessage(`${name}, कौन सा महीना चल रहा है? 😝`, threadID);
    }
    if (event.body.toLowerCase() == "🤗") {
        return api.sendMessage(`${name}, मुझे गले लगाओ बेबी ☺️`, threadID);
    }
    if (event.body.toLowerCase() == "sim" || event.body.toLowerCase() == "simsimi") {
        return api.sendMessage(`${name}, Prefix कौन लगाएगा? पहले Prefix लगाओ फिर Sim लिखो।`, threadID);
    }
    if (event.body.toLowerCase() == "hi" || event.body.toLowerCase() == "hello" || event.body.toLowerCase() == "hlw" || event.body.toLowerCase() == "helo") {
        return api.sendMessage(`${name}, हेलो, हाय मत बोला करो मुझे नहीं तो मैं अपने 👑 सर राज 👑 से तुम्हारी पिटाई करवा दूंगा।`, threadID);
    }
    if (event.body.toLowerCase() == "bc") {
        return api.sendMessage(`${name}, 👑 राज ठाकुर 👑 बोला करो, वो भी प्यार से 🥹😭🤔`, threadID);
    }
    if (event.body.toLowerCase() == "lol" || event.body.toLowerCase() == "lol bot") {
        return api.sendMessage(`${name}, खुद को क्या Legend समझते हो? 😂`, threadID);
    }
    if (event.body.toLowerCase() == "morning" || event.body.toLowerCase() == "good morning") {
        return api.sendMessage(`${name}, शुभ प्रभात सभी को 🌅, उठने के लिए थोड़ी कॉफ़ी या चाय ले लो ☕✨💫`, threadID);
    }
    if (event.body.toLowerCase() == "anyone" || event.body.toLowerCase() == "any") {
        return api.sendMessage(`${name}, मैं हूँ ना जानमन ❤️`, threadID);
    }
    // Keep check for priyansh/rajput/prince, response doesn't need owner name
    if (event.body.toLowerCase() == "priyansh" || event.body.toLowerCase() == "priyansh rajput" || event.body.toLowerCase() == "prince") {
         return api.sendMessage(`${name}, काम में व्यस्त होगा, मैं तो हूँ ना 😘`,threadID);
    }
     if (event.body.toLowerCase() == "owner" || event.body.toLowerCase() == "bot admin" || event.body.toLowerCase() == "bot ka admin kon ha") {
        // Style Owner's name and handle, replace Priyansh with Raj
        return api.sendMessage(`${name}, 💝🥀👑 मालिक 👑:- ☞👑 𝕽𝖆𝖏 𝕽𝖆𝖏𝖕𝖚𝖙 👑☜ 💫\n🖤आप उन्हें 👑 𝕽𝖆𝖏 👑 बुला सकते हैं🖤\n😳उनकी फेसबुक आईडी🤓:- ☞ www.facebook.com/priyanshu.rajput.official\n👋किसी भी मदद के लिए टेलीग्राम पर संपर्क करें 👉 👑@rajrajput👑😇`, threadID); // Replaced Priyansh with Raj, updated handle example
    }
    if (event.body.toLowerCase() == "tumhe banaya kon hai" || event.body.toLowerCase() == "tumko banaya kisne") {
        // Replace Priyansh with Raj, Styled
        return api.sendMessage(`${name}, 👑 राज 👑 ❤️ मेरे निर्माता। वो मुझसे प्यार करते हैं और रोज़ मुझे Edit करते हैं। ये Bot सिर्फ़ Owner के लिए है। मुझे आप लोगों को हँसाने के लिए बनाया गया है, तो मुँह लटकाए मत रखा करो। हर वक़्त हँसते रहो।`, threadID);
    }
    if (event.body.toLowerCase() == "shadi karoge" || event.body.toLowerCase() == "mujhse shadi karoge?") {
        return api.sendMessage(`${name}, हाँजी, करूँगा लेकिन बच्चा आपके पेट में होगा। मंज़ूर है?`, threadID);
    }
    if (event.body.toLowerCase() == "chup" || event.body.toLowerCase() == "stop" || event.body.toLowerCase() == "chup ho ja" || event.body.toLowerCase() == "chup kar") {
        return api.sendMessage(`${name}, नहीं रहूँगा। 😼 मुझे बोलना है। तुम्हें कोई हक़ नहीं मुझे चुप कराने का। मेरी ज़ुबान है, मैं बोलूँगा।`, threadID);
    }
    if (event.body.toLowerCase() == "bts" || event.body.toLowerCase() == "btc") {
        return api.sendMessage(`${name}, तू है BTC. Bhos DK`, threadID);
    }
    if (event.body.toLowerCase() == "malik se bakchodi" || event.body.toLowerCase() == "malik se backchodi" || event.body.toLowerCase() == "malkin se bakchodi" || event.body.toLowerCase() == "malkin se backchodi") {
        return api.sendMessage(`${name}, srry 👑 मालिक 👑 माफ़ कर दो अब नहीं करूँगा 🥺🙏`, threadID);
    }
    if (event.body.toLowerCase() == "gand" || event.body.toLowerCase() == "gandu" || event.body.toLowerCase() == "lund" || event.body.toLowerCase() == "land") {
        return api.sendMessage(`${name}, गांड में ज़्यादा खुजली है तो केला 🍌 अंदर ले ले। :))))`, threadID);
    }
    if (event.body.toLowerCase() == "chumma de" || event.body.toLowerCase() == "kiss me") {
        return api.sendMessage(`${name}, ️किस ख़ुशी में, मैं सिर्फ़ अपनी GF को Kiss करता हूँ।`, threadID);
    }
    if (event.body.toLowerCase() == "nice" || event.body.toLowerCase() == "thank you" || event.body.toLowerCase() == "thank you bot" || event.body.toLowerCase() == "thank you maliha") {
        return api.sendMessage(`${name}, ️मैं हूँ ही इतना अच्छा। सब लोग तारीफ़ करते है मेरी।`, threadID);
    }
    if (event.body.toLowerCase() == "😡" || event.body.toLowerCase() == "😤" || event.body.toLowerCase() == "😠" || event.body.toLowerCase() == "🤬" || event.body.toLowerCase() == "😾") {
        return api.sendMessage(`${name}, ️🥺 मैं तो सिर्फ़ मज़ाक कर रहा था 🥺। गुस्सा मत करो। एक चुम्मी लो और शांत रहो 😘`, threadID);
    }
    if (event.body.toLowerCase() == "😞" || event.body.toLowerCase() == "😔" || event.body.toLowerCase() == "😣" || event.body.toLowerCase() == "☹️" || event.body.toLowerCase() == "😟" || event.body.toLowerCase() == "😩" || event.body.toLowerCase() == "😖" || event.body.toLowerCase() == "😫" || event.body.toLowerCase() == "😦" || event.body.toLowerCase() == "😧" || event.body.toLowerCase() == "😥" || event.body.toLowerCase() == "😓" || event.body.toLowerCase() == "😰") {
        return api.sendMessage(`${name}, ️क्या हुआ, उदास क्यों हो, मुझे बताओ।`, threadID);
    }
    if (event.body.toLowerCase() == "hm" || event.body.toLowerCase() == "hmm") {
        return api.sendMessage(`${name}, ️Hmm Hmm न करके सीधा सीधा बोलो। Hey, मुझसे शादी करोगे? 🙈`, threadID);
    }
    if (event.body.toLowerCase() == "😢" || event.body.toLowerCase() == "😭" || event.body.toLowerCase() == "🥺" || event.body.toLowerCase() == "🥹") {
        return api.sendMessage(`${name}, ️क्या हुआ, रो क्यों रहे हो, मैं हूँ ना फिर क्यों रोना। रुको मैं अभी चॉकलेट 🍫 देता हूँ, लिखो ☞Chocolate☜`, threadID);
    }
    if (event.body.toLowerCase() == "😷" || event.body.toLowerCase() == "🤕" || event.body.toLowerCase() == "🤧" || event.body.toLowerCase() == "🤒") {
        return api.sendMessage(`${name}, ️क्या हुआ, तबीयत ख़राब है क्या, मुझे बताओ मैं अभी दवाई 💊💉 ले आता हूँ 😇`, threadID);
    }
    if (event.body.toLowerCase() == "name" || event.body.toLowerCase() == "naam" || event.body.toLowerCase() == "nam") {
        return api.sendMessage(`${name}, ️नाम में क्या रखा है। तुम काम पे ध्यान दो।`, threadID);
    }
    if (event.body.toLowerCase() == "bot k bacche" || event.body.toLowerCase() == "bot ke bacche") {
        return api.sendMessage(`${name}, ️मेरा बच्चा तो तुम्हारे पेट मे है।`, threadID);
    }
    if (event.body.toLowerCase() == "pic do" || event.body.toLowerCase() == "photo do") {
        return api.sendMessage(`${name}, ️मैं तो अंधा हुं, देख नही सकता।`, threadID);
    }
    if (event.body.toLowerCase() == "jai shree ram" || event.body.toLowerCase() == "ram" || event.body.toLowerCase() == "ram ram") {
        return api.sendMessage(`${name}, ️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇`, threadID);
    }
    if (event.body.toLowerCase() == "bot banake do" || event.body.toLowerCase() == "mujhe bhi chaiye") {
        return api.sendMessage(`${name}, ️खुद ही कर लो ना। तुम्हें क्या कुछ नहीं आता है?`, threadID);
    }
    if (event.body.toLowerCase() == "🙂" || event.body.toLowerCase() == "🙃") {
        return api.sendMessage(`${name}, ️मन तो अच्छा है नहीं। कम से कम शक्ल तो अच्छी कर लो मेरी जान।`, threadID);
    }
    if (event.body.toLowerCase() == "🤥") {
        return api.sendMessage(`${name}, ️भाई तेरी तो नाक ही इतनी लम्bi है, उसकी jarurat ही नही पड़ती होगी तुझे तो🤭🤭🤭🤭`, threadID); // Minor spelling fix
    }
    if (event.body.toLowerCase() == "🤔" || event.body.toLowerCase() == "🤨") {
        return api.sendMessage(`${name}, ️क्या सोच रहे हो इतना 🤨`, threadID);
    }
    if (event.body.toLowerCase() == "🥴") {
        return api.sendMessage(`${name}, ️ओये नशेड़ी 😂😂😂`, threadID);
    }
    if (event.body.toLowerCase() == "😶") {
        return api.sendMessage(`${name}, ️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜`, threadID);
    }
    if (event.body.toLowerCase() == "😉") {
        return api.sendMessage(`${name}, ️आँख क्यो मार रहे हो, मे बहुत शरीफ़ हु🥺`, threadID);
    }
    if (event.body.toLowerCase() == "😱" || event.body.toLowerCase() == "😨") {
        return api.sendMessage(`${name}, ️Kya huva bhoot dekh liya kya 👻👻`, threadID);
    }
    if (event.body.toLowerCase() == "😒" || event.body.toLowerCase() == "🙄") {
        return api.sendMessage(`${name}, ️️तिरछी नज़रिया मोरी हाए हाए हाए 🙈`, threadID);
    }
    if (event.body.toLowerCase() == "nobody loves me" || event.body.toLowerCase() == "nobody love me" || event.body.toLowerCase() == "koi pyar nhi karta") {
        return api.sendMessage(`${name}, ️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)`, threadID);
    }
    if (event.body.toLowerCase() == "🤦🏻‍♂" || event.body.toLowerCase() == "🤦🏻‍♀") {
        return api.sendMessage(`${name}, Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬`, threadID);
    }
    if (event.body.toLowerCase() == "😂" || event.body.toLowerCase() == "😁" || event.body.toLowerCase() == "😆" || event.body.toLowerCase() == "🤣" || event.body.toLowerCase() == "😸" || event.body.toLowerCase() == "😹") {
        return api.sendMessage(`${name}, Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao`, threadID);
    }
    if (event.body.toLowerCase() == "🥰" || event.body.toLowerCase() == "😍" || event.body.toLowerCase() == "😻" || event.body.toLowerCase() == "❤️") {
        return api.sendMessage(`${name}, 🦋🌿आँखों में प्यार 🌬️🌍 ••प्यार तो नहीं कर लिया मुझसे>³••🕊️🍎😍`, threadID);
    }
    if (event.body.toLowerCase() == "kese ho" || event.body.toLowerCase() == "kaise ho" || event.body.toLowerCase() == "kese ho ji" || event.body.toLowerCase() == "how are you" || event.body.toLowerCase() == "how are you?") {
        return api.sendMessage(`${name}, M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️`, threadID);
    }
    if (event.body.toLowerCase() == "is the bot sad") {
        return api.sendMessage(`${name}, मैं सबकी वजह से दुखी क्यों नहीं हो सकता <3 आपसे प्यार है <3`, threadID);
    }
    if (event.body.toLowerCase() == "does the bot love you") {
        return api.sendMessage(`${name}, हाँ मैं आपसे और सबसे बहुत प्यार करता हूँ`, threadID);
    }
     if (event.body.toLowerCase() == "bot goes to sleep") {
        return api.sendMessage(`${name}, मैं Bot हूँ, आपको सोना चाहिए <3`, threadID);
    }
    if (event.body.toLowerCase() == "🤖") {
        return api.sendMessage(`${name}, सालो चिढ़ा रहे हो मुझे`, threadID);
    }
     if (event.body.toLowerCase() == "has the bot eaten yet" || event.body.toLowerCase() == "bot an comrade") {
        return api.sendMessage(`${name}, जब आपको खाते हुए देखता हूँ तो मैं भर जाता हूँ <3`, threadID);
    }
    if (event.body.toLowerCase() == "lob you" || event.body.toLowerCase() == "i lob you")) {
        return api.sendMessage(`${name}, आपको भी Lob You`, threadID);
    }
     if (event.body.toLowerCase() == "does the bot love me") {
        return api.sendMessage(`${name}, हाँ <3`, threadID);
    }
     if (event.body.toLowerCase() == "&fuck") {
        // Replace Priyansh with Raj, Styled
        return api.sendMessage(`${name}, 🏔️🏝️👑 राज 👑 ने स्पेशली तुम 🌊🪺जैसे ठरकियों के लिए•• 🏞️🌬️यह कमांड हटा दिया है ↗↘ Sorry Guys••😹🫶`, threadID);
    }
     // Keep check for priyansh/diya/amrita, response doesn't need owner name
     if (event.body.toLowerCase() == "ami priyansh" || event.body.toLowerCase() == "ami diya" || event.body.toLowerCase() == "main amrita" || event.body.toLowerCase() == "main priyansh" || event.body.toLowerCase() == "main diya") {
        return api.sendMessage(`${name}, 🕊️🍎...अरे मेरे बेबी कैसे हो आप 😚🍒`, threadID);
    }


    // If none of the specific keywords match, check if the message starts with "Bot"
    if (event.body.toLowerCase().startsWith("b
