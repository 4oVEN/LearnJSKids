const runInput = document.querySelector('#run_input');

const line = 'Write some text here...';
const speed = 150;


  // runInput.value = line.substring(0, i)

  let i = 0;


  function runLine(){
    if (i++ < line.length){
      runInput.value = line.substring(0, i)
    }
    else {
      runInput.value = ''
      i = 0
    }
    done = setTimeout('runLine()', speed)
  }
  runLine();

