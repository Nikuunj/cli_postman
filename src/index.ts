import { Command } from 'commander';
import { deleteAction, getAction, patchActoin, postAction } from './function/actionFuction';

const program = new Command();

program
  .name('cli_postman')
  .description('cli postman')
  .version('0.8.0');

  
program.command('get')
    .description('Get method')
    .argument('<url>', 'url where from get response')
    .action(getAction);


program.command('post')
    .description('Post method')
    .argument('<url>', 'URL to send data to')
    .argument('<data>', 'json or plan text')
    .action(postAction);


program.command('delete')
    .description('Delete method')
    .argument('<url>', 'URL to send DELETE request to')
    .argument('<data>', 'JSON or plain text to send with DELETE request')
    .action(deleteAction);


program.command('put')
    .description('Delete method')
    .argument('<url>', 'URL to send DELETE request to')
    .argument('<data>', 'JSON or plain text to send with DELETE request')
    .action(postAction);

program.command('patch')
    .description('Delete method')
    .argument('<url>', 'URL to send DELETE request to')
    .argument('<data>', 'JSON or plain text to send with DELETE request')
    .action(patchActoin);

program.parse();