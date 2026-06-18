function CouponFilter({ checked, onChange, label }) {
  return (
    <label className="active-filter">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="active-filter__box" aria-hidden="true" />
      <span>{label}</span>
    </label>
  )
}

export default CouponFilter
