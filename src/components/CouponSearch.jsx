function CouponSearch({ value, onChange, placeholder }) {
  return (
    <label className="search-input">
      <span className="search-input__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <circle
            cx="11"
            cy="11"
            r="6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m16 16 4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

export default CouponSearch
