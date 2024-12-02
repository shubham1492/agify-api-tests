import { setWorldConstructor, World } from '@cucumber/cucumber';

class CustomWorld extends World {
  [key: string]: any;
}

setWorldConstructor(CustomWorld);
