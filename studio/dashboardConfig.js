export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61700d0d3d5eb907c9c9d2e2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yn1nsoiq',
                  apiId: 'cea5d160-c399-4b22-947b-9c21ff5cb6d6'
                },
                {
                  buildHookId: '61700d0d9d133d1b1207fe95',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-afu9edr8',
                  apiId: '22ee6a00-4dc6-4e32-8cf4-36b888fd4e79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webeffect/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-afu9edr8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
