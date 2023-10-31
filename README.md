# Vue Structure

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
|  |  ├── app
|  |  |  ├── Footer.vue
|  |  |  ├── Header.vue
|  |  ├── custom
|  |  |  ├── EjsDropdown.vue
|  |  ├── form
|  |  |  ├── FormSection.vue
|  |  └── ui
|  |  |  ├── CheckBox.vue
|  |  |  ├── ConfirmationModal.vue
|  |  |  ├── DangerButton.vue
|  |  |  ├── Dropzone.vue
|  |  |  └── ...
|  ├── constants
|  |  └── dashboard
|  |  |  ├── index.js
|  |  |  ├── date.json
|  |  |  └── users.json
|  ├── layouts
|  |  ├── AppLayout.vue
|  |  ├── AuthLayout.vue
|  |  └── HomeLayout.vue
|  ├── modules
|  |  ├── launchAds
|  |  |  ├── audience
|  |  |  |  ├── index.js
|  |  |  |  ├── age.vue
|  |  |  |  ├── gender.vue
|  |  |  |  ├── section.vue
|  |  |  |  └── ...
|  |  |  ├── destination
|  |  |  |  ├── index.js
|  |  |  |  ├── option.vue
|  |  |  |  ├── section.vue
|  |  |  |  ├── website.vue
|  |  |  |  └── ...
|  ├── router
|  |  └── index.js
|  ├── store
|  |  ├── units
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
|  |  |  ├── LaunchAds.vue
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
  A directory structure should be created by linking sub-components so that components can be recognized at a glance for each purpose.
- Along with modularization, components related to UI are selected and used separately.
  If the upper module is a functional unit rather than a component unit, the structure can be improved by dividing the path by module and configuring the sub-path considering each module as a small project unit.
- <ins>Naming of sub-registries must be regulated and functional units must be made unique.</ins>

## Naming rules of Component
- It is better to use one approach for file names. (PascalCase, kebab-case, camelCase, snake_case)
  File names for single-file components must always be pascal case or always kebab case.
  In the project, the names of vue components are mixed with Pascal case name, Kebab case name, and Camel case name.
  We should default to Pascal casenames because they work best with the code editor's autocompletion feature, and whenever possible they match how we refer to components in JSX and templates.
  And in the case of the camel case name, it is an incorrect name that completely violates the naming rules.
- For components with the same category, a prefix related to the parent must be used.
  Components that are strongly tied to the parent component should use the name of the parent component as a prefix.
- For components that are used uniquely, it is better to use them with “The” attached.
- <ins>For sub-registries, different naming rules must be applied for each functional group. Import/export the component through index.js.</ins>

## Mockup data composition
- Using a static data type such as json can ensure code simplicity in page rendering and component configuration for initial development.
- For mock materials, you should create groups according to usage and perform basic management (it is recommended to delete unused files) in a register called constants.
- <ins>It is more convenient to use the import/export function using js data, and it is better to configure mock data by page.</ins>

## Annotate
- The purpose of component use must be specified.
  Currently, components do not include comments describing their functionality.
  It is helpful to add comments within your code to explain the code's purpose, behavior, main logic, component roles, etc.
- <ins>By using VS-code extensions such as Todo tree, basic error tracking and development synchronization can be guaranteed.</ins>

## Code formatting and error handling through VScode
- formatting rules / vue code rules
- prettier
- eslint
- Volar
- Highlight
- Todo Tree
- .vscode/settings.json
