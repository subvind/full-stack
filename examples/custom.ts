import { ConcreteDeveloper } from '../index'

const developer = new ConcreteDeveloper();

// Remember, the Builder pattern can be used without a Director class.
console.log('Custom app:');
developer.producePartAPI3();
developer.producePartWebpage3();
developer.getApplication().listParts();
