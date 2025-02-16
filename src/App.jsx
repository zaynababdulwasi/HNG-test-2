"use client"

import { useState, useEffect } from "react"
import TicketSelection from "./components/TicketSelection"
import AttendeeDetails from "./components/AttendeeDetails"
import TicketConfirmation from "./components/TicketConfirmation"
import "./App.css"

function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(() => {
    // Try to load saved data from localStorage
    const saved = localStorage.getItem("ticketFormData")
    return saved
      ? JSON.parse(saved)
      : {
          ticketType: "",
          quantity: 1,
          fullName: "",
          email: "",
          avatarUrl: "",
          specialRequest: "",
        }
  })

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ticketFormData", JSON.stringify(formData))
  }, [formData])

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <span className="logo-bold">B</span>
            <span className="logo-light">tiez</span>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">
              Events
            </a>
            <a href="#" className="nav-link">
              My Tickets
            </a>
            <a href="#" className="nav-link">
              About Project
            </a>
          </div>
          <button className="my-tickets-btn">
            MY TICKETS
            <span>→</span>
          </button>
        </nav>
      </header>

      <main className="main">
        <div className="container">
          {step === 1 && <TicketSelection formData={formData} updateFormData={updateFormData} onNext={nextStep} />}
          {step === 2 && (
            <AttendeeDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
          )}
          {step === 3 && <TicketConfirmation formData={formData} onBookAnother={() => setStep(1)} />}
        </div>
      </main>
    </div>
  )
}

export default App