"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [router, session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getData = async () => {
    let u = await fetchuser(session.user.name);
    setFormData(u);
  };

  const handleSubmit = async (e) => {
    update();
    await updateProfile(formData, session.user.name);
    toast('Profile Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col justify-center items-center w-full mt-16 px-6">
        <h2 className="text-center font-bold text-3xl mb-8">
          Welcome to your Dashboard
        </h2>
        <form className="inputs flex flex-col w-full md:w-1/2" action={handleSubmit}>
          <div className="flex flex-col">
            {[
              "name",
              "email",
              "username",
              "profilepic",
              "coverpic",
              "razorpayId",
              "razorpaySecret",
            ].map((field) => (
              <div key={field} className="flex flex-col gap-2 mb-4">
                <label className="font-bold text-left">
                  {field.replace(/([A-Z])/g, " $1").toUpperCase()}
                </label>
                <input
                  className="p-2 rounded bg-slate-700 text-white"
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-600 rounded-lg p-2 mt-4 font-bold text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
