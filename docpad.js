module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa - 3º Agile Floripa dia 18 de Março de 2017",
      description: "3º Agile Floripa dia 18 de Março de 2017",
      date: "18 de Março",
      // If your event is free, just comment this line
      price: "R$ 50,00",
      venue: "CIASC",
	  address: "R. Murilo Andriani, 327 - Itacorubi, Florianópolis - SC",
      addressGoogle: "CIASC - Centro de Informática e Automação do Estado de Santa Catarina, R. Murilo Andriani, 327 - Itacorubi, SC, 88034-902",
      city: "Floripa",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://inscricoes.agilebrazil.com/events/30/attendances/new"
    },

    callToActionSubmission: {
        text: "Submeta sua Palestra!",
        link: "https://goo.gl/forms/eJ4Dvj99DCKemPkk2"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "agile-floripa",
      url: "http://agilefloripa.com.br",
      googleanalytics: "UA-73757058-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'courses',
      'location',
      'schedule',
      'speakers',
      //'sponsors',
      'partners',
      'faq'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      courses: "Curso",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Grade",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      faq: "FAQ",
      contact: "Contato"
    },

    courses: [
      {
        name: "Rodrigo Yoshima",
        photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
        company: "",
        bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador.",
        presentation: {
          title: "Treinamento Kanban (KMP I) + Ingresso FREE para o 3º Agile Floripa",
          featured: "\\o/ BIS ",
          description: "Aprenda a melhorar os processos da sua empresa de forma evolucionária, lidando com a resistência a mudanças e ajustando aos objetivos da sua organização. A Aspercom é pioneira no Brasil na aplicação do Método Kanban em pequenas, médias e grandes empresas nos mais variados setores. Com a nossa experiência você aprende neste treinamento como melhorar o seu processo de forma evolucionária - lidando com a resistência natural das pessoas a mudanças - tornando seu processo ajustado aos objetivos de negócio da sua organização! Este treinamento é certificado Lean-Kanban University (Kanban Method Professional I).",
          local: "CIASC",
          date: "16 e 17 de março",
          time: "08:00 às 17:00",
          value: "R$ 900,00",
		  cta: 'http://aspercom.com.br/kanban-floripa/',
		  ctaText: 'Inscreva-se'
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento e Welcome coffee.",
        time: "08:30"
      },
      {
        name: "Annelise Gripp",
        photo: "themes/agile-floripa/img/speaker/annelise.jpg",
        company: "Integrare Consultoria e Capacitação",
        bio: "Como consultora, seu trabalho consiste em expandir, compartilhar e aplicar seus conhecimentos, habilidades e experiências nas empresas, implantando projetos utilizando Metodologia Ágil (XP, Kanban, Scrum), Agile Coach (coaching aplicado a líderes e times) e Personal/Executive Coach (desenvolvimento de competências para alcançar resultados). Fundadora do Rio Agile. Nos últimos 7 anos se dedicou aos estudos das Metodologias Ágeis, onde projetos, produtos e pessoas desenvolvem um trabalho juntos, entregando software com rapidez, qualidade e satisfação, para o cliente e para equipe.",
        presentation: {
          title: "Transformação Ágil, a arte de transformar lagartas em borboletas!",
          description: "-",
          time: "09:00"
        }
      },
      {
        name: "Palestra 1",
        time: "10:00"
      },
      {
        name: "Coffee break",
        time: "10:40"
      },
      {
        name: "Palestra 2",
        time: "11:10"
      },
      {
        name: "Palestra 3",
        time: "11:50"
      },
      {
        name: "Almoço",
        time: "12:30"
      },
      {
        name: "Palestra 4",
        time: "14:00"
      },
      {
        name: "Elias Nogueira",
        photo: "themes/agile-floripa/img/speaker/eliasnogueira.jpg",
        company: "Adptworks",
        bio: "Agile Coach, Instrutor e QA Engineer. Elias Nogueira ajuda empresas e times a aplicar práticas ágeis em pequena e larga escala com um grande fooo em qualidade e teste de software.",
        presentation: {
          title: "O testador está morto! (Um novo conceito para os testes)",
          description: "-",
          time: "14:40"
        }
      },
      {
        name: "Coffee break",
        time: "15:40"
      },
      {
        name: "Painel",
        time: "16:10"
      },
      {
        name: "Encerramento + Sorteios e Happy Hour \\o/",
        time: "17:10"
      }
    ],
    // List of Sponsors
    sponsors: [
      {
        name: "Agile Alliance Brazil",
        logo: "themes/agile-floripa/img/sponsor/agilealliance-brazil_inverted_box.png",
        url: "https://www.agilealliance.org/pt/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Agile Alliance Brazil",
        logo: "themes/agile-floripa/img/sponsor/agilealliance-brazil_inverted_box.png",
        url: "https://www.agilealliance.org/pt/"
      },
      {
        name: "Agile Brazil",
        logo: "themes/agile-floripa/img/partner/logoAgileBrazil.png",
        url: "http://www.agilebrazil.com"
      },
      {
        name: "Agile Trends",
        logo: "themes/agile-floripa/img/partner/agile-trends.png",
        url: "http://agiletrendsbr.com/"
      },
      {
        name: "CIASC",
        logo: "themes/agile-floripa/img/partner/CIASC.png",
        url: "http://www.ciasc.sc.gov.br/"
      },
      {
        name: "Scrum Rion",
        logo: "themes/agile-floripa/img/partner/scrumrio.png",
        url: "http://scrumrio.com/"
      },
      {
        name: "PHP SC",
        logo: "themes/agile-floripa/img/partner/phpsc.png",
        url: "http://www.phpsc.com.br/"
      },
      {
        name: "Tá Safo",
        logo: "themes/agile-floripa/img/partner/TaSafo.png",
        url: "http://tasafo.org/"
      },
      {
        name: "Caipira Ágil",
        logo: "themes/agile-floripa/img/partner/caipira.png",
        url: "http://www.caipiraagil.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
