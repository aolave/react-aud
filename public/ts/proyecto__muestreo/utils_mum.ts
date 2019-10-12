/// <reference path="./index.d.ts" />

declare var jStat: any

const roundup2 = (number: number): number => {
  let rounded_number = Math.round(number * 100) / 100

  if (rounded_number < number) {
    rounded_number += 0.01
  }

  return rounded_number
}

const gammaInv = (probability: number, alpha: number): number => {
  return jStat.gamma.inv(probability, alpha, 1)
}

export const calculateFactorConfianza = (nivel_confianza: number): number => {
  return roundup2(gammaInv(nivel_confianza / 100, 1))
}

export const calculateTamanoMuestra = (
  volumen_poblacion: number,
  factor_confianza: number,
  error_tolerable: number
) => {
  return Math.round(volumen_poblacion * factor_confianza / error_tolerable)
}

export const generarMuestras = (muestrasOriginal: MuestraItem[], tamano_muestra: number, intervalo: number) => {
  let muestras = _.clone(muestrasOriginal, true)
  muestras = _.filter(muestras, (item) => item.v > 0)

  const muestras_e = _.filter(muestras, (item) => item.v >= intervalo)

  if (muestras_e.length > tamano_muestra) {
    muestras = _.take(_.sortBy(muestras_e, 'v'), tamano_muestra)
  } else {
    let muestras_s = _.filter(muestras, (item) => item.v < intervalo)
    let volumen_s = 0
    muestras_s.forEach((item) => {
      volumen_s += item.v
    })

    const tamano_muestra_s = tamano_muestra - muestras_e.length
    const intervalo_s = volumen_s / tamano_muestra_s
    const seed_s = Math.floor(Math.random() * intervalo_s) + 1
    let muestras_s_tmp = _.shuffle(muestras_s)
    muestras_s = []

    let interval_k = 0
    let interval_acumulado = 0
    for (let k in muestras_s_tmp) {
      if (interval_k >= tamano_muestra_s) {
        break
      }

      const item = muestras_s_tmp[k]
      interval_acumulado += item.v

      const acumulado_item = seed_s + interval_k * intervalo_s
      if (interval_acumulado >= acumulado_item) {
        muestras_s.push(item)
        interval_k++
      }
    }

    muestras = _.union(muestras_e, muestras_s)
  }

  muestras = _.sortBy(muestras, 'cod') // Las ordeno por codigo

  return muestras
}

export const calculatePrecision = (
  muestras: MuestraItem[],
  intervalo: number,
  factor_confianza: number,
  nivel_confianza: number
) => {
  const hasMuestrasErradas = (muestra: MuestraItem) => {
    const diff = muestra.v - muestra.r
    return !isNaN(diff) && diff != 0
  }

  if (!_.any(muestras, hasMuestrasErradas)) {
    // Si no hay muestras con errores, la precision es 0.
    return 0
  }

  const riesgo_aceptacion: number = Math.floor(100 - nivel_confianza)

  let tolerancia_incremental: number = 0
  let items_inferiores: { error_proyectado: number }[] = []

  _.each(muestras, (muestra) => {
    const diff: number = muestra.v - muestra.r
    if (!isNaN(diff)) {
      if (diff == 0) {
        return
      }

      const contaminacion = (muestra.v - muestra.r) / muestra.v
      const error_proyectado = muestra.v > intervalo ? muestra.v - muestra.r : contaminacion * intervalo

      if (muestra.v <= intervalo) {
        items_inferiores.push({ error_proyectado })
      }
    }
  })

  items_inferiores = _.sortBy(items_inferiores, 'error_proyectado').reverse()
  let total_error_proyectado_inferiores: number = 0
  for (let k in items_inferiores) {
    let factor_incremental = roundup2(gammaInv(1 - riesgo_aceptacion / 100, 1 + parseInt(k) + 1))
    factor_incremental -= roundup2(gammaInv(1 - riesgo_aceptacion / 100, 1 + parseInt(k)))
    factor_incremental = Math.round(factor_incremental * 100) / 100

    tolerancia_incremental += items_inferiores[k]['error_proyectado'] * factor_incremental
    total_error_proyectado_inferiores += items_inferiores[k]['error_proyectado']
  }

  const precision_basica: number = intervalo * factor_confianza

  tolerancia_incremental -= total_error_proyectado_inferiores

  return precision_basica + tolerancia_incremental
}
