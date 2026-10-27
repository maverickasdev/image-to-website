# image-to-website

An agent skill that turns screenshots or visual references into a working, tested website or web app.

It inspects the images, asks one consolidated questionnaire, then plans, builds and tests on its own, and compares the running result against the reference.

## Install

```bash
npx skills add maverickasdev/image-to-website
```

Pick the agent(s) to install into when prompted. To install into the current project only, run it from the project root; add `-g` for a global install.

## Use

Attach one or more screenshots and describe what you want, for example:

> Build this landing page from the attached screenshot.

The skill activates on requests to build or update a website from visual references.

## What it does

1. Inspects every image and the existing project before asking anything.
2. Sends exactly one questionnaire covering scope, data, integrations and responsive behavior, with defaults you can accept.
3. Plans and continues without further approval requests.
4. Implements the agreed features, not only a visual shell.
5. Runs the app, tests it, compares it against the reference and repairs differences.
6. Reports what was built, what was checked, assumptions and any blockers.

## License

[MIT](LICENSE)
