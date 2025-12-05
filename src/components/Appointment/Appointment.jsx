import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Appointment = () => {
  const { user, addAppointment } = useAuth();

  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const services = [
    { id: 1, name: "Hair Cut", price: 50 },
    { id: 2, name: "Hair Wash", price: 30 },
    { id: 3, name: "Hair Styling", price: 40 },
    { id: 4, name: "Facial", price: 60 },
    { id: 5, name: "Manicure", price: 25 },
    { id: 6, name: "Pedicure", price: 35 }
  ];

  const [bookedSlots, setBookedSlots] = useState({
    Saturday: ["10:00 AM", "2:00 PM"],
    Sunday: ["11:00 AM"],
    Monday: [],
    Tuesday: ["1:00 PM", "3:00 PM"],
    Wednesday: ["9:00 AM"],
    Thursday: ["4:00 PM"]
  });

  const [selectedDay, setSelectedDay] = useState("Saturday");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [specialOrder, setSpecialOrder] = useState("");
  const [customerName, setCustomerName] = useState(user?.name || "");
  const [step, setStep] = useState(1);
  const [confirmation, setConfirmation] = useState("");

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, id) => {
      const service = services.find(s => s.id === id);
      return total + service.price;
    }, 0);
  };

  const handleBook = () => {
    if (bookedSlots[selectedDay].includes(selectedTime)) return;

    setBookedSlots(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], selectedTime]
    }));

    // Save appointment to user data
    const appointment = {
      day: selectedDay,
      time: selectedTime,
      services: selectedServices.map(id => services.find(s => s.id === id)),
      specialOrder,
      total: calculateTotal(),
      date: new Date().toISOString()
    };
    addAppointment(appointment);

    setConfirmation(`Appointment booked for ${customerName} on ${selectedDay} at ${selectedTime}`);
    setTimeout(() => setConfirmation(""), 3000);
    setStep(1);
    setSelectedTime("");
    setSelectedServices([]);
    setSpecialOrder("");
    setCustomerName(user?.name || "");
  };

  return (
    <div className="min-h-screen bg-[#151413] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Makeup Appointment</h1>
        <div className="border-b-2 border-[#f34263] w-1/6 mx-auto mb-8"></div>

        {confirmation && (
          <div className="bg-[#f34263] text-white p-4 rounded mb-6 text-center">
            {confirmation}
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">Select Day</h2>
              <div className="space-y-2">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`w-full p-3 rounded ${
                      selectedDay === day ? "bg-[#f34263]" : "bg-[#272523] hover:bg-[#f34263]"
                    } transition-colors`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Available Times for {selectedDay}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {times.map(time => {
                  const isBooked = bookedSlots[selectedDay].includes(time);
                  return (
                    <div
                      key={time}
                      className={`p-4 rounded border ${
                        isBooked
                          ? "bg-gray-600 border-gray-500 cursor-not-allowed"
                          : "bg-[#272523] border-[#f34263] hover:bg-[#f34263] cursor-pointer"
                      } transition-colors`}
                      onClick={() => !isBooked && handleTimeSelect(time)}
                    >
                      <div className="text-center">
                        <p className="font-medium">{time}</p>
                        <p className={`text-sm mt-1 ${isBooked ? "text-red-400" : "text-green-400"}`}>
                          {isBooked ? "Booked" : "Available"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select Services for {selectedDay} at {selectedTime}</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Customer Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3 bg-[#272523] border border-[#f34263] rounded text-white"
                placeholder="Enter your name..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {services.map(service => (
                <div
                  key={service.id}
                  className={`p-4 rounded border cursor-pointer ${
                    selectedServices.includes(service.id)
                      ? "bg-[#f34263] border-[#f34263]"
                      : "bg-[#272523] border-[#f34263] hover:bg-[#f34263]"
                  } transition-colors`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="text-center">
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm mt-1">${service.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Special Order Comments</label>
              <textarea
                value={specialOrder}
                onChange={(e) => setSpecialOrder(e.target.value)}
                className="w-full p-3 bg-[#272523] border border-[#f34263] rounded text-white"
                rows="4"
                placeholder="Enter any special requests..."
              />
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(3)}
                className="bg-[#f34263] hover:bg-[#cc2140] px-6 py-3 rounded transition-all mr-4"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => setStep(1)}
                className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded transition-all"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <div className="bg-[#272523] p-6 rounded mb-6">
              <p><strong>Name:</strong> {customerName}</p>
              <p><strong>Day:</strong> {selectedDay}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Services:</strong></p>
              <ul className="list-disc list-inside mb-4">
                {selectedServices.map(id => {
                  const service = services.find(s => s.id === id);
                  return <li key={id}>{service.name} - ${service.price}</li>;
                })}
              </ul>
              {specialOrder && (
                <p><strong>Special Order:</strong> {specialOrder}</p>
              )}
              <p className="text-xl font-bold mt-4">Total: ${calculateTotal()}</p>
            </div>

            <div className="text-center">
              <button
                onClick={handleBook}
                className="bg-[#f34263] hover:bg-[#cc2140] px-6 py-3 rounded transition-all mr-4"
              >
                Confirm Booking
              </button>
              <button
                onClick={() => setStep(2)}
                className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded transition-all"
              >
                Back
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link to="/layout/home">
            <button className="bg-[#f34263] hover:bg-[#cc2140] px-6 py-3 rounded transition-all">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
