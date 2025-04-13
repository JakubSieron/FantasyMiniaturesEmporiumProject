import React from 'react';
import { useState } from 'react';
import './Contact.scss';

const europeanCountries = [
  'Austria', 'Belgium', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Finland',
  'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania',
  'Luxembourg', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania',
  'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'
];

const dialingCodes = {
  AT: '+43',
  BE: '+32',
  HR: '+385',
  CZ: '+420',
  DK: '+45',
  EE: '+372',
  FI: '+358',
  FR: '+33',
  DE: '+49',
  GR: '+30',
  HU: '+36',
  IE: '+353',
  IT: '+39',
  LV: '+371',
  LT: '+370',
  LU: '+352',
  NL: '+31',
  NO: '+47',
  PL: '+48',
  PT: '+351',
  RO: '+40',
  SK: '+421',
  SI: '+386',
  ES: '+34',
  SE: '+46',
  CH: '+41',
  GB: '+44',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dialingCode: '+48', // default
    country: 'Poland',  // default
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{6,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number (digits only)';
    }

    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);

     
      const fullPhone = `${formData.dialingCode} ${formData.phone}`;
      const fullData = { ...formData, phone: fullPhone };

      const saved = JSON.parse(localStorage.getItem('contactMessages')) || [];
      localStorage.setItem('contactMessages', JSON.stringify([...saved, fullData])); 

      console.log('Submitted Form:', fullData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        dialingCode: '+48',
        country: 'Poland',
        address: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
           Phone Number:
             <div className="phone-input-group">
             <select name="dialingCode" value={formData.dialingCode} onChange={handleChange}>
             {Object.entries(dialingCodes).map(([code, dial]) => (
             <option key={code} value={dial}>{dial}</option>
              ))}
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="123456789" />
            </div>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>


        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange}>
            {europeanCountries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </label>

        <label>
          Shipping Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>

        <label>
          Message:
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Send Message</button>
        {submitted && <p className="success">Your message has been sent!</p>}
      </form>
    </div>
  );
}


