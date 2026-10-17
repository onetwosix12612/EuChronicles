// Собирает www/index.html: вшивает d3 и убирает внешние шрифты, чтобы игра работала без интернета
const fs=require('fs');
const d3=fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8').replace(/<\/script/gi,'<\\/script');
let h=fs.readFileSync('www/game_src.html','utf8');
h=h.replace(/<link[^>]*fonts\.googleapis[^>]*>/g,'');
h=h.replace(/<script src="[^"]*d3\.min\.js"><\/script>/,()=>'<script>'+d3+'</script>');
if(h.includes('cdnjs'))throw new Error('d3 не вшит');
fs.writeFileSync('www/index.html',h);
console.log('ok',h.length);
