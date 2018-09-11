const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 const devs = ['389090790984515594'];
const adminprefix = "-"


client.on('message', message => {
    if(message.content.startsWith(prefix + "share")) {
		
		
		
	    let rank = message.guild.member(message.author).roles.find('name', '⇒ Support');
        if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت  لأستخدام هذا الأمر.**');
		
		message.channel.send('**:x: لا يمكن استعمال هذا الامر الا في روم نشر الاكواد**');
		if(message.channel.id !== '485339888187736071','487146253000638465','488853384741257237') return; // ايدي روم نشر الاكواد :)
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ share system ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لنشر الأكواد بلغة الجافا سكربت**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لنشر الأكواد بلغة البايثون**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لنشر الأكواد بلغة الآي أو **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لنشر الأكواد بلغة الإرس **' ,'**=-=-=-=-=-=-=-=-=-=-=**')  
        .addField('**- E لنشر الأكواد بلغة HTML **' ,'**=-=-=-=-=-=-=-=-=-=-=**')

	
		.addField('**- E لنشر الثيمات في بيتر ديسكورد **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha codes`)
        .setTimestamp()
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
                msg.react('🇧')
                msg.react('🇨')
                msg.react('🇩')
				msg.react('🇪')
            let sharejsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let sharepyFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let shareioFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let shareerisFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
			let sharebeterFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;

    
            let sharejs = msg.createReactionCollector(sharejsFilter, { time: 20000});
            let sharepy = msg.createReactionCollector(sharepyFilter, { time: 20000});
            let shareio = msg.createReactionCollector(shareioFilter, { time: 20000});
            let shareeris = msg.createReactionCollector(shareerisFilter, { time: 20000});
			let sharebeter = msg.createReactionCollector(sharebeterFilter, { time: 20000});
		
		
        sharebeter.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    let beterdi = message.guild.channels.find(`name`, "✻-themes");
    if(!beterdi) return message.channel.send("❌لم اجد الروم الخاص بنشر الثيمات");
	message.channel.send('📝 **| من فضلك قم بوضع رابط الثيم الآن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك قم بكتابة وصف الثيم... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الثيم... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر الثيم في روم الثيمات**`)
        },5000);
var beterdi = message.guild.channels.find('name', '✻-themes')
if(!beterdi) return;
if(beterdi) {
beterdi.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الثيم**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الثيم**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})

		
        sharejs.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    let jscodes = message.guild.channels.find(`name`, "✻-discord-js");
    if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var jscodes = message.guild.channels.find('name', '✻-discord-js')
if(!jscodes) return;
if(jscodes) {
jscodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})

 
          shareeris.on('collect', r => {
			  msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var eriscodes = message.guild.channels.find(`name`, "✻-discord-eris");
    if(!eriscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var eriscodes = message.guild.channels.find('name', '✻-discord-eris')
if(!eriscodes) return;
if(eriscodes) {
eriscodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


         shareio.on('collect', r => {
			 msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var iocodes = message.guild.channels.find(`name`, "✻-discord-io");
    if(!iocodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var iocodes = message.guild.channels.find('name', '✻-discord-io')
if(!iocodes) return;
if(iocodes) {
iocodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


   
        sharepy.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var pycodes = message.guild.channels.find(`name`, "✻-discord-py");
    if(!pycodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()
 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
		

var pycodes = message.guild.channels.find('name', '✻-discord-py')
if(!pycodes) return;
if(pycodes) {
pycodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


        })
        })

    }
});

// ✅



//  =-=-=-=-=-=- .::[ Take Codes System - abokhalil ]::. =-=-=-=-=-=-

		

client.on('message', message => {
    if(message.content.startsWith(prefix +"تقديم")) {

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ share system ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField(' ** A للتقديم على رتبة السبورت في مجال الجافا سكربت  **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B للتقديم على رتبة السبورت في مجال البايثون**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C html للتقديم على رتبة السبورت في مجال **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha codes`)
        .setTimestamp()
        message.channel.sendEmbed(embed).then(msg => {

            msg.react('🇦').then( r => {
                msg.react('🇧')
                msg.react('🇨')
                msg.react('🇩')


            let tqjsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let tqpyFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let tqhtmlFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;

            let taqjs = msg.createReactionCollector(tqjsFilter, { time: 20000});
            let taqpy = msg.createReactionCollector(tqpyFilter, { time: 20000});
            let taqhtml = msg.createReactionCollector(tqhtmlFilter, { time: 20000});



        taqjs.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
	message.channel.send('📝 **| من فضلك قم بكتابة اسمك.. **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| ما هو الفرق بين var , const , let ? ... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك الان قم بوضع 4 ايفنتات ... كمثال client.ready  ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح ايصال تقديمك للادارة**`)
        },5000);
var jscodes = message.guild.channels.find('name', 'submite-list')
if(!jscodes) return;
if(jscodes) {
jscodes.send(`
**AlphaCodes©**
تقديم في مجال الجافا سكربت


الاسم الكامل :
${thisMessage}
**الفرق بين var , const , let**:
 ${boi}
**صاحب التقديم**: ${message.author}
**4 ايفنتات**:
 ${boi2}
`)
}
})
})
})
})
})
})
})

})




        taqpy.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
	message.channel.send('📝 **| من فضلك قم بكتابة اسمك.. **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| ما معنى import ?... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك الان قم بوضع 4 ايفنتات ... كمثال client.ready  ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح ايصال تقديمك للادارة**`)
        },5000);
var jscodes = message.guild.channels.find('name', 'submite-list')
if(!jscodes) return;
if(jscodes) {
jscodes.send(`
**AlphaCodes©**
تقديم في مجال البايثون

الاسم الكامل :
${thisMessage}
**معنى import**:
 ${boi}
**صاحب التقديم**: ${message.author}
**4 ايفنتات**:
 ${boi2}
`)
}
})
})
})
})
})
})
})

})




        taqhtml.on('collect', r => {
			msg.delete()
			message.channel.send('**قريبا بإذن الله**')
})

        })
        })

    }
});


client.on("ready", () => {
    client.user.setPresence({ game: { name: `Alpha codes` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});


client.login(process.env.BOT_TOKEN);
