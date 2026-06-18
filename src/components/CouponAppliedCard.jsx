import { formatCurrency } from '../utils/couponCalculator'

function CouponAppliedCard({ coupon, discountAmount, onRemove }) {
  return (
    <section className="applied-coupon">
      <div className="applied-coupon__header">
        <div className="applied-coupon__title">
          <span className="applied-coupon__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path
                d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v2.08a2.5 2.5 0 0 0 0 4.84v2.08A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-2.08a2.5 2.5 0 0 0 0-4.84V5.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Coupon Applied</span>
        </div>
        <button type="button" className="remove-link" onClick={onRemove}>
          Remove
        </button>
      </div>

      <div className="applied-coupon__content">
        <strong>{coupon.code}</strong>
        <div className="applied-coupon__row">
          <span>{coupon.description}</span>
          <span className="applied-coupon__discount">
            - {formatCurrency(discountAmount)}
          </span>
        </div>
      </div>
    </section>
  )
}

export default CouponAppliedCard
