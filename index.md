---
layout: home
title: Welcome to My Blog
---

# Welcome to My Blog

This is my personal space where I share my thoughts, experiences, and knowledge.

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %} 