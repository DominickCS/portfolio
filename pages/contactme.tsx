'use client';
import React from 'react';
import { FC } from 'react';
import styles from '/styles/contactme.module.css';
import Navbar from '/components/navbar.jsx';
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email.ts";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  
  function onSubmit(data: FormData) {
    console.log(data);
    sendEmail(data);
  }

  return(
    <div>
      <Navbar />
      <h1>Get in Touch!</h1>
      <div className={styles.contactContainer}>
  <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input name="fullName" placeholder="full name" {...register("name" , {required: true, minLength: 6})} />
      <input type='email' name="emailAddress" placeholder="email address" {...register("email", {required: true})}/>
      <textarea rows="24" cols="96" name="emailBodyInquiry" placeholder="Inquiry" {...register("message", {required: true})} />
      <input type="submit" />
  </form>
      </div>
    </div>
  );
}

export default ContactMe;
