import { COLOR_PLATE } from '../constants.js'

export const assignColorByCategory = category => {
    return (COLOR_PLATE[category]) ? (COLOR_PLATE[category]) : (COLOR_PLATE['default'])
}

