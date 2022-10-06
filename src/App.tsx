import './App.css';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'mff-product-card';
import { Button, MyLabel } from 'mff-my-storybook-components';

const product1 = {
  id: '1',
  title: 'Coffe Mug - Sin Imagen'
}

function App() {
  return (
    <div className="App App-header">

      <h1>Consumiendo mi primer paquete NPM</h1>

      <ProductCard
        product={product1}
        initialValues={{
          count: 4,
          maxCount: 15
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ ProductCard >

      <h1>Consumiendo mi segundo paquete con storybook</h1>
        <MyLabel label="MyLabel npm" backgroundColor="white" size="h1" />
        <Button label="Hello from NPM" backgroundColor="white"/>
    </div>
  );
}

export default App;
