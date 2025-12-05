import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const { cartItems } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });
  const [loading, setLoading] = useState(false);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setLoading(true);
    // In a real app, you'd make an API call to update the user
    // For now, we'll just update the local state
    updateUser({
      ...user,
      ...editForm,
    });
    setIsEditing(false);
    setLoading(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#151413] text-white flex items-center justify-center">
        <div>Please log in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151413] text-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Information */}
          <div className="bg-[#272523] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Personal Information</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#f34263] hover:bg-[#cc2140] px-4 py-2 rounded text-white"
                >
                  Edit
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 bg-[#151413] border border-gray-600 rounded text-white focus:border-[#f34263] focus:outline-none"
                  />
                ) : (
                  <p className="text-white">{user.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 bg-[#151413] border border-gray-600 rounded text-white focus:border-[#f34263] focus:outline-none"
                  />
                ) : (
                  <p className="text-white">{user.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editForm.phone}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 bg-[#151413] border border-gray-600 rounded text-white focus:border-[#f34263] focus:outline-none"
                  />
                ) : (
                  <p className="text-white">{user.phone}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-[#f34263] hover:bg-[#cc2140] px-4 py-2 rounded text-white disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="bg-[#272523] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Cart Summary</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-400">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image_link || '/placeholder-image.jpg'}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-[#f34263] font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-[#f34263]">
                      ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Previous Appointments */}
        <div className="mt-8 bg-[#272523] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Previous Appointments</h2>
          {user.appointments && user.appointments.length > 0 ? (
            <div className="space-y-4">
              {user.appointments.map((appointment, index) => (
                <div key={appointment.id || index} className="bg-[#151413] p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#f34263]">{appointment.day} at {appointment.time}</h3>
                    <span className="text-sm text-gray-400">{new Date(appointment.date).toLocaleDateString()}</span>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm text-gray-300">Services:</p>
                    <ul className="list-disc list-inside text-sm text-gray-400">
                      {appointment.services.map((service, idx) => (
                        <li key={idx}>{service.name} - ${service.price}</li>
                      ))}
                    </ul>
                  </div>
                  {appointment.specialOrder && (
                    <p className="text-sm text-gray-300 mb-2">Special Order: {appointment.specialOrder}</p>
                  )}
                  <p className="text-[#f34263] font-semibold">Total: ${appointment.total}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No previous appointments found.</p>
          )}
        </div>

        {/* Purchased Products */}
        <div className="mt-8 bg-[#272523] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Purchased Products</h2>
          {user.purchases && user.purchases.length > 0 ? (
            <div className="space-y-4">
              {user.purchases.map((purchase, index) => (
                <div key={purchase.id || index} className="bg-[#151413] p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#f34263]">Order #{index + 1}</h3>
                    <span className="text-sm text-gray-400">{new Date(purchase.date).toLocaleDateString()}</span>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm text-gray-300">Items:</p>
                    <ul className="list-disc list-inside text-sm text-gray-400">
                      {purchase.items.map((item, idx) => (
                        <li key={idx}>{item.name} (x{item.quantity}) - ${item.price}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    <p>Shipping: ${purchase.shipping}</p>
                    <p>Tax: ${purchase.tax.toFixed(2)}</p>
                  </div>
                  <p className="text-[#f34263] font-semibold">Total: ${purchase.total.toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No purchased products found.</p>
          )}
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
