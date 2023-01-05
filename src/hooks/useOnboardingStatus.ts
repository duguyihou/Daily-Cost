import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

async function checkIfFirstLaunch() {
  try {
    const hasFirstLaunched = await AsyncStorage.getItem('@usesr_onboarded')
    if (hasFirstLaunched === null) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

const useOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false)
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true)

  useEffect(() => {
    const fn = async () => {
      const firstLaunch = await checkIfFirstLaunch()
      setIsFirstLaunch(firstLaunch)
      setIsFirstLaunchIsLoading(false)
    }
    fn()
  }, [])

  return {
    isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  }
}

export default useOnboardingStatus
