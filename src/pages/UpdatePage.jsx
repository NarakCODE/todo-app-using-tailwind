import React, { useState, useEffect } from "react";
import { Input, Typography, Button, Card } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../slices/userSlice";

const UpdatePage = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter((user) => user.id == id);
    const { name, email } = existingUser[0];

    const [formData, setFormData] = useState({
        name: name,
        email: email,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            toast.error("Please fill all the fields");
            return;
        }

        dispatch(
            updateUser({ id, name: formData.name, email: formData.email })
        );
        toast.success("User updated successfully!");
        navigate("/");
    };

    return (
        <Card className="w-full max-w-lg mx-auto p-4 mt-20">
            <Typography variant="h3" className="mb-6 text-center">
                Update User
            </Typography>
            <form className="space-y-2" onSubmit={handleSubmit}>
                <Typography variant="h6" color="blue-gray" className="pt-2">
                    User Name
                </Typography>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Username"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    size="lg"
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "min-w-[100px]" }}
                    required
                />
                <Typography variant="h6" color="blue-gray" className="pt-2">
                    Email Address
                </Typography>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    size="lg"
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "min-w-[100px]" }}
                    required
                />
                <div className="flex items-center justify-between space-x-2 pt-4">
                    <Link to={"/"} className="w-full inline-block">
                        <Button variant="outlined" className="w-full">
                            Back
                        </Button>
                    </Link>

                    <Button variant="gradient" className="w-full" type="submit">
                        Update
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default UpdatePage;
