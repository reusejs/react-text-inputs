[![View Storybook][view-storybook-image]][view-storybook-url]
[![Join Discord][join-discord-image]][join-discord-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![Storybook][storybook-action-image]][storybook-action-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

# React Pickers

View Storybook at: https://master--6173adb291ca4f004a2e34dd.chromatic.com

React Pickers consist of UI Components to solve use cases of "picking"! Be it a radio button, checkbox, dropdown, multi select dropdown, cards. The end goal is to pick one or more options, and most of the times we also want to preselect some options.

# Usage

## Data Source

The implementation of this picker is done in multiple layers, the bottom most one which drives the logic is a renderless hook. So, you can use that if needed and build any kind of picker you need. The most important aspect of this hook is the prop: `dataSource`. 

When you implement any picker - the question you would eventually face is where does the picker gets it's options from! We solved it simply introducing a callback function which the component itself calls or you can trigger it too. 

#### Static Data

```
dataSource={(q) => { 
    return [
        { 'label': 'Asia', "value": 'asia' }
        { 'label': 'Europe', "value": 'europe' }
    ]
}}
```

You can have something as simple as above, which serves as static data. Do you need to mention the key as "value"? You can override that too if you want. But, "value" seems to cover most of the use cases which we faced.

#### Dynamic Data

```
dataSource={async (q) => { 
    let response = await callSomeAPI();
    return restructureResponseAsOptions(response);
}}
```

### Single Select implementation

```
<Picker
    label="Select Continent"
    dataSource={async (q) => { 
        let response = await callSomeAPI();
        return restructureResponseAsOptions(response);
    }}
    defaultSelected={[
        { 'label': 'Asia', "value": 'asia' }
    ]}
/>
```

### Multiple Select implementation

```
<Picker
    label="Select Continent(s)"
    dataSource={async (q) => { 
        let response = await callSomeAPI();
        return restructureResponseAsOptions(response);
    }}
    defaultSelected={[
        { 'label': 'Asia', "value": 'asia' }
    ]}
    multiple
/>
```


### Where to write components?

1. There is a `src` folder where you can write your components
2. Whichever components you want to be exposed would go into: `index.js`

## Workflow

There are two ways you can develop components.

### Storybook

- Run: `yarn storybook` which will run the storybook in your localhost
- When you write your own component, also write a `.stories.jsx` and storybook would pick it up

### Another ReactJS App

- Create a brand new react js app (Ex: my-app) using following: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
- Run `yarn link` in current component library. Ex: If you component name is react-text-inputs, you would run yarn link inside react-text-inputs
- Go to newly created reactjs app (my-app) and run `yarn link @reusejs/react-text-inputs`
- At the same time also run `yarn serve` in react-text-inputs, so that as you make changes, build happens simultaneously and your my-app refreshes it

## Contributing

### New components

Hit us on discord on `ideas` channel. Propose your ideas, we will blow our brains out.

### To existing components

Right now we don't a lot of hard and fast rules. 

Just follow: https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow

Basically:

- Fork the component to which you want to contribute
- Make your changes, test it properly
- Raise a Pull Request

## Releases

Once your pull request is made, a release would be schedule which will push the library to npm to @reusejs org. You can't push to reusejs org.

 ## License

react-button is freely distributable under the terms of the [MIT license][license-url].

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/@reusejs/react-text-inputs
[npm-version-image]: https://img.shields.io/npm/v/@reusejs/react-text-inputs.svg?style=flat

[npm-downloads-image]: https://img.shields.io/npm/dm/@reusejs/react-text-inputs.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/@reusejs/react-text-inputs?minimal=true

[view-storybook-image]: https://img.shields.io/badge/View-Storybook-F59E0B.svg
[view-storybook-url]: https://master--6173adb291ca4f004a2e34dd.chromatic.com

[join-discord-image]: https://img.shields.io/badge/Join-Discord-7389D8.svg
[join-discord-url]: https://discord.gg/VUa9SHvvDb

[storybook-action-image]: https://github.com/reusejs/react-text-inputs/actions/workflows/chromatic.yml/badge.svg
[storybook-action-url]: https://github.com/reusejs/react-text-inputs/actions/workflows/chromatic.yml

[npm-publish-action-image]: https://github.com/reusejs/react-text-inputs/actions/workflows/publish.yml/badge.svg
[npm-publish-action-url]: https://github.com/reusejs/react-text-inputs/actions/workflows/publish.yml