import { formatCurrency } from '../utils/couponCalculator'

function OrderSummary({
  itemTotal,
  deliveryFee,
  totalAmount,
  discountAmount,
  finalAmount,
  appliedCard,
}) {
  return (
    <section className="summary-card">
      <div className="summary-card__header">
        <span className="summary-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path
              d="M6 8h12l-1 12H7L6 8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9 8a3 3 0 0 1 6 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <h2>Order Summary</h2>
      </div>

      <div className="summary-rows">
        <div className="summary-row">
          <span>Item Total</span>
          <span>{formatCurrency(itemTotal)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>{formatCurrency(deliveryFee)}</span>
        </div>

        <div className="summary-divider" />

        <div className="summary-row summary-total">
          <strong>Total Amount</strong>
          <strong>{formatCurrency(totalAmount)}</strong>
        </div>
      </div>

      {appliedCard}

      <div className="final-card">
        <div className="final-card__row">
          <span>Discount</span>
          <span className="final-card__discount">- {formatCurrency(discountAmount)}</span>
        </div>
        <div className="final-card__row">
          <strong>Final Payable Amount</strong>
          <strong className="final-card__amount">{formatCurrency(finalAmount)}</strong>
        </div>
      </div>

      <button type="button" className="pay-button">
        Proceed to Pay
      </button>
    </section>
  )
}

export default OrderSummary
