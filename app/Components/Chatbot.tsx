// "use client";

// import { useState } from "react";
// import { MessageSquare } from "lucide-react";

// export default function Chatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { user: "You", text: input }]);
//     setInput("");

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });
//       const data = await res.json();
//       setMessages((prev) => [...prev, { user: "Gemini", text: data.reply }]);
//     } catch (err) {
//       setMessages((prev) => [...prev, { user: "Gemini", text: "Error: Could not get response." }]);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//       {/* Toggle button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg"
//       >
//         <MessageSquare className="w-6 h-6" />
//       </button>

//       {/* Chat window */}
//       {open && (
//         <div className="mt-2 w-80 bg-gray-900/95 rounded-xl shadow-xl flex flex-col overflow-hidden">
//           <div className="bg-gray-800 p-3 font-bold text-white text-center">Chat with TrioNex</div>
//           <div className="p-3 flex-1 flex flex-col gap-2 max-h-64 overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div key={index} className={`p-2 rounded-lg ${msg.user === "You" ? "bg-teal-500/30 self-end" : "bg-gray-700/50 self-start"}`}>
//                 <strong>{msg.user}:</strong> {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="p-3 flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none"
//               placeholder="Type a message..."
//             />
//             <button onClick={sendMessage} className="bg-teal-500 hover:bg-teal-600 text-white px-4 rounded-lg">
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { role: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
            <span>💬 Chat With TrioNex</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">✕</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto h-80 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto w-fit"
                    : "bg-gray-200 text-black self-start mr-auto w-fit"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm italic">Not Connected Yet With Server...</div>
            )}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none text-black"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}




