function TicketSelection({ formData, updateFormData, onNext }) {
    const handleSubmit = (e) => {
      e.preventDefault()
      if (formData.ticketType) {
        onNext()
      }
    }
  
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="title">Ticket Selection</h1>
          <span className="step">Step 1/3</span>
        </div>
  
        <div className="event-card">
          <h2 className="event-title">Techember Fest '25</h2>
          <p className="event-description">
            Join us for an unforgettable experience at Techember Fest! Secure your spot now.
          </p>
          <p className="event-details">
            <span className="location-pin">📍</span> 04 Rumens road, Ikoyi, Lagos || March 15, 2025 | 7:00 PM
          </p>
        </div>
  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Select Ticket Type:</label>
            <div className="ticket-types">
              {[
                { type: "REGULAR", label: "Free", access: "REGULAR ACCESS", available: "20/52" },
                { type: "VIP", label: "$150", access: "VIP ACCESS", available: "20/52" },
                { type: "VVIP", label: "$150", access: "VVIP ACCESS", available: "20/52" },
              ].map((ticket) => (
                <button
                  key={ticket.type}
                  type="button"
                  onClick={() => updateFormData({ ticketType: ticket.type })}
                  className={`ticket-option ${formData.ticketType === ticket.type ? "selected" : ""}`}
                >
                  <span className="ticket-price">{ticket.label}</span>
                  <span className="ticket-access">{ticket.access}</span>
                  <span className="ticket-available">{ticket.available}</span>
                </button>
              ))}
            </div>
          </div>
  
          <div className="form-group">
            <label className="label">Number of Tickets</label>
            <select
              value={formData.quantity}
              onChange={(e) => updateFormData({ quantity: Number(e.target.value) })}
              className="select"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
  
          <div className="button-group">
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={!formData.ticketType} className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default TicketSelection