import React, { useState, useMemo } from 'react';
// Import the DatePicker component and its styles
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// BookingForm component receives props: selected treehouse and a function to close the form
const BookingForm = ({ treehouse, onClose }) => {
  // Store the selected date range as an array: [startDate, endDate]
  const [range, setRange] = useState([null, null]);
  const [startDate, endDate] = range;

  // Get today’s date and set time to midnight to compare only the day
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  // Calculate total nights using useMemo to avoid recalculation unless dates change
  const totalNights = useMemo(() => {
    if (startDate && endDate) {
      const msInDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
      return Math.ceil((endDate - startDate) / msInDay); // Round up the difference
    }
    return 0;
  }, [startDate, endDate]);

  // Calculate total price for the booking
  const totalPrice = totalNights * treehouse.priceByNight;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Booking submitted for:\n\nCheck-in: ${startDate?.toLocaleDateString()}\nCheck-out: ${endDate?.toLocaleDateString()}`);
    onClose(); // Close the form after submitting
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      
      {/* Close button in top-right corner */}
      <button type="button" className="close-button" onClick={onClose}>
        ×
      </button>

      {/* Title with treehouse name */}
      <h3>Book {treehouse.name}</h3>

      {/* Date range picker section */}
      <div className="form-dates">
        <label>Dates:</label>
        <DatePicker
          selectsRange                      // Enables selecting a start and end date
          startDate={startDate}            // Start of range
          endDate={endDate}                // End of range
          onChange={(update) => setRange(update)} // Update range when user selects
          withPortal                       // Displays picker in a portal (better for modals)
          placeholderText="Select your dates" // Placeholder text
          shouldCloseOnSelect={false}      // Keep open after selecting a date
          isClearable                      // Allow user to clear selection
          minDate={today}                  // Prevent selection of past dates
        />
      </div>

      {/* Total price display shown only if both dates are selected */}
      {startDate && endDate && (
        <p className="total-price">
          {totalNights} night{totalNights > 1 ? 's' : ''} × {treehouse.priceByNight} $ = <strong>{totalPrice} $</strong>
        </p>
      )}

      {/* Submit button, disabled unless both dates are selected */}
      <button type="submit" className="button" disabled={!startDate || !endDate}>
        Confirm Booking
      </button>
    </form>
  );
};


export default BookingForm;