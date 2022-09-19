import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeaderPersonalisé from './PageHeaderPersonalisé';
import Select from 'react-select';
import { Container, Card, CardHeader, CardContent } from '@mui/material';

export default function Personalise() {
  const options = [
    { value: 'camera1', label: 'Camera1' },
    { value: 'camera2', label: 'Camera2' },
    { value: 'camera3', label: 'Camera3' },
    { value: 'camera4', label: 'Camera4' },
    { value: 'camera5', label: 'Camera5' },
    { value: 'camera6', label: 'Camera6' }
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [un, setUn] = React.useState<boolean>(false);
  // console.log(selectedOptions.length);
  React.useEffect(() => {
    if (selectedOptions.length > 3) {
      setUn(true);
    } else {
      setUn(false);
    }
    // console.log(un);
  }, [selectedOptions]);
  return (
    <>
      <Helmet>
        <title>Vue personalisé</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderPersonalisé />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <div className="d-flex justify-content-between">
            <CardHeader
              titleTypographyProps={{ variant: 'h4' }}
              subheaderTypographyProps={{ variant: 'subtitle2' }}
              title="Cameras"
            />

            <Select
              isMulti
              name="cameras"
              options={options}
              className="basic-multi-select mt-3 mx-2"
              classNamePrefix="select"
              onChange={(e: any) => {
                setSelectedOptions(e);
              }}
            />
          </div>
          <CardContent style={{ height: '575px' }}>
            <div className="row">
              {selectedOptions.map((element: any, key: number) => {
                return (
                  <div className="col-sm my-2" key={key}>
                    <h6>{element.label}</h6>
                    <iframe
                      style={{ width: '500px', height: '500px' }}
                      src={`http://192.168.2.31:8080/${element.value}.html`}
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
