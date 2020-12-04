import RouterPage from './router'
import { useEffect } from 'react'
import { StoreProvider } from './store'
import userStore from './store/userStore'

function App() {
  useEffect(() => {
    userStore.getUserInfo()
  }, [])
  return (
    <div className="App">
      <StoreProvider>
        <RouterPage />
      </StoreProvider>
    </div>
  );
}

export default App;
