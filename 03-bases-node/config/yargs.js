const argv = require('yargs')
                            .options('b',{
                              alias: 'base',
                              type: 'number',
                              demandOption: true,
                              describe: 'Is the base of the multiply table'
                            })
                            .options('l',{
                              alias: 'list',
                              type: 'boolean',
                              default: false,
                              describe: 'List the table created'
                            })
                            .options('t',{
                              alias: 'top',
                              type: 'number',
                              default: 10,
                              describe: 'Is the top number that the base multiply'
                            })
                            .check((argv, options) =>{
                              if(isNaN(argv.b)) throw 'The base must be a number';
                              if(isNaN(argv.t)) throw 'The top must be a number';
                              return true;
                            })
                            .argv;

module.exports = argv;                         