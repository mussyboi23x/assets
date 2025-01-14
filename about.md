---
layout: page
title: about
permalink: /about/
---

{{ site.title }}: {{ site.description }}

{% assign s = 0 %}
{% for collection in site.collections %}
    {% assign name = collection.label %}
    {% assign si = site.[name] | size %}
    {% assign s = s | plus: si %}
{% endfor %}

We currently have {{ s }} total games!

Open-source on [GitHub]({{ site.github_url }})!

Site theme modified from midzer's [urban theme](https://github.com/midzer/urban-theme)

# help

*The site or a game is broken!*

Try reloading the cache by pressing **ctrl + shift + r** a few times. If this doesn't work report the issue using the link at the bottom of the page.