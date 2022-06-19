# A statically generated blog example using Next.js, Markdown, and TypeScript

This project is created by the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

Execute with [npm](https://docs.npmjs.com/cli/init):

```bash
npm run dev
# or
npm run start
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

## Libraries

- sendgrid/mail
- gray-matter
- remark
- remark-html

# Notes

`blog-starter-typescript` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
