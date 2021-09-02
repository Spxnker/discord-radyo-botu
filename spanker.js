const Discord = require('discord.js');//
const client1 = new Discord.Client();//
const config = require('./config.json');
const { Client, Util } = require('discord.js');//


const tokens = [(config.token1)];
const chnls = [(config.seskanalı1)];

const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    client1.login(token);
    let concon;
    client1.on('ready', async () => {
        client1.user.setStatus("idle");
        console.log(client1.user.username);
        setInterval(() => {
            const am = [
            "DURUM",
             "Spanker 💛 SİZ",
             "ÇOĞALTIN",
             "BÖLE",
             "DEVELOPED BY SPANKER",


            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client1.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client1.channels.cache.get(chnls[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
};

let ses;

const radyo = {
    alemfm : "https://turkmedya.radyotvonline.net/alemfmaac?",
    arabeskalemi : "http://arabeskalemi.net:9300/;stream.mp3",
    arabeskfm : "https://yayin.arabeskfm.biz:8042/stream",
    arabeskturk : "http://yayin.arabeskturk.com:8000/;stream.mp3",
    arabeskvadisi : "http://sp.radyotescil.com:8010/;stream.mp3",
    babaradyo : "http://46.20.4.3/;stream.mp3",
    banko : "http://yayin.netradyom.com:9910/RADYOBANKO;",
    bestfm : "https://bestfm.turkhosted.com/;",
    efkarfm : "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/;",
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio ",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    joyturk : "http://17703.live.streamtheworld.com/JOY_TURK_SC?;stream.mp3",
    keyfslow : "https://yayin.radyomadyo.com:8004/stream",
    kral : "http://46.20.3.204/;stream.mp3",
    kralpop : "http://46.20.3.201/;stream.mp3",
    mastika : "https://radyodinle1.turkhosted.com/yayin?uri=radyo.yayin.com.tr:5950/;&tkn=7phkFkpmJmuz9x9smaOvYw&tms=1613624488",
    powerfm : "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio?/;stream.mp3",
    powerpop : "http://powerpop.listenpowerapp.com/powerpop/mpeg/icecast.audio?/;stream.mp3",
    powerturk : "http://powerturk.listenpowerapp.com/powerturk/mpeg/icecast.audio?/;stream.mp3",
    powerturkrap : "blob:https://www.canliradyodinle.fm/e11ee771-e619-4c85-b410-744e78a3b7a3",
    radyoarabesk : "https://yayin.radyoarabesk.com.tr:8000/stream",
    radyoderman : "https://stream.radyolarburada.com/radio/8280/1",
    radyodert : "blob:https://www.canliradyodinle.fm/90b2471f-5286-4ebb-a6a2-f6fdc302e871",
    radyoturkuvaz : "blob:https://www.canliradyodinle.fm/576783e9-9d7a-446d-8de8-db0335a34420",
    raphome : "blob:https://www.canliradyodinle.fm/9f9ef3b0-7a50-4d0e-94cc-6d386ca928b0",
    remixfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.162.187:7688/stream/&tkn=Kb-gt2Vx2Nv_2tFAmb3LHg&tms=1613715523",
    superfm : "https://www.youtube.com/watch?v=XKii9JG_o_M",
    turkrapfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.188.166:9984/&tkn=Qwu3Evo2Sjxu2k-MkIv3bA&tms=1613715329",
    turkuvazefsane : "blob:https://www.canliradyodinle.fm/9b303f6b-731f-4204-a76d-1521b5fa5387",
    vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox "
    }
    
  let botPrefix = ("r!")
    client1.on("message", async message => {
      if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(botPrefix)) return;
      let owners = [(config.owner1), (config.owner2), (config.owner3)]
    if (!owners.includes(message.author.id)) return
    console.log("Radyo Botu Akif.")
      let args = message.content.split(' ').slice(1);
      let command = message.content.split(' ')[0].slice(botPrefix.length);
      if(command === "radyo") {
  
  message.delete(10000).catch(console.error);
      if (!message.member.voice.channel) return message.reply("**Ses Kanalına Katıl, Ve Tekrar Dene!**").then(m => m.delete(15000)).catch(console.error);
      else {
          if (!args[0] || args[0] === "help" || args[0] === "yardım") {
              message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n \n 1 = AlemFM \n 2 = ArabeskAlemi \n 3 = ArabeskFM \n 4 = ArabeskTürk \n 5 = ArabeskVadisi \n 6 = BabaRadyo \n 7 = Banko \n 8 = BestFM \n 9 = EfkarFM \n 10 = Fenomen \n 11 = FenomenFM \n 12 = JoyTürk \n 13 = KeyfSlow \n 14 = Kral \n 15 = KralPop \n 16 = Mastika \n 17 = PowerFM \n 18 = PowerPop   \n 19 = PowerTürk \n 20 = PowerTürkRap \n 21 = RadyoArabesk \n 22 = RadyoDerman \n 23 = RadyoDert \n 24 = RadyoTurkuvaz \n 25 = RapHome \n 26 = RemixFM \n 27 = SuperFM \n 28 = TürkRapFM   \n 29 = TurkuvazFfsane \n 30 = Vergin \n \n Açmak İçin r.radyo <numara> \n Kapatmak İçin r.radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        
  
  
  
    } else if (args[0].toLowerCase() === "AlemFM" || args[0] === "1") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.alemfm);
                  message.reply("🎧 | **Başarılı! 🎻`AlemFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })
      
              } else if (args[0].toLowerCase() === "ArabeskAlemi" || args[0] === "2") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.arabeskalemi);
                  message.reply("🎧 | **Başarılı! `ArabeskAlemi` Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })                                                                                    
          } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                  message.member.voice.channel.leave();
      return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voice.channel}.`);
          
              } else if (args[0].toLowerCase() === "ArabeskFM" || args[0] === "3") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.arabeskfm);
                  message.reply("🎧 | **Başarılı! 🎻`ArabeskFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
              } else if (args[0].toLowerCase() === "ArabeskTürk" || args[0] === "4") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.arabeskturk);
                  message.reply("🎧 | **Başarılı! 🎻`ArabeskTürk`🎻 Çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
              })   
  
  
              } else if (args[0].toLowerCase() === "ArabeskVadisi" || args[0] === "5") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.arabeskvadisi);
                  message.reply("🎧 | **Başarılı! 🎻`ArabeskVadisi`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
              } else if (args[0].toLowerCase() === "BabaRadyo" || args[0] === "6") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.babaradyo);
                  message.reply("🎧 | **Başarılı! 🎻`BabaRadyo`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
              } else if (args[0].toLowerCase() === "Banko" || args[0] === "7") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.members.banko);
                  message.reply("🎧 | **Başarılı! 🎻`Banko`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "BestFM" || args[0] === "8") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.bestfm);
                  message.reply("🎧 | **Başarılı! 🎻`BestFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "EfkarFM" || args[0] === "9") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.efkarfm);
                  message.reply("🎧 | **Başarılı! 🎻`EfkarFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "Fenomen" || args[0] === "10") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.fenomen);
                  message.reply("🎧 | **Başarılı! 🎻`Fenomen`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "FenomenFM" || args[0] === "11") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.fenomenfm);
                  message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "JoyTürk" || args[0] === "12") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.joyturk);
                  message.reply("🎧 | **Başarılı! 🎻`JoyTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "KeyfSlow" || args[0] === "13") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.keyfslow);
                  message.reply("🎧 | **Başarılı! 🎻`KeyfSlow`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "Kral" || args[0] === "14") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.kral);
                  message.reply("🎧 | **Başarılı! 🎻`Kral`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "KralPop" || args[0] === "15") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.kralpop);
                  message.reply("🎧 | **Başarılı! 🎻`KralPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "Mastika" || args[0] === "16") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.mastika);
                  message.reply("🎧 | **Başarılı! 🎻`Mastika`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "PowerFM" || args[0] === "17") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.powerfm);
                  message.reply("🎧 | **Başarılı! 🎻`PowerFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "PowerPop" || args[0] === "18") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.powerpop);
                  message.reply("🎧 | **Başarılı! 🎻`PowerPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "PowerTürk" || args[0] === "19") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.powerturk);
                  message.reply("🎧 | **Başarılı! 🎻`PowerTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "PowerTürkRap" || args[0] === "20") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.powerturkrap);
                  message.reply("🎧 | **Başarılı! 🎻`PowerTürkRap`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RadyoArabesk" || args[0] === "21") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.radyoarabesk);
                  message.reply("🎧 | **Başarılı! 🎻`RadyoArabesk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RadyoDerman" || args[0] === "22") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.radyoderman);
                  message.reply("🎧 | **Başarılı! 🎻`RadyoDerman`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RadyoDert" || args[0] === "23") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.radyodert);
                  message.reply("🎧 | **Başarılı! 🎻`RadyoDert`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RadyoTurkuvaz" || args[0] === "24") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.radyoturkuvaz);
                  message.reply("🎧 | **Başarılı! 🎻`RadyoTurkuvaz`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RapHome" || args[0] === "25") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.raphome);
                  message.reply("🎧 | **Başarılı! 🎻`RapHome`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "RemixFM" || args[0] === "26") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.remixfm);
                  message.reply("🎧 | **Başarılı! 🎻`RemixFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "SuperFM" || args[0] === "27") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.superfm);
                  message.reply("🎧 | **Başarılı! 🎻`SuperFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
              } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "28") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.turkrapfm);
                  message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
  
              } else if (args[0].toLowerCase() === "TurkuvazEfsane" || args[0] === "29") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.turkuvazefsane);
                  message.reply("🎧 | **Başarılı! 🎻`TurkuvazEfsane`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
  
  
              } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "30") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.turkrapfm);
                  message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
  
  
  
  
              } else if (args[0].toLowerCase() === "Vergin" || args[0] === "31") {
              message.member.voice.channel.join().then(connection => {
                  var dispatcher = connection.play(radyo.vergın);
                  message.reply("🎧 | **Başarılı! 🎻`Vergin`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })    
  
            }
  
          }
      }
      });
  

      
      const client2 = new Discord.Client();//
    
      
      
      const tokenss = [(config.token2)]
      const chnlss = [(config.seskanalı2)]
      
      const selamlıı = [];
      for (let index = 0; index < tokenss.length; index++) {
          const token = tokenss[index];
          client2.login(token);
          let concon;
          client2.on('ready', async () => {
              client2.user.setStatus("idle");
              console.log(client2.user.username);
              setInterval(() => {
                  const am = [
                  "👑 WELCOME TO MAHŞER 👑",
                   "Spanker 💛 Sinan Karanfil",
                   "👑 WELCOME TO MAHŞER 👑",
                   "Spanker 💛 Erdal Çoban",
                   "👑 WELCOME TO MAHŞER 👑",
      
      
                  ];
              const yarrak = Math.floor(Math.random() * (am.length));
              client2.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
          }, 10000);
              concon = await client2.channels.cache.get(chnlss[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
          });
      };
      
      let sess;
      
      const radyoo = {
          alemfm : "https://turkmedya.radyotvonline.net/alemfmaac?",
          arabeskalemi : "http://arabeskalemi.net:9300/;stream.mp3",
          arabeskfm : "https://yayin.arabeskfm.biz:8042/stream",
          arabeskturk : "http://yayin.arabeskturk.com:8000/;stream.mp3",
          arabeskvadisi : "http://sp.radyotescil.com:8010/;stream.mp3",
          babaradyo : "http://46.20.4.3/;stream.mp3",
          banko : "http://yayin.netradyom.com:9910/RADYOBANKO;",
          bestfm : "https://bestfm.turkhosted.com/;",
          efkarfm : "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/;",
          fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio ",
          fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
          joyturk : "http://17703.live.streamtheworld.com/JOY_TURK_SC?;stream.mp3",
          keyfslow : "https://yayin.radyomadyo.com:8004/stream",
          kral : "http://46.20.3.204/;stream.mp3",
          kralpop : "http://46.20.3.201/;stream.mp3",
          mastika : "https://radyodinle1.turkhosted.com/yayin?uri=radyo.yayin.com.tr:5950/;&tkn=7phkFkpmJmuz9x9smaOvYw&tms=1613624488",
          powerfm : "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio?/;stream.mp3",
          powerpop : "http://powerpop.listenpowerapp.com/powerpop/mpeg/icecast.audio?/;stream.mp3",
          powerturk : "http://powerturk.listenpowerapp.com/powerturk/mpeg/icecast.audio?/;stream.mp3",
          powerturkrap : "blob:https://www.canliradyodinle.fm/e11ee771-e619-4c85-b410-744e78a3b7a3",
          radyoarabesk : "https://yayin.radyoarabesk.com.tr:8000/stream",
          radyoderman : "https://stream.radyolarburada.com/radio/8280/1",
          radyodert : "blob:https://www.canliradyodinle.fm/90b2471f-5286-4ebb-a6a2-f6fdc302e871",
          radyoturkuvaz : "blob:https://www.canliradyodinle.fm/576783e9-9d7a-446d-8de8-db0335a34420",
          raphome : "blob:https://www.canliradyodinle.fm/9f9ef3b0-7a50-4d0e-94cc-6d386ca928b0",
          remixfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.162.187:7688/stream/&tkn=Kb-gt2Vx2Nv_2tFAmb3LHg&tms=1613715523",
          superfm : "https://www.youtube.com/watch?v=XKii9JG_o_M",
          turkrapfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.188.166:9984/&tkn=Qwu3Evo2Sjxu2k-MkIv3bA&tms=1613715329",
          turkuvazefsane : "blob:https://www.canliradyodinle.fm/9b303f6b-731f-4204-a76d-1521b5fa5387",
          vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox "
          }
          
        let botPrefixx = ("ra!")
          client2.on("message", async message => {
            if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(botPrefixx)) return;
            let owners = [(config.owner1), (config.owner2), (config.owner3)]
          if (!owners.includes(message.author.id)) return
          console.log("Radyo Botu Akif.")
            let args = message.content.split(' ').slice(1);
            let command = message.content.split(' ')[0].slice(botPrefixx.length);
            if(command === "radyo") {
        
        message.delete(10000).catch(console.error);
            if (!message.member.voice.channel) return message.reply("**Ses Kanalına Katıl, Ve Tekrar Dene!**").then(m => m.delete(15000)).catch(console.error);
            else {
                if (!args[0] || args[0] === "help" || args[0] === "yardım") {
                    message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n \n 1 = AlemFM \n 2 = ArabeskAlemi \n 3 = ArabeskFM \n 4 = ArabeskTürk \n 5 = ArabeskVadisi \n 6 = BabaRadyo \n 7 = Banko \n 8 = BestFM \n 9 = EfkarFM \n 10 = Fenomen \n 11 = FenomenFM \n 12 = JoyTürk \n 13 = KeyfSlow \n 14 = Kral \n 15 = KralPop \n 16 = Mastika \n 17 = PowerFM \n 18 = PowerPop   \n 19 = PowerTürk \n 20 = PowerTürkRap \n 21 = RadyoArabesk \n 22 = RadyoDerman \n 23 = RadyoDert \n 24 = RadyoTurkuvaz \n 25 = RapHome \n 26 = RemixFM \n 27 = SuperFM \n 28 = TürkRapFM   \n 29 = TurkuvazFfsane \n 30 = Vergin \n \n Açmak İçin r.radyo <numara> \n Kapatmak İçin r.radyo kapat**").then(m => m.delete(40000)).catch(console.error);
              
        
        
        
          } else if (args[0].toLowerCase() === "AlemFM" || args[0] === "1") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.alemfm);
                        message.reply("🎧 | **Başarılı! 🎻`AlemFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })
            
                    } else if (args[0].toLowerCase() === "ArabeskAlemi" || args[0] === "2") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.arabeskalemi);
                        message.reply("🎧 | **Başarılı! `ArabeskAlemi` Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })                                                                                    
                } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                        message.member.voice.channel.leave();
            return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voice.channel}.`);
                
                    } else if (args[0].toLowerCase() === "ArabeskFM" || args[0] === "3") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.arabeskfm);
                        message.reply("🎧 | **Başarılı! 🎻`ArabeskFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
                    } else if (args[0].toLowerCase() === "ArabeskTürk" || args[0] === "4") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.arabeskturk);
                        message.reply("🎧 | **Başarılı! 🎻`ArabeskTürk`🎻 Çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
                    })   
        
        
                    } else if (args[0].toLowerCase() === "ArabeskVadisi" || args[0] === "5") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.arabeskvadisi);
                        message.reply("🎧 | **Başarılı! 🎻`ArabeskVadisi`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
                    } else if (args[0].toLowerCase() === "BabaRadyo" || args[0] === "6") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.babaradyo);
                        message.reply("🎧 | **Başarılı! 🎻`BabaRadyo`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
                    } else if (args[0].toLowerCase() === "Banko" || args[0] === "7") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.members.banko);
                        message.reply("🎧 | **Başarılı! 🎻`Banko`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "BestFM" || args[0] === "8") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.bestfm);
                        message.reply("🎧 | **Başarılı! 🎻`BestFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "EfkarFM" || args[0] === "9") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.efkarfm);
                        message.reply("🎧 | **Başarılı! 🎻`EfkarFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "Fenomen" || args[0] === "10") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.fenomen);
                        message.reply("🎧 | **Başarılı! 🎻`Fenomen`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "FenomenFM" || args[0] === "11") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.fenomenfm);
                        message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "JoyTürk" || args[0] === "12") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.joyturk);
                        message.reply("🎧 | **Başarılı! 🎻`JoyTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "KeyfSlow" || args[0] === "13") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.keyfslow);
                        message.reply("🎧 | **Başarılı! 🎻`KeyfSlow`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "Kral" || args[0] === "14") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.kral);
                        message.reply("🎧 | **Başarılı! 🎻`Kral`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "KralPop" || args[0] === "15") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.kralpop);
                        message.reply("🎧 | **Başarılı! 🎻`KralPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "Mastika" || args[0] === "16") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.mastika);
                        message.reply("🎧 | **Başarılı! 🎻`Mastika`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "PowerFM" || args[0] === "17") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.powerfm);
                        message.reply("🎧 | **Başarılı! 🎻`PowerFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "PowerPop" || args[0] === "18") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.powerpop);
                        message.reply("🎧 | **Başarılı! 🎻`PowerPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "PowerTürk" || args[0] === "19") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.powerturk);
                        message.reply("🎧 | **Başarılı! 🎻`PowerTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "PowerTürkRap" || args[0] === "20") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.powerturkrap);
                        message.reply("🎧 | **Başarılı! 🎻`PowerTürkRap`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RadyoArabesk" || args[0] === "21") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.radyoarabesk);
                        message.reply("🎧 | **Başarılı! 🎻`RadyoArabesk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RadyoDerman" || args[0] === "22") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.radyoderman);
                        message.reply("🎧 | **Başarılı! 🎻`RadyoDerman`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RadyoDert" || args[0] === "23") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.radyodert);
                        message.reply("🎧 | **Başarılı! 🎻`RadyoDert`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RadyoTurkuvaz" || args[0] === "24") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.radyoturkuvaz);
                        message.reply("🎧 | **Başarılı! 🎻`RadyoTurkuvaz`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RapHome" || args[0] === "25") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.raphome);
                        message.reply("🎧 | **Başarılı! 🎻`RapHome`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "RemixFM" || args[0] === "26") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.remixfm);
                        message.reply("🎧 | **Başarılı! 🎻`RemixFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "SuperFM" || args[0] === "27") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.superfm);
                        message.reply("🎧 | **Başarılı! 🎻`SuperFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
                    } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "28") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.turkrapfm);
                        message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
        
                    } else if (args[0].toLowerCase() === "TurkuvazEfsane" || args[0] === "29") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.turkuvazefsane);
                        message.reply("🎧 | **Başarılı! 🎻`TurkuvazEfsane`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
        
        
                    } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "30") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.turkrapfm);
                        message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
        
        
        
        
                    } else if (args[0].toLowerCase() === "Vergin" || args[0] === "31") {
                    message.member.voice.channel.join().then(connection => {
                        var dispatcher = connection.play(radyo.vergın);
                        message.reply("🎧 | **Başarılı! 🎻`Vergin`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                    })    
        
                  }
        
                }
            }
            });
        

            const client3 = new Discord.Client();//
    
      
      
            const tokensss = [(config.token3)];
            const chnlsss = [(config.seskanalı3)];
            
            const selamlııı = [];
            for (let index = 0; index < tokensss.length; index++) {
                const token = tokensss[index];
                client3.login(token);
                let concon;
                client3.on('ready', async () => {
                    client3.user.setStatus("idle");
                    console.log(client3.user.username);
                    setInterval(() => {
                        const am = [
                        "👑 WELCOME TO MAHŞER 👑",
                         "Spanker 💛 Sinan Karanfil",
                         "👑 WELCOME TO MAHŞER 👑",
                         "Spanker 💛 Erdal Çoban",
                         "👑 WELCOME TO MAHŞER 👑",
            
            
                        ];
                    const yarrak = Math.floor(Math.random() * (am.length));
                    client3.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
                }, 10000);
                    concon = await client3.channels.cache.get(chnlsss[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
                });
            };
            
            let sesss;
            
            const radyooo = {
                alemfm : "https://turkmedya.radyotvonline.net/alemfmaac?",
                arabeskalemi : "http://arabeskalemi.net:9300/;stream.mp3",
                arabeskfm : "https://yayin.arabeskfm.biz:8042/stream",
                arabeskturk : "http://yayin.arabeskturk.com:8000/;stream.mp3",
                arabeskvadisi : "http://sp.radyotescil.com:8010/;stream.mp3",
                babaradyo : "http://46.20.4.3/;stream.mp3",
                banko : "http://yayin.netradyom.com:9910/RADYOBANKO;",
                bestfm : "https://bestfm.turkhosted.com/;",
                efkarfm : "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/;",
                fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio ",
                fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
                joyturk : "http://17703.live.streamtheworld.com/JOY_TURK_SC?;stream.mp3",
                keyfslow : "https://yayin.radyomadyo.com:8004/stream",
                kral : "http://46.20.3.204/;stream.mp3",
                kralpop : "http://46.20.3.201/;stream.mp3",
                mastika : "https://radyodinle1.turkhosted.com/yayin?uri=radyo.yayin.com.tr:5950/;&tkn=7phkFkpmJmuz9x9smaOvYw&tms=1613624488",
                powerfm : "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio?/;stream.mp3",
                powerpop : "http://powerpop.listenpowerapp.com/powerpop/mpeg/icecast.audio?/;stream.mp3",
                powerturk : "http://powerturk.listenpowerapp.com/powerturk/mpeg/icecast.audio?/;stream.mp3",
                powerturkrap : "blob:https://www.canliradyodinle.fm/e11ee771-e619-4c85-b410-744e78a3b7a3",
                radyoarabesk : "https://yayin.radyoarabesk.com.tr:8000/stream",
                radyoderman : "https://stream.radyolarburada.com/radio/8280/1",
                radyodert : "blob:https://www.canliradyodinle.fm/90b2471f-5286-4ebb-a6a2-f6fdc302e871",
                radyoturkuvaz : "blob:https://www.canliradyodinle.fm/576783e9-9d7a-446d-8de8-db0335a34420",
                raphome : "blob:https://www.canliradyodinle.fm/9f9ef3b0-7a50-4d0e-94cc-6d386ca928b0",
                remixfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.162.187:7688/stream/&tkn=Kb-gt2Vx2Nv_2tFAmb3LHg&tms=1613715523",
                superfm : "https://www.youtube.com/watch?v=XKii9JG_o_M",
                turkrapfm : "https://radyodinle1.turkhosted.com/yayin?uri=95.173.188.166:9984/&tkn=Qwu3Evo2Sjxu2k-MkIv3bA&tms=1613715329",
                turkuvazefsane : "blob:https://www.canliradyodinle.fm/9b303f6b-731f-4204-a76d-1521b5fa5387",
                vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox "
                }
                
              let botPrefixxx = ("rad!")
                client3.on("message", async message => {
                  if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(botPrefixxx)) return;
                  let owners = [(config.owner1), (config.owner2), (config.owner3)]
                if (!owners.includes(message.author.id)) return
                console.log("Radyo Botu Akif.")
                  let args = message.content.split(' ').slice(1);
                  let command = message.content.split(' ')[0].slice(botPrefixxx.length);
                  if(command === "radyo") {
              
              message.delete(10000).catch(console.error);
                  if (!message.member.voice.channel) return message.reply("**Ses Kanalına Katıl, Ve Tekrar Dene!**").then(m => m.delete(15000)).catch(console.error);
                  else {
                      if (!args[0] || args[0] === "help" || args[0] === "yardım") {
                          message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n \n 1 = AlemFM \n 2 = ArabeskAlemi \n 3 = ArabeskFM \n 4 = ArabeskTürk \n 5 = ArabeskVadisi \n 6 = BabaRadyo \n 7 = Banko \n 8 = BestFM \n 9 = EfkarFM \n 10 = Fenomen \n 11 = FenomenFM \n 12 = JoyTürk \n 13 = KeyfSlow \n 14 = Kral \n 15 = KralPop \n 16 = Mastika \n 17 = PowerFM \n 18 = PowerPop   \n 19 = PowerTürk \n 20 = PowerTürkRap \n 21 = RadyoArabesk \n 22 = RadyoDerman \n 23 = RadyoDert \n 24 = RadyoTurkuvaz \n 25 = RapHome \n 26 = RemixFM \n 27 = SuperFM \n 28 = TürkRapFM   \n 29 = TurkuvazFfsane \n 30 = Vergin \n \n Açmak İçin r.radyo <numara> \n Kapatmak İçin r.radyo kapat**").then(m => m.delete(40000)).catch(console.error);
                    
              
              
              
                } else if (args[0].toLowerCase() === "AlemFM" || args[0] === "1") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.alemfm);
                              message.reply("🎧 | **Başarılı! 🎻`AlemFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })
                  
                          } else if (args[0].toLowerCase() === "ArabeskAlemi" || args[0] === "2") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.arabeskalemi);
                              message.reply("🎧 | **Başarılı! `ArabeskAlemi` Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })                                                                                    
                      } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                              message.member.voice.channel.leave();
                  return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voice.channel}.`);
                      
                          } else if (args[0].toLowerCase() === "ArabeskFM" || args[0] === "3") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.arabeskfm);
                              message.reply("🎧 | **Başarılı! 🎻`ArabeskFM`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
                          } else if (args[0].toLowerCase() === "ArabeskTürk" || args[0] === "4") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.arabeskturk);
                              message.reply("🎧 | **Başarılı! 🎻`ArabeskTürk`🎻 Çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
                          })   
              
              
                          } else if (args[0].toLowerCase() === "ArabeskVadisi" || args[0] === "5") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.arabeskvadisi);
                              message.reply("🎧 | **Başarılı! 🎻`ArabeskVadisi`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
                          } else if (args[0].toLowerCase() === "BabaRadyo" || args[0] === "6") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.babaradyo);
                              message.reply("🎧 | **Başarılı! 🎻`BabaRadyo`🎻 Çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
                          } else if (args[0].toLowerCase() === "Banko" || args[0] === "7") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.members.banko);
                              message.reply("🎧 | **Başarılı! 🎻`Banko`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "BestFM" || args[0] === "8") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.bestfm);
                              message.reply("🎧 | **Başarılı! 🎻`BestFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "EfkarFM" || args[0] === "9") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.efkarfm);
                              message.reply("🎧 | **Başarılı! 🎻`EfkarFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "Fenomen" || args[0] === "10") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.fenomen);
                              message.reply("🎧 | **Başarılı! 🎻`Fenomen`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "FenomenFM" || args[0] === "11") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.fenomenfm);
                              message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "JoyTürk" || args[0] === "12") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.joyturk);
                              message.reply("🎧 | **Başarılı! 🎻`JoyTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "KeyfSlow" || args[0] === "13") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.keyfslow);
                              message.reply("🎧 | **Başarılı! 🎻`KeyfSlow`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "Kral" || args[0] === "14") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.kral);
                              message.reply("🎧 | **Başarılı! 🎻`Kral`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "KralPop" || args[0] === "15") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.kralpop);
                              message.reply("🎧 | **Başarılı! 🎻`KralPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "Mastika" || args[0] === "16") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.mastika);
                              message.reply("🎧 | **Başarılı! 🎻`Mastika`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "PowerFM" || args[0] === "17") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.powerfm);
                              message.reply("🎧 | **Başarılı! 🎻`PowerFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "PowerPop" || args[0] === "18") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.powerpop);
                              message.reply("🎧 | **Başarılı! 🎻`PowerPop`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "PowerTürk" || args[0] === "19") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.powerturk);
                              message.reply("🎧 | **Başarılı! 🎻`PowerTürk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "PowerTürkRap" || args[0] === "20") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.powerturkrap);
                              message.reply("🎧 | **Başarılı! 🎻`PowerTürkRap`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RadyoArabesk" || args[0] === "21") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.radyoarabesk);
                              message.reply("🎧 | **Başarılı! 🎻`RadyoArabesk`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RadyoDerman" || args[0] === "22") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.radyoderman);
                              message.reply("🎧 | **Başarılı! 🎻`RadyoDerman`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RadyoDert" || args[0] === "23") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.radyodert);
                              message.reply("🎧 | **Başarılı! 🎻`RadyoDert`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RadyoTurkuvaz" || args[0] === "24") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.radyoturkuvaz);
                              message.reply("🎧 | **Başarılı! 🎻`RadyoTurkuvaz`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RapHome" || args[0] === "25") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.raphome);
                              message.reply("🎧 | **Başarılı! 🎻`RapHome`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "RemixFM" || args[0] === "26") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.remixfm);
                              message.reply("🎧 | **Başarılı! 🎻`RemixFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "SuperFM" || args[0] === "27") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.superfm);
                              message.reply("🎧 | **Başarılı! 🎻`SuperFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
                          } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "28") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.turkrapfm);
                              message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
              
                          } else if (args[0].toLowerCase() === "TurkuvazEfsane" || args[0] === "29") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.turkuvazefsane);
                              message.reply("🎧 | **Başarılı! 🎻`TurkuvazEfsane`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
              
              
                          } else if (args[0].toLowerCase() === "TürkRapFM" || args[0] === "30") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.turkrapfm);
                              message.reply("🎧 | **Başarılı! 🎻`TürkRapFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
              
              
              
              
                          } else if (args[0].toLowerCase() === "Vergin" || args[0] === "31") {
                          message.member.voice.channel.join().then(connection => {
                              var dispatcher = connection.play(radyo.vergın);
                              message.reply("🎧 | **Başarılı! 🎻`Vergin`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
                          })    
              
                        }
              
                      }
                  }
                  });
              
