import React from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Card, Typography } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slices/userSlice";
import { toast } from "react-toastify";

const TABLE_HEAD = ["ID", "Name", "Email", ""];

const HomePage = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
        toast.success("User deleted successfully!");
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 ">
            <Typography variant="h3" className="my-10">
                User List : {users.length}
            </Typography>

            <div className="mb-4 flex justify-end">
                <Link to="/create">
                    <Button
                        variant="gradient"
                        className="shadow-lg shadow-blue-gray-500/40"
                    >
                        Add User
                    </Button>
                </Link>
            </div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, name, email }, index) => {
                            const isLast = index === users.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Link to={`/update/${id}`}>
                                            <IconButton variant="text">
                                                <Edit2 size={20} />
                                            </IconButton>
                                        </Link>

                                        <IconButton
                                            variant="text"
                                            onClick={() => handleDelete(id)}
                                        >
                                            <Trash2 size={20} />
                                        </IconButton>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default HomePage;
