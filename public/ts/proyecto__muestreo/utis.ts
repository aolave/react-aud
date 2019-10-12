declare var app: any

export const isEmpty = (value: any) => {
  if (_.isNumber(value)) {
    return false
  }

  return _.size(value) == 0
}

export const cacheMuestra = (muestra: MuestraItem) => {
  const cacheKey = `muestras_${app.vars.ID_MUESTREO}`
  let muestras: { [s: string]: number }
  let muestrasBackup = localStorage.getItem(cacheKey)
  muestras = !muestrasBackup ? {} : JSON.parse(muestrasBackup)
  if (isEmpty(muestra.r)) {
    muestras = _.omit(muestras, muestra.cod)
  } else {
    muestras[muestra.cod] = parseFloat(muestra.r + '')
  }

  localStorage.setItem(cacheKey, JSON.stringify(muestras))
}

export const getCacheAllMuestra = () => {
  const cacheKey = `muestras_${app.vars.ID_MUESTREO}`
  let muestras: { [s: string]: number }
  let muestrasBackup = localStorage.getItem(cacheKey)
  muestras = !muestrasBackup ? {} : JSON.parse(muestrasBackup)

  return muestras
}
