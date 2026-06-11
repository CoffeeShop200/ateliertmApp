import React from "react";

const logos = [
  {
    name: "Visa",
    content: (
      <svg width="50" height="16" viewBox="0 0 50 16" fill="none">
        <text
          x="0" y="13"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#1A1F71"
          letterSpacing="1"
        >
          VISA
        </text>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    content: (
      <svg width="40" height="26" viewBox="0 0 40 26">
        <circle cx="15" cy="13" r="12" fill="#EB001B" />
        <circle cx="25" cy="13" r="12" fill="#F79E1B" />
        <path d="M20 4.8a12 12 0 0 1 0 16.4A12 12 0 0 1 20 4.8z" fill="#FF5F00" />
      </svg>
    ),
  },
  {
    name: "PayPal",
    content: (
      <svg width="68" height="18" viewBox="0 0 68 18" fill="none">
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#003087">Pay</text>
        <text x="22" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#009cde">Pal</text>
      </svg>
    ),
  },
  {
    name: "American Express",
    content: (
      <svg width="46" height="18" viewBox="0 0 46 18" fill="none">
        <rect width="46" height="18" rx="3" fill="#2E77BC" />
        <text x="4" y="8" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="700" fill="white" letterSpacing="0.2">AMERICAN</text>
        <text x="4" y="15" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="700" fill="white" letterSpacing="0.2">EXPRESS</text>
      </svg>
    ),
  },
  {
    name: "Apple Pay",
    content: (
      <svg width="52" height="22" viewBox="0 0 52 22" fill="none">
        <path
          d="M10.2 4.5c.7-.9.7-2.1.5-2.8-.8.1-1.8.6-2.4 1.4-.5.7-.8 1.8-.6 2.7.8 0 1.8-.5 2.5-1.3z"
          fill="currentColor"
        />
        <path
          d="M10.7 5.9c-1.4-.1-2.6.8-3.2.8-.7 0-1.7-.7-2.8-.7C3.2 6 1.8 7 1 8.5c-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2 0 1.6-.8 3-.8s1.8.8 3 .7c1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.7 0-2.3 1.9-3.4 2-3.5-.7-1.7-2.2-2-2.2-2z"
          fill="currentColor"
        />
        <text x="19" y="15" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="currentColor">Pay</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    content: (
      <svg width="42" height="18" viewBox="0 0 42 18" fill="none">
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#6772E5">stripe</text>
      </svg>
    ),
  },
];

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "11px",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    margin: 0,
  },
  strip: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "8px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    border: "0.5px solid #d0d0d0",
    borderRadius: "8px",
    padding: "10px 16px",
    height: "48px",
    cursor: "default",
    transition: "border-color 0.15s",
  },
  secure: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "11px",
    color: "#888",
    marginTop: "2px",
  },
};

export default function PaymentLogos({ showLabel = true, showSecure = true }) {
  return (
    <div style={styles.wrapper}>
      {showLabel && <p style={styles.label}>Paiements acceptés</p>}
      <div style={styles.strip}>
        {logos.map(({ name, content }) => (
          <div
            key={name}
            style={styles.card}
            title={name}
            aria-label={name}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#aaa")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#d0d0d0")}
          >
            {content}
          </div>
        ))}
      </div>
      {showSecure && (
        <div style={styles.secure}>
          <svg width="12" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Paiements 100% sécurisés · SSL chiffré
        </div>
      )}
    </div>
  );
}
