  import { bootstrap } from 'angular2/platform/browser';
  import { CharacterComponent } from './character.component';

  bootstrap(CharacterComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

