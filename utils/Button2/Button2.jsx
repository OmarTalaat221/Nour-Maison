"use client"
import React from 'react'
import './style.css'
import Link from 'next/link'
const Button2 = () => {
  return (
    <div className="btn-container">
    <div className="btn-drawer transition-top">Discover What </div>
    <div className="btn-drawer transition-bottom">Makes Us No.1</div>
    <Link href="/booking">
    <button className="btn">
      <span className="btn-text">Book Now</span>
    </button>
    </Link>
    <svg
      className="btn-corner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 1 32 32"
    >
      <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
    </svg>
    <svg
      className="btn-corner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 1 32 32"
    >
      <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
    </svg>
    <svg
      className="btn-corner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 1 32 32"
    >
      <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
    </svg>
    <svg
      className="btn-corner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 1 32 32"
    >
      <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
    </svg>
  </div>
  
  )
}

export default Button2
