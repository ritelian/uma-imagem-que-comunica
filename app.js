'use strict';
const concepts={
 foco:['Ponto focal','É a zona que chama primeiro a atenção. Um elemento diferente pode interromper a repetição e tornar-se protagonista.','Qual dos círculos viste primeiro?','Círculos azuis iguais com um círculo maior em verde.'],
 contraste:['Contraste','A diferença entre claro e escuro ajuda a destacar formas e texto. Na comparação, os tons aproximam-se e a leitura perde força.','Consegues ler a mensagem à distância nas duas versões?','Círculo e texto verdes sobre fundo escuro, ou tons semelhantes de cinzento na comparação.'],
 escala:['Escala','O tamanho é uma escolha de comunicação. Um círculo muito maior torna-se dominante, mesmo mantendo a cor dos outros.','O que acontece quando todos voltam a ter o mesmo tamanho?','Um círculo azul maior entre círculos pequenos, ou todos do mesmo tamanho na comparação.'],
 composicao:['Composição','Organiza a relação entre imagem, texto e margens. Alinhamento e agrupamento ajudam a criar uma ordem de leitura.','Em que versão o percurso entre a imagem e o texto te parece mais claro?','Grupo de círculos no canto superior direito e texto alinhado em baixo; na comparação, grupo centrado e texto inclinado.'],
 cor:['Cor','A mesma composição pode sugerir sensações diferentes com cores quentes ou frias. Aqui a comparação é uma alternativa, não uma resposta errada.','Que sensação te transmite cada paleta? A tua resposta coincide com a de um colega?','Paleta de laranja e verde, ou alternativa em tons azuis na comparação.'],
 tipo:['Tipografia','A forma, o peso e o espaçamento das letras influenciam a leitura. Escolhe letras que combinem com a mensagem e sejam legíveis.','Que versão consegues ler mais depressa?','Texto grande e forte, ou letras menores, serifadas e mais espaçadas na comparação.'],
 espaco:['Espaço negativo','É o espaço livre à volta dos elementos. Ajuda a separar, destacar e criar pausas. Não precisas de preencher a folha toda.','O cartaz continua a respirar quando os elementos ocupam quase toda a área?','Círculos pequenos rodeados de espaço livre, ou círculos ampliados e margens reduzidas na comparação.']
};
const poster=document.querySelector('#lab-poster'), comparison=document.querySelector('#before');
let current='foco';
function renderConcept(){const c=concepts[current];document.querySelector('#concept-title').textContent=c[0];document.querySelector('#concept-desc').textContent=c[1];document.querySelector('#concept-question').textContent=c[2];poster.dataset.mode=current;poster.classList.toggle('before',comparison.checked);poster.setAttribute('aria-label',`Experiência sobre ${c[0]}. ${c[3]} Texto: Faz a diferença. A tua voz também conta. Versão ${comparison.checked?'de comparação':'principal'}.`);}
document.querySelectorAll('[data-concept]').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.concept;comparison.checked=false;document.querySelectorAll('[data-concept]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});renderConcept();}));comparison.addEventListener('change',renderConcept);
const ideas={telemovel:'Um ecrã pode transformar-se numa gaiola. Que outra imagem representa a falta de liberdade?',ambiente:'E se uma folha de árvore se transformasse num pulmão? Que relação queres mostrar entre natureza e vida?',bullying:'E se as palavras deixassem marcas visíveis? Como podes mostrar o impacto de uma mensagem sem desenhar uma agressão?',igualdade:'Uma linha de partida é realmente igual para todos? Como podes transformar essa ideia numa imagem?',consumo:'E se um saco de compras tivesse um peso impossível? O que transportamos quando compramos sem pensar?',musica:'E se os sons tivessem formas? Como podes traduzir um ritmo numa composição para um evento inventado?'};
document.querySelector('#theme').addEventListener('change',e=>{document.querySelector('#theme-idea').textContent=ideas[e.target.value];});
const checks=[...document.querySelectorAll('[data-check]')], key='ev-cartaz-checklist-v1';
let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
checks.forEach(c=>{c.checked=saved[c.dataset.check]===true;c.addEventListener('change',updateProgress);});
function updateProgress(){const count=checks.filter(c=>c.checked).length;document.querySelector('#progress').value=count;document.querySelector('#progress-text').textContent=count===7?'7 de 7 verificações concluídas. Está tudo revisto!':`${count} de 7 verificações concluídas.`;try{localStorage.setItem(key,JSON.stringify(Object.fromEntries(checks.map(c=>[c.dataset.check,c.checked]))));}catch{document.querySelector('.checklist ~ .caption').textContent='A lista funciona nesta visita, mas este navegador não permitiu guardar as marcações. Não envia respostas à professora.';}}
updateProgress();document.querySelector('#reset').addEventListener('click',()=>{checks.forEach(c=>c.checked=false);updateProgress();});document.querySelector('#print').addEventListener('click',()=>window.print());
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
const campaignCards=[...document.querySelectorAll('[data-campaign]')];let ticking=false;
function moveArt(){campaignCards.forEach((card,i)=>card.style.setProperty('--drift',(reduce.matches||document.body.classList.contains('motion-paused'))?'0px':`${Math.min(window.scrollY,850)*[.035,-.045,.06][i]}px`));ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(moveArt);ticking=true;}},{passive:true});reduce.addEventListener('change',moveArt);
const campaigns={
 trees:{image:'assets/campanha-arvores.jpg',alt:'Uma folha em azul e preto ocupa a parte superior do cartaz Spare Our Trees.',title:'Spare Our Trees',meta:'STANLEY THOMAS CLOUGH · 1938',context:'Cartaz de conservação das árvores, produzido pelo Federal Art Project / WPA, no Ohio. Fonte: Library of Congress.',message:'«Preservem as nossas árvores.» Uma única folha representa uma causa maior: a proteção das árvores.',analysis:'A folha domina pela escala. As cores reduzidas e o fundo claro tornam a silhueta legível. O texto, isolado na parte inferior, fecha a leitura sem disputar espaço com a imagem.',question:'Se em vez desta folha houvesse vinte árvores pequenas, o impacto seria o mesmo?',source:'https://www.loc.gov/item/98517129/'},
 work:{image:'assets/campanha-we-can-do-it.jpg',alt:'Trabalhadora de camisa azul e lenço vermelho dobra o braço sob a frase We Can Do It!, num fundo amarelo.',title:'We Can Do It!',meta:'J. HOWARD MILLER · C. 1942–1943',context:'Criado para a Westinghouse durante a Segunda Guerra Mundial e usado inicialmente dentro das suas fábricas. Tornou-se amplamente conhecido décadas depois. Fonte: National Archives.',message:'«Somos capazes!» O cartaz procura transmitir força, determinação e confiança coletiva no contexto de trabalho da época.',analysis:'O fundo amarelo contrasta com a camisa azul. O rosto e o braço formam o centro de atenção, enquanto a frase curta no topo funciona como uma voz que fala diretamente ao observador.',question:'Que sensação mudaria se a figura estivesse de costas ou olhasse para o chão?',source:'https://www.archives.gov/research/still-pictures/highlights/we-can-do-it'},
 water:{image:'assets/campanha-agua.jpg',alt:'Cartaz Don’t be a drip! com apelos a reparar fugas e a poupar água.',title:'Don’t be a drip!',meta:'CHARLOTTE ANGUS · 1941–1943',context:'Produzido pela Penna Art WPA para o Philadelphia Council of Defense, durante a Segunda Guerra Mundial. Fonte: Library of Congress.',message:'Evitar o desperdício de água: reparar fugas e poupar um recurso. O apelo associa um gesto do dia a dia a uma responsabilidade coletiva.',analysis:'A imagem da torneira concretiza o problema. As frases curtas no imperativo transformam a observação numa ação: parar as fugas e poupar água.',question:'Como farias um cartaz sobre o mesmo tema com uma metáfora visual e apenas três palavras?',source:'https://www.loc.gov/item/98518712/'}
};
const campaignDialog=document.querySelector('#campaign-dialog');let openedBy=null;
campaignCards.forEach(card=>card.addEventListener('click',()=>{const c=campaigns[card.dataset.campaign];openedBy=card;document.querySelector('#campaign-image').src=c.image;document.querySelector('#campaign-image').alt=c.alt;['title','meta','context','message','analysis','question'].forEach(k=>document.querySelector('#campaign-'+k).textContent=c[k]);document.querySelector('#campaign-source').href=c.source;campaignDialog.showModal();document.body.style.overflow='hidden';}));
document.querySelector('.close-dialog').addEventListener('click',()=>campaignDialog.close());
campaignDialog.addEventListener('click',e=>{if(e.target===campaignDialog){const r=campaignDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)campaignDialog.close();}});
campaignDialog.addEventListener('close',()=>{document.body.style.overflow='';openedBy?.focus({preventScroll:true});});

// Briefing: each question has an answer and a visual explanation for both posters.
const communicationAnswers={
 cause:[
 ['Poupança de água nos gestos do dia a dia.','A gota e a planta associam água e vida. A imagem torna o tema reconhecível.'],
 ['Pessoas que usam água todos os dias, incluindo a comunidade escolar.','A imagem simples e as palavras familiares tornam o apelo acessível a diferentes idades.'],
 ['Sensibilizar para o desperdício e incentivar um hábito mais responsável.','O contraste faz parar o olhar; a frase curta transforma a atenção num convite.'],
 ['Cada pequeno gesto pode ajudar a poupar água.','«Cada gota conta» é a frase maior. A escala diz ao olhar o que deve ler primeiro.'],
 ['Fechar a torneira enquanto se escovam os dentes.','O apelo em baixo propõe uma ação concreta. A pessoa sabe o que pode fazer.'],
 ['Uma imagem que identifique a causa e um apelo claro. Não precisa de data ou local.','Há pouca informação para manter a mensagem legível. O espaço livre também comunica.']
 ],
 event:[
 ['Um concerto com as bandas da escola: Som no Pátio.','As ondas e a nota musical identificam o universo da música. O título domina a composição.'],
 ['A comunidade escolar: alunos, professores e outras pessoas da escola.','A frase «Traz a tua turma» dirige-se aos alunos; o rodapé identifica o público do evento.'],
 ['Divulgar o concerto e convidar a comunidade a participar.','O ritmo das linhas e as cores vivas procuram despertar curiosidade e sugerir energia.'],
 ['Há música ao vivo no pátio da escola.','O nome «Som no Pátio» fica em grande. O texto de apoio explica que se trata de um concerto.'],
 ['Ir ao concerto e convidar os colegas.','«Traz a tua turma. Vem ouvir!» convida à participação. Data, hora e local permitem agir.'],
 ['22 de maio de 2026, às 18h, no pátio da escola. Entrada livre. Organização: Clube de Música. Dados fictícios.','A faixa amarela agrupa quando, onde e como participar. O rodapé identifica quem organiza.']
 ]
};
const questionButtons=[...document.querySelectorAll('[data-question]')];
const exampleButtons=[...document.querySelectorAll('[data-poster]')];
const commPoster=document.querySelector('#communication-poster');
let questionIndex=0, posterType='cause';
function updateCommunication(){
 const button=questionButtons[questionIndex], answer=communicationAnswers[posterType][questionIndex];
 questionButtons.forEach((b,i)=>{b.classList.toggle('is-active',i===questionIndex);b.setAttribute('aria-pressed',String(i===questionIndex));});
 exampleButtons.forEach(b=>{const active=b.dataset.poster===posterType;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
 commPoster.src=posterType==='cause'?'assets/posters/agua.svg':'assets/posters/evento.svg';
 commPoster.alt=posterType==='cause'?'Cada gota conta: uma gota contém uma planta. Fecha a torneira enquanto escovas os dentes.':'Som no Pátio: concerto fictício para a comunidade escolar. 22 de maio de 2026, às 18h, pátio da escola. Entrada livre. Organização: Clube de Música.';
 document.querySelector('#communication-caption').textContent=posterType==='cause'?'Estudo didático original / campanha de sensibilização.':'Estudo didático original / evento, data e local fictícios.';
 document.querySelector('#answer-label').textContent=button.querySelector('span').textContent;
 document.querySelector('#answer-title').textContent=button.querySelector('strong').textContent;
 document.querySelector('#answer-text').textContent=answer[0];
 const explanation=document.querySelector('#answer-design');explanation.replaceChildren();const label=document.createElement('strong');label.textContent='No design: ';explanation.append(label,answer[1]);
 document.querySelector('#question-position').textContent=`${questionIndex+1} / 6`;
}
questionButtons.forEach(b=>b.addEventListener('click',()=>{questionIndex=Number(b.dataset.question);updateCommunication();}));
exampleButtons.forEach(b=>b.addEventListener('click',()=>{posterType=b.dataset.poster;updateCommunication();}));
function nextQuestion(direction){questionIndex=(questionIndex+direction+6)%6;updateCommunication();}
document.querySelector('#question-prev').addEventListener('click',()=>nextQuestion(-1));
document.querySelector('#question-next').addEventListener('click',()=>nextQuestion(1));
const workshop=document.querySelector('.comm-workshop'),presentButton=document.querySelector('#present-communication');
if(!workshop.requestFullscreen){presentButton.hidden=true;}
presentButton.addEventListener('click',async()=>{try{if(document.fullscreenElement){await document.exitFullscreen();}else{await workshop.requestFullscreen();}}catch{presentButton.textContent='Ecrã inteiro indisponível';}});
document.addEventListener('fullscreenchange',()=>{presentButton.textContent=document.fullscreenElement?'Sair do ecrã inteiro ↙':'Ecrã inteiro ↗';});
workshop.addEventListener('keydown',e=>{if(document.fullscreenElement===workshop&&!testDialog.open&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();nextQuestion(e.key==='ArrowRight'?1:-1);}});
const motionToggle=document.querySelector('#motion-toggle');let pausedMotion=false;
try{pausedMotion=localStorage.getItem('ev-motion-paused')==='true';}catch{}
function applyMotion(){document.body.classList.toggle('motion-paused',pausedMotion||reduce.matches);motionToggle.setAttribute('aria-pressed',String(pausedMotion||reduce.matches));motionToggle.textContent=reduce.matches?'Movimento reduzido pelo sistema':pausedMotion?'Retomar movimento':'Pausar movimento';motionToggle.disabled=reduce.matches;moveArt();moveCommunication();}
motionToggle.addEventListener('click',()=>{pausedMotion=!pausedMotion;try{localStorage.setItem('ev-motion-paused',String(pausedMotion));}catch{}applyMotion();});
const orbit=document.querySelector('.comm-orbit');let commTicking=false;
function moveCommunication(){const y=document.querySelector('.comm-intro').getBoundingClientRect().top;orbit.style.setProperty('--comm-drift',reduce.matches||pausedMotion?'0px':`${Math.max(-70,Math.min(70,-y*.13))}px`);commTicking=false;}
window.addEventListener('scroll',()=>{if(!commTicking){commTicking=true;requestAnimationFrame(moveCommunication);}},{passive:true});
reduce.addEventListener('change',applyMotion);applyMotion();
const testDialog=document.querySelector('#poster-test-dialog'),testImage=document.querySelector('#test-poster-image'),recall=document.querySelector('#test-recall');let testTimer=null;
function stopPosterTimer(){if(testTimer!==null){clearInterval(testTimer);testTimer=null;}}
function revealPoster(){stopPosterTimer();testImage.hidden=false;recall.hidden=true;document.querySelector('#test-count').textContent='';document.querySelector('#test-dialog-title').textContent='Compara com o que recordaste.';}
document.querySelector('#start-poster-test').addEventListener('click',()=>{
 stopPosterTimer();testImage.src=commPoster.src;testImage.alt=commPoster.alt;testImage.hidden=false;recall.hidden=true;let seconds=5;
 document.querySelector('#test-dialog-title').textContent='Observa o cartaz.';document.querySelector('#test-count').textContent=seconds;
 document.querySelector('#test-status').textContent='Teste em curso.';
 testDialog.showModal();document.querySelector('#close-poster-test').focus();
 testTimer=setInterval(()=>{seconds--;document.querySelector('#test-count').textContent=seconds;
 if(seconds===0){stopPosterTimer();testImage.hidden=true;recall.hidden=false;document.querySelector('#test-count').textContent='';document.querySelector('#test-dialog-title').textContent='Tempo terminado. O que ficou?';document.querySelector('#test-status').textContent='Tempo terminado. Partilha o que recordas.';document.querySelector('#reveal-test-poster').focus();}
 },1000);
});
document.querySelector('#close-poster-test').addEventListener('click',()=>testDialog.close());
document.querySelector('#reveal-test-poster').addEventListener('click',revealPoster);
testDialog.addEventListener('close',()=>{stopPosterTimer();document.querySelector('#test-status').textContent='Podes repetir o teste com o outro cartaz.';document.querySelector('#start-poster-test').focus({preventScroll:true});});
