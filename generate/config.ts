/* eslint-disable import/no-extraneous-dependencies */
import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import { NodePlopAPI } from 'plop';

const root = process.cwd();
const dir = __dirname;

export default function generator(plop: NodePlopAPI): void {
  plop.setActionType('gen:cti', async () => {
    await promisify(exec)('bun run gen:cti');

    return 'Indexes generated';
  });

  plop.setGenerator('UI: Component', {
    description: 'An UI component, element or container with types and stories',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Type?',
        choices: ['element', 'component', 'container', 'util'],
      },
      {
        type: 'list',
        name: 'app',
        message: 'App?',
        choices: ['admin', 'app'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Directory',
        default: '',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: path.resolve(
          root,
          'apps/{{ kebabCase app }}/src/shared/ui/{{ kebabCase type}}s/{{ kebabCase dir }}/{{ kebabCase name }}',
        ),
        templateFiles: path.resolve(dir, 'templates/ui/component/**/*'),
        base: path.resolve(dir, 'templates/ui/component'),
      },
      {
        type: 'gen:cti',
      },
    ],
  });
}
