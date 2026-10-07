# Uma imagem que comunica

Página interativa de Educação Visual, 9.º ano, para um projeto de cartaz A3.

## Conteúdo

Enunciado, laboratório com sete princípios visuais e comparação, seis estudos comentados, sugestões de metáforas, percurso de trabalho, materiais, exemplo final, memória descritiva, apresentação e lista de revisão guardada apenas no navegador.

HTML, CSS e JavaScript sem dependências. Abrir `index.html` ou servir esta pasta com um servidor HTTP. Os caminhos relativos são compatíveis com GitHub Pages. Para publicar, selecionar a branch `main`, pasta `/ (root)` nas definições de Pages.

## Personalização

Editar o texto em `index.html`, as cores e o desenho em `style.css`, e as experiências em `app.js`. Datas, turmas e ponderações não foram inventadas: devem ser definidas pela professora.

## Fontes e imagens

Referência curricular: https://curriculonacional.dge.mec.pt/organizacao-curricular/educacao-visual-9o-ano

Os cinco estudos tipográficos são exemplos didáticos originais construídos com HTML/CSS. O cartaz em `assets/cartaz-exemplo.png` foi gerado com a ferramenta integrada ImageGen e está identificado como tal na página. Ver `ASSET-PROMPT.md` para o prompt de geração. Não são campanhas reais nem trabalhos de alunos.

Sem rastreio, formulários, contas ou transmissão de respostas. A lista é guardada em localStorage no dispositivo do visitante; se o navegador impedir o armazenamento, funciona durante a visita. Os efeitos respeitam a preferência de redução de movimento. O botão de impressão aplica uma versão de guião com enunciado, etapas, materiais e entrega.

## Abertura com campanhas reais

A abertura permite ampliar três cartazes históricos autênticos, consultar a análise visual e abrir a fonte institucional. Os cartões respondem ao rato, ao toque e ao teclado. A janela fecha com o botão Fechar ou Escape; o foco regressa ao cartaz. Créditos, contexto e origem dos ficheiros em `CAMPAIGN-SOURCES.md`.

## Comunicação e apresentação em sala

A secção `#comunicar` acrescenta seis perguntas de briefing, com respostas e explicações visuais para uma campanha de sensibilização e um evento fictício. Os dois estudos vetoriais originais estão em `assets/posters/`. O exemplo de evento tem data/local fictícios, explicitamente identificados, e não define o calendário da tarefa.

- Perguntas e tipos de cartaz funcionam por rato, toque e teclado.
- «Ecrã inteiro» amplia a oficina; nesse modo, as setas esquerda/direita mudam a pergunta. Escape sai do ecrã inteiro.
- O teste de cinco segundos esconde o cartaz e permite voltar a vê-lo. Fechar a janela cancela o temporizador.
- «Pausar movimento» suspende os efeitos e guarda a preferência localmente. A redução de movimento do sistema é respeitada.
- O guião direto `assets/guiao-cartaz.pdf` tem sete páginas, inclui os dois cartazes, o briefing, o enunciado e a entrega. A impressão da página também inclui a nova secção e ambos os exemplos.

### Atualizar o PDF

Editar `scripts/guide.html` e executar `node scripts/build-guide.cjs` com Playwright disponível. O script usa Chrome local; `CHROME_PATH` permite indicar outro executável Chromium. O site publicado continua estático e não exige instalação nem build para funcionar. O guião é paginado de forma independente para evitar cortes na impressão.

### Verificação desta atualização

Conferidos: versão desktop e largura de 375 px; alternância entre causa/evento; respostas às perguntas; ecrã inteiro e navegação por setas; temporizador, ocultação e revelação do cartaz; pausa persistente do movimento; ausência de erros JavaScript; sete páginas do PDF renderizadas e revistas.
