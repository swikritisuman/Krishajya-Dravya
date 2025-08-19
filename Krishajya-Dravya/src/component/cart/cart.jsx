import React, { useState, useEffect } from "react";
import Nav from "../all/nav";
import Footer from "../all/footer";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="14" fill="#64748b">Image</text>
    </svg>`
  );

export default function Cart() {
  
  const [cart, setCart] = useState([
    {
      name: "Tomato(500g)",
      price: 25.0,
      qty: 1,
      sku: "14169",
      img: "https://www.fervalle.com/wp-content/uploads/2022/07/580b57fcd9996e24bc43c23b-1024x982.png",
    },
    {
      name: "Potato(1Kg)",
      price: 20.0,
      qty: 1,
      sku: "191990",
      img: "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg",
    },
    {
      name: "Onion(1Kg)",
      price: 35.0,
      qty: 1,
      sku: "41301053",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZT9UOP2UE-VQ9KNKJwMCdkUEaTp-GDKuAg&s",
    },
  ]);

  // --- Address State ---
  const ADDR_KEY = "savedAddresses";
  const ADDR_SELECTED_KEY = "selectedAddressIndex";
  const [addresses, setAddresses] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [editInput, setEditInput] = useState("");
  const [newAddress, setNewAddress] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(ADDR_KEY);
    const initial =
      stored !== null
        ? JSON.parse(stored)
        : ["West Bengal, PIN: 741101", "Maharashtra, PIN: 400001"];
    setAddresses(initial);

    const sel = parseInt(localStorage.getItem(ADDR_SELECTED_KEY) ?? "0", 10);
    setSelectedIdx(Number.isNaN(sel) ? 0 : sel);
  }, []);

  useEffect(() => {
    localStorage.setItem(ADDR_KEY, JSON.stringify(addresses));
    localStorage.setItem(ADDR_SELECTED_KEY, selectedIdx.toString());
    if (addresses[selectedIdx]) {
      setEditInput(addresses[selectedIdx]);
    }
  }, [addresses, selectedIdx]);

  // --- Coupon/Price State ---
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const beforeTax = Math.max(0, subtotal + shipping - discount);
  const gst = beforeTax * 0.18;
  const total = beforeTax + gst;

  const currency = (n) => `₹${n.toFixed(2)}`;

  // --- Cart actions ---
  const updateQty = (i, val) => {
    const newCart = [...cart];
    newCart[i].qty = Math.max(1, val);
    setCart(newCart);
  };
  const removeItem = (i) => {
    const newCart = cart.filter((_, idx) => idx !== i);
    setCart(newCart);
  };
  const addItem = (e) => {
    e.preventDefault();
    const name = e.target.addName.value.trim();
    const img = e.target.addImg.value.trim();
    const price = parseFloat(e.target.addPrice.value);
    if (name && price > 0) {
      setCart([
        ...cart,
        {
          name,
          img: img || PLACEHOLDER,
          price,
          qty: 1,
          sku: Math.floor(Math.random() * 100000).toString(),
        },
      ]);
      e.target.reset();
    }
  };

  // --- Address actions ---
  const handleAddAddress = () => {
    if (!newAddress.trim()) return;
    setAddresses([...addresses, newAddress.trim()]);
    setSelectedIdx(addresses.length);
    setNewAddress("");
  };
  const handleUpdateAddress = () => {
    if (!editInput.trim()) return;
    const updated = [...addresses];
    updated[selectedIdx] = editInput.trim();
    setAddresses(updated);
  };
  const handleDeleteAddress = () => {
    const updated = addresses.filter((_, i) => i !== selectedIdx);
    setAddresses(updated);
    setSelectedIdx(updated.length ? 0 : -1);
  };

  // --- Coupon ---
  const applyCoupon = () => {
    if (couponApplied) {
      alert("Coupon already applied");
      return;
    }
    const code = document.getElementById("couponInput").value.trim();
    if (code.toLowerCase() === "read@10") {
      const base = subtotal + shipping;
      setDiscount(base * 0.1);
      setCouponApplied(true);
      alert("Coupon applied! You saved 10%");
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <>
    <Nav/>
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Your Cart</h1>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart List */}
        <section className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {/* Header */}
            <div className="px-4 py-3 border-b text-sm text-gray-600 flex justify-between">
              <span>{cart.length} Items</span>
              <a href="#" className="underline">
                Continue Shopping
              </a>
            </div>

            {/* Items */}
            {cart.map((item, idx) => (
              <div key={item.sku} className="flex items-center gap-4 p-4 border-b">
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={item.img || PLACEHOLDER}
                  onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
                />
                <div className="flex-1">
                  <p className="font-semibold leading-tight">{item.name}</p>
                  <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  <button
                    className="text-xs text-gray-500 underline mt-1"
                    onClick={() => removeItem(idx)}
                  >
                    Remove
                  </button>
                </div>
                <div className="text-right w-48">
                  <p className="text-sm">
                    Each <span className="font-medium">{currency(item.price)}</span>
                  </p>
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <label className="text-sm text-gray-600">Qty</label>
                    <input
                      type="number"
                      min="1"
                      className="qty-input border rounded w-16 px-2 py-1 text-right"
                      value={item.qty}
                      onChange={(e) => updateQty(idx, parseInt(e.target.value || "1", 10))}
                    />
                  </div>
                  <p className="mt-2 font-semibold">{currency(item.price * item.qty)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Item */}
          <div className="bg-white rounded-lg shadow mt-6 p-4">
            <h2 className="font-semibold mb-3">Add a New Item</h2>
            <form id="addForm" className="grid sm:grid-cols-4 gap-3" onSubmit={addItem}>
              <input
                name="addName"
                type="text"
                placeholder="Item Name"
                className="border rounded px-3 py-2 text-sm sm:col-span-1"
                required
              />
              <input
                name="addImg"
                type="url"
                placeholder="Image URL"
                className="border rounded px-3 py-2 text-sm sm:col-span-1"
              />
              <input
                name="addPrice"
                type="number"
                step="0.01"
                placeholder="Price"
                className="border rounded px-3 py-2 text-sm sm:col-span-1"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white rounded px-4 py-2 text-sm sm:col-span-1"
              >
                Add Item
              </button>
            </form>
          </div>
        </section>

        {/* Summary */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-5 sticky top-6">
            {/* Promo Code */}
            <div>
              <label className="text-sm font-medium text-gray-800">Promo Code</label>
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  id="couponInput"
                  placeholder="Enter code"
                  className="flex-1 border rounded px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="px-4 py-2 rounded bg-black text-white text-sm"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Promotions */}
            <div className="mt-5 border-t pt-4 text-sm">
              <p className="font-semibold mb-1">Promotions</p>
              <div className="flex justify-between">
                <span>Free Shipping on Orders ₹999+</span>
                {shipping === 0 && <span className="text-green-600">-₹99</span>}
              </div>
            </div>

            {/* Price Lines */}
            <div className="mt-5 border-t pt-4 space-y-2 text-gray-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{currency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{currency(shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-{currency(discount).slice(1)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>{currency(total)}</span>
              </div>
              <p className="text-xs text-gray-500">incl. GST (18%)</p>
            </div>

            {/* Address */}
            <div className="mt-6 border-t pt-4">
              <label className="text-sm font-semibold text-gray-700">Delivery Address</label>
              <select
                className="mt-1 block w-full border rounded px-2 py-2 text-sm"
                value={selectedIdx}
                onChange={(e) => setSelectedIdx(parseInt(e.target.value))}
              >
                {addresses.map((addr, i) => (
                  <option key={i} value={i}>
                    {addr}
                  </option>
                ))}
              </select>

              <input
                type="text"
                className="mt-2 w-full border px-2 py-2 rounded text-sm"
                placeholder="Edit selected address"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <div className="flex justify-between mt-2 gap-2">
                <button
                  type="button"
                  onClick={handleUpdateAddress}
                  className="flex-1 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAddress}
                  className="flex-1 bg-red-600 text-white text-sm px-3 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add new address"
                  className="w-full border px-2 py-2 rounded text-sm"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddAddress}
                  className="mt-2 w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700"
                >
                  Add New Address
                </button>
              </div>
            </div>

            {/* Checkout */}
            <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded">
              CHECKOUT
            </button>
          </div>
        </aside>
      </main>
    </div>
    <Footer/>
    </>
    
  );
}
