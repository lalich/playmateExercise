import logo from './logo.svg';
import './App.css';

const Playmate = ({

    alt = 'Playmate',
    src = "https://cdn11.bigcommerce.com/s-h6x3iw3yu/images/stencil/1280x1280/products/400/491/il_340x270.2324043450_qvgh__95563.1611443496.jpg?c=1",
    width = 300,
    height = 300,
    pHeight = '63',
    pWeight = '123'
}) => {
      return (
        <>
        <h3>{alt}</h3>

        <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        pHeigth={pHeight}
        pWeight={pWeight}
        />
        <h4>height:{pHeight}</h4>
        <h5>weight:{pWeight}</h5>
        </>
      )
}


const App = () => {
  return (

    
    <div className="App">
      <h1>Welcome to Playmate AI</h1>
      <Playmate />
<br />
      <Playmate
      src='https://images.seattletimes.com/wp-content/uploads/2018/05/Playboy-bunny-logo-TZR.jpg?d=780x502'
      alt= 'The Party'
      />
<br />
    <Playmate
    src='https://imagez.tmz.com/image/6e/1by1/2023/05/23/6e00bef3d63a43738af9e9e2facf49dd_xl.jpg'
    alt='🔥'
    pHeight='69'
    pWeight='112' 
    />
    


    </div>
  );
}

export default App;
