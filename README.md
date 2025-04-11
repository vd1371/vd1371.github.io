# My Personal Blog

This is my personal blog built with Jekyll and hosted on GitHub Pages.

## Setup

1. Install Ruby and Bundler
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the local server
5. Visit `http://localhost:4000` to view your blog

## Writing New Posts

1. Create a new file in the `_posts` directory
2. Name the file following the format: `YYYY-MM-DD-title.md`
3. Add the following front matter at the top of your post:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: category
---
```

4. Write your content in Markdown format
5. Save the file and your post will be automatically included in the blog

## Customization

- Edit `_config.yml` to change site settings
- Modify `index.md` to change the homepage
- Update `about.md` with your personal information
- The blog uses the Minima theme by default, which can be customized

## License

This blog is open source and available under the [MIT License](LICENSE). 