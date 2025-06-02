import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // creating mailto link
    const subject = encodeURIComponent("Collaboration Request");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    const mailtoLink = `mailto:adedijoakinloluwa@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    alert(
      "Email client opened! Your default email application should now be open with the message pre-filled."
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setErrors({});
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:max-w-3xl mx-auto p-5 bg-black-50 rounded-lg "
    >
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-black-950 text-sm font-medium mb-2 tracking-wide"
          >
            FIRST NAME*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="John"
            className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent text-black-950 placeholder-black-500 focus:outline-none focus:border-black-950 transition-colors ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-black-950 text-sm font-medium mb-2 tracking-wide"
          >
            LAST NAME*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
            className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent text-black-950 placeholder-black-500  focus:outline-none focus:border-black-950 transition-colors ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-black-950 text-sm font-medium mb-2 tracking-wide"
          >
            EMAIL*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@mail.com"
            className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent text-black-950 placeholder-black-500 focus:outline-none focus:border-black-950 transition-colors ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-black-950 text-sm font-medium mb-2 tracking-wide"
          >
            MESSAGE*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project..."
            rows={4}
            className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent text-black-950 placeholder-black-500  focus:outline-none focus:border-black-950 transition-colors resize-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-2">{errors.message}</p>
          )}
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-5 pt-8 w-full">
          <button
            type="submit"
            className="md:w-full bg-black-950 text-black-50 px-6 py-4 text-sm font-medium tracking-wide hover:bg-yellow-300 hover:text-black-950 transition-colors text-center cursor-pointer"
          >
            SEND
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="md:w-full border border-black-300 text-black px-6 py-4 text-sm font-medium tracking-wide hover:bg-black-300 transition-colors cursor-pointer"
          >
            RESET
          </button>
          <Link
            to="/"
            className="md:w-full border border-black-300 text-black px-6 py-4 text-sm font-medium tracking-wide hover:bg-black-300 transition-colors text-center cursor-pointer"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
