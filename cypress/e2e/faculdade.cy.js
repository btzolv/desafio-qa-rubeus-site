import faculdadePage from '../support/pages/faculdadePage';

describe('Automação de Testes - Desafio Faculdade Exemplo', () => {

    beforeEach(() => {
        cy.visit('https://qualidade.apprbs.com.br/site'); 
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
      });
    });

    it('Item 01 - Deve validar que os links de contato direcionam para um chat específico', () => {
        cy.get(faculdadePage.elements.btnAtendimento).should('have.attr', 'href').and('contain', 'phone=');
        cy.get(faculdadePage.elements.btnWhatsAppTopo).should('have.attr', 'href').and('contain', 'phone=');
        cy.get(faculdadePage.elements.btnConsultor).should('have.attr', 'href').and('contain', 'phone=');
        cy.get(faculdadePage.elements.btnFaleConosco).should('have.attr', 'href').and('contain', 'phone=');
    });

    it('Item 02 - Verificar se botões do banner principal são apenas imagens inativas', () => {
       faculdadePage.selecionarBotao1Banner();      
       cy.get(faculdadePage.elements.imgBotaoBanner).parent().should('have.prop', 'tagName', 'A');
       faculdadePage.selecionarBotao2Banner();
       cy.get(faculdadePage.elements.imgBotaoBanner).parent().should('have.prop', 'tagName', 'A');
       faculdadePage.selecionarBotao3Banner();
       cy.get(faculdadePage.elements.imgBotaoBanner).parent().should('have.prop', 'tagName', 'A');
    
    });

    it('Item 03 - Falha no envio do formulário por falta de base legal', () => {
      const nomeTeste = 'Beatriz de Oliveira';
      const emailTeste = 'beatriz@qa.com';
      const telefoneTeste = '11985579126';
      
      faculdadePage.enviarNewsletter(nomeTeste, emailTeste, telefoneTeste);
        
      cy.contains('Inscrição realizada com sucesso').should('be.visible');
  
    });

    it('Item 04 - Detectar inconsistência no nome da marca (FACULDADE EXEMPLO/UNIEXEMPLO)', () => {
      cy.get(faculdadePage.elements.logoMarca).should('be.visible');
      cy.contains('UNIEXEMPLO').should('not.exist');
    });
    
    it('Item 05 - Validar desalinhamento visual nos botões de eventos', () => {
        faculdadePage.validarAlinhamentoEventos();
    });

    it('Item 06 - Validar presença de texto Lorem Ipsum em seções reais', () => {
     cy.get(faculdadePage.elements.fraseDiferenciais).should('not.contain', 'Lorem')
    });

    it('Item 07 - Validar que títulos sublinhados não são links', () => {
        cy.get(faculdadePage.elements.textosSublinhados).each($el => {
            cy.wrap($el).closest('a').should('exist');
        });
    });

    it('Item 08 - Validar escala inadequada dos ícones no rodapé', () => {
        cy.get(faculdadePage.elements.iconesRodape).first().then($icon => {
            expect($icon.width()).to.be.at.least(24, 'Ícone muito pequeno para mobile');
        });
    });
});