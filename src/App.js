import React from 'react';
import './App.css';

function App() {
  const receipt = {
    storeName: "AUPP Cafe & Mart",
    date: "2026-10-21",
    receiptNo: "#1024",
    items: [
      { id: 1, name: "Iced Latte", quantity: 2, price: 3.50 },
      { id: 2, name: "Ham & Cheese Sandwich", quantity: 1, price: 4.00 },
      { id: 3, name: "Bottled Water", quantity: 1, price: 1.00 }
    ]
  };

  const subtotal = receipt.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = subtotal * 0.10; // 10% tax
  const total = subtotal + tax;

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', fontFamily: 'monospace', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 5px 0' }}>{receipt.storeName}</h2>
      <p style={{ textAlign: 'center', margin: '0', fontSize: '12px', color: '#666' }}>Receipt {receipt.receiptNo} | {receipt.date}</p>
      <hr style={{ borderTop: '1px dashed #bbb', margin: '15px 0' }} />
      
      <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <th style={{ textAlign: 'left', paddingBottom: '8px' }}>Item</th>
            <th style={{ textAlign: 'center', paddingBottom: '8px' }}>Qty</th>
            <th style={{ textAlign: 'right', paddingBottom: '8px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {receipt.items.map(item => (
            <tr key={item.id}>
              <td style={{ padding: '6px 0' }}>{item.name}</td>
              <td style={{ textAlign: 'center' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right' }}>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr style={{ borderTop: '1px dashed #bbb', margin: '15px 0' }} />

      <div style={{ fontSize: '14px' }}>
        <p style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </p>
        <p style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </p>
        <p style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0', fontWeight: 'bold', fontSize: '16px' }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
      </div>

      <hr style={{ borderTop: '1px dashed #bbb', margin: '15px 0' }} />
      <p style={{ textAlign: 'center', fontSize: '12px', margin: '0', color: '#777' }}>Thank you for your visit!</p>
    </div>
  );
}

export default App;