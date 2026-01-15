import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "9828158896";
  const whatsappNumber = "919828158896";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your products. Please share more details.");

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
