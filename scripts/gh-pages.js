import ghpages from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/Koliras/url-shortening-site.git',
        user: {
            name: 'Oleh Hurmanchuk',
            email: 'gyrmanchyk230506@gmail.com', 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
