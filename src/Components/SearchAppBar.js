import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// import MenuIcon from '@material-ui/icons/Menu';
// import SearchBar from "./SearchBar"
import useStyles from "./Style";
import InputBase from "@material-ui/core/InputBase";

export default function SearchAppBar(props) {
  const { onSubmit, onChange, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <div className={classes.search}>
              <form onSubmit={onSubmit}>
                <button className="searchbutten">
                  <b style={{ color: "orange" }}> c</b>
                  <b style={{ color: "white" }}> l</b>
                  <b style={{ color: "yellow" }}> i</b>
                  <b style={{ color: "yellow" }}> c</b>
                  <b style={{ color: "red" }}> k</b>
                  <b style={{ color: "green" }}> M</b>
                  <b style={{ color: "purple" }}> e</b>
                </button>
                <InputBase
                  value={value}
                  onChange={onChange}
                  placeholder="....Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </form>
            </div>
          </IconButton>

          <Typography className={classes.title} variant="h6" Wrap>
            <b style={{ color: "orange" }}> L</b>
            <b style={{ color: "white" }}> a</b>
            <b style={{ color: "yellow" }}> A</b>
            <b style={{ color: "yellow" }}> Z</b>
            <b style={{ color: "red" }}> y</b>
            <b style={{ color: "green" }}> z</b>
            <b style={{ color: "purple" }}> A</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
