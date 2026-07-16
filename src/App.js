import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="receipt">
        <div className="header">
          <h1>Starrya</h1>
          <p>Coffee & Pastry</p>
        </div>

        <div className="info">
          <p><strong>Receipt #</strong> 100167</p>
          <p><strong>Date</strong> July 16, 2026</p>
          <p><strong>Cashier</strong> Por-Por</p>
        </div>

        <hr />

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Iced Latte</td>
              <td>1</td>
              <td>$4.50</td>
            </tr>

            <tr>
              <td>Cheesecake</td>
              <td>1</td>
              <td>$5.00</td>
            </tr>

            <tr>
              <td>Croissant</td>
              <td>2</td>
              <td>$6.00</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <div className="summary">
          <p>
            <span>Subtotal</span>
            <span>$15.50</span>
          </p>

          <p>
            <span>Tax (10%)</span>
            <span>$1.55</span>
          </p>

          <h3>
            <span>Total</span>
            <span>$17.05</span>
          </h3>
        </div>

        <div className="footer">
          <p>Thank you for visiting!</p>
          <small>Have a wonderful day</small>
        </div>
      </div>
    </div>
  );
}

export default App;