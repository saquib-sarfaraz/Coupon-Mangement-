import CouponCard from './CouponCard'

function CouponList({ coupons, selectedCouponCode, onApply }) {
  if (!coupons.length) {
    return (
      <div className="empty-state">
        <p>No coupons found.</p>
      </div>
    )
  }

  return (
    <div className="coupon-list">
      {coupons.map((coupon) => (
        <CouponCard
          key={coupon.code}
          coupon={coupon}
          isSelected={selectedCouponCode === coupon.code}
          onApply={onApply}
        />
      ))}
    </div>
  )
}

export default CouponList
