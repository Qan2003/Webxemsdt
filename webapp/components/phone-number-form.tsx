"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { analyzePhoneNumber } from "@/lib/phone-analyzer"

export function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber.length === 10) {
      const analysisResults = analyzePhoneNumber(phoneNumber)
      setResults(analysisResults)
      // Dispatch an event to notify the results table
      const event = new CustomEvent("phoneAnalyzed", { detail: analysisResults })
      document.dispatchEvent(event)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
          className="w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
          pattern="[0-9]{10}"
          maxLength={10}
          minLength={10}
          inputMode="numeric"
          required
        />
      </div>
      <Button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-medium px-8 text-lg shadow-md"
      >
        Xem
      </Button>
    </form>
  )
}
