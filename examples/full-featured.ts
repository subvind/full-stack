import { ConcreteDeveloper, BackendCoder } from '../index'

const coder = new BackendCoder();

const developer = new ConcreteDeveloper();
coder.setDeveloper(developer);

console.log('Standard full featured app:');
coder.buildFullFeaturedProduct();
developer.getApplication().listParts();

