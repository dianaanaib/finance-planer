import { COLOR_PLATE } from '../styleGuide/colorPlate.js'

export const assignColorByCategory = category => {
    return (COLOR_PLATE[category]) ? (COLOR_PLATE[category]) : (COLOR_PLATE['default'])
}

