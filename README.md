# <img src="./src/assets/sm_logo.png" width="22" height="26"> SocialMulli Vue js

This project was generated with [Vue CLI] version 5.0.8 and [Node.js] version 18.
It provides a basic code base to help you figure out the structure of your Vue project for Social Mulli.

## Improvements

- [Project structure](#project-structure)
- [Infrastructure restructuring](#Infrastructure-restructuring-reorganization-by-functional-unit-and-page-unit)
- [Naming rules](#naming-rules-of-Component)
- [Mockup data composition](#mockup-data-composition)
- [Annotate](#annotate)
- [Code formatting](#code-formatting-and-error-handling-through-VScode)

## Project structure

```
├── src
|  ├── assets
|  |  ├── svg
|  |  |  ├── eye-open.svg
|  |  |  ├── eye.svg
|  |  |  └── ...
|  |  ├── 404.png
|  |  ├── logo.png
|  ├── components
|  |  ├── Banner.vue
|  |  ├── Checkbox.vue
|  |  ├── DatePicker.vue
|  |  ├── DialogModal.vue
|  |  ├── Dropdown.vue
|  |  └── ...
|  ├── constants
|  |  └── dashboard
|  |  |  ├── index.js
|  |  |  ├── date.json
|  |  |  └── users.json
|  ├── layouts
|  |  ├── AppLayout.vue
|  |  ├── AuthLayout.vue
|  |  └── HomeLayout.vue
|  ├── router
|  |  └── index.js
|  ├── store
|  |  ├── modules
|  |  |  ├── app.js
|  |  |  ├── user.js
|  |  |  └── ...
|  |  ├── getters.js
|  |  └── index.js
|  ├── views
|  |  ├── auth
|  |  |  ├── LoginPage.vue
|  |  |  ├── RegisterPage.vue
|  |  ├── home
|  |  |  ├── CreateWorkspace.vue
|  |  |  ├── HomePage.vue
|  |  ├── invite
|  |  |  └── InviteMemberPage.vue
|  |  ├── launchAds
|  |  |  ├── components
|  |  |  |  ├── audience
|  |  |  |  |  ├── index.js
|  |  |  |  |  ├── age.vue
|  |  |  |  |  ├── gender.vue
|  |  |  |  |  ├── section.vue
|  |  |  |  |  └── ...
|  |  |  |  └── destination
|  |  |  |  |  ├── index.js
|  |  |  |  |  ├── option.vue
|  |  |  |  |  ├── section.vue
|  |  |  |  |  ├── website.vue
|  |  |  |  |  └── ...
|  |  ├── socialAccount
|  |  |  ├── components
|  |  |  |  └── SocialProfileCard.vue
|  |  |  ├── SocialAccountPage.vue
|  |  ├── error
|  |  |  └── ErrorPage.vue
|  ├── App.vue
```
## Infrastructure restructuring (reorganization by functional unit and page unit)
- It must have a register structure that includes low-level components.
- Along with modularization, components related to UI are selected and used separately.
- Naming of sub-registries must be regulated and functional units must be made unique.

## Naming rules of Component
- It is better to use one approach for file names. (PascalCase, kebab-case, camelCase, snake_case)
- For components with the same category, a prefix related to the parent must be used.
- For components that are used uniquely, it is better to use them with “The” attached.
- For sub-registries, different naming rules must be applied for each functional group. Import/export the component through index.js.

## Mockup data composition
- Using a static data type such as json can ensure code simplicity in page rendering and component configuration for initial development.
- For mock materials, you should create groups according to usage and perform basic management (it is recommended to delete unused files) in a register called constants.
- It is more convenient to use the import/export function using js data, and it is better to configure mock data by page.

## Annotate
- The purpose of component use must be specified.
- By using VS-code extensions such as Todo tree, basic error tracking and development synchronization can be guaranteed.

## Code formatting and error handling through VScode
- formatting rules / vue code rules
- prettier
- eslint
- Volar
- Highlight
- Todo Tree
- .vscode/settings.json
