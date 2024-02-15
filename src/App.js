import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [val1, setval1] = useState('')
  let [val2, setval2] = useState('')
  let [val3, setval3] = useState('')
  let [val4, setval4] = useState('')
  let [val5, setval5] = useState('')
  let [val6, setval6] = useState('')
  let [val7, setval7] = useState('')
  let [val8, setval8] = useState('')
  let [val9, setval9] = useState('')
  let [status, setstatus] = useState(null)
  let [win, setwin] = useState(null)
  let [arr, setarr] = useState([])
  let [cnt, setcnt] = useState(0)
  let [check, setcheck] = useState('')

  const game = (e) => {
    if (e == 1) {
      if (val1 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval1('X')
            setstatus(1)
            arr[0] = 1;
          }
          else {
            setval1('O');
            setstatus(null)
            arr[0] = 2;
          }
        }
      }
    } else if (e == 2) {
      if (val2 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval2('X')
            setstatus(1)
            arr[1] = 1;
          }
          else {
            setval2('O');
            setstatus(null)
            arr[1] = 2;
          }
        }
      }
    }
    else if (e == 3) {
      if (val3 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval3('X')
            setstatus(1)
            arr[2] = 1;
          }
          else {
            setval3('O');
            setstatus(null)
            arr[2] = 2;
          }
        }
      }
    }

    else if (e == 4) {
      if (val4 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval4('X')
            setstatus(1)
            arr[3] = 1;
          }
          else {
            setval4('O');
            setstatus(null)
            arr[3] = 2;
          }
        }
      }
    }
    else if (e == 5) {
      if (val5 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval5('X')
            setstatus(1)
            arr[4] = 1;
          }
          else {
            setval5('O');
            setstatus(null)
            arr[4] = 2;
          }
        }
      }
    }
    else if (e == 6) {
      if (val6 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval6('X')
            setstatus(1)
            arr[5] = 1;
          }
          else {
            setval6('O');
            setstatus(null)
            arr[5] = 2;
          }
        }
      }
    }
    else if (e == 7) {
      if (val7 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval7('X')
            setstatus(1)
            arr[6] = 1;
          }
          else {
            setval7('O');
            setstatus(null)
            arr[6] = 2;
          }
        }
      }
    }
    else if (e == 8) {
      if (val8 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval8('X')
            setstatus(1)
            arr[7] = 1;
          }
          else {
            setval8('O');
            setstatus(null)
            arr[7] = 2;
          }
        }
      }
    } else if (e == 9) {
      if (val9 == '') {
        if (cnt == 0) {
          if (status == null) {
            setval9('X')
            setstatus(1)
            arr[8] = 1;
          }
          else {
            setval9('O');
            setstatus(null)
            arr[8] = 2;
          }
        }
      }
    }

    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) {
      setwin('X is win');
      setcnt(1)
    } else if (arr[2] == 1 && arr[4] == 1 && arr[6] == 1) {
      setwin('X is win');
      setcnt(1)
    }

    else if (arr[0] == 2 && arr[1] == 2 && arr[2] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[3] == 2 && arr[4] == 2 && arr[5] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[6] == 2 && arr[7] == 2 && arr[8] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[0] == 2 && arr[3] == 2 && arr[6] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[1] == 2 && arr[4] == 2 && arr[7] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[2] == 2 && arr[5] == 2 && arr[8] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[0] == 2 && arr[4] == 2 && arr[8] == 2) {
      setwin('O is win');
      setcnt(1)
    } else if (arr[2] == 2 && arr[4] == 2 && arr[6] == 2) {
      setwin('O is win');
      setcnt(1)
    }

    if (cnt == 1) {
      setcheck('GAME OVER TRY AGAIN')
    }
    if (val1 != '' && val2 != '' && val3 != '' && val4 != '' && val5 != '' && val6 != '' && val7 != '' && val8 != '' && val9 != '') {
      setwin('tie')
      setcheck('GAME OVER TRY AGAIN')

    }
    // if(setval1(!'')&&setval2()&&setval3()&&setval4()&&setval5()&&setval6()&&setval7()&&setval8()&&setval9()){
    //   setwin('tie')
    //   setcheck('GAME OVER TRY AGAIN')

    // }




  }
  return (
    <>
      <div className='box'>
        <div className='box2'>
          <input type='text' className='input' value={val1} onClick={(e) => game(1)}></input>
          <input type='text' className='input' value={val2} onClick={(e) => game(2)}></input>
          <input type='text' className='input' value={val3} onClick={(e) => game(3)}></input><br></br>
          <input type='text' className='input' value={val4} onClick={(e) => game(4)}></input>
          <input type='text' className='input' value={val5} onClick={(e) => game(5)}></input>
          <input type='text' className='input' value={val6} onClick={(e) => game(6)}></input><br></br>
          <input type='text' className='input' value={val7} onClick={(e) => game(7)}></input>
          <input type='text' className='input' value={val8} onClick={(e) => game(8)}></input>
          <input type='text' className='input' value={val9} onClick={(e) => game(9)}></input><br></br><br></br>
          <button className='reset'> <a href='./App.js' >reset</a></button><br></br><br></br>
        <input type='text' value={win} placeholder='winner'  style={{color:'black' ,marginRight:'57px'}}></input>
           <input type='text' value={check} placeholder='status' className='status'></input>
        </div>

      </div>

    </>
  );
}

export default App;
