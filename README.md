# Personal Blog Website

This is a GitHub Pages-based blog using a simple but effective template system for easy content management.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Make the scripts executable:
```bash
chmod +x scripts/create_post.py scripts/generate_index.py
```

## Creating New Posts

To create a new blog post:

```bash
python scripts/create_post.py "Your Post Title" [tag1 tag2 ...]
```

This will:
- Create a new HTML file in the `posts` directory with the current date
- Set up the basic structure with your title and tags
- Create placeholders for your content

Edit the newly created file and replace the `<!-- CONTENT_PLACEHOLDER -->` with your blog post content.

## Generating the Index

After creating or updating posts, regenerate the index page:

```bash
python scripts/generate_index.py
```

This will:
- Scan all posts in the `posts` directory
- Create a chronological index of all posts
- Update the main index.html file

## Structure

- `posts/template.html`: Base template for all blog posts
- `header.js`: Navigation header
- `footer.js`: Footer with copyright information
- `styles.css`: Main stylesheet
- `scripts/`: Helper scripts for blog management
  - `create_post.py`: Script to create new blog posts
  - `generate_index.py`: Script to generate the index page

## Features

- Responsive design
- Automatic date handling
- Tag support
- Syntax highlighting for code blocks
- Automatic index generation
- SEO-friendly metadata
- Clean URLs with date-based naming