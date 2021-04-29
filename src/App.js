import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

        <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 border p-8 bg-gray-200'}>
                <h1 className={'text-center text-2xl'}>App Title</h1>

            </div>

            <div className={'col-span-12 sm:col-span-4 md:col-span-3 border h-96'}>
                <h1 className={'text-center text-2xl'}>Categories</h1>

            </div>

            <div className={'col-span-12 sm:col-span-8 md:col-span-9 border h-96'}>
                <h1 className={'text-center text-2xl'}>Questions</h1>
            </div>

        </div>


    </>
  );
}

export default App;
