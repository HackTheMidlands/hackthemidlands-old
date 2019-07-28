# HackTheMidlands

This is the website source code for hackthemidlands.com.

## Development

Ensure that `gem` and `bundle` are in your path, then run:

    $ bundle install --path vendor/bundle
    $ bundle exec jekyll serve

Then navigate to http://localhost:4000 to see the site.

As a general rule, page/post content should be generated from markdown files
and data content should be generated from yaml files (in `_data/`). This is
much better than hardcoding anything as it makes it much easier to edit later
on.
