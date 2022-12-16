module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/components/{{name}}',
        templateFiles: 'plop_templates/component/*.hbs',
        base: 'plop_templates/component',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'React page using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/pages/{{name}}',
        templateFiles: 'plop_templates/page/*.hbs',
        base: 'plop_templates/page',
      },
    ],
  });
  plop.setGenerator('slice', {
    description: 'React Redux toolkit slice using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/store/{{name}}-slice',
        templateFiles: 'plop_templates/slice/*.hbs',
        base: 'plop_templates/slice',
      },
    ],
  });
  plop.setHelper('componentName', value => {
    return value
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join('');
  });
};
