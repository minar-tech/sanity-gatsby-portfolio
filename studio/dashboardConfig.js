export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f441bedbef76324321caf63',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-frpkonye',
                  apiId: 'fac51afe-9be8-4870-9480-4475fff5695b'
                },
                {
                  buildHookId: '5f441bedc66e69efb9258346',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vbxhbmyb',
                  apiId: '6aa62418-1823-4756-955f-b5fa4c8c8f92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/minar-tech/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vbxhbmyb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
