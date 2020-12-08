import React from "react";
import Button from "@material-ui/core/Button";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Grid from "@material-ui/core/Grid";

const LanguageBar = ({ language }) => {
  return (
    <ScopedCssBaseline>
      <Grid container>
        <Grid item xs={6}>
          <Button
            className="m-1"
            style={{
              background: "#e6f0ff",
              textTransform: "none",
              outline: "0",
            }}
          >
            {language}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <div className="d-flex flex-row-reverse">
            <div className="p-1 m-2">25%</div>
            <div className="p-1 m-2">10Posts</div>
          </div>
        </Grid>
      </Grid>
    </ScopedCssBaseline>
  );
};

export default LanguageBar;
