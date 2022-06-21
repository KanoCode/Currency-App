import './styles/App.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { useSelector } from 'react-redux';
import StockCard from './components/stockCard';

function App() {
  const stockData = useSelector((state) => state.stocks);
  const imgUrlGenerator = (code) => `https://financialmodelingprep.com/image-stock/${code}.png`;
  console.log(stockData);
  return (
    <div className="App">
      <header className="App-header">
        Hi i am a header
        <FaMicrophone />
        <IoMdSettings />
      </header>

      <div className="container">
        {stockData.map((a) => {
          console.log(a);
          return (
            <StockCard
              name={a.name}
              symbol={a.symbol}
              key={1}
              img={imgUrlGenerator}
              price={a.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
