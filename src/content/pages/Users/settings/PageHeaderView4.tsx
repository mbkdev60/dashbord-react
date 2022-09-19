import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import Switch from 'react-switch';
import Swal from 'sweetalert2';
export default function PageHeaderView4() {
  const [update, setpdate] = useState(true);
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [picture, setPicture] = useState('');
  const user = {
    name: prenom + '' + name,
    avatar: picture
  };
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);
  const [cam1, setcam1] = useState<boolean>();
  const [cam2, setcam2] = useState<boolean>();
  const [cam3, setcam3] = useState<boolean>();
  const [cam4, setcam4] = useState<boolean>();
  const [cam5, setcam5] = useState<boolean>();
  const [cam6, setcam6] = useState<boolean>();

  const [cam, setcam] = useState<any>();
  // window.localStorage.setItem('myObject', JSON.stringify(cam));
  async function Camera1() {
    try {
      if (cam1) {
        setcam1(false);
        cam.c1 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/stop1`, {})
          .then((response) => response.json())
          .then((data: any) => {});
      } else {
        setcam1(true);
        cam.c1 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/start1`, {})
          .then((response) => response.json())
          .then((data: any) => {});
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

        await fetch(`http://localhost:5001/stop2`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam2(true);
        cam.c2 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));

        await fetch(`http://localhost:5001/start2`, {})
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

        await fetch(`http://localhost:5001/stop3`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam3(true);
        cam.c3 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start3`, {})
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
      if (cam4) {
        setcam4(false);
        cam.c4 = false;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/stop4`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam4(true);
        cam.c4 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start4`, {})
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

        await fetch(`http://localhost:5001/stop5`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam5(true);
        cam.c5 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start5`, {})
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

        await fetch(`http://localhost:5001/start6`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      } else {
        setcam6(true);
        cam.c6 = true;
        setcam(cam);
        localStorage.setItem('cam', JSON.stringify(cam));
        await fetch(`http://localhost:5001/start6`, {})
          .then((response) => response.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    } catch (error) {
      console.log(error);
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
    window.localStorage.setItem('myObject', JSON.stringify(cam));
  }, [name, prenom, update, picture]);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <div className="p-2">
          <Typography variant="h3" component="h3" gutterBottom>
            Vue par 4
          </Typography>
        </div>
        <div className="p-2">
          <Typography variant="subtitle2">
            {user.name}, Vous pouvez regarder toutes les cameras par quatre
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
                                "Vous avez commencez l'enregistrement de la cam1",
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
                                "Vous avez commencez l'enregistrement de la cam2",
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
                                "Vous avez commencez l'enregistrement de la cam3",
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
                                "Vous avez commencez l'enregistrement de la cam4",
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
                                "Vous avez commencez l'enregistrement de la cam5",
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
                                "Vous avez commencez l'enregistrement de la cam6",
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
      </div>
    </div>
  );
}
