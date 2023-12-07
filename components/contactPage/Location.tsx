import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126440.20196576571!2d24.804984482166464!3d60.31920734619601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207b83a3845b5%3A0xe2b7cd7632a1804f!2sVantaa%2C%20Finland!5e0!3m2!1sen!2sus!4v1701798656863!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Vantaa, Finland" />
        <MyInfo field="email" value="jose10084u@gmail.com" />
        <MyInfo field="phone" value="+13234993770" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  );
}
