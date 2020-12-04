import { StoreContext } from '@/store'
import { useContext } from 'react';

const useStore = () => useContext(StoreContext)

export default useStore