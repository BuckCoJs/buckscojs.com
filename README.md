# BucksCoJS Website

Source code for what will become [buckscojs.com](http://buckscojs.com). Static
site generated with [Wintersmith](https://github.com/jnordberg/wintersmith).

*Work in progress*

## Developer Quick-Start

Clone this repository, install dependencies, and start a locally running
instance:

    $ npm install
    $ npm start

Run the following to generate the site to `build/`:

    $ npm run build

Take a look at the wintersmith README and examples for usage.

## Adding a Meetup

1. Create a new markdown file in `content/meetups/` following the other files as examples
1. Update `featuredMeetup` in `config.json` in order to update the homepage/sidebar

## Publishing an Update

NOTE: This is a few too many steps. We should wrap this up better (e.g., gulp).

- Make and commit change
- `npm run build`
- Commit build
- Push master
- `git checkout master`
- `git push origin :gh-pages`
- `git subtree split --prefix build -b gh-pages`
- `git push origin gh-pages:gh-pages`
- Check repo Settings and verify `Custom domain` is still set to "www.buckscojs.com"

## License

MIT
