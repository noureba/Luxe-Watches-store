import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function Categories() {
  return (
    <div className="my-20 md:mx-5 mr-10">
      <div className="flex gap-3 justify-start items-buttom mb-4">
        <h3 className="font-bold text-3xl">Add product</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[100px] mb-2"></span>
      </div>
      <div>
        <div className="flex flex-wrap gap-5">
          <div className="md:w-[50%] w-full">
            <form className="flex flex-col gap-5" action="">
              <div className="flex flex-col">
                <label htmlFor="title">Categorie Name *</label>
                <input
                  className="border rounded px-2 py-1"
                  type="text"
                  name="title"
                  required
                />
              </div>
              <div className="text-center">
                <input
                  className="px-5 py-2 bg-[#8ECAE6] rounded "
                  type="submit"
                  value="Add Categorie"
                />
              </div>
            </form>
          </div>
          <div className="md:w-[45%] w-full">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300">
                    Categories
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Others</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">test</td>
                  <td className="flex justify-around items-center gap-2 px-2 py-2 border border-gray-300">
                    <button className="flex justify-around items-center bg-red-600 text-white px-2 py-1 rounded gap-2">
                      <i>
                        <MdDeleteOutline className="text-white" />
                      </i>
                      <p className="text-white">Delete</p>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
