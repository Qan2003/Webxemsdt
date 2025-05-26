"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { analyzePhoneNumber } from "@/lib/phone-analyzer"

export function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState("0938399968")
  const [results, setResults] = useState<any[]>([])

  const handleSubmit = (e: React.FormEvent) => {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="w-full">
        <Input
          type="text"
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border-slate-200 focus:border-slate-400 focus:ring-slate-300 text-base sm:text-lg h-12 sm:h-14"
          pattern="[0-9]{10}"
          maxLength={10}
          minLength={10}
          inputMode="numeric"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-base sm:text-lg shadow-sm transition-colors h-12 sm:h-14"
      >
        Phân Tích
      </Button>
    </form>
  )
}
