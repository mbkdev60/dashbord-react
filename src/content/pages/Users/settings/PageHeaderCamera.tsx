import { Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Modal from 'react-bootstrap/Modal';
import Switch from 'react-switch';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import ChatIcon from '@mui/icons-material/Chat';
import Swal from 'sweetalert2';

export default function PageHeaderCamera() {
  const [update, setpdate] = useState(true);
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [picture, setPicture] = useState('');
  const user = {
    name: prenom + '' + name,
    avatar: picture
  };
  const [listUser, setListUser] = useState<UserType[]>([]);
  const [cam1, setcam1] = useState<boolean>();
  const [cam2, setcam2] = useState<boolean>();
  const [cam3, setcam3] = useState<boolean>();
  const [cam4, setcam4] = useState<boolean>();
  const [cam5, setcam5] = useState<boolean>();
  const [cam6, setcam6] = useState<boolean>();
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);

  const [showSavePic, setShowSavePic] = useState(false);
  const handleCloseSavePic = () => setShowSavePic(false);
  const handleShowSavePic = () => setShowSavePic(true);

  const [showReconnaissance, setShowReconnaissance] = useState(false);
  const handleCloseReconnaissance = () => setShowReconnaissance(false);
  const handleShowReconnaissance = () => setShowReconnaissance(true);

  const [showChat, setShowChat] = useState(false);
  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => setShowChat(true);
  const [cam, setcam] = useState<any>({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false
  });
  window.localStorage.setItem('myObject', JSON.stringify(cam));
  const [id, setId] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('idUser')))
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const results = [];
  listUser.forEach((element: any, index: any) => {
    results.push({ value: element.nom, label: element.prenom });
  });

  async function Camera1() {
    try {
      if (cam1) {
        setcam1(false);
        cam.c1 = false;

        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/stop1`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam1(true);
        cam.c1 = true;

        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/start1`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Camera2() {
    try {
      if (cam2) {
        setcam2(false);
        cam.c2 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/stop2`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam2(true);
        cam.c2 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/start2`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Camera3() {
    try {
      if (cam3) {
        setcam3(false);
        cam.c3 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/stop3`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam3(true);
        cam.c3 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start3`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Camera4() {
    try {
      console.log('start ');
      console.log(cam4);
      if (cam4) {
        setcam4(false);
        cam.c4 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/stop4`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam4(true);
        cam.c4 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start4`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Camera5() {
    try {
      if (cam5) {
        setcam5(false);
        cam.c5 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/stop5`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam5(true);
        cam.c5 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start5`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Camera6() {
    try {
      if (cam6) {
        setcam6(false);
        cam.c6 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/stop6`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
            Swal.fire({
              title: "Vous avez arretez l'enregistrement de camera6",
              icon: 'success',
              confirmButtonText: 'Ok'
            });
          });
      } else {
        setcam6(true);
        cam.c6 = true;
        setcam(cam);

        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start6`)
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic1() {
    try {
      await fetch(`http://localhost:5002/Capture1`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic2() {
    try {
      await fetch(`http://localhost:5002/Capture2`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic3() {
    try {
      await fetch(`http://localhost:5002/Capture3`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic4() {
    try {
      await fetch(`http://localhost:5002/Capture4`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic5() {
    try {
      await fetch(`http://localhost:5002/Capture5`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function SavePic6() {
    try {
      await fetch(`http://localhost:5002/Capture6`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function afficherUtilisateurs() {
    try {
      await fetch(`http://192.168.2.31:5000/api/v1/Users?id=${id}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => response.json())
        .then((data) => {
          setListUser(data.data);
        });
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    let nameUser: any = localStorage.getItem('nom');
    let prenomUser: any = localStorage.getItem('prenom');
    let pictureUser: any = localStorage.getItem('image');
    setName(nameUser);
    setPrenom(prenomUser);
    setPicture(pictureUser);
    setpdate(false);
    let newObject: any = window.localStorage.getItem('cam');
    const data = JSON.parse(newObject);

    if (newObject) {
      setcam1(data.c1);
      setcam2(data.c2);
      setcam3(data.c3);
      setcam4(data.c4);
      setcam5(data.c5);
      setcam6(data.c6);
      setcam(data);
    }
    afficherUtilisateurs();
  }, [name, prenom, update, picture]);
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <div className="p-2">
          <Typography variant="h3" component="h3" gutterBottom>
            Cameras
          </Typography>
        </div>
        <div className="p-2">
          <Typography variant="subtitle2">
            {user.name}, Voici toutes les cameras. Vous pouvez les regardez une
            par une.
          </Typography>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <IconButton aria-label="add to favorites">
          <SaveIcon
            onClick={() => {
              handleShowSave();
            }}
            style={{ color: '#5f72ff' }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <AddAPhotoIcon
            onClick={() => {
              handleShowSavePic();
            }}
            style={{ color: '#5f72ff' }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FaceRetouchingNaturalIcon
            onClick={() => {
              handleShowReconnaissance();
            }}
            style={{ color: '#5f72ff' }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ChatIcon
            onClick={() => {
              handleShowChat();
            }}
            style={{ color: '#5f72ff' }}
          />
        </IconButton>
        <Modal
          show={showSave}
          onHide={handleCloseSave}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enregistrement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="px-2 container d-flex ">
              <div className="d-flex flex-column col-12">
                <div className="p-2">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <span>Camera1</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          Camera1();
                          if (!cam1) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam1",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam1",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                        }}
                        checked={cam1}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera2</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          if (!cam2) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam2",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam2",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                          Camera2();
                        }}
                        checked={cam2}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera3</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          if (!cam3) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam3",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam3",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                          Camera3();
                        }}
                        checked={cam3}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera4</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          if (!cam4) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam4",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam4",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                          Camera4();
                        }}
                        checked={cam4}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera5</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          if (!cam5) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam5",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam5",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                          Camera5();
                        }}
                        checked={cam5}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera6</span>
                    </div>
                    <div>
                      <Switch
                        onChange={() => {
                          if (!cam6) {
                            Swal.fire({
                              title:
                                "Vous avez commencé l'enregistrement de la cam6",
                              icon: 'success',
                              confirmButtonText: 'Ok'
                            });
                          } else {
                            Swal.fire({
                              title:
                                "Vous avez arretez l'enregistrement de la cam6",
                              icon: 'error',
                              confirmButtonText: 'Ok'
                            });
                          }
                          Camera6();
                        }}
                        checked={cam6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={handleCloseSave}>
              Annuler
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showSavePic}
          onHide={handleCloseSavePic}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Capture d'une photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="px-2 container d-flex ">
              <div className="d-flex flex-column col-12">
                <div className="p-2">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <span>Camera1</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam1',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic1();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera2</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam2',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic2();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 2
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera3</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam3',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic3();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera4</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam4',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic4();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 4
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera5</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam5',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic5();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 5
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Camera6</span>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          Swal.fire({
                            title: 'Vous avez pris une image de la cam6',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          SavePic6();
                        }}
                        variant="contained"
                      >
                        {' '}
                        Cam 6
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={handleCloseSavePic}>
              Annuler
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showReconnaissance}
          onHide={handleCloseReconnaissance}
          backdrop="static"
          keyboard={false}
          size="lg"
          style={{ width: '100%' }}
          className=" d-flex justify-content-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Reconnaissance Faciale </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              style={{ width: '750px', height: '730px' }}
              src="http://localhost:5004/"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={handleCloseReconnaissance}>
              Annuler
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showChat}
          onHide={handleCloseChat}
          backdrop="static"
          keyboard={false}
          size="lg"
          style={{ width: '1500px' }}
          className=" d-flex justify-content-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Messenger </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="row">
              <div className="col-sm-4">
                <Select
                  name="User"
                  options={results}
                  className="basic-multi-select mt-3 mx-2"
                  classNamePrefix="select"
                  onChange={(e: any) => {
                    console.log(e.label);
                  }}
                />
              </div>
              <div className="col-sm-8"> */}
            <iframe
              style={{ width: '285px', height: '618px' }}
              src="http://localhost:3005/"
            ></iframe>
            {/* </div>
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={handleCloseChat}>
              fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
