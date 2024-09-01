#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';

function usage() {
    console.log("tool [CMD]")
    console.log("  --start		Starts the app")
    console.log("  --build		Builds the app")
}

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    });
    
    if (args['--start']) {
        console.log(chalk.bgCyan("Starting the app"))
    }
} catch (e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage() 
}