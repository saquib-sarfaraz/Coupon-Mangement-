import { useMemo, useState } from 'react'
import CouponAppliedCard from './components/CouponAppliedCard'
import CouponFilter from './components/CouponFilter'
import CouponList from './components/CouponList'
import CouponSearch from './components/CouponSearch'
import OrderSummary from './components/OrderSummary'
import coupons from './data/coupons'
import {
  DELIVERY_FEE,
  ITEM_TOTAL,
  calculateDiscountAmount,
  formatCurrency,
} from './utils/couponCalculator'
import './App.css'

const isFirstOrder = true
const DEFAULT_SELECTED_COUPON = 'PERCENT10'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeOnly, setActiveOnly] = useState(false)
  const [selectedCouponCode, setSelectedCouponCode] = useState(
    DEFAULT_SELECTED_COUPON,
  )
  const [errorMessage, setErrorMessage] = useState('')

  const filteredCoupons = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return coupons.filter((coupon) => {
      const matchesSearch = coupon.code.toLowerCase().includes(term)
      const matchesActive = !activeOnly || coupon.status === 'active'

      return matchesSearch && matchesActive
    })
  }, [searchTerm, activeOnly])

  const selectedCoupon = coupons.find(
    (coupon) => coupon.code === selectedCouponCode,
  )

  const discountAmount = selectedCoupon
    ? calculateDiscountAmount(selectedCoupon, ITEM_TOTAL, isFirstOrder)
    : 0

  const finalAmount = ITEM_TOTAL + DELIVERY_FEE - discountAmount

  const handleApplyCoupon = (coupon) => {
    if (coupon.status !== 'active') {
      return
    }

    if (coupon.code === 'WELCOME50' && !isFirstOrder) {
      setErrorMessage('WELCOME50 is only valid for a first order.')
      return
    }

    setSelectedCouponCode(coupon.code)
    setErrorMessage('')
  }

  const handleRemoveCoupon = () => {
    setSelectedCouponCode(null)
    setErrorMessage('')
  }

  return (
    <main className="page-shell">
      <section className="page-frame">
        <header className="page-header">
          <div className="page-title">
            <span className="coupon-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v2.08a2.5 2.5 0 0 0 0 4.84v2.08A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-2.08a2.5 2.5 0 0 0 0-4.84V5.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9.5 15 14.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 8.5h.01M13.5 15.5h.01"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <h1>Apply Coupon</h1>
              <p>Choose a coupon and save on your order</p>
            </div>
          </div>
        </header>

        <div className="content-grid">
          <section className="coupon-panel">
            <div className="search-row">
              <CouponSearch
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search coupon by code"
              />
              <CouponFilter
                checked={activeOnly}
                onChange={setActiveOnly}
                label="Show active coupons only"
              />
            </div>

            <div className="list-header">
              <h2>Available Coupons</h2>
              <span className="count-badge">{filteredCoupons.length}</span>
            </div>

            <CouponList
              coupons={filteredCoupons}
              selectedCouponCode={selectedCouponCode}
              onApply={handleApplyCoupon}
            />

            <div className="info-banner" role="note" aria-label="Coupon note">
              <span className="info-banner__icon" aria-hidden="true">
                i
              </span>
              <p>Only one coupon can be applied per order</p>
            </div>
          </section>

          <aside className="summary-column">
            <OrderSummary
              itemTotal={ITEM_TOTAL}
              deliveryFee={DELIVERY_FEE}
              totalAmount={ITEM_TOTAL + DELIVERY_FEE}
              selectedCoupon={selectedCoupon}
              discountAmount={discountAmount}
              finalAmount={finalAmount}
              appliedCard={
                selectedCoupon ? (
                  <CouponAppliedCard
                    coupon={selectedCoupon}
                    discountAmount={discountAmount}
                    onRemove={handleRemoveCoupon}
                  />
                ) : null
              }
            />

            <section className="secure-card" aria-label="Safe and secure">
              <span className="secure-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path
                    d="M12 3 19 6.5V12c0 4.1-2.9 7.5-7 9-4.1-1.5-7-4.9-7-9V6.5L12 3Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9.5 12 1.8 1.8 3.6-4.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>SAFE &amp; SECURE</strong>
                <p>Your payment details are encrypted and safe with us.</p>
              </div>
            </section>
          </aside>
        </div>

        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
        <span className="sr-only">
          Original total {formatCurrency(ITEM_TOTAL + DELIVERY_FEE)}
        </span>
      </section>
    </main>
  )
}

export default App
