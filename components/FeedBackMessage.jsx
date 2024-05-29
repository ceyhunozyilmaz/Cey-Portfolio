// FeedbackMessage.js
import React, { useState, useEffect } from "react";

const FeedbackMessage = ({ success, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (success !== null) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5 saniye sonra mesajı gizle
      return () => clearTimeout(timer);
    }
  }, [success]); // Burada success prop'unu izle

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-${
        success ? "green" : "red"
      }-500 text-white rounded-md`}
    >
      <p>
        {success
          ? "Tebrikler! Mesajınız başarıyla gönderildi."
          : "Üzgünüz! Mesajınız gönderilemedi."}
      </p>
      <button className="ml-2 text-white" onClick={onClose}>
        Kapat
      </button>
    </div>
  );
};

export default FeedbackMessage;
