import RouterPage from './router'
import { useEffect } from 'react'
import { useStores } from './hooks/useStore'

function App() {
  const { userStore } = useStores()
  useEffect(() => {
    userStore.getUserInfo()
  }, [])
  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}

export default App;
