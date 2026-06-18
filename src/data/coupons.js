const coupons = [
  {
    code: 'FLAT100',
    title: 'Flat ₹100 OFF',
    description: 'Get flat ₹100 off on your order',
    type: 'FLAT',
    value: 100,
    status: 'active',
  },
  {
    code: 'PERCENT10',
    title: '10% OFF up to ₹200',
    description: 'Get 10% off up to ₹200 on your order',
    type: 'PERCENT',
    value: 10,
    maxDiscount: 200,
    status: 'active',
  },
  {
    code: 'FLAT200',
    title: 'Flat ₹200 OFF',
    description: 'Get flat ₹200 off on your order',
    type: 'FLAT',
    value: 200,
    status: 'inactive',
  },
  {
    code: 'WELCOME50',
    title: 'Flat ₹50 OFF',
    description: 'Get flat ₹50 off on your first order',
    type: 'FLAT',
    value: 50,
    status: 'active',
    firstOrderOnly: true,
  },
]

export default coupons
