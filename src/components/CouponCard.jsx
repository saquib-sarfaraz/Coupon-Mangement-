import { formatCurrency } from '../utils/couponCalculator'

function CouponCard({ coupon, isSelected, onApply }) {
  const isInactive = coupon.status !== 'active'
  const couponStateClass = isSelected
    ? 'coupon-card coupon-card--selected'
    : `coupon-card coupon-card--${coupon.status}`

  const applyClass = isSelected
    ? 'apply-button apply-button--selected'
    : 'apply-button apply-button--active'

  return (
    <article className={couponStateClass}>
      <div className={`coupon-ticket coupon-ticket--${coupon.status}`}>
        <span>{coupon.code}</span>
      </div>

      <div className="coupon-card__body">
        <div className="coupon-card__text">
          <h3>{coupon.title}</h3>
          <p>{coupon.description}</p>
          <span
            className={
              coupon.status === 'active'
                ? 'status-badge status-badge--active'
                : 'status-badge status-badge--inactive'
            }
          >
            {coupon.status === 'active' ? 'Active' : 'Inactive'}
          </span>
          <span className="coupon-card__meta">
            {coupon.type === 'PERCENT'
              ? `${coupon.value}% OFF`
              : `${formatCurrency(coupon.value)} OFF`}
          </span>
        </div>

        <button
          type="button"
          className={applyClass}
          disabled={isInactive}
          onClick={() => onApply(coupon)}
        >
          Apply
        </button>
      </div>
    </article>
  )
}

export default CouponCard
