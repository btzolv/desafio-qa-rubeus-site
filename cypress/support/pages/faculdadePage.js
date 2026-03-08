class faculdadePage {
  elements = {

      btnAtendimento: '#ipkda',
      btnWhatsappTopo: '#iks3g',
      btnConsultor: '#iopirr',
      btnFaleConosco: '#iwyjp1',
      redesSociais: '.social-links-container',


      bolinhaBanner1: '.dot:nth-child(1)',
      bolinhaBanner2: '.dot:nth-child(2)',
      bolinhaBanner3: '.dot:nth-child(3)',

      imgBotaoBanner: '.mySlides[style*="display: block"] img',
      
      logoMarca: '.navbar-brand img',
      textoDiferenciais: '#section-diferenciais',
      secaoSobre: '.about-text',
      rodapeCopyright: 'footer .copyright',

      fraseDiferenciais:'#ighy62',
    
      
      formNewsletter: {
        inputNome:'input[name="pessoa.nome"]',  
        inputEmail: 'input[name="pessoa.emailPrincipal"]',
        inputTelefone: 'input[name="pessoa.telefonePrincipal"]',
        btnEnviar: '#igdkpz',
        msgErroBaseLegal: ':contains("É necessário informar a base legal")'
      },


      logoMarca: '#iiq2g',
      cardsEventos: '#io4cbm',
      textosSublinhados: 'u', 

      iconesRodape: '#i0759g'
  }


  enviarNewsletter(nome,email,telefone) {
      cy.get(this.elements.formNewsletter.inputNome).type(nome);
      cy.get(this.elements.formNewsletter.inputEmail).type(email);
      cy.get(this.elements.formNewsletter.inputTelefone).type(telefone);
      cy.get(this.elements.formNewsletter.btnEnviar).click();
  }

  selecionarBotao1Banner() {
      cy.get(this.elements.bolinhaBanner1).click();
  };

  selecionarBotao2Banner() {
    cy.get(this.elements.bolinhaBanner2).click();
  };

  selecionarBotao3Banner() {
    cy.get(this.elements.bolinhaBanner3).click();
  };


  validarAlinhamentoEventos() {
    cy.get(this.elements.cardsEventos).find('a').then($btns => {
        const topPosition = $btns.get(0).getBoundingClientRect().top;
        
        cy.wrap($btns).each($btn => {
            expect($btn.get(0).getBoundingClientRect().top).to.equal(topPosition);
          });
      });
  }
}

export default new faculdadePage();