import { useState } from "react";
import Ticket from "./Ticket";
import { format } from "date-fns";

export default function BookingModal({ date, tForm }) {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Please complete form to select your booking!
          </h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              placeholder="Type here"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Complete Booking"
              className="btn btn-outline w-60 max-w-xs"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-outline btn-xs">
              close !
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
