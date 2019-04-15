var Pixastic=function(){function e(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false);else if(e.attachEvent)e.attachEvent("on"+t,n)}function t(t){var n=false;var r=function(){if(!n){n=true;t()}};document.write("<"+'script defer src="//:" id="__onload_ie_pixastic__"></'+"script>");var i=document.getElementById("__onload_ie_pixastic__");i.onreadystatechange=function(){if(i.readyState=="complete"){i.parentNode.removeChild(i);r()}};if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,false);e(window,"load",r)}function n(){var e=r("pixastic",null,"img");var t=r("pixastic",null,"canvas");var n=e.concat(t);for(var i=0;i<n.length;i++){(function(){var e=n[i];var t=[];var r=e.className.split(" ");for(var s=0;s<r.length;s++){var o=r[s];if(o.substring(0,9)=="pixastic-"){var u=o.substring(9);if(u!="")t.push(u)}}if(t.length){if(e.tagName.toLowerCase()=="img"){var a=new Image;a.src=e.src;if(a.complete){for(var f=0;f<t.length;f++){var l=Pixastic.applyAction(e,e,t[f],null);if(l)e=l}}else{a.onload=function(){for(var n=0;n<t.length;n++){var r=Pixastic.applyAction(e,e,t[n],null);if(r)e=r}}}}else{setTimeout(function(){for(var n=0;n<t.length;n++){var r=Pixastic.applyAction(e,e,t[n],null);if(r)e=r}},1)}}})()}}function r(e,t,n){var r=new Array;if(t==null)t=document;if(n==null)n="*";var s=t.getElementsByTagName(n);var o=s.length;var u=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<o;i++){if(u.test(s[i].className)){r[j]=s[i];j++}}return r}function o(e,t){if(!Pixastic.debug)return;try{switch(t){case"warn":console.warn("Pixastic:",e);break;case"error":console.error("Pixastic:",e);break;default:console.log("Pixastic:",e)}}catch(n){}if(!s){}}if(typeof pixastic_parseonload!="undefined"&&pixastic_parseonload)t(n);var s;var u=function(){var e=document.createElement("canvas");var t=false;try{t=!!(typeof e.getContext=="function"&&e.getContext("2d"))}catch(n){}return function(){return t}}();var a=function(){var e=document.createElement("canvas");var t=false;var n;try{if(typeof e.getContext=="function"&&(n=e.getContext("2d"))){t=typeof n.getImageData=="function"}}catch(r){}return function(){return t}}();var f=function(){var e=false;var t=document.createElement("canvas");if(u()&&a()){t.width=t.height=1;var n=t.getContext("2d");n.fillStyle="rgb(255,0,0)";n.fillRect(0,0,1,1);var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");i.fillStyle="rgb(0,0,255)";i.fillRect(0,0,1,1);n.globalAlpha=.5;n.drawImage(r,0,0);var s=n.getImageData(0,0,1,1).data;e=s[2]!=255}return function(){return e}}();return{parseOnLoad:false,debug:false,applyAction:function(e,t,n,r){r=r||{};var i=e.tagName.toLowerCase()=="canvas";if(i&&Pixastic.Client.isIE()){if(Pixastic.debug)o("Tried to process a canvas element but browser is IE.");return false}var s,u;var a=false;if(Pixastic.Client.hasCanvas()){a=!!r.resultCanvas;s=r.resultCanvas||document.createElement("canvas");u=s.getContext("2d")}var f=e.offsetWidth;var l=e.offsetHeight;if(i){f=e.width;l=e.height}if(f==0||l==0){if(e.parentNode==null){var c=e.style.position;var h=e.style.left;e.style.position="absolute";e.style.left="-9999px";document.body.appendChild(e);f=e.offsetWidth;l=e.offsetHeight;document.body.removeChild(e);e.style.position=c;e.style.left=h}else{if(Pixastic.debug)o("Image has 0 width and/or height.");return}}if(n.indexOf("(")>-1){var p=n;n=p.substr(0,p.indexOf("("));var d=p.match(/\((.*?)\)/);if(d[1]){d=d[1].split(";");for(var v=0;v<d.length;v++){thisArg=d[v].split("=");if(thisArg.length==2){if(thisArg[0]=="rect"){var m=thisArg[1].split(",");r[thisArg[0]]={left:parseInt(m[0],10)||0,top:parseInt(m[1],10)||0,width:parseInt(m[2],10)||0,height:parseInt(m[3],10)||0}}else{r[thisArg[0]]=thisArg[1]}}}}}if(!r.rect){r.rect={left:0,top:0,width:f,height:l}}else{r.rect.left=Math.round(r.rect.left);r.rect.top=Math.round(r.rect.top);r.rect.width=Math.round(r.rect.width);r.rect.height=Math.round(r.rect.height)}var g=false;if(Pixastic.Actions[n]&&typeof Pixastic.Actions[n].process=="function"){g=true}if(!g){if(Pixastic.debug)o('Invalid action "'+n+'". Maybe file not included?');return false}if(!Pixastic.Actions[n].checkSupport()){if(Pixastic.debug)o('Action "'+n+'" not supported by this browser.');return false}if(Pixastic.Client.hasCanvas()){if(s!==e){s.width=f;s.height=l}if(!a){s.style.width=f+"px";s.style.height=l+"px"}u.drawImage(t,0,0,f,l);if(!e.__pixastic_org_image){s.__pixastic_org_image=e;s.__pixastic_org_width=f;s.__pixastic_org_height=l}else{s.__pixastic_org_image=e.__pixastic_org_image;s.__pixastic_org_width=e.__pixastic_org_width;s.__pixastic_org_height=e.__pixastic_org_height}}else if(Pixastic.Client.isIE()&&typeof e.__pixastic_org_style=="undefined"){e.__pixastic_org_style=e.style.cssText}var y={image:e,canvas:s,width:f,height:l,useData:true,options:r};var b=Pixastic.Actions[n].process(y);if(!b){return false}if(Pixastic.Client.hasCanvas()){if(y.useData){if(Pixastic.Client.hasCanvasImageData()){s.getContext("2d").putImageData(y.canvasData,r.rect.left,r.rect.top);s.getContext("2d").fillRect(0,0,0,0)}}if(!r.leaveDOM){s.title=e.title;s.imgsrc=e.imgsrc;if(!i)s.alt=e.alt;if(!i)s.imgsrc=e.src;s.className=e.className;s.style.cssText=e.style.cssText;s.name=e.name;s.tabIndex=e.tabIndex;s.id=e.id;if(e.parentNode&&e.parentNode.replaceChild){e.parentNode.replaceChild(s,e)}}r.resultCanvas=s;return s}return e},prepareData:function(e,t){var n=e.canvas.getContext("2d");var r=e.options.rect;var i=n.getImageData(r.left,r.top,r.width,r.height);var s=i.data;if(!t)e.canvasData=i;return s},process:function(e,t,n,r){if(e.tagName.toLowerCase()=="img"){var i=new Image;i.src=e.src;if(i.complete){var s=Pixastic.applyAction(e,i,t,n);if(r)r(s);return s}else{i.onload=function(){var s=Pixastic.applyAction(e,i,t,n);if(r)r(s)}}}if(e.tagName.toLowerCase()=="canvas"){var s=Pixastic.applyAction(e,e,t,n);if(r)r(s);return s}},revert:function(e){if(Pixastic.Client.hasCanvas()){if(e.tagName.toLowerCase()=="canvas"&&e.__pixastic_org_image){e.width=e.__pixastic_org_width;e.height=e.__pixastic_org_height;e.getContext("2d").drawImage(e.__pixastic_org_image,0,0);if(e.parentNode&&e.parentNode.replaceChild){e.parentNode.replaceChild(e.__pixastic_org_image,e)}return e}}else if(Pixastic.Client.isIE()){if(typeof e.__pixastic_org_style!="undefined")e.style.cssText=e.__pixastic_org_style}},Client:{hasCanvas:u,hasCanvasImageData:a,hasGlobalAlpha:f,isIE:function(){return!!document.all&&!!window.attachEvent&&!window.opera}},Actions:{}}}();Pixastic.Actions.hsl={process:function(e){var t=parseInt(e.options.hue,10)||0;var n=(parseInt(e.options.saturation,10)||0)/100;var r=(parseInt(e.options.lightness,10)||0)/100;if(n<0){var i=1+n}else{var i=1+n*2}t=t%360/360;var s=t*6;var o=1/255;var u=r*255;var a=1+r;var f=1-r;if(Pixastic.Client.hasCanvasImageData()){var l=Pixastic.prepareData(e);var c=e.options.rect;var h=c.width*c.height;var p=h*4,d=p+1,v=p+2,m=p+3;while(h--){var g=l[p-=4];var y=l[d=p+1];var b=l[v=p+2];if(t!=0||n!=0){var w=g;if(y>w)w=y;if(b>w)w=b;var E=g;if(y<E)E=y;if(b<E)E=b;var S=w-E;var x=(E+w)/510;if(x>0){if(S>0){if(x<=.5){var T=S/(w+E)*i;if(T>1)T=1;var N=x*(1+T)}else{var T=S/(510-w-E)*i;if(T>1)T=1;var N=x+T-x*T}if(g==w){if(y==E)var C=5+(w-b)/S+s;else var C=1-(w-y)/S+s}else if(y==w){if(b==E)var C=1+(w-g)/S+s;else var C=3-(w-b)/S+s}else{if(g==E)var C=3+(w-y)/S+s;else var C=5-(w-g)/S+s}if(C<0)C+=6;if(C>=6)C-=6;var k=x+x-N;var L=C>>0;if(L==0){g=N*255;y=(k+(N-k)*(C-L))*255;b=k*255}else if(L==1){g=(N-(N-k)*(C-L))*255;y=N*255;b=k*255}else if(L==2){g=k*255;y=N*255;b=(k+(N-k)*(C-L))*255}else if(L==3){g=k*255;y=(N-(N-k)*(C-L))*255;b=N*255}else if(L==4){g=(k+(N-k)*(C-L))*255;y=k*255;b=N*255}else if(L==5){g=N*255;y=k*255;b=(N-(N-k)*(C-L))*255}}}}if(r<0){g*=a;y*=a;b*=a}else if(r>0){g=g*f+u;y=y*f+u;b=b*f+u}if(g<0)l[p]=0;else if(g>255)l[p]=255;else l[p]=g;if(y<0)l[d]=0;else if(y>255)l[d]=255;else l[d]=y;if(b<0)l[v]=0;else if(b>255)l[v]=255;else l[v]=b}return true}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()}}

window.hWsApi = null;
var xchng = {
    currentSymbol: 'BTCUSD',
    symbols: {"GRINBTC":"GRIN\/BTC","GRINETH":"GRIN\/ETH","GRINUSD":"GRIN\/USDT","FETBTC":"FET\/BTC","HTBTC":"HT\/BTC","HTUSD":"HT\/USDT","VRABTC":"VRA\/BTC","VRAETH":"VRA\/ETH","XZCBTC":"XZC\/BTC","XZCETH":"XZC\/ETH","XZCUSD":"XZC\/USDT","CROBTC":"CRO\/BTC","CROETH":"CRO\/ETH","CROUSD":"CRO\/USDT","WBTCETH":"WBTC\/ETH","GASBTC":"GAS\/BTC","GASETH":"GAS\/ETH","GASUSD":"GAS\/USDT","ORMEUSBTC":"ORMEUS\/BTC","ORMEUSETH":"ORMEUS\/ETH","PETHBTC":"PETH\/BTC","PETHETH":"PETH\/ETH","PETHUSD":"PETH\/USDT","BRDBTC":"BRD\/BTC","BRDETH":"BRD\/ETH","NMRBTC":"NMR\/BTC","SALTBTC":"SALT\/BTC","SALTETH":"SALT\/ETH","POLYBTC":"POLY\/BTC","POLYETH":"POLY\/ETH","POWRBTC":"POWR\/BTC","POWRETH":"POWR\/ETH","STORJBTC":"STORJ\/BTC","STORJETH":"STORJ\/ETH","STORJUSD":"STORJ\/USDT","MLNETH":"MLN\/ETH","BDGBTC":"BDG\/BTC","POAETH":"POA\/ETH","POAUSD":"POA\/USDT","POADAI":"POA\/DAI","VEOBTC":"VEO\/BTC","PLABTC":"PLA\/BTC","PLAETH":"PLA\/ETH","PLAUSD":"PLA\/USDT","BTCKRWB":"BTC\/KRWB","USDKRWB":"USDT\/KRWB","BTTBTC":"BTT\/BTC","BTTUSD":"BTT\/USDT","BTTETH":"BTT\/ETH","ZENBTC":"ZEN\/BTC","ZENETH":"ZEN\/ETH","ZENUSD":"ZEN\/USDT","ETHBTC":"ETH\/BTC","IXTBTC":"IXT\/BTC","HANDETH":"HAND\/ETH","HANDUSD":"HAND\/USDT","BCPTBTC":"BCPT\/BTC","STUBTC":"STU\/BTC","STUETH":"STU\/ETH","LTCETH":"LTC\/ETH ","BCNETH":"BCN\/ETH","MAIDETH":"MAID\/ETH","NXTETH":"NXT\/ETH","STRATETH":"STRAT\/ETH","XDNETH":"XDN\/ETH","XEMETH":"XEM\/ETH","PLRBTC":"PLR\/BTC","SURBTC":"SUR\/BTC","BQXBTC":"BQX\/BTC","DOGEETH":"DOGE\/ETH","DRPUETH":"DRPU\/ETH","XRPETH":"XRP\/ETH","XRPUSDT":"XRP\/USDT","SPFETH":"SPF\/ETH","STARETH":"STAR\/ETH","SBTCUSDT":"SBTC\/USDT","EKOUSDT":"EKO\/USDT","XUCETH":"XUC\/ETH","XUCBTC":"XUC\/BTC","BCPTETH":"BCPT\/ETH","BCPTUSDT":"BCPT\/USDT","BTCUSD":"BTC\/USDT","ADXBTC":"ADX\/BTC","ADXUSD":"ADX\/USDT","LSKETH":"LSK\/ETH","LSKUSD":"LSK\/USDT","PLRUSD":"PLR\/USDT","SURUSD":"SUR\/USDT","BQXUSD":"BQX\/USDT","DRTUSDT":"DRT\/USDT","REPETH":"REP\/ETH","REPUSDT":"REP\/USDT","KINETH":"KIN\/ETH","SNTBTC":"SNT\/BTC","ZECBTC":"ZEC\/BTC","XMRBTC":"XMR\/BTC","ARDRBTC":"ARDR\/BTC","DASHBTC":"DASH\/BTC","LSKBTC":"LSK\/BTC","STEEMBTC":"STEEM\/BTC","LTCBTC":"LTC\/BTC","EMCBTC":"EMC\/BTC","XDNBTC":"XDN\/BTC","WAVESBTC":"WAVES\/BTC","DOGEBTC":"DOGE\/BTC","XEMBTC":"XEM\/BTC","NXTBTC":"NXT\/BTC","BCNBTC":"BCN\/BTC","ZECUSD":"ZEC\/USDT","XEMUSD":"XEM\/USDT","BCNUSD":"BCN\/USDT","XDNUSD":"XDN\/USDT","MAIDUSD":"MAID\/USDT","SCBTC":"SC\/BTC","LTCUSD":"LTC\/USDT","SBDBTC":"SBD\/BTC","DOGEUSD":"DOGE\/USDT","MAIDBTC":"MAID\/BTC","AMPBTC":"AMP\/BTC","BUSBTC":"BUS\/BTC","DGDBTC":"DGD\/BTC","SNGLSBTC":"SNGLS\/BTC","1STBTC":"1ST\/BTC","TRSTBTC":"TRST\/BTC","GNOBTC":"GNO\/BTC","REPBTC":"REP\/BTC","TIMEBTC":"TIME\/BTC","IOSTBTC":"IOST\/BTC","ICXBTC":"ICX\/BTC","INKETH":"INK\/ETH","MANAETH":"MANA\/ETH","NCTBTC":"NCT\/BTC","INKUSD":"INK\/USDT","MANABTC":"MANA\/BTC","WIKIBTC":"WIKI\/BTC","SPCUSD":"SPC\/USDT","NEOBTC":"NEO\/BTC","EDOBTC":"EDO\/BTC","DATABTC":"DATA\/BTC","IOSTUSD":"IOST\/USDT","CSNOBTC":"CSNO\/BTC","ONTBTC":"ONT\/BTC","BMHBTC":"BMH\/BTC","ZILBTC":"ZIL\/BTC","BANCAUSD":"BANCA\/USDT","ICXUSD":"ICX\/USDT","NOAHETH":"NOAH\/ETH","DLTBTC":"DLT\/BTC","PIXBTC":"PIX\/BTC","UTTBTC":"UTT\/BTC","CVCOINBTC":"CVN\/BTC","BNTETH":"BNT\/ETH","BNTUSD":"BNT\/USDT","BETRBTC":"BETR\/BTC","NOAHUSD":"NOAH\/USDT","PMNTBTC":"PMNT\/BTC","KICKBTC":"KICK\/BTC","SCLBTC":"SCL\/BTC","YOYOWBTC":"YOYOW\/BTC","FTXBTC":"FTX\/BTC","ABYSSBTC":"ABYSS\/BTC","ABYSSETH":"ABYSS\/ETH","KMDBTC":"KMD\/BTC","DBETBTC":"DBET\/BTC","FRECBTC":"FREC\/BTC","ZILUSD":"ZIL\/USDT","BCIBTC":"BCI\/BTC","XVGBTC":"XVG\/BTC","NAVIBTC":"NAVI\/BTC","DNTBTC":"DNT\/BTC","BERRYBTC":"BERRY\/BTC","FRECETH":"FREC\/ETH","FRECUSDT":"FREC\/USDT","FYPBTC":"FYP\/BTC","ATLBTC":"ATL\/BTC","NAVIETH":"NAVI\/ETH","PITCHBTC":"PITCH\/BTC","PITCHETH":"PITCH\/ETH","OPTBTC":"OPT\/BTC","DGBBTC":"DGB\/BTC","CSMBTC":"CSM\/BTC","TDSBTC":"TDS\/BTC","ETPBTC":"ETP\/BTC","EKOBTC":"EKO\/BTC","TDSUSD":"TDS\/USDT","DCNBTC":"DCN\/BTC","NANJBTC":"NANJ\/BTC","SBDETH":"SBD\/ETH","GBXBTC":"GBX\/BTC","SBDUSD":"SBD\/USDT","DPNBTC":"DPN\/BTC","UUUBTC":"UUU\/BTC","STXBTC":"STX\/BTC","UUUETH":"UUU\/ETH","KINBTC":"KIN\/BTC","DRPUBTC":"DRPU\/BTC","SHIPBTC":"SHIP\/BTC","NTKBTC":"NTK\/BTC","NEBLBTC":"NEBL\/BTC","XBPBTC":"XBP\/BTC","NANOBTC":"NANO\/BTC","VIBEBTC":"VIBE\/BTC","AUCBTC":"AUC\/BTC","CATBTC":"CAT\/BTC","CPYBTC":"CPY\/BTC","ENJBTC":"ENJ\/BTC","CMCTBTC":"CMCT\/BTC","LNCBTC":"LNC\/BTC","CLNBTC":"CLN\/BTC","BCHBTC":"BCH\/BTC","WAXBTC":"WAX\/BTC","ACTBTC":"ACT\/BTC","ZSCBTC":"ZSC\/BTC","ARNBTC":"ARN\/BTC","MANBTC":"MAN\/BTC","ZRCBTC":"ZRC\/BTC","BOSBTC":"BOS\/BTC","DCTBTC":"DCT\/BTC","ANTBTC":"ANT\/BTC","TRXBTC":"TRX\/BTC","CLNETH":"CLN\/ETH","ADABTC":"ADA\/BTC","ARDRUSD":"ARDR\/USDT","BTXBTC":"BTX\/BTC","ADAETH":"ADA\/ETH","ADAUSD":"ADA\/USDT","PNTBTC":"PNT\/BTC","C20BTC":"C20\/BTC","ZRXBTC":"ZRX\/BTC","SIGBTC":"SIG\/BTC","ELECBTC":"ELEC\/BTC","ARTBTC":"ART\/BTC","FXTBTC":"FXT\/BTC","IDHBTC":"IDH\/BTC","NEXOBTC":"NEXO\/BTC","MTXBTC":"MTX\/BTC","FOTABTC":"FOTA\/BTC","CHXBTC":"CHX\/BTC","QNTUBTC":"QNTU\/BTC","RVTBTC":"RVT\/BTC","EVXETH":"EVX\/ETH","IPLBTC":"IPL\/BTC","COVBTC":"COV\/BTC","CVTBTC":"CVT\/BTC","NLC2BTC":"NLC2\/BTC","AEBTC":"AE\/BTC","SENTBTC":"SENT\/BTC","IPLETH":"IPL\/ETH","PTOYBTC":"PTOY\/BTC","IPLUSD":"IPL\/USDT","PPCBTC":"PPC\/BTC","PATBTC":"PAT\/BTC","STQUSD":"STQ\/USDT","CENNZBTC":"CENNZ\/BTC","AMMBTC":"AMM\/BTC","SMTBTC":"SMT\/BTC","WIZBTC":"WIZ\/BTC","GNTBTC":"GNT\/BTC","XMCBTC":"XMC\/BTC","CENNZETH":"CENNZ\/ETH","SWMBTC":"SWM\/BTC","CLOBTC":"CLO\/BTC","DADIBTC":"DADI\/BTC","ADHBTC":"ADH\/BTC","DBIXBTC":"DBIX\/BTC","DADIETH":"DADI\/ETH","PREBTC":"PRE\/BTC","DATXBTC":"DATX\/BTC","FXTETH":"FXT\/ETH","PLBTBTC":"PLBT\/BTC","TRUEBTC":"TRUE\/BTC","BNTBTC":"BNT\/BTC","GETBTC":"GET\/BTC","HEROBTC":"HERO\/BTC","CASBTC":"CAS\/BTC","MITHBTC":"MITH\/BTC","DRGBTC":"DRG\/BTC","BMCBTC":"BMC\/BTC","DRGETH":"DRG\/ETH","BANCABTC":"BANCA\/BTC","XMCETH":"XMC\/ETH","XMCUSDT":"XMC\/USDT","ZAPBTC":"ZAP\/BTC","SUNCETH":"SUNC\/ETH","DOVBTC":"DOV\/BTC","SUBBTC":"SUB\/BTC","ZAPETH":"ZAP\/ETH","CNDBTC":"CND\/BTC","ZAPUSD":"ZAP\/USDT","FDZBTC":"FDZ\/BTC","AUTOBTC":"AUTO\/BTC","FDZETH":"FDZ\/ETH","CHATBTC":"CHAT\/BTC","NOAHBTC":"NOAH\/BTC","SOCBTC":"SOC\/BTC","FDZUSD":"FDZ\/USDT","SPDBTC":"SPD\/BTC","WTCBTC":"WTC\/BTC","OTNBTC":"OTN\/BTC","INSURBTC":"INSUR\/BTC","SPDETH":"SPD\/ETH","XTZBTC":"XTZ\/BTC","OCNBTC":"OCN\/BTC","MITXBTC":"MITX\/BTC","DICEBTC":"DICE\/BTC","STQBTC":"STQ\/BTC","TIVBTC":"TIV\/BTC","PTOYETH":"PTOY\/ETH","HSRBTC":"HSR\/BTC","1STETH":"1ST\/ETH","XLMBTC":"XLM\/BTC","B2GBTC":"B2G\/BTC","LENDBTC":"LEND\/BTC","XAURETH":"XAUR\/ETH","ODNBTC":"ODN\/BTC","TAASETH":"TAAS\/ETH","BTMBTC":"BTM\/BTC","UTKBTC":"UTK\/BTC","ZPTBTC":"ZPT\/BTC","TIMEETH":"TIME\/ETH","FUNBTC":"FUN\/BTC","SPFBTC":"SPF\/BTC","IOTABTC":"IOTA\/BTC","DICEETH":"DICE\/ETH","SWTETH":"SWT\/ETH","SBTCBTC":"SBTC\/BTC","XMRETH":"XMR\/ETH","ETCETH":"ETC\/ETH","HBZBTC":"HBZ\/BTC","FACEBTC":"FACE\/BTC","DASHETH":"DASH\/ETH","HVNBTC":"HVN\/BTC","CHSBBTC":"CHSB\/BTC","DRTBTC":"DRT\/BTC","ZECETH":"ZEC\/ETH","HBZETH":"HBZ\/ETH","PLUETH":"PLU\/ETH","GNOETH":"GNO\/ETH","XRPBTC":"XRP\/BTC","HBZUSD":"HBZ\/USDT","DAYBTC":"DAY\/BTC","MORPHBTC":"MORPH\/BTC","STRATUSD":"STRAT\/USDT","BETRUSD":"BETR\/USDT","POEBTC":"POE\/BTC","LIFEBTC":"LIFE\/BTC","STRATBTC":"STRAT\/BTC","LOCBTC":"LOC\/BTC","NEUBTC":"NEU\/BTC","VIBBTC":"VIB\/BTC","ERTBTC":"ERT\/BTC","CPTBTC":"CPT\/BTC","CRPTBTC":"CRPT\/BTC","PATUSD":"PAT\/USDT","MESHBTC":"MESH\/BTC","SWFTCBTC":"SWFTC\/BTC","HTMLBTC":"HTML\/BTC","MITXETH":"MITX\/ETH","TAUBTC":"TAU\/BTC","JOTBTC":"JOT\/BTC","IHTBTC":"IHT\/BTC","EOSBTC":"EOS\/BTC","JBCBTC":"JBC\/BTC","EOSUSD":"EOS\/USDT","BTGBTC":"BTG\/BTC","STORMBTC":"STORM\/BTC","BTSBTC":"BTS\/BTC","SCCBTC":"SCC\/BTC","FLPBTC":"FLP\/BTC","BNKBTC":"BNK\/BTC","KBCBTC":"KBC\/BTC","YCCBTC":"YCC\/BTC","SMARTBTC":"SMART\/BTC","DANBTC":"DAN\/BTC","TELBTC":"TEL\/BTC","DADIUSD":"DADI\/USDT","XTZETH":"XTZ\/ETH","DIMBTC":"DIM\/BTC","TKYBTC":"TKY\/BTC","BNKETH":"BNK\/ETH","HPCBTC":"HPC\/BTC","RBTC":"R\/BTC","XTZUSD":"XTZ\/USDT","NGCBTC":"NGC\/BTC","ACATBTC":"ACAT\/BTC","BNKUSD":"BNK\/USDT","BUBOBTC":"BUBO\/BTC","MTHBTC":"MTH\/BTC","IXTETH":"IXT\/ETH","EMCETH":"EMC\/ETH","CSMETH":"CSM\/ETH","CSMUSD":"CSM\/USDT","BTXUSD":"BTX\/USDT","PKTBTC":"PKT\/BTC","MCOBTC":"MCO\/BTC","INKBTC":"INK\/BTC","LRCBTC":"LRC\/BTC","SPCBTC":"SPC\/BTC","MCOUSD":"MCO\/USDT","ICXETH":"ICX\/ETH","NCTETH":"NCT\/ETH","WIKIETH":"WIKI\/ETH","NEOETH":"NEO\/ETH","NCTUSD":"NCT\/USDT","CPAYETH":"CPAY\/ETH","WIKIUSD":"WIKI\/USDT","EVXUSD":"EVX\/USDT","NEOUSD":"NEO\/USDT","EDOETH":"EDO\/ETH","DATAETH":"DATA\/ETH","EDOUSD":"EDO\/USDT","ONTETH":"ONT\/ETH","HGTETH":"HGT\/ETH","DATAUSD":"DATA\/USDT","ONTUSD":"ONT\/USDT","PIXETH":"PIX\/ETH","UTTETH":"UTT\/ETH","CVCOINETH":"CVN\/ETH","INDETH":"IND\/ETH","BETRETH":"BETR\/ETH","UTTUSD":"UTT\/USDT","CVCOINUSD":"CVN\/USDT","FTXETH":"FTX\/ETH","KMDETH":"KMD\/ETH","MANAUSD":"MANA\/USDT","DBETETH":"DBET\/ETH","KMDUSD":"KMD\/USDT","XVGETH":"XVG\/ETH","DBETUSD":"DBET\/USDT","VMEETH":"VME\/ETH","BERRYETH":"BERRY\/ETH","XVGUSD":"XVG\/USDT","RNTBETH":"RNTB\/ETH","LNDETH":"LND\/ETH","BERRYUSD":"BERRY\/USDT","DGBETH":"DGB\/ETH","TDSETH":"TDS\/ETH","DGBUSD":"DGB\/USDT","ETPETH":"ETP\/ETH","EKOETH":"EKO\/ETH","TNTETH":"TNT\/ETH","ETPUSD":"ETP\/USDT","ACOETH":"ACO\/ETH","DCNETH":"DCN\/ETH","GBXETH":"GBX\/ETH","DCNUSD":"DCN\/USDT","STXETH":"STX\/ETH","GBXUSD":"GBX\/USDT","STXUSD":"STX\/USDT","SHIPETH":"SHIP\/ETH","NTKETH":"NTK\/ETH","NEBLETH":"NEBL\/ETH","NTKUSD":"NTK\/USDT","NANOETH":"NANO\/ETH","AUCETH":"AUC\/ETH","CATETH":"CAT\/ETH","NANOUSD":"NANO\/USDT","KRMUSD":"KRM\/USDT","CPYETH":"CPY\/ETH","CATUSD":"CAT\/USDT","ENJETH":"ENJ\/ETH","CMCTETH":"CMCT\/ETH","CHPETH":"CHP\/ETH","ENJUSD":"ENJ\/USDT","CMCTUSD":"CMCT\/USDT","BCHETH":"BCH\/ETH","BCHUSD":"BCH\/USDT","WAXETH":"WAX\/ETH","ACTETH":"ACT\/ETH","ZSCETH":"ZSC\/ETH","ARNETH":"ARN\/ETH","MANETH":"MAN\/ETH","WAXUSD":"WAX\/USDT","ACTUSD":"ACT\/USDT","ENGETH":"ENG\/ETH","ZSCUSD":"ZSC\/USDT","MANUSD":"MAN\/USDT","XUCUSD":"XUC\/USDT","TRXETH":"TRX\/ETH","GVTETH":"GVT\/ETH","TRXUSD":"TRX\/USDT","PNTETH":"PNT\/ETH","C20ETH":"C20\/ETH","ZRXETH":"ZRX\/ETH","FOTAETH":"FOTA\/ETH","ELECETH":"ELEC\/ETH","ZRXUSD":"ZRX\/USDT","ELECUSD":"ELEC\/USDT","IDHETH":"IDH\/ETH","MTXETH":"MTX\/ETH","CHXETH":"CHX\/ETH","QNTUETH":"QNTU\/ETH","COVETH":"COV\/ETH","MTXUSD":"MTX\/USDT","CHXUSD":"CHX\/USDT","QNTUUSD":"QNTU\/USDT","CVTETH":"CVT\/ETH","SENTETH":"SENT\/ETH","CVTUSD":"CVT\/USDT","SENTUSD":"SENT\/USDT","PPCUSD":"PPC\/USDT","PATETH":"PAT\/ETH","QTUMETH":"QTUM\/ETH","AMMETH":"AMM\/ETH","SMTETH":"SMT\/ETH","WIZETH":"WIZ\/ETH","GNTETH":"GNT\/ETH","AMMUSD":"AMM\/USDT","SMTUSD":"SMT\/USDT","WIZUSD":"WIZ\/USDT","GNTUSD":"GNT\/USDT","CVHETH":"CVH\/ETH","IGNISETH":"IGNIS\/ETH","CVHUSD":"CVH\/USDT","ADHETH":"ADH\/ETH","BDGETH":"BDG\/ETH","DATXETH":"DATX\/ETH","HEROETH":"HERO\/ETH","CASETH":"CAS\/ETH","MITHETH":"MITH\/ETH","BMCETH":"BMC\/ETH","CASUSD":"CAS\/USDT","MITHUSD":"MITH\/USDT","BANCAETH":"BANCA\/ETH","BMCUSD":"BMC\/USDT","SNTETH":"SNT\/ETH","DOVETH":"DOV\/ETH","SUBETH":"SUB\/ETH","CNDETH":"CND\/ETH","SUBUSD":"SUB\/USDT","CNDUSD":"CND\/USDT","CHATETH":"CHAT\/ETH","CHATUSD":"CHAT\/USDT","INSURETH":"INSUR\/ETH","BQXETH":"BQX\/ETH","TRACETH":"TRAC\/ETH","OCNETH":"OCN\/ETH","JNTETH":"JNT\/ETH","STQETH":"STQ\/ETH","CDTETH":"CDT\/ETH","XLMETH":"XLM\/ETH","B2GUSD":"B2G\/USDT","CDTUSD":"CDT\/USDT","LENDETH":"LEND\/ETH","XLMUSD":"XLM\/USDT","BTMETH":"BTM\/ETH","UTKETH":"UTK\/ETH","ZPTETH":"ZPT\/ETH","FUNETH":"FUN\/ETH","BTMUSD":"BTM\/USDT","UTKUSD":"UTK\/USDT","IOTAETH":"IOTA\/ETH","SBTCETH":"SBTC\/ETH","GNXETH":"GNX\/ETH","FUNUSD":"FUN\/USDT","IOTAUSD":"IOTA\/USDT","FACEETH":"FACE\/ETH","HVNETH":"HVN\/ETH","CHSBETH":"CHSB\/ETH","DAYETH":"DAY\/ETH","MORPHETH":"MORPH\/ETH","DAYUSD":"DAY\/USDT","MORPHUSD":"MORPH\/USDT","POEETH":"POE\/ETH","SNCETH":"SNC\/ETH","ADXETH":"ADX\/ETH","LOCETH":"LOC\/ETH","NEUETH":"NEU\/ETH","VIBETH":"VIB\/ETH","BETETH":"BET\/ETH","LOCUSD":"LOC\/USDT","NEUUSD":"NEU\/USDT","CRPTUSD":"CRPT\/USDT","VIBUSD":"VIB\/USDT","EOSETH":"EOS\/ETH","DRTETH":"DRT\/ETH","DENTETH":"DENT\/ETH","STUUSD":"STU\/USDT","MESHETH":"MESH\/ETH","SWFTCETH":"SWFTC\/ETH","SANETH":"SAN\/ETH","MESHUSD":"MESH\/USDT","HTMLETH":"HTML\/ETH","SWFTCUSD":"SWFTC\/USDT","IHTETH":"IHT\/ETH","JBCETH":"JBC\/ETH","IHTUSD":"IHT\/USDT","BTGETH":"BTG\/ETH","DIMETH":"DIM\/ETH","BTGUSD":"BTG\/USDT","DIMUSD":"DIM\/USDT","FLPETH":"FLP\/ETH","KBCETH":"KBC\/ETH","SMARTETH":"SMART\/ETH","FLPUSD":"FLP\/USDT","TELETH":"TEL\/ETH","UETETH":"UET\/ETH","PPTETH":"PPT\/ETH","SMARTUSD":"SMART\/USDT","RETH":"R\/ETH","MYBETH":"MYB\/ETH","NGCETH":"NGC\/ETH","ACATETH":"ACAT\/ETH","BUBOETH":"BUBO\/ETH","SURETH":"SUR\/ETH","MTHETH":"MTH\/ETH","NGCUSD":"NGC\/USDT","ACATUSD":"ACAT\/USDT","BUBOUSD":"BUBO\/USDT","PLRETH":"PLR\/ETH","TIXETH":"TIX\/ETH","PROETH":"PRO\/ETH","PKTETH":"PKT\/ETH","AVTETH":"AVT\/ETH","LRCETH":"LRC\/ETH","LAETH":"LA\/ETH","MCOETH":"MCO\/ETH","GUPBTC":"GUP\/BTC","PLUBTC":"PLU\/BTC","LUNBTC":"LUN\/BTC","TAASBTC":"TAAS\/BTC","NXCBTC":"NXC\/BTC","EDGBTC":"EDG\/BTC","MLNBTC":"MLN\/BTC","RLCBTC":"RLC\/BTC","SWTBTC":"SWT\/BTC","TKNBTC":"TKN\/BTC","WINGSBTC":"WINGS\/BTC","XAURBTC":"XAUR\/BTC","AMBUSD":"AMB\/USDT","AMBETH":"AMB\/ETH","AMBBTC":"AMB\/BTC","CDTBTC":"CDT\/BTC","EVXBTC":"EVX\/BTC","XMRUSD":"XMR\/USDT","ETCBTC":"ETC\/BTC","ETCUSD":"ETC\/USDT","DASHUSD":"DASH\/USDT","ETHUSD":"ETH\/USDT","NXTUSD":"NXT\/USDT","CVCUSD":"CVC\/USDT","PAYBTC":"PAY\/BTC","PPTBTC":"PPT\/BTC","OMGBTC":"OMG\/BTC","AEONBTC":"AEON\/BTC","TNTUSD":"TNT\/USDT","TNTBTC":"TNT\/BTC","REXETH":"REX\/ETH","REXUSD":"REX\/USDT","BCDBTC":"BCD\/BTC","ELFBTC":"ELF\/BTC","ELFUSD":"ELF\/USDT","EOSGUSD":"EOS\/GUSD","BCDUSD":"BCD\/USDT","AXPRBTC":"AXPR\/BTC","AXPRETH":"AXPR\/ETH","DAGBTC":"DAG\/BTC","EDGETH":"EDG\/ETH","DAGETH":"DAG\/ETH","EDGUSD":"EDG\/USDT","BITSBTC":"BITS\/BTC","COSMBTC":"COSM\/BTC","BITSETH":"BITS\/ETH","BITSUSD":"BITS\/USDT","COSMETH":"COSM\/ETH","EURSUSD":"EURS\/USDT","VETBTC":"VET\/BTC","EURSTUSD":"EURS\/TUSD","EURSDAI":"EURS\/DAI","VETETH":"VET\/ETH","MNXUSD":"MNX\/USDT","ROXETH":"ROX\/ETH","VETUSDT":"VET\/USDT","SLXBTC":"SLX\/BTC","ZPRETH":"ZPR\/ETH","SLXUSD":"SLX\/USDT","MNXBTC":"MNX\/BTC","SILKETH":"SILK\/ETH","MNXETH":"MNX\/ETH","BOXBTC":"BOX\/BTC","KINDBTC":"KIND\/BTC","KINDETH":"KIND\/ETH","BOXETH":"BOX\/ETH","ENGTBTC":"ENGT\/BTC","BOXEURS":"BOX\/EURS","BOXEOS":"BOX\/EOS","ENGTETH":"ENGT\/ETH","VOCOBTC":"VOCO\/BTC","PMABTC":"PMA\/BTC","VOCOETH":"VOCO\/ETH","PMAETH":"PMA\/ETH","VOCOUSD":"VOCO\/USDT","TVBTC":"TV\/BTC","PASSBTC":"PASS\/BTC","TVETH":"TV\/ETH","PASSETH":"PASS\/ETH","TVUSD":"TV\/USDT","PBTTBTC":"PBTT\/BTC","XCLRBTC":"XCLR\/BTC","BATBTC":"BAT\/BTC","PMAUSD":"PMA\/USDT","TRADBTC":"TRAD\/BTC","BATETH":"BAT\/ETH","DGTXBTC":"DGTX\/BTC","BATUSD":"BAT\/USDT","SRNBTC":"SRN\/BTC","SRNETH":"SRN\/ETH","DGTXETH":"DGTX\/ETH","SRNUSD":"SRN\/USDT","DGTXUSD":"DGTX\/USDT","MRKBTC":"MRK\/BTC","SVDBTC":"SVD\/BTC","MRKETH":"MRK\/ETH","DGBTUSD":"DGB\/TUSD","SVDETH":"SVD\/ETH","MESSEEOS":"MESSE\/EOS","MESSEEURS":"MESSE\/EURS","SVDUSD":"SVD\/USDT","SNBLBTC":"SNBL\/BTC","BCHABCBTC":"BCHABC\/BTC","GSTBTC":"GST\/BTC","BCHABCUSD":"BCHABC\/USDT","GSTETH":"GST\/ETH","BCHSVBTC":"BCHSV\/BTC","GSTUSD":"GST\/USDT","BCHSVUSD":"BCHSV\/USDT","BNBBTC":"BNB\/BTC","OAKETH":"OAK\/ETH","BNBETH":"BNB\/ETH","BKXBTC":"BKX\/BTC","BNBUSD":"BNB\/USDT","NPLCBTC":"NPLC\/BTC","NPLCETH":"NPLC\/ETH","DITBTC":"DIT\/BTC","DITETH":"DIT\/ETH","MRSBTC":"MRS\/BTC","MRSETH":"MRS\/ETH","MRSUSD":"MRS\/USDT","POABTC":"POA\/BTC","SPFUSD":"SPF\/USDT","DTRBTC":"DTR\/BTC","LCCBTC":"LCC\/BTC","DTRETH":"DTR\/ETH","POA20BTC":"POA20\/BTC","HGTBTC":"HGT\/BTC","TDPBTC":"TDP\/BTC","BTCDAI":"BTC\/DAI","HBTETH":"HBT\/ETH","PXGBTC":"PXG\/BTC","ETHDAI":"ETH\/DAI","PXGUSD":"PXG\/USDT","CCLUSD":"CCL\/USDT","BTCPAX":"BTC\/PAX","MKRDAI":"MKR\/DAI","POA20ETH":"POA20\/ETH","ETHPAX":"ETH\/PAX","POA20USD":"POA20\/USDT","USDPAX":"USDT\/PAX","EOSDAI":"EOS\/DAI","USDDAI":"USDT\/DAI","POA20DAI":"POA20\/DAI","BTCUSDC":"BTC\/USDC","NIMBTC":"NIM\/BTC","ETHUSDC":"ETH\/USDC","ETHTUSD":"ETH\/TUSD","USEBTC":"USE\/BTC","USDUSDC":"USDT\/USDC","BTCTUSD":"BTC\/TUSD","LTCTUSD":"LTC\/TUSD","USEETH":"USE\/ETH","TUSDUSDC":"TUSD\/USDC","DAIUSDC":"DAI\/USDC","XMRTUSD":"XMR\/TUSD","ABTCBTC":"ABTC\/BTC","CLOETH":"CLO\/ETH","CLOUSD":"CLO\/USDT","ZRXTUSD":"ZRX\/TUSD","DAVBTC":"DAV\/BTC","EOSPAX":"EOS\/PAX","NEOTUSD":"NEO\/TUSD","DAVETH":"DAV\/ETH","BCCFTUSD":"BCH\/TUSD","ETNBTC":"ETN\/BTC","ETNETH":"ETN\/ETH","USDTUSD":"USDT\/TUSD","ETNUSD":"ETN\/USDT","ABABTC":"ABA\/BTC","MKRBTC":"MKR\/BTC","ABAETH":"ABA\/ETH","MKRETH":"MKR\/ETH","MKRUSD":"MKR\/USDT","ABAUSD":"ABA\/USDT","TUSDDAI":"TUSD\/DAI","NIMETH":"NIM\/ETH","NEODAI":"NEO\/DAI","LTCDAI":"LTC\/DAI","XMRDAI":"XMR\/DAI","BCCFDAI":"BCH\/DAI","BCNEOS":"BCN\/EOS","XRPDAI":"XRP\/DAI","LTCEOS":"LTC\/EOS","NEXOETH":"NEXO\/ETH","XMREOS":"XMR\/EOS","NEXOUSD":"NEXO\/USDT","DASHEOS":"DASH\/EOS","PROCBTC":"PROC\/BTC","TRXEOS":"TRX\/EOS","DWSBTC":"DWS\/BTC","NEOEOS":"NEO\/EOS","ZECEOS":"ZEC\/EOS","DWSETH":"DWS\/ETH","LSKEOS":"LSK\/EOS","DWSUSD":"DWS\/USDT","APPCBTC":"APPC\/BTC","XEMEOS":"XEM\/EOS","XRPEOS":"XRP\/EOS","APPCETH":"APPC\/ETH","MESSEBTC":"MESSE\/BTC","APPCUSD":"APPC\/USDT","MESSEETH":"MESSE\/ETH","BITETH":"BIT\/ETH","MESSEUSD":"MESSE\/USDT","DASHEURS":"DASH\/EURS","CCLETH":"CCL\/ETH","ZECEURS":"ZEC\/EURS","RCNBTC":"RCN\/BTC","BTCEURS":"BTC\/EURS","RCNETH":"RCN\/ETH","RCNUSD":"RCN\/USDT","EOSEURS":"EOS\/EURS","HMQBTC":"HMQ\/BTC","ETHEURS":"ETH\/EURS","HMQETH":"HMQ\/ETH","LTCEURS":"LTC\/EURS","MYSTBTC":"MYST\/BTC","BCCFEURS":"BCH\/EURS","MYSTETH":"MYST\/ETH","NEOEURS":"NEO\/EURS","TOLLBTC":"TOLL\/BTC","TOLLETH":"TOLL\/ETH","TOLLUSD":"TOLL\/USDT","XMREURS":"XMR\/EURS","BTCGUSD":"BTC\/GUSD","XRPEURS":"XRP\/EURS","ETHGUSD":"ETH\/GUSD","REXBTC":"REX\/BTC","USDTGUSD":"USDT\/GUSD","SNCBTC":"SNC\/BTC","SNCUSD":"SNC\/USDT","OAXUSD":"OAX\/USDT","OAXBTC":"OAX\/BTC","QTUMBTC":"QTUM\/BTC","PAYETH":"PAY\/ETH","OAXETH":"OAX\/ETH","OMGETH":"OMG\/ETH","QTUMUSD":"QTUM\/USDT","HTMLUSD":"HTML\/USDT","EMCUSDT":"EMC\/USDT","SNTUSD":"SNT\/USDT","OMGUSD":"OMG\/USDT","SPCETH":"SPC\/ETH","ZPTUSD":"ZPT\/USDT","TIVETH":"TIV\/ETH","TIVUSD":"TIV\/USDT"},
    serverUrl: 'https://www.google.com/',
    bg: "",
    css: '#xchng-ticker{background-color: white; cursor:pointer; font-family:Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color:#ffffff; width:275px; height:160px; position:relative; overflow-y:visible;}' +
    '#xchng-ticker #xchng-main-value{position:absolute; font-size:46px; font-weight:bold; margin:66px auto auto 17px;line-height:62px;z-index: 4;}' +
    '#xchng-ticker .small{font-size:7px; float:right; clear:both; line-height:16px;}' +
    '#xchng-ticker .small span{font-weight:bold; min-width:40px; display:inline-block;}' +
    '#xchng-ticker .top-block{ background-image: linear-gradient(90deg, #050F2F 0%, #122357 100%); padding:10px;z-index: 5; position:relative; padding-bottom: 48px; padding-top: 14px; padding-right: 16px;}' +
    '#xchng-ticker #xchng-selector-label{outline: none; padding:7px; width:100%; cursor:pointer; line-height:15px; font-size: 14px; font-weight: 400; text-align:left;}' +
    '#xchng-ticker #xchng-selector-label:after{content:""; height:6px; position:absolute; right:10px; top:12px; width:10px; background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAARklEQVR42mOYe/KWBBAzMuAAQDkOIOYFMeqAOBmImbAoEgPiTiA2B3F4gbgeXTGSoiBknSiKsSrCojgDpyI0xZVAHIAuBwBFZVBReBmICwAAAABJRU5ErkJggg==");}' +
    '#xchng-ticker #xchng-selector{background-image: linear-gradient(90deg, #050F2F 0%, #122357 100%); border:1px solid rgba(255, 255, 255);  position:absolute; margin:17px 0 0 16px; z-index:999; font-weight:bold;width:120px; height: 28px;}' +
    '#xchng-ticker #xchng-selector:hover{border:1px solid rgb(255, 255, 255, 0.6);}' +
    '#xchng-ticker #xchng-selector ul{overflow-y: auto; text-align:left; position:relative; z-index: 20;color:#0e6887; list-style-type:none; display:none; background-color:#eaf3f6; margin:0; padding-left:0px; width:120px; cursor: pointer; outline:none; -webkit-border-bottom-right-radius:5px; -webkit-border-bottom-left-radius:5px; -moz-border-radius-bottomright:5px; -moz-border-radius-bottomleft:5px; border-bottom-right-radius:5px; border-bottom-left-radius:5px;	position: absolute;}' +
    '#xchng-ticker #xchng-selector ul.up{border-top-right-radius: 5px;border-top-left-radius: 5px;border-bottom-right-radius: 0;border-bottom-left-radius: 0;}' +
    '#xchng-ticker #xchng-selector ul li{padding-left:10px;}' +
    '#xchng-ticker #xchng-selector ul li:hover{color:#ffffff; background-color:#0a6280;}' +
    '#xchng-ticker #xchng-logo{color:white; text-decoration: none; background: linear-gradient(90deg, #050F2F 0%, #122357 100%); font-size:8px; position:absolute; z-index:6; display: flex; justify-content: center; align-items: center; height:20px; width:100%; left:0; bottom: 0; text-align:right; }' +
     
    '#xchng-ticker #xchng-logo b{font-size:12px; opacity:0.60; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha"(Opacity=60); filter:alpha(opacity=60);}' +
    '#xchng-ticker #xchng-selector ul li:first-child:hover{border-radius:0;}' +
    '#xchng-ticker #xchng-selector ul li:last-child:hover{-webkit-border-bottom-right-radius:5px; -webkit-border-bottom-left-radius:5px; -moz-border-radius-bottomright:5px; -moz-border-radius-bottomleft:5px; border-bottom-right-radius:5px; border-bottom-left-radius:5px;}' +
    '#xchng-ticker #xchng-selector ul.up li:first-child:hover{-webkit-border-top-right-radius:5px; -webkit-border-top-left-radius:5px; -moz-border-radius-topright:5px; -moz-border-radius-topleft:5px; border-top-right-radius:5px; border-top-left-radius:5px;}' +
    '#xchng-ticker #xchng-selector ul.up li:last-child:hover{border-radius:0;}' +
    '#xchng-ticker .small-font{font-size: 36px!important;}' +
    '#xchng-ticker .super-small-font{}' +
    '#xchng-ticker .double-super-small-font{font-size: 23px!important;}' +
    '#xchng-ticker .big-font{font-size: 50px!important;}' +
    '#xchng-ticker canvas, #xchng-ticker img{display:block; width:275px; height:160px;}' +
    '#xchng-canvas {position: absolute; top: 0; left: 0; z-index: 1;}' +

    '#xchng-ticker.xchng-small{font-size: 9px; width:193px; height:112px;}' +
    '#xchng-ticker.xchng-small #xchng-main-value{font-size:28px; margin-top:43px;}' +
    '#xchng-ticker.xchng-small #xchng-selector{margin:8px 0 0 9px; width:92px;}' +
    '#xchng-ticker.xchng-small #xchng-selector-label{width:80px; line-height:9px;}' +
    '#xchng-ticker.xchng-small #xchng-logo{font-size:7px;}' +
    '#xchng-ticker.xchng-small #xchng-logo:after{height:20px; margin:-8px -1px 0 -2px; width:27px; height:23px; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAABaUlEQVR42u2UzUvDQBDFY8XisYhCDyKIB72IaNGbiuhVL5KqiFaoJmm1WvGzNYn+5/ENvIUhBGQ3rRdd+JHsJsybnX07njeGkWXZpvcbA0IroD2u4EtgHxyBJrgBW67BJsFEwXodXIA38AWGFJtxFVoGlyABPQY/BLugC27BI0jBqqtIDZwx45BP4R0EFJF5zO8N15Jtgw8lIGV6ZdCUuxwooRaYshVaVBkLL5y3QcTAIecd8Mn/xBAHNkLrLM+dOnBTQp2AnM813/sUanG3c7YW7uTOJ2UJEyUg4k/qv3OwZm0QsTjYYLBABQyUUe5zpjGuPHV1Y5UZd0lEQblLD9zxQImFTLDiKrigsjeGERFf7dac6zN3PF+mFflKrM+gFXDM65GokvasXEmB6dzljhlMnOpz3Qias4z5XivbaPcoFukGywbgc/0EzI6iq1eVO+sFHadR1KjLCMo9uhpp0B/u3473P/7c+AYzrqDa2+4mRgAAAABJRU5ErkJggg==");}' +
    '#xchng-ticker.xchng-small #xchng-logo b{font-size:10px;}' +
    '#xchng-ticker.xchng-small .small{line-height:14px; font-size:7px;}' +
    '#xchng-ticker.xchng-small .top-block{padding:8px;}' +
    '#xchng-ticker.xchng-small #xchng-selector ul{width:92px;}' +
    '#xchng-ticker.xchng-small #xchng-selector-label:after{top: 8px;}' +
    '#xchng-ticker.xchng-small .small-font{font-size: 22px!important;}' +
    '#xchng-ticker.xchng-small .super-small-font{font-size: 18px!important;}' +
    '#xchng-ticker.xchng-small .double-super-small-font{font-size: 14px!important;}' +
    '#xchng-ticker.xchng-small .big-font{font-size: 28px!important;}' +
    '#xchng-ticker.xchng-small canvas, #xchng-ticker.xchng-small img{width:193px; height:112px;}' +

    '#xchng-ticker.xchng-big{font-size:22px; width:495px; height:288px;}' +
    '#xchng-ticker.xchng-big #xchng-main-value{font-size:74px; margin-top:145px;}' +
    '#xchng-ticker.xchng-big #xchng-selector{margin:28px 0 0 35px; width: 186px;}' +
    '#xchng-ticker.xchng-big #xchng-selector-label{width:175px; line-height:28px;}' +
    '#xchng-ticker.xchng-big #xchng-logo{height:25px; font-size:9px;}' +
    '#xchng-ticker.xchng-big .small{line-height:25px;font-size: 21px;}' +
    '#xchng-ticker.xchng-big .small span{min-width:112px;}' +
    '#xchng-ticker.xchng-big .top-block{padding:25px;}' +
    '#xchng-ticker.xchng-big #xchng-selector ul{width:186px;}' +
    '#xchng-ticker.xchng-big #xchng-selector-label:after{top: 18px;}' +
    '#xchng-ticker.xchng-big .small-font{font-size: 50px!important;}' +
    '#xchng-ticker.xchng-big .super-small-font{font-size: 50px!important;}' +
    '#xchng-ticker.xchng-big .double-super-small-font{font-size: 42px!important;}' +
    '#xchng-ticker.xchng-big .big-font{font-size: 74px!important;}' +
    '#xchng-ticker.xchng-big canvas, #xchng-ticker.xchng-big img{width:495px; height:288px;}',
    widget: function (element, size, color, defaultPair, refId) {
        var mainValue,
            askValue,
            bidValue,
            cacheData = {},
            connect = function () {
                
                subscribe(xchng.currentSymbol);
            },
            isEmptyObject = function (obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            },
            isUndefined = function (data) {
                return typeof data === 'undefined' || data === null;
            },
            addDataToCache = function (pair, data) {
                if (!isUndefined(data) && !isEmptyObject(data)) {
                    cacheData[pair] = data;
                }
            },
            getSymbolSign = function (currency) {
                switch (currency) {
                    case 'USD':
                        return '₮'
                        break;
                    case 'USDT':
                        return '₮'
                        break;
                    case 'SDT':
                        return '₮'
                        break;
                    case 'EUR':
                        return '&euro;';
                        break;
                    case 'LTC':
                        return '&#321;';
                        break;
                    case 'BTC':
                        return '&#3647;';
                        break;
                    case 'DOG':
                        return 'D';
                        break;
                    default:
                        return currency;
                }
            },
            getFirstSymbolSign = function (currencyPair) {
                var currency = currencyPair.substr(currencyPair.length - 3, 3);
                return getSymbolSign(currency);
            },
            getSecondSymbolSign = function (currencyPair) {
                var currency = currencyPair.substr(0, 3);
                return getSymbolSign(currency);
            },
            updateWidget = function () {
                var main = 0,
                    bid = 0,
                    ask = 0,
                    symbolSign = getFirstSymbolSign(xchng.currentSymbol);

                if (!isUndefined(cacheData[xchng.currentSymbol])) {
                    var data = cacheData[xchng.currentSymbol];

                    if (!isUndefined(data.last)) {
                        main = data.last;
                    }

                    if (!isUndefined(data.bid)) {
                        bid = data.bid;
                    }

                    if (!isUndefined(data.ask)) {
                        ask = data.ask;
                    }
                }

                mainValue.innerHTML = symbolSign + ' ' + main;
                bidValue.innerHTML = symbolSign + ' ' + bid;
                askValue.innerHTML = symbolSign + ' ' + ask;

                if (mainValue.innerHTML.length > 13) {
                    mainValue.setAttribute("class", "double-super-small-font");
                } else if (mainValue.innerHTML.length > 9) {
                    mainValue.setAttribute("class", "super-small-font");
                } else if (mainValue.innerHTML.length > 8) {
                    mainValue.setAttribute("class", "small-font");
                } else {
                    mainValue.setAttribute("class", "big-font");
                }
            },
            unsubscribe = function (pair) {
                if (hWsApi && hWsApi.readyState == hWsApi.OPEN) {
                    hWsApi.send(JSON.stringify({channel: 'ticker', event: 'unsub', params:{symbol: pair}}));
                }
            },
            subscribe = function (pair) {
                var reconnectInterval = null;
                function wsInit() {
                    clearInterval(reconnectInterval);
                    hWsApi = new WebSocket('wss://api.hitbtc.com/api/2/ws');
                    hWsApi.onopen = function (e) {
                        if (hWsApi.readyState == hWsApi.OPEN) {
                            hWsApi.send(JSON.stringify({channel: 'ticker', event: 'sub', params:{symbol: pair}}));
                        }
                    };
                    hWsApi.onmessage = function (e) {
                        try {
                            var doc = JSON.parse(e.data.toString());
                            if (doc.data) {
                                addDataToCache(doc.data.symbol, doc.data);
                                updateWidget();
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    };
                    hWsApi.onclose = function (e) {
                        reconnectInterval = setTimeout(function () {
                            wsInit();
                        }, 500);
                    };
                }

                if (hWsApi && hWsApi.readyState == hWsApi.OPEN) {
                    hWsApi.send(JSON.stringify({channel: 'ticker', event: 'sub', params:{symbol: pair}}));
                } else {
                    wsInit();
                }
            },
            stopEvent = function (e) {
                if (!e) {
                    e = window.event;
                }

                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
                e.preventDefault();
            },
            appendCss = function () {
                if (!document.getElementById('xchng_widget_style')) {
                    var style = document.createElement('style'),
                        head = document.head || document.getElementsByTagName('head')[0];

                    style.id = 'xchng_widget_style';
                    style.type = 'text/css';
                    if (style.styleSheet) {
                        style.styleSheet.cssText = xchng.css;
                    } else {
                        style.appendChild(document.createTextNode(xchng.css));
                    }

                    head.appendChild(style);
                }
            },
            generateWidget = function (element, size, color, defaultPair, refId) {
                appendCss();
                if (!isUndefined(element)) {
                    var parentEl = document.getElementById(element);
                    if (!isUndefined(parentEl)) {
                        var sizeClass = '',
                            dataHue = '',
                            dataRef = '';

                        if (!isUndefined(size)) {
                            switch (size) {
                                case 'big':
                                    sizeClass = ' class="xchng-big"';
                                    break;
                                case 'small':
                                    sizeClass = ' class="xchng-small"';
                                    break;
                                default:
                                    break;
                            }
                        }

                        if (!isUndefined(color)) {
                            color = +color;
                            if (!isNaN(color)) {
                                dataHue = ' data-hue="' + color + '"';
                            }
                        }

                        if (!isUndefined(defaultPair)) {
                            defaultPair = defaultPair.toUpperCase();
                            if (!isUndefined(xchng.symbols[defaultPair])) {
                                xchng.currentSymbol = defaultPair;
                            }
                        }

                        if (!isUndefined(refId)) {
                            dataRef = ' data-refId="' + refId + '"';
                        }

                        parentEl.innerHTML = '<div id="xchng-ticker"' + sizeClass + dataHue + dataRef + '></div>'; 
                    }
                }

                var el = document.getElementById('xchng-ticker');

                if (isUndefined(el)) {
                    return;
                }

                el.onclick = function () {
                    var url = xchng.serverUrl + 'exchange/' + xchng.currentSymbol,
                        refId = this.getAttribute('data-refId');
                    if (refId) {
                        url = url + '?ref_id=' + refId;
                    }
                    // window.open(url, '_blank');
                };

                var tmpEl = document.createElement('div'),
                    ul = document.createElement('ul');
                ul.tabIndex = 1;

                for (var pair in xchng.symbols) {
                    if (xchng.symbols.hasOwnProperty(pair)) {
                        var li = document.createElement('li');
                        li.innerHTML = xchng.symbols[pair];
                        li.setAttribute('data-id', pair);
                        ul.appendChild(li);
                    }
                }

                tmpEl.appendChild(ul);
                el.innerHTML =
                    '<div id="xchng-canvas"></div>' +
                    '<div id="xchng-selector">' +
                        '<div id="xchng-selector-label" contenteditable="true">' + xchng.symbols[xchng.currentSymbol] + '</div>' +
                        '' + tmpEl.innerHTML + '' +
                    '</div>' +
                    '<div id="xchng-main-value">' +
                        '<span></span>' +
                    '</div>' +
                    '<div class="top-block">' +
                        '<div class="small" id="xchng-ask-value">' +
                        'Ask: <span></span>' +
                    '</div>' +
                    '<div class="small" id="xchng-bid-value">' +
                        'Bid: <span></span>' +
                        '</div>' +
                    '</div>' +
                    '<a href="#" id="xchng-logo">Powered by <b>  	&nbsp;iex.net</b>';

                var img = new Image(),
                    hue = el.getAttribute("data-hue");

                if (isUndefined(hue)) {
                    hue = 0;
                }

                hue = +hue;
                img.src = xchng.bg;
                document.getElementById('xchng-canvas');
                Pixastic.process(img, "hsl", {hue: hue, saturation: 0, lightness: 0});

                mainValue = document.getElementById('xchng-main-value').getElementsByTagName('span')[0];
                askValue = document.getElementById('xchng-ask-value').getElementsByTagName('span')[0];
                bidValue = document.getElementById('xchng-bid-value').getElementsByTagName('span')[0];

                var selector = document.getElementById('xchng-selector-label'),
                    selectorLi = document.getElementById('xchng-selector').getElementsByTagName('li'),
                    selectorUl = document.getElementById('xchng-selector').getElementsByTagName('ul')[0],
                    selectorLabel = document.getElementById('xchng-selector-label');


                var opened = false;

                function closeSelector() {
                    opened = false;
                    selectorLabel.innerText = xchng.symbols[xchng.currentSymbol];
                    selectorLabel.blur();
                    selectorUl.style.display = "none";
                    for (var i = 0; i < selectorLi.length; i++)
                        selectorLi[i].style.display = 'block';
                }

                selector.onclick = function (e) {
                    if (!opened && (selectorUl.style.display == 'none' || selectorUl.style.display == '')) {
                        selectorUl.style.display = "block";
                        selectorLabel.focus();
                        if (!opened)
                            selectorLabel.innerText = '';
                        opened = true;

                        var pos = selectorUl.getBoundingClientRect(),
                            selectorOffsetHeight = selector.offsetHeight;

                        var shownTop = selectorUl.className == 'up';
                        var topPosition = !shownTop ? pos.top : pos.top + pos.height;
                        var showTop = topPosition  / window.innerHeight  >= 0.5;

                        if (showTop) {
                            selectorUl.style.bottom = (selectorOffsetHeight) + 'px';
                            selectorUl.className = 'up';
                            selectorUl.style.maxHeight = (Math.max(250, topPosition - 40)) + 'px';
                        } else {
                            selectorUl.style.bottom ='inherit';
                            selectorUl.className = '';
                            selectorUl.style.maxHeight = (Math.max(200, window.innerHeight - pos.top - 40)) + 'px';
                        }
                    }
                    stopEvent(e);
                    return false;
                };

                var overElement = false;
                selectorUl.onmouseover = function () {
                    overElement = true;
                }

                selectorUl.onmousemove = function () {
                    overElement = true;
                }

                selectorUl.onmouseout = function () {
                    overElement = false;
                }


                window.onmousedown = function (e) {
                    if (!overElement)
                        closeSelector();

                    if (selectorUl.style.display == 'block') {
                        stopEvent(e);
                        return false;
                    }
                };

                selectorUl.onblur = function (e) {
                    closeSelector();
                    stopEvent(e);
                    return false;
                };

                connect();

                selectorLabel.addEventListener('input', function () {
                    const search = selectorLabel.innerText;
                    for (var i = 0; i < selectorLi.length; i++) {
                        const li = selectorLi[i];
                        if (search == null || search.length === 0 || li.innerText.replace(/\W/g, '').toLowerCase().indexOf(search.replace(/\W/g, '').toLowerCase()) >= 0) {
                            selectorLi[i].style.display = 'block';
                        } else {
                            selectorLi[i].style.display = 'none';
                        }
                    }
                    var sorted = sortList(selectorLi, search);
                    for (var i = 0; i < sorted.length; i++) {
                        selectorUl.appendChild(sorted[i]);
                    }
                });

                function sortList(elements, query) {
                    var search = query.replace(/\W/g, '').toLowerCase();
                    var list = [];
                    for (var i = 0; i < elements.length; i ++) list.push(elements[i]);
                    return list
                        .map(function (l, i) {return [l, i]})
                        .sort(function (a, b) {
                            var alpha = a[0].innerText > b[0].innerText ? 1 : (a[0].innerText < b[0].innerText ? -1 : 0);
                            var index = a[1] - b[1];
                            var searchCmp = 0;
                            if (search != null && search.length > 0) {
                                var andx = a[0].innerText.replace(/\W/g, '').toLowerCase().indexOf(search);
                                var bndx = b[0].innerText.replace(/\W/g, '').toLowerCase().indexOf(search);
                                searchCmp = andx - bndx;
                            }

                            return searchCmp != 0 ? searchCmp : (alpha != 0 ? alpha : index);
                        })
                        .map(function (v) { return v[0]; });
                }


                for (var i = 0; i < selectorLi.length; i++) {
                    selectorLi[i].onclick = function (e) {

                        if (xchng.currentSymbol) {
                            unsubscribe(xchng.currentSymbol);
                        }
                        var newSymbol = this.getAttribute('data-id');
                        selector.innerHTML = this.innerHTML;
                        xchng.currentSymbol = newSymbol;
                        subscribe(xchng.currentSymbol);
                        closeSelector();
                        stopEvent(e);
                        return false;
                    };
                }

                window.setInterval(function () {
                    updateWidget()
                }, 1000);
            };

        generateWidget(element, size, color, defaultPair, refId);
    }
};

(function () {
    var el = document.getElementById('xchng-ticker');
    if (el !== null) {
        xchng.widget();
    }
})();