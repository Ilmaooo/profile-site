function Contact({ email, phoneNumber }) {
  return (
    <div>
      <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl mt-20 tracking-wide mb-5 font-medium font-[montserrat]">
        Contact
      </h2>
      <h2 className="text-[#484545] font-medium">{email}</h2>
      <h2 className="text-[#484545] font-medium">{phoneNumber}</h2>
    </div>
  );
}

export default Contact;
