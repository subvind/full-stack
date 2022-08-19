import { ConcreteDeveloper, FullStackCoder } from '../index'

function test() {
  const coder = new FullStackCoder();

  const developer = new ConcreteDeveloper();
  coder.setDeveloper(developer);

  console.log('Full stack app:');
  developer.producePartBackend();
  developer.producePartFrontend();
  developer.producePartMobile();
  developer.getApplication().listParts();
}

test();