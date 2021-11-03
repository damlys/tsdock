#!/usr/bin/env node

import { runHttpServer } from "../http-server";

async function main(): Promise<void> {
  switch (process.argv[2]) {
    case "run-http-server":
    case "r":
      runHttpServer();
      break;
    case "help":
    case "h":
    case "":
    case undefined:
      process.stdout.write(`TypeScript starter for Node.js projects.

Usage: tsdock [command]

Commands:
run-http-server, r    Runs a HTTP server
help, h               Displays a help message
`);
      process.exit(0);
      break;
    default:
      process.stderr.write(`Command "${process.argv[2]}" does not exist. Use one of: "run-http-server", "help".\n`);
      process.exit(127);
      break;
  }
}

main();
