import { useContext, useState } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';

import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as FaIcons from 'react-icons/fa';
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const [Menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Cameras
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/managementUser/Cameras"
                  startIcon={<CameraAltIcon />}
                >
                  Cameras
                </Button>
              </ListItem>
              <ListItem
                component="div"
                onClick={() => {
                  setMenu(!Menu);
                }}
              >
                <div className="d-flex flex-column bd-highlight mb-3">
                  <div className="p-2 bd-highlight">
                    <div
                      className="d-flex justify-content-between d-flex align-items-center"
                      style={{ width: '188%' }}
                    >
                      <>
                        <Button
                          disableRipple
                          component={RouterLink}
                          onClick={closeSidebar}
                          to="/managementUser/profile/settings"
                          startIcon={<CameraAltIcon />}
                        >
                          Views
                        </Button>
                      </>
                      <>
                        {Menu ? (
                          <FaIcons.FaAngleUp className="d-flex justify-content-end" />
                        ) : (
                          <FaIcons.FaAngleDown className="d-flex justify-content-end" />
                        )}
                      </>
                    </div>
                  </div>
                  <div className="p-2 bd-highlight">
                    {Menu && (
                      <List className=" d-flex flex-column bd-highlight px-0 ">
                        <div className="d-flex flex-column">
                          <div className="p-2">
                            <Button
                              disableRipple
                              component={RouterLink}
                              onClick={closeSidebar}
                              to="/managementUser/View2"
                              startIcon={<CameraAltIcon />}
                            >
                              2
                            </Button>
                          </div>
                          <div className="p-2">
                            {' '}
                            <Button
                              disableRipple
                              component={RouterLink}
                              onClick={closeSidebar}
                              to="/managementUser/View4"
                              startIcon={<CameraAltIcon />}
                            >
                              4
                            </Button>
                          </div>
                          <div className="p-2">
                            {' '}
                            <Button
                              disableRipple
                              component={RouterLink}
                              onClick={closeSidebar}
                              to="/managementUser/View6"
                              startIcon={<CameraAltIcon />}
                            >
                              6
                            </Button>
                          </div>
                        </div>
                      </List>
                    )}
                  </div>
                </div>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/managementUser/Personalise"
                  startIcon={<CameraAltIcon />}
                >
                  Personalisé
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Emails
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/managementUser/TransactionsUser"
                  startIcon={<NotificationsIcon />}
                >
                  Liste des emails
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Profile
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/managementUser/profile/details"
                  startIcon={<AccountCircleTwoToneIcon />}
                >
                  Profile
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
