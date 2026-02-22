// Inside SubscribeForm.jsx
export default function SubscribeForm({ theme, idPrefix }) {
  const inputId = `${idPrefix}-email-input`;
  
  return (
    <>
      <label htmlFor={inputId} className="sr-only">Email Address</label>
      <input 
        id={inputId} 
        type="email" 
        // ... rest of props
      />
    </>
  );
}