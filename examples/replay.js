
// source with:
//   > . examples/replay

// repeat the previous command on
// blank lines. great for automating
// things like `make test`.

shell.on('command', function(e){
  if ('' == e.line.trim()) {
    e.preventDefault();
    shell.exec(shell.lastCommand);
  }
});
