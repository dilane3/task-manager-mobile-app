import { createContext } from 'react';

const NavigationContext = createContext({
  modalVisible: true,
  changeModalVisible: () => {}
})

export default NavigationContext