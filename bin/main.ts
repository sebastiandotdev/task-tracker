const COMMAND_ADD = 'add'

async function run() {
  const args = Deno.args

  if (args.includes(COMMAND_ADD)) {
    const command = await import('@commands/add')
    command.add()
  }
}

if (import.meta.main) {
  run()
}
