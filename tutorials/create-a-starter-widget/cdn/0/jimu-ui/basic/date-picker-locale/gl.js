System.register([],(function(e){return{execute:function(){e(function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=995)}({3:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var d=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}}a.d(t,"a",(function(){return n}))},4:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=n.match(i);if(!d)return null;var u,s=d[0],m=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(m)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(m,(function(e){return e.test(s)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(m,(function(e){return e.test(s)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(s.length)}}}a.d(t,"a",(function(){return n}))},5:function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}a.d(t,"a",(function(){return n}))},8:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},o=n.match(e.matchPattern);if(!o)return null;var i=o[0],d=n.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}}a.d(t,"a",(function(){return n}))},995:function(e,t,a){"use strict";a.r(t);var n={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"máis dun ano",other:"máis de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}};var r=a(5),o={date:Object(r.a)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'ás' {{time}}",long:"{{date}} 'ás' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'o' eeee 'pasado á' LT",yesterday:"'onte á' p",today:"'hoxe á' p",tomorrow:"'mañá á' p",nextWeek:"eeee 'á' p",other:"P"},d={lastWeek:"'o' eeee 'pasado ás' p",yesterday:"'onte ás' p",today:"'hoxe ás' p",tomorrow:"'mañá ás' p",nextWeek:"eeee 'ás' p",other:"P"};var u=a(3);var s={ordinalNumber:function(e){return Number(e)+"º"},era:Object(u.a)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}},defaultFormattingWidth:"wide"})},m=a(8),l=a(4),c={code:"gl",formatDistance:function(e,t,a){var r;return a=a||{},r="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"en "+r:"hai "+r:r},formatLong:o,formatRelative:function(e,t,a,n){return 1!==t.getUTCHours()?d[e]:i[e]},localize:s,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[uú]n)/i,/^(despois de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(l.a)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañ[aá]/i,afternoon:/tarde/i,evening:/tardiña/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=c}}))}}}));