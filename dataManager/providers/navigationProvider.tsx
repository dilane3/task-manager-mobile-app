import { useState } from "react"
import NavigationContext from "../contexts/navigationContext"

type NavigationProviderPropType = {
  children: JSX.Element
}

const NavigationProvider = ({ children }: NavigationProviderPropType) => {
  const [modalVisible, setModalVisible] = useState(false)

  const navigationContextValue = {
    modalVisible,
    changeModalVisible: () => setModalVisible(prev => !prev)
  }

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      { children }
    </NavigationContext.Provider>
  )
}

export default NavigationProvider