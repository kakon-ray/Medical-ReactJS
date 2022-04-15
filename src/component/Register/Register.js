import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import { sendEmailVerification } from "firebase/auth";
import Loding from "../Loding/Loding";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const conformpasswordRef = useRef("");

  // react firebase email and password usenign create account hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // update profile and setname
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const createAccount = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const conformPassword = conformpasswordRef.current.value;

    if (password !== conformPassword) {
      toast.error("Two Password does not match");
      return;
    }

    await createUserWithEmailAndPassword(email, password).then((res) => {
      toast.success("Registation Successfull");
    });
    await updateProfile({ displayName: name });
  };

  if (loading || updating) {
    <Loding />;
  }

  return (
    <div className="mt-4">
      <ToastContainer position="top-center" reverseOrder={false} />
      <div className="form-responsive mx-auto">
        <Card className="mx-auto rounded-0">
          <Card.Body className="p-5">
            <Form onSubmit={createAccount}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  className="rounded-0"
                  ref={nameRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-0"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="rounded-0"
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNewPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Conform Password"
                  className="rounded-0"
                  ref={conformpasswordRef}
                />
              </Form.Group>

              <Button className="btn btn-info w-100" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="text-info " style={{ cursor: "pointer" }}>
                Login
              </span>
            </Link>
          </p>
        </Card>
        <SocialLogin />
      </div>
    </div>
  );
}