# Site da Divino Dogueria com a linguagem THE BOLD ONE

Criar o site completo da Divino Dogueria dentro deste projeto, usando o design system já construído (vermelho vibrante, fundo off-white, tipografia gigante em caixa alta, cantos retos, bordas grossas) e o cardápio real que você já enviou.

## Sobre as fotos

O link do cardápio digital (divinodogueria.mandarpedido.com) não entrega as fotos: a página carrega vazia e o servidor responde com erro, então não há imagens acessíveis por ali.

Como resolver, na ordem:
1. **Você anexa as fotos aqui** (fotos dos hot dogs, das batatas, dos milkshakes, da loja e o logo). É o melhor caminho: são os produtos reais.
2. Enquanto as fotos não chegam, eu monto o site com imagens provisórias geradas no estilo da marca, sempre marcadas para troca. Nenhuma foto de terceiros será usada.

Se você tiver o Instagram da Divino, também pode me passar que eu tento buscar por lá.

## Páginas

- **Início** — abertura em tela cheia com o nome gigante, faixa vermelha rolante ("Divino desde o primeiro dogão"), foto de destaque, 3 campeões de venda, prova social e chamada forte para o WhatsApp.
- **Cardápio** — reaproveita a página que já existe, reorganizada como página oficial do site: as 6 categorias (Hot Dog Gourmet, Para acompanhar, Docinho, Combos, MilkShakes, Bebidas), com foto por item quando disponível, preço em destaque e botão "Pedir no WhatsApp" em cada item.
- **Sobre** — história da casa, o que faz o dogão ser divino, galeria de fotos em blocos.
- **Onde estamos** — endereço, mapa, horários de funcionamento, formas de pagamento e área de entrega.
- **Contato** — WhatsApp em destaque, telefone, redes sociais e formulário simples de mensagem.

Menu fixo no topo com botão vermelho "Pedir agora" e rodapé com horários, endereço e redes.

## Pedido pelo WhatsApp

Todo botão de pedido abre o WhatsApp já com a mensagem montada, incluindo o item clicado.
**Preciso do número de WhatsApp da Divino.** Até você me passar, deixo um número de exemplo claramente marcado.

## O que ainda preciso de você

- Fotos (ou o Instagram)
- Número do WhatsApp
- Endereço e horários de funcionamento
- Logo, se tiver o arquivo

Sem essas informações eu uso conteúdo de exemplo sinalizado, nunca dados inventados apresentados como reais.

## Detalhes técnicos

- Rotas TanStack: `/site` (início), `/site/cardapio`, `/site/sobre`, `/site/onde-estamos`, `/site/contato`, com layout próprio (header/footer da marca) — o showcase do design system continua intacto em `/`.
- O site consome apenas componentes do design system (`Button`, `Card`, `Badge`, `Marquee`, `Heading`, `Text`) e tokens; nenhum valor cru de cor, espaçamento ou radius.
- Dados do cardápio em um único arquivo `src/data/cardapio.ts` reutilizado pelas páginas.
- Metadados próprios por página (título, descrição, og) e HTML semântico para busca no Google.
- Fotos entram como assets do projeto; se forem geradas provisoriamente, ficam em arquivos separados e fáceis de substituir.
