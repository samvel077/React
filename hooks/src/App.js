import './App.css';
import MyUseState from './useState';
import MyUseEffect from './useEffect';
import MyUseRef from './useRef';
import MyUseMemo from './useMemo';
import MyUseCallback from './useCallback';
import MyUseContext from './useContext'

function App() {
  return (
    <div>
      {/* <MyUseState /> */}
      {/* <MyUseEffect /> */}
      {/* <MyUseRef /> */}
      {/* <MyUseMemo /> */}
      {/* <MyUseCallback /> */}
      {/* <MyUseContext /> */}
    </div>
  );
}

export default App;


// function sum(a){
//   Function.prototype.number +=a
//   return function (){
//   }
// }
// Function.prototype.number = 0
// Function.prototype.sum = sum
// Function.prototype.result = function(){
//   return Function.prototype.number
// }
// console.log(sum(2).sum(5).sum(5).sum(5).sum(5).result())




// let b = 0;
// function sum(a){
//   b +=a
//  return {
//      result : function(){
//          return b
//      },
//      sum : sum
//  }
// }
// console.log(sum(2).sum(5).sum(5).sum(5).result())
