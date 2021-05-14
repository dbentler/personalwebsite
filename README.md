# https://www.darrenbentler.com/
My personal portfolio/devblog site, created with Flask, Bootstrap, and HTML5.

The website is currently hosted on the Google App Engine, which is linked to this repository to automatically update whenever a new push/merge to main is created.

# Development
Development currently takes place on the websiteDev branch. Here, I work on implementing new features or changing layouts. Whenever I'm done with a feature, whether it be an article or CSS change, I merge the changes into the "main" branch. You can preview these changes by cloning that respitory and running the site locally.

## Versioning
Versioning follows the following format:

    <major>.<minor>
Where `<major>` is reserved for massive front-end changes (ie, site layout) and `<minor>` is reserved for new page updates or changes to gcloud specific files or images being added/changed.

## Planned Features

 - Add dynamic content (like a small little cryptographic puzzle inspired by the ones created by Cicada-3301).
 - Devblogs to illustrate what I've been working on.

## Devblog
The devblog can be found here, which documents version 1.0 to version 2.3:
https://www.darrenbentler.com/projects/mywebsite
