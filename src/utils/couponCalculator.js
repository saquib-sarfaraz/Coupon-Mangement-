export const ITEM_TOTAL = 1200
export const DELIVERY_FEE = 40

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function calculateDiscountAmount(coupon, orderAmount, isFirstOrder) {
  if (!coupon || coupon.status !== 'active') {
    return 0
  }

  if (coupon.firstOrderOnly && !isFirstOrder) {
    return 0
  }

  if (coupon.type === 'PERCENT') {
    const rawDiscount = Math.round((orderAmount * coupon.value) / 100)
    return Math.min(rawDiscount, coupon.maxDiscount ?? rawDiscount)
  }

  return Math.min(coupon.value, orderAmount)
}
