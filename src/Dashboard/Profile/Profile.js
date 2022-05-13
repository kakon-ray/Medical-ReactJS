import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Profile.css";
import img from "../../assets/img/user.png";
import DoctorArtical from "../../component/Doctor/DoctorArtical";

const Profile = () => {
  const [userValue, setUserValue] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getUserValue = async () => {
      const url = `http://localhost:5000/doctorprofile?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUserValue(data));
      try {
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    getUserValue();
  }, [user]);

  console.log(userValue[0]);
  return (
    <Card>
      <img
        src={user.photoURL ? user.photoURL : userValue[0]?.img}
        className="img-fluid profile-img"
        style={{ height: "100px", width: "100px", borderRadius: "50px" }}
        alt=""
      />

      <Card.Header>
        <img
          src="https://static.dw.com/image/50927628_101.jpg"
          className="img-fluid"
          style={{ height: "250px", width: "100%" }}
          alt=""
        />
      </Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-md-6">
            <Button variant="info" className="mb-3 w-100">
              Add Your Personal Information
            </Button>
            <Card>
              <Card.Img variant="top" src={userValue[0]?.img} />
              <Card.Body className="text-center">
                <h1>{userValue[0]?.title}</h1>
                <h4>{userValue[0]?.department}</h4>
                <p>{userValue[0]?.email}</p>
                <p>{userValue[0]?.visit}</p>
                <p>{userValue[0]?.time}</p>
                <Card.Text>{userValue[0]?.des}</Card.Text>
                <Button variant="dark" className="m-1">
                  Update Profile
                </Button>
                <Button variant="dark" className="m-1">
                  Delete Profile
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Button variant="info" className="mb-3 w-100">
              Create blog and help people
            </Button>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Profile;