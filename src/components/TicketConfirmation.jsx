function TicketConfirmation({ formData, onBookAnother }) {
    return (
      <div className="card">
        <div className="confirmation-header">
          <h1 className="confirmation-title">Your Ticket is Booked!</h1>
          <p className="confirmation-subtitle">
            Check your email for a copy or you can <span className="highlight">download</span>
          </p>
        </div>
  
        <div className="ticket">
          <div className="ticket-header">
            <h2 className="ticket-title">Techember Fest '25</h2>
            <div className="ticket-details">
              <span>📍 04 Rumens road, Ikoyi, Lagos</span>
              <span className="highlight">March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
  
          <div className="ticket-content">
            <div className="ticket-profile">
              <img src={formData.avatarUrl || "/placeholder.svg"} alt="Profile" className="ticket-avatar" />
            </div>
            <div className="ticket-info">
              <div className="info-group">
                <label className="info-label">Full Name</label>
                <span className="info-value">{formData.fullName}</span>
              </div>
              <div className="info-group">
                <label className="info-label">Email</label>
                <span className="info-value">{formData.email}</span>
              </div>
              <div className="info-group">
                <label className="info-label">Ticket Type</label>
                <span className="info-value">{formData.ticketType}</span>
              </div>
              <div className="info-group">
                <label className="info-label">Quantity</label>
                <span className="info-value">{formData.quantity}</span>
              </div>
            </div>
          </div>
  
          {formData.specialRequest && (
            <div className="special-request">
              <label className="info-label">Special Request</label>
              <p className="request-text">{formData.specialRequest}</p>
            </div>
          )}
  
          <div className="ticket-footer">
            <div className="barcode">
              <svg className="barcode-svg" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="30" fill="white" />
                <rect x="10" y="5" width="2" height="20" fill="black" />
                <rect x="15" y="5" width="1" height="20" fill="black" />
                <rect x="20" y="5" width="3" height="20" fill="black" />
                <rect x="25" y="5" width="2" height="20" fill="black" />
                <rect x="30" y="5" width="1" height="20" fill="black" />
                <rect x="35" y="5" width="3" height="20" fill="black" />
              </svg>
              <span className="sr-only">Ticket barcode</span>
            </div>
          </div>
        </div>
  
        <div className="button-group">
          <button onClick={onBookAnother} className="btn btn-secondary">
            Book Another Ticket
          </button>
          <button className="btn btn-primary">Download Ticket</button>
        </div>
      </div>
    )
  }
  
  export default TicketConfirmation