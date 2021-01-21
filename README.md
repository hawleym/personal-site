# [Personal Website](https://hawleym.github.io/personal-site/)

My personal website build with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com), and hosted on [github pages](https://pages.github.com/).

## Dependencies

Tested with: [node](https://nodejs.org/) v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/hawleym/personal-site.git
cd personal-site
nvm install # this is optional - make sure you're running node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Navigate to `<ip>:<port>:<path>` default: [http://localhost:3000/personal-site](http://localhost:3000/personal-site).

## Deploying

### Deploying to Github Pages

Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).

Make a commit to `main` and push your changes. That's it.

## Notes

This site includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [tailwindcss](https://tailwindcss.com) - utility-first CSS framework
- [autoprefixer](https://github.com/postcss/autoprefixer) - plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com).

To control the generated stylesheet's filesize, this example uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
