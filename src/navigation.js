import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: 'Nosotros',
          href: getPermalink('/about'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/#features'),
        },
        {
          text: 'Proyectos',
          href: getPermalink('/#content'),
        },
      ],
    },
    {
      text: 'Más',
      links: [

        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
        {
          text: 'Preguntas Frecuentes',
          href: getPermalink('/#faqs'),
        },


      ],
    },
  ],
  
};

export const footerData = {
  links: [
    {
      title: 'Nosotros',
      links: [
        { text: 'Servicios', href: '#' },
        { text: 'Preguntas frecuentes', href: '#' },
        { text: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Más información',
      links: [
        { text: 'Equipo', href: '#' },
        { text: 'Servicio Social', href: '#' },

      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Laboratorio',
      links: [
        { text: 'Ubicación', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos', href: getPermalink('/terms') },
    { text: 'Políticas de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Comunidadinventores' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },

  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
