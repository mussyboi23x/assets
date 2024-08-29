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
    {% s = s + si %}
{% endfor %}

We currently have {{ s }} total games!

Open-source on [GitHub](https://github.com/mochawoof/html55)!

Site theme modified from midzer's [urban theme](https://github.com/midzer/urban-theme)