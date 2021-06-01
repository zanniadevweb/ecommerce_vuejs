import { Plugins } from '@capacitor/core'

const { Storage } = Plugins
const CLE_CONFIG_MODELE = 'CONFIG_MODELE'

export function get () {
  return Storage.get({ key: CLE_CONFIG_MODELE }).then((item) => {
    if (item.value === null) { // f (conf === null)
      return null
    } else {
      return JSON.parse(item.value) // return JSON.parse(conf)
    }
  })
  // si aucune conf on renvoie null, JSON.parse(null) renverrai une erreur
}

export function set (value) {
  return Storage.set({
    key: CLE_CONFIG_MODELE,
    value: JSON.stringify(value)
  })
}

export function remove () {
  return Storage.remove({
    key: CLE_CONFIG_MODELE
  })
}
