import { ConcreteDeveloper, BackendCoder } from '../index'

const coder = new BackendCoder();

const developer = new ConcreteDeveloper();
coder.setDeveloper(developer);

console.log('Standard basic app:');
coder.buildMinimalViableProduct();
developer.getApplication().listParts();

