import React from "react";

function AddReview() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold my-10">Add Review</h1>
        <div className="border border-gray-100 shadow-md p-4 rounded">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="border border-gray-200 p-2 w-full rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Review</label>
              <textarea className="border border-gray-200 p-2 w-full rounded mt-1"></textarea>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded">
              Add Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddReview;
