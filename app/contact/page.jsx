"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import FeedbackMessage from "@/components/FeedBackMessage";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Formun doğruluğunu kontrol et
    if (formIsValid()) {
      emailjs
        .sendForm("service_rl7tyde", "template_syr9plo", form.current, {
          publicKey: "upndIWzfWgQfpP7N8",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSuccess(true); // Başarılı gönderim
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsSuccess(false); // Başarısız gönderim
          }
        );
    }
  };

  // Formun doğruluğunu kontrol et
  const formIsValid = () => {
    if (!formIsFilled()) {
      alert("Lütfen tüm alanları doldurun.");
      return false;
    }

    const email = form.current.email.value.trim();
    const phone = form.current.phone.value.trim();

    // E-posta adresinin geçerli olup olmadığını kontrol et
    if (!validateEmail(email)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return false;
    }

    // Telefon numarasının geçerli olup olmadığını kontrol et
    if (!validatePhone(phone)) {
      alert("Lütfen geçerli bir telefon numarası girin.");
      return false;
    }

    return true;
  };

  const formIsFilled = () => {
    const firstName = form.current.firstname.value.trim();
    const lastName = form.current.lastname.value.trim();
    const email = form.current.email.value.trim();
    const phone = form.current.phone.value.trim();
    const message = form.current.message.value.trim();

    return (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    );
  };

  // Telefon numarası doğrulama işlevi
  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[0-9]{10,}$/;
    return phoneRegex.test(phone);
  };

  // E-posta doğrulama işlevi
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+90) 537 299 20 55",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "ceyhunozylmaz14@hotmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Istanbul/Bahcelievler",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                If you would like to work together, please get in touch with us.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <Textarea
                name="message"
                placeholder="Type your message here."
                className="h-[200px]"
              />
              {/* Send Button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Geri bildirim bileşeni, sadece başarı durumunda gösterilecek */}
      {isSuccess === false && <FeedbackMessage success={false} />}
      {isSuccess === true && (
        <div className="absolute bottom-4 right-4 bg-green-500 px-4 py-2 rounded-md">
          Tebrikler! Mesajınız başarıyla gönderildi.
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
