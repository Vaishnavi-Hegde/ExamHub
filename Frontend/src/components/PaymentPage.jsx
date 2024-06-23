import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function PaymentPage() {
  return (
    <center>
    <div className="col-sm-9 p-3 ">
        <h1>Payment</h1>
        <div>
            <form onSubmit={alert("Payment Completed")}>
                <div className="mb-3">
                    <input type="text" className="form-control"  placeholder="Name" required/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control"  placeholder="Email" required/>
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Contact Number"pattern="[1-9]{1}[0-9]{9}" required/>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control"  placeholder="Payment Address" required/>
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control"  placeholder="Amount" required/>
                  </div>
                  <div class="mb-3">
                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Card Number" required/>
                  </div>
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Expriation Month" aria-label="First name" required/>
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Expriation Year" aria-label="Last name" required/>
                    </div>
                  </div>
                  <div class="mb-3">
                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="CVC" pattern="[0-9]{4}" required/>
                  </div>
                  <div id="submit_Request">
              <button type="submit" id="submit_btn">Pay</button>
            </div>
            </form>
        </div>
        </div>
        </center>
  )
}

export default PaymentPage;