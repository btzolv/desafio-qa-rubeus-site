🚀 Desafio de Automação Rubeus - Site

Este repositório contém a automação de testes para a página 'Site' da Rubeus, utilizando Cypress e o padrão Page Objects. O objetivo foi identificar e documentar bugs de usabilidade, conteúdo e funcionalidade.

🛠️ Tecnologias Utilizadas
Cypress
JavaScript
Padrão de Projeto: Page Object Model (POM)

🏗️ Estrutura do Projeto
O projeto foi organizado seguindo as melhores práticas de manutenção de código:

/cypress/e2e/: Scripts de teste divididos por itens do desafio.

/cypress/support/pages/: Classes Page Object contendo mapeamento de elementos e métodos de ação.

🐞 Bugs Identificados e Automatizados
Abaixo, listo os principais problemas encontrados durante a execução da suite de testes:

Item 01 - Links de contato quebrados
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: Os botões "Atendimento", "WhatsApp" (topo), "Falar com Consultor" e "Fale Conosco" (rodapé) redirecionam para a home do site whatsapp.com e não para um contato específico. Isso impede o usuário de realizar a tarefa principal de contato.

Item 02 - Botões de ação do banner principal inativos
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: Os botões "Inscreva-se" e "Saiba Mais" presentes no carrossel de imagens principal não possuem link ou função de clique, impossibilitando a conversão.

Item 03 - Falha no envio do formulário por falta de base legal
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: Ao tentar concluir o formulário "Não fique de fora", o sistema exibe o erro "É necessário informar a base legal", porém como não existe um campo disponível para esta seleção, o fluxo de assinatura da Newsletter é totalmente interrompido.

Item 04 - Inconsistência na escrita da marca
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: O nome da instituição varia entre "FACULDADE EXEMPLO" (logo), "UNIEXEMPLO" (texto descritivo) e "UNIXEMPLO" (erro de digitação no texto de diferenciais). É necessário padronizar para evitar confusão.

Item 05 - Desalinhamento visual nos cards de eventos
Tipo: Melhoria
Classificação: Usabilidade
Prioridade: Média
Descrição: Os botões "Inscreva-se Agora" na seção "Próximos Eventos" não seguem um alinhamento fixo, variando conforme o tamanho do texto acima, o que prejudica a escaneabilidade da página.

Item 06 - Uso de texto Lorem Ipsum
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: Diversas seções (Diferenciais, Eventos e Depoimentos) ainda utilizam o texto padrão Lorem Ipsum, o que indica que o conteúdo real não foi inserido, prejudicando a comunicação com o aluno.

Item 07 - Sublinhado em textos que não são links
Tipo: Melhoria
Classificação: Usabilidade
Prioridade: Média
Descrição: O título "O QUE NOSSOS ALUNOS DIZEM?" e a palavra "melhor" na seção de diferenciais estão sublinhados, o que confunde o usuário que tenta clicar neles esperando um hiperlink.

Item 08 - Ícones do rodapé com escala inadequada
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Os ícones sociais localizados no rodapé preto estão extremamente pequenos, dificultando a visualização e o clique, principalmente em navegação mobile.


🚀 Como Executar o Projeto
Clone o repositório:

Bash
git clone https://github.com/btzolv/desafio-qa-rubeus-site.git

Instale as dependências:

Bash
npm install
Abra o Cypress:

Bash
npx cypress open

👩‍💻 Autora
Beatriz Estudante de Engenharia de Software Analista de Testes de Software (QA).
