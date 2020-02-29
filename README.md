# React UI Components

## Main Goal
Create a lot of usefull and maximum reusable UI components

## Homepage
[React UI Components](https://r-ui-components.netlify.com/)

## Install
```bash
# Install package from NPM
% npm install @assenti/rui-components -S

               #or

% yarn add @assenti/rui-components
```

## Usage
index.js / index.ts
```jsx
// Import styles in index.js
import '@assenti/react-ui-components/build/css/main.css';
```
App.js / App.tsx
```jsx
import { Card, Button } from '@assenti/react-ui-components';
import React from 'react';

function App() {
  return (
    <div>
      <div>
        <Card outlined color="primary" title="Button">
          <Button color="primary" name="Rocket" icon="rocket"/>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

### TODO
- [ ] Date picker / Calendar
- [ ] Expansion List
- [ ] Stepper
- [ ] Rating
- [ ] Dock
- [ ] Alert
- [ ] Notification
- [ ] Breadcrumbs
- [ ] Carousel
- [ ] Tabs
- [ ] Dark & Light Mode
- [ ] Define theme colors and make them customizable
- [ ] TypeScript support (Declare types for all TS using)
- [ ] Add i18n

## Changelog
You can track changelog [here](/CHANGELOG.md)

Project start date: Jan 6th 2020

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov
