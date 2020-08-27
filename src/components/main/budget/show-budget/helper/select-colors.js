

export function selectColor(budget, currentMoney) {
  const porcent = (currentMoney / budget) * 100;
  if (porcent > 70) {
    return 'text-color'
  }
  if (porcent > 50) {
    return 'text-70'
  }
  if (porcent > 20) {
    return 'text-50'
  }
  if (porcent > 5) {
    return 'text-20'
  }

  return 'text-5'
}