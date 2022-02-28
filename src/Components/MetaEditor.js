import React from 'react';
import { Helmet } from 'react-helmet';

function MetaEditor() {
    return (
      <div className="App">
        <Helmet>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
          <link rel="stylesheet" type="text/css" href="ConnotateEngineering.css"></link>
          <title>Glentokopos</title>
          <meta name="description" content="Evives" />
          <meta name="theme-color" content="" />
        </Helmet>
      </div>
    );
  }
  
  export default MetaEditor;