module.exports = {
  siteMetadata: {
    title: "Gabriela Nogueira | Dados e Tecnologia",
    description: "Blog sobre tecnologia e dados."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/images/fefsta.gif`,
              placeholder: `${__dirname}/src/images/code.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/static/gifs`
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/enigma.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Open Sans Condensed',
          'Noto Sans JP',
          'Sacramento',
          'Inter',
          'Zilla Slab Highlight',
          'Zilla Slab',
          'Quicksand',
          'Oswald'
        ],
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-8XGCD05GYW",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false
      },
    },
  ],
  
};
