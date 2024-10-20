import { COMMAND_ADD } from '@tools/constants'

async function run() {
  const args = Deno.args

  if (args.includes(COMMAND_ADD)) {
    const command = await import('@commands/add')
    command.add(args[1])
  }
}

if (import.meta.main) {
  run()
}
