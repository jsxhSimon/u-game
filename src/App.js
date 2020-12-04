import RouterPage from './router'
import { useEffect } from 'react'
import { useStores } from './hooks/useStore'
import { StoreProvider } from './store'

function App() {
  const { userStore } = useStores()
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
