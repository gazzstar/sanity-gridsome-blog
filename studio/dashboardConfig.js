export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6206b1af1786432de0247762',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-7hg4jxv1',
                  apiId: '10de65ef-3a88-4344-a204-38869c083fbf'
                },
                {
                  buildHookId: '6206b1af880581301173d31f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-b2mxu9fd',
                  apiId: 'c7bfbd44-62e1-463a-8400-daec9d0bf58e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gazzstar/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-b2mxu9fd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
