import { useMemo, useState } from 'react'
import './App.css'

const productsData = [
  { id: 1, name: 'Điện thoại thông minh mới nhất, pin bền, camera đẹp', price: '9.990.000', rating: '4.9', sold: '1,2k', badge: 'Yêu thích', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', bgClass: '' },
  { id: 2, name: 'Tai nghe Bluetooth chống ồn, âm thanh sống động', price: '799.000', rating: '4.8', sold: '890', badge: 'Giảm 20%', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--pink' },
  { id: 3, name: 'Đồng hồ thông minh theo dõi sức khỏe', price: '1.299.000', rating: '4.7', sold: '650', badge: 'Mới', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--green' },
  { id: 4, name: 'Đèn LED chống nước cho không gian sống', price: '289.000', rating: '4.6', sold: '2,3k', badge: 'Bán chạy', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--blue' },
  { id: 5, name: 'Áo khoác casual thời trang, phong cách năng động', price: '450.000', rating: '4.8', sold: '1,1k', badge: 'Hot', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--yellow' },
  { id: 6, name: 'Bộ phụ kiện trang trí xanh cho bàn làm việc', price: '199.000', rating: '4.5', sold: '760', badge: 'Giảm 15%', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--purple' },
  { id: 7, name: 'Sữa rửa mặt dịu nhẹ, phù hợp mọi loại da', price: '180.000', rating: '4.7', sold: '1,5k', badge: 'Sale', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--orange' },
  { id: 8, name: 'Gấu bông mềm mại cho trẻ em và người lớn', price: '120.000', rating: '4.9', sold: '980', badge: 'Mua 2 giảm 10%', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80', bgClass: 'product-item__img--gray' },
]

function App() {
  const [search, setSearch] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState('')

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase()
    if (!keyword) return productsData
    return productsData.filter((product) => product.name.toLowerCase().includes(keyword))
  }, [search])

  const addToCart = (product) => {
    setCartCount((count) => count + 1)
    setToast(`Đã thêm "${product.name}" vào giỏ hàng`)
    window.clearTimeout(addToCart.timeout)
    addToCart.timeout = window.setTimeout(() => setToast(''), 1800)
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--separate">Vào cửa hàng trên ứng dụng TrungLee</li>
            <li className="header__navbar-item">Kết nối</li>
          </ul>
          <ul className="header__navbar-list">
            <li className="header__navbar-item"><a href="#" className="header__navbar-item-link">Thông báo</a></li>
            <li className="header__navbar-item"><a href="#" className="header__navbar-item-link">Hỗ trợ</a></li>
            <li className="header__navbar-item header__navbar-item--strong"><a href="#" className="header__navbar-item-link header__navbar-item-link--button">Đăng nhập</a></li>
            <li className="header__navbar-item header__navbar-item--strong"><a href="#" className="header__navbar-item-link header__navbar-item-link--button">Đăng ký</a></li>
          </ul>
        </nav>

        <div className="header__main">
          <a href="#" className="header__logo">Shopee</a>

          <form className="header__search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="header__search-input"
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="header__search-btn" type="submit">Tìm</button>
          </form>

          <div className="header__actions">
            <div className="header__cart-wrapper">
              <a href="#" className="header__cart">🛒</a>
              <span className="header__cart-badge">{cartCount}</span>
            </div>
            <a href="#" className="header__login">Đăng nhập</a>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="category-list">
          {['📱 Điện thoại','💻 Laptop','🎧 Tai nghe','🧥 Thời trang','🛋️ Nhà cửa','🧴 Làm đẹp','🧸 Đồ chơi','🛒 Mua sắm'].map((item) => (
            <div key={item} className="category-item">{item}</div>
          ))}
        </section>

        <section className="hero-banner">
          <div className="hero-banner__main">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" alt="Shopee banner" />
            <div className="hero-banner__content">
              <p className="hero-banner__tag">Mua sắm thông minh</p>
              <h1>Khám phá ưu đãi mới mỗi ngày</h1>
              <a href="#" className="hero-banner__button">Mua ngay</a>
            </div>
          </div>
          <div className="hero-banner__side">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80" alt="Sale 1" />
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80" alt="Sale 2" />
          </div>
        </section>

        <section className="promo-strip">
          <span>🚚 Miễn phí vận chuyển đơn từ 99k</span>
          <span>🎁 Quà tặng hấp dẫn mỗi ngày</span>
          <span>💳 Thanh toán an toàn</span>
        </section>

        <section className="trust-strip">
          <div className="trust-item">✅ Hàng chính hãng</div>
          <div className="trust-item">⚡ Giao hàng siêu tốc</div>
          <div className="trust-item">🔒 Bảo mật thanh toán</div>
        </section>

        <section className="flash-sale">
          <div className="flash-sale__header">
            <h2>⚡ Flash Sale</h2>
            <span>Giảm giá sốc trong hôm nay</span>
          </div>
          <div className="flash-sale__list">
            {['₫199.000','₫349.000','₫89.000'].map((price, index) => (
              <div key={price} className="flash-sale__item">
                <div className="flash-sale__price">{price}</div>
                <div className="flash-sale__label">{index === 0 ? 'Vừa mở bán' : index === 1 ? 'Hot deal' : 'Giảm sâu'}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="product-section">
          <div className="product-section__header">
            <h2 className="product-section__title">Gợi ý hôm nay</h2>
            <a href="#" className="product-section__link">Xem tất cả</a>
          </div>

          <div className="product-list">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-item">
                <div className={`product-item__img ${product.bgClass}`}>
                  <span className="product-item__badge">{product.badge}</span>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-item__info">
                  <h3 className="product-item__name">{product.name}</h3>
                  <div className="product-item__price">₫{product.price}</div>
                  <div className="product-item__meta">
                    <span className="product-item__rating">★ {product.rating}</span>
                    <span>Đã bán {product.sold}</span>
                  </div>
                  <button className="product-item__btn-add" onClick={() => addToCart(product)}>
                    Thêm vào giỏ
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__content">
          <p>© 2026 Shopee Clone</p>
          <p>Chất lượng hàng đầu - Giá tốt mỗi ngày</p>
        </div>
      </footer>

      {toast && <div className="toast-message show">{toast}</div>}
    </div>
  )
}

export default App
