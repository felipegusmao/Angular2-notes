# Angular 2 essential players

## list of essential parts of Angular 2

- Components and Templates
- Series of components and templates combinations are organized into modules

- Modules
  - Components
    - Templates
      - Metadata
- Focus - Create reusable components and modules
- Separation of concerns
  - Separate code into Modules
  
- App component
  - Header component
  - Nav Component
  - Content Component
  - Footer Component
  
#### main.ts

```javascript

import { bootstrap } from 'angular2/platform/browser';
import { BasicComponent } from './basic.component';

bootstrap(BasicComponent);

```

#### basic.component.ts

```javascript

@Component({
    selector: 'my-basic',
    templateUrl: 'app/basic.component.html'
})
export class BasicComponent {
    name = 'Han Solo';
}

```

#### basic.component.html

```html

<h3>My name is {{name}}</h3>

```

#### index.html

```html

<my-basic></my-basic>

```

