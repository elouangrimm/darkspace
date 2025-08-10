import React from 'react'
import {Slider as RNSlider} from '@miblanchard/react-native-slider'

export function Slider(
  props: React.ComponentProps<typeof RNSlider>,
) {
  return <RNSlider {...props} />
}
