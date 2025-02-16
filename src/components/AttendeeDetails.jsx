"use client"

import { useState } from "react"

function AttendeeDetails({ formData, updateFormData, onNext, onBack }) {
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.avatarUrl.trim()) {
      newErrors.avatarUrl = "Profile photo URL is required"
    } else if (!formData.avatarUrl.startsWith("http")) {
      newErrors.avatarUrl = "Please enter a valid image URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="title">Attendee Details</h1>
        <span className="step">Step 2/3</span>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Upload Profile Photo</label>
          <div className="upload-area">
            <div className="preview-container">
              {formData.avatarUrl ? (
                <img src={formData.avatarUrl || "/placeholder.svg"} alt="Profile preview" className="preview-image" />
              ) : (
                <div className="upload-placeholder">
                  <span className="upload-icon">☁️</span>
                  <span className="upload-text">Drag & drop or click to upload</span>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Or enter image URL"
              value={formData.avatarUrl}
              onChange={(e) => updateFormData({ avatarUrl: e.target.value })}
              className="input"
            />
            {errors.avatarUrl && <span className="error">{errors.avatarUrl}</span>}
          </div>
        </div>

        <div className="form-group">
          <label className="label">Enter your name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className="input"
            placeholder="Full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label className="label">Enter your email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="input"
            placeholder="email@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="label">Special request?</label>
          <textarea
            value={formData.specialRequest}
            onChange={(e) => updateFormData({ specialRequest: e.target.value })}
            className="textarea"
            placeholder="Any special requirements or requests?"
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={onBack} className="btn btn-secondary">
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  )
}

export default AttendeeDetails