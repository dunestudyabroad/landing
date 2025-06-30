"use client";
import { useEffect, useMemo } from "react";
import Script from "next/script";

declare global {
  interface Window {
    CreateWhatsappChatWidget?: (options: Record<string, unknown>) => void;
  }
}

const WhatsappChatWidget = () => {
  const options = useMemo(
    () => ({
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#1FAD33",
        ctaText: "",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "Wati",
        brandSubTitle: "undefined",
        brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have a question about ",
        backgroundColor: "#c98870",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "+918792358999",
      },
    }),
    []
  );

  useEffect(() => {
    const applyCustomStyles = () => {
      const button = document.querySelector(".wa-widget-send-button");
      const chatBox = document.querySelector(".wa-chat-box");

      if (button instanceof HTMLElement) {
        Object.assign(button.style, {
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "black",
          zIndex: "9999",
        });
      }

      if (chatBox instanceof HTMLElement) {
        Object.assign(chatBox.style, {
          position: "fixed",
          bottom: "80px",
          right: "35px",
          height: "30vh",
          zIndex: "9999",
        });
      }
    };

    const initWidget = () => {
      if (window.CreateWhatsappChatWidget) {
        window.CreateWhatsappChatWidget(options);

        const observer = new MutationObserver(() => {
          applyCustomStyles();
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // Fallback timeout just in case
        setTimeout(applyCustomStyles, 2000);
      }
    };

    setTimeout(initWidget, 1000);
  }, [options]);

  return (
    <>
      <style jsx global>{`
        .wa-widget-send-button {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          background-color: black !important;
          z-index: 9999 !important;
        }

        .wa-chat-box {
          position: fixed !important;
          bottom: 80px !important;
          right: 35px !important;
          height: 30vh !important;
          justify-content: flex-start !important;
          z-index: 9999 !important;
        }

        .wa-chat-box::before,
        .wa-chat-box::after {
          border-width: 0px !important;
        }
      `}</style>

      <Script
        src="https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?50756"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
            window.CreateWhatsappChatWidget(options);
          }
        }}
      />
    </>
  );
};

export default WhatsappChatWidget;
